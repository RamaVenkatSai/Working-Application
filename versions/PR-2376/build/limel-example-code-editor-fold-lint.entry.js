import{r as e,h as i}from"./index-a55db97c.js";import{d as o}from"./birds-a0b078f9.js";const t=class{constructor(i){e(this,i),this.handleChange=e=>{this.json=e.detail},this.json=JSON.stringify(o,null,"    ")}render(){return i("limel-code-editor",{value:this.json,language:"json",lineNumbers:!0,lint:!0,fold:!0,onLimelCodeEditorChange:this.handleChange})}};t.style=":host{--code-editor-max-height:20rem}";export{t as limel_example_code_editor_fold_lint}