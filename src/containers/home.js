import React from 'react';
import {connect} from 'react-redux';
// import './login.css';
import { bindActionCreators } from "redux";
import { getAllProducts } from '../actions/product';
import ProductListItem from '../components/ProductListItem';

class Home extends React.Component{
       componentDidMount(){
          this.props.getAllProducts();
   
       }
        renderList(){
           let productList= this.props.products.map( (product) => {

                return <ProductListItem key={product.pid} product={product}></ProductListItem>

            })
            return productList;
        }
      render(){
           
        console.log("len",this.props.products.length);
          return(
            <div>
                   <h1>I am in home!</h1>
                   <ul>
                   {this.renderList()};
                   </ul>
                    
            </div>
          )
      }
}
function mapDispatchToProps(dispatch) {
    console.log("I am in dispatch");
    return bindActionCreators({getAllProducts:getAllProducts}, dispatch);
}

  function mapStateToProps(appState){
    console.log("MapStateto props");
   console.log("appState",appState);
   return {
       products: appState.products
   }

}
  export default connect(mapStateToProps,mapDispatchToProps)(Home)
