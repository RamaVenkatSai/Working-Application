import{r as t,h as s}from"./p-4cc338df.js";const i=class{constructor(s){t(this,s),this.setRoute=this.setRoute.bind(this)}connectedCallback(){window.addEventListener("hashchange",this.setRoute),this.setRoute()}disconnectedCallback(){window.removeEventListener("hashchange",this.setRoute)}setRoute(){this.route=location.hash.replace("#","")}render(){return this.findGuide(),s("kompendium-markdown",{text:this.text})}findGuide(){const t=this.data.guides.find((t=>t.data.path+"/"===this.route));t&&(this.text=t.content)}};export{i as kompendium_guide}