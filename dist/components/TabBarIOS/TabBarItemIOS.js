Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/TabBarIOS/TabBarItemIOS.js';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNativeWeb=require('react-native-web');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

TabBarItemIOS=function(_Component){_inherits(TabBarItemIOS,_Component);function TabBarItemIOS(){_classCallCheck(this,TabBarItemIOS);return _possibleConstructorReturn(this,(TabBarItemIOS.__proto__||Object.getPrototypeOf(TabBarItemIOS)).apply(this,arguments));}_createClass(TabBarItemIOS,[{key:'getBadgeStyle',value:function getBadgeStyle()













{
return{
position:'absolute',
top:-2,
right:-6,
backgroundColor:'red',
borderRadius:9,
color:'white',
fontSize:12,
width:18,
height:18,
textAlign:'center',
lineHeight:20};

}},{key:'getImageStyle',value:function getImageStyle()

{
var defaultStyle={
width:26,
height:26};

return _extends(defaultStyle,this.props.style);
}},{key:'getWrapperProps',value:function getWrapperProps()

{
var props=_extends({},this.props);
if(props.style){
delete props.style;
}
return props;
}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNativeWeb.TouchableOpacity,_extends({style:{
flex:1,
flexDirection:'column',
justifyContent:'center',
alignItems:'center'}},
this.getWrapperProps(),{__source:{fileName:_jsxFileName,lineNumber:52}}),

_react2.default.createElement(_reactNativeWeb.View,{style:{
position:'relative',
flex:1,
justifyContent:'center',
alignItems:'center'},__source:{fileName:_jsxFileName,lineNumber:59}},

this.props.displayIcon&&
_react2.default.createElement(_reactNativeWeb.Image,{resizeMode:'stretch',source:this.props.displayIcon,style:this.getImageStyle(),__source:{fileName:_jsxFileName,lineNumber:66}}),


this.props.iconComponent,

this.props.badge&&
_react2.default.createElement(_reactNativeWeb.Text,{style:this.getBadgeStyle(),__source:{fileName:_jsxFileName,lineNumber:72}},this.props.badge)),



_react2.default.createElement(_reactNativeWeb.View,{style:{
marginTop:3},__source:{fileName:_jsxFileName,lineNumber:76}},


_react2.default.createElement(_reactNativeWeb.Text,{style:{
color:this.props.textColor,
fontSize:11,
textAlign:'center'},__source:{fileName:_jsxFileName,lineNumber:80}},
this.props.title))));





}}]);return TabBarItemIOS;}(_react.Component);process.env.NODE_ENV!=="production"?TabBarItemIOS.propTypes={badge:_react.PropTypes.any,displayIcon:_react.PropTypes.any,icon:_react.PropTypes.any,iconComponent:_react.PropTypes.node,selected:_react.PropTypes.bool,selectedIcon:_react.PropTypes.any,style:_react.PropTypes.any,textColor:_react.PropTypes.any,title:_react.PropTypes.string}:void 0;exports.default=



TabBarItemIOS;