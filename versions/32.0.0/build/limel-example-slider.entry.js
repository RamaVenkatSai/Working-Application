import{r as e,h as i}from"./index-6a31bb18.js";const s=class{constructor(i){e(this,i),this.disabled=!1,this.readonly=!1,this.value=25,this.minValue=15,this.maxValue=75,this.changeHandler=e=>{this.value=e.detail},this.setDisabled=e=>{e.stopPropagation(),this.disabled=e.detail},this.setReadonly=e=>{e.stopPropagation(),this.readonly=e.detail}}render(){return i("section",null,i("limel-slider",{label:"Basic slider",unit:" %",value:this.value,valuemax:this.maxValue,valuemin:this.minValue,disabled:this.disabled,readonly:this.readonly,onChange:this.changeHandler}),i("limel-flex-container",{justify:"end"},i("limel-checkbox",{checked:this.disabled,label:"Disabled",onChange:this.setDisabled}),i("limel-checkbox",{checked:this.readonly,label:"Readonly",onChange:this.setReadonly})),i("limel-example-value",{value:this.value}))}};export{s as limel_example_slider}