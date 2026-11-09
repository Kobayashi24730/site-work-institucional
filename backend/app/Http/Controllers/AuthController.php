<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller{
    public function login(Request $request) {
        $credentials = $request->validate([
            'email' => 'required|email',
            'senha' => 'required'
        ]);

        $authData = [
            'email' => $credentials['email'],
            'password' => $credentials['senha']
        ];

        if (!Auth::attempt($authData)) {
            return response()->json([
                'success' => false,
                'message' => 'Credenciais inválidas'
            ], 401);
        }

        $user = Auth::user();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'token' => $token,
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
            ]
        ]);
    }

    public function user(Request $request) {
        $user = $request->user();

        return response()->json([
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'avatar' => $user->avatar,
            'plan' => $user->plan ?? null
        ]);
    }

    public function logout(Request $request) {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'success' => true,
            'message' => 'Logout realizado com sucesso'
        ], 200);
    }

    public function forgotPassword(Request $request) {
        $request->validate([
            'email' => 'required|email|exists:users,email'
        ]);

        try {
            $status = Password::sendResetLink($request->only('email'));

            if ($status === Password::RESET_LINK_SENT) {
                return response()->json([
                    'message' => 'E-mail de redefinição de senha enviado com sucesso'
                ], 200);
            }

            return response()->json([
                'message' => 'Não foi possivel enviar o e-mail de redefinição de senha',
                'laravel_status' => __($status)
            ], 400);
        } catch (\Exception $e) {
            Log::error("Erro crítico ao enviar e-mail: " . $e->getMessage());
            return response()->json([
                'message' => 'Erro interno ao disparar o e-mail.',
                'error' => $e->getMessage()
            ], 500);
        }

    }

    public function update(Request $request) {
        $user = $request->user();

        $request->validate([
            'name' => 'sometimes|string|max:255',
            'senha' => 'sometimes|string|min:6'
        ]);

        $data=[];

        if ($request->filled('name')){
            $data['name'] = $request->name;
        }

        if ($request->filled('senha')) {
            $data['password'] = Hash::make($request->senha);
        }

        $user->update($data);

        return response()->json([
            'message' => 'Perfil atualizado com sucesso',
            'user' => $user
        ], 200);
    }

    public function me(Request $request) {
        return response()->json($request->user());
    }
}
