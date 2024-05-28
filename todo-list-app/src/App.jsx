import deleteImage from "./assets/red-delete.png";
import { useState } from "react";

function App() {
  // setting task and list as useState
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  
  // getting input value
  function handleInputChange(event){
    setTask(event.target.value);
  }

  // Adding task into array and displaying
  function add(){
    if(task.trim() !== ""){
      setList([...list,task])
      setTask("");
    }
    else{
      alert("Task cannot be empty");
    }
  }

  // Removing tasks
  function remove(index){
    const updatedList = list.filter((_,i) => i !== index)
  setList(updatedList)
  }
  return (
    <>
    <div className="container">
      <div className="box">
        <h1>To-Do App</h1>
        <hr />
        <div className="inputField">
          <input type="text" name="" id="" placeholder="Enter your task" value={task} onChange={handleInputChange}/>
          <button onClick={add} >Add</button>
        </div>
        <hr />
        <div className="listContainer">
          <ul>
            {list.map((task,index) => <li key={index}>{task}
            <img onClick={ () =>  remove(index)} src={deleteImage} /></li>)}
          </ul>
        </div>
      </div>
    </div>
    </>
  );  
}

export default App;
