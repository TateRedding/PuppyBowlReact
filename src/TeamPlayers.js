import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MultiplePlayers from "./MultiplePlayers";

const TeamPlayers = ({ APIURL }) => {
    const [ team, setTeam ] = useState({});
    const { teamId } = useParams();
    const getTeam = async () => {
        try {
            const resp = await fetch(`${APIURL}/teams`);
            const result = await resp.json();
            if (result.error) {
                throw result.error
            }
            const teams = result.data.teams.filter((team) => team.id === parseInt(teamId))
            return teams[0];
        } catch (error) {
            console.error("Something went wrong!", error);
        }
    };

    const getAndSetTeamPlayers = async () => {
        setTeam(await getTeam());
    };

    useEffect(() => {
        getAndSetTeamPlayers();
    }, []);

    return (
        <div className="main-content">
            <h3>Team {team.name}</h3>
            <MultiplePlayers APIURL={APIURL} playerList={team.players} getAndSetPlayers={getAndSetTeamPlayers} />
        </div>
    );
};

export default TeamPlayers;