import{r as i,h as t}from"./index-a7da85d2.js";import{d as e}from"./birds-a0b078f9.js";import{c as a}from"./capitalize-91693972.js";import"./toString-0a9c1851.js";import"./_baseGetTag-49d0259e.js";import"./_arrayMap-e86f6dbb.js";import"./isArray-80298bc7.js";import"./isSymbol-f24bedd7.js";import"./isObjectLike-38996507.js";var l;!function(i){i.Average="avg",i.Maximum="max",i.Minimum="min",i.Sum="sum",i.Count="count"}(l||(l={}));let s=class{constructor(t){i(this,t),this.columns=[],this.currentPage=1,this.currentSorting="None",this.pageSize=10,this.addUnit=i=>t=>`${t} ${i}`,this.handleChangePage=i=>{this.currentPage=i.detail},this.handleSort=i=>{this.currentSorting=i.detail[0].column.title}}componentWillLoad(){this.columns=[{title:"Name",field:"name"},{title:"Binominal name",field:"binominalName"},{title:"Wingspan",field:"wingspan",formatter:this.addUnit("cm")},{title:"Nest type",field:"nest",formatter:a},{title:"Eggs per clutch",field:"eggs",aggregator:l.Average,horizontalAlign:"right"},{title:"Origin",field:"origin"}]}render(){return[t("limel-table",{data:e,columns:this.columns,pageSize:this.pageSize,onChangePage:this.handleChangePage,onSort:this.handleSort}),t("limel-example-value",{label:"Current page is",value:this.currentPage}),t("limel-example-value",{label:"Currently sorting on",value:this.currentSorting})]}};s.style=":host{display:block}limel-table{height:300px}";export{s as limel_example_table_local}