import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const GetImage = ({ score, bestScore, incrementScore, resetScore, cardNumber }) => {
  // const [characters, setCharacters] = useState([]);
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);


  function handleLoseGame() {
    Swal.fire({
      icon: 'error',
      title: '💀 Game Over!',
      text: 'You clicked the same card. Try again!',
      confirmButtonText: 'Play Again',
      confirmButtonColor: 'mediumspringgreen'
    });
  
    resetScore();
    setClickedCards([]);
  }
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://naruto-api-rsl3.onrender.com/api/v1/characters");
        const data = await res.json();

        // Take only the needed number of cards
        const selected = data.slice(0, cardNumber);

        const allImages = selected.map((e, index) => ({
          image: e?.images[0] || "placeholder.jpg",
          username: e?.name || "Unknown Character",
          id : index,
        }));

        // setCharacters(data);
        setCards(allImages);

      } catch (error) {
        console.log("Error during fetching:", error);
      }
    };

    fetchData();
  }, [cardNumber]);
  
  function RandemCard() {
    const RandemC = [...cards]; // Clone the original array

    for (let i = RandemC.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [RandemC[i], RandemC[j]] = [RandemC[j], RandemC[i]];
      // console.log(RandemC[i]);
    }
    console.log("Shuffled cards:", RandemC);
    // setRandCard(RandemC);
    return RandemC;

  }
  function handleCliked(id){
    if (clickedCards.includes(id)) {
      handleLoseGame();
    } else {
      incrementScore();
      setClickedCards([...clickedCards, id]);
    }
    const shuffled = RandemCard();
    setCards(shuffled);
  }


  return (
    <>
      <div className='score'>
        <p>Best Score: {bestScore}</p>
        <p>Current Score: {score}</p>
      </div>

      <div className="card-grid">
        {cards.map((card, index) => (
          
          <div
            key={index}
            className="card"
            onClick={() => handleCliked(card.id)}
          >
            <img src={card.image} alt={card.username} />
          </div>
        ))}
      </div>
    
    </>
  );
};

export default GetImage;
