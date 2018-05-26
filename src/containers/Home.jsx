import React, { Component } from 'react';

import homeHero from '../asset/img/home-hero.png';
import ExploreItem from '../components/ExploreItem.jsx';
import ProtocolCard from '../components/ProtocolCard';
import TopPickCard from '../components/TopPickCard';
import Carousel from '../components/Carousel';

import smartContract from '../asset/img/smartContract.png';
import architecture from '../asset/img/architecture.png';
import optimization from '../asset/img/optimization.png';
import analysis from '../asset/img/analysis.png';
import testing from '../asset/img/testing.png';
import protocol from '../asset/img/protocol.png';
import preview from '../asset/img/preview.png';
import ethereumCropped from '../asset/img/ethereumCropped.png';
import bitcoinCropped from '../asset/img/bitcoinCropped.png';
import rippleCropped from '../asset/img/rippleCropped.png';
import hyperledgerCropped from '../asset/img/hyperledgerCropped.png';
import openchainCropped from '../asset/img/openchainCropped.png';
import person1 from '../asset/img/person1.png';
import person2 from '../asset/img/person2.png';
import person3 from '../asset/img/person3.png';
import person4 from '../asset/img/person4.png';
import person5 from '../asset/img/person5.png';

class Home extends Component {

  render() {
    return (
      <div className="home">
        <section className="home-hero">
          <img src={homeHero} alt=""/>
          <span className="overlay-black"/>
          <div className="hero-content">
             <h1 className="title">Unlock the Limitless Potential</h1>
              <div className="subtitle">Only the Outstanding blockchain developers. On demand.</div>
              <form>
                <input type="text" name="search"/>
                <button>Search</button>
              </form>
              <div className="tags">
                <tag>Smart Contract</tag>
                <tag>Architecture</tag>
                <tag>Analyst</tag>
                <tag>Optimization</tag>
              </div>
          </div>
        </section>
        <section className="home-body">
          <section className="explore">
            <h2 className="title">Explore what we can offer</h2>
            <div className="subtitle">Get inspired by the blockchain talent found within the community</div>
            <div className="explore-group">
              <ExploreItem image={smartContract} description="Smart Contracts"/>
              <ExploreItem image={architecture} description="Architecture"/>
              <ExploreItem image={optimization} description="Optimization"/>
            </div>
            <div className="explore-group">
              <ExploreItem image={analysis} description="Analysis"/>
              <ExploreItem image={testing} description="Testing"/>
              <ExploreItem image={protocol} description="Protocol"/>
            </div>
          </section>
          <section className="perfect-clarity">
            <div className="section-content">
              <h2 className="title">Get Perfect Clarity</h2>
              <div className="subtitle">Know how your projects are going. All the time.</div>
              <button>Learn more</button>
            </div>
            <img src={preview} alt=""/>
          </section>
          <section className="first-step">
            <h2 className="title">Take The First Step</h2>
            <div className="subtitle">Whatever your goal, we know just the developer you need</div>
            <div className="protocols">
              <ProtocolCard image={ethereumCropped} name="Ethereum" />
              <ProtocolCard image={bitcoinCropped} name="Bitcoin" />
              <ProtocolCard image={rippleCropped} name="Ripple" />
              <ProtocolCard image={hyperledgerCropped} name="Hyperledger" />
              <ProtocolCard image={openchainCropped} name="Openchain" />
            </div>
          </section>
          <section className="top-pick">
            <h2 className="title">Community Top Pick</h2>
            <span className="title-line"/>
            <Carousel numberVisible={3}>
                <TopPickCard image={person1} name="John Grint" job="blockchain artchitect" />
                <TopPickCard image={person2} name="Emma Travolta" job="consultant" />
                <TopPickCard image={person3} name="Rubert Hastings" job="Optimization" />
                <TopPickCard image={person4} name="Tom Huang" job="blockchain engineer" />
                <TopPickCard image={person5} name="DeShawn Lewis" job="blockchain engineer"/>
            </Carousel>
          </section>
        </section>
      </div>
    );
  }
}

export default Home;