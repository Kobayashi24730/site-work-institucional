import { useState, useEffect, useCallback } from "react";
import { toast } from "sonner";
import { Services } from "@/services/services";

export function useServices() {
    const [loading, setLoading] = useState(false);

    const createUser = async (user) => {
        setLoading(true);
        try {
            const response = await Services.createUser(user);
            if (response) {
                toast.success("Usuario criado com sucesso.");
            } else {
                toast.error("Erro ao criar o usuario.");
            }
            return {success: true, data: response};
        } catch (err) {
            console.error("Detalhes do erro:", err.response?.data || err);
            const errorMessage =
                err.response?.data?.message ||
                err.message ||
                "Erro ao criar um novo user.";
            return { success: false, message: errorMessage };
        } finally {
            setLoading(false);
        }
    };

    const deleteUser = async (user) => {
        setLoading(true);
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
            return { success: false, message: errorMessage };
        } finally {
            setLoading(false);
        }
    };

    const updatePassword = async (data) => {
        setLoading(true);
        try {
            const response = await Services.updateUser(data);
            if (response) {
                toast.success("Senha atualizada com sucesso.");
            } else {
                toast.error("Erro ao atualizar a senha.");
            }
        } catch (err) {
            console.error("Detalhes do erro:", err.response?.data || err);
            const errorMessage =
                err.response?.data?.message ||
                err.message ||
                "Erro ao update o user.";
            return { success: false, message: errorMessage };
        } finally {
            setLoading(false);
        }
    }

    return {
        createUser,
        deleteUser,
        updatePassword,
        loading,
    };
}