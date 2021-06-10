(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{264:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),c=n(6),a=(n(0),n(520)),o={id:"17.csrf",title:"CSRF\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020\u653b\u51fb\u9632\u5fa1",hide_title:!0},i={unversionedId:"security_Oauth2_JWT/17.csrf",id:"security_Oauth2_JWT/17.csrf",isDocsHomePage:!1,title:"CSRF\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020\u653b\u51fb\u9632\u5fa1",description:"CSRF\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020\u653b\u51fb\u9632\u5fa1",source:"@site/docs/security_Oauth2_JWT/17.csrf.md",slug:"/security_Oauth2_JWT/17.csrf",permalink:"/docs/security_Oauth2_JWT/17.csrf",version:"current",sidebar:"someSidebar",previous:{title:"\u89e3\u51b3\u8de8\u57df\u95ee\u9898",permalink:"/docs/security_Oauth2_JWT/16.crossOrigin"},next:{title:"JWT\u96c6\u7fa4",permalink:"/docs/security_Oauth2_JWT/18.jwtCluster"}},l=[{value:"CSRF\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020\u653b\u51fb\u9632\u5fa1",id:"csrf\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020\u653b\u51fb\u9632\u5fa1",children:[]},{value:"CSRF\u653b\u51fb",id:"csrf\u653b\u51fb",children:[]},{value:"\u540e\u7aef\u9632\u5fa1",id:"\u540e\u7aef\u9632\u5fa1",children:[]},{value:"\u524d\u7aef\u643a\u5e26CSRF Token",id:"\u524d\u7aef\u643a\u5e26csrf-token",children:[]}],u={rightToc:l};function b(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"csrf\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020\u653b\u51fb\u9632\u5fa1"},"CSRF\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020\u653b\u51fb\u9632\u5fa1"),Object(a.b)("hr",null),Object(a.b)("h1",{id:"csrf\u653b\u51fb"},"CSRF\u653b\u51fb"),Object(a.b)("p",null,"\u901a\u5e38\u7684CSRF\u653b\u51fb\u65b9\u5f0f\u5982\u4e0b\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u4f60\u767b\u5f55\u4e86\u7f51\u7ad9A\uff0c\u653b\u51fb\u8005\u5411\u4f60\u7684\u7f51\u7ad9A\u8d26\u6237\u53d1\u9001\u7559\u8a00\u3001\u6216\u8005\u4f2a\u9020\u5d4c\u5165\u9875\u9762\uff0c\u5e26\u6709\u5371\u9669\u64cd\u4f5c\u94fe\u63a5\u3002"),Object(a.b)("li",{parentName:"ul"},"\u5f53\u4f60\u5728\u767b\u5f55\u72b6\u6001\u4e0b\u70b9\u51fb\u4e86\u653b\u51fb\u8005\u7684\u8fde\u63a5\uff0c\u56e0\u6b64\u8be5\u94fe\u63a5\u5bf9\u4f60\u7f51\u7ad9A\u7684\u8d26\u6237\u8fdb\u884c\u4e86\u64cd\u4f5c\u3002"),Object(a.b)("li",{parentName:"ul"},"\u8fd9\u4e2a\u64cd\u4f5c\u662f\u4f60\u5728\u7f51\u7ad9A\u4e2d\u4e3b\u52a8\u53d1\u51fa\u7684\uff0c\u5e76\u4e14\u4e5f\u662f\u9488\u5bf9\u7f51\u7ad9A\u7684HTTP\u94fe\u63a5\u8bf7\u6c42\uff0c\u540c\u6e90\u7b56\u7565\u65e0\u6cd5\u9650\u5236\u8be5\u8bf7\u6c42\u3002")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'\u5982\u679c\u4f60\u4e0d\u5c0f\u5fc3\u70b9\u51fb\u7684\u8fde\u63a5\uff0c\u662f\u9488\u5bf9\u7f51\u7ad9\u7684\u6570\u636e\u64cd\u4f5c\uff0c\u5982\uff1a\u8f6c\u51fa\u8d27\u5e01\uff0c\u4f60\u7684\u94b1\u5c31\u88ab\u8f6c\u8d70\u4e86\u3002\u56e0\u4e3a\u70b9\u51fb"\u94fe\u63a5"\u7684\u8bf7\u6c42\u662fHTTP\u7684GET\u8bf7\u6c42\uff0c\u6240\u4ee5\u6b63\u89c4\u7684\u5f00\u53d1\u4eba\u5458\u7684\u505a\u6cd5\u662f\u4e0d\u8981\u4f7f\u7528GET\u65b9\u6cd5\u8fdb\u884c\u6570\u636e\u64cd\u4f5c\uff0c\u53ea\u4f7f\u7528GET\u65b9\u6cd5\u8fdb\u884c\u6570\u636e\u67e5\u8be2\u3002')),Object(a.b)("h1",{id:"\u540e\u7aef\u9632\u5fa1"},"\u540e\u7aef\u9632\u5fa1"),Object(a.b)("hr",null),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class WebSecurityConfig extends WebSecurityConfigurerAdapter {\n    @Override\n    protected void configure(HttpSecurity http) throws Exception {\n        http.csrf()\n            .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())\n            .ignoringAntMatchers("/authentication");\n        .and()\n        ...\n    }\n}\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u4f7f\u7528CookieCsrfTokenRepository\u751f\u6210CSRF Token\u653e\u5165cookie\uff0c\u5e76\u8bbe\u7f6ecookie\u7684HttpOnly=false\uff0c\u5141\u8bb8\u8bfb\u53d6\u8be5cookie\u3002\u8fd9\u6837\u975e\u6d4f\u89c8\u5668\u7b49\u65e0\u6cd5\u81ea\u52a8\u7ef4\u62a4cookie\u7684\u5ba2\u6237\u7aef\u53ef\u4ee5\u8bfb\u53d6cookie\u4e2d\u7684CSRF Token\uff0c\u4ee5\u4f9b\u540e\u7eed\u8d44\u6e90\u8bf7\u6c42\u4e2d\u4f7f\u7528\u3002"),Object(a.b)("li",{parentName:"ul"},"\u4f7f\u7528ignoringAntMatchers\u5f00\u653e\u4e00\u4e9b\u4e0d\u9700\u8981\u8fdb\u884cCSRF\u9632\u62a4\u7684\u8bbf\u95ee\u8def\u5f84\uff0c\u6bd4\u5982\uff1a\u767b\u5f55\u6388\u6743\u3002")),Object(a.b)("p",null,"\u81f3\u6b64\uff0c\u6211\u4eec\u751f\u6210\u4e86CSRF token\u4fdd\u5b58\u5728\u4e86cookies\u4e2d\uff0c\u6d4f\u89c8\u5668\u5411\u670d\u52a1\u7aef\u53d1\u9001\u7684HTTP\u8bf7\u6c42\uff0c\u90fd\u8981\u5c06CSRF token\u5e26\u4e0a\uff0c\u670d\u52a1\u7aef\u6821\u9a8c\u901a\u8fc7\u624d\u80fd\u6b63\u786e\u7684\u54cd\u5e94\u3002\u8fd9\u4e2a\u6821\u9a8c\u7684\u8fc7\u7a0b\u5e76\u4e0d\u9700\u8981\u6211\u4eec\u81ea\u5df1\u5199\u4ee3\u7801\u5b9e\u73b0\uff0cSpring Security\u4f1a\u81ea\u52a8\u5904\u7406\u3002\u4f46\u662f\u6211\u4eec\u9700\u8981\u5173\u6ce8\u524d\u7aef\u4ee3\u7801\uff0c\u5982\u4f55\u6b63\u786e\u7684\u643a\u5e26CSRF token\u3002"),Object(a.b)("h1",{id:"\u524d\u7aef\u643a\u5e26csrf-token"},"\u524d\u7aef\u643a\u5e26CSRF Token"),Object(a.b)("hr",null),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u4ee5Thymeleaf\u4e3a\u4f8b"),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"\u5176\u4ed6\u6a21\u677f\u5f15\u64ce\u6216\u524d\u7aef\u6846\u67b6\uff0c",Object(a.b)("strong",{parentName:"li"},"\u9700\u8981\u81ea\u5df1\u5199\u4ee3\u7801\u4eceCookie\u4e2d\u62ff\u8fd9\u4e2aCSRF Token")))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u5728Header\u4e2d\u643a\u5e26CSRF token")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"var headers = {};\nheaders['X-XSRF-TOKEN'] = \"${_csrf.token}\";\n$.ajax({    \n    headers: headers,    \n});\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u76f4\u63a5\u4f5c\u4e3a\u53c2\u6570\u63d0\u4ea4\u3002")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'$.ajax({    \n    data: {      \n       "_csrf": "${_csrf.token}"        \n    }\n});\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u8868\u5355\u7684\u9690\u85cf\u5b57\u6bb5")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}">\n')))}b.isMDXComponent=!0},520:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=c.a.createContext({}),b=function(e){var t=c.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=b(n),O=r,f=p["".concat(o,".").concat(O)]||p[O]||s[O]||a;return n?c.a.createElement(f,i(i({ref:t},u),{},{components:n})):c.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=O;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);