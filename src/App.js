import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import GenderDropdown from './GenderDropdown';
import ChartWrapper from './ChartWrapper';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "women"
    }
  }

  genderSelected = gender => {
    return this.setState({gender});
  }

  render() {
    return (
      <div className="App">
        <Navbar bg="light">
          <Navbar.Brand>Tall People</Navbar.Brand>
        </Navbar>
        <Container>
          <Row>
            <Col xs={12}>
              <GenderDropdown genderSelected={this.genderSelected} />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <ChartWrapper gender={this.state.gender} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
