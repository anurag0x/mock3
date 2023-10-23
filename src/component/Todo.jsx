import { Button, Checkbox, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtodo } from '../redux/action'
import { Add_todo, Delete_todo, Edit_todo, Toggletodo } from '../redux/actiontype'
import { set } from 'mongoose'

const Todo = () => {
    const [text,settodo]=useState("")
    const [completed,settatus]=useState(false)
    const [editedtext,settext]=useState("")
    const data=useSelector((store)=>store.todoreducer.todos)
    const [show ,setshow]=useState(false)
    const dispatch=useDispatch()
    const handleclick=(e)=>{
        e.preventDefault()
        const payload={
            text,completed
        }
        dispatch({type:Add_todo,payload:payload})
            settodo("")
    }
  useEffect(()=>{
    console.log(data)
  })
  return <>
    <h1>Todo App</h1>
    
   <div style={{"width":"300px","margin":"auto","display":"flex"}}>
  
   <Input type="text" id="todo" placeholder='Create New Todo...' onChange={(e)=>settodo(e.target.value)} />
   <Button colorScheme='blue' onClick={handleclick}>Button</Button>
   </div>
   <div id='mainCont'>
    {/* alltodos here */}
    <ul style={{ "gap":"10px" ,"margin":"10px"}}>
        {data.map((el,index)=>{
            return <div style={{"display":"flex","gap":"10px" ,"margin":"auto","justifyContent":"center"}} key={index}>
                <input type="checkbox" onChange={()=>dispatch({type:Toggletodo,payload:el.id})}/>
            <p>{el.text}</p>
            <p onClick={()=>{
               
                setshow(true)
            }}>✍️</p>

            <p onClick={()=>dispatch({type:Delete_todo,payload:el.id})}>❌</p>
         <div  style={{"display":show?"flex":"none"}}>
            <input style={{"outline":"1px solid blue"}} type="text" placeholder='edit title' onChange={(e)=>settext(e.target.value)}/>
            <button style={{"border":"1px solid black"}} onClick={()=>{ dispatch({type:Edit_todo,payload:{id:el.id,text:editedtext}})
        setshow(false)
        settext("")
        }}>Edit</button>
            {/* {setshow? <input type="text" placeholder=' edit title'/>:undefined} */}
            </div> 
           
            
            </div> 
        })}
    </ul>
   </div>
   
    </>
}

export default Todo