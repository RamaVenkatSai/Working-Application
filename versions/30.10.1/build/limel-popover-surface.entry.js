import{r as o,h as r,g as e}from"./index-9cbaf4f2.js";const a=class{constructor(r){o(this,r),this.open=!1}componentDidLoad(){this.appendElement()}render(){return r("div",{class:{"limel-popover-surface":!0,"limel-popover-surface--open":this.open},tabindex:"-1"},r("slot",{name:"body"}))}appendElement(){const o=this.host.shadowRoot.querySelector("slot");Array.from(this.contentCollection).forEach((r=>{o.appendChild(r)}))}get host(){return e(this)}};a.style=".limel-popover-surface{position:relative;display:flex;flex-direction:column;width:var(--popover-surface-width, auto);max-height:calc(100vh - 2rem);max-width:calc(100vw - 2rem);border-radius:var(--popover-border-radius, 0.75rem);box-shadow:var(--shadow-depth-16);background-color:var(--popover-body-background-color, rgb(var(--contrast-100)))}.limel-popover-surface slot{box-sizing:border-box;display:block;width:100%}";export{a as limel_popover_surface}