import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import ChartWrapper from './ChartWrapper';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="light">
          <Navbar.Brand>Tall People</Navbar.Brand>
        </Navbar>
        <Container>
          <ChartWrapper />
        </Container>
      </div>
    );
  }
}

export default App;
