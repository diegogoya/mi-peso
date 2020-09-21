import React from 'react'
import Highcharts from "highcharts";

class Grafica extends React.Component{

	componentDidMount(){
		this.iniciarGrafica(this.props.registros)

	}

	componentWillReceiveProps(nextProps) {
		this.iniciarGrafica(nextProps.registros)
	}

	iniciarGrafica = (registros)=>{
		Highcharts.chart("grafica",{
	      title:{
	        text:"Mi registro de peso"
	      },
	      xAxis:{
	        type:"datetime"
	      },
	      series: [
	        {
	          name:"test",
	          data:registros
	        }
	      ]
	    });
	}
	render(){
		return(
			<div id="grafica" />
		);
 
	}

}

export default Grafica