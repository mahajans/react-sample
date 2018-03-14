import React from 'react';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.filterFunction = this.filterFunction.bind(this);
  }

  filterFunction(product) {
    if (!this.props.filter)
      return true;
    let filter = this.props.filter;
    return product.name.toLowerCase().includes(filter.text.toLowerCase()) && (product.stocked || !filter.excludeOutOfStock);
  }

  render() {
    let filteredProducts = this.props.products.filter(this.filterFunction);
    let productRows = filteredProducts.map(product => <ProductRow product={product} key={product.name}/>);

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{productRows}</tbody>
      </table>
    );
  }
}

export default ProductTable;