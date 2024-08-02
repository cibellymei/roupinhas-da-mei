import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { FormInput } from "../form-input/form-input";
import { Button, BUTTON_TYPE_CLASSES } from "../button/button";

import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

const defaultFormFields = {
  email: '',
  password: '',
};

export const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      console.log('user sign in failed', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>💖 Já tem cadastro? 💖</h2>
      <span>💗 Entre com seu E-mail e Senha 💗</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='♥ E-mail♥'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='♥ Senha ♥'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <ButtonsContainer>
          <Button type='submit'>♥ Entrar ♥</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type='button'
            onClick={signInWithGoogle}
          >
            Login Google 🇬 
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};