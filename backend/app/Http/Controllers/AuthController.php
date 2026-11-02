<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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

        //? Envia email para redefinir senha.

        return response()->json([
            'message' => 'Email enviado com sucesso'
        ], 200);
    }

    public function me(Request $request) {
        return response()->json($request->user());
    }
}
