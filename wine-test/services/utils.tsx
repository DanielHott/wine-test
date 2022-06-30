import Axios from "axios";

export const buscaVinhos = (page: string) => {
  const resultado = Axios.get(`https://wine-back-test.herokuapp.com/products?page=${page}&limit=9`).then((resp) => resp.data);
  return resultado;
};