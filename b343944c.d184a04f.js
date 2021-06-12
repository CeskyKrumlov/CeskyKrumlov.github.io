(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{417:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),l=n(6),a=(n(0),n(564)),i={id:"6.ioMultiple",title:"I/O \u591a\u8def\u590d\u7528",hide_title:!0},o={unversionedId:"javaweb/6.ioMultiple",id:"javaweb/6.ioMultiple",isDocsHomePage:!1,title:"I/O \u591a\u8def\u590d\u7528",description:"I/O \u591a\u8def\u590d\u7528",source:"@site/docs/javaweb/io_mul.md",slug:"/javaweb/6.ioMultiple",permalink:"/docs/javaweb/6.ioMultiple",version:"current",sidebar:"someSidebar",previous:{title:"WebService",permalink:"/docs/javaweb/5.webservice"},next:{title:"\u8fdb\u7a0b\u4e0e\u591a\u7ebf\u7a0b",permalink:"/docs/\u64cd\u4f5c\u7cfb\u7edf/1.proceeding"}},c=[{value:"I/O \u591a\u8def\u590d\u7528",id:"io-\u591a\u8def\u590d\u7528",children:[]}],b={rightToc:c};function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("br",null),Object(a.b)("h1",{id:"io-\u591a\u8def\u590d\u7528"},"I/O \u591a\u8def\u590d\u7528"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u601d\u8def\u9012\u8fdb\uff1a"),Object(a.b)("ol",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ol"},"\u4ec0\u4e48\u662f BIO\u3001\u4ec0\u4e48\u662f NIO \uff08\u540c\u6b65\u963b\u585e\u3001\u540c\u6b65\u975e\u963b\u585e\uff1bBIO \u9762\u5411\u6d41\uff0cNIO \u9762\u5411 Buffer \u6216\u8005\u8bf4 Channel\uff09"),Object(a.b)("li",{parentName:"ol"},"BIO \u7684\u7f3a\u9677\uff08\u6ca1\u8fde\u63a5\u3001\u6ca1\u6570\u636e\u90fd\u963b\u585e\uff09\u3001NIO \u5982\u4f55\u8bd5\u56fe\u89e3\u51b3 BIO \u7684\u7f3a\u9677\uff0c\u7b80\u5355\u7684 NIO \u6709\u4f55\u4e0d\u8db3\uff08\u4e0d\u505c\u7684\u8f6e\u8be2\u6240\u6709\u8fde\u63a5\u3001\u4e0d\u7ba1\u6709\u6ca1\u6709\u6570\u636e\uff1b\u8bfb\u5199\u64cd\u4f5c\u5f15\u53d1\u7528\u6237\u6001\u3001\u5185\u6838\u6001\u5207\u6362\uff09"),Object(a.b)("li",{parentName:"ol"},"NIO + \u591a\u8def\u590d\u7528\u5668\uff08socket \u5728 linux \u4e2d\u6709\u5bf9\u5e94\u7684 ",Object(a.b)("inlineCode",{parentName:"li"},"\u6587\u4ef6\u63cf\u8ff0\u7b26 fd"),"\uff0c\u591a\u8def\u590d\u7528\u5668\u7528\u6765\u4e00\u6b21\u83b7\u77e5\u54ea\u4e9b fd \u53ef\u5199\u53ef\u8bfb\u54ea\u4e9b\u4e0d\u80fd\uff09"),Object(a.b)("li",{parentName:"ol"},"Linux \u591a\u8def\u590d\u7528\u5668\u7684\u4e09\u79cd\u5b9e\u73b0 select\u3001poll\u3001epoll\u3001\u539f\u7406\u3001\u5404\u81ea\u4f18\u7f3a\u70b9",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"Select\uff1a\u7528\u6237\u6001\uff1a\u5c06 ",Object(a.b)("inlineCode",{parentName:"li"},"\u5df2\u8fde\u63a5")," socket \u7684 fd \u96c6\u5408\u62f7\u8d1d\u5230\u5185\u6838\u6001\uff0c\u5185\u6838\u904d\u5386 fd \u96c6\u5408\u6807\u8bb0\u53ef\u8bfb\u53ef\u5199\u7684 socket fd\uff08\u4e00\u6b21\u4f20\u8f93\u4e00\u6b21\u904d\u5386\uff09\uff1b\u628a fd \u96c6\u5408\u4f20\u8f93\u4f1a\u7528\u6237\u6001\uff0c\u7528\u6237\u6001\u518d\u904d\u5386 fd \u96c6\u5408\u5bf9\u53ef\u8bfb\u53ef\u5199\u7684 fd \u8fdb\u884c\u8bfb\u5199\u64cd\u4f5c\uff08\u518d\u6b21\u4f20\u8f93\u548c\u518d\u6b21\u904d\u5386\uff09\uff1bfd \u96c6\u5408\u7684\u957f\u5ea6\u56fa\u5b9a ",Object(a.b)("inlineCode",{parentName:"li"},"1024 bit")),Object(a.b)("li",{parentName:"ol"},"Poll\uff1a\u4f20\u8f93 fd \u6ca1\u6709\u6570\u91cf\u9650\u5236\uff0c\u57fa\u4e8e\u94fe\u8868\u7684\u52a8\u6001\u6570\u7ec4\uff0cLinkedArrayList"),Object(a.b)("li",{parentName:"ol"},"Select\u3001poll \u90fd\u8981\u904d\u5386 fd \u96c6\u5408\uff0cfd \u96c6\u5408\u9700\u8981\u5728\u7528\u6237\u6001\u3001\u6838\u5fc3\u6001\u4e4b\u95f4\u4f20\u9012"),Object(a.b)("li",{parentName:"ol"},"Epoll \u5982\u4f55\u89e3\u51b3 select\u3001poll \u7684\u4e0d\u8db3",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u6570\u636e\u5230\u8fbe\u7f51\u5361\uff0c\u79ef\u6512\u4e00\u5b9a\u91cf\uff0c\u89e6\u53d1\u7cfb\u7edf\u4e2d\u65ad\uff0c\u901a\u8fc7 DMA \u6280\u672f\u590d\u5236\u5230\u5185\u5b58\uff0c\u548c\u76f8\u5173 fd \u7ed1\u5b9a"),Object(a.b)("li",{parentName:"ul"},"Epoll \u4e2d\u7684\u4e09\u4e2a\u6570\u636e\u7ed3\u6784",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u5728\u5185\u6838\u4e2d\u7ef4\u62a4\u4e00\u9897 fd ",Object(a.b)("inlineCode",{parentName:"li"},"\u7ea2\u9ed1\u6811")),Object(a.b)("li",{parentName:"ul"},"\u4ece\u7f51\u5361\u5230\u8fbe\u6570\u636e\u76f8\u5e94\u7684 fd \u79fb\u52a8\u5230 ",Object(a.b)("inlineCode",{parentName:"li"},"\u5c31\u7eea\u961f\u5217 readyList"),"\uff0c\u662f\u4e00\u4e2a ",Object(a.b)("inlineCode",{parentName:"li"},"\u53cc\u5411\u94fe\u8868")," \uff08\u53ea\u5728\u5185\u6838\u6001\u64cd\u4f5c\uff09"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"\u7b49\u5f85\u961f\u5217")," \u91cc\u9762\u662f\u8c03\u7528\u4e86 epoll_wait \u51fd\u6570\u7684\u8fdb\u7a0b\uff08\u5f53 socket \u6709\u4e8b\u4ef6\u53d1\u751f\u65f6\u89e6\u53d1\uff09\uff0c",Object(a.b)("inlineCode",{parentName:"li"},"epoll_wait")," \u65f6\u5c06\u80fd\u8bfb\u5230\u7684 fd \u4ece readyList \u590d\u5236\u51fa\u53bb\uff0c\u8fd4\u56de\u7ed9\u7528\u6237\u7a0b\u5e8f\uff08\u5185\u6838\u6001\u5230\u7528\u6237\u6001\uff09"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"epoll_create")," \u7528\u6765\u521d\u59cb\u5316 epoll"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"epoll_ctl")," \u628a fd \u6dfb\u52a0\u5230\u7ea2\u9ed1\u6811\uff08\u4ece\u7528\u6237\u6001\u62f7\u8d1d\u5230\u5185\u6838\u6001\uff09"))),Object(a.b)("li",{parentName:"ol"},"Epoll\u4e0b\uff1a\u591a\u4e2a\u5ba2\u6237\u7aef\u8fde\u63a5 -> \u591a\u4e2a socket -> \u591a\u4e2a buffer -> \u591a\u4e2a Channel -> \u4e00\u4e2a Selector -> \u4e00\u4e2a\u7ebf\u7a0b"))),Object(a.b)("li",{parentName:"ol"},"\u6c34\u5e73\u89e6\u53d1\uff1a\u53ea\u8981\u7f13\u51b2\u533a\u8fd8\u6709\u5185\u5bb9\uff0c\u5c31\u8fd4\u56de\u8bfb\u5c31\u7eea\uff1aSelect\u3001Poll\uff1b\u8fb9\u7f18\u89e6\u53d1\uff1a\u53ea\u6709\u7f13\u51b2\u533a\u5185\u5bb9\u53d1\u751f\u53d8\u5316\uff0c\u624d\u8fd4\u56de\u8bfb\u5c31\u7eea Epoll"),Object(a.b)("li",{parentName:"ol"},"Java \u4e2d\u7684 Selector \u5bf9 select\u3001poll\u3001epoll \u7684\u5c01\u88c5"),Object(a.b)("li",{parentName:"ol"},"Netty \u662f\u4f18\u79c0\u7684 NIO \u6846\u67b6"))),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://zhuanlan.zhihu.com/p/150635981"}),"https://zhuanlan.zhihu.com/p/150635981")),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://blog.csdn.net/weixin_44273302/article/details/115269745"}),"https://blog.csdn.net/weixin_44273302/article/details/115269745")))}p.isMDXComponent=!0},564:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),l=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var b=l.a.createContext({}),p=function(e){var t=l.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return l.a.createElement(b.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||O[d]||a;return n?l.a.createElement(m,o(o({ref:t},b),{},{components:n})):l.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<a;b++)i[b]=n[b];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);