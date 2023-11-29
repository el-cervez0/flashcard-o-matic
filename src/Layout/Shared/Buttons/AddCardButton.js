import React from "react";
import { Link, useRouteMatch } from "react-router-dom";


function AddCardButton({ deckId }) {
    const { url } = useRouteMatch();

    return (
        <button type="button" name="create-card">
            {url === `/decks/${deckId}/study` ?
                <Link to={`/decks/${deckId}/cards/new`}>
                    Add Card
                </Link> :
                <Link to={`${deckId}/cards/new`}>
                    Add Card
                </Link>
            }
        </button>
    )
}

export default AddCardButton;