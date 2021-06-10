(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{172:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(2),c=r(6),o=(r(0),r(482)),a={id:"18.jwtCluster",title:"JWT\u96c6\u7fa4",hide_title:!0},u={unversionedId:"security_Oauth2_JWT/18.jwtCluster",id:"security_Oauth2_JWT/18.jwtCluster",isDocsHomePage:!1,title:"JWT\u96c6\u7fa4",description:"JWT\u90e8\u7f72\u96c6\u7fa4",source:"@site/docs/security_Oauth2_JWT/18.jwt\u96c6\u7fa4.md",slug:"/security_Oauth2_JWT/18.jwtCluster",permalink:"/docs/security_Oauth2_JWT/18.jwtCluster",version:"current",sidebar:"someSidebar",previous:{title:"CSRF\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020\u653b\u51fb\u9632\u5fa1",permalink:"/docs/security_Oauth2_JWT/17.csrf"}},l=[{value:"JWT\u90e8\u7f72\u96c6\u7fa4",id:"jwt\u90e8\u7f72\u96c6\u7fa4",children:[{value:"\u8ba4\u8bc1\u670d\u52a1\u5668",id:"\u8ba4\u8bc1\u670d\u52a1\u5668",children:[]},{value:"\u670d\u52a1\u7f51\u5173",id:"\u670d\u52a1\u7f51\u5173",children:[]},{value:"\u8d44\u6e90\u670d\u52a1\u5668",id:"\u8d44\u6e90\u670d\u52a1\u5668",children:[]}]},{value:"\u5b8c\u6574\u4ee3\u7801",id:"\u5b8c\u6574\u4ee3\u7801",children:[]}],i={rightToc:l};function b(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"jwt\u90e8\u7f72\u96c6\u7fa4"},"JWT\u90e8\u7f72\u96c6\u7fa4"),Object(o.b)("hr",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u7531\u4e8eJWT\u662f\u65e0\u72b6\u6001\u7684\uff0c\u6240\u4ee5\u53ef\u4ee5\u8f7b\u6613\u7684\u62d3\u5c55\u5230\u96c6\u7fa4\u73af\u5883")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u53ea\u8981\u5404\u4e2a\u7ad9\u70b9\u4f7f\u7528\u7684\u7528\u6237\u6743\u9650\u4fe1\u606f\u4e00\u81f4"),Object(o.b)("li",{parentName:"ul"},"\u53ea\u8981\u5404\u4e2a\u7ad9\u70b9\u4f7f\u7528\u7684JWT Secret\u4fe1\u606f\u4e00\u81f4"),Object(o.b)("li",{parentName:"ul"},"Jwt\u76f8\u5173Filter\u662f\u4e00\u5957"),Object(o.b)("li",{parentName:"ul"},"Jwt\u76f8\u5173Controller\u662f\u4e00\u5957")),Object(o.b)("p",null,"\u5373\u53ef"),Object(o.b)("h2",{id:"\u8ba4\u8bc1\u670d\u52a1\u5668"},"\u8ba4\u8bc1\u670d\u52a1\u5668"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u65e2\u7136\u6bcf\u4e2a\u7ad9\u70b9\u7528\u7684Jwt Controller\u4e00\u6837\uff0c\u90a3\u53ef\u4ee5\u5427Controller\u5355\u72ec\u62bd\u51fa\u6765\u505a\u6210\u4e00\u4e2a\u7ad9\u70b9\uff0c\u7528\u6765\u751f\u6210Jwt Token\uff0c\u5c31\u662f\u8ba4\u8bc1\u670d\u52a1\u5668")),Object(o.b)("h2",{id:"\u670d\u52a1\u7f51\u5173"},"\u670d\u52a1\u7f51\u5173"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u8fd8\u53ef\u4ee5\u628aJwtFilter\u4e5f\u62bd\u51fa\u6765\uff0c\u505a\u6210\u4e00\u4e2a\u670d\u52a1\u7f51\u5173\uff0c\u53bb\u4e0d\u540c\u7ad9\u70b9\u7684\u8bf7\u6c42\u8d70\u540c\u4e00\u4e2aJwt\u8fc7\u6ee4\u5668"),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"JwtFilter\u7684\u62bd\u53d6\u5e76\u4e0d\u7b80\u5355\uff0c\u56e0\u4e3a\u5b83\u8fd8\u6d89\u53ca\u5230\u8bf7\u6c42\u8f6c\u53d1\u7684\u95ee\u9898"))),Object(o.b)("h2",{id:"\u8d44\u6e90\u670d\u52a1\u5668"},"\u8d44\u6e90\u670d\u52a1\u5668"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"\u5728\u540e\u9762\u90fd\u662f\u6709\u5b9e\u9645\u4e1a\u52a1\u6570\u636e\u7684\u8d44\u6e90\u670d\u52a1\u5668"))),Object(o.b)("h1",{id:"\u5b8c\u6574\u4ee3\u7801"},"\u5b8c\u6574\u4ee3\u7801"),Object(o.b)("hr",null),Object(o.b)("p",null,"\u94fe\u63a5\uff1a",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://pan.baidu.com/s/1KGwp00TuHNzPQk3goEgu9A"}),"https://pan.baidu.com/s/1KGwp00TuHNzPQk3goEgu9A"),"\n\u63d0\u53d6\u7801\uff1a17la"))}b.isMDXComponent=!0},482:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),c=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var i=c.a.createContext({}),b=function(e){var t=c.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=b(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=b(r),O=n,d=p["".concat(a,".").concat(O)]||p[O]||s[O]||o;return r?c.a.createElement(d,u(u({ref:t},i),{},{components:r})):c.a.createElement(d,u({ref:t},i))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=O;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var i=2;i<o;i++)a[i]=r[i];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);