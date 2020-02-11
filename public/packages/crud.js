"use strict";function ___$insertStyle(e){if(e&&"undefined"!=typeof window){var t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t),e}}Object.defineProperty(exports,"__esModule",{value:!0});var __chunk_1=require("./chunk-076fd344.js"),__chunk_4=require("./chunk-26e2e146.js");function ownKeys(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(r,!0).forEach(function(e){__chunk_1._defineProperty(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ownKeys(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var CRUD_ACTION_REQUEST="CRUD_ACTION_REQUEST",CRUD_ACTION_SUCCESS="CRUD_ACTION_SUCCESS",CRUD_ACTION_FAILURE="CRUD_ACTION_FAILURE",RSAA="@@redux-api-middleware/RSAA",crud=function(e){var t=e.method,r=void 0===t?"GET":t,n=e.endpoint,o=e.keys,a=e.query,i=void 0===a?{}:a,d=e.body,c=e.meta,s=void 0===c?{}:c,u=e.name,_=void 0===u?"base_":u,p=e.headers,A=void 0===p?{}:p,y=e.needToken,l=void 0===y||y,S=e.uploadFile,R=void 0!==S&&S,C=e.crudTypes,f=void 0===C?{request:"".concat(_,"_").concat(CRUD_ACTION_REQUEST),success:"".concat(_,"_").concat(CRUD_ACTION_SUCCESS),failure:"".concat(_,"_").concat(CRUD_ACTION_FAILURE)}:C,O=e.validStatuses,T=void 0===O?[]:O,h=e.errorMessagesByStatus,v=_objectSpread({query:i},s,{validStatuses:T,errorMessagesByStatus:void 0===h?{}:h}),E=__chunk_1._defineProperty({needToken:l,isCrud:!0},RSAA,{endpoint:n,method:r,types:[{type:f.request,meta:v},{type:f.success,meta:v},{type:f.failure,meta:v}]});if(E[RSAA].headers=_objectSpread(R?{}:{"Content-Type":"application/json","Cache-Control":"no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0"},A),o&&Object.keys(o).forEach(function(e){E[RSAA].endpoint=E[RSAA].endpoint.replace(":".concat(e),o[e])}),i&&Object.keys(i).length){var g=__chunk_4.cloneDeep(i);Object.entries(g).forEach(function(e){var t=__chunk_4._slicedToArray(e,2),r=t[0],n=t[1],o=Array.isArray(n)?n:[n];g[r]=__chunk_4.compact(o)});var I=__chunk_4.queryBuilder.stringify(g);I.length&&(E[RSAA].endpoint="".concat(E[RSAA].endpoint,"?").concat(I))}return d&&"application/json"===E[RSAA].headers["Content-Type"]?E[RSAA].body=JSON.stringify(d):d&&(E[RSAA].body=d),E},crudAfterMiddleware=function(e){return function(_){return function(e){if(/.*_FAILURE$/gi.test(e.type))return _({type:"ADD_NOTIFICATION",notification:{id:parseInt(Math.random().toString().split(".")[1],10),duration:7e3,message:"Something went wrong. Try again later.",type:"NOTIFICATION_TYPE_ERROR",canDismiss:!0}}),Promise.reject(_(e));if(/.*_SUCCESS$/gi.test(e.type)){var t=__chunk_4.cloneDeep(e);if(t.payload.status&&t.payload.status.length||(t.payload.status="EMPTY_STATUS_FROM_BACKEND"),"object"!==__chunk_1._typeof(t.payload.payload)&&(t.payload.payload={item:{},items:[]}),"object"!==__chunk_1._typeof(t.payload._meta)&&(t.payload._meta={}),t.meta&&t.meta.validStatuses&&t.payload){var r=t.payload,n=void 0===r?{status:"INTERNAL_ERROR"}:r,o=t.meta,a=o.validStatuses,i=void 0===a?[]:a,d=o.errorMessagesByStatus,c=void 0===d?{}:d,s=n.status;if("OK"!==s&&i.indexOf(s)<0){var u=c[s]?c[s]:"Something went wrong. Try again later.";return _({type:"ADD_NOTIFICATION",notification:{id:parseInt(Math.random().toString().split(".")[1],10),duration:7e3,message:u,type:"NOTIFICATION_TYPE_ERROR",canDismiss:!0}}),Promise.reject(_(e))}}return _(t)}return _(e)}}},RSAA$1="@@redux-api-middleware/RSAA",listRegexp=/^LIST_(.*)_REQUEST$/,crudBeforeMiddleware=function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"dr-pa-token";return function(n){return function(r){return function(e){if(e.isCrud){var t=__chunk_4.cloneDeep(e);if(delete t.isCrud,listRegexp.test(e[RSAA$1].types[0])){if(n.getState()[e.reducer].isLoading)return!1;delete t.reducer}return t[RSAA$1].body&&"application/json"===t[RSAA$1].headers["Content-Type"]&&"string"!=typeof t[RSAA$1].body&&(t[RSAA$1].body=JSON.stringify(t[RSAA$1].body)),e.needToken&&(t[RSAA$1].headers.Authorization="Bearer ".concat(__chunk_4.getCookie(o)),delete t.needToken),r(t)}return r(e)}}}},initialState={isLoading:{}},crudReducer=function(){var e,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:initialState,r=1<arguments.length?arguments[1]:void 0;if(r.type.includes("CRUD_ACTION_REQUEST")){var n=r.type.split("_")[0];(e=__chunk_4.cloneDeep(t)).isLoading[n]=!0}if(r.type.includes("CRUD_ACTION_SUCCESS")||r.type.includes("CRUD_ACTION_FAILURE")){var o=r.type.split("_")[0];(e=__chunk_4.cloneDeep(t)).isLoading[o]=!1}return e||t};exports.CRUD_ACTION_FAILURE=CRUD_ACTION_FAILURE,exports.CRUD_ACTION_REQUEST=CRUD_ACTION_REQUEST,exports.CRUD_ACTION_SUCCESS=CRUD_ACTION_SUCCESS,exports.crud=crud,exports.crudAfterMiddleware=crudAfterMiddleware,exports.crudBeforeMiddleware=crudBeforeMiddleware,exports.crudReducer=crudReducer;
