import{r as t,h as i}from"./index-954e57b6.js";import{d as e}from"./birds-a0b078f9.js";import"./_baseGetTag-accbac5b.js";import"./isObjectLike-38996507.js";import"./isSymbol-efd2038b.js";import"./_arrayMap-e86f6dbb.js";import"./isArray-80298bc7.js";import"./toString-3c83e093.js";import{c as a}from"./capitalize-a6cedc74.js";var s;!function(t){t.Average="avg",t.Maximum="max",t.Minimum="min",t.Sum="sum",t.Count="count"}(s||(s={}));const l=class{constructor(i){t(this,i),this.columns=[],this.currentPage=1,this.currentSorting="None",this.pageSize=10,this.addUnit=t=>i=>`${i} ${t}`,this.handleChangePage=this.handleChangePage.bind(this),this.handleSort=this.handleSort.bind(this)}componentWillLoad(){this.columns=[{title:"Name",field:"name"},{title:"Binominal name",field:"binominalName"},{title:"Wingspan",field:"wingspan",formatter:this.addUnit("cm")},{title:"Nest type",field:"nest",formatter:a},{title:"Eggs per clutch",field:"eggs",aggregator:s.Average},{title:"Origin",field:"origin"}]}handleChangePage(t){this.currentPage=t.detail}handleSort(t){this.currentSorting=t.detail[0].column.title}render(){return[i("limel-table",{data:e,columns:this.columns,pageSize:this.pageSize,onChangePage:this.handleChangePage,onSort:this.handleSort}),i("limel-example-value",{label:"Current page is",value:this.currentPage}),i("limel-example-value",{label:"Currently sorting on",value:this.currentSorting})]}};l.style=":host{display:block}limel-table{height:300px}";export{l as limel_example_table_local}