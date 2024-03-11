import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (username === '' || password === '') {
            setError('Por favor, rellene todos los campos');
        } else {
            setError('');
            navigate('/table');
        }
    };

    return {
        username,
        setUsername,
        password,
        setPassword,
        error,
        setError,
        handleSubmit
    };
}