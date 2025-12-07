import React from "react";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("submitted");

    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);
    // console.log(copyTask);

    setTitle("");
    setDetails("");
  };

  const deleteButton = (idx)=>{
    const deleteTask = [...task];
    deleteTask.splice(idx, 1)
    setTask(deleteTask)
  }

  return (
    <div className="h-screen lg:flex bg-black text-white p-5">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-4 lg:w-1/2 p-10 flex-col items-start "
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>
        <input
          type="text"
          placeholder="enter title...."
          className="px-5  py-2 w-full font-medium border-2 rounded outline-none"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          type="text"
          placeholder="enter details........"
          className="px-5 py-2 w-full h-32 flex items-start font-medium flex-row border-2 rounded outline-none"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button className="bg-white active:scale-101 font-medium outline-none  text-black px-5 py-2 rounded-2xl w-full">
          Add Notes
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto">
          {task.map((elem,idx) =>{
            return (
              <div
                key={idx}
                className="flex justify-between flex-col items-start relative h-52 w-40 rounded-xl text-black pb-5 py-9 px-4 bg-cover bg-[url('https://tse1.mm.bing.net/th/id/OIP.bnRwRyLdhBdli0NoHIdQswHaHa?pid=Api&P=0&h=180')]"
              >
                <div>
                  <h3 className="leading-tight text-xl font-bold">{elem.title}
                  </h3>
                  <p className="text-gray-800 mt-4 leading-tight">{elem.details}
                  </p>
                </div>
                <button
                  onClick={()=>{
                    deleteButton(idx)
                  }}
                  className="w-full cursor-pointer active:scale-95 bg-red-500 text-white py-1 text-xs rounded font-bold"
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
