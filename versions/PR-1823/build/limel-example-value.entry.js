import{r as e,h as r}from"./index-7dccb886.js";import{b as o}from"./_baseGetTag-49d0259e.js";import{i as n}from"./isObjectLike-38996507.js";import{b as s,n as a}from"./_nodeUtil-0ed26eea.js";import{i}from"./isObject-7039fcda.js";import{i as t}from"./isArray-80298bc7.js";var m=a&&a.isDate,l=m?s(m):function(e){return n(e)&&"[object Date]"==o(e)};const c=class{constructor(r){e(this,r),this.label="Value"}render(){return r("p",null,this.label,": ",this.format(this.value))}format(e){return void 0===e?r("code",null,"undefined"):l(e)?r("code",null,e.toString()):i(e)||t(e)?r("pre",null,r("code",null,JSON.stringify(e,null,2))):r("code",null,JSON.stringify(e,null,2))}};c.style='code{font-family:"Source Code Pro", monospace;font-size:0.75rem;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;display:inline-block;border-radius:0.1875rem;padding:0.0625rem 0.3125rem;color:rgb(var(--kompendium-contrast-1300));background-color:rgb(var(--kompendium-contrast-600))}pre>code{display:block;border-radius:0.5rem;margin:0.5rem 0;padding:1rem;overflow:auto;white-space:pre-wrap;color:rgb(var(--kompendium-contrast-800));background-color:rgb(var(--kompendium-contrast-1600))}';export{c as limel_example_value}