import{r as e,h as t}from"./index-7619d89c.js";const l=class{constructor(t){e(this,t),this.options=[{text:"",value:""},{text:"Luke Skywalker",value:"luke"},{text:"Han Solo",value:"han"},{text:"Leia Organo",value:"leia"}],this.onChange=this.onChange.bind(this)}render(){return t("section",null,t("limel-select",{label:"Favorite hero",value:this.value,options:this.options,onChange:this.onChange}),t("limel-example-value",{value:this.value}))}onChange(e){this.value=e.detail}};export{l as limel_example_select_initially_empty}