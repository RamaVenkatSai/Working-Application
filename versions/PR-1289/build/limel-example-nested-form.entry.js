import{r as e,h as t}from"./index-7619d89c.js";const i={type:"object",properties:{name:{type:"string",title:"Name"},age:{type:"integer",title:"Age"},address:{type:"object",title:"Location",description:"Please enter your location",properties:{city:{type:"string",title:"City"},country:{type:"string",title:"Country",description:"It might also be a planet"}}},data:{type:"object",title:"Data",description:"Some additional data we would like you to submit",properties:{eyeColor:{type:"string",title:"Eye color"},shoeSize:{type:"integer",title:"Shoe size"}},lime:{collapsible:!0}}}},o=class{constructor(t){e(this,t),this.formData={},this.handleFormChange=this.handleFormChange.bind(this)}render(){return[t("limel-form",{onChange:this.handleFormChange,value:this.formData,schema:i}),t("limel-example-value",{value:this.formData})]}handleFormChange(e){this.formData=e.detail}};export{o as limel_example_nested_form}