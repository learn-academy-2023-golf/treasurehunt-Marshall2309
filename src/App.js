import React, { useState } from "react"
import Square from './components/Square'
import "./App.css"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])
  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length))
  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length))

  console.log("treasure:", treasureLocation)
  console.log("bomb:",bombLocation)

  const handleGamePlay = (index) => {
    // alert(index)
    let updatedBoard = [...board]
    if(treasureLocation === index) {
      updatedBoard[index] = <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTat9Qr3qGDrSzw6TtxMA6C9-D8C38zSieU0Q&usqp=CAU" alt="Treasure"
      style={{ width: '100%', height: '100%' }}
      />
    setBoard(updatedBoard)
  } else if (bombLocation === index) {
    updatedBoard[index] = <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5En1Hwuj2ZnYZoBXAqcZwZ-LEIDVT4tkJ8A&usqp=CAU" alt="Coronavirus"
    style={{ width: '100%', height: '100%' }}
    />
    setBoard(updatedBoard)
  } else {
    updatedBoard[index] = <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuzb70ezSpJbRw-UN159fW0JLTcNYFOkEg98ZnI0ly4MVBowSzofHWa_FdXtUOGMYZbVg&usqp=CAU" alt="Treasure"
    style={{ width: '100%', height: '100%' }}
    />
    setBoard(updatedBoard)
  }
  }

  const resetGame = () => {
    window.location.reload();
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="gameboard">
      {board.map((value, index) => {
        return (
        <Square 
        value={value}
        key={index}
        index={index}
        handleGamePlay={handleGamePlay}
        />
        )
      })}
    </div>
    <button onClick={resetGame}>Play Again</button>
    </>
  )
}

export default App
