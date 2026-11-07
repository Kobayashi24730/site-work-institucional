import {AnimatedSections} from "@/components/AnimatedSections";
import { Trash2, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

export function Profile() {
    const { user, signOut } = useAuth();
    return (
        <div className="py-20 md:py-28 bg-slate-50/50 overflow-hidden">
            <AnimatedSections className="container mx-auto px-4 max-w-md space-y-8">
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs">
                    <h3 className="text-base font-semibold text-slate-900">Foto</h3>
                    <p className="text-sm text-slate-500 mb-4">
                        Mudar foto de perfil.
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center">
                        <img
                            src="https://avatar.vercel.sh/shadcn1"
                            alt="avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                className="gap-2 border-slate-200 text-size-700 font-medium rounded-lg"
                            >
                                <Upload className="mr-2 h-4 w-4" /> Upload
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                className="gap-2 border-slate-200 text-size-700 font-medium rounded-lg"
                            >
                                <Trash2 className="mr-2 h-4 w-4" /> Remover
                            </Button>
                        </div>
                        <p>No maximo 1MB, Formatos permitidos: png, jpg, jpeg.</p>
                    </div>
                </div>
            </AnimatedSections>

            <AnimatedSections delay={0.2}>
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs">
                    form
                </div>
            </AnimatedSections>

            <AnimatedSections delay={0.2}>
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs space-y-4">
                    <div>
                        <h3 className="text-base font-semibold text-slate-900">Zona para deletar ou deslogar a conta.</h3>
                        <p className="text-sm text-slate-500">
                            Delete ou deslogue da sua conto e todos seus dados.
                        </p>
                    </div>

                    <div className="flex gap-2">
                        <Button
                            type="button"
                            variant="outline"
                            className="border-red-300 text-red-600 hover:bg-red-50 hover:text-red-700 rounded-lg font-medium"
                            onClick={() => {}}
                        >
                            Deletar minha conta
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            className="border-red-300 text-red-600 hover:bg-red-50 hover:text-red-700 rounded-lg font-medium"
                            onClick={() => signOut()}
                        >Deslogar da conta.</Button>
                    </div>
                </div>
            </AnimatedSections>
        </div>
    );
}