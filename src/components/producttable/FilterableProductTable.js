import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.state = {filter: {text: '', excludeOutOfStock: false}};
  }

  handleFilterChange(searchText, excludeOutOfStock) {
    this.setState({filter: {text: searchText, excludeOutOfStock: excludeOutOfStock}});
  }

  render() {
    return (
      <div>
        <SearchBar onFilter={this.handleFilterChange} text={this.state.filter.text}
                   excludeOutOfStock={this.state.filter.excludeOutOfStock}></SearchBar>
        <ProductTable filter={this.state.filter} products={this.props.products} />
      </div>
    );
  }

}

export default FilterableProductTable;