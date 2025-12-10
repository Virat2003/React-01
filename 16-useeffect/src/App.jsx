import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {


  // const [num1, setnum1] = useState(0)
  // const [num2, setnum2] = useState(100)

  // useEffect(()=>{

  //   console.log("useeffect is running........");

  // })

  // const clickbtn = ()=>{
  //   setnum(num+1)
  // }


  // useEffect(()=>{
  //   console.log("useeffect is running.............");
    
  // },[])


  // const [num1, setNum1] = useState(0)
  // const [num2, setNum2] = useState(10)


  const [a, setA] = useState(0)
  const [b, setB] = useState(10)

  const achnanging = ()=>{
    console.log("value of a is changing");
  }


  const bchnanging = ()=>{
    console.log("value of b is changing");  
  }

  useEffect(()=>{
    achnanging()
    
  }, [a])

    useEffect(()=>{
    bchnanging()
    
  }, [b])

  return (
    <div>
      {/* <h1>{num1}</h1>
      <h2>{num2}</h2> */}
      {/* <button onClick={ ()=>{
        setnum1(num1+1)
        setnum2(num2+10)
      }
      }>click</button> */}

      {/* <button onMouseEnter={()=>{
        setNum1(num1+2)
        
      }}
      
      onMouseLeave={()=>{
        setNum2(num2+10)
      }}>click</button> */}


      <h1>{a}</h1>
      <h1>{b}</h1>

      <button onClick={()=>{
          setA(a+1)
      }}>change A</button>

      <button onClick={()=>{
          setB(b+10)
      }}>change B</button>


      
    </div>
  )
}

export default App