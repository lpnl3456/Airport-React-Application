import TakeOffAndLandingInfo from "./TakeOffAndFlightInfo"
import React, { useState } from 'react';
import axios from 'axios';
import {BASE_URL} from "../utils/config";
const AirportPage = ()=>{
    const [landing, setLanding] = useState('');
    const [airportName, setAirportName] = useState('');
    const [loading, setLoading] = useState(false);
    let searchAirport = async ()=> {
        setLoading(true);
        try {
            const response = await axios.get(`${BASE_URL}/landing/airport/Austin`); 
            console.log(response.data)
            setLanding(response.data);
            console.log(landing)
        } catch (error) {
            console.error('There was an error fetching the author details!', error);
            setLanding([]);
        }finally {
            setLoading(false);
        }

    };
       
      
      

    return(
        <>
      <div>
      <input
                type="text"
                value={airportName}
                onChange={(e) => setAirportName(e.target.value)}
                placeholder="Enter the Airport"
            />
            <button onClick={searchAirport}>Search</button>
        <br />
        <hr />
        <h3>Flights</h3>
        <h3>Landings</h3>
        {loading && <p>Loading...</p>}
        {landing.length >0 ?(
         landing.map((flight) =>(
        
        
         <p>
         {flight.id}
         {flight.landingLocation}
         </p>
         
         
        ))):(
            !loading && <p> Please search Airport</p>
        )}
        <h3>Take Off</h3>
        </div>
        </>
      
    )}

export default AirportPage