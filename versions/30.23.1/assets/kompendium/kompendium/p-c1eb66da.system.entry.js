var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,a){function o(t){try{l(r.next(t))}catch(e){a(e)}}function s(t){try{l(r["throw"](t))}catch(e){a(e)}}function l(t){t.done?n(t.value):i(t.value).then(o,s)}l((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return l([t,e])}}function l(o){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;i=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(o[0]===6&&n.label<a[1]){n.label=a[1];a=o;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(o);break}if(a[2])n.ops.pop();n.trys.pop();continue}o=e.call(t,n)}catch(s){o=[6,s];i=0}finally{r=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-63e7add0.system.js","./p-63cb6161.system.js","./p-670489c3.system.js","./p-5c59a970.system.js"],(function(t){"use strict";var e,n,r,i,a,o,s,l,c,u,h,p,d,f,m,v,b,g,y,w,k,x,_,P;return{setters:[function(t){e=t.r;n=t.h;r=t.g;i=t.c;a=t.e},function(t){o=t.A},function(t){s=t.m;l=t.a;c=t.s;u=t.b;h=t.c;p=t.d;d=t.e;f=t.f;m=t.g;v=t.h;b=t.i;g=t.j;y=t.k;w=t.l;k=t.n;x=t.o;_=t.p},function(t){P=t.s}],execute:function(){var O="*,*::before,*::after{-webkit-box-sizing:border-box;box-sizing:border-box}ul[class],ol[class]{padding:0}body,h1,h2,h3,h4,p,ul[class],ol[class],li,figure,figcaption,blockquote,dl,dd{margin:0}ul[class],ol[class]{list-style:none}a:not([class]){-webkit-text-decoration-skip:ink;text-decoration-skip-ink:auto}img{max-width:100%}input,button,textarea,select{font:inherit}@media (prefers-reduced-motion: reduce){*{-webkit-animation-duration:0.01ms !important;animation-duration:0.01ms !important;-webkit-animation-iteration-count:1 !important;animation-iteration-count:1 !important;-webkit-transition-duration:0.01ms !important;transition-duration:0.01ms !important;scroll-behavior:auto !important}}:root{--width-nav-panel:16rem}@-webkit-keyframes spin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.loading-screen{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:0;right:0;bottom:0;left:0}.loading-screen-icon{-webkit-animation:spin 0.35s linear infinite;animation:spin 0.35s linear infinite;border-radius:50%;border-style:solid;border-width:0.125rem;border-color:rgb(var(--color-blue-default));border-top-color:transparent;display:inline-block;height:1.25rem;width:1.25rem}.loading-screen-text{padding-left:0.75rem;color:rgb(var(--contrast-1100))}:host{display:block;margin:0;padding:0}main{padding:1.25rem 2rem;margin-left:var(--width-nav-panel)}main kompendium-guide{display:block;width:100%;max-width:60rem}@media (max-width: 1400px){main{padding-top:2.625rem;margin-left:0}}";var T=t("kompendium_app",function(){function t(t){e(this,t);this.path="/kompendium.json";this.onMessage=this.onMessage.bind(this)}t.prototype.componentWillLoad=function(){this.createWebSocket();this.fetchData()};t.prototype.createWebSocket=function(){if(this.socket){return}var t=L(location);this.socket=new WebSocket(t);this.socket.addEventListener("message",this.onMessage)};t.prototype.onMessage=function(t){var e;try{var n=JSON.parse(t.data);if(((e=n.buildLog)===null||e===void 0?void 0:e.progress)===1){this.fetchData()}}catch(r){console.error(r)}};t.prototype.fetchData=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,n;return __generator(this,(function(r){switch(r.label){case 0:return[4,fetch(this.path)];case 1:t=r.sent();e=this;return[4,t.json()];case 2:e.data=r.sent();n=this.data.types.map((function(t){return t.name}));P(n);return[2]}}))}))};t.prototype.render=function(){if(!this.data){return n("div",{class:"loading-screen"},n("div",{class:"loading-screen-icon"}),n("div",{class:"loading-screen-text"},"Loading..."))}return n("div",{class:"kompendium-body"},n("kompendium-navigation",{menu:this.data.menu,header:this.data.title,logo:this.data.logo}),n("main",{role:"main"},n("stencil-router",{historyType:"hash"},n("stencil-route-switch",{scrollTopOffset:0},n("stencil-route",{url:"/",component:"kompendium-markdown",componentProps:{text:this.data.readme},exact:true}),n("stencil-route",{url:"/component/:name/:section?",component:"kompendium-component",componentProps:{docs:this.data.docs}}),n("stencil-route",{url:"/type/:name",component:"kompendium-type",componentProps:{types:this.data.types}}),n("stencil-route",{component:"kompendium-guide",componentProps:{data:this.data}})))))};return t}());function L(t){var e=t.protocol==="https:"?"wss:":"ws:";return e+"//"+t.hostname+":"+t.port+"/"}T.style=O;var S="*,*::before,*::after{-webkit-box-sizing:border-box;box-sizing:border-box}ul[class],ol[class]{padding:0}body,h1,h2,h3,h4,p,ul[class],ol[class],li,figure,figcaption,blockquote,dl,dd{margin:0}ul[class],ol[class]{list-style:none}a:not([class]){-webkit-text-decoration-skip:ink;text-decoration-skip-ink:auto}img{max-width:100%}input,button,textarea,select{font:inherit}@media (prefers-reduced-motion: reduce){*{-webkit-animation-duration:0.01ms !important;animation-duration:0.01ms !important;-webkit-animation-iteration-count:1 !important;animation-iteration-count:1 !important;-webkit-transition-duration:0.01ms !important;transition-duration:0.01ms !important;scroll-behavior:auto !important}}:root{--width-nav-panel:16rem}:host{display:block;font-family:var(--kompendium-font-primary);--size-show-nav-panel-button:2.25rem}header a{text-decoration:none;color:unset}.nav-panel{-webkit-transition:margin 0.2s ease;transition:margin 0.2s ease;z-index:100;width:var(--width-nav-panel);height:100vh;position:fixed;background-color:rgb(var(--contrast-400));display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.nav-panel .panel-header{-ms-flex-direction:row;flex-direction:row;padding:1rem;border-bottom:1px solid rgb(var(--contrast-600));margin-bottom:0.5rem}.nav-panel .panel-header h1{text-transform:uppercase;font-size:1rem;font-weight:normal;letter-spacing:0.5ch;color:rgb(var(--contrast-800));margin:0.125rem 0 0.5rem 0}.nav-panel .panel-list{overflow-y:auto}.nav-panel .panel-list:not(.chapters){padding:0 0.25rem 2rem 0.25rem}.nav-panel__responsive-menu{-webkit-transition:background-color 0.2s ease, -webkit-box-shadow 0.2s ease, -webkit-transform 0.1s ease-out;transition:background-color 0.2s ease, -webkit-box-shadow 0.2s ease, -webkit-transform 0.1s ease-out;transition:background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease-out;transition:background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease-out, -webkit-box-shadow 0.2s ease, -webkit-transform 0.1s ease-out;-webkit-box-shadow:var(--button-shadow-normal);box-shadow:var(--button-shadow-normal);-webkit-transition:all 0.2s ease;transition:all 0.2s ease;display:none;cursor:pointer;position:absolute;top:0.75rem;right:calc((var(--size-show-nav-panel-button) * -1) - 1rem);width:var(--size-show-nav-panel-button);height:var(--size-show-nav-panel-button);margin:0.25rem;border-radius:50%;text-align:center;font-weight:bold;background-color:rgba(var(--contrast-200), 0.7);-webkit-backdrop-filter:blur(0.25rem);backdrop-filter:blur(0.25rem);color:rgb(var(--contrast-900))}.nav-panel__responsive-menu:hover{-webkit-box-shadow:var(--button-shadow-hovered);box-shadow:var(--button-shadow-hovered)}.nav-panel__responsive-menu:active{-webkit-box-shadow:var(--button-shadow-pressed);box-shadow:var(--button-shadow-pressed);-webkit-transform:translate3d(0, 0.08rem, 0);transform:translate3d(0, 0.08rem, 0)}.nav-panel__responsive-menu span{-webkit-transition:background-color 0.2s ease, opacity 0.15s ease 0.3s, -webkit-transform 0.2s ease 0.3s;transition:background-color 0.2s ease, opacity 0.15s ease 0.3s, -webkit-transform 0.2s ease 0.3s;transition:background-color 0.2s ease, transform 0.2s ease 0.3s, opacity 0.15s ease 0.3s;transition:background-color 0.2s ease, transform 0.2s ease 0.3s, opacity 0.15s ease 0.3s, -webkit-transform 0.2s ease 0.3s;display:block;position:absolute;left:0;right:0;margin:auto;height:0.125rem;width:1rem;border-radius:0.25rem;background-color:rgb(var(--contrast-900))}.nav-panel__responsive-menu span:nth-child(1){top:0.75rem}.nav-panel__responsive-menu span:nth-child(2),.nav-panel__responsive-menu span:nth-child(3){top:0;bottom:0}.nav-panel__responsive-menu span:nth-child(4){bottom:0.75rem}.nav-panel__responsive-menu:hover span{background-color:rgb(var(--contrast-1200))}@media (max-width: 1400px){.nav-panel{margin-left:calc(var(--width-nav-panel) * -1)}.nav-panel.display-nav-panel{margin-left:0;-webkit-box-shadow:0 0.09375rem 0.225rem 0 rgba(0, 0, 0, 0.232), 0 0.01875rem 0.05625rem 0 rgba(0, 0, 0, 0.208);box-shadow:0 0.09375rem 0.225rem 0 rgba(0, 0, 0, 0.232), 0 0.01875rem 0.05625rem 0 rgba(0, 0, 0, 0.208)}.nav-panel.display-nav-panel .nav-panel__responsive-menu{right:calc((var(--size-show-nav-panel-button) * -1) - 0.3125rem);border-radius:0 0.5rem 0.5rem 0}.nav-panel.display-nav-panel .nav-panel__responsive-menu span:nth-child(1),.nav-panel.display-nav-panel .nav-panel__responsive-menu span:nth-child(4){-webkit-transform:scaleX(0);transform:scaleX(0);opacity:0}.nav-panel.display-nav-panel .nav-panel__responsive-menu span:nth-child(2){-webkit-transform:rotate(45deg);transform:rotate(45deg)}.nav-panel.display-nav-panel .nav-panel__responsive-menu span:nth-child(3){-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.nav-panel__responsive-menu{display:block}}.panel-item{-webkit-transition:opacity 0.2s ease;transition:opacity 0.2s ease;width:100%;padding-right:0.75rem}.panel-link{display:grid;grid-auto-flow:column;grid-template-columns:1.25rem 1fr;line-height:1.75rem;color:rgb(var(--contrast-900));text-decoration:none;border-radius:0.375rem}.panel-link:hover,.panel-link.active{color:rgb(var(--color-blue-default))}.panel-link.active img{-webkit-transform:rotate(90deg) scale(0.8);transform:rotate(90deg) scale(0.8)}.panel-link img{-webkit-transition:-webkit-transform 0.2s ease;transition:-webkit-transform 0.2s ease;transition:transform 0.2s ease;transition:transform 0.2s ease, -webkit-transform 0.2s ease;-webkit-transform:scale(0.8);transform:scale(0.8);height:2rem}.link-text{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:100%;padding-left:0.5rem}.chapters{height:0;-webkit-transition:height 0.2s ease;transition:height 0.2s ease}.chapters.active{height:100%;padding-left:1.25rem}.chapters.active .panel-item{opacity:1;-webkit-transition-delay:0.2s;transition-delay:0.2s}.chapters.active .panel-item:nth-child(1){-webkit-transition-delay:0s;transition-delay:0s}.chapters.active .panel-item:nth-child(2){-webkit-transition-delay:0.04s;transition-delay:0.04s}.chapters.active .panel-item:nth-child(3){-webkit-transition-delay:0.06s;transition-delay:0.06s}.chapters.active .panel-item:nth-child(4){-webkit-transition-delay:0.08s;transition-delay:0.08s}.chapters.active .panel-item:nth-child(5){-webkit-transition-delay:0.1s;transition-delay:0.1s}.chapters.active .panel-item:nth-child(6){-webkit-transition-delay:0.12s;transition-delay:0.12s}.chapters.active .panel-item:nth-child(7){-webkit-transition-delay:0.14s;transition-delay:0.14s}.chapters.active .panel-item:nth-child(8){-webkit-transition-delay:0.15s;transition-delay:0.15s}.chapters.active .panel-item:nth-child(9){-webkit-transition-delay:0.16s;transition-delay:0.16s}.chapters.active .panel-item:nth-child(10){-webkit-transition-delay:0.17s;transition-delay:0.17s}.chapters.active .panel-item:nth-child(11){-webkit-transition-delay:0.18s;transition-delay:0.18s}.chapters.active .panel-item:nth-child(12){-webkit-transition-delay:0.19s;transition-delay:0.19s}.chapters.active .panel-item:last-child{margin-bottom:1rem}.chapters img{visibility:hidden}.chapters .panel-item{opacity:0}.chapters .panel-item .chapters{font-size:0.8125rem;padding-left:0.5rem}.chapters .panel-item .chapters:first-child{margin-top:0.25rem}.chapters .panel-item .chapters:last-child{margin-bottom:0.5rem}";var j=t("kompendium_navigation",function(){function t(t){var n=this;e(this,t);this.route="";this.toggleMenu=function(){var t=n.host.shadowRoot.querySelector(".nav-panel");if(!t){return}t.classList.toggle("display-nav-panel")};this.setRoute=this.setRoute.bind(this);this.renderMenuItem=this.renderMenuItem.bind(this)}t.prototype.componentWillLoad=function(){window.addEventListener("hashchange",this.setRoute);this.setRoute()};t.prototype.componentDidUnload=function(){window.removeEventListener("hashchange",this.setRoute)};t.prototype.setRoute=function(){this.route=location.hash.substr(1)};t.prototype.render=function(){return n("nav",{class:"nav-panel"},n("a",{class:"nav-panel__responsive-menu",onClick:this.toggleMenu},n("span",null),n("span",null),n("span",null),n("span",null)),n("header",{class:"panel-header"},n("h1",null,this.renderHeader()),n("kompendium-search",null)),this.renderChapters(this.menu))};t.prototype.renderHeader=function(){var t=this.header;if(this.logo){t=n("img",{alt:this.header,src:this.logo})}return n("a",{href:"#"},t)};t.prototype.renderChapters=function(t){if(!t||!t.length){return}return n("ul",{class:"panel-list"},t.map(this.renderMenuItem))};t.prototype.renderMenuItem=function(t){var e={active:this.isRouteActive(t.path),chapters:true,"panel-list":true};var i={"panel-link":true,active:this.isRouteActive(t.path)};var a=t.children||[];var o=r("../collection/assets/icons/arrow-right-s-line.svg");return n("li",{class:"panel-item"},n("a",{class:i,href:"#"+t.path},n("img",{src:o}),n("span",{class:"link-text"},t.title)),n("ul",{class:e},a.map(this.renderMenuItem)))};t.prototype.isRouteActive=function(t){return this.route.startsWith(t)};Object.defineProperty(t.prototype,"host",{get:function(){return i(this)},enumerable:false,configurable:true});return t}());j.style=S;var U="*,*::before,*::after{-webkit-box-sizing:border-box;box-sizing:border-box}ul[class],ol[class]{padding:0}body,h1,h2,h3,h4,p,ul[class],ol[class],li,figure,figcaption,blockquote,dl,dd{margin:0}ul[class],ol[class]{list-style:none}a:not([class]){-webkit-text-decoration-skip:ink;text-decoration-skip-ink:auto}img{max-width:100%}input,button,textarea,select{font:inherit}@media (prefers-reduced-motion: reduce){*{-webkit-animation-duration:0.01ms !important;animation-duration:0.01ms !important;-webkit-animation-iteration-count:1 !important;animation-iteration-count:1 !important;-webkit-transition-duration:0.01ms !important;transition-duration:0.01ms !important;scroll-behavior:auto !important}}:host{display:block}.search-box{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}input{-webkit-transition:background-color 0.2s ease;transition:background-color 0.2s ease;border:0;border-radius:0.25rem;padding:0 0.5rem;color:rgb(var(--contrast-1200));background-color:rgb(var(--contrast-300));height:2rem;line-height:2rem}input::-webkit-input-placeholder{color:rgb(var(--contrast-800))}input::-moz-placeholder{color:rgb(var(--contrast-800))}input:-ms-input-placeholder{color:rgb(var(--contrast-800))}input::-ms-input-placeholder{color:rgb(var(--contrast-800))}input::placeholder{color:rgb(var(--contrast-800))}input:active,input:focus,input:hover{background-color:rgb(var(--contrast-200))}input:focus{outline:none}input::-webkit-search-cancel-button{-webkit-appearance:none;-webkit-transition:background-color 0.2s ease;transition:background-color 0.2s ease;height:1.25rem;width:1.25rem;border-radius:50%;margin-right:-0.25rem;cursor:pointer;background-color:rgb(var(--contrast-800));background-repeat:no-repeat;background-position:center;background-size:0.75rem;background-image:url(\"data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><defs/><path fill='rgb(255,255,255)' d='M7.219 5.781L5.78 7.22 14.563 16 5.78 24.781 7.22 26.22 16 17.437l8.781 8.782 1.438-1.438L17.437 16l8.782-8.781L24.78 5.78 16 14.563z'/></svg>\")}input::-webkit-search-cancel-button:hover{background-color:rgb(var(--contrast-1000))}";var E=t("kompendium_search",function(){function t(t){e(this,t)}t.prototype.componentDidLoad=function(){this.host.shadowRoot.querySelector("input").focus()};t.prototype.render=function(){return n("div",{class:"search-box"},n("input",{type:"search",autoFocus:true,placeholder:"Search"}),n("ul",{class:"result"}))};Object.defineProperty(t.prototype,"host",{get:function(){return i(this)},enumerable:false,configurable:true});return t}());E.style=U;var R="stencil-route.inactive{display:none}";var M=t("stencil_route",function(){function t(t){e(this,t);this.group=null;this.match=null;this.componentProps={};this.exact=false;this.scrollOnNextRender=false;this.previousMatch=null}t.prototype.computeMatch=function(t){var e=this.group!=null||this.el.parentElement!=null&&this.el.parentElement.tagName.toLowerCase()==="stencil-route-switch";if(!t||e){return}this.previousMatch=this.match;return this.match=s(t.pathname,{path:this.url,exact:this.exact,strict:true})};t.prototype.loadCompleted=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){t={};if(this.history&&this.history.location.hash){t={scrollToId:this.history.location.hash.substr(1)}}else if(this.scrollTopOffset){t={scrollTopOffset:this.scrollTopOffset}}if(typeof this.componentUpdated==="function"){this.componentUpdated(t)}else if(this.match&&!l(this.match,this.previousMatch)&&this.routeViewsUpdated){this.routeViewsUpdated(t)}return[2]}))}))};t.prototype.componentDidUpdate=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.loadCompleted()];case 1:t.sent();return[2]}}))}))};t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.loadCompleted()];case 1:t.sent();return[2]}}))}))};t.prototype.render=function(){if(!this.match||!this.history){return null}var t=Object.assign({},this.componentProps,{history:this.history,match:this.match});if(this.routeRender){return this.routeRender(Object.assign({},t,{component:this.component}))}if(this.component){var e=this.component;return n(e,Object.assign({},t))}};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{location:["computeMatch"]}},enumerable:false,configurable:true});return t}());o.injectProps(M,["location","history","historyType","routeViewsUpdated"]);M.style=R;var I=function(){return((Math.random()*1e17).toString().match(/.{4}/g)||[]).join("-")};var z=function(t,e,n){return s(t,{path:e,exact:n,strict:true})};var A=function(t){return t.tagName==="STENCIL-ROUTE"};var C=t("stencil_route_switch",function(){function t(t){e(this,t);this.group=I();this.subscribers=[];this.queue=a(this,"queue")}t.prototype.componentWillLoad=function(){if(this.location!=null){this.regenerateSubscribers(this.location)}};t.prototype.regenerateSubscribers=function(t){return __awaiter(this,void 0,void 0,(function(){var e,n;var r=this;return __generator(this,(function(i){if(t==null){return[2]}e=-1;this.subscribers=Array.prototype.slice.call(this.el.children).filter(A).map((function(n,r){var i=z(t.pathname,n.url,n.exact);if(i&&e===-1){e=r}return{el:n,match:i}}));if(e===-1){return[2]}if(this.activeIndex===e){this.subscribers[e].el.match=this.subscribers[e].match;return[2]}this.activeIndex=e;n=this.subscribers[this.activeIndex];if(this.scrollTopOffset){n.el.scrollTopOffset=this.scrollTopOffset}n.el.group=this.group;n.el.match=n.match;n.el.componentUpdated=function(t){r.queue.write((function(){r.subscribers.forEach((function(t,e){t.el.componentUpdated=undefined;if(e===r.activeIndex){return t.el.style.display=""}if(r.scrollTopOffset){t.el.scrollTopOffset=r.scrollTopOffset}t.el.group=r.group;t.el.match=null;t.el.style.display="none"}))}));if(r.routeViewsUpdated){r.routeViewsUpdated(Object.assign({scrollTopOffset:r.scrollTopOffset},t))}};return[2]}))}))};t.prototype.render=function(){return n("slot",null)};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{location:["regenerateSubscribers"]}},enumerable:false,configurable:true});return t}());o.injectProps(C,["location","routeViewsUpdated"]);var H=function(t){var e=[];for(var n=1;n<arguments.length;n++){e[n-1]=arguments[n]}if(!t){console.warn.apply(console,e)}};var q=function(){var t;var e=[];var n=function(e){H(t==null,"A history supports only one prompt at a time");t=e;return function(){if(t===e){t=null}}};var r=function(e,n,r,i){if(t!=null){var a=typeof t==="function"?t(e,n):t;if(typeof a==="string"){if(typeof r==="function"){r(a,i)}else{H(false,"A history needs a getUserConfirmation function in order to use a prompt message");i(true)}}else{i(a!==false)}}else{i(true)}};var i=function(t){var n=true;var r=function(){var e=[];for(var r=0;r<arguments.length;r++){e[r]=arguments[r]}if(n){t.apply(void 0,e)}};e.push(r);return function(){n=false;e=e.filter((function(t){return t!==r}))}};var a=function(){var t=[];for(var n=0;n<arguments.length;n++){t[n]=arguments[n]}e.forEach((function(e){return e.apply(void 0,t)}))};return{setPrompt:n,confirmTransitionTo:r,appendListener:i,notifyListeners:a}};var V=function(t,e){if(e===void 0){e="scrollPositions"}var n=new Map;var r=function(e,r){n.set(e,r);if(c(t,"sessionStorage")){var i=[];n.forEach((function(t,e){i.push([e,t])}));t.sessionStorage.setItem("scrollPositions",JSON.stringify(i))}};var i=function(t){return n.get(t)};var a=function(t){return n.has(t)};var o=function(e){r(e,[t.scrollX,t.scrollY])};if(c(t,"sessionStorage")){var s=t.sessionStorage.getItem(e);n=s?new Map(JSON.parse(s)):n}if("scrollRestoration"in t.history){history.scrollRestoration="manual"}return{set:r,get:i,has:a,capture:o}};var D="popstate";var W="hashchange";var N=function(t,e){if(e===void 0){e={}}var n=false;var r=t.history;var i=t.location;var a=t.navigator;var o=u(t);var s=!h(a);var l=V(t);var c=e.forceRefresh!=null?e.forceRefresh:false;var k=e.getUserConfirmation!=null?e.getUserConfirmation:y;var x=e.keyLength!=null?e.keyLength:6;var _=e.basename?p(d(e.basename)):"";var P=function(){try{return t.history.state||{}}catch(e){return{}}};var O=function(t){t=t||{};var e=t.key,n=t.state;var r=i.pathname,a=i.search,o=i.hash;var s=r+a+o;H(!_||v(s,_),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+s+'" to begin with "'+_+'".');if(_){s=b(s,_)}return f(s,n,e||m(x))};var T=q();var L=function(t){l.capture(K.location.key);Object.assign(K,t);K.location.scrollPosition=l.get(K.location.key);K.length=r.length;T.notifyListeners(K.location,K.action)};var S=function(t){if(!w(a,t)){U(O(t.state))}};var j=function(){U(O(P()))};var U=function(t){if(n){n=false;L()}else{var e="POP";T.confirmTransitionTo(t,e,k,(function(n){if(n){L({action:e,location:t})}else{E(t)}}))}};var E=function(t){var e=K.location;var r=M.indexOf(e.key);var i=M.indexOf(t.key);if(r===-1){r=0}if(i===-1){i=0}var a=r-i;if(a){n=true;B(a)}};var R=O(P());var M=[R.key];var I=0;var z=false;var A=function(t){return _+g(t)};var C=function(t,e){H(!(typeof t==="object"&&t.state!==undefined&&e!==undefined),"You should avoid providing a 2nd state argument to push when the 1st "+"argument is a location-like object that already has state; it is ignored");var n="PUSH";var a=f(t,e,m(x),K.location);T.confirmTransitionTo(a,n,k,(function(t){if(!t){return}var e=A(a);var s=a.key,l=a.state;if(o){r.pushState({key:s,state:l},"",e);if(c){i.href=e}else{var u=M.indexOf(K.location.key);var h=M.slice(0,u===-1?0:u+1);h.push(a.key);M=h;L({action:n,location:a})}}else{H(l===undefined,"Browser history cannot push state in browsers that do not support HTML5 history");i.href=e}}))};var N=function(t,e){H(!(typeof t==="object"&&t.state!==undefined&&e!==undefined),"You should avoid providing a 2nd state argument to replace when the 1st "+"argument is a location-like object that already has state; it is ignored");var n="REPLACE";var a=f(t,e,m(x),K.location);T.confirmTransitionTo(a,n,k,(function(t){if(!t){return}var e=A(a);var s=a.key,l=a.state;if(o){r.replaceState({key:s,state:l},"",e);if(c){i.replace(e)}else{var u=M.indexOf(K.location.key);if(u!==-1){M[u]=a.key}L({action:n,location:a})}}else{H(l===undefined,"Browser history cannot replace state in browsers that do not support HTML5 history");i.replace(e)}}))};var B=function(t){r.go(t)};var Y=function(){return B(-1)};var F=function(){return B(1)};var J=function(e){I+=e;if(I===1){t.addEventListener(D,S);if(s){t.addEventListener(W,j)}}else if(I===0){t.removeEventListener(D,S);if(s){t.removeEventListener(W,j)}}};var X=function(t){if(t===void 0){t=""}var e=T.setPrompt(t);if(!z){J(1);z=true}return function(){if(z){z=false;J(-1)}return e()}};var G=function(t){var e=T.appendListener(t);J(1);return function(){J(-1);e()}};var K={length:r.length,action:"POP",location:R,createHref:A,push:C,replace:N,go:B,goBack:Y,goForward:F,block:X,listen:G,win:t};return K};var B="hashchange";var Y={hashbang:{encodePath:function(t){return t.charAt(0)==="!"?t:"!/"+x(t)},decodePath:function(t){return t.charAt(0)==="!"?t.substr(1):t}},noslash:{encodePath:x,decodePath:d},slash:{encodePath:d,decodePath:d}};var F=function(t,e){if(e===void 0){e={}}var n=false;var r=null;var i=0;var a=false;var o=t.location;var s=t.history;var l=k(t.navigator);var c=e.keyLength!=null?e.keyLength:6;var u=e.getUserConfirmation,h=u===void 0?y:u,w=e.hashType,x=w===void 0?"slash":w;var P=e.basename?p(d(e.basename)):"";var O=Y[x],T=O.encodePath,L=O.decodePath;var S=function(){var t=o.href;var e=t.indexOf("#");return e===-1?"":t.substring(e+1)};var j=function(t){return o.hash=t};var U=function(t){var e=o.href.indexOf("#");o.replace(o.href.slice(0,e>=0?e:0)+"#"+t)};var E=function(){var t=L(S());H(!P||v(t,P),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+t+'" to begin with "'+P+'".');if(P){t=b(t,P)}return f(t,undefined,m(c))};var R=q();var M=function(t){Object.assign(tt,t);tt.length=s.length;R.notifyListeners(tt.location,tt.action)};var I=function(){var t=S();var e=T(t);if(t!==e){U(e)}else{var i=E();var a=tt.location;if(!n&&_(a,i)){return}if(r===g(i)){return}r=null;z(i)}};var z=function(t){if(n){n=false;M()}else{var e="POP";R.confirmTransitionTo(t,e,h,(function(n){if(n){M({action:e,location:t})}else{A(t)}}))}};var A=function(t){var e=tt.location;var r=W.lastIndexOf(g(e));var i=W.lastIndexOf(g(t));if(r===-1){r=0}if(i===-1){i=0}var a=r-i;if(a){n=true;X(a)}};var C=S();var V=T(C);if(C!==V){U(V)}var D=E();var W=[g(D)];var N=function(t){return"#"+T(P+g(t))};var F=function(t,e){H(e===undefined,"Hash history cannot push state; it is ignored");var n="PUSH";var i=f(t,undefined,m(c),tt.location);R.confirmTransitionTo(i,n,h,(function(t){if(!t){return}var e=g(i);var a=T(P+e);var o=S()!==a;if(o){r=e;j(a);var s=W.lastIndexOf(g(tt.location));var l=W.slice(0,s===-1?0:s+1);l.push(e);W=l;M({action:n,location:i})}else{H(false,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack");M()}}))};var J=function(t,e){H(e===undefined,"Hash history cannot replace state; it is ignored");var n="REPLACE";var i=f(t,undefined,m(c),tt.location);R.confirmTransitionTo(i,n,h,(function(t){if(!t){return}var e=g(i);var a=T(P+e);var o=S()!==a;if(o){r=e;U(a)}var s=W.indexOf(g(tt.location));if(s!==-1){W[s]=e}M({action:n,location:i})}))};var X=function(t){H(l,"Hash history go(n) causes a full page reload in this browser");s.go(t)};var G=function(){return X(-1)};var K=function(){return X(1)};var Q=function(t,e){i+=e;if(i===1){t.addEventListener(B,I)}else if(i===0){t.removeEventListener(B,I)}};var Z=function(e){if(e===void 0){e=""}var n=R.setPrompt(e);if(!a){Q(t,1);a=true}return function(){if(a){a=false;Q(t,-1)}return n()}};var $=function(e){var n=R.appendListener(e);Q(t,1);return function(){Q(t,-1);n()}};var tt={length:s.length,action:"POP",location:D,createHref:N,push:F,replace:J,go:X,goBack:G,goForward:K,block:Z,listen:$,win:t};return tt};var J=function(t,e){var n=t.pathname.indexOf(e)==0?"/"+t.pathname.slice(e.length):t.pathname;return Object.assign({},t,{pathname:n})};var X={browser:N,hash:F};var G=t("stencil_router",function(){function t(t){var n=this;e(this,t);this.root="/";this.historyType="browser";this.titleSuffix="";this.routeViewsUpdated=function(t){if(t===void 0){t={}}if(n.history&&t.scrollToId&&n.historyType==="browser"){var e=n.history.win.document.getElementById(t.scrollToId);if(e){return e.scrollIntoView()}}n.scrollTo(t.scrollTopOffset||n.scrollTopOffset)};this.isServer=a(this,"isServer");this.queue=a(this,"queue")}t.prototype.componentWillLoad=function(){var t=this;this.history=X[this.historyType](this.el.ownerDocument.defaultView);this.history.listen((function(e){e=J(e,t.root);t.location=e}));this.location=J(this.history.location,this.root)};t.prototype.scrollTo=function(t){var e=this.history;if(t==null||this.isServer||!e){return}if(e.action==="POP"&&Array.isArray(e.location.scrollPosition)){return this.queue.write((function(){if(e&&e.location&&Array.isArray(e.location.scrollPosition)){e.win.scrollTo(e.location.scrollPosition[0],e.location.scrollPosition[1])}}))}return this.queue.write((function(){e.win.scrollTo(0,t)}))};t.prototype.render=function(){if(!this.location||!this.history){return}var t={historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated};return n(o.Provider,{state:t},n("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});return t}())}}}));