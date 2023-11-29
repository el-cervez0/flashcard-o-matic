import React from "react";
import AddCardButton from "./Buttons/AddCardButton";

function NotEnoughCards({ deckId }) {
    return (
        <div>
            <h4>Not enough cards.</h4>
            <p>You need at least 3 cards to study. There are 2 cards in the deck.</p>
            <AddCardButton deckId={deckId}/>
        </div>
    )
}

export default NotEnoughCards;