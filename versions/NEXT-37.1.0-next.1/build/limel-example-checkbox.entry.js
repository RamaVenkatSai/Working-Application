import{r as e,h as l}from"./index-2626b3b7.js";const i=":host(limel-example-checkbox){display:flex;flex-direction:column;gap:1rem}";const h=class{constructor(l){e(this,l);this.handleChange=e=>{this.value=e.detail;this.indeterminate=false;this.eventPrinter.writeEvent(e)};this.setDisabled=e=>{e.stopPropagation();this.disabled=e.detail};this.setRequired=e=>{e.stopPropagation();this.required=e.detail};this.setChecked=e=>{e.stopPropagation();this.value=e.detail};this.setIndeterminate=e=>{e.stopPropagation();this.indeterminate=e.detail};this.setReadonly=e=>{e.stopPropagation();this.readonly=e.detail};this.disabled=false;this.required=false;this.value=false;this.indeterminate=false;this.readonly=false}render(){return[l("limel-checkbox",{disabled:this.disabled,label:"My fab checkbox",id:"fab",checked:this.value,indeterminate:this.indeterminate,required:this.required,onChange:this.handleChange,readonly:this.readonly}),l("limel-example-controls",null,l("limel-checkbox",{checked:this.disabled,label:"Disabled",onChange:this.setDisabled}),l("limel-checkbox",{checked:this.required,label:"Required",onChange:this.setRequired}),l("limel-checkbox",{checked:this.value,label:"Checked",onChange:this.setChecked}),l("limel-checkbox",{checked:this.readonly,label:"Readonly",onChange:this.setReadonly}),l("limel-checkbox",{checked:this.indeterminate,label:"Indeterminate",onChange:this.setIndeterminate})),l("limel-example-value",{label:"Checked",value:this.value}),l("limel-example-value",{label:"Indeterminate",value:this.indeterminate}),l("limel-example-event-printer",{ref:e=>this.eventPrinter=e})]}};h.style=i;export{h as limel_example_checkbox};
//# sourceMappingURL=limel-example-checkbox.entry.js.map