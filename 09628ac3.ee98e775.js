(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{572:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=p(a),O=n,u=m["".concat(b,".").concat(O)]||m[O]||j[O]||l;return a?r.a.createElement(u,c(c({ref:t},i),{},{components:a})):r.a.createElement(u,c({ref:t},i))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=O;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var i=2;i<l;i++)b[i]=a[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},667:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/1-fa74f4194459e6383c3eae21f9785599.png"},668:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/2-93936c5fc62b1276324215f18355ebc3.png"},85:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),l=(a(0),a(572)),b={id:"1.jvm",title:"\u524d\u8a00",hide_title:!0},c={unversionedId:"jvm/1.jvm",id:"jvm/1.jvm",isDocsHomePage:!1,title:"\u524d\u8a00",description:"\u524d\u8a00",source:"@site/docs/jvm/1.jvm\u4f53\u7cfb\u7ed3\u6784.md",slug:"/jvm/1.jvm",permalink:"/docs/jvm/1.jvm",version:"current",sidebar:"someSidebar",previous:{title:"Optional\u7c7b",permalink:"/docs/javase/9.optionalClass"},next:{title:"Class \u6587\u4ef6\u7ed3\u6784",permalink:"/docs/jvm/2.0.classFile"}},o=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[]},{value:"JVM\u7684\u4f4d\u7f6e",id:"jvm\u7684\u4f4d\u7f6e",children:[]},{value:"JVM\u4f53\u7cfb\u7ed3\u6784\u56fe",id:"jvm\u4f53\u7cfb\u7ed3\u6784\u56fe",children:[]}],i={rightToc:o};function p(e){var t=e.components,b=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},i,b,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"\u524d\u8a00"},"\u524d\u8a00"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u51e0\u9053\u9762\u8bd5\u9898")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\u8bf7\u8c08\u8c08\u4f60\u5bf9JVM\u7684\u7406\u89e3\uff0cJDK8\u7684\u865a\u62df\u673a\u6709\u4ec0\u4e48\u66f4\u65b0\uff1f"),Object(l.b)("li",{parentName:"ol"},"\u4ec0\u4e48\u662fOOM\uff1f\u4ec0\u4e48\u662fStackOverFlowError\uff1f\u6709\u54ea\u4e9b\u65b9\u6cd5\u5206\u6790\uff1f"),Object(l.b)("li",{parentName:"ol"},"JVM\u7684\u5e38\u7528\u53c2\u6570\u8c03\u4f18\u4f60\u77e5\u9053\u54ea\u4e9b\uff1f"),Object(l.b)("li",{parentName:"ol"},"\u5185\u5b58\u5feb\u7167\u6293\u53d6\u548cMAT\u5206\u6790DUMP\u6587\u4ef6\u4f60\u4e86\u89e3\u5417\uff1f"),Object(l.b)("li",{parentName:"ol"},"\u8c08\u8c08\u4f60\u5bf9\u7c7b\u52a0\u8f7d\u5668\u7684\u7406\u89e3"),Object(l.b)("li",{parentName:"ol"},"\u5806\u91cc\u9762\u7684\u5206\u533a\uff1a",Object(l.b)("inlineCode",{parentName:"li"},"Eden"),"\u3001",Object(l.b)("inlineCode",{parentName:"li"},"Survival from to"),"\u3001",Object(l.b)("inlineCode",{parentName:"li"},"\u8001\u5e74\u4ee3"),"\uff0c\u5404\u81ea\u6709\u4ec0\u4e48\u7279\u70b9\uff1f"),Object(l.b)("li",{parentName:"ol"},"GC\u7684\u4e09\u79cd\u6536\u96c6\u65b9\u5f0f\uff1a",Object(l.b)("inlineCode",{parentName:"li"},"\u6807\u8bb0\u6e05\u9664"),"\u3001",Object(l.b)("inlineCode",{parentName:"li"},"\u6807\u8bb0\u6574\u7406"),"\u3001",Object(l.b)("inlineCode",{parentName:"li"},"\u590d\u5236\u7b97\u6cd5"),"\u7684\u539f\u7406\u548c\u7279\u70b9\uff0c\u5206\u522b\u7528\u5728\u4ec0\u4e48\u5730\u65b9\uff1f")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u9700\u8981\u4e86\u89e3\u7684\u6982\u5ff5")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"JVM\u7684\u4f4d\u7f6e"),Object(l.b)("li",{parentName:"ol"},"JVM\u7684\u4f53\u7cfb\u7ed3\u6784"),Object(l.b)("li",{parentName:"ol"},"\u7c7b\u52a0\u8f7d\u5668"),Object(l.b)("li",{parentName:"ol"},"\u53cc\u4eb2\u59d4\u6d3e\u673a\u5236"),Object(l.b)("li",{parentName:"ol"},"\u6c99\u7bb1\u5b89\u5168\u673a\u5236"),Object(l.b)("li",{parentName:"ol"},"Native\u2014\u2014 JNI(Java Native Interface) & Native Method Stack"),Object(l.b)("li",{parentName:"ol"},"PC\u5bc4\u5b58\u5668"),Object(l.b)("li",{parentName:"ol"},"\u65b9\u6cd5\u53bb"),Object(l.b)("li",{parentName:"ol"},"\u6808"),Object(l.b)("li",{parentName:"ol"},"\u4e09\u79cdJVM"),Object(l.b)("li",{parentName:"ol"},"\u5806"),Object(l.b)("li",{parentName:"ol"},"\u65b0\u751f\u533a\u3001\u8001\u5e74\u533a\u3001\u6c38\u4e45\u533a"),Object(l.b)("li",{parentName:"ol"},"\u5806\u5185\u5b58\u8c03\u4f18"),Object(l.b)("li",{parentName:"ol"},"GC\u5783\u573e\u56de\u6536"),Object(l.b)("li",{parentName:"ol"},"JMM")),Object(l.b)("h1",{id:"jvm\u7684\u4f4d\u7f6e"},"JVM\u7684\u4f4d\u7f6e"),Object(l.b)("img",{src:a(667).default,style:{zoom:"33%"}}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"JVM\u662f\u8fd0\u884c\u5728\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u7684\uff0c\u5b83\u4e0e\u786c\u4ef6\u6ca1\u6709\u76f4\u63a5\u4ea4\u4e92"))),Object(l.b)("h1",{id:"jvm\u4f53\u7cfb\u7ed3\u6784\u56fe"},"JVM\u4f53\u7cfb\u7ed3\u6784\u56fe"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u5982\u679c\u4e0d\u80fd\u95ed\u7740\u773c\u775b\u753b\u51faJVM\u7684\u4f53\u7cfb\u7ed3\u6784\u56fe\uff0c\u8bf4\u660eJVM\u8fd8\u6ca1\u6709\u5165\u95e8")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},".java\u6587\u4ef6\u901a\u8fc7Javac\u7f16\u8bd1\u4e3a.class\u6587\u4ef6")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},".class\u6587\u4ef6\u9001\u5165\u7c7b\u52a0\u8f7d\u5668\n.class\u6587\u4ef6\u53c8\u88abJVM\u4e2d\u7684\u89e3\u91ca\u5668\u7f16\u8bd1\u4e3a\u673a\u5668\u7801\u5728\u4e0d\u540c\u7684\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u6267\u884c\n\u6bcf\u79cd\u64cd\u4f5c\u7cfb\u7edf\u7684\u89e3\u91ca\u5668\u662f\u4e0d\u540c\u7684\uff0c\u4f46\u662f\u57fa\u4e8e\u4e0d\u540c\u89e3\u91ca\u5668\u5b9e\u73b0\u7684JVM\u662f\u76f8\u540c\u7684\uff0c",Object(l.b)("strong",{parentName:"p"},"\u8fd9\u662fJava\u8de8\u5e73\u53f0\u7684\u539f\u56e0"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"\u8fdb\u5165Java ",Object(l.b)("strong",{parentName:"p"},"\u8fd0\u884c\u65f6\u6570\u636e\u533a"),"\n",Object(l.b)("strong",{parentName:"p"},"\u7531\u4e8e\u8fd0\u884c\u65f6\u5728\u7c7b\u52a0\u8f7d\u5668\u4e4b\u540e\uff0c\u56e0\u6b64Runtime Exception\u4e0d\u53ef\u6355\u83b7"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"\u7ebf\u7a0b\u5171\u4eab\u533a\u57df"),"\uff1a"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u65b9\u6cd5\u533a Method Area \u2014\u2014 \u91cc\u9762\u6709\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60"),Object(l.b)("li",{parentName:"ul"},"\u5806 JVM Heap ",Object(l.b)("strong",{parentName:"li"},"\uff08\u4ea7\u751f\u5783\u573e\u7684\u4e3b\u8981\u533a\u57df\uff09")," \u65b0\u751f\u4ee3\u3001\u8001\u5e74\u4ee3\u7b49")),Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"\u7ebf\u7a0b\u79c1\u6709\u533a\u57df\uff1a\uff08\u4e00\u5b9a\u4e0d\u4f1a\u4ea7\u751f\u5783\u573e\uff09")," "),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u672c\u5730\u65b9\u6cd5\u6808 Native Method Stack"),Object(l.b)("li",{parentName:"ul"},"\u6808 JVM Stack\uff0c\u91cc\u9762\u662f\u6808\u5e27Stack Frame"),Object(l.b)("li",{parentName:"ul"},"\u7a0b\u5e8f\u8ba1\u6570\u5668"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"\u6267\u884c\u5f15\u64ce"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Java-In-Time Complier Java\u5373\u65f6\u7f16\u8bd1\u5668\uff0c\u5c06Java\u5b57\u8282\u7801\u7f16\u8bd1\u4e3a\u673a\u5668\u7801"),Object(l.b)("li",{parentName:"ul"},"GC\uff1a\u5783\u573e\u56de\u6536\u5668"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"JNI\uff1aJava Native Interface Java\u672c\u5730\u65b9\u6cd5\u63a5\u53e3\u8c03\u7528\u672c\u5730\u65b9\u6cd5\u5e93 Native Method Libraries\u5b9e\u73b0\u4e0e\u64cd\u4f5c\u7cfb\u7edf\u4ea4\u4e92"))),Object(l.b)("p",null,Object(l.b)("img",{alt:"image-20200615220111373",src:a(668).default})),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"JVM\u8c03\u4f18\u7edd\u5927\u591a\u6570\u96c6\u4e2d\u5728JVM Heap\u5806"))))}p.isMDXComponent=!0}}]);