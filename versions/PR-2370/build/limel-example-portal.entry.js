import{r as t,h as i,g as s}from"./index-2626b3b7.js";const e=class{constructor(i){t(this,i);this.handleDisconnect=()=>{if(this.container){return}const t=this.host.shadowRoot.querySelector(".root");this.container=t.querySelector(".container");t.removeChild(this.container)};this.handleConnect=()=>{if(!this.container){return}const t=this.host.shadowRoot.querySelector(".root");t.appendChild(this.container);this.container=null};this.openPopover=t=>{t.stopPropagation();this.isOpen=true};this.onPopoverClose=t=>{t.stopPropagation();this.isOpen=false};this.isOpen=false;this.container=undefined}render(){return i("div",{class:"root"},i("limel-button",{label:"Disconnect from DOM",disabled:!!this.container,onClick:this.handleDisconnect}),i("limel-button",{label:"Connect to DOM",disabled:!this.container,onClick:this.handleConnect}),i("div",{class:"container"},i("limel-popover",{open:this.isOpen,onClose:this.onPopoverClose},i("limel-button",{slot:"trigger",primary:true,label:"Click me!",onClick:this.openPopover}),i("div",null,"CONTENT"))))}get host(){return s(this)}};export{e as limel_example_portal};
//# sourceMappingURL=limel-example-portal.entry.js.map