import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import initialState from '../loginSlice/user'

import  userReducer from './user'



const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    case HYDRATE:
      console.log('HYDRATE', action);
      return action.payload;
    default: {
        const combineReducer = combineReducers({
            user: userReducer
        })
        return combineReducer(state, action)
    }
  }
};


export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;