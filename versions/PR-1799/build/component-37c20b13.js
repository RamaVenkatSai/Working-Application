import{M as t,a as n}from"./component-e7f7d2a4.js";import{a as i,M as e,b as r}from"./component-c5fa1e14.js";import{m as u}from"./ponyfill-30263d5e.js";import{M as o,a as s}from"./component-d0691ca9.js";var c=function(t,n){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])})(t,n)};function f(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t}c(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}var h=function(){return(h=Object.assign||function(t){for(var n,i=1,e=arguments.length;i<e;i++)for(var r in n=arguments[i])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}).apply(this,arguments)};function a(t){var n="function"==typeof Symbol&&Symbol.iterator,i=n&&t[n],e=0;if(i)return i.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&e>=t.length&&(t=void 0),{value:t&&t[e++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}var l=function(t,n){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])})(t,n)};function d(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t}l(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}var b=function(){return(b=Object.assign||function(t){for(var n,i=1,e=arguments.length;i<e;i++)for(var r in n=arguments[i])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}).apply(this,arguments)},g={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"},m=function(t){function n(i){var e=t.call(this,b(b({},n.defaultAdapter),i))||this;return e.transitionEndHandler=function(t){e.handleTransitionEnd(t)},e}return d(n,t),Object.defineProperty(n,"cssClasses",{get:function(){return g},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),n.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},n.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},n.prototype.activate=function(){this.adapter.removeClass(g.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(g.LINE_RIPPLE_ACTIVE)},n.prototype.setRippleCenter=function(t){this.adapter.setStyle("transform-origin",t+"px center")},n.prototype.deactivate=function(){this.adapter.addClass(g.LINE_RIPPLE_DEACTIVATING)},n.prototype.handleTransitionEnd=function(t){var n=this.adapter.hasClass(g.LINE_RIPPLE_DEACTIVATING);"opacity"===t.propertyName&&n&&(this.adapter.removeClass(g.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(g.LINE_RIPPLE_DEACTIVATING))},n}(t),v=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return d(n,t),n.attachTo=function(t){return new n(t)},n.prototype.activate=function(){this.foundation.activate()},n.prototype.deactivate=function(){this.foundation.deactivate()},n.prototype.setRippleCenter=function(t){this.foundation.setRippleCenter(t)},n.prototype.getDefaultFoundation=function(){var t=this;return new m({addClass:function(n){return t.root.classList.add(n)},removeClass:function(n){return t.root.classList.remove(n)},hasClass:function(n){return t.root.classList.contains(n)},setStyle:function(n,i){return t.root.style.setProperty(n,i)},registerEventHandler:function(n,i){return t.listen(n,i)},deregisterEventHandler:function(n,i){return t.unlisten(n,i)}})},n}(n),O=function(t,n){return(O=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])})(t,n)};
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
 */function p(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t}O(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}var E=function(){return(E=Object.assign||function(t){for(var n,i=1,e=arguments.length;i<e;i++)for(var r in n=arguments[i])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}).apply(this,arguments)},I={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},C={NOTCH_ELEMENT_PADDING:8},L={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"},_=function(t){function n(i){return t.call(this,E(E({},n.defaultAdapter),i))||this}return p(n,t),Object.defineProperty(n,"strings",{get:function(){return I},enumerable:!1,configurable:!0}),Object.defineProperty(n,"cssClasses",{get:function(){return L},enumerable:!1,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return C},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),n.prototype.notch=function(t){var i=n.cssClasses.OUTLINE_NOTCHED;t>0&&(t+=C.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(t),this.adapter.addClass(i)},n.prototype.closeNotch=function(){this.adapter.removeClass(n.cssClasses.OUTLINE_NOTCHED),this.adapter.removeNotchWidthProperty()},n}(t),T=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return p(n,t),n.attachTo=function(t){return new n(t)},n.prototype.initialSyncWithDOM=function(){this.notchElement=this.root.querySelector(I.NOTCH_ELEMENT_SELECTOR);var t=this.root.querySelector("."+o.cssClasses.ROOT);t?(t.style.transitionDuration="0s",this.root.classList.add(L.OUTLINE_UPGRADED),requestAnimationFrame((function(){t.style.transitionDuration=""}))):this.root.classList.add(L.NO_LABEL)},n.prototype.notch=function(t){this.foundation.notch(t)},n.prototype.closeNotch=function(){this.foundation.closeNotch()},n.prototype.getDefaultFoundation=function(){var t=this;return new _({addClass:function(n){return t.root.classList.add(n)},removeClass:function(n){return t.root.classList.remove(n)},setNotchWidthProperty:function(n){t.notchElement.style.setProperty("width",n+"px")},removeNotchWidthProperty:function(){t.notchElement.style.removeProperty("width")}})},n}(n),x={ROOT:"mdc-text-field-character-counter"},A={ROOT_SELECTOR:"."+x.ROOT},j=function(t){function n(i){return t.call(this,h(h({},n.defaultAdapter),i))||this}return f(n,t),Object.defineProperty(n,"cssClasses",{get:function(){return x},enumerable:!1,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return A},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{setContent:function(){}}},enumerable:!1,configurable:!0}),n.prototype.setCounterValue=function(t,n){t=Math.min(t,n),this.adapter.setContent(t+" / "+n)},n}(t),y=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return f(n,t),n.attachTo=function(t){return new n(t)},Object.defineProperty(n.prototype,"foundationForTextField",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),n.prototype.getDefaultFoundation=function(){var t=this;return new j({setContent:function(n){t.root.textContent=n}})},n}(n),w={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},R={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon",WITH_INTERNAL_COUNTER:"mdc-text-field--with-internal-counter"},N={LABEL_SCALE:.75},H=["pattern","min","max","required","step","minlength","maxlength"],S=["color","date","datetime-local","month","range","time","week"],F=["mousedown","touchstart"],D=["click","keydown"],P=function(t){function n(i,e){void 0===e&&(e={});var r=t.call(this,h(h({},n.defaultAdapter),i))||this;return r.isFocused=!1,r.receivedUserInput=!1,r.valid=!0,r.useNativeValidation=!0,r.validateOnValueChange=!0,r.helperText=e.helperText,r.characterCounter=e.characterCounter,r.leadingIcon=e.leadingIcon,r.trailingIcon=e.trailingIcon,r.inputFocusHandler=function(){r.activateFocus()},r.inputBlurHandler=function(){r.deactivateFocus()},r.inputInputHandler=function(){r.handleInput()},r.setPointerXOffset=function(t){r.setTransformOrigin(t)},r.textFieldInteractionHandler=function(){r.handleTextFieldInteraction()},r.validationAttributeChangeHandler=function(t){r.handleValidationAttributeChange(t)},r}return f(n,t),Object.defineProperty(n,"cssClasses",{get:function(){return R},enumerable:!1,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return w},enumerable:!1,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return N},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"shouldAlwaysFloat",{get:function(){var t=this.getNativeInput().type;return S.indexOf(t)>=0},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat||this.isFocused||!!this.getValue()||this.isBadInput()},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"shouldShake",{get:function(){return!this.isFocused&&!this.isValid()&&!!this.getValue()},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver((function(){}))},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!1,configurable:!0}),n.prototype.init=function(){var t,n,i,e;this.adapter.hasLabel()&&this.getNativeInput().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler);try{for(var r=a(F),u=r.next();!u.done;u=r.next())this.adapter.registerInputInteractionHandler(u.value,this.setPointerXOffset)}catch(n){t={error:n}}finally{try{u&&!u.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}try{for(var o=a(D),s=o.next();!s.done;s=o.next())this.adapter.registerTextFieldInteractionHandler(s.value,this.textFieldInteractionHandler)}catch(t){i={error:t}}finally{try{s&&!s.done&&(e=o.return)&&e.call(o)}finally{if(i)throw i.error}}this.validationObserver=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler),this.setcharacterCounter(this.getValue().length)},n.prototype.destroy=function(){var t,n,i,e;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler);try{for(var r=a(F),u=r.next();!u.done;u=r.next())this.adapter.deregisterInputInteractionHandler(u.value,this.setPointerXOffset)}catch(n){t={error:n}}finally{try{u&&!u.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}try{for(var o=a(D),s=o.next();!s.done;s=o.next())this.adapter.deregisterTextFieldInteractionHandler(s.value,this.textFieldInteractionHandler)}catch(t){i={error:t}}finally{try{s&&!s.done&&(e=o.return)&&e.call(o)}finally{if(i)throw i.error}}this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)},n.prototype.handleTextFieldInteraction=function(){var t=this.adapter.getNativeInput();t&&t.disabled||(this.receivedUserInput=!0)},n.prototype.handleValidationAttributeChange=function(t){var n=this;t.some((function(t){return H.indexOf(t)>-1&&(n.styleValidity(!0),n.adapter.setLabelRequired(n.getNativeInput().required),!0)})),t.indexOf("maxlength")>-1&&this.setcharacterCounter(this.getValue().length)},n.prototype.notchOutline=function(t){if(this.adapter.hasOutline()&&this.adapter.hasLabel())if(t){var n=this.adapter.getLabelWidth()*N.LABEL_SCALE;this.adapter.notchOutline(n)}else this.adapter.closeOutline()},n.prototype.activateFocus=function(){this.isFocused=!0,this.styleFocused(this.isFocused),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),!this.helperText||!this.helperText.isPersistent()&&this.helperText.isValidation()&&this.valid||this.helperText.showToScreenReader()},n.prototype.setTransformOrigin=function(t){if(!this.isDisabled()&&!this.adapter.hasOutline()){var n=t.touches,i=n?n[0]:t,e=i.target.getBoundingClientRect();this.adapter.setLineRippleTransformOrigin(i.clientX-e.left)}},n.prototype.handleInput=function(){this.autoCompleteFocus(),this.setcharacterCounter(this.getValue().length)},n.prototype.autoCompleteFocus=function(){this.receivedUserInput||this.activateFocus()},n.prototype.deactivateFocus=function(){this.isFocused=!1,this.adapter.deactivateLineRipple();var t=this.isValid();this.styleValidity(t),this.styleFocused(this.isFocused),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput=!1)},n.prototype.getValue=function(){return this.getNativeInput().value},n.prototype.setValue=function(t){if(this.getValue()!==t&&(this.getNativeInput().value=t),this.setcharacterCounter(t.length),this.validateOnValueChange){var n=this.isValid();this.styleValidity(n)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.validateOnValueChange&&this.adapter.shakeLabel(this.shouldShake))},n.prototype.isValid=function(){return this.useNativeValidation?this.isNativeInputValid():this.valid},n.prototype.setValid=function(t){this.valid=t,this.styleValidity(t);var n=!t&&!this.isFocused&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(n)},n.prototype.setValidateOnValueChange=function(t){this.validateOnValueChange=t},n.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange},n.prototype.setUseNativeValidation=function(t){this.useNativeValidation=t},n.prototype.isDisabled=function(){return this.getNativeInput().disabled},n.prototype.setDisabled=function(t){this.getNativeInput().disabled=t,this.styleDisabled(t)},n.prototype.setHelperTextContent=function(t){this.helperText&&this.helperText.setContent(t)},n.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon&&this.leadingIcon.setAriaLabel(t)},n.prototype.setLeadingIconContent=function(t){this.leadingIcon&&this.leadingIcon.setContent(t)},n.prototype.setTrailingIconAriaLabel=function(t){this.trailingIcon&&this.trailingIcon.setAriaLabel(t)},n.prototype.setTrailingIconContent=function(t){this.trailingIcon&&this.trailingIcon.setContent(t)},n.prototype.setcharacterCounter=function(t){if(this.characterCounter){var n=this.getNativeInput().maxLength;if(-1===n)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter.setCounterValue(t,n)}},n.prototype.isBadInput=function(){return this.getNativeInput().validity.badInput||!1},n.prototype.isNativeInputValid=function(){return this.getNativeInput().validity.valid},n.prototype.styleValidity=function(t){var i=n.cssClasses.INVALID;if(t?this.adapter.removeClass(i):this.adapter.addClass(i),this.helperText){if(this.helperText.setValidity(t),!this.helperText.isValidation())return;var e=this.helperText.isVisible(),r=this.helperText.getId();e&&r?this.adapter.setInputAttr(w.ARIA_DESCRIBEDBY,r):this.adapter.removeInputAttr(w.ARIA_DESCRIBEDBY)}},n.prototype.styleFocused=function(t){var i=n.cssClasses.FOCUSED;t?this.adapter.addClass(i):this.adapter.removeClass(i)},n.prototype.styleDisabled=function(t){var i=n.cssClasses,e=i.DISABLED,r=i.INVALID;t?(this.adapter.addClass(e),this.adapter.removeClass(r)):this.adapter.removeClass(e),this.leadingIcon&&this.leadingIcon.setDisabled(t),this.trailingIcon&&this.trailingIcon.setDisabled(t)},n.prototype.styleFloating=function(t){var i=n.cssClasses.LABEL_FLOATING;t?this.adapter.addClass(i):this.adapter.removeClass(i)},n.prototype.getNativeInput=function(){return(this.adapter?this.adapter.getNativeInput():null)||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},n}(t),M={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},B={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+M.ROOT},V=function(t){function n(i){return t.call(this,h(h({},n.defaultAdapter),i))||this}return f(n,t),Object.defineProperty(n,"cssClasses",{get:function(){return M},enumerable:!1,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return B},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),n.prototype.getId=function(){return this.adapter.getAttr("id")},n.prototype.isVisible=function(){return"true"!==this.adapter.getAttr(B.ARIA_HIDDEN)},n.prototype.setContent=function(t){this.adapter.setContent(t)},n.prototype.isPersistent=function(){return this.adapter.hasClass(M.HELPER_TEXT_PERSISTENT)},n.prototype.setPersistent=function(t){t?this.adapter.addClass(M.HELPER_TEXT_PERSISTENT):this.adapter.removeClass(M.HELPER_TEXT_PERSISTENT)},n.prototype.isValidation=function(){return this.adapter.hasClass(M.HELPER_TEXT_VALIDATION_MSG)},n.prototype.setValidation=function(t){t?this.adapter.addClass(M.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(M.HELPER_TEXT_VALIDATION_MSG)},n.prototype.showToScreenReader=function(){this.adapter.removeAttr(B.ARIA_HIDDEN)},n.prototype.setValidity=function(t){var n=this.adapter.hasClass(M.HELPER_TEXT_PERSISTENT),i=this.adapter.hasClass(M.HELPER_TEXT_VALIDATION_MSG)&&!t;i?(this.showToScreenReader(),"alert"===this.adapter.getAttr(B.ROLE)?this.refreshAlertRole():this.adapter.setAttr(B.ROLE,"alert")):this.adapter.removeAttr(B.ROLE),n||i||this.hide()},n.prototype.hide=function(){this.adapter.setAttr(B.ARIA_HIDDEN,"true")},n.prototype.refreshAlertRole=function(){var t=this;this.adapter.removeAttr(B.ROLE),requestAnimationFrame((function(){t.adapter.setAttr(B.ROLE,"alert")}))},n}(t),k=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return f(n,t),n.attachTo=function(t){return new n(t)},Object.defineProperty(n.prototype,"foundationForTextField",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),n.prototype.getDefaultFoundation=function(){var t=this;return new V({addClass:function(n){return t.root.classList.add(n)},removeClass:function(n){return t.root.classList.remove(n)},hasClass:function(n){return t.root.classList.contains(n)},getAttr:function(n){return t.root.getAttribute(n)},setAttr:function(n,i){return t.root.setAttribute(n,i)},removeAttr:function(n){return t.root.removeAttribute(n)},setContent:function(n){t.root.textContent=n}})},n}(n),G={ICON_EVENT:"MDCTextField:icon",ICON_ROLE:"button"},U={ROOT:"mdc-text-field__icon"},W=["click","keydown"],q=function(t){function n(i){var e=t.call(this,h(h({},n.defaultAdapter),i))||this;return e.savedTabIndex=null,e.interactionHandler=function(t){e.handleInteraction(t)},e}return f(n,t),Object.defineProperty(n,"strings",{get:function(){return G},enumerable:!1,configurable:!0}),Object.defineProperty(n,"cssClasses",{get:function(){return U},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},notifyIconAction:function(){}}},enumerable:!1,configurable:!0}),n.prototype.init=function(){var t,n;this.savedTabIndex=this.adapter.getAttr("tabindex");try{for(var i=a(W),e=i.next();!e.done;e=i.next())this.adapter.registerInteractionHandler(e.value,this.interactionHandler)}catch(n){t={error:n}}finally{try{e&&!e.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},n.prototype.destroy=function(){var t,n;try{for(var i=a(W),e=i.next();!e.done;e=i.next())this.adapter.deregisterInteractionHandler(e.value,this.interactionHandler)}catch(n){t={error:n}}finally{try{e&&!e.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},n.prototype.setDisabled=function(t){this.savedTabIndex&&(t?(this.adapter.setAttr("tabindex","-1"),this.adapter.removeAttr("role")):(this.adapter.setAttr("tabindex",this.savedTabIndex),this.adapter.setAttr("role",G.ICON_ROLE)))},n.prototype.setAriaLabel=function(t){this.adapter.setAttr("aria-label",t)},n.prototype.setContent=function(t){this.adapter.setContent(t)},n.prototype.handleInteraction=function(t){("click"===t.type||"Enter"===t.key||13===t.keyCode)&&(t.preventDefault(),this.adapter.notifyIconAction())},n}(t),X=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return f(n,t),n.attachTo=function(t){return new n(t)},Object.defineProperty(n.prototype,"foundationForTextField",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),n.prototype.getDefaultFoundation=function(){var t=this;return new q({getAttr:function(n){return t.root.getAttribute(n)},setAttr:function(n,i){return t.root.setAttribute(n,i)},removeAttr:function(n){return t.root.removeAttribute(n)},setContent:function(n){t.root.textContent=n},registerInteractionHandler:function(n,i){return t.listen(n,i)},deregisterInteractionHandler:function(n,i){return t.unlisten(n,i)},notifyIconAction:function(){return t.emit(q.strings.ICON_EVENT,{},!0)}})},n}(n),Y=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return f(n,t),n.attachTo=function(t){return new n(t)},n.prototype.initialize=function(t,n,i,r,u,o,c){void 0===t&&(t=function(t,n){return new e(t,n)}),void 0===n&&(n=function(t){return new v(t)}),void 0===i&&(i=function(t){return new k(t)}),void 0===r&&(r=function(t){return new y(t)}),void 0===u&&(u=function(t){return new X(t)}),void 0===o&&(o=function(t){return new s(t)}),void 0===c&&(c=function(t){return new T(t)}),this.input=this.root.querySelector(w.INPUT_SELECTOR);var f=this.root.querySelector(w.LABEL_SELECTOR);this.label=f?o(f):null;var h=this.root.querySelector(w.LINE_RIPPLE_SELECTOR);this.lineRipple=h?n(h):null;var a=this.root.querySelector(w.OUTLINE_SELECTOR);this.outline=a?c(a):null;var l=V.strings,d=this.root.nextElementSibling,b=d&&d.classList.contains(R.HELPER_LINE),g=b&&d&&d.querySelector(l.ROOT_SELECTOR);this.helperText=g?i(g):null;var m=j.strings,O=this.root.querySelector(m.ROOT_SELECTOR);!O&&b&&d&&(O=d.querySelector(m.ROOT_SELECTOR)),this.characterCounter=O?r(O):null;var p=this.root.querySelector(w.LEADING_ICON_SELECTOR);this.leadingIcon=p?u(p):null;var E=this.root.querySelector(w.TRAILING_ICON_SELECTOR);this.trailingIcon=E?u(E):null,this.prefix=this.root.querySelector(w.PREFIX_SELECTOR),this.suffix=this.root.querySelector(w.SUFFIX_SELECTOR),this.ripple=this.createRipple(t)},n.prototype.destroy=function(){this.ripple&&this.ripple.destroy(),this.lineRipple&&this.lineRipple.destroy(),this.helperText&&this.helperText.destroy(),this.characterCounter&&this.characterCounter.destroy(),this.leadingIcon&&this.leadingIcon.destroy(),this.trailingIcon&&this.trailingIcon.destroy(),this.label&&this.label.destroy(),this.outline&&this.outline.destroy(),t.prototype.destroy.call(this)},n.prototype.initialSyncWithDOM=function(){this.disabled=this.input.disabled},Object.defineProperty(n.prototype,"value",{get:function(){return this.foundation.getValue()},set:function(t){this.foundation.setValue(t)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"disabled",{get:function(){return this.foundation.isDisabled()},set:function(t){this.foundation.setDisabled(t)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"valid",{get:function(){return this.foundation.isValid()},set:function(t){this.foundation.setValid(t)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"required",{get:function(){return this.input.required},set:function(t){this.input.required=t},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"pattern",{get:function(){return this.input.pattern},set:function(t){this.input.pattern=t},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"minLength",{get:function(){return this.input.minLength},set:function(t){this.input.minLength=t},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"maxLength",{get:function(){return this.input.maxLength},set:function(t){t<0?this.input.removeAttribute("maxLength"):this.input.maxLength=t},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"min",{get:function(){return this.input.min},set:function(t){this.input.min=t},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"max",{get:function(){return this.input.max},set:function(t){this.input.max=t},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"step",{get:function(){return this.input.step},set:function(t){this.input.step=t},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"helperTextContent",{set:function(t){this.foundation.setHelperTextContent(t)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"leadingIconAriaLabel",{set:function(t){this.foundation.setLeadingIconAriaLabel(t)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"leadingIconContent",{set:function(t){this.foundation.setLeadingIconContent(t)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"trailingIconAriaLabel",{set:function(t){this.foundation.setTrailingIconAriaLabel(t)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"trailingIconContent",{set:function(t){this.foundation.setTrailingIconContent(t)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"useNativeValidation",{set:function(t){this.foundation.setUseNativeValidation(t)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"prefixText",{get:function(){return this.prefix?this.prefix.textContent:null},set:function(t){this.prefix&&(this.prefix.textContent=t)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"suffixText",{get:function(){return this.suffix?this.suffix.textContent:null},set:function(t){this.suffix&&(this.suffix.textContent=t)},enumerable:!1,configurable:!0}),n.prototype.focus=function(){this.input.focus()},n.prototype.layout=function(){this.foundation.notchOutline(this.foundation.shouldFloat)},n.prototype.getDefaultFoundation=function(){var t=h(h(h(h(h({},this.getRootAdapterMethods()),this.getInputAdapterMethods()),this.getLabelAdapterMethods()),this.getLineRippleAdapterMethods()),this.getOutlineAdapterMethods());return new P(t,this.getFoundationMap())},n.prototype.getRootAdapterMethods=function(){var t=this;return{addClass:function(n){return t.root.classList.add(n)},removeClass:function(n){return t.root.classList.remove(n)},hasClass:function(n){return t.root.classList.contains(n)},registerTextFieldInteractionHandler:function(n,i){t.listen(n,i)},deregisterTextFieldInteractionHandler:function(n,i){t.unlisten(n,i)},registerValidationAttributeChangeHandler:function(n){var i=new MutationObserver((function(t){return n(function(t){return t.map((function(t){return t.attributeName})).filter((function(t){return t}))}(t))}));return i.observe(t.input,{attributes:!0}),i},deregisterValidationAttributeChangeHandler:function(t){t.disconnect()}}},n.prototype.getInputAdapterMethods=function(){var t=this;return{getNativeInput:function(){return t.input},setInputAttr:function(n,i){t.input.setAttribute(n,i)},removeInputAttr:function(n){t.input.removeAttribute(n)},isFocused:function(){return document.activeElement===t.input},registerInputInteractionHandler:function(n,e){t.input.addEventListener(n,e,i())},deregisterInputInteractionHandler:function(n,e){t.input.removeEventListener(n,e,i())}}},n.prototype.getLabelAdapterMethods=function(){var t=this;return{floatLabel:function(n){t.label&&t.label.float(n)},getLabelWidth:function(){return t.label?t.label.getWidth():0},hasLabel:function(){return Boolean(t.label)},shakeLabel:function(n){t.label&&t.label.shake(n)},setLabelRequired:function(n){t.label&&t.label.setRequired(n)}}},n.prototype.getLineRippleAdapterMethods=function(){var t=this;return{activateLineRipple:function(){t.lineRipple&&t.lineRipple.activate()},deactivateLineRipple:function(){t.lineRipple&&t.lineRipple.deactivate()},setLineRippleTransformOrigin:function(n){t.lineRipple&&t.lineRipple.setRippleCenter(n)}}},n.prototype.getOutlineAdapterMethods=function(){var t=this;return{closeOutline:function(){t.outline&&t.outline.closeNotch()},hasOutline:function(){return Boolean(t.outline)},notchOutline:function(n){t.outline&&t.outline.notch(n)}}},n.prototype.getFoundationMap=function(){return{characterCounter:this.characterCounter?this.characterCounter.foundationForTextField:void 0,helperText:this.helperText?this.helperText.foundationForTextField:void 0,leadingIcon:this.leadingIcon?this.leadingIcon.foundationForTextField:void 0,trailingIcon:this.trailingIcon?this.trailingIcon.foundationForTextField:void 0}},n.prototype.createRipple=function(t){var n=this,o=this.root.classList.contains(R.TEXTAREA),s=this.root.classList.contains(R.OUTLINED);if(o||s)return null;var c=h(h({},e.createAdapter(this)),{isSurfaceActive:function(){return u(n.input,":active")},registerInteractionHandler:function(t,e){n.input.addEventListener(t,e,i())},deregisterInteractionHandler:function(t,e){n.input.removeEventListener(t,e,i())}});return t(this.root,new r(c))},n}(n);
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
 */export{Y as M}