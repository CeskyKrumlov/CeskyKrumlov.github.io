(window.webpackJsonp=window.webpackJsonp||[]).push([[470],{1191:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/10-e5661cf0359faa82020d66ab961fc556.gif"},526:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(2),o=r(6),i=(r(0),r(571)),a={id:"12.shiroLogout",title:"Shiro\u5b9e\u73b0\u9000\u51fa\u767b\u5f55",hide_title:!0},c={unversionedId:"springboot/12.shiroLogout",id:"springboot/12.shiroLogout",isDocsHomePage:!1,title:"Shiro\u5b9e\u73b0\u9000\u51fa\u767b\u5f55",description:"Shiro\u5b9e\u73b0\u9000\u51fa\u767b\u5f55",source:"@site/docs/springboot/12.Shiro\u9000\u51fa\u767b\u5f55.md",slug:"/springboot/12.shiroLogout",permalink:"/docs/springboot/12.shiroLogout",version:"current",sidebar:"someSidebar",previous:{title:"Shiro\u6574\u5408\u6a21\u677f\u5f15\u64ce",permalink:"/docs/springboot/12.shiroTemplateEngine"},next:{title:"Swagger",permalink:"/docs/springboot/13.swagger"}},l=[{value:"Shiro\u5b9e\u73b0\u9000\u51fa\u767b\u5f55",id:"shiro\u5b9e\u73b0\u9000\u51fa\u767b\u5f55",children:[{value:"\u9000\u51fa\u767b\u5f55",id:"\u9000\u51fa\u767b\u5f55",children:[]}]}],u={rightToc:l};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"shiro\u5b9e\u73b0\u9000\u51fa\u767b\u5f55"},"Shiro\u5b9e\u73b0\u9000\u51fa\u767b\u5f55"),Object(i.b)("h2",{id:"\u9000\u51fa\u767b\u5f55"},"\u9000\u51fa\u767b\u5f55"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u4fee\u6539shiro filter")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'//\u6dfb\u52a0\u9000\u51fa\u767b\u5f55\u529f\u80fd\nfilterChainDefinitionMap.put("/logout","logout");\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Controller\u5b9a\u4e49",Object(i.b)("inlineCode",{parentName:"li"},"/logout"),"\u8def\u7531",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"SecurityUtils"),"\u83b7\u53d6\u5f53\u524d\u7528\u6237\uff0c\u8c03\u7528",Object(i.b)("inlineCode",{parentName:"li"},"logout"),"\u65b9\u6cd5"),Object(i.b)("li",{parentName:"ul"},"\u91cd\u5b9a\u5411\u5230\u4e3b\u9875\u6216\u8005\u767b\u5f55\u9875")))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'@RequestMapping("/logout")\npublic String logout() {\n    Subject currentSubject = SecurityUtils.getSubject();\n    currentSubject.logout();\n    return "index";\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5728\u9875\u9762\u4e0a\u653e\u7f6e",Object(i.b)("inlineCode",{parentName:"li"},"\u9000\u51fa\u767b\u5f55"),"\u6807\u7b7e",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5229\u7528shiro-freemarker\u6807\u7b7e\u5b9e\u73b0\u53ea\u6709\u767b\u5f55\u7528\u6237\u624d\u80fd\u770b\u5230",Object(i.b)("inlineCode",{parentName:"li"},"\u9000\u51fa\u767b\u5f55"),"\u6309\u94ae")))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<@shiro.authenticated>\n    <h1><a href="/logout">\u9000\u51fa\u767b\u5f55</a> </h1>\n</@shiro.authenticated>\n')),Object(i.b)("img",{src:r(1191).default,style:{zoom:"60%",boxShadow:"5px 7px 28px #333333"}}),Object(i.b)("br",null))}b.isMDXComponent=!0},571:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),b=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=b(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=b(r),f=n,m=p["".concat(a,".").concat(f)]||p[f]||s[f]||i;return r?o.a.createElement(m,c(c({ref:t},u),{},{components:r})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);