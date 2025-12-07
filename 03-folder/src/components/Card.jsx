import React from 'react'

const Card = (props) => {
    console.log(props);
    
  return (
    <>

    <div className='parent'>
      <div className="card">
        
        <img src={props.img} alt="" />
        <h1>{props.user}</h1>
        <h2>{props.age}</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quas?</p>
        <button>View Profile</button>
      </div>
    </div>

    </>
  )
}

export default Card