import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import MyGlobleSetting from './MyGlobleSetting';


class CreateCliente extends Component {
  constructor(props){
    super(props);
    this.state = {clienteNome: '', 
                clienteEmail: '',
                clienteSenha: '',
                clienteCpf: '',
                clienteDt_atualizacao: '',
                clienteDt_nascimento: '',
                clienteTelefone: '', 
                clientePerfil: '', 
                clienteLogradouro: '',
                clienteComplemento: '',
                clienteNumero: '',
                clienteCidade: '',
                clienteEstado: '',
                clientePais: '',
                clienteCep: ''};

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
        this.handleChange5 = this.handleChange5.bind(this);
        this.handleChange6 = this.handleChange6.bind(this);
        this.handleChange7 = this.handleChange7.bind(this);
        this.handleChange8 = this.handleChange8.bind(this);
        this.handleChange9 = this.handleChange9.bind(this);
        this.handleChange10 = this.handleChange10.bind(this);
        this.handleChange11 = this.handleChange11.bind(this);
        this.handleChange12 = this.handleChange12.bind(this);
        this.handleChange13 = this.handleChange13.bind(this);
        this.handleChange14 = this.handleChange14.bind(this);
        this.handleChange15 = this.handleChange15.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange1(e){
    this.setState({
      clienteNome: e.target.value
    })
  }
  handleChange2(e){
    this.setState({
      clienteEmail: e.target.value
    })
  }
  handleChange3(e){
    this.setState({
      clienteSenha: e.target.value
    })
  }
  handleChange4(e){
    this.setState({
      clienteCpf: e.target.value
    })
  }
  handleChange5(e){
    this.setState({
      clienteDt_atualizacao: e.target.value
    })
  }
  handleChange6(e){
    this.setState({
      clienteDt_nascimento: e.target.value
    })
  }
  handleChange7(e){
    this.setState({
      clienteTelefone: e.target.value
    })
  }
  handleChange8(e){
    this.setState({
      clientePerfil: e.target.value
    })
  }
  handleChange9(e){
    this.setState({
      clienteLogradouro: e.target.value
    })
  }
  handleChange10(e){
    this.setState({
      clienteComplemento: e.target.value
    })
  }
  handleChange11(e){
    this.setState({
      clienteNumero: e.target.value
    })
  }
  handleChange12(e){
    this.setState({
      clienteCidade: e.target.value
    })
  }
  handleChange13(e){
    this.setState({
      clienteEstado: e.target.value
    })
  }
  handleChange14(e){
    this.setState({
      clientePais: e.target.value
    })
  }
  handleChange15(e){
    this.setState({
      clienteCep: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    const clientes = {
      nome: this.state.clienteNome,
      email: this.state.clienteEmail,
      senha: this.state.clienteSenha,
      cpf: this.state.clienteCpf,
      dt_atualizacao: this.state.clienteDt_atualizacao,
      dt_nascimento: this.state.clienteDt_nascimento,
      telefone: this.state.clienteTelefone,
      perfil: this.state.clientePerfil,
      logradouro: this.state.clienteLogradouro,
      scomplemento: this.state.clienteComplemento,
      numero: this.state.clienteNumero,
      cidade: this.state.clienteCidade,
      estado: this.state.clienteEstado,
      pais: this.state.clientePais,
      cep: this.state.clienteCep
    }

    let uri = MyGlobleSetting.url + '/api/clientes';
    axios.post(uri, clientes).then((response) => {
      browserHistory.push('/display-item');
    });
  }


    render() {
      return (
      <div>
        <h1>Cadastrar Cliente</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Nome:</label>
                <input type="text" className="form-control" onChange={this.handleChange1} />
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Email:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleChange2}></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Senha:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleChange3}></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>CPF:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleChange4}></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Data Atualização:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleChange5}></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Data Nascimento:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleChange6}></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Telefone:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleChange7}></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Perfil:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleChange8}></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Logradouro:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleChange9}></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Complemento:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleChange10}></textarea>
                </div>
              </div>
            </div><div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Numero:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleChange11}></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Cidade:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleChange12}></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Estado:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleChange13}></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Pais:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleChange14}></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>CEP:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleChange15}></textarea>
                </div>
              </div>
            </div>


            <br />
            <div className="form-group">
              <button className="btn btn-primary">Adicionar Cliente</button>
            </div>
        </form>
  </div>
      )
    }
}
export default CreateCliente;
