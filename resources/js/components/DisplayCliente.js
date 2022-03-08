import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
//import TableRow from './TableRow';
import MyGlobleSetting from './MyGlobleSetting';

class DisplayCliente extends Component {
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

     }
     componentDidMount(){
       axios.get(MyGlobleSetting.url + '/api/clientes')
       .then(response => {
         this.setState({ clientes: response.data });
       })
       .catch(function (error) {
         console.log(error);
       })
     }
     tabRow(){
       if(this.state.clientes instanceof Array){
         return this.state.clientes.map(function(object, i){
             return ;

         })
       }
     }


  render(){
    return (
      <div>
        <h1>Clientes</h1>


        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <Link to="/add-item">Cadastar Clientes</Link>
          </div>
        </div><br />


        <table className="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Nome</td>
                <td>Email</td>
                <td width="200px">Ação</td>
            </tr>
            </thead>
            <tbody>
              {this.tabRow()}
            </tbody>
        </table>
    </div>
    )
  }
}
export default DisplayCliente;