(window.webpackJsonp=window.webpackJsonp||[]).push([[346],{1088:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/3-4c4739a2ee2d394a356c70ea5f260b52.png"},1089:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/4-b3be11d32f8f9c6185cc303c330ec90d.png"},402:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var o=n(2),r=n(6),a=(n(0),n(564)),c={id:"4.devtools",title:"devtools \u70ed\u90e8\u7f72",hide_title:!0},l={unversionedId:"springcloud/4.devtools",id:"springcloud/4.devtools",isDocsHomePage:!1,title:"devtools \u70ed\u90e8\u7f72",description:"devtools \u70ed\u90e8\u7f72",source:"@site/docs/springcloud/4.devtools\u70ed\u90e8\u7f72.md",slug:"/springcloud/4.devtools",permalink:"/docs/springcloud/4.devtools",version:"current",sidebar:"someSidebar",previous:{title:"\u652f\u4ed8\u6a21\u5757\u6784\u5efa",permalink:"/docs/springcloud/3.paymentMicroService"},next:{title:"\u8ba2\u5355\u6a21\u5757\u6784\u5efa",permalink:"/docs/springcloud/5.order80"}},i=[{value:"devtools \u70ed\u90e8\u7f72",id:"devtools-\u70ed\u90e8\u7f72",children:[]}],b={rightToc:i};function p(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},b,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"devtools-\u70ed\u90e8\u7f72"},"devtools \u70ed\u90e8\u7f72"),Object(a.b)("blockquote",null,Object(a.b)("ol",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ol"},"\u5c06 devtools \u6dfb\u52a0\u5230\u9879\u76ee"),Object(a.b)("li",{parentName:"ol"},"\u5728 pom.xml \u4e2d\u6dfb\u52a0 plugin"),Object(a.b)("li",{parentName:"ol"},"\u5f00\u542f\u81ea\u52a8\u7f16\u8bd1 automatic build"),Object(a.b)("li",{parentName:"ol"},"\u66f4\u65b0\u503c"),Object(a.b)("li",{parentName:"ol"},"\u91cd\u542f IDEA"))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"1. devtools maven \u5750\u6807")),Object(a.b)("pre",{parentName:"blockquote"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml"}),"\x3c!--\u70ed\u90e8\u7f72--\x3e\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-devtools</artifactId>\n    <scope>runtime</scope>\n    <optional>true</optional>\n</dependency>\n"))),Object(a.b)("blockquote",null,Object(a.b)("ol",Object(o.a)({parentName:"blockquote"},{start:2}),Object(a.b)("li",{parentName:"ol"},"\u5728\u7236\u5de5\u7a0b pom.xml \u4e2d\u6dfb\u52a0 plugin")),Object(a.b)("pre",{parentName:"blockquote"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml"}),"<build>\n    <pluginManagement>\x3c!-- lock down plugins versions to avoid using Maven defaults (may be moved to parent pom) --\x3e\n    \x3c!-- \u7701\u7565 --\x3e\n    </pluginManagement>\n    <plugins>\n        \x3c!--\u70ed\u90e8\u7f72--\x3e\n        <plugin>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-maven-plugin</artifactId>\n            <version>2.1.1.RELEASE</version>\n            <configuration>\n                <fork>true</fork>\n                <addResources>true</addResources>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n"))),Object(a.b)("blockquote",null,Object(a.b)("ol",Object(o.a)({parentName:"blockquote"},{start:3}),Object(a.b)("li",{parentName:"ol"},"\u5f00\u542f\u81ea\u52a8\u7f16\u8bd1 automatic build")),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"Settings -> Build -> Complier \u52fe\u9009\u4ee5\u4e0b\u9879\u76ee")),Object(a.b)("img",{src:n(1088).default,style:{zoom:"100%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(a.b)("br",null)),Object(a.b)("blockquote",null,Object(a.b)("ol",Object(o.a)({parentName:"blockquote"},{start:4}),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"ctrl + shift + alt + /"),"  mac\uff1a ",Object(a.b)("inlineCode",{parentName:"li"},"command + option + shift + /"))),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"\u9009\u62e9 Registry"),Object(a.b)("li",{parentName:"ul"},"\u641c\u7d22 ",Object(a.b)("inlineCode",{parentName:"li"},"complier.automake.allow.when.app.runing")," \uff0c\u52fe\u9009 ",Object(a.b)("inlineCode",{parentName:"li"},"\u221a")),Object(a.b)("li",{parentName:"ul"},"\u641c\u7d22 ",Object(a.b)("inlineCode",{parentName:"li"},"actionSystem.assertFocusAccessFromEdt")," \uff0c\u52fe\u9009 ",Object(a.b)("inlineCode",{parentName:"li"},"\u221a"),Object(a.b)("img",{src:n(1089).default})))),Object(a.b)("blockquote",null,Object(a.b)("ol",Object(o.a)({parentName:"blockquote"},{start:5}),Object(a.b)("li",{parentName:"ol"},"\u91cd\u542f IDEA"))))}p.isMDXComponent=!0},564:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(c,".").concat(d)]||u[d]||s[d]||a;return n?r.a.createElement(m,l(l({ref:t},b),{},{components:n})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var b=2;b<a;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);