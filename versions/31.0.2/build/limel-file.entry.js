import{r as t,c as i,h as s,g as h}from"./index-9cbaf4f2.js";import{c as e}from"./random-string-2246b81e.js";import"./component-892677ab.js";import"./ponyfill-986552f9.js";import"./events-16e3b5e6.js";import"./component-6a033134.js";import{M as n}from"./component-43d471e8.js";import"./component-d980282c.js";const o={id:null,text:null,removable:!0},l=class{constructor(s){t(this,s),this.change=i(this,"change",7),this.interact=i(this,"interact",7),this.required=!1,this.disabled=!1,this.readonly=!1,this.accept="*",this.fileInputId=e(),this.handleFileSelection=this.handleFileSelection.bind(this),this.handleFileChange=this.handleFileChange.bind(this),this.handleChipSetChange=this.handleChipSetChange.bind(this),this.handleFileDrop=this.handleFileDrop.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this),this.handleChipInteract=this.handleChipInteract.bind(this)}connectedCallback(){this.initialize()}componentDidLoad(){this.fileInput=this.element.shadowRoot.getElementById(this.fileInputId),this.chipSet=this.element.shadowRoot.querySelector("limel-chip-set"),this.initialize()}initialize(){this.chipSet&&(this.mdcTextField=new n(this.chipSet.shadowRoot.querySelector(".mdc-text-field")))}disconnectedCallback(){this.mdcTextField&&this.mdcTextField.destroy()}render(){return[s("input",{hidden:!0,id:this.fileInputId,onChange:this.handleFileChange,type:"file",accept:this.accept,disabled:this.disabled||this.readonly}),s("limel-chip-set",{disabled:this.disabled,readonly:this.readonly,label:this.label,leadingIcon:"upload_to_cloud",onChange:this.handleChipSetChange,onClick:this.handleFileSelection,onDragEnter:this.preventAndStop,onDragOver:this.preventAndStop,onDrop:this.handleFileDrop,onInteract:this.handleChipInteract,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,required:this.required,type:"input",value:this.chipArray})]}get chipArray(){return this.value?[Object.assign(Object.assign({},o),{text:this.value.filename,id:this.value.id,icon:this.value.icon||"note",iconFillColor:this.value.iconColor,iconBackgroundColor:this.value.iconBackgroundColor})]:[]}handleKeyDown(t){"Tab"!==t.code&&"Backspace"!==t.code&&"Enter"!==t.code&&(t.preventDefault(),t.stopPropagation())}handleKeyUp(t){"Enter"!==t.code||this.value||this.fileInput.click()}handleFileSelection(t){t.stopPropagation(),t.preventDefault(),this.value||this.fileInput.click()}handleFileChange(t){this.fileInput.files.length>0&&(t.stopPropagation(),this.handleFile(this.fileInput.files[0]))}handleFile(t){const i={id:e(),filename:t.name,contentType:t.type,size:t.size,fileContent:t};this.change.emit(i),this.chipSet.blur(),this.mdcTextField.valid=!0}handleChipSetChange(t){t.stopPropagation();const i=t.detail.length?null:t.detail[0];this.chipSet.blur(),i||(this.fileInput.value="",this.change.emit(i),this.required&&(this.mdcTextField.valid=!1))}handleFileDrop(t){this.preventAndStop(t),this.handleFile(t.dataTransfer.files[0])}handleChipInteract(t){t.stopPropagation(),t.preventDefault(),this.interact.emit(t.detail.id)}preventAndStop(t){t.stopPropagation(),t.preventDefault()}get element(){return h(this)}};l.style=":host{--icon-background-color:var(--lime-light-grey)}";export{l as limel_file}