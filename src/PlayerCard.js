import React from "react";
import PlayerHeader from "./PlayerHeader";

const PlayerCard = ({ player, setSelectedPlayer, getSinglePlayer, removePlayer, renderAllPlayers }) => {
    return (
        <div className="single-player-card">
            <PlayerHeader player={player} />
            <img src={`${player.imageUrl}`} alt={`Photo of ${player.name}`} />
            <button data-id={player.id} onClick={async () => {
                setSelectedPlayer(await getSinglePlayer(player.id))
            }}>See details</button>
            <button data-id={player.id} onClick={async () => {
                await removePlayer(player.id);
                renderAllPlayers();
            }}>Remove from roster</button>
        </div>
    );
};

export default PlayerCard;