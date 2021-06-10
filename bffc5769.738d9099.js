(window.webpackJsonp=window.webpackJsonp||[]).push([[380],{436:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),o=(r(0),r(556)),c={id:"16.crossOrigin",title:"\u89e3\u51b3\u8de8\u57df\u95ee\u9898",hide_title:!0},i={unversionedId:"security_Oauth2_JWT/16.crossOrigin",id:"security_Oauth2_JWT/16.crossOrigin",isDocsHomePage:!1,title:"\u89e3\u51b3\u8de8\u57df\u95ee\u9898",description:"\u89e3\u51b3\u8de8\u57df\u95ee\u9898",source:"@site/docs/security_Oauth2_JWT/16.\u8de8\u57df.md",slug:"/security_Oauth2_JWT/16.crossOrigin",permalink:"/docs/security_Oauth2_JWT/16.crossOrigin",version:"current",sidebar:"someSidebar",previous:{title:"Spring Security\u96c6\u6210JWT",permalink:"/docs/security_Oauth2_JWT/15.springsecurityJwt"},next:{title:"CSRF\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020\u653b\u51fb\u9632\u5fa1",permalink:"/docs/security_Oauth2_JWT/17.csrf"}},u=[{value:"\u89e3\u51b3\u8de8\u57df\u95ee\u9898",id:"\u89e3\u51b3\u8de8\u57df\u95ee\u9898",children:[]},{value:"\u524d\u7aef",id:"\u524d\u7aef",children:[]},{value:"\u914d\u7f6e\u7c7b",id:"\u914d\u7f6e\u7c7b",children:[]}],l={rightToc:u};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\u89e3\u51b3\u8de8\u57df\u95ee\u9898"},"\u89e3\u51b3\u8de8\u57df\u95ee\u9898"),Object(o.b)("hr",null),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"CORS(Cross Origin Resourse-Sharing) \u8de8\u7ad9\u8d44\u6e90\u5171\u4eab")),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u5b9e\u9645\u4e0a\u5148\u8fdb\u884c\u4e00\u6b21\u9884\u68c0\uff0c\u6765\u786e\u5b9a\u80fd\u5426\u8de8\u57df\u8bbf\u95ee")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u4e0d\u80fd\u8de8\u57df\u8bbf\u95ee\uff0c\u900f\u8fc7\u8bbe\u7f6e\u4e00\u7cfb\u5217\u7684",Object(o.b)("inlineCode",{parentName:"p"},"\u5934"),"\u6765\u5b9e\u73b0\u8de8\u57df")))),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.zimug.com/other/springboot/spring-%e9%87%8c%e9%82%a3%e4%b9%88%e5%a4%9a%e7%a7%8d-cors-%e7%9a%84%e9%85%8d%e7%bd%ae%e6%96%b9%e5%bc%8f%ef%bc%8c%e5%88%b0%e5%ba%95%e6%9c%89%e4%bb%80%e4%b9%88%e5%8c%ba%e5%88%ab/.html"}),"CORS\u914d\u7f6e")),Object(o.b)("h1",{id:"\u524d\u7aef"},"\u524d\u7aef"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"\u914d\u7f6e\u4e00\u52a0\u8f7d\u9875\u9762\u5c31\u53d1\u9001Ajax\u8bf7\u6c42\uff0c\u540c\u65f6\u643a\u5e26Token"))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'window.onload = function () {\n    var headers = {};\n    headers[\'JWTHeaderName\'] = "<\u8fd9\u91cc\u66ff\u6362\u4e3ajwt\u4ee4\u724c>";\n    $.ajax({\n        url: \'http://localhost:8081/hello\',\n        type: "POST",\n        headers: headers,\n        success: function (data) {\n            alert("\u8de8\u57df\u8bf7\u6c42\u914d\u7f6e\u6210\u529f")\n        },\n        error: function (data) {\n            alert("\u8de8\u57df\u8bf7\u6c42\u914d\u7f6e\u5931\u8d25")\n        }\n    });\n}\n')),Object(o.b)("h1",{id:"\u914d\u7f6e\u7c7b"},"\u914d\u7f6e\u7c7b"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"public class WebSecurityConfig extends WebSecurityConfigurerAdapter {\n    @Override\n    protected void configure(HttpSecurity http) throws Exception {\n        http.cors().and()\n        ...\n    }\n}\n")),Object(o.b)("blockquote",null,Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"\u8bbe\u5b9a\u8de8\u57df\u76ee\u6807\u7684\u7ad9\u70b9\u5730\u5740"),Object(o.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u5141\u8bb8\u8de8\u57df\u7684\u8bf7\u6c42\u6a21\u5f0f"),Object(o.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u5141\u8bb8\u8de8\u57df\u8bbf\u95ee\u7684\u8def\u7531\u5730\u5740"))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'@Bean\nCorsConfigurationSource corsConfigurationSource() {\n    CorsConfiguration configuration = new CorsConfiguration();\n    configuration.setAllowedOrigins(Arrays.asList("http://localhost:8888")); // \u524d\u7aef\u7684\u90e8\u7f72\u5730\u5740\uff0c\u5141\u8bb8\u54ea\u4e2aURL\u7684\u8bf7\u6c42\u8de8\u57df\u8bbf\u95ee\u6211\n    configuration.setAllowedMethods(Arrays.asList("GET", "POST"));\n    configuration.applyPermitDefaultValues();\n    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();\n    source.registerCorsConfiguration("/**", configuration);\n    return source;\n}\n')))}s.isMDXComponent=!0},556:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=s(r),O=n,d=b["".concat(c,".").concat(O)]||b[O]||p[O]||o;return r?a.a.createElement(d,i(i({ref:t},l),{},{components:r})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=O;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);