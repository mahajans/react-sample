import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.handleAvailabilityChange = this.handleAvailabilityChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e) {
    this.props.onFilter(e.target.value, this.props.excludeOutOfStock);
  }

  handleAvailabilityChange(e) {
    this.props.onFilter(this.props.text, e.target.checked);
  }

  render() {
    return (
      <div>
        <input type="text" value={this.props.text} onChange={this.handleTextChange} placeholder="Search.."></input>
        <p>
          <input type="checkbox" checked={this.props.excludeOutOfStock} onChange={this.handleAvailabilityChange}></input>
          Exclude out of stock
        </p>
      </div>
    );
  }
}

export default SearchBar;