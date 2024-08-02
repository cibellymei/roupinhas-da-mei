import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";

export const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>
          <img src="https://icones.pro/wp-content/uploads/2021/06/icone-fleche-gauche-rose.png" alt="arrow-right" height="15px" width="15px"/>
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>
          <img src="https://icones.pro/wp-content/uploads/2021/06/icone-fleche-droite-rose.png" alt="arrow-right" height="15px" width="15px"/>
        </Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>
        <img src="https://cdn-icons-png.flaticon.com/512/7437/7437055.png" width="50px" height="50px" alt="remover"/>
      </RemoveButton>
    </CheckoutItemContainer>
  );
};