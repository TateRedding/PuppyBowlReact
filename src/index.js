import React, { useState, useEffect } from "react";
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./Header.js";
import NewPlayerForm from "./NewPlayerForm.js";
import SearchForm from "./SearchForm";
import AllPlayers from "./AllPlayers.js";
import TeamPlayers from "./TeamPlayers.js";
import SinglePlayer from "./SinglePlayer.js";
import SearchResults from "./SearchResults.js";

const App = () => {
    const APIURL = "https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-am";
    const [ allPlayersList, setAllPlayersList ] = useState([]);

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

    const getAndSetAllPlayers = async () => {
        setAllPlayersList(await getAllPlayers());
    };

    useEffect(() => {
        getAndSetAllPlayers();
    }, []);
    
    return (
        <>
            <Header />
            <NewPlayerForm APIURL={APIURL} getAndSetAllPlayers={getAndSetAllPlayers}/>
            <SearchForm />

            {<Routes>
                <Route path="/" element={<AllPlayers APIURL={APIURL} allPlayersList={allPlayersList} getAndSetAllPlayers={getAndSetAllPlayers}/>} />
                <Route path="/search/:searchTerm" element={<SearchResults APIURL={APIURL} getAndSetAllPlayers={getAndSetAllPlayers} />} />
                <Route path="/team/:teamId" element={<TeamPlayers APIURL={APIURL} />} />
                <Route path="/player/:playerId" element={<SinglePlayer APIURL={APIURL}/>} />
            </Routes>}

        </>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <HashRouter>
        <App />
    </HashRouter>
);