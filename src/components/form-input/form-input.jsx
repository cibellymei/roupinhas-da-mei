import { FormInputLabel, Input, Group } from "../form-input/form-input.styles";

// Define um componente funcional chamado FormInput que aceita props (propriedades).
const FormInput = ({ label, ...otherProps }) => {

  // Retorna JSX que renderiza o componente FormInput.
  return (
    <Group>
      {/* Renderiza o componente Input e passa todas as propriedades recebidas como props para ele.
          '...otherProps' é o operador spread que inclui todas as propriedades adicionais. */}
      <Input {...otherProps} />
      {/* Verifica se a propriedade 'label' foi fornecida. Se sim, renderiza o componente FormInputLabel. */}
      {label && (
        // O componente FormInputLabel recebe a propriedade 'shrink' que é baseada no comprimento do valor do input.
        // 'otherProps.value.length' é a forma de determinar se o label deve encolher (shrink) ou não,
        // dependendo se há texto no input ou não.
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;