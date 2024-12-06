export const UPDATED_FORM = 'UPDATED_FORM';

const formatEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const minLengthPassword = 7;
const validateInput = ({ name, value }) => {
  let hasError = false;
  let error = '';
  const formatValue = value.trim();
  switch (name) {
    case 'email':
      if (formatValue === '') {
        hasError = true;
        error = 'El email es requerido';
      } else if (!formatEmail.test(formatValue)) {
        hasError = true;
        error = 'El email es invalido';
      } else {
        hasError = false;
        error = '';
      }
      break;
    case 'password':
      if (formatValue === '') {
        hasError = true;
        error = 'La contraseña es requerida';
      } else if (formatValue.length < minLengthPassword) {
        hasError = true;
        error = `El minino de caracteres es ${minLengthPassword}`;
      } else {
        hasError = false;
        error = '';
      }
      break;
    default:
      break;
  }
  return {
    hasError,
    error,
  };
};
export const onInputChange = ({ name, value, dispatch, formState }) => {
  const { hasError, error } = validateInput({ name, value });
  let isFormValid = true;

  for (const key in formState) {
    const item = formState[key];
    if (key !== name && hasError) {
      isFormValid = false;
      break;
    } else if (key !== name && item.hasError) {
      isFormValid = false;
      break;
    }
  }

  dispatch({
    type: UPDATED_FORM,
    data: {
      name,
      value,
      hasError,
      error,
      touched: true,
      isFormValid,
    },
  });
};
