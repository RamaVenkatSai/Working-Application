import{r as e,h as s}from"./index-9cbaf4f2.js";const t=class{constructor(s){e(this,s),this.loading=!1,this.disabled=!1}render(){return s("limel-button",{class:"has-reduced-presence",label:"Click me!",primary:!0,loading:this.loading,disabled:this.disabled,onClick:this.onClick})}onClick(){this.disabled=!0,this.loading=!0,setTimeout((()=>{this.loading=!1,setTimeout((()=>{this.disabled=!1}),5e3)}),1e3)}};export{t as limel_example_button_reduce_presence}