import { createContext, ReactNode, useState } from "react";

type Props = {
    children: ReactNode;
};

export const CartContext = createContext({});

export const CartProvider = ({ children }: Props) => {
    const [cart, setCart] = useState([]);
    const [searchMode, setSearchMode] = useState(false);
    const [ allWines, setAllWines ] = useState([]);
    const [ wines, setWines ] = useState([]);
    const [ name, setName ] = useState('');
    const [ actualPage, setActualPage ] = useState('1');
    return (
        <CartContext.Provider value={{ 
            cart,
            setCart,
            name,
            setName,
            searchMode,
            setSearchMode,
            wines,
            setWines,
            allWines,
            setAllWines, 
            actualPage, 
            setActualPage
        }}>{children}</CartContext.Provider>
    )
}; 