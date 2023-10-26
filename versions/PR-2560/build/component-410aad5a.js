/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var n=function(t,r){n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r))n[r]=t[r]};return n(t,r)};function t(t,r){if(typeof r!=="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");n(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var r=function(){r=Object.assign||function n(t){for(var r,e=1,i=arguments.length;e<i;e++){r=arguments[e];for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o))t[o]=r[o]}return t};return r.apply(this,arguments)};function e(n){var t=typeof Symbol==="function"&&Symbol.iterator,r=t&&n[t],e=0;if(r)return r.call(n);if(n&&typeof n.length==="number")return{next:function(){if(n&&e>=n.length)n=void 0;return{value:n&&n[e++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function i(n,t){var r=typeof Symbol==="function"&&n[Symbol.iterator];if(!r)return n;var e=r.call(n),i,o=[],u;try{while((t===void 0||t-- >0)&&!(i=e.next()).done)o.push(i.value)}catch(n){u={error:n}}finally{try{if(i&&!i.done&&(r=e["return"]))r.call(e)}finally{if(u)throw u.error}}return o}function o(n,t,r){if(r||arguments.length===2)for(var e=0,i=t.length,o;e<i;e++){if(o||!(e in t)){if(!o)o=Array.prototype.slice.call(t,0,e);o[e]=t[e]}}return n.concat(o||Array.prototype.slice.call(t))}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var u=function(){function n(n){if(n===void 0){n={}}this.adapter=n}Object.defineProperty(n,"cssClasses",{get:function(){return{}},enumerable:false,configurable:true});Object.defineProperty(n,"strings",{get:function(){return{}},enumerable:false,configurable:true});Object.defineProperty(n,"numbers",{get:function(){return{}},enumerable:false,configurable:true});Object.defineProperty(n,"defaultAdapter",{get:function(){return{}},enumerable:false,configurable:true});n.prototype.init=function(){};n.prototype.destroy=function(){};return n}();
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var f=function(){function n(n,t){var r=[];for(var e=2;e<arguments.length;e++){r[e-2]=arguments[e]}this.root=n;this.initialize.apply(this,o([],i(r)));this.foundation=t===undefined?this.getDefaultFoundation():t;this.foundation.init();this.initialSyncWithDOM()}n.attachTo=function(t){return new n(t,new u({}))};n.prototype.initialize=function(){var n=[];for(var t=0;t<arguments.length;t++){n[t]=arguments[t]}};n.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured "+"foundation class")};n.prototype.initialSyncWithDOM=function(){};n.prototype.destroy=function(){this.foundation.destroy()};n.prototype.listen=function(n,t,r){this.root.addEventListener(n,t,r)};n.prototype.unlisten=function(n,t,r){this.root.removeEventListener(n,t,r)};n.prototype.emit=function(n,t,r){if(r===void 0){r=false}var e;if(typeof CustomEvent==="function"){e=new CustomEvent(n,{bubbles:r,detail:t})}else{e=document.createEvent("CustomEvent");e.initCustomEvent(n,r,false,t)}this.root.dispatchEvent(e)};return n}();export{u as M,r as _,f as a,e as b,t as c,o as d,i as e};
//# sourceMappingURL=component-410aad5a.js.map