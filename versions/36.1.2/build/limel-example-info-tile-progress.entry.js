import{r as e,h as i}from"./index-5f2797d5.js";const l=class{constructor(i){e(this,i),this.handleChange=e=>{this.progress=Object.assign(Object.assign({},this.progress),{value:+e.detail})},this.progress={value:76,prefix:"↑"}}render(){return[i("limel-info-tile",{label:"Won deals this month",icon:"money",prefix:"Total value",value:"70,659",suffix:"EUR",link:{href:"#"},progress:this.progress}),i("limel-input-field",{label:"Progress value",type:"number",value:`${this.progress.value}`,onChange:this.handleChange})]}};l.style=":host(limel-example-info-tile-progress){display:grid;grid-template-columns:3fr 1fr;grid-template-rows:10rem;gap:3rem}";export{l as limel_example_info_tile_progress}