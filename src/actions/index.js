import axios from 'axios';
import io from 'socket.io-client';

export const GET_RESULTS = 'GET_RESULTS';

export function getResults(rows) {
    return {
        type: GET_RESULTS,
        payload: rows
    }
}
