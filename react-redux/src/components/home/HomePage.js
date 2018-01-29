import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Accuracy Soft Informatica Ltda</h1>
        <p>Administração Hospitalar</p>
        <Link to="about" className="btn btn-primary btn-lg">Mais Detalhes</Link>
      </div>
    );
  }
}

export default HomePage;
