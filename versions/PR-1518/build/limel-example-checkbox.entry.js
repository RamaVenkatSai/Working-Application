import{r as e,h as i}from"./index-a7da85d2.js";let l=class{constructor(i){e(this,i),this.disabled=!1,this.required=!1,this.value=!1,this.handleChange=e=>{this.value=e.detail},this.setDisabled=e=>{e.stopPropagation(),this.disabled=e.detail},this.setRequired=e=>{e.stopPropagation(),this.required=e.detail},this.toggleChecked=e=>{e.stopPropagation(),this.value=!this.value}}render(){return i("section",null,i("div",null,i("limel-checkbox",{disabled:this.disabled,label:"My fab checkbox",id:"fab",checked:this.value,required:this.required,onChange:this.handleChange})),i("p",null,i("limel-flex-container",{justify:"end"},i("limel-checkbox",{checked:this.disabled,label:"Disabled",onChange:this.setDisabled}),i("limel-checkbox",{checked:this.required,label:"Required",onChange:this.setRequired}),i("limel-checkbox",{checked:this.value,label:"Toggle checked",onChange:this.toggleChecked}))),i("limel-example-value",{value:this.value}))}};l.style="div{display:flex;justify-content:space-between}";export{l as limel_example_checkbox}