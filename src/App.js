import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import GenderDropdown from './GenderDropdown';
import ChartWrapper from './ChartWrapper';

class App extends React.Component {
  constructor(props) {
    super(props);

    const app = this;
    app.gender = "men";
    app.genderSelected = this.genderSelected.bind(this);
  }

  genderSelected(gender) {
    const app = this;
    app.gender = gender;
    console.log("Gender is now", app.gender);
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
              <ChartWrapper />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
