import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";

const SearchForm = () => {
    const [ searchInput, setSearchInput ] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/search/${searchInput}`);
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
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchForm;