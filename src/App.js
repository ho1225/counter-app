import React, { Component } from "react";
import NavBar from "./component/navBar";
import Counters from "./component/counters";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    console.log("App - Constructor");
    this.handleReset = this.handleReset.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  componentDidMount() {
    console.log("App - Mounted");
  }

  handleIncrement(counter) {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters }); //this.setState({ counters: counters});
  };

  handleReset() {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  }

  render() {
    console.log("App - Rendered");

    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
