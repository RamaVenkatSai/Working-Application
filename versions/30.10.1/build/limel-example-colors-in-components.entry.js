import{r,h as o}from"./index-9cbaf4f2.js";const l=class{constructor(o){r(this,o)}render(){return o("div",{class:"background"},o("h3",null,"Buttons"),o("div",{class:"example-buttons"},o("limel-button",{class:"success",label:"Continue"}),o("limel-button",{primary:!0,class:"caution",label:"Pause"}),o("limel-button",{primary:!0,label:"Do not press!",style:{"--lime-primary-color":"rgb(var(--color-red-default))"}})),o("h3",null,"Linear progress"),o("p",null,o("limel-linear-progress",{value:.5})),o("h3",null,"Custom component"),o("div",{class:"box"},"This is a message."))}};l.style="h3{color:rgb(var(--contrast-1300))}.background{margin:0.75rem auto 1.25rem auto;padding:1.25rem 0.75rem;background-color:rgb(var(--contrast-300));border-radius:0.1875rem}.example-buttons{display:grid;grid-auto-flow:column;grid-gap:1rem;justify-content:left;margin-bottom:2rem}limel-button.success{--lime-primary-color:rgb(var(--color-green-default))}limel-button.caution{--lime-on-primary-color:rgb(var(--color-black));--lime-primary-color:rgb(var(--color-amber-default))}limel-linear-progress{--lime-primary-color:rgb(var(--color-blue-default));--background-color:rgb(var(--color-gray-light));display:block;margin-bottom:2rem}.box{display:flex;justify-content:center;align-items:center;width:10rem;height:3rem;border-radius:0.25rem;color:rgb(var(--contrast-200));background-color:rgb(var(--contrast-1100));box-shadow:var(--shadow-depth-16)}";export{l as limel_example_colors_in_components}