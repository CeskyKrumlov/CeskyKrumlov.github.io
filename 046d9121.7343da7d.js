(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{561:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,O=p["".concat(l,".").concat(m)]||p[m]||s[m]||i;return n?a.a.createElement(O,c(c({ref:t},b),{},{components:n})):a.a.createElement(O,c({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},623:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/6-a18fa6c8dd539c23b581b4c778cd9df1.png"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),i=(n(0),n(561)),l={id:"4.tailRecursion",title:"\u5c3e\u9012\u5f52",hide_title:!0},c={unversionedId:"sf/\u9012\u5f52/4.tailRecursion",id:"sf/\u9012\u5f52/4.tailRecursion",isDocsHomePage:!1,title:"\u5c3e\u9012\u5f52",description:"\u5c3e\u9012\u5f52",source:"@site/datastructure/sf/\u9012\u5f52/\u5c3e\u9012\u5f52.md",slug:"/sf/\u9012\u5f52/4.tailRecursion",permalink:"/datastructure/sf/\u9012\u5f52/4.tailRecursion",version:"current",sidebar:"docs2",previous:{title:"\u6c49\u8bfa\u5854",permalink:"/datastructure/sf/\u9012\u5f52/3.hanoi"},next:{title:"\u5206\u6cbb\u6cd5",permalink:"/datastructure/sf/\u5206\u6cbb/1.divideAndConquer"}},o=[{value:"\u5c3e\u9012\u5f52",id:"\u5c3e\u9012\u5f52",children:[{value:"\u5c3e\u8c03\u7528(Tail Call)",id:"\u5c3e\u8c03\u7528tail-call",children:[]},{value:"\u5c3e\u8c03\u7528\u4f18\u5316(Tail Call Optimization)",id:"\u5c3e\u8c03\u7528\u4f18\u5316tail-call-optimization",children:[]}]}],b={rightToc:o};function u(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u5c3e\u9012\u5f52"},"\u5c3e\u9012\u5f52"),Object(i.b)("h2",{id:"\u5c3e\u8c03\u7528tail-call"},"\u5c3e\u8c03\u7528(Tail Call)"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u5c3e\u8c03\u7528\uff1a\u4e00\u4e2a\u51fd\u6570\u7684\u6700\u540e\u4e00\u4e2a\u52a8\u4f5c\u662f\u8c03\u7528\u51fd\u6570")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u6700\u540e\u4e00\u4e2a\u52a8\u4f5c\u662f\u8c03\u7528\u81ea\u8eab\uff0c\u5219\u79f0\u4e3a",Object(i.b)("inlineCode",{parentName:"li"},"\u5c3e\u9012\u5f52(Tail Recursion)"),"\uff0c\u662f\u5c3e\u8c03\u7528\u7684\u7279\u6b8a\u60c5\u51b5"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u5c3e\u8c03\u7528"',title:'"\u5c3e\u8c03\u7528"'}),"void test1() {\n  int a = 10;\n  int b = a + 20;\n  test2(b); // \u5c3e\u8c03\u7528\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u5c3e\u9012\u5f52"',title:'"\u5c3e\u9012\u5f52"'}),"void test2() {\n  if (n < 0) return;\n  test2(n - 1); // \u5c3e\u9012\u5f52\n}\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u4e00\u4e9b\u7f16\u8bd1\u5668\u80fd\u5bf9\u5c3e\u8c03\u7528\u8fdb\u884c\u4f18\u5316\uff0c\u4ee5\u8fbe\u5230\u8282\u7701",Object(i.b)("inlineCode",{parentName:"strong"},"\u6808\u7a7a\u95f4"),"\u7684\u76ee\u7684"))),Object(i.b)("img",{src:n(623).default,style:{zoom:"45%",border:"0px black solid"}}),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u4e0b\u5217\u4ee3\u7801\u4e0d\u662f\u5c3e\u8c03\u7528"',title:'"\u4e0b\u5217\u4ee3\u7801\u4e0d\u662f\u5c3e\u8c03\u7528"'}),"int factorial(int n) {\n  if (n <= 1) return n;\n  return n * factorial(n - 1); // \u4e0d\u662f\u5c3e\u8c03\u7528\uff0c\u56e0\u4e3a\u8fd9\u91cc\u662f\u505a\u4e58\u6cd5\n}\n")),Object(i.b)("h2",{id:"\u5c3e\u8c03\u7528\u4f18\u5316tail-call-optimization"},"\u5c3e\u8c03\u7528\u4f18\u5316(Tail Call Optimization)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"\u5c3e\u8c03\u7528\u4f18\u5316"),"\u4e5f\u53eb\u505a",Object(i.b)("inlineCode",{parentName:"li"},"\u5c3e\u8c03\u7528\u6d88\u9664"),"\uff08Tail Call Elimination\uff09",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u5f53\u524d\u6808\u5e27\u4e0a\u7684\u5c40\u90e8\u53d8\u91cf\u7b49\u5185\u5bb9\u90fd",Object(i.b)("strong",{parentName:"li"},"\u4e0d\u9700\u8981\u518d\u4f7f\u7528"),"\u4e86\uff0c\u5f53\u524d\u6808\u5e27\u7ecf\u8fc7\u9002\u5f53\u7684\u6539\u53d8\u540e\u53ef\u4ee5\u76f4\u63a5\u5f53\u505a\u88ab\u5c3e\u8c03\u7528\u7684\u51fd\u6570\u7684\u6808\u5e27\u4f7f\u7528\uff0c\u7136\u540e\u7a0b\u5e8f\u53ef\u4ee5",Object(i.b)("inlineCode",{parentName:"li"},"\u8df3\u8f6c"),"\u5230\u88ab\u5c3e\u8c03\u7528\u7684\u51fd\u6570\u4ee3\u7801\u5904\u6267\u884c"),Object(i.b)("li",{parentName:"ul"},"\u751f\u6210",Object(i.b)("strong",{parentName:"li"},"\u6808\u5e27\u6539\u53d8"),"\u4ee3\u7801\u4e0e",Object(i.b)("strong",{parentName:"li"},"\u8df3\u8f6c"),"\u7684\u8fc7\u7a0b\uff0c\u79f0\u4e3a",Object(i.b)("inlineCode",{parentName:"li"},"\u5c3e\u8c03\u7528\u6d88\u9664"),"\u6216",Object(i.b)("inlineCode",{parentName:"li"},"\u5c3e\u8c03\u7528\u4f18\u5316")),Object(i.b)("li",{parentName:"ul"},"\u5c3e\u8c03\u7528\u4f18\u5316\u53ef\u4ee5\u8ba9\u4f4d\u4e8e\u5c3e\u4f4d\u7f6e\u7684\u51fd\u6570\u8c03\u7528\u5177\u6709\u8ddf",Object(i.b)("inlineCode",{parentName:"li"},"goto"),"\u8bed\u53e5\u4e00\u6837\u9ad8\u7684\u6027\u80fd"))),Object(i.b)("li",{parentName:"ul"},"\u6d88\u9664\u5c3e\u9012\u5f52\u91cc\u7684\u5c3e\u8c03\u7528\u6bd4\u6d88\u9664\u4e00\u822c\u7684\u5c3e\u8c03\u7528\u5bb9\u6613\u5f97\u591a\uff0c\u56e0\u4e3a\u6808\u5e27\u5927\u5c0f\u4fdd\u6301\u4e0d\u53d8\uff0c\u65e0\u9700\u8c03\u6574\u6808\u5e27",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"JVM\u4f1a\u6d88\u9664\u5c3e\u9012\u5f52\u91cc\u7684\u5c3e\u8c03\u7528\uff0c\u4f46\u4e0d\u4f1a\u6d88\u9664\u4e00\u822c\u7684\u5c3e\u8c03\u7528\uff0c\u56e0\u4e3aJVM\u65e0\u6cd5\u52a8\u6001\u6539\u53d8\u6808\u5e27\u5927\u5c0f"),Object(i.b)("li",{parentName:"ul"},"\u5c3e\u9012\u5f52\u4f18\u5316\u76f8\u5bf9\u666e\u904d\uff0c",Object(i.b)("strong",{parentName:"li"},"\u5e73\u65f6\u7684\u9012\u5f52\u4ee3\u7801\u53ef\u4ee5\u5c3d\u91cf\u8003\u8651\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"strong"},"\u5c3e\u9012\u5f52"),"\u7684\u5f62\u5f0f"))))))}u.isMDXComponent=!0}}]);