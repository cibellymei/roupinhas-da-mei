import {ProductCardContainer, Footer, Name, Price } from "../product-card/product-card.styles";

import { useContext } from "react";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
import { CartContext } from "../../contexts/cart";

export const ProductCard = ({product}) => {

    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`}/>
            <Footer>
                <Name> {name} </Name>
                <Price> {price} </Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}> ♥ Adicionar ao Carrinho ♥ </Button>
        </ProductCardContainer>
    )
}