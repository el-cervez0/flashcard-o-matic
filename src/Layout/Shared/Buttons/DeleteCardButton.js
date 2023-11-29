import React from "react";
import { deleteCard } from "../../../utils/api";

function DeleteCardButton({ cardId }) {

    const handleDelete = async (event) => {
        event.preventDefault();
        await deleteCard(cardId);
        window.location.reload();
    } 

    return <button onClick={handleDelete}>Delete</button>
}

export default DeleteCardButton;