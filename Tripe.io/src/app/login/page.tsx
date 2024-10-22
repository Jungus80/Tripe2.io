'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importa useRouter para manejar la navegación

function Page() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [nameError, setNameError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Usuario inicial "admin"
    const [users, setUsers] = useState([{ mail: "admin@example.com", password: "panama507" }]); 
    
    const router = useRouter(); // Instancia de useRouter para redirigir

    const validateEmail = (email:string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateName = (name:string) => {
        const nameRegex = /^[a-zA-Z\s]+$/; // Solo letras y espacios
        return nameRegex.test(name);
    };

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setErrorMessage('');
        setPasswordError('');
        setNameError('');
        setSuccessMessage('');

        // Validar nombre si es registro
        if (!isLogin && !validateName(name)) {
            setNameError('El nombre no debe contener números.');
            return;
        }

        // Validar correo
        if (!validateEmail(email)) {
            setErrorMessage('Por favor, ingresa un correo válido.');
            return;
        }

        // Validar contraseña
        if (password.length < 4) {
            setPasswordError('La contraseña debe tener al menos 4 caracteres.');
            return;
        }

        if (isLogin) {
            // Modo de inicio de sesión
            const user = users.find(user => user.mail === email && user.password === password);
            if (user) {
                // Redirige a /home si las credenciales son correctas
                setSuccessMessage('Inicio de sesión exitoso, redirigiendo...');
                router.push('/home');
            } else {
                setErrorMessage('Credenciales incorrectas. Inténtalo de nuevo.');
            }
        } else {
            // Modo de registro
            const userExists = users.find(user => user.mail === email);
            if (userExists) {
                setErrorMessage('Este correo ya está registrado.');
                return;
            }

            // Registra al nuevo usuario
            setUsers([...users, { mail: email, password }]);
            setSuccessMessage('¡Registro exitoso! Ahora puedes iniciar sesión.');
            setIsLogin(true);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg w-[350px] p-4">
                <div className="mb-4">
                    <h2 className="text-2xl font-bold text-black">{isLogin ? "Iniciar sesión" : "Registrarse"}</h2>
                    <p className="text-black">
                        {isLogin
                            ? " tus credenciales para acceder"
                            : "Crea una nueva cuenta"}
                    </p>
                </div>
                <div className="mb-4">
                    <div className="flex space-x-4">
                        <button
                            className={`flex-1 py-2 ${isLogin ? "font-bold text-black" : "text-black"}`}
                            onClick={() => setIsLogin(true)}
                        >
                            Iniciar sesión
                        </button>
                        <button
                            className={`flex-1 py-2 ${!isLogin ? "font-bold text-black" : "text-black"}`}
                            onClick={() => setIsLogin(false)}
                        >
                            Registrarse
                        </button>
                    </div>
                </div>
                <div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {!isLogin && (
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                                <input
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
                                />
                                {nameError && (
                                    <p className="text-red-500 text-sm">{nameError}</p>
                                )}
                            </div>
                        )}
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
                            />
                            {errorMessage && (
                                <p className="text-red-500 text-sm">{errorMessage}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
                            />
                            {passwordError && (
                                <p className="text-red-500 text-sm">{passwordError}</p>
                            )}
                        </div>
                        <button type="submit" className="w-full py-2 bg-[#FF0E0E] text-white rounded-md">
                            {isLogin ? "Iniciar sesión" : "Registrarse"}
                        </button>
                    </form>
                </div>
                {successMessage && <p className="text-green-500 text-sm mt-4">{successMessage}</p>}
                <div className="flex justify-center mt-4">
                    <p className="text-sm text-black">
                        {isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}
                        <button
                            className="text-blue-500 pl-1"
                            onClick={() => setIsLogin(!isLogin)}
                        >
                            {isLogin ? "Regístrate" : "Inicia sesión"}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Page;
