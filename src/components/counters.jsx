import React, { Component } from "react";
import Counter from "./counter";
import Button from "react-bootstrap/Button";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        <Button onClick={onReset} variant="primary m-2">
          Reset
        </Button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
