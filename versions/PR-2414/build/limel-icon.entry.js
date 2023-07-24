import{r as t,h as i,g as e}from"./index-6156b4fd.js";import{c as r}from"./config-f7362aeb.js";class s{constructor(t){this.promises={};this.cache=t}async get(t,i=""){const e=await this.cache;const r=this.getUrl(t,i);let s=await e.match(r);if(!s){s=await this.fetchData(r,e)}return this.getIcon(s)}async fetchData(t,i){let e=this.promises[t];if(e===undefined){e=i.add(t);this.promises[t]=e}await e;return i.match(t)}async getIcon(t){let i=await t.text();i=i.replace(/#000000/g,"rgb(var(--color-gray-darker))");if(!this.validSvg(i)){throw new Error("Invalid SVG")}return i}validSvg(t){const i=new DOMParser;const e=i.parseFromString(t,"image/svg+xml");return e.documentElement.tagName.toLowerCase()==="svg"}getUrl(t,i){let e=i||"";if(i&&!i.endsWith("/")){e=`${i}/`}return`${e}assets/icons/${t}.svg`}}class n{constructor(){this.cache={};this.resolveFunctions={}}async get(t,i=""){if(!this.cache[t]){this.cache[t]=await this.getIcon(t,i)}return this.cache[t]}getIcon(t,i){return new Promise((e=>{if(!this.resolveFunctions[t]){this.resolveFunctions[t]=[];this.fetchData(t,i)}this.resolveFunctions[t].push(e)}))}async fetchData(t,i){let e=i||"";if(i&&!i.endsWith("/")){e=`${i}/`}const r=await fetch(`${e}assets/icons/${t}.svg`);let s=await r.text();s=s.replace(/#000000/g,"rgb(var(--color-gray-darker))");if(!this.validSvg(s)){throw new Error("Invalid SVG")}this.resolvePromises(t,s)}validSvg(t){const i=new DOMParser;const e=i.parseFromString(t,"image/svg+xml");return e.documentElement.tagName.toLowerCase()==="svg"}resolvePromises(t,i){const e=this.resolveFunctions[t];e.forEach((t=>{t(i)}));this.resolveFunctions[t]=null}}const a="@limetech/lime-elements/icons";function o(){try{const t=caches.open(a);return new s(t)}catch(t){return new n}}const h=(()=>o())();const m=":host{background-color:var(--icon-background-color, transparent);border-radius:50%;display:inline-block;line-height:0;box-sizing:border-box}:host svg{fill:currentColor;height:100%;pointer-events:none;width:100%}:host([hidden]){display:none}:host([size=x-small]){height:0.9375rem !important;width:0.9375rem !important}:host([size=small]){height:1.25rem !important;width:1.25rem !important}:host([size=medium]){height:1.5625rem !important;width:1.5625rem !important}:host([size=large]){height:1.875rem !important;width:1.875rem !important}:host([badge][size=x-small]){height:1.4375rem !important;width:1.4375rem !important}:host([badge][size=x-small])>div{margin:0.25rem}:host([badge][size=small]){height:1.875rem !important;width:1.875rem !important}:host([badge][size=small])>div{margin:0.3125rem}:host([badge][size=medium]){height:2.5rem !important;width:2.5rem !important}:host([badge][size=medium])>div{margin:0.5rem}:host([badge][size=large]){height:2.875rem !important;width:2.875rem !important}:host([badge][size=large])>div{margin:0.5rem}";const c=class{constructor(i){t(this,i);this.size=undefined;this.name=undefined;this.badge=undefined}componentDidLoad(){this.loadIcon(this.name)}render(){return i("div",{class:"container"})}async loadIcon(t){if(t===undefined||t===""){return}const i=await this.loadSvg(t);this.renderSvg(i)}loadSvg(t){return h.get(t,r.iconPath)}renderSvg(t){const i=this.host.shadowRoot.querySelector("div.container");if(i){i.innerHTML=t}}get host(){return e(this)}static get watchers(){return{name:["loadIcon"]}}};c.style=m;export{c as limel_icon};
//# sourceMappingURL=limel-icon.entry.js.map