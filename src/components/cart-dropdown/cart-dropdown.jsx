import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button } from "../button/button";
import { CartItem } from "../cart-item/cart-item";
import { selectCartItems } from "../../store/cart/cart.selector";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

export const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>
            ♥ Adicione Itens ♥
            <img src="https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-pink-bear-sweet-cute-png-png-image_10120389.png" width="130px" height="130px" alt="image-carrinho"/> 
          </EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>♥ Finalizar ♥</Button>
    </CartDropdownContainer>
  );
};