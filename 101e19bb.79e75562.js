(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{490:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),f=r,d=b["".concat(c,".").concat(f)]||b[f]||p[f]||o;return n?a.a.createElement(d,i(i({ref:t},s),{},{components:n})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},491:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},492:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},493:function(e,t,n){"use strict";var r=n(0),a=n(492);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},494:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(493),c=n(491),i=n(47),l=n.n(i);const s=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:i,values:b,groupId:p}=e,{tabGroupChoices:f,setTabGroupChoices:d}=Object(o.a)(),[m,O]=Object(r.useState)(i),[y,j]=Object(r.useState)(!1);if(null!=p){const e=f[p];null!=e&&e!==m&&b.some(t=>t.value===e)&&O(e)}const v=e=>{O(e),null!=p&&d(p,e)},g=[],w=e=>{e.metaKey||e.altKey||e.ctrlKey||j(!0)},h=()=>{j(!1)};return Object(r.useEffect)(()=>{window.addEventListener("keydown",w),window.addEventListener("mousedown",h)},[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},b.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":m===e,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":m===e}),style:y?{}:{outline:"none"},key:e,ref:e=>g.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e),w(e)},onFocus:()=>v(e),onClick:()=>{v(e),j(!1)},onPointerDown:()=>j(!1)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===m)[0]))}},495:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},581:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/19-6b86cf71a5577d19005403efbf74ba9a.png"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(490)),c=(n(494),n(495),{id:"7.nacosCluster",title:"Nacos \u96c6\u7fa4",hide_title:!0}),i={unversionedId:"springcloudalibaba/\u670d\u52a1\u6ce8\u518c\u4e0e\u914d\u7f6e\u4e2d\u5fc3/7.nacosCluster",id:"springcloudalibaba/\u670d\u52a1\u6ce8\u518c\u4e0e\u914d\u7f6e\u4e2d\u5fc3/7.nacosCluster",isDocsHomePage:!1,title:"Nacos \u96c6\u7fa4",description:"Nacos \u96c6\u7fa4",source:"@site/docs/springcloudalibaba/\u670d\u52a1\u6ce8\u518c\u4e0e\u914d\u7f6e\u4e2d\u5fc3/7.nacos\u96c6\u7fa4.mdx",slug:"/springcloudalibaba/\u670d\u52a1\u6ce8\u518c\u4e0e\u914d\u7f6e\u4e2d\u5fc3/7.nacosCluster",permalink:"/docs/springcloudalibaba/\u670d\u52a1\u6ce8\u518c\u4e0e\u914d\u7f6e\u4e2d\u5fc3/7.nacosCluster",version:"current",sidebar:"someSidebar",previous:{title:"Nacos \u6301\u4e45\u5316\u914d\u7f6e",permalink:"/docs/springcloudalibaba/\u670d\u52a1\u6ce8\u518c\u4e0e\u914d\u7f6e\u4e2d\u5fc3/6.nacosMysql"},next:{title:"Sentinel \u6982\u8ff0",permalink:"/docs/springcloudalibaba/\u6d41\u91cf\u536b\u5175/1.sentinel"}},l=[{value:"Nacos \u96c6\u7fa4",id:"nacos-\u96c6\u7fa4",children:[]},{value:"Nacos \u652f\u6301\u4e09\u79cd\u90e8\u7f72\u6a21\u5f0f",id:"nacos-\u652f\u6301\u4e09\u79cd\u90e8\u7f72\u6a21\u5f0f",children:[]}],s={rightToc:l};function u(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"nacos-\u96c6\u7fa4"},"Nacos \u96c6\u7fa4"),Object(o.b)("img",{src:n(581).default,style:{zoom:"45%",boxShadow:"5px 7px 28px #FFFFFF",borderRadius:"10px"}})," ",Object(o.b)("br",null),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Nacos \u9ed8\u8ba4\u91c7\u7528\u5d4c\u5165\u5f0f\u6570\u636e\u5e93\u5b9e\u73b0\u6570\u636e\u5b58\u50a8"),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"\u5982\u679c\u542f\u52a8\u591a\u4e2a\u9ed8\u8ba4\u914d\u7f6e\u7684 Nacos \u8282\u70b9\uff0c\u6570\u636e\u5b58\u50a8\u5b58\u5728\u4e00\u81f4\u6027\u95ee\u9898"),Object(o.b)("li",{parentName:"ul"},"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e00\u95ee\u9898\uff0cNacos \u63d0\u4f9b\u4e86 ",Object(o.b)("strong",{parentName:"li"},"\u96c6\u4e2d\u5f0f\u5b58\u50a8\u65b9\u5f0f\uff0c\u652f\u6301\u96c6\u7fa4\u5316\u90e8\u7f72\uff0c\u76ee\u524d\u4ec5\u652f\u6301 MySQL")))),Object(o.b)("br",null),Object(o.b)("h1",{id:"nacos-\u652f\u6301\u4e09\u79cd\u90e8\u7f72\u6a21\u5f0f"},"Nacos \u652f\u6301\u4e09\u79cd\u90e8\u7f72\u6a21\u5f0f"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"\u5355\u673a\u6a21\u5f0f\uff1a"),"\u9002\u7528\u4e8e\u6d4b\u8bd5\u548c\u5355\u673a\u4f7f\u7528"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"\u96c6\u7fa4\u6a21\u5f0f\uff1a"),"\u7528\u4e8e\u751f\u4ea7\u73af\u5883\uff0c\u786e\u4fdd\u9ad8\u53ef\u7528"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"\u591a\u96c6\u7fa4\u6a21\u5f0f"),"\uff1a\u7528\u4e8e\u591a\u6570\u636e\u4e2d\u5fc3\u573a\u666f")),Object(o.b)("p",null,"\u625b\u9ebb\u888b\u7684\u5c11\u5e74"))}u.isMDXComponent=!0}}]);