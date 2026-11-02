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

    public function me(Request $request) {
        return response()->json($request->user());
    }
}
