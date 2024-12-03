import React, {useState} from 'react';
import axios from "axios";
import {BASE_URL} from "../utils/config";

const AddingAirCraft = (addingAirCraft )=>{
     const [type, setType] = useState('');
     const [airlineName, setAriLineName] = useState('');
     const [numPass, setNumPass] = useState('');
     const [errors, setErrors] = useState({});

    const validate = () => {
            const errors = {};
            if (!type.trim()) {
                errors.title = 'type is required';
            }
            if (!airlineName.trim()) {
                errors.authorName = 'airline name is required';
            }
            if (!numPass.trim()) {
                errors.publisherName = 'number of passengers name is required';
            }
            return errors;
        };

    const handleSubmit = (event) => {
            event.preventDefault();

            const validationErrors = validate();
            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                return;
            }

            const newAircraft = {
                type: type,
                airlineName: airlineName,
                numberOfPass: numPass,

            };

            axios.post(`${BASE_URL}/aircraft`, newAircraft)
                .then(response => {
                    console.log('aircraft created successfully:', response.data);

                    setType("");
                    setAriLineName("");
                    setNumPass("");
                    setErrors({});
                })

                .catch(error => {
                    console.error('There was an error creating the book!', error);
                });


        };

    return(
       <div>
                   <h1>Create New Aircraft</h1>
                   <form onSubmit={handleSubmit}>
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

                       <button type="submit">Add Aircraft</button>
                   </form>
               </div>

        )
    }

export default AddingAirCraft