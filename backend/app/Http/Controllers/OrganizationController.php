<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OrganizationController extends Controller
{
    public function store(Request $request) {
        $user = $request->user();
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'plan' => ['nullable', 'string', 'in:essential,professional,scale'],
            'billing_cycle' => ['nullable', 'string', 'in:monthly,annual']
        ]);

        $plan = $validated['plan'] ?? 'essencial';
        $seatsLimit = match ($plan) {
            'essential' => 5,
            'professional' => 20,
            'scale' => null,
            default => 5,
        };
    }
}
