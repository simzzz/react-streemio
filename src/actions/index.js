import axios from 'axios';

const API_URL = `http://localhost:3000/api/addons`

export const GET_RESULTS = 'GET_RESULTS';

// Our action creator
export function getResults() {
    // Request is currently a promise
    const request = axios.get(API_URL);
    // Returns an action
    return {
        type: GET_RESULTS,
        payload: request
    }
}