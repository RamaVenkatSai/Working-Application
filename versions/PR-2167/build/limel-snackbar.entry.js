import{r as n,c as t,h as i,g as a}from"./index-a55db97c.js";import{t as r}from"./translations-f39a82bc.js";import{M as c,a as e}from"./component-410aad5a.js";import{c as s}from"./ponyfill-30263d5e.js";
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var o={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},d={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},m={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3},b=m.ARIA_LIVE_DELAY_MS,l=d.ARIA_LIVE_LABEL_TEXT_ATTR;function u(n,t){void 0===t&&(t=n);var i=n.getAttribute("aria-live"),a=t.textContent.trim();a&&i&&(n.setAttribute("aria-live","off"),t.textContent="",t.innerHTML='<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>',t.setAttribute(l,a),setTimeout((function(){n.setAttribute("aria-live",i),t.removeAttribute(l),t.textContent=a}),b))}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var p=function(n,t){return(p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])})(n,t)};function f(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function i(){this.constructor=n}p(n,t),n.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}var h=function(){return(h=Object.assign||function(n){for(var t,i=1,a=arguments.length;i<a;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}).apply(this,arguments)},_=o.OPENING,g=o.OPEN,k=o.CLOSING,x=d.REASON_ACTION,y=d.REASON_DISMISS,v=function(n){function t(i){var a=n.call(this,h(h({},t.defaultAdapter),i))||this;return a.opened=!1,a.animationFrame=0,a.animationTimer=0,a.autoDismissTimer=0,a.autoDismissTimeoutMs=m.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,a.closeOnEscape=!0,a}return f(t,n),Object.defineProperty(t,"cssClasses",{get:function(){return o},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return d},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return m},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!1,configurable:!0}),t.prototype.destroy=function(){this.clearAutoDismissTimer(),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0,this.adapter.removeClass(_),this.adapter.removeClass(g),this.adapter.removeClass(k)},t.prototype.open=function(){var n=this;this.clearAutoDismissTimer(),this.opened=!0,this.adapter.notifyOpening(),this.adapter.removeClass(k),this.adapter.addClass(_),this.adapter.announce(),this.runNextAnimationFrame((function(){n.adapter.addClass(g),n.animationTimer=setTimeout((function(){var t=n.getTimeoutMs();n.handleAnimationTimerEnd(),n.adapter.notifyOpened(),t!==m.INDETERMINATE&&(n.autoDismissTimer=setTimeout((function(){n.close(y)}),t))}),m.SNACKBAR_ANIMATION_OPEN_TIME_MS)}))},t.prototype.close=function(n){var t=this;void 0===n&&(n=""),this.opened&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.clearAutoDismissTimer(),this.opened=!1,this.adapter.notifyClosing(n),this.adapter.addClass(o.CLOSING),this.adapter.removeClass(o.OPEN),this.adapter.removeClass(o.OPENING),clearTimeout(this.animationTimer),this.animationTimer=setTimeout((function(){t.handleAnimationTimerEnd(),t.adapter.notifyClosed(n)}),m.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},t.prototype.isOpen=function(){return this.opened},t.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs},t.prototype.setTimeoutMs=function(n){var t=m.MIN_AUTO_DISMISS_TIMEOUT_MS,i=m.MAX_AUTO_DISMISS_TIMEOUT_MS;if(!(n===m.INDETERMINATE||n<=i&&n>=t))throw new Error("\n        timeoutMs must be an integer in the range "+t+"–"+i+"\n        (or "+m.INDETERMINATE+" to disable), but got '"+n+"'");this.autoDismissTimeoutMs=n},t.prototype.getCloseOnEscape=function(){return this.closeOnEscape},t.prototype.setCloseOnEscape=function(n){this.closeOnEscape=n},t.prototype.handleKeyDown=function(n){("Escape"===n.key||27===n.keyCode)&&this.getCloseOnEscape()&&this.close(y)},t.prototype.handleActionButtonClick=function(){this.close(x)},t.prototype.handleActionIconClick=function(){this.close(y)},t.prototype.clearAutoDismissTimer=function(){clearTimeout(this.autoDismissTimer),this.autoDismissTimer=0},t.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(o.OPENING),this.adapter.removeClass(o.CLOSING)},t.prototype.runNextAnimationFrame=function(n){var t=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame((function(){t.animationFrame=0,clearTimeout(t.animationTimer),t.animationTimer=setTimeout(n,0)}))},t}(c),E=d.SURFACE_SELECTOR,O=d.LABEL_SELECTOR,T=d.ACTION_SELECTOR,S=d.DISMISS_SELECTOR,A=d.OPENING_EVENT,C=d.OPENED_EVENT,I=d.CLOSING_EVENT,w=d.CLOSED_EVENT,M=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return f(t,n),t.attachTo=function(n){return new t(n)},t.prototype.initialize=function(n){void 0===n&&(n=function(){return u}),this.announce=n()},t.prototype.initialSyncWithDOM=function(){var n=this;this.surfaceEl=this.root.querySelector(E),this.labelEl=this.root.querySelector(O),this.actionEl=this.root.querySelector(T),this.handleKeyDown=function(t){n.foundation.handleKeyDown(t)},this.handleSurfaceClick=function(t){var i=t.target;n.isActionButton(i)?n.foundation.handleActionButtonClick(t):n.isActionIcon(i)&&n.foundation.handleActionIconClick(t)},this.registerKeyDownHandler(this.handleKeyDown),this.registerSurfaceClickHandler(this.handleSurfaceClick)},t.prototype.destroy=function(){n.prototype.destroy.call(this),this.deregisterKeyDownHandler(this.handleKeyDown),this.deregisterSurfaceClickHandler(this.handleSurfaceClick)},t.prototype.open=function(){this.foundation.open()},t.prototype.close=function(n){void 0===n&&(n=""),this.foundation.close(n)},t.prototype.getDefaultFoundation=function(){var n=this;return new v({addClass:function(t){n.root.classList.add(t)},announce:function(){n.announce(n.labelEl)},notifyClosed:function(t){return n.emit(w,t?{reason:t}:{})},notifyClosing:function(t){return n.emit(I,t?{reason:t}:{})},notifyOpened:function(){return n.emit(C,{})},notifyOpening:function(){return n.emit(A,{})},removeClass:function(t){return n.root.classList.remove(t)}})},Object.defineProperty(t.prototype,"timeoutMs",{get:function(){return this.foundation.getTimeoutMs()},set:function(n){this.foundation.setTimeoutMs(n)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"closeOnEscape",{get:function(){return this.foundation.getCloseOnEscape()},set:function(n){this.foundation.setCloseOnEscape(n)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isOpen",{get:function(){return this.foundation.isOpen()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"labelText",{get:function(){return this.labelEl.textContent},set:function(n){this.labelEl.textContent=n},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"actionButtonText",{get:function(){return this.actionEl.textContent},set:function(n){this.actionEl.textContent=n},enumerable:!1,configurable:!0}),t.prototype.registerKeyDownHandler=function(n){this.listen("keydown",n)},t.prototype.deregisterKeyDownHandler=function(n){this.unlisten("keydown",n)},t.prototype.registerSurfaceClickHandler=function(n){this.surfaceEl.addEventListener("click",n)},t.prototype.deregisterSurfaceClickHandler=function(n){this.surfaceEl.removeEventListener("click",n)},t.prototype.isActionButton=function(n){return Boolean(s(n,T))},t.prototype.isActionIcon=function(n){return Boolean(s(n,S))},t}(e);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const N=class{constructor(i){n(this,i),this.action=t(this,"action",7),this.hide=t(this,"hide",7),this.message=void 0,this.timeout=void 0,this.actionText=void 0,this.dismissible=void 0,this.multiline=void 0,this.language="en",this.handleMdcClosing=this.handleMdcClosing.bind(this)}connectedCallback(){this.initialize()}componentDidLoad(){this.initialize()}initialize(){const n=this.host.shadowRoot.querySelector(".mdc-snackbar");n&&(this.mdcSnackbar=new M(n),this.mdcSnackbar.listen("MDCSnackbar:closing",this.handleMdcClosing))}disconnectedCallback(){this.mdcSnackbar.unlisten("MDCSnackbar:closing",this.handleMdcClosing),this.mdcSnackbar.destroy()}async show(){this.timeout&&(this.mdcSnackbar.timeoutMs=this.timeout),this.mdcSnackbar.labelText=this.message,this.mdcSnackbar.open()}render(){return i("aside",{class:`\n                    mdc-snackbar\n                    ${this.multiline?"mdc-snackbar--stacked":""}\n                `},i("div",{class:"mdc-snackbar__surface",role:"status","aria-relevant":"additions"},i("div",{class:"mdc-snackbar__label","aria-atomic":"false"}),this.renderActions(this.actionText,this.dismissible)))}handleMdcClosing(n){"action"===n.detail.reason?this.action.emit():this.hide.emit()}renderActions(n,t){if(n||t)return i("div",{class:"mdc-snackbar__actions","aria-atomic":"true"},this.renderActionButton(n),this.renderDismissButton(t))}renderActionButton(n){if(n)return i("limel-button",{class:"mdc-button mdc-snackbar__action",label:n})}renderDismissButton(n){if(!n)return;const t=r.get("snackbar.dismiss",this.language);return i("limel-icon-button",{class:"mdc-icon-button mdc-snackbar__dismiss",icon:"multiply",label:t})}get host(){return a(this)}};N.style=':host{--mdc-theme-primary:var(\n      --lime-primary-color,\n      rgb(var(--color-teal-default))\n  );--mdc-theme-secondary:var(\n      --lime-secondary-color,\n      rgb(var(--contrast-1100))\n  );--mdc-theme-on-primary:var(\n      --lime-on-primary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-on-secondary:var(\n      --lime-on-secondary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-text-disabled-on-background:var(\n      --lime-text-disabled-on-background-color,\n      rgba(var(--contrast-1700), 0.38)\n  );--mdc-theme-text-primary-on-background:var(\n      --lime-text-primary-on-background-color,\n      rgba(var(--contrast-1700), 0.87)\n  );--mdc-theme-text-secondary-on-background:var(\n      --lime-text-secondary-on-background-color,\n      rgba(var(--contrast-1700), 0.54)\n  );--mdc-theme-error:var(\n      --lime-error-background-color,\n      rgb(var(--color-red-dark))\n  );--lime-error-text-color:rgb(var(--color-red-darker));--mdc-theme-surface:var(\n      --lime-surface-background-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-on-surface:var(\n      --lime-on-surface-color,\n      rgb(var(--contrast-1500))\n  )}.mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}.mdc-snackbar__surface{background-color:#333333}.mdc-snackbar__label{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__surface{min-width:344px}@media (max-width: 480px), (max-width: 344px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px}.mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mdc-snackbar__surface{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__label{padding-left:16px;padding-right:8px;padding-bottom:12px}[dir=rtl] .mdc-snackbar--stacked .mdc-snackbar__label,.mdc-snackbar--stacked .mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px;}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0;}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-snackbar__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.8125rem;font-size:var(--mdc-typography-body2-font-size, 0.8125rem);line-height:1.625rem;line-height:var(--mdc-typography-body2-line-height, 1.625rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px;}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action::before,.mdc-snackbar__action::after{background-color:#bb86fc;background-color:var(--mdc-ripple-color, #bb86fc)}.mdc-snackbar__action:hover::before,.mdc-snackbar__action.mdc-ripple-surface--hover::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__action:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__dismiss .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss .mdc-icon-button__ripple::after{background-color:rgba(255, 255, 255, 0.87);background-color:var(--mdc-ripple-color, rgba(255, 255, 255, 0.87))}.mdc-snackbar__dismiss:hover .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:6px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size{width:36px;height:36px;padding:6px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size.mdc-icon-button--touch{margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss .mdc-icon-button__touch{position:absolute;top:50%;height:36px;left:50%;width:36px;transform:translate(-50%, -50%)}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px;}.mdc-snackbar__surface{background-color:var(--lime-elevated-surface-background-color);box-shadow:var(--shadow-depth-16)}.mdc-snackbar__label{color:var(--mdc-theme-on-surface)}.mdc-snackbar__actions{gap:0.5rem;padding-left:0.5rem}';export{N as limel_snackbar}