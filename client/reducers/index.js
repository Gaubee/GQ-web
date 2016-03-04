
import { routeReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import todos from './todos'
import themeManage from './themeManage'
import myAppDetail_TabIndex from './myAppDetail_TabIndex'

export default combineReducers({
  routing,
  todos,
  themeManage,
  myAppDetail_TabIndex
})
