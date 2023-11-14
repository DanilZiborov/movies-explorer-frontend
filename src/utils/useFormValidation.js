import React, { useCallback } from "react";

export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isInputValid, setIsInputValid] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const validationMessage = event.target.validationMessage;
    const valid = event.target.validity.valid;
    const form = event.target.form;

    setValues({...values, [name]: value});
    setErrors({...errors, [name]: validationMessage });
    setIsInputValid({...isInputValid, [name]: valid});
    setIsValid(form.checkValidity());
  };

  const setValue = useCallback((name, value) => {
    setValues((oldValues) => {
      return {...oldValues, [name]: value}
    })
  }, [])

  function reset() {
    setValues({});
    setErrors({});
    setIsInputValid({});
    setIsValid(false);
  }

  return { values, errors, isInputValid, isValid, handleChange, setValue, reset };
}
