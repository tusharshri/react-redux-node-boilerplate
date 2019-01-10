import axios from 'axios'

export function loadShortlist(){
  return function(dispatch){
    axios.get("/api/items")
      .then(result=>dispatch({
        type: "SHORTLIST_LOADED",
        payload: result.data
      }))
  
  }
}

export function removeShortlist(item){
  return function(dispatch){
    axios.delete(`/api/items/${item._id}`)
      .then(result=>dispatch({
        type: "SHORTLIST_ITEM_REMOVED",
        payload: item._id
      }));
  }
}

export function updateShortlist(item, value){
  return function(dispatch){
    axios.post(`/api/items/${item._id}`, {title: value})
      .then(result=>dispatch({
        type: "SHORTLIST_ITEM_UPDATED",
        payload: result.data
      }));
  }
}