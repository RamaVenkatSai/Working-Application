import{r as i,c,h as e}from"./index-5f2797d5.js";import{c as r}from"./random-string-2246b81e.js";const t=class{constructor(e){i(this,e),this.change=c(this,"change",7),this.radioGroupName=r(),this.value=[],this.disabled=!1,this.selectedButtonId=void 0,this.renderButton=this.renderButton.bind(this),this.onChange=this.onChange.bind(this),this.renderContent=this.renderContent.bind(this)}componentWillLoad(){var i;this.selectedButtonId=null===(i=this.value.find((i=>i.selected)))||void 0===i?void 0:i.id}render(){return e("div",{class:{"mdc-chip-set":!0,disabled:this.disabled,"mdc-chip-set--choice":!0},role:"grid"},this.value.map(this.renderButton))}renderButton(i){const c=`b${i.id}`,r={"mdc-chip":!0,"mdc-chip--selected":this.isButtonChecked(i)};return e("div",{class:r,role:"row"},e("span",{role:"gridcell"},e("input",{type:"radio",name:this.radioGroupName,checked:this.isButtonChecked(i),id:c,onChange:this.onChange}),e("label",{htmlFor:c},this.renderContent(i))))}renderContent(i){return i.icon?this.renderIcon(i):this.renderLabel(i)}isButtonChecked(i){return i.id===this.selectedButtonId}renderLabel(i){return e("span",{class:"mdc-chip__text"},i.title)}renderIcon(i){const c=`i${i.id}`;return[e("limel-icon",{id:c,class:"mdc-chip__icon","aria-label":i.title,name:i.icon,size:"small",badge:!0}),e("limel-tooltip",{elementId:c,label:i.title})]}onChange(i){i.stopPropagation(),this.selectedButtonId=i.target.id.substr(1);const c=this.value.find((i=>i.id===this.selectedButtonId));this.change.emit(c)}};t.style=':host{--mdc-theme-primary:var(\n      --lime-primary-color,\n      rgb(var(--color-teal-default))\n  );--mdc-theme-secondary:var(\n      --lime-secondary-color,\n      rgb(var(--contrast-1100))\n  );--mdc-theme-on-primary:var(\n      --lime-on-primary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-on-secondary:var(\n      --lime-on-secondary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-text-disabled-on-background:var(\n      --lime-text-disabled-on-background-color,\n      rgba(var(--contrast-1700), 0.38)\n  );--mdc-theme-text-primary-on-background:var(\n      --lime-text-primary-on-background-color,\n      rgba(var(--contrast-1700), 0.87)\n  );--mdc-theme-text-secondary-on-background:var(\n      --lime-text-secondary-on-background-color,\n      rgba(var(--contrast-1700), 0.54)\n  );--lime-error-text-color:rgb(var(--color-red-darker));--mdc-theme-surface:var(\n      --lime-surface-background-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-on-surface:var(\n      --lime-on-surface-color,\n      var(--lime-text-primary-on-background-color)\n  );--lime-elevated-surface-background-color:rgb(var(--contrast-100))}@media (prefers-color-scheme: dark){:host:not([data-theme=force-light]){--lime-elevated-surface-background-color:rgb(var(--contrast-200))}}:host[data-theme=force-dark]{--lime-elevated-surface-background-color:rgb(var(--contrast-200))}@media (prefers-color-scheme: dark){:host(:not([data-theme=force-light])) :host{--lime-elevated-surface-background-color:rgb(var(--contrast-200))}}:host([data-theme=force-dark]) :host{--lime-elevated-surface-background-color:rgb(var(--contrast-200))}.mdc-touch-target-wrapper{display:inline}.mdc-deprecated-chip-trailing-action__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-deprecated-chip-trailing-action{border:none;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;padding:0;outline:none;cursor:pointer;-webkit-appearance:none;background:none}.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__icon{height:18px;width:18px;font-size:18px}.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__touch{width:26px}.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__icon{fill:currentColor;color:inherit}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-deprecated-chip-trailing-action{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity}.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__ripple::before,.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__ripple::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-deprecated-chip-trailing-action.mdc-ripple-upgraded .mdc-deprecated-chip-trailing-action__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-deprecated-chip-trailing-action.mdc-ripple-upgraded .mdc-deprecated-chip-trailing-action__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-deprecated-chip-trailing-action.mdc-ripple-upgraded--unbounded .mdc-deprecated-chip-trailing-action__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-deprecated-chip-trailing-action.mdc-ripple-upgraded--foreground-activation .mdc-deprecated-chip-trailing-action__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-deprecated-chip-trailing-action.mdc-ripple-upgraded--foreground-deactivation .mdc-deprecated-chip-trailing-action__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__ripple::before,.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__ripple::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-deprecated-chip-trailing-action.mdc-ripple-upgraded .mdc-deprecated-chip-trailing-action__ripple::before,.mdc-deprecated-chip-trailing-action.mdc-ripple-upgraded .mdc-deprecated-chip-trailing-action__ripple::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-deprecated-chip-trailing-action.mdc-ripple-upgraded .mdc-deprecated-chip-trailing-action__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__ripple::before,.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-deprecated-chip-trailing-action:hover .mdc-deprecated-chip-trailing-action__ripple::before,.mdc-deprecated-chip-trailing-action.mdc-ripple-surface--hover .mdc-deprecated-chip-trailing-action__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-deprecated-chip-trailing-action.mdc-ripple-upgraded--background-focused .mdc-deprecated-chip-trailing-action__ripple::before,.mdc-deprecated-chip-trailing-action:not(.mdc-ripple-upgraded):focus .mdc-deprecated-chip-trailing-action__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-deprecated-chip-trailing-action:not(.mdc-ripple-upgraded) .mdc-deprecated-chip-trailing-action__ripple::after{transition:opacity 150ms linear}.mdc-deprecated-chip-trailing-action:not(.mdc-ripple-upgraded):active .mdc-deprecated-chip-trailing-action__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-deprecated-chip-trailing-action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__ripple{position:absolute;box-sizing:content-box;width:100%;height:100%;overflow:hidden}.mdc-chip__icon--leading{color:rgba(0, 0, 0, 0.54)}.mdc-deprecated-chip-trailing-action{color:#000}.mdc-chip__icon--trailing{color:rgba(0, 0, 0, 0.54)}.mdc-chip__icon--trailing:hover{color:rgba(0, 0, 0, 0.62)}.mdc-chip__icon--trailing:focus{color:rgba(0, 0, 0, 0.87)}.mdc-chip__icon.mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden){width:20px;height:20px;font-size:20px}.mdc-deprecated-chip-trailing-action__icon{height:18px;width:18px;font-size:18px}.mdc-chip__icon.mdc-chip__icon--trailing{width:18px;height:18px;font-size:18px}.mdc-deprecated-chip-trailing-action{margin-left:4px;margin-right:-4px}[dir=rtl] .mdc-deprecated-chip-trailing-action,.mdc-deprecated-chip-trailing-action[dir=rtl]{margin-left:-4px;margin-right:4px;}.mdc-chip__icon--trailing{margin-left:4px;margin-right:-4px}[dir=rtl] .mdc-chip__icon--trailing,.mdc-chip__icon--trailing[dir=rtl]{margin-left:-4px;margin-right:4px;}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-chip{border-radius:16px;background-color:#e0e0e0;color:rgba(0, 0, 0, 0.87);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.8125rem;font-size:var(--mdc-typography-body2-font-size, 0.8125rem);line-height:1.625rem;line-height:var(--mdc-typography-body2-line-height, 1.625rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);height:32px;position:relative;display:inline-flex;align-items:center;box-sizing:border-box;padding:0 12px;border-width:0;outline:none;cursor:pointer;-webkit-appearance:none}.mdc-chip .mdc-chip__ripple{border-radius:16px}.mdc-chip:hover{color:rgba(0, 0, 0, 0.87)}.mdc-chip.mdc-chip--selected .mdc-chip__checkmark,.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden){margin-left:-4px;margin-right:4px}[dir=rtl] .mdc-chip.mdc-chip--selected .mdc-chip__checkmark,[dir=rtl] .mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden),.mdc-chip.mdc-chip--selected .mdc-chip__checkmark[dir=rtl],.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden)[dir=rtl]{margin-left:4px;margin-right:-4px;}.mdc-chip .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-chip::-moz-focus-inner{padding:0;border:0}.mdc-chip:hover{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-chip .mdc-chip__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-chip--exit{transition:opacity 75ms cubic-bezier(0.4, 0, 0.2, 1), width 150ms cubic-bezier(0, 0, 0.2, 1), padding 100ms linear, margin 100ms linear;opacity:0}.mdc-chip__overflow{text-overflow:ellipsis;overflow:hidden}.mdc-chip__text{white-space:nowrap}.mdc-chip__icon{border-radius:50%;outline:none;vertical-align:middle}.mdc-chip__checkmark{height:20px}.mdc-chip__checkmark-path{transition:stroke-dashoffset 150ms 50ms cubic-bezier(0.4, 0, 0.6, 1);stroke-width:2px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-chip__primary-action:focus{outline:none}.mdc-chip--selected .mdc-chip__checkmark-path{stroke-dashoffset:0}.mdc-chip__icon--leading,.mdc-chip__icon--trailing{position:relative}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected{color:#26a69a;color:var(--mdc-theme-primary, #26a69a)}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__icon--leading{color:rgba(38, 166, 154, 0.54)}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:hover{color:#26a69a;color:var(--mdc-theme-primary, #26a69a)}.mdc-chip-set--choice .mdc-chip .mdc-chip__checkmark-path{stroke:#26a69a;stroke:var(--mdc-theme-primary, #26a69a)}.mdc-chip-set--choice .mdc-chip--selected{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-chip__checkmark-svg{width:0;height:20px;transition:width 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-chip--selected .mdc-chip__checkmark-svg{width:20px}.mdc-chip-set--filter .mdc-chip__icon--leading{transition:opacity 75ms linear;transition-delay:-50ms;opacity:1}.mdc-chip-set--filter .mdc-chip__icon--leading+.mdc-chip__checkmark{transition:opacity 75ms linear;transition-delay:80ms;opacity:0}.mdc-chip-set--filter .mdc-chip__icon--leading+.mdc-chip__checkmark .mdc-chip__checkmark-svg{transition:width 0ms}.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading{opacity:0}.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading+.mdc-chip__checkmark{width:0;opacity:1}.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading{width:0;opacity:0}.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading+.mdc-chip__checkmark{width:20px}.mdc-chip{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity}.mdc-chip .mdc-chip__ripple::before,.mdc-chip .mdc-chip__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-chip .mdc-chip__ripple::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-chip .mdc-chip__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-chip.mdc-ripple-upgraded .mdc-chip__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-chip.mdc-ripple-upgraded .mdc-chip__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-chip.mdc-ripple-upgraded--unbounded .mdc-chip__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-chip.mdc-ripple-upgraded--foreground-activation .mdc-chip__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-chip.mdc-ripple-upgraded--foreground-deactivation .mdc-chip__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-chip .mdc-chip__ripple::before,.mdc-chip .mdc-chip__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-chip.mdc-ripple-upgraded .mdc-chip__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-chip .mdc-chip__ripple::before,.mdc-chip .mdc-chip__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-chip:hover .mdc-chip__ripple::before,.mdc-chip.mdc-ripple-surface--hover .mdc-chip__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-chip.mdc-ripple-upgraded--background-focused .mdc-chip__ripple::before,.mdc-chip.mdc-ripple-upgraded:focus-within .mdc-chip__ripple::before,.mdc-chip:not(.mdc-ripple-upgraded):focus .mdc-chip__ripple::before,.mdc-chip:not(.mdc-ripple-upgraded):focus-within .mdc-chip__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-chip:not(.mdc-ripple-upgraded) .mdc-chip__ripple::after{transition:opacity 150ms linear}.mdc-chip:not(.mdc-ripple-upgraded):active .mdc-chip__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-chip.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-chip .mdc-chip__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__ripple::before{opacity:0.16;opacity:var(--mdc-ripple-selected-opacity, 0.16)}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__ripple::before,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__ripple::after{background-color:#26a69a;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #26a69a))}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:hover .mdc-chip__ripple::before,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-surface--hover .mdc-chip__ripple::before{opacity:0.24;opacity:var(--mdc-ripple-hover-opacity, 0.24)}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded--background-focused .mdc-chip__ripple::before,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded:focus-within .mdc-chip__ripple::before,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):focus .mdc-chip__ripple::before,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):focus-within .mdc-chip__ripple::before{transition-duration:75ms;opacity:0.4;opacity:var(--mdc-ripple-focus-opacity, 0.4)}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded) .mdc-chip__ripple::after{transition:opacity 150ms linear}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):active .mdc-chip__ripple::after{transition-duration:75ms;opacity:0.4;opacity:var(--mdc-ripple-press-opacity, 0.4)}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.4)}@keyframes mdc-chip-entry{from{transform:scale(0.8);opacity:0.4}to{transform:scale(1);opacity:1}}.mdc-chip-set{padding:4px;display:flex;flex-wrap:wrap;box-sizing:border-box}.mdc-chip-set .mdc-chip{margin:4px}.mdc-chip-set .mdc-chip--touch{margin-top:8px;margin-bottom:8px}.mdc-chip-set--input .mdc-chip{animation:mdc-chip-entry 100ms cubic-bezier(0, 0, 0.2, 1)}.mdc-chip{transition:background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease-out;max-width:100%;min-width:2rem;padding:0 0.0625rem;display:inline-grid;grid-auto-flow:column;background-color:transparent;margin:0.125rem !important;font-size:0.875rem}.mdc-chip:hover{box-shadow:var(--button-shadow-hovered)}.mdc-chip:active{box-shadow:var(--button-shadow-inset-pressed);transform:translate3d(0, 0.05rem, 0)}.mdc-chip:not(:last-child):after{content:"";display:block;height:1rem;width:0.125rem;border-radius:0.25rem;background-color:rgb(var(--contrast-600));position:absolute;right:-0.1875rem;top:0;bottom:0;margin:auto}.mdc-chip label{cursor:pointer;transition:color 0.2s ease}.mdc-chip input[type=radio]{width:0;position:absolute;opacity:0}.mdc-chip input[type=radio]:focus-visible+label:after{content:"";display:block;position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3.75rem;box-shadow:var(--shadow-depth-8-focused);z-index:1}.mdc-chip span[role=gridcell]{min-width:0}.mdc-chip span[role=gridcell]:focus-within{outline:none;color:var(--mdc-theme-primary)}.mdc-chip span[role=gridcell]:only-child .mdc-chip__text{padding-left:0.75rem}.mdc-chip span[role=gridcell]:first-child .mdc-chip__text{padding-left:0.75rem}.mdc-chip:hover{background-color:rgb(var(--contrast-100))}.mdc-chip.mdc-chip--selected{box-shadow:var(--button-shadow-inset)}.mdc-chip.mdc-chip--selected:active{box-shadow:var(--button-shadow-inset-pressed)}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected{color:rgb(var(--contrast-1300))}.mdc-chip__text{overflow:hidden;text-overflow:ellipsis;display:block;padding:0 0.75rem 0 0.25rem}.mdc-chip-set{align-items:center;border-radius:3.75rem;background-color:rgb(var(--contrast-400));padding:0;width:max-content;max-width:100%;flex-wrap:nowrap}.mdc-chip-set.disabled{cursor:not-allowed;pointer-events:none;opacity:0.4}';export{t as limel_button_group}