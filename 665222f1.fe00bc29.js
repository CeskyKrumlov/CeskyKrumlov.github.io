(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),c=(n(0),n(347)),b={id:"5.transaction",title:"Redis\u4e8b\u52a1",hide_title:!0},l={unversionedId:"redis/5.transaction",id:"redis/5.transaction",isDocsHomePage:!1,title:"Redis\u4e8b\u52a1",description:"Redis\u4e8b\u52a1",source:"@site/docs/redis/5.\u4e8b\u52a1.md",slug:"/redis/5.transaction",permalink:"/docs/redis/5.transaction",version:"current",sidebar:"someSidebar",previous:{title:"\u4e09\u79cd\u7279\u6b8a\u6570\u636e\u7c7b\u578b",permalink:"/docs/redis/4.threeSpecificDataStructure"},next:{title:"Jedis",permalink:"/docs/redis/6.jedis"}},o=[{value:"Redis\u4e8b\u52a1",id:"redis\u4e8b\u52a1",children:[{value:"\u6b63\u5e38\u6267\u884c\u4e8b\u52a1",id:"\u6b63\u5e38\u6267\u884c\u4e8b\u52a1",children:[]},{value:"Redis\u5b9e\u73b0\u4e50\u89c2\u9501",id:"redis\u5b9e\u73b0\u4e50\u89c2\u9501",children:[{value:"\u60b2\u89c2\u9501",id:"\u60b2\u89c2\u9501",children:[]},{value:"\u4e50\u89c2\u9501",id:"\u4e50\u89c2\u9501",children:[]},{value:"Redis\u76d1\u89c6\u6d4b\u8bd5\u2014\u2014watch",id:"redis\u76d1\u89c6\u6d4b\u8bd5watch",children:[]}]}]}],i={rightToc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"redis\u4e8b\u52a1"},"Redis\u4e8b\u52a1"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Redis\u5355\u6311\u547d\u4ee4\u4fdd\u8bc1\u539f\u5b50\u6027\uff0c\u4f46\u662f",Object(c.b)("strong",{parentName:"p"},"redis\u7684\u4e8b\u52a1\u4e0d\u4fdd\u8bc1\u539f\u5b50\u6027")),Object(c.b)("p",{parentName:"blockquote"},"Redis\u4e8b\u52a1\u7684\u672c\u8d28\uff1a"),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u4e00\u6b21\u6027\uff1a"),"\u4e00\u7ec4\u547d\u4ee4\u7684\u96c6\u5408"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u987a\u5e8f\u6027\uff1a"),"\u4f1a\u5f62\u6210\u961f\u5217\u987a\u5e8f\u6267\u884c"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u6392\u4ed6\u6027\uff1a"),"\u5728\u4e8b\u52a1\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0c\u4e0d\u53d7\u5176\u4ed6\u5f71\u54cd")),Object(c.b)("pre",{parentName:"blockquote"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"----- \nset\nset\nset\n-----\n"))),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"redis\u4e8b\u52a1\u6ca1\u6709\u9694\u79bb\u7ea7\u522b\u7684\u6982\u5ff5\uff0c\u6240\u6709\u7684\u547d\u4ee4\u5728\u4e8b\u52a1\u4e2d\u5e76\u6ca1\u6709\u88ab\u76f4\u63a5\u6267\u884c\uff0c\u53ea\u6709\u53d1\u8d77\u6267\u884c\u547d\u4ee4\u7684\u65f6\u5019\u624d\u4f1a\u6267\u884c"))),Object(c.b)("h2",{id:"\u6b63\u5e38\u6267\u884c\u4e8b\u52a1"},"\u6b63\u5e38\u6267\u884c\u4e8b\u52a1"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Redis\u4e8b\u52a1\u7684\u4e09\u4e2a\u9636\u6bb5\uff1a"),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u5f00\u542f\u4e8b\u52a1\u2014\u2014",Object(c.b)("inlineCode",{parentName:"li"},"multi")),Object(c.b)("li",{parentName:"ul"},"\u547d\u4ee4\u5165\u961f"),Object(c.b)("li",{parentName:"ul"},"\u6267\u884c\u4e8b\u52a1\u2014\u2014",Object(c.b)("inlineCode",{parentName:"li"},"exec")))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u5f00\u542f\u4e8b\u52a1")),Object(c.b)("p",null,"\u4e00\u65e6\u6267\u884c\u4e86",Object(c.b)("inlineCode",{parentName:"p"},"multi"),"\u6307\u4ee4\u5f00\u542f\u4e8b\u52a1\uff0c\u63a5\u4e0b\u6765\u7684\u6307\u4ee4\u5c31\u4f1a\u88ab\u653e\u5230\u961f\u5217\u91cc"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"127.0.0.1:6379> multi\nOK\n127.0.0.1:6379> set k1 v1\nQUEUED\n127.0.0.1:6379> set k2 v2\nQUEUED\n127.0.0.1:6379> get k2\nQUEUED\n127.0.0.1:6379> set k3 v3\nQUEUED\n127.0.0.1:6379>\n")),Object(c.b)("p",null,"\u6267\u884c",Object(c.b)("inlineCode",{parentName:"p"},"exec"),"\u6307\u4ee4\u5c06\u961f\u5217\u4e2d\u7684\u6307\u4ee4\u4e00\u6b21\u6027\u6267\u884c"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'127.0.0.1:6379> exec\n1) OK\n2) OK\n3) "v2"\n4) OK\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u5165\u961f\u5217\u65f6\u6307\u4ee4\u5e76\u6ca1\u6709\u6267\u884c\uff0c\u53ea\u6709\u6267\u884c",Object(c.b)("inlineCode",{parentName:"strong"},"exec"),"\u6307\u4ee4\u65f6\u961f\u5217\u4e2d\u7684\u6307\u4ee4\u624d\u88ab\u771f\u6b63\u6267\u884c\u4e86")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u653e\u5f03\u4e8b\u52a1",Object(c.b)("inlineCode",{parentName:"p"},"discard"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"127.0.0.1:6379> multi\nOK\n127.0.0.1:6379> set k1 v1\nQUEUED\n127.0.0.1:6379> set k2 v2\nQUEUED\n127.0.0.1:6379> set k4 v4\nQUEUED\n127.0.0.1:6379> discard\nOK\n127.0.0.1:6379> get k4\n(nil)\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u7f16\u8bd1\u578b\u5f02\u5e38"),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u5728\u4e00\u7ec4\u4e8b\u52a1\u4e2d\uff0c\u6709\u4e00\u6b65\u64cd\u4f5c\u5b58\u5728\u8bed\u6cd5\u9519\u8bef\uff0c\u662f\u7f16\u8bd1\u671f\u5c31\u53ef\u4ee5\u53d1\u73b0\u7684\u9519\u8bef\uff0c\u5219\u6574\u4e2a\u4e8b\u52a1\u90fd\u4e0d\u4f1a\u6267\u884c"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"127.0.0.1:6379> multi\nOK\n127.0.0.1:6379> set k1 v1\nQUEUED\n127.0.0.1:6379> set k2 v2\nQUEUED\n127.0.0.1:6379> getset k3 \n(error) ERR wrong number of arguments for 'getset' command\n127.0.0.1:6379> exec\n(error) EXECABORT Transaction descarded because of parevious errors\n127.0.0.1:6379> get k1\n(nil)\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u8fd0\u884c\u578b\u5f02\u5e38"),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u5bf9\u5b57\u7b26\u4e32\u6267\u884c\u81ea\u52a8\u52a01"),Object(c.b)("li",{parentName:"ul"},"\u53ea\u6709\u9519\u8bef\u8bed\u53e5\u5931\u8d25\u4e86\uff0c\u4e8b\u52a1\u4e2d\u7684\u5176\u4ed6\u547d\u4ee4\u4f9d\u7136\u53ef\u4ee5\u6267\u884c\u6210\u529f\uff0c",Object(c.b)("strong",{parentName:"li"},"\u56e0\u6b64\u8bf4Redis\u7684\u4e8b\u52a1\u4e0d\u4fdd\u8bc1\u539f\u5b50\u6027")))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'127.0.0.1:6379> flushdb\nOK\n127.0.0.1:6379> set k1 "v1"\nOK\n127.0.0.1:6379> multi\nOK\n127.0.0.1:6379> incr k1\nQUEUED\n127.0.0.1:6379> set k2 v2\nQUEUED\n127.0.0.1:6379> get k2\nQUEUED\n127.0.0.1:6379> exec\n1) (error) ERR value is not an integer or out of range\n2) OK\n3) "v2"\n127.0.0.1:6379> \n')),Object(c.b)("h2",{id:"redis\u5b9e\u73b0\u4e50\u89c2\u9501"},"Redis\u5b9e\u73b0\u4e50\u89c2\u9501"),Object(c.b)("h3",{id:"\u60b2\u89c2\u9501"},"\u60b2\u89c2\u9501"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u65e0\u8bba\u505a\u4ec0\u4e48\u90fd\u4f1a\u52a0\u9501")),Object(c.b)("h3",{id:"\u4e50\u89c2\u9501"},"\u4e50\u89c2\u9501"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u8ba4\u4e3a\u4e0d\u4f1a\u51fa\u4ec0\u4e48\u95ee\u9898\uff0c\u4e0d\u4f1a\u4e0a\u9501"),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u5728\u66f4\u65b0\u6570\u636e\u65f6\uff0c\u5224\u65ad\u5728\u6b64\u671f\u95f4\u662f\u5426\u6709\u4eba\u4fee\u6539\u8fc7\u6570\u636e"))),Object(c.b)("h3",{id:"redis\u76d1\u89c6\u6d4b\u8bd5watch"},"Redis\u76d1\u89c6\u6d4b\u8bd5\u2014\u2014watch"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"127.0.0.1:6379> set money 100\nOK\n127.0.0.1:6379> set out 0\nOK\n127.0.0.1:6379> watch money # \u76d1\u89c6money\u5bf9\u8c61\nOK\n127.0.0.1:6379> DECRBY money 20\nQUEUED\n127.0.0.1:6379> INCRBY out 20\nQUEUED\n127.0.0.1:6379> exec\n1) (integer) 80\n2) (integer) 20\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u4e8b\u52a1\u6b63\u5e38\u7ed3\u675f\uff0c\u6ca1\u6709\u5f02\u5e38")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u6a21\u62df\u591a\u7ebf\u7a0b\u60c5\u51b5\uff0c\u591a\u5f00Redis\u5ba2\u6237\u7aef")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u7ebf\u7a0b1"),Object(c.b)("p",{parentName:"li"},"\u5199\u4e00\u4e9b\u64cd\u4f5c\uff0c\u4f46\u5e76",Object(c.b)("strong",{parentName:"p"},"\u672a\u63d0\u4ea4\u4e8b\u52a1")))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"127.0.0.1:6379> watch money # \u76d1\u89c6Money\u8d44\u6e90\nOK\n127.0.0.1:6379> multi\nOK\n127.0.0.1:6379> DECRBY money 10\nQUEUED\n127.0.0.1:6379> INCRBY out 10\nQUEUED\n127.0.0.1:6379> \n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u7ebf\u7a0b2"),Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"\u7b2c\u4e8c\u6761\u7ebf\u7a0b\u4fee\u6539\u4e86\u5171\u4eab\u8d44\u6e90\u7684\u503c")))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'127.0.0.1:6379> get money\n"80"\n127.0.0.1:6379> set money 1000\nOK\n127.0.0.1:6379> \n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u6b64\u65f6\u7ebf\u7a0b1\u63d0\u4ea4\uff0cwatch\u6307\u4ee4\u4f1a\u53d1\u73b0\u5171\u4eab\u6570\u636e\u88ab\u4fee\u6539\u8fc7\u4e86\uff0c\u5219\u4e8b\u52a1\u63d0\u4ea4\u5931\u8d25")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"127.0.0.1:6379> exec\n(nil)\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u6b64\u65f6\uff0c\u8981",Object(c.b)("inlineCode",{parentName:"strong"},"unwatch"),"\u91ca\u653e\u76d1\u89c6\uff0c\u7136\u540e\u91cd\u65b0\u7528",Object(c.b)("inlineCode",{parentName:"strong"},"watch"),"\u5bf9\u5171\u4eab\u8d44\u6e90\u8fdb\u884c\u76d1\u89c6"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"127.0.0.1:6379> unwatch # 1.\u5982\u679c\u4e8b\u52a1\u5931\u8d25\uff0c\u5c31\u5148unwatch\u653e\u5f03\u9501\nOK\n127.0.0.1:6379> watch money # 2.\u518d\u6b21\u76d1\u89c6\uff0c\u83b7\u53d6\u65b0\u9501\nOK\n127.0.0.1:6379> multi\nOK\n127.0.0.1:6379> DECRBY money 1\nQUEUED\n127.0.0.1:6379> INCRBY money 1\nQUEUED\n127.0.0.1:6379> exec  # 3.\u6bd4\u5bf9\u76d1\u63a7\u503c\u662f\u5426\u53d1\u751f\u53d8\u5316\uff0c\u6ca1\u53d8\u5316\u5c31\u6267\u884c\u6210\u529f\n1) (integer) 990\n2) (integer) 1000\n")))}p.isMDXComponent=!0},347:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=p(n),O=a,m=u["".concat(b,".").concat(O)]||u[O]||s[O]||c;return n?r.a.createElement(m,l(l({ref:t},i),{},{components:n})):r.a.createElement(m,l({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,b=new Array(c);b[0]=O;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,b[1]=l;for(var i=2;i<c;i++)b[i]=n[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);