import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/config";

const AirportsByName = () => {
    const [name, setName] = useState('');
    const [airports, setAirports] = useState([]);
    const [landings, setLandings] = useState([]);
    const [takeOffs, setTakeOffs] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`${BASE_URL}/searchAirportByName?name=${name}`);
            console.log(response.data);
            setAirports([response.data]);
            searchTakeOffs();
            // searchLandings();
        } catch (error) {
            console.error('There was an error fetching the airport name!', error);
            setError('Airport not found');
            setAirports([]);
        } finally {
            setLoading(false);
        }
    };

    const searchTakeOffs = async () => {
        setLoading(true);
        setError('');
        try {
            console.log("reading the link")
            const response = await axios.get(`${BASE_URL}/searchTakeOffByAirport?airportName=${name}`);
            console.log("Trying to get data")
            console.log("TakeOff data", response.data);
            setTakeOffs([response.data]);
        } catch (error) {
            console.error('There was an error fetching the take off airport name!', error);
            setError('Take off Airport not found');
            setTakeOffs([]);
        } finally {
            setLoading(false);
        }
    };

    const searchLandings = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`${BASE_URL}/http://localhost:8080/searchLandingByAirport?airportName=${name}`);
            console.log(response.data);
            setLandings([response.data]);
        } catch (error) {
            console.error('There was an error fetching the landing airport name!', error);
            setError('Landing Airport not found');
            setLandings([]);
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
            },
            {
                takeOffs.map(takeOff => (
                    <div className="takeOff-card" key={takeOff.id}>
                        <h2>{takeOff.takeOffLocation}</h2>
                        <p>{takeOff.takeOffTime}</p>
                        <p>{takeOff.aircraft}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default AirportsByName;