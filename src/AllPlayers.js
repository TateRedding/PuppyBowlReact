import React from "react";
import PlayerCard from "./PlayerCard";

const AllPlayers = ({ playerList , setSelectedPlayer, getSinglePlayer}) => {
    return (
        <>
            {
                playerList.map((player) => {
                    return <PlayerCard key={player.id} player={player} setSelectedPlayer={setSelectedPlayer} getSinglePlayer={getSinglePlayer} />
                })
            }
        </>
    );
};

export default AllPlayers;