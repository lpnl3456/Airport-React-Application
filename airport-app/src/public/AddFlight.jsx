import React, {useState} from 'react';
import axios from "axios";
import {BASE_URL} from "../utils/config";
import BackButton from './BackButton';
import {  useNavigate } from "react-router-dom";

const Header = (header )=>{
    const [type, setType] = useState('');
         const [aircraftID, setAirCraftID] = useState('');
         const [aircraftName, setAirCraftName] = useState('');
         const [airlineName, setAriLineName] = useState('');
         const [numPass, setNumPass] = useState('');

         const [takingOffID, setTakingOffId] = useState('');
         const [takeOffLocation, setTakingOffLocation] = useState('');
         const [takingOffAirportName, setTakingOffAirportName] = useState('');
         const [takingOffAirportCode, setTakingOffAirportCode] = useState('');
         const [takingOffAirportGate, setTakingOffAirportGate] = useState([]);
         const [takingOffCityName, setTakingOffCityName] = useState('');
         const [takingOffCityState, setTakingOffCityState] = useState('');
         const [takingOffCityPop, setTakingOffCityPop] = useState('');

         const [landingID, setLandingId] = useState('');
         const [landingLocation, setLandingLocation] = useState('');
         const [landingAirportName, setLandingAirportName] = useState('');
         const [landingAirportCode, setLandingAirportCode] = useState('');
         const [landingAirportGate, setLandingAirportGate] = useState([]);
         const [landingCityName, setLandingCityName] = useState('');
         const [landingCityState, setLandingCityState] = useState('');
         const [landingCityPop, setLandingCityPop] = useState('');

         const [errors, setErrors] = useState({});
         const navigate = useNavigate();

         const handleSubmit = (event) => {
                 event.preventDefault();
                 }
    return(
       <div>

                             <BackButton onClick = {() => {
                                       navigate(-1)}}/>
                          <h1>Create New Aircraft</h1>
                          <form onSubmit={handleSubmit}>
                              <div>
                                  <label>Aircraft ID:</label>
                                  <input
                                      type="text"
                                      value={type}
                                      onChange={(e) => setType(e.target.value)}
                                      required
                                  />
                                  {errors.type && <p style={{ color: 'red' }}>{errors.type}</p>}
                              </div>
                             <div>
                                    <label>Type:</label>
                                    <input
                                        type="text"
                                        value={type}
                                        onChange={(e) => setType(e.target.value)}
                                        required
                                    />
                                    {errors.type && <p style={{ color: 'red' }}>{errors.type}</p>}
                                </div>
                                <div>
                                    <label>Air Line Name:</label>
                                    <input
                                        type="text"
                                        value={airlineName}
                                        onChange={(e) => setAriLineName(e.target.value)}
                                        required
                                    />
                                    {errors.airlineName && <p style={{ color: 'red' }}>{errors.airlineName}</p>}
                                </div>
                                <div>
                                    <label>Number Of Passengers:</label>
                                    <input
                                        type="text"
                                        value={numPass}
                                        onChange={(e) => setNumPass(e.target.value)}
                                        required
                                    />
                                    {errors.numPass && <p style={{ color: 'red' }}>{errors.numPass}</p>}
                                </div>

                                <div>
                                    <label>Taking Off ID:</label>
                                    <input
                                        type="text"
                                        value={numPass}
                                        onChange={(e) => setTakingOffId(e.target.value)}
                                        required
                                    />
                                    {errors.numPass && <p style={{ color: 'red' }}>{errors.takingOffID}</p>}
                                </div>

                                <div>
                                    <label>Take Off Location:</label>
                                    <input
                                        type="text"
                                        value={numPass}
                                        onChange={(e) => setTakingOffLocation(e.target.value)}
                                        required
                                    />
                                    {errors.numPass && <p style={{ color: 'red' }}>{errors.takingOffLocation}</p>}
                                </div>

                                <div>
                                    <label>Taking Off Airport Name:</label>
                                    <input
                                        type="text"
                                        value={numPass}
                                        onChange={(e) => setTakingOffAirportName(e.target.value)}
                                        required
                                    />
                                    {errors.numPass && <p style={{ color: 'red' }}>{errors.takingOffAirportName}</p>}
                                </div>

                                <div>
                                    <label>Taking Off Airport Code:</label>
                                    <input
                                        type="text"
                                        value={numPass}
                                        onChange={(e) => setTakingOffAirportCode(e.target.value)}
                                        required
                                    />
                                    {errors.numPass && <p style={{ color: 'red' }}>{errors.takingOffAirportCode}</p>}
                                </div>

                                <div>
                                    <label>Taking Off City Name:</label>
                                    <input
                                        type="text"
                                        value={numPass}
                                        onChange={(e) => setTakingOffCityName(e.target.value)}
                                        required
                                    />
                                    {errors.numPass && <p style={{ color: 'red' }}>{errors.takingOffCityName}</p>}
                                </div>

                                <div>
                                    <label>Taking Off City Pop:</label>
                                    <input
                                        type="text"
                                        value={numPass}
                                        onChange={(e) => setTakingOffCityPop(e.target.value)}
                                        required
                                    />
                                    {errors.numPass && <p style={{ color: 'red' }}>{errors.takingOffCityPop}</p>}
                                </div>

                                <div>
                                    <label>Taking Off City State:</label>
                                    <input
                                        type="text"
                                        value={numPass}
                                        onChange={(e) => setTakingOffCityState(e.target.value)}
                                        required
                                    />
                                    {errors.numPass && <p style={{ color: 'red' }}>{errors.takingOffCityState}</p>}
                                </div>

                                <div>
                                    <label>Landing ID:</label>
                                    <input
                                        type="text"
                                        value={numPass}
                                        onChange={(e) => setLandingId(e.target.value)}
                                        required
                                    />
                                    {errors.numPass && <p style={{ color: 'red' }}>{errors.landingID}</p>}
                                </div>

                                <div>
                                    <label>Landing Location:</label>
                                    <input
                                        type="text"
                                        value={numPass}
                                        onChange={(e) => setLandingLocation(e.target.value)}
                                        required
                                    />
                                    {errors.numPass && <p style={{ color: 'red' }}>{errors.landingLocation}</p>}
                                </div>

                                <div>
                                    <label>Landing Airport Name:</label>
                                    <input
                                        type="text"
                                        value={numPass}
                                        onChange={(e) => setLandingAirportName(e.target.value)}
                                        required
                                    />
                                    {errors.numPass && <p style={{ color: 'red' }}>{errors.landingAirportName}</p>}
                                </div>

                                <div>
                                    <label>Landing Airport Code:</label>
                                    <input
                                        type="text"
                                        value={numPass}
                                        onChange={(e) => setLandingAirportCode(e.target.value)}
                                        required
                                    />
                                    {errors.numPass && <p style={{ color: 'red' }}>{errors.landingAirportCode}</p>}
                                </div>

                                <div>
                                    <label>Landing City Name:</label>
                                    <input
                                        type="text"
                                        value={numPass}
                                        onChange={(e) => landingCityName(e.target.value)}
                                        required
                                    />
                                    {errors.numPass && <p style={{ color: 'red' }}>{errors.landingCityName}</p>}
                                </div>

                                <div>
                                    <label>Landing City Pop:</label>
                                    <input
                                        type="text"
                                        value={numPass}
                                        onChange={(e) => setLandingCityPop(e.target.value)}
                                        required
                                    />
                                    {errors.numPass && <p style={{ color: 'red' }}>{errors.landingCityPop}</p>}
                                </div>

                                <div>
                                    <label>Landing City State:</label>
                                    <input
                                        type="text"
                                        value={numPass}
                                        onChange={(e) => setLandingCityState(e.target.value)}
                                        required
                                    />
                                    {errors.numPass && <p style={{ color: 'red' }}>{errors.landingCityState}</p>}
                                </div>
                              <div>
                              <button type="submit">Add Flight</button>
                              </div>
                          </form>
                      </div>

        )
    }

export default Header