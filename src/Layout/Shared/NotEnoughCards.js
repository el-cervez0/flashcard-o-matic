import React from "react";
import AddCardButton from "./Buttons/AddCardButton";

function NotEnoughCards({ deckId }) {
    return (
        <div style={{ marginTop: '25px' }}>
            <h3>Not enough cards.</h3>
            <p>You need at least 3 cards to study. There are 2 cards in the deck.</p>
            <AddCardButton deckId={deckId}/>
        </div>
    )
}

export default NotEnoughCards;