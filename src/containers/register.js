import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import {registerUser} from '../actions/register';

class Register extends React.Component{

     constructor(){
         super();

         this.state={
             username: null,
             password: null,
             emailId: null
         }
     }
     onInputChange = (event) => {
      
        let name=event.target.name;
        let value=event.target.value;
        this.setState({[name]:value});
    }

    submitForm=(event) => {
        event.preventDefault();
        console.log(this.state);
          console.log(this.props.registerUser(this.state));
    }

      render(){
          return(

            <div>

              <form onSubmit={this.submitForm}>

                Username: <input
                   onChange={this.onInputChange}
                
                placeholder="enter username" type="text" name="username"></input> <br></br>

                Password: <input onChange={this.onInputChange} placeholder="enter password" type="text" name="password"></input> <br></br>

                EmailId: <input onChange={this.onInputChange} placeholder="enter emailId" type="text" name="emailId"></input><br></br>

                    <button>Submit</button>
                 

              </form>

            </div>
          )
      }

}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({registerUser:registerUser}, dispatch);
  }

  export default connect(null,mapDispatchToProps)(Register)
