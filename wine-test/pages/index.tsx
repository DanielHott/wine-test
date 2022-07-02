import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header/index'
import { Search } from '../components/Search-Menu'
import { CardsArea } from '../components/Cards-Area/index'
import { Main, Paginate } from '../styles/main';
import { CartContext } from '../contexts/CartContext'
import styles from '../styles/Home.module.css'
import { useContext, useState } from 'react'

export default function Home() {
  const [page, setPage] = useState(1);
  const { cart, actualPage, setActualPage } = useContext(CartContext)
  const changePageDown = () => {
    if(page >= 2 && page < 8) setPage(page - 1);
  }

  const changePageUp = () => {
    if(page > 0 && page < 5) setPage(page + 1);
  }
  
  return (
    <div>
    <Header />
    <Main>
      <Search />
      <CardsArea/>
    </Main>
    <Paginate>
    <button onClick={() => changePageDown()}>{'<<'} Anterior</button>
    <button onClick={() => setActualPage(page) } >{page}</button>
    <button onClick={() => setActualPage(page + 1) } >{page + 1}</button>
    <button onClick={() => setActualPage(page + 2) } >{page + 2}</button>
    <button onClick={() => changePageUp()}>Próximo {'>>'}</button>
    </Paginate>
  </div>
  )
}
