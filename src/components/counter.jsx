import React, { Component } from "react";

function Counter(props) {
    const { counter, onIncrement, onDecrement, onDelete } = props;

    return (
        <div className="row">
            <div className="w-100">{props.children}</div>

            <div className="col-sm-1">
                <button type="button" className="btn btn-primary">
                    {props.counter.value}
                </button>
            </div>

            <div className="col">
                <button onClick={() => onIncrement(counter)} className="btn btn-secondary btn-sm">
                    <span className="fa fa-plus"></span>
                </button>

                <button onClick={() => onDecrement(counter)} className="btn btn-secondary btn-sm m-3"
                    disabled={counter.value === 0 ? "disabled" : ""}>
                    <span className="fa fa-minus"></span>
                </button>

                <button type="button" className="btn btn-danger btn-sm " onClick={() => onDelete(counter.id)}>
                    <span className="fa fa-trash"></span>
                </button>
            </div>
        </div>
    );
}

export default Counter;