import React from "react";

const PlayerHeader = ({ player }) => {
    return (
        <div className="header-info">
                <p className="pup-title">{player.name}</p>
                <p className="pup-number">#{player.id}</p>
        </div>
    );
};

export default PlayerHeader;