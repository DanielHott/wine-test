import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Main } from "./styles";
import {
  searchAllWinesByPrice,
  searchSomeWines,
  searchAllWines,
} from "../../services/utils";

export function Search() {
  const {
    name,
    setName,
    searchMode,
    setSearchMode,
    setWines,
    setAllWines,
  }: any = useContext(CartContext);
  const searchPrice = (minPrice: number, maxPrice: number) => {
    searchAllWinesByPrice(name, minPrice, maxPrice).then(({ items }) => {
      const filtered = items.filter(
        ({ priceMember }) => priceMember > minPrice && priceMember < maxPrice
      );
      setWines(filtered);
      setAllWines(filtered);
    });
  };

  const removeFilter = () => {
    searchSomeWines("1").then(({ items }) => setWines(items));
    searchAllWines().then(({ items }) => setAllWines(items));
  };
  return (
    <Main>
      <h3>Refine sua busca</h3>
      <h5>Por preço</h5>
      <label>
        <input type="radio" name="busca" onClick={() => removeFilter()} />
        Sem filtros
      </label>
      <label>
        <input type="radio" name="busca" onClick={() => searchPrice(0, 40)} />
        Até R$40
      </label>
      <label>
        <input type="radio" name="busca" onClick={() => searchPrice(40, 60)} />
        R$40 A R$60
      </label>
      <label>
        <input
          type="radio"
          name="busca"
          onClick={() => searchPrice(100, 200)}
        />
        R$100 A R$200
      </label>
      <label>
        <input
          type="radio"
          name="busca"
          onClick={() => searchPrice(200, 500)}
        />
        R$200 A R$500
      </label>
      <label>
        <input
          type="radio"
          name="busca"
          onClick={() => searchPrice(500, 999999)}
        />
        Acima de R$500
      </label>
    </Main>
  );
}
