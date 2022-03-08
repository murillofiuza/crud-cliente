<?php

namespace App;

//use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    //use HasFactory;

    protected $fillable = [
        'nome','email','senha','cpf','dt_atualizacao','dt_nascimento','telefone','perfil','logradouro','complemento','numero', 'cidade', 'estado', 'pais', 'cep'
    ];
}
