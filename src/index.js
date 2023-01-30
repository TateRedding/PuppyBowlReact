import React, { useState, useEffect } from "react";
import { createRoot } from 'react-dom/client';
import Header from "./Header.js";
import NewPlayerForm from "./NewPlayerForm.js";
import SearchForm from "./SearchForm";
import MultiplePlayers from "./MultiplePlayers.js";
import SinglePlayer from "./SinglePlayer.js";

const App = () => {
    const APIURL = "https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-am";
    const [ playerList, setPlayerList ] = useState([]);
    const [ selectedPlayer, setSelectedPlayer ] = useState({});
    const [ selectedTeam, setSelectedTeam ] = useState({});
    const [ searchTerm, setSearchTerm ] = useState("");

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
            <>{
                (selectedPlayer.name) ?
                    <></> :
                    <SearchForm 
                        playerList={playerList}
                        setSearchTerm={setSearchTerm}
                        setPlayerList={setPlayerList}
                        selectedTeam={selectedTeam} />
            }</>
            <div className="main-content">{
                (selectedPlayer.name) ?
                    <SinglePlayer
                        player={selectedPlayer}
                        setPlayerList={setPlayerList}
                        setSelectedPlayer={setSelectedPlayer}
                        setSelectedTeam={setSelectedTeam} /> :
                    (playerList.length) ?
                        <MultiplePlayers
                            playerList={playerList}
                            selectedTeam={selectedTeam}
                            setSelectedTeam={setSelectedTeam}
                            setSelectedPlayer={setSelectedPlayer}
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                            APIURL={APIURL}
                            renderAllPlayers={renderAllPlayers} /> :
                            (searchTerm) ?
                                <>
                                    <h3>No players found! Go back or try another search term.</h3>
                                    <button onClick={() => {
                                        if (selectedTeam.name) {
                                            setPlayerList(selectedTeam.players)
                                            
                                        } else {
                                            renderAllPlayers();
                                            setSelectedTeam({});
                                            setSelectedPlayer({});
                                        }
                                        setSearchTerm('');
                                    }}>Go back</button>
                                </> :
                                <h3>No players to display!</h3>
            }</div>
        </>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);