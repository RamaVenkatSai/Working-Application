import{r as t,c as e,h as o,H as i}from"./index-7dccb886.js";import{c as s}from"./random-string-2246b81e.js";const r=class{constructor(i){t(this,i),this.itemSelected=e(this,"itemSelected",7),this.dockItems=[],this.dockFooterItems=[],this.expanded=!1,this.allowResize=!0,this.mobileBreakPoint=700,this.useMobileLayout=!1,this.renderSeparator=()=>this.useMobileLayout?null:o("span",{class:"footer-separator"}),this.renderDockItem=t=>o("limel-dock-button",{class:{"dock-item":!0,selected:t.selected},item:t,expanded:this.expanded&&!this.useMobileLayout,useMobileLayout:this.useMobileLayout,onInteract:this.handleDockItemClick}),this.handleDockItemClick=t=>{t.detail.selected||this.itemSelected.emit(t.detail)},this.handleResize=()=>{this.useMobileLayout=window.innerWidth<=this.mobileBreakPoint},this.toggleDockWidth=()=>{this.expanded=!this.expanded}}componentDidLoad(){this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(document.body)}disconnectedCallback(){this.resizeObserver.disconnect()}render(){return o(i,{class:{dock:!0,expanded:this.expanded,"has-mobile-layout":this.useMobileLayout}},o("nav",{"aria-label":this.accessibleLabel},this.dockItems.map(this.renderDockItem),this.renderSeparator(),this.dockFooterItems.map(this.renderDockItem)),this.renderExpandShrinkToggle())}renderExpandShrinkToggle(){if(!this.useMobileLayout&&this.allowResize)return o("button",{class:{"expand-shrink":!0,expanded:this.expanded},onClick:this.toggleDockWidth},o("limel-icon",{name:"angle_right"}))}};r.style=":host{--dock-item-height:2.75rem;--dock-padding:0.25rem;--dock-expand-shrink-button-height:1rem;--button-background:var(\n      --dock-item-background-color--deselected,\n      --dock-background-color\n  );--button-background--selected:var(\n      --dock-item-background-color--selected,\n      rgb(var(--contrast-200))\n  );--button-text:var(\n      --dock-item-text-color--deselected,\n      rgb(var(--contrast-1100))\n  );--button-text--selected:var(\n      --dock-item-text-color--selected,\n      rgb(var(--contrast-1300))\n  );isolation:isolate;position:relative;display:inline-flex;flex-direction:column;background-color:var(--dock-background-color, rgb(var(--contrast-100)));box-shadow:0.1875rem 0 0.375rem -0.125rem rgba(var(--color-black), 0.15), 0.1875rem 0 0.625rem -0.125rem rgba(var(--color-black), 0.05)}:host(:not(.has-mobile-layout)){height:100%;width:calc(var(--dock-padding) * 2 + var(--dock-item-height))}:host(.expanded){width:var(--dock-expanded-max-width, max-content)}:host(.has-mobile-layout){width:100%;height:calc(var(--dock-padding) * 2 + var(--dock-item-height))}:host(.has-mobile-layout) nav{justify-content:space-between;flex-direction:row}.footer-separator{margin-top:auto;justify-self:flex-end}nav{box-sizing:border-box;display:inline-flex;flex-direction:column;gap:0.375rem;flex-grow:1;padding:var(--dock-padding);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none}nav::-webkit-scrollbar{display:none}.expand-shrink{all:unset;box-sizing:border-box;transition:background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease-out;cursor:pointer;display:flex;justify-content:center;align-items:center;height:var(--dock-expand-shrink-button-height);padding:0 0.5rem;margin:var(--dock-padding);border-radius:0.375rem}.expand-shrink:hover{box-shadow:var(--button-shadow-hovered)}.expand-shrink:active{box-shadow:var(--button-shadow-pressed);transform:translate3d(0, 0.08rem, 0)}.expand-shrink.expanded{justify-content:flex-end}.expand-shrink.expanded limel-icon{transform:rotateY(180deg)}.expand-shrink:focus-visible{box-shadow:var(--shadow-depth-8-focused)}.expand-shrink limel-icon{width:calc(var(--dock-expand-shrink-button-height) - 0.25rem);color:var(--dock-item-icon-color--deselected, var(--button-text))}";const n=class{constructor(o){t(this,o),this.interact=e(this,"interact",7),this.close=e(this,"close",7),this.expanded=!1,this.useMobileLayout=!1,this.isOpen=!1,this.openPopover=t=>{t.stopPropagation(),this.isOpen=!0},this.onPopoverClose=()=>{this.isOpen=!1,this.close.emit()},this.handleClick=t=>{t.stopPropagation(),this.interact.emit(this.item)},this.tooltipId=s()}render(){var t,e;return(null===(e=null===(t=this.item)||void 0===t?void 0:t.dockMenu)||void 0===e?void 0:e.componentName)?this.renderPopover():this.renderButton(this.handleClick)}renderPopover(){var t;const e=null===(t=this.item)||void 0===t?void 0:t.dockMenu.componentName;return o("limel-popover",{openDirection:this.useMobileLayout?"top":"right",open:this.isOpen||this.item.dockMenu.menuOpen,onClose:this.onPopoverClose},this.renderButton(this.openPopover,"trigger"),o(e,Object.assign({},this.item.dockMenu.props||[],{onClose:this.onPopoverClose})))}renderButton(t,e){var i;return o("button",{slot:e,tabindex:"0",id:this.tooltipId,type:"button",class:{button:!0,selected:null===(i=this.item)||void 0===i?void 0:i.selected},onClick:t},this.renderIcon(),this.renderLabel(),this.renderTooltip())}renderIcon(){if(this.item.icon)return o("limel-icon",{name:this.item.icon,class:"icon"})}renderLabel(){if(this.expanded)return o("span",{class:"text"},this.item.label)}renderTooltip(){return!this.expanded&&this.item.label?o("limel-tooltip",{elementId:this.tooltipId,label:this.item.label,helperLabel:this.item.helperLabel}):this.expanded&&this.item.helperLabel?o("limel-tooltip",{elementId:this.tooltipId,label:this.item.helperLabel}):void 0}};n.style=".button{all:unset;box-sizing:border-box;display:flex;align-items:center;position:relative;width:100%;height:var(--dock-item-height);border-radius:0.375rem;font-size:0.875rem;padding:0 0.5rem;min-width:var(--dock-item-height);color:var(--button-text);background-color:var(--button-background)}.button:focus-visible{box-shadow:var(--shadow-depth-8-focused)}.dock-item:not(.selected) .button:not(.disabled){cursor:pointer;transition:background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease-out}.dock-item:not(.selected) .button:not(.disabled):hover{box-shadow:var(--button-shadow-hovered)}.dock-item:not(.selected) .button:not(.disabled):active{box-shadow:var(--button-shadow-pressed);transform:translate3d(0, 0.08rem, 0)}.button:hover{z-index:1}.button.selected{color:var(--button-text--selected);background-color:var(--button-background--selected);box-shadow:var(--button-shadow-inset)}.button.selected .icon{color:var(--button-text--selected)}limel-popover{display:grid}.text{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding-left:0.5rem;padding-right:0.75rem}.icon{flex-shrink:0;width:calc(var(--dock-item-height) - 1rem);height:calc(var(--dock-item-height) - 1rem);color:var(--dock-item-icon-color--deselected, var(--button-text))}";export{r as limel_dock,n as limel_dock_button}