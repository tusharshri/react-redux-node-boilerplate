export default function(state = [], action){
    switch(action.type){
      case "ITEM_SHORTLISTED":
        return [...state, action.payload];
      case "SHORTLIST_LOADED":
        return [...state, ...action.payload]
      case "SHORTLIST_ITEM_REMOVED":
        return state.filter(item=>item._id!==action.payload)
      case "SHORTLIST_ITEM_UPDATED":
        return [...state.filter(item=>item._id!==action.payload._id), action.payload]
      default:
        return state;
    }
   }