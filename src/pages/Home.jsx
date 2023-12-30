import { useState, useEffect } from "react";
import Task from "../components/Task";
import ImportTasks from "../components/ImportTasks";
import ExportTasks from "../components/ExportTasks";

function Home() {
  let [taskInput, setTaskInput] = useState("");
  let [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || [],
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleTaskInput(event) {
    setTaskInput(event.target.value);
  }

  function handleTaskEnter(event) {
    if (event.key === "Enter") {
      addTask(taskInput);
    }
  }

  function addTask(task) {
    if (task === "") {
      return;
    }
    setTasks([...tasks, task]);
  }

  function removeTask(taskIndex) {
    setTasks(tasks.filter((task, index) => index !== taskIndex));
  }

  function removeAllTasks() {
    setTasks([]);
  }

  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full p-6 mx-4 md:mx-0 rounded-lg shadow-lg bg-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Todo App</h2>

          <div className="flex mb-4">
            <input
              type="text"
              className="flex-1 py-2 px-4 mr-2 rounded-md bg-gray-700 focus:outline-none"
              placeholder="Add a new task"
              onChange={handleTaskInput}
              onKeyDown={handleTaskEnter}
            />
            <button
              onClick={() => addTask(taskInput)}
              className="py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none focus:shadow-outline-blue"
            >
              Add
            </button>
          </div>

          <ul>
            {tasks.map((task, index) => (
              <Task
                key={index}
                index={index}
                task={task}
                removeTask={removeTask}
              />
            ))}
          </ul>
          <div className="flex justify-between mt-4">
            <ExportTasks tasks={tasks} />
            <ImportTasks setTasks={setTasks} />
            <button
              className="py-2 px-4 bg-red-600 hover:bg-red-700 rounded-md focus:outline-none"
              onClick={removeAllTasks}
            >
              Remove All
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
