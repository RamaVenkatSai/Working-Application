import{r as e,h as i}from"./index-6a31bb18.js";const s=class{constructor(i){e(this,i),this.value=.25,this.factor=100,this.minValue=0,this.maxValue=1,this.onChange=this.onChange.bind(this)}render(){return i("section",null,i("limel-slider",{class:"displays-percentage-colors",label:"Slider with multiplier",unit:" %",value:this.value,factor:this.factor,valuemax:this.maxValue,valuemin:this.minValue,onChange:this.onChange}),i("limel-example-value",{value:this.value}))}onChange(e){this.value=e.detail}};export{s as limel_example_slider_multiplier_percentage_colors}