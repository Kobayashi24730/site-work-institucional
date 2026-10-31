import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AnimatedSections } from "@/components/AnimatedSections";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useServices } from "@/hooks/useServices";

const loginSchema = z.object({
    email: z.string().email({ message: "Email inválido" }),
    senha: z.string().min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
});

const registerSchema = z.object({
    name: z.string().min(3, { message: "O nome deve ter pelo menos 3 caracteres" }),
    email: z.string().email({ message: "Email inválido" }),
    senha: z.string().min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
});

export default function Auth() {
    const { singIn, singOut } = useAuth();
    const { createUser } = useServices();
    const [formType, setFormType] = useState<"login" | "register">("login");
    const currentFormSchema = formType === "login" ? loginSchema : registerSchema;
    const navigate = useNavigate();
    const form = useForm({
        resolver: zodResolver(currentFormSchema),
        defaultValues: {
            nome: "",
            email: "",
            senha: "",
        },
    });


    const toggleFormType = () => {
        const nextFormType = formType === "login" ? "register" : "login";
        setFormType(nextFormType);
        form.reset({ nome: "", email: "", senha: "" });
    };


    const onSubmit = async (data) => {
        if (formType === "login") {
            const result = await singIn(data.email, data.senha);
            if (result) {
                toast.success("Logado com sucesso");
                navigate("/");
            } else {
                toast.error("Email ou senha incorretos.");
            }
        } else if (formType === "register") {
            const result = await createUser(data);
            if (result) {
                toast.success("Usuario criado com sucesso.");
                setFormType("login");
                navigate("/auth");
            } else {
                toast.error("Erro ao criar o usuario.");
            }
        }
    }

    return (
        <section className="py-20 md:py-28 bg-slate-50/50 overflow-hidden">
            <AnimatedSections>
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <div className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-100/60 rounded-full">
                        <span>login | register</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">Login</h2>
                    <span>
                        Façã seu login para acessar a plataforma e seus servições
                    </span>
                </div>

                <div>

                </div>
            </AnimatedSections>
        </section>
    );
}