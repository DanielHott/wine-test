import { Headers, Titles, Profile, WineBox, CircleWine, Line } from './styles';
import Image from 'next/image';

export function Header () {
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
        />
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