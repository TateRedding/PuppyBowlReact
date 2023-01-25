import React from "react";

const NewPlayerForm = ({nameInput, setNameInput, breedInput, setBreedInput, addNewPlayer, renderAllPlayers }) => {

    //Can onSubmit be an async callback function?
    const handleSubmit = (event) => {
        event.preventDefault();
        const newPlayer = {
            name: nameInput,
            breed: breedInput
        };
        const submitAndReset = async () => {
            await addNewPlayer(newPlayer);
            renderAllPlayers();
        };
        submitAndReset();
        setNameInput('');
        setBreedInput('');
    };

    return (
        <div id="new-player-form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    value={nameInput} 
                    onChange={(event) => setNameInput(event.target.value)} />
                <label htmlFor="breed">Breed:</label>
                <input 
                    type="text" 
                    name="breed" 
                    value={breedInput}
                    onChange={(event) => setBreedInput(event.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default NewPlayerForm;