import { BaseButton, GoogleSignInButton, InvertedButton } from "./button.styled.jsx";


// Define um objeto que mapeia diferentes tipos de botões para suas classes de estilo correspondentes.
// Esses valores são usados para identificar qual componente estilizado deve ser renderizado.
export const BUTTON_TYPE_CLASSES = {
    base: "base", // Tipo de botão base, que utiliza o BaseButton.
    google: "google-sign-in", // Tipo de botão para login com o Google, que utiliza o GoogleSignInButton.
    inverted: "inverted", // Tipo de botão invertido, que utiliza o InvertedButton.
};

// Define uma função que retorna o componente de botão apropriado com base no tipo de botão fornecido.
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
    {
        [BUTTON_TYPE_CLASSES.base]: BaseButton, // Mapeia o tipo 'base' para o componente BaseButton.
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton, // Mapeia o tipo 'google-sign-in' para o componente GoogleSignInButton.
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton, // Mapeia o tipo 'inverted' para o componente InvertedButton.
    }[buttonType] // Retorna o componente correspondente ao tipo de botão fornecido.
)

// Define o componente funcional Button, que recebe propriedades e renderiza um botão estilizado.
const Button = ({children, buttonType, ...otherProps}) => {
        
    // Obtém o componente de botão apropriado com base no tipo de botão fornecido.
    const CustomButton = getButton(buttonType);

    // Retorna o componente de botão personalizado, aplicando todas as propriedades adicionais e exibindo o conteúdo passado como children.
    return  <CustomButton {...otherProps}> 
                {children} 
            </CustomButton>;
}

export default Button;