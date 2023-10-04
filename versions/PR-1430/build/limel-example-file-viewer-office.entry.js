import{r as e,h as s}from"./index-6156b4fd.js";const t="section{display:flex;gap:1rem;justify-content:space-between;align-items:center}section>*{margin:0}limel-file-viewer{margin:0 0 4rem 0}";const i=class{constructor(t){e(this,t);this.microsoftDocuments=[{title:"Microsoft Word",extension:".docx",url:"https://filesamples.com/samples/document/docx/sample1.docx"},{title:"Microsoft PowerPoint",extension:".ppt",url:"https://filesamples.com/samples/document/ppt/sample1.ppt"},{title:"Microsoft Excel",extension:".xlsx",url:"https://filesamples.com/samples/document/xlsx/sample1.xlsx"}];this.openDocuments=[{title:"Text",extension:".odt",url:"https://filesamples.com/samples/document/odt/sample1.odt"},{title:"Spreadsheet",extension:".ods",url:"https://filesamples.com/samples/document/ods/sample1.ods"},{title:"Presentation",extension:".odp",url:"https://filesamples.com/samples/document/odp/sample1.odp"}];this.renderMicrosoftDocuments=e=>{var t;return[s("h3",null,e.title,s("code",null,e.extension)),s("limel-file-viewer",{url:e.url,officeViewer:(t=this.selectedOfficeViewer)===null||t===void 0?void 0:t.value})]};this.renderOpenDocuments=e=>{var t;return[s("h3",null,e.title,s("code",null,e.extension)),s("limel-file-viewer",{url:e.url,officeViewer:(t=this.selectedOfficeViewer)===null||t===void 0?void 0:t.value})]};this.handleNewSelection=e=>{this.selectedOfficeViewer=e.detail};this.selectedOfficeViewer=undefined;const i=["microsoft-office","google-drive"];this.availableOfficeViewers=i.map((e=>({text:e,value:e})));this.selectedOfficeViewer=this.availableOfficeViewers.find((e=>e.value==="microsoft-office"))}render(){return[s("section",null,s("h1",null,"Office files"),s("limel-select",{class:"is-narrow",label:"officeViewer",options:this.availableOfficeViewers,value:this.selectedOfficeViewer,onChange:this.handleNewSelection})),s("h2",null,"Microsoft Office"),this.microsoftDocuments.map(this.renderMicrosoftDocuments),s("h2",null,"OpenDocument formats"),this.openDocuments.map(this.renderOpenDocuments)]}};i.style=t;export{i as limel_example_file_viewer_office};
//# sourceMappingURL=limel-example-file-viewer-office.entry.js.map