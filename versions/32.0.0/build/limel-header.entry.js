import{r as i,h as r}from"./index-6a31bb18.js";const n=class{constructor(r){i(this,r)}render(){return[r("div",{class:"information"},r("limel-icon",{class:"information__icon",badge:!0,size:"large",name:this.icon}),r("div",{class:"information__headings"},r("h1",{class:"information__headings__heading",title:this.heading},this.heading),r("h2",{class:"information__headings__subheading",title:this.subheading},this.subheading,this.renderSupportingText()))),r("div",{class:"actions"},r("slot",null))]}renderSupportingText(){if(this.supportingText)return r("span",{class:"information__headings__subheading__supporting-text"},r("span",null,"·")," ",this.supportingText)}};n.style=":host{display:flex;align-items:center;box-sizing:border-box;width:100%;background-color:var(--header-background-color, rgb(var(--contrast-300)));border-top-left-radius:var(--header-top-right-left-border-radius, 0.75rem);border-top-right-radius:var(--header-top-right-left-border-radius, 0.75rem);padding:0.25rem}.information{display:flex;flex-grow:1;align-items:center;min-width:0}.information__icon{flex-shrink:0;color:var(--header-icon-color, rgb(var(--contrast-1100)));background-color:var(--header-icon-background-color, transparent)}.information__headings{min-width:0;margin-left:0.25rem}.information__headings__heading,.information__headings__subheading{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin:0;padding:0}.information__headings__heading{color:var(--header-heading-color, rgb(var(--contrast-1100)));font-size:1.0625rem}.information__headings__subheading{color:var(--header-subheading-color, rgb(var(--contrast-900)));font-size:0.875rem;font-weight:lighter}.information__headings__subheading__supporting-text{color:var(--header-supporting-text-color, var(--header-subheading-color))}.information__headings__subheading__supporting-text span{margin:0 0.5rem;font-weight:bold}.actions{flex-shrink:0}:host(.is-narrow) .information__icon{margin:-0.75rem -0.5rem;transform:scale(0.8)}:host(.is-narrow) .information__headings__heading{font-size:0.9375rem}:host(.has-responsive-layout){display:grid;grid-template-columns:repeat(auto-fit, minmax(clamp(50%, var(--header-responsive-breakpoint, 22rem), 100%), 1fr))}:host(.has-responsive-layout) .information__headings{padding-right:0.5rem}:host(.has-responsive-layout) .actions{display:flex;justify-content:flex-end}";export{n as limel_header}