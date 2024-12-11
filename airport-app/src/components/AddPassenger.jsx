import React, {useState} from 'react';
import axios from "axios";
import {BASE_URL} from "../utils/config";
import BackButton from './BackButton';
import {  useNavigate } from "react-router-dom";

const AddPassenger = (addPassenger )=>{
     const [firstName, setFirstName] = useState('');
     const [lastName, setLastName] = useState('');
     const [phoneNumber, setPhoneNumber] = useState('');
     const [cityName, setCityName] = useState('');
     const [errors, setErrors] = useState({});
     const navigate = useNavigate();

    const validate = () => {
            const errors = {};
            if (!firstName.trim()) {
                errors.title = ' first name is required';
            }

        if (!lastName.trim()) {
                errors.title = 'last name is required';
        }

    if (!phoneNumber.trim()) {
                    errors.title = 'phone number is required';
                }
            if (!cityName.trim()) {
                errors.title = 'city name is required';
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

            const newPassenger = {
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                city_id: {name: cityName}

            };

        console.log(newPassenger)

            axios.post(`${BASE_URL}/passenger`, newPassenger)
                .then(response => {
                    console.log('passenger created successfully:', response.data);

                    setFirstName("");
                    setLastName("");
                    setPhoneNumber("");
                    setCityName("");

                    setErrors({});
                })

                .catch(error => {
                    console.error('There was an error creating the gate!', error);
                });


        };

    return(
       <div>

                   <h1>Create New Passenger</h1>
                   <form onSubmit={handleSubmit}>
                       <div>
                           <label> First Name:</label>
                           <input
                               type="text"
                               value={firstName}
                               onChange={(e) => setFirstName(e.target.value)}
                               required
                           />
                           {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
                       </div>

                      <div>
                          <label> Last Name:</label>
                          <input
                              type="text"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                              required
                          />
                          {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
                      </div>

                       <div>
                          <label>Phone Number:</label>
                          <input
                              type="text"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              required
                          />
                          {errors.phoneNumber && <p style={{ color: 'red' }}>{errors.phoneNumber}</p>}
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


                       <button type="submit">Add Passenger</button>
                   </form>
               </div>

        )
    }

export default AddPassenger