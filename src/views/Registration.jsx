import React, { useState } from 'react';
import './App.css';

function App() {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        email: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userData);
        setUserData({
            firstName: '',
            lastName: '',
            address: '',
            email: '',
        });
    };

    return (
        <div className="container">
            <h1>Registro de Usuarios</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">Nombre:</label>
                <input type="text" id="firstName" name="firstName" value={userData.firstName} onChange={handleInputChange} required />

                <label htmlFor="lastName">Apellido:</label>
                <input type="text" id="lastName" name="lastName" value={userData.lastName} onChange={handleInputChange} required />

                <label htmlFor="address">Dirección:</label>
                <input type="text" id="address" name="address" value={userData.address} onChange={handleInputChange} required />

                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" value={userData.email} onChange={handleInputChange} required />

                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
}

export default App;
