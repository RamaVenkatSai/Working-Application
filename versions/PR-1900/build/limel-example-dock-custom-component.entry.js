import{r as e,h as o}from"./index-ab490ba1.js";const t=class{constructor(o){e(this,o),this.dockItems=[{id:"home",label:"Lime",helperLabel:"Cmd + H",selected:!0,icon:"-lime-logo-outlined-colored"},{id:"tables",label:"Tables",icon:"insert_table",dockMenu:{componentName:"my-custom-menu"}}],this.handleSelected=e=>{this.dockItems=this.dockItems.map((o=>Object.assign(Object.assign({},o),{selected:o.id===e.detail.id})))}}render(){return o("div",{class:"application"},o("limel-dock",{accessibleLabel:"Dock Example: item with custom menu",dockItems:this.dockItems,onItemSelected:this.handleSelected}))}};t.style=":host{--popover-surface-width:min(100vw, 40rem)}.application{background-color:rgb(var(--contrast-400));border:1px solid rgb(var(--contrast-700));overflow:hidden;border-radius:0.5rem;height:30rem}";export{t as limel_example_dock_custom_component}