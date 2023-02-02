import React from "react";
import PlayerHeader from "./PlayerHeader";
import { useNavigate, useLocation } from "react-router-dom";
import "./playerCard.css"

const PlayerCard = ({
        player,
        APIURL,
        getAndSetPlayers }) => {

    const navigate = useNavigate();
    
    const removePlayer = async (playerId) => {
        try {
            const resp = await fetch(`${APIURL}/players/${playerId}`, {
                method: `DELETE`,
            });
            const result = await resp.json();
            if (result.error) {
                throw result.error;
            }
            return;
        } catch (error) {
            console.log("Something went wrong!", error);
        };

    };

    return (
        <div className="single-player-card">
            <PlayerHeader player={player} />
            <img src={`${player.imageUrl}`} alt={`Photo of ${player.name}`} />
            <button onClick={() => navigate(`/player/${player.id}`)}>See details</button>
            <button onClick={async () => {
                await removePlayer(player.id);
                getAndSetPlayers();
            }}>Remove from roster</button>
            {useLocation().pathname.includes("team") || useLocation().pathname.includes("search") ?
                <button onClick={() => navigate('/')}>Back to all players</button> :
                null
            }
        </div>
    );
};

export default PlayerCard;