import React from 'react';

export class ProductListItem extends React.Component{
    render(){
        let currentProduct=this.props;
         return(
             <div>

                  <li>{currentProduct.product.name}</li>

             </div>
         )

    }
}
export default ProductListItem;