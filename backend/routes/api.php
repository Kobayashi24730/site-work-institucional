<?php

use App\Http\Controllers\Auth\NewPasswordController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/login', [AuthController::class, 'login']); //? Loga usuatio.
Route::post('/users', [UserController::class, 'store']); //? Cria usuario.
Route::post('/forgot-password', [AuthController::class, 'forgotPassword']); //? Envia email para redefinir senha.

//? Torna as rotas abaixo privadas so acesseveis com autenticação.
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'user']); //? Retornar as infos do usuário logado.
    Route::put('/update', [AuthController::class, 'update']); //? Atualiza os dados do usuário.
    Route::post('/logout', [AuthController::class, 'logout']); //? Desloga usuário.
    Route::delete('/users/{id}', [UserController::class, 'destroy']); //? Deleta usuario.
    Route::post('/reset-password', [NewPasswordController::class, 'store']); //? Redefine senha do usuário.
});
