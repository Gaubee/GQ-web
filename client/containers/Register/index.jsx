import MUI from 'material-ui'
import React, {Component} from 'react'
import style from './style.css'
import LoginAndRegisterBox from '../../components/LoginAndRegisterBox'

const {Paper, Divider, TextField, FlatButton} = MUI;

class Register extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  handleRegister() {
    this.context.router.push('/login');
  }
  handleLogin() {
    this.context.router.push('/developer');
  }
  render() {
    return (
      <LoginAndRegisterBox head="注册开发人员">
        <TextField fullWidth={true} floatingLabelText="帐号" hintText="请输入帐号"></TextField>
        <br/>
        <TextField fullWidth={true} floatingLabelText="密码" hintText="请输入密码" type="password"></TextField>
        <br/>
        <TextField fullWidth={true} floatingLabelText="确认密码" hintText="请再次输入密码" type="password"></TextField>
        <br/>
        <br/>
        <FlatButton label="我已经有帐号" secondary={true} onTouchTap={:: this.handleRegister}/>
        <FlatButton label="提交申请" primary={true} keyboardFocused={true} onTouchTap={:: this.handleLogin}/>
        <br/>
      </LoginAndRegisterBox>
    )
  }
}
export default {
  path : '/register',
  component : Register
}
