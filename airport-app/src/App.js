   import './App.css';
   import HomePage from "./public/Homepage/Homepage"
   import AirPort from "./public/AirportPage"
   import AddingAricraft from "./public/AddingAircraft"
   import AddingAirPort from "./public/AddingAirport"
   import axios from "axios";
   import Header from "./public/Header"
   import { useEffect, useState, useCallback } from "react";
   import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
   import {fetchAirports} from "./utils/apicalls";
   import {BASE_URL} from "./utils/config"
   import AirPortList from './components/airportlist';
   import AdminPage from './public/AdminPage';
   import AddFlight from './public/AddFlight';
   import AirportsByName from './components/AirportsByName'


    
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
        //
        <div className='App'>
          <Header/>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/airportlist" element={<AirPortList airports={airports}/>} />
              <Route path="/airportsbyname" element={<AirportsByName/>}/>
              <Route path="/adminPage" element={<AdminPage />} />
              <Route path="/addAircraft" element={<AddingAricraft />} />
              <Route path="/addFlight" element={<AddFlight />} />
              <Route path="/addAirport" element={<AddingAirPort />} />
          </Routes>
        </div>
    );
}

export default App;
