import{r as i,h as e}from"./index-9cbaf4f2.js";const h=class{constructor(e){i(this,e),this.value={filename:"picture.jpg",id:123},this.required=!1,this.disabled=!1,this.readonly=!1,this.handleChange=this.handleChange.bind(this),this.handleRequiredChange=this.handleRequiredChange.bind(this),this.handleDisabledChange=this.handleDisabledChange.bind(this),this.handleReadonlyChange=this.handleReadonlyChange.bind(this)}render(){return[e("limel-file",{label:"Attach a file",onChange:this.handleChange,required:this.required,value:this.value,disabled:this.disabled,readonly:this.readonly}),e("limel-flex-container",{justify:"end"},e("limel-switch",{label:"Required",value:this.required,onChange:this.handleRequiredChange}),e("limel-switch",{label:"Disabled",value:this.disabled,onChange:this.handleDisabledChange}),e("limel-switch",{label:"Readonly",value:this.readonly,onChange:this.handleReadonlyChange}))]}handleChange(i){this.value=i.detail,console.log("onChange",this.value)}handleRequiredChange(i){this.required=!!i.detail}handleDisabledChange(i){this.disabled=!!i.detail}handleReadonlyChange(i){this.readonly=!!i.detail}};export{h as limel_example_file}