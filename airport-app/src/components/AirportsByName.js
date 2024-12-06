import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/config";

const AirportsByName = () => {
    const [name, setName] = useState('');
    const [airports, setAirports] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    

    const handleSearch = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`${BASE_URL}/searchAirportByName?name=${name}`);
            console.log(response.data);
            setAirports([response.data]);
        } catch (error) {
            console.error('There was an error fetching the airport name!', error);
            setError('Airport not found');
            setAirports([]);
        } finally {
            setLoading(false);
        }
    };
    console.log(airports.length)
    return (
        <div>
            <h1>Search for an Airport</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter airport name"
            />
            <button onClick={handleSearch}>Search</button>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {
                airports.map(airport => (
                    <div className="airport-card" key={airport.id}>
                        <h2>{airport.name}</h2>
                        <p>{airport.code}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default AirportsByName;