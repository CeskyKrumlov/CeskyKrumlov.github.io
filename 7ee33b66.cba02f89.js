(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{324:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),l=(a(0),a(571)),c={id:"10.ajax",title:"Ajax",hide_title:!0},b={unversionedId:"springmvc/10.ajax",id:"springmvc/10.ajax",isDocsHomePage:!1,title:"Ajax",description:"Ajax",source:"@site/docs/springmvc/10.Ajax.md",slug:"/springmvc/10.ajax",permalink:"/docs/springmvc/10.ajax",version:"current",sidebar:"someSidebar",previous:{title:"\u524d\u540e\u7aef\u5206\u79bb\u2014\u2014JSON",permalink:"/docs/springmvc/9.json"},next:{title:"Ajax\u9a8c\u8bc1\u7528\u6237\u540d",permalink:"/docs/springmvc/11.ajaxValidate"}},p=[{value:"Ajax",id:"ajax",children:[]},{value:"JQuery.AJAX",id:"jqueryajax",children:[]},{value:"SpringMVC\u5b9e\u73b0\u2014\u2014\u8fd4\u56dePOJO\u5bf9\u8c61",id:"springmvc\u5b9e\u73b0\u8fd4\u56depojo\u5bf9\u8c61",children:[]}],i={rightToc:p};function s(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},i,c,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"ajax"},"Ajax"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"AJAX:Asynchronous JavaScript and XML"),"\u2014\u2014\u5f02\u6b65JavaScript\u548cXML"),Object(l.b)("li",{parentName:"ul"},"AJAX\u662f\u4e00\u79cd\u65e0\u9700\u91cd\u65b0\u52a0\u8f7d\u6574\u4e2a\u7f51\u9875\u7684\u60c5\u51b5\u4e0b\uff0c\u80fd\u591f\u66f4\u65b0\u90e8\u5206\u7f51\u9875\u7684\u6280\u672f"),Object(l.b)("li",{parentName:"ul"},"AJAX\u4e0d\u662f\u4e00\u79cd\u65b0\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u800c\u662f\u4e00\u79cd\u7528\u4e8e\u521b\u5efa\u66f4\u597d\u66f4\u5feb\u4ee5\u53ca\u4ea4\u4e92\u6027\u66f4\u5f3a\u7684Web\u5e94\u7528\u7a0b\u5e8f\u7684\u6280\u672f"),Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528AJAX\u6280\u672f\u7684\u7f51\u9875\uff0c\u901a\u8fc7\u5728\u540e\u53f0\u670d\u52a1\u5668\u8fdb\u884c\u5c11\u91cf\u7684\u6570\u636e\u4ea4\u6362\uff0c\u5c31\u53ef\u4ee5\u5b9e\u73b0\u5f02\u6b65\u5c40\u90e8\u66f4\u65b0"),Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528AJAX\uff0c\u7528\u6237\u53ef\u4ee5\u521b\u5efa\u63a5\u8fd1\u672c\u5730\u684c\u9762\u5e94\u7528\u7684\u76f4\u63a5\u3001\u9ad8\u53ef\u7528\u3001\u66f4\u4e30\u5bcc\u66f4\u52a8\u6001\u7684WEB\u7528\u6237\u754c\u9762")),Object(l.b)("h1",{id:"jqueryajax"},"JQuery.AJAX"),Object(l.b)("p",null,"JQuery\u63d0\u4f9b\u4e86\u591a\u4e2a\u4e0eAJAX\u76f8\u5173\u7684\u65b9\u6cd5"),Object(l.b)("p",null,"\u901a\u8fc7JQuery AJAX\u65b9\u6cd5\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528HTTP GET\u548cHTTP POST\u4ece\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u8bf7\u6c42\u6587\u672c\u3001HTML\u3001XML\u3001\u6216JSON\uff0c\u540c\u65f6\u4e5f\u80fd\u628a\u8fd9\u4e9b\u5916\u90e8\u6570\u636e\u76f4\u63a5\u8f7d\u5165\u7f51\u9875\u88ab\u9009\u4e2d\u7684\u5143\u7d20\u4e2d"),Object(l.b)("p",null,"JQuery AJAX\u7684\u672c\u8d28\u5c31\u662fXMLHttpRequest\uff0c\u53ea\u662f\u5bf9\u4ed6\u8fdb\u884c\u4e86\u5c01\u88c5\uff0c\u65b9\u4fbf\u8c03\u7528"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"JQuery AJAX")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u53c2\u6570"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u4f5c\u7528"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"url"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf7\u6c42\u5730\u5740")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf7\u6c42\u65b9\u5f0f\u3001GET\u3001POST (1.9.0\u4e4b\u540e\u4f7f\u7528method)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"headers"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf7\u6c42\u5934")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"data"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u8981\u53d1\u9001\u7684\u6570\u636e")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"contentType"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5373\u5c06\u53d1\u9001\u4fe1\u606f\u81f3\u670d\u52a1\u5668\u7684\u5185\u5bb9\u7f16\u7801\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a",Object(l.b)("inlineCode",{parentName:"td"},"application/x-www-form-urlencoded;charset=UTF-8"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"time"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\uff08\u6beb\u79d2\uff09")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"beforeSend"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u53d1\u9001\u8bf7\u6c42\u4e4b\u524d\u6267\u884c\u7684\u51fd\u6570\uff08\u5168\u5c40\uff09")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"complete"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5b8c\u6210\u4e4b\u540e\u6267\u884c\u7684\u56de\u8c03\u51fd\u6570\uff08\u5168\u5c40\uff09")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"success"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u6210\u529f\u4e4b\u540e\u6267\u884c\u7684\u56de\u8c03\u51fd\u6570\uff08\u5168\u5c40\uff09")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"error"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5931\u8d25\u4e4b\u540e\u6267\u884c\u7684\u56de\u8c03\u51fd\u6570\uff08\u5168\u5c40\uff09")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"accepts"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u901a\u8fc7\u8bf7\u6c42\u5934\u53d1\u9001\u7ed9\u670d\u52a1\u5668\uff0c\u544a\u8bc9\u670d\u52a1\u5668\u5f53\u524d\u5ba2\u6237\u7aef\u53ef\u63a5\u53d7\u7684\u6570\u636e\u7c7b\u578b")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dataType"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5c06\u670d\u52a1\u5668\u7aef\u8fd4\u56de\u7684\u6570\u636e\u8f6c\u6362\u4e3a\u6307\u5b9a\u7c7b\u578b",Object(l.b)("br",null),'- "xml"',Object(l.b)("br",null),'- "text"',Object(l.b)("br",null),'- "html"',Object(l.b)("br",null),'- "script"',Object(l.b)("br",null),'- "json"',Object(l.b)("br",null),'- "jsonp" JSONP\u683c\u5f0f\u4f7f\u7528JSONP\u5f62\u5f0f\u8c03\u7528\u51fd\u6570\u65f6\uff0c\u5982',Object(l.b)("inlineCode",{parentName:"td"},"myurl?callback=?")," JQuery\u5c06\u81ea\u52a8\u66ff\u6362",Object(l.b)("inlineCode",{parentName:"td"},"?"),"\u4e3a\u6b63\u786e\u7684\u51fd\u6570\u540d\uff0c\u4ee5\u6267\u884c\u56de\u8c03\u51fd\u6570")))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"springmvc_servlet.xml"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5f00\u542f\u6ce8\u89e3\u652f\u6301"),Object(l.b)("li",{parentName:"ul"},"\u5f00\u542f\u5305\u626b\u63cf"),Object(l.b)("li",{parentName:"ul"},"\u914d\u7f6e\u9ed8\u8ba4handler"),Object(l.b)("li",{parentName:"ul"},"\u914d\u7f6e\u89c6\u56fe\u89e3\u6790\u5668")),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xmlns:context="http://www.springframework.org/schema/context"\n       xmlns:mvc="http://www.springframework.org/schema/mvc"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans\n                           http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd http://www.springframework.org/schema/mvc https://www.springframework.org/schema/mvc/spring-mvc.xsd">\n\n    <context:component-scan base-package="com.bsx.controller"/>\n    <mvc:annotation-driven/>\n    <mvc:default-servlet-handler/>\n\n    <bean id="internalResourceViewResolver"\n          class="org.springframework.web.servlet.view.InternalResourceViewResolver">\n        <property name="prefix" value="/WEB-INF/jsp/"/>\n        <property name="suffix" value=".jsp"/>\n    </bean>\n</beans>\n'))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"web.xml"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5b57\u7b26\u8fc7\u6ee4\u5668"),Object(l.b)("li",{parentName:"ul"},"dispatcherServlet")),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<filter>\n    <filter-name>characterEncoding</filter-name>\n    <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>\n    <init-param>\n        <param-name>encoding</param-name>\n        <param-value>utf-8</param-value>\n    </init-param>\n</filter>\n\n<filter-mapping>\n    <filter-name>characterEncoding</filter-name>\n    <url-pattern>/*</url-pattern>\n</filter-mapping>\n\n<servlet>\n    <servlet-name>dispatcherServlet</servlet-name>\n    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>\n    <init-param>\n        <param-name>contextConfigLocation</param-name>\n        <param-value>classpath:springmvc_servlet.xml</param-value>\n    </init-param>\n    <load-on-startup>1</load-on-startup>\n</servlet>\n\n<servlet-mapping>\n    <servlet-name>dispatcherServlet</servlet-name>\n    <url-pattern>/</url-pattern>\n</servlet-mapping>\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"AjaxController"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'@Controller\npublic class AjaxController {\n\n    @RequestMapping("/a1")\n    public void ajax1(String name, HttpServletResponse response) throws IOException {\n        if ("admin".equals(name)) {\n            response.getWriter().print("true");\n        } else {\n            response.getWriter().print("false");\n        }\n    }\n}\n'))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u5bfc\u5165JQuery js\u6587\u4ef6\uff0c\u53ef\u4ee5\u4f7f\u7528\u5728\u7ebf\u7684CDN\uff0c\u4e5f\u53ef\u4ee5\u4ece\u672c\u5730\u5bfc\u5165"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u5728\u7ebf"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<script src="https://code.jquery.com/jquery-3.1.1.min.js"><\/script>\n'))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u672c\u5730"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<script src="${pageContext.request.contextPath}/statics/js/jquery-3.1.1.min.js"><\/script>\n'))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"index.jsp"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<%@ page contentType="text/html;charset=UTF-8" language="java" %>\n<html>\n<head>\n    <title>$Title$</title>\n    <script src="https://code.jquery.com/jquery-3.1.1.min.js"><\/script>\n    <script>\n        function func() {\n            $.post({\n                url: "${pageContext.request.contextPath}/a1",\n                data: {\'name\': $("#textId").val()},\n                success: function (data, status) {\n                    alert(data);\n                    alert(status);\n                }\n            });\n        }\n    <\/script>\n</head>\n<body>\n\u7528\u6237\u540d<input type="text" id="textId" name="textName" onblur="func()">\n</body>\n</html>\n'))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u6d4b\u8bd5\uff0c\u8f93\u5165admin\u8fd4\u56detrue\uff0c\u5426\u5219\u8fd4\u56defalse"))),Object(l.b)("img",{src:a(991).default,style:{zoom:"100%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(l.b)("br",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"JavaScript",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"DOM",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u901a\u8fc7id\u3001name\u3001tag\u627e\u5230\u5143\u7d20"),Object(l.b)("li",{parentName:"ul"},"CRUD\u64cd\u4f5c"))),Object(l.b)("li",{parentName:"ul"},"BOM",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"window\u65f6\u95f4"),Object(l.b)("li",{parentName:"ul"},"document")))))),Object(l.b)("h1",{id:"springmvc\u5b9e\u73b0\u8fd4\u56depojo\u5bf9\u8c61"},"SpringMVC\u5b9e\u73b0\u2014\u2014\u8fd4\u56dePOJO\u5bf9\u8c61"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"pojo"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"@Data\n@NoArgsConstructor\n@AllArgsConstructor\npublic class User {\n    private String name;\n    private int age;\n    private String sex;\n}\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Controller"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'@RequestMapping("/a2")\n@ResponseBody\npublic List<User> a2() {\n    ArrayList<User> userList = new ArrayList<User>();\n    userList.add(new User("bb", 18, "\u7537"));\n    userList.add(new User("alice", 28, "\u5973"));\n    userList.add(new User("matt", 38, "\u7537"));\n    return userList;\n}\n')),Object(l.b)("p",{parentName:"li"},"\u76f4\u63a5\u8bbf\u95ee",Object(l.b)("inlineCode",{parentName:"p"},"/a2"),"\u8def\u7531\uff0c\u53ef\u4ee5\u770b\u5230\u540e\u7aef\u8fd4\u56de\u7684",Object(l.b)("inlineCode",{parentName:"p"},"userList"),"Json"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'[{"name":"bb","age":18,"sex":"\u7537"},{"name":"alice","age":28,"sex":"\u5973"},{"name":"matt","age":38,"sex":"\u7537"}]\n'))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"test2.jsp"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u5728",Object(l.b)("inlineCode",{parentName:"li"},"$.post"),"\u7684\u53c2\u6570\u5217\u8868\u91cc\u76f4\u63a5\u7b80\u5199url\uff0c\u56de\u8c03\u51fd\u6570\u7b49\u5185\u5bb9\uff0c\u4e0d\u9700\u8981\u5199\u5230\u65b9\u6cd5\u4f53\u91cc"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"data"),"\u53c2\u6570\u53ef\u7701\u7565")),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<%@ page contentType="text/html;charset=UTF-8" language="java" %>\n<html>\n<head>\n    <title>Title</title>\n    <script src="https://code.jquery.com/jquery-3.1.1.min.js"><\/script>\n    <script>\n        $(function () {\n            $("#btnId").click(function () {\n                //$,post(url, param[\u53ef\u7701\u7565], success\u56de\u8c03\u65b9\u6cd5)\n                $.post("${pageContext.request.contextPath}/a2", function (data) {\n                    var html = "";\n\n                    for (var i = 0; i < data.length; i++) {\n                        html += "<tr>" +\n                            "<td>" + data[i].name + "</td>" +\n                            "<td>" + data[i].age + "</td>" +\n                            "<td>" + data[i].sex + "</td>" +\n                            +"</tr>"\n                    }\n                    //\u5f80id\u4e3acotent\u7684\u8868\u683c\u4e2d\u52a0\u6570\u636e\n                    $("#content").html(html);\n                })\n            })\n        })\n\n    <\/script>\n</head>\n<body>\n\n<input type="button" value="\u52a0\u8f7d\u6570\u636e" id="btnId">\n<table>\n    <tr>\n        <td>\u59d3\u540d</td>\n        <td>\u5e74\u9f84</td>\n        <td>\u6027\u522b</td>\n    </tr>\n    <tbody id="content">\n    <%--        \u6570\u636e\u5728\u540e\u53f0\uff0c\u9700\u8981\u7528ajax\u53d6--%>\n    </tbody>\n</table>\n</body>\n</html>\n')))),Object(l.b)("img",{src:a(992).default,style:{zoom:"60%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(l.b)("br",null))}s.isMDXComponent=!0},571:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},m=function(e){var t=s(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=s(a),u=n,j=m["".concat(c,".").concat(u)]||m[u]||o[u]||l;return a?r.a.createElement(j,b(b({ref:t},i),{},{components:a})):r.a.createElement(j,b({ref:t},i))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=u;var b={};for(var p in t)hasOwnProperty.call(t,p)&&(b[p]=t[p]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var i=2;i<l;i++)c[i]=a[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},991:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/1-f7b91e5a66d7fb042b90560b10f8dfa4.gif"},992:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/2-3774a160193bccfeba9450eec5d6a3da.gif"}}]);