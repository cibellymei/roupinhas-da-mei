import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart";

import Button from "../button/button.jsx";

import { CartItem } from "../cart-item/cart-item";

import {CartDropdownContainer, EmptyMessage, CartItems} from "../cart-dropdown/cart-dropdown.styles.jsx";

export const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate ("/checkout")
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item}/>
                    ))     
                ):(
                    <EmptyMessage> 
                        ♥ Adicione Itens ♥
                        <img src="https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-pink-bear-sweet-cute-png-png-image_10120389.png" width="130px" height="130px" alt="image-carrinho"/>  
                    </EmptyMessage>
                )}           
            </CartItems>
            <Button onClick={goToCheckoutHandler}>♥ Finalizar ♥</Button>
        </CartDropdownContainer>
    )
}