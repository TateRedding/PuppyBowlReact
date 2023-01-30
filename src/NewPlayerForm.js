import React, { useState }from "react";
import "./form.css";

const NewPlayerForm = ({
        APIURL,
        renderAllPlayers }) => {
    const [ nameInput, setNameInput ] = useState('');
    const [ breedInput, setBreedInput ] = useState('');
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newPlayer = {
            name: nameInput,
            breed: breedInput
        };
        await addNewPlayer(newPlayer);
        renderAllPlayers();
        setNameInput('');
        setBreedInput('');
    };

    return (
        <div className="form-container">
            <h3>Enter your pup now!</h3>
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