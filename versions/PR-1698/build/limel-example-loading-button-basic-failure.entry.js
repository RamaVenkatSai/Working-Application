import{r as t,h as s}from"./index-7dccb886.js";import{L as i}from"./loading-button.types-3a5968d8.js";const e=class{constructor(s){t(this,s),this.disabled=!1,this.save=t=>{this.disabled=!0,t.detail.indicateLoading(),setTimeout((()=>{t.detail.resolveLoading(i.FAILURE),this.disabled=!1}),1e3)}}render(){return s("limel-loading-button",{label:"Save",disabled:this.disabled,onInteract:this.save})}};export{e as limel_example_loading_button_basic_failure}