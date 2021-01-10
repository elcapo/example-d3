import React from 'react';
import { Dropdown } from 'react-bootstrap';

class GenderDropdown extends React.Component {
  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Gender
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>Men</Dropdown.Item>
          <Dropdown.Item>Women</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default GenderDropdown;
