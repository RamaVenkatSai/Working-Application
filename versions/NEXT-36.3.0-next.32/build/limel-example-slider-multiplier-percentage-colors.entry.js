import{r as e,h as i}from"./index-a55db97c.js";const l=class{constructor(i){e(this,i),this.factor=100,this.minValue=0,this.maxValue=1,this.changeHandler=e=>{this.value=e.detail},this.setDisabled=e=>{e.stopPropagation(),this.disabled=e.detail},this.setReadonly=e=>{e.stopPropagation(),this.readonly=e.detail},this.disabled=!1,this.readonly=!1,this.value=.25}render(){return[i("limel-slider",{class:"displays-percentage-colors",label:"Slider with percentage colors",unit:" %",value:this.value,factor:this.factor,valuemax:this.maxValue,valuemin:this.minValue,disabled:this.disabled,readonly:this.readonly,onChange:this.changeHandler}),i("limel-example-controls",null,i("limel-checkbox",{checked:this.disabled,label:"Disabled",onChange:this.setDisabled}),i("limel-checkbox",{checked:this.readonly,label:"Readonly",onChange:this.setReadonly})),i("limel-example-value",{value:this.value})]}};export{l as limel_example_slider_multiplier_percentage_colors}