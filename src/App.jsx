import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  function handleTodo(event){
    setToDo(event.target.value)
  }

  function handleToDos(){
    setToDos([...toDos, {id: Date.now(), text: toDo, status: false}])
  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={handleTodo} type="text" placeholder="🖊️ Add item..." />
         {/* add button*/}
        <i onClick={handleToDos} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        { toDos.map((obj)=>{
          return( 
            <div className="todo">
              <div className="left">
                <input onChange={(e)=>{
                  setToDos(toDos.filter(obj2=>{
                    if(obj2.id===obj.id){
                      obj2.status = e.target.checked;
                    }
                    return obj2;
                  }))
                }}
                value={obj.status} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times"></i>
              </div>
            </div>
            )
          })
        }
        
      </div>
    </div>
  )
}

export default App
