import React, { Component } from "react";
import Counter from "./counter";

function Counters(props) {
    const { counters, onReset, onDelete, onIncrement, onDecrement } = props;

    return (
        <div>
            <button
                onClick={onReset}
                className="btn btn-primary btn-sm m-2"
            >
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