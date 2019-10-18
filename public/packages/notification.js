"use strict";function ___$insertStyle(e){if(e&&"undefined"!=typeof window){var t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t),e}}function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var __chunk_1=require("./chunk-076fd344.js"),__chunk_3=require("./chunk-e4c425ca.js"),React=require("react"),React__default=_interopDefault(React),notificationAction=function(e,t){var n,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:7e3;return"NOTIFICATION_TYPE_ERROR"===e?n="error":"NOTIFICATION_TYPE_WARNING"===e?n="warning":"NOTIFICATION_TYPE_SUCCESS"===e&&(n="success"),{type:"ADD_NOTIFICATION",notification:{id:parseInt(Math.random().toString().split(".")[1],10),duration:r,message:t,type:n,canDismiss:!0}}};___$insertStyle('@charset "UTF-8";\n.alert-type {\n  font-size: 13px;\n  padding: 25px 35px;\n  max-width: 500px;\n  max-height: 250px;\n  box-shadow: 0 6px 4px -3px rgba(0, 0, 0, 0.2);\n  margin-bottom: 0 !important;\n  margin-left: 0 !important;\n}\n.alert-type > span {\n  line-height: 18px;\n}\n.alert-type.success {\n  color: #0a7c71;\n  background-color: #cff5f2;\n}\n.alert-type.info {\n  color: #2b6a94;\n  background-color: #daeffd;\n}\n.alert-type.error {\n  color: #933432;\n  background-color: #fddddd;\n}\n.alert-type .close {\n  background-color: transparent;\n  border: 0;\n  padding: 0;\n  float: right;\n  margin-left: 20px;\n  color: inherit;\n}\n.alert-type .close:before {\n  content: "";\n  font-family: "Font Awesome 5 Pro";\n  font-weight: 900;\n  font-size: 14px;\n  color: inherit;\n  opacity: 0.6;\n}\n.alert-type .close:hover {\n  cursor: pointer;\n}\n.alert-type .close:hover:before {\n  opacity: 0.8;\n}');var Notification=function(e){function t(){return __chunk_3._classCallCheck(this,t),__chunk_3._possibleConstructorReturn(this,__chunk_3._getPrototypeOf(t).apply(this,arguments))}return __chunk_3._inherits(t,e),__chunk_3._createClass(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.handleDismiss,n=e.id,r=e.duration;0!==r&&setTimeout(function(){t(n)},r)}},{key:"render",value:function(){var e,t=this.props,n=t.handleDismiss,r=t.message,o=t.type,i=t.id;return"NOTIFICATION_TYPE_ERROR"===o?e="error":"NOTIFICATION_TYPE_WARNING"===o?e="warning":"NOTIFICATION_TYPE_SUCCESS"===o&&(e="success"),React__default.createElement("div",{style:{transition:"opacity 250ms ease 0s",opacity:1}},React__default.createElement("div",{className:"".concat(e," alert-type"),style:{margin:30}},React__default.createElement("button",{className:"close",onClick:function(){return n(i)}}),React__default.createElement("span",null,r)))}}]),t}(React__default.PureComponent);__chunk_1._defineProperty(Notification,"propTypes",{id:__chunk_3.PropTypes.number.isRequired,type:__chunk_3.PropTypes.string.isRequired,duration:__chunk_3.PropTypes.number,handleDismiss:__chunk_3.PropTypes.func.isRequired}),__chunk_1._defineProperty(Notification,"defaultProps",{duration:0}),Notification.displayName="Notification",exports.NotificationTemplate=Notification,exports.notification=notificationAction;