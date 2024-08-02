import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import { CheckoutItem } from "../../components/checkout-item/checkout-item";
import { PaymentForm } from "../../components/payment-form/payment-form";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

export const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>♥Produto♥</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>♥Descrição♥</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>♥Quantidade♥</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>♥Preço♥</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>♥Remover♥</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>♥ Total: R$ {cartTotal},00 ♥</Total>

      <PaymentForm />
    </CheckoutContainer>
  );
};