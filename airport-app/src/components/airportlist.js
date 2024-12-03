import React from "react";

function AirPortList({airports}) {
    console.log(airports)
    
    return (
        <div className="airport-list">
            {airports.map(airport => (
                <div className="airport-card" key={airport.id}>
                    <h2>{airport.name}</h2>
                    <p>{airport.code}</p>
                </div>
            ))}
        </div>
    );
}

export default AirPortList;