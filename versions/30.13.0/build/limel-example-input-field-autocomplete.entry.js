import{r as i,h as t}from"./index-9cbaf4f2.js";const e=class{constructor(t){i(this,t),this.required=!1,this.disabled=!1,this.invalid=!1,this.completions=["Lundalogik AB","Lundalogik AS","SAAB AB","Lundalogistik & Spedition AB","Aftonbladet AB","Expressen AB","Swedbank","Handelsbanken","Väderstad"],this.checkValidity=this.checkValidity.bind(this),this.onChange=this.onChange.bind(this),this.toggleEnabled=this.toggleEnabled.bind(this),this.toggleRequired=this.toggleRequired.bind(this)}render(){return[t("limel-input-field",{label:"Autocomplete",value:this.value,completions:this.completions,required:this.required,invalid:this.invalid,disabled:this.disabled,onChange:this.onChange}),t("p",null,t("limel-flex-container",{justify:"end"},t("limel-button",{label:this.disabled?"Enable":"Disable",onClick:this.toggleEnabled}),t("limel-button",{label:this.required?"Set Optional":"Set Required",onClick:this.toggleRequired}))),t("limel-example-value",{value:this.value})]}checkValidity(){this.invalid=this.required&&!this.value}onChange(i){this.value=i.detail}toggleEnabled(){this.disabled=!this.disabled}toggleRequired(){this.required=!this.required}static get watchers(){return{required:["checkValidity"]}}};e.style="limel-button{margin-left:0.5rem}";export{e as limel_example_input_field_autocomplete}