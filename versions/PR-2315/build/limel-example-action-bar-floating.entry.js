import{r as o,h as i}from"./index-a55db97c.js";const a=class{constructor(i){o(this,i),this.actionBarItems=[{id:"add",text:"Add",icon:"plus_math",iconOnly:!0},{id:"refresh",text:"Refresh",icon:"refresh",iconOnly:!0},{separator:!0},{id:"assign",text:"Assign me",commandText:"Cmd + H",icon:"whole_hand"},{id:"park",text:"Park",icon:"circled_pause",iconColor:"rgb(var(--color-orange-default))"},{text:"Close",icon:"do_not_disturb",iconColor:"rgb(var(--color-red-default))"}]}render(){return i("div",{class:"application has-floating-action-bar"},i("limel-action-bar",{accessibleLabel:"Contextual Action Bar",actionBarItems:this.actionBarItems,openDirection:"top",isFloating:!0}))}};a.style='@charset "UTF-8";.application{position:relative;overflow:hidden;height:20rem;border:1px solid rgb(var(--contrast-500));border-radius:0.5rem;background-color:rgb(var(--contrast-400))}.application.is-resizable{resize:horizontal}.application.is-resizable::after{content:"Resize me ⤵";font-size:0.75rem;position:absolute;right:0.5rem;bottom:0.5rem}.application.has-floating-action-bar{display:grid;background-color:rgb(var(--contrast-700))}.application.has-floating-action-bar limel-action-bar{position:absolute;bottom:0.75rem;justify-self:center}';export{a as limel_example_action_bar_floating}