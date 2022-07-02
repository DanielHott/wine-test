import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { CartContext } from "../../contexts/CartContext";
import Image from "next/image";
import {
  Container,
  Card,
  CardItem,
  OldPrice,
  MemberPrice,
  NormalPrice,
  ButtonCard,
  Loading,
} from "./styles";
import {
  searchSomeWines,
  searchAllWines,
  searchWinesByName,
} from "../../services/utils";

export function CardsArea() {
  const {
    name,
    setName,
    searchMode,
    setSearchMode,
    wines,
    setWines,
    allWines,
    setAllWines,
    actualPage,
    setActualPage,
    cart,
    setCart,
    product,
    setProduct,
  }: any = useContext(CartContext);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!searchMode) {
      searchSomeWines(actualPage).then(({ items }) => setWines(items));
      searchAllWines().then(({ items }) => {
        setAllWines(items);
        setLoading(false);
      });
    }
  }, [actualPage]);

  if (searchMode) {
    searchWinesByName(name, actualPage).then(({ items }) => {
      setWines(items);
      setAllWines(items);
    });
    setSearchMode(false);
    if (name === "") searchAllWines().then(({ items }) => setAllWines(items));
  }

  const setActCart = async (item) => {
    const actualCart = JSON.parse(localStorage.getItem("cart"));
    setCart([...cart, item]);
    localStorage.setItem("cart", JSON.stringify([...actualCart, item]));
  };

  if (loading) return <Loading>Carregando...</Loading>;

  return (
    <Container>
      <h1>{allWines.length} produtos encontrados</h1>
      <Card>
        {wines &&
          wines.map((item) => {
            const value = item.priceMember.toFixed(2).replace(".", ",");
            return (
              <ButtonCard key={item.id}>
                <Link href="/product">
                  <CardItem onClick={() => setProduct(item)}>
                    <Image
                      src={item.image}
                      alt="wine-bottle"
                      width={128}
                      height={189}
                    />
                    <p>{item.name}</p>
                    <OldPrice>
                      <h4>R$ {item.price.toFixed(2).replace(".", ",")}</h4>
                      <h5>{item.discount}% OFF</h5>
                    </OldPrice>
                    <MemberPrice>
                      <h5>SÓCIO WINE</h5>
                      <h6>R$</h6>
                      <h4>{value}</h4>
                      <h6>{}</h6>
                    </MemberPrice>
                    <NormalPrice>
                      <h5>
                        NÃO SÓCIO R${" "}
                        {item.priceNonMember.toFixed(2).replace(".", ",")}
                      </h5>
                    </NormalPrice>
                  </CardItem>
                </Link>
                <button
                  onClick={() =>
                    setActCart({
                      priceMember: item.priceMember,
                      image: item.image,
                      name: item.name,
                      quantity: 1,
                    })
                  }
                >
                  Adicionar
                </button>
              </ButtonCard>
            );
          })}
      </Card>
    </Container>
  );
}
