import{r as e,h as t}from"./index-a7da85d2.js";let i=class{constructor(t){e(this,t),this.disabled=!1,this.handleChange=e=>{console.log(e.detail)},this.toggleEnabled=()=>{this.disabled=!this.disabled}}render(){return[t("limel-button-group",{disabled:this.disabled,onChange:this.handleChange,value:[{id:"1",title:"First"},{id:"2",title:"Second",selected:!0},{id:"3",title:"Third"}]}),t("p",null,t("limel-flex-container",{justify:"end"},t("limel-checkbox",{label:"Disabled",onChange:this.toggleEnabled,checked:this.disabled})))]}};export{i as limel_example_button_group}