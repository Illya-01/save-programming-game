import './NewGameBtn.css'

export default function NewGameBtn({ restartGame }) {
   return (
      <button className="new-game-btn" onClick={restartGame}>
         New Game
      </button>
   )
}
