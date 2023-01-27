import React from "react";
import PlayerCard from "./PlayerCard";

const TeamView = ({ selectedTeam, setSelectedTeam, setSelectedPlayer, APIURL, renderAllPlayers }) => {
    return (
        <>
            <h3>{`Team: ${selectedTeam.name}`}</h3>
            <div className="multiple-players-view"> {
                selectedTeam.players.map((player) => {
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

export default TeamView;