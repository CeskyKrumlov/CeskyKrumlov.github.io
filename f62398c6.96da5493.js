(window.webpackJsonp=window.webpackJsonp||[]).push([[487],{543:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return c})),r.d(n,"rightToc",(function(){return p})),r.d(n,"default",(function(){return l}));var t=r(2),o=r(6),i=(r(0),r(565)),a={id:"2.fatherProject",title:"\u5fae\u670d\u52a1\u805a\u5408\u7236\u5de5\u7a0b",hide_title:!0},c={unversionedId:"springcloud/2.fatherProject",id:"springcloud/2.fatherProject",isDocsHomePage:!1,title:"\u5fae\u670d\u52a1\u805a\u5408\u7236\u5de5\u7a0b",description:"\u5fae\u670d\u52a1\u805a\u5408\u7236\u5de5\u7a0b",source:"@site/docs/springcloud/2.\u5fae\u670d\u52a1\u805a\u5408\u7236\u5de5\u7a0b.md",slug:"/springcloud/2.fatherProject",permalink:"/docs/springcloud/2.fatherProject",version:"current",sidebar:"someSidebar",previous:{title:"Spring Cloud \u6982\u8ff0",permalink:"/docs/springcloud/1.springcloud"},next:{title:"\u652f\u4ed8\u6a21\u5757\u6784\u5efa",permalink:"/docs/springcloud/3.paymentMicroService"}},p=[{value:"\u5fae\u670d\u52a1\u805a\u5408\u7236\u5de5\u7a0b",id:"\u5fae\u670d\u52a1\u805a\u5408\u7236\u5de5\u7a0b",children:[]},{value:"\u7236\u5de5\u7a0b pom",id:"\u7236\u5de5\u7a0b-pom",children:[]},{value:"dependencyManagement \u4e0e dependencies",id:"dependencymanagement-\u4e0e-dependencies",children:[]}],d={rightToc:p};function l(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},d,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u5fae\u670d\u52a1\u805a\u5408\u7236\u5de5\u7a0b"},"\u5fae\u670d\u52a1\u805a\u5408\u7236\u5de5\u7a0b"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u9879\u76ee\u7236\u5de5\u7a0b\uff0c\u7528\u6765\u805a\u5408\u5404\u5b50\u6a21\u5757"),Object(i.b)("ol",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ol"},"New Project"),Object(i.b)("li",{parentName:"ol"},"\u805a\u5408\u7236\u5de5\u7a0b\u547d\u540d"),Object(i.b)("li",{parentName:"ol"},"Maven \u63a7\u5236\u7248\u672c"),Object(i.b)("li",{parentName:"ol"},"\u5de5\u7a0b\u547d\u540d"),Object(i.b)("li",{parentName:"ol"},"\u5b57\u7b26\u7f16\u7801"),Object(i.b)("li",{parentName:"ol"},"\u6ce8\u89e3\u751f\u6548\u6fc0\u6d3b"),Object(i.b)("li",{parentName:"ol"},"Java \u7f16\u8bd1\u7248\u672c\u8bbe\u7f6e\u4e3a 8"),Object(i.b)("li",{parentName:"ol"},"File Type \u8fc7\u6ee4"))),Object(i.b)("br",null),Object(i.b)("h1",{id:"\u7236\u5de5\u7a0b-pom"},"\u7236\u5de5\u7a0b pom"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml",metastring:'title="\u7236\u5de5\u7a0bpom"',title:'"\u7236\u5de5\u7a0bpom"'}),'<?xml version="1.0" encoding="UTF-8"?>\n\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>org.example</groupId>\n    <artifactId>cloud2021</artifactId>\n    <version>1.0-SNAPSHOT</version>\n    <packaging>pom</packaging>\n\n    \x3c!--\u7edf\u4e00\u7ba1\u7406jar\u5305\u7248\u672c--\x3e\n    <properties>\n        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n        <maven.compiler.source>1.8</maven.compiler.source>\n        <maven.compiler.target>1.8</maven.compiler.target>\n        <junit.version>4.12</junit.version>\n        <lombok.version>1.18.10</lombok.version>\n        <log4j.version>1.2.17</log4j.version>\n        \x3c!--<mysql.version>8.0.18</mysql.version>--\x3e\n        <mysql.version>5.1.47</mysql.version>\n        <druid.version>1.1.16</druid.version>\n        <mybatis.spring.boot.version>1.3.1</mybatis.spring.boot.version>\n    </properties>\n\n    \x3c!--  \u5b50\u6a21\u5757\u7ee7\u627f\u540e\uff0c\u63d0\u4f9b\u4f5c\u7528\uff1a\u9501\u5b9a\u7248\u672c+\u5b50module\u4e0d\u7528\u5199groupID\u548cversion--\x3e\n    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-project-info-reports-plugin</artifactId>\n                <version>3.0.0</version>\n            </dependency>\n            \x3c!--spring boot 2.2.2--\x3e\n            <dependency>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-dependencies</artifactId>\n                <version>2.2.2.RELEASE</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n            \x3c!--spring cloud Hoxton.SR1--\x3e\n            <dependency>\n                <groupId>org.springframework.cloud</groupId>\n                <artifactId>spring-cloud-dependencies</artifactId>\n                <version>Hoxton.SR1</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n\n            \x3c!--spring cloud \u963f\u91cc\u5df4\u5df4--\x3e\n            <dependency>\n                <groupId>com.alibaba.cloud</groupId>\n                <artifactId>spring-cloud-alibaba-dependencies</artifactId>\n                <version>2.1.0.RELEASE</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n            \x3c!--mysql--\x3e\n            <dependency>\n                <groupId>mysql</groupId>\n                <artifactId>mysql-connector-java</artifactId>\n                <version>${mysql.version}</version>\n                <scope>compile</scope>\n            </dependency>\n            \x3c!-- druid--\x3e\n            <dependency>\n                <groupId>com.alibaba</groupId>\n                <artifactId>druid</artifactId>\n                <version>${druid.version}</version>\n            </dependency>\n\n            \x3c!--mybatis--\x3e\n            <dependency>\n                <groupId>org.mybatis.spring.boot</groupId>\n                <artifactId>mybatis-spring-boot-starter</artifactId>\n                <version>${mybatis.spring.boot.version}</version>\n            </dependency>\n            \x3c!--junit--\x3e\n            <dependency>\n                <groupId>junit</groupId>\n                <artifactId>junit</artifactId>\n                <version>${junit.version}</version>\n            </dependency>\n            \x3c!--log4j--\x3e\n            <dependency>\n                <groupId>log4j</groupId>\n                <artifactId>log4j</artifactId>\n                <version>${log4j.version}</version>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n\n    <build>\n        <pluginManagement>\x3c!-- lock down plugins versions to avoid using Maven defaults (may be moved to parent pom) --\x3e\n            <plugins>\n                <plugin>\n                    <artifactId>maven-clean-plugin</artifactId>\n                    <version>3.1.0</version>\n                </plugin>\n                <plugin>\n                    <artifactId>maven-site-plugin</artifactId>\n                    <version>3.7.1</version>\n                </plugin>\n                <plugin>\n                    <artifactId>maven-project-info-reports-plugin</artifactId>\n                    <version>3.0.0</version>\n                </plugin>\n            </plugins>\n        </pluginManagement>\n        <plugins>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-site-plugin</artifactId>\n                <configuration>\n                    <locales>en,fr</locales>\n                </configuration>\n            </plugin>\n            \x3c!--\u70ed\u90e8\u7f72--\x3e\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n                <version>2.1.1.RELEASE</version>\n                <configuration>\n                    <fork>true</fork>\n                    <addResources>true</addResources>\n                </configuration>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n')),Object(i.b)("br",null),Object(i.b)("h1",{id:"dependencymanagement-\u4e0e-dependencies"},"dependencyManagement \u4e0e dependencies"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Maven \u4f7f\u7528 dependencyManagement \u5143\u7d20\u63d0\u4f9b\u4e86\u4e00\u79cd\u7ba1\u7406\u4f9d\u8d56\u7248\u672c\u53f7\u7684\u65b9\u5f0f"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u901a\u5e38\u4f1a\u5728\u4e00\u4e2a\u7ec4\u7ec7\u6216\u8005\u9879\u76ee\u7684 ",Object(i.b)("em",{parentName:"strong"},"\u6700\u9876\u5c42\u7236 pom")," \u4e2d\u770b\u5230 ",Object(i.b)("inlineCode",{parentName:"strong"},"dependencyManagement")," \u5143\u7d20")),Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528 pom.xml \u4e2d\u7684 dependencyManagement  \u5143\u7d20\uff0c\u80fd\u8ba9\u6240\u4ee5\u5728\u5b50\u9879\u76ee\u4e2d\u5f15\u7528\u4e00\u4e2a\u4f9d\u8d56\u4e0d\u7528\u663e\u5f0f\u7684\u5217\u51fa\u7248\u672c\u53f7\u3002 Maven \u4f1a\u6cbf\u7740\u7236\u5b50\u5c42\u6b21\u5411\u4e0a\u8d70\uff0c\u76f4\u5230\u627e\u5230\u4e00\u4e2a\u62e5\u6709 ",Object(i.b)("inlineCode",{parentName:"li"},"dependencyManagement")," \u5143\u7d20\u7684\u9879\u76ee\uff0c\u7136\u540e\u4f1a\u4f7f\u7528\u5176\u4e2d\u6307\u5b9a\u7684 ",Object(i.b)("em",{parentName:"li"},"\u7248\u672c\u53f7")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"dependencyManagement")," \u53ea\u662f\u5bf9\u4f9d\u8d56\u7684 ",Object(i.b)("em",{parentName:"strong"},"\u58f0\u660e"),"\uff0c\u5e76\u4e0d\u5b9e\u9645\u5f15\u5165\uff0c\u56e0\u6b64\u5b50\u9879\u76ee\u9700\u8981\u663e\u793a\u7684\u58f0\u660e\u9700\u8981\u7684\u4f9d\u8d56"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u5728\u5b50\u9879\u76ee\u4e2d\u58f0\u660e\u4f9d\u8d56\uff0c\u662f\u4e0d\u4f1a\u4ece\u7236\u9879\u76ee\u4e2d\u7ee7\u627f\u4e0b\u6765\u7684\uff1b\u53ea\u6709\u5728\u5b50\u9879\u76ee\u4e2d\u5199\u4e86\u8be5\u4f9d\u8d56\u9879\uff0c\u5e76\u4e14\u6ca1\u6709\u6307\u5b9a\u5177\u4f53\u7248\u672c\uff0c\u624d\u4f1a\u4ece\u7236\u9879\u76ee\u4e2d\u7ee7\u627f\u8be5\u9879\uff0c\u5e76\u4e14 ",Object(i.b)("inlineCode",{parentName:"li"},"version")," \u548c ",Object(i.b)("inlineCode",{parentName:"li"},"scope")," \u90fd\u8bfb\u53d6\u5b50\u7236pom"),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u5b50\u9879\u76ee\u6307\u5b9a\u4e86\u7248\u672c\u53f7\uff0c\u90a3\u4e48\u4f1a\u4f7f\u7528\u5b50\u9879\u76ee\u4e2d\u6307\u5b9a\u7248\u672c\u7684 jar \u5305"))))))}l.isMDXComponent=!0},565:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return g}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=o.a.createContext({}),l=function(e){var n=o.a.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},s=function(e){var n=l(e.components);return o.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=l(r),m=t,g=s["".concat(a,".").concat(m)]||s[m]||u[m]||i;return r?o.a.createElement(g,c(c({ref:n},d),{},{components:r})):o.a.createElement(g,c({ref:n},d))}));function g(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var d=2;d<i;d++)a[d]=r[d];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);