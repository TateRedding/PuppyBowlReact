import React, { useState } from "react";
import "./form.css";

const SearchForm = ({ playerList, setSearchTerm, setPlayerList, selectedTeam }) => {
    const [ searchInput, setSearchInput ] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchTerm(searchInput);
        setPlayerList(playerList.filter((player) => {
            const term = searchInput.toLowerCase();
            return player.name.toLowerCase().includes(term);
        }));
        setSearchInput('');
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="search"
                    value={searchInput}
                    onChange={(event) => setSearchInput(event.target.value)} />
                <button type="submit">{
                    (selectedTeam.name) ?
                        `Search Team ${selectedTeam.name}` :
                        "Search"
                }</button>
            </form>
        </div>
    );
};

export default SearchForm;