import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";

// stateless functional Component

const NavigationBar = ({ totalCounters }) => {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#">
          Navbar
          <Badge pill variant="secondary m-2">
            {totalCounters}
          </Badge>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
