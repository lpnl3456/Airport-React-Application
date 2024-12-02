import axios from 'axios';
import {BASE_URL} from "./config";


export const fetchAirports = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/airport`);
        return response.data;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }
};