import React from "react";
import PlayerCard from "./PlayerCard";

const MultiplePlayers = ({ playerList, APIURL, getAndSetPlayers }) => {
    return (
            (playerList && playerList.length) ?
                <div className="multiple-players-view">{
                    playerList.map((player) => {
                        return <PlayerCard
                                    key={player.id}
                                    player={player}
                                    APIURL={APIURL}
                                    getAndSetPlayers={getAndSetPlayers} />
                    })
                }</div> :
                <h3>No Players to display</h3>
    );
};

export default MultiplePlayers;