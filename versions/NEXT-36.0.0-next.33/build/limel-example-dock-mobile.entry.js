import{r as e,h as t}from"./index-ab490ba1.js";const o=class{constructor(t){e(this,t),this.dockItems=[{id:"home",label:"Lime",selected:!0,icon:"-lime-logo-outlined-colored"},{id:"tables",label:"Tables",icon:"insert_table",dockMenu:{componentName:"my-custom-menu"}},{id:"search",label:"Search",icon:"search"}],this.dockFooterItems=[{id:"create",label:"Create object",icon:"plus_math"},{id:"settings",label:"Settings",icon:"settings"}],this.handleSelected=e=>{const t=t=>Object.assign(Object.assign({},t),{selected:t.id===e.detail.id});this.dockItems=this.dockItems.map(t),this.dockFooterItems=this.dockFooterItems.map(t)}}render(){return t("div",{class:"application"},t("limel-dock",{accessibleLabel:"Dock Example: mobile layout",dockItems:this.dockItems,dockFooterItems:this.dockFooterItems,onItemSelected:this.handleSelected,mobileBreakPoint:5e3}))}};o.style=":host{--popover-surface-width:min(100vw, 40rem)}.application{position:relative;background-color:rgb(var(--contrast-400));border:1px solid rgb(var(--contrast-700));overflow:hidden;border-radius:0.5rem;height:30rem;width:20rem;margin:0 auto}limel-dock{position:absolute;inset:auto 0 0 0}";export{o as limel_example_dock_mobile}