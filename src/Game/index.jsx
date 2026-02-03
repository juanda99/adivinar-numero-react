import './style.css'
import ScoreBoard from '../ScoreBoard'
function Game() {
  const score = 20
  const highscore = 0
  return (
    <main>
      <button className="btn again">Again!</button>
      <section className="left">
        <input type="number" className="guess" />
        <button className="btn check">Check!</button>
      </section>
      <ScoreBoard score={score} highscore={highscore} />
    </main>
  )
}

export default Game
