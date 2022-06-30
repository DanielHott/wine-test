import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header/index'
import { Search } from '../components/Search-Menu'
import { CardsArea } from '../components/Cards-Area/index'
import { Main } from '../styles/main';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
  <div>
    <Header />
    <Main>
      <Search />
      <CardsArea />
    </Main>
  </div>
  )
}
