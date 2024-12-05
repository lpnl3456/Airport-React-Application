import React, {useState} from 'react';
import axios from "axios";
import {BASE_URL} from "../utils/config";

    const AddingAirPort = (addingAirport )=>{
        const [airportName, setAirportName] = useState('');
        const [code, setCode] = useState('');
        const [cityName, setCityName] = useState('');
        const [errors, setErrors] = useState({});
        const [gateList, setGateList] = useState([{ gateName: ''}]);

    const validate = () => {
            const errors = {};
            if (!airportName.trim()) {
                errors.airportName = 'city name is required';
            }
            if (!code.trim()) {
                errors.code = 'airport code is required';
            }
            if (!cityName.trim()) {
                errors.cityName = 'city name is required';
            }
            return errors;
        };

        const handleGateChange = (index, event) => {
            const newGateList = gateList.map((gate, i) => {
                if (i === index) {
                    return { ...gate, [event.target.name]: event.target.value };
                }
                return gate;
            });
            console.log(gateList);
            setGateList(newGateList);
            console.log(gateList);

        };
    
        const addGate = () => {
            setGateList([...gateList, { gateName: ''}]);
        };
    
        const removeGate = (index) => {
            const newGateList = gateList.filter((_, i) => i !== index);
            setGateList(newGateList);
        };

    const handleSubmit = (event) => {
            event.preventDefault();

            const validationErrors = validate();
            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                return;
            }

            const newAirport = {
                name: airportName,
                code: code,
                city: {name: cityName},
                gates: gateList
                // help

            };

            console.log("This is new airport" + newAirport)

            axios.post(`${BASE_URL}/airport`, newAirport)
                .then(response => {
                    console.log('airport created successfully:', response.data);

                    setAirportName("");
                    setCode("");
                    setCityName("");
                    setGateList([{gateName: ""}]);
                    setErrors({});
                })

                .catch(error => {
                    console.error('There was an error creating the airport!', error);
                });


        };

    return(
       <div>
                   <h1>Create New Airport</h1>
                   <form onSubmit={handleSubmit}>
                       <div>
                           <label>Airport Name:</label>
                           <input
                               type="text"
                               value={airportName}
                               onChange={(e) => setAirportName(e.target.value)}
                               required
                           />
                           {errors.airportName && <p style={{ color: 'red' }}>{errors.airportName}</p>}
                       </div>
                       <div>
                           <label>Airport Code:</label>
                           <input
                               type="text"
                               value={code}
                               onChange={(e) => setCode(e.target.value)}
                               required
                           />
                           {errors.code && <p style={{ color: 'red' }}>{errors.code}</p>}
                       </div>
                       <div>
                           <label>City Name:</label>
                           <input
                               type="text"
                               value={cityName}
                               onChange={(e) => setCityName(e.target.value)}
                               required
                           />
                           {errors.cityName && <p style={{ color: 'red' }}>{errors.cityName}</p>}
                       </div>


                       <div>
                    <label>Gates:</label>
                    {gateList.map((gate, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                name="gateName"
                                placeholder="Gate Name"
                                value={gate.gateName}
                                onChange={(e) => handleGateChange(index, e)}
                                required
                            />
                            <button type="button" onClick={() => removeGate(index)}>Remove Gate</button>
                        </div>
                    ))}
                    <button type="button" onClick={addGate}>Add Gate</button>
                    </div>

                       <button type="submit">Add Airport</button>
                   </form>
               </div>

        )
    }

export default AddingAirPort;