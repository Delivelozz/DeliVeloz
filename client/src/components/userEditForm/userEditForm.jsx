import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserEditForm = () => {
    const { id } = useParams();
    const [user, setUser] = useState({
        name: '',
        lastName: '',
        phoneNumber: '',
        address: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3001/users/${id}`, user);
            console.log(response.data.message);
            alert('Usuario actualizado exitosamente');
        } catch (error) {
            console.error('Error al editar usuario:', error);
            alert('Error al editar usuario. Por favor, inténtalo de nuevo más tarde.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input type="text" name="name" value={user.name} onChange={handleChange} />
            </label>
            <label>
                Apellido:
                <input type="text" name="lastName" value={user.lastName} onChange={handleChange} />
            </label>
            <label>
                Número de teléfono:
                <input type="text" name="phoneNumber" value={user.phoneNumber} onChange={handleChange} />
            </label>
            <label>
                Dirección:
                <input type="text" name="address" value={user.address} onChange={handleChange} />
            </label>
            <label>
                Contraseña:
                <input type="password" name="password" value={user.password} onChange={handleChange} />
            </label>
            <button type="submit">Guardar cambios</button>
        </form>
    );
};

export default UserEditForm;
