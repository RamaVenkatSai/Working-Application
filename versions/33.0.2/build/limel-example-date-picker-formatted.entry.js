import{r as e,h as t}from"./index-7619d89c.js";const a=class{constructor(t){e(this,t),this.valueNo=new Date("2018-11-04"),this.valueFi=new Date("2018-11-04"),this.handleChangeNo=e=>{this.valueNo=e.detail},this.handleChangeFi=e=>{this.valueFi=e.detail}}render(){return[t("limel-date-picker",{language:"no",type:"datetime",label:"Localized date",value:this.valueNo,onChange:this.handleChangeNo}),t("limel-example-value",{value:this.valueNo}),t("limel-date-picker",{language:"fi",format:"YYYY-MM-DD",type:"datetime",label:"Date with custom format",value:this.valueFi,onChange:this.handleChangeFi}),t("limel-example-value",{value:this.valueFi})]}};export{a as limel_example_date_picker_formatted}