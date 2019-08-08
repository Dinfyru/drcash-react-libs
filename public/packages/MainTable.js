"use strict";function ___$insertStyle(e){if(e&&"undefined"!=typeof window){var t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t),e}}function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}require("./chunk-8a96f938.js");var __chunk_2=require("./chunk-5901b6d1.js"),__chunk_3=require("./chunk-4a240d20.js"),__chunk_4=require("./chunk-dd581ac4.js"),__chunk_5=require("./chunk-af08879b.js"),React=require("react"),React__default=_interopDefault(React);require("./chunk-3cd28e33.js");var __chunk_10=require("./chunk-c11a7971.js"),__chunk_11=require("./chunk-9db24562.js"),TBodyPart=function(e){function f(e){var i;__chunk_4._classCallCheck(this,f),i=__chunk_4._possibleConstructorReturn(this,__chunk_4._getPrototypeOf(f).call(this,e)),__chunk_5._defineProperty(__chunk_4._assertThisInitialized(i),"generateFromTemplate",function(){return i.mainFabric()}),__chunk_5._defineProperty(__chunk_4._assertThisInitialized(i),"mainFabric",function(){for(var e=i.props,t=e.tableTemplate,_=e.partItems,d=e.visibleColumns,n=e.afterLineTemplate,r=i.state.afterLineObjs,u=[],f=[],a=function(c){var e=Object.keys(r);e.length&&0<=e.indexOf(_[c].id.toString())&&(f[c]={id:_[c].id,items:[]}),t.forEach(function(e,t){var a=e.tbody;if(!d||d[t]){var n,r,s=_[c];if(u[c]||(u[c]=[],s.id&&(u[c].id=s.id)),"function"==typeof a.value)try{n=a.value(s)}catch(e){n="n/a"}else"string"==typeof a.value?n=a.value:!a.value&&a.key&&(n=s[a.key]);if("function"==typeof a.className){for(var l={},i="string"==typeof a.key?[a.key]:a.key,o=0;o<i.length;o+=1)l[i[o]]=s[i[o]];r=a.className(l)}u[c][t]=r?React__default.createElement("td",__chunk_2._extends({className:r},a.props),n):React__default.createElement("td",a.props,n)}})},s=0;s<_.length;s+=1)a(s);if(f.length){f.forEach(function(e,_){for(var u=r[e.id].items,t=function(c){n.forEach(function(e,t){var a=e.tbody;if(!d||d[t]){f[_].items[c]||(f[_].items[c]=[]);var n,r,s=u[c];if("function"==typeof a.value)try{n=a.value(s)}catch(e){n="n/a"}else n="string"==typeof a.value?a.value:!(a.value||!a.key)&&s[a.key];if("function"==typeof a.className){for(var l={},i="string"==typeof a.key?[a.key]:a.key,o=0;o<i.length;o+=1)l[i[o]]=s[i[o]];r=a.className(l)}f[_].items[c][t]=r?React__default.createElement("td",__chunk_2._extends({className:r},a.props),n):React__default.createElement("td",a.props,n)}})},a=0;a<u.length;a+=1)t(a);u.length||f[_].items.push([React__default.createElement("td",{className:"no-border",colSpan:d.length},React__default.createElement("span",{className:"loading"},React__default.createElement("span",null)))])});var l=0;f.forEach(function(e,t){u.splice.apply(u,[t+l+1,0].concat(__chunk_3._toConsumableArray(e.items))),l+=e.items.length})}return u});var t=i.props,a=t.rerenderById,n=t.partItems,r=t.afterLineTemplate,s=t.afterLineData,l=null;a&&n.find(function(e){return e.id===a})&&(l=a);var o={};if(r&&Object.keys(s).length){var c=Object.keys(s),_=e.partItems.filter(function(e){return 0<=c.indexOf(e.id.toString())});if(_.length)for(var u=0;u<_.length;u+=1){var d=_[u].id;o[d]=s[d]}}return i.state={rerenderById:l,afterLineObjs:o},i}return __chunk_4._inherits(f,e),__chunk_4._createClass(f,[{key:"shouldComponentUpdate",value:function(e,t){var a=this.props,n=this.state.afterLineObjs,r=JSON.stringify(a.partItems)!==JSON.stringify(e.partItems),s=JSON.stringify(a.dataForRender)!==JSON.stringify(e.dataForRender),l=Boolean(t.rerenderById)&&a.rerenderById!==e.rerenderById,i=JSON.stringify(a.visibleColumns)!==JSON.stringify(e.visibleColumns),o=JSON.stringify(t.afterLineObjs)!==JSON.stringify(n);return r||s||l||i||o}},{key:"render",value:function(){return this.generateFromTemplate().map(function(e,t){return React__default.createElement("tr",{key:t,"data-id":e.id?e.id:t},React__default.createElement("td",{className:"padding-table"}," "),e.map(function(e,t){return React__default.createElement(React__default.Fragment,{key:t},e)}),React__default.createElement("td",{className:"padding-table"}," "))})}}],[{key:"getDerivedStateFromProps",value:function(t,e){if(t.rerenderById&&!e.rerenderById&&t.partItems.find(function(e){return e.id===t.rerenderById}))return{rerenderById:t.rerenderById};if(t.afterLineTemplate){var a={},n=Object.keys(t.afterLineData),r=t.partItems.filter(function(e){return 0<=n.indexOf(e.id.toString())});if(r.length)for(var s=0;s<r.length;s+=1){var l=r[s].id;a[l]=t.afterLineData[l]}return{afterLineObjs:a}}return null}}]),f}(React.Component);__chunk_5._defineProperty(TBodyPart,"defaultProps",{rerenderById:null,visibleColumns:null,afterLineData:null,afterLineTemplate:null}),__chunk_5._defineProperty(TBodyPart,"propTypes",{tableTemplate:__chunk_4.PropTypes.array.isRequired,partItems:__chunk_4.PropTypes.array.isRequired,dataForRender:__chunk_4.PropTypes.object.isRequired,rerenderById:__chunk_4.PropTypes.number,visibleColumns:__chunk_4.PropTypes.array,afterLineData:__chunk_4.PropTypes.object,afterLineTemplate:__chunk_4.PropTypes.array}),TBodyPart.displayName="TBodyPart";var TBody=function(e){function s(){var e,t;__chunk_4._classCallCheck(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return t=__chunk_4._possibleConstructorReturn(this,(e=__chunk_4._getPrototypeOf(s)).call.apply(e,[this].concat(n))),__chunk_5._defineProperty(__chunk_4._assertThisInitialized(t),"blockedItemsPosition",function(){var i=t.props.refs.parent.current,o=document.querySelectorAll(".blocked-item");o.forEach(function(e,t){var a=o[t],n=a.getAttribute("item-data-id"),r=document.querySelector('tbody tr[data-id="'.concat(n,'"]'));if(!r.length){var s=i.scrollTop+(Math.abs(__chunk_11.elemOffset(r).top)-__chunk_11.elemOffset(i).top)+1,l=r.offsetHeight-1;a.style.top="".concat(s,"px"),a.style.height="".concat(l,"px"),a.style.lineHeight="".concat(l,"px")}})}),t}return __chunk_4._inherits(s,e),__chunk_4._createClass(s,[{key:"componentDidMount",value:function(){__chunk_11.addEvent(window,"resize",this.blockedItemsPosition)}},{key:"shouldComponentUpdate",value:function(e){var t=this.props,a=JSON.stringify(t.items)!==JSON.stringify(e.items),n=JSON.stringify(t.dataForRender)!==JSON.stringify(e.dataForRender),r=t.rerenderById!==e.rerenderById,s=JSON.stringify(t.visibleColumns)!==JSON.stringify(e.visibleColumns),l=JSON.stringify(t.afterLineData)!==JSON.stringify(e.afterLineData),i=JSON.stringify(t.blockedItems)!==JSON.stringify(e.blockedItems);return a||n||r||s||l||i}},{key:"componentDidUpdate",value:function(){this.blockedItemsPosition()}},{key:"componentWillUnmount",value:function(){__chunk_11.removeEvent(window,"resize",this.blockedItemsPosition)}},{key:"render",value:function(){var e=this.props,t=e.items,a=e.tableTemplate,n=e.dataForRender,r=e.rerenderById,s=e.visibleColumns,l=e.afterLineTemplate,i=e.blockedItems,o=e.afterLineData;return React__default.createElement(React__default.Fragment,null,t.map(function(e,t){return React__default.createElement(TBodyPart,{key:t,index:t,partItems:e,dataForRender:n,tableTemplate:a,rerenderById:r,visibleColumns:s,afterLineTemplate:l,afterLineData:o})}),i.map(function(e){return React__default.createElement("tr",{className:"blocked-item",key:e,"item-data-id":e},React__default.createElement("td",null,React__default.createElement("span",{className:"loading"})))}))}}]),s}(React.Component);TBody.displayName="TBody";var ORDER_BY_DESC="DESC",ORDER_BY_ASC="ASC",THead=function(e){function r(){var e,h;__chunk_4._classCallCheck(this,r);for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return h=__chunk_4._possibleConstructorReturn(this,(e=__chunk_4._getPrototypeOf(r)).call.apply(e,[this].concat(a))),__chunk_5._defineProperty(__chunk_4._assertThisInitialized(h),"changeSortType",function(e,t){return t.sort_by!==e?ORDER_BY_DESC:t.sort_type===ORDER_BY_DESC?ORDER_BY_ASC:ORDER_BY_DESC}),__chunk_5._defineProperty(__chunk_4._assertThisInitialized(h),"generateFromTemplate",function(){var e=h.props,t=e.tableTemplate,o=e.filtersValue,c=e.reducer,_=e.getItems,u=e.sortType,d=e.sortBy,f=e.visibleColumns,p=[];return t.forEach(function(e,t){if(!f||f[t]){var a=e.thead,n=a.className,r=a.value,s=a.title,l=a.sortKey;console.log(r);var i=React__default.createElement("th",{key:t,title:s||r,className:"".concat(n||"").concat(l?" cup":""),onClick:function(){if(!l)return!1;var e=h.changeSortType(l,o);_({sort_type:e,sort_by:l,offset:0},c)}},r,!!l&&React__default.createElement("span",{className:"sorting fal ".concat(d===l?u.toLowerCase():"")}));p.push(i)}}),p}),h}return __chunk_4._inherits(r,e),__chunk_4._createClass(r,[{key:"shouldComponentUpdate",value:function(e){var t=this.props,a=JSON.stringify(t.sortType)!==JSON.stringify(e.sortType),n=JSON.stringify(t.sortBy)!==JSON.stringify(e.sortBy),r=JSON.stringify(t.visibleColumns)!==JSON.stringify(e.visibleColumns);return a||n||r}},{key:"render",value:function(){var e=this.props,t=e.isHidden,a=e.setRef,n=this.generateFromTemplate();return React__default.createElement("thead",{ref:a,className:t?"no-js":"js"},React__default.createElement("tr",null,React__default.createElement("th",{className:"padding-table"}," "),n,React__default.createElement("th",{className:"padding-table"}," ")))}}]),r}(React.Component);__chunk_5._defineProperty(THead,"defaultProps",{getItems:function(){console.log('not imported function "getItems"')},reducer:"",filtersValue:{},sortType:null,sortBy:null,isHidden:!1,visibleColumns:null}),__chunk_5._defineProperty(THead,"propTypes",{tableTemplate:__chunk_4.PropTypes.array.isRequired,reducer:__chunk_4.PropTypes.string,getItems:__chunk_4.PropTypes.func,filtersValue:__chunk_4.PropTypes.object,sortType:__chunk_4.PropTypes.string,sortBy:__chunk_4.PropTypes.string,isHidden:__chunk_4.PropTypes.bool,setRef:__chunk_4.PropTypes.object.isRequired,visibleColumns:__chunk_4.PropTypes.array}),THead.displayName="THead";var TFoot=function(e){function s(){var e,n;__chunk_4._classCallCheck(this,s);for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return n=__chunk_4._possibleConstructorReturn(this,(e=__chunk_4._getPrototypeOf(s)).call.apply(e,[this].concat(a))),__chunk_5._defineProperty(__chunk_4._assertThisInitialized(n),"generateFromTemplate",function(){var e=n.props,t=e.tableTemplate,s=e.visibleColumns,a=e.tfootItem,l=[],i=a?a.item:null;return!!a&&(t.forEach(function(e,t){var a,n,r=e.tfoot;if(!s||!0===s[t])if(r){if("function"==typeof r.value)try{a=r.value(i)}catch(e){a="n/a"}else"string"==typeof r.value?a=r.value:!r.value&&r.key&&(a=i[r.key]);"function"==typeof r.className&&(n=r.className(i)),l[t]=n?React__default.createElement("td",__chunk_2._extends({key:t,className:n},r.props),a):React__default.createElement("td",__chunk_2._extends({key:t},r.props),a)}else l[t]=React__default.createElement("td",{key:t})}),l)}),n}return __chunk_4._inherits(s,e),__chunk_4._createClass(s,[{key:"shouldComponentUpdate",value:function(e){var t=this.props,a=JSON.stringify(t.tableTemplate)!==JSON.stringify(e.tableTemplate),n=JSON.stringify(t.visibleColumns)!==JSON.stringify(e.visibleColumns),r=JSON.stringify(t.tfootItem)!==JSON.stringify(e.tfootItem),s=JSON.stringify(t.items)!==JSON.stringify(e.items),l=JSON.stringify(t.tfootDataForRender)!==JSON.stringify(e.tfootDataForRender);return a||n||r||s||l}},{key:"render",value:function(){var e=this.props,t=e.setRef,a=e.tfootItem,n=e.isHidden,r=a?a.item:null,s=a?a.isLoading:null,l=this.generateFromTemplate();return React__default.createElement("tfoot",{ref:t,className:n?"no-js":"js"},!n&&this.props.tfootOtherTemplate,React__default.createElement("tr",{className:"tfoot-data",id:n?"":"tfoot-data"},React__default.createElement("td",{className:"padding-table"}," "),l,React__default.createElement("td",{className:"padding-table"}," ")),!(!r||!s||Object.keys(r).length||n)&&React__default.createElement("tr",{className:"tfoot-loading no-border"},React__default.createElement("td",null,React__default.createElement("span",{className:"loading"},React__default.createElement("span",null)))))}}]),s}(React.Component);__chunk_5._defineProperty(TFoot,"defaultProps",{visibleColumns:null,tfootItem:null,items:[],tfootDataForRender:null}),__chunk_5._defineProperty(TFoot,"propTypes",{tableTemplate:__chunk_4.PropTypes.array.isRequired,setRef:__chunk_4.PropTypes.object.isRequired,visibleColumns:__chunk_4.PropTypes.array,tfootItem:__chunk_4.PropTypes.object,items:__chunk_4.PropTypes.array,tfootDataForRender:__chunk_4.PropTypes.object}),TFoot.displayName="TFoot";var MainTable=function(e){function t(e){var S;return __chunk_4._classCallCheck(this,t),S=__chunk_4._possibleConstructorReturn(this,__chunk_4._getPrototypeOf(t).call(this,e)),__chunk_5._defineProperty(__chunk_4._assertThisInitialized(S),"scrollHeads",function(){var e=S.table,t=e.parent.current,a=e.theadVisible.current,n=e.tfoot.current,r=S.props,s=r.tfootItem,l=r.leftMenuWidth,i=document.getElementsByTagName("html")[0],o=l-t.scrollLeft-i.scrollLeft;a.style.left="".concat(o,"px"),s&&(n.style.left="".concat(o,"px"),n.style.width="".concat(t.clientWidth+t.scrollLeft,"px"))}),__chunk_5._defineProperty(__chunk_4._assertThisInitialized(S),"resizeTableColumns",function(){var e=S.props,t=e.data,a=e.reducer,n=e.tfootItem,r=e.tfootOtherTemplate,s=t[a],l=s.items,i=s.isLoading,o=s.isLastPage,c=S.table,_=c.parent.current,u=c.tbody.current,d=c.theadHidden.current,f=c.theadVisible.current,p=c.tfoot.current,h=document.getElementsByClassName("table__filters")[0],m=document.getElementsByClassName("switch__pages")[0],y=h?h.offsetHeight:0,k=m?m.offsetHeight:0;k&&!y&&(k+=20);var b=32+y+k,g=61+y+k;if(_.style.top="".concat(b,"px"),f.style.top="".concat(g,"px"),!i&&l.length||i&&null===o||!i&&null===o||!i&&!l.length&&o){if(f.style.width="".concat(u.offsetWidth,"px"),n||r){var T=document.getElementsByTagName("html")[0];p.style.width="".concat(_.clientWidth+_.scrollLeft+T.scrollLeft,"px"),p.style.bottom="".concat(_.offsetHeight-_.clientHeight,"px")}for(var v,R=(l.length?(v="td",u.getElementsByTagName("tr")):(v="th",d.getElementsByTagName("tr")))[0].getElementsByTagName(v),E=f.getElementsByTagName("th"),P=0;P<R.length;P+=1){var N=Math.floor(R[P].offsetWidth);E[P].style.width="".concat(N,"px")}if(n&&!p.getElementsByClassName("no-border").length)for(var I=document.getElementById("tfoot-data").getElementsByTagName("td"),C=0;C<R.length;C+=1){var O=Math.floor(R[C].offsetWidth);I[C].style.width="".concat(O,"px")}}S.scrollHeads()}),__chunk_5._defineProperty(__chunk_4._assertThisInitialized(S),"lazyLoad",function(){var e=S.props,t=e.data[e.reducer],a=t.isLastPage,n=t.isLoading;if(a||n)return!1;var r=S.table.parent.current,s=S.table.tbody.current,l=s.offsetHeight-r.offsetHeight,i=Math.abs(__chunk_11.elemOffset(s).top-__chunk_11.elemOffset(r).top);l-document.getElementsByTagName("html")[0].offsetHeight/2<i&&S.getItems()}),__chunk_5._defineProperty(__chunk_4._assertThisInitialized(S),"getItems",function(e){var t=S.props,a=t.listGet,n=t.changeFiltersValue,r=t.reducer,s=t.url,l=t.data[r].filtersValue,i=l.offset,o=l.limit;n(e||{offset:i+o},r),a(r,s)}),S.state={colsCount:e.tableTemplate.length+2},S.table={parent:React__default.createRef(),theadVisible:React__default.createRef(),theadHidden:React__default.createRef(),tbody:React__default.createRef(),tfoot:React__default.createRef(),tfootHidden:React__default.createRef()},S}return __chunk_4._inherits(t,e),__chunk_4._createClass(t,[{key:"componentWillMount",value:function(){var e=this.props.onInit;"function"==typeof e&&e(this.getItems)}},{key:"componentDidMount",value:function(){var e=this.table.parent.current,t=this.props,a=t.reducer,n=t.listGet,r=t.url,s=t.data,l=t.history.action,i=t.initFiltersValue,o=t.changeFiltersValue,c=t.refreshTableOnPush;i&&(!Object.keys(s[a].filtersValue).length||c&&"PUSH"===l)&&o(i,a),(c&&"PUSH"===l||!s[a].items.length&&null===s[a].isLastPage)&&n(a,r),__chunk_11.addEvent(window,"resize",this.resizeTableColumns),__chunk_11.addEvent(e,"scroll",this.scrollHeads),__chunk_11.addEvent(window,"scroll",this.scrollHeads),this.resizeTableColumns();var _=s[a],u=_.items,d=_.scroll;if(d){var f=d.scrollLeft,p=d.scrollTop;u.length&&(p||f)&&this.table.parent.current.scrollTo(f,p)}}},{key:"componentDidUpdate",value:function(){var e=new Event("resize");window.dispatchEvent(e)}},{key:"componentWillUnmount",value:function(){var e=this.table.parent,t=e.current,a=e.current,n=a.scrollTop,r=a.scrollLeft,s=this.props,l=s.saveTableScroll,i=s.reducer,o=document.getElementsByTagName("html")[0];l({scrollTop:n,scrollLeft:r},i),__chunk_11.removeEvent(window,"resize",this.resizeTableColumns),__chunk_11.removeEvent(t,"scroll",this.scrollHeads),__chunk_11.removeEvent(o,"scroll",this.scrollHeads)}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.className,n=e.data,r=e.tableTemplate,s=e.reducer,l=e.changeFiltersValue,i=e.dataForRender,o=e.rerenderById,c=e.afterLineData,_=e.afterLineTemplate,u=e.tfootItem,d=e.tfootOtherTemplate,f=n[s],p=f.isLoading,h=f.isLastPage,m=f.items,y=f.filtersValue,k=f.visibleColumns,b=f.blockedItems,g=this.state.colsCount;return React__default.createElement("div",{id:t,ref:this.table.parent,className:"table-list__parent ".concat(a),onWheel:this.lazyLoad,onTouchMove:this.lazyLoad},React__default.createElement("table",{className:"table__thead table-list"},React__default.createElement(THead,{setRef:this.table.theadVisible,tableTemplate:r,changeFiltersValue:l,filtersValue:y,isLastPage:h,getItems:this.getItems,reducer:s,sortType:y.sort_type,sortBy:y.sort_by,visibleColumns:k})),React__default.createElement("table",{className:"table__tbody table-list"},React__default.createElement(THead,{setRef:this.table.theadHidden,tableTemplate:r,filtersValue:y,isLastPage:h,getItems:this.getItems,reducer:s,isHidden:!0,sortType:y.sort_type,sortBy:y.sort_by,visibleColumns:k}),React__default.createElement("tbody",{ref:this.table.tbody},React__default.createElement(TBody,{items:__chunk_10.cloneDeep(m),tableTemplate:r,rerenderById:o,dataForRender:__chunk_10.cloneDeep(i),visibleColumns:k,afterLineTemplate:_,afterLineData:c,blockedItems:b,refs:this.table}),!(m.length||!h||p)&&React__default.createElement("tr",{className:"no-border"},React__default.createElement("td",{colSpan:g},React__default.createElement("span",{className:"no-data"},"No data"))),!!p&&React__default.createElement("tr",{className:"no-border"},React__default.createElement("td",{colSpan:g},React__default.createElement("span",{className:"loading"},React__default.createElement("span",null))))),!!u&&React__default.createElement(TFoot,{tableTemplate:r,tfootItem:u,isHidden:!0,setRef:this.table.tfootHidden,visibleColumns:k})),!(!u&&!d)&&React__default.createElement("table",{className:"table__thead table-list"},React__default.createElement(TFoot,{tableTemplate:r,tfootItem:u,items:__chunk_10.cloneDeep(m),tfootDataForRender:this.props.tfootDataForRender,tfootOtherTemplate:this.props.tfootOtherTemplate,setRef:this.table.tfoot,visibleColumns:k})))}}]),t}(React.Component);__chunk_5._defineProperty(MainTable,"defaultProps",{reducer:"",className:"",dataForRender:{},rerenderById:null,initFiltersValue:null,refreshTableOnPush:!1,onInit:null,afterLineTemplate:null,afterLineData:null,tfootItem:null,tfootDataForRender:null,leftMenuWidth:200}),__chunk_5._defineProperty(MainTable,"propTypes",{url:__chunk_4.PropTypes.string.isRequired,id:__chunk_4.PropTypes.string.isRequired,tableTemplate:__chunk_4.PropTypes.array.isRequired,reducer:__chunk_4.PropTypes.string,data:__chunk_4.PropTypes.object.isRequired,className:__chunk_4.PropTypes.string,dataForRender:__chunk_4.PropTypes.object,rerenderById:__chunk_4.PropTypes.number,initFiltersValue:__chunk_4.PropTypes.object,refreshTableOnPush:__chunk_4.PropTypes.bool,listGet:__chunk_4.PropTypes.func.isRequired,saveTableScroll:__chunk_4.PropTypes.func.isRequired,changeFiltersValue:__chunk_4.PropTypes.func.isRequired,history:__chunk_4.PropTypes.object.isRequired,onInit:__chunk_4.PropTypes.func,afterLineTemplate:__chunk_4.PropTypes.array,afterLineData:__chunk_4.PropTypes.object,tfootItem:__chunk_4.PropTypes.object,tfootDataForRender:__chunk_4.PropTypes.object,leftMenuWidth:__chunk_4.PropTypes.number}),MainTable.displayName="MainTable",module.exports=MainTable;
