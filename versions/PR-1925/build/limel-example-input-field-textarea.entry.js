import{r as e,h as i}from"./index-5f2797d5.js";const l=class{constructor(i){e(this,i),this.handleChange=e=>{this.value=e.detail},this.setDisabled=e=>{e.stopPropagation(),this.disabled=e.detail},this.setReadonly=e=>{e.stopPropagation(),this.readonly=e.detail},this.setRequired=e=>{e.stopPropagation(),this.required=e.detail},this.required=!1,this.disabled=!1,this.readonly=!1,this.value=void 0}render(){return[i("limel-input-field",{label:"Text Field",type:"textarea",helperText:"Please enter a useful message!",maxlength:500,value:this.value,required:this.required,onChange:this.handleChange,disabled:this.disabled,readonly:this.readonly}),i("p",null,i("limel-flex-container",{justify:"end"},i("limel-checkbox",{onChange:this.setDisabled,label:"Disabled"}),i("limel-checkbox",{onChange:this.setReadonly,label:"Readonly"}),i("limel-checkbox",{onChange:this.setRequired,label:"Required"}))),i("limel-example-value",{value:this.value})]}};export{l as limel_example_input_field_textarea}