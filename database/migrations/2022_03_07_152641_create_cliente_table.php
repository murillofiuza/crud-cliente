<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClienteTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clientes', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nome');
            $table->string('email');
            $table->string('senha');
            $table->string('cpf');
            $table->string('dt_atualizacao');
            $table->string('dt_nascimento');
            $table->string('telefone');
            $table->string('perfil');
            $table->string('logradouro');
            $table->string('complemento');
            $table->string('numero');
            $table->string('cidade');
            $table->string('estado');
            $table->string('pais');
            $table->string('cep');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clientes');
    }
};
