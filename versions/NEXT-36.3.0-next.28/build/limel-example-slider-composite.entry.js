import{r as e,h as t}from"./index-a55db97c.js";const i=class{constructor(i){e(this,i),this.handleSliderChange=e=>{this.eventPrinter.writeEvent(e),this.props=Object.assign(Object.assign({},this.props),{value:e.detail})},this.renderForm=()=>t("limel-example-controls",{style:{"--example-controls-column-layout":"auto-fit"}},t("limel-form",{schema:this.schema,value:this.props,onChange:this.handleFormChange})),this.handleFormChange=e=>{this.props=e.detail},this.schema=void 0,this.props={disabled:!1,factor:1,label:"Slider",readonly:!1,unit:"%",value:25,valuemin:0,valuemax:100}}componentWillLoad(){this.schema.lime={layout:{type:"grid"}}}render(){return[t("limel-slider",Object.assign({},this.props,{onChange:this.handleSliderChange})),this.renderForm(),t("limel-example-event-printer",{ref:e=>this.eventPrinter=e})]}};export{i as limel_example_slider_composite}