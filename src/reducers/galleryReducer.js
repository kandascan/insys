import { GET_IMAGES } from '../actions/types';

const initialState = {
    photos: []
};

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_IMAGES:
            return {
                ...state,
                photos: action.payload
            }
        default:
            return state;
    }
}