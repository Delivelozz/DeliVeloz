const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexIncludesNumber = /\d/;

export default function validation ({name,lastName,email,userAddress,phone,password,repeatPassword}) {
  const errors = {};

  // ? -------------------------------------- name

  if (!name) {
    errors.name = "Este campo no puede estar vacío";
  }

  if (name.length >= 1 && name.length < 3 ) {
    errors.name = "Debe tener como minimo 3 carácteres";
  }

  if (name && !/^[A-Za-z0-9\s]+$/g.test(name)) {
    errors.name = "No puede contener carácteres especiales.";
  }

  // ? ------------------------------------- LastName

  if (!lastName) {
    errors.lastName = "Este campo no puede estar vacío";
  }

  if (lastName.length >= 1 && lastName.length < 3 ) {
    errors.lastName = "Debe tener como minimo 3 carácteres";
  }

  if (lastName && !/^[A-Za-z0-9\s]+$/g.test(lastName)) {
    errors.lastName = "No puede contener carácteres especiales.";
  }

  // ? ---------------------------------------- Email

  if (email.length === 0) {
    errors.email = "Este campo no puede estar vacío.";
  } else if (!regexEmail.test(email)) {
    errors.email = "Debe ser un email";
  }

  // ? ---------------------------------------- UserAddress

  if (userAddress.length === 0) {
    errors.userAddress = "Este campo no puede estar vacío.";
  }

  // ? --------------------------------------- phone

  if (!phone) {
    errors.phone = "Este campo no puede estar vacío";
  } else if (!/^\d+$/g.test(phone)) {
    errors.phone = "El número de teléfono solo puede contener números";
  } else if (phone.length < 10) {
    errors.phone = "El número de teléfono debe tener al menos 10 dígitos";
  }
  // ? ---------------------------------------- password

  if (password.length === 0) {
    errors.password = "Este campo es obligatorio"
  } else if (password.length >= 1 && password.length <= 5 || password.length >= 20) {
    errors.password = "Debe tener entre 6 y 20 caracteres";
  } else if (!regexIncludesNumber.test(password)) {
    errors.password = "Debe contener al menos un número";
  } else if (password !== repeatPassword) {
    errors.password = "Las contraseñas no coinciden";
  }

  // ? ---------------------------------------- Return

  return errors;
};