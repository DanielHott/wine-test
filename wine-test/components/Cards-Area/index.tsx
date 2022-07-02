import { useEffect, useState, useContext } from "react";
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
  } = useContext(CartContext);
  useEffect(() => {
    if (!searchMode) {
      searchSomeWines(actualPage).then(({ items }) => setWines(items));
      searchAllWines().then(({ items }) => setAllWines(items));
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

  return (
    <Container>
      <h1>{allWines.length} produtos encontrados</h1>
      <Card>
        {wines &&
          wines.map((item) => {
            const value = item.priceMember.toFixed(2).replace(".", ",");
            return (
              <ButtonCard key={item.id}>
                <CardItem>
                  <Image src={item.image} alt="" width={128} height={189} />
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
                <button onClick={() => setCart([...cart, item])}>
                  Adicionar
                </button>
              </ButtonCard>
            );
          })}
      </Card>
    </Container>
  );
}
