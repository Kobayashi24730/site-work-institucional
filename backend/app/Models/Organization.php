<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Organization extends Model
{
    protected $fillable=['name', 'slug'];

    //? Funções para retornar os relacionamentos do user, projetos, e owner.
    public function projects(): HasMany {
        return $this->hasMany(Project::class);
    }

    public function members(): BelongsToMany {
        return $this->belongsToMany(User::class)->withPivot('role')->withTimestamps();
    }

    public function owner(): BelongsTo {
        return $this->belongsTo(User::class, 'owner_id');
    }
}
