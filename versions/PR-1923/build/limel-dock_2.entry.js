import{r as t,c as e,h as o,H as i}from"./index-5f2797d5.js";import{c as s}from"./random-string-2246b81e.js";const r=class{constructor(i){t(this,i),this.itemSelected=e(this,"itemSelected",7),this.menuOpen=e(this,"menuOpen",7),this.close=e(this,"close",7),this.dockExpanded=e(this,"dockExpanded",7),this.renderSeparator=()=>this.useMobileLayout?null:o("span",{class:"footer-separator"}),this.renderDockItem=t=>o("limel-dock-button",{class:{"dock-item":!0,selected:t.selected},item:t,expanded:this.expanded&&!this.useMobileLayout,useMobileLayout:this.useMobileLayout}),this.handleResize=()=>{this.useMobileLayout=window.innerWidth<=this.mobileBreakPoint},this.toggleDockWidth=()=>{this.expanded=!this.expanded,this.dockExpanded.emit(this.expanded)},this.dockItems=[],this.dockFooterItems=[],this.accessibleLabel=void 0,this.expanded=!1,this.allowResize=!0,this.mobileBreakPoint=700,this.useMobileLayout=!1}componentDidLoad(){this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(document.body)}disconnectedCallback(){this.resizeObserver.disconnect()}render(){return o(i,{class:{dock:!0,expanded:this.expanded,"has-mobile-layout":this.useMobileLayout}},o("nav",{"aria-label":this.accessibleLabel},this.dockItems.map(this.renderDockItem),this.renderSeparator(),this.dockFooterItems.map(this.renderDockItem)),this.renderExpandShrinkToggle())}renderExpandShrinkToggle(){if(!this.useMobileLayout&&this.allowResize)return o("button",{class:{"expand-shrink":!0,expanded:this.expanded},onClick:this.toggleDockWidth},o("limel-icon",{name:"angle_right"}))}};r.style=":host(limel-dock){--dock-item-height:2.75rem;--dock-padding:0.25rem;--dock-expand-shrink-button-height:1rem;--limel-dock-item-text-color:var(\n      --dock-item-text-color,\n      rgb(var(--contrast-1100))\n  );--limel-dock-item-text-color--selected:var(\n      --dock-item-text-color--selected,\n      rgb(var(--contrast-1300))\n  );isolation:isolate;position:relative;display:inline-flex;flex-direction:column;background-color:var(--dock-background-color, rgb(var(--contrast-100)));box-shadow:0.1875rem 0 0.375rem -0.125rem rgba(var(--color-black), 0.15), 0.1875rem 0 0.625rem -0.125rem rgba(var(--color-black), 0.05)}:host(limel-dock:not(.has-mobile-layout)){height:100%;width:calc(var(--dock-padding) * 2 + var(--dock-item-height))}:host(limel-dock.expanded){width:var(--dock-expanded-max-width, max-content)}.footer-separator{margin-top:auto;justify-self:flex-end}nav{box-sizing:border-box;display:inline-flex;flex-direction:column;gap:0.375rem;flex-grow:1;padding:var(--dock-padding);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none}nav::-webkit-scrollbar{display:none}:host(limel-dock.has-mobile-layout) nav{justify-content:space-between;flex-direction:row}.expand-shrink{all:unset;box-sizing:border-box;transition:background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease-out;cursor:pointer;display:flex;justify-content:center;align-items:center;height:var(--dock-expand-shrink-button-height);padding:0 0.5rem;margin:var(--dock-padding);border-radius:0.375rem}.expand-shrink:hover{box-shadow:var(--button-shadow-hovered)}.expand-shrink:active{box-shadow:var(--button-shadow-pressed);transform:translate3d(0, 0.08rem, 0)}.expand-shrink:focus{outline:none}.expand-shrink:focus-visible{outline:none;box-shadow:var(--shadow-depth-8-focused)}.expand-shrink.expanded{justify-content:flex-end}.expand-shrink.expanded limel-icon{transform:rotateY(180deg)}.expand-shrink limel-icon{width:calc(var(--dock-expand-shrink-button-height) - 0.25rem);color:var(--dock-item-icon-color, var(--limel-dock-item-text-color))}";const n=class{constructor(o){t(this,o),this.itemSelected=e(this,"itemSelected",7),this.menuOpen=e(this,"menuOpen",7),this.close=e(this,"close",7),this.openPopover=t=>{t.stopPropagation(),this.isOpen=!0,this.menuOpen.emit(this.item)},this.setCustomComponentElement=t=>{this.customComponentElement=t},this.onPopoverClose=()=>{this.isOpen=!1,this.close.emit()},this.handleClick=t=>{t.stopPropagation(),this.itemSelected.emit(this.item)},this.focusCustomComponentElement=()=>{var t,e,o;(null===(e=null===(t=this.customComponentElement)||void 0===t?void 0:t.shadowRoot)||void 0===e?void 0:e.delegatesFocus)&&(null===(o=this.customComponentElement)||void 0===o||o.focus())},this.item=void 0,this.expanded=!1,this.useMobileLayout=!1,this.isOpen=!1,this.tooltipId=s()}render(){var t,e;return(null===(e=null===(t=this.item)||void 0===t?void 0:t.dockMenu)||void 0===e?void 0:e.componentName)?this.renderPopover():this.renderButton(this.handleClick)}openWatcher(){this.isOpen&&new IntersectionObserver(this.focusCustomComponentElement).observe(this.customComponentElement)}renderPopover(){var t;const e=null===(t=this.item)||void 0===t?void 0:t.dockMenu.componentName;return o("limel-popover",{openDirection:this.useMobileLayout?"top":"right",open:this.isOpen||this.item.dockMenu.menuOpen,onClose:this.onPopoverClose},this.renderButton(this.openPopover,"trigger"),o(e,Object.assign({ref:this.setCustomComponentElement},this.item.dockMenu.props||{},{onClose:this.onPopoverClose})))}renderButton(t,e){var i;return o("button",{slot:e,tabindex:"0",id:this.tooltipId,type:"button",class:{button:!0,selected:null===(i=this.item)||void 0===i?void 0:i.selected},onClick:t},this.renderIcon(),this.renderLabel(),this.renderTooltip())}renderIcon(){if(this.item.icon)return o("limel-icon",{name:this.item.icon,class:"icon"})}renderLabel(){if(this.expanded)return o("span",{class:"text"},this.item.label)}renderTooltip(){return!this.expanded&&this.item.label?o("limel-tooltip",{elementId:this.tooltipId,label:this.item.label,helperLabel:this.item.helperLabel}):this.expanded&&this.item.helperLabel?o("limel-tooltip",{elementId:this.tooltipId,label:this.item.helperLabel}):void 0}static get watchers(){return{isOpen:["openWatcher"]}}};n.style=".button{all:unset;cursor:pointer;transition:background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease-out;box-sizing:border-box;display:flex;align-items:center;position:relative;width:100%;height:var(--dock-item-height);border-radius:0.375rem;font-size:0.875rem;padding:0 0.5rem;min-width:var(--dock-item-height);color:var(--limel-dock-item-text-color);background-color:var(--dock-background-color)}.button:hover{box-shadow:var(--button-shadow-hovered)}.button:active{box-shadow:var(--button-shadow-pressed);transform:translate3d(0, 0.08rem, 0)}.button:focus{outline:none}.button:focus-visible{outline:none;box-shadow:var(--shadow-depth-8-focused)}.button:hover{z-index:1}.button.selected{color:var(--limel-dock-item-text-color--selected);background-color:var(--dock-item-background-color--selected, rgb(var(--contrast-200)));box-shadow:var(--button-shadow-inset)}.button.selected:focus-visible{box-shadow:var(--button-shadow-inset), var(--shadow-depth-8-focused)}.button.selected .icon{color:var(--limel-dock-item-text--selected)}limel-popover{display:grid;grid-template-columns:100%}.text{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding-left:0.5rem;padding-right:0.75rem}.icon{flex-shrink:0;width:calc(var(--dock-item-height) - 1rem);height:calc(var(--dock-item-height) - 1rem);color:var(--dock-item-icon-color, var(--limel-dock-item-text-color))}";export{r as limel_dock,n as limel_dock_button}