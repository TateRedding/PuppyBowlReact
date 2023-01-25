import React from "react";
import PlayerCard from "./PlayerCard";

const AllPlayers = ({ playerList , setSelectedPlayer, getSinglePlayer, removePlayer, renderAllPlayers}) => {
    return (
        <>
            {
                playerList.map((player) => {
                    return <PlayerCard key={player.id} player={player} setSelectedPlayer={setSelectedPlayer} getSinglePlayer={getSinglePlayer} removePlayer={removePlayer} renderAllPlayers={renderAllPlayers} />
                })
            }
        </>
    );
};

export default AllPlayers;