import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card  user="Aman" age={18} img="https://tse2.mm.bing.net/th/id/OIP.c17XAqg6srb_lo1ElbyJSgHaEK?pid=Api&P=0&h=180" alt="" />
      <Card user="aba" age={22} img="https://tse3.mm.bing.net/th/id/OIP.k8_5HOQ0QoX_Zxg8ojF0ygHaE8?pid=Api&P=0&h=180" />
      <Card user="rahul" age={22} img="https://tse1.mm.bing.net/th?id=OIF.Asys0UZV1hM44gn5Sj%2fnpg&pid=Api&P=0&h=180"    />
    </div>
  )
}

export default App