import {CheckoutItemContainer, ImageContainer, Quantity, RemoveButton, Arrow, Value, BaseSpan} from "../checkout-item/checkout-item.styles";

import { useContext } from "react";

import { CartContext } from "../../contexts/cart";

export const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;

    const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);

    return (
        <CheckoutItemContainer>
            <ImageContainer> 
                <img src={imageUrl} alt={`${name}`}/>
            </ImageContainer>
            <BaseSpan> ♥ {name} ♥ </BaseSpan>
            <Quantity>
                <Arrow onClick={removeItemHandler}>  
                    <img src="https://icones.pro/wp-content/uploads/2021/06/icone-fleche-gauche-rose.png" alt="arrow-right" height="15px" width="15px"/>
                </Arrow>
                <Value> ♥ {quantity} ♥  </Value>
                <Arrow onClick={addItemHandler}>  
                    <img src="https://icones.pro/wp-content/uploads/2021/06/icone-fleche-droite-rose.png" alt="arrow-right" height="15px" width="15px"/>
                </Arrow>
            </Quantity>
            <BaseSpan> ♥ {price} ♥ </BaseSpan>  
            <RemoveButton onClick={clearItemHandler}> 
                <img src="https://cdn-icons-png.flaticon.com/512/7437/7437055.png" width="50px" height="50px" alt="remover"/>
            </RemoveButton>
        </CheckoutItemContainer>
    )
}