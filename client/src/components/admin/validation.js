export default function validation({ name, description, price, category, subCategory, stockId, image }) {
  const errors = {};

  // ? -------------------------------------- name
  if (!name) {
    errors.name = "Este campo no puede estar vacío";
  } else if (name.length < 3) {
    errors.name = "Debe tener como mínimo 3 caracteres";
  } else if (!/^[A-Za-z0-9\s]+$/g.test(name)) {
    errors.name = "No puede contener caracteres especiales.";
  }

  // ? ------------------------------------- Descripción
  if (!description) {
    errors.description = "Este campo no puede estar vacío";
  } else if (description.length < 50) {
    errors.description = "Debe tener como mínimo 50 caracteres";
  }

  // ? ---------------------------------------- price
  if (!price) {
    errors.price = "Este campo es obligatorio";
  }

  // ? ---------------------------------------- category
  if (!category) {
    errors.category = "Este campo no puede estar vacío.";
  }

  // ? ---------------------------------------- subCategory
  if (!subCategory) {
    errors.subCategory = "Este campo no puede estar vacío.";
  }

  // ? ---------------------------------------- images

  if (!image) {
  errors.image = "Debes cargar ambas imágenes (jpg y png).";
  }

  // ? --------------------------------------- stockId
  
  if (!stockId) {
    errors.stockId = "Este campo no puede estar vacío.";
  }

  // ? ---------------------------------------- Return
  return errors;
}
