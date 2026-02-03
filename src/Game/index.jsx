import './style.css'
import ScoreBoard from '../ScoreBoard'
import { useState, useRef } from 'react'

const secretNumber = Math.trunc(Math.random() * 20) + 1

function Game() {
  const [score, setScore] = useState(20)
  const [highscore, setHighscore] = useState(0)
  const [message, setMessage] = useState('Empieza a adivinar...')
  const inputRef = useRef(null)

  const handleCheck = () => {
    const guessNumber = Number(inputRef.current.value)
    // comprobamos si hemos acertado o no...
    if (guessNumber === secretNumber) {
      setMessage('Has ganado!')
      if (score > highscore) {
        setHighscore(score)
      }
    } else if (guessNumber > secretNumber) {
      setMessage('Demasiado alto!')
      if (score === 1) setMessage('Has perdido el juego!')
      setScore(score - 1)
    } else if (guessNumber < secretNumber) {
      setMessage('Demasiado bajo!')
      if (score === 1) setMessage('Has perdido el juego!')
      setScore(score - 1)
    }
  }

  return (
    <main>
      <button className="btn again">Again!</button>
      <p>El número secreto es {secretNumber} </p>
      <section className="left">
        <input type="number" className="guess" ref={inputRef} />
        <button className="btn check" onClick={handleCheck}>
          Check!
        </button>
      </section>
      <ScoreBoard score={score} highscore={highscore} message={message} />
    </main>
  )
}

export default Game
