import React from "react";
import PlayerCard from "./PlayerCard";

const MultiplePlayers = ({
        playerList,
        selectedTeam,
        setSelectedTeam,
        setSelectedPlayer,
        searchTerm,
        setSearchTerm,
        APIURL,
        renderAllPlayers }) => {

    let header = '';
    (searchTerm) ?
        (selectedTeam.name) ?
            header = `Searching Team ${selectedTeam.name} for "${searchTerm}"` :
            header = `Searching for "${searchTerm}"` :
        header = "Full Roster"
    return (
        <>
            <h3>{header}</h3>
            <div className="multiple-players-view">{
                playerList.map((player) => {
                    return <PlayerCard
                                key={player.id}
                                player={player}
                                selectedTeam={selectedTeam}
                                setSelectedTeam={setSelectedTeam}
                                setSelectedPlayer={setSelectedPlayer}
                                searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm}
                                APIURL={APIURL}
                                renderAllPlayers={renderAllPlayers} />
                })
            }</div>
        </>
    );
};

export default MultiplePlayers;