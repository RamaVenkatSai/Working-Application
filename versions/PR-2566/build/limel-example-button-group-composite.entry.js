import{r as t,h as e}from"./index-6156b4fd.js";const i=class{constructor(e){t(this,e);this.handleChange=t=>{this.eventPrinter.writeEvent(t);const e=t.detail;this.props=Object.assign(Object.assign({},this.props),{value:this.props.value.map((t=>Object.assign(Object.assign({},t),{selected:t.id===e.id})))})};this.handleFormChange=t=>{this.props=Object.assign({},t.detail)};this.schema=undefined;this.props={disabled:false,value:[{id:"1",title:"Clear sky",icon:"sun"},{id:"2",title:"Partly cloudy",icon:"partly_cloudy_day"},{id:"3",title:"Rain showers",icon:"rain"},{id:"4",title:"Thunderstorms",icon:"cloudshot"},{id:"5",title:"Snow showers",icon:"snowflake"}]}}render(){return[e("limel-button-group",Object.assign({},this.props,{onChange:this.handleChange})),this.renderForm(),e("limel-example-event-printer",{ref:t=>this.eventPrinter=t})]}renderForm(){return e("limel-example-controls",{style:{"--example-controls-column-layout":"auto-fit"}},e("limel-form",{schema:this.schema,value:this.props,onChange:this.handleFormChange}))}};export{i as limel_example_button_group_composite};
//# sourceMappingURL=limel-example-button-group-composite.entry.js.map