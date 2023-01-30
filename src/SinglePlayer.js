import React from "react";
import PlayerHeader from "./PlayerHeader";
import "./singlePlayer.css";

const SinglePlayer = ({
        player,
        setPlayerList,
        setSelectedPlayer,
        setSelectedTeam }) => {
    return (
        <div className="single-player-view">
            <PlayerHeader player={player} />
            <p>Team: {player.team ? player.team.name : 'Unassigned'}</p>
            <p>Breed: {player.breed}</p>
            <img src={`${player.imageUrl}`} alt={`Photo of ${player.name}`} />
            {(player.team) ?
                <button onClick={() => {
                    setSelectedPlayer({})
                    setSelectedTeam(player.team)
                    setPlayerList(player.team.players)
                }}>View Team {player.team.name}</button> :
                <></>
            }
            <button onClick={() => setSelectedPlayer({})}>Back to all players</button>
        </div>
    );
};

export default SinglePlayer;