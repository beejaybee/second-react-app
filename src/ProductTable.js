import React from 'react';
import ProductRow from './ProductRow.js';
import ProductTableHeader from './ProductTableHeader.js';


class ProductTable extends React.Component {
  
  state = {
    sort: {
      column: 'name',
      direction: 'desc'
    }
  }
  
  sortByColumnAndDirection = (objectA, objectB) => {
    let isDesc = this.state.sort.direction === 'desc' ? 1 : -1;
    let [a, b] = [objectA[this.state.sort.column], objectB[this.state.sort.column]];
    if (this.state.sort.column === 'price') {
      [a, b] = [a, b].map((value) => parseFloat(value.replace(/[^\d.]/g, ''), 10));
    }
    if (a > b) {
      return 1 * isDesc;
    }
    if (a < b) {
      return -1 * isDesc;
    }
    return 0;
  }

  sortProducts () {
    let ProductsAsArray = Object.keys(this.props.products).map(pid => this.props.products[pid]);
    return ProductsAsArray.sort(this.sortByColumnAndDirection);
  }
  handleDestroy = (id) => {
    this.props.onDestroy(id);
  }
  
  handleSort = (column, direction) => {
    this.setState({
      sort: {
        column: column,
        direction: direction
      }
    });
  }
  render() {
    
    let rows = [];
    
    this.sortProducts().forEach(product => {
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      rows.push(
        <ProductRow product={product} key={product.id}  onDestroy={this.handleDestroy} />
      )
    })
    
    return (
      <table>
        <thead>
          <tr>
            <ProductTableHeader 
            onSort={this.handleSort}
            column="name" 
            currentSort={this.state.sort}
            />
            <ProductTableHeader
            onSort={this.handleSort} 
            column="price" 
            currentSort={this.state.sort}
            />
          </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>

      </table>
    )
  }
}

export default ProductTable;