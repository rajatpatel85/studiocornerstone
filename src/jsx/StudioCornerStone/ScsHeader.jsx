import React, { Component } from "react";
import "../../css/Scs.css";
import { Nav, NavItem } from "react-bootstrap";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import ScsHome from "./ScsHome";
import ScsProjects from "./ScsProjects";

class ScsHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { highlightedKey: 1 };
  }
  assignActiveStatus(selectedKey) {
    this.setState(state => {
      return { highlightedKey: selectedKey };
    });
  }

  handleSelect = selectedKey => {
    //alert(`selected ${selectedKey}`);
    //console.log(document.getElementsByTagName("nav"));
    this.assignActiveStatus(selectedKey);
  };
  render() {
    return (
      <div>
        <div className="ScsApp-header">
          <div className="ScsApp-logo" />
        </div>
        <Router>
          <span className="">
            <Nav
              bsStyle="pills"
              activeKey={this.state.highlightedKey}
              onSelect={this.handleSelect}
              pullRight
            >
              <NavItem
                eventKey={1}
                componentClass={Link}
                href="/home"
                to="/home"
              >
                Home
              </NavItem>

              <NavItem
                eventKey={2}
                componentClass={Link}
                href="/projects"
                to="/projects"
                title="projects"
              >
                Projects
              </NavItem>

              <NavItem
                eventKey={3}
                componentClass={Link}
                href="/contactUs"
                to="/contactUs"
                title="contactUs"
              >
                Contact Us
              </NavItem>
            </Nav>
            <Route path="/home" component={ScsHome} />
            <Route path="/projects" component={ScsProjects} />
          </span>
        </Router>
      </div>
    );
  }
}
export default ScsHeader;