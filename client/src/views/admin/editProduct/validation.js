export default function validation({ name, description, price, category, subCategory, quantity, image }) {
  const errors = {};

  // ?------------------------------------ Validación para el campo name
  if (!name) {
    errors.name = "Este campo no puede estar vacío";
  } else if (name.length < 3) {
    errors.name = "Debe tener como mínimo 3 caracteres";
  } else if (!/^[A-Za-z0-9\s]+$/g.test(name)) {
    errors.name = "No puede contener caracteres especiales.";
  }

  // ?------------------------------------ Validación para el campo description
  if (!description) {
    errors.description = "Este campo no puede estar vacío";
  } else if (description.length < 50) {
    errors.description = "Debe tener como mínimo 50 caracteres";
  }

  // ?------------------------------------ Validación para el campo price
  if (!price) {
    errors.price = "Este campo es obligatorio";
  }

  // ?------------------------------------ Validación para el campo category
  if (!category) {
    errors.category = "Este campo no puede estar vacío.";
  }

  // ?------------------------------------ Validación para el campo subCategory
  if (!subCategory) {
    errors.subCategory = "Este campo no puede estar vacío.";
  }

  //? ------------------------------------  Validación para el campo quantity
  if (!quantity) {
    errors.quantity = "Este campo no puede estar vacío.";
  }

  //? ------------------------------------  Validación para el campo Imagen

  if (!image.jpg || !image.png) {
    errors.image = "Debe agregar ambas imágenes";
  }

  return errors;
}
