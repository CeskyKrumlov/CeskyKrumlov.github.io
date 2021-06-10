(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(331)),i={id:"11.authority",title:"\u6743\u9650\u63a7\u5236\u4e0e\u6ce8\u9500",hide_title:!0},c={unversionedId:"springboot/11.authority",id:"springboot/11.authority",isDocsHomePage:!1,title:"\u6743\u9650\u63a7\u5236\u4e0e\u6ce8\u9500",description:"\u6743\u9650\u63a7\u5236\u4e0e\u6ce8\u9500",source:"@site/docs/springboot/11.\u6743\u9650\u63a7\u5236\u4e0e\u6ce8\u9500.md",permalink:"/docs/springboot/11.authority",sidebar:"someSidebar",previous:{title:"\u8ba4\u8bc1\u548c\u6388\u6743",permalink:"/docs/springboot/11.authentication"},next:{title:"\u8bb0\u4f4f\u6211\u4e0e\u767b\u5f55\u9875\u5b9a\u5236",permalink:"/docs/springboot/11.rememberMe"}},l=[{value:"\u6743\u9650\u63a7\u5236\u4e0e\u6ce8\u9500",id:"\u6743\u9650\u63a7\u5236\u4e0e\u6ce8\u9500",children:[{value:"\u6ce8\u9500",id:"\u6ce8\u9500",children:[]},{value:"\u6743\u9650\u63a7\u5236",id:"\u6743\u9650\u63a7\u5236",children:[]}]}],p={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\u6743\u9650\u63a7\u5236\u4e0e\u6ce8\u9500"},"\u6743\u9650\u63a7\u5236\u4e0e\u6ce8\u9500"),Object(o.b)("h2",{id:"\u6ce8\u9500"},"\u6ce8\u9500"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Override\n    protected void configure(HttpSecurity http) throws Exception {\n        //\u8ba4\u8bc1\u8bf7\u6c42.\u6388\u6743\u8bf7\u6c42.\u5141\u8bb8\u6240\u6709\u4eba.\u6388\u6743\u8bf7\u6c42.\u5177\u6709\u8eab\u4efd\n        http.authorizeRequests()\n                .antMatchers("/").permitAll()\n                .antMatchers("/level1/**").hasRole("vip1")\n                .antMatchers("/level2/**").hasRole("vip2")\n                .antMatchers("/level3/**").hasRole("vip3");\n\n        //\u6ca1\u6743\u9650\u5c31\u8df3\u8f6c\u5230\u767b\u5f55\u9875\u9762\n        http.formLogin();\n        //\u6ce8\u9500\n        http.logout();\n    }\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u81ea\u52a8\u8bbf\u95ee",Object(o.b)("inlineCode",{parentName:"li"},"/logout"),"\uff0c\u5982\u679c\u6ce8\u9500\u6210\u529f\uff0c\u81ea\u52a8\u91cd\u5b9a\u5411\u5230",Object(o.b)("inlineCode",{parentName:"li"},"/login?success"),"\n\u5982\u679c\u60f3\u8df3\u56de\u9996\u9875\uff0c\u53ef\u4ee5",Object(o.b)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49"))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'http.logout().logoutSuccessUrl("/");\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5728index.html\u9875\u9762\u5bfc\u822a\u680f\u4e2d\uff0c\u6dfb\u52a0\u4e00\u4e2a\u6ce8\u9500\u6309\u94ae")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<a class="item" th:href="@{/logout}">\n   <i class="address card icon"></i> \u6ce8\u9500\n</a>\n')),Object(o.b)("h2",{id:"\u6743\u9650\u63a7\u5236"},"\u6743\u9650\u63a7\u5236"),Object(o.b)("p",null,"\u6839\u636e\u6743\u9650\u51b3\u5b9a\u663e\u793a\u4e0d\u540c\u7684\u5185\u5bb9\uff0c\u53ef\u4ee5\u7528\u6a21\u677f\u5f15\u64ce\u7684",Object(o.b)("inlineCode",{parentName:"p"},"if"),"\u529f\u80fd\u505a"))}u.isMDXComponent=!0},331:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);