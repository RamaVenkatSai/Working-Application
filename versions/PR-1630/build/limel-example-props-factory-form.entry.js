import{r as e,h as t}from"./index-11aed7da.js";const i={type:"object",properties:{hero:{type:"integer",title:"Hero",lime:{component:{name:"limel-example-props-factory-picker"}}}}};let s=class{constructor(t){e(this,t),this.formData={hero:1001},this.anObjectToInject={someProp:"The object was successfully injected!"},this.aStringToInject="The string was successfully injected!",this.propsFactory=e=>{var t,i;if("limel-example-props-factory-picker"===(null===(i=null===(t=e.lime)||void 0===t?void 0:t.component)||void 0===i?void 0:i.name))return{injectedObject:this.anObjectToInject,injectedString:this.aStringToInject}},this.handleFormChange=e=>{this.formData=e.detail}}render(){return[t("limel-form",{onChange:this.handleFormChange,value:this.formData,schema:i,propsFactory:this.propsFactory}),t("limel-example-value",{value:this.formData})]}};export{s as limel_example_props_factory_form}