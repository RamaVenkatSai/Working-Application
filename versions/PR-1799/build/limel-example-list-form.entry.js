import{r as e,h as s}from"./index-7dccb886.js";import{s as i}from"./list-schema-5c8b11be.js";const r=class{constructor(s){e(this,s),this.formData={villains:["Joker","Thanos","Green Goblin"],squad:[{powers:["flight"],name:"Doctor Strange"}]},this.handleFormChange=e=>{this.formData=e.detail}}render(){return[s("limel-form",{onChange:this.handleFormChange,value:this.formData,schema:i}),s("limel-example-value",{value:this.formData})]}};export{r as limel_example_list_form}