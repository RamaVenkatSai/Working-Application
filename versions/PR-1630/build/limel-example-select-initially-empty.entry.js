import{r as e,h as l}from"./index-11aed7da.js";let t=class{constructor(l){e(this,l),this.options=[{text:"",value:""},{text:"Luke Skywalker",value:"luke"},{text:"Han Solo",value:"han"},{text:"Leia Organo",value:"leia"}],this.handleChange=e=>{this.value=e.detail}}render(){return l("section",null,l("limel-select",{label:"Favorite hero",value:this.value,options:this.options,onChange:this.handleChange}),l("limel-example-value",{value:this.value}))}};export{t as limel_example_select_initially_empty}