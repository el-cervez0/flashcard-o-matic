import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { readDeck } from "../../utils/api";
import NotEnoughCards from "../Shared/NotEnoughCards";
import StudyCard from "./StudyCard";
import NotFound from "../Shared/NotFound";

function StudyView() {
    const deckId = useParams().deckId;
    const [deck, setDeck] = useState({});

    useEffect(() => {
        async function loadCards() {
            const response = await readDeck(deckId);
            setDeck(response);
        }
        loadCards();
    }, [deckId])

    if (deck.id) {
        return (
            <div>
                <h1>{deck.name}</h1>
                {deck.cards.length < 3 ?
                    <NotEnoughCards deckId={deckId} /> :
                    <div className="card">
                        <StudyCard cards={deck.cards} />
                    </div>
                }
            </div>
        )        
    }
    return <NotFound />
}

export default StudyView;