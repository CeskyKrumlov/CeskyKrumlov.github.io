(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{332:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(548)),i=(n(552),n(553),{id:"8.realApplication",title:"RabbitMQ \u5e94\u7528\u573a\u666f",hide_title:!0}),c={unversionedId:"\u6d88\u606f\u4e2d\u95f4\u4ef6/rabbitmq/8.realApplication",id:"\u6d88\u606f\u4e2d\u95f4\u4ef6/rabbitmq/8.realApplication",isDocsHomePage:!1,title:"RabbitMQ \u5e94\u7528\u573a\u666f",description:"RabbitMQ \u5e94\u7528\u573a\u666f",source:"@site/docs/\u6d88\u606f\u4e2d\u95f4\u4ef6/rabbitmq/realApplication.md",slug:"/\u6d88\u606f\u4e2d\u95f4\u4ef6/rabbitmq/8.realApplication",permalink:"/docs/\u6d88\u606f\u4e2d\u95f4\u4ef6/rabbitmq/8.realApplication",version:"current",sidebar:"someSidebar",previous:{title:"SpringBoot \u6574\u5408 RabbitMQ",permalink:"/docs/\u6d88\u606f\u4e2d\u95f4\u4ef6/rabbitmq/7.springbootRabbit"},next:{title:"\u8fc7\u671f\u65f6\u95f4 TTL",permalink:"/docs/\u6d88\u606f\u4e2d\u95f4\u4ef6/rabbitmq/9.ttl"}},l=[{value:"RabbitMQ \u5e94\u7528\u573a\u666f",id:"rabbitmq-\u5e94\u7528\u573a\u666f",children:[]},{value:"\u5f02\u6b65\u5904\u7406",id:"\u5f02\u6b65\u5904\u7406",children:[]},{value:"\u5e94\u7528\u89e3\u8026",id:"\u5e94\u7528\u89e3\u8026",children:[]},{value:"\u6d41\u91cf\u524a\u5cf0",id:"\u6d41\u91cf\u524a\u5cf0",children:[]}],b={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("br",null),Object(o.b)("h1",{id:"rabbitmq-\u5e94\u7528\u573a\u666f"},"RabbitMQ \u5e94\u7528\u573a\u666f"),Object(o.b)("h1",{id:"\u5f02\u6b65\u5904\u7406"},"\u5f02\u6b65\u5904\u7406"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"\u7528\u6237\u6ce8\u518c\u540e\uff0c\u9700\u8981\u53d1\u6ce8\u518c\u53f3\u952e\u548c\u6ce8\u518c\u77ed\u4fe1\uff0c\u4f20\u7edf\u505a\u6cd5\u6709\u4e24\u79cd\uff1a",Object(o.b)("inlineCode",{parentName:"strong"},"\u4e32\u884c")," | ",Object(o.b)("inlineCode",{parentName:"strong"},"\u5e76\u884c"))),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"\u4e32\u884c\uff1a"),"\u5c06\u6ce8\u518c\u4fe1\u606f\u5199\u5165\u6570\u636e\u5e93\u540e\uff0c\u53d1\u9001\u6ce8\u518c\u6210\u529f\u901a\u77e5\u90ae\u4ef6\uff0c\u518d\u53d1\u9001\u6ce8\u518c\u6210\u529f\u901a\u77e5\u77ed\u4fe1\uff0c\u4ee5\u4e0a\u4e09\u4e2a\u4efb\u52a1\u5168\u90e8\u5b8c\u6210\u540e\u624d\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\uff0c\u6b64\u5904\u901a\u77e5\u6027\u8d28\u7684\u90ae\u4ef6\u548c\u77ed\u4fe1\uff0c\u662f\u975e\u5fc5\u987b\u7684\uff0c\u6ca1\u5fc5\u8981\u8ba9\u7528\u6237\u5fc5\u987b\u963b\u585e\u7b49\u5f85"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"\u5e76\u884c\uff1a"),"\u5c06\u6ce8\u518c\u4fe1\u606f\u5199\u5165\u6570\u636e\u5e93\u540e\uff0c\u53d1\u9001\u90ae\u4ef6\u7684\u540c\u65f6\u53d1\u9001\u77ed\u4fe1\uff0c\u4ee5\u4e0a\u4e09\u4e2a\u4efb\u52a1\u5b8c\u6210\u540e\uff0c\u8fd4\u56de\u5ba2\u6237\u7aef\uff0c\u5e76\u884c\u7684\u65b9\u5f0f\u80fd\u63d0\u9ad8\u5904\u7406\u6548\u7387"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"\u6d88\u606f\u961f\u5217\uff1a")),"\uff1a\u5047\u8bbe\u4e09\u4e2a\u4e1a\u52a1\u5206\u522b\u8017\u65f6 ",Object(o.b)("inlineCode",{parentName:"li"},"50ms"),"\uff0c\u90a3\u4e48\u4e32\u884c\u65b9\u5f0f\u8017\u65f6 ",Object(o.b)("inlineCode",{parentName:"li"},"50 * 3 = 150ms"),"\uff0c\u5e76\u884c\u8017\u65f6 ",Object(o.b)("inlineCode",{parentName:"li"},"100ms"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5e76\u884c\u867d\u7136\u5df2\u7ecf\u63d0\u9ad8\u4e86\u6548\u7387\uff0c\u4f46\u5b83\u8fd8\u662f\u5728\u53d1\u9001\u90ae\u4ef6\u671f\u95f4\u51fa\u73b0\u4e86\u963b\u585e\uff0c\u53ea\u662f\u76f8\u6bd4\u4e32\u884c\u65f6\u95f4\u6bd4\u8f83\u77ed"),Object(o.b)("li",{parentName:"ul"},"\u5f15\u5165\u6d88\u606f\u961f\u5217\uff0c\u53ef\u4ee5\u8ba9\u90ae\u4ef6\u3001\u77ed\u4fe1\u903b\u8f91",Object(o.b)("strong",{parentName:"li"},"\u5f7b\u5e95\u5f02\u6b65\u5904\u7406"),"\uff0c\u76f8\u6bd4\u5148\u524d\u7684 ",Object(o.b)("inlineCode",{parentName:"li"},"50ms")," \u6d88\u606f\u961f\u5217\u53d1\u9001\u6d88\u606f\u7684\u8017\u65f6\u53ef\u80fd\u4e3a ",Object(o.b)("inlineCode",{parentName:"li"},"5ms")))))),Object(o.b)("br",null),Object(o.b)("h1",{id:"\u5e94\u7528\u89e3\u8026"},"\u5e94\u7528\u89e3\u8026"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u8ba2\u5355\u7cfb\u7edf \u8c03\u7528 \u5e93\u5b58\u7cfb\u7edf"),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"\u5982\u679c\u5e93\u5b58\u7cfb\u7edf\u51fa\u73b0\u6545\u969c\uff0c\u4f1a\u5bfc\u81f4\u8ba2\u5355\u5931\u8d25")),Object(o.b)("li",{parentName:"ul"},"\u8ba2\u5355\u7cfb\u7edf\u548c\u5e93\u5b58\u7cfb\u7edf\u4ea7\u751f\u4e86\u8026\u5408")),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"\u5f15\u5165\u6d88\u606f\u961f\u5217")),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"\u8ba2\u5355\u7cfb\u7edf\uff1a"),"\u7528\u6237\u4e0b\u5355\u540e\uff0c\u8ba2\u5355\u7cfb\u7edf\u5b8c\u6210\u6301\u4e45\u5316\u5904\u7406\uff0c\u5c06\u6d88\u606f\u5199\u5165\u6d88\u606f\u961f\u5217\uff0c\u8fd4\u56de\u7528\u6237\u8ba2\u5355\u4e0b\u5355\u6210\u529f"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"\u5e93\u5b58\u7cfb\u7edf\uff1a"),"\u8ba2\u9605\u4e0b\u5355\u6d88\u606f\uff0c\u83b7\u53d6\u4e0b\u5355\u6d88\u606f\uff0c\u8fdb\u884c\u5e93\u64cd\u4f5c\uff0c\u5373\u4f7f\u5e93\u5b58\u7cfb\u7edf\u51fa\u73b0\u4e86\u6545\u969c\uff0c\u6d88\u606f\u961f\u5217\u4e5f\u80fd\u4fdd\u8bc1\u6d88\u606f\u7684\u53ef\u9760\u4f20\u9012\uff0c\u4e0d\u4f1a\u5bfc\u81f4\u6d88\u606f\u4e22\u5931"))),Object(o.b)("br",null),Object(o.b)("h1",{id:"\u6d41\u91cf\u524a\u5cf0"},"\u6d41\u91cf\u524a\u5cf0"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u79d2\u6740\u573a\u666f\uff0c\u4f7f\u7528\u6d88\u606f\u961f\u5217\u7f13\u5b58\u8bf7\u6c42"),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u63a7\u5236\u6d3b\u52a8\u4eba\u6570\uff0c\u8d85\u8fc7\u6b64\u4e00\u5b9a\u9608\u503c\u7684\u8ba2\u5355\u76f4\u63a5\u4e22\u5f03"),Object(o.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u7f13\u89e3\u77ed\u65f6\u95f4\u9ad8\u6d41\u91cf\u538b\u57ae\u5e94\u7528"))))}u.isMDXComponent=!0},548:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,O=p["".concat(i,".").concat(m)]||p[m]||s[m]||o;return n?a.a.createElement(O,c(c({ref:t},b),{},{components:n})):a.a.createElement(O,c({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},549:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},550:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},551:function(e,t,n){"use strict";var r=n(0),a=n(550);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},552:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(551),i=n(549),c=n(47),l=n.n(c);const b=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:c,values:p,groupId:s}=e,{tabGroupChoices:m,setTabGroupChoices:O}=Object(o.a)(),[d,f]=Object(r.useState)(c),[j,y]=Object(r.useState)(!1);if(null!=s){const e=m[s];null!=e&&e!==d&&p.some(t=>t.value===e)&&f(e)}const v=e=>{f(e),null!=s&&O(s,e)},g=[],N=e=>{e.metaKey||e.altKey||e.ctrlKey||y(!0)},h=()=>{y(!1)};return Object(r.useEffect)(()=>{window.addEventListener("keydown",N),window.addEventListener("mousedown",h)},[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":d===e,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":d===e}),style:j?{}:{outline:"none"},key:e,ref:e=>g.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case b:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e),N(e)},onFocus:()=>v(e),onClick:()=>{v(e),y(!1)},onPointerDown:()=>y(!1)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===d)[0]))}},553:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);