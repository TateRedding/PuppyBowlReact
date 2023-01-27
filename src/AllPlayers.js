import React from "react";
import PlayerCard from "./PlayerCard";

const AllPlayers = ({
        playerList,
        selectedTeam,
        setSelectedTeam,
        setSelectedPlayer,
        APIURL,
        renderAllPlayers }) => {
    return (
        <>
            <h2>Full Roster</h2>
            <div className="multiple-players-view">{
                playerList.map((player) => {
                    return <PlayerCard
                                key={player.id}
                                player={player}
                                selectedTeam={selectedTeam}
                                setSelectedTeam={setSelectedTeam}
                                setSelectedPlayer={setSelectedPlayer}
                                APIURL={APIURL}
                                renderAllPlayers={renderAllPlayers} />
                })
            }</div>
        </>
    );
};

export default AllPlayers;