(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{262:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(0),r(366)),c={id:"10.decorator",title:"\u88c5\u9970\u8005\u6a21\u5f0f",hide_title:!0},i={unversionedId:"designPattern/10.decorator",id:"designPattern/10.decorator",isDocsHomePage:!1,title:"\u88c5\u9970\u8005\u6a21\u5f0f",description:"Decorator\u88c5\u9970\u8005\u6a21\u5f0f",source:"@site/datastructure/designPattern/10.\u88c5\u9970\u8005\u6a21\u5f0f.md",slug:"/designPattern/10.decorator",permalink:"/datastructure/designPattern/10.decorator",version:"current",sidebar:"docs2",previous:{title:"\u7ec4\u5408\u6a21\u5f0f",permalink:"/datastructure/designPattern/9.composite"},next:{title:"\u6865\u63a5\u6a21\u5f0f",permalink:"/datastructure/designPattern/11.bridgePatterm"}},u=[{value:"Decorator\u88c5\u9970\u8005\u6a21\u5f0f",id:"decorator\u88c5\u9970\u8005\u6a21\u5f0f",children:[]},{value:"\u6e90\u53d1\u95ee\u9898",id:"\u6e90\u53d1\u95ee\u9898",children:[]},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",children:[]},{value:"UML\u7c7b\u56fe",id:"uml\u7c7b\u56fe",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u4f18\u7f3a\u70b9",id:"\u4f18\u7f3a\u70b9",children:[]}],l={rightToc:u};function p(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"decorator\u88c5\u9970\u8005\u6a21\u5f0f"},"Decorator\u88c5\u9970\u8005\u6a21\u5f0f"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"\u5b9a\u4e49\uff1a\u52a8\u6001\u5730\u7ed9\u4e00\u4e2a\u5bf9\u8c61\u6dfb\u52a0\u4e00\u4e9b\u989d\u5916\u7684\u804c\u8d23\u3002\u5c31\u589e\u52a0\u529f\u80fd\u6765\u8bf4\uff0cDecorator\u6a21\u5f0f\u76f8\u6bd4\u751f\u6210\u5b50\u7c7b\u66f4\u52a0\u7075\u6d3b\u3002")),Object(a.b)("h1",{id:"\u6e90\u53d1\u95ee\u9898"},"\u6e90\u53d1\u95ee\u9898"),Object(a.b)("p",null,"\u5bf9\u4e8e\u4e00\u4e2a\u5bf9\u8c61\u6dfb\u52a0\u989d\u5916\u7684\u88c5\u9970\uff0c\u4f46\u5982\u679c\u88c5\u9970\u7684\u7ec4\u5408\u65b9\u5f0f\u8f83\u591a\uff0c\u91c7\u7528\u7c7b\u5b9a\u4e49\u7684\u65b9\u5f0f\u8868\u8fbe\u88c5\u9970\u6548\u679c\uff0c\u5219\u7c7b\u7684\u6570\u91cf\u4f1a\u6fc0\u589e"),Object(a.b)("h1",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),Object(a.b)("p",null,"\u91c7\u7528\u7ec4\u5408\u65b9\u5f0f\u6765\u8868\u8fbe\u88c5\u9970\u6548\u679c\u7684\u89e3\u51b3\u65b9\u6848\u3002\u65b9\u6848\u7684\u57fa\u672c\u601d\u60f3\u662f\uff0c\u8bb2\u9700\u8981\u88c5\u9970\u7684\u7c7b\u5b9a\u4e49\u4e3a\u62bd\u8c61\u7c7bDecorator\uff0c\u5728\u6a21\u5f0f\u7ed3\u6784\u4e2d\u5f15\u5165\u7ec4\u6210\u6a21\u5f0f\u5b50\u7ed3\u6784\uff0cDecorator\u53ef\u4ee5\u770b\u4f5c\u662f\u7ec4\u6210\u6a21\u5f0f\u7684Composite\u7c7b\uff0c\u800c\u9700\u8981\u88c5\u9970\u7684\u7c7bConcreateComponent\u770b\u4f5c\u662f\u7ec4\u6210\u6a21\u5f0f\u7684Leaf\uff0c\u88c5\u9970\u7c7bConcreteDecoratorA\u3001ConcreteDecoratorB\u662fDecorator\u7684\u5b50\u7c7b\u3002\u8fd9\u79cd\u8bbe\u8ba1\u53ef\u4f7f\u4efb\u610f\u88c5\u9970\u7c7b\u90fd\u53ef\u770b\u4f5c\u7ec4\u5408\u7c7b\uff0c\u53ef\u5411\u5176\u5185\u90e8\u6dfb\u52a0\u5176\u4ed6\u88c5\u9970\u7c7b\u548c\u9700\u8981\u88c5\u9970\u7684\u7c7b\u3002"),Object(a.b)("p",null,"\u5728\u52a8\u6001\u7684\u5bf9\u8c61\u5c42\u9762\uff0c\u88c5\u9970\u5bf9\u8c61\u53ef\u6784\u6210\u94fe\u8868\uff08\u6811\uff09\u7ed3\u6784\uff0c\u800c\u9700\u8981\u88c5\u9970\u7684\u7c7b\u5bf9\u8c61\u662f\u94fe\u8868\u7684\u6700\u540e\u4e00\u4e2a\u8282\u70b9(\u6811\u7684\u53f6\u5b50\u8282\u70b9)\u3002\u5411\u5c42\u6b21\u8f83\u9ad8\u7684\u88c5\u9970\u5bf9\u8c61\u53d1\u9001\u6d88\u606f\uff0c\u6d88\u606f\u4f1a\u6cbf\u7740\u94fe\u8868(\u6811)\u4f20\u64ad\u3002\u5728\u6d88\u606f\u4f20\u64ad\u8fc7\u7a0b\u4e2d\uff0c\u88c5\u9970\u6548\u679c\u529f\u80fd\u88ab\u4ee5\u6b64\u8c03\u7528"),Object(a.b)("p",null,"\u4eff\u4f5b\u4e00\u4e2a\u4fc4\u7f57\u65af\u5957\u5a03"),Object(a.b)("h1",{id:"uml\u7c7b\u56fe"},"UML\u7c7b\u56fe"),Object(a.b)("p",null,Object(a.b)("img",{alt:"image-20200414213039008",src:r(643).default})),Object(a.b)("h1",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(a.b)("h1",{id:"\u4f18\u7f3a\u70b9"},"\u4f18\u7f3a\u70b9"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u4f18\u70b9\n\u5f88\u5bb9\u6613\u4e3a\u9700\u8981\u88c5\u9970\u7684\u7c7b\u6dfb\u52a0\u88c5\u9970\uff0c\u770b\u8d77\u6765\u597d\u50cf\u5b9a\u4e49\u4e86\u65b0\u7c7b\uff0c\u5e76\u4e14\u88c5\u9970\u65b9\u5f0f\u53ef\u4ee5\u81ea\u7531\u7ec4\u5408\n\u88c5\u9970\u5bf9\u8c61\u548c\u9700\u8981\u88c5\u9970\u7684\u5bf9\u8c61\u5177\u6709\u5171\u540c\u7684\u64cd\u4f5c\u63a5\u53e3"),Object(a.b)("li",{parentName:"ul"},"\u7f3a\u70b9\n\u548c\u7ec4\u6210\u6a21\u5f0f\u7c7b\u4f3c")))}p.isMDXComponent=!0},366:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=p(r),s=n,f=d["".concat(c,".").concat(s)]||d[s]||b[s]||a;return r?o.a.createElement(f,i(i({ref:t},l),{},{components:r})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},643:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/14-978c51f9bffd3323b5ce33424b4260ac.png"}}]);