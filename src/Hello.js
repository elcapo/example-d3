import React from 'react';

class Hello extends React.Component {
  render() {
    let person = "World";

    if (this.props.person) {
      person = this.props.person;
    }

    return (
      <div onClick={this.props.personClicked}>
      Hello {person}
      </div>
    );
  }
}

export default Hello;
