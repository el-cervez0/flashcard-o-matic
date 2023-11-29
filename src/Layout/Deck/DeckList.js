import React from "react";
import { Link } from "react-router-dom";
import DeleteDeckButton from "../Shared/Buttons/DeleteDeckButton";
import StudyButton from "../Shared/Buttons/StudyButton";

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


function DeckList({ decks }) {
    return (
        <ul>      
            {decks.map((deck, index) => (
                <div className="deck-info" style={deckListStyle}>    
                    <li key={index} style={deckBoxStyle}>
                        <h3>{deck.name}</h3>
                        <small>{deck.cards.length} cards</small>
                        <p>{deck.description}</p>
                        <div className="deck-actions">
                            <button>
                                <Link to={`/decks/${deck.id}`}>View</Link>
                            </button>
                            <StudyButton deckId={deck.id} />
                            <DeleteDeckButton deckId={deck.id} />
                        </div>
                    </li>
                </div>
            ))}
        </ul>
    )
}


export default DeckList;