import { useState } from 'react';

import FormInput from "../form-input/form-input.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.jsx";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase"
 
import { SignInContainer, SignInSubtitle, ButtonsContainer } from "../sign-in-form/sign-in-form.styles.jsx";

const defaultFormFields = { // Define os campos iniciais do formulário.
  email: '',
  password: '',
}; // Desestrutura os campos de e-mail e senha do estado.

export const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields); // Estado para armazenar os campos do formulário.
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields); // Função para resetar os campos do formulário para os valores padrão.
  };

  const signInWithGoogle = async () => { // Função para lidar com o login usando o Google.
    await signInWithGooglePopup(); // Chama a função de autenticação do Google.
  };

  const handleSubmit = async (event) => { // Função chamada ao submeter o formulário.
    event.preventDefault(); // Previne o comportamento padrão de recarregar a página ao enviar o formulário.

    try {
        await signInAuthUserWithEmailAndPassword( // Tenta autenticar o usuário com e-mail e senha.
        email,
        password
      );

      resetFormFields(); // Reseta os campos do formulário após o login bem-sucedido.

    } catch (error) { // Captura e lida com erros de autenticação.
      switch (error.code) {
        case 'auth/wrong-password': 
          alert('incorrect password for email'); // Alerta para senha ou email incorretos.
          break; 
        case 'auth/user-not-found':
          alert('no user associated with this email'); // Alerta para e-mail não encontrado.
          break;
        default:
          console.log(error); // Loga outros erros não específicos.
      }
    }
  };

  const handleChange = (event) => { // Função para lidar com mudanças nos campos do formulário.
    const { name, value } = event.target; // Obtém o nome e valor do campo alterado.

    setFormFields({ ...formFields, [name]: value }); // Atualiza o estado com o novo valor do campo.
  };

  return (
    <SignInContainer>
      <SignInSubtitle> 💖 Já tem cadastro? 💖 </SignInSubtitle>
        <span> 💗 Entre com seu E-mail e Senha 💗 </span>
      <form onSubmit={handleSubmit}> {/* Formulário que chama handleSubmit ao ser enviado */}
        <FormInput
          label='E-mail ♥'
          type='email' 
          required
          onChange={handleChange} // Atualiza o estado quando o valor do input muda
          name='email'
          value={email}
        />

        <FormInput
          label='Senha ♥'
          type='password'
          required
          onChange={handleChange} // Atualiza o estado quando o valor do input muda
          name='password'
          value={password}
        />
        <ButtonsContainer>
          <Button 
            onClick={handleSubmit}
            type='submit'> 
              ♥ Entrar ♥ 
          </Button>
          <Button 
            type='button' 
            buttonType={BUTTON_TYPE_CLASSES.google} 
            onClick={signInWithGoogle}> {/* Botão para login com Google */}
            Login Google 🇬 
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};