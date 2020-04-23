import _ from 'lodash';
import { READ_EVENTS } from '../actions';

// stateはわかりやすいようにeventsに変更
export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id');
    default:
      return events;
  }
};
