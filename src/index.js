import React, { useState, useEffect } from "react";
import { createRoot } from 'react-dom/client';
import Header from "./Header.js";
import NewPlayerForm from "./NewPlayerForm.js";
import AllPlayers from "./AllPlayers.js";
import SinglePlayer from "./SinglePlayer.js";
import TeamView from "./TeamView.js";

const App = () => {
    const APIURL = "https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-am";
    const [ playerList, setPlayerList ] = useState([]);
    const [ selectedPlayer, setSelectedPlayer ] = useState({});
    const [ selectedTeam, setSelectedTeam ] = useState({});

    const getAllPlayers = async () => {
        try {
            const resp = await fetch(`${APIURL}/players`);
            const result = await resp.json();
            if (result.error) {
                throw result.error
            }
            return result.data.players
        } catch (error) {
            console.error("Something went wrong!", error);
        }
    };

    const renderAllPlayers = async () => {
        setPlayerList(await getAllPlayers());
    };
    
    useEffect(() => {renderAllPlayers()}, []);
    
    return (
        <>
            <Header />
            <NewPlayerForm
                APIURL={APIURL}
                renderAllPlayers={renderAllPlayers} />
            <div className="main-content">{
                (selectedTeam.name) ?
                    <TeamView
                        selectedTeam={selectedTeam}
                        setSelectedTeam={setSelectedTeam}
                        setSelectedPlayer={setSelectedPlayer}
                        APIURL={APIURL}
                        renderAllPlayers={renderAllPlayers} /> :
                    (selectedPlayer.name) ?
                        <SinglePlayer
                            player={selectedPlayer}
                            setSelectedPlayer={setSelectedPlayer}
                            setSelectedTeam={setSelectedTeam} /> :
                        (playerList.length) ?
                            <AllPlayers
                                playerList={playerList}
                                selectedTeam={selectedTeam}
                                setSelectedTeam={setSelectedTeam}
                                setSelectedPlayer={setSelectedPlayer}
                                APIURL={APIURL}
                                renderAllPlayers={renderAllPlayers} /> :
                            <h3>No players to display!</h3>
            }</div>
        </>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);