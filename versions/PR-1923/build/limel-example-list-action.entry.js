import{r as t,h as e}from"./index-5f2797d5.js";const i=class{constructor(e){t(this,e),this.actionItems=[{text:"Go to my fab object",value:10},{text:"Delete object",value:11}],this.items=[{text:"King of Tokyo",value:1,icon:"gorilla",actions:this.actionItems},{text:"Smash Up!",value:2,icon:"alien"},{text:"Pandemic",value:3,icon:"virus"},{text:"Catan",value:4,icon:"wheat"},{text:"Ticket to Ride",value:5,icon:"steam_engine"}]}render(){return e("limel-list",{items:this.items,onSelect:this.onSelectAction})}onSelectAction(t){t instanceof CustomEvent&&console.log("Executing action: ",t.detail)}};export{i as limel_example_list_action}