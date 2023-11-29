import React from "react";
import { Link } from "react-router-dom";

function EditCardButton({ cardId, deckId }) {
    return (
        <button type="button" name="edit-card">
            <Link to={`${deckId}/cards/${cardId}/edit`}>Edit Card</Link>
        </button>
    )
}

export default EditCardButton;