(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65939737"],{"5d83":function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return o}))},"7abe":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",{staticClass:"layout"},[r("Row",[r("Col",{attrs:{span:"7"}},[r("div",{staticStyle:{height:"500px"},attrs:{id:"expenditure"}}),r("div",{attrs:{id:"budget"}})]),r("Col",{attrs:{span:"10"}},[r("div",{staticStyle:{height:"500px"},attrs:{id:"map"}}),r("div",{attrs:{id:"indicators"}})]),r("Col",{attrs:{span:"7"}},[r("div",{staticStyle:{height:"500px"},attrs:{id:"economic"}}),r("div",{attrs:{id:"indicatorsPolyline"}})])],1),r("echarts",{attrs:{msg:t.msg}})],1)},o=[],i=(r("5ab2"),r("e10e"),r("88d6")),a=(r("b449"),r("5d83")),c=(r("c904"),r("6d57"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ul",t._l(t.msg,(function(e,n){return r("li",{key:n},[t._v(t._s(e.title))])})),0)])}),s=[],u={props:{msg:{type:Array,default:function(){return[]}}}},l=u,h=r("4023"),f=Object(h["a"])(l,c,s,!1,null,null,null),p=f.exports,d=r("2389"),m=r.n(d),y=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=window.innerHeight;t="".concat(r?n-500-74:n-500),e.forEach((function(e){var r=document.getElementById(e);r.style.height=t+"px"}))},v=(r("bdaa"),{"广东":"粤","北京":"京","福建":"闽","浙江":"浙","上海":"沪","湖北":"鄂","湖南":"湘","江西":"赣","海南":"琼","天津":"津","重庆":"渝","河北":"冀","河南":"豫","安徽":"皖","广西":"桂","四川":"川","贵州":"黔","山西":"晋","辽宁":"辽","吉林":"吉","黑龙江":"黑","江苏":"苏","山东":"鲁","云南":"云","陕西":"陕","台湾":"台","内蒙古":"蒙","宁夏":"宁","新疆":"新","香港":"港","澳门":"澳"});r("d2b3");function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var b={name:"Home",components:{Echarts:p},data:function(){return{msg:[{id:1,title:"1"},{id:2,title:"2"},{id:3,title:"3"}],map:null,indicators:null,economic:null,investmentBank:null,threeNewBoard:null,expenditure:null,budget:null,expenditurevOption:{title:{text:"主要指标",textStyle:{fontSize:14},top:"3%",transitionDuration:0},tooltip:{transitionDuration:0,trigger:"axis",axisPointer:{type:"shadow",label:{show:!0}}},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0}},top:"2%"},calculable:!0,legend:{data:["总额","市场份额","行业排名"],itemGap:5,top:"3%"},grid:{top:"10%",left:"1%",right:"1%",bottom:"1%",containLabel:!0},xAxis:[{type:"category",data:["资产总额（合并报表/亿元）","净资产（合并报表/亿元）","净资本（亿元）","母公司股东每股净资产","每股收益"]}],yAxis:[{type:"value",axisLabel:{formatter:function(t){return t=+t,isFinite(t)?m.a.format.addCommas(+t/1e3):""}}}],series:[{name:"总额",type:"bar",data:[10,20,30,20,4]},{name:"市场份额",type:"bar",data:[1,2,3,16,10]},{name:"行业排名",type:"bar",data:[5,6,7,20,50]}]},indicatorsPolylineOption:{tooltip:{transitionDuration:0,trigger:"axis",axisPointer:{type:"shadow"},formatter:function(t){var e="";return t.forEach((function(t){e+=t.marker+" "+t.seriesName+" : "+t.value+"%"})),e}},legend:{data:["支出百分比"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["行政人事部","后勤部","技术部","采购部","销售部","财务部","研发部"],axisLabel:{interval:0,rotate:40}}],yAxis:[{type:"value",name:"百分比",min:0,max:100,interval:25,axisLabel:{formatter:"{value} %"}}],series:[{name:"支出百分比",type:"line",stack:"广告",areaStyle:{normal:{color:new m.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#BC332F"},{offset:.5,color:"#BC332F"},{offset:1,color:"#E18C8A"}])}},itemStyle:{color:"#BC332F"},data:[58,90,91,34,90,30,10]}]},option:{tooltip:{transitionDuration:0,trigger:"axis",axisPointer:{type:"shadow"},formatter:function(t){var e="";return t[2]&&(t[2].value=t[2].value+"%"),t.forEach((function(t){e+=t.marker+" "+t.seriesName+" : "+t.value+"</br>"})),e}},legend:{data:["支出金额","预算金额"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["行政人事部","后勤部","技术部","采购部","销售部","财务部","研发部"]}],yAxis:[{name:"金额",type:"value"}],series:[{name:"支出金额",type:"bar",data:[320,332,301,334,390,330,320]},{name:"预算金额",type:"bar",stack:"广告",data:[120,132,101,134,90,230,210]}]},economicOption:{title:{text:"部门支出占比图",left:"center",top:20},tooltip:{transitionDuration:0,trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},visualMap:{show:!1,min:80,max:600,inRange:{colorLightness:[0,1]}},series:[{name:"访问来源",type:"pie",radius:"55%",center:["50%","50%"],data:[{value:335,name:"行政人事部 25%"},{value:310,name:"后勤部"},{value:274,name:"技术部"},{value:235,name:"采购部"},{value:400,name:"销售部"},{value:200,name:"财务部"},{value:450,name:"研发部"}].sort((function(t,e){return t.value-e.value}))}]},expenditureData:[],budgetData:[]}},mounted:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,r,n,o=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:y(["indicators","budget","indicatorsPolyline"]),e=this.option.xAxis[0].data,r=this.option.series[0].data,n=this.option.series[1].data,r.forEach((function(t,r){o.expenditureData.push({name:e[r],value:t}),o.budgetData.push({name:e[r],value:n[r]||0})})),setTimeout((function(){o.setMapEcharts(),o.setIndicatorsEcaharts(),o.setEconomicEcharts(),o.setExpenditureEcharts(),o.setDudgetEcharts(),o.setIndicatorsPolyline()}));case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{setExpenditureEcharts:function(){var t=this;this.expenditure=m.a.init(document.getElementById("expenditure"));var e=this.expenditurevOption;this.expenditure.setOption(e),this.expenditure.on("click",(function(e){t.$router.push({name:"user"})}))},setIndicatorsEcaharts:function(){var t=this;this.indicators=m.a.init(document.getElementById("indicators")),this.indicators.setOption(this.option),this.indicators.on("click",(function(e){t.$router.push({name:"asset"})}))},setEconomicEcharts:function(){var t=this;this.economic=m.a.init(document.getElementById("economic")),this.economic.setOption(this.economicOption),this.economic.on("click",(function(e){t.$router.push({name:"investmentBank"})}))},setDudgetEcharts:function(){var t=this;this.budget=m.a.init(document.getElementById("budget"));var e={text:"预算金额占比图",left:"center",top:20},r=w(w({},this.economicOption),{},{title:e});r.series[0].data=this.budgetData.sort((function(t,e){return t-e})),this.budget.setOption(r),this.budget.on("click",(function(e){t.$router.push({name:"board"})}))},setIndicatorsPolyline:function(){var t=this;this.indicatorsPolyline=m.a.init(document.getElementById("indicatorsPolyline"));var e=this.indicatorsPolylineOption;this.indicatorsPolyline.setOption(e),this.indicatorsPolyline.getZr().on("click",(function(e){t.$router.push({name:"asgraduateSchoolset"})}))},setMapEcharts:function(){var t=this;this.map=m.a.init(document.getElementById("map"));var e=Object.keys(v).map((function(t){return{name:t,value:Math.floor(100*Math.random()+1)}})),r={title:{text:"中泰营业部分部",top:20,left:20},tooltip:{transitionDuration:0},dataRange:{show:!1,min:0,max:1e3,text:["High","Low"],realtime:!0,calculable:!0,color:["antiquewhite","coral","pink"]},geo:{map:"china",roam:!0,zoom:1.2,label:{normal:{show:!0,textStyle:{color:"rgba(0,0,0,0.4)"}}},itemStyle:{normal:{borderColor:"rgba(0, 0, 0, 0.2)"},emphasis:Object(i["a"])({areaColor:null,shadowOffsetX:0,shadowOffsetY:0,shadowBlur:20,borderWidth:0,shadowColor:"rgba(0, 0, 0, 0.5)"},"areaColor","#E33E33")}},series:[{type:"scatter",coordinateSystem:"geo"},{name:"营业网点",type:"map",geoIndex:0,data:e}]};this.map.setOption(r),this.map.on("click",(function(e){t.$router.push({name:"economic"})}))}},beforeDestroy:function(){}},x=b,E=Object(h["a"])(x,n,o,!1,null,null,null);e["default"]=E.exports},b449:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=L(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",f="executing",p="completed",d={};function m(){}function y(){}function v(){}var g={};g[i]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(S([])));b&&b!==r&&n.call(b,i)&&(g=b);var x=v.prototype=m.prototype=Object.create(g);function E(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function O(t,e){function r(o,i,a,c){var s=u(t[o],t,i);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var o;function i(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function L(t,e,r){var n=l;return function(o,i){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return D()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var s=u(t,e,r);if("normal"===s.type){if(n=r.done?p:h,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function S(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:D}}function D(){return{value:e,done:!0}}return y.prototype=x.constructor=v,v.constructor=y,v[c]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(O.prototype),O.prototype[a]=function(){return this},t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},bdaa:function(t,e,r){"use strict";var n=r("cebe"),o=r.n(n),i=r("f121"),a=r("a18c"),c=r("025e");window.axiosCancel=[];var s=i["a"].url.basicUrl,u=o.a.create({baseURL:s,timeout:0,maxContentLength:2e3,transformResponse:[function(t){try{t=JSON.parse(t)}catch(e){t={}}return 403===t.status&&(Object(c["e"])(),a["a"].push("/user")),t}]});u.interceptors.request.use((function(t){return t.cancelToken=new n["CancelToken"]((function(t){window.axiosCancel.push({cancel:t})})),t}),(function(t){return Promise.reject(t)})),u.interceptors.response.use((function(t){}),(function(t){return Promise.reject(t)}))}}]);