(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{338:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,O=u["".concat(i,".").concat(f)]||u[f]||m[f]||o;return n?a.a.createElement(O,c(c({ref:t},b),{},{components:n})):a.a.createElement(O,c({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},378:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/6-f2a6e3e24a060728579b64e08a6eb276.png"},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(338)),i={id:"9.lifeCycle",title:"Vue\u751f\u547d\u5468\u671f",hide_title:!0},c={unversionedId:"front/vue/9.lifeCycle",id:"front/vue/9.lifeCycle",isDocsHomePage:!1,title:"Vue\u751f\u547d\u5468\u671f",description:"9. Vue\u751f\u547d\u5468\u671f",source:"@site/docs/front/vue/9.vue\u751f\u547d\u5468\u671f\u94a9\u5b50.md",permalink:"/docs/front/vue/9.lifeCycle",sidebar:"someSidebar",previous:{title:"Axios",permalink:"/docs/front/vue/8.axios"},next:{title:"\u524d\u540e\u7aef\u5206\u79bb\u2014\u2014Vue\u7ed3\u5408BootStrap\u4e0eSpringBoot",permalink:"/docs/front/vue/10.bootstrap"}},l=[{value:"9. Vue\u751f\u547d\u5468\u671f",id:"9-vue\u751f\u547d\u5468\u671f",children:[]}],b={rightToc:l};function p(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"9-vue\u751f\u547d\u5468\u671f"},"9. Vue\u751f\u547d\u5468\u671f"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"\u751f\u547d\u5468\u671f\u94a9\u5b50"),"\uff1a\u53ef\u7406\u89e3\u4e3a\u751f\u547d\u5468\u671f\u51fd\u6570"),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Vue\u5b9e\u4f8b\u7684\u751f\u547d\u5468\u671f\u51fd\u6570")),Object(o.b)("ol",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"\u521d\u59cb\u5316")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"beforeCreate"),"\uff1a\u5728\u6b64\u51fd\u6570\u6267\u884c\u65f6\uff0cVue\u5b9e\u4f8b\u4ec5\u4ec5\u5b8c\u6210\u751f\u547d\u5468\u671f\u521d\u59cb\u5316"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"created"),"\uff1a\u6b64\u65f6\u53ef\u8bbf\u95ee\u5230data\u4e2d\u7684\u6570\u636e"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"beforeMount"),"\uff1a\u5c06\u6307\u5b9a\u4f5c\u7528\u8303\u56f4\u4f5c\u4e3a\u6a21\u677f\u7f16\u8bd1\uff0c\u6b64\u65f6\u8fd8\u672a\u66ff\u6362\u63d2\u503c\u8868\u8fbe\u5f0f"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mounted"),"\uff1a\u8be5\u51fd\u6570\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0c\u5df2\u7ecf\u5c06\u6570\u636e\u6e32\u67d3\u5230\u754c\u9762\u4e2d\uff0c\u5e76\u4e14\u5df2\u7ecf\u66f4\u65b0\u754c\u9762"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"\u8fd0\u884c\u72b6\u6001")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"beforeUpdate"),"\uff1a\u5f53",Object(o.b)("inlineCode",{parentName:"li"},"data"),"\u6570\u636e\u88ab\u4fee\u6539\uff0c\u89e6\u53d1",Object(o.b)("inlineCode",{parentName:"li"},"beforeUpdate"),"\u65b9\u6cd5"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"updated"),"\uff1a\u9875\u9762\u4e2d\u7684\u6570\u636e\u4e0e",Object(o.b)("inlineCode",{parentName:"li"},"data"),"\u540c\u6b65"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"\u9500\u6bc1")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"beforeDestroy"),"\uff1a\u6267\u884c\u524d\u4e8b\u4ef6\u7b49\u8fd8\u672a\u89e3\u9664\u7ed1\u5b9a\uff0c\u6267\u884c\u540e\u4e8b\u4ef6\u89e3\u9664\u7ed1\u5b9a"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"destroyed"),"\uff1a\u6574\u4e2aVue\u5b9e\u4f8b\u9500\u6bc1"))))),Object(o.b)("p",null,Object(o.b)("img",{src:n(378).default})))}p.isMDXComponent=!0}}]);