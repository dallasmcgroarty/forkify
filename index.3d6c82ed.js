var e,t,r,n,i,a,o,s,c,u,l,d,p,h,f,g,v=globalThis;function y(e){return e&&e.__esModule?e.default:e}var m={},b={},_=function(e){return e&&e.Math===Math&&e};b=_("object"==typeof globalThis&&globalThis)||_("object"==typeof window&&window)||_("object"==typeof self&&self)||_("object"==typeof v&&v)||_("object"==typeof b&&b)||function(){return this}()||Function("return this")();var w={},k={};w=!(k=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var E={},S={};S=!k(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var $=Function.prototype.call;E=S?$.bind($):function(){return $.apply($,arguments)};var O={}.propertyIsEnumerable,j=Object.getOwnPropertyDescriptor;n=j&&!O.call({1:2},1)?function(e){var t=j(this,e);return!!t&&t.enumerable}:O;var L={};L=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var x={},P={},M={},T=Function.prototype,I=T.call,H=S&&T.bind.bind(I,I),N={},q=(M=S?H:function(e){return function(){return I.apply(e,arguments)}})({}.toString),F=M("".slice);N=function(e){return F(q(e),8,-1)};var R=Object,A=M("".split);P=k(function(){return!R("z").propertyIsEnumerable(0)})?function(e){return"String"===N(e)?A(e,""):R(e)}:R;var C={},D={};D=function(e){return null==e};var W=TypeError;C=function(e){if(D(e))throw new W("Can't call method on "+e);return e},x=function(e){return P(C(e))};var U={},G={},z={},B={},Y="object"==typeof document&&document.all;B=void 0===Y&&void 0!==Y?function(e){return"function"==typeof e||e===Y}:function(e){return"function"==typeof e},z=function(e){return"object"==typeof e?null!==e:B(e)};var J={},Q={};Q=function(e,t){var r;return arguments.length<2?(r=b[e],B(r)?r:void 0):b[e]&&b[e][t]};var V={};V=M({}.isPrototypeOf);var K={},X={},Z={},ee={};ee="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var et=b.process,er=b.Deno,en=et&&et.versions||er&&er.version,ei=en&&en.v8;ei&&(a=(i=ei.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!a&&ee&&(!(i=ee.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=ee.match(/Chrome\/(\d+)/))&&(a=+i[1]),Z=a;var ea=b.String;K=(X=!!Object.getOwnPropertySymbols&&!k(function(){var e=Symbol("symbol detection");return!ea(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&Z&&Z<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eo=Object;J=K?function(e){return"symbol"==typeof e}:function(e){var t=Q("Symbol");return B(t)&&V(t.prototype,eo(e))};var es={},ec={},eu={},el=String;eu=function(e){try{return el(e)}catch(e){return"Object"}};var ed=TypeError;ec=function(e){if(B(e))return e;throw new ed(eu(e)+" is not a function")},es=function(e,t){var r=e[t];return D(r)?void 0:ec(r)};var ep={},eh=TypeError;ep=function(e,t){var r,n;if("string"===t&&B(r=e.toString)&&!z(n=E(r,e))||B(r=e.valueOf)&&!z(n=E(r,e))||"string"!==t&&B(r=e.toString)&&!z(n=E(r,e)))return n;throw new eh("Can't convert object to primitive value")};var ef={},eg={},ev={};ev=!1;var ey={},em=Object.defineProperty;ey=function(e,t){try{em(b,e,{value:t,configurable:!0,writable:!0})}catch(r){b[e]=t}return t};var eb="__core-js_shared__",e_=eg=b[eb]||ey(eb,{});(e_.versions||(e_.versions=[])).push({version:"3.37.1",mode:ev?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",source:"https://github.com/zloirock/core-js"}),ef=function(e,t){return eg[e]||(eg[e]=t||{})};var ew={},ek={},eE=Object;ek=function(e){return eE(C(e))};var eS=M({}.hasOwnProperty);ew=Object.hasOwn||function(e,t){return eS(ek(e),t)};var e$={},eO=0,ej=Math.random(),eL=M(1..toString);e$=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eL(++eO+ej,36)};var ex=b.Symbol,eP=ef("wks"),eM=K?ex.for||ex:ex&&ex.withoutSetter||e$,eT=TypeError,eI=(ew(eP,e="toPrimitive")||(eP[e]=X&&ew(ex,e)?ex[e]:eM("Symbol."+e)),eP[e]);G=function(e,t){if(!z(e)||J(e))return e;var r,n=es(e,eI);if(n){if(void 0===t&&(t="default"),r=E(n,e,t),!z(r)||J(r))return r;throw new eT("Can't convert object to primitive value")}return void 0===t&&(t="number"),ep(e,t)},U=function(e){var t=G(e,"string");return J(t)?t:t+""};var eH={},eN={},eq=b.document,eF=z(eq)&&z(eq.createElement);eN=function(e){return eF?eq.createElement(e):{}},eH=!w&&!k(function(){return 7!==Object.defineProperty(eN("div"),"a",{get:function(){return 7}}).a});var eR=Object.getOwnPropertyDescriptor;r=w?eR:function(e,t){if(e=x(e),t=U(t),eH)try{return eR(e,t)}catch(e){}if(ew(e,t))return L(!E(n,e,t),e[t])};var eA={},eC={};eC=w&&k(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eD={},eW=String,eU=TypeError;eD=function(e){if(z(e))return e;throw new eU(eW(e)+" is not an object")};var eG=TypeError,ez=Object.defineProperty,eB=Object.getOwnPropertyDescriptor,eY="enumerable",eJ="configurable",eQ="writable";o=w?eC?function(e,t,r){if(eD(e),t=U(t),eD(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eQ in r&&!r[eQ]){var n=eB(e,t);n&&n[eQ]&&(e[t]=r.value,r={configurable:eJ in r?r[eJ]:n[eJ],enumerable:eY in r?r[eY]:n[eY],writable:!1})}return ez(e,t,r)}:ez:function(e,t,r){if(eD(e),t=U(t),eD(r),eH)try{return ez(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eG("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eA=w?function(e,t,r){return o(e,t,L(1,r))}:function(e,t,r){return e[t]=r,e};var eV={},eK={},eX=Function.prototype,eZ=w&&Object.getOwnPropertyDescriptor,e0=ew(eX,"name")&&(!w||w&&eZ(eX,"name").configurable),e1={},e9=M(Function.toString);B(eg.inspectSource)||(eg.inspectSource=function(e){return e9(e)}),e1=eg.inspectSource;var e2={},e4={},e3=b.WeakMap;e4=B(e3)&&/native code/.test(String(e3));var e7={},e5=ef("keys");e7=function(e){return e5[e]||(e5[e]=e$(e))};var e8={};e8={};var e6="Object already initialized",te=b.TypeError,tt=b.WeakMap;if(e4||eg.state){var tr=eg.state||(eg.state=new tt);tr.get=tr.get,tr.has=tr.has,tr.set=tr.set,s=function(e,t){if(tr.has(e))throw new te(e6);return t.facade=e,tr.set(e,t),t},c=function(e){return tr.get(e)||{}},u=function(e){return tr.has(e)}}else{var tn=e7("state");e8[tn]=!0,s=function(e,t){if(ew(e,tn))throw new te(e6);return t.facade=e,eA(e,tn,t),t},c=function(e){return ew(e,tn)?e[tn]:{}},u=function(e){return ew(e,tn)}}var ti=(e2={set:s,get:c,has:u,enforce:function(e){return u(e)?c(e):s(e,{})},getterFor:function(e){return function(t){var r;if(!z(t)||(r=c(t)).type!==e)throw new te("Incompatible receiver, "+e+" required");return r}}}).enforce,ta=e2.get,to=String,ts=Object.defineProperty,tc=M("".slice),tu=M("".replace),tl=M([].join),td=w&&!k(function(){return 8!==ts(function(){},"length",{value:8}).length}),tp=String(String).split("String"),th=eK=function(e,t,r){"Symbol("===tc(to(t),0,7)&&(t="["+tu(to(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!ew(e,"name")||e0&&e.name!==t)&&(w?ts(e,"name",{value:t,configurable:!0}):e.name=t),td&&r&&ew(r,"arity")&&e.length!==r.arity&&ts(e,"length",{value:r.arity});try{r&&ew(r,"constructor")&&r.constructor?w&&ts(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=ti(e);return ew(n,"source")||(n.source=tl(tp,"string"==typeof t?t:"")),e};Function.prototype.toString=th(function(){return B(this)&&ta(this).source||e1(this)},"toString"),eV=function(e,t,r,n){n||(n={});var i=n.enumerable,a=void 0!==n.name?n.name:t;if(B(r)&&eK(r,a,n),n.global)i?e[t]=r:ey(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:o(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tf={},tg={},tv={},ty={},tm={},tb={},t_=Math.ceil,tw=Math.floor;tb=Math.trunc||function(e){var t=+e;return(t>0?tw:t_)(t)},tm=function(e){var t=+e;return t!=t||0===t?0:tb(t)};var tk=Math.max,tE=Math.min;ty=function(e,t){var r=tm(e);return r<0?tk(r+t,0):tE(r,t)};var tS={},t$={},tO=Math.min;t$=function(e){var t=tm(e);return t>0?tO(t,9007199254740991):0},tS=function(e){return t$(e.length)};var tj=function(e){return function(t,r,n){var i,a=x(t),o=tS(a);if(0===o)return!e&&-1;var s=ty(n,o);if(e&&r!=r){for(;o>s;)if((i=a[s++])!=i)return!0}else for(;o>s;s++)if((e||s in a)&&a[s]===r)return e||s||0;return!e&&-1}},tL={includes:tj(!0),indexOf:tj(!1)}.indexOf,tx=M([].push);tv=function(e,t){var r,n=x(e),i=0,a=[];for(r in n)!ew(e8,r)&&ew(n,r)&&tx(a,r);for(;t.length>i;)ew(n,r=t[i++])&&(~tL(a,r)||tx(a,r));return a};var tP=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return tv(e,tP)},d=Object.getOwnPropertySymbols;var tM=M([].concat);tg=Q("Reflect","ownKeys")||function(e){var t=l(eD(e));return d?tM(t,d(e)):t},tf=function(e,t,n){for(var i=tg(t),a=0;a<i.length;a++){var s=i[a];ew(e,s)||n&&ew(n,s)||o(e,s,r(t,s))}};var tT={},tI=/#|\.prototype\./,tH=function(e,t){var r=tq[tN(e)];return r===tR||r!==tF&&(B(t)?k(t):!!t)},tN=tH.normalize=function(e){return String(e).replace(tI,".").toLowerCase()},tq=tH.data={},tF=tH.NATIVE="N",tR=tH.POLYFILL="P";tT=tH,m=function(e,t){var n,i,a,o,s,c=e.target,u=e.global,l=e.stat;if(n=u?b:l?b[c]||ey(c,{}):b[c]&&b[c].prototype)for(i in t){if(o=t[i],a=e.dontCallGetSet?(s=r(n,i))&&s.value:n[i],!tT(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==a){if(typeof o==typeof a)continue;tf(o,a)}(e.sham||a&&a.sham)&&eA(o,"sham",!0),eV(n,i,o,e)}};var tA={},tC={},tD=Function.prototype,tW=tD.apply,tU=tD.call;tC="object"==typeof Reflect&&Reflect.apply||(S?tU.bind(tW):function(){return tU.apply(tW,arguments)});var tG={},tz={},tB=(tz=function(e){if("Function"===N(e))return M(e)})(tz.bind);tG=function(e,t){return ec(e),void 0===t?e:S?tB(e,t):function(){return e.apply(t,arguments)}};var tY={};tY=Q("document","documentElement");var tJ={};tJ=M([].slice);var tQ={},tV=TypeError;tQ=function(e,t){if(e<t)throw new tV("Not enough arguments");return e};var tK={};tK=/(?:ipad|iphone|ipod).*applewebkit/i.test(ee);var tX={};tX="process"===N(b.process);var tZ=b.setImmediate,t0=b.clearImmediate,t1=b.process,t9=b.Dispatch,t2=b.Function,t4=b.MessageChannel,t3=b.String,t7=0,t5={},t8="onreadystatechange";k(function(){p=b.location});var t6=function(e){if(ew(t5,e)){var t=t5[e];delete t5[e],t()}},re=function(e){return function(){t6(e)}},rt=function(e){t6(e.data)},rr=function(e){b.postMessage(t3(e),p.protocol+"//"+p.host)};tZ&&t0||(tZ=function(e){tQ(arguments.length,1);var t=B(e)?e:t2(e),r=tJ(arguments,1);return t5[++t7]=function(){tC(t,void 0,r)},h(t7),t7},t0=function(e){delete t5[e]},tX?h=function(e){t1.nextTick(re(e))}:t9&&t9.now?h=function(e){t9.now(re(e))}:t4&&!tK?(g=(f=new t4).port2,f.port1.onmessage=rt,h=tG(g.postMessage,g)):b.addEventListener&&B(b.postMessage)&&!b.importScripts&&p&&"file:"!==p.protocol&&!k(rr)?(h=rr,b.addEventListener("message",rt,!1)):h=t8 in eN("script")?function(e){tY.appendChild(eN("script"))[t8]=function(){tY.removeChild(this),t6(e)}}:function(e){setTimeout(re(e),0)});var rn=(tA={set:tZ,clear:t0}).clear;m({global:!0,bind:!0,enumerable:!0,forced:b.clearImmediate!==rn},{clearImmediate:rn});var ri=tA.set,ra={},ro={};ro="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rs=b.Function,rc=/MSIE .\./.test(ee)||ro&&((t=b.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));ra=function(e,t){var r=t?2:1;return rc?function(n,i){var a=tQ(arguments.length,1)>r,o=B(n)?n:rs(n),s=a?tJ(arguments,r):[],c=a?function(){tC(o,this,s)}:o;return t?e(c,i):e(c)}:e};var ru=b.setImmediate?ra(ri,!1):ri;m({global:!0,bind:!0,enumerable:!0,forced:b.setImmediate!==ru},{setImmediate:ru});var rl=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,a){var o,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return i(c,"_invoke",{value:(o=new j(a||[]),s=p,function(r,i){if(s===h)throw Error("Generator is already running");if(s===f){if("throw"===r)throw i;return{value:t,done:!0}}for(o.method=r,o.arg=i;;){var a=o.delegate;if(a){var c=function e(r,n){var i=n.method,a=r.iterator[i];if(a===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var o=d(a,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var s=o.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(a,o);if(c){if(c===g)continue;return c}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(s===p)throw s=f,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);s=h;var u=d(e,n,o);if("normal"===u.type){if(s=o.done?f:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:o.done}}"throw"===u.type&&(s=f,o.method="throw",o.arg=u.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",h="executing",f="completed",g={};function v(){}function y(){}function m(){}var b={};u(b,o,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(L([])));w&&w!==r&&n.call(w,o)&&(b=w);var k=m.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,a){function o(){return new t(function(r,o){!function r(i,a,o,s){var c=d(e[i],e,a);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,o,s)},function(e){r("throw",e,o,s)}):t.resolve(l).then(function(e){u.value=e,o(u)},function(e){return r("throw",e,o,s)})}}(i,a,r,o)})}return r=r?r.then(o,o):o()}})}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function L(e){if(null!=e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw TypeError(typeof e+" is not iterable")}return y.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new S(l(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then(function(e){return e.done?e.value:o.next()})},E(k),u(k,c,"Generator"),u(k,o,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else if(u){if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return(o.type=e,o.arg=t,a)?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rl}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rl:Function("r","regeneratorRuntime = r")(rl)}const rd="https://forkify-api.herokuapp.com/api/v2/recipes",rp="561859fb-715f-4d54-8acd-8e1ec3f546c5",rh=async e=>{try{let t=await Promise.race([fetch(e),new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),r=await t.json();if(!t.ok)throw Error(`${r.message} (${t.status})`);return r}catch(e){throw e}},rf=async(e,t)=>{try{let r=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),n=await r.json();if(!r.ok)throw Error(`${r.message} (${r.status})`);return n}catch(e){throw e}},rg={recipe:{},search:{query:"",results:[],resultsPerPage:10,page:1},bookmarks:[]},rv=async e=>{try{let{recipe:t}=(await rh(`${rd}/${e}?key=${rp}`)).data;rg.recipe=t,rg.bookmarks.some(e=>e.id===rg.recipe.id)?rg.recipe.bookmarked=!0:rg.recipe.bookmarked=!1,console.log(rg.recipe)}catch(e){throw e}},ry=async e=>{try{let t=await rh(`${rd}?search=${e}&key=${rp}`);rg.search.query=e,rg.search.results=t.data.recipes.map(e=>e),rg.search.page=1}catch(e){throw e}},rm=(e=rg.search.page)=>{rg.search.page=e;let t=(e-1)*rg.search.resultsPerPage,r=e*rg.search.resultsPerPage;return rg.search.results.slice(t,r)},rb=e=>{rg.recipe.ingredients.forEach(t=>{null!==t.quantity&&(t.quantity=t.quantity*e/rg.recipe.servings)}),rg.recipe.servings=e},r_=()=>{localStorage.setItem("bookmarks",JSON.stringify(rg.bookmarks))},rw=e=>{rg.bookmarks.push(e),e.id===rg.recipe.id&&(rg.recipe.bookmarked=!0),r_()},rk=e=>{let t=rg.bookmarks.findIndex(t=>t.id===e);rg.bookmarks.splice(t,1),e===rg.recipe.id&&(rg.recipe.bookmarked=!1),r_()};localStorage.getItem("bookmarks")&&(rg.bookmarks=JSON.parse(localStorage.getItem("bookmarks")));const rE=async e=>{try{let t=Object.entries(e).filter(e=>e[0].includes("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format!");let[r,n,i]=t;return{quantity:r?Number(r):null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},{recipe:n}=(await rf(`${rd}?key=${rp}`,r)).data;rg.recipe=n,rw(rg.recipe)}catch(e){throw e}};var rS={};rS=new URL("icons.c14567a0.svg",import.meta.url).toString();var r$=class{_data;render(e,t=!0){return!!this.verifyData(e)&&(t?void(this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",this._generateMarkup())):this._generateMarkup())}verifyData(e){return!e||Array.isArray(e)&&0==e.length?this.renderError():(this._data=e,!!this._data&&0!=Object.keys(this._data).length||(this._renderNoRecipe(),!1))}update(e){this._data=e;let t=Array.from(document.createRange().createContextualFragment(this._generateMarkup()).querySelectorAll("*")),r=Array.from(this._parentElement.querySelectorAll("*"));t.forEach((e,t)=>{let n=r[t];e.isEqualNode(n)||e.firstChild?.nodeValue.trim()===""||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach(e=>n.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}_renderNoRecipe(){this._clear(),this._parentElement.innerHTML="<h1>Recipe does not exist.</h1>"}renderSpinner=()=>{let e=`<div class="spinner">
        <svg>
          <use href="${y(rS)}#icon-loader"></use>
        </svg>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)};renderMessage=(e=this._message)=>{let t=`<div class="error">
      <div>
        <svg>
          <use href="${y(rS)}#icon-smile"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)};renderError=(e=this._errorMessage)=>{let t=`<div class="error">
      <div>
        <svg>
          <use href="${y(rS)}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}},rO={};function rj(e,t,r,n,i){var a,o,s;let c=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&c.push(t);let u=0,l=e,d=t;for(;u<=c.length;)l%c[u]==0&&d%c[u]==0?(c[u],l/=c[u],d/=c[u]):u++;return a=d,o=l,s=r,1===a&&1===o?(s=`${n}${(parseInt(s)+1).toString()}`,`${s}`):0===o?`${n}${s}`:"0"==s?`${n}${o}/${a}`:`${n}${s} ${o}/${a}`}rO=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),a=i[0];if("0"==r&&"0"!==a)return a;if("0"==r&&"0"==a)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==a)return`${a} 99/100`;if("99"==r&&"0"==a)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return a;let o=r.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!o||!(r.length>2)){var s,c;return s=r,c=t,rj(parseInt(s,10),Math.pow(10,s.length),a,c,!1)}{let e=o[0].split("").reverse().join(""),n=o[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,r,n,i){let a=e.length-r.length>=1?e.length-r.length:1,o=Math.pow(10,a),s=parseFloat(`0.${e}`),c=Math.pow(10,t.length);return rj(Math.round((s*c-s)*Math.pow(10,a)),(c-1)*o,n,i,!0)}(r,n,e,a,t)}};class rL extends r${_parentElement=document.querySelector(".recipe");_errorMessage="Uh Oh! That Recipe does not exist!";addHandlerRender=e=>{["hashchange","load"].forEach(t=>window.addEventListener(t,e))};addHandlerUpdateServings=e=>{this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--update-servings");r&&-1!=r.dataset.updateTo&&0!=r.dataset.updateTo&&e(r.dataset.updateTo)})};addHandlerAddBookmark=e=>{this._parentElement.addEventListener("click",t=>{t.target.closest(".bookmark")&&e()})};_generateMarkup(){return`<figure class="recipe__fig">
        <img src="${this._data.image_url}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${y(rS)}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cooking_time}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${y(rS)}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button data-update-to="${this._data.servings-1}" class="btn--tiny btn--update-servings btn--decrease-servings">
              <svg>
                <use href="${y(rS)}#icon-minus-circle"></use>
              </svg>
            </button>
            <button data-update-to="${Number(this._data.servings)+1}" class="btn--tiny btn--update-servings btn--increase-servings">
              <svg>
                <use href="${y(rS)}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
          <svg>
            <use href="${y(rS)}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round bookmark">
          <svg class="">
            <use href="${y(rS)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
        ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${this._data.source_url}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${y(rS)}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>`}_generateMarkupIngredient(e){return`<li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${y(rS)}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${null==e.quantity?"":y(rO)(e.quantity).toString()}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${e.unit}</span>
        ${e.description}
      </div>
    </li>`}}class rx{_parentElement=document.querySelector(".search");getQuery=()=>{let e=this._parentElement.querySelector("input").value;return this._clearInput(),e};_clearInput=()=>{this._parentElement.querySelector("input").value=""};addHandlerSearch=e=>{this._parentElement.addEventListener("submit",t=>{t.preventDefault(),e()})}}var rP=class extends r${_parentElement="";addHandlerRender=e=>{["load"].forEach(t=>window.addEventListener(t,e))};_generateMarkup=()=>{let e=window.location.hash.slice(1);return this._data.map(t=>`
      <li class="preview">
        <a class="preview__link ${t.id==e?"preview__link--active":""}" href="#${t.id}">
          <figure class="preview__fig">
            <img src="${t.image_url}" alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${t.title}</h4>
            <p class="preview__publisher">${t.publisher}</p>
            <div class="preview__user-generated ${t.key?"":"hidden"}">
              <svg>
                <use href="${y(rS)}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `).join("")}};class rM extends rP{_parentElement=document.querySelector(".results");_errorMessage="Uh Oh! That Recipe does not exist!"}class rT extends rP{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet!";addHandlerRender=e=>{window.addEventListener("load",e)}}class rI extends r${_parentElement=document.querySelector(".pagination");addHandlerClick=e=>{this._parentElement.addEventListener("click",t=>{t.preventDefault(),e(Number(t.target.closest("button").dataset.page))})};_generateMarkup=()=>{let e=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===this._data.page&&e>1?`
        <button data-page="2" class="btn--inline pagination__btn--next">
          <span class="page">Page 2</span>
          <svg class="search__icon">
            <use href="${y(rS)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:1!==this._data.page||1!==e?this._data.page===e?`
        <button data-page="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${y(rS)}#icon-arrow-left"></use>
          </svg>
          <span class="page">Page ${e-1}</span>
        </button>
      `:`
      <button data-page="${this._data.page-1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${y(rS)}#icon-arrow-left"></use>
        </svg>
        <span class="page">Page ${this._data.page-1}</span>
      </button>
      <button data-page="${this._data.page+1}" class="btn--inline pagination__btn--next">
        <span class="page">Page ${this._data.page+1}</span>
        <svg class="search__icon">
          <use href="${y(rS)}#icon-arrow-right"></use>
        </svg>
      </button>
    `:void 0}}class rH extends r${_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded!";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}_addHandlerShowWindow=()=>{this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))};_addHandlerHideWindow=()=>{this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))};addHandlerUpload=e=>{this._parentElement.addEventListener("submit",t=>{t.preventDefault(),e(Object.fromEntries([...new FormData(this._parentElement)]))})};toggleWindow=()=>{this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}}const rN=new rL,rq=new rx,rF=new rM,rR=new rI,rA=new rT,rC=new rH,rD=async function(){try{let e=window.location.hash.slice(1);if(console.log(e),!e)return;rN.renderSpinner(),await rv(e);let{recipe:t}=rg;rN.render(t),rF.update(rm()),rA.update(rg.bookmarks)}catch(e){rN.renderError("Uh Oh! That Recipe does not exist!"),console.error(e)}},rW=async()=>{try{rF.renderSpinner();let e=rq.getQuery();if(!e){rF._clear();return}await ry(e),rF.render(rm()),rR.render(rg.search)}catch(e){rN.renderError("Uh Oh! No results found!")}},rU=async e=>{try{rC.renderSpinner(),await rE(e),rN.update(rg.recipe),rC.renderMessage(),rA.render(rg.bookmarks),window.history.pushState(null,"",`#${rg.recipe.id}`),setTimeout(()=>{rC.toggleWindow()},1e3)}catch(e){console.error(e),rC.renderError(e.message)}};rA.addHandlerRender(()=>{rA.render(rg.bookmarks)}),rN.addHandlerRender(rD),rN.addHandlerUpdateServings(e=>{rb(e),rN.update(rg.recipe)}),rN.addHandlerAddBookmark(()=>{rg.recipe.bookmarked?rk(rg.recipe.id):rw(rg.recipe),rN.update(rg.recipe),rA.render(rg.bookmarks)}),rq.addHandlerSearch(rW),rF.addHandlerRender(rW),rR.addHandlerClick((e=1)=>{rF.render(rm(e)),rR.render(rg.search)}),rC.addHandlerUpload(rU);
//# sourceMappingURL=index.3d6c82ed.js.map
