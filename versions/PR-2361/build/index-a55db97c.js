let e,t,n=!1,l=!1;const s="http://www.w3.org/1999/xlink",o={},i=e=>"object"==(e=typeof e)||"function"===e,c=(e,t,...n)=>{let l=null,s=null,o=!1,c=!1;const a=[],f=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?f(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof e&&!i(l))&&(l+=""),o&&c?a[a.length-1].t+=l:a.push(o?r(null,l):l),c=o)};if(f(n),t){t.key&&(s=t.key);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,a,u);const d=r(e,null);return d.l=t,a.length>0&&(d.o=a),d.i=s,d},r=(e,t)=>({u:0,p:e,t,h:null,o:null,l:null,i:null}),a={},u={forEach:(e,t)=>e.map(f).forEach(t),map:(e,t)=>e.map(f).map(t).map(d)},f=e=>({vattrs:e.l,vchildren:e.o,vkey:e.i,vname:e.m,vtag:e.p,vtext:e.t}),d=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),c(e.vtag,t,...e.vchildren||[])}const t=r(e.vtag,e.vtext);return t.l=e.vattrs,t.o=e.vchildren,t.i=e.vkey,t.m=e.vname,t},p=e=>G(e).$,h=(e,t,n)=>{const l=p(e);return{emit:e=>m(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},m=(e,t,n)=>{const l=ne.ce(t,n);return e.dispatchEvent(l),l},y=new WeakMap,$=e=>"sc-"+e.g,b=(e,t,n,l,o,c)=>{if(n!==l){let r=K(e,t),a=t.toLowerCase();if("class"===t){const t=e.classList,s=g(n),o=g(l);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(r||"o"!==t[0]||"n"!==t[1]){const u=i(l);if((r||u&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{const s=null==l?"":l;"list"===t?r=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(e){}let f=!1;a!==(a=a.replace(/^xlink\:?/,""))&&(t=a,f=!0),null==l||!1===l?!1===l&&""!==e.getAttribute(t)||(f?e.removeAttributeNS(s,t):e.removeAttribute(t)):(!r||4&c||o)&&!u&&(l=!0===l?"":l,f?e.setAttributeNS(s,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):K(ee,a)?a.slice(2):a[2]+t.slice(3),n&&ne.rel(e,t,n,!1),l&&ne.ael(e,t,l,!1)}},w=/\s/,g=e=>e?e.split(w):[],v=(e,t,n,l)=>{const s=11===t.h.nodeType&&t.h.host?t.h.host:t.h,i=e&&e.l||o,c=t.l||o;for(l in i)l in c||b(s,l,i[l],void 0,n,t.u);for(l in c)b(s,l,i[l],c[l],n,t.u)},j=(t,l,s)=>{const o=l.o[s];let i,c,r=0;if(null!==o.t)i=o.h=te.createTextNode(o.t);else{if(n||(n="svg"===o.p),i=o.h=te.createElementNS(n?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",o.p),n&&"foreignObject"===o.p&&(n=!1),v(null,o,n),null!=e&&i["s-si"]!==e&&i.classList.add(i["s-si"]=e),o.o)for(r=0;r<o.o.length;++r)c=j(t,o,r),c&&i.appendChild(c);"svg"===o.p?n=!1:"foreignObject"===i.tagName&&(n=!0)}return i},k=(e,n,l,s,o,i)=>{let c,r=e;for(r.shadowRoot&&r.tagName===t&&(r=r.shadowRoot);o<=i;++o)s[o]&&(c=j(null,l,o),c&&(s[o].h=c,r.insertBefore(c,n)))},S=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.h,M(l),s.remove())},O=(e,t)=>e.p===t.p&&e.i===t.i,C=(e,t)=>{const l=t.h=e.h,s=e.o,o=t.o,i=t.p,c=t.t;null===c?(n="svg"===i||"foreignObject"!==i&&n,"slot"===i||v(e,t,n),null!==s&&null!==o?((e,t,n,l)=>{let s,o,i=0,c=0,r=0,a=0,u=t.length-1,f=t[0],d=t[u],p=l.length-1,h=l[0],m=l[p];for(;i<=u&&c<=p;)if(null==f)f=t[++i];else if(null==d)d=t[--u];else if(null==h)h=l[++c];else if(null==m)m=l[--p];else if(O(f,h))C(f,h),f=t[++i],h=l[++c];else if(O(d,m))C(d,m),d=t[--u],m=l[--p];else if(O(f,m))C(f,m),e.insertBefore(f.h,d.h.nextSibling),f=t[++i],m=l[--p];else if(O(d,h))C(d,h),e.insertBefore(d.h,f.h),d=t[--u],h=l[++c];else{for(r=-1,a=i;a<=u;++a)if(t[a]&&null!==t[a].i&&t[a].i===h.i){r=a;break}r>=0?(o=t[r],o.p!==h.p?s=j(t&&t[c],n,r):(C(o,h),t[r]=void 0,s=o.h),h=l[++c]):(s=j(t&&t[c],n,c),h=l[++c]),s&&f.h.parentNode.insertBefore(s,f.h)}i>u?k(e,null==l[p+1]?null:l[p+1].h,n,l,c,p):c>p&&S(t,i,u)})(l,s,t,o):null!==o?(null!==e.t&&(l.textContent=""),k(l,null,t,o,0,o.length-1)):null!==s&&S(s,0,s.length-1),n&&"svg"===i&&(n=!1)):e.t!==c&&(l.data=c)},M=e=>{e.l&&e.l.ref&&e.l.ref(null),e.o&&e.o.map(M)},x=(e,t)=>{t&&!e.v&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.v=t)))},P=(e,t)=>{if(e.u|=16,!(4&e.u))return x(e,e.j),fe((()=>E(e,t)));e.u|=512},E=(e,t)=>{const n=e.k;let l;return t?(e.u|=256,e.S&&(e.S.map((([e,t])=>F(n,e,t))),e.S=null),l=F(n,"componentWillLoad")):l=F(n,"componentWillUpdate"),N(l,(()=>L(e,n,t)))},L=async(e,t,n)=>{const l=e.$,s=l["s-rc"];n&&(e=>{const t=e.O,n=e.$,l=t.u,s=((e,t)=>{let n=$(t);const l=Z.get(n);if(e=11===e.nodeType?e:te,l)if("string"==typeof l){let t,s=y.get(e=e.head||e);s||y.set(e,s=new Set),s.has(n)||(t=te.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(e);U(e,t),s&&(s.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>W(e);0===t.length?n():(Promise.all(t).then(n),e.u|=4,t.length=0)}},U=(n,l)=>{try{l=l.render(),n.u&=-17,n.u|=2,((n,l)=>{const s=n.$,o=n.O,i=n.C||r(null,null),u=(e=>e&&e.p===a)(l)?l:c(null,null,l);t=s.tagName,o.M&&(u.l=u.l||{},o.M.map((([e,t])=>u.l[t]=s[e]))),u.p=null,u.u|=4,n.C=u,u.h=i.h=s.shadowRoot||s,e=s["s-sc"],C(i,u)})(n,l)}catch(e){Q(e,n.$)}return null},W=e=>{const t=e.$,n=e.k,l=e.j;F(n,"componentDidRender"),64&e.u?F(n,"componentDidUpdate"):(e.u|=64,R(t),F(n,"componentDidLoad"),e.P(t),l||D()),e.L(t),e.v&&(e.v(),e.v=void 0),512&e.u&&ue((()=>P(e,!1))),e.u&=-517},D=()=>{R(te.documentElement),ue((()=>m(ee,"appload",{detail:{namespace:"lime-elements"}})))},F=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){Q(e)}},N=(e,t)=>e&&e.then?e.then(t):t(),R=e=>e.classList.add("hydrated"),T=(e,t,n)=>{if(t.U){e.watchers&&(t.W=e.watchers);const l=Object.entries(t.U),s=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(s,e,{get(){return((e,t)=>G(this).D.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=G(e),o=s.$,c=s.D.get(t),r=s.u,a=s.k;if(n=((e,t)=>null==e||i(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.U[t][0]),(!(8&r)||void 0===c)&&n!==c&&(!Number.isNaN(c)||!Number.isNaN(n))&&(s.D.set(t,n),a)){if(l.W&&128&r){const e=l.W[t];e&&e.map((e=>{try{a[e](n,c,t)}catch(e){Q(e,o)}}))}2==(18&r)&&P(s,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(s,e,{value(...t){const n=G(this);return n.F.then((()=>n.k[e](...t)))}})})),1&n){const n=new Map;s.attributeChangedCallback=function(e,t,l){ne.jmp((()=>{const t=n.get(e);if(this.hasOwnProperty(t))l=this[t],delete this[t];else if(s.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==l)return;this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const s=l[1]||e;return n.set(s,e),512&l[0]&&t.M.push([e,s]),s}))}}return e},A=e=>{F(e,"connectedCallback")},H=(e,t={})=>{const n=[],l=t.exclude||[],s=ee.customElements,o=te.head,i=o.querySelector("meta[charset]"),c=te.createElement("style"),r=[];let a,u=!0;Object.assign(ne,t),ne.N=new URL(t.resourcesUrl||"./",te.baseURI).href,e.map((e=>{e[1].map((t=>{const o={u:t[0],g:t[1],U:t[2],R:t[3]};o.U=t[2],o.R=t[3],o.M=[],o.W={};const i=o.g,c=class extends HTMLElement{constructor(e){super(e),J(e=this,o),1&o.u&&e.attachShadow({mode:"open",delegatesFocus:!!(16&o.u)})}connectedCallback(){a&&(clearTimeout(a),a=null),u?r.push(this):ne.jmp((()=>(e=>{if(0==(1&ne.u)){const t=G(e),n=t.O,l=()=>{};if(1&t.u)q(e,t,n.R),A(t.k);else{t.u|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){x(t,t.j=n);break}}n.U&&Object.entries(n.U).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.u)){{if(t.u|=32,(s=Y(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.W=s.watchers,T(s,n,2),s.isProxied=!0);const e=()=>{};t.u|=8;try{new s(t)}catch(e){Q(e)}t.u&=-9,t.u|=128,e(),A(t.k)}if(s.style){let e=s.style;const t=$(n);if(!Z.has(t)){const l=()=>{};((e,t,n)=>{let l=Z.get(e);se&&n?(l=l||new CSSStyleSheet,"string"==typeof l?l=t:l.replaceSync(t)):l=t,Z.set(e,l)})(t,e,!!(1&n.u)),l()}}}const o=t.j,i=()=>P(t,!0);o&&o["s-rc"]?o["s-rc"].push(i):i()})(0,t,n)}l()}})(this)))}disconnectedCallback(){ne.jmp((()=>(()=>{if(0==(1&ne.u)){const e=G(this),t=e.k;e.T&&(e.T.map((e=>e())),e.T=void 0),F(t,"disconnectedCallback")}})()))}componentOnReady(){return G(this).A}};o.H=e[0],l.includes(i)||s.get(i)||(n.push(i),s.define(i,T(c,o,1)))}))})),c.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",c.setAttribute("data-styles",""),o.insertBefore(c,i?i.nextSibling:o.firstChild),u=!1,r.length?r.map((e=>e.connectedCallback())):ne.jmp((()=>a=setTimeout(D,30)))},q=(e,t,n)=>{n&&n.map((([n,l,s])=>{const o=_(e,n),i=V(t,s),c=z(n);ne.ael(o,l,i,c),(t.T=t.T||[]).push((()=>ne.rel(o,l,i,c)))}))},V=(e,t)=>n=>{try{256&e.u?e.k[t](n):(e.S=e.S||[]).push([t,n])}catch(e){Q(e)}},_=(e,t)=>8&t?ee:e,z=e=>0!=(2&e),B=new WeakMap,G=e=>B.get(e),I=(e,t)=>B.set(t.k=e,t),J=(e,t)=>{const n={u:0,$:e,O:t,D:new Map};return n.F=new Promise((e=>n.L=e)),n.A=new Promise((e=>n.P=e)),e["s-p"]=[],e["s-rc"]=[],q(e,n,t.R),B.set(e,n)},K=(e,t)=>t in e,Q=(e,t)=>(0,console.error)(e,t),X=new Map,Y=e=>{const t=e.g.replace(/-/g,"_"),n=e.H,l=X.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(X.set(n,e),e[t])),Q)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},Z=new Map,ee="undefined"!=typeof window?window:{},te=ee.document||{head:{}},ne={u:0,N:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},le=e=>Promise.resolve(e),se=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),oe=[],ie=[],ce=(e,t)=>n=>{e.push(n),l||(l=!0,t&&4&ne.u?ue(ae):ne.raf(ae))},re=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){Q(e)}e.length=0},ae=()=>{re(oe),re(ie),(l=oe.length>0)&&ne.raf(ae)},ue=e=>le().then(e),fe=ce(ie,!0);export{a as H,H as b,h as c,p as g,c as h,le as p,I as r}