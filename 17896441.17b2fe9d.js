(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{544:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(562),c=a(554),i=a(556),o=a(555);var s=function(e){const{metadata:t}=e;return l.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(o.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(o.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),l.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},m=a(561);var d=function(){const{siteConfig:{title:e}}=Object(c.a)(),t=(()=>{const e=Object(m.useActivePlugin)();if(!e)throw new Error("DocVersionCallout is only supposed to be used on docs-related routes");return e.pluginId})(),a=Object(m.useActiveVersion)(t),{latestDocSuggestion:n,latestVersionSuggestion:r}=Object(m.useDocVersionSuggestions)(t);if(!r)return l.a.createElement(l.a.Fragment,null);const i=null!=n?n:(s=r).docs.find(e=>e.id===s.mainDocId);var s;return l.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},"current"===a.name?l.a.createElement("div",null,"This is unreleased documentation for ",e," ",l.a.createElement("strong",null,a.label)," version."):l.a.createElement("div",null,"This is documentation for ",e," ",l.a.createElement("strong",null,a.label),", which is no longer actively maintained."),l.a.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the"," ",l.a.createElement("strong",null,l.a.createElement(o.a,{to:i.path},"latest version"))," ","(",r.label,")."))},u=a(570),g=a(549),E=a(115),v=a.n(E);t.default=function(e){const{siteConfig:t={}}=Object(c.a)(),{url:a,title:n}=t,{content:o}=e,{metadata:E}=o,{description:p,title:b,permalink:f,editUrl:h,lastUpdatedAt:_,lastUpdatedBy:N}=E,{frontMatter:{image:w,keywords:y,hide_title:k,hide_table_of_contents:O}}=o,j=(()=>{const e=Object(m.useActiveVersion)(Object(m.useActivePlugin)().pluginId);if(!e)throw new Error("unexpected, can't get version data of doc");return e})(),C=b?`${b} | ${n}`:n,x=Object(i.a)(w,{absolute:!0});return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("title",null,C),l.a.createElement("meta",{property:"og:title",content:C}),p&&l.a.createElement("meta",{name:"description",content:p}),p&&l.a.createElement("meta",{property:"og:description",content:p}),y&&y.length&&l.a.createElement("meta",{name:"keywords",content:y.join(",")}),w&&l.a.createElement("meta",{property:"og:image",content:x}),w&&l.a.createElement("meta",{property:"twitter:image",content:x}),w&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+b}),f&&l.a.createElement("meta",{property:"og:url",content:a+f}),f&&l.a.createElement("link",{rel:"canonical",href:a+f})),l.a.createElement("div",{className:Object(g.a)("container padding-vert--lg",v.a.docItemWrapper)},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:Object(g.a)("col",{[v.a.docItemCol]:!O})},l.a.createElement(d,null),l.a.createElement("div",{className:v.a.docItemContainer},l.a.createElement("article",null,j&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",j.label)),!k&&l.a.createElement("header",null,l.a.createElement("h1",{className:v.a.docTitle},b)),l.a.createElement("div",{className:"markdown"},l.a.createElement(o,null))),(h||_||N)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},h&&l.a.createElement("a",{href:h,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(_||N)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",_&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*_).toISOString(),className:v.a.docLastUpdatedAt},new Date(1e3*_).toLocaleDateString()),N&&" "),N&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,N)),!1))))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(s,{metadata:E})))),!O&&o.rightToc&&l.a.createElement("div",{className:"col col--3"},l.a.createElement(u.a,{headings:o.rightToc})))))}},570:function(e,t,a){"use strict";var n=a(0),l=a.n(n);var r=function(e,t,a){const[l,r]=Object(n.useState)(void 0);Object(n.useEffect)(()=>{let n,c;function i(){const i=function(){let e=0,t=null;for(n=document.getElementsByClassName("anchor");e<n.length&&!t;){const l=n[e],{top:r}=l.getBoundingClientRect();r>=0&&r<=a&&(t=l),e+=1}return t}();if(i){let a=0,n=!1;for(c=document.getElementsByClassName(e);a<c.length&&!n;){const e=c[a],{href:o}=e,s=decodeURIComponent(o.substring(o.indexOf("#")+1));i.id===s&&(l&&l.classList.remove(t),e.classList.add(t),r(e),n=!0),a+=1}}}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}})},c=a(48),i=a.n(c);function o({headings:e,isChild:t}){return e.length?l.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map(e=>l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:"table-of-contents__link",dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(o,{isChild:!0,headings:e.children})))):null}t.a=function({headings:e}){return r("table-of-contents__link","table-of-contents__link--active",100),l.a.createElement("div",{className:i.a.tableOfContents},l.a.createElement(o,{headings:e}))}}}]);