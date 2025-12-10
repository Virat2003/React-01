import React from 'react'

const App = () => {

  // localStorage.setItem("user", "virat")
  // const user = localStorage.getItem('user')
  // const age= localStorage.setItem('age','18')

  // localStorage.removeItem('age')
  
  // console.log(user);
  // localStorage.removeItem('user')

  // const user = {
  //   username:"virat",
  //   age:18,
  //   city:'bhopal'
  // }

  // localStorage.setItem("user",JSON.stringify(user))
  // console.log(user);

  // const user = JSON.parse(localStorage.getItem('user'))
  // console.log(user);


  // localStorage.clear()
  localStorage.setItem('user','virat')
  localStorage.setItem('age','18')

  // console.log((localStorage.getItem('user')))

  // localStorage.removeItem('age')

  // const data = {
  //   name:"aba",
  //   age:12,
  //   add:'city'
  // }
  
  //  localStorage.setItem('userdata',JSON.stringify(data))
  // console.log(data);
  
  localStorage.setItem('user',"viratrane")
  const data = localStorage.getItem("user")
  console.log(data);

  localStorage.removeItem('user')
  localStorage.removeItem('userdata')

  const data1={
    name:"rahul",
    age:15,
    city:"palvan"
  }

  const abc = localStorage.setItem('userdata1', JSON.stringify(data1))
  // console.log(abc);


  const user = JSON.parse(localStorage.getItem('userdata1'))
  console.log(user);
  

  
  
  
  

  return (
    <div>App</div>
  )
}

export default App