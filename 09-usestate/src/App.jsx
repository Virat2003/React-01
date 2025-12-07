import React, { useState } from 'react'

const App = () => {

  // const [name, setname] = useState(0)
  // const [userName, setuserName] = useState("aba")
  // const [users, setusers] = useState([10,20,30,40])
  // const [surname, setsurname] = useState("abc")

  // function change(){
  //   setname("virat rane")
  //   setuserName("rahul rane")
  //   setusers([789,456,123])
  //   setsurname("def")
  // }


  // let a = 10;
  // console.log(a);
  
  // const clicked = function change(val){
  //   console.log(val);
    
  // }


  // let name="virat"



  // const [num, setnum] = useState(0)


  // let increaseNum = ()=>{
  //   setnum(num+1)
  // }

  // let decreaseNum = ()=>{
  //   setnum(num-1)
  // }

  // let jumpby5 = ()=>{
  //   setnum(num+5)
  // }





  const [number, setnumber] = useState(0)

  let increasenumber = ()=>{
    setnumber(number+1)
  }

  let decreasenumber = ()=>{
    setnumber(number-1)
  }

  let increasenumberby5 = ()=>{
    setnumber(number+5)
  }

  return (
    <div>
    {/* <h1> the value of a is {a}</h1> */}
    {/* <button onClick={()=>{
      a = 20
      console.log(a);
      
    }}> click me </button> */}

    {/* <button onClick={(elem)=>{
      clicked(elem.target.value)
      
    }}> clickeeedd</button> */}

    {/* <h1>the name is {name}</h1> <br />
    <h2>username is {userName} </h2><br />
    <h1>{surname}</h1>
    <h2>{users}</h2>
    <button onClick={change}> click</button> */}


    {/* <h1>{num}</h1>
    <button onClick={increaseNum}>increase</button>
    <button onClick={decreaseNum}>decrease</button>
    <button onClick={jumpby5}>jump by 5 </button> */}

    <h1>{number}</h1>
    <button onClick={increasenumber}>INCREASE</button>
    <button onClick={decreasenumber}>DECREASE</button>
    <button onClick={increasenumberby5}>INCREASE BY 5</button>

    </div>
  )
}

export default App