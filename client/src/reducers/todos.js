 export default function(state = [], action){
  switch(action.type){
    case "LOAD_TODOS":
      return [...state, ...action.payload];
    default:
      return state;
  }
 }