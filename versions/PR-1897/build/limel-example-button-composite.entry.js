import{r as t,h as e}from"./index-5f2797d5.js";const i=class{constructor(e){t(this,e),this.handleEvent=t=>{this.eventPrinter.writeEvent(t)},this.handleChange=t=>{this.props=t.detail},this.schema=void 0,this.props={label:"My button",primary:!0,outlined:!1,icon:"dog",disabled:!1,loading:!1}}componentWillLoad(){this.schema=Object.assign(Object.assign({},this.schema),{lime:{layout:{type:"grid"}}})}render(){return[e("limel-button",Object.assign({},this.props,{onClick:this.handleEvent})),this.renderForm(),e("limel-example-event-printer",{ref:t=>this.eventPrinter=t})]}renderForm(){return e("limel-collapsible-section",{header:"Settings"},e("limel-form",{schema:this.schema,value:this.props,onChange:this.handleChange}))}};i.style="limel-switch{height:3rem;margin-right:0.9375rem}limel-button{margin-bottom:1.25rem}limel-flex-container{flex-wrap:wrap}";export{i as limel_example_button_composite}