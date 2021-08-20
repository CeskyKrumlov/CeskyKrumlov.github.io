(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{163:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return l}));var r=t(2),a=t(6),o=(t(0),t(567)),c={id:"11.ajaxValidate",title:"Ajax\u9a8c\u8bc1\u7528\u6237\u540d",hide_title:!0},s={unversionedId:"springmvc/11.ajaxValidate",id:"springmvc/11.ajaxValidate",isDocsHomePage:!1,title:"Ajax\u9a8c\u8bc1\u7528\u6237\u540d",description:"AJAX\u9a8c\u8bc1\u7528\u6237\u540d",source:"@site/docs/springmvc/11.Ajax\u9a8c\u8bc1\u7528\u6237\u540d.md",slug:"/springmvc/11.ajaxValidate",permalink:"/docs/springmvc/11.ajaxValidate",version:"current",sidebar:"someSidebar",previous:{title:"Ajax",permalink:"/docs/springmvc/10.ajax"},next:{title:"\u62e6\u622a\u5668",permalink:"/docs/springmvc/12.interceptor"}},i=[{value:"AJAX\u9a8c\u8bc1\u7528\u6237\u540d",id:"ajax\u9a8c\u8bc1\u7528\u6237\u540d",children:[]}],p={rightToc:i};function l(e){var n=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,c,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"ajax\u9a8c\u8bc1\u7528\u6237\u540d"},"AJAX\u9a8c\u8bc1\u7528\u6237\u540d"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"login.jsp"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5148\u628a\u9875\u9762\u753b\u597d")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<%@ page contentType="text/html;charset=UTF-8" language="java" %>\n<html>\n<head>\n    <title>Title</title>\n    <script src="https://code.jquery.com/jquery-3.1.1.min.js"><\/script>\n    <script>\n        function validName() {\n\n        }\n        function validPassword() {\n\n        }\n    <\/script>\n</head>\n<body>\n\n    <p>\n        \u7528\u6237\u540d : <input type="text" id="nameId" onblur="validName()">\n        <span id="userInfo"></span>\n    </p>\n\n    <p>\n        \u5bc6  \u7801 : <input type="password" id="passwordId" onblur="validPassword()">\n        <span id="passwordInfo"></span>\n    </p>\n</body>\n</html>\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Controller"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@RequestMapping("/a3")\n@ResponseBody\npublic String a3(String name, String password) {\n    String msg = "";\n\n    if (name != null) {\n        if ("jack".equals(name)) {\n            msg = "\u7528\u6237\u540d\u5df2\u88ab\u6ce8\u518c";\n        } else {\n            msg = "\u606d\u559c\u60a8\uff0c\u7528\u6237\u540d\u53ef\u7528";\n        }\n    }\n\n    if (password != null) {\n        if ("123456".equals(password)) {\n            msg = "\u5bc6\u7801\u7b26\u5408\u8981\u6c42";\n        } else {\n            msg = "\u62b1\u6b49\uff0c\u5bc6\u7801\u5fc5\u987b\u4e3a\u7eaf\u6570\u5b57";\n        }\n    }\n\n    return msg;\n}\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u5728\u9875\u9762\u6dfb\u52a0AJAX"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<script>\n    function validName() {\n        $.post("${pageContext.request.contextPath}/a3", {name: $("#nameId").val()},\n               function\n               (data) {\n            if (data===\'\u606d\u559c\u60a8\uff0c\u7528\u6237\u540d\u53ef\u7528\'){\n                $("#userInfo").css("color","green");\n            }else{\n                $("#userInfo").css("color","red");\n            }\n            $("#userInfo").html(data);\n        })\n    }\n\n    function validPassword() {\n        $.post("${pageContext.request.contextPath}/a3", {password: $("#passwordId").val()},\n               function\n               (data) {\n            if (data===\'\u5bc6\u7801\u7b26\u5408\u8981\u6c42\'){\n                $("#passwordInfo").css("color","green");\n            }else{\n                $("#passwordInfo").css("color","red");\n            }\n            $("#passwordInfo").html(data);\n        })\n    }\n<\/script>\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u4fee\u6539springmvc_servlet.xml\u89e3\u51b3Json\u4e2d\u6587\u4e71\u7801\u95ee\u9898"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<mvc:annotation-driven>\n    <mvc:message-converters register-defaults="true">\n        <bean class="org.springframework.http.converter.StringHttpMessageConverter">\n            <constructor-arg value="UTF-8"/>\n        </bean>\n        <bean\n              class="org.springframework.http.converter.json.MappingJackson2HttpMessageConverter">\n            <property name="objectMapper">\n                <bean\n                      class="org.springframework.http.converter.json.Jackson2ObjectMapperFactoryBean">\n                    <property name="failOnEmptyBeans" value="false"/>\n                </bean>\n            </property>\n        </bean>\n    </mvc:message-converters>\n</mvc:annotation-driven>\n')))),Object(o.b)("img",{src:t(745).default,style:{zoom:"60%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(o.b)("br",null))}l.isMDXComponent=!0},567:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,b=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return t?a.a.createElement(b,s(s({ref:n},p),{},{components:t})):a.a.createElement(b,s({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var p=2;p<o;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},745:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/3-0fedfe94395bf1368f65e70ca6c17cf0.gif"}}]);