(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{386:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),m=p(n),O=a,j=m["".concat(l,".").concat(O)]||m[O]||u[O]||b;return n?r.a.createElement(j,i(i({ref:t},o),{},{components:n})):r.a.createElement(j,i({ref:t},o))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,l=new Array(b);l[0]=O;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var o=2;o<b;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},438:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/10-b8d9cc576e454130bde8fcd3d07262ca.png"},439:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/13-311bfa3f70f80517bc62a97f2ac624ce.png"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),b=(n(0),n(386)),l={id:"6.heap",title:"\u5806(Heap)",hide_title:!0},i={unversionedId:"jvm/6.heap",id:"jvm/6.heap",isDocsHomePage:!1,title:"\u5806(Heap)",description:"\u4e09\u79cdJVM",source:"@site/docs/jvm/6.\u5806.md",slug:"/jvm/6.heap",permalink:"/docs/jvm/6.heap",version:"current",sidebar:"someSidebar",previous:{title:"\u6808(Stack)",permalink:"/docs/jvm/5.stack"},next:{title:"GC",permalink:"/docs/jvm/7.gc"}},c=[{value:"\u4e09\u79cdJVM",id:"\u4e09\u79cdjvm",children:[]},{value:"\u5806(Heap)",id:"\u5806heap",children:[{value:"\u65b0\u751f\u4ee3\u2014\u2014Eden\u3001SurvivorTo\u3001SurvivorFrom",id:"\u65b0\u751f\u4ee3eden\u3001survivorto\u3001survivorfrom",children:[]},{value:"\u8001\u5e74\u4ee3",id:"\u8001\u5e74\u4ee3",children:[]},{value:"\u6c38\u4e45\u4ee3\u3001\u5143\u7a7a\u95f4(JDK1.8)",id:"\u6c38\u4e45\u4ee3\u3001\u5143\u7a7a\u95f4jdk18",children:[]},{value:"\u5bf9\u4e8e\u65b9\u6cd5\u533a\u7684\u5b9e\u73b0\uff0c\u4e3a\u4ec0\u4e48\u4ece\u6c38\u4e45\u4ee3\u66f4\u6362\u5230\u5143\u7a7a\u95f4\uff1f",id:"\u5bf9\u4e8e\u65b9\u6cd5\u533a\u7684\u5b9e\u73b0\uff0c\u4e3a\u4ec0\u4e48\u4ece\u6c38\u4e45\u4ee3\u66f4\u6362\u5230\u5143\u7a7a\u95f4\uff1f",children:[]}]},{value:"\u5bf9\u8c61\u7ed3\u6784\u56fe",id:"\u5bf9\u8c61\u7ed3\u6784\u56fe",children:[]},{value:"JVM\u53c2\u6570\u8bbe\u7f6e",id:"jvm\u53c2\u6570\u8bbe\u7f6e",children:[{value:"\u4f8b\u9898\uff1a",id:"\u4f8b\u9898\uff1a",children:[]}]}],o={rightToc:c};function p(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,l,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"\u4e09\u79cdjvm"},"\u4e09\u79cdJVM"),Object(b.b)("blockquote",null,Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},"Sun\u516c\u53f8\u7684HotSpot"),Object(b.b)("li",{parentName:"ul"},"BEA\u516c\u53f8\u7684JRockit"),Object(b.b)("li",{parentName:"ul"},"IBM\u516c\u53f8\u7684J9VM"))),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),'\u279c  ~ java -version\njava version "1.8.0_251"\nJava(TM) SE Runtime Environment (build 1.8.0_251-b08)\nJava HotSpot(TM) 64-Bit Server VM (build 25.251-b08, mixed mode)\n')),Object(b.b)("h1",{id:"\u5806heap"},"\u5806(Heap)"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Heap\u5806\uff0c\u4e00\u4e2aJVM\u5b9e\u4f8b\u53ea\u5b58\u5728\u4e00\u4e2a\u5806\u5185\u5b58\uff0c\u5806\u5185\u5b58\u7684\u5927\u5c0f\u662f\u53ef\u4ee5\u8c03\u8282\u7684\uff0c\u7c7b\u52a0\u8f7d\u5668\u8bfb\u53d6\u4e86\u7c7b\u6587\u4ef6\u4e4b\u540e\uff0c\u9700\u8981\u628a\u7c7b\u3001\u65b9\u6cd5\u3001\u53d8\u91cf\u653e\u5230\u5806\u5185\u5b58\u4e2d\uff0c\u4fdd\u5b58\u6240\u6709\u5f15\u7528\u7c7b\u578b\u7684\u771f\u5b9e\u4fe1\u606f\uff0c\u4ee5\u65b9\u4fbf\u6267\u884c\uff0c\u5806\u5185\u5b58\u5206\u4e3a\u4e09\u90e8\u5206"),Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},"\u65b0\u751f\u4ee3 Young Generation Space\t\tYoung/New"),Object(b.b)("li",{parentName:"ul"},"\u8001\u5e74\u4ee3 Tenure Generation Space     Old/Tenure"),Object(b.b)("li",{parentName:"ul"},"\u6c38\u4e45\u4ee3 Permanent Space   Perm JDK 1.7   |    \u5143\u7a7a\u95f4  Metaspace JDK 1.8"))),Object(b.b)("p",null,Object(b.b)("img",{alt:"image-20200617134608969",src:n(438).default})),Object(b.b)("h2",{id:"\u65b0\u751f\u4ee3eden\u3001survivorto\u3001survivorfrom"},"\u65b0\u751f\u4ee3\u2014\u2014Eden\u3001SurvivorTo\u3001SurvivorFrom"),Object(b.b)("blockquote",null,Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},"JVM\u65b0\u521b\u5efa\u7684\u5bf9\u8c61\uff0c\u9664\u4e86\u5927\u5bf9\u8c61\u5916\uff0c\u90fd\u4f1a\u88ab\u5b58\u653e\u5728\u65b0\u751f\u4ee3\uff0c\u9ed8\u8ba4\u53601/3\u5806\u5185\u5b58\u7a7a\u95f4\u3002"),Object(b.b)("li",{parentName:"ul"},"\u7531\u4e8eJVM\u9891\u7e41\u521b\u5efa\u65b0\u5bf9\u8c61\uff0c\u6240\u4ee5\u65b0\u751f\u4ee3\u4f1a\u9891\u7e41\u89e6\u53d1MinorGC\u8fdb\u884c\u5783\u573e\u56de\u6536\u3002"),Object(b.b)("li",{parentName:"ul"},"\u65b0\u751f\u4ee3\u53c8\u5206\u4e3aEden\u3001SurvivorTo\u3001SurvivorFrom\uff0c",Object(b.b)("strong",{parentName:"li"},"\u8c01\u662f\u7a7a\u7684\u8c01\u5c31\u662fTo")),Object(b.b)("li",{parentName:"ul"},"\u7a7a\u95f4\u6bd4\u4f8b\uff1a Eden:From:To  =  8:1:1"))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"Eden\u4f0a\u7538\u56ed\u533a\uff1a")),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Java\u65b0\u521b\u5efa\u7684\u5bf9\u8c61\u9996\u5148\u4f1a\u88ab\u5b58\u653e\u5728Eden\u533a\uff0c\u5982\u679c\u65b0\u521b\u5efa\u7684\u5bf9\u8c61\u5c5e\u4e8e\u5927\u5bf9\u8c61\uff0c\u5219\u76f4\u63a5\u5206\u914d\u5230\u8001\u5e74\u4ee3\u3002\u5927\u5bf9\u8c61\u7684\u5b9a\u4e49\u548c\u5177\u4f53JVM\u7248\u672c\u3001\u5806\u5927\u5c0f\u548c\u5783\u573e\u56de\u6536\u7b56\u7565\u6709\u5173\uff0c\u4e00\u822c\u4e3a2KB~128KB\uff0c\u53ef\u4ee5\u901a\u8fc7",Object(b.b)("inlineCode",{parentName:"li"},"XX:PretenureSizeThreshold"),"\u8bbe\u7f6e\u5176\u5927\u5c0f\u3002"),Object(b.b)("li",{parentName:"ul"},"\u5728Eden\u533a\u7684\u5185\u5b58\u7a7a\u95f4\u4e0d\u8db3\u65f6\u4f1a\u89e6\u53d1",Object(b.b)("inlineCode",{parentName:"li"},"MinorGC")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"SurvivorTo\u533a S1:")),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u4fdd\u7559\u4e0a\u4e00\u6b21MinorGC\u65f6\u7684\u5e78\u5b58\u8005"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"SurvivorFrom\u533a S0\uff1a")),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5c06\u4e0a\u4e00\u6b21MinorGC\u7684\u5e78\u5b58\u8005\u4f5c\u4e3a\u8fd9\u4e00\u6b21MinorGC\u7684\u88ab\u626b\u63cf\u8005")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u5f53\u4f0a\u7538\u56ed\u7684\u7a7a\u95f4\u7528\u5b8c\u65f6\uff0c\u7a0b\u5e8f\u53c8\u9700\u8981\u521b\u5efa\u5bf9\u8c61\uff0cJVM\u7684\u5783\u573e \u56de\u6536\u5668\u5c06\u5bf9\u4f0a\u7538\u56ed\u533a\u8fdb\u884c\u5783\u573e\u56de\u6536(",Object(b.b)("inlineCode",{parentName:"strong"},"Minor GC"),")\u3002\u5c06\u4f0a\u7538\u56ed\u4e2d\u7684\u5269\u4f59\u5bf9\u8c61\u79fb\u52a8\u5230\u5e78\u5b580\u533a\uff0c\u82e5\u5e78\u5b580\u533a\u4e5f \u6ee1\u4e86\uff0c\u518d\u5bf9\u8be5\u533a\u8fdb\u884c\u5783\u573e\u56de\u6536\uff0c\u7136\u540e\u79fb\u52a8\u52301\u533a\uff0c\u90a3\u5982\u679c1\u533a\u4e5f\u6ee1\u4e86\u5462?(\u8fd9\u91cc\u5e78\u5b580\u533a\u548c1\u533a\u662f\u4e00\u4e2a\u4e92\u76f8 \u4ea4\u66ff\u7684\u8fc7\u7a0b)\u518d\u79fb\u52a8\u5230\u517b\u8001\u533a\uff0c\u82e5\u517b\u8001\u533a\u4e5f\u6ee1\u4e86\uff0c\u90a3\u4e48\u8fd9\u4e2a\u65f6\u5019\u5c06\u4ea7\u751fMajorGC(Full GC)\uff0c\u8fdb\u884c\u517b\u8001 \u533a\u7684\u5185\u5b58\u6e05\u7406\uff0c\u82e5\u517b\u8001\u533a\u6267\u884c\u4e86Full GC\u540e\u53d1\u73b0\u4f9d\u7136\u65e0\u6cd5\u8fdb\u884c\u5bf9\u8c61\u7684\u4fdd\u5b58\uff0c\u5c31\u4f1a\u4ea7\u751fOOM\u5f02\u5e38 \u201cOutOfMemoryError \u201d\u3002")),Object(b.b)("p",null,"\u5982\u679c\u51fa\u73b0 ",Object(b.b)("inlineCode",{parentName:"p"},"java.lang.OutOfMemoryError:java heap space"),"\u5f02\u5e38\uff0c\u8bf4\u660eJava\u865a\u62df\u673a\u7684\u5806\u5185\u5b58\u4e0d\u591f\uff0c\u539f\u56e0 \u5982\u4e0b:"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"Java\u865a\u62df\u673a\u7684\u5806\u5185\u5b58\u8bbe\u7f6e\u4e0d\u591f\uff0c\u53ef\u4ee5\u901a\u8fc7\u53c2\u6570 ",Object(b.b)("inlineCode",{parentName:"li"},"-Xms(\u521d\u59cb\u503c\u5927\u5c0f"),")\uff0c",Object(b.b)("inlineCode",{parentName:"li"},"-Xmx(\u6700\u5927\u5927\u5c0f)"),"\u6765\u8c03\u6574\u3002 "),Object(b.b)("li",{parentName:"ol"},"\u65b0\u751f\u4ee3\u7684\u5927\u5c0f\u53ef\u901a\u8fc7\u53c2\u6570",Object(b.b)("inlineCode",{parentName:"li"},"-Xmn"),"\u8bbe\u7f6e"),Object(b.b)("li",{parentName:"ol"},"\u4ee3\u7801\u4e2d\u521b\u5efa\u4e86\u5927\u91cf\u5927\u5bf9\u8c61\uff0c\u5e76\u4e14\u957f\u65f6\u95f4\u4e0d\u80fd\u88ab\u5783\u573e\u6536\u96c6\u5668\u6536\u96c6(\u5b58\u5728\u88ab\u5f15\u7528)\u6216\u8005\u6b7b\u5faa\u73af")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"\u65b0\u751f\u4ee3\u7684GC\u8fc7\u7a0b\u53eb\u505a",Object(b.b)("inlineCode",{parentName:"strong"},"MinorGC"),"\uff0c\u91c7\u7528",Object(b.b)("inlineCode",{parentName:"strong"},"\u590d\u5236\u7b97\u6cd5"),"\u5b9e\u73b0\uff0c\u5177\u4f53\u8fc7\u7a0b\u5982\u4e0b\uff1a"))),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u628a\u5728Eden\u533a\u548cSurvivorFrom\u533a\u4e2d\u5b58\u6d3b\u7684\u5bf9\u8c61\u8d4b\u503c\u5230SurvivorTo\u533a"),Object(b.b)("li",{parentName:"ul"},"\u5982\u679c\u67d0\u5bf9\u8c61\u7684\u5e74\u9f84\u8fbe\u5230\u8001\u5e74\u4ee3\u7684\u6807\u51c6\uff08\u5bf9\u8c61\u664b\u5347\u8001\u5e74\u4ee3\u7684\u6807\u51c6\u7531",Object(b.b)("inlineCode",{parentName:"li"},"XX:MaxTenuringThreshold"),"\u8bbe\u7f6e\uff0c\u9ed8\u8ba4\u4e3a",Object(b.b)("inlineCode",{parentName:"li"},"15"),"\u6b21\uff0c\u56e0\u4e3a\u5bf9\u8c61\u5934\u4e2d\u53ea\u5206\u914d\u4e86",Object(b.b)("inlineCode",{parentName:"li"},"4bit"),"\u7528\u6765\u8868\u793a\u5206\u4ee3\u5e74\u9f84\uff09\uff0c\u5c06\u5176\u590d\u5236\u5230\u8001\u5e74\u4ee3\uff0c\u540c\u65f6\u628a\u8fd9\u4e9b\u5bf9\u8c61\u7684\u5e74\u9f84\u52a01"),Object(b.b)("li",{parentName:"ul"},"\u5982\u679cSurvivalTo\u533a\u7684\u5185\u5b58\u7a7a\u95f4\u4e0d\u591f\uff0c\u5219\u4e5f\u76f4\u63a5\u5c06\u5176\u590d\u5236\u5230\u8001\u5e74\u4ee3"),Object(b.b)("li",{parentName:"ul"},"\u5982\u679c\u5bf9\u8c61\u5c5e\u4e8e\u5927\u5bf9\u8c61\uff08\u4e00\u822c\u7ea62~128KB\uff09\uff0c\u5219\u4e5f\u76f4\u63a5\u5c06\u5176\u590d\u5236\u5230\u8001\u5e74\u4ee3"))),Object(b.b)("li",{parentName:"ol"},"\u6e05\u7a7aEden\u533a\u548cSurvivorFrom\u533a\u7684\u5bf9\u8c61"),Object(b.b)("li",{parentName:"ol"},"\u5c06SurvivorTo\u533a\u548cSurvivorFrom\u533a\u4e92\u6362\uff0c\u539f\u6765\u7684SurvivorTo\u53d8\u4e3a\u4e0b\u4e00\u6b21GC\u65f6\u7684SurvivorFrom\u533a")),Object(b.b)("h2",{id:"\u8001\u5e74\u4ee3"},"\u8001\u5e74\u4ee3"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u8001\u5e74\u4ee3\u4e3b\u8981\u5b58\u653e\u957f\u751f\u547d\u5468\u671f\u7684\u5bf9\u8c61\u548c\u5927\u5bf9\u8c61")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u8001\u5e74\u4ee3\u7684GC\u8fc7\u7a0b\u53eb\u505a",Object(b.b)("inlineCode",{parentName:"li"},"MajorGC"),"\uff0c\u5728\u8001\u5e74\u4ee3\uff0c\u5bf9\u8c61\u6bd4\u8f83\u7a33\u5b9a\uff0c\u4e0d\u4f1a\u9891\u7e41\u89e6\u53d1MajorGC"),Object(b.b)("li",{parentName:"ul"},"\u5728\u8fdb\u884c",Object(b.b)("inlineCode",{parentName:"li"},"MajorGC"),"\u4e4b\u524d\uff0cJVM\u4f1a\u8fdb\u884c\u4e00\u6b21",Object(b.b)("inlineCode",{parentName:"li"},"MinorGC"),"\uff0c\u5728",Object(b.b)("inlineCode",{parentName:"li"},"MinorGC"),"\u540e\u4ecd\u7136\u51fa\u73b0\u8001\u5e74\u4ee3\u4e14\u5f53\u8001\u5e74\u4ee3\u7a7a\u95f4\u4e0d\u8db3\u6216\u65e0\u6cd5\u627e\u5230\u8db3\u591f\u5927\u7684\u8fde\u7eed\u5185\u5b58\u7a7a\u95f4\u5206\u914d\u7ed9\u65b0\u521b\u5efa\u7684\u5927\u5bf9\u8c61\u65f6\uff0c\u4f1a\u89e6\u53d1",Object(b.b)("inlineCode",{parentName:"li"},"MajorGC"),"\u8fdb\u884c\u5783\u573e\u56de\u6536\uff0c\u91ca\u653eJVM\u5806\u5185\u5b58\u7a7a\u95f4"),Object(b.b)("li",{parentName:"ul"},"MajorGC\u91c7\u7528",Object(b.b)("inlineCode",{parentName:"li"},"\u6807\u8bb0\u6e05\u9664\u7b97\u6cd5"),"\uff0c\u8be5\u7b97\u6cd5\u9996\u5148\u4f1a\u626b\u63cf\u6240\u6709\u5bf9\u8c61\u5e76\u6807\u8bb0\u5b58\u6d3b\u7684\u5bf9\u8c61\uff0c\u7136\u540e\u56de\u6536\u672a\u88ab\u6807\u8bb0\u7684\u5bf9\u8c61"),Object(b.b)("li",{parentName:"ul"},"\u56e0\u4e3a\u8981\u5148\u626b\u63cf\u8001\u5e74\u4ee3\u7684\u6240\u6709\u5bf9\u8c61\u518d\u56de\u6536\uff0c\u6240\u4ee5MajorGC\u7684\u8017\u65f6\u8f83\u957f\u3002"),Object(b.b)("li",{parentName:"ul"},"MajorGC\u7684\u6807\u8bb0\u6e05\u9664\u7b97\u6cd5\u5bb9\u6613\u4ea7\u751f\u5185\u5b58\u788e\u7247"),Object(b.b)("li",{parentName:"ul"},"\u8001\u5e74\u4ee3\u5728\u6ca1\u6709\u5185\u5b58\u7a7a\u95f4\u53ef\u5206\u914d\u65f6\uff0c\u629b\u51faOOM Out Of Memory Error")),Object(b.b)("h2",{id:"\u6c38\u4e45\u4ee3\u3001\u5143\u7a7a\u95f4jdk18"},"\u6c38\u4e45\u4ee3\u3001\u5143\u7a7a\u95f4(JDK1.8)"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u6c38\u4e45\u4ee3\u6307\u5185\u5b58\u7684\u6c38\u4e45\u4fdd\u5b58\u533a\u57df")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u4e3b\u8981\u5b58\u653eClass\u548cMeta\u5143\u6570\u636e\u4fe1\u606f\uff0cClass\u5728\u7c7b\u52a0\u8f7d\u65f6\u88ab\u653e\u5165\u6c38\u4e45\u4ee3"),Object(b.b)("li",{parentName:"ul"},"\u6c38\u4e45\u4ee3\u548c\u8001\u5e74\u4ee3\u3001\u65b0\u751f\u4ee3\u4e0d\u540c\uff0c",Object(b.b)("strong",{parentName:"li"},"GC\u4e0d\u4f1a\u5728\u7a0b\u5e8f\u8fd0\u884c\u65f6\u5bf9\u6c38\u4e45\u4ee3\u5185\u5b58\u8fdb\u884c\u6e05\u7406"),"\uff0c\u8fd9\u5bfc\u81f4\u6c38\u4e45\u4ee3\u7684\u5185\u5b58\u968f\u7740\u52a0\u8f7d\u7684Class\u6587\u4ef6\u7684\u589e\u52a0\u800c\u589e\u52a0\uff0c\u52a0\u8f7d\u7684Class\u6587\u4ef6\u8fc7\u591a\u5c31\u4f1a\u89e6\u53d1Out Of Memory OOM\u5f02\u5e38"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"JDK 1.8\u8d77\u5c06\u6c38\u4e45\u4ee3\u66ff\u6362\u4e3a\u5143\u7a7a\u95f4\uff0c\u5143\u7a7a\u95f4\u4e0e\u6c38\u4e45\u4ee3\u7684\u529f\u80fd\u7c7b\u4f3c\u3002\u533a\u522b\u662f\uff1a\u5143\u7a7a\u95f4\u4e0d\u4f7f\u7528\u865a\u62df\u673a\u5185\u5b58\uff0c\u800c\u662f\u76f4\u63a5\u4f7f\u7528\u64cd\u4f5c\u7cfb\u7edf\u672c\u5730\u5185\u5b58\u3002\u56e0\u6b64\uff0c\u5143\u7a7a\u95f4\u7684\u5927\u5c0f\u4e0d\u53d7JVM\u5185\u5b58\u9650\u5236\uff0c\u53ea\u4e0e\u64cd\u4f5c\u7cfb\u7edf\u5185\u5b58\u6709\u5173")),Object(b.b)("li",{parentName:"ul"},"JDK1.8\u540e\uff0cJVM\u5c06\u7c7b\u7684\u5143\u6570\u636e\u653e\u5165\u672c\u5730\u5185\u5b58\uff0c\u5c06\u5b57\u7b26\u4e32\u5e38\u91cf\u6c60\u548c\u9759\u6001\u53d8\u91cf\u653e\u5230Java\u5806\u4e2d\u3002\u8fd9\u6837JVM\u80fd\u591f\u52a0\u8f7d\u591a\u5c11\u5143\u6570\u636e\u4fe1\u606f\u5c31\u4e0d\u518d\u7531JVM\u7684\u6700\u5927\u53ef\u7528\u5185\u5b58\uff08MaxPermSize)\u7a7a\u95f4\u51b3\u5b9a\uff0c\u800c\u662f\u7531\u64cd\u4f5c\u7cfb\u7edf\u5b9e\u9645\u53ef\u7528\u7684\u5185\u5b58\u7a7a\u95f4\u51b3\u5b9a")),Object(b.b)("h2",{id:"\u5bf9\u4e8e\u65b9\u6cd5\u533a\u7684\u5b9e\u73b0\uff0c\u4e3a\u4ec0\u4e48\u4ece\u6c38\u4e45\u4ee3\u66f4\u6362\u5230\u5143\u7a7a\u95f4\uff1f"},"\u5bf9\u4e8e\u65b9\u6cd5\u533a\u7684\u5b9e\u73b0\uff0c\u4e3a\u4ec0\u4e48\u4ece\u6c38\u4e45\u4ee3\u66f4\u6362\u5230\u5143\u7a7a\u95f4\uff1f"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u51fa\u4e8e\u5185\u5b58\u7a7a\u95f4\u4e0e\u5185\u5b58\u5229\u7528\u7684\u89d2\u5ea6\u8003\u91cf")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u6c38\u4e45\u4ee3\u5927\u5c0f\u6709\u9650\u5236\uff0c\u5982\u679c\u52a0\u8f7d\u7684\u7c7b\u592a\u591a\uff0c\u5f88\u53ef\u80fd\u5bfc\u81f4",Object(b.b)("strong",{parentName:"li"},"\u6c38\u4e45\u4ee3\u5185\u5b58\u6ea2\u51fa"),"\uff0c",Object(b.b)("inlineCode",{parentName:"li"},"java.lang.OutOfMemoryError\uff1aPermGen"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u6c38\u4e45\u4ee3\u8c03\u4f18\u56f0\u96be\uff0c\u867d\u7136\u53ef\u4ee5\u8bbe\u7f6e\u6c38\u4e45\u4ee3\u5927\u5c0f\uff0c\u4f46\u662f\u5f88\u96be\u786e\u5b9a\u4e00\u4e2a\u5408\u9002\u7684\u5927\u5c0f\uff0c\u5f71\u54cd\u56e0\u7d20\u8fc7\u591a\uff0c\u4e0d\u5982\u7c7b\u7684\u6570\u91cf\u3001\u5e38\u91cf\u7684\u6570\u91cf\u5177\u4f53\u6709\u591a\u5c11"),Object(b.b)("li",{parentName:"ul"},"\u6c38\u4e45\u4ee3\u4e2d\u7684\u6570\u636e\u4f1a\u968f\u7740\u4e00\u6b21full GC\u53d1\u751f\u79fb\u52a8\uff0c\u6bd4\u8f83\u6d88\u8017\u865a\u62df\u673a\u6027\u80fd"),Object(b.b)("li",{parentName:"ul"},"HotSpot JVM\u7684\u6bcf\u79cd\u5783\u573e\u56de\u6536\u5668\u90fd\u9700\u8981\u7279\u6b8a\u5904\u7406\u6c38\u4e45\u4ee3\u4e2d\u7684\u5143\u6570\u636e"))),Object(b.b)("li",{parentName:"ul"},"\u5143\u7a7a\u95f4\u4f7f\u7528\u672c\u5730\u5185\u5b58\uff0c\u7406\u8bba\u4e0a\u7cfb\u7edf\u53ef\u4ee5\u4f7f\u7528\u7684\u5185\u5b58\u6709\u591a\u5927\uff0c\u5143\u7a7a\u95f4\u5c31\u6709\u591a\u5927\uff0c",Object(b.b)("strong",{parentName:"li"},"\u4e0d\u4f1a\u51fa\u73b0\u5185\u5b58\u6ea2\u51fa"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u5bf9\u5143\u7a7a\u95f4\u7684\u65e0\u7f1d\u7ba1\u7406"),Object(b.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u901a\u8fc7",Object(b.b)("inlineCode",{parentName:"li"},"-XX:MetaspaceSize"),"\u548c",Object(b.b)("inlineCode",{parentName:"li"},"-XX:MaxMetaspaceSize"),"\u914d\u7f6e\u5143\u7a7a\u95f4\u5927\u5c0f"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u5982\u679cMetaspace\u5360\u7528\u8fbe\u5230\u4e86\u8bbe\u5b9a\u7684\u6700\u5927\u503c\uff0c\u5c31\u4f1a\u89e6\u53d1GC\u6765\u6536\u96c6\u6b7b\u4ea1\u5bf9\u8c61\u548c\u7c7b\u7684\u52a0\u8f7d\u5668")),Object(b.b)("li",{parentName:"ul"},"\u7b80\u5316\u4e86full GC\u4ee5\u53ca\u5bf9\u540e\u7eed\u5e76\u53d1\u9694\u79bb\u5143\u6570\u636e\u7b49\u65b9\u9762\u8fdb\u884c\u4e86\u4f18\u5316")))),Object(b.b)("h1",{id:"\u5bf9\u8c61\u7ed3\u6784\u56fe"},"\u5bf9\u8c61\u7ed3\u6784\u56fe"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u4e00\u4e2a\u5bf9\u8c61\u7684\u5927\u5c0f\u662f8\u4e2a\u5b57\u8282\u7684\u6574\u6570\u500d")),Object(b.b)("p",null,Object(b.b)("img",{alt:"image-20200618203819622",src:n(439).default})),Object(b.b)("h1",{id:"jvm\u53c2\u6570\u8bbe\u7f6e"},"JVM\u53c2\u6570\u8bbe\u7f6e"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("inlineCode",{parentName:"p"},"Xms")," \u8d77\u59cb\u5185\u5b58"),Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("inlineCode",{parentName:"p"},"Xmx")," \u6700\u5927\u5185\u5b58"),Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("inlineCode",{parentName:"p"},"Xmn")," \u65b0\u751f\u4ee3\u5185\u5b58"),Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("inlineCode",{parentName:"p"},"Xss")," \u6808\u5927\u5c0f\u3002 \u5c31\u662f\u521b\u5efa\u7ebf\u7a0b\u540e\uff0c\u5206\u914d\u7ed9\u6bcf\u4e00\u4e2a\u7ebf\u7a0b\u7684\u5185\u5b58\u5927\u5c0f"),Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("inlineCode",{parentName:"p"},"-XX:NewRatio=n"),":\u8bbe\u7f6e\u5e74\u8f7b\u4ee3\u548c\u5e74\u8001\u4ee3\u7684\u6bd4\u503c\u3002\u5982:\u4e3a3\uff0c\u8868\u793a\u5e74\u8f7b\u4ee3\u4e0e\u5e74\u8001\u4ee3\u6bd4\u503c\u4e3a1\uff1a3\uff0c\u5e74\u8f7b\u4ee3\u5360\u6574\u4e2a\u5e74\u8f7b\u4ee3\u5e74\u8001\u4ee3\u548c\u76841/4"),Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("inlineCode",{parentName:"p"},"-XX:SurvivorRatio=n"),":\u5e74\u8f7b\u4ee3\u4e2dEden\u533a\u4e0e\u4e24\u4e2aSurvivor\u533a\u7684\u6bd4\u503c\u3002\u6ce8\u610fSurvivor\u533a\u6709\u4e24\u4e2a\u3002\u5982\uff1a3\uff0c\u8868\u793aEden\uff1aSurvivor=3\uff1a2\uff0c\u4e00\u4e2aSurvivor\u533a\u5360\u6574\u4e2a\u5e74\u8f7b\u4ee3\u76841/5"),Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("inlineCode",{parentName:"p"},"-XX:MaxPermSize=n"),":\u8bbe\u7f6e\u6301\u4e45\u4ee3\u5927\u5c0f"),Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u6536\u96c6\u5668\u8bbe\u7f6e"),Object(b.b)("p",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"p"},"-XX:+UseSerialGC"),":\u8bbe\u7f6e\u4e32\u884c\u6536\u96c6\u5668"),Object(b.b)("p",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"p"},"-XX:+UseParallelGC"),":\u8bbe\u7f6e\u5e76\u884c\u6536\u96c6\u5668"),Object(b.b)("p",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"p"},"-XX:+UseParalledlOldGC"),":\u8bbe\u7f6e\u5e76\u884c\u5e74\u8001\u4ee3\u6536\u96c6\u5668"),Object(b.b)("p",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"p"},"-XX:+UseConcMarkSweepGC"),":\u8bbe\u7f6e\u5e76\u53d1\u6536\u96c6\u5668")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u5783\u573e\u56de\u6536\u7edf\u8ba1\u4fe1\u606f\n",Object(b.b)("inlineCode",{parentName:"p"},"-XX:+PrintGC")),Object(b.b)("p",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"p"},"-XX:+PrintGCDetails")),Object(b.b)("p",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"p"},"-XX:+PrintGCTimeStamps")),Object(b.b)("p",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"p"},"-Xloggc:filename"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u5e76\u884c\u6536\u96c6\u5668\u8bbe\u7f6e\n",Object(b.b)("inlineCode",{parentName:"p"},"-XX:ParallelGCThreads=n"),":\u8bbe\u7f6e\u5e76\u884c\u6536\u96c6\u5668\u6536\u96c6\u65f6\u4f7f\u7528\u7684CPU\u6570\u3002\u5e76\u884c\u6536\u96c6\u7ebf\u7a0b\u6570\u3002"),Object(b.b)("p",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"p"},"-XX:MaxGCPauseMillis=n"),":\u8bbe\u7f6e\u5e76\u884c\u6536\u96c6\u6700\u5927\u6682\u505c\u65f6\u95f4"),Object(b.b)("p",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"p"},"-XX:GCTimeRatio=n"),":\u8bbe\u7f6e\u5783\u573e\u56de\u6536\u65f6\u95f4\u5360\u7a0b\u5e8f\u8fd0\u884c\u65f6\u95f4\u7684\u767e\u5206\u6bd4\u3002\u516c\u5f0f\u4e3a1/(1+n)")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u5e76\u53d1\u6536\u96c6\u5668\u8bbe\u7f6e\n",Object(b.b)("inlineCode",{parentName:"p"},"-XX:+CMSIncrementalMode"),":\u8bbe\u7f6e\u4e3a\u589e\u91cf\u6a21\u5f0f\u3002\u9002\u7528\u4e8e\u5355CPU\u60c5\u51b5\u3002"),Object(b.b)("p",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"p"},"-XX:ParallelGCThreads=n"),":\u8bbe\u7f6e\u5e76\u53d1\u6536\u96c6\u5668\u5e74\u8f7b\u4ee3\u6536\u96c6\u65b9\u5f0f\u4e3a\u5e76\u884c\u6536\u96c6\u65f6\uff0c\u4f7f\u7528\u7684CPU\u6570\u3002\u5e76\u884c\u6536\u96c6\u7ebf\u7a0b\u6570")))),Object(b.b)("h2",{id:"\u4f8b\u9898\uff1a"},"\u4f8b\u9898\uff1a"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"-Xms1G -Xmx2G -Xmn500M -XX:MaxPermSize=64M -XX:+UseConcMarkSweepGC -XX:SurvivorRatio=3,\n\u8bf7\u95eeeden\u533a\u6700\u7ec8\u5206\u914d\u7684\u5927\u5c0f\u662f\u591a\u5c11\uff1f"))),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"-Xms1G"),"  \u8bbe\u7f6eJava\u5806\u6700\u5c0f\u503c\u4e3a1G  "),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"-Xmx2G"),"  \u8bbe\u7f6eJava\u5806\u6700\u5927\u503c\u4e3a2G"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"-Xmn500M"),"  \u8bbe\u7f6e\u65b0\u751f\u4ee3\u5927\u5c0f\u4e3a500M\uff08\u4e00\u4e2aEden\u533a\uff0c\u4e24\u4e2aSurvivor\u533a\uff09"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"-XX:MaxPermSize=64M"),"  \u8bbe\u7f6e\u6c38\u4e45\u4ee3\u5927\u5c0f\u4e3a64M"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"-XX:+UseConcMarkSweepGC"),"   \u8bbe\u7f6e\u4f7f\u7528CMS\u6536\u96c6\u5668"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"-XX:SurvivorRatio=3"),"  \u8bbe\u7f6eEden\u533a\u4e0eSurvivor\u533a\u5927\u5c0f\u7684\u6bd4\u4f8b"),Object(b.b)("p",null,"\u672c\u9898\u770b\u65b0\u751f\u4ee3\u5927\u5c0f\uff0c\u65b0\u751f\u4ee3\u4e3a500M\uff0c\u4e09\u4e2a\u533a\u6bd4\u4f8b\u9ed8\u8ba4\u4e3a8:1:1\uff0c\u73b0\u5728\u8bbe\u7f6e\u4e3a3\uff1a1\uff1a1\uff0c\u5f88\u5bb9\u6613\u8ba1\u7b97\u51faEden\u5927\u5c0f\u4e3a300M"))}p.isMDXComponent=!0}}]);