import{r as e,h as t}from"./index-9cbaf4f2.js";const i=class{constructor(t){e(this,t),this.required=!1,this.disabled=!1,this.changeHandler=this.changeHandler.bind(this),this.setEnabled=this.setEnabled.bind(this),this.setRequired=this.setRequired.bind(this)}render(){return[t("limel-input-field",{label:"Message",type:"textarea",helperText:"Please enter a useful message!",maxlength:240,value:this.value,required:this.required,disabled:this.disabled,onChange:this.changeHandler}),t("p",null,t("limel-flex-container",{justify:"end"},t("limel-checkbox",{onChange:this.setEnabled,label:"Disabled"}),t("limel-checkbox",{onChange:this.setRequired,label:"Required"}))),t("limel-example-value",{value:this.value})]}changeHandler(e){this.value=e.detail}setEnabled(e){e.stopPropagation(),this.disabled=e.detail}setRequired(e){e.stopPropagation(),this.required=e.detail}};export{i as limel_example_input_field_textarea}