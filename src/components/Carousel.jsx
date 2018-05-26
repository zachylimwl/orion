import React, { Component } from 'react';
import arrow from '../asset/img/arrow.png';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberVisible: 3,
      firstVisibleIndex: 0
    }
  }

  componentWillMount() {
    const { numberVisible } = this.props;
    this.setState({numberVisible});
  }

  swipeLeft = () => {
    const { firstVisibleIndex } = this.state;
    if ( firstVisibleIndex > 0 ) {
      this.setState({firstVisibleIndex: firstVisibleIndex - 1});
    }
  }

  swipeRight = () => {
    const { firstVisibleIndex, numberVisible } = this.state;
    if ( firstVisibleIndex < numberVisible - 1) {
      this.setState({firstVisibleIndex: firstVisibleIndex + 1});
    }
  }

  render() {
    const { children } = this.props;
    const { numberVisible, firstVisibleIndex } = this.state;
    let items = children.slice(firstVisibleIndex, firstVisibleIndex + numberVisible);
    return (
      <div className="carousel">
        <img className="arrow left" src={arrow} alt="" onClick={this.swipeLeft} />
        { items }
        <img className="arrow" src={arrow} alt="" onClick={this.swipeRight} />
      </div>
    );
  }
}

export default Carousel;