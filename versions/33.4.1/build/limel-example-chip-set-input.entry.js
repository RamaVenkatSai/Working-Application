import{r as i,h as e}from"./index-7619d89c.js";import{E as t,a as h}from"./keycodes-9f971b46.js";const s=class{constructor(e){i(this,e),this.textValue="",this.required=!1,this.readonly=!1,this.disabled=!1,this.maxItems=0,this.emptyInputOnBlur=!0,this.hasLeadingIcon=!1,this.delimiter=null,this.handleInput=i=>{this.textValue=i.detail},this.onKeyUp=i=>{i.key!==t&&i.keyCode!==h||!this.textValue.trim()||(this.value=[...this.value,this.createChip(this.textValue.trim())],this.textValue="")},this.handleChange=i=>{console.log(i.detail),this.value=i.detail},this.handleInteraction=i=>{console.log("Chip interacted with: ",i.detail)},this.createChip=i=>({id:i,text:i,removable:!0,icon:`${i}`.toLowerCase()}),this.setDisabled=i=>{this.disabled=i.detail},this.setReadonly=i=>{this.readonly=i.detail},this.setRequired=i=>{this.required=i.detail},this.setEmptyInputOnBlur=i=>{this.emptyInputOnBlur=i.detail},this.setLeadingIcon=i=>{this.hasLeadingIcon=i.detail},this.setMaxItems=i=>{this.maxItems=+i.detail},this.useDelimiters=i=>{this.delimiter=i.detail?"&":null},this.value=[this.createChip("Elephant"),this.createChip("Caterpillar"),this.createChip("Badger"),this.createChip("Fish")]}render(){return[e("limel-flex-container",{align:"end"},e("limel-chip-set",{label:"Animal",type:"input",value:this.value,required:this.required,readonly:this.readonly,disabled:this.disabled,leadingIcon:this.hasLeadingIcon?"search":null,maxItems:this.maxItems,onChange:this.handleChange,onInput:this.handleInput,onInteract:this.handleInteraction,onKeyUp:this.onKeyUp,searchLabel:"Add an animal",emptyInputOnBlur:this.emptyInputOnBlur,delimiter:this.delimiter}),e("limel-input-field",{label:"Max items",value:this.maxItems.toString(),type:"number",onChange:this.setMaxItems})),e("p",null,e("limel-flex-container",{justify:"end"},e("limel-checkbox",{label:"Empty input on blur",onChange:this.setEmptyInputOnBlur,checked:this.emptyInputOnBlur}),e("limel-checkbox",{label:"Disabled",onChange:this.setDisabled,checked:this.disabled}),e("limel-checkbox",{label:"Readonly",onChange:this.setReadonly,checked:this.readonly}),e("limel-checkbox",{label:"Required",onChange:this.setRequired,checked:this.required}),e("limel-checkbox",{label:"Leading icon",onChange:this.setLeadingIcon,checked:this.hasLeadingIcon}),e("limel-checkbox",{label:"Use delimiters",onChange:this.useDelimiters,checked:null!==this.delimiter}))),e("limel-example-value",{value:this.value})]}};s.style="limel-chip-set[type=input]{flex-grow:1;flex-shrink:1;max-width:calc(100% - 7rem)}limel-input-field{flex-grow:0;flex-shrink:0;margin-left:1rem;width:6rem}limel-flex-container{flex-wrap:wrap}";export{s as limel_example_chip_set_input}