import React from 'react';
import './ProductRow.css';

class ProductRow extends React.Component {
  render() {
    return (
      <tr className={this.props.product.stocked? "" : "product-out-of-stock"}>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    )
  }
}

export default ProductRow