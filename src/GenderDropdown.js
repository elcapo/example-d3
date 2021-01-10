import React from 'react';
import { Dropdown } from 'react-bootstrap';

class GenderDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.genderSelected = props.genderSelected;
  }

  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Gender
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onSelect={() => this.genderSelected("men")}>Men</Dropdown.Item>
          <Dropdown.Item onSelect={() => this.genderSelected("women")}>Women</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default GenderDropdown;
