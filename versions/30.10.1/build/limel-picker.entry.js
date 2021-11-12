import{r as t,c as e,h as o,g as i}from"./index-9cbaf4f2.js";import{T as r,b as n,A as a,c as s,d as h,e as m,f as c,g as d}from"./keycodes-1db9effd.js";import{c as l}from"./random-string-2246b81e.js";import{i as f}from"./dom-8b5f244b.js";function g(t){return"function"==typeof t?t():t}function p(){var t={};return t.promise=new Promise((function(e,o){t.resolve=e,t.reject=o})),t}function u(t){var e=null,o=null,i=new Promise((function(t,i){e=t,o=i}));return t&&t.then((function(t){e&&e(t)}),(function(t){o&&o(t)})),{promise:i,resolve:function(t){e&&e(t)},reject:function(t){o&&o(t)},cancel:function(){e=null,o=null}}}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var b=function(){return(b=Object.assign||function(t){for(var e,o=1,i=arguments.length;o<i;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},y={key:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return null},onlyResolvesLast:!0},x=function(){function t(t){this.config=t,this.debounceSingleton=null,this.debounceCache={}}return t.prototype._createDebouncedFunction=function(){var t,e,o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=void 0,r=void 0,n=void 0,a=[];return function(){var h=g(e),m=(new Date).getTime(),c=!i||m-i>h;i=m;for(var d=arguments.length,l=Array(d),f=0;f<d;f++)l[f]=arguments[f];if(c&&o.leading)return o.accumulate?Promise.resolve(t.call(this,[l])).then((function(t){return t[0]})):Promise.resolve(t.call.apply(t,[this].concat(l)));if(r?clearTimeout(n):r=p(),a.push(l),n=setTimeout(s.bind(this),h),o.accumulate){var u=a.length-1;return r.promise.then((function(t){return t[u]}))}return r.promise};function s(){var e=r;clearTimeout(n),Promise.resolve(o.accumulate?t.call(this,a):t.apply(this,a[a.length-1])).then(e.resolve,e.reject),a=[],r=null}}(this.config.func,this.config.wait,this.config.options);return this.config.options.onlyResolvesLast&&(t=o,e=null,o=function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];e&&e();var r=u(t.apply(void 0,o));return e=r.cancel,r.promise}),{func:o}},t.prototype.getDebouncedFunction=function(t){var e,o=(e=this.config.options).key.apply(e,t);return null==o?(this.debounceSingleton||(this.debounceSingleton=this._createDebouncedFunction()),this.debounceSingleton):(this.debounceCache[o]||(this.debounceCache[o]=this._createDebouncedFunction()),this.debounceCache[o])},t}();const v=class{constructor(o){t(this,o),this.change=e(this,"change",7),this.interact=e(this,"interact",7),this.disabled=!1,this.readonly=!1,this.required=!1,this.multiple=!1,this.displayFullList=!1,this.textValue="",this.loading=!1,this.chips=[],this.chipSetEditMode=!1,this.handleTextInput=this.handleTextInput.bind(this),this.handleInputKeyDown=this.handleInputKeyDown.bind(this),this.handleDropdownKeyDown=this.handleDropdownKeyDown.bind(this),this.handleInputFieldFocus=this.handleInputFieldFocus.bind(this),this.handleChange=this.handleChange.bind(this),this.handleInteract=this.handleInteract.bind(this),this.handleListChange=this.handleListChange.bind(this),this.handleStopEditAndBlur=this.handleStopEditAndBlur.bind(this),this.createDebouncedSearcher=this.createDebouncedSearcher.bind(this),this.portalId=l()}componentWillLoad(){this.chips=this.createChips(this.value)}componentDidLoad(){this.createDebouncedSearcher(this.searcher),this.chipSet=this.element.shadowRoot.querySelector("limel-chip-set")}async componentWillUpdate(){this.chipSetEditMode=!1,this.chipSet&&(this.chipSetEditMode=await this.chipSet.getEditMode())}render(){const t={};this.chips.some((t=>"iconColor"in t&&!!t.iconColor))&&(t["--icon-color"]="white");const e={};return this.multiple||(e.maxItems=1),[o("limel-chip-set",Object.assign({style:t,type:"input",label:this.label,value:this.chips,disabled:this.disabled,readonly:this.readonly,required:this.required,searchLabel:this.searchLabel,onInput:this.handleTextInput,onKeyDown:this.handleInputKeyDown,onChange:this.handleChange,onInteract:this.handleInteract,onStartEdit:this.handleInputFieldFocus,onStopEdit:this.handleStopEditAndBlur,emptyInputOnBlur:!1},e)),this.renderDropdown()]}onChangeValue(){this.chips=this.createChips(this.value)}createDebouncedSearcher(t){var e,o,i;"function"==typeof t&&(this.debouncedSearch=(e=t,500,o=b({},y,undefined),i=new x({func:e,wait:500,options:o}),function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return i.getDebouncedFunction(t).func.apply(void 0,t)}))}createChips(t){return t?this.multiple?t.map(this.createChip):[this.createChip(t)]:[]}createChip(t){return{id:`${t.value}`,text:t.text,removable:!0,icon:t.icon,iconColor:t.iconColor,value:t}}renderDropdown(){const t=this.getDropdownContent();return this.renderPortal(t)}getDropdownContent(){if(!this.isFull()&&this.chipSetEditMode)return this.loading?this.renderSpinner():this.items&&this.items.length?this.renderListResult():this.renderEmptyMessage()}isFull(){return!this.multiple&&!!this.value}renderSpinner(){return o("div",{style:{"padding-top":"6px","text-align":"center"}},o("limel-spinner",{class:"dropdown--spinner"}))}renderEmptyMessage(){if(this.emptyResultMessage)return o("p",{style:{color:"var(--lime-light-grey, #{$lime-light-grey})","text-align":"center"}},this.emptyResultMessage)}renderListResult(){const t=this.items.some((t=>"icon"in t&&!!t.icon));return o("limel-list",{badgeIcons:t,onChange:this.handleListChange,type:"selectable",items:this.items})}renderPortal(t=null){return o("limel-portal",{visible:!!t,containerId:this.portalId,inheritParentWidth:!0},o("limel-menu-surface",{open:!!t,style:{"--menu-surface-width":"100%","max-height":"inherit",display:"flex"}},t))}handleStopEditAndBlur(){const t=this.element.shadowRoot.activeElement||document.activeElement,e=document.querySelector(`#${this.portalId}`);f(t,this.element)||f(t,e)||(this.chipSet.emptyInput(),this.textValue="",this.handleSearchResult("",[]))}async handleTextInput(t){t.stopPropagation();const e=t.detail;this.textValue=e,this.loading=!0;const o=""===e?this.searcher:this.debouncedSearch,i=await o(e);this.handleSearchResult(e,i)}handleListChange(t){var e;if(t.stopPropagation(),!this.value||this.value!==t.detail){let e=t.detail;this.multiple&&(e=[...this.value,t.detail]),this.change.emit(e),this.items=[]}this.multiple&&(null===(e=this.chipSet)||void 0===e||e.setFocus(!0))}async handleInputFieldFocus(){this.loading=!0;const t=this.textValue,e=await this.searcher(t);this.handleSearchResult(t,e)}handleChange(t){var e;t.stopPropagation();let o=null;this.multiple&&(o=t.detail.map((t=>this.value.find((e=>`${e.value}`===t.id))))),this.multiple||o||null===(e=this.chipSet)||void 0===e||e.setFocus(!0),this.change.emit(o)}handleInteract(t){t.stopPropagation(),this.interact.emit(t.detail?t.detail.value:t.detail)}handleInputKeyDown(t){const e=!(t.key!==r&&t.keyCode!==n||t.altKey||t.metaKey||t.shiftKey),o=t.key===a||t.keyCode===s,i=t.key===h||t.keyCode===m;if(!e&&!o&&!i)return;const c=document.querySelector(` #${this.portalId} limel-list`);c&&(t.preventDefault(),e||i?c.shadowRoot.querySelector(".mdc-list-item:first-child").focus():o&&c.shadowRoot.querySelector(".mdc-list-item:last-child").focus())}handleDropdownKeyDown(t){(t.key===c||t.keyCode===d)&&(t.preventDefault(),this.textValue="",this.chipSet.setFocus(!0))}handleSearchResult(t,e){if(t===this.textValue){if(this.items=e,this.multiple){const t=this.value;this.items=e.filter((e=>!t.includes(e)))}this.loading=!1}}get element(){return i(this)}static get watchers(){return{value:["onChangeValue"],searcher:["createDebouncedSearcher"]}}};v.style=":host{--mdc-theme-primary:var(--lime-primary-color, #26a69a);--mdc-theme-secondary:var(--lime-secondary-color, #575756);--mdc-theme-on-primary:var(\n      --lime-on-primary-color,\n      #fff\n  );--mdc-theme-on-secondary:var(\n      --lime-on-secondary-color,\n      #fff\n  )}:root{--mdc-theme-primary:#26a69a;--mdc-theme-secondary:#575756;--mdc-theme-background:#fff;--mdc-theme-surface:#fff;--mdc-theme-error:#b00020;--mdc-theme-on-primary:#fff;--mdc-theme-on-secondary:#fff;--mdc-theme-on-surface:#000;--mdc-theme-on-error:#fff;--mdc-theme-text-primary-on-background:rgba(0, 0, 0, 0.87);--mdc-theme-text-secondary-on-background:rgba(0, 0, 0, 0.54);--mdc-theme-text-hint-on-background:rgba(0, 0, 0, 0.38);--mdc-theme-text-disabled-on-background:rgba(0, 0, 0, 0.38);--mdc-theme-text-icon-on-background:rgba(0, 0, 0, 0.38);--mdc-theme-text-primary-on-light:rgba(0, 0, 0, 0.87);--mdc-theme-text-secondary-on-light:rgba(0, 0, 0, 0.54);--mdc-theme-text-hint-on-light:rgba(0, 0, 0, 0.38);--mdc-theme-text-disabled-on-light:rgba(0, 0, 0, 0.38);--mdc-theme-text-icon-on-light:rgba(0, 0, 0, 0.38);--mdc-theme-text-primary-on-dark:white;--mdc-theme-text-secondary-on-dark:rgba(255, 255, 255, 0.7);--mdc-theme-text-hint-on-dark:rgba(255, 255, 255, 0.5);--mdc-theme-text-disabled-on-dark:rgba(255, 255, 255, 0.5);--mdc-theme-text-icon-on-dark:rgba(255, 255, 255, 0.5)}.mdc-theme--primary{color:#26a69a !important;color:var(--mdc-theme-primary, #26a69a) !important}.mdc-theme--secondary{color:#575756 !important;color:var(--mdc-theme-secondary, #575756) !important}.mdc-theme--background{background-color:#fff;background-color:var(--mdc-theme-background, #fff)}.mdc-theme--surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-theme--error{color:#b00020 !important;color:var(--mdc-theme-error, #b00020) !important}.mdc-theme--on-primary{color:#fff !important;color:var(--mdc-theme-on-primary, #fff) !important}.mdc-theme--on-secondary{color:#fff !important;color:var(--mdc-theme-on-secondary, #fff) !important}.mdc-theme--on-surface{color:#000 !important;color:var(--mdc-theme-on-surface, #000) !important}.mdc-theme--on-error{color:#fff !important;color:var(--mdc-theme-on-error, #fff) !important}.mdc-theme--text-primary-on-background{color:rgba(0, 0, 0, 0.87) !important;color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87)) !important}.mdc-theme--text-secondary-on-background{color:rgba(0, 0, 0, 0.54) !important;color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54)) !important}.mdc-theme--text-hint-on-background{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-disabled-on-background{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-disabled-on-background, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-icon-on-background{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-primary-on-light{color:rgba(0, 0, 0, 0.87) !important;color:var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87)) !important}.mdc-theme--text-secondary-on-light{color:rgba(0, 0, 0, 0.54) !important;color:var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54)) !important}.mdc-theme--text-hint-on-light{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-hint-on-light, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-disabled-on-light{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-icon-on-light{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-icon-on-light, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-primary-on-dark{color:white !important;color:var(--mdc-theme-text-primary-on-dark, white) !important}.mdc-theme--text-secondary-on-dark{color:rgba(255, 255, 255, 0.7) !important;color:var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7)) !important}.mdc-theme--text-hint-on-dark{color:rgba(255, 255, 255, 0.5) !important;color:var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5)) !important}.mdc-theme--text-disabled-on-dark{color:rgba(255, 255, 255, 0.5) !important;color:var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5)) !important}.mdc-theme--text-icon-on-dark{color:rgba(255, 255, 255, 0.5) !important;color:var(--mdc-theme-text-icon-on-dark, rgba(255, 255, 255, 0.5)) !important}.mdc-theme--primary-bg{background-color:#26a69a !important;background-color:var(--mdc-theme-primary, #26a69a) !important}.mdc-theme--secondary-bg{background-color:#575756 !important;background-color:var(--mdc-theme-secondary, #575756) !important}.mdc-typography{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}.mdc-typography--headline1{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.375rem;line-height:1.375rem;font-weight:300;letter-spacing:-0.015625em;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline2{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:0.875rem;font-weight:300;letter-spacing:-0.0083333333em;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline3{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:0.875rem;font-weight:400;letter-spacing:normal;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline4{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:0.875rem;font-weight:400;letter-spacing:0.0073529412em;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline5{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.875rem;line-height:0.875rem;font-weight:400;letter-spacing:normal;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline6{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.875rem;line-height:0.875rem;font-weight:500;letter-spacing:0.0125em;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle1{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.875rem;line-height:1.125rem;font-weight:400;letter-spacing:0.009375em;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle2{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.8125rem;line-height:1.125rem;font-weight:500;letter-spacing:0.0071428571em;text-decoration:inherit;text-transform:inherit}.mdc-typography--body1{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.8125rem;line-height:1.5rem;font-weight:400;letter-spacing:0.03125em;text-decoration:inherit;text-transform:inherit}.mdc-typography--body2{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.8125rem;line-height:1.625rem;font-weight:400;letter-spacing:0.0178571429em;text-decoration:inherit;text-transform:inherit}.mdc-typography--caption{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.6875rem;line-height:0.875rem;font-weight:400;letter-spacing:0.0333333333em;text-decoration:inherit;text-transform:inherit}.mdc-typography--button{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.875rem;line-height:2.25rem;font-weight:500;letter-spacing:0.0892857143em;text-decoration:none;text-transform:none}.mdc-typography--overline{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.6875rem;line-height:0.875rem;font-weight:500;letter-spacing:0.1666666667em;text-decoration:none;text-transform:uppercase}:host{position:relative;display:block}:host([hidden]){display:none}";export{v as limel_picker}