import{r as e,h as l}from"./index-5f2797d5.js";const i=class{constructor(l){e(this,l),this.options=[{text:"Luke Skywalker",value:"luke"},{text:"Han Solo",value:"han"},{text:"Leia Organo",value:"leia"}],this.handleChange=e=>{this.value=e.detail},this.setDisabled=e=>{e.stopPropagation(),this.disabled=e.detail},this.setReadonly=e=>{e.stopPropagation(),this.readonly=e.detail},this.setRequired=e=>{e.stopPropagation(),this.required=e.detail},this.value=[],this.disabled=!1,this.readonly=!1,this.required=!1}render(){return l("section",null,l("limel-select",{label:"Favorite heroes",value:this.value,options:this.options,disabled:this.disabled,readonly:this.readonly,required:this.required,onChange:this.handleChange,multiple:!0}),l("p",null,l("limel-flex-container",{justify:"end"},l("limel-checkbox",{checked:this.disabled,label:"Disabled",onChange:this.setDisabled}),l("limel-checkbox",{checked:this.readonly,label:"Readonly",onChange:this.setReadonly}),l("limel-checkbox",{checked:this.required,label:"Required",onChange:this.setRequired}))),l("limel-example-value",{value:this.value}))}};export{i as limel_example_select_multiple}