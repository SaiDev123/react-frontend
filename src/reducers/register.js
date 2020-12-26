export default function(state = null, action) {
    console.log("i am inside ");
    console.log(action.type);
    switch (action.type) {
      case "REGISTER":
      console.log('data',action.payload.data);
        return action.payload.data.token;
      default:
          console.log("in default");
        return state;
    }
  }
