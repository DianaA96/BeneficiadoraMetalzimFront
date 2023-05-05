import React, { useState, useContext } from 'react'
import axios from 'axios';

export const AuthContext = React.createContext();

export function AuthProvider(props) {

    const [ user, setUser ] = useState(useState(window.localStorage.getItem('gn3ivluxXGi0CNE')));
    const [ cargo, setCargo ] = useState(0)
    const [ error, setError ] = useState(null)

    function login({email, password}) {
        axios( {
            url: 'http://localhost:3050/usuario/login',
            method: 'post',
            data: {
                email: email,
                password: password
            },
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((result) => {
            console.log("result de api", result)
            console.log(result.data.idRol)
            window.localStorage.setItem('gn3ivluxXGi0CNE', result.data.token)
            setCargo(result.data.idRol)
            setUser(result.data);
        })
        .catch((err)=>{
            alert('Credenciales inválidas')
            setError('error')
            console.log(err)
            }
        )
    }

    function logout() {
        console.log("estoy haciendo logout")
        window.localStorage.removeItem('gn3ivluxXGi0CNE')
        setUser({...user, idUsuario: null})
        setError(null)
        // window.location.reload();
    }

    function getToken() {
        return window.localStorage.getItem('gn3ivluxXGi0CNE')
    }

    const value = {
        user,
        cargo,
        error,
        getToken,
        login,
        logout,
    };

    return <AuthContext.Provider value={value} {...props}/>;
}

export function useAuth() {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error('useAuth solo puede ser utilizado dentro de AuthProvider')
    }
    return context;
}

export default AuthContext;