import './Keyboard.css'

export default function Keyboard({
   addTypedLetter,
   typedLetters,
   wordToGuess,
   isGameOver,
}) {
   const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
   const getKeyClass = letter => {
      if (!typedLetters.includes(letter)) return null
      return wordToGuess.includes(letter) ? 'right-guess' : 'wrong-guess'
   }
   return (
      <section className="keyboard" aria-label="keyboard">
         {alphabet.map(letter => (
            <button
               className={getKeyClass(letter)}
               onClick={() => addTypedLetter(letter)}
               aria-disabled={typedLetters.includes(letter)}
               disabled={isGameOver}
               key={crypto.randomUUID()}>
               {letter.toUpperCase()}
            </button>
         ))}
      </section>
   )
}
