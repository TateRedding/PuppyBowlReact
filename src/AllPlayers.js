import React, { useState, useEffect } from "react";
import MultiplePlayers from "./MultiplePlayers";

const AllPlayers = ({ APIURL, allPlayersList, getAndSetAllPlayers }) => {
    return (
        <div className="main-content">
            <h3>Full Roster</h3>
            <MultiplePlayers APIURL={APIURL} playerList={allPlayersList} getAndSetPlayers={getAndSetAllPlayers} />
        </div>
    );
};

export default AllPlayers;