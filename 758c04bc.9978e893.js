(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{294:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),l=(n(0),n(565)),o={id:"8.thymeleaf",title:"Thymeleaf",hide_title:!0},c={unversionedId:"springboot/8.thymeleaf",id:"springboot/8.thymeleaf",isDocsHomePage:!1,title:"Thymeleaf",description:"Thymeleaf\u6a21\u677f\u5f15\u64ce",source:"@site/docs/springboot/8.Thymeleaf.md",slug:"/springboot/8.thymeleaf",permalink:"/docs/springboot/8.thymeleaf",version:"current",sidebar:"someSidebar",previous:{title:"Freemarker",permalink:"/docs/springboot/8.freemarker"},next:{title:"SpringMVC\u81ea\u52a8\u914d\u7f6e\u539f\u7406",permalink:"/docs/springboot/9.springmvc"}},i=[{value:"Thymeleaf\u6a21\u677f\u5f15\u64ce",id:"thymeleaf\u6a21\u677f\u5f15\u64ce",children:[{value:"\u5f15\u5165Thymeleaf",id:"\u5f15\u5165thymeleaf",children:[]},{value:"Thymeleaf\u8bed\u6cd5",id:"thymeleaf\u8bed\u6cd5",children:[]}]}],p={rightToc:i};function b(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"thymeleaf\u6a21\u677f\u5f15\u64ce"},"Thymeleaf\u6a21\u677f\u5f15\u64ce"),Object(l.b)("h2",{id:"\u5f15\u5165thymeleaf"},"\u5f15\u5165Thymeleaf"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-thymeleaf</artifactId>\n    <version>2.2.6.RELEASE</version>\n</dependency>\n")),Object(l.b)("p",null,"\u5982\u4f55\u4f7f\u7528Thymeleaf\uff1f\u67e5\u770bThymeleaf\u81ea\u52a8\u88c5\u914d\u7c7b",Object(l.b)("inlineCode",{parentName:"p"},"ThymeleafProperties")),Object(l.b)("img",{src:n(958).default,style:{zoom:"80%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(l.b)("br",null),Object(l.b)("p",null,"\u53ef\u4ee5\u770b\u5230\u9ed8\u8ba4\u7684\u524d\u540e\u7f00\u8bbe\u7f6e\uff0c\u56e0\u6b64\uff0c",Object(l.b)("strong",{parentName:"p"},"\u53ea\u9700\u5c06html\u9875\u9762\u653e\u5728\u7c7b\u8def\u5f84templates\u6587\u4ef6\u5939\u4e0b\uff0cthymeleaf\u5c31\u53ef\u4ee5\u5e2e\u6211\u4eec\u81ea\u52a8\u6e32\u67d3\u4e86")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u6d4b\u8bd5")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"TestController"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Controller\npublic class TestController {\n\n    @RequestMapping("/t1")\n    public String test1() {\n        //classpath:/templates/test.html\n        return "test";\n    }\n}\n'))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"classpath:/templates/test.html"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>\u6d4b\u8bd5</title>\n</head>\n<body>\n\n    Thymeleaf\u6a21\u677f\u5f15\u64ce\n\n</body>\n</html>\n'))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"\u542f\u52a8\u9879\u76ee\uff0c\u53d1\u73b0\u6839\u636e\u5148\u524d\u67e5\u770b\u7684\u524d\u540e\u7f00\uff0cSpringBoot\u6210\u529f\u4f7f\u7528Thymeleaf\u8f93\u51fa\u4e86\u8fd9\u4e2a\u6211\u4eec\u7684\u9875\u9762"))),Object(l.b)("h2",{id:"thymeleaf\u8bed\u6cd5"},"Thymeleaf\u8bed\u6cd5"),Object(l.b)("p",null,"\u5b98\u7f51\uff1a",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.thymeleaf.org/"}),"https://www.thymeleaf.org/")),Object(l.b)("p",null,"(\u63a8\u8350\u4f7f\u7528freemarker\u6216\u8005\u53bb\u5b66Vue)"))}b.isMDXComponent=!0},565:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=b(n),u=r,f=m["".concat(o,".").concat(u)]||m[u]||s[u]||l;return n?a.a.createElement(f,c(c({ref:t},p),{},{components:n})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<l;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},958:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/12-605a42f742c11dfb315a017a5815b1fd.png"}}]);