import{r as t,h as i}from"./index-a55db97c.js";const o=class{constructor(i){t(this,i),this.actionBarItems=[{text:"Justify left",icon:"align_left",iconOnly:!0},{text:"Justify full",icon:"align_justify",iconOnly:!0},{text:"Justify center",icon:"align_center",iconOnly:!0},{text:"Justify right",icon:"align_right",iconOnly:!0},{separator:!0},{text:"Bold",commandText:"⌘ B",icon:"bold",iconOnly:!0},{text:"Italic",commandText:"⌘ I",icon:"italic",iconOnly:!0},{text:"Underline",commandText:"⌘ U",icon:"underline",iconOnly:!0},{separator:!0},{text:"List",icon:"list",iconOnly:!0},{text:"Numbered list",icon:"numbered_list",iconOnly:!0},{text:"Blockquote",icon:"quote_right",iconOnly:!0},{text:"Emoji",icon:"happy",iconOnly:!0},{separator:!0},{text:"Picture",icon:"picture",iconOnly:!0},{text:"Link",icon:"link",iconOnly:!0},{text:"Table",icon:"insert_table",iconOnly:!0},{separator:!0},{text:"Copy",commandText:"⌘ C",icon:"copy",iconOnly:!0},{text:"Cut",commandText:"⌘ X",icon:"cut",iconOnly:!0},{text:"Paste",commandText:"⌘ V",icon:"paste",iconOnly:!0},{text:"Delete",commandText:"⌘ ⌫",icon:"trash",iconOnly:!0},{text:"Find & Replace",commandText:"⌘ ⇧ F",icon:"search",iconOnly:!0},{separator:!0},{text:"Code",icon:"source_code",iconOnly:!0}]}render(){return i("div",{class:"application is-resizable"},i("limel-action-bar",{accessibleLabel:"Toolbar",actionBarItems:this.actionBarItems,layout:"fullWidth"}))}};o.style='@charset "UTF-8";.application{position:relative;overflow:hidden;height:20rem;border:1px solid rgb(var(--contrast-500));border-radius:0.5rem;background-color:rgb(var(--contrast-400))}.application.is-resizable{resize:horizontal;max-width:100%;min-width:10rem}.application.is-resizable::after{content:"Resize me ⤵";font-size:0.75rem;position:absolute;right:0.5rem;bottom:0.5rem}.application.has-floating-action-bar{display:grid;background-color:rgb(var(--contrast-700))}.application.has-floating-action-bar limel-action-bar{position:absolute;bottom:0.75rem;justify-self:center}';export{o as limel_example_action_bar_overflow_menu}