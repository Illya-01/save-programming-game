import './Header.css'

export default function Header({ attemptCount }) {
   return (
      <header>
         <h1>Save Programming Languages</h1>
         <p>
            Guess the word in under {attemptCount} attempts to save programming
            languages from extinction!
         </p>
      </header>
   )
}
