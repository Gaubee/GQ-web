import {Router, Route, Link, browserHistory, hashHistory} from 'react-router'
import MUI from 'material-ui'
import React, {Component} from 'react'

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
  Badge
} = MUI;

const {
    Colors
} = Styles;


class MyApps extends Component{
    render(){
        return (
            <Card>
                <CardHeader
                    title="My App-Name"
                    subtitle="简单的介绍"
                    actAsExpander={true}
                    showExpandableButton={true}
                    />
                <CardText style={{
                        backgroundColor: Colors.grey900,
                        color: Colors.grey200,
                        fontFamily: 'Consolas, "Droid Sans Mono", Monaco, "微软雅黑"'
                    }} expandable={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                    <Link to="/developer/my_app_detail/qaq">
                        <Badge
                            badgeContent={2}
                            primary={true}
                            badgeStyle={{
                                right: "1em",
                                top: "1em",
                            }}>
                            <RaisedButton label="管理服务"/>
                        </Badge>
                    </Link>
                    <RaisedButton label="应用设置" icon={<FontIcon className="material-icons">settings_applications</FontIcon>}/>
                </CardActions>
            </Card>)
    }
}


export default {
    path: "my_apps",
    component: MyApps
}
