!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return r[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){n[t]=e},e.parcelRequired7c6=o),o.register("8slrw",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if(Array.isArray(t))return t}})),o.register("7AJDX",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}})),o.register("ifqQW",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!t)return;if("string"==typeof t)return n.default(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(t,e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}}));var i={};function a(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,u,"next",t)}function u(t){a(i,n,o,c,u,"throw",t)}c(void 0)}))}};var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(t,e){return u.default(t)||s.default(t,e)||f.default(t,e)||l.default()};var u=p(o("8slrw")),s=p(o("7AJDX")),l=p(o("ifqQW")),f=p(o("auk6i"));function p(t){return t&&t.__esModule?t:{default:t}}var h={},d=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new P(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return M()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:p,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",y={};function v(){}function m(){}function g(){}var w={};u(w,i,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(S([])));x&&x!==r&&n.call(x,i)&&(w=x);var _=g.prototype=v.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function S(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:M}}function M(){return{value:e,done:!0}}return m.prototype=g,u(_,"constructor",g),u(g,"constructor",m),m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},E(L.prototype),u(L.prototype,a,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(_),u(_,c,"Generator"),u(_,i,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(h);try{regeneratorRuntime=d}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=d:Function("r","regeneratorRuntime = r")(d)}var y="live_3vXQRfUY7Uxv5L96slToGHu6zIfgjnAXXRObjq7ntvAChfIy5RUhuKQSotYEUw7t";function v(t){return m.apply(this,arguments)}function m(){return(m=t(i)(t(h).mark((function e(r){var n,o;return t(h).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(r,{headers:{"x-api-key":y}});case 3:if((n=t.sent).ok){t.next=6;break}throw new Error("Request failed");case 6:return t.next=8,n.json();case 8:return o=t.sent,t.abrupt("return",o);case 12:throw t.prev=12,t.t0=t.catch(0),new Error("Request failed");case 15:case"end":return t.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function g(){return w.apply(this,arguments)}function w(){return(w=t(i)(t(h).mark((function e(){var r;return t(h).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.thecatapi.com/v1/breeds",t.prev=1,t.next=4,v("https://api.thecatapi.com/v1/breeds");case 4:return r=t.sent,t.abrupt("return",r);case 8:throw t.prev=8,t.t0=t.catch(1),new Error("Failed to fetch breeds");case 11:case"end":return t.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function b(t){return x.apply(this,arguments)}function x(){return(x=t(i)(t(h).mark((function e(r){var n,o,i;return t(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.thecatapi.com/v1/images/search?breed_ids=".concat(r),e.prev=1,e.t0=t(c),e.next=5,v(n);case 5:return e.t1=e.sent,o=(0,e.t0)(e.t1,1),i=o[0],e.abrupt("return",i);case 11:throw e.prev=11,e.t2=e.catch(1),new Error("Failed to fetch cat by breed");case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}var _=document.querySelector(".breed-select"),E=document.querySelector(".loader"),L=document.querySelector(".error"),O=document.querySelector(".cat-info");document.addEventListener("DOMContentLoaded",(function(){E.style.display="block",_.style.display="none",L.style.display="none",O.style.display="none",g().then((function(t){t.forEach((function(t){var e=document.createElement("option");e.value=t.id,e.textContent=t.name,_.appendChild(e)})),E.style.display="none",_.style.display="block"})).catch((function(){E.style.display="none",L.style.display="block"}))})),_.addEventListener("change",(function(){var t=_.value;E.style.display="block",L.style.display="none",O.style.display="none",b(t).then((function(t){O.innerHTML='\n        <img src="'.concat(t.url,'" alt="Cat Image" />\n        <h2>').concat(t.breeds[0].name,"</h2>\n        <p>").concat(t.breeds[0].description,"</p>\n        <p>Temperament: ").concat(t.breeds[0].temperament,"</p>\n      "),E.style.display="none",O.style.display="block"})).catch((function(){E.style.display="none",L.style.display="block"}))}))}();
//# sourceMappingURL=index.8369d3d4.js.map
