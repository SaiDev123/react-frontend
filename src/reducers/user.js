export default function(state = null, action) {
    console.log("i am inside ");
    console.log(action.type);
    switch (action.type) {
      case "REGISTER":
      console.log('data',action.payload.data)

          if(action.payload.data.token != null){

             localStorage.setItem('token', action.payload.data.token);
             return true; 
          }

        case "LOGIN":
            console.log('data',action.payload.data);
            if(action.payload.data.token != null){
              localStorage.setItem('token', action.payload.data.token);
              return true;
           }
          
      default:
          console.log("in default");
        return false;
    }

    
  }
