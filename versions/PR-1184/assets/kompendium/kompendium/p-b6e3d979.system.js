System.register(["./p-63e7add0.system.js"],(function(r,e){"use strict";var t,n,s,i,o,c;return{setters:[function(r){t=r.C;n=r.p;s=r.w;i=r.a;o=r.d;c=r.N}],execute:function(){var a=function(r){return"__sc_import_"+r.replace(/\s|-/g,"_")};var u=r("a",(function(){if(!(t&&t.supports&&t.supports("color","var(--c)"))){return e.import("./p-73a136a1.system.js").then((function(){if(n.$cssShim$=s.__cssshim){return n.$cssShim$.i()}else{return 0}}))}return i()}));var m=r("p",(function(){{n.$cssShim$=s.__cssshim}var r=Array.from(o.querySelectorAll("script")).find((function(r){return new RegExp("/"+c+"(\\.esm)?\\.js($|\\?|#)").test(r.src)||r.getAttribute("data-stencil-namespace")===c}));var t=r["data-opts"]||{};if("onbeforeload"in r&&!history.scrollRestoration){return{then:function(){}}}{t.resourcesUrl=new URL(".",new URL(r.getAttribute("data-resources-url")||r.src,s.location.href)).href;{p(t.resourcesUrl,r)}if(!s.customElements){return e.import("./p-e4297691.system.js").then((function(){return t}))}}return i(t)}));var p=function(r,e){var t=a(c);try{s[t]=new Function("w","return import(w);//"+Math.random())}catch(i){var n=new Map;s[t]=function(i){var c=new URL(i,r).href;var a=n.get(c);if(!a){var u=o.createElement("script");u.type="module";u.crossOrigin=e.crossOrigin;u.src=URL.createObjectURL(new Blob(["import * as m from '"+c+"'; window."+t+".m = m;"],{type:"application/javascript"}));a=new Promise((function(r){u.onload=function(){r(s[t].m);u.remove()}}));n.set(c,a);o.head.appendChild(u)}return a}}}}}}));