import { useState } from "react";
import { AnimatedSections } from "@/components/AnimatedSections";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { useServices } from "@/hooks/useServices";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    senha: z.string().min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
});

export function ResetPassword() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { updatePassword } = useServices();
    const [loading, setLoading] = useState(false);
    
    const token = searchParams.get("token");
    const email = searchParams.get("email");
    
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            senha: "",
        }
    });

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const result = await updatePassword({
                token,
                email,
                password: data.senha,
                password_confirmation: data.senha
            });

            if (result && result.success) {
                toast.success("Senha atualizada com sucesso!");
                navigate("/");
            } else {
                toast.error(result?.message || "Erro ao atualizar a senha.");
            }
        } catch (err) {
            console.error("Detalhes do erro:", err.response?.data || err);
            const errorMessage =
                err.response?.data?.message ||
                err.message ||
                "Erro ao resetar a senha.";
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50/50 px-4 py-12">    
            <AnimatedSections className="w-full max-w-md space-y-6">
                <div className="text-center space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                        Crie uma nova senha
                    </h2>
                    <p className="text-sm text-slate-600">
                        Informe sua nova senha abaixo para acessar sua conta.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="senha"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-slate-700">Nova Senha</FormLabel>
                                        <FormControl>
                                            <Input 
                                                type="password" 
                                                placeholder="Mínimo de 6 caracteres..." 
                                                {...field}
                                                className="h-11 rounded-xl"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} 
                            />

                            <Button 
                                type="submit" 
                                className="w-full h-11 rounded-xl font-medium transition-all"
                                disabled={loading}
                            >
                                {loading ? "Salvando nova senha..." : "Resetar Senha"}
                            </Button>
                        </form>
                    </Form>
                </div>
            </AnimatedSections>
        </div>
    );
}