import{r as e,h as t}from"./index-9cbaf4f2.js";const i=class{constructor(t){e(this,t),this.value=new Date,this.handleChange=this.handleChange.bind(this)}render(){return t("p",null,t("limel-date-picker",{type:"time",label:"time",value:this.value,onChange:this.handleChange}),t("limel-example-value",{value:this.value}))}handleChange(e){this.value=e.detail}};export{i as limel_example_date_picker_time}