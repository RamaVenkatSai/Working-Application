import{r as i,h as t}from"./index-ab490ba1.js";const e=class{constructor(t){i(this,t),this.value=.25,this.factor=100,this.minValue=0,this.maxValue=1,this.step=.1,this.handleChange=i=>{this.value=i.detail}}render(){return t("section",null,t("limel-slider",{label:"Slider with multiplier",unit:" %",value:this.value,factor:this.factor,step:this.step,valuemax:this.maxValue,valuemin:this.minValue,onChange:this.handleChange}),t("limel-example-value",{value:this.value}))}};export{e as limel_example_slider_multiplier}