import {Router, Route, Link, browserHistory, hashHistory} from 'react-router'
import MUI from 'material-ui'
import React, {Component} from 'react'
import SwipeableViews from 'react-swipeable-views'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as MyAppDetailActions from '../../../actions/myAppDetail_TabIndex'

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
  Paper,

  Card,
  CardHeader,
  CardText,
  CardActions,
  FlatButton,
  Badge,
  Divider,

  Tabs,
  Tab,
  List,
  ListItem
} = MUI;

const {
    Colors
} = Styles;

const styles = {
  CardText: {
    backgroundColor: Colors.grey300
  },
  SwipeableViews: {},
  SwipeableViewsItem: {
    minHeight: '100%',
  },
  ListPrimaryText: {
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
};


function mapStateToProps(state) {
  return {
    myAppDetail_TabIndex: state.myAppDetail_TabIndex
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(MyAppDetailActions, dispatch)
  }
}

class MyAppDetail extends Component {
  constructor(props) {
    super(props);
    // setTimeout(()=>{
    //     this.context.setAppBarTitle("QAQ 应用详情页")
    // });
    this.state = {
        index_value: 0,
    }
  }
  static contextTypes = {
    setAppBarTitle: React.PropTypes.func,
    setAppBarChildren: React.PropTypes.func,
  };
  changeTitle() {
    this.context.setAppBarTitle(Math.random().toString(36).substr(2))
  }
  changeTabIndexValue(index_value){
    this.context.setAppBarChildren(
      <Tabs onChange={::this.changeTabIndexValue} value={index_value} style={{
        width: '100%'
      }}>
        <Tab value={0} label="日志信息"></Tab>
        <Tab value={1} label="路由"></Tab>
        <Tab value={2} label="组件"></Tab>
      </Tabs>
    )
    this.changeIndexValue(index_value)
  }
  changeIndexValue(index_value){
      this.setState({
          ...this.state,
          index_value
      });
  }
  componentWillMount() {
    this.context.setAppBarTitle("QAQ 应用详情页")
    this.changeTabIndexValue(0);
      /*
      <FontIcon className="material-icons">info_outline</FontIcon>
      <FontIcon className="material-icons">router</FontIcon>QAQ2
      <FontIcon className="material-icons">settings_input_component</FontIcon>QAQ3
      */
  }
  render() {
    const params = this.props.params;
    const handleActive = ()=>{
        this.changeTitle()
    }

    // if (this.state.old_index_value !== this.state.index_value) {
    //     this.setState({...this.state, old_index_value: this.state.index_value })
    //     this.componentWillMount()
    // }

    console.log("params:", params);
    return (
        <SwipeableViews style={styles.SwipeableViews} containerStyle={styles.SwipeableViewsItem} onChangeIndex={::this.changeTabIndexValue} index={this.state.index_value}>
            <div onClick={()=>this.changeIndexValue(0)} zDepth={1}>
                <pre style={{
                        height:'100%'
                    }}>
                    {
`┌ 开始安装Web层服务
│ ┌ [router-install]
│ │ ┌ /apis
│ │ │ [GET] /all
│ │ │ [GET] /all.json
│ │ └ /apis
│ │ ┌ /android
│ │ │ [GET] /vedio
│ │ │ [POST] /login
│ │ └ /android
│ │ ┌ /html
│ │ │ [GET] /index
│ │ │ [GET] /template_json_data
│ │ └ /html
│ │ ┌ /web
│ │ │ [GET] /*
│ │ └ /web
│ │ ┌ /user
│ │ │ [GET] /loginer
│ │ └ /user
│ └ [router-install]
└ Web成服务安装完成`}
                </pre>

            </div>
            <Paper onClick={()=>this.changeIndexValue(1)} zDepth={1}>
                <Card>
                    <CardHeader
                        title="Gaubee"
                        subtitle="v1.2.36"
                        actAsExpander={true}
                        showExpandableButton={true}
                        initiallyExpanded={true}
                        />
                    <CardText
                        style={styles.CardText}
                        expandable={true}>
                        <Badge
                            badgeContent={
                                <FontIcon
                                    color="white"
                                    className="material-icons">keyboard_arrow_up</FontIcon>
                            }
                            primary={true}
                            badgeStyle={{top: '1em', right: '1em'}}
                            >
                            <IconButton
                                tooltip="根据路由路径分类"
                                >
                                <FontIcon className="material-icons">view_quilt</FontIcon>
                            </IconButton>
                        </Badge>
                        <Badge
                            badgeContent={
                                <FontIcon
                                    color="white"
                                    className="material-icons">keyboard_arrow_down</FontIcon>
                            }
                            primary={true}
                            badgeStyle={{top: '1em', right: '1em'}}
                            >
                            <IconButton
                                tooltip="根据请求类型分类"
                                >
                                <FontIcon className="material-icons">art_track</FontIcon>
                            </IconButton>
                        </Badge>
                        <IconButton
                            tooltip="根据版本差异分类"
                            >
                            <FontIcon className="material-icons">call_split</FontIcon>
                        </IconButton>
                        <Divider/>
                        <List>
                            <ListItem
                                primaryText={<div style={styles.ListPrimaryText}>/admin/download/excelfile/finance/:name</div>}
                                secondaryText="财务统计Excel表格下载"
                                leftIcon={<FontIcon className="material-icons">GET</FontIcon>}
                                rightIcon={<FontIcon className="material-icons">content_copy</FontIcon>}>
                            </ListItem>

                            <ListItem
                                primaryText={<div style={styles.ListPrimaryText}>/unifiedorderRequest</div>}
                                secondaryText="获取预支付订单（统一下单）"
                                leftIcon={<FontIcon className="material-icons">GET</FontIcon>}
                                rightIcon={<FontIcon className="material-icons">content_copy</FontIcon>}>
                            </ListItem>

                            <ListItem
                                primaryText={<div style={styles.ListPrimaryText}>/admin/member_type/create</div>}
                                secondaryText="创建会员类型"
                                leftIcon={<FontIcon className="material-icons">POS</FontIcon>}
                                rightIcon={<FontIcon className="material-icons">content_copy</FontIcon>}>
                            </ListItem>

                            <ListItem
                                primaryText={<div style={styles.ListPrimaryText}>/admin/member_type/update/:member_type_id</div>}
                                secondaryText="修改会员类型"
                                leftIcon={<FontIcon className="material-icons">PUT</FontIcon>}
                                rightIcon={<FontIcon className="material-icons">content_copy</FontIcon>}>
                            </ListItem>

                            <ListItem
                                primaryText={<div style={styles.ListPrimaryText}>/admin/member_type/remove/:member_type_id</div>}
                                secondaryText="删除会员类型"
                                leftIcon={<FontIcon className="material-icons">DEL</FontIcon>}
                                rightIcon={<FontIcon className="material-icons">content_copy</FontIcon>}>
                            </ListItem>

                        </List>
                    </CardText>
                </Card>

                <Card>

                    <CardHeader
                        title="Xuezi"
                        subtitle="v2.0.3"
                        actAsExpander={true}
                        showExpandableButton={true}
                        initiallyExpanded={true}
                        />

                    <CardText
                        style={styles.CardText}
                        expandable={true}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>

                </Card>
            </Paper>
            <Paper onClick={()=>this.changeIndexValue(2)} zDepth={1}>
                <Card>
                    <CardHeader
                        title="Gaubee"
                        subtitle="v1.2.36 MYMACID:AASD:SDAS:SDA:CSPO"
                        actAsExpander={true}
                        showExpandableButton={true}
                        initiallyExpanded={true}
                        />
                    <CardText
                        style={styles.CardText}
                        expandable={true}>
                        <Badge
                            badgeContent={
                                <FontIcon
                                    color="white"
                                    className="material-icons">keyboard_arrow_up</FontIcon>
                            }
                            primary={true}
                            badgeStyle={{top: '1em', right: '1em'}}
                            >
                            <IconButton
                                tooltip="按照时间排序"
                                >
                                <FontIcon className="material-icons">view_quilt</FontIcon>
                            </IconButton>
                        </Badge>
                        <Badge
                            badgeContent={
                                <FontIcon
                                    color="white"
                                    className="material-icons">keyboard_arrow_down</FontIcon>
                            }
                            primary={true}
                            badgeStyle={{top: '1em', right: '1em'}}
                            >
                            <IconButton
                                tooltip="按照字母排序"
                                >
                                <FontIcon className="material-icons">art_track</FontIcon>
                            </IconButton>
                        </Badge>
                        <IconButton
                            tooltip="根据版本差异分类"
                            >
                            <FontIcon className="material-icons">call_split</FontIcon>
                        </IconButton>
                        <Divider/>
                        <List>
                            <ListItem
                                primaryText={<div style={styles.ListPrimaryText}>/admin/download/excelfile/finance/:name</div>}
                                secondaryText="财务统计Excel表格下载"
                                leftIcon={<FontIcon className="material-icons">GET</FontIcon>}
                                rightIcon={<FontIcon className="material-icons">content_copy</FontIcon>}>
                            </ListItem>

                            <ListItem
                                primaryText={<div style={styles.ListPrimaryText}>/unifiedorderRequest</div>}
                                secondaryText="获取预支付订单（统一下单）"
                                leftIcon={<FontIcon className="material-icons">GET</FontIcon>}
                                rightIcon={<FontIcon className="material-icons">content_copy</FontIcon>}>
                            </ListItem>

                            <ListItem
                                primaryText={<div style={styles.ListPrimaryText}>/admin/member_type/create</div>}
                                secondaryText="创建会员类型"
                                leftIcon={<FontIcon className="material-icons">POS</FontIcon>}
                                rightIcon={<FontIcon className="material-icons">content_copy</FontIcon>}>
                            </ListItem>

                            <ListItem
                                primaryText={<div style={styles.ListPrimaryText}>/admin/member_type/update/:member_type_id</div>}
                                secondaryText="修改会员类型"
                                leftIcon={<FontIcon className="material-icons">PUT</FontIcon>}
                                rightIcon={<FontIcon className="material-icons">content_copy</FontIcon>}>
                            </ListItem>

                            <ListItem
                                primaryText={<div style={styles.ListPrimaryText}>/admin/member_type/remove/:member_type_id</div>}
                                secondaryText="删除会员类型"
                                leftIcon={<FontIcon className="material-icons">DEL</FontIcon>}
                                rightIcon={<FontIcon className="material-icons">content_copy</FontIcon>}>
                            </ListItem>

                        </List>
                    </CardText>
                </Card>

                <Card>

                    <CardHeader
                        title="Xuezi"
                        subtitle="v2.0.3"
                        actAsExpander={true}
                        showExpandableButton={true}
                        initiallyExpanded={true}
                        />

                    <CardText
                        style={styles.CardText}
                        expandable={true}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>

                </Card>
            </Paper>
        </SwipeableViews>
    )
  }
}


export default {
  path : "my_app_detail/:app_name",
  component : connect(mapStateToProps, mapDispatchToProps)(MyAppDetail)
}
