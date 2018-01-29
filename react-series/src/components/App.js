import React from 'react';
import PlacarContainer from './PlacarContainer';

const dados = {
  partida: {
    estadio: "Maracanã/Rj",
    data:"08/07/2017",
    horario: "19hs",
  },
  casa: {
    nome: "Vasco",
  },
  visitante: {
    nome: "Flamengo",
  }
};
export default class App extends React.Component {
  render(){
    return<PlacarContainer {...dados} />;
  }
}
