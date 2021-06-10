(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{112:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return b}));var r=t(2),a=t(6),o=(t(0),t(561)),l={id:"3.helloSpring",title:"Hello Spring"},i={unversionedId:"spring/3.helloSpring",id:"spring/3.helloSpring",isDocsHomePage:!1,title:"Hello Spring",description:"Hello Spring",source:"@site/docs/spring/3.HelloSpring.md",slug:"/spring/3.helloSpring",permalink:"/docs/spring/3.helloSpring",version:"current",sidebar:"someSidebar",previous:{title:"IoC\u63a7\u5236\u7ffb\u8f6c",permalink:"/docs/spring/2.ioc"},next:{title:"IoC\u521b\u5efa\u5bf9\u8c61\u7684\u65b9\u5f0f",permalink:"/docs/spring/4.iocStyle"}},p=[{value:"Hello Spring",id:"hello-spring",children:[]}],c={rightToc:p};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"hello-spring"},"Hello Spring"),Object(o.b)("p",null,"\u65b0\u5efa\u4e00\u4e2amaven\u6a21\u5757\uff0c",Object(o.b)("strong",{parentName:"p"},"\u9664\u4e86\u5b9e\u4f8b\u5316Spring\u5bb9\u5668\uff0c\u5168\u7a0b\u4e0d\u4f7f\u7528new\u5173\u952e\u5b57")),Object(o.b)("p",null,"\u5728\u7236\u5de5\u7a0b\u4e2d\u5df2\u7ecf\u5bfc\u5165\u4e86spring maven\u5750\u6807"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u53bb\u5b98\u65b9\u6587\u6863\u627e\u6838\u5fc3\u914d\u7f6e\u6587\u4ef6\uff0c\u5185\u5bb9\uff1a")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="http://www.springframework.org/schema/beans\n        https://www.springframework.org/schema/beans/spring-beans.xsd">\n\n    <bean id="..." class="...">  \n        \x3c!-- collaborators and configuration for this bean go here --\x3e\n    </bean>\n\n    <bean id="..." class="...">\n        \x3c!-- collaborators and configuration for this bean go here --\x3e\n    </bean>\n\n    \x3c!-- more bean definitions go here --\x3e\n\n</beans>\n')),Object(o.b)("p",null,"\u5b98\u65b9\u628a\u5b83\u53eb",Object(o.b)("inlineCode",{parentName:"p"},"applicationContext"),"\u4e3a\u4e86\u65b9\u4fbf\u7406\u89e3\u6211\u4eec\u628a\u5b83\u53eb",Object(o.b)("inlineCode",{parentName:"p"},"beans.xml"),"\u56e0\u4e3a\u91cc\u9762\u914d\u7684\u90fd\u662f\u4e00\u5806bean"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u65b0\u5efa\u4e00\u4e2apojo\u7c7b",Object(o.b)("inlineCode",{parentName:"p"},"Hello"),"\u5b83\u6709\u4e00\u4e2a",Object(o.b)("inlineCode",{parentName:"p"},"String str"),"\u5c5e\u6027(\u7528\u4e00\u4e0blombok)"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@Data\n@NoArgsConstructor\n@AllArgsConstructor\npublic class Hello {\n    private String Str;\n}\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"beans.xml\n\u6211\u4eec\u7528Spring\u6765\u521b\u5efaHello\u7684\u5bf9\u8c61\uff0cHello\u5bf9\u8c61\u7684str\u5c5e\u6027\u539f\u672c\u7528set\u65b9\u6cd5\u8bbe\u7f6e\uff0c\u73b0\u5728\u7528\u914d\u7f6e\u6587\u4ef6\u6765\u8bbe\u7f6e"),Object(o.b)("p",{parentName:"li"},"\u5c06",Object(o.b)("inlineCode",{parentName:"p"},"str"),"\u5c5e\u6027\u7684\u503c\u8bbe\u7f6e\u4e3a",Object(o.b)("inlineCode",{parentName:"p"},"Spring")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<bean id="hello" class="com.bsx.pojo.Hello">\n    <property name="str" value="Spring"/>\n</bean>\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u5b9e\u4f8b\u5316\u5bb9\u5668\uff0c\u6d4b\u8bd5\nSpring\u63d0\u4f9b\u4e86",Object(o.b)("inlineCode",{parentName:"p"},"ApplicationContext"),"\u6784\u9020\u51fd\u6570\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u4f4d\u7f6e\u8def\u5f84\u662f\u8d44\u6e90\u5b57\u7b26\u4e32\uff0c\u8fd9\u4e9b\u8d44\u6e90\u5b57\u7b26\u4e32\u4f7f\u5bb9\u5668\u53ef\u4ee5\u4ece\u5916\u90e8\u8d44\u6e90\u52a0\u8f7d\u914d\u7f6e\u5143\u6570\u636e",Object(o.b)("inlineCode",{parentName:"p"},"CLASSPATH")),Object(o.b)("p",{parentName:"li"},"\u6211\u4eec\u7684\u5bf9\u8c61\u73b0\u5728\u90fd\u5728Spring\u4e2d\u7ba1\u7406\u4e86\uff0c\u6211\u4eec\u8981\u4f7f\u7528\uff0c\u76f4\u63a5\u53bb\u91cc\u9762\u53d6\u51fa\u6765"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testHelloSpring() {\n    ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");\n    //\u7528bean\u7684id\u53d6\n    Hello hello = (Hello) context.getBean("hello");\n    System.out.println(hello.toString());\n}\n')))),Object(o.b)("p",null,"\u63a7\u5236\u53cd\u8f6c\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u63a7\u5236\n\u8c01\u6765\u63a7\u5236\u5bf9\u8c61\u7684\u521b\u5efa\uff0c\u4f20\u7edf\u5e94\u7528\u7a0b\u5e8f\u7684\u5bf9\u8c61\u662f\u7531\u7a0b\u5e8f\u672c\u8eab\u63a7\u5236\u521b\u5efa\u7684\uff0c\u4f7f\u7528Spring\u540e\uff0c\u5bf9\u8c61\u662f\u7531Spring\u6765\u521b\u5efa\u7684"),Object(o.b)("li",{parentName:"ul"},"\u53cd\u8f6c\n\u7a0b\u5e8f\u672c\u8eab\u4e0d\u521b\u5efa\u5bf9\u8c61\uff0c\u800c\u7f16\u7a0b\u88ab\u52a8\u7684\u63a5\u6536\u5bf9\u8c61"),Object(o.b)("li",{parentName:"ul"},"\u4f9d\u8d56\u6ce8\u5165\n\u5229\u7528set\u65b9\u6cd5\u6765\u8fdb\u884c\u6ce8\u5165")))}b.isMDXComponent=!0},561:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),b=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=b(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=b(t),m=r,g=s["".concat(l,".").concat(m)]||s[m]||u[m]||o;return t?a.a.createElement(g,i(i({ref:n},c),{},{components:t})):a.a.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);