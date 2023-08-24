
import {combineReducers} from "redux"
import studentReducer from './StudentReducer/StudentReducer';
import productReducer from './ProductReducer/ProductReducer';

const rootReducer = combineReducers({
    studentReducer,
    productReducer
  });

  export default rootReducer