import { useState } from "react";
import TaskItem from "./TaskItem";

function Tasks() {
  const [Tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  function handleChange(event) {
    let task = event.target.value;
    setInput(task);
    console.log(input);
  }

  function addTask(){
    setTasks((prev) => [...prev, input]);
    setInput("");
    console.log(Tasks);
  }

  function deleteTask(id){
    setTasks((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      })
    });
  }

  return(<div>
    <div className="w-full max-w-md bg-bermuda rounded-2xl shadow-lg p-8 mt-5 flex flex-col">
        
        {/* input */}
        <div className="flex flex-row gap-45">
            <input onChange={handleChange} type="text" name="" value={input} id="" placeholder="Write Task Here!" className=" border-b border-gray-300 py-2 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"/>
            <button onClick={addTask} className="text-white px-4 py-2 rounded-xl hover:opacity-80 transition bg-red-400 ">+</button>
        </div>

        {/* Tasks */}
        <div className="mt-8  rounded-xl">
          <ul className="">

            {Tasks.map((task, index) => (
              <TaskItem 
              key={index}
              id={index}
              text={task}
              onChecked={deleteTask}
              />
            ))}

           

          </ul>
        </div>
                 
    </div>
  </div>);
}

export default Tasks;
