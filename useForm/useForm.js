import { useState } from "react";

export function useForm(initialForm = {}) {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState(prevFormState => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  const onResetForm = () => setFormState(initialForm)

  return {
    ...formState,
    onInputChange,
    onResetForm
  }
}
