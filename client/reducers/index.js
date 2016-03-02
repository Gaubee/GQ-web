
import { routeReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import todos from './todos'
import themeManage from './themeManage'

export default combineReducers({
  routing,
  todos,
  themeManage
})
