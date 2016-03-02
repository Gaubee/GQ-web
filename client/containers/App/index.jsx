import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import MainSection from '../../components/MainSection'
import * as TodoActions from '../../actions/todos'

import MUI from 'material-ui'
import React, { Component } from 'react'
import style from './style.css'

const {
  AppCanvas,
  AppBar,
  Styles,
  RaisedButton,
  DatePicker,
} = MUI;

const { ThemeManager, LightRawTheme, DarkRawTheme } = Styles;

class QAQ extends Component{
  static contextTypes = {
      muiTheme: React.PropTypes.object,
      name: React.PropTypes.string,
  }
  tap(){
    console.log(this.context)
    console.log(this.context.name="Bangeel");
  }
  render(){
    return (
      <RaisedButton onTouchTap={::this.tap} label={'name:'+this.context.name}>
        {this.props.children}
      </RaisedButton>)
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

class MUIList extends Component{
    render(){
        return (<MUI.List>{this.props.tasks.map(task=>{
            return <MUI.ListItem primaryText={task.content} />
        })}</MUI.List>)
    }
}

class App extends Component{

  static childContextTypes = {
      muiTheme: React.PropTypes.object,
      name: React.PropTypes.string,
  }

  getChildContext() {
      return {
          muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
          name: "Gaubee",
      };
  }

  changeTheme(){
    // console.log(this.context.muiTheme=ThemeManager.getMuiTheme(DarkRawTheme))
    console.log("sadasda");
    return {
        muiTheme: ThemeManager.getMuiTheme(DarkRawTheme)
    };
  }

  state = {
    tasks: [
      {
        content: "QAQ"
      }
    ]
};

  addTask(){
    var state = this.state;
    state.tasks.push({
      content: "C:" + Math.random()
    });
    console.log(state);
    this.setState(state);
  }
  clickTest(){
    console.log("click");
  }
  tapTest(){
    console.log("tap");
  }
  render () {
    const { todos, actions, children } = this.props
    return (
        <AppCanvas>
            <AppBar title="izziLab" onTouchTap={this.tapTest}/>
            <div style={{padding: '80px',}}>
                <RaisedButton primary={true} label="切换风格" onClick={::this.changeTheme}/>
                <br/>
                <DatePicker hintText="Portrait Dialog"/>
                <br/>
                <QAQ>??</QAQ>
                <br/>
                <DatePicker
                    hintText="Landscape Dialog"
                    mode="landscape"/>
                <MUI.TextField floatingLabelText="请输入任务" />
                <RaisedButton label="添加" onClick={::this.addTask}/>

                <MUIList tasks={this.state.tasks}></MUIList>

            </div>

            <div className={style.normal}>
              <Header addTodo={actions.addTodo} />
              <MainSection todos={todos} actions={actions} />
              {children}
            </div>
        </AppCanvas>
    );
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
