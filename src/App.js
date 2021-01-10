import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import GenderDropdown from './GenderDropdown';
import ChartWrapper from './ChartWrapper';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.gender = "men";
    this.genderSelected = this.genderSelected.bind(this);
  }

  genderSelected(gender) {
    this.gender = gender;
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
              <ChartWrapper gender={this.gender} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
