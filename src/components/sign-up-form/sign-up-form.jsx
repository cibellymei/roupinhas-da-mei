import { useState } from 'react';

// Importar componentes necessários e funções utilitárias
import FormInput from "../form-input/form-input.jsx";

// eslint-disable-next-line no-unused-vars
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.jsx";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.js";

import { SignUpContainer, SignUpTitle } from "../sign-up-form/sign-up-form.styles.jsx";

// Define os campos padrão do formulário
const defaultFormFields = {
  displayName: '', // Nome do usuário
  email: '', // E-mail do usuário
  password: '', // Senha do usuário
  confirmPassword: '', // Confirmação da senha do usuário
};
 
export const SignUpForm = () => {
  // Estado para gerenciar os campos do formulário
  const [formFields, setFormFields] = useState(defaultFormFields);
  
  const { displayName, email, password, confirmPassword } = formFields;

  // Função para resetar os campos do formulário para os valores padrão
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (event) => {
    event.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página)

    // Verifica se a senha e a confirmação de senha correspondem
    if (password !== confirmPassword) {
      alert('As senhas não correspondem! ❌'); // Alerta se as senhas não corresponderem
      return;
    }

    // Cria o usuário com o e-mail e senha fornecidos
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      // Cria o documento do usuário na base de dados
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields(); // Reseta os campos do formulário após o cadastro
    } catch (error) {
      // Trata erros que possam ocorrer durante a criação do usuário
      if (error.code === 'auth/email-already-in-use')  
      {
        alert('Erro ao realizar cadastro, e-mail em uso! 😒'); // Alerta se o e-mail já estiver em uso
      } else {
        console.log('user creation encountered an error', error); // Log de erro para outros problemas
      }
    }
  };

  // Função para lidar com mudanças nos campos do formulário
  const handleChange = (event) => {
    const { name, value } = event.target; // Obtém o nome e o valor do campo alterado

    setFormFields({ ...formFields, [name]: value }); // Atualiza o estado com o novo valor do campo
  };

  // Renderiza o componente do formulário
  return (
    <SignUpContainer>
      <SignUpTitle> 😥 Sem cadastro? 😥 </SignUpTitle>
      <span> 😊 Cadastre-se com seu E-mail e Senha 😊 </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Nome ♥'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

        <FormInput
          label='E-mail ♥'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Senha ♥'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <FormInput
          label='Confirme sua senha ♥'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button 
        type='submit'
        onClick={handleSubmit}
        > ♥ Cadastre-se ♥ </Button>
      </form>
    </SignUpContainer>
  );
};