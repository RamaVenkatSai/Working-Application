import{r as o,h as e}from"./index-9cbaf4f2.js";const s=class{constructor(e){o(this,e),this.isOpen=!1,this.openPopover=this.openPopover.bind(this),this.onPopoverClose=this.onPopoverClose.bind(this)}render(){return[e("limel-popover",{open:this.isOpen,onClose:this.onPopoverClose},e("limel-button",{slot:"trigger",primary:!0,label:"Click me!",onClick:this.openPopover}),e("p",{style:{margin:"0.5rem 1rem"}},"Content"))]}openPopover(o){o.stopPropagation(),console.log("opening"),this.isOpen=!0}onPopoverClose(o){o.stopPropagation(),console.log("closing"),this.isOpen=!1}};s.style=":host(limel-example-popover){--popover-body-background-color:rgb(var(--contrast-200))}";export{s as limel_example_popover}