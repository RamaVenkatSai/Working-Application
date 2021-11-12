import{r as t,h as i}from"./index-9cbaf4f2.js";const e=class{constructor(i){t(this,i),this.required=!1,this.disabled=!1,this.invalid=!1,this.checkValidity=this.checkValidity.bind(this),this.changeHandler=this.changeHandler.bind(this),this.toggleEnabled=this.toggleEnabled.bind(this),this.toggleRequired=this.toggleRequired.bind(this)}render(){return[i("limel-input-field",{label:"Text Field",helperText:"Please enter a useful message!",maxlength:15,value:this.value,required:this.required,invalid:this.invalid,disabled:this.disabled,onChange:this.changeHandler}),i("p",null,i("limel-flex-container",{justify:"end"},i("limel-button",{onClick:this.toggleEnabled,label:this.disabled?"Enable":"Disable"}),i("limel-button",{onClick:this.toggleRequired,label:this.required?"Set Optional":"Set Required"}))),i("limel-example-value",{value:this.value})]}checkValidity(){this.invalid=this.required&&!this.value}changeHandler(t){this.value=t.detail,this.checkValidity()}toggleEnabled(){this.disabled=!this.disabled}toggleRequired(){this.required=!this.required}static get watchers(){return{required:["checkValidity"]}}};e.style="limel-input-field{margin-bottom:1rem}limel-button{margin-left:0.5rem}";export{e as limel_example_input_field_text}