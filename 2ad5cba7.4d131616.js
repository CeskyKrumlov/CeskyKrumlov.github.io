(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{139:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return p})),a.d(n,"metadata",(function(){return c})),a.d(n,"rightToc",(function(){return l})),a.d(n,"default",(function(){return o}));var t=a(2),r=a(6),s=(a(0),a(492)),p={id:"9.json",title:"\u524d\u540e\u7aef\u5206\u79bb\u2014\u2014JSON",hide_title:!0},c={unversionedId:"springmvc/9.json",id:"springmvc/9.json",isDocsHomePage:!1,title:"\u524d\u540e\u7aef\u5206\u79bb\u2014\u2014JSON",description:"\u524d\u540e\u7aef\u5206\u79bb",source:"@site/docs/springmvc/9.\u524d\u540e\u7aef\u5206\u79bb-JSON.md",slug:"/springmvc/9.json",permalink:"/docs/springmvc/9.json",version:"current",sidebar:"someSidebar",previous:{title:"\u4e71\u7801\u95ee\u9898",permalink:"/docs/springmvc/8.luanma"},next:{title:"Ajax",permalink:"/docs/springmvc/10.ajax"}},l=[{value:"\u524d\u540e\u7aef\u5206\u79bb",id:"\u524d\u540e\u7aef\u5206\u79bb",children:[{value:"JSON",id:"json",children:[]},{value:"1. \u4ec0\u4e48\u662fJson",id:"1-\u4ec0\u4e48\u662fjson",children:[]},{value:"2. Controller\u8fd4\u56deJSON\u6570\u636e",id:"2-controller\u8fd4\u56dejson\u6570\u636e",children:[]},{value:"2.1 Jackson",id:"21-jackson",children:[{value:"2.1.1 JSON\u4e71\u7801\u95ee\u9898",id:"211-json\u4e71\u7801\u95ee\u9898",children:[]},{value:"2.1.2 \u642d\u5efa",id:"212-\u642d\u5efa",children:[]},{value:"2.1.3 Jackson\u5de5\u5177\u7c7b",id:"213-jackson\u5de5\u5177\u7c7b",children:[]}]},{value:"2.2 Fastjson",id:"22-fastjson",children:[]}]}],i={rightToc:l};function o(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},i,a,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"\u524d\u540e\u7aef\u5206\u79bb"},"\u524d\u540e\u7aef\u5206\u79bb"),Object(s.b)("p",null,"\u540e\u7aef\u90e8\u7f72\u540e\u7aef\uff0c\u63d0\u4f9b\u63a5\u53e3\uff0c\u63d0\u4f9b\u6570\u636e"),Object(s.b)("p",null,"\u200b\t\t\t\t\tJSON"),Object(s.b)("p",null,"\u524d\u7aef\u72ec\u7acb\u90e8\u7f72\uff0c\u8d1f\u8d23\u6e32\u67d3\u540e\u7aef\u7684\u6570\u636e"),Object(s.b)("h2",{id:"json"},"JSON"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Jackson"),Object(s.b)("li",{parentName:"ul"},"fastJson")),Object(s.b)("h2",{id:"1-\u4ec0\u4e48\u662fjson"},"1. \u4ec0\u4e48\u662fJson"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"JSON(JavaScript Object Notation ,JS\u5bf9\u8c61\u6807\u8bb0)\u662f\u4e00\u79cd\u8f7b\u91cf\u7ea7\u7684\u6570\u636e\u4ea4\u6362\u683c\u5f0f\uff0c\u76ee\u524d\u4f7f\u7528\u5e7f\u6cdb"),Object(s.b)("li",{parentName:"ul"},"\u91c7\u7528\u5b8c\u5168\u72ec\u7acb\u4e8e\u7f16\u7a0b\u8bed\u8a00\u7684\u6587\u672c\u683c\u5f0f\u6765\u5b58\u50a8\u548c\u8868\u793a\u6570\u636e"),Object(s.b)("li",{parentName:"ul"},"\u7b80\u6d01\u6e05\u6670\u7684\u7ed3\u6784\u5c42\u6b21\u4f7f\u5f97JSON\u6210\u4e3a\u7406\u60f3\u7684\u6570\u636e\u4ea4\u6362\u8bed\u8a00"),Object(s.b)("li",{parentName:"ul"},"\u53ef\u8bfb\u6027\u5f3a\uff0c\u65b9\u4fbf\u7f16\u5199\uff0c\u6613\u4e8e\u89e3\u6790\u548c\u751f\u6210\uff0c\u63d0\u9ad8\u7f51\u7edc\u4f20\u8f93\u6548\u7387")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u5bf9\u8c61\u8868\u793a\u4e3a\u952e\u503c\u5bf9\uff0c\u6570\u636e\u7531",Object(s.b)("inlineCode",{parentName:"li"},","),"\u5206\u9694"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"{}"),"\u4fdd\u5b58\u5bf9\u8c61"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"[]"),"\u4fdd\u5b58\u6570\u7ec4")),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{"name": "Alice"}\n{"age": 3}\n{"sex": "female"}\n')),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"JSON \u548c JS\u5bf9\u8c61\u4e92\u8f6c")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"JSON -> JavaScript"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),'var obj = JSON.parse(\'{"a": "Hello", "b": "World"}\');\n')),Object(s.b)("p",{parentName:"li"},"-> \u7ed3\u679c\u662f {a: 'Hello', b: 'World'}")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"JavaScript -> JSON"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"var json = JSON.stringify({a: 'Hello', b: 'World'});\n")),Object(s.b)("p",{parentName:"li"},'-> \u7ed3\u679c\u662f \'{"a": "Hello", "b": "World"}\''))),Object(s.b)("h2",{id:"2-controller\u8fd4\u56dejson\u6570\u636e"},"2. Controller\u8fd4\u56deJSON\u6570\u636e"),Object(s.b)("h2",{id:"21-jackson"},"2.1 Jackson"),Object(s.b)("h3",{id:"211-json\u4e71\u7801\u95ee\u9898"},"2.1.1 JSON\u4e71\u7801\u95ee\u9898"),Object(s.b)("p",null,"\u53ef\u4ee5\u5728SpringMVC\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684",Object(s.b)("inlineCode",{parentName:"p"},"annotation-driven"),"\u6dfb\u52a0\u4e00\u6bb5\u6d88\u606f",Object(s.b)("inlineCode",{parentName:"p"},"StringHttpMessageConverter"),"\u8f6c\u6362\u914d\u7f6e"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),'<mvc:annotation-driven>\n    <mvc:message-converters register-defaults="true">\n        <bean class="org.springframework.http.converter.StringHttpMessageConverter">\n            <constructor-arg value="UTF-8"/>\n        </bean>\n        <bean \n              class="org.springframework.http.converter.json.MappingJackson2HttpMessageConverter">\n            <property name="objectMapper">\n                <bean \n                      class="org.springframework.http.converter.json.Jackson2ObjectMapperFactoryBean">\n                    <property name="failOnEmptyBeans" value="false"/>\n                </bean>\n            </property>\n        </bean>\n    </mvc:message-converters>\n</mvc:annotation-driven>\n')),Object(s.b)("h3",{id:"212-\u642d\u5efa"},"2.1.2 \u642d\u5efa"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"\u5bfc\u5165jar\u5305"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>com.fasterxml.jackson.core</groupId>\n    <artifactId>jackson-databind</artifactId>\n    <version>2.10.0</version>\n</dependency>\n"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"web.xml"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"\n         version="4.0">\n\n    <filter>\n        <filter-name>encodingFilter</filter-name>\n        <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>\n        <init-param>\n            <param-name>encoding</param-name>\n            <param-value>utf-8</param-value>\n        </init-param>\n    </filter>\n\n    <filter-mapping>\n        <filter-name>encodingFilter</filter-name>\n        <url-pattern>/*</url-pattern>\n    </filter-mapping>\n\n    <servlet>\n        <servlet-name>dispatcherServlet</servlet-name>\n        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>\n        <init-param>\n            <param-name>contextConfigLocation</param-name>\n            <param-value>classpath:springmvc_servlet.xml</param-value>\n        </init-param>\n        <load-on-startup>1</load-on-startup>\n    </servlet>\n\n    <servlet-mapping>\n        <servlet-name>dispatcherServlet</servlet-name>\n        <url-pattern>/</url-pattern>\n    </servlet-mapping>\n\n</web-app>\n'))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"springmvc_servlet.xml"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xmlns:context="http://www.springframework.org/schema/context"\n       xmlns:mvc="http://www.springframework.org/schema/mvc"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans\n   http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd http://www.springframework.org/schema/mvc https://www.springframework.org/schema/mvc/spring-mvc.xsd">\n\n    <context:component-scan base-package="com.bsx.contoller"/>\n    <mvc:annotation-driven/>\n    <mvc:default-servlet-handler/>\n\n    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver"\n          id="internalResourceViewResolver">\n        <property name="prefix" value="/WEB-INF/jsp/"/>\n        <property name="suffix" value=".jsp"/>\n    </bean>\n</beans>\n'))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"pojo"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"@Data\n@AllArgsConstructor\n@NoArgsConstructor\npublic class User {\n    private String name;\n    private int age;\n    private String sex;\n}\n")))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"\u65b9\u5f0f\u4e00\uff1aController"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"strong"},"@ResponseBody")),"\n\u4e0d\u8d70\u89c6\u56fe\u89e3\u6790\u5668\uff0c\u76f4\u63a5\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"p"},"ObjectMapper"),"\n\u521b\u5efa",Object(s.b)("inlineCode",{parentName:"p"},"ObjectMapper"),"\u5bf9\u8c61\uff0c\u8c03\u7528",Object(s.b)("inlineCode",{parentName:"p"},"writeValueAsString"),"\u65b9\u6cd5\u5c06\u5bf9\u8c61\u8f6c\u6362\u4e3aJson\u5b57\u7b26\u4e32"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'@Controller\npublic class UserController {\n\n    @RequestMapping("/j1")\n    @ResponseBody // \u4e0d\u4f1a\u8d70\u89c6\u56fe\u89e3\u6790\u5668\uff0c\u4f1a\u76f4\u63a5\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32\n    public String json1() throws JsonProcessingException {\n        ObjectMapper mapper = new ObjectMapper();\n\n        User user = new User("\u540d\u5b57",18,"\u7537\u7684");\n\n        //\u8f6c\u6362\u4e3aJson\n        String jsonStr = mapper.writeValueAsString(user);\n\n        return jsonStr;\n    }\n}\n'))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"\u65b9\u5f0f\u4e8c\uff1a RestController\n\u7528",Object(s.b)("inlineCode",{parentName:"p"},"@RestController"),"\u6ce8\u89e3\u7684Controller\u7c7b\uff0c\u5176\u4e2d\u6240\u6709\u7684\u65b9\u6cd5\u90fd\u53ea\u8fd4\u56de\u5b57\u7b26\u4e32\uff0c\u800c\u4e0d\u7ecf\u8fc7\u89c6\u56fe\u89e3\u6790\u5668"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'@RestController\npublic class UserController {\n\n    @RequestMapping("/j1")\n    public String json1() throws JsonProcessingException {\n        ObjectMapper mapper = new ObjectMapper();\n\n        User user = new User("\u540d\u5b57",18,"\u7537\u7684");\n\n        //\u8f6c\u6362\u4e3aJson\n        String jsonStr = mapper.writeValueAsString(user);\n\n        return jsonStr;\n    }\n}\n'))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"\u6d4b\u8bd5\u8f93\u51fa\u96c6\u5408\u5bf9\u8c61\u7684JSON"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'@RequestMapping("/j2")\npublic String json2() throws JsonProcessingException {\n    ObjectMapper mapper = new ObjectMapper();\n\n    List<User> users = new ArrayList<User>();\n\n    User user1 = new User("\u540d\u5b571",18,"\u7537\u76841");\n    User user2 = new User("\u540d\u5b572",18,"\u7537\u76842");\n    User user3 = new User("\u540d\u5b573",18,"\u7537\u76843");\n    User user4 = new User("\u540d\u5b574",18,"\u7537\u76844");\n\n    users.add(user1);\n    users.add(user2);\n    users.add(user3);\n    users.add(user4);\n\n    String jsonStr = mapper.writeValueAsString(users);\n\n    return jsonStr;\n}\n')),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'//\u7ed3\u679c\n[{"name":"\u540d\u5b571","age":18,"sex":"\u7537\u76841"},{"name":"\u540d\u5b572","age":18,"sex":"\u7537\u76842"},{"name":"\u540d\u5b573","age":18,"sex":"\u7537\u76843"},{"name":"\u540d\u5b574","age":18,"sex":"\u7537\u76844"}]\n'))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"\u6d4b\u8bd5\u8f93\u51fa\u4e8b\u4ef6\u5bf9\u8c61"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'@RequestMapping("/j3")\npublic String json3() throws JsonProcessingException {\n    ObjectMapper mapper = new ObjectMapper();\n\n    Date date = new Date();\n    return mapper.writeValueAsString(date);\n}\n'))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"\u6d4b\u8bd5\u8f93\u51fa\u65f6\u95f4\u5bf9\u8c61"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"\u65b9\u5f0f\u4e00 JavaSE")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'@RequestMapping("/j3")\npublic String json3() throws JsonProcessingException {\n    ObjectMapper mapper = new ObjectMapper();\n\n    Date date = new Date();\n    SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");\n    return mapper.writeValueAsString(simpleDateFormat.format(date));\n}\n')),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'"2020-04-15 15:39:53"\n')),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"\u65b9\u5f0f\u4e8c ObjectMapper")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'@RequestMapping("/j4")\npublic String json4() throws JsonProcessingException {\n    ObjectMapper mapper = new ObjectMapper();\n    //\u5173\u95ed\u5c06\u65f6\u95f4\u5199\u4e3a\u65f6\u95f4\u6233\n    mapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false);\n    SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");\n    mapper.setDateFormat(simpleDateFormat);\n    Date date = new Date();\n    return mapper.writeValueAsString(date);\n}\n')))),Object(s.b)("h3",{id:"213-jackson\u5de5\u5177\u7c7b"},"2.1.3 Jackson\u5de5\u5177\u7c7b"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"public class JacksonUtils {\n\n    public static String getDateJson(Date date, String dateformat) {\n        ObjectMapper mapper = new ObjectMapper();\n        mapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false);\n        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(dateformat);\n        mapper.setDateFormat(simpleDateFormat);\n\n        try {\n            return mapper.writeValueAsString(date);\n        } catch (JsonProcessingException e) {\n            e.printStackTrace();\n        }\n\n        return null;\n    }\n}\n")),Object(s.b)("p",null,"Controller\u4ee3\u7801\u7cbe\u7b80\u4e3a"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'@RequestMapping("/j5")\npublic String json5() throws JsonProcessingException {\n    Date date = new Date();\n    String dateFormat = "yyyy-MM-dd HH:mm:ss";\n    String dateJson = JacksonUtils.getDateJson(date, dateFormat);\n    return dateJson;\n}\n')),Object(s.b)("h2",{id:"22-fastjson"},"2.2 Fastjson"),Object(s.b)("p",null,"Fastjson\u662f\u963f\u91cc\u5df4\u5df4\u5f00\u53d1\u7684\u4e00\u6b3e\u4e13\u95e8\u7528\u4e8eJava\u5f00\u53d1\u7684\u5305\uff0c\u53ef\u4ee5\u65b9\u4fbf\u7684\u5b9e\u73b0Json\u5bf9\u8c61\u4e0eJavaBean\u5bf9\u8c61\u7684\u8f6c\u6362\uff0c\u5b9e\u73b0JavaBean\u5bf9\u8c61\u4e0eJson\u5b57\u7b26\u4e32\u7684\u8f6c\u6362\uff0c\u5b9e\u73b0Json\u5bf9\u8c61\u4e0eJson\u5b57\u7b26\u4e32\u7684\u8f6c\u6362\u3002"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Maven\u5750\u6807"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>com.alibaba</groupId>\n    <artifactId>fastjson</artifactId>\n    <version>1.2.60</version>\n</dependency>\n"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Fastjson\u4e09\u4e2a\u4e3b\u8981\u7684\u7c7b"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"JSONObject\u2014\u2014\u8868\u793ajson\u5bf9\u8c61"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"JSONObject\u5b9e\u73b0\u4e86Map\u63a5\u53e3\uff0c\u731c\u60f3JSONObject\u5e95\u5c42\u64cd\u4f5c\u662f\u7531Map\u5b9e\u73b0\u7684"),Object(s.b)("li",{parentName:"ul"},"JSONObject\u5bf9\u5e94json\u5bf9\u8c61\uff0c\u901a\u8fc7\u5404\u79cd\u5f62\u5f0f\u7684get()\u65b9\u6cd5\u53ef\u4ee5\u83b7\u5f97json\u5bf9\u8c61\u4e2d\u7684\u6570\u636e\uff0c\u4e5f\u53ef\u5229\u7528\u6ce8\u5165size()\uff0cisEmpty()\u7b49\u65b9\u6cd5\u83b7\u53d6\u952e\u503c\u5bf9\u7684\u4e2a\u6570\u548c\u5224\u65ad\u662f\u5426\u4e3a\u7a7a\uff0c\u5176\u672c\u8d28\u662f\u901a\u8fc7Map\u63a5\u53e3\u5e76\u8c03\u7528\u63a5\u53e3\u79cd\u7684\u65b9\u6cd5\u5b8c\u6210\u7684"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"JSONArray\u2014\u2014\u8868\u793ajson\u6570\u7ec4\u5bf9\u8c61"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"\u5185\u90e8\u662f\u7531List\u63a5\u53e3\u79cd\u7684\u65b9\u6cd5\u6765\u5b8c\u6210\u64cd\u4f5c\u7684"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"JSON\u2014\u2014\u8868\u793aJSONObject\u548cJSONArray\u7684\u8f6c\u5316"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"\u6ce8\u610fjson\u5bf9\u8c61\u3001json\u5bf9\u8c61\u6570\u7ec4\u3001JavaBean\u5bf9\u8c61,Json\u5b57\u7b26\u4e32\u4e4b\u95f4\u7684\u76f8\u4e92\u8f6c\u5316")))),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'@RequestMapping("/j6")\npublic String json6() throws JsonProcessingException {\n    List<User> users = new ArrayList<User>();\n\n    User user1 = new User("\u540d\u5b571", 18, "\u7537\u76841");\n    User user2 = new User("\u540d\u5b572", 18, "\u7537\u76842");\n    User user3 = new User("\u540d\u5b573", 18, "\u7537\u76843");\n    User user4 = new User("\u540d\u5b574", 18, "\u7537\u76844");\n\n    users.add(user1);\n    users.add(user2);\n    users.add(user3);\n    users.add(user4);\n\n    String string = JSON.toJSONString(users);\n    return string;\n}\n'))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Json\u5b57\u7b26\u4e32\u4e0eJavaBean\u4e92\u8f6c"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"String jsonStr1 = JSON.toJSONString(user1);\nUser user = JSON.parseObject(jsonStr1, User.class);\nSystem.out.println(user);\n")))))}o.isMDXComponent=!0},492:function(e,n,a){"use strict";a.d(n,"a",(function(){return b})),a.d(n,"b",(function(){return u}));var t=a(0),r=a.n(t);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function p(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?p(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),o=function(e){var n=r.a.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):c(c({},n),e)),a},b=function(e){var n=o(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},j=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,s=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=o(a),j=t,u=b["".concat(p,".").concat(j)]||b[j]||m[j]||s;return a?r.a.createElement(u,c(c({ref:n},i),{},{components:a})):r.a.createElement(u,c({ref:n},i))}));function u(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var s=a.length,p=new Array(s);p[0]=j;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,p[1]=c;for(var i=2;i<s;i++)p[i]=a[i];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);