(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{318:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(561)),i={id:"12.shiroAuthentication",title:"Shiro\u5b9e\u73b0\u7528\u6237\u8ba4\u8bc1",hide_title:!0},l={unversionedId:"springboot/12.shiroAuthentication",id:"springboot/12.shiroAuthentication",isDocsHomePage:!1,title:"Shiro\u5b9e\u73b0\u7528\u6237\u8ba4\u8bc1",description:"Shiro\u5b9e\u73b0\u7528\u6237\u8ba4\u8bc1",source:"@site/docs/springboot/12.Shiro\u7528\u6237\u8ba4\u8bc1.md",slug:"/springboot/12.shiroAuthentication",permalink:"/docs/springboot/12.shiroAuthentication",version:"current",sidebar:"someSidebar",previous:{title:"Shiro\u5b9e\u73b0\u767b\u5f55\u62e6\u622a",permalink:"/docs/springboot/12.shiroLogin"},next:{title:"Shrio\u6574\u5408Mybatis",permalink:"/docs/springboot/12.shiroMybatis"}},c=[{value:"Shiro\u5b9e\u73b0\u7528\u6237\u8ba4\u8bc1",id:"shiro\u5b9e\u73b0\u7528\u6237\u8ba4\u8bc1",children:[{value:"Controller\u8ba1\u7b97Token\u5b9e\u73b0\u767b\u5f55",id:"controller\u8ba1\u7b97token\u5b9e\u73b0\u767b\u5f55",children:[]},{value:"\u81ea\u5b9a\u4e49Realm\u67e5\u8be2\u7528\u6237\u540d\u5bc6\u7801",id:"\u81ea\u5b9a\u4e49realm\u67e5\u8be2\u7528\u6237\u540d\u5bc6\u7801",children:[]},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",children:[]}]}],b={rightToc:c};function p(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"shiro\u5b9e\u73b0\u7528\u6237\u8ba4\u8bc1"},"Shiro\u5b9e\u73b0\u7528\u6237\u8ba4\u8bc1"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\u767b\u5f55\u6210\u529f\uff0c\u5219\u524d\u5f80index\u9875\u9762")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\u767b\u5f55\u5931\u8d25\uff0c\u8f93\u51fa\u5931\u8d25\u539f\u56e0"))),Object(o.b)("h2",{id:"controller\u8ba1\u7b97token\u5b9e\u73b0\u767b\u5f55"},"Controller\u8ba1\u7b97Token\u5b9e\u73b0\u767b\u5f55"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u65b0\u5efa\u767b\u5f55\u8def\u7531",Object(o.b)("inlineCode",{parentName:"li"},"/user/login"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u4f7f\u7528",Object(o.b)("inlineCode",{parentName:"li"},"SecurityUtils"),"\u83b7\u53d6\u5f53\u524d\u7528\u6237"),Object(o.b)("li",{parentName:"ul"},"\u4f7f\u7528",Object(o.b)("inlineCode",{parentName:"li"},"UsernamePasswordToken"),"\u7684\u6784\u9020\u65b9\u6cd5\uff0c\u4f20\u5165username\u548cpassword\u6765\u751f\u6210",Object(o.b)("inlineCode",{parentName:"li"},"Token")),Object(o.b)("li",{parentName:"ul"},"\u7528",Object(o.b)("inlineCode",{parentName:"li"},"Token"),"\u767b\u5f55\uff0c",Object(o.b)("strong",{parentName:"li"},"\u4f1a\u8fdb\u5165",Object(o.b)("inlineCode",{parentName:"strong"},"UserRealm"),"\u7684\u8ba4\u8bc1\u65b9\u6cd5"))))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@RequestMapping("/user/login")\npublic String login(HttpServletRequest request, Model model) {\n    String username = request.getParameter("username");\n    String password = request.getParameter("password");\n    Subject currentUser = SecurityUtils.getSubject();\n    UsernamePasswordToken token = new UsernamePasswordToken(username, password);\n    //\u62ff\u7740token\u767b\u5f55\n    try {\n        //\u4f1a\u8fdb\u5165UserRealm\u7684\u8ba4\u8bc1\u65b9\u6cd5\n        currentUser.login(token);\n        return "index";\n    } catch (UnknownAccountException e) { //\u7528\u6237\u540d\u4e0d\u5b58\u5728\n        model.addAttribute("msg", "\u7528\u6237\u540d\u4e0d\u5b58\u5728");\n        return "user/login";\n    } catch (IncorrectCredentialsException e) {//\u5bc6\u7801\u9519\u8bef\n        model.addAttribute("msg", "\u5bc6\u7801\u9519\u8bef");\n        return "user/login";\n    }\n}\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u767b\u5f55\u9875\u9762",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u6dfb\u52a0\u8868\u5355\u63d0\u4ea4\u8def\u7531\u5730\u5740"),Object(o.b)("li",{parentName:"ul"},"\u5982\u679c\u767b\u9646\u5931\u8d25\uff0c\u663e\u793a\u5931\u8d25\u539f\u56e0")))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<body>\n<h1>\u767b\u5f55</h1><br>\n<#-- \u53ea\u6709msg\u5b58\u5728\u65f6\uff0c\u624d\u663e\u793amsg\u5185\u5bb9--\x3e\n<#if msg??><p style="color: red">${msg}</p> </#if>\n<form action="/user/login" method="post">\n    <p> \u7528\u6237\u540d\uff1a<input type="text" name="username"/></p>\n    <p> \u5bc6\u7801\uff1a<input type="password" name="password"/></p>\n    <p><input type="submit" value="\u767b\u5f55"></p>\n</form>\n</body>\n')),Object(o.b)("h2",{id:"\u81ea\u5b9a\u4e49realm\u67e5\u8be2\u7528\u6237\u540d\u5bc6\u7801"},"\u81ea\u5b9a\u4e49Realm\u67e5\u8be2\u7528\u6237\u540d\u5bc6\u7801"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u83b7\u53d6Controller\u8ba1\u7b97\u597d\u7684token\uff0c"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u4ecetoken\u83b7\u53d6\u7528\u6237\u540d\u3001\u5bc6\u7801"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u67e5\u8be2\u6570\u636e\u5e93\u83b7\u53d6\u7528\u6237\u4fe1\u606f"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u67e5\u8be2\u7528\u6237\u540d\u3001\u5bc6\u7801"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u8ba4\u8bc1"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u8c03\u7528",Object(o.b)("inlineCode",{parentName:"p"},"token.getUsername"),"\u8ba4\u8bc1\u7528\u6237\u540d\uff0c\u5931\u8d25return null\uff0c\u81ea\u52a8\u629b\u51fa",Object(o.b)("inlineCode",{parentName:"p"},"UnknownAccountException"),"\u5f02\u5e38")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u5bc6\u7801\u8ba4\u8bc1Shiro\u81ea\u52a8\u5b8c\u6210")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u8fd4\u56de\u7c7b\u578b",Object(o.b)("inlineCode",{parentName:"p"},"AuthenticationInfo"),"\u662f\u4e00\u4e2a\u63a5\u53e3\uff0c\u6211\u4eec\u8fd4\u56de\u5b83\u7684\u5b9e\u73b0\u7c7b",Object(o.b)("inlineCode",{parentName:"p"},"SimpleAuthenticationInfo"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Simple\u4e2d\u53ef\u4ee5\u4f20\u56db\u4e2a\u53c2\u6570\u4e5f\u53ef\u4ee5\u4f20\u4e09\u4e2a\u53c2\u6570\u3002\u4e09\u4e2a\u53c2\u6570\u7701\u7565",Object(o.b)("inlineCode",{parentName:"strong"},"\u76d0"))),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"\u7b2c\u4e00\u4e2a\u53c2\u6570"),"\uff0c\u6709\u7684\u4eba\u4f20\u7684\u662fuserInfo\u5bf9\u8c61\u5bf9\u7528\u7684\u7528\u6237\u540d\u3002\u5728\u5b66\u4e60\u8fc7\u7a0b\u4e2d\uff0c\u4f20\u5165\u7684\u90fd\u662fuser\u5bf9\u8c61\uff0c\u6ca1\u6709\u5c1d\u8bd5\u8fc7\u5bf9\u8c61\u5bf9\u5e94\u7684",Object(o.b)("strong",{parentName:"p"},"\u7528\u6237\u540d"),"\uff0c\u4f46\u662f\u4ece\u524d\u8f88\u4eec\u7684\u7ecf\u9a8c\u770b\u5f97\u5230\uff0c\u6b64\u5904\u4e5f\u53ef\u4ee5\u4f20\u7528\u6237\u540d\uff0c\u56e0\u4eba\u800c\u5f02\u5427\u3002")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"\u7b2c\u4e8c\u4e2a\u53c2\u6570"),"\uff0c\u4f20\u7684\u662f\u4ece\u6570\u636e\u5e93\u4e2d\u83b7\u53d6\u7684password\uff0c\u7136\u540e\u518d\u4e0etoken\u4e2d\u7684password\u8fdb\u884c\u5bf9\u6bd4\uff0c\u5339\u914d\u4e0a\u4e86\u5c31\u901a\u8fc7\uff0c\u5339\u914d\u4e0d\u4e0a\u5c31\u62a5\u5f02\u5e38\u3002")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"\u7b2c\u4e09\u4e2a\u53c2\u6570"),"\uff0c",Object(o.b)("strong",{parentName:"p"},"\u76d0"),"\u2013\u7528\u4e8e\u52a0\u5bc6\u5bc6\u7801\u5bf9\u6bd4\uff0c\u2013\u83b7\u53d6\u7684\u7ecf\u9a8c\uff1a\u4e3a\u4e86\u9632\u6b62\u4e24\u7528\u6237\u7684\u521d\u59cb\u5bc6\u7801\u662f\u4e00\u6837\u7684\uff0c\n\u2013\u5de8\u4f6c\u4eec\u7684\u89e3\u7b54\uff1a\u56db\u4e2a\u53c2\u6570\uff0c\u9632\u6b62\u4e24\u7528\u6237\u53ef\u80fd\u521d\u59cb\u5bc6\u7801\u76f8\u540c\u65f6\u5019\u7528\uff0ctoken \u7528simplehash\uff08\u56db\u4e2a\u53c2\u6570\u7684\u6784\u9020\uff09 ",Object(o.b)("strong",{parentName:"p"},"\u52a0\u5bc6\u9ed8\u8ba4\u7528\u4e86MD5 \u8fed\u4ee3\u4e00\u6b21\u52a0\u5bc6"),"\uff0cinfo\u4e2d\u5728\u5bc6\u7801\u6bd4\u5bf9\u8c03\u7528new SimpleHash(String algorithmName, Object source\uff09\u8fd9\u4e2a\u5b9e\u4f8b\u5316\u5bf9\u8c61\u9ed8\u8ba4\u8fed\u4ee3\u4e00\u6b21\u4e86\uff0c\u6240\u4ee5\u5f53\u4f60\u7528\u4e09\u4e2a\u53c2\u6570\u52a0\u5bc6\u65f6\u5019\u53ef\u80fd\u4e24 \u4e2a\u521d\u59cb\u5bc6\u7801\u76f8\u540c\u4eba\u7684\u5c31\u6ca1\u80fd\u533a\u522b\u5f00 \uff08\u56e0\u6b64realm\u4e2d\u5bc6\u7801\u8981\u4ece\u6570\u636e\u5e93\u7684\u67e5\u7684\u539f\u56e0\uff09\uff0c\u901a\u8fc7\u8bbe\u7f6ereaml \u4e2dcredentialsMatcher \u5c5e\u6027\u7684\u5404\u9879\u5c5e\u6027\u53ef\u5b9e\u73b0")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"\u7b2c\u56db\u4e2a\u53c2\u6570"),"\uff1a\u5f53\u524drealm\u7684\u540d\u5b57\u3002"))),Object(o.b)("p",{parentName:"li"},"\u2014ps\uff1a",Object(o.b)("strong",{parentName:"p"},"\u7b2c\u4e00\u4e2a\u53c2\u6570\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7token.getPrincipal()\u65b9\u6cd5\u83b7\u53d6"),"\u2014\u83b7\u53d6\u5f53\u524d\u8bb0\u5f55\u7684\u7528\u6237\u540d\uff0c\u4ece\u8fd9\u4e2a\u7528\u6237\u540d\u83b7\u53d6\u4e00\u7cfb\u5217\u7684\u5bf9\u5e94\u9700\u6c42\u5c5e\u6027\u3002"))),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class UserRealm extends AuthorizingRealm {\n    @Override\n    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {\n        System.out.println("\u6267\u884c\u4e86<<\u6388\u6743>>\u65b9\u6cd5");\n        return null;\n    }\n\n    @Override\n    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {\n        System.out.println("\u6267\u884c\u4e86<<\u8ba4\u8bc1>>\u65b9\u6cd5");\n        //\u67e5\u8be2\u6570\u636e\u5e93\u83b7\u5f97\u7528\u6237\u6570\u636e\n        String username = "root";\n        String password = "123456";\n        UsernamePasswordToken token = (UsernamePasswordToken) authenticationToken;\n        if (!token.getUsername().equals(username)) {\n            return null; //Shiro\u81ea\u52a8\u629b\u51fa UnknownAccountException\n        }\n        //\u5bc6\u7801\u8ba4\u8bc1,shiro\u4f1a\u81ea\u52a8\u505a\n        return new SimpleAuthenticationInfo("", password, "");\n    }\n}\n')))),Object(o.b)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"index.ftl")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Title</title>\n</head>\n<body>\n\u9996\u9875<br>\n<#if msg??><p style="color:red">${msg}</p></#if>\n<hr>\n<a href="/user/add">add</a> | <a href="/user/update">update</a>\n</body>\n</html>\n')),Object(o.b)("img",{src:n(975).default,style:{zoom:"80%",boxShadow:"5px 7px 28px #333333"}}),Object(o.b)("br",null))}p.isMDXComponent=!0},561:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||s[m]||o;return n?a.a.createElement(d,l(l({ref:t},b),{},{components:n})):a.a.createElement(d,l({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},975:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/6-9c4383f58ec66d952538ab74cb09d617.gif"}}]);