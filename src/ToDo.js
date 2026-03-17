import { useEffect, useState } from "react";
import moment from 'moment';

function ToDo() {
  // this is a react state, a feature of react - question is the variable, setQuestion is the function used to change the variable
  //const defines a variable
  // [],{} can be defined as const and still be edited as normal [1,2], insides are not constants and that's okay.
  const [tasks, setTasks] = useState([]);

  //this runs on page load
  useEffect(() => { loadTasks() }, [])

  function loadTasks() {
    //url 
    fetch('http://localhost:3001/todo')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setTasks(data)
      })

  }

  function addTask(e) {
    e.preventDefault();
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value;
    if (!task) {
      return;
    }
    const newTask = {
      title: task,
      date: getCurrentDateTime(),
      user_id: 1,
    };
    setTasks([...tasks, newTask]);
  
    fetch('http://localhost:3001/todo/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask)
    })

    taskInput.value = "";
    togglePopup();
  }

  function getCurrentDateTime() {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  function togglePopup() {
    const form = document.getElementById("newTaskForm");
    if (form.style.display === "none") {
      form.style.display = "flex";
    } else {
      form.style.display = "none";
    }
  }


  return (
    <div style={{ background: "#B3DEC1", height: "auto", minHeight: "100vh" }}>
      {/* Move the Add New Task button and form to the top */}
      <button className="btn btn-primary" onClick={togglePopup} style={{ margin: "10px" }}>
        Add New Task
      </button>
      
      {/* Tasks in form of cards */}
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {tasks.map((task, index) => (
          <div key={index} className="card" style={{ width: "18rem", margin: "10px" }}>
            <div className="card-body">
              <h3 className="card-title">{task.title}</h3>
              <p className="card-text">
                {moment(task.date).fromNow()}
              </p>
              <div>
                <button className="btn btn-danger" onClick={() => {
                  fetch(`http://localhost:3001/todo/delete`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ id: task.id })
                  }).then(() => {
                    loadTasks();
                  })
                }}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <form
        onSubmit={addTask}
        style={{
          position: "absolute",
          left: "calc(50% - (350px / 2))",
          top: "150px",
          display: "none",
          flexDirection: "column",
          background: "white",
          width: "350px",
          margin: "auto",
          border: "1px solid grey",
          padding: "15px",
        }}
        id="newTaskForm"
      >
        <h2>New task</h2>
        <label htmlFor="taskInput" className="form-label">
          Task:
          <input
            type="text"
            required
            className="form-control"
            id="taskInput"
            placeholder="Enter task"
            autoComplete="off"
          ></input>
        </label>
        <button type="submit" className="btn btn-success mt-3 mb-3">
          Add task
        </button>
      </form>
    </div>
  );
}

export default ToDo;