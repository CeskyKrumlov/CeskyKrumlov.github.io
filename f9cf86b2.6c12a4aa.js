(window.webpackJsonp=window.webpackJsonp||[]).push([[483],{1181:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/5-5e8a40d14665ae5b17e4ce46c48e9a0d.png"},539:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(556)),i={id:"11.aop",title:"AOP"},l={unversionedId:"spring/11.aop",id:"spring/11.aop",isDocsHomePage:!1,title:"AOP",description:"1. \u4ec0\u4e48\u662fAOP",source:"@site/docs/spring/11.AOP.md",slug:"/spring/11.aop",permalink:"/docs/spring/11.aop",version:"current",sidebar:"someSidebar",previous:{title:"\u4ee3\u7406\u6a21\u5f0f",permalink:"/docs/spring/10.proxyPatterm"},next:{title:"\u6574\u5408Mybatis",permalink:"/docs/spring/12.addMybatis"}},c=[{value:"1. \u4ec0\u4e48\u662fAOP",id:"1-\u4ec0\u4e48\u662faop",children:[]},{value:"2. AOP\u5728Spring\u4e2d\u7684\u4f5c\u7528",id:"2-aop\u5728spring\u4e2d\u7684\u4f5c\u7528",children:[]},{value:"3. \u4f7f\u7528Spring\u5b9e\u73b0AOP",id:"3-\u4f7f\u7528spring\u5b9e\u73b0aop",children:[{value:"3.1 \u65b9\u5f0f\u4e00\uff1a \u4f7f\u7528Spring\u7684API\u63a5\u53e3",id:"31-\u65b9\u5f0f\u4e00\uff1a-\u4f7f\u7528spring\u7684api\u63a5\u53e3",children:[]},{value:"3.2 \u4f7f\u7528\u81ea\u5b9a\u4e49\u7c7b\u5b9e\u73b0AOP",id:"32-\u4f7f\u7528\u81ea\u5b9a\u4e49\u7c7b\u5b9e\u73b0aop",children:[]},{value:"3.3 \u6ce8\u89e3\u5b9e\u73b0AOP",id:"33-\u6ce8\u89e3\u5b9e\u73b0aop",children:[]}]},{value:"4. AOP\u7684\u5b9e\u9645\u5e94\u7528",id:"4-aop\u7684\u5b9e\u9645\u5e94\u7528",children:[{value:"4.1 \u5168\u5c40\u767b\u5f55\u9a8c\u8bc1",id:"41-\u5168\u5c40\u767b\u5f55\u9a8c\u8bc1",children:[]},{value:"4.2 \u5168\u5c40\u6240\u6709\u8005\u9a8c\u8bc1",id:"42-\u5168\u5c40\u6240\u6709\u8005\u9a8c\u8bc1",children:[]}]},{value:"5. AOP \u7684\u5168\u90e8\u901a\u77e5\u987a\u5e8f | SpringBoot 1 \u548c SpringBoot 2 \u5bf9 AOP \u6267\u884c\u987a\u5e8f\u7684\u5f71\u54cd",id:"5-aop-\u7684\u5168\u90e8\u901a\u77e5\u987a\u5e8f--springboot-1-\u548c-springboot-2-\u5bf9-aop-\u6267\u884c\u987a\u5e8f\u7684\u5f71\u54cd",children:[{value:"Spring4",id:"spring4",children:[]},{value:"Spring5",id:"spring5",children:[]}]}],b={rightToc:c};function p(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"1-\u4ec0\u4e48\u662faop"},"1. \u4ec0\u4e48\u662fAOP"),Object(o.b)("p",null,"AOP(Aspect Oriented Programming)\u662f\u6307\u9762\u5411\u5207\u9762\u7f16\u7a0b\uff0c\u901a\u8fc7\u9884\u7f16\u8bd1\u65b9\u5f0f\u548c\u8fd0\u884c\u671f\u52a8\u6001\u4ee3\u7406\u5b9e\u73b0\u7a0b\u5e8f\u529f\u80fd\u7684\u7edf\u4e00\u7ef4\u62a4\u7684\u4e00\u79cd\u6280\u672f\u3002AOP\u662fOOP\u7684\u5ef6\u7eed\uff0c\u662f\u8f6f\u4ef6\u5f00\u53d1\u4e2d\u7684\u4e00\u4e2a\u70ed\u70b9\uff0c\u4e5f\u662fSpring\u6846\u67b6\u4e2d\u7684\u4e00\u4e2a\u91cd\u8981\u5185\u5bb9\uff0c\u662f\u51fd\u6570\u5f0f\u7f16\u7a0b\u7684\u4e00\u79cd\u884d\u751f\u8303\u578b\u3002\u5229\u7528AOP\u53ef\u4ee5\u5bf9\u4e1a\u52a1\u903b\u8f91\u7684\u5404\u4e2a\u90e8\u5206\u8fdb\u884c\u9694\u79bb\uff0c\u4ece\u800c\u4f7f\u4e1a\u52a1\u903b\u8f91\u5404\u4e2a\u90e8\u5206\u4e4b\u95f4\u7684\u8026\u5408\u5ea6\u964d\u4f4e\uff0c\u63d0\u9ad8\u7a0b\u5e8f\u7684\u53ef\u91cd\u7528\u6027\uff0c\u540c\u65f6\u63d0\u9ad8\u4e86\u5f00\u53d1\u7684\u6548\u7387\u3002"),Object(o.b)("p",null,Object(o.b)("img",{alt:"image-20200403152457862",src:n(1181).default})),Object(o.b)("h1",{id:"2-aop\u5728spring\u4e2d\u7684\u4f5c\u7528"},"2. AOP\u5728Spring\u4e2d\u7684\u4f5c\u7528"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u63d0\u4f9b\u751f\u58f0\u660e\u5f0f\u4e8b\u52a1\uff1b\u5141\u8bb8\u7528\u6237\u81ea\u5b9a\u4e49\u5207\u9762")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u6a2a\u5207\u5173\u6ce8\u70b9\uff1a\u6a2a\u8de8\u5e94\u7528\u7a0b\u5e8f\u591a\u4e2a\u6a21\u5757\u7684\u65b9\u6cd5\u6216\u529f\u80fd\u3002\u5373\uff0c\u4e0e\u4e1a\u52a1\u903b\u8f91\u65e0\u5173\uff0c\u4f46\u662f\u9700\u8981\u5173\u6ce8\u7684\u90e8\u5206\uff0c\u5c31\u662f\u6a2a\u5207\u5173\u6ce8\u70b9\u3002\u5982\uff1a\u65e5\u5fd7\u3001\u5b89\u5168\u3001\u7f13\u5b58\u3001\u4e8b\u52a1\u7b49"),Object(o.b)("li",{parentName:"ul"},"\u5207\u9762(ASPECT)\uff1a\u6a2a\u5207\u5173\u6ce8\u5e26\u4f60\uff0c\u88ab\u6a21\u5757\u5316\u7684\u7279\u6b8a\u5bf9\u8c61\u3002\u5373\uff0c\u5b83\u662f\u4e00\u4e2a",Object(o.b)("strong",{parentName:"li"},"\u7c7b "),"\uff08\u4f8b\u5982Log\uff09"),Object(o.b)("li",{parentName:"ul"},"\u901a\u77e5(Advice)\uff1a\u5207\u9762\u5fc5\u987b\u5b8c\u6210\u7684\u5de5\u4f5c\uff0c\u5373\uff0c\u5b83\u662f\u7c7b\u4e2d\u7684\u4e00\u4e2a",Object(o.b)("strong",{parentName:"li"},"\u65b9\u6cd5")," \uff08\u4f8b\u5982Log\u4e2d\u7684\u65b9\u6cd5\uff09"),Object(o.b)("li",{parentName:"ul"},"\u76ee\u6807(Target)\uff1a\u88ab\u901a\u77e5\u7684\u5bf9\u8c61"),Object(o.b)("li",{parentName:"ul"},"\u4ee3\u7406(Proxy)\uff1a\u5411\u76ee\u6807\u5bf9\u8c61\u5e94\u7528\u901a\u77e5\u4e4b\u540e\u521b\u5efa\u7684\u5bf9\u8c61"),Object(o.b)("li",{parentName:"ul"},'\u5207\u5165\u70b9(PointCut)\uff1a\u9762\u5411\u901a\u77e5\u6267\u884c\u7684"\u5730\u70b9"\u5b9a\u4e49'),Object(o.b)("li",{parentName:"ul"},"\u8fde\u63a5\u70b9(JointPoint)\uff1a\u4e0e\u5207\u5165\u70b9\u5339\u914d\u7684\u6267\u884c\u70b9")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u5728SpringAOP\u4e2d\uff0c\u901a\u8fc7Adivce\u5b9a\u4e49\u6a2a\u5207\u903b\u8f91\uff0cSpring\u4e2d\u652f\u63015\u4e2d\u7c7b\u578b\u7684Advice")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u901a\u77e5\u7c7b\u578b"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u8fde\u63a5\u70b9"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u5b9e\u73b0\u63a5\u53e3"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u524d\u7f6e\u901a\u77e5"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u65b9\u6cd5\u65b9\u6cd5\u524d"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"org.springframework.aop.MethodBeforeAdvice")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u540e\u7f6e\u901a\u77e5"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u65b9\u6cd5\u540e"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"org.springframework.aop.AfterReturningAdvice")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u73af\u7ed5\u901a\u77e5"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u65b9\u6cd5\u524d\u540e"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"org.aopalliance.intercept.MethodInterceptor")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u5f02\u5e38\u629b\u51fa\u901a\u77e5"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u65b9\u6cd5\u629b\u51fa\u5f02\u5e38"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"org.springframework.aop.ThrowAdvice")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u5f15\u4ecb\u901a\u77e5"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u7c7b\u4e2d\u589e\u52a0\u65b0\u65b9\u6cd5\u5c5e\u6027"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"org.springframework.aop.IntroductionInterceptor")))),Object(o.b)("h1",{id:"3-\u4f7f\u7528spring\u5b9e\u73b0aop"},"3. \u4f7f\u7528Spring\u5b9e\u73b0AOP"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u3010\u91cd\u70b9\u3011\u4f7f\u7528AOP\u7ec7\u5165\uff0c\u5bfc\u5165\u4f9d\u8d56\u5305")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>org.aspectj</groupId>\n    <artifactId>aspectjweaver</artifactId>\n    <version>1.9.4</version>\n</dependency>\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u65b0\u5efamaven\u6a21\u5757 spring-09-aop")),Object(o.b)("h2",{id:"31-\u65b9\u5f0f\u4e00\uff1a-\u4f7f\u7528spring\u7684api\u63a5\u53e3"},"3.1 \u65b9\u5f0f\u4e00\uff1a \u4f7f\u7528Spring\u7684API\u63a5\u53e3"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Log\u7c7b"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"method"),"\uff1a\u8981\u6267\u884c\u7684\u76ee\u6807\u5bf9\u8c61\u7684\u65b9\u6cd5"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"object"),"\uff1a\u53c2\u6570",Object(o.b)("inlineCode",{parentName:"li"},"args")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"o"),":\u76ee\u6807\u5bf9\u8c61")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class Log implements MethodBeforeAdvice {\n    public void before(Method method, Object[] objects, Object o) throws Throwable {\n        System.out.println("\u524d\u7f6e\u65e5\u5fd7");\n    }\n}\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"AfterLog\u7c7b"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class AfterLog implements AfterReturningAdvice {\n    public void afterReturning(Object returnValue, Method method, Object[] args,\n                               Object target) throws Throwable {\n        System.out.println("\u6267\u884c\u4e86" + method.getName() + "\u8fd4\u56de\u4e86" + returnValue);\n    }\n}\n')))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u628a\u4e0a\u9762\u4e24\u4e2a\u65e5\u5fd7\u7c7b\u6ce8\u518c\u5230Spring\u91cc")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u65b0\u5efa",Object(o.b)("inlineCode",{parentName:"p"},"applicationContext.xml"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u5728\u91cc\u9762\u6ce8\u518c\u4e24\u4e2a\u65e5\u5fd7\u7c7b\u548cUserServiceImpl")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u914d\u7f6eaop"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5207\u5165\u70b9\uff1a\u5728\u4ec0\u4e48\u5730\u65b9\u6267\u884c")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xmlns:aop="http://www.springframework.org/schema/aop"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans\n        https://www.springframework.org/schema/beans/spring-beans.xsd\n        http://www.springframework.org/schema/aop\n        https://www.springframework.org/schema/aop/spring-aop.xsd">\n\n    <bean id = "userService" class="com.bsx.service.UserServiceImpl"/>\n    <bean id = "log" class="com.bsx.log.Log"/>\n    <bean id = "afterLog" class="com.bsx.log.AfterLog"/>\n\n    \x3c!--\u65b9\u5f0f\u4e00\uff1a\u4f7f\u7528\u539f\u751fSpring API\u63a5\u53e3--\x3e\n\x3c!--    \u914d\u7f6eaop--\x3e\n    <aop:config>\n\x3c!--        \u5207\u5165\u70b9   \u8868\u8fbe\u5f0f  execution(\u8981\u6267\u884c\u7684\u4f4d\u7f6e)--\x3e\n\x3c!--        \u5207\u5165 UserServiceImpl\u4e2d\u6240\u6709\u7684\u65b9\u6cd5\uff0c\u5339\u914d\u6240\u6709\u7684\u53c2\u6570--\x3e\n        <aop:pointcut id="pointCut"\n                      expression="execution(* com.bsx.service.UserServiceImpl.*(..))"/>\n\x3c!--        \u6267\u884c\u73af\u7ed5\u589e\u52a0\uff0c\u628alog\u7c7b\u5207\u5165\u5230\u5207\u5165\u70b9\u8868\u8fbe\u5f0f\u91cc\u5199\u7684\u65b9\u6cd5\u4e0a--\x3e\n        <aop:advisor advice-ref="log" pointcut-ref="pointCut"/>\n        <aop:advisor advice-ref="afterLog" pointcut-ref="pointCut" />\n    </aop:config>\n\n</beans>\n')))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u6d4b\u8bd5")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testAOP1(){\n    ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");\n\n\n    //\u52a8\u6001\u4ee3\u7406\u8fd4\u56de\u7684\u662f\u63a5\u53e3\n    UserService userService = context.getBean("userService", UserService.class);\n    userService.add();\n    userService.delete();\n    userService.update();\n    userService.query();\n}\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u7ed3\u679c"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"com.bsx.service.UserServiceImpl\u7684add\u88ab\u6267\u884c\u4e86\n\u589e\u52a0\u4e86\u4e00\u4e2a\u7528\u6237\n\u6267\u884c\u4e86add\u8fd4\u56de\u4e86null\ncom.bsx.service.UserServiceImpl\u7684delete\u88ab\u6267\u884c\u4e86\n\u5220\u9664\u4e86\u4e00\u4e2a\u7528\u6237\n\u6267\u884c\u4e86delete\u8fd4\u56de\u4e86null\ncom.bsx.service.UserServiceImpl\u7684update\u88ab\u6267\u884c\u4e86\n\u66f4\u65b0\u4e86\u4e00\u4e2a\u7528\u6237\n\u6267\u884c\u4e86update\u8fd4\u56de\u4e86null\ncom.bsx.service.UserServiceImpl\u7684query\u88ab\u6267\u884c\u4e86\n\u67e5\u8be2\u4e86\u4e00\u4e2a\u7528\u6237\n\u6267\u884c\u4e86query\u8fd4\u56de\u4e86null\n")))),Object(o.b)("h2",{id:"32-\u4f7f\u7528\u81ea\u5b9a\u4e49\u7c7b\u5b9e\u73b0aop"},"3.2 \u4f7f\u7528\u81ea\u5b9a\u4e49\u7c7b\u5b9e\u73b0AOP"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u81ea\u5b9a\u4e49\u5207\u5165\u70b9\u7c7b"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'/***\n * \u81ea\u5b9a\u4e49\u5207\u5165\u70b9\u7c7b\n */\npublic class DiyPointCut {\n\n    public void before(){\n        System.out.println("-------\u65b9\u6cd5\u6267\u884c\u524d-------");\n    }\n    \n    public void after(){\n        System.out.println("-------\u65b9\u6cd5\u6267\u884c\u540e-------");\n    }\n    \n}\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"applicationContext.xml"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!--    \u65b9\u5f0f\u4e8c \uff1a \u81ea\u5b9a\u4e49\u7c7b\uff0c\u7ed9\u5b83\u6ce8\u518cbean--\x3e\n    <bean id="diy" class="com.bsx.diy.DiyPointCut"/>\n    <aop:config>\n\x3c!--        \u81ea\u5b9a\u4e49\u5207\u9762\uff0cref\u4e3a\u8981\u5f15\u7528\u7684\u7c7b--\x3e\n        <aop:aspect ref="diy" >\n\x3c!--            \u5207\u5165\u70b9--\x3e\n            <aop:pointcut id="point"\n                          expression="execution(* com.bsx.service.UserServiceImpl.*(..))"/>\n\x3c!--            \u901a\u77e5\uff0c\u7c7b\u4e2d\u7684\u4e00\u4e2a\u65b9\u6cd5--\x3e\n            <aop:before method="before" pointcut-ref="point"/>\n            <aop:after method="after" pointcut-ref="point"/>\n        </aop:aspect>\n    </aop:config>\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u6d4b\u8bd5\u7c7b\u4e0d\u53d8"))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u65b9\u5f0f\u4e00\u6bd4\u65b9\u5f0f\u4e8c\u529f\u80fd\u66f4\u5f3a\u5927"))),Object(o.b)("h2",{id:"33-\u6ce8\u89e3\u5b9e\u73b0aop"},"3.3 \u6ce8\u89e3\u5b9e\u73b0AOP"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u5207\u9762\u7c7b\n\u7528",Object(o.b)("inlineCode",{parentName:"p"},"@Aspect"),"\u6807\u6ce8\u4e00\u4e2a\u7c7b\u4e3a\u5207\u9762"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Aspect\npublic class AnnotationPointCut {\n\n    @Before("execution(* com.bsx.service.UserServiceImpl.*(..))")\n    public void before() {\n        System.out.println("------\u65b9\u6cd5\u6267\u884c\u524d------");\n    }\n\n    @After("execution(* com.bsx.service.UserServiceImpl.*(..))")\n    public void after() {\n        System.out.println("------\u65b9\u6cd5\u6267\u884c\u540e------");\n    }\n\n    @Around("execution(* com.bsx.service.UserServiceImpl.*(..))")\n  public void around(ProceedingJoinPoint joinPoint) throws Throwable {\n        System.out.println("\u73af\u7ed5\u524d");\n        System.out.println("\u5373\u5c06\u6267\u884c\u65b9\u6cd5:" + joinPoint.getSignature() + "\u53c2\u6570:" + joinPoint.getArgs());\n        joinPoint.proceed();\n        System.out.println("\u73af\u7ed5\u540e");\n    }\n}\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"applicationContext.xml"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<bean id="annotationPointCut" class="com.bsx.diy.AnnotationPointCut"/>\n\x3c!--    \u5f00\u542f\u6ce8\u89e3--\x3e\n<aop:aspectj-autoproxy/>\n')))),Object(o.b)("h1",{id:"4-aop\u7684\u5b9e\u9645\u5e94\u7528"},"4. AOP\u7684\u5b9e\u9645\u5e94\u7528"),Object(o.b)("h2",{id:"41-\u5168\u5c40\u767b\u5f55\u9a8c\u8bc1"},"4.1 \u5168\u5c40\u767b\u5f55\u9a8c\u8bc1"),Object(o.b)("p",null,"\u5728\u4f7f\u7528\u7f51\u7ad9\u65f6\uff0c\u6211\u4eec\u7ecf\u5e38\u5728\u4f7f\u7528\u4e00\u9879\u529f\u80fd\u65f6\u53d1\u73b0\u9875\u9762\u8df3\u8f6c\u56de\u767b\u5f55\u9875\u9762\u8981\u6c42\u6211\u4eec\u767b\u5f55\uff0c\u5982\u4f55\u5c06\u8fd9\u4e2a\u529f\u80fd\u5728\u4efb\u610f\u9700\u8981\u7528\u6237\u767b\u5f55\u7684\u529f\u80fd\u4e0a\u8fdb\u884c\u5b9e\u73b0\uff1f\u96be\u9053\u8981\u5728\u6bcf\u4e00\u4e2a\u529f\u80fd\u524d\u52a0\u4e0a\u767b\u5f55\u9a8c\u8bc1\uff1f\n\u4f7f\u7528AOP\u6211\u4eec\u53ef\u4ee5\u5b9a\u4e49\u4e00\u6b21\u767b\u5f55\u9a8c\u8bc1\uff0c\u7136\u540e\u8ba9\u5b83\u5207\u5165\u5230\u6240\u6709\u9700\u8981\u7528\u6237\u767b\u5f55\u624d\u80fd\u4f7f\u7528\u7684\u529f\u80fd\u524d"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Around("execution(* com.bsx.controller.TopicController.*(..)) || execution(* com" +\n        ".bsx.controller.WeiboController.*(..))")\npublic ModelAndView loginRequired(ProceedingJoinPoint joint) throws Throwable {\n    // \u5728 TodoController \u4e0b\u9762\u6240\u6709\u65b9\u6cd5\u88ab\u6267\u884c\u7684\u65f6\u5019\u8c03\u7528\n    // @Around \u80fd\u5728\u6267\u884c\u65b9\u6cd5\u4e4b\u524d\u548c\u4e4b\u540e\u5904\u7406\u3002\u7531 loginRequired \u51b3\u5b9a\u4ec0\u4e48\u65f6\u5019\u8c03\u7528 controller \u7684\u65b9\u6cd5\u3002\n    // execution \u5339\u914d\u65b9\u6cd5\u6267\u884c\u3002Aspect \u529f\u80fd\u975e\u5e38\u591a\uff0c\u9664\u4e86\u80fd\u5728\u65b9\u6cd5\u6267\u884c\u7684\u65f6\u5019\u63d2\u5165\uff0c\u8fd8\u80fd\u5728\u5176\u4ed6\u5730\u65b9\u63d2\u5165\u3002\n    // * com.bsx.controller.TodoController.*(..)\n    // \u7b2c\u4e00\u4e2a *\uff0c\u5339\u914d\u4efb\u610f\u7684\u65b9\u6cd5\u8fd4\u56de\u503c\n    // \u7b2c\u4e8c\u4e2a *\uff0c\u5339\u914d TodoController \u4e0b\u7684\u4efb\u610f\u65b9\u6cd5\uff0c\u53ef\u4ee5\u628a * \u6362\u6210\u5177\u4f53\u65b9\u6cd5\u540d\u3002\u8fd9\u91cc\u6709\u81ea\u52a8\u8865\u5168\u3002\n    // (..) \u5339\u914d\u4efb\u610f\u53c2\u6570\u7b7e\u540d\n    // \u7b80\u5199 @Around("within(com.bsx.controller.TodoController)")\n    // ProceedingJoinPoint \u6b63\u5728\u88ab\u8c03\u7528\u7684\u65b9\u6cd5\n    // \u8fd4\u56de\u503c\u7c7b\u578b\u8981\u548c\u88ab\u5904\u7406\u7684\u63a7\u5236\u5668\u65b9\u6cd5\u7c7b\u578b\u4e00\u6837\u3002\u6240\u4ee5 TodoController \u7684\u6240\u6709\u65b9\u6cd5\u8fd4\u56de\u503c\u90fd\u8981\u662f ModelAndView\n    Utility.log("loginRequired \u6b63\u5728\u8bbf\u95ee\u7684 url %s", request.getRequestURI());\n    Utility.log("loginRequired \u6b63\u5728\u6267\u884c\u7684\u65b9\u6cd5 %s %s", joint.getSignature(), joint.getArgs());\n    Integer userID = (Integer) request.getSession().getAttribute("user_id");\n    if (userID == null) {\n        // \u8df3\u8f6c\u56de\u767b\u9646\u9875\u9762\n        Utility.log("loginRequired \u6ca1\u6709 session");\n        return new ModelAndView("redirect:/login");\n    } else {\n        UserModel u = userService.findById(userID);\n        if (u == null && u.getRole().equals(UserRole.guest)) {\n            // \u8df3\u8f6c\u56de\u767b\u9646\u9875\u9762\n            Utility.log("loginRequired \u7528\u6237\u4e0d\u5b58\u5728 %s", userID);\n            return new ModelAndView("redirect:/login");\n        } else {\n            // \u6267\u884c\u88ab\u5207\u5165\u7684\u65b9\u6cd5\n            return (ModelAndView) joint.proceed();\n        }\n    }\n}\n')),Object(o.b)("h2",{id:"42-\u5168\u5c40\u6240\u6709\u8005\u9a8c\u8bc1"},"4.2 \u5168\u5c40\u6240\u6709\u8005\u9a8c\u8bc1"),Object(o.b)("p",null,"\u7c7b\u4f3c\u7684\uff0c\u6709\u4e9b\u529f\u80fd\u9700\u8981\u9a8c\u8bc1\u6240\u6709\u8005\uff0c\u6bd4\u5982\u6211\u4eec\u5728\u8d34\u5427\u4e0a\u53d1\u4e86\u8d34\uff0c\u81ea\u5df1\u6709\u6743\u9650\u8fdb\u884c\u4fee\u6539\uff0c\u522b\u4eba\u53ea\u80fd\u770b\u4e0d\u80fd\u4fee\u6539\uff0c\u8fd9\u5c31\u9700\u8981\u5728\u4fee\u6539\u66f4\u80fd\u524d\u8fdb\u884c\u6240\u6709\u8005\u9a8c\u8bc1"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Around("execution(* com.bsx.controller.TopicController.edit(..)) || execution(* " +\n        "com.bsx.controller.TopicController.delete(..)) || execution(* com.bsx.controller.TopicController.edit(..)) ")\npublic ModelAndView ownerRequird(ProceedingJoinPoint joint) throws Throwable {\n    // \u5728 TodoController \u4e0b\u9762\u6240\u6709\u65b9\u6cd5\u88ab\u6267\u884c\u7684\u65f6\u5019\u8c03\u7528\n    // @Around \u80fd\u5728\u6267\u884c\u65b9\u6cd5\u4e4b\u524d\u548c\u4e4b\u540e\u5904\u7406\u3002\u7531 loginRequired \u51b3\u5b9a\u4ec0\u4e48\u65f6\u5019\u8c03\u7528 controller \u7684\u65b9\u6cd5\u3002\n    // execution \u5339\u914d\u65b9\u6cd5\u6267\u884c\u3002Aspect \u529f\u80fd\u975e\u5e38\u591a\uff0c\u9664\u4e86\u80fd\u5728\u65b9\u6cd5\u6267\u884c\u7684\u65f6\u5019\u63d2\u5165\uff0c\u8fd8\u80fd\u5728\u5176\u4ed6\u5730\u65b9\u63d2\u5165\u3002\n    // * com.bsx.controller.TodoController.*(..)\n    // \u7b2c\u4e00\u4e2a *\uff0c\u5339\u914d\u4efb\u610f\u7684\u65b9\u6cd5\u8fd4\u56de\u503c\n    // \u7b2c\u4e8c\u4e2a *\uff0c\u5339\u914d TodoController \u4e0b\u7684\u4efb\u610f\u65b9\u6cd5\uff0c\u53ef\u4ee5\u628a * \u6362\u6210\u5177\u4f53\u65b9\u6cd5\u540d\u3002\u8fd9\u91cc\u6709\u81ea\u52a8\u8865\u5168\u3002\n    // (..) \u5339\u914d\u4efb\u610f\u53c2\u6570\u7b7e\u540d\n    // \u7b80\u5199 @Around("within(com.bsx.controller.TodoController)")\n    // ProceedingJoinPoint \u6b63\u5728\u88ab\u8c03\u7528\u7684\u65b9\u6cd5\n    // \u8fd4\u56de\u503c\u7c7b\u578b\u8981\u548c\u88ab\u5904\u7406\u7684\u63a7\u5236\u5668\u65b9\u6cd5\u7c7b\u578b\u4e00\u6837\u3002\u6240\u4ee5 TodoController \u7684\u6240\u6709\u65b9\u6cd5\u8fd4\u56de\u503c\u90fd\u8981\u662f ModelAndView\n    Utility.log("ownerRequird \u6b63\u5728\u8bbf\u95ee\u7684 url %s", request.getRequestURI());\n    Utility.log("ownerRequird \u6b63\u5728\u6267\u884c\u7684\u65b9\u6cd5 %s %s", joint.getSignature(), joint.getArgs());\n    Integer userID = (Integer) request.getSession().getAttribute("user_id");\n    Integer topicId = Integer.valueOf(request.getParameter("id"));\n    if (userID == null) {\n        // \u8df3\u8f6c\u56de\u767b\u9646\u9875\u9762\n        Utility.log("loginRequired \u6ca1\u6709 session");\n        return new ModelAndView("redirect:/login");\n    } else {\n        UserModel u = userService.findById(userID);\n        Utility.log("user after find", u);\n        if (u == null && u.getRole().equals(UserRole.guest)) {\n            // \u8df3\u8f6c\u56de\u767b\u9646\u9875\u9762\n            Utility.log("loginRequired \u7528\u6237\u4e0d\u5b58\u5728 %s", userID);\n            return new ModelAndView("redirect:/login");\n        } else {\n            TopicModel topic = topicService.findById(topicId);\n            Utility.log("topic before route: %s", topic);\n            Utility.log("user before route: %s", u);\n            if (u.getId().equals(topic.getUserId())) {\n                return (ModelAndView) joint.proceed();\n            } else {\n                return new ModelAndView("redirect:/login");\n            }\n        }\n    }\n}\n')),Object(o.b)("br",null),Object(o.b)("h1",{id:"5-aop-\u7684\u5168\u90e8\u901a\u77e5\u987a\u5e8f--springboot-1-\u548c-springboot-2-\u5bf9-aop-\u6267\u884c\u987a\u5e8f\u7684\u5f71\u54cd"},"5. AOP \u7684\u5168\u90e8\u901a\u77e5\u987a\u5e8f | SpringBoot 1 \u548c SpringBoot 2 \u5bf9 AOP \u6267\u884c\u987a\u5e8f\u7684\u5f71\u54cd"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u4ece Spring4 \u5230 Spring5 \u7248\u672c\u5347\u7ea7\uff0c\u4f1a\u9047\u5230\u7684\u5751")),Object(o.b)("h2",{id:"spring4"},"Spring4"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u6b63\u5e38"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u5f02\u5e38"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u8c03\u7528\u524d\u4e00\u884c -> @Before -> \u8c03\u7528 -> \u8c03\u7528\u540e\u4e00\u884c -> @After @AfterReturning"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u8c03\u7528\u524d\u4e00\u884c -> @Before -> \u8c03\u7528 -> @After @AfterThrowing")))),Object(o.b)("h2",{id:"spring5"},"Spring5"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u6b63\u5e38"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u5f02\u5e38"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u8c03\u7528\u524d\u4e00\u884c -> @Before -> \u8c03\u7528 -> @AfterReturning -> @After -> \u8c03\u7528\u540e\u4e00\u884c"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u8c03\u7528\u524d\u4e00\u884c -> @Before -> \u8c03\u7528 -> @AfterThrowing -> @After")))))}p.isMDXComponent=!0},556:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||o;return n?a.a.createElement(m,l(l({ref:t},b),{},{components:n})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);