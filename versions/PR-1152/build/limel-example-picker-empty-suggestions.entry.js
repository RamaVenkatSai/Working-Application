import{r as e,h as t}from"./index-9cbaf4f2.js";const s=class{constructor(t){e(this,t),this.allItems=[{text:"Admiral Swiggins",value:1},{text:"Ayla",value:2},{text:"Clunk",value:3},{text:"Coco",value:4},{text:"Derpl",value:5},{text:"Froggy G",value:6},{text:"Gnaw",value:7},{text:"Lonestar",value:8},{text:"Leon",value:9},{text:"Raelynn",value:10},{text:"Skølldir",value:11},{text:"Voltar",value:12},{text:"Yuri",value:13}],this.required=!1,this.readonly=!1,this.disabled=!1,this.search=this.search.bind(this),this.onChange=this.onChange.bind(this),this.setDisabled=this.setDisabled.bind(this),this.setReadonly=this.setReadonly.bind(this),this.setRequired=this.setRequired.bind(this)}render(){return[t("limel-picker",{label:"Favorite awesomenaut",value:this.selectedItem,searcher:this.search,emptyResultMessage:"No results",onChange:this.onChange,onInteract:this.onInteract,required:this.required,readonly:this.readonly,disabled:this.disabled}),t("p",null,t("limel-flex-container",{justify:"end"},t("limel-checkbox",{label:"Disabled",onChange:this.setDisabled,checked:this.disabled}),t("limel-checkbox",{label:"Readonly",onChange:this.setReadonly,checked:this.readonly}),t("limel-checkbox",{label:"Required",onChange:this.setRequired,checked:this.required}))),t("limel-example-value",{value:this.selectedItem})]}search(e){return new Promise((t=>{""===e&&setTimeout((()=>{t([])}),500),setTimeout((()=>{const s=this.allItems.filter((t=>t.text.toLowerCase().includes(e.toLowerCase())));t(s)}),500)}))}onChange(e){this.selectedItem=e.detail}onInteract(e){console.log("Value interacted with:",e.detail)}setDisabled(e){this.disabled=e.detail}setReadonly(e){this.readonly=e.detail}setRequired(e){this.required=e.detail}};export{s as limel_example_picker_empty_suggestions}