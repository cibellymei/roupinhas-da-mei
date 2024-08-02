import { SignUpForm } from "../../components/sign-up-form/sign-up-form";
import { SignInForm } from "../../components/sign-in-form/sign-in-form";

import { AuthenticationContainer } from "./authentication.styles";

export const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};