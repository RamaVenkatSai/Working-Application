import{r as e,h as t}from"./index-954e57b6.js";const i=class{constructor(t){e(this,t),this.disabled=!1,this.onChange=this.onChange.bind(this),this.toggleEnabled=this.toggleEnabled.bind(this)}render(){return[t("limel-button-group",{disabled:this.disabled,onChange:this.onChange,value:[{id:"1",title:"First"},{id:"2",title:"Second",selected:!0},{id:"3",title:"Third"}]}),t("p",null,t("limel-flex-container",{justify:"end"},t("limel-checkbox",{label:"Disabled",onChange:this.toggleEnabled,checked:this.disabled})))]}onChange(e){console.log(e.detail)}toggleEnabled(){this.disabled=!this.disabled}};export{i as limel_example_button_group}