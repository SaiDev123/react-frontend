export default function(state = null, action) {
    switch (action.type) {
      case "ALL_PRODUCTS":
      console.log('data',action.payload.data);
      state=action.payload.data;
      console.log("state",state);
         return state;
          
      default:
          console.log("in default");
        return [];
    }
  }