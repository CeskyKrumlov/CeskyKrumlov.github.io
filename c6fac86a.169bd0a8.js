(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{297:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(2),o=n(6),c=(n(0),n(366)),a={id:"14.command",title:"\u547d\u4ee4\u6a21\u5f0f",hide_title:!0},i={unversionedId:"designPattern/14.command",id:"designPattern/14.command",isDocsHomePage:!1,title:"\u547d\u4ee4\u6a21\u5f0f",description:"\u547d\u4ee4\u6a21\u5f0f",source:"@site/datastructure/designPattern/14.\u547d\u4ee4\u6a21\u5f0f.md",slug:"/designPattern/14.command",permalink:"/datastructure/designPattern/14.command",version:"current",sidebar:"docs2",previous:{title:"\u4eab\u5143\u6a21\u5f0f",permalink:"/datastructure/designPattern/13.flyWeight"}},u=[{value:"\u547d\u4ee4\u6a21\u5f0f",id:"\u547d\u4ee4\u6a21\u5f0f",children:[]}],p={rightToc:u};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"\u547d\u4ee4\u6a21\u5f0f"},"\u547d\u4ee4\u6a21\u5f0f"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u95ee\u9898"),"\uff1ainvoker\u548creceiver\u76f4\u63a5\u8026\u5408\uff0c\u8fd9\u6837\u6267\u884c\u8d77\u6765\u662f",Object(c.b)("inlineCode",{parentName:"p"},"\u65e0\u75d5"),"\u7684\uff0c\u4f46\u662f\u6709\u4e9b\u60c5\u51b5\u4e0b\u6211\u4eec\u5e0c\u671b\u5bf9invoker\u8c03\u7528\u7684\u547d\u4ee4\u505a\u8bb0\u5f55\uff0c\u4f8b\u5982\u5b9e\u73b0undo"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"invoke -> command -> concreteCommand "),Object(c.b)("p",{parentName:"blockquote"},"\u901a\u8fc7\u62bd\u8c61\u7c7bcommand\u5c06Invoke\u4e0econcreteCommand",Object(c.b)("inlineCode",{parentName:"p"},"\u89e3\u8026"),"\uff0c\u6ee1\u8db3",Object(c.b)("inlineCode",{parentName:"p"},"\u5f00\u95ed\u539f\u5219"),"\uff0cinvoker\u770b\u4e0d\u5230\u5177\u4f53\u7684concreteComand")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"concreteCommand -> Receiver ",Object(c.b)("inlineCode",{parentName:"p"},"\u76f4\u63a5\u8026\u5408"),"\uff0cconcreteCommand\u7686\u7ee7\u627f\u62bd\u8c61\u7c7bcommand")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u8c03\u7528\u8fc7\u7a0b\uff1a")),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"client\u521b\u5efaCommand\u5b9e\u4f8b\u5316\u5bf9\u8c61\uff0cinvoker\u4f7f\u7528Command\u5f15\u7528\u8c03\u7528Execute\u65b9\u6cd5\uff0c\u7531concreteCommand\u5b9e\u9645\u6267\u884cExecute\u65b9\u6cd5\uff0c\u5176\u638c\u63e1receiver\u5f15\u7528\uff0c\u6fc0\u6d3breceiver\u7684action\u884c\u4e3a"))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u5982\u4f55\u4f53\u73b0",Object(c.b)("inlineCode",{parentName:"strong"},"\u8bb0\u5f55"))),Object(c.b)("p",{parentName:"blockquote"},"\u5c06concreteCommand\u7684\u5f15\u7528\uff08\u800c\u975e\u5bf9\u8c61\uff09\u4ee5\u6570\u636e\u7ed3\u6784\u7684\u5f62\u5f0f\u7ec4\u7ec7\uff0c\u4f8b\u5982\u94fe\u8868\uff0c\u53ef\u4ee5\u5229\u7528\u94fe\u8868\u5b9e\u73b0\u547d\u4ee4\u7684undo\uff0c\u505a\u5230\u6709\u8ff9\u53ef\u5faa")))}b.isMDXComponent=!0},366:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return s}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=b(n),d=r,s=l["".concat(a,".").concat(d)]||l[d]||m[d]||c;return n?o.a.createElement(s,i(i({ref:t},p),{},{components:n})):o.a.createElement(s,i({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<c;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);