import{r as e,h as i}from"./index-9cbaf4f2.js";const t=class{constructor(i){e(this,i),this.chips=[{id:1,text:"Lime",icon:"citrus"},{id:2,text:"Apple",selected:!0,icon:"apple"},{id:3,text:"Banana",icon:"banana"}],this.disabled=!1,this.chipSetOnChange=this.chipSetOnChange.bind(this),this.setDisabled=this.setDisabled.bind(this)}render(){return[i("limel-chip-set",{disabled:this.disabled,type:"choice",label:"Thirst quencher with a twist of",onChange:this.chipSetOnChange,value:this.chips}),i("p",null,i("limel-flex-container",{justify:"end"},i("limel-checkbox",{label:"Disabled",onChange:this.setDisabled,checked:this.disabled})))]}chipSetOnChange(e){console.log(e.detail)}setDisabled(e){this.disabled=e.detail}};export{t as limel_example_chip_set_choice}