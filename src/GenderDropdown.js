import React from 'react';
import { Dropdown } from 'react-bootstrap';

class GenderDropdown extends React.Component {
  constructor(props) {
    super(props);
    const dropdown = this;
    dropdown.genderSelected = props.genderSelected;
  }

  render() {
    const dropdown = this;

    return (
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Gender
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onSelect={() => dropdown.genderSelected("men")}>Men</Dropdown.Item>
          <Dropdown.Item onSelect={() => dropdown.genderSelected("women")}>Women</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default GenderDropdown;
