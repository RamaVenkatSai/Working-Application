import{r as t,h as r}from"./index-ab490ba1.js";const o=class{constructor(o){t(this,o),this.label=null,this.linkTitle=null,this.disabled=!1,this.href=null,this.target="_self",this.renderLabel=()=>{if(this.label)return r("span",{"aria-hidden":"true"},this.label)},this.getAreaLabel=()=>this.label&&this.linkTitle?this.label+". "+this.linkTitle:this.label?this.label:this.linkTitle?this.linkTitle:void 0,this.renderNotification=()=>{if(this.badge)return r("limel-badge",{label:this.badge})}}render(){return[r("a",{"aria-disabled":this.disabled,href:this.href,target:this.target,tabindex:"0","aria-label":this.getAreaLabel(),title:this.linkTitle},r("limel-icon",{name:this.icon})),this.renderLabel(),this.renderNotification()]}};o.style=":host(limel-shortcut){--badge-text-color:var(\n      --shortcut-badge-text-color,\n      rgb(var(--color-white))\n  );--badge-background-color:var(\n      --shortcut-badge-background-color,\n      rgb(var(--color-red-default))\n  );position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;row-gap:0.0625rem}:host(limel-shortcut) *{box-sizing:border-box}:host(limel-shortcut[disabled]) a{opacity:0.5;box-shadow:unset;cursor:not-allowed}a{all:unset;transition:background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease-out;box-shadow:var(--button-shadow-normal);cursor:pointer;text-align:center;height:calc(100% - 1rem);width:calc(100% - 1rem);padding:0.5rem;border-radius:var(--shortcut-border-radius, 1rem);background-color:var(--shortcut-background-color, rgb(var(--contrast-100)))}a:hover{box-shadow:var(--button-shadow-hovered)}a:active{box-shadow:var(--button-shadow-pressed);transform:translate3d(0, 0.08rem, 0)}a:focus{outline:none}a:focus-visible{outline:none;box-shadow:var(--shadow-depth-8-focused)}limel-icon{display:flex;height:100%;width:100%;justify-content:center;color:var(--shortcut-icon-color, rgb(var(--contrast-1000)));border-radius:var(--shortcut-border-radius, 1rem)}span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:100%;color:var(--shortcut-label-color, rgb(var(--contrast-1100)));font-size:0.75rem;text-align:center}limel-badge{position:absolute;top:-0.5rem;right:0}";export{o as limel_shortcut}