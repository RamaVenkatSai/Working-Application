import{r as i,c as n,h as s}from"./index-6156b4fd.js";const t="";const l=class{constructor(t){i(this,t);this.interact=n(this,"interact",7);this.renderSteps=i=>{const n=i.slice(0,-1);if(i.some((i=>i.hasOwnProperty("link")))){return n.map(this.renderLinks)}return n.map(this.renderButtons)};this.renderButtons=i=>s("li",null,s("button",{onClick:this.handleClick},s("limel-icon",{name:i.icon}),s("span",null,i.text)));this.renderLinks=i=>s("li",null,s("a",{href:i.link},s("limel-icon",{name:i.icon}),s("span",null,i.text)));this.renderLastStep=i=>{const n=i.slice(-1);return s("li",null,s("limel-icon",{name:n[0].icon,size:"x-small"}),s("span",{"aria-current":"page"},n[0].text))};this.handleClick=()=>{this.interact.emit()};this.items=undefined}render(){return s("nav",{"aria-label":"Breadcrumb"},s("ol",null,this.renderSteps(this.items),this.renderLastStep(this.items)))}};l.style=t;export{l as limel_breadcrumbs};
//# sourceMappingURL=limel-breadcrumbs.entry.js.map