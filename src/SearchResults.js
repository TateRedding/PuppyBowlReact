import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MultiplePlayers from "./MultiplePlayers";

const SearchResults = ({ APIURL, getAndSetAllPlayers }) => {
    const [ results, setResults ] = useState([]);
    const { searchTerm } = useParams();

    const getResults = async () => {
        try {
            const resp = await fetch(`${APIURL}/players`);
            const result = await resp.json();
            if (result.error) {
                throw result.error
            }
            return result.data.players.filter((player) => {
                return player.name.toLowerCase().includes(searchTerm.toLowerCase());
            });
        } catch (error) {
            console.error("Something went wrong!", error);
        }
    };

    const getAndSetResults = async () => {
        setResults(await getResults());
    };

    useEffect(() => {
        getAndSetResults();
    }, [searchTerm]);

    return (
        <div className="main-content">
            <h3>Searching for: "{searchTerm}"</h3>
            <MultiplePlayers APIURL={APIURL} playerList={results} getAndSetPlayers={getAndSetAllPlayers} />
        </div>
    );
};

export default SearchResults;