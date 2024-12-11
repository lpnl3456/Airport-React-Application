import React, {useState} from 'react';
import axios from "axios";
import {BASE_URL} from "../utils/config";
import BackButton from './BackButton';
import {  useNavigate } from "react-router-dom";

const AddGate = (addGate )=>{
     const [gateName, setGateName] = useState('');
     const [errors, setErrors] = useState({});
     const navigate = useNavigate();

    const validate = () => {
            const errors = {};
            if (!gateName.trim()) {
                errors.title = 'gate name is required';
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

            const newGate = {
                gateName: gateName

            };

            axios.post(`${BASE_URL}/gate`, newGate)
                .then(response => {
                    console.log('aircraft created successfully:', response.data);

                    setGateName("");

                    setErrors({});
                })

                .catch(error => {
                    console.error('There was an error creating the gate!', error);
                });


        };

    return(
       <div>

                   <h1>Create New Gate</h1>
                   <form onSubmit={handleSubmit}>
                       <div>
                           <label>Gate Name:</label>
                           <input
                               type="text"
                               value={gateName}
                               onChange={(e) => setGateName(e.target.value)}
                               required
                           />
                           {errors.type && <p style={{ color: 'red' }}>{errors.type}</p>}
                       </div>


                       <button type="submit">Add Gate</button>
                   </form>
               </div>

        )
    }

export default AddGate