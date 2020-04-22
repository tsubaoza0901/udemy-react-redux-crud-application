import React from 'react';

function App() {
  return <Counter />;
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    );
  }
}

export default App;
