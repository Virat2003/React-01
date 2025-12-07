import { useState } from "react"

const App = () => {

  // const [num, setnum] = useState(0)
  // const [num, setnum] = useState({user:"virat", age:20})
  // const [num, setnum] = useState([10,20,30,40])

  // const btnclickedchange = () =>{
    // console.log("button clicked");
    // setnum(num+ 1)
    // console.log(num);
    // console.log(num.user);
    // console.log(num.age);

  // const newNum ={...num}
  // newNum.user="aba"
  // newNum.age=78

  // setnum(newNum)

  // const newNum = [...num]
  // newNum.push(987)
  // console.log(newNum);
  // setnum(newNum)


//   setnum(prev=>({
//     ...prev, age:45
//   }))
// }

  // const [name, setname] = useState("virat")
  // const [nums, setnums] = useState({username:"aba",age:22})
  // const [arr1, setarr1] = useState([10,20,54,78])
  // const [prac, setprac] = useState(0)
  // const increasebtnclicked =()=>{
  //   setprac(prac+1)
  // }

  //   const decreasebtnclicked =()=>{
  //   setprac(prac-1)
  // }


  // const btnclicke = ()=>{
  //   // setname("rane")
  //   // const newnums ={...nums}
  //   // newnums.username="vishal"
  //   // setnums(newnums)

  //   const newnums=[...arr1]
  //   newnums.push(456789)
  //   setarr1(newnums)
  // }

  // const [nums, setnums] = useState({username:"virat",age:22})
  // const btn = ()=>{
  //   const newNums = {...nums}
  //   newNums.username = "saurabh"
  //   setnums(newNums)
  // }

  // const [arr1, setarr1] = useState([10,78,96,35])

  // batch update:
  const [nums, setnums] = useState(0)
  const btn = ()=>{
    // setnums(prev=>(prev+1))
    // setnums(prev=>(prev+1))
    // setnums(prev=>(prev+1))

    setnums(prev=>(prev+1))
    setnums(prev=>(prev+1))

  }



  // const btn = ()=>{
  //   const newarr1 = [...arr1]
  //   newarr1.push(9087)
  //   setarr1(newarr1)
    
  // }




  return (
    <div>
      {/* <h1>{num.user} {num.age}</h1> */}
      {/* <h1>{num}</h1> */}
      {/* <button onClick={btnclickedchange}>click </button> */}

      {/* <h1>{nums.username},{nums.age}</h1> */}

      {/* <h1>{arr1}</h1> */}

      {/* <button onClick={btnclicke}>button</button>
      <h1>{prac}</h1>
      <button onClick={increasebtnclicked}>increase</button>
      <button onClick={decreasebtnclicked}>decrease</button> */}

      <h1>{nums}</h1>
      <button onClick={btn}>tap</button>
      
    </div>
  )
}

export default App