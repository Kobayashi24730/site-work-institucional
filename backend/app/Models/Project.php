<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Project extends Model
{
    protected $table = ['name', 'description'];

    //? Retorna a organization e o criador.
    public function organization(): BelongsTo {
        return $this->belongsTo(Organization::class);
    }


    public function creator(): BelongsTo {
        return $this->belongsTo(User::class, 'created_by');
    }
}
