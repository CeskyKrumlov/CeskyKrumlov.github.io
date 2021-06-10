(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{168:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return l})),n.d(a,"metadata",(function(){return b})),n.d(a,"rightToc",(function(){return o})),n.d(a,"default",(function(){return i}));var t=n(2),r=n(6),c=(n(0),n(554)),l={id:"7.autowire",title:"Bean\u81ea\u52a8\u88c5\u914d"},b={unversionedId:"spring/7.autowire",id:"spring/7.autowire",isDocsHomePage:!1,title:"Bean\u81ea\u52a8\u88c5\u914d",description:"- \u81ea\u52a8\u88c5\u914d\u662fSpring\u6ee1\u8db3bean\u4f9d\u8d56\u7684\u4e00\u79cd\u65b9\u5f0f",source:"@site/docs/spring/7.Bean\u81ea\u52a8\u88c5\u914d.md",slug:"/spring/7.autowire",permalink:"/docs/spring/7.autowire",version:"current",sidebar:"someSidebar",previous:{title:"DI\u4f9d\u8d56\u6ce8\u5165",permalink:"/docs/spring/6.di"},next:{title:"Spring\u6ce8\u89e3\u5f00\u53d1",permalink:"/docs/spring/8.springAnnotation"}},o=[{value:"1. \u6d4b\u8bd5\u73af\u5883\u642d\u5efa",id:"1-\u6d4b\u8bd5\u73af\u5883\u642d\u5efa",children:[]},{value:"2. \u81ea\u52a8\u88c5\u914d(\u81ea\u52a8\u6ce8\u5165)",id:"2-\u81ea\u52a8\u88c5\u914d\u81ea\u52a8\u6ce8\u5165",children:[]},{value:"3. \u6ce8\u89e3\u81ea\u52a8\u88c5\u914d",id:"3-\u6ce8\u89e3\u81ea\u52a8\u88c5\u914d",children:[{value:"@Autowired",id:"autowired",children:[]},{value:"@Qualifier",id:"qualifier",children:[]},{value:"@Resource (JDK)",id:"resource-jdk",children:[]}]}],p={rightToc:o};function i(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},p,n,{components:a,mdxType:"MDXLayout"}),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u81ea\u52a8\u88c5\u914d\u662fSpring\u6ee1\u8db3bean\u4f9d\u8d56\u7684\u4e00\u79cd\u65b9\u5f0f"),Object(c.b)("li",{parentName:"ul"},"Spring\u4f1a\u5728\u4e0a\u4e0b\u6587\u4e2d\u81ea\u52a8\u5bfb\u627e\uff0c\u5e76\u81ea\u52a8\u7ed9bean\u88c5\u914d\u5c5e\u6027")),Object(c.b)("p",null,"\u5728Spring\u4e2d\u6709\u4e09\u79cd\u88c5\u914d\u7684\u65b9\u5f0f"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u5728xml\u4e2d\u663e\u793a\u914d\u7f6e"),Object(c.b)("li",{parentName:"ol"},"\u5728java\u4e2d\u663e\u793a\u914d\u7f6e"),Object(c.b)("li",{parentName:"ol"},"\u9690\u5f0f\u7684\u81ea\u52a8\u88c5\u914d\uff08\u91cd\u8981\uff09")),Object(c.b)("h1",{id:"1-\u6d4b\u8bd5\u73af\u5883\u642d\u5efa"},"1. \u6d4b\u8bd5\u73af\u5883\u642d\u5efa"),Object(c.b)("p",null,"\u65b0\u5efamaven\u6a21\u5757,spring-05-autowired"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u5b9e\u4f53\u7c7b"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'@Data\n@NoArgsConstructor\npublic class Dog {\n    public void shout(){\n        System.out.println("\u6c6a");\n    }\n}\n')),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'@Data\n@NoArgsConstructor\npublic class Cat {\n    public void shout(){\n        System.out.println("\u55b5");\n    }\n}\n')),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"@Data\n@NoArgsConstructor\n@AllArgsConstructor\npublic class People {\n    private Cat cat;\n    private Dog dog;\n    private String name;\n}\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"beans.xml"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),'<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xmlns:p="http://www.springframework.org/schema/p"\n       xmlns:c="http://www.springframework.org/schema/c"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans\n        https://www.springframework.org/schema/beans/spring-beans.xsd">\n\n    <bean id="cat" class="com.bsx.pojo.Cat"/>\n    <bean id="dog" class="com.bsx.pojo.Dog"/>\n\n    <bean id="people" class="com.bsx.pojo.People">\n        <property name="name" value="\u6211\u7684\u540d\u5b57"/>\n        <property name="dog" ref="dog"/>\n        <property name="cat" ref="cat"/>\n    </bean>\n\n</beans>\n'))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u6d4b\u8bd5"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testEnv(){\n    ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");\n    People people = context.getBean("people", People.class);\n    people.getCat().shout();\n    people.getDog().shout();\n}\n')))),Object(c.b)("h1",{id:"2-\u81ea\u52a8\u88c5\u914d\u81ea\u52a8\u6ce8\u5165"},"2. \u81ea\u52a8\u88c5\u914d(\u81ea\u52a8\u6ce8\u5165)"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"byName\u901a\u8fc7\u540d\u5b57\u5339\u914d"),"\n\u4f1a\u81ea\u52a8\u5728\u5bb9\u5668\u4e2d\u67e5\u627e\u548c\u81ea\u5df1\u5bf9\u8c61set\u65b9\u6cd5\u540e\u9762\u5bf9\u5e94\u7684bean id"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),'<bean id="cat" class="com.bsx.pojo.Cat" />\n<bean id="dog" class="com.bsx.pojo.Dog" />\n\n<bean id="people" class="com.bsx.pojo.People" autowire="byName">\n    <property name="name" value="\u6211\u7684\u540d\u5b57"/>\n</bean>\n'))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"byType\u6309\u7167\u7c7b\u578b\u5339\u914d"),"\n\u5982\u679c\u6709\u591a\u4e2a\u7c7b\u578b\u4e00\u6837\u7684bean,\u76f4\u63a5\u62a5\u9519"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),'<bean id="cat" class="com.bsx.pojo.Cat"/>\n<bean id="dog" class="com.bsx.pojo.Dog"/>\n\n<bean id="people" class="com.bsx.pojo.People" autowire="byType">\n    <property name="name" value="\u6211\u7684\u540d\u5b57"/>\n</bean>\n')))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"byName\u65f6,\u9700\u8981\u4fdd\u8bc1\u6240\u6709bean\u7684id\u552f\u4e00,\u5e76\u4e14bean\u9700\u8981\u548c\u81ea\u52a8\u6ce8\u5165\u7684set\u65b9\u6cd5\u7684\u503c\u4e00\u81f4"),Object(c.b)("li",{parentName:"ul"},"byType,\u9700\u8981\u4fdd\u8bc1\u6240\u6709\u7684bean\u7c7b\u578b\u552f\u4e00,\u5e76\u4e14bean\u9700\u8981\u548c\u81ea\u52a8\u6ce8\u5165\u7684\u5c5e\u6027\u7c7b\u578b\u4e00\u81f4")),Object(c.b)("h1",{id:"3-\u6ce8\u89e3\u81ea\u52a8\u88c5\u914d"},"3. \u6ce8\u89e3\u81ea\u52a8\u88c5\u914d"),Object(c.b)("p",null,"jdk1.5\u652f\u6301\u7684\u6ce8\u89e3, Spring 2.5\u652f\u6301\u6ce8\u89e3"),Object(c.b)("p",null,"\u8981\u4f7f\u7528\u6ce8\u89e3\u987b\u77e5:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"\u5bfc\u5165\u7ea6\u675f"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),' xmlns:context="http://www.springframework.org/schema/context"\n'))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"\u914d\u7f6e\u6ce8\u89e3\u7684\u652f\u6301"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u53ef\u4ee5\u5f00\u542f\u5168\u5c40\u6ce8\u89e3"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),"<context:annotation-config/>\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u53ef\u4ee5\u6307\u5b9a\u626b\u63cf\u67d0\u4e2a\u5305\u4e0b\u7684\u6ce8\u89e3"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),'<context:component-scan base-package="com.bsx.pojo"/>\n')))))),Object(c.b)("h2",{id:"autowired"},"@Autowired"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"\u5148\u6309\u7c7b\u578b\u81ea\u52a8\u6ce8\u5165")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"\u591a\u4e2a\u7c7b\u578b\u76f8\u540c\uff0c\u5f53bean id\u548c \u5c5e\u6027\u540d\u76f8\u540c\u65f6\uff0c\u53ef\u4ee5\u81ea\u52a8\u6ce8\u5165")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"\u6ce8\u89e3\u901a\u8fc7\u53cd\u5c04\u521b\u5efa\u5bf9\u8c61\u56e0\u6b64\u4e0d\u9700\u8981",Object(c.b)("inlineCode",{parentName:"p"},"set"),"\u65b9\u6cd5\uff0c\u524d\u63d0\u662f\u81ea\u52a8\u6ce8\u5165\u7684\u5c5e\u6027\u5df2\u7ecf\u5728IoC\u5bb9\u5668\u4e2d\u5b58\u5728\uff0c\u4e14bean id \u7b49\u4e8e \u5c5e\u6027\u540d")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"\u53ef\u4ee5\u5728\u5c5e\u6027\u4e0a\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u5728set\u65b9\u6cd5\u4e0a\u4f7f\u7528"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"beans.xml")),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),'<context:annotation-config/>\n\n<bean id="cat" class="com.bsx.pojo.Cat"/>\n<bean id="dog" class="com.bsx.pojo.Dog"/>\n<bean id="people" class="com.bsx.pojo.People"/>\n')),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"People.java")),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"public class People {\n\n    @Autowired\n    private Cat cat;\n\n    @Autowired\n    private Dog dog;\n    \n    private String name;\n}\n")),Object(c.b)("p",null,"\u8dd1\u4e00\u4e0b\u4e0a\u9762\u7684\u6d4b\u8bd5\u7c7b\uff0c\u6b63\u5e38\u3002"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u79d1\u666e"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"@Nullable"),": \u6807\u8bb0\u67d0\u4e2a\u5b57\u6bb5\u503c\u53ef\u4ee5\u4e3anull")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"@Autowired(required == false)\n\u9ed8\u8ba4\u4e3atrue,\u5982\u679c\u8bbe\u7f6e\u4e3afalse\u8bf4\u660e\u8fd9\u4e2a\u5bf9\u8c61\u53ef\u4ee5\u4e3anull"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"public @interface Autowired {\n    boolean required() default true;\n}\n")))))),Object(c.b)("h2",{id:"qualifier"},"@Qualifier"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u914d\u5408@Autowired\u4f7f\u7528\uff0c\u53ef\u4ee5\u6307\u5b9a\u6309\u540d\u79f0\u6ce8\u5165"),Object(c.b)("li",{parentName:"ol"},"\u91cc\u9762\u6709\u4e00\u4e2avalue\u503c\u7528\u6765\u6307\u5b9a\u540d\u79f0")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"beans.xml"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),'<context:annotation-config/>\n\n<bean id="cat222" class="com.bsx.pojo.Cat"/>\n<bean id="cat111" class="com.bsx.pojo.Cat"/>\n<bean id="dog" class="com.bsx.pojo.Dog"/>\n<bean id="people" class="com.bsx.pojo.People"/>\n'))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"People.java"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'public class People {\n\n    @Autowired\n    @Qualifier("cat222")\n    private Cat cat;  // \u628a\u5bb9\u5668\u91cc\u7684cat222\u5bf9\u8c61\u6ce8\u5165\u5230People\u91cc\u7684cat\u5c5e\u6027\u91cc\n\n    @Autowired\n    private Dog dog;\n\n    private String name;\n}\n')))),Object(c.b)("h2",{id:"resource-jdk"},"@Resource (JDK)"),Object(c.b)("p",null,"\u8fd9\u662f\u4e00\u4e2aJava\u81ea\u5df1\u7684\u6ce8\u89e3\uff0c\u4e5f\u53ef\u4ee5\u5b9e\u73b0\u81ea\u52a8\u6ce8\u5165\u3002\n\u7528",Object(c.b)("inlineCode",{parentName:"p"},"name"),"\u5c5e\u6027\u53ef\u4ee5\u6307\u5b9a\u5c5e\u6027\u540d"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"beans.xml"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),'<bean id="cat222" class="com.bsx.pojo.Cat"/>\n<bean id="cat111" class="com.bsx.pojo.Cat"/>\n<bean id="dog" class="com.bsx.pojo.Dog"/>\n<bean id="people" class="com.bsx.pojo.People"/>\n'))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"People.java"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'public class People {\n\n    @Resource(name = "cat111")\n    private Cat cat;\n\n    @Resource\n    private Dog dog;\n\n    private String name;\n}\n')))))}i.isMDXComponent=!0},554:function(e,a,n){"use strict";n.d(a,"a",(function(){return s})),n.d(a,"b",(function(){return j}));var t=n(0),r=n.n(t);function c(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function b(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){c(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),i=function(e){var a=r.a.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):b(b({},a),e)),n},s=function(e){var a=i(e.components);return r.a.createElement(p.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,c=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=i(n),u=t,j=s["".concat(l,".").concat(u)]||s[u]||m[u]||c;return n?r.a.createElement(j,b(b({ref:a},p),{},{components:n})):r.a.createElement(j,b({ref:a},p))}));function j(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var c=n.length,l=new Array(c);l[0]=u;var b={};for(var o in a)hasOwnProperty.call(a,o)&&(b[o]=a[o]);b.originalType=e,b.mdxType="string"==typeof e?e:t,l[1]=b;for(var p=2;p<c;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);