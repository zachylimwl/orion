import React, { Component } from 'react';
import '../styles/css/App.css';
import { Header, Main, Footer } from '../index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
