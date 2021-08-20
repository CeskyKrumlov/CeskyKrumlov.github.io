(window.webpackJsonp=window.webpackJsonp||[]).push([[449],{505:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"rightToc",(function(){return l})),r.d(n,"default",(function(){return s}));var t=r(2),a=r(6),o=(r(0),r(567)),i={id:"5.springConfig",title:"Spring\u914d\u7f6e"},c={unversionedId:"spring/5.springConfig",id:"spring/5.springConfig",isDocsHomePage:!1,title:"Spring\u914d\u7f6e",description:"1. \u522b\u540d",source:"@site/docs/spring/5.Spring\u914d\u7f6e.md",slug:"/spring/5.springConfig",permalink:"/docs/spring/5.springConfig",version:"current",sidebar:"someSidebar",previous:{title:"IoC\u521b\u5efa\u5bf9\u8c61\u7684\u65b9\u5f0f",permalink:"/docs/spring/4.iocStyle"},next:{title:"DI\u4f9d\u8d56\u6ce8\u5165",permalink:"/docs/spring/6.di"}},l=[{value:"1. \u522b\u540d",id:"1-\u522b\u540d",children:[]},{value:"2. Bean\u7684\u914d\u7f6e",id:"2-bean\u7684\u914d\u7f6e",children:[]},{value:"3. Import",id:"3-import",children:[]}],p={rightToc:l};function s(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"1-\u522b\u540d"},"1. \u522b\u540d"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),'<bean id="user" class="com.bsx.pojo.User">\n    <constructor-arg name="name" value="bbbb"/>\n</bean>\n\n<alias name="user" alias="aliasUser"/>\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void test1(){\n    ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");\n    User user = (User) context.getBean("aliasUser");\n    System.out.println(user);\n}\n')),Object(o.b)("h1",{id:"2-bean\u7684\u914d\u7f6e"},"2. Bean\u7684\u914d\u7f6e"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"id\uff1abean\u7684\u552f\u4e00\u6807\u8bc6\u7b26\uff0c\u76f8\u5f53\u4e8e\u5bf9\u8c61\u540d"),Object(o.b)("li",{parentName:"ul"},"class\uff1abean\u5bf9\u8c61\u6240\u5bf9\u5e94\u7684\u7c7b\u5168\u9650\u5b9a\u540d"),Object(o.b)("li",{parentName:"ul"},"name\uff1a\u4e5f\u662f\u522b\u540d\uff0cname\u652f\u6301\u540c\u65f6\u8d77\u591a\u4e2a\u522b\u540d\uff0c\u652f\u6301\u7528\u7a7a\u683c\u3001\u9017\u53f7\u3001\u5206\u53f7\u5206\u9694")),Object(o.b)("h1",{id:"3-import"},"3. Import"),Object(o.b)("p",null,"\u4e00\u822c\u7528\u4e8e\u56e2\u961f\u5f00\u53d1\u4f7f\u7528\uff0c\u53ef\u4ee5\u5c06\u591a\u4e2a\u914d\u7f6e\u6587\u4ef6\u5bfc\u5165\u5408\u5e76\u4e3a\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),'<import resource = "xxx.xml"/>\n')))}s.isMDXComponent=!0},567:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return f}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=t,f=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(f,c(c({ref:n},p),{},{components:r})):a.a.createElement(f,c({ref:n},p))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);