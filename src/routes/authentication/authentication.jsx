import { SignUpForm } from "../../components/sign-up-form/sign-up-form.jsx";
import { SignInForm} from "../../components/sign-in-form/sign-in-form.jsx";

import {AuthenticationContainer} from "../authentication/authentication.styles.jsx";

export const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};