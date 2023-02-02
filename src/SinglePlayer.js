import React, { useState, useEffect } from "react";
import PlayerHeader from "./PlayerHeader";
import { useParams, useNavigate } from "react-router-dom";
import "./singlePlayer.css";

const SinglePlayer = ({ APIURL }) => {

    // Need to handle case of no player found with certain id if someone were to type in number to URL

    const [ player, setPlayer ] = useState({});
    const { playerId } = useParams();
    const navigate = useNavigate();

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

        const renderPlayer = async () => {
            setPlayer(await getSinglePlayer(playerId));
        };
        
        useEffect(() => {
            renderPlayer();
        }, []);

    return (
        <div className="main-content">
            <div className="single-player-view">{
                (player && player.name) ?
                    <>
                        <PlayerHeader player={player} />
                        <p>Team: {player.team ? player.team.name : 'Unassigned'}</p>
                        <p>Breed: {player.breed}</p>
                        <img src={`${player.imageUrl}`} alt={`Photo of ${player.name}`} />
                        {(player.team) ?
                            <button onClick={() => navigate(`/team/${player.team.id}`)}>View Team {player.team.name}</button> :
                            null
                        }
                    </>:
                    <>
                        <h3>Player not found!</h3>
                    </>
                }<button onClick={() => navigate('/')}>Back to all players</button>
            </div>
        </div>
    );
};

export default SinglePlayer;