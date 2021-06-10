(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{250:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return l}));var a=t(2),r=t(6),p=(t(0),t(502)),c={id:"6.di",title:"DI\u4f9d\u8d56\u6ce8\u5165"},s={unversionedId:"spring/6.di",id:"spring/6.di",isDocsHomePage:!1,title:"DI\u4f9d\u8d56\u6ce8\u5165",description:"1. \u6784\u9020\u5668\u6ce8\u5165",source:"@site/docs/spring/6.DI\u4f9d\u8d56\u6ce8\u5165.md",slug:"/spring/6.di",permalink:"/docs/spring/6.di",version:"current",sidebar:"someSidebar",previous:{title:"Spring\u914d\u7f6e",permalink:"/docs/spring/5.springConfig"},next:{title:"Bean\u81ea\u52a8\u88c5\u914d",permalink:"/docs/spring/7.autowire"}},i=[{value:"1. \u6784\u9020\u5668\u6ce8\u5165",id:"1-\u6784\u9020\u5668\u6ce8\u5165",children:[]},{value:"2. Set\u6ce8\u5165\u91cd\u70b9",id:"2-set\u6ce8\u5165\u91cd\u70b9",children:[{value:"2.1 \u73af\u5883\u642d\u5efa",id:"21-\u73af\u5883\u642d\u5efa",children:[]}]},{value:"3. \u62d3\u5c55\u65b9\u5f0f\u6ce8\u5165",id:"3-\u62d3\u5c55\u65b9\u5f0f\u6ce8\u5165",children:[{value:"3.1 p\u547d\u540d\u7a7a\u95f4",id:"31-p\u547d\u540d\u7a7a\u95f4",children:[]},{value:"3.2 c\u547d\u540d\u7a7a\u95f4",id:"32-c\u547d\u540d\u7a7a\u95f4",children:[]}]},{value:"4. bean\u7684\u4f5c\u7528\u57df",id:"4-bean\u7684\u4f5c\u7528\u57df",children:[{value:"4.1 \u5355\u4f8b\u6a21\u5f0f\uff08Spring\u9ed8\u8ba4\uff09",id:"41-\u5355\u4f8b\u6a21\u5f0f\uff08spring\u9ed8\u8ba4\uff09",children:[]},{value:"4.2 \u539f\u578b\u6a21\u5f0f",id:"42-\u539f\u578b\u6a21\u5f0f",children:[]},{value:"4.3 \u5176\u4ed6\u4f5c\u7528\u57df",id:"43-\u5176\u4ed6\u4f5c\u7528\u57df",children:[]}]}],b={rightToc:i};function l(e){var n=e.components,c=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(a.a)({},b,c,{components:n,mdxType:"MDXLayout"}),Object(p.b)("h1",{id:"1-\u6784\u9020\u5668\u6ce8\u5165"},"1. \u6784\u9020\u5668\u6ce8\u5165"),Object(p.b)("p",null,"\u7b2c\u56db\u8282\u8bf4\u8fc7\u4e86"),Object(p.b)("h1",{id:"2-set\u6ce8\u5165\u91cd\u70b9"},"2. Set\u6ce8\u5165","[\u91cd\u70b9]"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"\u4f9d\u8d56\uff1abean\u5bf9\u8c61\u7684\u521b\u5efa\u4f9d\u8d56\u5bb9\u5668"),Object(p.b)("li",{parentName:"ul"},"\u6ce8\u5165\uff1abean\u5bf9\u8c61\u4e2d\u7684\u6240\u6709\u5c5e\u6027\u7531\u5bb9\u5668\u6765\u6ce8\u5165")),Object(p.b)("h2",{id:"21-\u73af\u5883\u642d\u5efa"},"2.1 \u73af\u5883\u642d\u5efa"),Object(p.b)("p",null,"\u65b0\u5efa\u4e00\u4e2amaven\u6a21\u5757,spring04"),Object(p.b)("ol",null,Object(p.b)("li",{parentName:"ol"},Object(p.b)("p",{parentName:"li"},"\u590d\u6742\u7c7b\u578b"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"@Data\n@AllArgsConstructor\n@NoArgsConstructor\npublic class Student {\n    private String name;\n    private Address address;\n    private String[] books;\n    private List<String> hobbies;\n    private Map<String,String> cards;\n    private Set<String> games;\n    private String wife;\n    private Properties info;\n}\n")))),Object(p.b)("ol",{start:2},Object(p.b)("li",{parentName:"ol"},Object(p.b)("p",{parentName:"li"},"beans.xml"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans\n        https://www.springframework.org/schema/beans/spring-beans.xsd">\n\n    <bean id="address" class="com.bsx.pojo.Address">\n        <property name="address" value="\u6211\u5bb6\u5730\u5740"/>\n    </bean>\n\n    <bean id="student" class="com.bsx.pojo.Student">\n\x3c!--        \u666e\u901a\u503c\u6ce8\u5165--\x3e\n        <property name="name" value="\u6211\u6709\u540d\u5b57\u4e86"/>\n\x3c!--        Bean\u6ce8\u5165 ref--\x3e\n        <property name="address" ref="address"/>\n\x3c!--        \u6570\u7ec4\u6ce8\u5165--\x3e\n        <property name="books">\n            <array>\n                <value>\u7ea2\u697c\u68a6</value>\n                <value>\u897f\u6e38\u8bb0</value>\n                <value>\u6c34\u6d52\u4f20</value>\n                <value>\u4e09\u56fd\u6f14\u4e49</value>\n            </array>\n        </property>\n\x3c!--        List\u6ce8\u5165--\x3e\n        <property name="hobbies">\n            <list>\n                <value>\u5403</value>\n                <value>\u559d</value>\n                <value>\u7761</value>\n            </list>\n        </property>\n\x3c!--        Map\u6ce8\u5165--\x3e\n        <property name="cards">\n            <map>\n                <entry key="\u8eab\u4efd\u8bc1" value="11111"/>\n                <entry key="\u94f6\u884c\u5361" value="6227"/>\n            </map>\n        </property>\n\x3c!--        Set\u6ce8\u5165--\x3e\n        <property name="games">\n            <set>\n                <value>\u9b54\u517d</value>\n                <value>\u5403\u9e21</value>\n                <value>LOL</value>\n            </set>\n        </property>\n\x3c!--        \u503c\u4e3anull\u7684\u5b57\u7b26\u4e32--\x3e\n        <property name="wife">\n            <null/>\n        </property>\n\x3c!--        Properties\u6ce8\u5165--\x3e\n        <property name="info">\n            <props>\n                <prop key="\u5b66\u53f7">20190000</prop>\n                <prop key="\u6027\u522b">male</prop>\n            </props>\n        </property>\n    </bean>\n\n</beans>\n'))),Object(p.b)("li",{parentName:"ol"},Object(p.b)("p",{parentName:"li"},"\u7ed3\u679c"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{}),"Student(name=\u6211\u6709\u540d\u5b57\u4e86, address=Address(address=\u6211\u5bb6\u5730\u5740), books=[\u7ea2\u697c\u68a6, \u897f\u6e38\u8bb0, \u6c34\u6d52\u4f20, \u4e09\u56fd\u6f14\u4e49], hobbies=[\u5403, \u559d, \u7761], cards={\u8eab\u4efd\u8bc1=11111, \u94f6\u884c\u5361=6227}, games=[\u9b54\u517d, \u5403\u9e21, LOL], wife=null, info={\u5b66\u53f7=20190000, \u6027\u522b=male})\n")))),Object(p.b)("h1",{id:"3-\u62d3\u5c55\u65b9\u5f0f\u6ce8\u5165"},"3. \u62d3\u5c55\u65b9\u5f0f\u6ce8\u5165"),Object(p.b)("p",null,"\u6ce8\u610f\uff1a\u4f7f\u7528\u5b83\u4eec\u9700\u8981\u5bfc\u5165\u76f8\u5e94\u7684xml\u7ea6\u675f\uff0c\u53bb\u5b98\u65b9\u6587\u6863\u627e"),Object(p.b)("h2",{id:"31-p\u547d\u540d\u7a7a\u95f4"},"3.1 p\u547d\u540d\u7a7a\u95f4"),Object(p.b)("p",null,"\u7528\u6765\u7b80\u5316",Object(p.b)("inlineCode",{parentName:"p"},"<property>"),"\u6807\u7b7e"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"\u65b0\u5efaUser\u7c7b"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"@Data\npublic class User {\n    private String name;\n    private int age;\n}\n")))),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"userbeans.xml"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xmlns:p="http://www.springframework.org/schema/p"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans\n        https://www.springframework.org/schema/beans/spring-beans.xsd">\n\n\x3c!--    p\u547d\u540d\u7a7a\u95f4\uff0c\u53ef\u4ee5\u76f4\u63a5\u6ce8\u5165\u5c5e\u6027--\x3e\n    <bean id="user" class="com.bsx.pojo.User" p:name="\u6211\u7684\u540d\u5b57" p:age="18"/>\n</beans>\n'))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"\u6d4b\u8bd5\u4e0e\u7ed3\u679c"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testUser() {\n    ApplicationContext context = new ClassPathXmlApplicationContext("userbeans.xml");\n    User user = context.getBean("user", User.class);\n    System.out.println(user);\n}\n')),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"User(name=\u6211\u7684\u540d\u5b57, age=18)\n")))),Object(p.b)("h2",{id:"32-c\u547d\u540d\u7a7a\u95f4"},"3.2 c\u547d\u540d\u7a7a\u95f4"),Object(p.b)("p",null,"\u5bf9\u5e94\u6784\u9020\u5668\u6ce8\u5165\uff0c\u7b80\u5316\u3002"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"userbeans.xml"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!--    \u547d\u540d\u7a7a\u95f4\uff0c\u53ef\u4ee5\u7b80\u5316\u6784\u9020\u5668\u6ce8\u5165--\x3e\n<bean id="user2" class="com.bsx.pojo.User" c:name="\u6784\u9020\u65b9\u6cd5\u6ce8\u5165\u540d\u5b57" c:age="18"/>\n'))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"\u6d4b\u8bd5\u4e0e\u7ed3\u679c"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testUser2() {\n    ApplicationContext context = new ClassPathXmlApplicationContext("userbeans.xml");\n    User user = context.getBean("user2", User.class);\n    System.out.println(user);\n}\n')),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{}),"User(name=\u6784\u9020\u65b9\u6cd5\u6ce8\u5165\u540d\u5b57, age=18)\n")))),Object(p.b)("h1",{id:"4-bean\u7684\u4f5c\u7528\u57df"},"4. bean\u7684\u4f5c\u7528\u57df"),Object(p.b)("img",{src:t(847).default,style:{zoom:"100%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(p.b)("br",null),Object(p.b)("h2",{id:"41-\u5355\u4f8b\u6a21\u5f0f\uff08spring\u9ed8\u8ba4\uff09"},"4.1 \u5355\u4f8b\u6a21\u5f0f\uff08Spring\u9ed8\u8ba4\uff09"),Object(p.b)("p",null,"\u5bb9\u5668\u91cc\u7684\u5bf9\u8c61\u662f\u5355\u4f8b singleton"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<bean id="user1" class="com.bsx.pojo.User" p:name="\u6211\u7684\u540d\u5b57" p:age="18" scope="singleton"/>\n')),Object(p.b)("h2",{id:"42-\u539f\u578b\u6a21\u5f0f"},"4.2 \u539f\u578b\u6a21\u5f0f"),Object(p.b)("p",null,"\u5bb9\u5668\u91cc\u7684\u6bcf\u4e00\u4e2abean\u90fd\u521b\u5efa\u4e00\u4e2a\u65b0\u5bf9\u8c61 prototype"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<bean id="user" class="com.bsx.pojo.User" p:name="\u6211\u7684\u540d\u5b57" p:age="18" scope="prototype"/>\n')),Object(p.b)("h2",{id:"43-\u5176\u4ed6\u4f5c\u7528\u57df"},"4.3 \u5176\u4ed6\u4f5c\u7528\u57df"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"Request"),"\uff1a\u6bcf\u4e00\u6b21HTTP\u8bf7\u6c42\u90fd\u4f1a\u4ea7\u751f\u4e00\u4e2a\u65b0\u7684bean\uff0c\u8be5bean\u5c3d\u5728\u5f53\u524dHTTP request\u4e2d\u6709\u6548"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"session"),"\uff1a\u6bcf\u4e00\u6b21HTTP\u8bf7\u6c42\u90fd\u4f1a\u4ea7\u751f\u4e00\u4e2a\u65b0\u7684bean\uff0c\u8be5bean\u53ea\u5728\u5f53\u524dHTTP\u7684session\u4e2d\u6709\u6548"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"global-session"),"\uff1aSpring 5\u5df2\u7ecf\u6ca1\u4e86")),Object(p.b)("div",{className:"admonition admonition-info alert alert--info"},Object(p.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(p.b)("h5",{parentName:"div"},Object(p.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(p.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(p.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(p.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(p.b)("p",{parentName:"div"},"request\u3001session\u3001application\u3001websocket\u53ea\u5728web\u5f00\u53d1\u4e2d\u4f7f\u7528"))))}l.isMDXComponent=!0},502:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),l=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},o=function(e){var n=l(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),o=l(t),u=a,d=o["".concat(c,".").concat(u)]||o[u]||m[u]||p;return t?r.a.createElement(d,s(s({ref:n},b),{},{components:t})):r.a.createElement(d,s({ref:n},b))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,c=new Array(p);c[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var b=2;b<p;b++)c[b]=t[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},847:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/3-f958e68e9d6770bc47bc3ae906bd0ecb.png"}}]);