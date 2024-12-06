import React, {useState} from 'react';
import axios from "axios";
import {BASE_URL} from "../utils/config";
import BackButton from './BackButton';
import {  useNavigate } from "react-router-dom";

const Header = (header )=>{
     const [aircraftID, setAirCraftID] = useState('');

     const [takeOffTime, setTakingOffTime] = useState('');
     const [takingOffAirportName, setTakingOffAirportName] = useState('');

     const [landingTime, setLandingTime] = useState('');
     const [landingAirportName, setLandingAirportName] = useState('');


     const [errors, setErrors] = useState({});
     const navigate = useNavigate();

//          const validate = () => {
//                  const errors = {};
//                  if (!aircraftID.trim()) {
//                      errors.title = 'Aircraft Id is required';
//                  }
//                  if (!aircraftName.trim()) {
//                      errors.authorName = 'Aircraft name is required';
//                  }
//                  if (!airlineName.trim()) {
//                      errors.publisherName = 'Airline name is required';
//                  }
//                  if (!numPass.trim()) {
//                      errors.publisherAddress = 'Number of passengers for the aircraft is required';
//                  }
//                  if (!takeOffLocation.trim()) {
//                      errors.isbn = 'The take off date is required';
//                  }
//                  if (!takingOffAirportName.trim()) {
//                       errors.isbn = 'The airport for the take off is required';
//                  }
//                  if (!takingOffAirportName.trim()) {
//                        errors.isbn = 'The airport for the take off is required';
//                 }
//                  return errors;
//              };

     const handleSubmit = (event) => {
         event.preventDefault();
         console.log(aircraftID);

         const newFlight = {
             airCraft: {
                 airCraft_id: parseInt(aircraftID),
                 "airCraft_id": 1,
                 type: "Airbus A320",
                 airlineName: "pal",
                 numberOfPass: 100,
             },
         Passengers: null,
             takeOff: {
                     takeOffLocation: {
                         name: takingOffAirportName,

                     },
                     takeOffTime: takeOffTime,
                     airCraft: {
                          aircraftID: aircraftID,
                     },
                 },

                landing: {
                    landingLocation: {
                        name: landingAirportName,

                 },
                     landingTime: landingTime,
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
             });

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
                                      value={aircraftID}
                                      onChange={(e) => setAirCraftID(e.target.value)}
                                      required
                                  />
                                  {errors.type && <p style={{ color: 'red' }}>{errors.aircraftID}</p>}
                              </div>

                               <div>
                                    <label>Take Off Time:</label>
                                    <input
                                        type="text"
                                        value={takeOffTime}
                                        onChange={(e) => setTakingOffTime(e.target.value)}
                                        required
                                    />
                                    {errors.numPass && <p style={{ color: 'red' }}>{errors.takeOffTime}</p>}
                               </div>

                                <div>
                                    <label>Taking Off Airport Name:</label>
                                    <input
                                        type="text"
                                        value={takingOffAirportName}
                                        onChange={(e) => setTakingOffAirportName(e.target.value)}
                                        required
                                    />
                                    {errors.numPass && <p style={{ color: 'red' }}>{errors.takingOffAirportName}</p>}
                                </div>

                                <div>
                                    <label>Landing Time:</label>
                                    <input
                                        type="text"
                                        value={landingTime}
                                        onChange={(e) => setLandingTime(e.target.value)}
                                        required
                                    />
                                    {errors.numPass && <p style={{ color: 'red' }}>{errors.landingTime}</p>}
                                </div>

                                <div>
                                    <label>Landing Airport Name:</label>
                                    <input
                                        type="text"
                                        value={landingAirportName}
                                        onChange={(e) => setLandingAirportName(e.target.value)}
                                        required
                                    />
                                    {errors.numPass && <p style={{ color: 'red' }}>{errors.landingAirportName}</p>}
                                </div>

                              <div>
                              <button type="submit">Add Flight</button>
                              </div>
                          </form>
                      </div>

        )
    }

export default Header