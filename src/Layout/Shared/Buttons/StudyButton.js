import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

function StudyButton({ deckId}) {
    return (
        <button type="button">
            <Link to={`/decks/${deckId}/study`}>Study</Link>
        </button>
    )
}

export default StudyButton;