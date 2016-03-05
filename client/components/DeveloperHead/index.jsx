import {Router, Route, Link, browserHistory, hashHistory} from 'react-router'
import MUI from 'material-ui'
import React, {Component} from 'react'
import styles from './style.css'

const {
  AppCanvas,
  AppBar,
  Styles,
  RaisedButton,
  DatePicker,
  IconMenu,
  IconButton,
  FontIcon,
  MenuItem,
  Avatar,
  Divider,
  LeftNav,
  Tabs,
  Tab
} = MUI;
const {
    Colors
} = Styles

var loginer = {
    name:"Gaubee",
    head_url:"http://www.gravatar.com/avatar/dc537731713f96c66c7b3b8c2c622a4f?s=50"
};

export default class DeveloperHead extends Component {
    constructor(props){
        super(props);
        this.state = {
            open_nav: false
        }
    }
    static contextTypes = {
      router: React.PropTypes.object.isRequired
    };

    linkTo(url){
        return ()=> {
            this.context.router.push(url)
            this.toggleNav()
        }
    }

    toggleNav(){
        this.setState({
            open_nav: !this.state.open_nav
        });
    }
    render() {
        return (
            <div>
                <AppBar
                    title={this.props.title||"开发者中心"}
                    iconElementLeft={
                        this.props.left
                        ||
                        <IconButton onClick={::this.toggleNav}>
                            <FontIcon className="material-icons" >menu</FontIcon>
                        </IconButton>
                    }
                    iconElementRight={
                        this.props.right
                        ||
                        <IconButton>
                            <FontIcon className="material-icons">search</FontIcon>
                        </IconButton>
                    }
                    style={{
                        flexWrap: 'wrap'
                    }}>

                    {this.props.children}
                </AppBar>

                <LeftNav
                    docked={false}
                    open={this.state.open_nav}
                    onRequestChange={open_nav => this.setState(Object.assign(this.state, {open_nav}))}
                    >
                    <AppBar
                        iconElementLeft={
                            <div
                                style={{
                                    margin: "1em 0.5em"
                                }}>
                                <Avatar
                                    src={loginer.head_url}
                                    size={62}>
                                </Avatar>
                                <div style={{
                                        padding: "1em 0 0",
                                    }}>
                                    <b style={{
                                            fontWeight: 400,
                                            color: "white",
                                            lineHeight: "1em",
                                        }}>
                                        {loginer.name}
                                    </b>
                                    <br/>
                                    <p style={{
                                            fontSize: "0.7em",
                                            color: Colors.grey200,
                                        }}>
                                        QAQAQQAAQAQ
                                    </p>
                                </div>
                            </div>
                        }
                        titleStyle={{
                            padding: '1em 0.6em'
                        }}
                        iconElementRight={
                            <IconButton tooltip="退出登录">
                                <FontIcon className="material-icons">exit_to_app</FontIcon>
                            </IconButton>
                        }
                        >
                    </AppBar>
                    <MenuItem
                        primaryText="我的应用"
                        onTouchTap={this.linkTo('/developer')}
                        leftIcon={
                            <FontIcon className="material-icons">apps</FontIcon>
                        }>
                    </MenuItem>
                    <MenuItem
                        primaryText="运行中的服务"
                        leftIcon={
                            <FontIcon className="material-icons">cloud_circle</FontIcon>
                        }>
                    </MenuItem>
                    <MenuItem
                        primaryText="数据统计"
                        leftIcon={
                            <FontIcon className="material-icons">timeline</FontIcon>
                        }>
                    </MenuItem>
                    <Divider/>
                    <MenuItem
                        primaryText="刷新页面"
                        rightIcon={
                            <FontIcon className="material-icons">refresh</FontIcon>
                        }>
                    </MenuItem>
                    <MenuItem
                        primaryText="帮助"
                        rightIcon={
                            <FontIcon className="material-icons">help_outline</FontIcon>
                        }>
                    </MenuItem>
                    <MenuItem
                        primaryText="设置"
                        rightIcon={
                            <FontIcon className="material-icons">settings</FontIcon>
                        }>
                    </MenuItem>
                </LeftNav>
            </div>
        )
    }
}
// <MenuItem><FontIcon className="material-icons">exit-to-app</FontIcon></MenuItem>
