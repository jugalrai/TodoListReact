import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddAndDeleteTask() {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");

  const inputTask = useRef(null);

  const addTask = () => {
    if (task.trim() !== "") {
      setTodoList([...todoList, task]);
      inputTask.current.value = "";
      setTask("");
    } else {
      toast.error("Please enter a valid task.", {
        autoClose: 1000,
      });
    }
  };

  const deleteTask = (taskToDelete) => {
    const updatedList = todoList.filter((task) => task !== taskToDelete);
    setTodoList(updatedList);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  return (
    <div>
      <div className="flex justify-center max-h-[122px] bg-custom border-b-2 pt-4 pb-4 ">
        <input
          type="text"
          placeholder="Enter your task"
          className="font-serif text-xl text-white min-w-[400px] max-h-[60px] bg-slate-200 border border-slate-500 rounded-lg py-3 px-5 outline-none  bg-transparent my-4 mx-4 "
          ref={inputTask}
          onChange={(event) => setTask(event.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="mx-4 my-4 inline-flex items-center gap-2 justify-center px-4 py-2 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
          onClick={addTask}>
          Add
        </button>
      </div>
      <center>
        {todoList.length === 0 ? (
          <p className="text-white mt-4">: No tasks currently added.</p>
        ) : (
          <table className="table-auto mt-4 text-white">
            <thead>
              <tr className="font-bold text-2xl">
                <th className="px-4 py-2">Task</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {todoList.map((task, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2 min-w-[400px] max-w-[400px] break-normal">
                    {index + 1}. {task}
                  </td>
                  <td className="border px-4 py-2 w-3">
                    <button
                      className="inline-flex items-center justify-center px-4 py-2 font-sans font-semibold tracking-wide text-white bg-green-500 rounded-lg"
                      onClick={() => deleteTask(task)}>
                      Done
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <ToastContainer />
      </center>
    </div>
  );
}

export default AddAndDeleteTask;
