import{r as o,h as t,g as i}from"./index-a7da85d2.js";import{M as e}from"./component-429e92ee.js";import"./component-d682c974.js";import"./ponyfill-30263d5e.js";let n=class{constructor(t){o(this,t),this.elevated=!1,this.disabled=!1,this.removeFocusedStyleOnClick=this.removeFocusedStyleOnClick.bind(this)}async relayout(){this.mdcIconButtonRipple&&this.mdcIconButtonRipple.layout()}removeFocusedStyleOnClick(){this.host.shadowRoot.querySelector(".mdc-icon-button").classList.remove("mdc-ripple-upgraded--background-focused")}connectedCallback(){this.initialize()}componentDidLoad(){this.initialize()}initialize(){const o=this.host.shadowRoot.querySelector(".mdc-icon-button");o&&(this.mdcIconButtonRipple=new e(o),this.mdcIconButtonRipple.unbounded=!0,this.host.addEventListener("click",this.removeFocusedStyleOnClick))}disconnectedCallback(){var o;null===(o=this.mdcIconButtonRipple)||void 0===o||o.destroy(),this.host.removeEventListener("click",this.removeFocusedStyleOnClick)}render(){const o={};this.host.hasAttribute("tabindex")&&(o.tabindex=this.host.getAttribute("tabindex"));const i={};return this.elevated&&(i.badge=!0,i.size="small"),t("button",Object.assign({class:"mdc-icon-button",disabled:this.disabled,"aria-label":this.label,title:this.label},o),t("limel-icon",Object.assign({name:this.icon},i)))}get host(){return i(this)}};n.style='@media (pointer: coarse){.mdc-icon-button:hover::before{opacity:0}}:host{--specified-background-color:var(--icon-button-background-color),\n      (var(--icon-background-color));display:inline-flex;align-items:center;justify-content:center}:host([hidden]){display:none}:host([disabled]){pointer-events:none}:host([elevated]) .mdc-icon-button{padding:0.5625rem}:host([elevated]) limel-icon{transition:background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease-out;box-shadow:var(--button-shadow-normal);background-color:var(--specified-background-color, rgb(var(--contrast-100), 0.8))}:host([elevated]) limel-icon:hover{box-shadow:var(--button-shadow-hovered)}:host([elevated]) limel-icon:active{box-shadow:var(--button-shadow-pressed);transform:translate3d(0, 0.08rem, 0)}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;font-size:24px;text-decoration:none;cursor:pointer;user-select:none;width:48px;height:48px;padding:12px}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-icon-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity}.mdc-icon-button::before,.mdc-icon-button::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-icon-button::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-icon-button::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-icon-button.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-icon-button.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-icon-button.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-icon-button.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button::before,.mdc-icon-button::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-icon-button.mdc-ripple-upgraded::before,.mdc-icon-button.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button::before,.mdc-icon-button::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-icon-button:hover::before,.mdc-icon-button.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-icon-button.mdc-ripple-upgraded--background-focused::before,.mdc-icon-button:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-icon-button:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-icon-button:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-icon-button:disabled{color:var(--mdc-theme-text-disabled-on-background)}.mdc-icon-button:focus-visible{box-shadow:var(--shadow-depth-8-focused);border-radius:50%}';export{n as limel_icon_button}