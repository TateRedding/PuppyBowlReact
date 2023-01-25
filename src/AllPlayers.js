import React from "react";
import PlayerCard from "./PlayerCard";

const AllPlayers = ({ playerList , setSelectedPlayer, APIURL, renderAllPlayers}) => {
    return (
        <>
            {
                playerList.map((player) => {
                    return <PlayerCard key={player.id} player={player} setSelectedPlayer={setSelectedPlayer} APIURL={APIURL} renderAllPlayers={renderAllPlayers} />
                })
            }
        </>
    );
};

export default AllPlayers;