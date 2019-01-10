import axios from 'axios'

export function loadTodos(){
  return function(dispatch){
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(res=>{
        dispatch({
          type: "LOAD_TODOS",
          payload: res.data
        });
      });
  }
}

export function itemClicked(item){
  return {
    type: "ITEM_CLICKED",
    payload: item
  }
}