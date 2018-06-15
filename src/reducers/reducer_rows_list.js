import { GET_RESULTS } from "../actions/index";

// State defaults to empty array to prevent errors
// which were caused by actions performed on initial loading
export default function(state = [], action) {
    switch (action.type) {
        case GET_RESULTS:
            return action.payload;
    }

    return state;
}
