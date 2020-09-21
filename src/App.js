import React, { Component } from "react";
import BarraTitulo from "./componentes/BarraTitulo";
import moment from "moment";
import Grafica from './componentes/Grafica'
import Tabla from './componentes/Tabla'
import Form from './componentes/Form'
moment.locale("es");
class App extends Component {
  state ={
    registros: [],
    modal: false
  }

  componentDidMount(){
    if(localStorage.getItem('registros')){
      const registros = JSON.parse(localStorage.getItem('registros'))
      this.setState({
        registros 
      })
    }
  }

  aceptarRegistro = ({fecha,peso})=>{
    const nuevoregistro =[+fecha,+peso];
    console.log(nuevoregistro);
    const newstateregistros = [...this.state.registros,nuevoregistro]
    localStorage.setItem('registros',JSON.stringify(newstateregistros))
    this.setState({
      registros:newstateregistros
    });
  }

  onCerrarForm =()=>{
    this.setState({
      modal:false
    })
  }

  reiniciarRegistros =()=>{
    localStorage.clear()
    this.setState({
      registros:[]
    })
  }

  render(){
      const btnAdd = {
        position: "absolute",
        top:"80%",
        right:"10%",
      }

  return (
    <div>
    <Form visible={this.state.modal} onAceptar={this.aceptarRegistro} onCerrar={this.onCerrarForm}/>
    <BarraTitulo/>
      <main>
      <div className ="valign-wrapper">
          <h2>Registro diario de Peso</h2>
      </div>
        <div className="row">
          <div className="col l6 m12 s12">
            <Grafica registros={this.state.registros}/>
            <a className="btn" onClick={this.reiniciarRegistros}>Reiniciar Lecturas</a>
          </div>
          <div className="col l6 m12 s12">
            <Tabla registros = {this.state.registros} />
          </div>
          </div>
        <a className = "btn-floating btn-large waves-effect waves-light green"
          style={btnAdd}
          onClick={()=>this.setState({modal:true})}
          >
          <i className="material-icons">add</i>
        </a>
      </main>
    </div>
    );
  }
}

export default App;
