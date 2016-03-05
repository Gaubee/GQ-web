import {Router, Route, Link, browserHistory, hashHistory} from 'react-router'
import MUI from 'material-ui'
import React, {Component} from 'react'
import style from './style.css'

import DeveloperHead from '../../components/DeveloperHead'

import MyApps from "./MyApps"
import MyAppDetail from "./MyAppDetail"
import AppRouter from "./AppRouter"
import raf from "raf";
const MyAppsComponent = MyApps.component;

const {
  AppCanvas,
  AppBar,
  Styles,
  RaisedButton,
  DatePicker,
  FontIcon,
  GridTile,
  GridList,
  IconButton,

  Card,
  CardHeader,
  CardText,
  CardActions,
  FlatButton,
  FloatingActionButton,
  Badge,
} = MUI;

const {
    Colors
} = Styles;

const my_apps_data = {
  instances: [
    {
      macid: "SAJDH:ASDJIH:ASJHD:CSAD:SX:CCS",
      start_time: 1456929930699
    }, {
      macid: "DXXAW:TWTQYT:ASJHD:BASD:OX:CCP",
      start_time: 1456929830699
    }
  ]
}

class NoFound extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render (){
        return (
            <center>
                <h1 style={{
                    color: Colors.red500
                }}> 你迷路了QwQ~ </h1>
                <Link to="/developer">
                    <FloatingActionButton>
                      <FontIcon className="material-icons">find_replace</FontIcon>
                    </FloatingActionButton>
                </Link>
            </center>
        )
    }
}

class Developer extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    static childContextTypes = {
        setAppBarTitle:React.PropTypes.func,
        setAppBarChildren:React.PropTypes.func,
        setAppBarLeft:React.PropTypes.func,
        setAppBarRight:React.PropTypes.func,
    };
    getChildContext(){
        return {
          setAppBarTitle: (new_title) => {
            this.setState(Object.assign(this.state, {title: new_title}))
          },
          setAppBarChildren: (children) => {
            this.setState({
              ...this.state,
              app_bar_children: children
            });
          },
          setAppBarLeft: (node) => {
            this.setState({
              ...this.state,
              app_bar_left: node
            })
          },
          setAppBarRight: (node) => {
            this.setState({
              ...this.state,
              app_bar_right: node
            })
          }
        }
    }
    render() {
        const children_view = this.props.children_view;
        return (
            <AppCanvas>
                <DeveloperHead
                    title={this.state.title}
                    children={this.state.app_bar_children}
                    left={this.state.app_bar_left}
                    right={this.state.app_bar_right}
                    >
                </DeveloperHead>
                <div className={style.canvas_box}>
                    { children_view  || <MyAppsComponent />}
                </div>
            </AppCanvas>
        )
    }
}

export default {
  path : "/developer",
  component : Developer,
  childRoutes : [
    {
      path: "",
      components: {
        children_view: MyAppsComponent
      }
    }, {
      path: MyApps.path,
      components: {
        children_view: MyAppsComponent
      }
    }, {
      path: MyAppDetail.path,
      components: {
        children_view: MyAppDetail.component
      }
    }, {
      path: AppRouter.path,
      components: {
        children_view: AppRouter.component
      }
    }, {
      path: ":no_found",
      components: {
        children_view: NoFound
      }
    }
  ]
}
