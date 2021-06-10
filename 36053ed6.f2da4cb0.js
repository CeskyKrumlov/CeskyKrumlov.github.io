(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return o}));var a=n(2),r=n(6),i=(n(0),n(386)),c={id:"4.warp",title:"\u5305\u88c5\u7c7b",hide_title:!0},l={unversionedId:"javase/4.warp",id:"javase/4.warp",isDocsHomePage:!1,title:"\u5305\u88c5\u7c7b",description:"\u5305\u88c5\u7c7b",source:"@site/docs/javase/4.\u5305\u88c5\u7c7b.md",slug:"/javase/4.warp",permalink:"/docs/javase/4.warp",version:"current",sidebar:"someSidebar",previous:{title:"\u63a5\u53e3",permalink:"/docs/javase/3.interface"},next:{title:"\u6cdb\u578b",permalink:"/docs/javase/5.T"}},b=[{value:"\u5305\u88c5\u7c7b",id:"\u5305\u88c5\u7c7b",children:[{value:"\u88c5\u7bb1\u4e0e\u62c6\u7bb1",id:"\u88c5\u7bb1\u4e0e\u62c6\u7bb1",children:[]},{value:"\u81ea\u52a8\u88c5\u7bb1\u3001\u62c6\u7bb1",id:"\u81ea\u52a8\u88c5\u7bb1\u3001\u62c6\u7bb1",children:[]},{value:"\u57fa\u672c\u7c7b\u578b\u4e0e\u5b57\u7b26\u4e32\u4e4b\u95f4\u7684\u76f8\u4e92\u8f6c\u5316",id:"\u57fa\u672c\u7c7b\u578b\u4e0e\u5b57\u7b26\u4e32\u4e4b\u95f4\u7684\u76f8\u4e92\u8f6c\u5316",children:[]}]},{value:"\u7f13\u51b2\u6c60\uff08Cache\uff09",id:"\u7f13\u51b2\u6c60\uff08cache\uff09",children:[{value:"\u963f\u91cc\u5df4\u5df4\u7f16\u7a0b\u89c4\u8303\uff1a\u6bd4\u8f83\u76f8\u540c\u7c7b\u578b\u7684\u5305\u88c5\u7c7b\u5bf9\u8c61\u4e4b\u95f4\u503c\uff0c\u4f7f\u7528 equals \u65b9\u6cd5\uff0c\u800c\u4e0d\u662f<code>==</code>",id:"\u963f\u91cc\u5df4\u5df4\u7f16\u7a0b\u89c4\u8303\uff1a\u6bd4\u8f83\u76f8\u540c\u7c7b\u578b\u7684\u5305\u88c5\u7c7b\u5bf9\u8c61\u4e4b\u95f4\u503c\uff0c\u4f7f\u7528-equals-\u65b9\u6cd5\uff0c\u800c\u4e0d\u662f",children:[]}]}],p={rightToc:b};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u5305\u88c5\u7c7b"},"\u5305\u88c5\u7c7b"),Object(i.b)("h2",{id:"\u88c5\u7bb1\u4e0e\u62c6\u7bb1"},"\u88c5\u7bb1\u4e0e\u62c6\u7bb1"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u88c5\u7bb1\uff1a"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6784\u9020\u65b9\u6cd5",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Integer(int value)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Integer(String s)")))),Object(i.b)("li",{parentName:"ul"},"\u9759\u6001\u65b9\u6cd5\uff1a",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"static Integer valueOf(int i)")))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u62c6\u7bb1\uff1a"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6210\u5458\u65b9\u6cd5\uff1a",Object(i.b)("inlineCode",{parentName:"li"},"int intValue()"))))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testInteger() {\n    Integer value = new Integer(11);\n    Integer valueString = new Integer("12");\n    Integer valueStatic = Integer.valueOf(13);\n\n    System.out.println(value);\n    System.out.println(valueString);\n    System.out.println(valueStatic);\n\n    //\u62c6\u7bb1\n    int intValue = value.intValue();\n    System.out.println(intValue);\n}\n')),Object(i.b)("h2",{id:"\u81ea\u52a8\u88c5\u7bb1\u3001\u62c6\u7bb1"},"\u81ea\u52a8\u88c5\u7bb1\u3001\u62c6\u7bb1"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u81ea\u52a8\u88c5\u7bb1\u4e0e\u81ea\u52a8\u62c6\u7bb1\uff1a Since JDK 1.5\uff0c\u57fa\u672c\u7c7b\u578b\u7684\u6570\u636e\u548c\u5305\u88c5\u7c7b\u4e4b\u95f4\u53ef\u4ee5\u81ea\u52a8\u7684\u76f8\u4e92\u8f6c\u6362")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"/***\n* \u81ea\u52a8\u62c6\u7bb1\u4e0e\u81ea\u52a8\u88c5\u7bb1\n*      \u81ea\u52a8\u88c5\u7bb1\uff1a\u76f4\u63a5\u5c06int\u7c7b\u578b\u7684\u6574\u6570\u8d4b\u503c\u7ed9\u5305\u88c5\u7c7b\n*      \u81ea\u52a8\u62c6\u7bb1\uff1a\u5305\u88c5\u7c7b\u65e0\u6cd5\u76f4\u63a5\u53c2\u4e0e\u8fd0\u7b97\uff0c\u81ea\u52a8\u8f6c\u5316\u4e3a\u57fa\u672c\u6570\u636e\u7c7b\u578b\u5728\u8fdb\u884c\u8ba1\u7b97,\u7b97\u5b8c\u7684\u7ed3\u679c\u518d\u81ea\u52a8\u88c5\u7bb1\n*/\n@Test\npublic void testAutoWarp() {\n    //\u81ea\u52a8\u88c5\u7bb1\n    Integer in = 1;\n\n    //\u81ea\u52a8\u62c6\u7bb1\n    in = in + 2;\n\n    //ArrayList\u65e0\u6cd5\u5b58\u50a8\u57fa\u672c\u7c7b\u578b\uff0c\u4f46\u662f\u53ef\u4ee5\u5b58\u50a8\u5305\u88c5\u7c7b\n    ArrayList<Integer> list = new ArrayList<>();\n    //int -> Integer   --\x3e \u81ea\u52a8\u88c5\u7bb1\n    list.add(2);\n\n    //\u81ea\u52a8\u62c6\u7bb1\uff0cInteger -> int\n    int a = list.get(0);\n}\n")),Object(i.b)("h2",{id:"\u57fa\u672c\u7c7b\u578b\u4e0e\u5b57\u7b26\u4e32\u4e4b\u95f4\u7684\u76f8\u4e92\u8f6c\u5316"},"\u57fa\u672c\u7c7b\u578b\u4e0e\u5b57\u7b26\u4e32\u4e4b\u95f4\u7684\u76f8\u4e92\u8f6c\u5316"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"\u57fa\u672c\u7c7b\u578b -> \u5b57\u7b26\u4e32")),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"\u57fa\u672c\u7c7b\u578b\u7684\u503c+",Object(i.b)("inlineCode",{parentName:"li"},'""')),Object(i.b)("li",{parentName:"ol"},"\u5305\u88c5\u7c7b\u7684\u9759\u6001\u65b9\u6cd5",Object(i.b)("inlineCode",{parentName:"li"},"toString(\u53c2\u6570)")),Object(i.b)("li",{parentName:"ol"},"String\u7c7b\u7684\u9759\u6001\u65b9\u6cd5\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"valueOf(\u53c2\u6570)")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"\u5b57\u7b26\u4e32 -> \u57fa\u672c\u7c7b\u578b")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u4f7f\u7528\u5305\u88c5\u7c7b\u7684\u9759\u6001\u65b9\u6cd5",Object(i.b)("inlineCode",{parentName:"p"},"parseXxxx(\u201c\u6570\u503c\u7c7b\u578b\u7684\u5b57\u7b26\u4e32\u201d)"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},'Integer.parseInt("12");')))))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testStringTransferBasicType() {\n    int i1 = 100;\n    String s1 = i1 + "";\n    String string = Integer.toString(11);\n    String s = String.valueOf(13);\n\n    //100200\n    System.out.println(s1 + 200);\n    System.out.println(string + 200);\n    System.out.println(s + 200);\n\n    System.out.println("-----------------------------------------");\n\n    int i = Integer.parseInt("123");\n    System.out.println(i - 10);\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"100200\n11200\n13200\n-----------------------------------------\n113\n")),Object(i.b)("hr",null),Object(i.b)("h1",{id:"\u7f13\u51b2\u6c60\uff08cache\uff09"},"\u7f13\u51b2\u6c60\uff08Cache\uff09"),Object(i.b)("h2",{id:"\u963f\u91cc\u5df4\u5df4\u7f16\u7a0b\u89c4\u8303\uff1a\u6bd4\u8f83\u76f8\u540c\u7c7b\u578b\u7684\u5305\u88c5\u7c7b\u5bf9\u8c61\u4e4b\u95f4\u503c\uff0c\u4f7f\u7528-equals-\u65b9\u6cd5\uff0c\u800c\u4e0d\u662f"},"\u963f\u91cc\u5df4\u5df4\u7f16\u7a0b\u89c4\u8303\uff1a\u6bd4\u8f83\u76f8\u540c\u7c7b\u578b\u7684\u5305\u88c5\u7c7b\u5bf9\u8c61\u4e4b\u95f4\u503c\uff0c\u4f7f\u7528 equals \u65b9\u6cd5\uff0c\u800c\u4e0d\u662f",Object(i.b)("inlineCode",{parentName:"h2"},"==")),Object(i.b)("p",null,"\u5305\u88c5\u7c7b\u5bf9\u8c61\u539f\u672c\u662f\u5f15\u7528\u5bf9\u8c61\uff0c\u82e5\u4f7f\u7528 == \u53ea\u662f\u6bd4\u8f83\u4e24\u4e2a\u5f15\u7528\u53d8\u91cf\u662f\u5426\u6307\u5411\u76f8\u540c\u7684\u5bf9\u8c61\u3002\u5728JDK1.5\u4e4b\u540e\u6709\u4e86\u81ea\u52a8\u88c5\u7bb1\u3001\u62c6\u7bb1\u3002\u5bf9\u4e8e Integer \u5bf9\u8c61\u6765\u8bf4\uff0c",Object(i.b)("strong",{parentName:"p"},"\u521d\u59cb\u503c\u5728-128 ~ 127\u65f6\u4f1a\u5c06\u5bf9\u8c61\u653e\u5165\u7f13\u5b58\u6c60\uff08IntegerCache.cache\uff09\uff0c\u4e0b\u6b21\u8c03\u7528\u76f8\u540c\u7684\u503c\u5c06\u76f4\u63a5\u590d\u7528"),"\uff0c\u5728\u8be5\u533a\u95f4\u7684Integer \u5bf9\u8c61\u53ef\u76f4\u63a5\u8fdb\u884c\u5224\u8bfb"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u8be5\u533a\u95f4\u4ee5\u5916\u7684\u5bf9\u8c61\u5728 Heap \u4e0a\u4ea7\u751f\uff0c\u4e0d\u4f1a\u8fdb\u884c\u590d\u7528"),"\u3002\u6240\u4ee5\u63a8\u8350\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"p"}," equals")," \u65b9\u6cd5\u8fdb\u884c\u5224\u65ad\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"Integer a = 1;\nInteger b = 1;\n// \u8f93\u51fa ture\nSystem.out.println(a == b);\n\nInteger c = 123;\nInteger d = 123;\n// \u8f93\u5165 true\nSystem.out.println(c == d);\n\nInteger e = 129;\nInteger f = 129;\n// \u8f93\u5165 false\n")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u91cd\u8981")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Integer\u5305\u88c5\u7c7b\u6709IntegerCache\u7528\u4e8e\u7f13\u5b58Integer\u5bf9\u8c61\uff0c\u56fa\u5b9a\u8303\u56f4\u662f -128 ~ 127")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Byte \u5305\u88c5\u7c7b\u6709 ByteCache \u7528\u4e8e\u7f13\u5b58 Byte \u5bf9\u8c61\uff0c\u56fa\u5b9a\u8303\u56f4\u662f -128 ~ 127")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Short \u5305\u88c5\u7c7b\u6709 ShortCache \u7528\u4e8e\u7f13\u5b58 Short \u5bf9\u8c61\uff0c\u56fa\u5b9a\u8303\u56f4\u662f -128 ~ 127 ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Long \u5305\u88c5\u7c7b\u6709 LongCache \u7528\u4e8e\u7f13\u5b58 Long \u5bf9\u8c61\uff0c\u56fa\u5b9a\u8303\u56f4\u662f -128 ~ 127 ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Character \u5305\u88c5\u7c7b\u6709 CharacterCache \u7528\u4e8e\u7f13\u5b58 Character \u5bf9\u8c61\uff0c\u56fa\u5b9a\u8303\u56f4\u662f 0 ~ 127")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u9664\u4e86 IntegerCache \u5176\u4ed6\u5305\u88c5\u7c7b\u7684\u7f13\u5b58\u673a\u5236\u5747\u4e0d\u53ef\u4ee5\u6539\u53d8\u8303\u56f4\u3002"))))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u5177\u4f53\u53ef\u770b\u5bf9\u5e94\u5305\u88c5\u7c7b\u6e90\u7801\u4e2d\u7684",Object(i.b)("inlineCode",{parentName:"strong"},"valueOf()"),"\u65b9\u6cd5"))))}o.isMDXComponent=!0},386:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),u=o(n),O=a,s=u["".concat(c,".").concat(O)]||u[O]||m[O]||i;return n?r.a.createElement(s,l(l({ref:t},p),{},{components:n})):r.a.createElement(s,l({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=O;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<i;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);