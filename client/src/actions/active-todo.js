import axios from 'axios'
export function shortlistItem(item){
  return function(dispatch){
    console.log(item.title + " Shortlisted");
    axios.post("/api/items", {id: item.id, title: item.title})
      .then(res=>dispatch({
        type: "ITEM_SHORTLISTED",
        payload: res.data
      }));
  }
}