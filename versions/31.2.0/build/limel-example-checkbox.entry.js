import{r as e,h as i}from"./index-954e57b6.js";const t=class{constructor(i){e(this,i),this.disabled=!1,this.required=!1,this.value=!1,this.changeHandler=this.changeHandler.bind(this),this.onClickToggleEnabled=this.onClickToggleEnabled.bind(this),this.onClickToggleRequired=this.onClickToggleRequired.bind(this),this.onClickToggleChecked=this.onClickToggleChecked.bind(this)}render(){return i("section",null,i("div",null,i("limel-checkbox",{disabled:this.disabled,label:"My fab checkbox",id:"fab",checked:this.value,required:this.required,onChange:this.changeHandler}),i("limel-flex-container",{justify:"end"},i("limel-button",{onClick:this.onClickToggleEnabled,label:this.disabled?"Enable":"Disable"}),i("limel-button",{onClick:this.onClickToggleRequired,label:"Toggle required"}),i("limel-button",{onClick:this.onClickToggleChecked,label:"Toggle checked"}))),i("limel-example-value",{value:this.value}))}onClickToggleEnabled(){this.disabled=!this.disabled}onClickToggleRequired(){this.required=!this.required}onClickToggleChecked(){this.value=!this.value}changeHandler(e){this.value=e.detail}};t.style="div{display:flex;justify-content:space-between}limel-button{margin-left:0.5rem}";export{t as limel_example_checkbox}