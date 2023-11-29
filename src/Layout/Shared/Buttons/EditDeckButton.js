import React from "react";
import { Link, useParams } from "react-router-dom";

function EditDeckButton() {
    const deckId = useParams().deckId;

    return (
        <button type="button" name="edit-deck" >
            <Link to={`${deckId}/edit`}>Edit</Link>
        </button>
    )
}

export default EditDeckButton;