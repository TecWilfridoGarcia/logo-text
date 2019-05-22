import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Slider1 from '../../assets/slider1.jpg';
import Slider2 from '../../assets/slider2.jpg';
import Slider3 from '../../assets/slider3.jpg';
import './Carousel.css';


class ControlledCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img
              className="d-block rounded mx-auto d-block imagen-size"
              src={Slider1}
              alt="First slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            
            <img
              className="d-block rounded mx-auto d-block imagen-size"
              src={Slider2}
              alt="Third slide"
            />
  
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block  rounded mx-auto d-block imagen-size"
              src={Slider3}
              alt="Third slide"
            />
  
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
  
      );
    }
  }
  export default ControlledCarousel;
  
 // render(<ControlledCarousel />);