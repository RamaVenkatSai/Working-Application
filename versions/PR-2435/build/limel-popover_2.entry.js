import{r as e,c as o,h as t,g as r}from"./index-6156b4fd.js";import{c as i}from"./random-string-812b1c35.js";import{b as s}from"./keycodes-9f971b46.js";import{z as n}from"./zipObject-973a13ff.js";import"./_assignValue-d635a66e.js";import"./_defineProperty-6dda4257.js";import"./_getNative-4698fd71.js";import"./eq-1533d1d3.js";import"./_baseGetTag-49d0259e.js";import"./isObject-7039fcda.js";function a(e,o){var t;if(e.contains(o)||((t=e.shadowRoot)===null||t===void 0?void 0:t.contains(o))){return true}const r=c(o);if(!r){return false}return a(e,r)}function c(e){const o=e.closest(".limel-portal--container");if(o){return o.portalSource}const t=e.getRootNode();return t.host}const l=".trigger-anchor{display:inline-block;position:relative}";const p=class{constructor(t){e(this,t);this.close=o(this,"close",7);this.handleGlobalKeyPress=e=>{if(e.key!==s){return}e.stopPropagation();e.preventDefault();this.close.emit()};this.open=false;this.openDirection=undefined;this.portalId=i();this.globalClickListener=this.globalClickListener.bind(this)}watchOpen(){this.setupGlobalHandlers()}componentWillLoad(){this.setupGlobalHandlers()}setupGlobalHandlers(){if(this.open){document.addEventListener("click",this.globalClickListener,{capture:true});document.addEventListener("keyup",this.handleGlobalKeyPress)}else{document.removeEventListener("click",this.globalClickListener);document.removeEventListener("keyup",this.handleGlobalKeyPress)}}render(){const e=this.getCssProperties();const o=getComputedStyle(this.host).getPropertyValue("--popover-z-index");return t("div",{class:"trigger-anchor"},t("slot",{name:"trigger"}),t("limel-portal",{visible:this.open,containerId:this.portalId,containerStyle:{"z-index":o},openDirection:this.openDirection},t("limel-popover-surface",{contentCollection:this.host.children,style:e})))}globalClickListener(e){const o=e.target;const t=a(this.host,o);if(this.open&&!t){e.stopPropagation();e.preventDefault();this.close.emit()}}getCssProperties(){const e=["--popover-surface-width","--popover-body-background-color","--popover-border-radius"];const o=getComputedStyle(this.host);const t=e.map((e=>o.getPropertyValue(e)));return n(e,t)}get host(){return r(this)}static get watchers(){return{open:["watchOpen"]}}};p.style=l;const d=':host(limel-popover-surface){isolation:isolate;position:relative;display:flex;width:var(--popover-surface-width, auto);max-height:inherit;max-width:calc(100vw - 2rem);margin:0 0.25rem}.limel-popover-surface{flex:1;border-radius:var(--popover-border-radius, 0.75rem);box-shadow:var(--shadow-depth-16);backdrop-filter:blur(0.3125rem);-webkit-backdrop-filter:blur(0.3125rem)}.limel-popover-surface:after{transition:opacity 0.4s ease;pointer-events:none;content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;opacity:0.75;border-radius:var(--popover-border-radius, 0.75rem);background-color:var(--popover-body-background-color, var(--lime-elevated-surface-background-color))}.limel-popover-surface:focus{outline:none}.limel-popover-surface:focus-visible{outline:none;box-shadow:var(--shadow-depth-8-focused)}.limel-popover-surface:focus:after,.limel-popover-surface:focus-within:after{opacity:1}.limel-popover-surface>*{box-sizing:border-box}';const u=class{constructor(o){e(this,o);this.contentCollection=undefined}componentDidLoad(){this.appendElement()}render(){return t("div",{class:"limel-popover-surface",tabindex:"0"})}appendElement(){const e=this.host.shadowRoot.querySelector(".limel-popover-surface");Array.from(this.contentCollection).forEach((o=>{if(o.slot==="trigger"){return}e.appendChild(o)}))}get host(){return r(this)}};u.style=d;export{p as limel_popover,u as limel_popover_surface};
//# sourceMappingURL=limel-popover_2.entry.js.map