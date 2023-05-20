import React, { Component } from "react";
import Counter from "./counter";

function Counters(props) {
    const { counters, onReset, onDelete, onIncrement, onDecrement, addCounter, removeCounter } = props;

    return (
        <div>
            <button onClick={addCounter} className="btn btn-outline-success btn-sm m-2">
                Add counter
            </button>
            <button onClick={removeCounter} className="btn btn-outline-danger btn-sm m-2">
                Remove counter
            </button>
            <button onClick={onReset} className="btn btn-outline-dark btn-sm m-2">
                Reset
            </button>
            {counters.map((counter) => (
                <Counter
                    key={counter.id}
                    onDelete={onDelete}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    counter={counter}
                >
                    <h6>{counter.id})</h6>
                </Counter>
            ))}
        </div>
    );
}

export default Counters;