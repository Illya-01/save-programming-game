import { languages } from '../../utils'
import './LanguageChips.css'

export default function LanguageChips({ wrongGuessCount }) {
   return (
      <section className="language-chips" aria-label="programming languages">
         {languages.map((lang, ind) => {
            return (
               <span
                  className={ind + 1 <= wrongGuessCount ? 'lost' : null}
                  key={crypto.randomUUID()}
                  style={{
                     color: lang.color,
                     backgroundColor: lang.backgroundColor,
                  }}>
                  {lang.name}
               </span>
            )
         })}
      </section>
   )
}
