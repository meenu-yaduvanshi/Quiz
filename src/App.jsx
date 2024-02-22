import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import { useState } from 'react'
import Data from './component/quize.json'
import Questions from './component/Question'
import Options from './component/Option'
import "./style.css";

function App() {
  const [count, setCount] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [correctAns, setCorrectAns] = useState(null)

  const handleClick = (i) => {
    setSelectedIndex(null)
    setCorrectAns(null)
    setCount((previousState) => {
      return previousState + 1
    }
    )
    if (count === 5) {
      setCount(0)
    }
  }

  function optionClick(i) {
    setSelectedIndex(i)
    setCorrectAns(Data[count].Ans)
  }

  return (
    <div className='container'>
      <Questions que={Data[count].questions} />
      {Data[count].options.map((option, i) => {
        return (<Options key={i} option={option} answer={Data[count].options} i={i}
          optionClick={optionClick} correctAns={correctAns} selectedIndex={selectedIndex} />)
      })}
      <button className='btn' onClick={handleClick}>Next</button>
    </div>
  )
}

export default App

