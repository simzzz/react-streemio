import { combineReducers } from 'redux';
import RowsListReducer from './reducer_rows_list';

// Combines all our reducers to get them ready for export
const rootReducer = combineReducers({
  rows: RowsListReducer
});

export default rootReducer;
