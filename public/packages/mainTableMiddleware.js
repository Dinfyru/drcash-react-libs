"use strict";function ___$insertStyle(e){if(e&&"undefined"!=typeof window){var r=document.createElement("style");return r.setAttribute("type","text/css"),r.innerHTML=e,document.head.appendChild(r),e}}require("./chunk-8a96f938.js");var __chunk_5=require("./chunk-af08879b.js");require("./chunk-3cd28e33.js");var __chunk_7=require("./chunk-04fc15c7.js"),__chunk_8=require("./chunk-e635a9c8.js"),__chunk_9=require("./chunk-93b2e459.js"),__chunk_10=require("./chunk-c11a7971.js");function ownKeys(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),t.push.apply(t,n)}return t}function _objectSpread(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(t,!0).forEach(function(e){__chunk_5._defineProperty(r,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):ownKeys(t).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))})}return r}var REQUEST_REGEXP=/^MT_LIST@(.+)_REQUEST$/,RSAA="@@redux-api-middleware/RSAA",mainTableMiddleware=function(a){return function(o){return function(e){if(e[RSAA]){var r=_objectSpread({},e);if(REQUEST_REGEXP.test(e[RSAA].types[0])){var t=a.getState().mainTable[e.reducer],n=t.isLoading,c=t.filtersValue;if(n)return!1;if(c&&Object.keys(c).length){var u=__chunk_10.cloneDeep(c);Object.entries(u).forEach(function(e){var r=__chunk_7._slicedToArray(e,2),t=r[0],n=r[1],c=Array.isArray(n)?n:[n];u[t]=__chunk_8.compact(c)});var i=__chunk_9.queryBuilder.stringify(u);i.length&&(r[RSAA].endpoint="".concat(r[RSAA].endpoint,"?").concat(i))}delete r.reducer}return o(r)}return o(e)}}};module.exports=mainTableMiddleware;
