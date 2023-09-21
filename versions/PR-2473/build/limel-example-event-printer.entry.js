import{r,h as e}from"./index-f1b3d5fb.js";import{c as t,a as n}from"./_commonjsHelpers-5ec8f9b7.js";var s=t((function(r,e){!function(e,t){r.exports=t()}(n,(function(){var r=1e3,e=6e4,t=36e5,n="millisecond",s="second",i="minute",a="hour",u="day",o="week",c="month",h="quarter",d="year",l="date",m="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,b={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var e=["th","st","nd","rd"],t=r%100;return"["+r+(e[(t-20)%10]||e[t]||e[0])+"]"}},p=function(r,e,t){var n=String(r);return!n||n.length>=e?r:""+Array(e+1-n.length).join(t)+r},y={s:p,z:function(r){var e=-r.utcOffset(),t=Math.abs(e),n=Math.floor(t/60),s=t%60;return(e<=0?"+":"-")+p(n,2,"0")+":"+p(s,2,"0")},m:function r(e,t){if(e.date()<t.date())return-r(t,e);var n=12*(t.year()-e.year())+(t.month()-e.month()),s=e.clone().add(n,c),i=t-s<0,a=e.clone().add(n+(i?-1:1),c);return+(-(n+(t-s)/(i?s-a:a-s))||0)},a:function(r){return r<0?Math.ceil(r)||0:Math.floor(r)},p:function(r){return{M:c,y:d,w:o,d:u,D:l,h:a,m:i,s,ms:n,Q:h}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(r){return void 0===r}},g="en",k={};k[g]=b;var w="$isDayjsObject",M=function(r){return r instanceof Y||!(!r||!r[w])},D=function r(e,t,n){var s;if(!e)return g;if("string"==typeof e){var i=e.toLowerCase();k[i]&&(s=i),t&&(k[i]=t,s=i);var a=e.split("-");if(!s&&a.length>1)return r(a[0])}else{var u=e.name;k[u]=e,s=u}return!n&&s&&(g=s),s||!n&&g},S=function(r,e){if(M(r))return r.clone();var t="object"==typeof e?e:{};return t.date=r,t.args=arguments,new Y(t)},_=y;_.l=D,_.i=M,_.w=function(r,e){return S(r,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var Y=function(){function b(r){this.$L=D(r.locale,null,!0),this.parse(r),this.$x=this.$x||r.x||{},this[w]=!0}var p=b.prototype;return p.parse=function(r){this.$d=function(r){var e=r.date,t=r.utc;if(null===e)return new Date(NaN);if(_.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(f);if(n){var s=n[2]-1||0,i=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(e)}(r),this.init()},p.init=function(){var r=this.$d;this.$y=r.getFullYear(),this.$M=r.getMonth(),this.$D=r.getDate(),this.$W=r.getDay(),this.$H=r.getHours(),this.$m=r.getMinutes(),this.$s=r.getSeconds(),this.$ms=r.getMilliseconds()},p.$utils=function(){return _},p.isValid=function(){return!(this.$d.toString()===m)},p.isSame=function(r,e){var t=S(r);return this.startOf(e)<=t&&t<=this.endOf(e)},p.isAfter=function(r,e){return S(r)<this.startOf(e)},p.isBefore=function(r,e){return this.endOf(e)<S(r)},p.$g=function(r,e,t){return _.u(r)?this[e]:this.set(t,r)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(r,e){var t=this,n=!!_.u(e)||e,h=_.p(r),m=function(r,e){var s=_.w(t.$u?Date.UTC(t.$y,e,r):new Date(t.$y,e,r),t);return n?s:s.endOf(u)},f=function(r,e){return _.w(t.toDate()[r].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),t)},v=this.$W,b=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(h){case d:return n?m(1,0):m(31,11);case c:return n?m(1,b):m(0,b+1);case o:var g=this.$locale().weekStart||0,k=(v<g?v+7:v)-g;return m(n?p-k:p+(6-k),b);case u:case l:return f(y+"Hours",0);case a:return f(y+"Minutes",1);case i:return f(y+"Seconds",2);case s:return f(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(r){return this.startOf(r,!1)},p.$set=function(r,e){var t,o=_.p(r),h="set"+(this.$u?"UTC":""),m=(t={},t[u]=h+"Date",t[l]=h+"Date",t[c]=h+"Month",t[d]=h+"FullYear",t[a]=h+"Hours",t[i]=h+"Minutes",t[s]=h+"Seconds",t[n]=h+"Milliseconds",t)[o],f=o===u?this.$D+(e-this.$W):e;if(o===c||o===d){var v=this.clone().set(l,1);v.$d[m](f),v.init(),this.$d=v.set(l,Math.min(this.$D,v.daysInMonth())).$d}else m&&this.$d[m](f);return this.init(),this},p.set=function(r,e){return this.clone().$set(r,e)},p.get=function(r){return this[_.p(r)]()},p.add=function(n,h){var l,m=this;n=Number(n);var f=_.p(h),v=function(r){var e=S(m);return _.w(e.date(e.date()+Math.round(r*n)),m)};if(f===c)return this.set(c,this.$M+n);if(f===d)return this.set(d,this.$y+n);if(f===u)return v(1);if(f===o)return v(7);var b=(l={},l[i]=e,l[a]=t,l[s]=r,l)[f]||1,p=this.$d.getTime()+n*b;return _.w(p,this)},p.subtract=function(r,e){return this.add(-1*r,e)},p.format=function(r){var e=this,t=this.$locale();if(!this.isValid())return t.invalidDate||m;var n=r||"YYYY-MM-DDTHH:mm:ssZ",s=_.z(this),i=this.$H,a=this.$m,u=this.$M,o=t.weekdays,c=t.months,h=t.meridiem,d=function(r,t,s,i){return r&&(r[t]||r(e,n))||s[t].slice(0,i)},l=function(r){return _.s(i%12||12,r,"0")},f=h||function(r,e,t){var n=r<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(v,(function(r,n){return n||function(r){switch(r){case"YY":return String(e.$y).slice(-2);case"YYYY":return _.s(e.$y,4,"0");case"M":return u+1;case"MM":return _.s(u+1,2,"0");case"MMM":return d(t.monthsShort,u,c,3);case"MMMM":return d(c,u);case"D":return e.$D;case"DD":return _.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(t.weekdaysMin,e.$W,o,2);case"ddd":return d(t.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(i);case"HH":return _.s(i,2,"0");case"h":return l(1);case"hh":return l(2);case"a":return f(i,a,!0);case"A":return f(i,a,!1);case"m":return String(a);case"mm":return _.s(a,2,"0");case"s":return String(e.$s);case"ss":return _.s(e.$s,2,"0");case"SSS":return _.s(e.$ms,3,"0");case"Z":return s}return null}(r)||s.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(n,l,m){var f,v=this,b=_.p(l),p=S(n),y=(p.utcOffset()-this.utcOffset())*e,g=this-p,k=function(){return _.m(v,p)};switch(b){case d:f=k()/12;break;case c:f=k();break;case h:f=k()/3;break;case o:f=(g-y)/6048e5;break;case u:f=(g-y)/864e5;break;case a:f=g/t;break;case i:f=g/e;break;case s:f=g/r;break;default:f=g}return m?f:_.a(f)},p.daysInMonth=function(){return this.endOf(c).$D},p.$locale=function(){return k[this.$L]},p.locale=function(r,e){if(!r)return this.$L;var t=this.clone(),n=D(r,e,!0);return n&&(t.$L=n),t},p.clone=function(){return _.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},b}(),$=Y.prototype;return S.prototype=$,[["$ms",n],["$s",s],["$m",i],["$H",a],["$W",u],["$M",c],["$y",d],["$D",l]].forEach((function(r){$[r[1]]=function(e){return this.$g(e,r[0],r[1])}})),S.extend=function(r,e){return r.$i||(r(e,Y,S),r.$i=!0),S},S.locale=D,S.isDayjs=M,S.unix=function(r){return S(1e3*r)},S.en=k[g],S.Ls=k,S.p={},S}))}));const i='@charset "UTF-8";code{font-family:"Source Code Pro", monospace;font-size:0.75rem;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;display:inline-block;border-radius:0.1875rem;padding:0.0625rem 0.3125rem;color:rgb(var(--kompendium-contrast-1300));background-color:rgb(var(--kompendium-contrast-600))}pre>code{display:block;border-radius:0.5rem;margin:0.5rem 0;padding:1rem;overflow:auto;white-space:pre-wrap;color:rgb(var(--kompendium-contrast-800));background-color:rgb(var(--kompendium-contrast-1600))}:host(limel-example-event-printer){isolation:isolate;max-height:20rem;overflow-y:auto;padding-bottom:0.25rem}details{font-size:0.875rem}summary{transition:color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease-out;cursor:pointer;color:var(--mdc-theme-on-surface);background-color:transparent;border-radius:0.25rem;padding:0.25rem 0.5rem;margin:0 0.25rem;position:sticky;top:0;background-color:rgb(var(--kompendium-contrast-100))}summary:hover{color:var(--mdc-theme-on-surface);background-color:var(--lime-elevated-surface-background-color);box-shadow:var(--button-shadow-hovered)}summary:active{box-shadow:var(--button-shadow-pressed);transform:translate3d(0, 0.08rem, 0)}details[open] summary{z-index:1;background-color:var(--lime-elevated-surface-background-color);box-shadow:var(--button-shadow-pressed);border-bottom-left-radius:0;border-bottom-right-radius:0}summary:hover{z-index:1}summary:focus{outline:none}summary:focus-visible{z-index:1;outline:none;box-shadow:var(--kompendium-shadow-depth-8-focused)}summary::marker{content:"+";display:block;width:1.5rem;font-weight:bold;font-size:1rem;color:rgb(var(--kompendium-color-primary))}details[open] summary::marker{content:"–";color:rgb(var(--kompendium-color-red-default))}pre{margin:0 0.25rem 0.25rem 0.25rem}pre>code{margin-top:0;border-top-left-radius:0;border-top-right-radius:0}';const a=class{constructor(e){r(this,e);this.caughtEvents=[];this.formatEvent=this.formatEvent.bind(this);this.pushEvent=this.pushEvent.bind(this)}async writeEvent(r){console.log(r);this.pushEvent(r)}render(){return[e("header",null,"Caught events:"),this.caughtEvents.map(this.formatEvent)]}formatEvent({timestamp:r,event:t}){return e("details",null,e("summary",null,`${r} ${t.toString().replace(/\[object (.*)\]/,"$1")}: `,"type=",e("code",null,t.type)," detail=",e("code",null,`${t.detail}`)),e("pre",null,e("code",null,u(t))))}pushEvent(r){this.caughtEvents=[{timestamp:s().format("HH:mm:ss.SSS"),event:r},...this.caughtEvents]}};function u(r){if(!r){return}const e={eventName:r.toString(),altKey:r.altKey,bubbles:r.bubbles,button:r.button,buttons:r.buttons,cancelBubble:r.cancelBubble,cancelable:r.cancelable,clientX:r.clientX,clientY:r.clientY,composed:r.composed,ctrlKey:r.ctrlKey,currentTarget:r.currentTarget?r.currentTarget.outerHTML:null,defaultPrevented:r.defaultPrevented,detail:r.detail,eventPhase:r.eventPhase,fromElement:r.fromElement?r.fromElement.outerHTML:null,isTrusted:r.isTrusted,layerX:r.layerX,layerY:r.layerY,metaKey:r.metaKey,movementX:r.movementX,movementY:r.movementY,offsetX:r.offsetX,offsetY:r.offsetY,pageX:r.pageX,pageY:r.pageY,path:r.path&&r.path.length?r.path.map((r=>r.localName)):null,relatedTarget:r.relatedTarget?r.relatedTarget.outerHTML:null,returnValue:r.returnValue,screenX:r.screenX,screenY:r.screenY,shiftKey:r.shiftKey,sourceCapabilities:null,target:r.target?r.target.outerHTML:null,timeStamp:r.timeStamp,toElement:r.toElement?r.toElement.outerHTML:null,type:r.type,view:r.view?r.view.toString():null,which:r.which,x:r.x,y:r.y};if(r.sourceCapabilities){e.sourceCapabilities=r.sourceCapabilities.toString()}return JSON.stringify(e,null,2)}a.style=i;export{a as limel_example_event_printer};
//# sourceMappingURL=limel-example-event-printer.entry.js.map