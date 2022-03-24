import{r as t,h as o}from"./index-7dccb886.js";const e=class{constructor(o){t(this,o),this.primary=!1,this.outlined=!1,this.disabled=!1,this.loading=!1,this.loadingFailed=!1,this.justLoaded=!1}render(){return o("button",{class:`\n                    mdc-button\n                    ${this.primary?"mdc-button--unelevated":""}\n                    ${this.renderLoadingState()}\n                    ${this.outlined?"mdc-button--outlined":""}\n                `,disabled:this.disabled},o("div",{class:"mdc-button__ripple"}),this.renderIcon(),o("span",{class:"label mdc-button__label"},this.label),o("limel-spinner",{limeBranded:!1}),o("svg",{viewBox:"0 0 30 30"},o("path",{d:"M20.659 10l-6.885 6.884-3.89-3.89-1.342 1.341 5.053 5.052.182.176L22 11.341z"})))}loadingWatcher(t,o){o&&!t?(this.justLoaded=!0,this.justLoadedTimeout=window.setTimeout((()=>{this.justLoaded=!1}),2e3)):t&&(this.justLoaded=!1,window.clearTimeout(this.justLoadedTimeout))}renderLoadingState(){return this.loading?"loading":this.justLoaded?this.loadingFailed?"loading-failed":"just-loaded":""}renderIcon(){if(!this.icon)return;let t="";return this.label||(t="no-label"),o("i",{class:`mdc-button__icon ${t}`},o("limel-icon",{name:this.icon}))}static get watchers(){return{loading:["loadingWatcher"]}}};e.style=':host{--mdc-theme-primary:var(\n      --lime-primary-color,\n      rgb(var(--color-teal-default))\n  );--mdc-theme-secondary:var(\n      --lime-secondary-color,\n      rgb(var(--contrast-1100))\n  );--mdc-theme-on-primary:var(\n      --lime-on-primary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-on-secondary:var(\n      --lime-on-secondary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-text-disabled-on-background:var(\n      --lime-text-disabled-on-background-color,\n      rgba(var(--contrast-1700), 0.38)\n  );--mdc-theme-text-primary-on-background:var(\n      --lime-text-primary-on-background-color,\n      rgba(var(--contrast-1700), 0.87)\n  );--mdc-theme-text-secondary-on-background:var(\n      --lime-text-secondary-on-background-color,\n      rgba(var(--contrast-1700), 0.54)\n  );--lime-error-text-color:rgb(var(--color-red-darker));--mdc-theme-surface:var(\n      --lime-surface-background-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-on-surface:var(\n      --lime-on-surface-color,\n      var(--lime-text-primary-on-background-color)\n  )}.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:transparent}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0;}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px;}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none)}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:transparent}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-button .mdc-button__ripple::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-button .mdc-button__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded .mdc-button__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-button.mdc-ripple-upgraded--foreground-activation .mdc-button__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation .mdc-button__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-button .mdc-button__ripple{position:absolute;box-sizing:content-box;width:100%;height:100%;overflow:hidden;z-index:0}.mdc-button:not(.mdc-button--outlined) .mdc-button__ripple{top:0;left:0}.mdc-button{font-family:Roboto, sans-serif;font-family:var(--mdc-text-button-label-text-font, var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif)));font-size:0.875rem;font-size:var(--mdc-text-button-label-text-size, var(--mdc-typography-button-font-size, 0.875rem));letter-spacing:0.0892857143em;letter-spacing:var(--mdc-text-button-label-text-tracking, var(--mdc-typography-button-letter-spacing, 0.0892857143em));font-weight:500;font-weight:var(--mdc-text-button-label-text-weight, var(--mdc-typography-button-font-weight, 500));text-transform:none;text-transform:var(--mdc-text-button-label-text-transform, var(--mdc-typography-button-text-transform, none));height:36px;height:var(--mdc-text-button-container-height, 36px);border-radius:4px;border-radius:var(--mdc-text-button-container-shape, var(--mdc-shape-small, 4px))}.mdc-button:not(:disabled){color:#26a69a;color:var(--mdc-text-button-label-text-color, var(--mdc-theme-primary, #26a69a))}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-text-button-disabled-label-text-color, rgba(0, 0, 0, 0.38))}.mdc-button .mdc-button__icon{font-size:1.125rem;font-size:var(--mdc-text-button-with-icon-icon-size, 1.125rem);width:1.125rem;width:var(--mdc-text-button-with-icon-icon-size, 1.125rem);height:1.125rem;height:var(--mdc-text-button-with-icon-icon-size, 1.125rem)}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{background-color:#26a69a;background-color:var(--mdc-text-button-hover-state-layer-color, var(--mdc-theme-primary, #26a69a))}.mdc-button:hover .mdc-button__ripple::before,.mdc-button.mdc-ripple-surface--hover .mdc-button__ripple::before{opacity:0.04;opacity:var(--mdc-text-button-hover-state-layer-opacity, 0.04)}.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-text-button-focus-state-layer-opacity, 0.12)}.mdc-button:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-button:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-text-button-pressed-state-layer-opacity, 0.12)}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-text-button-pressed-state-layer-opacity, 0.12)}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-text-button-container-shape, var(--mdc-shape-small, 4px))}.mdc-button--unelevated{font-family:Roboto, sans-serif;font-family:var(--mdc-filled-button-label-text-font, var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif)));font-size:0.875rem;font-size:var(--mdc-filled-button-label-text-size, var(--mdc-typography-button-font-size, 0.875rem));letter-spacing:0.0892857143em;letter-spacing:var(--mdc-filled-button-label-text-tracking, var(--mdc-typography-button-letter-spacing, 0.0892857143em));font-weight:500;font-weight:var(--mdc-filled-button-label-text-weight, var(--mdc-typography-button-font-weight, 500));text-transform:none;text-transform:var(--mdc-filled-button-label-text-transform, var(--mdc-typography-button-text-transform, none));height:36px;height:var(--mdc-filled-button-container-height, 36px);border-radius:4px;border-radius:var(--mdc-filled-button-container-shape, var(--mdc-shape-small, 4px))}.mdc-button--unelevated:not(:disabled){background-color:#26a69a;background-color:var(--mdc-filled-button-container-color, var(--mdc-theme-primary, #26a69a))}.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-filled-button-disabled-container-color, rgba(0, 0, 0, 0.12))}.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-filled-button-label-text-color, var(--mdc-theme-on-primary, #fff))}.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-filled-button-disabled-label-text-color, rgba(0, 0, 0, 0.38))}.mdc-button--unelevated .mdc-button__icon{font-size:1.125rem;font-size:var(--mdc-filled-button-with-icon-icon-size, 1.125rem);width:1.125rem;width:var(--mdc-filled-button-with-icon-icon-size, 1.125rem);height:1.125rem;height:var(--mdc-filled-button-with-icon-icon-size, 1.125rem)}.mdc-button--unelevated .mdc-button__ripple::before,.mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff;background-color:var(--mdc-filled-button-hover-state-layer-color, var(--mdc-theme-on-primary, #fff))}.mdc-button--unelevated:hover .mdc-button__ripple::before,.mdc-button--unelevated.mdc-ripple-surface--hover .mdc-button__ripple::before{opacity:0.08;opacity:var(--mdc-filled-button-hover-state-layer-opacity, 0.08)}.mdc-button--unelevated.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-filled-button-focus-state-layer-opacity, 0.24)}.mdc-button--unelevated:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-button--unelevated:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-filled-button-pressed-state-layer-opacity, 0.24)}.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-filled-button-pressed-state-layer-opacity, 0.24)}.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-filled-button-container-shape, var(--mdc-shape-small, 4px))}.mdc-button--raised{font-family:Roboto, sans-serif;font-family:var(--mdc-protected-button-label-text-font, var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif)));font-size:0.875rem;font-size:var(--mdc-protected-button-label-text-size, var(--mdc-typography-button-font-size, 0.875rem));letter-spacing:0.0892857143em;letter-spacing:var(--mdc-protected-button-label-text-tracking, var(--mdc-typography-button-letter-spacing, 0.0892857143em));font-weight:500;font-weight:var(--mdc-protected-button-label-text-weight, var(--mdc-typography-button-font-weight, 500));text-transform:none;text-transform:var(--mdc-protected-button-label-text-transform, var(--mdc-typography-button-text-transform, none));height:36px;height:var(--mdc-protected-button-container-height, 36px);border-radius:4px;border-radius:var(--mdc-protected-button-container-shape, var(--mdc-shape-small, 4px));box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-protected-button-container-elevation, var(--mdc-elevation-box-shadow-for-gss));--mdc-elevation-box-shadow-for-gss:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled){background-color:#26a69a;background-color:var(--mdc-protected-button-container-color, var(--mdc-theme-primary, #26a69a))}.mdc-button--raised:disabled{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-protected-button-disabled-container-color, rgba(0, 0, 0, 0.12))}.mdc-button--raised:not(:disabled){color:#fff;color:var(--mdc-protected-button-label-text-color, var(--mdc-theme-on-primary, #fff))}.mdc-button--raised:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-protected-button-disabled-label-text-color, rgba(0, 0, 0, 0.38))}.mdc-button--raised .mdc-button__icon{font-size:1.125rem;font-size:var(--mdc-protected-button-with-icon-icon-size, 1.125rem);width:1.125rem;width:var(--mdc-protected-button-with-icon-icon-size, 1.125rem);height:1.125rem;height:var(--mdc-protected-button-with-icon-icon-size, 1.125rem)}.mdc-button--raised .mdc-button__ripple::before,.mdc-button--raised .mdc-button__ripple::after{background-color:#fff;background-color:var(--mdc-protected-button-hover-state-layer-color, var(--mdc-theme-on-primary, #fff))}.mdc-button--raised:hover .mdc-button__ripple::before,.mdc-button--raised.mdc-ripple-surface--hover .mdc-button__ripple::before{opacity:0.08;opacity:var(--mdc-protected-button-hover-state-layer-opacity, 0.08)}.mdc-button--raised.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button--raised:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-protected-button-focus-state-layer-opacity, 0.24)}.mdc-button--raised:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-protected-button-pressed-state-layer-opacity, 0.24)}.mdc-button--raised.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-protected-button-pressed-state-layer-opacity, 0.24)}.mdc-button--raised .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-protected-button-container-shape, var(--mdc-shape-small, 4px))}.mdc-button--raised.mdc-ripple-upgraded--background-focused,.mdc-button--raised:not(.mdc-ripple-upgraded):focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-protected-button-focus-container-elevation, var(--mdc-elevation-box-shadow-for-gss));--mdc-elevation-box-shadow-for-gss:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-protected-button-hover-container-elevation, var(--mdc-elevation-box-shadow-for-gss));--mdc-elevation-box-shadow-for-gss:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled):active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-protected-button-pressed-container-elevation, var(--mdc-elevation-box-shadow-for-gss));--mdc-elevation-box-shadow-for-gss:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-protected-button-disabled-container-elevation, var(--mdc-elevation-box-shadow-for-gss));--mdc-elevation-box-shadow-for-gss:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mdc-button--outlined{font-family:Roboto, sans-serif;font-family:var(--mdc-outlined-button-label-text-font, var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif)));font-size:0.875rem;font-size:var(--mdc-outlined-button-label-text-size, var(--mdc-typography-button-font-size, 0.875rem));letter-spacing:0.0892857143em;letter-spacing:var(--mdc-outlined-button-label-text-tracking, var(--mdc-typography-button-letter-spacing, 0.0892857143em));font-weight:500;font-weight:var(--mdc-outlined-button-label-text-weight, var(--mdc-typography-button-font-weight, 500));text-transform:none;text-transform:var(--mdc-outlined-button-label-text-transform, var(--mdc-typography-button-text-transform, none));height:36px;height:var(--mdc-outlined-button-container-height, 36px);border-radius:4px;border-radius:var(--mdc-outlined-button-container-shape, var(--mdc-shape-small, 4px));padding:0 15px 0 15px;border-width:1px;border-width:var(--mdc-outlined-button-outline-width, 1px)}.mdc-button--outlined:not(:disabled){color:#26a69a;color:var(--mdc-outlined-button-label-text-color, var(--mdc-theme-primary, #26a69a))}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-outlined-button-disabled-label-text-color, rgba(0, 0, 0, 0.38))}.mdc-button--outlined .mdc-button__icon{font-size:1.125rem;font-size:var(--mdc-outlined-button-with-icon-icon-size, 1.125rem);width:1.125rem;width:var(--mdc-outlined-button-with-icon-icon-size, 1.125rem);height:1.125rem;height:var(--mdc-outlined-button-with-icon-icon-size, 1.125rem)}.mdc-button--outlined .mdc-button__ripple::before,.mdc-button--outlined .mdc-button__ripple::after{background-color:#26a69a;background-color:var(--mdc-outlined-button-hover-state-layer-color, var(--mdc-theme-primary, #26a69a))}.mdc-button--outlined:hover .mdc-button__ripple::before,.mdc-button--outlined.mdc-ripple-surface--hover .mdc-button__ripple::before{opacity:0.04;opacity:var(--mdc-outlined-button-hover-state-layer-opacity, 0.04)}.mdc-button--outlined.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button--outlined:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-outlined-button-focus-state-layer-opacity, 0.12)}.mdc-button--outlined:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-button--outlined:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-outlined-button-pressed-state-layer-opacity, 0.12)}.mdc-button--outlined.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-outlined-button-pressed-state-layer-opacity, 0.12)}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-outlined-button-container-shape, var(--mdc-shape-small, 4px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-outlined-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-outlined-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-outlined-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-outlined-button-outline-width, 1px));border-width:1px;border-width:var(--mdc-outlined-button-outline-width, 1px)}.mdc-button--outlined .mdc-button__touch{left:calc(-1 * 1px);left:calc(-1 * var(--mdc-outlined-button-outline-width, 1px));width:calc(100% + 2 * 1px);width:calc(100% + 2 * var(--mdc-outlined-button-outline-width, 1px))}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__icon,[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__icon[dir=rtl],.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px;}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px;}:host{display:inline-block}:host([hidden]){display:none}:host([disabled]){pointer-events:none}button{transition:background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease-out;box-shadow:var(--button-shadow-normal)}button:hover{box-shadow:var(--button-shadow-hovered)}button:active{box-shadow:var(--button-shadow-pressed);transform:translate3d(0, 0.08rem, 0)}button.mdc-button{min-width:2.25rem;padding:0 0.75rem;height:100%;min-height:2.25rem;width:100%}button.mdc-button:not(:disabled){color:var(--mdc-theme-primary, rgb(var(--color-teal-default)));background-color:rgb(var(--contrast-100))}button.mdc-button:not(:disabled).mdc-button--raised,button.mdc-button:not(:disabled).mdc-button--unelevated{color:var(--mdc-theme-on-primary, rgb(var(--color-white)));background-color:var(--mdc-theme-primary, rgb(var(--color-teal-default)))}button.mdc-button:disabled{color:rgba(var(--contrast-1600), 0.37);background-color:rgba(var(--contrast-1600), 0.1)}button.mdc-button:disabled.mdc-button--raised,button.mdc-button:disabled.mdc-button--unelevated{background-color:rgba(var(--contrast-1700), 0.15)}button.mdc-button:disabled.mdc-button--outlined{border-color:rgba(var(--contrast-1700), 0.2)}button .label{opacity:1}button limel-spinner{opacity:0;display:none;position:absolute}button .mdc-button__icon{flex-shrink:0}button .mdc-button__icon.no-label{margin-right:-0.25rem;margin-left:-0.25rem}button limel-icon{vertical-align:top}button svg{fill:currentColor;height:1.875rem;opacity:0;pointer-events:none;position:absolute;width:1.875rem}button limel-icon,button .label,button limel-spinner,button svg{transition:opacity 300ms ease-in-out}button.loading limel-icon,button.loading .label{opacity:0}button.loading limel-spinner{opacity:1;display:block}button.loading-failed limel-icon,button.loading-failed .label{opacity:0}button.loading-failed svg{opacity:1;color:red}button.loading-failed limel-spinner{display:block}button.just-loaded limel-icon,button.just-loaded .label{opacity:0}button.just-loaded svg{opacity:1}button.just-loaded limel-spinner{display:block}.mdc-button--outlined:not(:disabled){border-color:#26a69a;border-color:var(--mdc-theme-primary, #26a69a)}@keyframes reduced-presence{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.7)}}:host(.has-reduced-presence) button[disabled]:not(.loading):not(.just-loaded){animation:reduced-presence 0.3s ease forwards;transition:padding 0.3s ease, min-width 0.3s ease;transition-delay:0.3s;padding:0;min-width:0}:host(.has-reduced-presence) button[disabled]:not(.loading):not(.just-loaded) .label{transition:font-size 0.8s ease;transition-delay:0.3s;font-size:0;opacity:0}:host(.has-reduced-presence) button[disabled]:not(.loading):not(.just-loaded) limel-icon,:host(.has-reduced-presence) button[disabled]:not(.loading):not(.just-loaded) limel-spinner,:host(.has-reduced-presence) button[disabled]:not(.loading):not(.just-loaded) svg{transition:all 0.3s ease;transition-delay:0.3s;opacity:0;width:0;height:0}';const r=class{constructor(o){t(this,o),this.size="mini",this.limeBranded=!0}render(){return[o("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},this.renderSpinner())]}renderSpinner(){return this.limeBranded?o("g",null,o("g",{"clip-path":"url(#mask)"},o("circle",{class:"outline thick",cx:"12",cy:"12",r:"12"}),o("g",{class:"spinner"},o("circle",{class:"color thick",cx:"12",cy:"12",r:"12"}),o("circle",{class:"color thick",cx:"12",cy:"12",r:"12"}),o("circle",{class:"color thick",cx:"12",cy:"12",r:"12"}),o("circle",{class:"color thick",cx:"12",cy:"12",r:"12"}),o("circle",{class:"color thick",cx:"12",cy:"12",r:"12"}),o("circle",{class:"color thick",cx:"12",cy:"12",r:"12"}),o("circle",{class:"color thick",cx:"12",cy:"12",r:"12"}),o("circle",{class:"color thick",cx:"12",cy:"12",r:"12"}),o("circle",{class:"color thick",cx:"12",cy:"12",r:"12"}),o("circle",{class:"color thick",cx:"12",cy:"12",r:"12"}),o("circle",{class:"color thick",cx:"12",cy:"12",r:"12"}))),o("clipPath",{id:"mask"},o("path",{d:"M2.166 11.248C2.166 5.04 7.058 0 13.083 0 19.108 0 24 5.04 24 11.248c0 3.229-1.307 6.548-4.533 9.306-3.908 3.343-9.15 3.8-17.254 3.249-2.405-.164-2.753-.588-1.51-1.533C4.61 19.3 2.165 17.025 2.165 11.248zm3.124 9.834c5.563.227 9.416-.246 12.397-2.76 2.432-2.05 3.482-4.56 3.51-7.074.05-4.613-3.636-8.36-8.114-8.36-4.478 0-8.114 3.746-8.114 8.36 0 2.793.607 4.737.726 6.345.092 1.252.03 2.388-.405 3.49z"}))):o("g",null,o("circle",{class:"outline",cx:"12",cy:"12",r:"10"}),o("g",{class:"spinner"},o("circle",{class:"color",cx:"12",cy:"12",r:"10"}),o("circle",{class:"color",cx:"12",cy:"12",r:"10"}),o("circle",{class:"color",cx:"12",cy:"12",r:"10"}),o("circle",{class:"color",cx:"12",cy:"12",r:"10"}),o("circle",{class:"color",cx:"12",cy:"12",r:"10"}),o("circle",{class:"color",cx:"12",cy:"12",r:"10"}),o("circle",{class:"color",cx:"12",cy:"12",r:"10"}),o("circle",{class:"color",cx:"12",cy:"12",r:"10"}),o("circle",{class:"color",cx:"12",cy:"12",r:"10"}),o("circle",{class:"color",cx:"12",cy:"12",r:"10"}),o("circle",{class:"color",cx:"12",cy:"12",r:"10"})))}};r.style=":host{--mdc-theme-primary:var(\n      --lime-primary-color,\n      rgb(var(--color-teal-default))\n  );--mdc-theme-secondary:var(\n      --lime-secondary-color,\n      rgb(var(--contrast-1100))\n  );--mdc-theme-on-primary:var(\n      --lime-on-primary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-on-secondary:var(\n      --lime-on-secondary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-text-disabled-on-background:var(\n      --lime-text-disabled-on-background-color,\n      rgba(var(--contrast-1700), 0.38)\n  );--mdc-theme-text-primary-on-background:var(\n      --lime-text-primary-on-background-color,\n      rgba(var(--contrast-1700), 0.87)\n  );--mdc-theme-text-secondary-on-background:var(\n      --lime-text-secondary-on-background-color,\n      rgba(var(--contrast-1700), 0.54)\n  );--lime-error-text-color:rgb(var(--color-red-darker));--mdc-theme-surface:var(\n      --lime-surface-background-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-on-surface:var(\n      --lime-on-surface-color,\n      var(--lime-text-primary-on-background-color)\n  )}@keyframes spin{50%{transform:rotate(180deg)}100%{transform:rotate(720deg)}}@keyframes fade-in-the-spinner{0%{transform:scale(0.7);opacity:0}100%{transform:scale(1);opacity:1}}@keyframes animate-colored-circles{5%{stroke-dashoffset:0}10%,100%{stroke-dashoffset:63}}:host([hidden]){display:none}:host{box-sizing:border-box;display:flex;align-items:center;justify-content:center;height:1.5rem;width:1.5rem;transform:translate3d(0, 0, 0);animation:fade-in-the-spinner 0.5s ease forwards}:host([size=x-small]){height:2rem;width:2rem}:host([size=small]){height:2.125rem;width:2.125rem}:host([size=medium]){height:2.75rem;width:2.75rem}:host([size=large]){height:4rem;width:4rem}.spinner{animation:spin 1s linear infinite;transform-origin:center}.color{animation:animate-colored-circles 10s linear infinite;fill:none;stroke-dasharray:63;stroke-dashoffset:63;stroke-linecap:round;stroke-width:4}.color.thick{stroke-width:10}.color:nth-child(1){stroke:var(--spinner-color-1, rgb(var(--lime-brand-color-deep-red)))}.color:nth-child(2){stroke:var(--spinner-color-2, rgb(var(--lime-brand-color-sellable-orange)));animation-delay:1s}.color:nth-child(3){stroke:var(--spinner-color-3, rgb(var(--lime-brand-color-simple-blue)));animation-delay:2s}.color:nth-child(4){stroke:var(--spinner-color-4, rgb(var(--lime-brand-color-orange)));animation-delay:3s}.color:nth-child(5){stroke:var(--spinner-color-5, rgb(var(--lime-brand-color-lime-green)));animation-delay:4s}.color:nth-child(6){stroke:var(--spinner-color-6, rgb(var(--lime-brand-color-yellow)));animation-delay:5s}.color:nth-child(7){stroke:var(--spinner-color-7, rgb(var(--lime-brand-color-flexible-turquoise)));animation-delay:6s}.color:nth-child(8){stroke:var(--spinner-color-8, rgb(var(--lime-brand-color-loving-magenta)));animation-delay:7s}.color:nth-child(9){stroke:var(--spinner-color-9, rgb(var(--lime-brand-color-dark-blue)));animation-delay:8s}.color:nth-child(10){stroke:var(--spinner-color-9, rgb(var(--lime-brand-color-light-grey)));animation-delay:9s}.outline{stroke:rgba(var(--lime-brand-color-light-grey), 0.3);fill:none;stroke-linecap:round;stroke-width:4}.outline.thick{stroke-width:10}";export{e as limel_button,r as limel_spinner}