import{r as o,h as t,g as e}from"./index-6156b4fd.js";import{m as n,r as s}from"./make-enter-clickable-a1d99f5e.js";import{c as r}from"./random-string-812b1c35.js";const i=":host([hidden]){display:none}:host([disabled]){pointer-events:none}button{all:unset;transition:color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease-out;cursor:pointer;color:var(--mdc-theme-on-surface);background-color:var(--icon-background-color, transparent);display:inline-flex;align-items:center;justify-content:center;height:2.25rem;width:2.25rem;border-radius:50%}button:hover{color:var(--mdc-theme-on-surface);background-color:var(--lime-elevated-surface-background-color);box-shadow:var(--button-shadow-hovered)}button:active{box-shadow:var(--button-shadow-pressed);transform:translate3d(0, 0.08rem, 0)}button:focus{outline:none}button:focus-visible{outline:none;box-shadow:var(--shadow-depth-8-focused)}:host([elevated]) button:not(:hover):not(:active):not(:focus-visible){box-shadow:var(--button-shadow-normal)}button:disabled{color:var(--mdc-theme-text-disabled-on-background)}limel-icon{width:1.25rem}";const a=class{constructor(t){o(this,t);this.icon=undefined;this.elevated=false;this.label=undefined;this.disabled=false}connectedCallback(){this.initialize()}componentWillLoad(){n(this.host)}disconnectedCallback(){s(this.host)}componentDidLoad(){this.initialize()}initialize(){const o=this.host.shadowRoot.querySelector(".mdc-icon-button");if(!o){return}}render(){const o={};const e=r();if(this.host.hasAttribute("tabindex")){o.tabindex=this.host.getAttribute("tabindex")}return t("button",Object.assign({disabled:this.disabled,id:e},o),t("limel-icon",{name:this.icon,badge:true}),this.renderTooltip(e))}renderTooltip(o){if(this.label){return t("limel-tooltip",{elementId:o,label:this.label})}}get host(){return e(this)}};a.style=i;export{a as limel_icon_button};
//# sourceMappingURL=limel-icon-button.entry.js.map