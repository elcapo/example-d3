import React from 'react';
import Hello from './Hello';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personClicks: 0
    }

    this.personClicked = this.personClicked.bind(this);
  }

  personClicked() {
    this.setState({ personClicks: this.state.personClicks + 1 });
  }

  render() {
    return (
      <div className="App">
        <Hello person="Tony" personClicked={this.personClicked} />
        <Hello person="Mary" personClicked={this.personClicked} />
        <Hello person="Susan" personClicked={this.personClicked} />
        <Hello personClicked={this.personClicked} />
        Person Clicks: {this.state.personClicks}
      </div>
    );
  }
}

export default App;
