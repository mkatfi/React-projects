import React, { useEffect, useState } from 'react';

const GetImage = ({ score, bestScore, incrementScore, resetScore, cardNumber }) => {
  const [characters, setCharacters] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://naruto-api-rsl3.onrender.com/api/v1/characters");
        const data = await res.json();

        // Take only the needed number of cards
        const selected = data.slice(0, cardNumber);

        const allImages = selected.map(e => ({
          image: e?.images[0] || "placeholder.jpg",
          username: e?.name || "Unknown Character",
        }));

        setCharacters(data);
        setCards(allImages);

      } catch (error) {
        console.log("Error during fetching:", error);
      }
    };

    fetchData();
  }, [cardNumber]);

  return (
    <>
        <div className='score'>
            <p>best score is :{bestScore}</p>
            <p>count to try correct :{score}</p>
        </div>
    <div className="card-grid">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <img src={card.image} alt={card.username} />
          <p>{card.username}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default GetImage;
