   import './App.css';
   import HomePage from "./public/Homepage/Homepage"
   import AirPort from "./public/AirportPage"
   import AddingAricraft from "./public/AddingAircraft"
   import axios from "axios";
   import Header from "./public/Header"
   import { useEffect, useState, useCallback } from "react";
   import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
   import {fetchAirports} from "./utils/apicalls";

    
   function App() {
    let flights = ["New York"];
    let flightInfo = [];

    const [airports, setAirports] = useState([]);

    const loadAirports = useCallback(async () => {
        try {
            const airportData = await fetchAirports();
            setAirports(airportData);
        } catch (error) {
            console.error('Error loading books:', error);
        }
    }, []);

    useEffect(() => {
      loadAirports();
    }, [loadAirports]);

    
    

     return (
     <div>
     <Router>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/airports" element={<AirPort />} />
      <Route path="/addAircraft" element={<AddingAricraft />} />
      </Routes>

      </Router>
      </div>

     );
   }
   export default App;
