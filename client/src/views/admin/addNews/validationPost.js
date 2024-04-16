export default function validation({ title, description, jpg}) {
    const errors = {};

    if (!title || !/^[a-zA-Z\s]*$/.test(title) || title.length < 3 || title.length >= 25) errors.title = 'Debe contener de 3 a 25 caracteres, sólo letras'; //Verifica si name existe, si tiene solo letras y espacios, si su longitud está entre 3 y 25 caracteres.
    if (!description) errors.description = 'Se requiere descripcion';

    return errors;
    }