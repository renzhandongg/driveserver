(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37721218"],{"1e4b":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"layout main"},[r("Layout",[r("HeaderTop",{ref:"headerTop"}),r("Layout",[r("Content",{staticClass:"main-content-con"},[r("Layout",{staticClass:"main-layout-con"},[r("Content",{staticClass:"content-wrapper mainContent"},[r("router-view")],1)],1)],1)],1)],1)],1)},o=[],a=(r("5ab2"),r("6d57"),r("e10e"),r("e697"),r("cc57"),r("88d6")),i=r("025e"),c=r("5880"),s=(r("bdaa"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Header",[n("div",{staticClass:"layout-logo",on:{click:t.gotoHome}},[n("img",{attrs:{src:r("cf05")}})]),n("Menu",{attrs:{mode:"horizontal",theme:"dark","active-name":t.activeName}},[n("div",{staticClass:"layout-nav"},t._l(t.menuItem,(function(e){return n("div",{key:e.activeName},[n("MenuItem",{attrs:{name:e.activeName}},[n("Icon",{attrs:{type:e.type}}),n("span",{staticClass:"filling",on:{click:function(r){return t.routerLink(e.name)}}},[t._v(t._s(e.value))])],1)],1)})),0),n("div",{staticClass:"user"},[n("User")],1)])],1)}),u=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"user-avatar-dropdown"},[r("Dropdown",{on:{"on-click":t.handleClick}},[r("Icon",{attrs:{type:"md-person",size:"28",color:"#fff"}}),r("Icon",{attrs:{size:"18",type:"md-arrow-dropdown",color:"#fff"}}),r("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[r("DropdownItem",{attrs:{name:"logout"}},[t._v("退出登录")])],1)],1)],1)},h=[],f=(r("b449"),r("5d83")),p={name:"User",methods:{logout:function(){this.userlayout()},handleClick:function(t){switch(t){case"logout":this.logout();break;case"message":this.message();break}},userlayout:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){var e,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,app.ajax("layout").catch((function(t){r.$Message.warning("退出登录失败")}));case 2:e=t.sent,200==e.code?(localStorage.removeItem("islogin"),this.$router.push({name:"login"})):this.$Message.error("退出登录失败");case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},m=p,v=(r("9b27"),r("4023")),d=Object(v["a"])(m,l,h,!1,null,null,null),y=d.exports,g=y,w={components:{User:g},data:function(){return{menuItem:[{activeName:1,type:"ios-navigate",value:"主要指标",name:"user"},{activeName:2,type:"ios-keypad",value:"经纪业务",name:"economic"},{activeName:3,type:"ios-analytics",value:"投行业务",name:"investmentBank"},{activeName:4,type:"ios-paper",value:"新三板",name:"board"},{activeName:5,type:"md-easel",value:"资产管理",name:"asset"},{activeName:6,type:"ios-contacts",value:"研究所",name:"graduateSchool"}]}},computed:{activeName:function(){var t=this.$route.name,e=this.menuItem.find((function(e){return e.name===t}));return e.activeName||1}},methods:{routerLink:function(t){this.$router.push({name:t})},gotoHome:function(){this.$router.push({name:"home"})}}},b=w,L=(r("fad4"),Object(v["a"])(b,s,u,!1,null,"6a581f43",null)),x=L.exports;function O(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function j(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?O(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var N={components:{HeaderTop:x},name:"AI",data:function(){return{accordion:!0,menuList:[{text:"首页",icon:"md-contacts",name:"user"},{text:"AI",icon:"md-thunderstorm",name:"ai"},{text:"商品",icon:"ios-calendar",name:""},{text:"经济人",icon:"md-contact",name:"s"}]}},methods:j(j({},Object(c["mapMutations"])(["setTagNavList","addTag","closeTag"])),{},{turnToPage:function(t){var e={},r=e.name,n=e.params,o=e.query;"string"===typeof t?r=t:(r=t.name,n=t.params,o=t.query),this.$router.push({name:r,params:n,query:o})},handleCloseTag:function(t,e,r){"others"!==e&&("all"===e?this.turnToPage(this.$config.homeName):Object(i["f"])(this.$route,r)&&this.closeTag(r)),this.setTagNavList(t)},handleClick:function(t){this.turnToPage(t)}}),computed:{tagNavList:function(){return this.$store.state.app.tagNavList}},created:function(){},mounted:function(){var t=this;this.setTagNavList();var e=this.$route,r=e.name,n=e.params,o=e.query,a=e.meta;"matchUser"!==r&&this.addTag({route:{name:r,params:n,query:o,meta:a},type:"push"}),this.tagNavList.find((function(e){return e.name===t.$route.name}))||this.$router.push({name:this.$config.homeName})},watch:{$route:function(t){var e=t.name,r=t.query,n=t.params,o=t.meta;n.tableData||(this.addTag({route:{name:e,query:r,params:n,meta:o},type:"push"}),this.setTagNavList(Object(i["a"])(this.tagNavList,t)))}}},k=N,E=(r("c072"),Object(v["a"])(k,n,o,!1,null,null,null));e["default"]=E.exports},"5d83":function(t,e,r){"use strict";function n(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,s,"next",t)}function s(t){n(i,o,a,c,s,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return o}))},"9b27":function(t,e,r){"use strict";var n=r("d5da"),o=r.n(n);o.a},b449:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new _(n||[]);return a._invoke=j(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",f="executing",p="completed",m={};function v(){}function d(){}function y(){}var g={};g[a]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(T([])));b&&b!==r&&n.call(b,a)&&(g=b);var L=y.prototype=v.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function O(t,e){function r(o,a,i,c){var s=u(t[o],t,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(h).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var o;function a(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}this._invoke=a}function j(t,e,r){var n=l;return function(o,a){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return P()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var c=N(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var s=u(t,e,r);if("normal"===s.type){if(n=r.done?p:h,s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}function N(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,N(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function T(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}return d.prototype=L.constructor=y,y.constructor=d,y[c]=d.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},x(O.prototype),O.prototype[i]=function(){return this},t.AsyncIterator=O,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new O(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(L),L[c]="Generator",L[a]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=T,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},bdaa:function(t,e,r){"use strict";var n=r("cebe"),o=r.n(n),a=r("f121"),i=r("a18c"),c=r("025e");window.axiosCancel=[];var s=a["a"].url.basicUrl,u=o.a.create({baseURL:s,timeout:0,maxContentLength:2e3,transformResponse:[function(t){try{t=JSON.parse(t)}catch(e){t={}}return 403===t.status&&(Object(c["e"])(),i["a"].push("/user")),t}]});u.interceptors.request.use((function(t){return t.cancelToken=new n["CancelToken"]((function(t){window.axiosCancel.push({cancel:t})})),t}),(function(t){return Promise.reject(t)})),u.interceptors.response.use((function(t){}),(function(t){return Promise.reject(t)}))},c072:function(t,e,r){"use strict";var n=r("f2c2"),o=r.n(n);o.a},cc4b:function(t,e,r){},cf05:function(t,e,r){t.exports=r.p+"img/logo.1a37b149.png"},d5da:function(t,e,r){},e697:function(t,e,r){"use strict";var n=r("e46b"),o=r("013f")(5),a="find",i=!0;a in[]&&Array(1)[a]((function(){i=!1})),n(n.P+n.F*i,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r("0e8b")(a)},f2c2:function(t,e,r){},fad4:function(t,e,r){"use strict";var n=r("cc4b"),o=r.n(n);o.a}}]);