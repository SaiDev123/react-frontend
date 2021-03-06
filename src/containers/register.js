import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import {registerUser} from '../actions/user';

class Register extends React.Component{

     constructor(){
         super();

         this.state={
             username: null,
             password: null,
             emailId: null,
             role:"customer"
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

        console.log('isUserLoggedIn -> reg comp', this.props.isUserLoggedIn);
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

function mapStateToProps(appState){
     console.log("MapStateto props");
    console.log("appState",appState);

    return {
        isUserLoggedIn: appState.isUserLoggedIn
    }

}

  export default connect(mapStateToProps,mapDispatchToProps)(Register)
