import React from "react";
import PlayerHeader from "./PlayerHeader";

const SinglePlayer = ({ player, setSelectedPlayer }) => {
    return (
        <div className="single-player-view">
            <PlayerHeader player={player} />
            <p>Team: {player.team ? player.team.name : 'Unassigned'}</p>
            <p>Breed: {player.breed}</p>
            <img src={`${player.imageUrl}`} alt={`Photo of ${player.name}`} />
            <button onClick={() => setSelectedPlayer({})}>Back to all players</button>
        </div>
    );
};

export default SinglePlayer;