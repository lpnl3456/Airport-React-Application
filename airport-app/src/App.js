   import './App.css';
   import HomePage from "./public/Homepage/Homepage"
   import AirPort from "./public/AirportPage"
   import AddingAricraft from "./public/AddingAircraft"
   import axios from "axios";
   import Header from "./public/Header"
   import { useEffect, useState, useCallback } from "react";
   import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
   import {fetchAirports} from "./utils/apicalls";
   import {BASE_URL} from "./utils/config"
   import AirPortList from './components/airportlist';
   import AirportsByName from './components/AirportsByName'
import AddingAirPort from './public/AddingAirport';

    
   function App() {
    const [airports, setAirports] = useState([]);

    const loadAirports = useCallback(async () => {
        try {
            const response = await axios.get(`${BASE_URL}/airport`);
            setAirports(response.data);
        } catch (error) {
            console.error("Error fetching airports:", error);
        }
    }, []);

    useEffect(() => {
        loadAirports().then(() => console.log('Airports loaded'));
    }, [loadAirports]);

    return (
        // <div>
        //     <h1>Airports</h1>
        //         {airports.map(airport => (
        //           <div key={airport.id}>
        //             <p>{airport.name}</p>
        //             <p>{airport.code}</p>
        //           </div>
        //         ))}
        // </div>
        <div className='App'>
          <Header/>
          <Routes>
              <Route path="/airportlist" element={<AirPortList airports={airports}/>} />
              <Route path="/airportsbyname" element={<AirportsByName/>}/>
              <Route path="/addairport" element={<AddingAirPort/>}/>
          </Routes>
        </div>
    );
}

export default App;