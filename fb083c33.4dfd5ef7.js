(window.webpackJsonp=window.webpackJsonp||[]).push([[414],{470:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(2),o=t(6),a=(t(0),t(482)),c={id:"6.commonModule",title:"\u62bd\u53d6\u516c\u5171\u5b50\u6a21\u5757",hide_title:!0},i={unversionedId:"springcloud/6.commonModule",id:"springcloud/6.commonModule",isDocsHomePage:!1,title:"\u62bd\u53d6\u516c\u5171\u5b50\u6a21\u5757",description:"\u62bd\u53d6\u516c\u5171\u5b50\u6a21\u5757",source:"@site/docs/springcloud/6.\u62bd\u53d6\u516c\u5171\u5b50\u6a21\u5757.md",slug:"/springcloud/6.commonModule",permalink:"/docs/springcloud/6.commonModule",version:"current",sidebar:"someSidebar",previous:{title:"\u8ba2\u5355\u6a21\u5757\u6784\u5efa",permalink:"/docs/springcloud/5.order80"},next:{title:"Eureka\u57fa\u7840\u77e5\u8bc6",permalink:"/docs/springcloud/\u670d\u52a1\u6ce8\u518c\u4e0e\u53d1\u73b0/eureka/1.eureka"}},l=[{value:"\u62bd\u53d6\u516c\u5171\u5b50\u6a21\u5757",id:"\u62bd\u53d6\u516c\u5171\u5b50\u6a21\u5757",children:[{value:"\u62bd\u53d6\u516c\u5171 entities",id:"\u62bd\u53d6\u516c\u5171-entities",children:[]}]}],p={rightToc:l};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"\u62bd\u53d6\u516c\u5171\u5b50\u6a21\u5757"},"\u62bd\u53d6\u516c\u5171\u5b50\u6a21\u5757"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u5148\u524d\u7684\u4e24\u4e2a\u5fae\u670d\u52a1\u6a21\u5757\u4e2d\uff0c\u90fd\u6709 ",Object(a.b)("inlineCode",{parentName:"p"},"entities.CommonResult")," \u7c7b\uff0c\u5b8c\u5168\u4e00\u81f4\uff0c\u5bf9\u4e8e\u9879\u76ee\u4e2d\u7684\u8fd9\u79cd\u4ee3\u7801\u3002\u6211\u4eec\u5e94\u8be5\u5c06\u5176\u62bd\u53d6\u51fa\u6765\u505a\u6210\u4e00\u4e2a\u516c\u5171\u5b50\u6a21\u5757")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"cloud-api-commons"))),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u6539 pom\uff1a\u6b64\u6a21\u5757\u53ea\u9700\u8981\u4e09\u4e2a\u4f9d\u8d56"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Devtools \u70ed\u90e8\u7f72"),Object(a.b)("li",{parentName:"ul"},"lombok"),Object(a.b)("li",{parentName:"ul"},"hutools \u5de5\u5177\u5305")),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <parent>\n        <artifactId>cloud2021</artifactId>\n        <groupId>org.example</groupId>\n        <version>1.0-SNAPSHOT</version>\n    </parent>\n    <modelVersion>4.0.0</modelVersion>\n\n    <artifactId>cloud-api-commons</artifactId>\n\n    <dependencies>\n        \x3c!--\u70ed\u90e8\u7f72--\x3e\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-devtools</artifactId>\n            <scope>runtime</scope>\n            <optional>true</optional>\n        </dependency>\n        <dependency>\n            <groupId>org.projectlombok</groupId>\n            <artifactId>lombok</artifactId>\n            <optional>true</optional>\n        </dependency>\n        <dependency>\n            <groupId>cn.hutool</groupId>\n            <artifactId>hutool-all</artifactId>\n            <version>5.1.0</version>\n        </dependency>\n    </dependencies>\n</project>\n'))))),Object(a.b)("h2",{id:"\u62bd\u53d6\u516c\u5171-entities"},"\u62bd\u53d6\u516c\u5171 entities"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"\u628a\u4e4b\u524d\u4e24\u4e2a\u5fae\u670d\u52a1\u6a21\u5757\u7684 entieies \u590d\u5236\u8fc7\u6765")),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"\u5c06\u5f53\u524d\u516c\u5171\u6a21\u5757\u8fd0\u884c ",Object(a.b)("inlineCode",{parentName:"li"},"maven clean")," \u4e0e ",Object(a.b)("inlineCode",{parentName:"li"},"maven install")),Object(a.b)("li",{parentName:"ul"},"\u5220\u9664\u5148\u524d\u4e24\u4e2a\u5fae\u670d\u52a1\u6a21\u5757\u7684 ",Object(a.b)("inlineCode",{parentName:"li"},"entities")," \u5305"),Object(a.b)("li",{parentName:"ul"},"\u5206\u522b\u5728\u4e24\u4e2a\u5fae\u670d\u52a1\u6a21\u5757\u7684 pom \u6587\u4ef6\u4e2d\uff0c\u5f15\u5165\u516c\u5171\u5b50\u6a21\u5757",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u8fd9\u91cc\u7684 ",Object(a.b)("inlineCode",{parentName:"li"},"groupId")," \u5728\u7236\u5de5\u7a0b\u7684 pom \u4e2d\u67e5\u770b"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"artifactId")," \u662f\u5b9a\u4e49\u5728\u516c\u5171\u5b50\u6a21\u5757\u7684 pom \u6587\u4ef6\u4e2d\u7684")),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>org.example</groupId>\n    <artifactId>cloud-api-commons</artifactId>\n    <version>1.0-SNAPSHOT</version>\n</dependency>\n"))))))}u.isMDXComponent=!0},482:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return s}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,s=d["".concat(c,".").concat(m)]||d[m]||b[m]||a;return t?o.a.createElement(s,i(i({ref:n},p),{},{components:t})):o.a.createElement(s,i({ref:n},p))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);