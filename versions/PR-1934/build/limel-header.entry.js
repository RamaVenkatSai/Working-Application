import{r as e,h as r}from"./index-a55db97c.js";const i=class{constructor(r){e(this,r),this.icon=void 0,this.heading=void 0,this.subheading=void 0,this.supportingText=void 0}render(){return[r("div",{class:"information"},this.renderIcon(),r("div",{class:"headings"},r("h1",{class:"heading",title:this.heading},this.heading),r("h2",{class:"subheading",title:this.subheading},this.subheading,this.renderSupportingText()))),r("div",{class:"actions"},r("slot",{name:"actions"},r("slot",null)))]}renderIcon(){if(this.icon)return r("limel-icon",{class:"icon",badge:!0,name:this.icon})}renderSupportingText(){if(this.supportingText)return r("span",{class:"information__headings__subheading__supporting-text"},r("span",null,"·")," ",this.supportingText)}};i.style=":host(limel-header){display:flex;align-items:center;box-sizing:border-box;width:100%;background-color:var(--header-background-color, rgb(var(--contrast-300)));border-top-left-radius:var(--header-top-right-left-border-radius, 0.75rem);border-top-right-radius:var(--header-top-right-left-border-radius, 0.75rem);padding:0.25rem}.information{display:flex;flex-grow:1;align-items:center;min-width:0}.icon{flex-shrink:0;color:var(--header-icon-color, rgb(var(--contrast-1100)));background-color:var(--header-icon-background-color, transparent);width:1.75rem;margin:0 0.5rem}.headings{min-width:0;margin-left:0.25rem}.heading,.subheading{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin:0;padding:0}.heading{color:var(--header-heading-color, rgb(var(--contrast-1100)));font-size:1.0625rem}.subheading{color:var(--header-subheading-color, rgb(var(--contrast-900)));font-size:0.875rem;font-weight:lighter}.subheading__supporting-text{color:var(--header-supporting-text-color, var(--header-subheading-color))}.subheading__supporting-text span{margin:0 0.5rem;font-weight:bold}.actions{flex-shrink:0}:host(limel-header.is-narrow){padding:0.125rem 0.25rem}:host(limel-header.is-narrow) .icon{margin-right:0.125rem;width:1.25rem}:host(limel-header.is-narrow) .heading{font-size:0.9375rem}:host(limel-header.has-responsive-layout){display:grid;grid-template-columns:repeat(auto-fit, minmax(clamp(50%, var(--header-responsive-breakpoint, 22rem), 100%), 1fr))}:host(limel-header.has-responsive-layout) .headings{padding-right:0.5rem}:host(limel-header.has-responsive-layout) .actions{display:flex;justify-content:flex-end}";export{i as limel_header}