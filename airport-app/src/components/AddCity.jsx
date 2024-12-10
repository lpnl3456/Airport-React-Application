import React, {useState} from 'react';
import axios from "axios";
import {BASE_URL} from "../utils/config";
import BackButton from './BackButton';
import {  useNavigate } from "react-router-dom";

const AddCity = (addCity )=>{
     const [name, setName] = useState('');
     const [state, setState] = useState('');
     const [population, setPopulation] = useState('');
     const [errors, setErrors] = useState({});
     const navigate = useNavigate();

    const validate = () => {
            const errors = {};
            if (!name.trim()) {
                errors.title = ' name is required';
            }

        if (!state.trim()) {
                errors.title = 'state is required';
        }

    if (!population.trim()) {
                    errors.title = 'population is required';
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

            const newCity = {
                name: name,
                state: state,
                population: parseInt(population)

            };

            axios.post(`${BASE_URL}/city`, newCity)
                .then(response => {
                    console.log('aircraft created successfully:', response.data);

                    setName("");
                    setState("");
                    setPopulation("");

                    setErrors({});
                })

                .catch(error => {
                    console.error('There was an error creating the gate!', error);
                });


        };

    return(
       <div>

                   <h1>Create New City</h1>
                   <form onSubmit={handleSubmit}>
                       <div>
                           <label>City Name:</label>
                           <input
                               type="text"
                               value={name}
                               onChange={(e) => setName(e.target.value)}
                               required
                           />
                           {errors.type && <p style={{ color: 'red' }}>{errors.type}</p>}
                       </div>

                       <div>
                          <label>City State:</label>
                          <input
                              type="text"
                              value={state}
                              onChange={(e) => setState(e.target.value)}
                              required
                          />
                          {errors.type && <p style={{ color: 'red' }}>{errors.type}</p>}
                      </div>

                      <div>
                        <label>City Population:</label>
                        <input
                            type="text"
                            value={population}
                            onChange={(e) => setPopulation(e.target.value)}
                            required
                        />
                        {errors.type && <p style={{ color: 'red' }}>{errors.type}</p>}
                    </div>


                       <button type="submit">Add City</button>
                   </form>
               </div>

        )
    }

export default AddCity