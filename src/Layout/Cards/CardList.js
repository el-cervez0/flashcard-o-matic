import React from "react";
import EditCardButton from "../Shared/Buttons/EditCardButton";
import DeleteCardButton from "../Shared/Buttons/DeleteCardButton";
import EditDeckButton from "../Shared/Buttons/EditDeckButton";
import StudyButton from "../Shared/Buttons/StudyButton";
import AddCardButton from "../Shared/Buttons/AddCardButton";

const deckBoxStyle = {
    listStyle: "none",
    margin: "10px",
    padding: "20px",
    width: "100%"
}

const deckListStyle = {
    border: "solid",
    boxSizing: "content-box",
    borderRadius: "30px",
    width: "100%",
    margin: "10px"
}

function CardList({ deck }) {
    return (
        <div>
            <h1>{deck.name}</h1>
            <p>{deck.description}</p>
            {/* Relace these buttons with the appropriate button bar */}
            <EditDeckButton />
            <StudyButton deckId={deck.id} />
            <AddCardButton deckId={deck.id} />
            <br />
            <div style={{ padding: '10px', marginTop: '25px'}}>
            <h2>Cards</h2>
            <ul>
            {deck.cards.map((card) => (
                <div style={deckListStyle}>
                    <li key={card.id} style={deckBoxStyle}>
                        <p><strong>Question: </strong>{card.front}</p>
                        <p><strong>Answer: </strong>{card.back}</p>
                        <EditCardButton cardId={card.id} deckId={deck.id} />
                        <DeleteCardButton cardId={card.id} deckId={deck.id} />
                    </li>
                </div>
            ))}
            </ul>
            </div>
        </div>
    )
}

export default CardList;