import React, { Component } from "react";
import "../../css/Scs.css";
import { Grid,Row,Image,Col } from "react-bootstrap";

class ScsProjects extends Component {
  render() {
    return (
      <div>
        <div className="ScsApp-header-border" />
        <Grid>
          <Row>
            <h2>GAUTAM’S PENTHOUSE ,GURGAON-45-3000 SQFT</h2>
            <Col xs={6} md={4}>
              <Image src={require("../../images/Gautam_pic4.jpg")} rounded responsive/>
            </Col>
            <Col xs={6} md={4}>
              <Image src={require("../../images/Gautam_pic4.jpg")} rounded responsive />
            </Col>
          </Row>
          <Row>
            <h2>ORTHOCURE OFFICE SPACE , GURGAON (IN PROGRESS): 6000 SQFT</h2>
            <Col xs={6} md={4}>
              <Image src={require("../../images/Gautam_pic4.jpg")} rounded responsive/>
            </Col>
            <Col xs={6} md={4}>
              <Image src={require("../../images/Gautam_pic4.jpg")} rounded responsive />
            </Col>
          </Row>
          <Row>
            <h2>RESIDENCE TRIPLEX,ELEVATION DESIGN & INTERIORS (IN PROGRESS)</h2>
            <Col xs={6} md={4}>
              <Image src={require("../../images/Gautam_pic4.jpg")} rounded responsive/>
            </Col>
            <Col xs={6} md={4}>
              <Image src={require("../../images/Gautam_pic4.jpg")} rounded responsive />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
export default ScsProjects;
