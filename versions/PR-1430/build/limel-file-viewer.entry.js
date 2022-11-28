import{r as e,c as t,h as r,g as o}from"./index-a7da85d2.js";import{t as s}from"./translations-66fcd967.js";class i{constructor(e){this.enter=e.requestFullscreen||e.msRequestFullscreen||e.mozRequestFullScreen||e.webkitRequestFullscreen,this.enter=this.enter.bind(e);const t=window.document;this.exit=t.exitFullscreen||t.msExitFullscreen||t.mozCancelFullScreen||t.webkitExitFullscreen,this.requestFullscreen=this.requestFullscreen.bind(this),this.exitFullscreen=this.exitFullscreen.bind(this),this.toggle=this.toggle.bind(this)}requestFullscreen(){this.enter&&this.enter()}exitFullscreen(){this.exit&&this.exit.bind(window.document)()}toggle(){const e=window.document;e.fullscreenElement||e.mozFullScreenElement||e.webkitFullscreenElement||e.msFullscreenElement?this.exitFullscreen():this.requestFullscreen()}isSupported(){return!!this.requestFullscreen}}let a=class{constructor(r){e(this,r),this.action=t(this,"action",7),this.language="en",this.sameDomain=!1,this.emitOnAction=e=>{e.stopPropagation(),this.action.emit(e.detail)},this.fullscreen=new i(this.HostElement)}render(){if(this.sameDomain=this.url.includes(this.webserverDomain),this.url){if(this.type||(this.type=function(e,t){const r=e||t;let o="",s="";if(!r)return o="",void(s="unknown");switch(o=r.split(".").pop().toLowerCase(),o){case"pdf":s="pdf";break;case"jpg":case"jpeg":case"heic":case"bmp":case"png":case"gif":case"svg":case"svgz":case"ep":case"eps":s="image";break;case"avi":case"flv":case"h264":case"mov":case"mp4":case"mwv":case"mkv":s="video";break;case"mp3":case"wav":case"wma":case"ogg":s="audio";break;case"txt":case"json":case"html":case"xml":s="text";break;case"doc":case"docx":case"ppt":case"xls":case"xlsx":case"odt":case"ods":case"odp":case"dot":case"dotx":case"docm":case"dotm":case"pages":case"pptx":case"csv":case"numbers":case"pot":case"pps":case"ppsx":case"pptm":case"potx":case"potm":case"ppam":case"ppsm":case"sldx":case"sldm":case"key":s="office";break;default:s="unknown"}return s}(this.filename,this.url)),"office"===this.type&&!this.url.startsWith("http://")&&!this.url.startsWith("https://"))return this.renderNoFileSupportMessage();switch(this.type){case"pdf":return this.renderPdf();case"image":return this.renderImage();case"video":return this.renderVideo();case"audio":return this.renderAudio();case"text":return this.renderText();case"office":return this.renderOffice();default:return this.renderNoFileSupportMessage()}}}renderOffice(){const e="https://view.officeapps.live.com/op/embed.aspx?src=";return this.sameDomain?[r("a",{href:this.url,style:{position:"relative",float:"right",right:"10px",bottom:"35px",transition:"0.5s"}},"download"),r("div",{class:"action-menu-for-office-files"},this.renderActionMenu()),r("iframe",{src:e+this.url,frameborder:"0"})]:[r("div",{class:"action-menu-for-office-files"},this.renderActionMenu()),r("iframe",{src:e+this.url,frameborder:"0"})]}renderText(){return[this.renderButtons(),r("object",{data:this.url,type:"text/plain"})]}renderVideo(){return r("video",{controls:!0},r("source",{src:this.url}))}renderPdf(){return r("object",{data:this.url,type:"application/pdf"})}renderImage(){return[this.renderButtons(),r("img",{src:this.url,alt:this.alt})]}renderAudio(){return r("audio",{controls:!0},r("source",{src:this.url}))}renderNoFileSupportMessage(){return r("div",{class:"no-support"},r("div",{class:"no-support__info"},r("limel-icon",{class:"icon--warning",name:"brake_warning",size:"large"}),r("div",null,this.getTranslation("message.unsupported-filetype"))),r("a",{href:this.url,title:"download",class:"button--download",role:"button",download:!0},r("limel-icon",{name:"download_2",size:"large"})))}renderButtons(){return r("div",{class:"buttons"},this.renderActionMenu(),this.renderFullscreenButtons(),r("a",{href:this.url,title:this.getTranslation("title.download"),class:"button--download",role:"button",download:this.filename,target:"_blank"},r("limel-icon",{name:"download_2",size:"small"})),r("a",{class:"button--new-tab",role:"button",href:this.url,target:"_blank",rel:"noopener noreferrer",title:this.getTranslation("title.open-in-new-tab")},r("limel-icon",{name:"external_link",size:"small"})))}renderFullscreenButtons(){if(this.fullscreen.isSupported())return[r("a",{class:"button--exit-fullscreen",role:"button",onClick:this.fullscreen.toggle,title:this.getTranslation("title.exit-fullscreen")},r("limel-icon",{name:"multiply",size:"small"})),r("a",{class:"button--enter-fullscreen",role:"button",onClick:this.fullscreen.toggle,title:this.getTranslation("title.open-in-fullscreen")},r("limel-icon",{name:"fit_to_width",size:"small"}))]}renderActionMenu(){if(this.actions)return r("limel-menu",{class:"action-menu",items:this.actions,onSelect:this.emitOnAction,"open-direction":"left"},r("a",{title:"More...",class:"button--action",slot:"trigger"},r("limel-icon",{name:"menu_2",size:"small"})))}getTranslation(e){return s.get(`file-viewer.${e}`,this.language)}get HostElement(){return o(this)}};a.style=':host{--mdc-theme-primary:var(\n      --lime-primary-color,\n      rgb(var(--color-teal-default))\n  );--mdc-theme-secondary:var(\n      --lime-secondary-color,\n      rgb(var(--contrast-1100))\n  );--mdc-theme-on-primary:var(\n      --lime-on-primary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-on-secondary:var(\n      --lime-on-secondary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-text-disabled-on-background:var(\n      --lime-text-disabled-on-background-color,\n      rgba(var(--contrast-1700), 0.38)\n  );--mdc-theme-text-primary-on-background:var(\n      --lime-text-primary-on-background-color,\n      rgba(var(--contrast-1700), 0.87)\n  );--mdc-theme-text-secondary-on-background:var(\n      --lime-text-secondary-on-background-color,\n      rgba(var(--contrast-1700), 0.54)\n  );--lime-error-text-color:rgb(var(--color-red-darker));--mdc-theme-surface:var(\n      --lime-surface-background-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-on-surface:var(\n      --lime-on-surface-color,\n      var(--lime-text-primary-on-background-color)\n  )}:host{position:relative;box-sizing:border-box;display:flex;align-items:center;justify-content:center;width:100%;height:100%}img,video,audio,object,iframe{max-height:100%;max-width:100%;box-sizing:border-box}iframe{border:none;width:100%;height:100%;min-height:18.75rem}img{min-width:6.25rem;object-fit:contain}video{width:100%;height:auto}audio{width:100%}object[type="application/pdf"]{width:100%;height:100%;min-height:18.75rem}object:not([type="application/pdf"]){border-radius:0.25rem;padding:0.75rem 2rem 0.75rem 0.75rem;width:100%;height:100%;overflow-y:auto;color:rgb(var(--contrast-1300));background-color:rgb(var(--contrast-200))}:host(:fullscreen){background-color:rgb(var(--color-gray-darker))}:host(:fullscreen) object[type="text/plain"]{max-width:50rem;max-height:calc(100% - 2rem)}:host(:-webkit-full-screen){background-color:rgb(var(--color-gray-darker))}:host(:-webkit-full-screen) object[type="text/plain"]{max-width:50rem;max-height:calc(100% - 2rem)}.buttons{position:absolute;z-index:1;top:0.25rem;right:0.25rem;display:grid;grid-auto-flow:row;grid-gap:0.5rem}.no-support{display:grid;justify-items:center;grid-gap:0.75rem;border:1px dashed rgb(var(--contrast-600));border-radius:0.5rem;padding:1.25rem}.no-support__info{display:grid;grid-auto-flow:column;grid-gap:0.5rem;align-items:center}a[class^=button--]{transition:background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease-out;box-shadow:var(--button-shadow-normal);cursor:pointer;display:flex;align-items:center;justify-content:center;border-radius:50%;width:2rem;height:2rem;background-color:rgba(var(--contrast-100), 0.85);backdrop-filter:blur(0.25rem)}a[class^=button--]:hover{box-shadow:var(--button-shadow-hovered)}a[class^=button--]:active{box-shadow:var(--button-shadow-pressed);transform:translate3d(0, 0.08rem, 0)}a[class^=button--] limel-icon{transition:color 0.2s ease;color:rgb(var(--contrast-1200))}a[class^=button--]:hover limel-icon{color:rgb(var(--contrast-1400))}.no-support .button--download{width:2.5rem;height:2.5rem}a.button--new-tab limel-icon{color:rgb(var(--color-blue-dark))}.icon--warning{color:rgb(var(--color-orange-default))}:host(:fullscreen) .buttons{top:0.75rem;right:0.75rem}:host(:fullscreen) .button--download,:host(:fullscreen) .button--new-tab,:host(:fullscreen) .button--enter-fullscreen{display:none}:host(:-webkit-full-screen) .buttons{top:0.75rem;right:0.75rem}:host(:-webkit-full-screen) .button--download,:host(:-webkit-full-screen) .button--new-tab,:host(:-webkit-full-screen) .button--enter-fullscreen{display:none}:host(:not(:-webkit-full-screen)) .button--exit-fullscreen{display:none}:host(:not(:fullscreen)) .button--exit-fullscreen{display:none}.action-menu-for-office-files{position:absolute;top:0.75rem;right:0.75rem}';export{a as limel_file_viewer}