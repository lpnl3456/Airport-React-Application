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
          </Routes>
        </div>
    );
}

export default App;


   //   let flights = ["New York"];
  //   let flightInfo = [];

  //   const [airports, setAirports] = useState([]);

  //   const loadAirports = useCallback(async () => {
  //       try {
  //           const airportData = await fetchAirports();
  //           setAirports(airportData);
  //       } catch (error) {
  //           console.error('Error loading books:', error);
  //       }
  //   }, []);

  //   useEffect(() => {
  //     loadAirports();
  //   }, [loadAirports]);

    
    


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
