import '../css/Matching.css';
import SingleCard from './SingleCard'
import { useState, useEffect } from 'react';
import JSConfetti from 'js-confetti';

const jsConfetti = new JSConfetti();

const cardPictures = [
  { "src": "/img/butterfly.png", matched: false },
  { "src": "/img/clock.png", matched: false },
  { "src": "/img/diamond.png", matched: false },
  { "src": "/img/flower.png", matched: false },
  { "src": "/img/gummies.png", matched: false },
  { "src": "/img/light.png", matched: false }
]

export default function Matching() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0) // Haven't added this part yet, the goal is to win the game in the least number of turns possible
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [allMatched, setAllMatched] = useState(false)
  const [firstRender, setFirstRender] = useState(true);


  // Function to shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardPictures, ...cardPictures]  // This copies the "cardPictures" array into the new array twice to duplicate each card.
      .sort(() => Math.random() - 0.5)  //  For each item, or pair of items in shuffledCards array, this function returns a number either greater or less than zero. Less than = cards stay in the same order. Greater than = the order is mixed up. 
      .map((card) => ({ ...card, id: Math.random() }))  // Assigning a random ID number to each card, every time it's shuffled. 

      setCards(shuffledCards)   // Updates the state from an empty array to the new shuffledCards array
      setTurns(0)   // Resets to 0, as this function only happens at the start of every game
      setAllMatched(false)
  }

  // Function to handle a choice on click
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // Function to compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true}
              
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 800)
      }
    }
    // Call the allDone function when all cards are matched
    const allMatched = cards.every(card => card.matched === true);
    if (allMatched) {
      jsConfetti.addConfetti();
    }
  }, [choiceOne, choiceTwo, cards]) 

console.log(cards)

// useEffect(() => {
//   setAllMatched(cards.every(card => card.matched === true));
// }, [cards]);

// useEffect(() => {
//   if (allMatched && cards.length === 12) {
//     jsConfetti.addConfetti();
//   }
// }, [allMatched, cards.length]);


  // Function to reset choices and increase the turn number
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
    
  }


  return (
    <div className="Matching">
      <h1>Match It!</h1>
      <button id="newGame" onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} flipped={card === choiceOne || card === choiceTwo || card.matched} disabled={disabled}/>
        ))}
      </div>

    </div>
  );
}

