import React, { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]); //to store the title and details in array

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("form is submitted", title);
    // console.log("form is submitted", details);
    const copyTask = [...task]; //to keep old data and it will add new data infront
    copyTask.push({ title, details });
    setTask(copyTask);
    // console.log(copyTask);
    // console.log(task);
    setTitle("");
    setDetails("");
  };

  const deleteBtn = (idx) => {
    // console.log("deleted");
    const copyTask = [...task]
    // console.log(idx);
    // console.log(copyTask[idx]);
    copyTask.splice(idx,1)  //to delete the task idx=index and 1 means 1 item delete kr
    setTask(copyTask)
    
    
  };

  return (
    <div className="h-screen lg:flex bg-black text-white p-5">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-4 lg:w-1/2 p-10 flex-col items-start "
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>

        {/* first input heading */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5  py-2 w-full font-medium border-2 rounded outline-none"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/* second input detail */}
        <textarea
          type="text"
          placeholder="enter notes details"
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
        <h1 className="text-3xl font-bold">Recent notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto">
          {task.map((elem, idx) => {
            180;
            return (
              <div
                key={idx}
                className="flex justify-between flex-col items-start relative h-52 w-40 rounded-xl text-black pb-5 py-9 px-4 bg-cover bg-[url('https://tse1.mm.bing.net/th/id/OIP.bnRwRyLdhBdli0NoHIdQswHaHa?pid=Api&P=0&h=180')]"
              >
                <div>
                  <h3 className="leading-tight text-xl font-bold">
                    {elem.title}{" "}
                  </h3>
                  <p className="text-gray-800 mt-4 leading-tight">
                    {elem.details}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteBtn(idx);
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
