import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/index';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            // we receive an array but it would be easier to just have everything like an object as in state.posts['id']
            // so we take the id of each post and  wemake it the key
            // for each post within the object using lodash mapkeys
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_POST:
            return {...state, [action.payload.data.id]: action.payload.data}; // concatenate with all the other posts in state a new post by using es6
        case DELETE_POST:
            return _.omit(state, action.payload); // use lodash to omit the object with id from the state
        default:
            return state;
    }

}