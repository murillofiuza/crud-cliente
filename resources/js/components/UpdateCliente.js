import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import MyGlobleSetting from './MyGlobleSetting';


class UpdateCliente extends Component {
  constructor(props) {
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


  componentDidMount(){
    axios.get(MyGlobleSetting.url + `/api/clientes/${this.props.params.id}/edit`)
    .then(response => {
      this.setState({ nome: response.data.nome, email: response.data.email });
    })
    .catch(function (error) {
      console.log(error);
    })
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

  handleSubmit(event) {
    event.preventDefault();
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
    let uri = MyGlobleSetting.url + '/api/clientes/'+this.props.params.id;
    axios.patch(uri, clientes).then((response) => {
          this.props.history.push('/display-item');
    });
  }
  render(){
    return (
      <div>
        <h1>Atualizar Cliente</h1>
        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <Link to="/display-item" className="btn btn-success">Retornar para Cliente</Link>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
        
        <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Nome:</label>
                <input type="text" className="form-control" onChange={this.handleChange1} />
              </div>
            </div>
        </div>


            <div className="form-group">
                <label>Nome</label>
                <input type="text"
                  className="form-control"
                  value={this.state.nome}
                  onChange={this.handleChange1} />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="text"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.handleChange2} />
            </div>
            <div className="form-group">
                <label>Senha</label>
                <input type="text"
                  className="form-control"
                  value={this.state.senha}
                  onChange={this.handleChange3} />
            </div>
            <div className="form-group">
                <label>CPF</label>
                <input type="text"
                  className="form-control"
                  value={this.state.cpf}
                  onChange={this.handleChange4} />
            </div>
            <div className="form-group">
                <label>Data Atualização</label>
                <input type="text"
                  className="form-control"
                  value={this.state.dt_atualizacao}
                  onChange={this.handleChange5} />
            </div>
            <div className="form-group">
                <label>Data Nascimento</label>
                <input type="text"
                  className="form-control"
                  value={this.state.dt_nascimento}
                  onChange={this.handleChange6} />
            </div>
            <div className="form-group">
                <label>Telefone</label>
                <input type="text"
                  className="form-control"
                  value={this.state.telefone}
                  onChange={this.handleChange7} />
            </div>
            <div className="form-group">
                <label>Perfil</label>
                <input type="text"
                  className="form-control"
                  value={this.state.perfil}
                  onChange={this.handleChange8} />
            </div>
            <div className="form-group">
                <label>Logradouro</label>
                <input type="text"
                  className="form-control"
                  value={this.state.logradouro}
                  onChange={this.handleChange9} />
            </div>
            <div className="form-group">
                <label>Complemento</label>
                <input type="text"
                  className="form-control"
                  value={this.state.comeplemento}
                  onChange={this.handleChange10} />
            </div>
            <div className="form-group">
                <label>Numero</label>
                <input type="text"
                  className="form-control"
                  value={this.state.numero}
                  onChange={this.handleChange11} />
            </div>
            <div className="form-group">
                <label>Cidade</label>
                <input type="text"
                  className="form-control"
                  value={this.state.cidade}
                  onChange={this.handleChange12} />
            </div>
            <div className="form-group">
                <label>Estado</label>
                <input type="text"
                  className="form-control"
                  value={this.state.estado}
                  onChange={this.handleChange13} />
            </div>
            <div className="form-group">
                <label>Pais</label>
                <input type="text"
                  className="form-control"
                  value={this.state.pais}
                  onChange={this.handleChange14} />
            </div>
            <div className="form-group">
                <label>Cep</label>
                <input type="text"
                  className="form-control"
                  value={this.state.cep}
                  onChange={this.handleChange15} />
            </div>

            <div className="form-group">
                <button className="btn btn-primary">Alterar</button>
            </div>
        </form>
    </div>
    )
  }
}
export default UpdateCliente;