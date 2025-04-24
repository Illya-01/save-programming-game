import './CurrentWord.css'

export default function CurrentWord({ wordToGuess, typedLetters, isGameLost }) {
   return (
      <section className="current-word-list">
         <h2 className="sr-only">Current word:</h2>
         {wordToGuess.map(letter => {
            const shouldRevealLetter = isGameLost || typedLetters.includes(letter)
            const getLetterClass =
               isGameLost && !typedLetters.includes(letter) ? 'missed-letter' : null
            return (
               <span
                  aria-label={shouldRevealLetter ? letter : 'blank'}
                  key={crypto.randomUUID()}
                  className={getLetterClass}>
                  {shouldRevealLetter ? letter.toUpperCase() : ''}
               </span>
            )
         })}
      </section>
   )
}
