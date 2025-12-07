import React, { useState } from "react";

const App = () => {

  // const [title, settitle] = useState('virat')
  // const submitHandler = (e)=>{
  //   e.preventDefault()
  //   console.log("form is submitted by ", title);
    
  // }


  // const [title, setTitle] = useState("")
  // const submitHandler = (e)=>{
  //   e.preventDefault()
  //   console.log("form is submitted by",title);
    
  // }


  // const [title, settitle] = useState('')
  // const submitHandler = (e)=>{
  //   e.preventDefault()
  //   console.log("form is submitted by",title);
  //   settitle("")
    
  // }

  const [title, settitle] = useState("")
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("form is submitted by", title);
    settitle("")
    

  }




  return (
    <div>
      {/* <form
        onSubmit={(e) => {
        submitHandler(e);
        }}
      >
        <input
          type="text" placeholder="enter your name" value={title} onChange={(e)=>{
          settitle(e.target.value)}} />
        <button>submit</button>
      </form> */}



      {/* <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder="enter name" value={title} onChange={(e)=>{
          setTitle(e.target.value)
          
        }}/>
        <button>submit</button> */}
      {/* </form> */}

      {/* <form onSubmit={(e)=>{
        submitHandler(e)
      }}>

        <input type="text" placeholder="enter name" value={title} onChange={(e)=>{
          settitle(e.target.value)
        }} />
        <button>submit</button>
      </form> */}

      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder="enter name:"  value={title} onChange={(e)=>{
          settitle(e.target.value)
        }}/>
        <button>submit</button>
      </form>


    </div>
  );
};

export default App;
