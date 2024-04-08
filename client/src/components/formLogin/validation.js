const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validation({ email, password }) {
    const errors = {};
  
    if (email.length === 0) {
      errors.email = "Este campo no puede estar vacío.";
    } else if (!regexEmail.test(email)) {
      errors.email = "Debe ser un email";
    }

    if ( password.length === 0) {
      errors.password = "Este campo es obligatorio";
    } else if (password.length >= 1 && password.length <= 5 || password.length >= 20) {
      errors.password = "Debe tener entre 6 y 20 caracteres";
    }

    return errors;
  }
  
  export default validation;