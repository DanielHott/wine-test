import { useEffect, useState } from "react"
import Image from "next/image";
import { Container, Card, CardItem, OldPrice, MemberPrice, NormalPrice, ButtonCard } from "./styles"
import { searchSomeWines, searchAllWines } from "../../services/utils";

export function CardsArea (page: string) {
    const [ wines, setWines ] = useState([]);
    const [ allWines, setAllWines ] = useState([]);
    useEffect(() => {
        searchSomeWines(page[0]).then(({items}) => setWines(items))
        searchAllWines().then(({items}) => setAllWines(items))
      }, [page]);
    return (
        <Container>
        <h1>{allWines.length} produtos encontrados</h1>
        <Card>
        {wines && (
            wines.map((item) => {
                return (
                    <ButtonCard key={item.id}>
                    <CardItem>
                    <Image src={item.image} alt="" width={128} height={189} />
                    <p>{item.name}</p>
                    <OldPrice>
                    <h4>R$ {item.price}0</h4>
                    <h5>{item.discount}% OFF</h5>
                    </OldPrice>
                    <MemberPrice>
                    <h5>SÓCIO WINE</h5>
                    <h6>R$</h6><h4>30</h4><h6>,00</h6>
                    </MemberPrice>
                    <NormalPrice>
                    <h5>NÃO SÓCIO R$ {item.price}0</h5>
                    </NormalPrice>
                    </CardItem>
                    <button>Adicionar</button>
                    </ButtonCard>
                )
            })
        )}
        </Card>
        </Container>
    )
}