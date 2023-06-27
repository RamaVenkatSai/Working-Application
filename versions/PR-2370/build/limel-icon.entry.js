import{r as t,h as e,g as i}from"./index-2626b3b7.js";import{c as r}from"./config-f7362aeb.js";const s="@limetech/lime-elements/icons";class n{constructor(){this.promises={};this.cache=caches.open(s)}async get(t,e=""){const i=await this.cache;const r=this.getUrl(t,e);let s=await i.match(r);if(!s){s=await this.fetchData(r,i)}return this.getIcon(s)}async fetchData(t,e){let i=this.promises[t];if(i===undefined){i=e.add(t);this.promises[t]=i}await i;return e.match(t)}async getIcon(t){let e=await t.text();e=e.replace(/#000000/g,"currentColor");if(!this.validSvg(e)){throw new Error("Invalid SVG")}return e}validSvg(t){const e=new DOMParser;const i=e.parseFromString(t,"image/svg+xml");return i.documentElement.tagName.toLowerCase()==="svg"}getUrl(t,e){let i=e||"";if(e&&!e.endsWith("/")){i=`${e}/`}return`${i}assets/icons/${t}.svg`}}const o=new n;const a=(()=>o)();const h=":host{background-color:var(--icon-background-color, transparent);border-radius:50%;display:inline-block;line-height:0;box-sizing:border-box}:host svg{fill:currentColor;height:100%;pointer-events:none;width:100%}:host([hidden]){display:none}:host([size=x-small]){height:0.9375rem !important;width:0.9375rem !important}:host([size=small]){height:1.25rem !important;width:1.25rem !important}:host([size=medium]){height:1.5625rem !important;width:1.5625rem !important}:host([size=large]){height:1.875rem !important;width:1.875rem !important}:host([badge][size=x-small]){height:1.4375rem !important;width:1.4375rem !important}:host([badge][size=x-small])>div{margin:0.25rem}:host([badge][size=small]){height:1.875rem !important;width:1.875rem !important}:host([badge][size=small])>div{margin:0.3125rem}:host([badge][size=medium]){height:2.5rem !important;width:2.5rem !important}:host([badge][size=medium])>div{margin:0.5rem}:host([badge][size=large]){height:2.875rem !important;width:2.875rem !important}:host([badge][size=large])>div{margin:0.5rem}";const m=class{constructor(e){t(this,e);this.size=undefined;this.name=undefined;this.badge=undefined}componentDidLoad(){this.loadIcon(this.name)}render(){return e("div",{class:"container"})}async loadIcon(t){if(t===undefined||t===""){return}const e=await this.loadSvg(t);this.renderSvg(e)}loadSvg(t){return a.get(t,r.iconPath)}renderSvg(t){const e=this.host.shadowRoot.querySelector("div.container");if(e){e.innerHTML=t}}get host(){return i(this)}static get watchers(){return{name:["loadIcon"]}}};m.style=h;export{m as limel_icon};
//# sourceMappingURL=limel-icon.entry.js.map