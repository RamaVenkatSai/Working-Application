import{r as e,h as t}from"./index-954e57b6.js";import"./_commonjsHelpers-5ec8f9b7.js";import{m as i}from"./moment-38f9b6da.js";const l=class{constructor(t){e(this,t),this.value=new Date,this.handleChange=this.handleChange.bind(this),this.addOneHour=this.addOneHour.bind(this)}render(){return t("p",null,t("limel-date-picker",{type:"datetime",label:"datetime",value:this.value,onChange:this.handleChange}),t("p",null,t("limel-flex-container",{justify:"end"},t("limel-button",{onClick:this.addOneHour,label:"Add one hour"}))),t("limel-example-value",{value:this.value}))}handleChange(e){this.value=e.detail}addOneHour(){this.value=i(this.value).add(1,"hour").toDate()}};export{l as limel_example_date_picker_programmatic_change}