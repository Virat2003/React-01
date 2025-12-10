import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1)

  const prev = ()=>{
    if(index > 1){
      setIndex(index-1)
      setUserData([])
    }
  }

  const next = ()=>{
    setIndex(index+1)
    setUserData([])
  }


  const getData = async () => {
    // console.log("data is comingggg.......");

    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    );
    //  console.log(response.data);
    setUserData(response.data);
    // console.log(printUserData);
  };


  useEffect(()=>{
  getData()
  },[index])

  let printUserData = <h1 className="text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">loading...</h1>;

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return <div key={idx}>
              <Card  elem={elem}/>
        </div>
      
    });
  }

  return (
    <div className="bg-black h-screen p-4 overflow-auto text-white">
      {/* <h1 className="bg-red-500 fixed">{index}</h1> */}
      {/* <button
        onClick={getData}
        className="bg-red-400 px-5 py-2 mb-3 rounded text-white active:scale-95" 
      >
        getdata
      </button> */}
      <div className="flex h-[84%] flex-wrap gap-4">
      {printUserData}
      </div>

      <div className="flex justify-center items-center p-3 gap-4 ">
      <button onClick={prev} className="bg-amber-600 text-black font-semibold px-4 py-2 rounded cursor-pointer active:scale-90">prev</button>
      <button onClick={next} className="bg-amber-600 text-black font-semibold px-4 py-2 rounded cursor-pointer active:scale-90">next</button>
      </div>

    </div>
  );
};

export default App;
