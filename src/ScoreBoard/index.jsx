import './style.css'
function ScoreBoard({ score, highscore: record, secretNumber, guessNumber }) {
  // en función de los props que recibimos, mostramos unos u otros mensajes
  let message = 'Empieza a adivinar...'
  if (guessNumber) {
    if (guessNumber == secretNumber) {
      message = 'Has ganado!'
    } else if (score === 0) {
      message = 'Has perdido el juego!'
    } else if (guessNumber > secretNumber) {
      message = 'Demasiado alto!'
    } else if (guessNumber < secretNumber) {
      message = 'Demasiado bajo!'
    }
  }

  return (
    <section className="right">
      <p className="message">{message}</p>
      <p className="label-score">
        💯 Score: <span className="score">{score}</span>
      </p>
      <p className="label-highscore">
        🥇 Highscore: <span className="highscore">{record}</span>
      </p>
    </section>
  )
}

export default ScoreBoard
