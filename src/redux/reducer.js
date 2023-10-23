import { Add_todo, Delete_todo, Edit_todo, Toggletodo,  } from "./actiontype"

 const initialstate={
    todos:[],
  
}
 export const  reducer=(state=initialstate,{type,payload})=>{
  switch(type){
    case Add_todo:
     return{
     
        todos:[...state.todos,{id:Date.now(),text:payload.text,completed:false}]
     } 
     case Toggletodo:
        return {
            todos:state.todos.map((el)=>
                el.id==payload?{...el,completed:!el.completed}:el)
        }
     case Delete_todo:
        return{
            todos:state.todos.filter((e)=>e.id!==payload)
        }
        case Edit_todo:
            return{
               todos:state.todos.map((el)=>
                el.id==payload.id?{...el,text:payload.text}:el)
            }
    default:return initialstate
  }
}
