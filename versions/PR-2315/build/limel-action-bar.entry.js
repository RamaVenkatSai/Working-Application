import{r as t,c as i,h as a,H as e}from"./index-a55db97c.js";const r=class{constructor(e){t(this,e),this.itemSelected=i(this,"itemSelected",7),this.menuOpen=i(this,"menuOpen",7),this.close=i(this,"close",7),this.renderActionBarItem=t=>a("limel-action-bar-button",{item:t}),this.handleResize=()=>{this.useMobileLayout=window.innerWidth<=this.mobileBreakPoint},this.renderOverflowMenu=()=>a("limel-action-bar-overflow-menu",null),this.actionBarItems=[],this.accessibleLabel=void 0,this.expanded=!1,this.mobileBreakPoint=700,this.useMobileLayout=!1}componentDidLoad(){this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(document.body)}disconnectedCallback(){this.resizeObserver.disconnect()}render(){return a(e,{"aria-label":this.accessibleLabel,class:{expanded:this.expanded,"has-mobile-layout":this.useMobileLayout}},this.actionBarItems.map(this.renderActionBarItem),this.renderOverflowMenu())}};r.style=":host(limel-action-bar){--badge-background-color:rgb(var(--color-red-default));--badge-text-color:rgb(var(--color-white));--action-bar-item-height:2rem;--limel-action-bar-item-text-color:var(\n      --action-bar-item-text-color,\n      rgb(var(--contrast-1100))\n  );display:inline-flex;align-items:center;gap:0.75rem;padding:0.25rem;max-width:100%;border-radius:var(--action-bar-item-height);background-color:var(--action-bar-background-color, rgb(var(--contrast-100)));box-shadow:var(--shadow-depth-8)}limel-action-bar-button{min-width:0}";export{r as limel_action_bar}