import { useState, useEffect, useCallback } from "react";
import { toast } from "sonner";
import { Services } from "@/services/services";

export function useServices() {
    const [user, setUser] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchServicesBy = useCallback(async () => {
        try {
            const response = await Services.getUser();
            setUser(response);
            setLoading(false);
        } catch (err) {
            setError("Erro ao buscar o user.");
        } finally {
            setLoading(false);
        }
    }, []);

    const createUser = async (user) => {
        try {
            const response = await Services.createUser(user);
            if (response) {
                toast.success("Usuario criado com sucesso.");
            } else {
                toast.error("Erro ao criar o usuario.");
            }
        } catch (err) {
            console.error("Detalhes do erro:", err.response?.data || err);
            const errorMessage =
                err.response?.data?.message ||
                err.message ||
                "Erro ao criar um novo user.";

            throw new Error(errorMessage);
        }
    };

    const deleteUser = async (user) => {
        try {
            const response = await Services.deleteUser(user);
            if (response) {
                toast.success("Usuario deletado com sucesso.")
            } else {
                toast.error("Erro ao deletar o usuario.")
            }
        } catch (err) {
            console.error("Detalhes do erro:", err.response?.data || err);
            const errorMessage =
                err.response?.data?.message ||
                err.message ||
                "Erro ao deletar o user.";

            throw new Error(errorMessage);
        }
    };

    useEffect(() => {
        fetchServicesBy();
    }, [fetchServicesBy]);

    useEffect(() => {

    }, []);

    return (
        {
            services,
            error,
            loading,
        }
    );
}