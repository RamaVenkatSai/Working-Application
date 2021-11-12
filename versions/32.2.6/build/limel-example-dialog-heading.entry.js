import{r as i,h as l}from"./index-7619d89c.js";const e=class{constructor(l){i(this,l),this.isOpen=!1,this.title="Title",this.subtitle="Subtitle",this.badge=!0,this.icons=[{text:"Company",value:"organization"},{text:"Person",value:"user_group_man_man"},{text:"Deal",value:"money"},{text:"Todo",value:"todo_list"}],this.openDialog=this.openDialog.bind(this),this.closeDialog=this.closeDialog.bind(this),this.handleTitleChange=this.handleTitleChange.bind(this),this.handleSubtitleChange=this.handleSubtitleChange.bind(this),this.handleSupportingTextChange=this.handleSupportingTextChange.bind(this),this.handleIconChange=this.handleIconChange.bind(this),this.handleBadgeChange=this.handleBadgeChange.bind(this),this.icon=this.icons[0]}render(){const i={title:this.title,subtitle:this.subtitle,supportingText:this.supportingText,icon:this.icon.value,badgeIcon:this.badge},e={[this.icon.text.toLowerCase()]:!0,badge:this.badge};return[l("limel-button",{primary:!0,label:"Open",onClick:this.openDialog}),l("limel-dialog",{open:this.isOpen,onClose:this.closeDialog,heading:i,class:e},l("limel-input-field",{required:!0,label:"Title",value:this.title,onChange:this.handleTitleChange}),l("limel-input-field",{label:"Subtitle",value:this.subtitle,onChange:this.handleSubtitleChange}),l("limel-input-field",{label:"Supporting text",value:this.supportingText,onChange:this.handleSupportingTextChange}),l("limel-select",{required:!0,options:this.icons,label:"Icon",value:this.icon,onChange:this.handleIconChange}),l("limel-checkbox",{label:"Badge",checked:this.badge,onChange:this.handleBadgeChange}),l("limel-flex-container",{justify:"end",slot:"button"},l("limel-button",{label:"Ok",primary:!0,onClick:this.closeDialog})))]}openDialog(){this.isOpen=!0}closeDialog(){this.isOpen=!1}handleTitleChange(i){this.title=i.detail}handleSubtitleChange(i){this.subtitle=i.detail}handleSupportingTextChange(i){this.supportingText=i.detail}handleIconChange(i){this.icon=i.detail}handleBadgeChange(i){this.badge=i.detail}};e.style=":host(limel-example-dialog-heading){--dialog-width:40rem;--dialog-heading-supporting-text-color:rgb(var(--color-orange-dark))}:host(limel-example-dialog-heading) limel-input-field{margin-bottom:1rem}:host(limel-example-dialog-heading) limel-dialog.company{--dialog-heading-icon-color:rgb(var(--color-sky-default));--dialog-heading-icon-background-color:rgb(\n      var(--color-sky-default)\n  )}:host(limel-example-dialog-heading) limel-dialog.person{--dialog-heading-icon-color:rgb(var(--color-orange-default));--dialog-heading-icon-background-color:rgb(\n      var(--color-orange-default)\n  )}:host(limel-example-dialog-heading) limel-dialog.deal{--dialog-heading-icon-color:rgb(var(--color-green-default));--dialog-heading-icon-background-color:rgb(\n      var(--color-green-default)\n  )}:host(limel-example-dialog-heading) limel-dialog.todo{--dialog-heading-icon-color:rgb(var(--color-teal-default));--dialog-heading-icon-background-color:rgb(\n      var(--color-teal-default)\n  )}:host(limel-example-dialog-heading) limel-dialog.badge{--dialog-heading-icon-color:rgb(var(--color-white))}";export{e as limel_example_dialog_heading}