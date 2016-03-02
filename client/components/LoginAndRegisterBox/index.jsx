import MUI from 'material-ui'
import React, {Component} from 'react'
import style from './style.css'

const {Paper, Divider, TextField, FlatButton} = MUI;

export default class LoginAndRegister extends Component {
  render() {
    return (
      <div title='qaq' className={style.vertical_container}>
        <div className={style.box}>
          <Paper zDepth={3}>
            <div className={style.head}>{this.props.head}</div>
            <div className={style.form}>
              {this.props.children}</div>
          </Paper>
        </div>
      </div>
    )
  }
}
