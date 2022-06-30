import { useEffect, useState } from "react"
import Image from "next/image";
import { Container, Card, CardItem, OldPrice } from "./styles"
import { buscaVinhos } from "../../services/utils";

export function CardsArea () {
    const [ wines, setWines ] = useState([]);
    useEffect(() => {
        buscaVinhos('1').then(({items}) => setWines(items))
      }, []);
    return (
        <Container>
        <h1>Produtos encontrados</h1>
        <div>
        <Card>
        {wines && (
            wines.map((item) => {
                return (
                    <CardItem key={item.id}>
                    <Image src={item.image} alt="" width={148.57} height={178.13} />
                    <p>{item.name}</p>
                    <OldPrice>
                    <h4>R$ {item.price}0</h4>
                    <h5>{item.discount}% OFF</h5>
                    </OldPrice>
                    </CardItem>
                )
            })
        )}
        </Card>
        </div>
        </Container>
    )
}