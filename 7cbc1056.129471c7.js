(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{319:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(576)),c={id:"1.simpleFactory",title:"\u7b80\u5355\u5de5\u5382\u6a21\u5f0f",hide_title:!0},l={unversionedId:"designPattern/1.simpleFactory",id:"designPattern/1.simpleFactory",isDocsHomePage:!1,title:"\u7b80\u5355\u5de5\u5382\u6a21\u5f0f",description:"\u7b80\u5355\u5de5\u5382\u6a21\u5f0f",source:"@site/datastructure/designPattern/1.\u7b80\u5355\u5de5\u5382\u6a21\u5f0f.md",slug:"/designPattern/1.simpleFactory",permalink:"/datastructure/designPattern/1.simpleFactory",version:"current",sidebar:"docs2",previous:{title:"UML",permalink:"/datastructure/designPattern/uml"},next:{title:"\u5de5\u5382\u65b9\u6cd5\u6a21\u5f0f",permalink:"/datastructure/designPattern/2.factoryMethod"}},b=[{value:"\u7b80\u5355\u5de5\u5382\u6a21\u5f0f",id:"\u7b80\u5355\u5de5\u5382\u6a21\u5f0f",children:[]},{value:"\u6e90\u53d1\u95ee\u9898",id:"\u6e90\u53d1\u95ee\u9898",children:[]},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",children:[]},{value:"UML\u7c7b\u56fe",id:"uml\u7c7b\u56fe",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u4f18\u7f3a\u70b9",id:"\u4f18\u7f3a\u70b9",children:[]}],o={rightToc:b};function p(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u7b80\u5355\u5de5\u5382\u6a21\u5f0f"},"\u7b80\u5355\u5de5\u5382\u6a21\u5f0f"),Object(i.b)("h1",{id:"\u6e90\u53d1\u95ee\u9898"},"\u6e90\u53d1\u95ee\u9898"),Object(i.b)("p",null,"\u6bcf\u5f53\u6269\u5c55\u65b0\u4ea7\u54c1\u65f6\uff0c\u90fd\u9700\u8981\u5bf9\u5ba2\u6237\u7aef\u7a0b\u5e8f\u505a\u4fee\u6539\uff0c\u4ee5\u9002\u5e94\u65b0\u4ea7\u54c1\u3002"),Object(i.b)("h1",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),Object(i.b)("p",null,"\u7b80\u5355\u5de5\u5382\u6a21\u5f0f\u7531\u4e00\u4e2a\u5de5\u5382\u5bf9\u8c61\u51b3\u5b9a\u521b\u5efa\u51fa\u54ea\u4e00\u79cd\u4ea7\u54c1\u7c7b\u7684\u5b9e\u4f8b"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u5b9a\u4e49\u4e86\u4e00\u4e2a\u521b\u5efa\u5bf9\u8c61\u7684\u7c7b\uff0c\u7531\u8fd9\u4e2a\u7c7b\u6765\u5c01\u88c5\u5b9e\u4f8b\u5316\u5bf9\u8c61\u7684\u884c\u4e3a(\u4ee3\u7801)")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u5de5\u5382\u6a21\u5f0f\u60f3\u8981 -> \u4e00\u4e2a\u96c6\u4e2dnew\u5bf9\u8c61\u7684\u5730\u65b9\uff0c\u4e00\u4e2a\u96c6\u4e2d\u5b9e\u4f8b\u5316\u5bf9\u8c61\u7684\u5730\u65b9")),Object(i.b)("p",null,"\u5ba2\u6237\u7aef\u76f4\u63a5\u627e\u5de5\u5382\u8981\u65b0\u4ea7\u54c1\uff0c\u5c06\u6dfb\u52a0\u65b0\u4ea7\u54c1\u7684\u4ee3\u7801\u8f6c\u79fb\u5230\u7b80\u5355\u5de5\u5382\u91cc\u505a"),Object(i.b)("p",null,"\u5f53\u8981\u7528\u5230\u5927\u91cf\u7684\u521b\u5efa\u67d0\u79cd\u3001\u67d0\u7c7b\u6216\u67d0\u6279\u5bf9\u8c61\u65f6\uff0c\u5c31\u4f1a\u7528\u5230\u7b80\u5355\u5de5\u5382\u6a21\u5f0f"),Object(i.b)("h1",{id:"uml\u7c7b\u56fe"},"UML\u7c7b\u56fe"),Object(i.b)("p",null,Object(i.b)("img",{src:n(996).default})),Object(i.b)("h1",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u9700\u6c42\uff1a\u8ba2\u8d2d\u62ab\u8428",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u62ab\u8428\u7684\u79cd\u7c7b\u5f88\u591a(GreekPizz\u3001 CheesePizz\u7b49)"),Object(i.b)("li",{parentName:"ul"},"\u62ab\u8428\u7684\u5236\u4f5c\u6d41\u7a0b\u6709",Object(i.b)("inlineCode",{parentName:"li"},"prepare"),"\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"bake"),"\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"cut"),"\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"box")),Object(i.b)("li",{parentName:"ul"},"\u5b8c\u6210\u62ab\u8428\u5e97\u8ba2\u8d2d\u529f\u80fd")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u601d\u8def"),Object(i.b)("p",{parentName:"li"},"\u628a\u521b\u5efaPizza\u5bf9\u8c61\u5c01\u88c5\u5230\u4e00\u4e2a\u7c7b\u4e2d\uff0c\u5f53\u6709\u65b0\u7684Pizza\u79cd\u7c7b\u65f6\uff0c\u53ea\u9700\u8981\u4fee\u6539\u8be5\u7c7b\u5c31\u884c\u4e86\uff0c\u5176\u4ed6\u521b\u5efaPizza\u5bf9\u8c61\u7684\u4ee3\u7801\u5c31\u4e0d\u9700\u8981\u4fee\u6539\u4e86")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u521b\u5efa\u5de5\u5382\u7c7b",Object(i.b)("inlineCode",{parentName:"p"},"SimpleFactory"),"\uff0c\u6240\u6709\u7684",Object(i.b)("inlineCode",{parentName:"p"},"OrderPizza"),"\u76f4\u63a5\u627e\u5de5\u5382\u8981\u62ab\u8428"))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u6709\u4e00\u4e2a\u62ab\u8428\u5e97",Object(i.b)("inlineCode",{parentName:"li"},"PizzaStore"),"\uff0c\u5b83\u53ef\u4ee5\u4e3a\u5ba2\u4eba\u8ba2\u6307\u5b9a\u7c7b\u578b\u7684\u62ab\u8428",Object(i.b)("inlineCode",{parentName:"li"},"orderPizza(String type)"),"\u65b9\u6cd5\uff0c\u5728",Object(i.b)("inlineCode",{parentName:"li"},"Pizza"),"\u88ab\u505a\u51fa\u6765\u4e4b\u524d\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"Pizza"),"\u90fd\u662f\u62bd\u8c61\u7684\uff0c\u4e0d\u77e5\u9053\u65f6\u8089\u677e\u62ab\u8428\u8fd8\u662f\u5e0c\u814a\u62ab\u8428",Object(i.b)("img",{src:n(997),style:{zoom:"67%"}}))),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"StaticSimplePizzaFactory"),"(\u5f53\u6210SimplePizzaFactory\u5c31\u884c\u4e86\uff0c\u53ea\u662f\u65b9\u6cd5\u6539\u6210\u4e86\u9759\u6001\u7684)\u53ef\u4ee5\u751f\u4ea7\u62ab\u8428",Object(i.b)("inlineCode",{parentName:"li"},"static Pizza createPizza(String type)"),"\u65b9\u6cd5\uff0c\u6839\u636e",Object(i.b)("inlineCode",{parentName:"li"},"String type"),"\u751f\u4ea7\u5177\u4f53\u7684Pizza\uff08\u7ee7\u627f\u62bd\u8c61\u7c7b",Object(i.b)("inlineCode",{parentName:"li"},"Pizza"),"\u7684\u5177\u4f53\u62ab\u8428\u7c7b\uff09")),Object(i.b)("img",{src:n(998),style:{zoom:"67%"}}),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"\u6d4b\u8bd5\u8c03\u7528"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'PizzaStore store = new PizzaStore();\nstore.orderPizza("cheese")\n')))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u4eca\u540e\u51fa\u73b0\u65b0\u7684\u62ab\u8428\u54c1\u79cd\u7684\u65f6\u5019\uff0c\u53ea\u9700\u8981\u4fee\u6539",Object(i.b)("inlineCode",{parentName:"strong"},"StaticSimpleFactory"),"\u800c\u4e0d\u9700\u8981\u4fee\u6539PizzaStore(Client\u5ba2\u6237\u7aef)\u7684\u4ee3\u7801")),Object(i.b)("h1",{id:"\u4f18\u7f3a\u70b9"},"\u4f18\u7f3a\u70b9"))}p.isMDXComponent=!0},576:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,m=u["".concat(c,".").concat(s)]||u[s]||d[s]||i;return n?a.a.createElement(m,l(l({ref:t},o),{},{components:n})):a.a.createElement(m,l({ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=s;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var o=2;o<i;o++)c[o]=n[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},996:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/7-cba1814dbf758d103f3da3b91d122656.png"},997:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/5-31dc2d7d33592c6322b671591a60ff07.png"},998:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/6-49ba1a36a8bf8b375e4dd636c6494695.png"}}]);