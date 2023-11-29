import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const textStyle = {
    margin: '10px',
    padding: '10px',
}

function CardInfo({ cards }) {
    const [flipped, setFlipped] = useState(false);
    const [cardIndex, setCardIndex] = useState(0)
    const [studyCard, setStudyCard] = useState(cards[cardIndex]);

    const history = useHistory();

    const handleNext = () => {
        if (cardIndex + 1 === cards.length) {
            if (window.confirm("Restard Cards?")) {
                const newIndex = 0;
                setCardIndex(newIndex);
                setStudyCard(cards[newIndex]);
                setFlipped(false);
            } else {
                history.push('/');
            }
        } else {
            const newIndex = cardIndex + 1;
            setCardIndex(newIndex)
            setStudyCard(cards[newIndex])
            setFlipped(!flipped)
        }
    }

    return (
        <div className="card">
            <h3 className="card-title">Card {cardIndex + 1} of {cards.length}</h3>
            {!flipped ? 
                <p className="card-text" style={{ textStyle }}>{studyCard.front}</p> :
                <p className="card-text" style={{ textStyle }}>{studyCard.back}</p>
            }
            <button
                type="button"
                name="flip"
                className="btn btn-secondary"
                onClick={() => setFlipped(!flipped)}>
                Flip
            </button>
            {flipped && 
                <button
                    type="button" 
                    name="next"
                    className="btn btn-primary"
                    onClick={handleNext}>
                    Next
                </button>
            }
        </div>
    )
}

export default CardInfo;