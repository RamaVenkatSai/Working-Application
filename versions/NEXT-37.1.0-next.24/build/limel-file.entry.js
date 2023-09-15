import{r as t,c as o,h as r,g as s}from"./index-6156b4fd.js";import{t as i}from"./translations-f88bb584.js";import{c as e}from"./random-string-812b1c35.js";import{M as n}from"./component-288691f3.js";import"./component-410aad5a.js";import"./component-5b4ac85a.js";import"./ponyfill-30263d5e.js";import"./component-19eb6e2b.js";const a="file";const c="tear_off_calendar";const l="email";const h="internet";const p="text_box";const d="ms_excel_copyrighted";const g="ms_word_copyrighted";const m="ms_powerpoint_copyrighted";const b="picture";const v="camera";const f="vector";const u="presentation_filled";const x="overview_pages_2";const k="data_sheet";const y="audio_wave";const _="video_file";const w="condom_package";const j="ms_outlook_copyrighted";const z="database";const C={msg:j,ics:c,ical:c,icalendar:c,ifb:c,email:l,eml:l,oft:l,ost:l,emlx:l,html:h,xml:h,txt:p,rtf:p,dot:g,doc:g,docx:g,dotx:g,docm:g,dotm:g,odt:x,pages:x,pdf:"PDF_2",ppt:m,pot:m,pps:m,pptx:m,pptm:m,potx:m,potm:m,ppam:m,ppsx:m,ppsm:m,sldx:m,sldm:m,odp:u,key:u,xls:d,xlsx:d,csv:k,numbers:k,jpg:v,jpeg:v,heic:v,bmp:b,png:b,gif:b,psd:"adobe_photoshop_copyrighted",ai:"adobe_illustrator_copyrighted",svg:f,svgz:f,ep:f,eps:f,sketch:f,mp3:y,wav:y,wma:y,ogg:y,avi:_,flv:_,h264:_,mov:_,mp4:_,mwv:_,zip:w,"7z":w,rar:w,json:"json",yaml:z,sql:z,db:z,dbf:z};function D(t){return C[t.toLowerCase()]||a}const F="rgb(var(--color-gray-dark))";const q="rgb(var(--color-cyan-dark))";const K="rgb(var(--color-gray-dark))";const T="rgb(var(--color-blue-dark))";const E="rgb(var(--color-yellow-darker))";const I="rgb(var(--color-green-dark))";const O="rgb(var(--color-coral-dark))";const S="rgb(var(--color-sky-dark))";const A="rgb(var(--color-lime-dark))";const B="rgb(var(--color-magenta-dark))";const L="rgb(var(--color-blue-dark))";const U="rgb(var(--color-orange-dark))";const M="rgb(var(--color-green-dark))";const P="rgb(var(--color-indigo-dark))";const $="rgb(var(--color-red-dark))";const G="rgb(var(--color-brown-default))";const H="rgb(var(--color-yellow-dark))";const J="rgb(var(--color-red-dark))";const N="rgb(var(--color-glaucous-dark))";const Q={msg:H,ics:q,ical:q,icalendar:q,ifb:q,email:K,eml:K,oft:K,ost:K,emlx:K,html:T,xml:T,txt:E,rtf:E,dot:S,doc:S,docx:S,dotx:S,docm:S,dotm:S,odt:U,pages:U,pdf:J,ppt:O,pot:O,pps:O,pptx:O,pptm:O,potx:O,potm:O,ppam:O,ppsx:O,ppsm:O,sldx:O,sldm:O,odp:L,key:L,xls:I,xlsx:I,csv:F,numbers:M,bmp:A,jpg:A,jpeg:A,heic:A,png:A,gif:A,psd:L,ai:U,svg:B,svgz:B,ep:B,eps:B,sketch:B,mp3:P,wav:P,wma:P,ogg:P,flv:$,h264:$,mov:$,mp4:$,mwv:$,zip:G,"7z":G,rar:G,json:N,yaml:N,sql:N,db:N,dbf:N};function R(t){return Q[t.toLowerCase()]||F}const V="rgba(var(--color-gray-lighter), 0.4)";const W="rgba(var(--color-cyan-lighter), 0.4)";const X="rgba(var(--color-gray-lighter), 0.4)";const Y="rgba(var(--color-blue-lighter), 0.4)";const Z="rgba(var(--color-yellow-lighter), 0.4)";const tt="rgba(var(--color-green-lighter), 0.4)";const ot="rgba(var(--color-coral-lighter), 0.4)";const rt="rgba(var(--color-sky-lighter), 0.4)";const st="rgba(var(--color-lime-lighter), 0.4)";const it="rgba(var(--color-magenta-lighter), 0.4)";const et="rgba(var(--color-blue-lighter), 0.4)";const nt="rgba(var(--color-orange-lighter), 0.4)";const at="rgba(var(--color-green-lighter), 0.4)";const ct="rgba(var(--color-indigo-lighter), 0.4)";const lt="rgba(var(--color-red-lighter), 0.4)";const ht="rgba(var(--color-orange-lighter), 0.4)";const pt="rgba(var(--color-yellow-lighter), 0.4)";const dt="rgba(var(--color-red-lighter), 0.4)";const gt="rgba(var(--color-glaucous-lighter), 0.4)";const mt={msg:pt,ics:W,ical:W,icalendar:W,ifb:W,email:X,eml:X,oft:X,ost:X,emlx:X,html:Y,xml:Y,txt:Z,rtf:Z,dot:rt,doc:rt,docx:rt,dotx:rt,docm:rt,dotm:rt,odt:nt,pages:nt,pdf:dt,ppt:ot,pot:ot,pps:ot,pptx:ot,pptm:ot,potx:ot,potm:ot,ppam:ot,ppsx:ot,ppsm:ot,sldx:ot,sldm:ot,odp:et,key:et,xls:tt,xlsx:tt,csv:V,numbers:at,bmp:st,jpg:st,jpeg:st,heic:st,png:st,gif:st,psd:et,ai:nt,svg:it,svgz:it,ep:it,eps:it,sketch:it,mp3:ct,wav:ct,wma:ct,ogg:ct,flv:lt,h264:lt,mov:lt,mp4:lt,mwv:lt,zip:ht,"7z":ht,rar:ht,json:gt,yaml:gt,sql:gt,db:gt,dbf:gt};function bt(t){return mt[t.toLowerCase()]||V}function vt(t){if(t===null||t===void 0?void 0:t.icon){return t.icon}const o=kt(t);if(!o){return}return D(o)}function ft(t){if(t===null||t===void 0?void 0:t.iconColor){return t.iconColor}const o=kt(t);if(!o){return}return R(o)}function ut(t){if(t===null||t===void 0?void 0:t.iconBackgroundColor){return t.iconBackgroundColor}const o=kt(t);if(!o){return}return bt(o)}function xt(t){if(t===null||t===void 0?void 0:t.icon){return t.icon}return kt(t)}function kt(t){if(!t){return}return t.filename.split(".").pop()}const yt=":host{--icon-background-color:rgb(var(--contrast-400));--icon-color:rgb(var(--contrast-1100))}";const _t="limel-chip-set";const wt={id:null,text:null,removable:true};const jt=class{constructor(r){t(this,r);this.change=o(this,"change",7);this.interact=o(this,"interact",7);this.fileInputId=e();this.handleDragEnter=t=>{this.isDraggingOverDropZone=true;this.preventAndStop(t)};this.handleDragLeave=()=>{this.isDraggingOverDropZone=false};this.handleFileDrop=t=>{this.preventAndStop(t);this.isDraggingOverDropZone=false;const o=t.dataTransfer;this.handleFile(o.files[0])};this.value=undefined;this.label=undefined;this.required=false;this.disabled=false;this.readonly=false;this.accept="*";this.language="en";this.isDraggingOverDropZone=false;this.handleFileSelection=this.handleFileSelection.bind(this);this.handleFileChange=this.handleFileChange.bind(this);this.handleChipSetChange=this.handleChipSetChange.bind(this);this.handleFileDrop=this.handleFileDrop.bind(this);this.handleKeyDown=this.handleKeyDown.bind(this);this.handleKeyUp=this.handleKeyUp.bind(this);this.handleChipInteract=this.handleChipInteract.bind(this)}connectedCallback(){this.initialize()}componentDidLoad(){this.fileInput=this.element.shadowRoot.getElementById(this.fileInputId);this.chipSet=this.element.shadowRoot.querySelector(_t);this.initialize()}initialize(){if(!this.chipSet){return}this.mdcTextField=new n(this.chipSet.shadowRoot.querySelector(".mdc-text-field"))}disconnectedCallback(){if(this.mdcTextField){this.mdcTextField.destroy()}}render(){return[r("input",{hidden:true,id:this.fileInputId,onChange:this.handleFileChange,type:"file",accept:this.accept,disabled:this.disabled||this.readonly}),r("limel-chip-set",{class:{"is-file-picker":true,"shows-dropzone":true,"highlight-dropzone":this.isDraggingOverDropZone},disabled:this.disabled,readonly:this.readonly,label:this.label,leadingIcon:"upload_to_cloud",language:this.language,onChange:this.handleChipSetChange,onClick:this.handleFileSelection,onInteract:this.handleChipInteract,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,required:this.required,type:"input",value:this.chipArray,title:this.getTranslation("drag-and-drop-tips"),onDragEnter:this.handleDragEnter,onDragOver:this.preventAndStop,onDragLeave:this.handleDragLeave,onDrop:this.handleFileDrop})]}get chipArray(){if(!this.value){return[]}return[Object.assign(Object.assign({},wt),{text:this.value.filename,id:this.value.id,icon:vt(this.value),iconFillColor:ft(this.value),iconBackgroundColor:ut(this.value),href:this.value.href,iconTitle:xt(this.value)})]}handleKeyDown(t){if(t.code==="Tab"||t.code==="Backspace"||t.code==="Enter"){return}t.preventDefault();t.stopPropagation()}handleKeyUp(t){if(t.code==="Enter"&&!this.value){this.fileInput.click()}}handleFileSelection(t){t.stopPropagation();t.preventDefault();if(!this.value){this.fileInput.click()}}handleFileChange(t){if(this.fileInput.files.length>0){t.stopPropagation();this.handleFile(this.fileInput.files[0])}}handleFile(t){const o={id:e(),filename:t.name,contentType:t.type,size:t.size,fileContent:t};this.change.emit(o);this.chipSet.blur();this.mdcTextField.valid=true}handleChipSetChange(t){t.stopPropagation();const o=!t.detail.length?t.detail[0]:null;this.chipSet.blur();if(!o){this.fileInput.value="";this.change.emit(o);if(this.required){this.mdcTextField.valid=false}}}handleChipInteract(t){t.stopPropagation();t.preventDefault();this.interact.emit(t.detail.id)}preventAndStop(t){t.stopPropagation();t.preventDefault()}getTranslation(t){return i.get(`file.${t}`,this.language)}get element(){return s(this)}};jt.style=yt;export{jt as limel_file};
//# sourceMappingURL=limel-file.entry.js.map