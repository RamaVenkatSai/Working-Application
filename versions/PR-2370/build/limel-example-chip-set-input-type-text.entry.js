import{r as t,h as i}from"./index-2626b3b7.js";import{E as s,a as e}from"./keycodes-9f971b46.js";const h=class{constructor(i){t(this,i);this.handleInput=t=>{this.textValue=t.detail};this.onKeyUp=t=>{if((t.key===s||t.keyCode===e)&&this.textValue.trim()){this.value=[...this.value,this.createChip(this.textValue.trim())];this.companyValue=[...this.companyValue,this.createChip(this.textValue.trim())];this.textValue=""}};this.handleChange=t=>{this.value=t.detail};this.createChip=t=>({id:t,text:t,removable:true,icon:`${t}`.toLowerCase()});this.value=undefined;this.companyValue=undefined;this.textValue="";this.maxItems=5;this.emptyInputOnBlur=true;this.value=[this.createChip("Apple"),this.createChip("Pear"),this.createChip("Strawberry"),this.createChip("Banana")]}render(){return[i("limel-chip-set",{type:"input",inputType:"text",label:"Type five of your favorite fruits.",helperText:"For some fruit names, icons are displayed on the chips",value:this.value,maxItems:this.maxItems,onChange:this.handleChange,onChipSetInput:this.handleInput,onKeyUp:this.onKeyUp,emptyInputOnBlur:this.emptyInputOnBlur})]}};export{h as limel_example_chip_set_input_type_text};
//# sourceMappingURL=limel-example-chip-set-input-type-text.entry.js.map