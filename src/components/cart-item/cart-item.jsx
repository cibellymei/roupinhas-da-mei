import {CartItemContainer, ItemDetails, Name, Price} from "../cart-item/cart-item.styles";

export const CartItem = ({cartItem}) => {
    const { imageUrl, price, name, quantity } = cartItem;
    return (
        <CartItemContainer> 
            <img src={imageUrl} alt={`${name}`}/>
            <ItemDetails>
                <Name> { name } </Name>
                <Price> { quantity } x R${price},00 </Price>
            </ItemDetails>
        </CartItemContainer>
    )
}