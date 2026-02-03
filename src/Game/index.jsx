import './style.css'
import ScoreBoard from '../ScoreBoard'
import { useState, useRef, useEffect } from 'react'

const secretNumber = Math.trunc(Math.random() * 20) + 1

function Game() {
  const [score, setScore] = useState(20)
  const [highscore, setHighscore] = useState(0)
  const [guessNumber, setGuessNumber] = useState(null)
  const inputRef = useRef(null)

  const handleCheck = () => setGuessNumber(Number(inputRef.current.value))

  useEffect(() => {
    console.log('Me han ejecutado por el cambio de guessNumber')
    if (secretNumber !== guessNumber && guessNumber !== null) {
      console.log(secretNumber, guessNumber)
      // disminuimos el score
      setScore(score - 1)
    }
  }, [guessNumber])

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
