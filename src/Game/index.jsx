import './style.css'
import ScoreBoard from '../ScoreBoard'
import { useState, useRef } from 'react'

function Game() {
  const [score, setScore] = useState(20)
  const [highscore, setHighscore] = useState(0)
  const [guessNumber, setGuessNumber] = useState(null)
  // const [secretNumber, setSecretNumber] = useState(Math.trunc(Math.random() * 20) + 1)
  const [secretNumber, setSecretNumber] = useState(
    () => Math.trunc(Math.random() * 20) + 1,
  )
  const inputRef = useRef(null)

  const handleNewGame = () => {
    setScore(20)
    setGuessNumber(null)
    inputRef.current.value = ''
    inputRef.current.focus()
    setSecretNumber(Math.trunc(Math.random() * 20) + 1)
  }

  const handleCheck = () => {
    const inputNumber = Number(inputRef.current.value)
    setGuessNumber(inputNumber)
    // inputNumber y no guessNumber porque guessNumber no se actualiza inmediatamente,
    // porque los setState son asíncronos, por eso usamos el inputNumber que es el valor actual del input
    if (inputNumber !== secretNumber) {
      setScore((score) => score - 1)
    } else {
      setHighscore(score)
    }
  }

  return (
    <main>
      <button className="btn again" onClick={handleNewGame}>
        Again!
      </button>
      <p>El número secreto es {secretNumber} </p>
      <section className="left">
        <input type="number" className="guess" ref={inputRef} />
        <button className="btn check" onClick={handleCheck}>
          Check!
        </button>
      </section>
      <ScoreBoard
        score={score}
        highscore={highscore}
        secretNumber={secretNumber}
        guessNumber={guessNumber}
      />
    </main>
  )
}

export default Game
