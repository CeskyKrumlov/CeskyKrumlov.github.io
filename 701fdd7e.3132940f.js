(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{288:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(6),c=(r(0),r(571)),i={id:"14.jwt",title:"JWT\u6982\u8ff0",hide_title:!0},l={unversionedId:"security_Oauth2_JWT/14.jwt",id:"security_Oauth2_JWT/14.jwt",isDocsHomePage:!1,title:"JWT\u6982\u8ff0",description:"JWT\u6982\u8ff0",source:"@site/docs/security_Oauth2_JWT/14.JWT\u6982\u8ff0.md",slug:"/security_Oauth2_JWT/14.jwt",permalink:"/docs/security_Oauth2_JWT/14.jwt",version:"current",sidebar:"someSidebar",previous:{title:"\u591a\u6b21\u767b\u9646\u5931\u8d25\u8d26\u6237\u9501\u5b9a",permalink:"/docs/security_Oauth2_JWT/13.accountLock"},next:{title:"Spring Security\u96c6\u6210JWT",permalink:"/docs/security_Oauth2_JWT/15.springsecurityJwt"}},u=[{value:"JWT\u6982\u8ff0",id:"jwt\u6982\u8ff0",children:[]},{value:"Session\u6a21\u5f0f\u7684\u7f3a\u9677",id:"session\u6a21\u5f0f\u7684\u7f3a\u9677",children:[]},{value:"JWT",id:"jwt",children:[]},{value:"JWT\u7684\u7ed3\u6784",id:"jwt\u7684\u7ed3\u6784",children:[]},{value:"JWT\u7684\u5b89\u5168\u6027",id:"jwt\u7684\u5b89\u5168\u6027",children:[{value:"\u5982\u4f55\u589e\u5f3aJWT\u5b89\u5168\u6027",id:"\u5982\u4f55\u589e\u5f3ajwt\u5b89\u5168\u6027",children:[]}]}],o={rightToc:u};function b(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,i,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"jwt\u6982\u8ff0"},"JWT\u6982\u8ff0"),Object(c.b)("h1",{id:"session\u6a21\u5f0f\u7684\u7f3a\u9677"},"Session\u6a21\u5f0f\u7684\u7f3a\u9677"),Object(c.b)("hr",null),Object(c.b)("p",null,Object(c.b)("img",{alt:"image-20200727155112773",src:r(958).default})),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Session\u3001cookie\u65e0\u5e8f\u7a0b\u5e8f\u5458\u624b\u52a8\u7ef4\u62a4\uff0c\u670d\u52a1\u5668\u7aef\u548c\u6d4f\u89c8\u5668\u7aef\u4f1a\u81ea\u52a8\u7ef4\u62a4\uff0cSession\u6a21\u5f0f\u5177\u6709\u5c40\u9650\u6027")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u975e\u6d4f\u89c8\u5668\u7684\u5ba2\u6237\u7aef\u3001\u624b\u673a\u7aefAPP\uff0c\u8fd9\u4e9b\u7a0b\u5e8f\u4e0d\u4f1a\u81ea\u52a8\u7ef4\u62a4cookie"),Object(c.b)("li",{parentName:"ul"},"session\u5b58\u50a8\u5728\u670d\u52a1\u5668\u7aef\uff0c\u5728\u5206\u5e03\u5f0f\u96c6\u7fa4\u73af\u5883\u4e0b\uff0c\u96be\u4ee5\u786e\u4fdd\u552f\u4e00\u6027\u548c\u4e00\u81f4\u6027")),Object(c.b)("h1",{id:"jwt"},"JWT"),Object(c.b)("hr",null),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://jwt.io/"}),"jwt.io"))),Object(c.b)("p",null,Object(c.b)("img",{alt:"image-20200727160028344",src:r(959).default})),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u9996\u5148\uff0c\u5ba2\u6237\u7aef\u9700\u8981\u5411\u670d\u52a1\u7aef\u7533\u8bf7JWT\u4ee4\u724c\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u901a\u5e38\u662f\u767b\u5f55\u529f\u80fd\u3002\u5373\uff1a\u7531\u7528\u6237\u540d\u548c\u5bc6\u7801\u6362\u53d6JWT\u4ee4\u724c\u3002"),Object(c.b)("li",{parentName:"ul"},"\u5f53\u4f60\u8bbf\u95ee\u7cfb\u7edf\u5176\u4ed6\u7684\u63a5\u53e3\u65f6\uff0c",Object(c.b)("strong",{parentName:"li"},"\u5728HTTP\u7684header\u4e2d\u643a\u5e26JWT\u4ee4\u724c"),"\u3002header\u7684\u540d\u79f0\u53ef\u4ee5\u81ea\u5b9a\u4e49\uff0c\u524d\u540e\u7aef\u5bf9\u5e94\u4e0a\u5373\u53ef\u3002"),Object(c.b)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u89e3\u7b7e\u9a8c\u8bc1JWT\u4e2d\u7684\u7528\u6237\u6807\u8bc6\uff0c\u6839\u636e\u7528\u6237\u6807\u8bc6\u4ece\u6570\u636e\u5e93\u4e2d\u52a0\u8f7d\u8bbf\u95ee\u6743\u9650\u3001\u7528\u6237\u4fe1\u606f\u7b49\u72b6\u6001\u4fe1\u606f\u3002")),Object(c.b)("h1",{id:"jwt\u7684\u7ed3\u6784"},"JWT\u7684\u7ed3\u6784"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"Header"),"\uff0c\u8fd9\u4e2a\u90e8\u5206\u901a\u5e38\u662f\u7528\u6765\u8bf4\u660eJWT\u4f7f\u7528\u7684\u7b97\u6cd5\u4fe1\u606f"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"payload"),"\uff0c\u8fd9\u4e2a\u90e8\u5206\u901a\u5e38\u7528\u4e8e\u643a\u5e26\u4e00\u4e9b\u81ea\u5b9a\u4e49\u7684\u72b6\u6001\u9644\u52a0\u4fe1\u606f\uff08\u91cd\u8981\u7684\u662f\u7528\u6237\u6807\u8bc6\uff09\u3002\u4f46\u662f\u6ce8\u610f\u8fd9\u90e8\u5206\u662f\u53ef\u4ee5\u660e\u6587\u89e3\u7801\u7684\uff0c\u6240\u4ee5\u6ce8\u610f\u662f\u7528\u6237\u6807\u8bc6\uff0c\u800c\u4e0d\u5e94\u8be5\u662f\u7528\u6237\u540d\u6216\u8005\u5176\u4ed6\u7528\u6237\u4fe1\u606f"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"signature"),"\uff0c\u8fd9\u90e8\u5206\u662f\u5bf9\u524d\u4e24\u90e8\u5206\u6570\u636e\u7684\u7b7e\u540d\uff0c\u9632\u6b62\u524d\u4e24\u90e8\u5206\u6570\u636e\u88ab\u7be1\u6539\u3002\u8fd9\u91cc\u9700\u8981\u6307\u5b9a\u4e00\u4e2a\u5bc6\u94a5secret\uff0c\u8fdb\u884c\u7b7e\u540d\u548c\u89e3\u7b7e")),Object(c.b)("p",null,Object(c.b)("img",{alt:"image",src:r(960).default})),Object(c.b)("h1",{id:"jwt\u7684\u5b89\u5168\u6027"},"JWT\u7684\u5b89\u5168\u6027"),Object(c.b)("hr",null),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"JWT\u5c31\u50cf\u662f\u4e00\u628a\u94a5\u5319\uff0c\u7528\u6765\u5f00\u4f60\u5bb6\u91cc\u7684\u9501\u3002\u7528\u6237\u628a\u94a5\u5319\u4e00\u65e6\u4e22\u4e86\uff0c\u5bb6\u81ea\u7136\u662f\u4e0d\u5b89\u5168\u7684\u3002\u5176\u5b9e\u548c\u4f7f\u7528session\u7ba1\u7406\u72b6\u6001\u662f\u4e00\u6837\u7684\uff0c\u4e00\u65e6\u7f51\u7edc\u6216\u6d4f\u89c8\u5668\u88ab\u52ab\u6301\u4e86\uff0c\u80af\u5b9a\u4e0d\u5b89\u5168\u3002"),Object(c.b)("li",{parentName:"ul"},"signature\u901a\u5e38\u88ab\u53eb\u505a\u7b7e\u540d\uff0c\u800c\u4e0d\u662f\u5bc6\u7801\u3002\u6bd4\u5982\uff1a\u5929\u738b\u76d6\u5730\u864e\u662f\u7b7e\u540d\uff0c\u5b9d\u5854\u9547\u6cb3\u5996\u5c31\u88ab\u7528\u6765\u89e3\u7b7e\u3002\u5b57\u4f60\u5168\u90fd\u8ba4\u8bc6\uff0c\u4f46\u662f\u6697\u53f7\u53ea\u6709\u77e5\u9053\u7684\u4eba\u624d\u5bf9\u5f97\u4e0a\u3002\u5f53\u7136JWT\u4e2d\u7684\u6697\u53f7secret\u4e0d\u4f1a\u8bbe\u8ba1\u7684\u50cf\u8bd7\u8bcd\u4e00\u6837\u7b80\u5355\u3002"),Object(c.b)("li",{parentName:"ul"},"JWT\u670d\u52a1\u7aef\u4e5f\u4fdd\u5b58\u4e86\u4e00\u628a\u94a5\u5319\uff0c\u5c31\u662f\u6697\u53f7secret\u3002\u7528\u6765\u6570\u636e\u7684\u7b7e\u540d\u548c\u89e3\u7b7e\uff0csecret\u4e00\u65e6\u4e22\u5931\uff0c\u6240\u6709\u7528\u6237\u90fd\u662f\u4e0d\u5b89\u5168\u7684\u3002\u6240\u4ee5\u5bf9\u4e8eIT\u4eba\u5458\uff0c\u66f4\u91cd\u8981\u7684\u662f\u4fdd\u62a4secret\u7684\u5b89\u5168\u3002")),Object(c.b)("h2",{id:"\u5982\u4f55\u589e\u5f3ajwt\u5b89\u5168\u6027"},"\u5982\u4f55\u589e\u5f3aJWT\u5b89\u5168\u6027"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u907f\u514d\u7f51\u7edc\u52ab\u6301\uff0c\u56e0\u4e3a\u4f7f\u7528HTTP\u7684header\u4f20\u9012JWT\uff0c\u6240\u4ee5\u4f7f\u7528HTTPS\u4f20\u8f93\u66f4\u52a0\u5b89\u5168\u3002\u8fd9\u6837\u5728\u7f51\u7edc\u5c42\u9762\u907f\u514d\u4e86JWT\u7684\u6cc4\u9732\u3002"),Object(c.b)("li",{parentName:"ul"},"secret\u662f\u5b58\u653e\u5728\u670d\u52a1\u5668\u7aef\u7684\uff0c\u6240\u4ee5\u53ea\u8981\u5e94\u7528\u670d\u52a1\u5668\u4e0d\u88ab\u653b\u7834\uff0c\u7406\u8bba\u4e0aJWT\u662f\u5b89\u5168\u7684\u3002\u56e0\u6b64\u8981\u4fdd\u8bc1\u670d\u52a1\u5668\u7684\u5b89\u5168\u3002"),Object(c.b)("li",{parentName:"ul"},'\u90a3\u4e48\u6709\u6ca1\u6709JWT\u52a0\u5bc6\u7b97\u6cd5\u88ab\u653b\u7834\u7684\u53ef\u80fd\uff1f\u5f53\u7136\u6709\u3002\u4f46\u662f\u5bf9\u4e8eJWT\u5e38\u7528\u7684\u7b97\u6cd5\u8981\u60f3\u653b\u7834\uff0c\u76ee\u524d\u5df2\u77e5\u7684\u65b9\u6cd5\u53ea\u80fd\u662f\u66b4\u529b\u7834\u89e3\uff0c\u767d\u8bdd\u8bf4\u5c31\u662f"\u8bd5\u5bc6\u7801"\u3002\u6240\u4ee5\u8981\u5b9a\u671f\u66f4\u6362secret\u5e76\u4e14\u4fdd\u6b63secret\u7684\u590d\u6742\u5ea6\uff0c\u7b49\u7834\u89e3\u7ed3\u679c\u51fa\u6765\u4e86\uff0c\u4f60\u7684secret\u5df2\u7ecf\u6362\u4e86\u3002')))}b.isMDXComponent=!0},571:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return j}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),b=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=b(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),s=b(r),O=n,j=s["".concat(i,".").concat(O)]||s[O]||p[O]||c;return r?a.a.createElement(j,l(l({ref:t},o),{},{components:r})):a.a.createElement(j,l({ref:t},o))}));function j(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=O;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var o=2;o<c;o++)i[o]=r[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"},958:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/8-f1a899971279bf147a0a0d8c6d4cef31.png"},959:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/9-9328d5e170607ed2b0044c96adeade87.png"},960:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/10-fa40ca9e79e1732eb8f95b8d918abb32.png"}}]);