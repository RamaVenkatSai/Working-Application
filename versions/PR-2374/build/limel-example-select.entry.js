import{r as e,h as i}from"./index-2626b3b7.js";const l=class{constructor(i){e(this,i);this.options=[{text:"Luke Skywalker",value:"luke"},{text:"Han Solo",value:"han",disabled:true},{text:"Leia Organo",value:"leia"}];this.changeHandler=e=>{this.value=e.detail};this.setDisabled=e=>{e.stopPropagation();this.disabled=e.detail};this.setReadonly=e=>{e.stopPropagation();this.readonly=e.detail};this.setRequired=e=>{e.stopPropagation();this.required=e.detail};this.setInvalid=e=>{e.stopPropagation();this.invalid=e.detail};this.value=undefined;this.disabled=false;this.readonly=false;this.required=false;this.invalid=false}render(){return[i("limel-select",{label:"Favorite hero",helperText:"May the force be with him or her",value:this.value,options:this.options,disabled:this.disabled,readonly:this.readonly,required:this.required,invalid:this.invalid,onChange:this.changeHandler}),i("limel-example-controls",null,i("limel-checkbox",{checked:this.disabled,label:"Disabled",onChange:this.setDisabled}),i("limel-checkbox",{checked:this.readonly,label:"Readonly",onChange:this.setReadonly}),i("limel-checkbox",{checked:this.required,label:"Required",onChange:this.setRequired}),i("limel-checkbox",{checked:this.invalid,label:"Invalid",onChange:this.setInvalid})),i("limel-example-value",{value:this.value})]}};export{l as limel_example_select};
//# sourceMappingURL=limel-example-select.entry.js.map