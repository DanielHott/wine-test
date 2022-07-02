import {
  Headers,
  Titles,
  Profile,
  WineBox,
  CircleWine,
  Line,
  CartArea,
  CartHidden,
} from "./styles";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import Image from "next/image";

export function Header() {
  const { setName, setSearchMode, cart, setCart }: any =
    useContext(CartContext);
  const [search, setSearch] = useState(false);
  const [actName, setActName] = useState("");
  const [localCart, setLocalCart] = useState([]);
  const [isHidden, setHidden] = useState(false);
  const canSearch = () => {
    setName(actName);
    setSearchMode(true);
  };
  useEffect(() => {
    const findCart = JSON.parse(localStorage.getItem("cart"));
    if (!findCart) localStorage.setItem("cart", "[]");
    setLocalCart(JSON.parse(localStorage.getItem("cart")));
  }, [cart]);

  const removeItens = (item) => {
    const newCart = localCart.filter((itens) => itens.name !== item.name);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  return (
    <Headers>
      <Image src="/assets/Header/black.svg" width={100} height={28} alt="" />
      <Titles>
        <h1>Clube</h1>
        <h2>Loja</h2>
        <h1>Produtores</h1>
        <h1>Ofertas</h1>
        <h1>Eventos</h1>
      </Titles>
      <Image
        src="/assets/Header/Busca.svg"
        width={56}
        height={56}
        alt=""
        onClick={() => setSearch(search === true ? false : true)}
      />
      {search && (
        <>
          <input
            type="text"
            placeholder="Pesquise seu vinho favorito"
            onChange={(name) => setActName(`${name.target.value}`)}
          ></input>
          <button onClick={() => canSearch()}>Pesquisar</button>
        </>
      )}
      <Profile>
        <Image
          src="/assets/Header/Vector.svg"
          width={36.83}
          height={42.65}
          alt=""
        />
        <a>
          <Image
            src="/assets/Header/Ellipse 1.svg"
            width={65}
            height={65}
            alt=""
          />
        </a>
      </Profile>
      <CircleWine>
        <WineBox onClick={() => setHidden(isHidden === false ? true : false)}>
          <Image
            src="/assets/Header/Bitmap.svg"
            width={40}
            height={56}
            alt=""
          />
          <p>{localCart.length}</p>
        </WineBox>
        <CartArea isHidden={isHidden}>
          {localCart.length !== 0 ? (
            localCart.map((item, index) => {
              return (
                <CartHidden key={item.id}>
                  <Image src={item.image} width={100} height={150} alt="" />
                  <h5>{item.name}</h5>
                  <p>R${item.priceMember}</p>
                  <button onClick={() => removeItens(item)}>Remover</button>
                  <hr />
                </CartHidden>
              );
            })
          ) : (
            <h1>Você ainda não adicionou nada :(</h1>
          )}
        </CartArea>
      </CircleWine>
      <Line>
        <Image src="/assets/Header/Label.svg" width={35} height={2} alt="" />
      </Line>
    </Headers>
  );
}
