import{a as r}from"./_arrayMap-e86f6dbb.js";import{e as n,f as t,M as u,o as i,s as o,d as e,g as f,h as a,j as c,k as s,l as v,b as l,a as b}from"./isEqual-9a525ce2.js";import{i as p}from"./isObject-7039fcda.js";import{i as j}from"./isArray-80298bc7.js";import{i as d}from"./isSymbol-f24bedd7.js";import{t as m}from"./toString-0a9c1851.js";import{b as y,i as h,a as O}from"./isArrayLike-13c56347.js";import{a as w}from"./_assignValue-b07f6963.js";var g=Object.prototype.hasOwnProperty;function _(r){return y(r)?t(r,!0):function(r){if(!p(r))return function(r){var n=[];if(null!=r)for(var t in Object(r))n.push(t);return n}(r);var t=n(r),u=[];for(var i in r)("constructor"!=i||!t&&g.call(r,i))&&u.push(i);return u}(r)}var E=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,k=/^\w*$/;function x(r,n){if(j(r))return!1;var t=typeof r;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=r&&!d(r))||k.test(r)||!E.test(r)||null!=n&&r in Object(n)}function $(r,n){if("function"!=typeof r||null!=n&&"function"!=typeof n)throw new TypeError("Expected a function");var t=function(){var u=arguments,i=n?n.apply(this,u):u[0],o=t.cache;if(o.has(i))return o.get(i);var e=r.apply(this,u);return t.cache=o.set(i,e)||o,e};return t.cache=new($.Cache||u),t}$.Cache=u;var A,M,S,T=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,q=/\\(\\)?/g,L=(A=function(r){var n=[];return 46===r.charCodeAt(0)&&n.push(""),r.replace(T,(function(r,t,u,i){n.push(u?i.replace(q,"$1"):t||r)})),n},M=$(A,(function(r){return 500===S.size&&S.clear(),r})),S=M.cache,M);function V(r,n){return j(r)?r:x(r,n)?[r]:L(m(r))}function z(r){if("string"==typeof r||d(r))return r;var n=r+"";return"0"==n&&1/r==-1/0?"-0":n}function B(r,n){for(var t=0,u=(n=V(n,r)).length;null!=r&&t<u;)r=r[z(n[t++])];return t&&t==u?r:void 0}function C(r,n,t){var u=null==r?void 0:B(r,n);return void 0===u?t:u}var D=i(Object.getPrototypeOf,Object),F=Object.getOwnPropertySymbols?function(r){for(var n=[];r;)e(n,f(r)),r=D(r);return n}:o;function G(r){return r==r&&!p(r)}function H(r,n){return function(t){return null!=t&&t[r]===n&&(void 0!==n||r in Object(t))}}function I(r,n){return null!=r&&n in Object(r)}function J(r,n,t){for(var u=-1,i=(n=V(n,r)).length,o=!1;++u<i;){var e=z(n[u]);if(!(o=null!=r&&t(r,e)))break;r=r[e]}return o||++u!=i?o:!!(i=null==r?0:r.length)&&h(i)&&O(e,i)&&(j(r)||l(r))}function K(r){return"function"==typeof r?r:null==r?b:"object"==typeof r?j(r)?(i=r[1],x(u=r[0])&&G(i)?H(z(u),i):function(r){var n=C(r,u);return void 0===n&&n===i?function(r,n){return null!=r&&J(r,n,I)}(r,u):s(i,n,3)}):1==(t=function(r){for(var n=v(r),t=n.length;t--;){var u=n[t],i=r[u];n[t]=[u,i,G(i)]}return n}(n=r)).length&&t[0][2]?H(t[0][0],t[0][1]):function(r){return r===n||function(r,n,t,u){var i=t.length,o=i;if(null==r)return!o;for(r=Object(r);i--;){var e=t[i];if(e[2]?e[1]!==r[e[0]]:!(e[0]in r))return!1}for(;++i<o;){var f=(e=t[i])[0],a=r[f],v=e[1];if(e[2]){if(void 0===a&&!(f in r))return!1}else{var l,b=new c;if(!(void 0===l?s(v,a,3,u,b):l))return!1}}return!0}(r,0,t)}:function(r){return x(r)?(n=z(r),function(r){return null==r?void 0:r[n]}):function(r){return function(n){return B(n,r)}}(r);var n}(r);var n,t,u,i}var N=Object.prototype.hasOwnProperty;function P(r,n){return null!=r&&N.call(r,n)}function Q(r,n){return null!=r&&J(r,n,P)}function R(r){if("function"!=typeof r)throw new TypeError("Expected a function");return function(){var n=arguments;switch(n.length){case 0:return!r.call(this);case 1:return!r.call(this,n[0]);case 2:return!r.call(this,n[0],n[1]);case 3:return!r.call(this,n[0],n[1],n[2])}return!r.apply(this,n)}}function U(r,n,t,u){if(!p(r))return r;for(var i=-1,o=(n=V(n,r)).length,e=o-1,f=r;null!=f&&++i<o;){var a=z(n[i]),c=t;if("__proto__"===a||"constructor"===a||"prototype"===a)return r;if(i!=e){var s=f[a];void 0===(c=u?u(s,a,f):void 0)&&(c=p(s)?s:O(n[i+1])?[]:{})}w(f,a,c),f=f[a]}return r}function W(n,t){if(null==n)return{};var u=r(function(r){return a(r,_,F)}(n),(function(r){return[r]}));return t=K(t),function(r,n,t){for(var u=-1,i=n.length,o={};++u<i;){var e=n[u],f=B(r,e);t(f,e)&&U(o,V(e,r),f)}return o}(n,u,(function(r,n){return t(r,n[0])}))}export{C as a,K as b,D as g,Q as h,R as n,W as p}