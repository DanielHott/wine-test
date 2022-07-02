import { Header } from "../components/Header/index";
import Link from "next/link";
import { BackButton, ProductPage } from "../styles/product";
import ProductArea from "../components/Product-Area";

export default function Product() {
  return (
    <div>
      <Header />
      <ProductPage>
        <Link href="/">
          <BackButton>
            <h1>{"<"}</h1>
            <p>Voltar</p>
          </BackButton>
        </Link>
        <ProductArea />
      </ProductPage>
    </div>
  );
}
