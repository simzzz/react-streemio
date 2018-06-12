import { combineReducers } from 'redux';
import RowsListReducer from './reducer_rows_list';

const rootReducer = combineReducers({
  rows: RowsListReducer
});

export default rootReducer;
