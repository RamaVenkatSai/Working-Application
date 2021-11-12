import{r as e,h as r}from"./index-64ccb4a0.js";const o=class{constructor(r){e(this,r),this.visualizeSizes=!0,this.toggleMode=()=>{this.visualizeSizes=!this.visualizeSizes}}render(){return[r("div",{id:"size-rhythm-edge-case-example",class:{"visualize-sizes":this.visualizeSizes}},r("div",{class:"grid"},r("div",{class:"row row-1"},r("div",{class:"cell picture"}),r("div",{class:"cell name"},"Mäkelä Jehkinen"),r("div",{class:"cell role"},"Head of Guardians")),r("div",{class:"row row-2"},r("div",{class:"cell picture"}),r("div",{class:"cell name"},"Goliham Gigantlle"),r("div",{class:"cell role"},"Chief Cool Stuff Officer")))),r("limel-flex-container",{justify:"start"},r("limel-checkbox",{label:"Visualize sizes",onChange:this.toggleMode,checked:this.visualizeSizes}))]}};o.style=":host{display:block;background-color:rgb(var(--contrast-200));border-radius:0.25rem}*{box-sizing:border-box}#size-rhythm-edge-case-example{position:relative;background-color:rgb(var(--contrast-400));color:rgb(var(--contrast-1100));padding:2.5rem 0 2.5rem 5rem}#size-rhythm-edge-case-example:after{content:\"\";position:absolute;z-index:1;top:0;bottom:0;right:0;width:50%;background-image:linear-gradient(to right, rgba(var(--contrast-300), 0), rgb(var(--contrast-300)))}.grid{display:grid;grid-auto-flow:row;border-radius:0.75rem 0 0 0.75rem;overflow:hidden;border:1px solid rgb(var(--contrast-500))}.row{display:grid;grid-auto-flow:column;grid-template-columns:2.625rem 10.5rem auto;grid-gap:1.75rem;background-color:rgb(var(--contrast-200));padding:1.3125rem}.row:not(first-of-type){border-bottom:1px solid rgb(var(--contrast-500))}.cell{font-size:1.25rem;line-height:2.625rem;white-space:nowrap}.cell.picture{background-color:rgb(var(--contrast-400));border-radius:0.375rem;width:2.625rem;height:2.625rem;background-size:contain;background-repeat:no-repeat;background-position:center}.row-1 .cell.picture{background-image:url(\"data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' clip-rule='evenodd' viewBox='0 0 512 512'><defs/><path fill='rgb(255, 87, 34)' fill-rule='nonzero' d='M414.784 512.09H97.218v-63.14c-.06-60.442 38.812-114.482 96.134-133.646 1.911-.693 123.387-.658 125.298.035 57.322 19.165 96.195 73.204 96.134 133.646v63.104z'/><path fill='rgb(255, 204, 188)' fill-rule='nonzero' d='M256.001 369.652a88.178 88.178 0 01-56.38-20.315c-44.608-36.998-69.596-92.69-67.575-150.61l.688-19.474c2.228-66.055 57.175-119.18 123.267-119.18s121.04 53.125 123.267 119.18l.689 19.474c2.02 57.92-22.968 113.612-67.576 150.61A88.178 88.178 0 01256 369.652z'/></svg>\")}.row-2 .cell.picture{background-image:url(\"data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' clip-rule='evenodd' viewBox='0 0 512 512'><defs/><path fill='rgb(139, 195, 74)' fill-rule='nonzero' d='M414.784 512.09H97.218v-63.14c-.06-60.442 38.812-114.482 96.134-133.646 1.911-.693 123.387-.658 125.298.035 57.322 19.165 96.195 73.204 96.134 133.646v63.104z'/><path fill='rgb(255, 204, 188)' fill-rule='nonzero' d='M256.001 369.652a88.178 88.178 0 01-56.38-20.315c-44.608-36.998-69.596-92.69-67.575-150.61l.688-19.474c2.228-66.055 57.175-119.18 123.267-119.18s121.04 53.125 123.267 119.18l.689 19.474c2.02 57.92-22.968 113.612-67.576 150.61A88.178 88.178 0 01256 369.652z'/></svg>\")}#size-rhythm-edge-case-example,.row,.cell{position:relative}#size-rhythm-edge-case-example:before,#size-rhythm-edge-case-example:after,.row:before,.row:after,.cell:before,.cell:after{transition:opacity 0.4s ease;z-index:1;position:absolute;display:flex;justify-content:center;align-items:center;font-size:0.75rem;color:rgb(var(--contrast-1100));box-sizing:border-box;opacity:0}#size-rhythm-edge-case-example:before{content:\"24\";height:5.25rem;width:1.25rem;top:2.5rem;left:3.25rem;background-color:rgba(var(--color-gray-dark), 0.7);color:rgb(var(--color-gray-lighter))}.row-2:before{content:\"6\";background-color:rgba(var(--color-cyan-light), 0.5);left:0.0625rem;top:0;bottom:0;margin:auto;width:1.25rem;height:1.3125rem;transition-delay:0.2s}.row-2 .picture:before,.row-2 .picture:after{content:\"6\";background-color:rgba(var(--color-cyan-light), 0.5);left:0;right:0;margin:auto;width:1.25rem;height:1.3125rem;transition-delay:0.2s}.row-2 .picture:before{top:-1.3125rem}.row-2 .picture:after{bottom:-1.3125rem}.row-1 .picture:after,.row-1 .name:after{content:\"12\";height:2.625rem;right:-1.25rem;top:0;background-color:rgba(var(--color-orange-default), 0.5);transition-delay:0.1s}.visualize-sizes .row:before,.visualize-sizes .row:after,.visualize-sizes .cell:before,.visualize-sizes .cell:after{opacity:1}.visualize-sizes#size-rhythm-edge-case-example:before{opacity:1}";export{o as limel_example_size_edge_case}