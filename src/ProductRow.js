import React from 'react';
import './ProductRow.css';

const ProductRow = ({product, onDestroy}) => {
    const {stocked, name, price, id} = product

    const destroy = () => {
        onDestroy(id);
      }
    return(
        <tr>
            <td>
                <span className={stocked ? '' : 'ProductRow-out-of-stock'}>
                    {name}
                </span>
            </td>
            <td>
                {price}
            </td>
            <td>
                <button onClick={destroy}>Delete</button>
            </td>
        </tr>
    )
        
}

export default ProductRow;