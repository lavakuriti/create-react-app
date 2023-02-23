import * as React from 'react'
import './App.css'
const wcome={
greating:'Hey',
title :"react"
}
const react=React.createElement('h1',null,"hello");
function App() {
const title="fisrt react"
  return (
    <div>
      {react}
      <p>{wcome.title} {wcome.greating}</p>
      <label htmlFor="inp">user-name </label>
      <input type="text" name="" id="inp" />
    </div>
  )
}

export default App
