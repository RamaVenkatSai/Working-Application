import{r as e,h as t}from"./index-ab490ba1.js";const i=class{constructor(t){e(this,t),this.chips=[{id:1,text:"All"},{id:2,text:"Lime",badge:5},{id:3,text:"Apple",selected:!0,badge:0},{id:4,text:"Banana",badge:1}],this.disabled=!1,this.handleChange=e=>{const t=[...this.chips];1!==e.detail.id&&(t[0].selected=!1),1===e.detail.id&&e.detail.selected&&t.forEach((e=>{e.selected=!1})),t[this.chips.findIndex((t=>t.id===e.detail.id))]=e.detail,this.chips=t},this.setDisabled=e=>{this.disabled=e.detail},this.setAllBadgeValue()}render(){return[t("limel-chip-set",{label:"Include fruits of type:",disabled:this.disabled,type:"filter",onChange:this.handleChange,value:this.chips}),t("p",null,t("limel-flex-container",{justify:"end"},t("limel-checkbox",{label:"Disabled",onChange:this.setDisabled,checked:this.disabled})))]}setAllBadgeValue(){let e=0;this.chips.forEach((t=>{1!==t.id&&(e+=t.badge)})),this.chips[0].badge=e}};export{i as limel_example_chip_set_filter_badge}