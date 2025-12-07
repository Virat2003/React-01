import React from 'react'

const App = () => {

  // function btnclicked() {
  //   alert("button is clicked ")
  // }

  // function mouseEnter(){
  //   console.log("mouse entered");
    
  // }

  function inputChanging(val){
    console.log(val);
    
  }

  function changing(val){
    console.log(val);
    
  }

  const func3 = (val) =>{
    console.log(val);
    
  }

  const scrolling =(elem) =>{
    // console.log("scrolling down...at speed",elem);
    
    if (elem >0) {
      console.log("frontway scrolling....");
    }
    else{
      console.log("reverse scrolling....");
      
    }
    
  }



  const clickme = (val)=>{
    // console.log("clickkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkeddddddddddddddddddddd");
    console.log(val);
    
    
  }

  return (
    <div>
      {/* <h1> hello </h1>
      <button onClick={() =>{
        console.log("button clicked");
        
      }} >click here</button>

      <input onChange={function(elem){
        inputChanging(elem.target.value)

      }} type="text" placeholder='enter name' />

      <input onChange={(elem) =>{
        changing(elem.target.value)
      }} type="text"placeholder='enter password' />




      <input onChange={ (elem)=>{
        func3(elem.target.value)

      }} type="text" placeholder='enter a name' />


      <div onMouseMove={(elem)=>{
        console.log(elem.target);
        
      }} className="box"> </div>


      <div onWheel={ (elem)=> {
        scrolling(elem.deltaY)
        // console.log(elem);
        
      }
      } className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>


      <button onClick={(elem)=>{
        clickme(elem.target)
      }}> click me </button> */}


  





    </div>
  )
}

export default App