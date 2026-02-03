import './style.css'
function ScoreBoard({ score, highscore: record, message }) {
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
