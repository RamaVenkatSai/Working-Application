import{r as e,h as t}from"./index-a55db97c.js";const i=class{constructor(t){e(this,t),this.handleChange=e=>{console.log(e.detail)},this.toggleEnabled=()=>{this.disabled=!this.disabled},this.disabled=!1}render(){return[t("limel-button-group",{disabled:this.disabled,onChange:this.handleChange,value:[{id:"1",title:"First"},{id:"2",title:"Second",selected:!0},{id:"3",title:"Third"}]}),t("limel-example-controls",null,t("limel-checkbox",{label:"Disabled",onChange:this.toggleEnabled,checked:this.disabled}))]}};export{i as limel_example_button_group}