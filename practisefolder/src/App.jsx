import React from "react";
import { useState } from "react";
import axios from "axios";
import Card from "./Components/Card";
import { useEffect } from "react";

const App = () => {
  // const [title, setTitle] = useState("");
  // const [details, setDetails] = useState("");

  // const [task, setTask] = useState([]);

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   // console.log("submitted");

  //   const copyTask = [...task];
  //   copyTask.push({ title, details });
  //   setTask(copyTask);
  //   // console.log(copyTask);

  //   setTitle("");
  //   setDetails("");
  // };

  // const deleteButton = (idx) => {
  //   const deleteTask = [...task];
  //   deleteTask.splice(idx, 1);
  //   setTask(deleteTask);
  // };

  // const [title, setTitle] = useState('')
  // const [details, setDetails] = useState('second')

  // const [task, setTask] = useState([])

  // const handleSubmit = (e)=>{
  //   e.preventDefault()
  //   // console.log("form is sumbitted");
  //   setTitle('')
  //   setDetails('')

  //   const copyTask = [...task]
  //   copyTask.push({title, details})
  //   setTask(copyTask)
  //   console.log(copyTask);

  // }

  // const deleteButton = (idx)=>{
  //   const deleteTsk = [...task]
  //   deleteTsk.splice(idx, 1)
  //   setTask(deleteTsk)
  // }

  const [userdata, setUserData] = useState([]);

  const [index, setIndex] = useState(1)

  const getdata = async () => {
    // console.log("gett");
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    );
    // console.log(response.data);
    setUserData(response.data);
  };

  let printUserdata = <h1 className="text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">loading.....</h1>

  if (userdata.length > 0) {
    printUserdata = userdata.map((elem, idx) => {
      return (
        <div key={elem}>
          <Card elem={elem} />
        </div>
      );
    });
  }

  useEffect(()=>{

    getdata()

  })

  const prev = ()=>{
    if (index > 1){
      setIndex(index-1)
      setUserData([])
    }
  }

  const next = ()=>{
    setIndex(index +1)
    setUserData([])

  }

  return (
    // <div className="h-screen lg:flex bg-black text-white p-5">
    //   <form
    //     onSubmit={(e) => {
    //       submitHandler(e);
    //     }}
    //     className="flex gap-4 lg:w-1/2 p-10 flex-col items-start "
    //   >
    //     <h1 className="text-4xl font-bold">Add Notes</h1>
    //     <input
    //       type="text"
    //       placeholder="enter title...."
    //       className="px-5  py-2 w-full font-medium border-2 rounded outline-none"
    //       value={title}
    //       onChange={(e) => {
    //         setTitle(e.target.value);
    //       }}
    //     />
    //     <textarea
    //       type="text"
    //       placeholder="enter details........"
    //       className="px-5 py-2 w-full h-32 flex items-start font-medium flex-row border-2 rounded outline-none"
    //       value={details}
    //       onChange={(e) => {
    //         setDetails(e.target.value);
    //       }}
    //     />
    //     <button className="bg-white active:scale-101 font-medium outline-none  text-black px-5 py-2 rounded-2xl w-full">
    //       Add Notes
    //     </button>
    //   </form>
    //   <div className="lg:w-1/2 lg:border-l-2 p-10">
    //     <h1 className="text-3xl font-bold">Recent Notes</h1>
    //     <div className="flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto">
    //       {task.map((elem,idx) =>{
    //         return (
    //           <div
    //             key={idx}
    //             className="flex justify-between flex-col items-start relative h-52 w-40 rounded-xl text-black pb-5 py-9 px-4 bg-cover bg-[url('https://tse1.mm.bing.net/th/id/OIP.bnRwRyLdhBdli0NoHIdQswHaHa?pid=Api&P=0&h=180')]"
    //           >
    //             <div>
    //               <h3 className="leading-tight text-xl font-bold">{elem.title}
    //               </h3>
    //               <p className="text-gray-800 mt-4 leading-tight">{elem.details}
    //               </p>
    //             </div>
    //             <button
    //               onClick={()=>{
    //                 deleteButton(idx)
    //               }}
    //               className="w-full cursor-pointer active:scale-95 bg-red-500 text-white py-1 text-xs rounded font-bold"
    //             >
    //               delete
    //             </button>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>

    <div className="bg-black h-screen overflow-auto text-white p-10">
      {/* <h1 className=" text-white font-bold">{index}</h1> */}
      {/* <form
        onSubmit={(e) => {
          handleSubmit(e);
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
                <button onClick={()=>{
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
      </div> */}

      {/* <button
        onClick={getdata}
        className="bg-red-100 h-10 rounded font-bold text-black"
      >
        get data
      </button> */}

      <div className="flex h-[84%] flex-wrap gap-4 ">{printUserdata}</div>

      <div className="flex justify-center items-center gap-3">
        <button style={{opacity: index==1 ? 0.5 : 1}} onClick={prev} className="px-3 text-black font-semibold rounded bg-amber-400">prev</button>
        page {index}
        <button onClick={next} className="px-3 text-black font-semibold rounded bg-amber-400">next</button>
      </div>

    </div>
  );
};
export default App;
