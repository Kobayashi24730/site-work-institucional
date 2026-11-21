import { useState, useEffect, useCallback } from "react";
import { toast } from "sonner";
import { Services } from "@/services/services";
import ForgotPassword from '../../backend/resources/js/pages/auth/forgot-password';
import { fluentValidationResolver } from "@hookform/resolvers/fluentvalidation-ts/src/fluentvalidation-ts.js";

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
                return {success: true, data: response}
            }
            const fallBackErro = "Erro ao atualizar a senha."
            toast.error(fallBackErro);
            return {success: false, data: fallBackErro};
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

    const ForgotPassword = async (data) => {
        setLoading(true);
        try {
            const response = await Services.forgotPassword(data);
            if (response) {
                toast.success("E-mail de redefinição de senha enviado com sucesso.")
            } else {
                toast.error("Erro ao enviar E-mail de redefinição.")
            }
        } catch (err) {
            const errorMessage =
                err.response?.data ||
                err.message ||
                "Erro ao enviar email ao user.";
            
            if (errorMessage?.laravel_status === "Please wait before retrying.") {
                toast.warning("Aguarde um instante antes de solicitar um novo e-mail de recuperação.");
            } else {
                toast.error(errorMessage || "Erro ao enviar e-mail de recuperação.");
            }
            console.log("Erro ao enviar email de forgot para o usuario ", errorMessage);
        } finally {
            setLoading(false);
        }
    }

    const updateCredenciais = async (data) => {
        setLoading(true);
        try {
            const response = await Services.UpdateCredenciais(data);
            if (response) {
                toast.success("Successo ao atualizar as credenciais.");
                return response;
            }
            toast.error("Erro ao atualizar credenciais.");
            return null;
        } catch (err: any) {
            toast("Erro ao atulizar credenciais ", err.response?.data || err.messsage);
            console.log("Erro ao atualizar credenciais, data -> ", err)
        } finally {
            setLoading(false);
        }
    }

    return {
        createUser,
        deleteUser,
        updatePassword,
        loading,
        ForgotPassword,
        updateCredenciais
    };
}