import React, { createContext, useContext, useState, useEffect } from "react";
import { api } from "@/api/api";

const AuthContext = createContext();

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('@App:token');
        const user = localStorage.getItem('@App:user');

        if (token && user && user != "undefined" && user != "null") {
            try {
                setUser(JSON.parse(user));
                api.defaults.headers.authorization = `Bearer ${token}`;
            } catch (err) {
                localStorage.removeItem('@App:token');
                localStorage.removeItem('@App:user');
            } 
        } else {
            localStorage.removeItem('@App:token');
            localStorage.removeItem('@App:user');
        }

        setLoading(false);
    }, []);
}