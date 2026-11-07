import { ReactNode } from "react";
import React, { createContext, useContext, useState, useEffect } from "react";
import { api } from "@/api/api";
import { Services } from "@/services/services";

interface Plan {
    id: string;
    name: string;
    status: 'active' | 'cancelled' | 'trial';
}

interface User {
    id: number;
    name: string;
    email: string;
    plan?: Plan;
}

interface AuthContextData {
    user: User | null;
    loading: boolean;
    signIn: (email: string, senha: string) => Promise<{ success: boolean; message?: string }>;
    signOut: () => void;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({children}: {children: ReactNode}) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('@App:token');
        const storeUser = localStorage.getItem('@App:user');

        if (token && storeUser && storeUser != "undefined" && storeUser != "null") {
            try {
                setUser(JSON.parse(storeUser));
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

    const signIn = async (email: string, senha: string) => {
        setLoading(true);
        try {
            const response = await Services.login({email, senha});
            const {token, user: apiUser} = response;    
            const loggleUser = {id: apiUser.id, name: apiUser.name, email: apiUser.email};
            setUser(loggleUser);
            console.log(loggleUser);

            localStorage.setItem('@App:token', token);
            localStorage.setItem('@App:user', JSON.stringify(loggleUser));
    
            api.defaults.headers.authorization = `Bearer ${token}`;
            return {success: true};
        } catch (err) {
            console.error("Erro no login:", err);
            return { 
                success: false, 
                message: err.response?.data?.message || "Erro ao realizar o login." 
            };
        } finally {
            setLoading(false);
        }
    };

    const signOut = () => {
        setLoading(true);
        localStorage.removeItem('@App:token');
        localStorage.removeItem('@App:user');

        delete api.defaults.headers.authorization;
        setLoading(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{user, loading, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}


export function useAuth() {
    const context = useContext(AuthContext);    
    if (!context) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider.");
    }
    return context;
}