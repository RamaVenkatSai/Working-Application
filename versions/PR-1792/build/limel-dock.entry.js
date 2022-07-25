import{r as e,c as t,h as o,H as a}from"./index-7dccb886.js";const i=class{constructor(a){e(this,a),this.selected=t(this,"selected",7),this.dockItems=[],this.dockFooterItems=[],this.expanded=!1,this.allowResize=!0,this.mobileBreakPoint=700,this.useMobileLayout=!1,this.renderDockItem=e=>{var t;let a="limel-default-dock-button";return(null===(t=e.dockButton)||void 0===t?void 0:t.componentName)&&(a=e.dockButton.componentName),o(a,{class:{"dock-item":!0,selected:e.selected},item:e,expanded:this.expanded&&!this.useMobileLayout,useMobileLayout:this.useMobileLayout,onInteract:this.handleDockItemClick})},this.handleDockItemClick=e=>{e.detail.selected||this.selected.emit(e.detail)},this.handleResize=()=>{this.useMobileLayout=window.innerWidth<=this.mobileBreakPoint},this.toggleDockWidth=()=>{this.expanded=!this.expanded}}componentDidLoad(){this.observer=new ResizeObserver(this.handleResize),this.observer.observe(document.body)}disconnectedCallback(){this.observer.disconnect()}render(){return o(a,{class:{dock:!0,expanded:this.expanded,"has-mobile-layout":this.useMobileLayout}},o("nav",{"aria-label":this.accessibleLabel},this.dockItems.map(this.renderDockItem),o("span",{class:"footer-separator"}),this.dockFooterItems.map(this.renderDockItem)),this.renderExpandShrinkToggle())}renderExpandShrinkToggle(){if(!this.useMobileLayout&&this.allowResize)return o("button",{class:{"expand-shrink":!0,expanded:this.expanded},onClick:this.toggleDockWidth},o("limel-icon",{name:"angle_right"}))}};i.style=":host{--dock-item-height:2.75rem;--dock-padding:0.25rem;--dock-expand-shrink-button-height:1rem;--button-background:var(\n      --dock-item-background-color--deselected,\n      --dock-background-color\n  );--button-background--selected:var(\n      --dock-item-background-color--selected,\n      rgb(var(--contrast-200))\n  );--button-text:var(\n      --dock-item-text-color--deselected,\n      rgb(var(--contrast-1100))\n  );--button-text--selected:var(\n      --dock-item-text-color--selected,\n      rgb(var(--contrast-1300))\n  );isolation:isolate;position:relative;display:inline-flex;flex-direction:column;background-color:var(--dock-background-color, rgb(var(--contrast-100)));box-shadow:0.1875rem 0 0.375rem -0.125rem rgba(var(--color-black), 0.15), 0.1875rem 0 0.625rem -0.125rem rgba(var(--color-black), 0.05)}:host(:not(.has-mobile-layout)){height:100%;width:calc(var(--dock-padding) * 2 + var(--dock-item-height))}:host(.expanded){width:var(--dock-expanded-max-width, max-content)}:host(.has-mobile-layout){width:100%;height:calc(var(--dock-padding) * 2 + var(--dock-item-height))}:host(.has-mobile-layout) nav{justify-content:space-between;flex-direction:row}.footer-separator{display:none}.footer-separator+.dock-item{margin-top:auto;justify-self:flex-end}nav{box-sizing:border-box;display:inline-flex;flex-direction:column;gap:0.375rem;flex-grow:1;padding:var(--dock-padding);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none}nav::-webkit-scrollbar{display:none}.expand-shrink{all:unset;box-sizing:border-box;transition:background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease-out;cursor:pointer;display:flex;justify-content:center;align-items:center;height:var(--dock-expand-shrink-button-height);padding:0 0.5rem;margin:var(--dock-padding);border-radius:0.375rem}.expand-shrink:hover{box-shadow:var(--button-shadow-hovered)}.expand-shrink:active{box-shadow:var(--button-shadow-pressed);transform:translate3d(0, 0.08rem, 0)}.expand-shrink.expanded{justify-content:flex-end}.expand-shrink.expanded limel-icon{transform:rotateY(180deg)}.expand-shrink:focus-visible{box-shadow:var(--shadow-depth-8-focused)}.expand-shrink limel-icon{width:calc(var(--dock-expand-shrink-button-height) - 0.25rem);color:var(--dock-item-icon-color--deselected, var(--button-text))}";export{i as limel_dock}