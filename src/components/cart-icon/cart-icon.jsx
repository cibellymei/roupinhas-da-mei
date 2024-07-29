import { useContext } from "react";

import { CartIconContainer, ItemCount, ShoppingIcon } from "../cart-icon/cart-icon-styles";

import { CartContext } from "../../contexts/cart";

export const CartIcon = () => {

    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen (!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon"/>
            <ItemCount> {cartCount} </ItemCount>
        </CartIconContainer>
    )
}  
