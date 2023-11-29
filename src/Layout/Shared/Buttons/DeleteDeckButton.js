import React from "react";
import { deleteDeck } from "../../../utils/api";

function DeleteDeckButton({ deckId }) {

    const handleDelete = async (event) => {
        event.preventDefault();
        await deleteDeck(deckId);
        window.location.reload();
    }
    return <button onClick={handleDelete}>Delete</button>
}

export default DeleteDeckButton;