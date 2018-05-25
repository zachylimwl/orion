import React, { Component } from 'react';
import homeHero from '../asset/img/home-hero.png';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <section className="home-hero">
          <img src={homeHero} alt=""/>
          <div className="hero-content">
             <h1 className="title">Unlock the Limitless Potential</h1>
              <div className="subtitle">Only the Outstanding blockchain developers. On demand.</div>
              <form>
                <input type="text" name="search"/>
                <button>Search</button>
              </form>
          </div>
        </section>
        <section className="home-body"></section>
      </div>
    );
  }
}

export default Home;