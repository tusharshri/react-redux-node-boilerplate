export default function(state = {}, action){
  switch(action.type){
    case "ITEM_CLICKED":
      return {...state,...action.payload}
    default:
      return state
  }
}