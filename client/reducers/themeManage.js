import { handleActions } from 'redux-actions'
import { Styles } from 'material-ui'
const {ThemeManager, LightRawTheme, DarkRawTheme} = Styles;

const initialState = {
  name: 'light',
  theme: ThemeManager.getMuiTheme(LightRawTheme),
}

export default handleActions({
  'toggle theme'(state, action) {
    if (action.name === "dark") {
      return {
        name: "light",
        theme: ThemeManager.getMuiTheme(LightRawTheme)
      }
    }
    return {
      name: "dark",
      theme: ThemeManager.getMuiTheme(DarkRawTheme)
    }
  }
}, initialState);
