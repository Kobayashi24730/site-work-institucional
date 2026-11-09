import { AnimatedSections } from "@/components/AnimatedSections";
import { Trash2, Upload, User as UserIcon, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { useServices } from "@/hooks/useServices";
import { useEffect } from "react";

const formSchema = z.object({
    name: z.string().min(3, { message: "O nome deve ter pelo menos 3 caracteres" }),
    email: z.string().email({ message: "Email inválido" }),
});

export function Profile() {
    const { user, signOut } = useAuth();
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
        },
    });

    useEffect(() => {
        if (user) {
            form.reset({
                name: user?.name || "",
                email: user?.email || "",
            });
        }
    }, [user, form]);

    const {isDirty} = form.formState;

    const onSubmit = async (data) => {
        toast.success("Dados atualizados com sucesso.");
    }

    return (
        <div className="py-12 md:py-20 bg-slate-50/50 min-h-screen">
            <div className="container mx-auto px-4 max-w-2xl space-y-6">
                
                {/* Cabeçalho da Página */}
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Meu Perfil</h1>
                    <p className="text-sm text-slate-500">Gerencie suas informações pessoais e configurações da conta.</p>
                </div>

                {/* Seção de Foto de Perfil */}
                <AnimatedSections>
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
                        <div>
                            <h3 className="text-base font-semibold text-slate-900">Foto de Perfil</h3>
                            <p className="text-sm text-slate-500">Atualize sua imagem de exibição na plataforma.</p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                            <div className="relative h-20 w-20 rounded-full overflow-hidden bg-slate-100 border-2 border-slate-200 flex items-center justify-center shrink-0">
                                <img
                                    src="https://avatar.vercel.sh/shadcn1"
                                    alt="Avatar do usuário"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="flex flex-col gap-2.5 w-full">
                                <div className="flex items-center gap-2">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        className="gap-2 border-slate-200 text-slate-700 font-medium rounded-lg hover:bg-blue-500"
                                    >
                                        <Upload className="h-4 w-4" /> Alterar foto
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        className="gap-2 border-slate-200 text-slate-600 font-medium rounded-lg hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors"
                                    >
                                        <Trash2 className="h-4 w-4" /> Remover
                                    </Button>
                                </div>
                                <p className="text-xs text-slate-400">No máximo 1MB. Formatos permitidos: PNG, JPG ou JPEG.</p>
                            </div>
                        </div>
                    </div>
                </AnimatedSections>

                {/* Seção de Detalhes Pessoais */}
                <AnimatedSections delay={0.1}>
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                                    <div>
                                        <h3 className="text-base font-semibold text-slate-900">Seus Detalhes</h3>
                                        <p className="text-sm text-slate-500">Visualize e edite suas informações de cadastro.</p>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Button 
                                            type="submit"
                                            size="sm"
                                            disabled={!isDirty}
                                            className={`bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-4 disabled:opacity-50 ${isDirty ? "cursor-pointer" : "cursor-not-allowed"}`}
                                        >
                                            Salvar alterações
                                        </Button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem className="space-y-1.5">
                                                <FormLabel className="text-sm font-medium text-slate-900">Nome completo</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Seu nome"
                                                        {...field}
                                                        className="rounded-lg border-slate-200 focus-visible:ring-blue-500"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem className="space-y-1.5">
                                                <FormLabel className="text-sm font-medium text-slate-900">E-mail</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="seu@email.com"
                                                        {...field}
                                                        className="rounded-lg border-slate-200 focus-visible:ring-blue-500"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </form>
                        </Form>
                    </div>
                </AnimatedSections>

                {/* Seção Zona de Perigo / Conta */}
                <AnimatedSections delay={0.2}>
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
                        <div>
                            <h3 className="text-base font-semibold text-slate-900">Sessão e Conta</h3>
                            <p className="text-sm text-slate-500">
                                Encerre sua sessão atual ou exclua permanentemente sua conta e todos os dados associados.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => signOut()}
                                className="gap-2 border-slate-200 text-slate-700 hover:bg-blue-500 rounded-lg font-medium"
                            >
                                <LogOut className="h-4 w-4" /> Deslogar da conta    
                            </Button>

                            <Button
                                type="button"
                                variant="outline"
                                className="gap-2 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 hover:border-red-300 rounded-lg font-medium"
                                onClick={() => {}}
                            >
                                <Trash2 className="h-4 w-4" /> Deletar minha conta
                            </Button>
                        </div>
                    </div>
                </AnimatedSections>

            </div>
        </div>
    );
}