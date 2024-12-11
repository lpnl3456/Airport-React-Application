import React, {useState} from 'react';
import axios from "axios";
import {BASE_URL} from "../utils/config";
import BackButton from './BackButton';
import {  useNavigate } from "react-router-dom";

const Header = (header )=>{
     const [aircraftID, setAirCraftID] = useState('');

     const [takeOffTime, setTakingOffTime] = useState('');
     const [takingOffAirportName, setTakingOffAirportName] = useState('');
     const [takingOffGate, setTakingOffGate] = useState('');

     const [landingTime, setLandingTime] = useState('');
     const [landingAirportName, setLandingAirportName] = useState('');
     const [landingGate, setLandingGate] = useState('');


     const [errors, setErrors] = useState({});
     const navigate = useNavigate();

         const validate = () => {
                 const errors = {};
                 if (!aircraftID.trim()) {
                     errors.aircraftID = 'Aircraft Id is required';
                 }
                 if (!takeOffTime.trim()) {
                     errors.takeOffTime = 'The take off date is required';
                 }
                 if (!takingOffAirportName.trim()) {
                      errors.takingOffAirportName = 'The airport for the take off is required';
                 }
                 if (!takingOffGate.trim()) {
                       errors.takingOffGate = 'The airport gate for the take off is required';
                }

                if (!landingTime.trim()) {
                    errors.landingTime = 'The landing date is required';
                }
                if (!landingAirportName.trim()) {
                      errors.landingAirportName = 'The airport for the landing is required';
                 }
                 if (!landingGate.trim()) {
                       errors.landingGate = 'The airport gate for the landing is required';
                }
                 return errors;
             };

     const handleSubmit = (event) => {
         event.preventDefault();
         console.log(aircraftID);

         const newFlight = {
             airCraft: {
                 airCraft_id: aircraftID,

             },
         Passengers: null,
             takeOff: {
                     takeOffLocation: {
                         name: takingOffAirportName,

                     },
                     takeOffTime: takeOffTime,
                     gate: {
                         gateName: takingOffGate},
                     airCraft: {
                          aircraftID: aircraftID,
                     },
                 },

                landing: {
                    landingLocation: {
                        name: landingAirportName,

                 },
                     landingTime: landingTime,
                     gate: {gateName: landingGate
                         },
                     airCraft: {
                           aircraftID: aircraftID,
                     }
                 }


             }
         console.log(newFlight);

         axios.post(`${BASE_URL}/flight_details`, newFlight)
             .then(response => {
                 console.log('flight created successfully:', response.data);
             })

             .catch(error => {
                 console.error('There was an error creating the flight!', error);

                 setAirCraftID("");
                 setTakingOffTime("");
                 setTakingOffAirportName("");
                 setTakingOffGate("");
                 setLandingTime("");
                 setLandingAirportName("");
                 setLandingGate("");
                 setErrors({});
             });

     }
    return(
       <div>


                          <h1>Create New Aircraft</h1>

                             <BackButton onClick = {() => {
                                       navigate(-1)}}/>
                          <h1>Create New Flight</h1>

                          <form onSubmit={handleSubmit}>
                              <div>
                                  <label>Aircraft ID:</label>
                                  <input
                                      type="text"
                                      value={aircraftID}
                                      onChange={(e) => setAirCraftID(e.target.value)}
                                      required
                                  />
                                  {errors.aircraftID && <p style={{ color: 'red' }}>{errors.aircraftID}</p>}
                              </div>
                               <br/>
                               <h3>Taking Off date</h3>
                               <hr/>
                               <br/>
                               <div>
                                    <label>Take Off Time:</label>
                                    <input
                                        type="text"
                                        value={takeOffTime}
                                        onChange={(e) => setTakingOffTime(e.target.value)}
                                        required
                                    />
                                    {errors.takeOffTime && <p style={{ color: 'red' }}>{errors.takeOffTime}</p>}
                               </div>

                                <div>
                                    <label>Taking Off Airport Name:</label>
                                    <input
                                        type="text"
                                        value={takingOffAirportName}
                                        onChange={(e) => setTakingOffAirportName(e.target.value)}
                                        required
                                    />
                                    {errors.takingOffAirportName && <p style={{ color: 'red' }}>{errors.takingOffAirportName}</p>}
                                </div>
                                <div>
                                 <label>Taking Off Gate:</label>
                                    <input
                                        type="text"
                                        value={takingOffGate}
                                        onChange={(e) => setTakingOffGate(e.target.value)}
                                        required
                                    />
                                    {errors.takingOffGate && <p style={{ color: 'red' }}>{errors.takingOffGate}</p>}
                                </div>

                                <br/>
                                <h3>Landing data</h3>
                                <hr/>
                                <br/>
                                <div>
                                    <label>Landing Time:</label>
                                    <input
                                        type="text"
                                        value={landingTime}
                                        onChange={(e) => setLandingTime(e.target.value)}
                                        required
                                    />
                                    {errors.landingTime && <p style={{ color: 'red' }}>{errors.landingTime}</p>}
                                </div>

                                <div>
                                    <label>Landing Airport Name:</label>
                                    <input
                                        type="text"
                                        value={landingAirportName}
                                        onChange={(e) => setLandingAirportName(e.target.value)}
                                        required
                                    />
                                    {errors.landingAirportName && <p style={{ color: 'red' }}>{errors.landingAirportName}</p>}
                                </div>

                                <div>
                                    <label>Landing Gate:</label>
                                    <input
                                        type="text"
                                        value={landingGate}
                                        onChange={(e) => setLandingGate(e.target.value)}
                                        required
                                    />
                                    {errors.landingGate && <p style={{ color: 'red' }}>{errors.landingGate}</p>}
                                </div>



                              <div>
                              <button type="submit">Add Flight</button>
                              </div>
                          </form>
                      </div>

        )
    }

export default Header