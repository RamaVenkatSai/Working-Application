import{r as e,h as l}from"./index-a55db97c.js";const i=class{constructor(l){e(this,l),this.handleChange=e=>{this.progress=Object.assign(Object.assign({},this.progress),{value:+e.detail})},this.progress={value:76,prefix:"↑",displayPercentageColors:!0}}render(){return[l("limel-info-tile",{label:"Won deals this month",icon:"money",prefix:"Total value",value:"70,659",suffix:"EUR",link:{href:"#"},progress:this.progress}),l("limel-example-controls",null,l("limel-input-field",{label:"Progress value",type:"number",value:`${this.progress.value}`,onChange:this.handleChange}))]}};i.style=":host(limel-example-info-tile-progress){display:grid;grid-template-columns:3fr 1fr;grid-template-rows:10rem;gap:2rem}limel-example-controls{margin:0}";export{i as limel_example_info_tile_progress}