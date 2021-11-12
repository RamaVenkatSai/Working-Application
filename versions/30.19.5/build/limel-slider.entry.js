import{r as t,c as e,h as r,g as i}from"./index-9cbaf4f2.js";import{_ as o,a as n,M as a,b as s}from"./component-385aa964.js";import{a as c}from"./events-16e3b5e6.js";import{g as d,a as l}from"./util-0486b224.js";
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var m={ACTIVE:"mdc-slider--active",DISABLED:"mdc-slider--disabled",DISCRETE:"mdc-slider--discrete",FOCUS:"mdc-slider--focus",HAS_TRACK_MARKER:"mdc-slider--display-markers",IN_TRANSIT:"mdc-slider--in-transit",IS_DISCRETE:"mdc-slider--discrete"},h={ARIA_DISABLED:"aria-disabled",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",CHANGE_EVENT:"MDCSlider:change",INPUT_EVENT:"MDCSlider:input",PIN_VALUE_MARKER_SELECTOR:".mdc-slider__pin-value-marker",STEP_DATA_ATTR:"data-step",THUMB_CONTAINER_SELECTOR:".mdc-slider__thumb-container",TRACK_MARKER_CONTAINER_SELECTOR:".mdc-slider__track-marker-container",TRACK_SELECTOR:".mdc-slider__track"},f={PAGE_FACTOR:4},u=["mousedown","pointerdown","touchstart"],g=["mouseup","pointerup","touchend"],p={mousedown:"mousemove",pointerdown:"pointermove",touchstart:"touchmove"},b=function(t){function e(r){var i=t.call(this,n({},e.defaultAdapter,r))||this;return i.savedTabIndex_=NaN,i.active_=!1,i.inTransit_=!1,i.isDiscrete_=!1,i.hasTrackMarker_=!1,i.handlingThumbTargetEvt_=!1,i.min_=0,i.max_=100,i.step_=0,i.value_=0,i.disabled_=!1,i.preventFocusState_=!1,i.thumbContainerPointerHandler_=function(){return i.handlingThumbTargetEvt_=!0},i.interactionStartHandler_=function(t){return i.handleDown_(t)},i.keydownHandler_=function(t){return i.handleKeydown_(t)},i.focusHandler_=function(){return i.handleFocus_()},i.blurHandler_=function(){return i.handleBlur_()},i.resizeHandler_=function(){return i.layout()},i}return o(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return m},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return h},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return f},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},addClass:function(){},removeClass:function(){},getAttribute:function(){return null},setAttribute:function(){},removeAttribute:function(){},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabIndex:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},registerThumbContainerInteractionHandler:function(){},deregisterThumbContainerInteractionHandler:function(){},registerBodyInteractionHandler:function(){},deregisterBodyInteractionHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},notifyInput:function(){},notifyChange:function(){},setThumbContainerStyleProperty:function(){},setTrackStyleProperty:function(){},setMarkerValue:function(){},setTrackMarkers:function(){},isRTL:function(){return!1}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this;this.isDiscrete_=this.adapter_.hasClass(m.IS_DISCRETE),this.hasTrackMarker_=this.adapter_.hasClass(m.HAS_TRACK_MARKER),u.forEach((function(e){t.adapter_.registerInteractionHandler(e,t.interactionStartHandler_),t.adapter_.registerThumbContainerInteractionHandler(e,t.thumbContainerPointerHandler_)})),this.adapter_.registerInteractionHandler("keydown",this.keydownHandler_),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_),this.adapter_.registerResizeHandler(this.resizeHandler_),this.layout(),this.isDiscrete_&&0===this.getStep()&&(this.step_=1)},e.prototype.destroy=function(){var t=this;u.forEach((function(e){t.adapter_.deregisterInteractionHandler(e,t.interactionStartHandler_),t.adapter_.deregisterThumbContainerInteractionHandler(e,t.thumbContainerPointerHandler_)})),this.adapter_.deregisterInteractionHandler("keydown",this.keydownHandler_),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.deregisterResizeHandler(this.resizeHandler_)},e.prototype.setupTrackMarker=function(){this.isDiscrete_&&this.hasTrackMarker_&&0!==this.getStep()&&this.adapter_.setTrackMarkers(this.getStep(),this.getMax(),this.getMin())},e.prototype.layout=function(){this.rect_=this.adapter_.computeBoundingRect(),this.updateUIForCurrentValue_()},e.prototype.getValue=function(){return this.value_},e.prototype.setValue=function(t){this.setValue_(t,!1)},e.prototype.getMax=function(){return this.max_},e.prototype.setMax=function(t){if(t<this.min_)throw new Error("Cannot set max to be less than the slider's minimum value");this.max_=t,this.setValue_(this.value_,!1,!0),this.adapter_.setAttribute(h.ARIA_VALUEMAX,String(this.max_)),this.setupTrackMarker()},e.prototype.getMin=function(){return this.min_},e.prototype.setMin=function(t){if(t>this.max_)throw new Error("Cannot set min to be greater than the slider's maximum value");this.min_=t,this.setValue_(this.value_,!1,!0),this.adapter_.setAttribute(h.ARIA_VALUEMIN,String(this.min_)),this.setupTrackMarker()},e.prototype.getStep=function(){return this.step_},e.prototype.setStep=function(t){if(t<0)throw new Error("Step cannot be set to a negative number");this.isDiscrete_&&("number"!=typeof t||t<1)&&(t=1),this.step_=t,this.setValue_(this.value_,!1,!0),this.setupTrackMarker()},e.prototype.isDisabled=function(){return this.disabled_},e.prototype.setDisabled=function(t){this.disabled_=t,this.toggleClass_(m.DISABLED,this.disabled_),this.disabled_?(this.savedTabIndex_=this.adapter_.getTabIndex(),this.adapter_.setAttribute(h.ARIA_DISABLED,"true"),this.adapter_.removeAttribute("tabindex")):(this.adapter_.removeAttribute(h.ARIA_DISABLED),isNaN(this.savedTabIndex_)||this.adapter_.setAttribute("tabindex",String(this.savedTabIndex_)))},e.prototype.handleDown_=function(t){var e=this;if(!this.disabled_){this.preventFocusState_=!0,this.setInTransit_(!this.handlingThumbTargetEvt_),this.handlingThumbTargetEvt_=!1,this.setActive_(!0);var r=function(t){e.handleMove_(t)},i=p[t.type],o=function(){e.handleUp_(),e.adapter_.deregisterBodyInteractionHandler(i,r),g.forEach((function(t){return e.adapter_.deregisterBodyInteractionHandler(t,o)}))};this.adapter_.registerBodyInteractionHandler(i,r),g.forEach((function(t){return e.adapter_.registerBodyInteractionHandler(t,o)})),this.setValueFromEvt_(t)}},e.prototype.handleMove_=function(t){t.preventDefault(),this.setValueFromEvt_(t)},e.prototype.handleUp_=function(){this.setActive_(!1),this.adapter_.notifyChange()},e.prototype.getPageX_=function(t){return t.targetTouches&&t.targetTouches.length>0?t.targetTouches[0].pageX:t.pageX},e.prototype.setValueFromEvt_=function(t){var e=this.getPageX_(t),r=this.computeValueFromPageX_(e);this.setValue_(r,!0)},e.prototype.computeValueFromPageX_=function(t){var e=this.max_,r=this.min_,i=(t-this.rect_.left)/this.rect_.width;return this.adapter_.isRTL()&&(i=1-i),r+i*(e-r)},e.prototype.handleKeydown_=function(t){var e=this.getKeyId_(t),r=this.getValueForKeyId_(e);isNaN(r)||(t.preventDefault(),this.adapter_.addClass(m.FOCUS),this.setValue_(r,!0),this.adapter_.notifyChange())},e.prototype.getKeyId_=function(t){return"ArrowLeft"===t.key||37===t.keyCode?"ArrowLeft":"ArrowRight"===t.key||39===t.keyCode?"ArrowRight":"ArrowUp"===t.key||38===t.keyCode?"ArrowUp":"ArrowDown"===t.key||40===t.keyCode?"ArrowDown":"Home"===t.key||36===t.keyCode?"Home":"End"===t.key||35===t.keyCode?"End":"PageUp"===t.key||33===t.keyCode?"PageUp":"PageDown"===t.key||34===t.keyCode?"PageDown":""},e.prototype.getValueForKeyId_=function(t){var e=this,r=e.step_||(e.max_-e.min_)/100;switch(this.adapter_.isRTL()&&("ArrowLeft"===t||"ArrowRight"===t)&&(r=-r),t){case"ArrowLeft":case"ArrowDown":return this.value_-r;case"ArrowRight":case"ArrowUp":return this.value_+r;case"Home":return this.min_;case"End":return this.max_;case"PageUp":return this.value_+r*f.PAGE_FACTOR;case"PageDown":return this.value_-r*f.PAGE_FACTOR;default:return NaN}},e.prototype.handleFocus_=function(){this.preventFocusState_||this.adapter_.addClass(m.FOCUS)},e.prototype.handleBlur_=function(){this.preventFocusState_=!1,this.adapter_.removeClass(m.FOCUS)},e.prototype.setValue_=function(t,e,r){if(void 0===r&&(r=!1),t!==this.value_||r){var i=this.min_,o=this.max_;this.step_&&!(t===i||t===o)&&(t=this.quantize_(t)),t<i?t=i:t>o&&(t=o),this.value_=t,this.adapter_.setAttribute(h.ARIA_VALUENOW,String(this.value_)),this.updateUIForCurrentValue_(),e&&(this.adapter_.notifyInput(),this.isDiscrete_&&this.adapter_.setMarkerValue(t))}},e.prototype.quantize_=function(t){return Math.round(t/this.step_)*this.step_},e.prototype.updateUIForCurrentValue_=function(){var t=this,e=this,r=e.min_,i=(e.value_-r)/(e.max_-r),o=i*this.rect_.width;this.adapter_.isRTL()&&(o=this.rect_.width-o);var n=d(window,"transform"),a=l(window,"transitionend");if(this.inTransit_){var s=function(){t.setInTransit_(!1),t.adapter_.deregisterThumbContainerInteractionHandler(a,s)};this.adapter_.registerThumbContainerInteractionHandler(a,s)}requestAnimationFrame((function(){t.adapter_.setThumbContainerStyleProperty(n,"translateX("+o+"px) translateX(-50%)"),t.adapter_.setTrackStyleProperty(n,"scaleX("+i+")")}))},e.prototype.setActive_=function(t){this.active_=t,this.toggleClass_(m.ACTIVE,this.active_)},e.prototype.setInTransit_=function(t){this.inTransit_=t,this.toggleClass_(m.IN_TRANSIT,this.inTransit_)},e.prototype.toggleClass_=function(t,e){e?this.adapter_.addClass(t):this.adapter_.removeClass(t)},e}(a),_=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"value",{get:function(){return this.foundation_.getValue()},set:function(t){this.foundation_.setValue(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"min",{get:function(){return this.foundation_.getMin()},set:function(t){this.foundation_.setMin(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"max",{get:function(){return this.foundation_.getMax()},set:function(t){this.foundation_.setMax(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"step",{get:function(){return this.foundation_.getStep()},set:function(t){this.foundation_.setStep(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this.foundation_.isDisabled()},set:function(t){this.foundation_.setDisabled(t)},enumerable:!0,configurable:!0}),e.prototype.initialize=function(){this.thumbContainer_=this.root_.querySelector(h.THUMB_CONTAINER_SELECTOR),this.track_=this.root_.querySelector(h.TRACK_SELECTOR),this.pinValueMarker_=this.root_.querySelector(h.PIN_VALUE_MARKER_SELECTOR),this.trackMarkerContainer_=this.root_.querySelector(h.TRACK_MARKER_CONTAINER_SELECTOR)},e.prototype.getDefaultFoundation=function(){var t=this;return new b({hasClass:function(e){return t.root_.classList.contains(e)},addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},getAttribute:function(e){return t.root_.getAttribute(e)},setAttribute:function(e,r){return t.root_.setAttribute(e,r)},removeAttribute:function(e){return t.root_.removeAttribute(e)},computeBoundingRect:function(){return t.root_.getBoundingClientRect()},getTabIndex:function(){return t.root_.tabIndex},registerInteractionHandler:function(e,r){return t.listen(e,r,c())},deregisterInteractionHandler:function(e,r){return t.unlisten(e,r,c())},registerThumbContainerInteractionHandler:function(e,r){t.thumbContainer_.addEventListener(e,r,c())},deregisterThumbContainerInteractionHandler:function(e,r){t.thumbContainer_.removeEventListener(e,r,c())},registerBodyInteractionHandler:function(t,e){return document.body.addEventListener(t,e)},deregisterBodyInteractionHandler:function(t,e){return document.body.removeEventListener(t,e)},registerResizeHandler:function(t){return window.addEventListener("resize",t)},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},notifyInput:function(){return t.emit(h.INPUT_EVENT,t)},notifyChange:function(){return t.emit(h.CHANGE_EVENT,t)},setThumbContainerStyleProperty:function(e,r){t.thumbContainer_.style.setProperty(e,r)},setTrackStyleProperty:function(e,r){return t.track_.style.setProperty(e,r)},setMarkerValue:function(e){return t.pinValueMarker_.innerText=e.toLocaleString()},setTrackMarkers:function(e,r,i){var o=e.toLocaleString(),n=r.toLocaleString(),a=i.toLocaleString();t.trackMarkerContainer_.style.setProperty("background","linear-gradient(to right, currentColor 0.125rem, transparent 0) 0 center / calc((100% - 0.125rem) / (("+n+" - "+a+") / "+o+")) 100% repeat-x")},isRTL:function(){return"rtl"===getComputedStyle(t.root_).direction}})},e.prototype.initialSyncWithDOM=function(){var t=this.parseFloat_(this.root_.getAttribute(h.ARIA_VALUENOW),this.value),e=this.parseFloat_(this.root_.getAttribute(h.ARIA_VALUEMIN),this.min),r=this.parseFloat_(this.root_.getAttribute(h.ARIA_VALUEMAX),this.max);e>=this.max?(this.max=r,this.min=e):(this.min=e,this.max=r),this.step=this.parseFloat_(this.root_.getAttribute(h.STEP_DATA_ATTR),this.step),this.value=t,this.disabled=this.root_.hasAttribute(h.ARIA_DISABLED)&&"false"!==this.root_.getAttribute(h.ARIA_DISABLED),this.foundation_.setupTrackMarker()},e.prototype.layout=function(){this.foundation_.layout()},e.prototype.stepUp=function(t){void 0===t&&(t=this.step||1),this.value+=t},e.prototype.stepDown=function(t){void 0===t&&(t=this.step||1),this.value-=t},e.prototype.parseFloat_=function(t,e){var r=parseFloat(t);return"number"==typeof r&&isFinite(r)?r:e},e}(s);const y=class{constructor(r){t(this,r),this.change=e(this,"change",7),this.disabled=!1,this.factor=1,this.unit="",this.valuemax=100,this.valuemin=0,this.changeHandler=t=>{this.change.emit(t.detail.value/this.factor)},this.inputHandler=this.inputHandler.bind(this)}connectedCallback(){this.initialize()}componentDidLoad(){this.initialize()}initialize(){const t=this.rootElement.shadowRoot.querySelector(".mdc-slider");t&&(this.mdcSlider=new _(t),this.mdcSlider.listen("MDCSlider:change",this.changeHandler),this.mdcSlider.listen("MDCSlider:input",this.inputHandler))}componentWillLoad(){this.setPercentageClass(this.value)}componentWillUpdate(){this.mdcSlider.disabled=this.disabled}disconnectedCallback(){this.mdcSlider.unlisten("MDCSlider:change",this.changeHandler),this.mdcSlider.unlisten("MDCSlider:input",this.inputHandler),this.mdcSlider.destroy()}render(){return r("div",{class:`slider ${this.percentageClass}`},r("label",{class:"slider__label mdc-floating-label mdc-floating-label--float-above"},this.label),r("div",{class:"slider__content"},r("div",{class:"slider__content-range-container"},r("span",{class:"slider__content-min-label"},this.multiplyByFactor(this.valuemin),this.unit),r("span",{class:"slider__content-max-label"},this.multiplyByFactor(this.valuemax),this.unit)),r("div",{class:"mdc-slider mdc-slider--discrete",role:"slider","aria-valuemin":this.multiplyByFactor(this.valuemin),"aria-valuemax":this.multiplyByFactor(this.valuemax),"aria-valuenow":this.multiplyByFactor(this.getValue()),"aria-label":this.label,"aria-disabled":this.disabled,"data-step":this.step},r("div",{class:"mdc-slider__track-container"},r("div",{class:"mdc-slider__track"})),r("div",{class:"mdc-slider__thumb-container"},r("div",{class:"mdc-slider__pin"},r("span",{class:"mdc-slider__pin-value-marker"},this.multiplyByFactor(this.getValue()))),r("svg",{class:"mdc-slider__thumb",width:"21",height:"21"},r("circle",{cx:"10.5",cy:"10.5",r:"7.875"})),r("div",{class:"mdc-slider__focus-ring"})))),this.renderHelperLine())}renderHelperLine(){if(this.helperText)return r("div",{class:"mdc-slider-helper-line"},r("p",{class:"mdc-slider-helper-text"},this.helperText))}watchValue(){this.mdcSlider&&(this.mdcSlider.value=this.multiplyByFactor(this.getValue()))}multiplyByFactor(t){return Math.round(t*this.factor)}getValue(){let t=this.value;return isFinite(t)||(t=this.valuemin),t}inputHandler(t){this.setPercentageClass(t.detail.value/this.factor)}setPercentageClass(t){this.percentageClass=function(t){return 0===t?"percent-0":t<.1?"percent-0-10":t<.2?"percent-10-20":t<.3?"percent-20-30":t<.4?"percent-30-40":t<.5?"percent-40-50":t<.6?"percent-50-60":t<.7?"percent-60-70":t<.8?"percent-70-80":t<.9?"percent-80-90":"percent-90-100"}((t-this.valuemin)/(this.valuemax-this.valuemin))}get rootElement(){return i(this)}static get watchers(){return{value:["watchValue"]}}};y.style=":host{--mdc-theme-primary:var(--lime-primary-color, #26a69a);--mdc-theme-secondary:var(--lime-secondary-color, #575756);--mdc-theme-on-primary:var(\n      --lime-on-primary-color,\n      #fff\n  );--mdc-theme-on-secondary:var(\n      --lime-on-secondary-color,\n      #fff\n  )}:root{--mdc-theme-primary:#26a69a;--mdc-theme-secondary:#575756;--mdc-theme-background:#fff;--mdc-theme-surface:#fff;--mdc-theme-error:#b00020;--mdc-theme-on-primary:#fff;--mdc-theme-on-secondary:#fff;--mdc-theme-on-surface:#000;--mdc-theme-on-error:#fff;--mdc-theme-text-primary-on-background:rgba(0, 0, 0, 0.87);--mdc-theme-text-secondary-on-background:rgba(0, 0, 0, 0.54);--mdc-theme-text-hint-on-background:rgba(0, 0, 0, 0.38);--mdc-theme-text-disabled-on-background:rgba(0, 0, 0, 0.38);--mdc-theme-text-icon-on-background:rgba(0, 0, 0, 0.38);--mdc-theme-text-primary-on-light:rgba(0, 0, 0, 0.87);--mdc-theme-text-secondary-on-light:rgba(0, 0, 0, 0.54);--mdc-theme-text-hint-on-light:rgba(0, 0, 0, 0.38);--mdc-theme-text-disabled-on-light:rgba(0, 0, 0, 0.38);--mdc-theme-text-icon-on-light:rgba(0, 0, 0, 0.38);--mdc-theme-text-primary-on-dark:white;--mdc-theme-text-secondary-on-dark:rgba(255, 255, 255, 0.7);--mdc-theme-text-hint-on-dark:rgba(255, 255, 255, 0.5);--mdc-theme-text-disabled-on-dark:rgba(255, 255, 255, 0.5);--mdc-theme-text-icon-on-dark:rgba(255, 255, 255, 0.5)}.mdc-theme--primary{color:#26a69a !important;color:var(--mdc-theme-primary, #26a69a) !important}.mdc-theme--secondary{color:#575756 !important;color:var(--mdc-theme-secondary, #575756) !important}.mdc-theme--background{background-color:#fff;background-color:var(--mdc-theme-background, #fff)}.mdc-theme--surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-theme--error{color:#b00020 !important;color:var(--mdc-theme-error, #b00020) !important}.mdc-theme--on-primary{color:#fff !important;color:var(--mdc-theme-on-primary, #fff) !important}.mdc-theme--on-secondary{color:#fff !important;color:var(--mdc-theme-on-secondary, #fff) !important}.mdc-theme--on-surface{color:#000 !important;color:var(--mdc-theme-on-surface, #000) !important}.mdc-theme--on-error{color:#fff !important;color:var(--mdc-theme-on-error, #fff) !important}.mdc-theme--text-primary-on-background{color:rgba(0, 0, 0, 0.87) !important;color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87)) !important}.mdc-theme--text-secondary-on-background{color:rgba(0, 0, 0, 0.54) !important;color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54)) !important}.mdc-theme--text-hint-on-background{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-disabled-on-background{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-disabled-on-background, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-icon-on-background{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-primary-on-light{color:rgba(0, 0, 0, 0.87) !important;color:var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87)) !important}.mdc-theme--text-secondary-on-light{color:rgba(0, 0, 0, 0.54) !important;color:var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54)) !important}.mdc-theme--text-hint-on-light{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-hint-on-light, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-disabled-on-light{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-icon-on-light{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-icon-on-light, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-primary-on-dark{color:white !important;color:var(--mdc-theme-text-primary-on-dark, white) !important}.mdc-theme--text-secondary-on-dark{color:rgba(255, 255, 255, 0.7) !important;color:var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7)) !important}.mdc-theme--text-hint-on-dark{color:rgba(255, 255, 255, 0.5) !important;color:var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5)) !important}.mdc-theme--text-disabled-on-dark{color:rgba(255, 255, 255, 0.5) !important;color:var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5)) !important}.mdc-theme--text-icon-on-dark{color:rgba(255, 255, 255, 0.5) !important;color:var(--mdc-theme-text-icon-on-dark, rgba(255, 255, 255, 0.5)) !important}.mdc-theme--primary-bg{background-color:#26a69a !important;background-color:var(--mdc-theme-primary, #26a69a) !important}.mdc-theme--secondary-bg{background-color:#575756 !important;background-color:var(--mdc-theme-secondary, #575756) !important}.mdc-typography{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}.mdc-typography--headline1{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.375rem;line-height:1.375rem;font-weight:300;letter-spacing:-0.015625em;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline2{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:0.875rem;font-weight:300;letter-spacing:-0.0083333333em;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline3{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:0.875rem;font-weight:400;letter-spacing:normal;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline4{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:0.875rem;font-weight:400;letter-spacing:0.0073529412em;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline5{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.875rem;line-height:0.875rem;font-weight:400;letter-spacing:normal;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline6{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.875rem;line-height:0.875rem;font-weight:500;letter-spacing:0.0125em;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle1{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.875rem;line-height:1.125rem;font-weight:400;letter-spacing:0.009375em;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle2{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.8125rem;line-height:1.125rem;font-weight:500;letter-spacing:0.0071428571em;text-decoration:inherit;text-transform:inherit}.mdc-typography--body1{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.8125rem;line-height:1.5rem;font-weight:400;letter-spacing:0.03125em;text-decoration:inherit;text-transform:inherit}.mdc-typography--body2{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.8125rem;line-height:1.625rem;font-weight:400;letter-spacing:0.0178571429em;text-decoration:inherit;text-transform:inherit}.mdc-typography--caption{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.6875rem;line-height:0.875rem;font-weight:400;letter-spacing:0.0333333333em;text-decoration:inherit;text-transform:inherit}.mdc-typography--button{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.875rem;line-height:2.25rem;font-weight:500;letter-spacing:0.0892857143em;text-decoration:none;text-transform:none}.mdc-typography--overline{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.6875rem;line-height:0.875rem;font-weight:500;letter-spacing:0.1666666667em;text-decoration:none;text-transform:uppercase}:host(.displays-percentage-colors){--color-percent--0:rgb(var(--color-gray-default));--color-percent--0to10:rgb(var(--color-red-dark));--color-percent--10to20:rgb(var(--color-red-default));--color-percent--20to30:rgb(var(--color-coral-default));--color-percent--30to40:rgb(var(--color-orange-default));--color-percent--40to50:rgb(var(--color-amber-default));--color-percent--50to60:rgb(var(--color-yellow-default));--color-percent--60to70:rgb(var(--color-grass-default));--color-percent--70to80:rgb(var(--color-lime-default));--color-percent--80to90:rgb(var(--color-teal-default));--color-percent--90to100:rgb(var(--color-teal-dark))}:host(.displays-percentage-colors) .slider.percent-0{--lime-primary-color:var(--color-percent--0)}:host(.displays-percentage-colors) .slider.percent-0-10{--lime-primary-color:var(--color-percent--0to10)}:host(.displays-percentage-colors) .slider.percent-10-20{--lime-primary-color:var(--color-percent--10to20)}:host(.displays-percentage-colors) .slider.percent-20-30{--lime-primary-color:var(--color-percent--20to30)}:host(.displays-percentage-colors) .slider.percent-30-40{--lime-primary-color:var(--color-percent--30to40)}:host(.displays-percentage-colors) .slider.percent-40-50{--lime-primary-color:var(--color-percent--40to50)}:host(.displays-percentage-colors) .slider.percent-50-60{--lime-primary-color:var(--color-percent--50to60)}:host(.displays-percentage-colors) .slider.percent-60-70{--lime-primary-color:var(--color-percent--60to70)}:host(.displays-percentage-colors) .slider.percent-70-80{--lime-primary-color:var(--color-percent--70to80)}:host(.displays-percentage-colors) .slider.percent-80-90{--lime-primary-color:var(--color-percent--80to90)}:host(.displays-percentage-colors) .slider.percent-90-100{--lime-primary-color:var(--color-percent--90to100)}:host(.displays-percentage-colors) .slider.percent-30-40 .mdc-slider__pin-value-marker,:host(.displays-percentage-colors) .slider.percent-40-50 .mdc-slider__pin-value-marker,:host(.displays-percentage-colors) .slider.percent-70-80 .mdc-slider__pin-value-marker{color:rgb(var(--color-gray-darker))}:host(.displays-percentage-colors) .slider.percent-50-60 .mdc-slider__pin-value-marker,:host(.displays-percentage-colors) .slider.percent-60-70 .mdc-slider__pin-value-marker{color:rgb(var(--color-gray-dark))}@keyframes mdc-slider-emphasize{0%{animation-timing-function:ease-out}50%{animation-timing-function:ease-in;transform:scale(0.85)}100%{transform:scale(0.571)}}.mdc-slider{position:relative;width:100%;height:3rem;cursor:pointer;touch-action:pan-x;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track{background-color:#575756;background-color:var(--mdc-theme-secondary, #575756)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-container{background-color:rgba(87, 87, 86, 0.26)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker-container{background-color:#575756;background-color:var(--mdc-theme-secondary, #575756)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb{fill:#575756;fill:var(--mdc-theme-secondary, #575756);stroke:#575756;stroke:var(--mdc-theme-secondary, #575756)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__focus-ring{background-color:#575756;background-color:var(--mdc-theme-secondary, #575756)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{background-color:#575756;background-color:var(--mdc-theme-secondary, #575756)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{color:white;color:var(--mdc-theme-text-primary-on-dark, white)}.mdc-slider--disabled{cursor:auto}.mdc-slider--disabled .mdc-slider__track{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__track-container{background-color:rgba(154, 154, 154, 0.26)}.mdc-slider--disabled .mdc-slider__track-marker-container{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{fill:#9a9a9a;stroke:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{stroke:white;stroke:var(--mdc-slider-bg-color-behind-component, white)}.mdc-slider:focus{outline:none}.mdc-slider__track-container{position:absolute;top:50%;width:100%;height:0.125rem;overflow:hidden}.mdc-slider__track{position:absolute;width:100%;height:100%;transform-origin:left top;will-change:transform}.mdc-slider[dir=rtl] .mdc-slider__track,[dir=rtl] .mdc-slider .mdc-slider__track{transform-origin:right top}.mdc-slider__track-marker-container{display:flex;margin-right:0;margin-left:-0.0625rem;visibility:hidden}.mdc-slider[dir=rtl] .mdc-slider__track-marker-container,[dir=rtl] .mdc-slider .mdc-slider__track-marker-container{margin-right:-0.0625rem;margin-left:0}.mdc-slider__track-marker-container::after{display:block;width:0.125rem;height:0.125rem;content:\"\"}.mdc-slider__track-marker{flex:1}.mdc-slider__track-marker::after{display:block;width:0.125rem;height:0.125rem;content:\"\"}.mdc-slider__track-marker:first-child::after{width:0.1875rem}.mdc-slider__thumb-container{position:absolute;top:0.9375rem;left:0;width:1.3125rem;height:100%;user-select:none;will-change:transform}.mdc-slider__thumb{position:absolute;top:0;left:0;transform:scale(0.571);stroke-width:3.5;transition:transform 100ms ease-out, fill 100ms ease-out, stroke 100ms ease-out}.mdc-slider__focus-ring{width:1.3125rem;height:1.3125rem;border-radius:50%;opacity:0;transition:transform 266.67ms ease-out, opacity 266.67ms ease-out, background-color 266.67ms ease-out}.mdc-slider__pin{display:flex;position:absolute;top:0;left:0;align-items:center;justify-content:center;width:1.625rem;height:1.625rem;margin-top:-0.125rem;margin-left:-0.125rem;transform:rotate(-45deg) scale(0) translate(0, 0);border-radius:50% 50% 50% 0%;z-index:1;transition:transform 100ms ease-out}.mdc-slider__pin-value-marker{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.8125rem;line-height:1.625rem;font-weight:400;letter-spacing:0.0178571429em;text-decoration:inherit;text-transform:inherit;transform:rotate(45deg)}.mdc-slider--active .mdc-slider__thumb{transform:scale3d(1, 1, 1)}.mdc-slider--focus .mdc-slider__thumb{animation:mdc-slider-emphasize 266.67ms linear}.mdc-slider--focus .mdc-slider__focus-ring{transform:scale3d(1.55, 1.55, 1.55);opacity:0.25}.mdc-slider--in-transit .mdc-slider__thumb{transition-delay:140ms}.mdc-slider--in-transit .mdc-slider__thumb-container,.mdc-slider--in-transit .mdc-slider__track,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__thumb-container,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__track{transition:transform 80ms ease}.mdc-slider--discrete.mdc-slider--active .mdc-slider__thumb{transform:scale(calc(12 / 21))}.mdc-slider--discrete.mdc-slider--active .mdc-slider__pin{transform:rotate(-45deg) scale(1) translate(1.1875rem, -1.25rem)}.mdc-slider--discrete.mdc-slider--focus .mdc-slider__thumb{animation:none}.mdc-slider--discrete.mdc-slider--display-markers .mdc-slider__track-marker-container{visibility:visible}.mdc-floating-label{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.875rem;line-height:1.125rem;font-weight:400;letter-spacing:0.009375em;text-decoration:inherit;text-transform:inherit;position:absolute;left:0;transform-origin:left top;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}:host{--mdc-slider-bg-color-behind-component:var(\n      --slider-bg-color-behind-component,\n      #ffffff\n  )}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track{background-color:var(--lime-primary-color, #26a69a)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb{fill:var(--lime-primary-color, #26a69a);stroke:var(--lime-primary-color, #26a69a)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{background-color:var(--lime-primary-color, #26a69a)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-slider__pin-value-marker{margin-bottom:0.125rem}.slider{position:relative;padding-top:1.25rem}.slider__label{font-family:Roboto, sans-serif;line-height:1.75rem;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.875rem;font-weight:400;letter-spacing:0.009375em;color:rgba(var(--contrast-1200), 1);padding-left:1.25rem;font-size:1rem}.slider__content{display:flex;flex-direction:column;justify-content:space-between;margin:-0.125rem 0 0.125rem 0}.slider__content-range-container{display:flex;order:2;justify-content:space-between;width:calc(100% - 0.5rem);margin:0 auto;padding-top:0.25rem}.slider__content-min-label,.slider__content-max-label{opacity:0.8;font-size:0.75rem;top:1.25rem}.slider__content-min-label:hover,.slider__content-max-label:hover{opacity:1}.slider__content-min-label{left:0}.slider__content-max-label{right:0}.mdc-slider{width:calc(100% - 2rem);margin:0 auto;height:0.75rem}.mdc-slider:before,.mdc-slider:after{content:\"\";display:inline-block;position:absolute;top:0.4375rem;width:0.375rem;height:0.375rem;border-radius:50%;background-color:rgb(var(--contrast-600))}.mdc-slider:before{left:-0.75rem}.mdc-slider:after{right:-0.75rem}.mdc-slider__track,.mdc-slider__pin{transition:background-color 0.5s ease}.mdc-slider__track-container{top:0.5rem;height:0.25rem;border-radius:0.25rem}.mdc-slider__thumb-container{top:0;z-index:1}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb-container:before,.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb-container:after{transition:all 0.2s ease 0.2s;content:\"\";display:block;position:absolute;top:0.5rem;bottom:0;margin:auto;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='10' height='5' viewBox='7 10 10 5' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' opacity='.54' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E\");background-position:center;background-repeat:no-repeat;background-size:cover;width:0.75rem;opacity:0}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb-container:before{left:-1rem;transform:rotate(90deg)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb-container:after{right:-0.875rem;transform:rotate(-90deg)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb-container:hover:before{opacity:0.8;left:-1.25rem}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb-container:hover:after{opacity:0.8;right:-1.125rem}.mdc-slider__pin{transition:all 0.2s ease;transform:none;border-radius:1.25rem;height:1.25rem;line-height:1.25rem;padding:0 0.125rem;left:-0.25rem;margin:0 auto;transform-origin:bottom}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{box-shadow:var(--button-shadow-normal)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin:hover{box-shadow:var(--button-shadow-hovered)}.mdc-slider--active .mdc-slider__pin{box-shadow:var(--button-shadow-hovered);transform:scale(1.5) translateY(-1rem) !important}.mdc-slider.mdc-slider--disabled .mdc-slider__pin{background:var(--mdc-slider-bg-color-behind-component)}.mdc-slider__thumb{box-shadow:0 0 0 0.125rem rgba(var(--contrast-100), 0.8), 0 0 0 0.1875rem rgba(var(--contrast-100), 0.8) inset;border-radius:50%}.mdc-slider__pin-value-marker{transition:color 0.5s ease;font-size:0.75rem;transform:rotate(0deg);margin-bottom:0}.mdc-slider--discrete.mdc-slider--active .mdc-slider__pin{transform:none}.mdc-slider--discrete.mdc-slider--active .mdc-slider__thumb{transform:scale3d(1, 1, 1)}.mdc-slider-helper-line{padding-right:1rem;padding-left:1rem}.mdc-slider-helper-text{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.6875rem;font-weight:400;letter-spacing:0.0333333333em;text-decoration:inherit;text-transform:inherit;display:block;margin-top:0;line-height:normal;margin:0;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;opacity:1}.mdc-slider-helper-text:before{height:0.75rem;display:inline-block;width:0;content:\"\";vertical-align:0}";export{y as limel_slider}