(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),b=(n(0),n(336)),c={id:"10.pubSub",title:"Redis\u53d1\u5e03\u8ba2\u9605",hide_title:!0},l={unversionedId:"redis/10.pubSub",id:"redis/10.pubSub",isDocsHomePage:!1,title:"Redis\u53d1\u5e03\u8ba2\u9605",description:"Redis\u53d1\u5e03\u8ba2\u9605",source:"@site/docs/redis/10.\u53d1\u5e03\u8ba2\u9605.md",permalink:"/docs/redis/10.pubSub",sidebar:"someSidebar",previous:{title:"Redis\u6301\u4e45\u5316",permalink:"/docs/redis/9.duration"},next:{title:"\u7f13\u5b58\u7a7f\u900f|\u51fb\u7a7f|\u96ea\u5d29",permalink:"/docs/redis/11.cache"}},i=[{value:"Redis\u53d1\u5e03\u8ba2\u9605",id:"redis\u53d1\u5e03\u8ba2\u9605",children:[{value:"\u547d\u4ee4",id:"\u547d\u4ee4",children:[]},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",children:[]},{value:"\u539f\u7406",id:"\u539f\u7406",children:[]}]}],o={rightToc:i};function u(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},o,c,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"redis\u53d1\u5e03\u8ba2\u9605"},"Redis\u53d1\u5e03\u8ba2\u9605"),Object(b.b)("p",null,Object(b.b)("img",{alt:"image-20200714160752566",src:n(538).default})),Object(b.b)("p",null,"Redis\u53d1\u5e03\u8ba2\u9605(Pub/Sub)\u662f\u4e00\u79cd\u6d88\u606f\u901a\u4fe1\u6a21\u5f0f"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u53d1\u9001\u8005(Pub)\uff1a\u53d1\u5e03\u6d88\u606f"),Object(b.b)("li",{parentName:"ul"},"\u8ba2\u9605\u8005(Sub)\uff1a\u63a5\u6536\u6d88\u606f"),Object(b.b)("li",{parentName:"ul"},"\u9891\u9053")),Object(b.b)("h2",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u547d\u4ee4"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u529f\u80fd"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"PSUBSCRIBE pattern ","[pattern ...]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u8ba2\u9605\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u7b26\u5408\u7ed9\u5b9a\u6a21\u5f0f\u7684\u9891\u9053")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"PUBSUB subcommand [argument","[argument...]","]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u67e5\u770b\u8ba2\u9605\u4e0e\u53d1\u5e03\u7cfb\u7edf\u72b6\u6001")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"PUBLISH channel message"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u5c06\u4fe1\u606f\u53d1\u9001\u5230\u6307\u5b9a\u7684\u9891\u9053")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"PUNSUBSCRIBE [pattern ","[pattern ...]","]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u9000\u8ba2\u6240\u6709\u7ed9\u5b9a\u6a21\u5f0f\u7684\u9891\u9053")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"SUBSCRIBE channel ","[channel ...]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u8ba2\u9605\u7ed9\u5b9a\u7684\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u9891\u9053\u7684\u4fe1\u606f")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"UNSUBSCRIBE [channel","[channel ...]","]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u9000\u8ba2\u7ed9\u5b9a\u9891\u9053")))),Object(b.b)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u521b\u5efa\u4e00\u4e2a\u8ba2\u9605\u9891\u9053:",Object(b.b)("inlineCode",{parentName:"p"},"redisChat"))),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'127.0.0.1:6379> SUBSCRIBE redisChat\nReading messages... (press ctrl-c to quit)\n1) "subscribe"\n2) "redisChat"\n3) (integer) 1\n')),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u91cd\u65b0\u5f00\u4e00\u4e2aredis\u5ba2\u6237\u7aef")),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'127.0.0.1:6379> PUBLISH redisChat "Hello,Redis"\n(integer) 1\nredis 127.0.0.1:6379> PUBLISH redisChat "Hello\uff0cworld"\n(integer) 1\n\n# \u8ba2\u9605\u8005\u7684\u5ba2\u6237\u7aef\u4f1a\u663e\u793a\u5982\u4e0b\u6d88\u606f \n1) "message" \n2) "redisChat" \n3) "Hello,Redis" \n1) "message" \n2) "redisChat" \n3) "Hello\uff0cworld"\n\n')),Object(b.b)("h2",{id:"\u539f\u7406"},"\u539f\u7406"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Redis\u662f\u4f7f\u7528C\u5b9e\u73b0\u7684\uff0c\u901a\u8fc7\u5206\u6790 Redis \u6e90\u7801\u91cc\u7684 pubsub.c \u6587\u4ef6")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u901a\u8fc7",Object(b.b)("inlineCode",{parentName:"li"},"PUBLISH"),"\u3001",Object(b.b)("inlineCode",{parentName:"li"},"SUBSCRIBE"),"\u548c",Object(b.b)("inlineCode",{parentName:"li"},"PSUBSCRIBE"),"\u7b49\u547d\u4ee4\u5b9e\u73b0\u53d1\u5e03\u548c\u8ba2\u9605\u529f\u80fd"),Object(b.b)("li",{parentName:"ul"},"\u901a\u8fc7",Object(b.b)("inlineCode",{parentName:"li"},"SUBSCRIBE"),"\u547d\u4ee4\u8ba2\u9605\u67d0\u9891\u9053\u540e\uff0credis-server\u91cc\u7ef4\u62a4\u4e86\u4e00\u4e2a\u5b57\u5178\uff0c\u5b57\u5178\u7684\u952e\u5c31\u662f\u4e00\u4e2a\u4e2achannel\uff0c\u503c\u662f\u4e00\u4e2a\u94fe\u8868\uff0c\u94fe\u8868\u4e2d\u4fdd\u5b58\u4e86\u6240\u6709\u8ba2\u9605\u8fd9\u4e2achannel\u7684\u5ba2\u6237\u7aef\u3002SUBSCRIBE\u547d\u4ee4\u7684\u5173\u952e\uff0c\u5c31\u662f\u5c06\u5ba2\u6237\u7aef\u6dfb\u52a0\u5230\u7ed9\u5b9achannel\u7684\u8ba2\u9605\u94fe\u8868\u4e2d"),Object(b.b)("li",{parentName:"ul"},"\u901a\u8fc7",Object(b.b)("inlineCode",{parentName:"li"},"PUBLISH"),"\u547d\u4ee4\u5411\u8ba2\u9605\u8005\u53d1\u9001\u6d88\u606f\uff0credis-server\u4f1a\u4f7f\u7528\u7ed9\u5b9a\u7684\u9891\u9053\u4f5c\u4e3a\u952e\uff0c\u5728\u5b83\u6240\u7ef4\u62a4\u7684channel\u5b57\u5178\u4e2d\u67e5\u627e\u8bb0\u5f55\u4e86\u8ba2\u9605\u8fd9\u4e2a\u9891\u9053\u7684\u6240\u6709\u5ba2\u6237\u7aef\u7684\u94fe\u8868\uff0c\u904d\u5386\u8fd9\u4e2a\u94fe\u8868\uff0c\u5c06\u6d88\u606f\u53d1\u5e03\u7ed9\u6240\u6709\u8ba2\u9605\u8005"),Object(b.b)("li",{parentName:"ul"},"Pub/Sub\u4ece\u5b57\u9762\u4e0a\u7406\u89e3\u5c31\u662fPublish\u548cSubscribe\uff0c\u5728Redis\u4e2d\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u5bf9\u67d0\u4e00\u4e2akey\u503c\u8fdb\u884c\u6d88\u606f\u53d1\u5e03\u548c\u6d88\u606f\u8ba2\u9605\uff0c\u5f53\u4e00\u4e2akey\u503c\u4e0a\u8fdb\u884c\u4e86\u6d88\u606f\u53d1\u5e03\u540e\uff0c\u6240\u6709\u8ba2\u9605\u5b83\u7684\u5ba2\u6237\u7aef\u90fd\u4f1a\u6536\u5230\u54cd\u5e94\u7684\u6d88\u606f")))}u.isMDXComponent=!0},336:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),u=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=u(n),s=r,O=p["".concat(c,".").concat(s)]||p[s]||d[s]||b;return n?a.a.createElement(O,l(l({ref:t},o),{},{components:n})):a.a.createElement(O,l({ref:t},o))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=n.length,c=new Array(b);c[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var o=2;o<b;o++)c[o]=n[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},538:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/13-4e86c044e29d13b6e7b492c76f459463.png"}}]);