"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var __chunk_1=require("./chunk-650a63e0.js");function _arrayWithHoles(t){if(Array.isArray(t))return t}var arrayWithHoles=_arrayWithHoles;function _iterableToArrayLimit(t,r){var e=[],n=!0,o=!1,c=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(e.push(a.value),!r||e.length!==r);n=!0);}catch(t){o=!0,c=t}finally{try{n||null==u.return||u.return()}finally{if(o)throw c}}return e}var iterableToArrayLimit=_iterableToArrayLimit;function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var nonIterableRest=_nonIterableRest;function _slicedToArray(t,r){return arrayWithHoles(t)||iterableToArrayLimit(t,r)||nonIterableRest()}var slicedToArray=_slicedToArray;function _objectSpread(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},n=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.forEach(function(t){__chunk_1._defineProperty(r,t,e[t])})}return r}var objectSpread=_objectSpread;function compact(t){for(var r=-1,e=t?t.length:0,n=0,o=[];++r<e;){var c=t[r];c&&(o[n++]=c)}return o}var lodash_compact=compact,strictUriEncode=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})};function encoderForArrayFormat(n){switch(n.arrayFormat){case"index":return function(t,r,e){return null===r?[encode(t,n),"[",e,"]"].join(""):[encode(t,n),"[",encode(e,n),"]=",encode(r,n)].join("")};case"bracket":return function(t,r){return null===r?encode(t,n):[encode(t,n),"[]=",encode(r,n)].join("")};default:return function(t,r){return null===r?encode(t,n):[encode(t,n),"=",encode(r,n)].join("")}}}function parserForArrayFormat(t){var n;switch(t.arrayFormat){case"index":return function(t,r,e){n=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),n?(void 0===e[t]&&(e[t]={}),e[t][n[1]]=r):e[t]=r};case"bracket":return function(t,r,e){n=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),n?void 0!==e[t]?e[t]=[].concat(e[t],r):e[t]=[r]:e[t]=r};default:return function(t,r,e){void 0!==e[t]?e[t]=[].concat(e[t],r):e[t]=r}}}function encode(t,r){return r.encode?r.strict?strictUriEncode(t):encodeURIComponent(t):t}function keysSorter(r){return Array.isArray(r)?r.sort():"object"==typeof r?keysSorter(Object.keys(r)).sort(function(t,r){return Number(t)-Number(r)}).map(function(t){return r[t]}):r}var extract=function(t){return t.split("?")[1]||""},parse=function(t,r){var o=parserForArrayFormat(r=__chunk_1.objectAssign({arrayFormat:"none"},r)),c=Object.create(null);return"string"!=typeof t?c:(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var r=t.replace(/\+/g," ").split("="),e=r.shift(),n=0<r.length?r.join("="):void 0;n=void 0===n?null:decodeURIComponent(n),o(decodeURIComponent(e),n,c)}),Object.keys(c).sort().reduce(function(t,r){var e=c[r];return Boolean(e)&&"object"==typeof e&&!Array.isArray(e)?t[r]=keysSorter(e):t[r]=e,t},Object.create(null))):c},stringify=function(n,o){var c=encoderForArrayFormat(o=__chunk_1.objectAssign({encode:!0,strict:!0,arrayFormat:"none"},o));return n?Object.keys(n).sort().map(function(r){var t=n[r];if(void 0===t)return"";if(null===t)return encode(r,o);if(Array.isArray(t)){var e=[];return t.slice().forEach(function(t){void 0!==t&&e.push(c(r,t,e.length))}),e.join("&")}return encode(r,o)+"="+encode(t,o)}).filter(function(t){return 0<t.length}).join("&"):""},queryString={extract:extract,parse:parse,stringify:stringify},lodash_clonedeep=__chunk_1.createCommonjsModule(function(t,r){var n="__lodash_hash_undefined__",e=9007199254740991,p="[object Arguments]",y="[object Boolean]",d="[object Date]",h="[object Function]",v="[object GeneratorFunction]",b="[object Map]",j="[object Number]",A="[object Object]",o="[object Promise]",g="[object RegExp]",m="[object Set]",O="[object String]",S="[object Symbol]",c="[object WeakMap]",C="[object ArrayBuffer]",R="[object DataView]",U="[object Float32Array]",w="[object Float64Array]",E="[object Int8Array]",I="[object Int16Array]",T="[object Int32Array]",k="[object Uint8Array]",x="[object Uint8ClampedArray]",F="[object Uint16Array]",D="[object Uint32Array]",N=/\w*$/,a=/^\[object .+?Constructor\]$/,u=/^(?:0|[1-9]\d*)$/,P={};P[p]=P["[object Array]"]=P[C]=P[R]=P[y]=P[d]=P[U]=P[w]=P[E]=P[I]=P[T]=P[b]=P[j]=P[A]=P[g]=P[m]=P[O]=P[S]=P[k]=P[x]=P[F]=P[D]=!0,P["[object Error]"]=P[h]=P[c]=!1;var i="object"==typeof __chunk_1.commonjsGlobal&&__chunk_1.commonjsGlobal&&__chunk_1.commonjsGlobal.Object===Object&&__chunk_1.commonjsGlobal,s="object"==typeof self&&self&&self.Object===Object&&self,f=i||s||Function("return this")(),l=r&&!r.nodeType&&r,_=l&&t&&!t.nodeType&&t,$=_&&_.exports===l;function L(t,r){return t.set(r[0],r[1]),t}function q(t,r){return t.add(r),t}function B(t,r,e,n){var o=-1,c=t?t.length:0;for(n&&c&&(e=t[++o]);++o<c;)e=r(e,t[o],o,t);return e}function G(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function M(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}function W(r,e){return function(t){return r(e(t))}}function Q(t){var r=-1,e=Array(t.size);return t.forEach(function(t){e[++r]=t}),e}var H,z=Array.prototype,V=Function.prototype,J=Object.prototype,K=f["__core-js_shared__"],X=(H=/[^.]+$/.exec(K&&K.keys&&K.keys.IE_PROTO||""))?"Symbol(src)_1."+H:"",Y=V.toString,Z=J.hasOwnProperty,tt=J.toString,rt=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=$?f.Buffer:void 0,nt=f.Symbol,ot=f.Uint8Array,ct=W(Object.getPrototypeOf,Object),at=Object.create,ut=J.propertyIsEnumerable,it=z.splice,st=Object.getOwnPropertySymbols,ft=et?et.isBuffer:void 0,lt=W(Object.keys,Object),_t=Pt(f,"DataView"),pt=Pt(f,"Map"),yt=Pt(f,"Promise"),dt=Pt(f,"Set"),ht=Pt(f,"WeakMap"),vt=Pt(Object,"create"),bt=Gt(_t),jt=Gt(pt),At=Gt(yt),gt=Gt(dt),mt=Gt(ht),Ot=nt?nt.prototype:void 0,St=Ot?Ot.valueOf:void 0;function Ct(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Rt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Ut(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function wt(t){this.__data__=new Rt(t)}function Et(t,r){var e=Wt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Qt(t)}(t)&&Z.call(t,"callee")&&(!ut.call(t,"callee")||tt.call(t)==p)}(t)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(t.length,String):[],n=e.length,o=!!n;for(var c in t)!r&&!Z.call(t,c)||o&&("length"==c||qt(c,n))||e.push(c);return e}function It(t,r,e){var n=t[r];Z.call(t,r)&&Mt(n,e)&&(void 0!==e||r in t)||(t[r]=e)}function Tt(t,r){for(var e=t.length;e--;)if(Mt(t[e][0],r))return e;return-1}function kt(e,n,o,c,t,r,a){var u;if(c&&(u=r?c(e,t,r,a):c(e)),void 0!==u)return u;if(!Vt(e))return e;var i=Wt(e);if(i){if(u=function(t){var r=t.length,e=t.constructor(r);r&&"string"==typeof t[0]&&Z.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(e),!n)return function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(e,u)}else{var s=Lt(e),f=s==h||s==v;if(Ht(e))return function(t,r){if(r)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(e,n);if(s==A||s==p||f&&!r){if(G(e))return r?e:{};if(u=function(t){return"function"!=typeof t.constructor||Bt(t)?{}:function(t){return Vt(t)?at(t):{}}(ct(t))}(f?{}:e),!n)return function(t,r){return Dt(t,$t(t),r)}(e,function(t,r){return t&&Dt(r,Jt(r),t)}(u,e))}else{if(!P[s])return r?e:{};u=function(t,r,e,n){var o=t.constructor;switch(r){case C:return Ft(t);case y:case d:return new o(+t);case R:return function(t,r){var e=r?Ft(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,n);case U:case w:case E:case I:case T:case k:case x:case F:case D:return function(t,r){var e=r?Ft(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,n);case b:return function(t,r,e){return B(r?e(M(t),!0):M(t),L,new t.constructor)}(t,n,e);case j:case O:return new o(t);case g:return function(t){var r=new t.constructor(t.source,N.exec(t));return r.lastIndex=t.lastIndex,r}(t);case m:return function(t,r,e){return B(r?e(Q(t),!0):Q(t),q,new t.constructor)}(t,n,e);case S:return function(t){return St?Object(St.call(t)):{}}(t)}}(e,s,kt,n)}}a||(a=new wt);var l=a.get(e);if(l)return l;if(a.set(e,u),!i)var _=o?function(t){return function(t,r,e){var n=r(t);return Wt(t)?n:function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t}(n,e(t))}(t,Jt,$t)}(e):Jt(e);return function(t,r){for(var e=-1,n=t?t.length:0;++e<n&&!1!==r(t[e],e,t););}(_||e,function(t,r){_&&(t=e[r=t]),It(u,r,kt(t,n,o,c,r,e,a))}),u}function xt(t){return!(!Vt(t)||function(t){return!!X&&X in t}(t))&&(zt(t)||G(t)?rt:a).test(Gt(t))}function Ft(t){var r=new t.constructor(t.byteLength);return new ot(r).set(new ot(t)),r}function Dt(t,r,e,n){e||(e={});for(var o=-1,c=r.length;++o<c;){var a=r[o],u=n?n(e[a],t[a],a,e,t):void 0;It(e,a,void 0===u?t[a]:u)}return e}function Nt(t,r){var e=t.__data__;return function(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t}(r)?e["string"==typeof r?"string":"hash"]:e.map}function Pt(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return xt(e)?e:void 0}Ct.prototype.clear=function(){this.__data__=vt?vt(null):{}},Ct.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Ct.prototype.get=function(t){var r=this.__data__;if(vt){var e=r[t];return e===n?void 0:e}return Z.call(r,t)?r[t]:void 0},Ct.prototype.has=function(t){var r=this.__data__;return vt?void 0!==r[t]:Z.call(r,t)},Ct.prototype.set=function(t,r){return this.__data__[t]=vt&&void 0===r?n:r,this},Rt.prototype.clear=function(){this.__data__=[]},Rt.prototype.delete=function(t){var r=this.__data__,e=Tt(r,t);return!(e<0||(e==r.length-1?r.pop():it.call(r,e,1),0))},Rt.prototype.get=function(t){var r=this.__data__,e=Tt(r,t);return e<0?void 0:r[e][1]},Rt.prototype.has=function(t){return-1<Tt(this.__data__,t)},Rt.prototype.set=function(t,r){var e=this.__data__,n=Tt(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},Ut.prototype.clear=function(){this.__data__={hash:new Ct,map:new(pt||Rt),string:new Ct}},Ut.prototype.delete=function(t){return Nt(this,t).delete(t)},Ut.prototype.get=function(t){return Nt(this,t).get(t)},Ut.prototype.has=function(t){return Nt(this,t).has(t)},Ut.prototype.set=function(t,r){return Nt(this,t).set(t,r),this},wt.prototype.clear=function(){this.__data__=new Rt},wt.prototype.delete=function(t){return this.__data__.delete(t)},wt.prototype.get=function(t){return this.__data__.get(t)},wt.prototype.has=function(t){return this.__data__.has(t)},wt.prototype.set=function(t,r){var e=this.__data__;if(e instanceof Rt){var n=e.__data__;if(!pt||n.length<199)return n.push([t,r]),this;e=this.__data__=new Ut(n)}return e.set(t,r),this};var $t=st?W(st,Object):function(){return[]},Lt=function(t){return tt.call(t)};function qt(t,r){return!!(r=null==r?e:r)&&("number"==typeof t||u.test(t))&&-1<t&&t%1==0&&t<r}function Bt(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||J)}function Gt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Mt(t,r){return t===r||t!=t&&r!=r}(_t&&Lt(new _t(new ArrayBuffer(1)))!=R||pt&&Lt(new pt)!=b||yt&&Lt(yt.resolve())!=o||dt&&Lt(new dt)!=m||ht&&Lt(new ht)!=c)&&(Lt=function(t){var r=tt.call(t),e=r==A?t.constructor:void 0,n=e?Gt(e):void 0;if(n)switch(n){case bt:return R;case jt:return b;case At:return o;case gt:return m;case mt:return c}return r});var Wt=Array.isArray;function Qt(t){return null!=t&&function(t){return"number"==typeof t&&-1<t&&t%1==0&&t<=e}(t.length)&&!zt(t)}var Ht=ft||function(){return!1};function zt(t){var r=Vt(t)?tt.call(t):"";return r==h||r==v}function Vt(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function Jt(t){return Qt(t)?Et(t):function(t){if(!Bt(t))return lt(t);var r=[];for(var e in Object(t))Z.call(t,e)&&"constructor"!=e&&r.push(e);return r}(t)}t.exports=function(t){return kt(t,!0,!0)}}),CRUD_ACTION_REQUEST="CRUD_ACTION_REQUEST",CRUD_ACTION_SUCCESS="CRUD_ACTION_SUCCESS",CRUD_ACTION_FAILURE="CRUD_ACTION_FAILURE",RSAA="@@redux-api-middleware/RSAA",crud=function(t){var r=t.method,e=void 0===r?"GET":r,n=t.endpoint,o=t.keys,c=t.query,a=void 0===c?{}:c,u=t.body,i=t.meta,s=void 0===i?{}:i,f=t.name,l=void 0===f?"base_":f,_=t.headers,p=void 0===_?{"Content-Type":"application/json"}:_,y=t.needToken,d=void 0===y||y,h=__chunk_1._defineProperty({needToken:d},RSAA,{endpoint:n,method:e,headers:p,types:[{type:"".concat(l,"_").concat(CRUD_ACTION_REQUEST),meta:objectSpread({query:a},s)},{type:"".concat(l,"_").concat(CRUD_ACTION_SUCCESS),meta:objectSpread({query:a},s)},{type:"".concat(l,"_").concat(CRUD_ACTION_FAILURE),meta:objectSpread({query:a},s)}]});if(o&&Object.keys(o).forEach(function(t){h[RSAA].endpoint=h[RSAA].endpoint.replace(":".concat(t),o[t])}),a&&Object.keys(a).length){var v=lodash_clonedeep(a);Object.entries(v).forEach(function(t){var r=slicedToArray(t,2),e=r[0],n=r[1],o=Array.isArray(n)?n:[n];v[e]=lodash_compact(o)});var b=queryString.stringify(v);b.length&&(h[RSAA].endpoint="".concat(h[RSAA].endpoint,"?").concat(b))}return u&&(h[RSAA].body=JSON.stringify(u)),h};exports.CRUD_ACTION_FAILURE=CRUD_ACTION_FAILURE,exports.CRUD_ACTION_REQUEST=CRUD_ACTION_REQUEST,exports.CRUD_ACTION_SUCCESS=CRUD_ACTION_SUCCESS,exports.crud=crud;
