import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    // tags: ['tag1', 'tag2', 'tag3']
  };

  styles = {
    fontSize: "30px",
    fontWeight: "bold",
  };

  // renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags</p>;

  //     return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }</ul>;
  // }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get new data from the server
      console.log("prevProps:", prevProps);
      console.log("prevState:", prevState);
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counter - Rendered");

    return (
      <div>
        <h4>{this.props.counter.id}</h4>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* { this.state.tags.length === 0 && 'Please create a new tag' } */}
        {/* { this.renderTags() } */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    const x = <h1>Zero</h1>;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
