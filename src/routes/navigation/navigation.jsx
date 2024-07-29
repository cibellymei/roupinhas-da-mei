import { Fragment, useContext } from 'react'; // Importa o Fragment (também pode ser a tag vazia <> e </>) e useContext do REACT
import { Outlet } from 'react-router-dom'; //  Importa Outlet e Link do react-router-dom para navegação entre rotas


import { ReactComponent as Logo } from "../../assets/logo.svg"; // Importa o logo SVG como um componente React
import { signOutUser } from '../../utils/firebase/firebase'; // Importa a função signOutUser do módulo Firebase

import { CartIcon } from '../../components/cart-icon/cart-icon'; // Importa o componente CartIcon para exibir o ícone do carrinho
import { CartDropdown } from '../../components/cart-dropdown/cart-dropdown'; // Importa o componente CartDropdown para exibir o dropdown do carrinho

import { UserContext } from '../../contexts/user'; //  Importa o contexto UserContext para obter informações do usuário logado
import { CartContext } from "../../contexts/cart"; // Importa o contexto CartContext para obter informações do carrinho

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from "../navigation/navigation.styles"; // Importa os estilos SCSS específicos para este componente Navigation

export const Navigation = () => {
  const { currentUser } = useContext(UserContext); // Obtém o currentUser do contexto UserContext usando o hook useContext
  const { isCartOpen} = useContext(CartContext); // Obtém isCartOpen do contexto CartContext usando o hook useContext

  return (
    <Fragment>  
      <NavigationContainer>
        <LogoContainer className='logo-container' to='/'> {/* Faz o logo virar um link para a página inicial */}
          <Logo className='logo' /> {/* Renderiza o logo SVG */}
        </LogoContainer>
        <NavLinks className='nav-links-container'>
          <NavLink className='nav-link' to='/shop'> {/* Link para a página de shop */}
            ♥ LOJINHA ♥
          </NavLink>
          {currentUser ? 
            (<NavLink as='span' onClick={signOutUser}> ♥ SAIR ♥ </NavLink>) // Se houver usuário logado, exibe o link de sair
              :
            (<NavLink className='nav-link' to='/auth'> ♥ ENTRAR ♥ </NavLink>) // Se não houver usuário logado, exibe o link para a página de autenticação
          }
          <CartIcon/> {/* Componente que exibe o ícone do carrinho */}
        </NavLinks>
          {isCartOpen && <CartDropdown/>} {/* Renderiza o CartDropdown se isCartOpen for verdadeiro */}
      </NavigationContainer>
      <Outlet /> {/* Renderiza o Outlet, que é onde o conteúdo da rota atual será renderizado */}
    </Fragment>
  );
};