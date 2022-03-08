<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cliente;

class ClienteController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $clientes = Cliente::all();
        return response()->json($clientes);
    }

    public function store(Request $request)
    {
        $clientes = new Cliente([
          'nome' => $request->get('nome'),
          'body' => $request->get('email'),
          'senha' => $request->get('senha'),
          'cpf' => $request->get('cpf'),
          'dt_atualizacao' => $request->get('dt_atualizacao'),
          'dt_nascimento' => $request->get('dt_nascimento'),
          'telefone' => $request->get('telefone'),
          'perfil' => $request->get('perfil'),
          'logradouro' => $request->get('logradouro'),
          'complemento' => $request->get('complemento'),
          'numero' => $request->get('numero'),
          'cidade' => $request->get('cidade'),
          'estado' => $request->get('estado'),
          'pais' => $request->get('pais'),
          'cep' => $request->get('cep')
        ]);
        $clientes->save();


        return response()->json('Cliente cadastrado com sucesso.');
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $clientes = Cliente::find($id);
        return response()->json($clientes);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $clientes = Cliente::find($id);
        
        $clientes->nome = $request->get('nome');
        $clientes->email = $request->get('email');
        $clientes->senha = $request->get('senha');
        $clientes->cpf = $request->get('cpf');
        $clientes->dt_atualizacao = $request->get('dt_atualizacao');
        $clientes->dt_nascimento = $request->get('dt_nascimento');
        $clientes->telefone = $request->get('telefone');
        $clientes->perfil = $request->get('perfil');
        $clientes->logradouro = $request->get('logradouro');
        $clientes->complemento = $request->get('complemento');
        $clientes->numero = $request->get('numero');
        $clientes->cidade = $request->get('cidade');
        $clientes->estado = $request->get('estado');
        $clientes->pais = $request->get('pais');
        $clientes->cep = $request->get('cep');

        $clientes->save();


        return response()->json('Cliente alterado com sucesso.');
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
      $clientes = Cliente::find($id);
      $clientes->delete();


      return response()->json('Cliente deletado com sucesso.');
    }
}
