import Image from 'next/image'
import { Stars } from './styles';

interface iStars {
    stars: number
}

export function StarGenerator (stars: iStars) {
    const size = stars.stars;
    if (size === 0) return (
        <>
        <Image src={'/assets/Products/starSolidGray.svg'} alt="" width={14.4} height={13.2} />
        <Image src={'/assets/Products/starSolidGray.svg'} alt="" width={14.4} height={13.2} />
        <Image src={'/assets/Products/starSolidGray.svg'} alt="" width={14.4} height={13.2} />
        <Image src={'/assets/Products/starSolidGray.svg'} alt="" width={14.4} height={13.2} />
        <Image src={'/assets/Products/starSolidGray.svg'} alt="" width={14.4} height={13.2} />
        </>
    )
    if (size === 1) return (
        <>
        <Image src={'/assets/Products/starSolid.svg'} alt="" width={14.4} height={13.2} />
        <Image src={'/assets/Products/starSolidGray.svg'} alt="" width={14.4} height={13.2} />
        <Image src={'/assets/Products/starSolidGray.svg'} alt="" width={14.4} height={13.2} />
        <Image src={'/assets/Products/starSolidGray.svg'} alt="" width={14.4} height={13.2} />
        <Image src={'/assets/Products/starSolidGray.svg'} alt="" width={14.4} height={13.2} />
        </>
    )
    if (size === 2) return (
        <>
        <Image src={'/assets/Products/starSolid.svg'} alt="" width={14.4} height={13.2} />
        <Image src={'/assets/Products/starSolid.svg'} alt="" width={14.4} height={13.2} />
        <Image src={'/assets/Products/starSolidGray.svg'} alt="" width={14.4} height={13.2} />
        <Image src={'/assets/Products/starSolidGray.svg'} alt="" width={14.4} height={13.2} />
        <Image src={'/assets/Products/starSolidGray.svg'} alt="" width={14.4} height={13.2} />
        </>
    )
    if (size === 3) return (
        <>
        <Image src={'/assets/Products/starSolid.svg'} alt="" width={14.4} height={13.2} />
        <Image src={'/assets/Products/starSolid.svg'} alt="" width={14.4} height={13.2} />
        <Image src={'/assets/Products/starSolid.svg'} alt="" width={14.4} height={13.2} />
        <Image src={'/assets/Products/starSolidGray.svg'} alt="" width={14.4} height={13.2} />
        <Image src={'/assets/Products/starSolidGray.svg'} alt="" width={14.4} height={13.2} />
        </>
    )
    if (size === 4) return (
        <>
        <Image src={'/assets/Products/starSolid.svg'} alt="" width={14.4} height={13.2} />
        <Image src={'/assets/Products/starSolid.svg'} alt="" width={14.4} height={13.2} />
        <Image src={'/assets/Products/starSolid.svg'} alt="" width={14.4} height={13.2} />
        <Image src={'/assets/Products/starSolid.svg'} alt="" width={14.4} height={13.2} />
        <Image src={'/assets/Products/starSolidGray.svg'} alt="" width={14.4} height={13.2} />
        </>
    
    )
    if (size === 5) return (
        <>
        <Image src={'/assets/Products/starSolid.svg'} alt="" width={14.4} height={13.2} />
        <Image src={'/assets/Products/starSolid.svg'} alt="" width={14.4} height={13.2} />
        <Image src={'/assets/Products/starSolid.svg'} alt="" width={14.4} height={13.2} />
        <Image src={'/assets/Products/starSolid.svg'} alt="" width={14.4} height={13.2} />
        <Image src={'/assets/Products/starSolid.svg'} alt="" width={14.4} height={13.2} />
        </>
    )
}
