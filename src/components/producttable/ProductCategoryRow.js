import React from 'react';

class ProductCategoryRow extends React.Component {
  render() {
    return (
      <tr colspan="2">
        <td>{this.props.category}</td>
      </tr>
    );
  }
}

export default ProductCategoryRow;