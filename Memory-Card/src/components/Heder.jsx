import React from 'react'

const Heder = ({score, bestScore}) => {
  return (
        <div className='score'>
            <p>best score is :{bestScore}</p>
            <p>count to try correct :{score}</p>
        </div>

  )
}

export default Heder