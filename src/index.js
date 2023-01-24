import React, { useState, useEffect } from "react";
import { createRoot } from 'react-dom/client';
import NewPlayerForm from "./NewPlayerForm.js";
import AllPlayers from "./AllPlayers.js";

const App = () => {
    const APIURL = "https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-am";
    const [puppyList, setPuppyList] = useState([]);
    const getAllPlayers = async () => {
        try {
            const resp = await fetch(`${APIURL}/players`);
            const result = await resp.json();
            if (result.error) {
                throw result.error
            }
            return(result.data.players)
        } catch (error) {
            console.error("Something went wrong!", error);
        }
    };
    
    useEffect(() => {
        const initPuppyList = async () => {
            setPuppyList(await getAllPlayers());
        };
        initPuppyList();
    }, [])
    
    return (
        <>
            <NewPlayerForm />
            <div id="all-players-container">{
                (puppyList.length) ? <AllPlayers puppyList={puppyList} /> : <h3>No players to display!</h3>
            }</div>
        </>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);