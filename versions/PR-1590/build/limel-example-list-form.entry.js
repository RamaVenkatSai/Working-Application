import{r as e,h as s}from"./index-11aed7da.js";import{s as a}from"./list-schema-5c8b11be.js";let i=class{constructor(s){e(this,s),this.formData={villains:["Joker","Thanos","Green Goblin"],squad:[{powers:["flight"],name:"Doctor Strange"}]},this.handleFormChange=e=>{this.formData=e.detail}}render(){return[s("limel-form",{onChange:this.handleFormChange,value:this.formData,schema:a}),s("limel-example-value",{value:this.formData})]}};export{i as limel_example_list_form}