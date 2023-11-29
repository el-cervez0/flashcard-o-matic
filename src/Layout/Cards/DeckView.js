import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import CardList from "./CardList.js";
import NotFound from "../Shared/NotFound";

function DeckView() {
    const deckId = useParams().deckId; 
    const [deck, setDeck] = useState({})
    useEffect(() => {
        async function loadDeck() {
            const response = await readDeck(deckId);
            setDeck(response);
        }
        loadDeck();
    }, [deckId])

    if (deck.id) {
        return (
            <div>
                <CardList deck={deck} />   
            </div>
        );
    }
    return <NotFound />

}

export default DeckView;