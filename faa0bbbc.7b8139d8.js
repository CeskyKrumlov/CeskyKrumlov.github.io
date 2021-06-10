(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{321:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),l=(n(0),n(331)),i={id:"8.freemarker",title:"Freemarker",hide_title:!0},c={unversionedId:"springboot/8.freemarker",id:"springboot/8.freemarker",isDocsHomePage:!1,title:"Freemarker",description:"Freemarker\u6a21\u677f\u5f15\u64ce",source:"@site/docs/springboot/8.Freemarker.md",permalink:"/docs/springboot/8.freemarker",sidebar:"someSidebar",previous:{title:"\u6a21\u677f\u5f15\u64ce",permalink:"/docs/springboot/8.templateEngine"},next:{title:"Thymeleaf",permalink:"/docs/springboot/8.thymeleaf"}},b=[{value:"Freemarker\u6a21\u677f\u5f15\u64ce",id:"freemarker\u6a21\u677f\u5f15\u64ce",children:[{value:"SpringBoot\u6574\u5408Freemarker",id:"springboot\u6574\u5408freemarker",children:[{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",children:[]}]},{value:"Freemarker\u8bed\u6cd5\u7b80\u4ecb",id:"freemarker\u8bed\u6cd5\u7b80\u4ecb",children:[{value:"${}",id:"",children:[]},{value:"FTL\u6807\u7b7e  &lt;#...&gt;",id:"ftl\u6807\u7b7e--",children:[]},{value:"\u6ce8\u91ca <code>&lt;!-- --&gt;</code>",id:"\u6ce8\u91ca------",children:[]},{value:"?? (isExist\u65b9\u6cd5)",id:"-isexist\u65b9\u6cd5",children:[]},{value:"\u57fa\u672c\u6307\u4ee4",id:"\u57fa\u672c\u6307\u4ee4",children:[]},{value:"\u5185\u5efa\u51fd\u6570",id:"\u5185\u5efa\u51fd\u6570",children:[]}]}]}],p={rightToc:b};function s(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"freemarker\u6a21\u677f\u5f15\u64ce"},"Freemarker\u6a21\u677f\u5f15\u64ce"),Object(l.b)("p",null,Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"http://freemarker.foofun.cn/dgui_quickstart_template.html"}),"\u5b98\u65b9\u6587\u6863")),Object(l.b)("h2",{id:"springboot\u6574\u5408freemarker"},"SpringBoot\u6574\u5408Freemarker"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Maven\u4f9d\u8d56")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n   <groupId>org.springframework.boot</groupId>\n   <artifactId>spring-boot-starter-freemarker</artifactId>\n</dependency>\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"application.yaml",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u914d\u7f6e\u7f13\u5b58"),Object(l.b)("li",{parentName:"ul"},"\u914d\u7f6e\u524d\u7aef\u9875\u9762\u6587\u4ef6\u540e\u7f00\u540d"),Object(l.b)("li",{parentName:"ul"},"\u914d\u7f6e\u7f16\u7801"),Object(l.b)("li",{parentName:"ul"},"\u914d\u7f6e\u524d\u7aef\u9875\u9762\u5728SpringBoot\u9879\u76ee\u4e2d\u7684\u8def\u5f84")))),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"spring:\n  freemarker:\n    cache: false # \u7f13\u5b58\u914d\u7f6e \u5f00\u53d1\u9636\u6bb5\u5e94\u8be5\u914d\u7f6e\u4e3afalse \u56e0\u4e3a\u7ecf\u5e38\u4f1a\u6539\n    suffix: .html # \u6a21\u7248\u540e\u7f00\u540d \u9ed8\u8ba4\u4e3aftl  / \u8fd8\u662f\u7528ftl\u5427\uff0chtml\u6ca1freemarker\u8bed\u6cd5\u63d0\u793a\n    charset: UTF-8 # \u6587\u4ef6\u7f16\u7801\n    template-loader-path: classpath:/templates/  \n")),Object(l.b)("h3",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"pojo"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@Data\n@AllArgsConstructor\n@NoArgsConstructor\npublic class User {\n    private String username;\n    private int age;\n    private String sex;\n}\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Controller"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@RequestMapping("/t2")\npublic String test2(Model model) {\n    //classpath:/templates/test.html\n    List<User> users = new ArrayList<>();\n    users.add(new User("\u540d\u5b571",18,"\u7537"));\n    users.add(new User("\u540d\u5b572",28,"\u5973"));\n    users.add(new User("\u540d\u5b573",18,"\u7537"));\n    model.addAttribute("users", users);\n\n    return "testFreemarker";\n}\n'))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"testFreemarker.ftl"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>\u6d4b\u8bd5freemarker</title>\n</head>\n<body>\n    <table class="">\n        <tr>\n            <td>\u4f5c\u8005</td>\n            <td>\u6559\u7a0b\u540d\u79f0</td>\n            <td>\u5185\u5bb9</td>\n        </tr>\n    \n        <#list users as u>\n            <tr>\n                <td>${u.username}</td>\n                <td>${u.age}</td>\n                <td>${u.sex}</td>\n            </tr>\n        </#list>\n    </table>\n</body>\n</html>\n')),Object(l.b)("p",{parentName:"li"},Object(l.b)("img",{src:n(654).default})))),Object(l.b)("h2",{id:"freemarker\u8bed\u6cd5\u7b80\u4ecb"},"Freemarker\u8bed\u6cd5\u7b80\u4ecb"),Object(l.b)("h3",{id:""},"${}"),Object(l.b)("p",null,"Freemarker\u5c06\u4f1a\u8f93\u51fa\u771f\u5b9e\u5185\u5bb9\u6765\u66ff\u6362\u5927\u62ec\u53f7\u5185\u7684\u8868\u8fbe\u5f0f\uff0c\u8fd9\u6837\u7684\u8868\u8fbe\u65b9\u5f0f\u88ab\u79f0\u4e3a",Object(l.b)("strong",{parentName:"p"},"\u63d2\u503c")),Object(l.b)("h3",{id:"ftl\u6807\u7b7e--"},"FTL\u6807\u7b7e  <#...>"),Object(l.b)("p",null,"\u4e0eHTML\u6807\u7b7e\u6709\u4e00\u4e9b\u76f8\u4f3c\u4e4b\u5904\uff0c\u4f46\u662f\u4ed6\u4eec\u662fFreemarker\u6307\u4ee4\uff0c\u4e0d\u4f1a\u5728\u8f93\u51fa\u4e2d\u6253\u5370\u3002FTL\u6807\u7b7e\u4ee5",Object(l.b)("inlineCode",{parentName:"p"},"#"),"\u5f00\u5934"),Object(l.b)("h3",{id:"\u6ce8\u91ca------"},"\u6ce8\u91ca ",Object(l.b)("inlineCode",{parentName:"h3"},"\x3c!-- --\x3e")),Object(l.b)("p",null,"\u4e0eHTML\u7684\u6ce8\u91ca\u76f8\u540c"),Object(l.b)("h3",{id:"-isexist\u65b9\u6cd5"},"?? (isExist\u65b9\u6cd5)"),Object(l.b)("p",null,"\u4f7f\u7528",Object(l.b)("inlineCode",{parentName:"p"},"??"),"\u8be2\u95ee\u4e00\u4e2a\u53d8\u91cf\u662f\u5426\u5b58\u5728\uff0c\u76f8\u5f53\u4e8e",Object(l.b)("inlineCode",{parentName:"p"},"isExist"),"\u65b9\u6cd5"),Object(l.b)("p",null," \u5982\u679c\u5b58\u5728user\uff0c\u5219\u6253\u5370\u6b22\u8fce\u4fe1\u606f"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),"<#if user??><h1>Welcome ${user}!</h1></#if>\n")),Object(l.b)("h3",{id:"\u57fa\u672c\u6307\u4ee4"},"\u57fa\u672c\u6307\u4ee4"),Object(l.b)("h4",{id:"if\u6307\u4ee4"},"if\u6307\u4ee4"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"if\u51b3\u5b9a\u90e8\u5206\u5185\u5bb9\u662f\u5426\u5448\u73b0")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<h1>\n    Welcome ${user}<#if user == "Big Joe">, our beloved leader</#if>!\n</h1>\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"if\u3001elif\u3001else")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),"<#if animals.python.price < animals.elephant.price>\n  Pythons are cheaper than elephants today.\n<#elseif animals.elephant.price < animals.python.price>\n  Elephants are cheaper than pythons today.\n<#else>\n  Elephants and pythons cost the same today.\n</#if>\n")),Object(l.b)("h4",{id:"list\u6307\u4ee4"},"list\u6307\u4ee4"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u57fa\u672c\u7528\u6cd5"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),"<tr>\n    <td>\u4f5c\u8005</td>\n    <td>\u6559\u7a0b\u540d\u79f0</td>\n    <td>\u5185\u5bb9</td>\n</tr>\n\n<#list users as u>\n    <tr>\n        <td>${u.username}</td>\n        <td>${u.age}</td>\n        <td>${u.sex}</td>\n    </tr>\n</#list>\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u5982\u679c\u96c6\u5408\u5185\u5143\u7d20\u6570\u91cf\u4e3a0\uff0c\u907f\u514d\u8f93\u51fa\u65e0\u6548\u7684html\u6807\u7b7e\uff0c\u53ef\u4ee5\u7528",Object(l.b)("inlineCode",{parentName:"p"},"items"),"\u6307\u4ee4"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),"<#list misc.fruits>\n  <ul>\n    <#items as fruit>\n      <li>${fruit}\n    </#items>\n  </ul>\n</#list>\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u884c\u5185\u904d\u5386\u65f6\uff0c\u7528",Object(l.b)("inlineCode",{parentName:"p"},"sep"),"\u6307\u4ee4\u6307\u5b9a",Object(l.b)("strong",{parentName:"p"},"\u5206\u9694\u7b26")),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),"<p>Fruits: <#list misc.fruits as fruit>${fruit}<#sep>, </#sep></#list>\n")),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),"\x3c!-- \u8f93\u51fa --\x3e\n<p>Fruits: orange, banana\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u6307\u5b9a\u5206\u9694\u7b26\u65f6\uff0c\u5982\u679c\u96c6\u5408\u5143\u7d20\u4e3a\u96f6\uff0c\u90a3\u4e48\u8bbe\u7f6e\u4e0d\u663e\u793a\u5206\u9694\u7b26\uff0c",Object(l.b)("inlineCode",{parentName:"p"},"else"),"\u4fee\u9970\u7684\u90e8\u5206\uff0c\u53ea\u6709\u5f53\u5143\u7d20\u4e2a\u6570\u4e3a0\u65f6\u624d\u6267\u884c"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),"<p>Fruits: <#list misc.fruits as fruit>${fruit}<#sep>, <#else>None</#list>\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u5206\u9694\u7b26\u7684\u7b80\u5199\u65b9\u5f0f\uff0c\u7c7b\u4f3c\u4e09\u76ee\u8fd0\u7b97\u7b26"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<p>Fruits: ${fruits?join(", ", "None")}\n'))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u8054\u5408\u4f7f\u7528",Object(l.b)("inlineCode",{parentName:"p"},"list"),"\u3001",Object(l.b)("inlineCode",{parentName:"p"},"items"),"\u3001",Object(l.b)("inlineCode",{parentName:"p"},"sep"),"\u3001",Object(l.b)("inlineCode",{parentName:"p"},"else")),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),"<#list misc.fruits>\n  <p>Fruits:\n  <ul>\n    <#items as fruit>\n      <li>${fruit}<#sep> and</#sep>\n    </#items>\n  </ul>\n<#else>\n  <p>We have no fruits.\n</#list>\n")))),Object(l.b)("h4",{id:"include\u6307\u4ee4"},"include\u6307\u4ee4"),Object(l.b)("p",null,"\u4f8b\u5982\uff0c\u5355\u72ec\u5199\u4e00\u4e2a\u7248\u6743\u4fe1\u606f\u9875\u9762",Object(l.b)("inlineCode",{parentName:"p"},"copyright_footer.html"),"\uff0c\u5728\u6240\u6709\u9875\u9762\u7684\u6700\u4e0b\u9762\u63d2\u5165\u5b83\u6765\u663e\u793a\u7248\u6743\u4fe1\u606f"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<hr>\n<i>\nCopyright (c) 2000 <a href="http://www.acmee.com">Acmee Inc</a>,\n<br>\nAll Rights Reserved.\n</i>\n')),Object(l.b)("p",null,"\u4f7f\u7528include\u6307\u4ee4\u63d2\u5165\u7248\u6743\u4fe1\u606f\u9875\u811a"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<html>\n<head>\n  <title>Test page</title>\n</head>\n<body>\n  <h1>Test page</h1>\n  <p>Blah blah...\n  <#include "/copyright_footer.html">\n</body>\n</html>\n')),Object(l.b)("h3",{id:"\u5185\u5efa\u51fd\u6570"},"\u5185\u5efa\u51fd\u6570"),Object(l.b)("p",null,Object(l.b)("img",{alt:"image-20200429131233579",src:n(655).default})))}s.isMDXComponent=!0},331:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,d=m["".concat(i,".").concat(u)]||m[u]||o[u]||l;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<l;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},654:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/13-ae5cc251d5ca0baa9879f8ca363f6d0d.png"},655:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/14-89593130c26715bae70aaf75f7c076fd.png"}}]);