import Link from "next/link";
import { CartContext } from "../../contexts/CartContext";
import { useContext, useState } from "react";
import {
  Container,
  Description,
  Region,
  WineFeatures,
  PriceMember,
  PriceNonMember,
  SommelierComment,
  NoProducts,
} from "./styles";
import Image from "next/image";
import { StarGenerator } from "../Star-Generator";

interface iItem {
priceMember: string,
image: string,
name: string
quantity: number,
}

export default function ProductArea() {
  const [addCart, setAddCart] = useState(0);
  const { cart, product, setCart }: any = useContext(CartContext);

  const setActCart = async (item: iItem) => {
    const actualCart = JSON.parse(localStorage.getItem("cart"));
    setCart([...cart, item]);
    localStorage.setItem("cart", JSON.stringify([...actualCart, item]));
  };

  if(!product) {
    return <NoProducts>Não há produtos selecionados!</NoProducts>
  }


  return (
    <Container>
      <Image src={product.image} alt="" width={381} height={579} />
      <Description>
        <Region>
          <h4>
            Vinho {">"} {product.country}&nbsp;
          </h4>{" "}
          <h3>
            {" "}
            {">"} {product.region}
          </h3>
        </Region>
        <h2>{product.name}</h2>
        <WineFeatures>
          <Image src={product.flag} width={16} height={16} alt="flag" />
          <h4>
            {product.country} &nbsp; {product.classification} &nbsp;{" "}
            {product.type} &nbsp; {product.volume}
            <StarGenerator stars={product.rating} /> ({product.rating})
          </h4>
        </WineFeatures>
        <PriceMember>
          <h4>R$</h4>
          <h6>{product.priceMember.toFixed(2).replace(".", ",")}</h6>
        </PriceMember>
        <PriceNonMember>
          <h4>
            NÃO SÓCIO R${product.priceNonMember.toFixed(2).replace(".", ",")}
            /UN.
          </h4>
        </PriceNonMember>
        <h4>Comentário do Sommelier</h4>
        <SommelierComment>
          <h4>{product.sommelierComment}</h4>
        </SommelierComment>
        <h5
          onClick={() =>
            setActCart({
              priceMember: product.priceMember,
              image: product.image,
              name: product.name,
              quantity: 1,
            })
          }
        >
          <button onClick={() => setAddCart(addCart > 0 ? addCart - 1 : 0)}>-</button>
          <p>{addCart}</p>
          <button onClick={() => setAddCart(addCart + 1)}>+</button>Adicionar
        </h5>
      </Description>
    </Container>
  );
}
