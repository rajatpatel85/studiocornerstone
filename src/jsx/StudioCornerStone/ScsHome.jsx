import React, { Component } from "react";
import "../../css/Scs.css";
import { Carousel } from "react-bootstrap";

class ScsHome extends Component {
  render() {
    return (
      <div>
        <div className="ScsApp-header-border" />
        <Carousel>
          <Carousel.Item>
            <img
              alt="Slide 1"
              src={require("../../images/Gautam_pic1.jpg")}
              animateIn="true"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              alt="Slide 2"
              src={require("../../images/Gautam_pic2.jpg")}
              animateIn="true"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img alt="Slide 3" src={require("../../images/Gautam_pic3.jpg")} />
            <Carousel.Caption>
              <h3>Third slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
export default ScsHome;
