import{r as i,h as t}from"./index-9cbaf4f2.js";const n=class{constructor(t){i(this,t),this.onChange=this.onChange.bind(this),this.onAction=this.onAction.bind(this)}render(){return t("limel-input-field",{label:"Website",type:"url",value:this.value,leadingIcon:"globe",trailingIcon:"external_link",onChange:this.onChange,onAction:this.onAction})}onChange(i){this.value=i.detail}onAction(){window.open(this.value)}};export{n as limel_example_input_field_icon_both}