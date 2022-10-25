import{r as t,h as i}from"./index-a7da85d2.js";import{p as e}from"./persons-14c12719.js";let l=class{constructor(i){t(this,i),this.tableData=e,this.defaultSelection=[e[0],e[2]],this.columns=[{title:"Name",field:"name"},{title:"Age",field:"age",horizontalAlign:"right"},{title:"Kind",field:"kind"},{title:"Height",field:"height",horizontalAlign:"right"},{title:"Stamina",field:"stamina"},{title:"Place of Birth",field:"placeOfBirth"},{title:"Sign",field:"sign"},{title:"Date of Birth",field:"dateOfBirth"},{title:"Role",field:"role"}],this.onActivateRow=t=>{this.activeRow=t.detail,this.eventPrinter.writeEvent(t)},this.onSelect=t=>{this.selection=t.detail,this.updateAggregates(),this.eventPrinter.writeEvent(t)},this.onSelectAll=t=>{this.eventPrinter.writeEvent(t)},this.selectAll=()=>{this.selection=[...this.tableData],this.updateAggregates()},this.clearSelection=()=>{this.selection=[],this.updateAggregates()},this.resetSelection=()=>{this.selection=[...this.defaultSelection],this.updateAggregates()},this.updateAggregates=()=>{this.aggregates=[this.getNameAggregate(),this.getHeightAggregate(),this.getAgeAggregate(),this.getStaminaAggregate()]},this.getNameAggregate=()=>{const t=this.selection.length;return{field:"name",value:t?`Selected: ${t}`:`Count: ${this.tableData.length}`}},this.getStaminaAggregate=()=>{const t=(this.selection.length?this.selection:this.tableData).map((t=>Number.parseInt(t.stamina,10))),i=Math.min(...t),e=Math.max(...t);let l=`${i}%`;return i!==e&&(l=`${i}% - ${e}%`),{field:"stamina",value:l}},this.sumProperty=(t,i)=>t.reduce(((t,e)=>t+i(e)),0),this.getAgeAggregate=()=>{const t=this.selection.length?this.selection:this.tableData,i=this.sumProperty(t,(t=>t.age));return{field:"age",value:"Avg: "+Math.round(100*(i/t.length||0))/100}},this.getHeightAggregate=()=>({field:"height",value:`${this.sumProperty(this.selection.length?this.selection:this.tableData,(t=>t.height))} cm`}),this.selection=[...this.defaultSelection],this.updateAggregates()}render(){var t;return[i("limel-button",{label:"Select all",onClick:this.selectAll}),i("limel-button",{label:"Clear selection",onClick:this.clearSelection}),i("limel-button",{label:"Reset",onClick:this.resetSelection}),i("limel-table",{data:this.tableData,activeRow:this.activeRow,selectable:!0,selection:this.selection,aggregates:this.aggregates,columns:this.columns,onActivate:this.onActivateRow,onSelect:this.onSelect,onSelectAll:this.onSelectAll,pageSize:5,mode:"local",totalRows:e.length,movableColumns:!0,class:"has-interactive-rows"}),i("limel-example-value",{label:"Active row",value:this.activeRow}),i("limel-example-value",{label:`Selected rows: (${(null===(t=this.selection)||void 0===t?void 0:t.length)||0})`,value:this.selection}),i("limel-example-event-printer",{ref:t=>this.eventPrinter=t})]}};l.style=":host{display:block}limel-table{height:300px}limel-button{margin-right:0.75rem;margin-bottom:0.75rem}";export{l as limel_example_table_selectable_rows}