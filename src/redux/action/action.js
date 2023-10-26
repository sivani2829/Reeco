
let ids=5;
function addId(){
   return ids+=1;
}
export function addClick(todo){
   return {type:'add-click',payload:todo}
}

export function addyes(todo){
    return {type:'add-Yes',payload:todo}
 }
 
 export function addNo(todo){
    return {type:'add-No',payload:todo}
 }

export function addProduct(todo){
       let idn=addId()
       return {type:'add-product',payload:{...todo,id:idn}}
    }

export function edittodo(todo){
   return {type:'edit-todo',payload:todo}
}
export function deletetodo(id){
   return {type:'delete-todo',payload:id}
}