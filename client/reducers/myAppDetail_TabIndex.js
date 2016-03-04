
import { handleActions } from 'redux-actions'

const initialState = {
  index_value: 0
};

export default handleActions({
  'change my app detail tab index value' (state, action) {
    return {
      index_value: action.payload
    }
  },
}, initialState)
