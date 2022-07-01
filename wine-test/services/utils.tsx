import Axios from "axios";

export const searchSomeWines = (page: string) => {
  const resultado = Axios.get(`https://wine-back-test.herokuapp.com/products?page=${page}&limit=9`).then((resp) => resp.data);
  return resultado;
};

export const searchAllWines = () => {
  const resultado = Axios.get(`https://wine-back-test.herokuapp.com/products`).then((resp) => resp.data);
  return resultado;
};