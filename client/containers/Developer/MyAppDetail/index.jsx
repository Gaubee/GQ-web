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

// var Button = React.createClass({
//   contextTypes: {
//     color: React.PropTypes.string,
//     setTitle: React.PropTypes.func
//   },
//   changeTitle:function(){
//       this.context.setTitle(Math.random().toString(36).substr(2))
//   },
//   render: function() {
//     return (
//       <button onClick={this.changeTitle} style={{background: this.context.color}}>
//         {this.props.children}
//       </button>
//     );
//   }
// });
//
// var Message = React.createClass({
//   render: function() {
//     return (
//       <div>
//         {this.props.text} <Button>Delete</Button>
//       </div>
//     );
//   }
// });
//
// var MessageList = React.createClass({
//   getInitialState : () => {
//       return ({title: "Default Title"})
//     },
//   childContextTypes: {
//     color: React.PropTypes.string,
//     setTitle: React.PropTypes.func
//   },
//   getChildContext: function() {
//         return {
//           color: "purple",
//           setTitle: (new_title)=>{
//               this.setState(Object.assign(this.state, {title:new_title}))
//           }
//         };
//   },
//   render: function() {
//     var children = this.props.messages.map(function(message) {
//       return <Message key={message.id} text={message.text} />;
//     });
//     return <div><h1>{this.state.title}</h1>{children}</div>;
//   }
// });

class MyAppDetail extends Component {
    constructor(props){
        super(props);
        // setTimeout(()=>{
        //     this.context.setAppBarTitle("QAQ 应用详情页")
        // });
    }
    static contextTypes = {
        setAppBarTitle:React.PropTypes.func,
    };
    changeTitle(){
        this.context.setAppBarTitle(Math.random().toString(36).substr(2))
    }
    componentWillMount(){
        this.context.setAppBarTitle("QAQ 应用详情页")
    }
  render() {
    const params = this.props.params;

    console.log("params:", params);
    return (
      <button onClick={::this.changeTitle}>zzz</button>
    )
  }
}


export default {
    path: "my_app_detail/:app_name",
    component: MyAppDetail
}
