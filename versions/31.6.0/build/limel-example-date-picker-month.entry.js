import{r as e,h as t}from"./index-6a31bb18.js";const l=class{constructor(t){e(this,t),this.value=new Date,this.handleChange=this.handleChange.bind(this)}render(){return t("p",null,t("limel-date-picker",{type:"month",label:"month",value:this.value,onChange:this.handleChange}),t("limel-example-value",{value:this.value}))}handleChange(e){this.value=e.detail}};export{l as limel_example_date_picker_month}