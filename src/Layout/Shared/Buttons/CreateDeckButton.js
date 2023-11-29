import React from "react";
import {Link } from "react-router-dom";

function CreateDeckButton() {
    return (
        <button type="button">
            <Link to="/decks/new">Create New Deck</Link>
        </button>
    )
}

export default CreateDeckButton;