import{r as e,h as t}from"./index-7619d89c.js";const l=class{constructor(t){e(this,t),this.disabled=!1,this.options=[{text:"Luke Skywalker",value:"luke"},{text:"Han Solo",value:"han",disabled:!0},{text:"Leia Organo",value:"leia"}],this.onChange=this.onChange.bind(this),this.toggleEnabled=this.toggleEnabled.bind(this)}render(){return t("section",null,t("limel-select",{label:"Favorite hero",helperText:"May the force be with him or her",value:this.value,options:this.options,disabled:this.disabled,onChange:this.onChange}),t("p",null,t("limel-flex-container",{justify:"end"},t("limel-button",{onClick:this.toggleEnabled,label:this.disabled?"Enable":"Disable"}))),t("limel-example-value",{value:this.value}))}onChange(e){this.value=e.detail}toggleEnabled(){this.disabled=!this.disabled}};export{l as limel_example_select}