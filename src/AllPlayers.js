import React from "react";
import PlayerCard from "./PlayerCard";

const AllPlayers = ({ puppyList }) => {
    return (
        <>
            {
                puppyList.map((puppy) => {
                    return <PlayerCard key={puppy.id} puppy={puppy} />
                })
            }
        </>
    );
};

export default AllPlayers;