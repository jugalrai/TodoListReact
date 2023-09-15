import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");
  const inputTask = useRef(null);
  const addTask = () => {
    if (task.trim() !== "") {
      setTodoList([...todoList, task]);
      inputTask.current.value = "";
    } else {
      toast.error("Please enter a valid task.",{
        autoClose: 1000});
    }
  };
  return (
    <div className="">
      <div className="flex justify-center bg-custom border-b-4">
        <input
          type="text"
          placeholder="Enter your task"
          className="font-serif w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none  bg-transparent my-4 mx-4 bg-slate-100"
          ref={inputTask}
          onChange={(event) => setTask(event.target.value)}
        />
        <button
          className="mx-4 my-4 inline-flex items-center gap-2 justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
          onClick={addTask}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </span>
          <span>Add</span>
        </button>
      </div>
      <ol className="list-disc list-outside">
        {todoList.map((task, key) => (
          <li
            key={key}
            className=" uppercase font-serif text-2xl flex justify-center mt-4">
            {task}
          </li>
        ))}{" "}
      </ol>
      <ToastContainer />
    </div>
  );
}
export default App;
