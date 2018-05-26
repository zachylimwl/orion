import React, { Component } from 'react';

class ExploreItem extends Component {
  render() {
    const { image, description } = this.props;
    return (
      <div className="explore-item">
        <img src={image} alt=""/>
        <span></span>
        <span>{description}</span>
      </div>     
    )
  }
}

export default ExploreItem;