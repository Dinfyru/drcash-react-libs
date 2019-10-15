"use strict";function ___$insertStyle(e){if(e&&"undefined"!=typeof window){var t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t),e}}Object.defineProperty(exports,"__esModule",{value:!0}),require("./chunk-8a96f938.js");var __chunk_5=require("./chunk-af08879b.js");require("./chunk-3cd28e33.js"),require("./chunk-04fc15c7.js"),require("./chunk-e635a9c8.js");var __chunk_9=require("./chunk-93b2e459.js");require("./chunk-c11a7971.js");var crud=require("./crud.js");function ownKeys(t,e){var T=Object.keys(t);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(t);e&&(_=_.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),T.push.apply(T,_)}return T}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var T=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(T,!0).forEach(function(e){__chunk_5._defineProperty(t,e,T[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(T)):ownKeys(T).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(T,e))})}return t}var RSAA="@@redux-api-middleware/RSAA",MT_SAVE_TABLE_SCROLL="MT_SAVE_TABLE_SCROLL",saveTableScrollAction=function(e,t){return{type:MT_SAVE_TABLE_SCROLL,scroll:e,reducer:t}},MT_CHANGE_FILTERS_VALUE="MT_CHANGE_FILTERS_VALUE",changeFiltersValueAction=function(e,t){return{type:MT_CHANGE_FILTERS_VALUE,data:e,reducer:t}},MT_UPDATE_VISIBLE_COLUMNS="MT_UPDATE_VISIBLE_COLUMNS",updateVisibleColumnsAction=function(e,t){return{type:MT_UPDATE_VISIBLE_COLUMNS,data:e,reducer:t}},MT_GET_SUBLINE_DATA_REQUEST="MT_GET_SUBLINE_DATA_REQUEST",MT_GET_SUBLINE_DATA_SUCCESS="MT_GET_SUBLINE_DATA_SUCCESS",MT_GET_SUBLINE_DATA_FAILURE="MT_GET_SUBLINE_DATA_FAILURE",MTgetSubLineData=function(e){var _=e.id,t=e.subLineKey,r=void 0===t?"id":t,T=e.query,n=void 0===T?{}:T,E=e.url,u=e.reducer;return function(e){var t=__chunk_9.queryBuilder.stringify(_objectSpread({},n,__chunk_5._defineProperty({},r,_))),T=E;return t.length&&(T="".concat(T,"?").concat(t)),e(__chunk_5._defineProperty({needToken:!0},RSAA,{endpoint:T,method:"GET",headers:{"Content-Type":"application/json"},types:[{type:MT_GET_SUBLINE_DATA_REQUEST,meta:{reducer:u,subLineKey:r,id:_}},{type:MT_GET_SUBLINE_DATA_SUCCESS,meta:{reducer:u,subLineKey:r,id:_}},{type:MT_GET_SUBLINE_DATA_FAILURE,meta:{reducer:u,subLineKey:r,id:_}}]}))}},MT_REMOVE_SUBLINE_DATA="MT_REMOVE_SUBLINE_DATA",MTremoveSubLineData=function(e){var t=e.id,T=e.reducer;return function(e){return e({type:MT_REMOVE_SUBLINE_DATA,id:t,reducer:T})}},MT_LIST_UPDATE_ITEMS="MT_LIST_UPDATE_ITEMS",MTupdateItemsAction=function(e,t){return{type:MT_LIST_UPDATE_ITEMS,items:e,reducer:t}},MT_LIST_AUTO_UPDATE_ITEM="MT_LIST_AUTO_UPDATE_ITEM",MTautoUpdateItemAction=function(e,t,T){return{type:MT_LIST_AUTO_UPDATE_ITEM,item:e,reducer:t,key:T}},MT_LIST_AUTO_UPDATE_ITEMS="MT_LIST_AUTO_UPDATE_ITEMS",MTautoUpdateItems=function(e,t){return{type:MT_LIST_AUTO_UPDATE_ITEMS,items:e,reducer:t}},MT_LIST_REMOVE_ITEM="MT_LIST_REMOVE_ITEM",MTlistRemoveItemAction=function(e,t,T){return{type:MT_LIST_REMOVE_ITEM,id:e,reducer:t,key:2<arguments.length&&void 0!==T?T:"id"}},filtersDataGetAction=function(e,t,T){var _=__chunk_9.queryBuilder.stringify(T);"".concat(t).concat(_&&_.length?"?".concat(_):"");return crud.crud({endpoint:t,query:_,crudTypes:{request:"MT_FILTERS_DATA@".concat(e,"_REQUEST"),success:"MT_FILTERS_DATA@".concat(e,"_SUCCESS"),failure:"MT_FILTERS_DATA@".concat(e,"_FAILURE")}})},MT_DISABLE_ITEM_SWITCHER="MT_DISABLE_ITEM_SWITCH",disableItemSwitcherAction=function(e,t,T){return{type:MT_DISABLE_ITEM_SWITCHER,data:e,reducer:t,byIndex:T}},MTsaveTableScroll=function(t,T){return function(e){return e(saveTableScrollAction(t,T))}},MTchangeFiltersValue=function(t,T){return function(e){return e(changeFiltersValueAction(t,T))}},MTfiltersDataGet=function(t,T,_){return function(e){return e(filtersDataGetAction(t,T,_))}},MTupdateItems=function(t,T){return function(e){return e(MTupdateItemsAction(t,T))}},MTupdateVisibleColumns=function(t,T){return function(e){return e(updateVisibleColumnsAction(t,T))}},MTautoUpdateItem=function(t,T,_){return function(e){return e(MTautoUpdateItemAction(t,T,_))}},MTlistRemoveItem=function(t,T,_){return function(e){return e(MTlistRemoveItemAction(t,T,_))}},MTdisableItemSwitcher=function(t,T,_){return function(e){return e(disableItemSwitcherAction(t,T,_))}};exports.MT_CHANGE_FILTERS_VALUE=MT_CHANGE_FILTERS_VALUE,exports.MT_DISABLE_ITEM_SWITCHER=MT_DISABLE_ITEM_SWITCHER,exports.MT_GET_SUBLINE_DATA_FAILURE=MT_GET_SUBLINE_DATA_FAILURE,exports.MT_GET_SUBLINE_DATA_REQUEST=MT_GET_SUBLINE_DATA_REQUEST,exports.MT_GET_SUBLINE_DATA_SUCCESS=MT_GET_SUBLINE_DATA_SUCCESS,exports.MT_LIST_AUTO_UPDATE_ITEM=MT_LIST_AUTO_UPDATE_ITEM,exports.MT_LIST_AUTO_UPDATE_ITEMS=MT_LIST_AUTO_UPDATE_ITEMS,exports.MT_LIST_REMOVE_ITEM=MT_LIST_REMOVE_ITEM,exports.MT_LIST_UPDATE_ITEMS=MT_LIST_UPDATE_ITEMS,exports.MT_REMOVE_SUBLINE_DATA=MT_REMOVE_SUBLINE_DATA,exports.MT_SAVE_TABLE_SCROLL=MT_SAVE_TABLE_SCROLL,exports.MT_UPDATE_VISIBLE_COLUMNS=MT_UPDATE_VISIBLE_COLUMNS,exports.MTautoUpdateItem=MTautoUpdateItem,exports.MTautoUpdateItems=MTautoUpdateItems,exports.MTchangeFiltersValue=MTchangeFiltersValue,exports.MTdisableItemSwitcher=MTdisableItemSwitcher,exports.MTfiltersDataGet=MTfiltersDataGet,exports.MTgetSubLineData=MTgetSubLineData,exports.MTlistRemoveItem=MTlistRemoveItem,exports.MTremoveSubLineData=MTremoveSubLineData,exports.MTsaveTableScroll=MTsaveTableScroll,exports.MTupdateItems=MTupdateItems,exports.MTupdateVisibleColumns=MTupdateVisibleColumns;
