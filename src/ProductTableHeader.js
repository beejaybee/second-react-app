import React from 'react';
import './ProductTableHeader.css';

class ProductTableHeader extends React.Component {
  
  
  handleSort = (e) => {
    this.props.onSort(this.props.column, e.target.name);
  }
  
  render(){

    let currentSorts = this.props.currentSort.column === this.props.column ? this.props.currentSort.direction : false;
    return(
      <th>
        {this.props.column}
        <button
          onClick={this.handleSort}
          className={currentSorts === 'asc' ? 'ProductTableHeader-current' : ''}
          name='asc'
        >&#x25B2;</button>
        <button
          onClick={this.handleSort}
          className={currentSorts === 'desc' ? 'ProductTableHeader-current' : ''}
          name='desc'
        >&#x25BC;</button>
      </th>
    );
  }
}

export default ProductTableHeader;