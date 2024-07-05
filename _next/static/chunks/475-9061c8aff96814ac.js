"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[475],{4839:function(e,t,r){r.d(t,{W:function(){return o}});function o(){for(var e,t,r=0,o="",n=arguments.length;r<n;r++)(e=arguments[r])&&(t=function e(t){var r,o,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t){if(Array.isArray(t)){var l=t.length;for(r=0;r<l;r++)t[r]&&(o=e(t[r]))&&(n&&(n+=" "),n+=o)}else for(o in t)t[o]&&(n&&(n+=" "),n+=o)}return n}(e))&&(o&&(o+=" "),o+=t);return o}},9512:function(e,t,r){r.d(t,{F:function(){return c},f:function(){return d}});var o=r(2265),n=["light","dark"],l="(prefers-color-scheme: dark)",a="undefined"==typeof window,s=o.createContext(void 0),i={setTheme:e=>{},themes:[]},c=()=>{var e;return null!=(e=o.useContext(s))?e:i},d=e=>o.useContext(s)?e.children:o.createElement(p,{...e}),u=["light","dark"],p=e=>{let{forcedTheme:t,disableTransitionOnChange:r=!1,enableSystem:a=!0,enableColorScheme:i=!0,storageKey:c="theme",themes:d=u,defaultTheme:p=a?"system":"light",attribute:h="data-theme",value:y,children:v,nonce:w}=e,[x,k]=o.useState(()=>b(c,p)),[z,C]=o.useState(()=>b(c)),S=y?Object.values(y):d,j=o.useCallback(e=>{let t=e;if(!t)return;"system"===e&&a&&(t=g());let o=y?y[t]:t,l=r?f():null,s=document.documentElement;if("class"===h?(s.classList.remove(...S),o&&s.classList.add(o)):o?s.setAttribute(h,o):s.removeAttribute(h),i){let e=n.includes(p)?p:null,r=n.includes(t)?t:e;s.style.colorScheme=r}null==l||l()},[]),E=o.useCallback(e=>{let t="function"==typeof e?e(e):e;k(t);try{localStorage.setItem(c,t)}catch(e){}},[t]),T=o.useCallback(e=>{C(g(e)),"system"===x&&a&&!t&&j("system")},[x,t]);o.useEffect(()=>{let e=window.matchMedia(l);return e.addListener(T),T(e),()=>e.removeListener(T)},[T]),o.useEffect(()=>{let e=e=>{e.key===c&&E(e.newValue||p)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[E]),o.useEffect(()=>{j(null!=t?t:x)},[t,x]);let M=o.useMemo(()=>({theme:x,setTheme:E,forcedTheme:t,resolvedTheme:"system"===x?z:x,themes:a?[...d,"system"]:d,systemTheme:a?z:void 0}),[x,E,t,z,a,d]);return o.createElement(s.Provider,{value:M},o.createElement(m,{forcedTheme:t,disableTransitionOnChange:r,enableSystem:a,enableColorScheme:i,storageKey:c,themes:d,defaultTheme:p,attribute:h,value:y,children:v,attrs:S,nonce:w}),v)},m=o.memo(e=>{let{forcedTheme:t,storageKey:r,attribute:a,enableSystem:s,enableColorScheme:i,defaultTheme:c,value:d,attrs:u,nonce:p}=e,m="system"===c,b="class"===a?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(u.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(a,"',s='setAttribute';"),f=i?(n.includes(c)?c:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(c,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",g=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=!(arguments.length>2)||void 0===arguments[2]||arguments[2],o=d?d[e]:e,l=t?e+"|| ''":"'".concat(o,"'"),s="";return i&&r&&!t&&n.includes(e)&&(s+="d.style.colorScheme = '".concat(e,"';")),"class"===a?t||o?s+="c.add(".concat(l,")"):s+="null":o&&(s+="d[s](n,".concat(l,")")),s},h=t?"!function(){".concat(b).concat(g(t),"}()"):s?"!function(){try{".concat(b,"var e=localStorage.getItem('").concat(r,"');if('system'===e||(!e&&").concat(m,")){var t='").concat(l,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(g("dark"),"}else{").concat(g("light"),"}}else if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(g(d?"x[e]":"e",!0),"}").concat(m?"":"else{"+g(c,!1,!1)+"}").concat(f,"}catch(e){}}()"):"!function(){try{".concat(b,"var e=localStorage.getItem('").concat(r,"');if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(g(d?"x[e]":"e",!0),"}else{").concat(g(c,!1,!1),";}").concat(f,"}catch(t){}}();");return o.createElement("script",{nonce:p,dangerouslySetInnerHTML:{__html:h}})}),b=(e,t)=>{let r;if(!a){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},f=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},g=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light")},6164:function(e,t,r){r.d(t,{m6:function(){return _}});let o=/^\[(.+)\]$/;function n(e,t){let r=e;return t.split("-").forEach(e=>{r.nextPart.has(e)||r.nextPart.set(e,{nextPart:new Map,validators:[]}),r=r.nextPart.get(e)}),r}let l=/\s+/;function a(){let e,t,r=0,o="";for(;r<arguments.length;)(e=arguments[r++])&&(t=function e(t){let r;if("string"==typeof t)return t;let o="";for(let n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);return o}(e))&&(o&&(o+=" "),o+=t);return o}function s(e){let t=t=>t[e]||[];return t.isThemeGetter=!0,t}let i=/^\[(?:([a-z-]+):)?(.+)\]$/i,c=/^\d+\/\d+$/,d=new Set(["px","full","screen"]),u=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,p=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,m=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,b=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,f=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function g(e){return y(e)||d.has(e)||c.test(e)}function h(e){return N(e,"length",G)}function y(e){return!!e&&!Number.isNaN(Number(e))}function v(e){return N(e,"number",y)}function w(e){return!!e&&Number.isInteger(Number(e))}function x(e){return e.endsWith("%")&&y(e.slice(0,-1))}function k(e){return i.test(e)}function z(e){return u.test(e)}let C=new Set(["length","size","percentage"]);function S(e){return N(e,C,P)}function j(e){return N(e,"position",P)}let E=new Set(["image","url"]);function T(e){return N(e,E,L)}function M(e){return N(e,"",O)}function I(){return!0}function N(e,t,r){let o=i.exec(e);return!!o&&(o[1]?"string"==typeof t?o[1]===t:t.has(o[1]):r(o[2]))}function G(e){return p.test(e)&&!m.test(e)}function P(){return!1}function O(e){return b.test(e)}function L(e){return f.test(e)}let _=function(e,...t){let r,s,i;let c=function(l){var a;return s=(r={cache:function(e){if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,r=new Map,o=new Map;function n(n,l){r.set(n,l),++t>e&&(t=0,o=r,r=new Map)}return{get(e){let t=r.get(e);return void 0!==t?t:void 0!==(t=o.get(e))?(n(e,t),t):void 0},set(e,t){r.has(e)?r.set(e,t):n(e,t)}}}((a=t.reduce((e,t)=>t(e),e())).cacheSize),splitModifiers:function(e){let t=e.separator,r=1===t.length,o=t[0],n=t.length;return function(e){let l;let a=[],s=0,i=0;for(let c=0;c<e.length;c++){let d=e[c];if(0===s){if(d===o&&(r||e.slice(c,c+n)===t)){a.push(e.slice(i,c)),i=c+n;continue}if("/"===d){l=c;continue}}"["===d?s++:"]"===d&&s--}let c=0===a.length?e:e.substring(i),d=c.startsWith("!"),u=d?c.substring(1):c;return{modifiers:a,hasImportantModifier:d,baseClassName:u,maybePostfixModifierPosition:l&&l>i?l-i:void 0}}}(a),...function(e){let t=function(e){var t;let{theme:r,prefix:o}=e,l={nextPart:new Map,validators:[]};return(t=Object.entries(e.classGroups),o?t.map(([e,t])=>[e,t.map(e=>"string"==typeof e?o+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,t])=>[o+e,t])):e)]):t).forEach(([e,t])=>{(function e(t,r,o,l){t.forEach(t=>{if("string"==typeof t){(""===t?r:n(r,t)).classGroupId=o;return}if("function"==typeof t){if(t.isThemeGetter){e(t(l),r,o,l);return}r.validators.push({validator:t,classGroupId:o});return}Object.entries(t).forEach(([t,a])=>{e(a,n(r,t),o,l)})})})(t,l,e,r)}),l}(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:l}=e;return{getClassGroupId:function(e){let r=e.split("-");return""===r[0]&&1!==r.length&&r.shift(),function e(t,r){if(0===t.length)return r.classGroupId;let o=t[0],n=r.nextPart.get(o),l=n?e(t.slice(1),n):void 0;if(l)return l;if(0===r.validators.length)return;let a=t.join("-");return r.validators.find(({validator:e})=>e(a))?.classGroupId}(r,t)||function(e){if(o.test(e)){let t=o.exec(e)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}}(e)},getConflictingClassGroupIds:function(e,t){let o=r[e]||[];return t&&l[e]?[...o,...l[e]]:o}}}(a)}).cache.get,i=r.cache.set,c=d,d(l)};function d(e){let t=s(e);if(t)return t;let o=function(e,t){let{splitModifiers:r,getClassGroupId:o,getConflictingClassGroupIds:n}=t,a=new Set;return e.trim().split(l).map(e=>{let{modifiers:t,hasImportantModifier:n,baseClassName:l,maybePostfixModifierPosition:a}=r(e),s=o(a?l.substring(0,a):l),i=!!a;if(!s){if(!a||!(s=o(l)))return{isTailwindClass:!1,originalClassName:e};i=!1}let c=(function(e){if(e.length<=1)return e;let t=[],r=[];return e.forEach(e=>{"["===e[0]?(t.push(...r.sort(),e),r=[]):r.push(e)}),t.push(...r.sort()),t})(t).join(":");return{isTailwindClass:!0,modifierId:n?c+"!":c,classGroupId:s,originalClassName:e,hasPostfixModifier:i}}).reverse().filter(e=>{if(!e.isTailwindClass)return!0;let{modifierId:t,classGroupId:r,hasPostfixModifier:o}=e,l=t+r;return!a.has(l)&&(a.add(l),n(r,o).forEach(e=>a.add(t+e)),!0)}).reverse().map(e=>e.originalClassName).join(" ")}(e,r);return i(e,o),o}return function(){return c(a.apply(null,arguments))}}(function(){let e=s("colors"),t=s("spacing"),r=s("blur"),o=s("brightness"),n=s("borderColor"),l=s("borderRadius"),a=s("borderSpacing"),i=s("borderWidth"),c=s("contrast"),d=s("grayscale"),u=s("hueRotate"),p=s("invert"),m=s("gap"),b=s("gradientColorStops"),f=s("gradientColorStopPositions"),C=s("inset"),E=s("margin"),N=s("opacity"),G=s("padding"),P=s("saturate"),O=s("scale"),L=s("sepia"),_=s("skew"),$=s("space"),A=s("translate"),W=()=>["auto","contain","none"],R=()=>["auto","hidden","clip","visible","scroll"],K=()=>["auto",k,t],q=()=>[k,t],J=()=>["",g,h],F=()=>["auto",y,k],H=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],V=()=>["solid","dashed","dotted","double","none"],B=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],D=()=>["start","end","center","between","around","evenly","stretch"],Q=()=>["","0",k],U=()=>["auto","avoid","all","avoid-page","page","left","right","column"],X=()=>[y,v],Y=()=>[y,k];return{cacheSize:500,separator:":",theme:{colors:[I],spacing:[g,h],blur:["none","",z,k],brightness:X(),borderColor:[e],borderRadius:["none","","full",z,k],borderSpacing:q(),borderWidth:J(),contrast:X(),grayscale:Q(),hueRotate:Y(),invert:Q(),gap:q(),gradientColorStops:[e],gradientColorStopPositions:[x,h],inset:K(),margin:K(),opacity:X(),padding:q(),saturate:X(),scale:X(),sepia:Q(),skew:Y(),space:q(),translate:q()},classGroups:{aspect:[{aspect:["auto","square","video",k]}],container:["container"],columns:[{columns:[z]}],"break-after":[{"break-after":U()}],"break-before":[{"break-before":U()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...H(),k]}],overflow:[{overflow:R()}],"overflow-x":[{"overflow-x":R()}],"overflow-y":[{"overflow-y":R()}],overscroll:[{overscroll:W()}],"overscroll-x":[{"overscroll-x":W()}],"overscroll-y":[{"overscroll-y":W()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[C]}],"inset-x":[{"inset-x":[C]}],"inset-y":[{"inset-y":[C]}],start:[{start:[C]}],end:[{end:[C]}],top:[{top:[C]}],right:[{right:[C]}],bottom:[{bottom:[C]}],left:[{left:[C]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",w,k]}],basis:[{basis:K()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",k]}],grow:[{grow:Q()}],shrink:[{shrink:Q()}],order:[{order:["first","last","none",w,k]}],"grid-cols":[{"grid-cols":[I]}],"col-start-end":[{col:["auto",{span:["full",w,k]},k]}],"col-start":[{"col-start":F()}],"col-end":[{"col-end":F()}],"grid-rows":[{"grid-rows":[I]}],"row-start-end":[{row:["auto",{span:[w,k]},k]}],"row-start":[{"row-start":F()}],"row-end":[{"row-end":F()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",k]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",k]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal",...D()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...D(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...D(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[G]}],px:[{px:[G]}],py:[{py:[G]}],ps:[{ps:[G]}],pe:[{pe:[G]}],pt:[{pt:[G]}],pr:[{pr:[G]}],pb:[{pb:[G]}],pl:[{pl:[G]}],m:[{m:[E]}],mx:[{mx:[E]}],my:[{my:[E]}],ms:[{ms:[E]}],me:[{me:[E]}],mt:[{mt:[E]}],mr:[{mr:[E]}],mb:[{mb:[E]}],ml:[{ml:[E]}],"space-x":[{"space-x":[$]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[$]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",k,t]}],"min-w":[{"min-w":[k,t,"min","max","fit"]}],"max-w":[{"max-w":[k,t,"none","full","min","max","fit","prose",{screen:[z]},z]}],h:[{h:[k,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[k,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[k,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[k,t,"auto","min","max","fit"]}],"font-size":[{text:["base",z,h]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",v]}],"font-family":[{font:[I]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",k]}],"line-clamp":[{"line-clamp":["none",y,v]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",g,k]}],"list-image":[{"list-image":["none",k]}],"list-style-type":[{list:["none","disc","decimal",k]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[N]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[N]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...V(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",g,h]}],"underline-offset":[{"underline-offset":["auto",g,k]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:q()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",k]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",k]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[N]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...H(),j]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",S]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},T]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[f]}],"gradient-via-pos":[{via:[f]}],"gradient-to-pos":[{to:[f]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[N]}],"border-style":[{border:[...V(),"hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[N]}],"divide-style":[{divide:V()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...V()]}],"outline-offset":[{"outline-offset":[g,k]}],"outline-w":[{outline:[g,h]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:J()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[N]}],"ring-offset-w":[{"ring-offset":[g,h]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",z,M]}],"shadow-color":[{shadow:[I]}],opacity:[{opacity:[N]}],"mix-blend":[{"mix-blend":[...B(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":B()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[o]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",z,k]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[p]}],saturate:[{saturate:[P]}],sepia:[{sepia:[L]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[N]}],"backdrop-saturate":[{"backdrop-saturate":[P]}],"backdrop-sepia":[{"backdrop-sepia":[L]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",k]}],duration:[{duration:Y()}],ease:[{ease:["linear","in","out","in-out",k]}],delay:[{delay:Y()}],animate:[{animate:["none","spin","ping","pulse","bounce",k]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[O]}],"scale-x":[{"scale-x":[O]}],"scale-y":[{"scale-y":[O]}],rotate:[{rotate:[w,k]}],"translate-x":[{"translate-x":[A]}],"translate-y":[{"translate-y":[A]}],"skew-x":[{"skew-x":[_]}],"skew-y":[{"skew-y":[_]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",k]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",k]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":q()}],"scroll-mx":[{"scroll-mx":q()}],"scroll-my":[{"scroll-my":q()}],"scroll-ms":[{"scroll-ms":q()}],"scroll-me":[{"scroll-me":q()}],"scroll-mt":[{"scroll-mt":q()}],"scroll-mr":[{"scroll-mr":q()}],"scroll-mb":[{"scroll-mb":q()}],"scroll-ml":[{"scroll-ml":q()}],"scroll-p":[{"scroll-p":q()}],"scroll-px":[{"scroll-px":q()}],"scroll-py":[{"scroll-py":q()}],"scroll-ps":[{"scroll-ps":q()}],"scroll-pe":[{"scroll-pe":q()}],"scroll-pt":[{"scroll-pt":q()}],"scroll-pr":[{"scroll-pr":q()}],"scroll-pb":[{"scroll-pb":q()}],"scroll-pl":[{"scroll-pl":q()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",k]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[g,h,v]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);