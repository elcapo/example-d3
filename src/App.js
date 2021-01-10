import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import GenderDropdown from './GenderDropdown';
import ChartWrapper from './ChartWrapper';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="light">
          <Navbar.Brand>Tall People</Navbar.Brand>
        </Navbar>
        <Container>
          <Row>
            <Col xs={12}>
              <GenderDropdown />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <ChartWrapper />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
