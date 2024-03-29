function validation({ email, password }) {
    const errors = {};
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const regexIncludesNumber = /^(?=.*\d)[A-Za-z\d]*$/;
  
    if (!regexEmail.test(email)) {
      errors.email = "Debe ser un email";
    }
    if (email.length < 7 || email.length > 35) {
      errors.email = "Debe tener entre 7 y 35 caracteres";
    }
    if (email.length === 0) {
      errors.email = "Este campo es obligatorio";
    }
    if (password.length > 10 || password.length < 6) {
      errors.password = "Debe tener entre 6 y 10 caracteres";
    }
    if (password.length === 0) {
      errors.password = "Este campo es obligatorio";
    }
    return errors;
  }
  export default validation;