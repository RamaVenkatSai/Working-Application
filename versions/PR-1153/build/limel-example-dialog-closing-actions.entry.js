import{r as i,h as s}from"./index-6a31bb18.js";const t=class{constructor(s){i(this,s),this.isOpen=!1,this.triggerOnClick=this.triggerOnClick.bind(this),this.onClose=this.onClose.bind(this),this.okOnClick=this.okOnClick.bind(this)}render(){return[s("limel-button",{primary:!0,label:"Open",onClick:this.triggerOnClick}),s("limel-dialog",{open:this.isOpen,closingActions:{escapeKey:!1,scrimClick:!1},onClose:this.onClose},s("p",null,"This dialog doesn't close by clicking the scrim or pressing the escape key. Only the Ok-button triggers a close event."),s("limel-flex-container",{justify:"end",slot:"button"},s("limel-button",{label:"Ok",onClick:this.okOnClick})))]}triggerOnClick(){this.isOpen=!0}okOnClick(){this.isOpen=!1}onClose(){this.isOpen=!1}};export{t as limel_example_dialog_closing_actions}