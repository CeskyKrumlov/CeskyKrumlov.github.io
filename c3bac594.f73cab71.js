(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{284:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(353)),l={id:"7.adapterPattern",title:"\u9002\u914d\u5668\u6a21\u5f0f",hide_title:!0},c={unversionedId:"designPattern/7.adapterPattern",id:"designPattern/7.adapterPattern",isDocsHomePage:!1,title:"\u9002\u914d\u5668\u6a21\u5f0f",description:"\u7ed3\u6784\u578b\u6a21\u5f0f",source:"@site/datastructure/designPattern/7.\u9002\u914d\u5668\u6a21\u5f0f.md",slug:"/designPattern/7.adapterPattern",permalink:"/datastructure/designPattern/7.adapterPattern",version:"current",sidebar:"docs2",previous:{title:"\u5355\u4f8b\u6a21\u5f0f",permalink:"/datastructure/designPattern/6.singleton"},next:{title:"\u4ee3\u7406\u6a21\u5f0f",permalink:"/datastructure/designPattern/8.proxyPattern"}},o=[{value:"\u7ed3\u6784\u578b\u6a21\u5f0f",id:"\u7ed3\u6784\u578b\u6a21\u5f0f",children:[]},{value:"\u9002\u914d\u5668\u6a21\u5f0f Adapter",id:"\u9002\u914d\u5668\u6a21\u5f0f-adapter",children:[]},{value:"\u6e90\u53d1\u95ee\u9898",id:"\u6e90\u53d1\u95ee\u9898",children:[]},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",children:[]},{value:"UML\u7c7b\u56fe",id:"uml\u7c7b\u56fe",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u4f18\u7f3a\u70b9",id:"\u4f18\u7f3a\u70b9",children:[]}],b={rightToc:o};function p(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u7ed3\u6784\u578b\u6a21\u5f0f"},"\u7ed3\u6784\u578b\u6a21\u5f0f"),Object(i.b)("p",null,"\u7cfb\u7edf\u90fd\u6709\u4e00\u5b9a\u7684\u7ed3\u6784\uff0c\u8f6f\u4ef6\u7cfb\u7edf\u7684\u7ed3\u6784\u8bbe\u8ba1\u5f80\u5f80\u8bbe\u8ba1\u5982\u4e0b\u95ee\u9898"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u7ed3\u6784\u4f18\u5316\u95ee\u9898\uff1a\u5e9e\u5927\u7684\u8f6f\u4ef6\u7cfb\u7edf\u5728\u7ed3\u6784\u4e0a\u5fc5\u7136\u5177\u6709\u5c42\u6b21\u6027\uff0c\u800c\u4f18\u5316\u7684\u7ed3\u6784\u8bbe\u8ba1\u80fd\u6ee1\u8db3\u8fd9\u79cd\u5c42\u6b21\u8bbe\u8ba1\u7684\u8981\u6c42\uff0c\u76f8\u5173\u7684\u6a21\u5f0f\u6709\u7ec4\u6210\u6a21\u5f0f\uff1b\u5982\u679c\u8f6f\u4ef6\u7cfb\u7edf\u5728\u7ed3\u6784\u8bbe\u8ba1\u65f6\u51fa\u73b0\u6570\u91cf\u6025\u5267\u589e\u957f\u7684\u60c5\u51b5\uff0c\u9700\u8981\u5bf9\u8bbe\u8ba1\u8fdb\u884c\u91cd\u65b0\u8003\u91cf\u4ee5\u4f18\u5316\u7cfb\u7edf\u7ed3\u6784\uff0c\u76f8\u5173\u7684\u6a21\u5f0f\u6709\u88c5\u9970\u6a21\u5f0f\u548c\u4eab\u5143\u6a21\u5f0f"),Object(i.b)("li",{parentName:"ol"},"\u7ed3\u6784\u5982\u4f55\u9002\u5e94\u5916\u754c\u53d8\u5316\u8981\u6c42\u7684\u95ee\u9898\uff1a\u8f6f\u4ef6\u529f\u80fd\u7684\u5b9e\u73b0\u548c\u4f7f\u7528\u662f\u4e0d\u53ef\u5206\u5272\u7684\u4e24\u4e2a\u65b9\u9762\uff0c\u8fd9\u4e24\u4e2a\u65b9\u9762\u4e5f\u662f\u5f15\u8d77\u8f6f\u4ef6\u53d8\u5316\u7684\u91cd\u8981\u56e0\u7d20\u3002\u5982\u8f6f\u4ef6\u9700\u8981\u5728\u4e0d\u540c\u7684\u5e73\u53f0\u4e0a\u79fb\u690d\uff0c\u8f6f\u4ef6\u7684\u7ed3\u6784\u5b9e\u73b0\u4e0d\u8bb8\u8fdb\u884c\u8c03\u6574\u4f18\u5316\u3002\u7528\u6237\u9700\u6c42\u7684\u53d8\u5316\u5c06\u4f1a\u5bfc\u81f4\u8f6f\u4ef6\u529f\u80fd\u4f7f\u7528\u4e0a\u7684\u53d8\u5316\uff0c\u8fd9\u79cd\u53d8\u5316\u4e5f\u9700\u8981\u8f6f\u4ef6\u7ed3\u6784\u8fdb\u884c\u76f8\u5e94\u8c03\u6574\u3002\u5b9e\u9645\u4e0a\uff0c\u8fd9\u4e24\u79cd\u53d8\u5316\u5f80\u5f80\u4ea4\u7ec7\u5728\u4e00\u8d77\uff0c\u4ece\u800c\u4f7f\u7c7b\u6570\u91cf\u5728\u7cfb\u7edf\u6f14\u53d8\u4e2d\u4e0d\u65ad\u6fc0\u589e\uff0c\u5982\u4f55\u5904\u7406\u8fd9\u65b9\u9762\u7684\u95ee\u9898\u9700\u8981\u53c2\u8003\u6865\u63a5\u6a21\u5f0f"),Object(i.b)("li",{parentName:"ol"},"\u7ed3\u6784\u5982\u4f55\u6ee1\u8db3\u7279\u6b8a\u529f\u80fd\u9700\u6c42\u7684\u95ee\u9898\uff1a\u4e24\u4e2a\u73b0\u6709\u7684\u4e0d\u540c\u7c7b\u578b\u7ed3\u6784\uff08\u5f02\u6784\uff09\u7684\u8f6f\u4ef6\u7cfb\u7edf\u5f7c\u6b64\u5982\u4f55\u534f\u4f5c\u6765\u5b8c\u6210\u67d0\u79cd\u529f\u80fd\uff0c\u76f8\u5173\u8bbe\u8ba1\u9700\u8981\u53c2\u8003\u9002\u914d\u5668\u6a21\u5f0f\uff1b\u5ba2\u6237\u7aef\u5bf9\u4e00\u4e2a\u62e5\u6709\u590d\u6742\u5171\u5462\u4e2a\u7684\u5b50\u7cfb\u7edf\u7684\u8c03\u7528\u5f80\u5f80\u5b58\u5728\u4e0d\u65b9\u4fbf\u4f7f\u7528\u7684\u95ee\u9898\uff0c\u5904\u7406\u8fd9\u65b9\u9762\u95ee\u9898\u53ef\u4ee5\u53c2\u8003\u5916\u89c2\u6a21\u5f0f\uff1b\u5728\u4e00\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5ba2\u6237\u7aef\u9700\u8981\u901a\u8fc7\u4ee3\u7406\u6765\u8bbf\u95ee\u5bf9\u8c61\uff0c\u8fd9\u65b9\u9762\u7684\u7ed3\u6784\u5982\u4f55\u8bbe\u8ba1\u9700\u8981\u53c2\u8003\u4ee3\u7406\u6a21\u5f0f")),Object(i.b)("p",null,"\u7ed3\u6784\u578b\u6a21\u5f0f\u901a\u8fc7\u8fd0\u7528\u5f00\u95ed\u539f\u5219\u6765\u5b9e\u73b0\u7cfb\u7edf\u7ed3\u6784\u7684\u7a33\u5b9a\u548c\u6269\u5c55\u7684\u534f\u8c03\u7edf\u4e00\uff0c\u901a\u8fc7\u8fd0\u7528\u7ec4\u5408\u3001\u805a\u5408\u539f\u5219\u6765\u83b7\u5f97\u66f4\u5927\u66f4\u4f18\u7684\u7cfb\u7edf\u7ed3\u6784\uff0c\u901a\u8fc7\u8fd0\u7528\u5f3a\u5185\u805a\u5f31\u8026\u5408\u539f\u5219\u6765\u5904\u7406\u4e0d\u540c\u5c42\u6b21\u7ed3\u6784\u95f4\u7684\u8026\u5408\u5173\u7cfb"),Object(i.b)("h1",{id:"\u9002\u914d\u5668\u6a21\u5f0f-adapter"},"\u9002\u914d\u5668\u6a21\u5f0f Adapter"),Object(i.b)("p",null,"\u5b9a\u4e49\uff1a\u5c06\u4e00\u4e2a\u7c7b\u7684\u63a5\u53e3\u8f6c\u6362\u6210\u5ba2\u6237\u671f\u671b\u7684\u53e6\u4e00\u4e2a\u63a5\u53e3\u3002\u9002\u914d\u5668\u8ba9\u539f\u672c\u63a5\u53e3\u4e0d\u517c\u5bb9\u7684\u7c7b\u53ef\u4ee5\u5408\u4f5c\u65e0\u95f4\u3002"),Object(i.b)("h1",{id:"\u6e90\u53d1\u95ee\u9898"},"\u6e90\u53d1\u95ee\u9898"),Object(i.b)("p",null,"\u5df2\u7ecf\u7f16\u5199\u5b8c\u6210\u7684\u7cfb\u7edf\u9700\u8981\u540c\u5176\u4ed6\u7cfb\u7edf\u8fdb\u884c\u534f\u4f5c\uff0c\u66ff\u6362\u73b0\u6709\u7cfb\u7edf\u7684\u90e8\u5206\u529f\u80fd\uff0c\u4f46\u73b0\u6709\u7cfb\u7edf\u88ab\u66ff\u6362\u529f\u80fd\u7684\u4f7f\u7528\u7aef\u4ee3\u7801\u4e0d\u80fd\u66f4\u6362\uff0c\u9700\u8981\u534f\u4f5c\u7684\u7cfb\u7edf\u8c03\u7528\u63a5\u53e3\u4e5f\u4e0d\u80fd\u66f4\u6362\uff0c\u4ece\u800c\u9020\u6210\u534f\u4f5c\u56f0\u96be"),Object(i.b)("h1",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u7c7b\u9002\u914d\u5668\u89e3\u51b3\u65b9\u6848\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"Client"),"\u548c",Object(i.b)("inlineCode",{parentName:"li"},"Target"),"\u662f\u73b0\u6709\u7cfb\u7edf\u8303\u56f4\uff0c\u800c",Object(i.b)("inlineCode",{parentName:"li"},"Adaptee"),"\u662f\u9700\u8981\u5199\u4f5c\u7684\u5916\u90e8\u7cfb\u7edf\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"Target"),"\u4ee3\u8868\u4e86\u73b0\u6709\u7cfb\u7edf\u88ab\u66ff\u6362\u7684\u90e8\u5206\uff0c\u800c",Object(i.b)("inlineCode",{parentName:"li"},"Client"),"\u4f7f\u7528\u63a5\u53e3",Object(i.b)("inlineCode",{parentName:"li"},"Request"),"\u5df2\u7ecf\u65e0\u6cd5\u4fee\u6539\uff0c\u4f46\u53c8\u5e0c\u671b\u8c03\u7528",Object(i.b)("inlineCode",{parentName:"li"},"Adaptee"),"\u7684\u63a5\u53e3",Object(i.b)("inlineCode",{parentName:"li"},"SpecificRequest"),"\u3002\u89e3\u51b3\u65b9\u6cd5\u662f\u91c7\u7528\u591a\u7ee7\u627f\u8ba9",Object(i.b)("inlineCode",{parentName:"li"},"Adapter"),"\u5206\u522b\u7ee7\u627f",Object(i.b)("inlineCode",{parentName:"li"},"Target"),"\u548c",Object(i.b)("inlineCode",{parentName:"li"},"Adaptee"),"\uff0c\u4ece\u800c\u5728",Object(i.b)("inlineCode",{parentName:"li"},"Adapter"),"\u7684",Object(i.b)("inlineCode",{parentName:"li"},"Request"),"\u4e2d\u8c03\u7528",Object(i.b)("inlineCode",{parentName:"li"},"SpecificRequest"),"\u5b9e\u73b0\u529f\u80fd\u9002\u914d\uff0c\u7531\u4e8eJava\u6ca1\u6709\u591a\u7ee7\u627f\uff0c\u6b64\u65f6\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"li"},"\u5bf9\u8c61\u9002\u914d\u5668"),"\u65b9\u5f0f"),Object(i.b)("li",{parentName:"ol"},"\u5bf9\u8c61\u9002\u914d\u5668\u65b9\u5f0f\uff0c\u5373",Object(i.b)("inlineCode",{parentName:"li"},"Adapter"),"\u53ea\u7ee7\u627f",Object(i.b)("inlineCode",{parentName:"li"},"Target"),"\u5e76\u638c\u63e1",Object(i.b)("inlineCode",{parentName:"li"},"Adaptee"),"\u5bf9\u8c61\u7684\u5f15\u7528\uff0c\u5728",Object(i.b)("inlineCode",{parentName:"li"},"Adapter"),"\u7684",Object(i.b)("inlineCode",{parentName:"li"},"Request"),"\u65b9\u6cd5\u4e2d\u901a\u8fc7",Object(i.b)("inlineCode",{parentName:"li"},"Adaptee"),"\u5f15\u7528\u53d1",Object(i.b)("inlineCode",{parentName:"li"},"SpecificRequest"),"\u6d88\u606f")),Object(i.b)("h1",{id:"uml\u7c7b\u56fe"},"UML\u7c7b\u56fe"),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20200331211822392",src:n(647).default})),Object(i.b)("h1",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(i.b)("h1",{id:"\u4f18\u7f3a\u70b9"},"\u4f18\u7f3a\u70b9"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u4f18\u70b9\n\u4f7f\u4e24\u4e2a\u5f02\u6784\u7cfb\u7edf\u80fd\u591f\u5f7c\u6b64\u8c03\u7528\uff1b\u5bf9\u8c61\u9002\u914d\u5668\u6bd4\u7c7b\u9002\u914d\u5668\u66f4\u7075\u6d3b"),Object(i.b)("li",{parentName:"ul"},"\u7f3a\u70b9\n\u7c7b\u9002\u914d\u5668\u5bf9\u5177\u6709\u5355\u4e00\u7ee7\u627f\u7279\u70b9\u7684\u8bed\u8a00Java\u4e0d\u9002\u7528")))}p.isMDXComponent=!0},353:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),d=p(n),O=r,m=d["".concat(l,".").concat(O)]||d[O]||u[O]||i;return n?a.a.createElement(m,c(c({ref:t},b),{},{components:n})):a.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=O;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},647:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/12-92dcd4da0ea4c1d967677ca49f7d8575.png"}}]);