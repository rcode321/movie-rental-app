import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Counter extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs={2}>
            <Badge variant={this.getBadgeClasses()}>{this.formatCount()}</Badge>
          </Col>

          <Col xs={2}>
            <Button
              onClick={() => this.props.onIncrement(this.props.counter)}
              variant="secondary mt-2"
            >
              <i className="fa fa-plus" aria-hidden="true"></i>
            </Button>
          </Col>

          <Col xs={2}>
            <Button
              onClick={() => this.props.onDecrement(this.props.counter)}
              variant="secondary m-2"
              disabled={
                this.props.counter.value === 0 ? "secondary disabled m-2" : ""
              }
            >
              <i className="fa fa-minus" aria-hidden="true"></i>
            </Button>
          </Col>

          <Col>
            <Button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              variant="danger mt-2"
            >
              <i className="fa fa-times" aria-hidden="true"></i>
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }

  getBadgeClasses() {
    let classes = "";
    classes += this.props.counter.value === 0 ? "warning m-2" : "primary m-2";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
