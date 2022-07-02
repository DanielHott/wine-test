import { Headers, Titles, Profile, WineBox, CircleWine, Line } from './styles';
import { useState, useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import Image from 'next/image';

export function Header () {
    const { name, setName, setSearchMode, cart } = useContext(CartContext)
    const [search, setSearch] = useState(false);
    const [actName, setActName] = useState('');
    const canSearch = () => {
        setName(actName);
        setSearchMode(true)
    }
    return (
        <Headers>
        <Image
        src="/assets/Header/black.svg"
        width={100}
        height={28}
        alt=""
        />
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
        onClick={() => setSearch(search === true ? false : true )}
        />
        { search &&
        <>
        <input type="text" placeholder="Pesquise seu vinho favorito" onChange={(name) => setActName(`${name.target.value}`)}></input>
        <button onClick={() => canSearch()}>Pesquisar</button>
        </>
        }
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
        <WineBox>
        <Image
        src="/assets/Header/Bitmap.svg"
        width={40}
        height={56}
        alt=""
        />
        <p>{cart.length}</p>
        </WineBox>
        </CircleWine>
        <Line>
        <Image
        src="/assets/Header/Label.svg"
        width={35}
        height={2}
        alt=""
        />
        </Line>
        </Headers>
    )
}