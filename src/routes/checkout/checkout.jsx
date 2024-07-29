import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from "../checkout/checkout.styles";
 
import { useContext } from "react";

import { CartContext } from "../../contexts/cart";
import { CheckoutItem } from "../../components/checkout-item/checkout-item";

export const Checkout = () => {
    const {cartItems, cartTotal} = useContext(CartContext);
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span> ♥ Produto ♥ </span>
                </HeaderBlock>
                <HeaderBlock>
                    <span> ♥ Descrição ♥ </span>
                </HeaderBlock>
                <HeaderBlock>
                    <span> ♥ Quantidade ♥ </span>
                </HeaderBlock>
                <HeaderBlock>
                    <span> ♥ Preço ♥ </span> 
                </HeaderBlock>
                <HeaderBlock>
                    <span> ♥ Remover ♥ </span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))}
            <Total> ♥ TOTAL: R$ {cartTotal},00 ♥ </Total>
        </CheckoutContainer>
    )
}