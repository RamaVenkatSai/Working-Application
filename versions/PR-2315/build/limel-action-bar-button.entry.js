import{r as t,c as i,h as s}from"./index-a55db97c.js";import{c as e}from"./random-string-2246b81e.js";const h=class{constructor(h){t(this,h),this.itemSelected=i(this,"itemSelected",7),this.menuOpen=i(this,"menuOpen",7),this.close=i(this,"close",7),this.renderNotification=()=>{if(void 0!==this.item.badge)return s("limel-badge",{label:this.item.badge})},this.openPopover=t=>{t.stopPropagation(),this.isOpen=!0,this.menuOpen.emit(this.item)},this.setCustomComponentElement=t=>{this.customComponentElement=t},this.onPopoverClose=()=>{this.isOpen=!1,this.close.emit()},this.handleClick=t=>{t.stopPropagation(),this.itemSelected.emit(this.item)},this.focusCustomComponentElement=()=>{var t,i,s;(null===(i=null===(t=this.customComponentElement)||void 0===t?void 0:t.shadowRoot)||void 0===i?void 0:i.delegatesFocus)&&(null===(s=this.customComponentElement)||void 0===s||s.focus())},this.item=void 0,this.expanded=!1,this.useMobileLayout=!1,this.isOpen=!1,this.tooltipId=e()}render(){var t,i;return(null===(i=null===(t=this.item)||void 0===t?void 0:t.actionBarMenu)||void 0===i?void 0:i.componentName)?this.renderPopover():this.renderButton(this.handleClick)}openWatcher(){this.isOpen&&new IntersectionObserver(this.focusCustomComponentElement).observe(this.customComponentElement)}renderPopover(){var t;const i=null===(t=this.item)||void 0===t?void 0:t.actionBarMenu.componentName;return s("limel-popover",{openDirection:this.useMobileLayout?"top":"right",open:this.isOpen||this.item.actionBarMenu.menuOpen,onClose:this.onPopoverClose},this.renderButton(this.openPopover,"trigger"),s(i,Object.assign({ref:this.setCustomComponentElement},this.item.actionBarMenu.props||{},{onClose:this.onPopoverClose})))}renderButton(t,i){return s("button",{slot:i,tabindex:"0",id:this.tooltipId,type:"button",class:{button:!0},onClick:t,"aria-live":"polite"},this.renderIcon(),this.renderLabel(),this.renderTooltip(),this.renderNotification())}renderIcon(){if(this.item.icon)return s("limel-icon",{name:this.item.icon,class:"icon"})}renderLabel(){if(this.expanded)return s("span",{class:"text"},this.item.label)}renderTooltip(){return!this.expanded&&this.item.label?s("limel-tooltip",{elementId:this.tooltipId,label:this.item.label,helperLabel:this.item.helperLabel}):this.expanded&&this.item.helperLabel?s("limel-tooltip",{elementId:this.tooltipId,label:this.item.helperLabel}):void 0}static get watchers(){return{isOpen:["openWatcher"]}}};h.style="";export{h as limel_action_bar_button}