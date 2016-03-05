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

  List,
  Divider,
  ListItem,
  Snackbar
} = MUI;

const {
    Colors
} = Styles;


class AppRouter extends Component{
    constructor(props){
        super(props);
        this.state = {
            _open_copy_success:false
        }
    }
    static contextTypes = {
      setAppBarTitle: React.PropTypes.func,
      setAppBarChildren: React.PropTypes.func,
      setAppBarLeft: React.PropTypes.func,
      setAppBarRight: React.PropTypes.func,
      router: React.PropTypes.object.isRequired
    };
    copyApiUri(){
        this.setState({
            ...this.state,
            _open_copy_success:true
        })
    }
    componentWillMount(){
        this.context.setAppBarTitle("qaq 应用路由详情")
        this.context.setAppBarLeft(
            <IconButton onClick={()=>{this.context.router.goBack()}}>
                <FontIcon className="material-icons" >arrow_back</FontIcon>
            </IconButton>)

        this.context.setAppBarChildren(
            <div style={{
                    width:'100%',
                    minHeight:'8em',
                }}>
            </div>)
    }
    render(){
        return (
        <div>
            <div className="float-action-button">
                <FloatingActionButton onClick={::this.copyApiUri}>
                  <FontIcon className="material-icons">content_copy</FontIcon>
                </FloatingActionButton>
            </div>
            <Snackbar
                open={this.state._open_copy_success}
                message="URI已经成功复制到剪切板"
                autoHideDuration={4000}
                onRequestClose={()=>this.setState({...this.state,_open_copy_success:false})}>
            </Snackbar>
            <Card style={{
                    margin: '-8em 0.5em 0.5em 0.5em',
                    zIndex: 1101, // 比AppBar的层级多1
                    position: 'relative',
                }}>
                <CardHeader
                    title={<b style={{
                            color: Colors.grey500,
                            wordWrap: 'break-word',
                            wordBreak: 'normal',
                        }}>
                        {`/admin/logs/admin`.replace(/\//g, ' / ')/*加入空格，使得可以根据单词来断行*/}
                    </b>}
                    subtitle="财务统计Excel表格下载"
                    />
                <CardText>
                    <List>
                        <ListItem
                            primaryText="num"
                            secondaryText={<div className={styles.object_description}><b>{`<query>Integer`}</b><i>{`可空`}</i>{`分页参数·每页显示的数量`}</div>}
                            leftIcon={<IconButton tooltip="所需参数" iconStyle={{
                                    top: '-12px',
                                    left: '-12px',
                                }}>
                                    <FontIcon className="material-icons">tune</FontIcon>
                                </IconButton>
                            }>
                        </ListItem>
                        <ListItem
                            primaryText="page"
                            secondaryText={<div className={styles.object_description}><b>{`<query>Integer`}</b><i>{`可空`}</i>{`分页参数·页号`}</div>}
                            insetChildren={true}>
                        </ListItem>
                        <ListItem
                            primaryText="options"
                            secondaryText={<div className={styles.object_description}><b>{`<query>Object`}</b><i>{`可空`}</i>{`用来增强描述、查询数据的配置`}</div>}
                            insetChildren={true}>
                        </ListItem>
                        <Divider />
                        <ListItem
                            primaryText="num"
                            secondaryText={<div className={styles.object_description}><b>{`Integer`}</b>{`当前页数据量`}</div>}
                            leftIcon={<IconButton tooltip="返回值" iconStyle={{
                                    top: '-12px',
                                    left: '-12px',
                                }}>
                                    <FontIcon className="material-icons">keyboard_return</FontIcon>
                                </IconButton>
                            }>
                        </ListItem>
                        <ListItem
                            primaryText="page"
                            secondaryText={<div className={styles.object_description}><b>{`Integer`}</b>{`当前页页号`}</div>}
                            insetChildren={true}>
                        </ListItem>
                        <ListItem
                            primaryText="list"
                            secondaryText={<div className={styles.object_description}><b>{`<Model.UserLog>Array`}</b>{`管理员日志数组数据`}</div>}
                            insetChildren={true}>
                        </ListItem>
                    </List>
                </CardText>
            </Card>
        </div>)
    }
}


export default {
    path: "router",
    component: AppRouter
}
