import{r as e,h as r}from"./index-954e57b6.js";const o=class{constructor(r){e(this,r),this.actions=[{id:"1",icon:"refresh",label:"Refresh"},{id:"2",icon:"delete",label:"Delete",disabled:!0},{id:"3",icon:"edit",label:"Edit"}],this.handleActionClick=e=>r=>{r.stopPropagation(),console.log(e)},this.renderActionButton=this.renderActionButton.bind(this)}render(){return r("limel-header",{icon:"brake_warning",heading:"Useful information",subheading:"Note",supportingText:"Data couldn't be loaded!"},this.renderActions())}renderActions(){if(this.actions)return r("div",{class:"actions"},this.actions.map(this.renderActionButton))}renderActionButton(e){return r("limel-icon-button",{icon:e.icon,label:e.label,disabled:e.disabled,onClick:this.handleActionClick(e)})}};o.style=":host(limel-example-header){--header-background-color:rgb(var(--contrast-1100));--header-heading-color:rgb(var(--contrast-100));--header-subheading-color:rgb(var(--color-teal-lighter));--header-supporting-text-color:rgb(var(--color-red-lighter));--header-icon-color:rgb(var(--color-red-light))}limel-icon-button{color:rgb(var(--contrast-100))}";export{o as limel_example_header}