(window.webpackJsonp=window.webpackJsonp||[]).push([[496,497],{551:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(554),l=n(560),c=n(22),s=n(563),i=n(2),u=n(555),p=n(557),m=n(580),d=n(581),y=n(582),h=n(579),b=n(561),f=n(564),g=n(122),v=n.n(g);const k=(e,t)=>"link"===e.type?((e,t)=>{const n=e=>e.endsWith("/")?e:e+"/";return n(e)===n(t)})(e.href,t):"category"===e.type&&e.items.some(e=>k(e,t));function j({item:e,onItemClick:t,collapsible:n,activePath:o,...l}){const{items:c,label:s}=e,p=k(e,o),m=function(e){const t=Object(a.useRef)(e);return Object(a.useEffect)(()=>{t.current=e},[e]),t.current}(p),[d,y]=Object(a.useState)(()=>!!n&&(!p&&e.collapsed));Object(a.useEffect)(()=>{p&&!m&&d&&y(!1)},[p,m,d]);const h=Object(a.useCallback)(e=>{e.preventDefault(),y(e=>!e)},[y]);return 0===c.length?null:r.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":d}),key:s},r.a.createElement("a",Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--sublist":n,"menu__link--active":n&&p,[v.a.menuLinkText]:!n}),onClick:n?h:void 0,href:n?"#!":void 0},l),s),r.a.createElement("ul",{className:"menu__list"},c.map(e=>r.a.createElement(E,{tabIndex:d?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:n,activePath:o}))))}function O({item:e,onItemClick:t,activePath:n,collapsible:a,...o}){const{href:l,label:c}=e,s=k(e,n);return r.a.createElement("li",{className:"menu__list-item",key:c},r.a.createElement(b.a,Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--active":s}),to:l},Object(f.a)(l)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},o),c))}function E(e){switch(e.item.type){case"category":return r.a.createElement(j,e);case"link":default:return r.a.createElement(O,e)}}var N=function({path:e,sidebar:t,sidebarCollapsible:n=!0}){const[o,c]=Object(a.useState)(!1),{siteConfig:{themeConfig:{navbar:{title:s="",hideOnScroll:f=!1}={}}={}}={},isClient:g}=Object(l.a)(),{logoLink:k,logoLinkProps:j,logoImageUrl:O,logoAlt:N}=Object(y.a)(),{isAnnouncementBarClosed:C}=Object(p.a)(),{scrollY:w}=Object(h.a)();Object(m.a)(o);const x=Object(d.a)();return Object(a.useEffect)(()=>{x===d.b.desktop&&c(!1)},[x]),r.a.createElement("div",{className:Object(u.a)(v.a.sidebar,{[v.a.sidebarWithHideableNavbar]:f})},f&&r.a.createElement(b.a,Object(i.a)({tabIndex:-1,className:v.a.sidebarLogo,to:k},j),null!=O&&r.a.createElement("img",{key:g,src:O,alt:N}),null!=s&&r.a.createElement("strong",null,s)),r.a.createElement("div",{className:Object(u.a)("menu","menu--responsive",v.a.menu,{"menu--show":o,[v.a.menuWithAnnouncementBar]:!C&&0===w})},r.a.createElement("button",{"aria-label":o?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{c(!o)}},o?r.a.createElement("span",{className:Object(u.a)(v.a.sidebarMenuIcon,v.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:v.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},t.map(t=>r.a.createElement(E,{key:t.label,item:t,onItemClick:e=>{e.target.blur(),c(!1)},collapsible:n,activePath:e})))))},C=n(575),w=n(577),x=n(566),P=n(123),_=n.n(P);function T({currentDocRoute:e,versionMetadata:t,children:n}){var a,c;const{siteConfig:i,isClient:u}=Object(l.a)(),{permalinkToSidebar:p,docsSidebars:m,version:d}=t,y=m[p[e.path]];return r.a.createElement(s.a,{version:d,key:u},r.a.createElement("div",{className:_.a.docPage},y&&r.a.createElement("div",{className:_.a.docSidebarContainer,role:"complementary"},r.a.createElement(N,{sidebar:y,path:e.path,sidebarCollapsible:null===(a=null===(c=i.themeConfig)||void 0===c?void 0:c.sidebarCollapsible)||void 0===a||a})),r.a.createElement("main",{className:_.a.docMainContainer},r.a.createElement(o.a,{components:C.a},n))))}t.default=function(e){const{route:{routes:t},versionMetadata:n,location:a}=e,o=t.find(e=>Object(x.matchPath)(a.pathname,e));return o?r.a.createElement(T,{currentDocRoute:o,versionMetadata:n},Object(c.a)(t)):r.a.createElement(w.default,e)}},554:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,y=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?r.a.createElement(y,c(c({ref:t},i),{},{components:n})):r.a.createElement(y,c({ref:t},i))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},569:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch(c){}return n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus(),l};e.exports=a,e.exports.default=a},570:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],a=t[2],r=t[3];if(n&&r){var o=[],l=(n=parseInt(n))<(r=parseInt(r))?1:-1;"-"!=a&&".."!=a&&"\u2025"!=a||(r+=l);for(var c=n;c!=r;c+=l)o.push(c);return o}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},575:function(e,t,n){"use strict";var a=n(2),r=n(0),o=n.n(r),l=n(561),c=n(555),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:n(20).a,theme:s};function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var m=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},y=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=p({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=p({},n,{backgroundColor:null}),r};function b(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var f=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),u(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?h(e.theme,e.language):void 0;return t.themeDict=n})),u(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=p({},b(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?p({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),u(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var l=a?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),u(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,l=p({},b(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?p({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,l=0,c=[],s=[c];l>-1;){for(;(o=a[l]++)<r[l];){var i=void 0,u=t[l],p=n[l][o];if("string"==typeof p?(u=l>0?u:["plain"],i=p):(u=y(u,p.type),p.alias&&(u=y(u,p.alias)),i=p.content),"string"==typeof i){var h=i.split(m),b=h.length;c.push({types:u,content:h[0]});for(var f=1;f<b;f++)d(c),s.push(c=[]),c.push({types:u,content:h[f]})}else l++,t.push(u),n.push(i),a.push(0),r.push(i.length)}l--,t.pop(),n.pop(),a.pop(),r.pop()}return d(c),s}(void 0!==l?t.tokenize(a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),g=n(569),v=n.n(g),k=n(570),j=n.n(k),O=n(560),E={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},N=n(565);var C=()=>{const{siteConfig:{themeConfig:{prism:e={}}}}=Object(O.a)(),{isDarkTheme:t}=Object(N.a)(),n=e.theme||E,a=e.darkTheme||n;return t?a:n},w=n(49),x=n.n(w);const P=/{([\d,-]+)}/,_=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map(e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`).join("|");return new RegExp(`^\\s*(?:${a})\\s*$`)},T=/title=".*"/;var S=({children:e,className:t,metastring:n})=>{const{siteConfig:{themeConfig:{prism:l={}}}}=Object(O.a)(),[s,u]=Object(r.useState)(!1),[p,m]=Object(r.useState)(!1);Object(r.useEffect)(()=>{m(!0)},[]);const d=Object(r.useRef)(null);let y=[],h="";const b=C();if(n&&P.test(n)){const e=n.match(P)[1];y=j.a.parse(e).filter(e=>e>0)}n&&T.test(n)&&(h=n.match(T)[0].split("title=")[1].replace(/"+/g,""));let g=t&&t.replace(/language-/,"");!g&&l.defaultLanguage&&(g=l.defaultLanguage);let k=e.replace(/\n$/,"");if(0===y.length&&void 0!==g){let t="";const n=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return _(["js","jsBlock"]);case"jsx":case"tsx":return _(["js","jsBlock","jsx"]);case"html":return _(["js","jsBlock","html"]);case"python":case"py":return _(["python"]);default:return _()}})(g),a=e.replace(/\n$/,"").split("\n");let r;for(let e=0;e<a.length;){const o=e+1,l=a[e].match(n);if(null!==l){switch(l.slice(1).reduce((e,t)=>e||t,void 0)){case"highlight-next-line":t+=o+",";break;case"highlight-start":r=o;break;case"highlight-end":t+=`${r}-${o-1},`}a.splice(e,1)}else e+=1}y=j.a.parse(t),k=a.join("\n")}const E=()=>{v()(k),u(!0),setTimeout(()=>u(!1),2e3)};return o.a.createElement(f,Object(a.a)({},i,{key:String(p),theme:b,code:k,language:g}),({className:e,style:t,tokens:n,getLineProps:r,getTokenProps:l})=>o.a.createElement(o.a.Fragment,null,h&&o.a.createElement("div",{style:t,className:x.a.codeBlockTitle},h),o.a.createElement("div",{className:x.a.codeBlockContent},o.a.createElement("button",{ref:d,type:"button","aria-label":"Copy code to clipboard",className:Object(c.a)(x.a.copyButton,{[x.a.copyButtonWithTitle]:h}),onClick:E},s?"Copied":"Copy"),o.a.createElement("div",{tabIndex:0,className:Object(c.a)(e,x.a.codeBlock,{[x.a.codeBlockWithTitle]:h})},o.a.createElement("div",{className:x.a.codeBlockLines,style:t},n.map((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=r({line:e,key:t});return y.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(a.a)({key:t},n),e.map((e,t)=>o.a.createElement("span",Object(a.a)({key:t},l({token:e,key:t})))))}))))))},D=(n(50),n(51)),L=n.n(D);var I=e=>function({id:t,...n}){const{siteConfig:{themeConfig:{navbar:{hideOnScroll:a=!1}={}}={}}={}}=Object(O.a)();return t?o.a.createElement(e,n,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(c.a)("anchor",{[L.a.enhancedAnchor]:!a}),id:t}),n.children,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:"hash-link",href:"#"+t,title:"Direct link to heading"},"#")):o.a.createElement(e,n)},B=n(52),M=n.n(B);const A={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?o.a.createElement(S,e):o.a.createElement("code",e):t},a:e=>o.a.createElement(l.a,e),pre:e=>o.a.createElement("div",Object(a.a)({className:M.a.mdxCodeBlock},e)),h1:I("h1"),h2:I("h2"),h3:I("h3"),h4:I("h4"),h5:I("h5"),h6:I("h6")};t.a=A},577:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(563);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);