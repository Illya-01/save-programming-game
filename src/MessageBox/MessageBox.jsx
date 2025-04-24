import './MessageBox.css'
import { getFarewellText } from '../../utils'

export default function MessageBox({
   gameStatus,
   wordToGuess,
   wrongGuessCount,
   typedLetters,
   languages,
}) {
   const { isGameOver, isGameWon } = gameStatus
   const lastTypedLetter = typedLetters[typedLetters.length - 1]
   const isLastTypedLetterWrong =
      lastTypedLetter && !wordToGuess.includes(lastTypedLetter)

   if (!isGameOver) {
      if (!isLastTypedLetterWrong) return
      return (
         <section className="message-box" role="game status" aria-live="polite">
            <p className="heading">
               {getFarewellText(languages[wrongGuessCount - 1]) + '🕊️   '}
            </p>
         </section>
      )
   }
   return (
      <section
         className={`message-box ${isGameWon ? 'won' : 'lost'}`}
         role="game status"
         aria-live="polite">
         <p className="heading">{isGameWon ? 'You win!' : 'Game Over!'}</p>
         <p>
            {isGameWon ? `Well done 🎉` : 'All programming languages were lost 😓'}
         </p>
      </section>
   )
}
