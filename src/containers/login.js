import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import {loginUser} from '../actions/user';
// import './login.css';

class Login extends React.Component{

     constructor(){
         super();

         this.state={
             password: null,
             emailId: null,
             role: 'customer'
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
          console.log(this.props.loginUser(this.state));
    }

      render(){
        console.log('isUserLoggedIn -> reg comp', this.props.isUserLoggedIn);
          return(

            <div>
                   <h1>Login here</h1>
              <form onSubmit={this.submitForm}>

              EmailId: <input onChange={this.onInputChange} placeholder="enter emailId" type="text" name="emailId"></input><br></br>

              Password: <input onChange={this.onInputChange} placeholder="enter password" type="text" name="password"></input> <br></br>

                    <button>Submit</button>
                 

              </form>

            </div>
          )
      }

}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({loginUser:loginUser}, dispatch);
  }

  function mapStateToProps(appState){
    console.log("MapStateto props");
   console.log("appState",appState);

   return {
       isUserLoggedIn: appState.isUserLoggedIn
   }

}
  export default connect(mapStateToProps,mapDispatchToProps)(Login)
