import MUI from 'material-ui'
import React, {Component} from 'react'
import style from './style.css'
import LoginAndRegisterBox from '../../components/LoginAndRegisterBox'

const {Paper, Divider, TextField, FlatButton} = MUI;

class Login extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  handleRegister() {
    this.context.router.push('/register');
  }
  handleLogin() {
    this.context.router.push('/developer');
  }
  render() {
    return (
      <LoginAndRegisterBox head="开发人员登录">
        <TextField fullWidth={true} floatingLabelText="帐号" hintText="请输入帐号"></TextField>
        <br/>
        <TextField fullWidth={true} floatingLabelText="密码" hintText="请输入密码" type="password"></TextField>
        <br/>
        <br/>
        <FlatButton label="申请成为开发者" secondary={true} onTouchTap={:: this.handleRegister}/>
        <FlatButton label="登录" primary={true} keyboardFocused={true} onTouchTap={:: this.handleLogin}/>
        <br/>
      </LoginAndRegisterBox>
    )
  }
}
export default {
  path : '/login',
  component : Login
}
