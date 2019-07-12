import axios from 'axios';
import { GET_IMAGES } from './types';

export const getImages = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/photos?_page=1&_limit=9')
    .then(res => {
        dispatch({
            type: GET_IMAGES,
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err);
    })
}