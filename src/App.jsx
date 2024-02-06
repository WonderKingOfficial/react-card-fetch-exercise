// import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import React, { useState, useEffect } from "react";
import Card from './components/card';
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0)
  const url = "https://jsonplaceholder.typicode.com/posts"
  const [data, setData] = useState([])

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }
  useEffect(() => {
    fetchInfo();
  }, [])



  return (
    <>
      <div className='container h-fit overflow-auto flex'>
        {data.map(a => {
          return (
          <Card key={a.id} id={a.id} title={a.title} body={a.body}/>
          )
        })}
      </div>
    </>
  )
}

export default App
