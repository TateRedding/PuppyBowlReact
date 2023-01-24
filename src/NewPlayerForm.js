import React from "react";

const NewPlayerForm = () => {
    return (
        <div id="new-player-form">
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" />
                <label htmlFor="breed">Breed:</label>
                <input type="text" name="breed" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default NewPlayerForm;