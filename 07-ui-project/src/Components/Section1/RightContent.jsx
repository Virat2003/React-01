import React from 'react'
import RightCard from './RightCard'
import RightCardContent from './RightCardContent'

const RightContent = (props) => {
    console.log(props);
    
  return (
    <div id="right" className='h-full flex flex-nowrap overflow-x-auto gap-6 w-2/3 p-6 '>
        {props.users.map(function (elem, idx) {
            return <RightCard key ={idx} id={idx} img={elem.img} color={elem.color} tag={elem.tag} intro={elem.intro} />
        })}
     
    </div>
  )
}

export default RightContent