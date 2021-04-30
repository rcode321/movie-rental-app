import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

class Counter extends Component {
  render() {
    return (
      <div>
        <Badge variant={this.getBadgeClasses()}>{this.formatCount()}</Badge>
        <Button
          onClick={() => this.props.onIncrement(this.props.counter)}
          variant="secondary"
        >
          Increment
        </Button>
        <Button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          variant="danger m-2"
        >
          Delete
        </Button>
      </div>
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
