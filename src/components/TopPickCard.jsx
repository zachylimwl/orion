import React, { Component } from 'react';

class TopPickCard extends Component {
  render() {
    const { image, name, job, direction } = this.props;
    const animate = {
      transition: '0.5s',
      transform: `translateX(${direction}px)`
    }
    return (
      <div className={'top-pick-card'} style={animate}>
        <img src={image} alt="" />
        <div className="card-content">
          <span className="name">{name}</span>
          <span className="job-description">{job}</span>
          <div className="metrics">Some metrics</div>
          <button>Read More</button>
        </div>
      </div>     
    )
  }
}

export default TopPickCard;