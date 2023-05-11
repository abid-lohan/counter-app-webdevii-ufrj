import React, {useState} from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counters: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
        { id: 5, value: 0 }
      ],
    };
  }

  increment = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  }

  decrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  }

  reset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  }

  deleteId = (counterId) => {
    console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  }

  render() {
    return (
        <React.Fragment>
          <NavBar
              totalCounters={this.state.counters.filter((c) => c.value > 0).length}
          />

          <main role="main" className="container-fluid bg-antique">
            <div className="counters">
              <Counters
                  counters={this.state.counters}
                  onReset={this.reset}
                  onIncrement={this.increment}
                  onDecrement={this.decrement}
                  onDelete={this.deleteId}
              />
            </div>
          </main>
        </React.Fragment>
    );
  }
}

export default App;