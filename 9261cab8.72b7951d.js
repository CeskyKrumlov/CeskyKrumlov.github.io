(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{222:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),b=(n(0),n(347)),l={id:"1.http",title:"HTTP\u534f\u8bae",hide_title:!0},c={unversionedId:"javaweb/1.http",id:"javaweb/1.http",isDocsHomePage:!1,title:"HTTP\u534f\u8bae",description:"HTTP",source:"@site/docs/javaweb/http.md",slug:"/javaweb/1.http",permalink:"/docs/javaweb/1.http",version:"current",sidebar:"someSidebar",previous:{title:"\u7f13\u5b58\u7a7f\u900f|\u51fb\u7a7f|\u96ea\u5d29",permalink:"/docs/redis/11.cache"},next:{title:"Session|Cookie|Token",permalink:"/docs/javaweb/2.sessionCookieToken"}},i=[{value:"HTTP",id:"http",children:[{value:"\u8d44\u6e90",id:"\u8d44\u6e90",children:[]},{value:"URL\u7684\u7ec4\u6210",id:"url\u7684\u7ec4\u6210",children:[]},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef",children:[]},{value:"\u670d\u52a1\u7aef",id:"\u670d\u52a1\u7aef",children:[]}]},{value:"HTTPS",id:"https",children:[]}],o={rightToc:i};function p(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,l,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"http"},"HTTP"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u5e94\u7528\u5c42\u8d85\u6587\u672c\u4f20\u8f93\u534f\u8bae"),Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u53d1\u9001\u8bf7\u6c42\u7ed9\u670d\u52a1\u7aef"),Object(b.b)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u8fd4\u56de\u54cd\u5e94\u7ed9\u5ba2\u6237\u7aef"))),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"Http\u534f\u8bae\u662f\u65e0\u72b6\u6001\u7684\uff0c\u56e0\u6b64\u9700\u8981Cookie\u548cSession\u6765\u5b9e\u73b0\u72b6\u6001\u4fdd\u6301\u3001\u72b6\u6001\u8bb0\u5f55")),Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},"Cookie\uff1a\u5ba2\u6237\u7aef\u8bb0\u5f55"),Object(b.b)("li",{parentName:"ul"},"Session\uff1a\u670d\u52a1\u7aef\u8bb0\u5f55"))),Object(b.b)("h2",{id:"\u8d44\u6e90"},"\u8d44\u6e90"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"html\u8d85\u6587\u672c\u6587\u6863\u3001\u56fe\u7247\u3001\u89c6\u9891\u97f3\u9891\u6d41\u5a92\u4f53")),Object(b.b)("p",null,"\u4f7f\u7528",Object(b.b)("strong",{parentName:"p"},"\u7edf\u4e00\u8d44\u6e90\u5b9a\u4f4d\u7b26URL"),"\u5b9a\u4f4d\u8d44\u6e90"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"http://www.bilibili.com/comments?id=1")),Object(b.b)("h2",{id:"url\u7684\u7ec4\u6210"},"URL\u7684\u7ec4\u6210"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"http://www.bilibili.com:80/comments?id=1")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u534f\u8baeprotocol\uff1a"),"http \u6216 https"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u4e3b\u673ahost\uff1a"),Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"http://www.bilibili.com"}),"www.bilibili.com")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u8def\u5f84path\uff1a"),"comments"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u7aef\u53e3port\uff1a"),"80"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u67e5\u8be2\u53c2\u6570query\uff1a"),"id=1")),Object(b.b)("h2",{id:"\u5ba2\u6237\u7aef"},"\u5ba2\u6237\u7aef"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u5411\u670d\u52a1\u7aef\u53d1\u8d77HTTP\u8bf7\u6c42")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-markdown"}),"GET     /comments?id=1      HTTP/1.1\n----------------------------------\nAccept: text/html, application.xhtml+xml, application/xml...\n\nAccept-Encoding: gzip, deflate\n-----------------------------------\nrequest body \u8bf7\u6c42\u4f53\uff08\u5982\u679c\u6709\uff09\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u8bf7\u6c42\u65b9\u5f0f (RESTFul\u98ce\u683c)"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"GET"),Object(b.b)("li",{parentName:"ul"},"POST"),Object(b.b)("li",{parentName:"ul"},"PUT"),Object(b.b)("li",{parentName:"ul"},"DELETE"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u8def\u5f84\u4e0e\u67e5\u8be2\u53c2\u6570")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"HTTP\u7248\u672c")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u8bf7\u6c42\u5934\uff1a\u4e00\u4e9b\u989d\u5916\u7684\u8bbe\u7f6e\uff0c\u6307\u5b9a\u60f3\u8981\u83b7\u5f97\u7684\u54cd\u5e94\u7c7b\u578b"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u63a5\u6536\u54cd\u5e94\u8d44\u6e90\u7684\u7c7b\u578b\u7b49"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u8bf7\u6c42\u4f53\uff1a"),"\u8bf7\u6c42\u65f6\u643a\u5e26\u7684\u4e00\u4e9b\u53c2\u6570")),Object(b.b)("h2",{id:"\u670d\u52a1\u7aef"},"\u670d\u52a1\u7aef"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u5bf9\u5ba2\u6237\u7aef\u53d1\u8d77\u7684HTTP\u8bf7\u6c42\u8fd4\u56deHTTP\u54cd\u5e94")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-markdown"}),'HTTP/1.1        200OK\n------------------------------------\nDate: Sat, 02 May 2020 08:21:09 GMT\nContent-Type: application/json; charset=utf-8\nCache-Control: max-age=14400\n------------------------------------\n[{"id":"1", "name":"name1"}, {"id":"2", "name":"name2"}]\n')),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"HTTP\u7248\u672c")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u54cd\u5e94\u72b6\u6001\u7801"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"100~199\uff1a\u4e00\u822c\u4fe1\u606f ",Object(b.b)("inlineCode",{parentName:"li"},"100 Continue")),Object(b.b)("li",{parentName:"ul"},"200~299:   \u6210\u529f\u54cd\u5e94 ",Object(b.b)("inlineCode",{parentName:"li"},"200 OK")),Object(b.b)("li",{parentName:"ul"},"300~399\uff1a\u91cd\u5b9a\u5411 ",Object(b.b)("inlineCode",{parentName:"li"},"301 Moved Permanently")),Object(b.b)("li",{parentName:"ul"},"400~499\uff1a\u5ba2\u6237\u7aef\u9519\u8bef ",Object(b.b)("inlineCode",{parentName:"li"},"404 Not Found")),Object(b.b)("li",{parentName:"ul"},"500~599\uff1a\u670d\u52a1\u7aef\u9519\u8bef ",Object(b.b)("inlineCode",{parentName:"li"},"500 Internal Server Error")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u54cd\u5e94\u5934\uff1a\u989d\u5916\u7684\u54cd\u5e94\u4fe1\u606f"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u54cd\u5e94\u65f6\u95f4"),Object(b.b)("li",{parentName:"ul"},"\u54cd\u5e94\u5185\u5bb9\u7684\u7f16\u7801"),Object(b.b)("li",{parentName:"ul"},"\u5982\u4f55\u63a7\u5236\u7f13\u5b58"),Object(b.b)("li",{parentName:"ul"},"\u5982\u4f55\u5904\u7406cookie\u7b49"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u54cd\u5e94\u4f53"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"JSON\u6570\u636e")))),Object(b.b)("h1",{id:"https"},"HTTPS"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://blog.csdn.net/qq_38289815/article/details/80969419"}),"HTTP\u4e0eHTTPS\u7684\u533a\u522b"))),Object(b.b)("p",null,Object(b.b)("img",{alt:"image-20200703145104208",src:n(577).default})))}p.isMDXComponent=!0},347:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(n),O=a,j=u["".concat(l,".").concat(O)]||u[O]||m[O]||b;return n?r.a.createElement(j,c(c({ref:t},o),{},{components:n})):r.a.createElement(j,c({ref:t},o))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,l=new Array(b);l[0]=O;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<b;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},577:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/1-347d0dccde8c748b54d37a37e349dd13.png"}}]);