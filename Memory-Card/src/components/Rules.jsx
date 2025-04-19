
const Rules = () => {


  return (
    <>
        <div className="rules-container">
            <h2 className="rules-title">🧠 Memory Game Rules</h2>
            
            <div className="rules-section">
                <h3 className="rules-heading">🎯 Objective</h3>
                <p>Try to click on as many unique cards as possible without repeating any.</p>
            </div>
            
            <div className="rules-section">
                <h3 className="rules-heading">🎮 Gameplay</h3>
                <ul className="rules-list">
                <li>Click a card you haven't selected before.</li>
                <li>Cards shuffle to a new random order after each click.</li>
                <li>If you click a repeated card, your score resets to 0.</li>
                </ul>
            </div>
            
            <div className="rules-section">
                <h3 className="rules-heading">🏆 Scoring</h3>
                <ul className="rules-list">
                <li>+1 point for each correct (non-repeating) click.</li>
                <li><strong>Best Score</strong> records your highest streak.</li>
                </ul>
            </div>
            
            <div className="rules-section">
                <h3 className="rules-heading">🥇 Win Condition</h3>
                <p>Click all unique cards without any repeats to win — or try to beat your Best Score!</p>
            </div>
            
            <div className="rules-section">
                <h3 className="rules-heading">🃏 Cards</h3>
                <p>Cards are fetched from an external API (like Giphy or Pokémon) and can show images and optional text.</p>
            </div>
            
            <div className="rules-section">
                <h3 className="rules-heading">💡 Tips</h3>
                <ul className="rules-list">
                <li>Try to memorize cards and their positions.</li>
                <li>Stay sharp — the board reshuffles with every click!</li>
                </ul>
            </div>
        </div>
    </>
  );
};

export default Rules;
