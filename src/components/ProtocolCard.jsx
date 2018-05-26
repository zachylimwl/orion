import React, { Component } from 'react';

class ProtocolCard extends Component {
  render() {
    const { image, name } = this.props;
    return (
      <div className="protocol-card">
        <img src={image} alt="" />
      	<span className="overlay-black"/>
        <span>{name}</span>
      </div>     
    )
  }
}

export default ProtocolCard;