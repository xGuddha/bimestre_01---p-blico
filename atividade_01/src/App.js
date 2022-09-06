import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Evento data="2 de agosto de 2019 Sexta-Feira" horario="18h30 - 00h00" local="Parque do Povo" cidade="Campina Grande/PR" genero="Arte em forma de SERTANEJO" />
        <h1> Ingressos </h1>
        <ul style={{ textAlign: "left" }}>
          <Ingressos nome="Camarote" valor="R$100,00" />
          <Ingressos nome="Camarote Open Bar" valor="R$150,00" />
          <Ingressos nome="Front-stage" valor="R$60,00" />
          <Ingressos nome="Pista" valor="R$30,00" />
        </ul>
      </header>
    </div>
  );
}

class Evento extends React.Component {
  render() {
    return (
      <div>
        <h1>Gustavo Lima</h1>
        <p style={{ textAlign: "left" }}>
          <b>Data:</b> {this.props.data} <br />
          <b>Horario:</b> {this.props.horario} <br />
          <b>Local:</b> {this.props.local} <br />
          <b>Cidade:</b> {this.props.cidade} <br />
          <b>Genero:</b> {this.props.genero} <br />
        </p>
      </div>);
  }
}

class Ingressos extends React.Component {
  render() {
    return (
      <li>{this.props.nome}: {this.props.valor}</li>
    );
  }
}

export default App;
