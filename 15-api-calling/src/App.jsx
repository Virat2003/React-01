import axios from 'axios'
import { useState } from 'react'

const App = () => {

  // const [data, setData] = useState([])
  // const getData=async ()=>{
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts')

  //   const data =await response.json()
  //   console.log(data);

  // }

  // const getData = async () => {

  //   const response = await axios.get('https://picsum.photos/v2/list')
  //   // console.log(response.data);

  //   setData(response.data)   //jo response.data bhetlo teka setData mdhe store kelo to ata use karu shakto

    
  // }


  // let res = arr.map((ele) => ele * ele).filter((ele)=> ele % 2 ==0)
  // console.log(res);


  // const [data, setData ] = useState([])

  // const getdata = async ()=>{

  //   const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  //   // console.log(response.data);
  //   setData(response.data)
    

  // }

  const [data, setData] = useState([])
  const getdata = async ()=>{
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const data =await response.json()
    // console.log(data);
    
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(response.data);
    setData(response.data)
    
  }
  


  return (
    <div>

      {/* <button onClick={getData}>Get App</button>

      <div>
        {data.map((elem,idx)=>{

          return <h3>hello {elem.author} {idx}</h3>
        })}
      </div> */}




      <button onClick={getdata}>get data</button>
      <div>

      {data.map((elem, idx)=>{
          return <h1>{idx}{elem. id} {elem.title} </h1>
      })}




      </div>
      {/* <div>
        {data.map((elem, idx)=>{

          return <h3>hello {idx}</h3>
        })}
      </div> */}


      {/* <div>
          {data.map((elem,idx)=>{

            return <h1>{elem.userId} {elem.title} {idx}</h1>
          })}
      </div> */}





    </div>
  )
}

export default App