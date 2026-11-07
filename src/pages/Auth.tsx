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
import { Loader2 } from "lucide-react";

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
    const { signIn } = useAuth();
    const [loading, setLoading] = useState(false);
    const { createUser } = useServices();
    const [formType, setFormType] = useState<"login" | "register">("login");
    const currentFormSchema = formType === "login" ? loginSchema : registerSchema;
    const navigate = useNavigate();
    const form = useForm({
        resolver: zodResolver(currentFormSchema),
        defaultValues: {
            name: "",
            email: "",
            senha: "",
        },
    });


    const toggleFormType = () => {
        const nextFormType = formType === "login" ? "register" : "login";
        setFormType(nextFormType);
        form.reset({ name: "", email: "", senha: "" });
    };


    const onSubmit = async (data) => {
        if (formType === "login") {
            setLoading(true);
            const result = await signIn(data.email, data.senha);
            if (result && result.success) {
                toast.success("Logado com sucesso");
                setLoading(false);
                navigate("/");
            } else {
                setLoading(false);
                toast.error(result?.message || "Email ou senha incorretos.");
            }
        } else if (formType === "register") {
            setLoading(true);
            const result = await createUser(data);
            if (result && result.success) {
                toast.success("Usuario criado com sucesso.");
                setFormType("login");
                setLoading(false);
                navigate("/auth");
            } else {
                setLoading(false);
                toast.error("Erro ao criar usuario.");
            }
        }
    }

    return (
        <section className="py-20 md:py-28 bg-slate-50/50 overflow-hidden">
            <AnimatedSections className="container mx-auto px-4 max-w-md space-y-8">
                <div className="text-center space-y-4">
                    <div className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-100/60 rounded-full">
                        <span>{formType === "login" ? "login" : "register"}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        {formType === "login" ? "Bem vindo de volta ao Nimbo." : "Crie sua conta no Nimbo."}
                    </h2>
                    <p className="text-sm text-slate-600">
                        {formType === "login" 
                            ? "Faça seu login para acessar a plataforma e seus serviços." 
                            : "Preencha os campos abaixo para começar a usar o Nimbo."}
                    </p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            {formType === "register" && (
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Nome</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Informe seu nome" {...field}/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            )}

                            <FormField
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Informe seu email" {...field}/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="senha"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Senha</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Informe sua senha" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                            >
                                {loading ? <Loader2 className="w-4 h-4 animate-spin" />
                                : (formType === "login" ? "logar" : "registra-se") }
                            </Button>
                        </form>
                    </Form>

                    <div className="mt-6 text-center">
                        <Button
                            type="button"
                            onClick={toggleFormType}
                            className="text-sm text-white hover:underline font-medium">
                            {formType === "login" ? "Não tem uma conta? Cadastre-se"
                                : "Já tem uma conta? Faça login"}
                        </Button>
                    </div>
                </div>
            </AnimatedSections>
        </section>
    );
}