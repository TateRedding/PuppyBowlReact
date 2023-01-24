import React from "react";

const PlayerCard = ({ puppy }) => {
    return (
        <div className="single-player-card">
            <div className="header-info">
                <p className="pup-title">{puppy.name}</p>
                <p className="pup-number">{puppy.id}</p>
            </div>
            <img src={`${puppy.imageUrl}`} alt={`Photo of ${puppy.name}`} />
            <button className="detail-button" data-id={puppy.id}>See details</button>
            <button className="remove-button" data-id={puppy.id}>Remove from roster</button>
        </div>
    );
};

export default PlayerCard;