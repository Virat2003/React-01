import React from 'react'
import { useState } from 'react'

const App = () => {

  // const [, set] = useState(second)
  // const submitHandler = (e)=>{
  //   e.preventDefault()
  //   console.log("form submitted");
    
  // }

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("form is sumitted");
    
  }

  return (
    <div>
      {/* <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='enter your name' />
        <button>submit</button>
      </form> */}


      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='enter something...' />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App