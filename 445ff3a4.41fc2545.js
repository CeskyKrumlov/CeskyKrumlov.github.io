(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),o=(n(0),n(353)),i={id:"11.rememberMe",title:"\u8bb0\u4f4f\u6211\u4e0e\u767b\u5f55\u9875\u5b9a\u5236",hide_title:!0},c={unversionedId:"springboot/11.rememberMe",id:"springboot/11.rememberMe",isDocsHomePage:!1,title:"\u8bb0\u4f4f\u6211\u4e0e\u767b\u5f55\u9875\u5b9a\u5236",description:"\u8bb0\u4f4f\u6211\u4e0e\u767b\u5f55\u9875\u5b9a\u5236",source:"@site/docs/springboot/11.\u8bb0\u4f4f\u6211\u4e0e\u767b\u5f55\u9875\u5b9a\u5236.md",slug:"/springboot/11.rememberMe",permalink:"/docs/springboot/11.rememberMe",version:"current",sidebar:"someSidebar",previous:{title:"\u6743\u9650\u63a7\u5236\u4e0e\u6ce8\u9500",permalink:"/docs/springboot/11.authority"},next:{title:"Shrio",permalink:"/docs/springboot/12.shiro"}},l=[{value:"\u8bb0\u4f4f\u6211\u4e0e\u767b\u5f55\u9875\u5b9a\u5236",id:"\u8bb0\u4f4f\u6211\u4e0e\u767b\u5f55\u9875\u5b9a\u5236",children:[{value:"\u8bb0\u4f4f\u6211",id:"\u8bb0\u4f4f\u6211",children:[]},{value:"\u5b9a\u5236\u767b\u9646\u9875",id:"\u5b9a\u5236\u767b\u9646\u9875",children:[]}]}],p={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\u8bb0\u4f4f\u6211\u4e0e\u767b\u5f55\u9875\u5b9a\u5236"},"\u8bb0\u4f4f\u6211\u4e0e\u767b\u5f55\u9875\u5b9a\u5236"),Object(o.b)("h2",{id:"\u8bb0\u4f4f\u6211"},"\u8bb0\u4f4f\u6211"),Object(o.b)("p",null,"\u4e4b\u524d\uff0c\u53ea\u8981\u767b\u5f55\u4e4b\u540e\uff0c\u5173\u95ed\u6d4f\u89c8\u5668\uff0c\u518d\u6253\u5f00\u6d4f\u89c8\u5668\uff0c\u5c31\u4f1a\u8ba9\u7528\u6237\u91cd\u65b0\u767b\u9646\u3002"),Object(o.b)("p",null,"\u5f88\u591a\u7f51\u7ad9\u6709\u8bb0\u4f4f\u5bc6\u7801\u529f\u80fd"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u914d\u7f6e\u8bb0\u4f4f\u6211")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Override\nprotected void configure(HttpSecurity http) throws Exception {\n    //\u8ba4\u8bc1\u8bf7\u6c42.\u6388\u6743\u8bf7\u6c42.\u5141\u8bb8\u6240\u6709\u4eba.\u6388\u6743\u8bf7\u6c42.\u5177\u6709\u8eab\u4efd\n    http.authorizeRequests()\n        .antMatchers("/").permitAll()\n        .antMatchers("/level1/**").hasRole("vip1")\n        .antMatchers("/level2/**").hasRole("vip2")\n        .antMatchers("/level3/**").hasRole("vip3");\n\n    //\u6ca1\u6743\u9650\u5c31\u8df3\u8f6c\u5230\u767b\u5f55\u9875\u9762\n    http.formLogin();\n    //\u6ce8\u9500\n    http.logout().logoutSuccessUrl("/");\n    //\u8bb0\u4f4f\u6211\n    http.rememberMe();\n}\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u914d\u7f6e\u5b8c\u540e\uff0c\u4f1a\u53d1\u73b0\u767b\u5f55\u9875\u591a\u4e86\u4e00\u4e2a\u8bb0\u4f4f\u6211\u529f\u80fd\uff0c\u5173\u95ed\u6d4f\u89c8\u5668\u518d\u6b21\u6253\u5f00\uff0c\u53d1\u73b0\u7528\u6237\u4f9d\u7136\u5b58\u5728"),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"\u8fd9\u662f\u901a\u8fc7Cookie\u5b9e\u73b0\u7684"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u70b9\u51fb",Object(o.b)("inlineCode",{parentName:"p"},"\u6ce8\u9500"),"\u65f6\uff0c\u4f1a\u53d1\u73b0SpringSecurity\u81ea\u52a8\u5220\u9664\u4e86\u5bf9\u5e94Cookie"))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u767b\u9646\u6210\u529f\u540e\uff0c\u670d\u52a1\u5668\u5c06cookie\u53d1\u9001\u7ed9\u6d4f\u89c8\u5668\u4fdd\u5b58\uff0c\u4ee5\u540e\u767b\u5f55\u5e26\u7740\u8fd9\u4e2acookie\uff0c\u4e3b\u8981\u901a\u8fc7\u68c0\u67e5\u5c31\u53ef\u4ee5\u514d\u767b\u9646\u4e86\u3002\u5982\u679c\u70b9\u51fb\u6ce8\u9500\uff0c\u5c31\u4f1a\u5220\u9664\u8fd9\u4e2acookie"))),Object(o.b)("h2",{id:"\u5b9a\u5236\u767b\u9646\u9875"},"\u5b9a\u5236\u767b\u9646\u9875"),Object(o.b)("p",null,"\u5c06\u767b\u5f55\u4fe1\u606f\u53d1\u9001\u5230\u54ea\u91cc\u4e5f\u9700\u8981\u914d\u7f6e\uff0clogin.html\u5fc5\u987b\u4ee5POST\u65b9\u5f0f\u63d0\u4ea4\u8bf7\u6c42"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<form th:action="@{/login}" method="post">\n   <div class="field">\n       <label>Username</label>\n       <div class="ui left icon input">\n           <input type="text" placeholder="Username" name="username">\n           <i class="user icon"></i>\n       </div>\n   </div>\n   <div class="field">\n       <label>Password</label>\n       <div class="ui left icon input">\n           <input type="password" name="password">\n           <i class="lock icon"></i>\n       </div>\n   </div>\n   <input type="checkbox" name="remember"> \u8bb0\u4f4f\u6211\n   <input type="submit" class="ui blue submit button"/>\n</form>\n')),Object(o.b)("p",null,"\u4e0d\u7528SpringSecurity\u81ea\u5e26\u7684\u767b\u9646\u9875\u9762\uff0c\u6307\u5b9a\u81ea\u5df1\u7684\u767b\u9646\u9875\u9762\uff0c\u643a\u5e26\u524d\u7aef\u7684username\u548cpassword\u5c5e\u6027\uff0c\u6307\u5b9a\u5904\u7406\u767b\u5f55\u9a8c\u8bc1\u7684\u8def\u7531"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Override\nprotected void configure(HttpSecurity http) throws Exception {\n    //\u8ba4\u8bc1\u8bf7\u6c42.\u6388\u6743\u8bf7\u6c42.\u5141\u8bb8\u6240\u6709\u4eba.\u6388\u6743\u8bf7\u6c42.\u5177\u6709\u8eab\u4efd\n    http.authorizeRequests()\n        .antMatchers("/").permitAll()\n        .antMatchers("/level1/**").hasRole("vip1")\n        .antMatchers("/level2/**").hasRole("vip2")\n        .antMatchers("/level3/**").hasRole("vip3");\n\n    //\u6ca1\u6743\u9650\u5c31\u8df3\u8f6c\u5230\u767b\u5f55\u9875\u9762\n    http.formLogin()\n        .usernameParameter("username")\n        .passwordParameter("password")\n        .loginPage("/toLogin")\n        .loginProcessingUrl("/login");\n    //\u6ce8\u9500\n    http.logout().logoutSuccessUrl("/");\n    //\u8bb0\u4f4f\u6211\n    http.rememberMe();\n}\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u518d\u767b\u5f55\u9875\u589e\u52a0",Object(o.b)("inlineCode",{parentName:"li"},"\u8bb0\u4f4f\u6211"),"\u591a\u9009\u6846")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<input type="checkbox" name="remember"> \u8bb0\u4f4f\u6211\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49",Object(o.b)("inlineCode",{parentName:"li"},"\u8bb0\u4f4f\u6211"),"\u53c2\u6570")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'http.rememberMe().rememberMeParameter("remember");\n')))}b.isMDXComponent=!0},353:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),m=r,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);