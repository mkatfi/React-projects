import { useState } from 'react'
import './App.css'
import Heder from './components/Heder';
import GetImage from './components/GetImage';
import Rules from './components/Rules';


function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestSCore] = useState(0);
  const [cardNumber, setCardNumber] = useState(12);
  const [showRules, setShowRules] = useState(true);

  function handleChange() {
    setShowRules(!showRules);
  }

  function incrementScore() {
    setScore(score + 1);
    if (score >= bestScore) {
      setBestSCore(score + 1);
    }
  }

  function resetScore() {
    setScore(0);
  }

  function handleCardClick(e) {
    setBestSCore(0);
    setScore(0);
    setCardNumber(e);
  }

  return (
    <div className='container'>
      <div className='but'>
        <button
          value="9"
          onClick={(e) =>handleCardClick(e.target.value)}
        ><p>9 cards </p></button>
        <button
          value="12"
          onClick={(e) =>handleCardClick(e.target.value)}
          >
            <p>
            12 cards
            </p>
            </button>

        <button
          value="16"
          onClick={(e) =>handleCardClick(e.target.value)}
          >  <p>
          16 cards
          </p></button>

        <button
          value="32"
          onClick={(e) =>handleCardClick(e.target.value)}
          >  <p>
          32 cards
          </p></button>
      </div>
      <div className='main'>
        <button
          onClick={handleChange}
        >
          <p> {showRules ? 'Hide Rules' : 'Show Rules'} </p>
        </button>
      
          {
            showRules ?
            ( <Rules/> 

            ):(
              <>
              {/* <Heder
                score ={score}
                bestScore ={bestScore}
                /> */}
              <GetImage
                score ={score}
                bestScore ={bestScore}
                incrementScore={incrementScore}
                resetScore={resetScore}
                cardNumber={cardNumber}
                />
            </>
          )
          }     
          
          
      </div>
    
    </div>


  )
}

export default App
