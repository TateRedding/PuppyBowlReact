import React, { useState, useEffect } from "react";
import { createRoot } from 'react-dom/client';
import NewPlayerForm from "./NewPlayerForm.js";
import AllPlayers from "./AllPlayers.js";
import SinglePlayer from "./SinglePlayer.js";

const App = () => {
    const APIURL = "https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-am";
    const [playerList, setPlayerList] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState({});
    const [nameInput, setNameInput] = useState('');
    const [breedInput, setBreedInput] = useState('');

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

    const addNewPlayer = async (player) => {
        try {
            await fetch(`${APIURL}/players`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: player.name,
                    breed: player.breed
                }),
            });
        } catch (error) {
            console.log("Something went wrong!", error);
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

    const renderAllPlayers = async () => {
        setPlayerList(await getAllPlayers());
    };
    
    useEffect(() => {renderAllPlayers()}, []);
    
    return (
        <>
            <NewPlayerForm nameInput={nameInput} setNameInput={setNameInput} breedInput={breedInput} setBreedInput={setBreedInput} addNewPlpayer={addNewPlayer} renderAllPlayers={renderAllPlayers}/>
            <div id="all-players-container">{
                (selectedPlayer.name) ? 
                    <SinglePlayer player={selectedPlayer} setSelectedPlayer={setSelectedPlayer}/> : 
                    (playerList.length) ? 
                        <AllPlayers playerList={playerList} setSelectedPlayer={setSelectedPlayer} getSinglePlayer={getSinglePlayer} removePlayer={removePlayer} renderAllPlayers={renderAllPlayers}/> : 
                        <h3>No players to display!</h3>
            }</div>
        </>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);