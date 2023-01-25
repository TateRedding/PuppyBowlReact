import React from "react";
import PlayerHeader from "./PlayerHeader";

const PlayerCard = ({ player, setSelectedPlayer, APIURL, renderAllPlayers }) => {

    const getSinglePlayer = async (playerId) => {
        try {
            const resp = await fetch(`${APIURL}/players/${playerId}`);
            const result = await resp.json();
            if (result.error) {
                throw result.error
            }
            return result.data.player;
        } catch (error) {
            console.error("Something went wrong!", error);
        };
    };

    const removePlayer = async (playerId) => {
        try {
            const resp = await fetch(`${APIURL}/players/${playerId}`, {
                method: `DELETE`,
            });
            const result = await resp.json();
            if (result.error) {
                throw result.error;
            }
            return;
        } catch (error) {
            console.log("Something went wrong!", error);
        };

    };

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