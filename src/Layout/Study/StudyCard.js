import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

/* Styles */

const textStyle = {
    margin: '15px',
    padding: '10px',
    textAlign: 'center'
}

const cardBoxStyle = {
    border: "solid",
    boxSizing: "content-box",
    borderRadius: "30px",
    padding: "3%",
    width: "100%",
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
        <div style={ cardBoxStyle }>
            <h5>Card {cardIndex + 1} of {cards.length}</h5>
            {!flipped ? 
                <h5 className="card-text" style={ textStyle }>{studyCard.front}</h5> :
                <h5 className="card-text" style={ textStyle }>{studyCard.back}</h5>
            }
            <button
                type="button"
                name="flip"
                style={{ marginRight: '10px' }}
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