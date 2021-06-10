(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{265:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return o})),t.d(r,"default",(function(){return s}));var n=t(2),a=t(6),l=(t(0),t(347)),i={id:"12.shiroTemplateEngine",title:"Shiro\u6574\u5408\u6a21\u677f\u5f15\u64ce",hide_title:!0},c={unversionedId:"springboot/12.shiroTemplateEngine",id:"springboot/12.shiroTemplateEngine",isDocsHomePage:!1,title:"Shiro\u6574\u5408\u6a21\u677f\u5f15\u64ce",description:"Shiro\u6574\u5408\u6a21\u677f\u5f15\u64ce",source:"@site/docs/springboot/12.Shiro\u6574\u5408\u6a21\u677f\u5f15\u64ce.md",slug:"/springboot/12.shiroTemplateEngine",permalink:"/docs/springboot/12.shiroTemplateEngine",version:"current",sidebar:"someSidebar",previous:{title:"Shiro\u5b9e\u73b0\u8bf7\u6c42\u6388\u6743",permalink:"/docs/springboot/12.shiroAuthority"},next:{title:"Shiro\u5b9e\u73b0\u9000\u51fa\u767b\u5f55",permalink:"/docs/springboot/12.shiroLogout"}},o=[{value:"Shiro\u6574\u5408\u6a21\u677f\u5f15\u64ce",id:"shiro\u6574\u5408\u6a21\u677f\u5f15\u64ce",children:[{value:"Freemarker",id:"freemarker",children:[{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",children:[]},{value:"\u6240\u6709freemarker shiro\u6807\u7b7e",id:"\u6240\u6709freemarker-shiro\u6807\u7b7e",children:[]},{value:"\u6d4b\u8bd5\u2014\u2014\u6ca1\u767b\u5f55\u65f6\u663e\u793a\u767b\u5f55\u6309\u94ae",id:"\u6d4b\u8bd5\u6ca1\u767b\u5f55\u65f6\u663e\u793a\u767b\u5f55\u6309\u94ae",children:[]}]}]}],b={rightToc:o};function s(e){var r=e.components,i=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,i,{components:r,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"shiro\u6574\u5408\u6a21\u677f\u5f15\u64ce"},"Shiro\u6574\u5408\u6a21\u677f\u5f15\u64ce"),Object(l.b)("h2",{id:"freemarker"},"Freemarker"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u9700\u6c42\uff1a"),"\n",Object(l.b)("strong",{parentName:"p"},"\u6839\u636e\u5f53\u524d\u7528\u6237\u6240\u5177\u6709\u7684\u6743\u9650\uff0c\u663e\u793a\u5bf9\u5e94\u7684\u5185\u5bb9\uff0c\u6ca1\u6743\u9650\u7684\u64cd\u4f5c\u76f4\u63a5\u4e0d\u7ed9\u7528\u6237\u663e\u793a\uff0c\u53ea\u663e\u793a\u6709\u6743\u9650\u7684\u64cd\u4f5c")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Maven \u5750\u6807")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>net.mingsoft</groupId>\n    <artifactId>shiro-freemarker-tags</artifactId>\n    <version>0.1</version>\n</dependency>\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Freemarker\u914d\u7f6e\u7c7b")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'@Component\npublic class FreemarkerComponent {\n    @Autowired\n    private FreeMarkerConfigurer freeMarkerConfigurer;\n\n    @PostConstruct\n    public void setSharedVariable() throws TemplateModelException {\n        freeMarkerConfigurer.getConfiguration().setSharedVariable("shiro", new ShiroTags());\n    }\n}\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5728freemarker ftl\u9875\u9762\u4e0a\u4f7f\u7528shiro\u6807\u7b7e"),Object(l.b)("li",{parentName:"ul"},"index.ftl")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<body>\n\u9996\u9875<br>\n<#if msg??><p style="color:red">${msg}</p></#if>\n<hr>\n\n<@shiro.hasPermission name="user:add">\n    <a href="/user/add">add</a> \n</@shiro.hasPermission>\n\n<@shiro.hasPermission name="user:update">\n    <a href="/user/update">update</a>\n</@shiro.hasPermission>\n</body>\n')),Object(l.b)("h3",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"bb\u5177\u6709",Object(l.b)("inlineCode",{parentName:"li"},"user:add"),"\u6743\u9650\uff0c\u4ed6\u7684\u4e3b\u9875\u53ea\u80fd\u770b\u5230add\u94fe\u63a5"),Object(l.b)("li",{parentName:"ul"},"root\u5177\u6709",Object(l.b)("inlineCode",{parentName:"li"},"user:update"),"\u6743\u9650\uff0c\u4ed6\u7684\u4e3b\u9875\u53ea\u80fd\u770b\u5230update\u94fe\u63a5")),Object(l.b)("p",null,Object(l.b)("img",{src:t(628).default})),Object(l.b)("h3",{id:"\u6240\u6709freemarker-shiro\u6807\u7b7e"},"\u6240\u6709freemarker shiro\u6807\u7b7e"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"1.guest (\u6e38\u5ba2)"))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<@shiro.guest>  \n\u60a8\u5f53\u524d\u662f\u6e38\u5ba2\uff0c<a href="javascript:void(0);" class="dropdown-toggle qqlogin" >\u767b\u5f55</a>\n</@shiro.guest> \n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"2.user\uff08\u5df2\u7ecf\u767b\u5f55\uff0c\u6216\u8005\u8bb0\u4f4f\u6211\u767b\u5f55\uff09"))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<@shiro.user>  \n    \u6b22\u8fce[<@shiro.principal/>]\u767b\u5f55\uff0c<a href="/logout.shtml">\u9000\u51fa</a> </@shiro.user>   \n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"3.authenticated\uff08\u5df2\u7ecf\u8ba4\u8bc1\uff0c\u6392\u9664\u8bb0\u4f4f\u6211\u767b\u5f55\u7684\uff09"))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),"<@shiro.authenticated>      \n    \u7528\u6237[<@shiro.principal/>]\u5df2\u8eab\u4efd\u9a8c\u8bc1\u901a\u8fc7  \n</@shiro.authenticated>   \n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"4.notAuthenticated\uff08\u548cauthenticated\u76f8\u53cd\uff09"))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),"<@shiro.notAuthenticated>    \n    \u5f53\u524d\u8eab\u4efd\u672a\u8ba4\u8bc1\uff08\u5305\u62ec\u8bb0\u4f4f\u6211\u767b\u5f55\u7684\uff09\n</@shiro.notAuthenticated> \n")),Object(l.b)("p",null,"\u8fd9\u4e2a\u529f\u80fd\u4e3b\u8981\u7528\u9014\uff0c\u8bc6\u522b\u662f\u4e0d\u662f\u672c\u6b21\u64cd\u4f5c\u767b\u5f55\u8fc7\u7684\uff0c\u6bd4\u5982\u652f\u4ed8\u7cfb\u7edf\uff0c\u8fdb\u5165\u7cfb\u7edf\u53ef\u4ee5\u7528\u8bb0\u4f4f\u6211\u7684\u767b\u5f55\u4fe1\u606f\uff0c\u4f46\u662f\u5f53\u8981\u5173\u952e\u64cd\u4f5c\u7684\u65f6\u5019\uff0c\u9700\u8981\u8fdb\u884c\u8ba4\u8bc1\u8bc6\u522b\u3002"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"5.principal\u6807\u7b7e"),"\uff0c\u8fd9\u4e2a\u8981\u7a0d\u5fae\u91cd\u70b9\u8bb2\u8bb2\u3002\u597d\u591a\u535a\u5ba2\u90fd\u662f\u4e00\u4e0b\u5e26\u8fc7\u3002")),Object(l.b)("p",null,"principal\u6807\u7b7e\uff0c\u53d6\u503c\u53d6\u7684\u662f\u4f60\u767b\u5f55\u7684\u65f6\u5019\u3002\u5728Realm\u5b9e\u73b0\u7c7b\u4e2d\u7684\u5982\u4e0b\u4ee3\u7801\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"....return new SimpleAuthenticationInfo(user,user.getPswd(), getName());\n")),Object(l.b)("p",null,"\u5728new SimpleAuthenticationInfo(\u7b2c\u4e00\u4e2a\u53c2\u6570,....)\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u653e\u7684\u5982\u679c\u662f\u4e00\u4e2ausername\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u76f4\u63a5\u7528\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),"\x3c!--\u53d6\u5230username--\x3e\n<@shiro. principal/>\n")),Object(l.b)("p",null,"\u5982\u679c\u7b2c\u4e00\u4e2a\u53c2\u6570\u653e\u7684\u662f\u5bf9\u8c61\uff0c\u6bd4\u5982\u6211\u559c\u6b22\u653eUser\u5bf9\u8c61\u3002\u90a3\u4e48\u5982\u679c\u8981\u53d6username\u5b57\u6bb5\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'\x3c!--\u9700\u8981\u6307\u5b9aproperty--\x3e\n<@shiro.principal property="username"/>\n')),Object(l.b)("p",null,"\u548cJava\u5982\u4e0bJava\u4ee3\u7801\u4e00\u81f4"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"User user = (User)SecurityUtils.getSubject().getPrincipals();\nString username = user.getUsername();\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"6.hasRole\u6807\u7b7e\uff08\u5224\u65ad\u662f\u5426\u62e5\u6709\u8fd9\u4e2a\u89d2\u8272\uff09"))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<@shiro.hasRole name="admin">   \n    \u7528\u6237[<@shiro.principal/>]\u62e5\u6709\u89d2\u8272admin<br/>  \n</@shiro.hasRole>   \n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"7.hasAnyRoles\u6807\u7b7e\uff08\u5224\u65ad\u662f\u5426\u62e5\u6709\u8fd9\u4e9b\u89d2\u8272\u7684\u5176\u4e2d\u4e00\u4e2a\uff09"))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<@shiro.hasAnyRoles name="admin,user,member">  \n    \u7528\u6237[<@shiro.principal/>]\u62e5\u6709\u89d2\u8272admin\u6216user\u6216member<br/> </@shiro.hasAnyRoles>   \n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"8.lacksRole\u6807\u7b7e\uff08\u5224\u65ad\u662f\u5426\u4e0d\u62e5\u6709\u8fd9\u4e2a\u89d2\u8272\uff09"))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<@shiro.lacksRole name="admin">  \n    \u7528\u6237[<@shiro.principal/>]\u4e0d\u62e5\u6709admin\u89d2\u8272\n</@shiro.lacksRole>   \n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"9.hasPermission\u6807\u7b7e\uff08\u5224\u65ad\u662f\u5426\u6709\u62e5\u6709\u8fd9\u4e2a\u6743\u9650\uff09"))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<@shiro.hasPermission name="user:add">      \n    \u7528\u6237[<@shiro.principal/>]\u62e5\u6709user:add\u6743\u9650\n</@shiro.hasPermission>   \n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"10.lacksPermission\u6807\u7b7e\uff08\u5224\u65ad\u662f\u5426\u6ca1\u6709\u8fd9\u4e2a\u6743\u9650\uff09"))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<@shiro.lacksPermission name="user:add">    \n    \u7528\u6237[<@shiro.principal/>]\u4e0d\u62e5\u6709user:add\u6743\u9650\n</@shiro.lacksPermission>   \n')),Object(l.b)("h3",{id:"\u6d4b\u8bd5\u6ca1\u767b\u5f55\u65f6\u663e\u793a\u767b\u5f55\u6309\u94ae"},"\u6d4b\u8bd5\u2014\u2014\u6ca1\u767b\u5f55\u65f6\u663e\u793a\u767b\u5f55\u6309\u94ae"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<@shiro.notAuthenticated>\n    <h1><a href="/user/toLogin">\u767b\u5f55</a> </h1>\n</@shiro.notAuthenticated>\n')),Object(l.b)("p",null,Object(l.b)("img",{src:t(629).default})))}s.isMDXComponent=!0},347:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),s=function(e){var r=a.a.useContext(b),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=s(e.components);return a.a.createElement(b.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=s(t),m=n,d=u["".concat(i,".").concat(m)]||u[m]||p[m]||l;return t?a.a.createElement(d,c(c({ref:r},b),{},{components:t})):a.a.createElement(d,c({ref:r},b))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=m;var c={};for(var o in r)hasOwnProperty.call(r,o)&&(c[o]=r[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var b=2;b<l;b++)i[b]=t[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},628:function(e,r,t){"use strict";t.r(r),r.default=t.p+"assets/images/8-b75761615f748c1e8caf3d850d3db634.gif"},629:function(e,r,t){"use strict";t.r(r),r.default=t.p+"assets/images/9-b7edf9e458a97ec6ba30c87922aa3e01.gif"}}]);