import{r as e,h as t}from"./index-5f2797d5.js";const a=class{constructor(t){e(this,t),this.allItems=[{text:"Admiral Swiggins",value:1},{text:"Ayla",value:2},{text:"Clunk",value:3},{text:"Coco",value:4},{text:"Derpl",value:5},{text:"Froggy G",value:6},{text:"Gnaw",value:7},{text:"Lonestar",value:8},{text:"Leon",value:9},{text:"Raelynn",value:10},{text:"Skølldir",value:11},{text:"Voltar",value:12},{text:"Yuri",value:13}],this.search=e=>new Promise((t=>{""===e&&t(this.allItems),t(this.allItems.filter((t=>t.text.toLowerCase().includes(e.toLowerCase()))))})),this.onChange=e=>{e instanceof CustomEvent&&(this.selectedItem=e.detail)},this.onInteract=e=>{e instanceof CustomEvent&&console.log("Value interacted with:",e.detail)},this.selectedItem=void 0}render(){return[t("limel-picker",{label:"Favorite awesomenaut",leadingIcon:"search",value:this.selectedItem,searcher:this.search,onChange:this.onChange,onInteract:this.onInteract}),t("p",null,"Value: ",t("code",null,JSON.stringify(this.selectedItem)))]}};export{a as limel_example_picker_leading_icon}