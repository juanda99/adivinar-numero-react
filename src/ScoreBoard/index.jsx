import './style.css'
function ScoreBoard(props) {
  console.log(props)
  return (
    <section className="right">
      <p className="message">Start guessing...</p>
      <p className="label-score">
        💯 Score: <span className="score">{props.score}</span>
      </p>
      <p className="label-highscore">
        🥇 Highscore: <span className="highscore">{props.highscore}</span>
      </p>
    </section>
  )
}

export default ScoreBoard
