!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=3)}([function(t,e,i){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=function(t,e){var i=t[1]||"",n=t[3];if(!n)return i;if(e&&"function"==typeof btoa){var r=(s=n,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),o=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[i].concat(o).concat([r]).join("\n")}var s,a,l;return[i].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,n){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(n)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(r[s]=!0)}for(var a=0;a<t.length;a++){var l=[].concat(t[a]);n&&r[l[0]]||(i&&(l[2]?l[2]="".concat(i," and ").concat(l[2]):l[2]=i),e.push(l))}},e}},function(t,e,i){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},function(t,e,i){"use strict";e.a=i.p+"708d168370568b41d56eeaa44c8bac7d.woff"},function(t,e,i){"use strict";i.r(e);i(4);class n{constructor(t="10000",e=".slider",i="#slider-container"){this.slider=document.querySelector(e),this.container=document.querySelector(i),this.width=0,this.oldWidth=0,this.duration=parseInt(t),this.start=0,this.refresh=0,this._prevStop=!1,this._stop=!1,this._oldTimestamp=0}animate(){if(Array.prototype.slice.call(this.slider.querySelectorAll("img")).filter(t=>0===t.naturalWidth).length>0)return void window.requestAnimationFrame(this.animate.bind(this));this.oldWidth=this.slider.offsetWidth;const t='<span class="slider-extra">'+this.slider.innerHTML+"</span>";this.slider.innerHTML+=t,this.width=this.slider.offsetWidth;const e=2*screen.width;for(;this.width<e;)this.slider.innerHTML+=t,this.width=this.slider.width;this.slider.querySelector(".slider-extra:last-child").classList.add("slider-last"),window.requestAnimationFrame(this.controlAnimation.bind(this))}halt(){this._stop=!0,this._prevStop=!1}go(){this._stop=!1,this._prevStop=!0}stagnate(){this.container.style.overflowX="scroll"}controlAnimation(t){if(!0===this._stop)!1===this._prevStop&&(this.slider.style.marginLeft=getComputedStyle(this.slider).marginLeft,this._prevStop=!0,this._oldTimestamp=t);else if(!1===this._stop&&!0===this._prevStop)this._prevStop=!1,this.start=this.start+(t-this._oldTimestamp);else{if(this.refresh>=1)return this.start=t,this.slider.style.marginLeft=0,this.refresh=0,void window.requestAnimationFrame(this.controlAnimation.bind(this));t-this.start>=this.duration&&(this.refresh=1);const e=(t-this.start)/this.duration*this.oldWidth;this.slider.style.marginLeft=-e+"px"}window.requestAnimationFrame(this.controlAnimation.bind(this))}getIeWidth(){this.slider.style.marginLeft="-99999px"}ie11Fix(){this.slider.querySelector(".slider-last").style.position="absolute"}}document.addEventListener("DOMContentLoaded",(function(){const t=new n(2e4),e=function(){var t=window.navigator.userAgent,e=t.indexOf("MSIE ");if(e>0)return parseInt(t.substring(e+5,t.indexOf(".",e)),10);if(t.indexOf("Trident/")>0){var i=t.indexOf("rv:");return parseInt(t.substring(i+3,t.indexOf(".",i)),10)}var n=t.indexOf("Edge/");return n>0&&parseInt(t.substring(n+5,t.indexOf(".",n)),10)}();!1!==e&&e<10?t.stagnate():(!1!==e&&e<12&&t.getIeWidth(),t.animate(),11===e&&setTimeout(t.ie11Fix.bind(t),1e3))}))},function(t,e,i){var n=i(5),r=i(6);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};n(r,o);t.exports=r.locals||{}},function(t,e,i){"use strict";var n,r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},o=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}(),s=[];function a(t){for(var e=-1,i=0;i<s.length;i++)if(s[i].identifier===t){e=i;break}return e}function l(t,e){for(var i={},n=[],r=0;r<t.length;r++){var o=t[r],l=e.base?o[0]+e.base:o[0],d=i[l]||0,c="".concat(l," ").concat(d);i[l]=d+1;var u=a(c),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(s[u].references++,s[u].updater(f)):s.push({identifier:c,updater:v(f,e),references:1}),n.push(c)}return n}function d(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var r=i.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var s=o(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var c,u=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function f(t,e,i,n){var r=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=u(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function h(t,e,i){var n=i.css,r=i.media,o=i.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),o&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var p=null,m=0;function v(t,e){var i,n,r;if(e.singleton){var o=m++;i=p||(p=d(e)),n=f.bind(null,i,o,!1),r=f.bind(null,i,o,!0)}else i=d(e),n=h.bind(null,i,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var i=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<i.length;n++){var r=a(i[n]);s[r].references--}for(var o=l(t,e),d=0;d<i.length;d++){var c=a(i[d]);0===s[c].references&&(s[c].updater(),s.splice(c,1))}i=o}}}},function(t,e,i){"use strict";i.r(e);var n=i(0),r=i.n(n),o=i(1),s=i.n(o),a=i(2),l=r()(!1),d=s()(a.a);l.push([t.i,"@font-face{font-family:'Ginto';src:url("+d+") format(\"woff\")}body{font-family:'Ginto';margin:0}.link--underline{color:black}.awardsblock{display:grid;grid-template-columns:2fr 1fr;grid-template-rows:auto auto}.awardsblock__container{grid-column:1 / span 1;grid-row:1 / span 1;padding-left:1vw}.awardsblock__h{display:flex;flex-direction:column;font-size:2vw}#slider-container{grid-column:1 / span 2;grid-row:2 / span 1;width:100vw;margin:0 auto;overflow:hidden}.slider{position:absolute;display:flex;flex-flow:row nowrap}.slider-instant{transition:none}.slider-animate{margin-left:0}.slider-extra{display:flex;flex-flow:row nowrap}.slider-last{min-width:100vw;max-width:100vw;overflow:hidden}.slider span{margin-right:30px}.slider .slider-extra{margin-right:0}.slider img{height:inherit;vertical-align:inherit;border:inherit;width:auto;height:auto;max-width:400px;max-height:400px}\n",""]),e.default=l}]);