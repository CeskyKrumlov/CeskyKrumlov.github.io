(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{153:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),c=(r(0),r(350)),i={id:"3.abstractFactory",title:"\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f",hide_title:!0},o={unversionedId:"designPattern/3.abstractFactory",id:"designPattern/3.abstractFactory",isDocsHomePage:!1,title:"\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f",description:"\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f Abstract Factory",source:"@site/datastructure/designPattern/3.\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f.md",slug:"/designPattern/3.abstractFactory",permalink:"/datastructure/designPattern/3.abstractFactory",version:"current",sidebar:"docs2",previous:{title:"\u5de5\u5382\u65b9\u6cd5\u6a21\u5f0f",permalink:"/datastructure/designPattern/2.factoryMethod"},next:{title:"\u751f\u6210\u5668\u6a21\u5f0f",permalink:"/datastructure/designPattern/4.builder"}},b=[{value:"\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f Abstract Factory",id:"\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f-abstract-factory",children:[{value:"\u6e90\u53d1\u95ee\u9898",id:"\u6e90\u53d1\u95ee\u9898",children:[]},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",children:[]},{value:"UML\u7c7b\u56fe",id:"uml\u7c7b\u56fe",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u4f18\u7f3a\u70b9",id:"\u4f18\u7f3a\u70b9",children:[]}]}],l={rightToc:b};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f-abstract-factory"},"\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f Abstract Factory"),Object(c.b)("h2",{id:"\u6e90\u53d1\u95ee\u9898"},"\u6e90\u53d1\u95ee\u9898"),Object(c.b)("p",null,"\u7cfb\u7edf\u7531\u4e0d\u540c\u7c7b\u578b\u7684\u5bf9\u8c61\u6784\u6210\uff0c\u6bcf\u79cd\u7c7b\u578b\u4e0b\u53c8\u53ef\u5206\u4e3a\u4e0d\u540c\u578b\u53f7\u3002\u7cfb\u7edf\u5728\u5efa\u7acb\u65f6\uff0c\u4ece\u6bcf\u79cd\u7c7b\u578b\u4e2d\u9009\u62e9\u4e00\u79cd\u578b\u53f7\u5bf9\u8c61\u8fdb\u884c\u521b\u5efa\uff1b\u5bf9\u4e8e\u591a\u79cd\u7ec4\u5408\u521b\u5efa\u800c\u8a00\uff0c\u5e0c\u671b\u80fd\u7528\u7edf\u4e00\u7684\u65b9\u5f0f\u6765\u64cd\u4f5c\u3002"),Object(c.b)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),Object(c.b)("p",null,"AbstractProductA\u3001AbstractProductB\u4e3a\u62bd\u8c61\u7c7b\uff0c\u4ee3\u8868\u4e24\u7c7b\u4ea7\u54c1\u7c7b\u578b\uff0c\u4ed6\u4eec\u5206\u522b\u6d3e\u751f\u4e86\u76f8\u5e94\u7684\u5177\u4f53\u578b\u53f7\u4ea7\u54c1\u3002AbstractFactory\u4e3a\u62bd\u8c61\u5de5\u7a0b\uff0c\u89c4\u5b9a\u4e86\u7ec4\u5408\u521b\u5efa\u4ea7\u54c1\u7684\u7edf\u4e00\u63a5\u53e3\uff0c\u521b\u5efa\u7684\u8fc7\u7a0b\u5728\u5177\u4f53\u5de5\u5382\u5f53\u4e2d\u5b8c\u6210\uff0c\u56fe\u4e2d\u7528\u4f9d\u8d56\u5173\u7cfb\u8868\u793a\u5177\u4f53\u5de5\u5382\u5bf9\u5177\u4f53\u4ea7\u54c1\u7684\u521b\u5efa\u3002Client\u4e3a\u5ba2\u6237\u7aef\u8c03\u7528\u4ee3\u7801\uff0c\u5b83\u53ea\u4e0e\u62bd\u8c61\u5de5\u5382\u548c\u62bd\u8c61\u4ea7\u54c1\u7c7b\u5b58\u5728\u5173\u8054\u5173\u7cfb\uff0c\u4ee3\u8868\u4e86\u5ba2\u6237\u7aef\u9488\u5bf9\u62bd\u8c61\u7c7b\u63a5\u53e3\u8fdb\u884c\u7f16\u7a0b\uff0c\u5373\u901a\u8fc7\u62bd\u8c61\u5de5\u5382\u7c7b\u7684\u58f0\u540d\u5f15\u7528\u5177\u4f53\u5de5\u5382\u6765\u7ec4\u5408\u521b\u5efa\u4ea7\u54c1\uff0c\u521b\u5efa\u7684\u5177\u4f53\u4ea7\u54c1\u4e5f\u88ab\u5bf9\u5e94\u7684\u62bd\u8c61\u4ea7\u54c1\u7c7b\u7684\u58f0\u540d\u5f15\u7528\u3002"),Object(c.b)("p",null,"\u7cfb\u7edf\u662f\u7531\u5bf9\u8c61\u6784\u6210\u7684\uff0c\u5f53\u7cfb\u7edf\u6269\u5c55\u65f6\uff0c\u5fc5\u7136\u9700\u8981\u878d\u5165\u65b0\u7684\u5bf9\u8c61\u3002\u5982\u679c\u80fd\u5728\u521b\u5efa\u65b0\u5bf9\u8c61\u7684\u540c\u65f6\u53c8\u4e0d\u9700\u8981\u5bf9\u539f\u7cfb\u7edf\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\u5c31\u662f\u521b\u5efa\u578b\u6a21\u5f0f\u9700\u8981\u89e3\u51b3\u7684\u4e3b\u8981\u95ee\u9898\u3002\u7136\u800c\u89e3\u51b3\u65b9\u6848\u5e76\u4e0d\u552f\u4e00\uff0c\u56e0\u4e3a\u5bf9\u8c61\u7684\u521b\u5efa\u3001\u88c5\u914d\u3001\u4f7f\u7528\u7684\u4e0d\u540c\u7684\u5e94\u7528\u73af\u5883\u4e2d\u8981\u6c42\u4e0d\u540c\uff0c\u5bf9\u8fd9\u4e9b\u8981\u6c42\u8fdb\u884c\u5f52\u7c7b\uff0c\u5c31\u5f62\u6210\u4e86\u591a\u79cd\u521b\u5efa\u5bf9\u8c61\u7684\u6a21\u5f0f\u3002"),Object(c.b)("p",null,"\u5f00\u95ed\u539f\u5219\u3001\u7ec4\u5408/\u805a\u5408\u539f\u5219\u5728\u521b\u5efa\u578b\u6a21\u5f0f\u4e2d\u7684\u62bd\u8c61\u5de5\u5382\u3001\u751f\u6210\u5668\u3001\u539f\u578b\u6a21\u5f0f\u4e2d\u5e94\u7528\uff0c\u4f7f\u539f\u6709\u7cfb\u7edf\u5728\u4e0d\u7528\u6539\u53d8\u4ee3\u7801\u7684\u60c5\u51b5\u4e0b\u80fd\u591f\u4ea7\u751f\u65b0\u5bf9\u8c61\u7684\u8981\u6c42"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("strong",{parentName:"li"},"\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f\uff1a\u5b9a\u4e49\u4e86\u4e00\u4e2a\u63a5\u53e3\u7528\u4e8e\u521b\u5efa\u76f8\u5173\u6216\u6709\u4f9d\u8d56\u5173\u7cfb\u7684\u5bf9\u8c61\u7c07\uff0c\u800c\u65e0\u9700\u6307\u660e\u5177\u4f53\u7c7b")),Object(c.b)("li",{parentName:"ol"},"\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f\u53ef\u4ee5\u5c06",Object(c.b)("strong",{parentName:"li"},"\u7b80\u5355\u5de5\u5382\u6a21\u5f0f"),"\u548c",Object(c.b)("strong",{parentName:"li"},"\u5de5\u5382\u65b9\u6cd5\u6a21\u5f0f"),"\u8fdb\u884c\u6574\u5408\u3002"),Object(c.b)("li",{parentName:"ol"},"\u4ece\u8bbe\u8ba1\u5c42\u9762\u770b\uff0c\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f\u5c31\u662f\u5bf9\u7b80\u5355\u5de5\u5382\u6a21\u5f0f\u7684\u6539\u8fdb\uff08\u6216\u8005\u79f0\u4e3a\u8fdb\u4e00\u6b65\u7684\u62bd\u8c61\uff09"),Object(c.b)("li",{parentName:"ol"},"\u5c06\u5de5\u5382\u62bd\u8c61\u4e3a\u4e24\u5c42\uff0cAbsFactory(\u62bd\u8c61\u5de5\u5382)\u548c\u5177\u4f53\u5b9e\u73b0\u7684\u5de5\u5382\u5b50\u7c7b\u3002\u7a0b\u5e8f\u5458\u53ef\u4ee5\u6839\u636e\u521b\u5efa\u5bf9\u8c61\u7c7b\u578b\u4f7f\u7528\u5bf9\u5e94\u7684\u5de5\u5382\u5b50\u7c7b\u3002\u8fd9\u6837\u5c06\u5355\u5de5\u5382\u7c7b\u7f16\u7a0b",Object(c.b)("strong",{parentName:"li"},"\u5de5\u5382\u7c07"),"\uff0c\u66f4\u5229\u4e8e\u4ee3\u7801\u7684\u7ef4\u62a4\u548c\u6269\u5c55\u3002")),Object(c.b)("h2",{id:"uml\u7c7b\u56fe"},"UML\u7c7b\u56fe"),Object(c.b)("p",null,Object(c.b)("img",{alt:"img",src:r(498).default})),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Client\u4e2d\u7684\u4ee3\u7801\u4e0d\u80fd\u505a\u4efb\u4f55\u4fee\u6539"))),Object(c.b)("p",null,"Client\u63a5\u89e6\u7684\u90fd\u662f\u62bd\u8c61\u7c7b\uff0c\u770b\u4e0d\u5230\u5177\u4f53\u7c7b\uff0c",Object(c.b)("strong",{parentName:"p"},"\u4ee5\u6b64\u5229\u7528\u62bd\u8c61\u7c7b\u7684\u53ef\u66ff\u6362\u6027\u548c\u591a\u6001\u6027\uff0c\u5b9e\u73b0\u5f00\u95ed\u539f\u5219")),Object(c.b)("h2",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(c.b)("h2",{id:"\u4f18\u7f3a\u70b9"},"\u4f18\u7f3a\u70b9"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u4f18\u70b9",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u6ee1\u8db3\u5f00\u95ed\u539f\u5219\uff0c\u53ef\u4ee5\u6dfb\u52a0\u65b0\u7684\u578b\u53f7"))),Object(c.b)("li",{parentName:"ul"},"\u7f3a\u70b9",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u4e0d\u80fd\u6dfb\u52a0\u65b0\u7684\u7c7b\u578b\uff0c\u53ea\u80fd\u4e3a\u73b0\u6709\u7c7b\u578b\u6dfb\u52a0\u65b0\u7684\u578b\u53f7")))))}u.isMDXComponent=!0},350:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||s[d]||c;return r?a.a.createElement(m,o(o({ref:t},l),{},{components:r})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<c;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},498:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/1-3cee9ec6920b3cf57170bd1eab892536.png"}}]);