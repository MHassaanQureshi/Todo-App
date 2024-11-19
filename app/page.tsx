"use client";
import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState<string[]>([]);
  const [notification, setNotification] = useState("");

  const handleTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!task.trim()) {
      setNotification("Task cannot be empty!");
      return;
    }
    setTaskList([...taskList, task]);
    setTask(""); 
    setNotification("Task added successfully!");
  };

  const handleDeleteTask = (index: number) => {
    setTaskList(taskList.filter((_, i) => i !== index));
    setNotification("Task deleted successfully!");
  };

  return (
    <>
      <div className="w-full bg-black text-white h-12 flex justify-center align-middle py-2">
        <h1 className="flex text-2xl font-extrabold">TODO-APP</h1>
      </div>
      <div className="bg-black w-full h-[100vh] flex justify-center mt-4 flex-col">
        <form
          className="p-4 flex flex-col bg-black lg:w-[50%] lg:ml-[25%]"
          onSubmit={handleTask}
        >
          <input
            type="text"
            placeholder="Enter task"
            className="px-2 border-2 border-black py-4 rounded-2xl"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            type="submit"
            className="bg-white px-2 py-1 mt-4 rounded-2xl font-extrabold text-2xl"
          >
            Add
          </button>
        </form>
        {notification && (
          <div className="text-center text-white mt-4 font-semibold">
            {notification}
          </div>
        )}
        <ul className="font-normal text-xl space-y-5 flex flex-col w-full items-center">
          {taskList.map((task, index) => (
            <li
              key={index}
              className="bg-white text-black px-4 py-2 rounded-2xl w-[50%] flex justify-between items-center align-middle"
            >
              <div className="w-[250px] flex justify-center">{task}</div>
              <span>
                <button
                  className="bg-black rounded-lg text-xl h-8 w-8 text-white"
                  onClick={() => handleDeleteTask(index)}
                >
                  x
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
