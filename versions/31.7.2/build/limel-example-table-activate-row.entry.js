import{r as t,h as e}from"./index-6a31bb18.js";import{p as i}from"./persons-14c12719.js";const l=class{constructor(e){t(this,e),this.tableData=i,this.columns=[{title:"Name",field:"name"},{title:"Age",field:"age"},{title:"Kind",field:"kind"},{title:"Height",field:"height"},{title:"Stamina",field:"stamina"},{title:"Place of Birth",field:"placeOfBirth"},{title:"Sign",field:"sign"},{title:"Date of Birth",field:"dateOfBirth"},{title:"Role",field:"role"}],this.onActivateRow=this.onActivateRow.bind(this)}render(){return[e("limel-table",{data:this.tableData,activeRow:this.activeRow,columns:this.columns,onActivate:this.onActivateRow,class:"has-interactive-rows"}),e("limel-example-value",{label:"Active row",value:this.activeRow})]}onActivateRow(t){this.activeRow=t.detail}};l.style=":host{display:block}limel-table{height:300px}";export{l as limel_example_table_activate_row}