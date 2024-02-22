import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

var count=1
function App() {
  var [todo,setTodo]= useState([])
  const addTodo=()=>
  {
    console.log("Add todo")
    const todoText= document.getElementById("todoInput").value
    let todoObject={
      id:count++,
      title:todoText
    } 
    console.log("todoText:"+todoText)

    todo.push(todoObject)
    setTodo([...todo]) //spradar operater (setTodo(["element1","element2",.....]))
  }

  console.log("Length of Todo",todo.length)


const deleteTodo=(id)=>
{
  console.log("Delete todo id:",id)

  todo = todo.filter(todoTemp=>
    {
        if(id===todoTemp.id)
        {
          return false
        }
        else
        {
          return true
        }
    })
    setTodo([...todo])

}
  return (
   // this div is parent div
    <div>
      <h1>Todo App</h1>
      <input id="todoInput" type="text" placeholder='Add ypur todo here....'/>
     <button onClick={addTodo}>Add</button><br/>
     {todo.map(todoTemp=>
     {
      return<div>
        { todoTemp.title}
        <button onClick={()=>deleteTodo(todoTemp.id)}>Delete</button>
        </div>
     })
      
      }
    </div>
  );
}

export default App;