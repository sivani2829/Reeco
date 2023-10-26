
import { createStore } from "redux";

let status_data=require('../../DATA.json')

const initialState={
    todos:status_data
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'add-click':
            return{ ...state,todos:state.todos.map((todo)=>todo.id===action.payload.id?{...todo,status:action.payload.status}:todo)}
        case 'add-Yes':
            return{ ...state,todos:state.todos.map((todo)=>todo.id===action.payload.id?{...todo,status:action.payload.status}:todo)}
        case 'add-No':
            return{ ...state,todos:state.todos.map((todo)=>todo.id===action.payload.id?{...todo,status:action.payload.status}:todo)}
        case 'add-product':
            const newProduct={id:action.payload.id,status:action.payload.status,quantity:action.payload.quantity,price:action.payload.price,productName:action.payload.productName,brand:action.payload.brand}
            return{...state,todos:[...state.todos,newProduct]}
        default :
        return state

    }
}

const store=createStore(reducer);
console.log('storedata',store.getState())
export default store;