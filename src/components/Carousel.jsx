import React, { Component } from 'react';
import arrow from '../asset/img/arrow.png';


class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      direction: 0,
    }
  }

  swipeLeft = () => {
    const { index, direction } = this.state;

    if ( index > 0 ) {
      this.setState({direction: direction + 360, index: index - 1});
    }
  }

  swipeRight = () => {
    const { children } = this.props;
    const { index, direction } = this.state;

    if ( index < children.length - 1) {
      this.setState({direction: direction - 360, index: index + 1});
    }
  }

  render() {
    const { children } = this.props;
    const { direction } = this.state;
    return (
      <div className="carousel">
        <img className="arrow left" src={arrow} alt="" onClick={this.swipeLeft} />
        <div className="carousel-items">
          {React.Children.map(children, item => React.cloneElement(item, { direction }))}
        </div>
        <img className="arrow" src={arrow} alt="" onClick={this.swipeRight} />
      </div>
    );
  }
}

export default Carousel;