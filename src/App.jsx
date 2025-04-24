import { useState } from 'react'
import Confetti from 'react-confetti'
import CurrentWord from './CurrentWord/CurrentWord'
import Header from './Header/Header'
import Keyboard from './Keyboard/Keyboard'
import LanguageChips from './LanguageChips/LanguageChips'
import MessageBox from './MessageBox/MessageBox'
import NewGameBtn from './NewGameBtn/NewGameBtn'
import { getRandWord, languages } from '../utils'

function SaveProgrammingLanguagesGame() {
   const [currentWordToGuess, setCurrentWordToGuess] = useState(() =>
      getRandWord().split('')
   )
   const [typedLetters, setTypedLetters] = useState([])
   const wrongGuessCount = typedLetters.filter(
      letter => !currentWordToGuess.includes(letter)
   ).length
   const isGameWon = currentWordToGuess.every(letter =>
      typedLetters.includes(letter)
   )
   const isGameLost = wrongGuessCount >= languages.length
   const isGameOver = isGameWon || isGameLost

   const addTypedLetter = letter => {
      if (!typedLetters.includes(letter) && !isGameOver) {
         setTypedLetters(prevLetters => [...prevLetters, letter])
      }
   }
   const restartGame = () => {
      setCurrentWordToGuess(getRandWord().split(''))
      setTypedLetters([])
   }

   return (
      <>
         {isGameWon && <Confetti recycle={false} numberOfPieces={1500} />}
         <Header attemptCount={languages.length} />
         <MessageBox
            gameStatus={{ isGameOver, isGameWon }}
            wordToGuess={currentWordToGuess}
            wrongGuessCount={wrongGuessCount}
            typedLetters={typedLetters}
            languages={languages.map(lang => lang.name)}
         />
         <LanguageChips wrongGuessCount={wrongGuessCount} />
         <CurrentWord
            wordToGuess={currentWordToGuess}
            typedLetters={typedLetters}
            isGameLost={isGameLost}
         />
         <Keyboard
            addTypedLetter={addTypedLetter}
            typedLetters={typedLetters}
            wordToGuess={currentWordToGuess}
            isGameOver={isGameOver}
         />
         {isGameOver && <NewGameBtn restartGame={restartGame} />}
      </>
   )
}

export default SaveProgrammingLanguagesGame
