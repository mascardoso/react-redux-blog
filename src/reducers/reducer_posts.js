import _ from 'lodash';
import { FETCH_POSTS } from '../actions/index';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            // we receive an array but it would be easier to just have everything like state.posts['id']
            // so we take the id of each post and make it the key
            // for each post within the object using lodash
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }

}