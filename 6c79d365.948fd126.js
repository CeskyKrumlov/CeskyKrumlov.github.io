(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{255:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return l}));var a=t(2),r=t(6),s=(t(0),t(502)),c={id:"3.customLogin",title:"\u81ea\u5b9a\u4e49\u767b\u5f55\u9a8c\u8bc1\u7ed3\u679c\u5904\u7406",hide_title:!0},i={unversionedId:"security_Oauth2_JWT/3.customLogin",id:"security_Oauth2_JWT/3.customLogin",isDocsHomePage:!1,title:"\u81ea\u5b9a\u4e49\u767b\u5f55\u9a8c\u8bc1\u7ed3\u679c\u5904\u7406",description:"\u81ea\u5b9a\u4e49\u767b\u5f55\u9a8c\u8bc1\u7ed3\u679c\u5904\u7406",source:"@site/docs/security_Oauth2_JWT/3.\u81ea\u5b9a\u4e49\u767b\u5f55\u9a8c\u8bc1.md",slug:"/security_Oauth2_JWT/3.customLogin",permalink:"/docs/security_Oauth2_JWT/3.customLogin",version:"current",sidebar:"someSidebar",previous:{title:"HttpBasic\u4e0eFormLogin\u767b\u5f55\u8ba4\u8bc1\u65b9\u5f0f",permalink:"/docs/security_Oauth2_JWT/2.springsecurityLogin"},next:{title:"Session\u4f1a\u8bdd\u7ba1\u7406",permalink:"/docs/security_Oauth2_JWT/4.sessionCtrl"}},o=[{value:"\u81ea\u5b9a\u4e49\u767b\u5f55\u9a8c\u8bc1\u7ed3\u679c\u5904\u7406",id:"\u81ea\u5b9a\u4e49\u767b\u5f55\u9a8c\u8bc1\u7ed3\u679c\u5904\u7406",children:[]},{value:"\u81ea\u5b9a\u4e49\u767b\u5f55\u6210\u529f\u7684\u7ed3\u679c\u5904\u7406",id:"\u81ea\u5b9a\u4e49\u767b\u5f55\u6210\u529f\u7684\u7ed3\u679c\u5904\u7406",children:[]},{value:"\u81ea\u5b9a\u4e49\u767b\u5f55\u5931\u8d25\u7684\u7ed3\u679c\u5904\u7406",id:"\u81ea\u5b9a\u4e49\u767b\u5f55\u5931\u8d25\u7684\u7ed3\u679c\u5904\u7406",children:[]},{value:"\u5c06\u81ea\u5b9a\u4e49\u7ed3\u679c\u5904\u7406\u914d\u7f6e\u8fdbSecurityConfig",id:"\u5c06\u81ea\u5b9a\u4e49\u7ed3\u679c\u5904\u7406\u914d\u7f6e\u8fdbsecurityconfig",children:[]},{value:"JSON\u65b9\u5f0f\u7684\u767b\u5f55\u9875",id:"json\u65b9\u5f0f\u7684\u767b\u5f55\u9875",children:[]}],u={rightToc:o};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"\u81ea\u5b9a\u4e49\u767b\u5f55\u9a8c\u8bc1\u7ed3\u679c\u5904\u7406"},"\u81ea\u5b9a\u4e49\u767b\u5f55\u9a8c\u8bc1\u7ed3\u679c\u5904\u7406"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"\u9700\u8981\u7075\u6d3b\u9002\u5e94\u4e00\u4e9b\u573a\u666f\uff0c\u4f8b\u5982\uff1a"),Object(s.b)("ul",{parentName:"blockquote"},Object(s.b)("li",{parentName:"ul"},"\u5e0c\u671b\u4e0d\u540c\u89d2\u8272\u7684\u7528\u6237\u770b\u5230\u4e0d\u540c\u7684\u5b9a\u5236\u5316\u4e3b\u9875"),Object(s.b)("li",{parentName:"ul"},"\u91c7\u7528\u524d\u540e\u7aef\u5206\u79bb\u67b6\u6784\uff0c\u5e0c\u671b\u8fd4\u56deJSON\u6570\u636e\u800c\u4e0d\u662f\u89c6\u56fe"))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"\u5c31\u9700\u8981\u81ea\u5b9a\u4e49\u767b\u5f55\u9a8c\u8bc1\u7ed3\u679c\u5904\u7406")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u5b9a\u4e49\u5f02\u5e38\u7c7b\u578b\u679a\u4e3e\u7c7b")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public enum CustomExceptionType {\n    USER_INPUT_ERROR(400,"\u7528\u6237\u8f93\u5165\u5f02\u5e38"),\n    SYSTEM_ERROR (500,"\u7cfb\u7edf\u670d\u52a1\u5f02\u5e38"),\n    OTHER_ERROR(999,"\u5176\u4ed6\u672a\u77e5\u5f02\u5e38");\n\n    CustomExceptionType(int code, String typeDesc) {\n        this.code = code;\n        this.typeDesc = typeDesc;\n    }\n\n    private String typeDesc;//\u5f02\u5e38\u7c7b\u578b\u4e2d\u6587\u63cf\u8ff0\n\n    private int code; //code\n\n    public String getTypeDesc() {\n        return typeDesc;\n    }\n\n    public int getCode() {\n        return code;\n    }\n}\n')),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u5f02\u5e38\u7c7b")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public class CustomException extends RuntimeException {\n    //\u5f02\u5e38\u9519\u8bef\u7f16\u7801\n    private int code ;\n    //\u5f02\u5e38\u4fe1\u606f\n    private String message;\n\n    private CustomException(){}\n\n    public CustomException(CustomExceptionType exceptionTypeEnum, \n                           String message) {\n        this.code = exceptionTypeEnum.getCode();\n        this.message = message;\n    }\n\n    public int getCode() {\n        return code;\n    }\n\n    @Override\n    public String getMessage() {\n        return message;\n    }\n}\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u4e00\u4e2a\u540e\u7aef\u7ed9\u524d\u7aef\u7684\u7edf\u4e00\u54cd\u5e94\u7c7b")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'/**\n * \u63a5\u53e3\u6570\u636e\u8bf7\u6c42\u7edf\u4e00\u54cd\u5e94\u6570\u636e\u7ed3\u6784\n */\n@Data\npublic class AjaxResponse {\n\n    private  boolean isok;\n    private  int code;\n    private  String message;\n    private  Object data;\n\n    private AjaxResponse() {}\n\n    //\u8bf7\u6c42\u51fa\u73b0\u5f02\u5e38\u65f6\u7684\u54cd\u5e94\u6570\u636e\u5c01\u88c5\n    public static AjaxResponse error(CustomException e) {\n        AjaxResponse resultBean = new AjaxResponse();\n        resultBean.setIsok(false);\n        resultBean.setCode(e.getCode());\n        if(e.getCode() == CustomExceptionType.USER_INPUT_ERROR.getCode()){\n            resultBean.setMessage(e.getMessage());\n        }else if(e.getCode() == CustomExceptionType.SYSTEM_ERROR.getCode()){\n            resultBean.setMessage(e.getMessage() + ",\u8bf7\u5c06\u8be5\u5f02\u5e38\u4fe1\u606f\u53d1\u9001\u7ed9\u7ba1\u7406\u5458!");\n        }else{\n            resultBean.setMessage("\u7cfb\u7edf\u51fa\u73b0\u672a\u77e5\u5f02\u5e38\uff0c\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458!");\n        }\n        //TODO \u8fd9\u91cc\u6700\u597d\u5c06\u5f02\u5e38\u4fe1\u606f\u6301\u4e45\u5316\n        return resultBean;\n    }\n\n    //\u8bf7\u6c42\u51fa\u73b0\u5f02\u5e38\u65f6\u7684\u54cd\u5e94\u6570\u636e\u5c01\u88c5\n    public static AjaxResponse error(CustomExceptionType customExceptionType,\n                                     String errorMessage) {\n        AjaxResponse resultBean = new AjaxResponse();\n        resultBean.setIsok(false);\n        resultBean.setCode(customExceptionType.getCode());\n        resultBean.setMessage(errorMessage);\n        return resultBean;\n    }\n\n    //\u8bf7\u6c42\u5904\u7406\u6210\u529f\u65f6\u7684\u6570\u636e\u54cd\u5e94\n    public static AjaxResponse success() {\n        AjaxResponse resultBean = new AjaxResponse();\n        resultBean.setIsok(true);\n        resultBean.setCode(200);\n        resultBean.setMessage("success");\n        return resultBean;\n    }\n\n    //\u8bf7\u6c42\u5904\u7406\u6210\u529f\uff0c\u5e76\u54cd\u5e94\u7ed3\u679c\u6570\u636e\n    public  static AjaxResponse success(Object data) {\n        AjaxResponse resultBean = AjaxResponse.success();\n        resultBean.setData(data);\n        return resultBean;\n    }\n}\n')),Object(s.b)("hr",null),Object(s.b)("h1",{id:"\u81ea\u5b9a\u4e49\u767b\u5f55\u6210\u529f\u7684\u7ed3\u679c\u5904\u7406"},"\u81ea\u5b9a\u4e49\u767b\u5f55\u6210\u529f\u7684\u7ed3\u679c\u5904\u7406"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("strong",{parentName:"p"},"\u65b0\u5efa/auth/MyAuthenticationSuccessHandler\u7c7b")),Object(s.b)("ul",{parentName:"blockquote"},Object(s.b)("li",{parentName:"ul"},"\u672c\u8d28\u4e0a\u5e94\u5f53\u5b9e\u73b0",Object(s.b)("inlineCode",{parentName:"li"},"AuthenticationSuccessHandler"),"\u63a5\u53e3\uff0c\u4f46\u5b9e\u9645\u4e2d\u91c7\u7528\u96c6\u6210\u5b83\u7684\u5b9e\u73b0\u7c7b",Object(s.b)("inlineCode",{parentName:"li"},"SavedRequestAwareAuthenticationSuccessHandler")),Object(s.b)("li",{parentName:"ul"},"\u91cd\u5199",Object(s.b)("inlineCode",{parentName:"li"},"onAuthenticationSuccess"),"\u65b9\u6cd5"),Object(s.b)("li",{parentName:"ul"},"\u7ee7\u627f\u5b83\u7684\u597d\u5904\uff1a\u5728\u672a\u767b\u5f55\u65f6\u8bbf\u95ee\u4e00\u4e2a\u9875\u9762\uff0c\u88ab\u62e6\u622a\uff0c\u767b\u9646\u540e\u4f1a\u81ea\u52a8\u5e2e\u6211\u4eec\u8df3\u8f6c\u5230\u4e4b\u524d\u8bbf\u95ee\u7684\u9875\u9762"))),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Component\npublic class MyAuthenticationSuccessHandler \n    extends SavedRequestAwareAuthenticationSuccessHandler {\n\n    //\u5728application\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u767b\u9646\u7684\u7c7b\u578b\u662fJSON\u6570\u636e\u54cd\u5e94\u8fd8\u662f\u505a\u9875\u9762\u54cd\u5e94\n    @Value("${spring.security.logintype}")\n    private String loginType;\n\n    private  static ObjectMapper objectMapper = new ObjectMapper();\n\n    @Override\n    public void onAuthenticationSuccess(HttpServletRequest request, \n                                        HttpServletResponse response, \n                                        Authentication authentication) \n        throws ServletException, IOException {\n\n        if (loginType.equalsIgnoreCase("JSON")) {\n            response.setContentType("application/json;charset=UTF-8");\n            response.getWriter().write(objectMapper.writeValueAsString(AjaxResponse.success()));\n        } else {\n            // \u4f1a\u5e2e\u6211\u4eec\u8df3\u8f6c\u5230\u4e0a\u4e00\u6b21\u8bf7\u6c42\u7684\u9875\u9762\u4e0a\n            super.onAuthenticationSuccess(request, response, authentication);\n        }\n    }\n}\n')),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u914d\u7f6e\u4e86\u4ece\u914d\u7f6e\u6587\u4ef6\u8bfb\u53d6\u767b\u5f55\u6a21\u5f0f\uff0c\u53ea\u9700\u8981\u5728",Object(s.b)("inlineCode",{parentName:"li"},"application.yaml"),"\u4e2d\u6dfb\u52a0\u5bf9\u5e94\u8bbe\u7f6e\u5b57\u6bb5")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"spring:\n  security:\n    loginType: JSON\n")),Object(s.b)("hr",null),Object(s.b)("h1",{id:"\u81ea\u5b9a\u4e49\u767b\u5f55\u5931\u8d25\u7684\u7ed3\u679c\u5904\u7406"},"\u81ea\u5b9a\u4e49\u767b\u5f55\u5931\u8d25\u7684\u7ed3\u679c\u5904\u7406"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"/auth/MyAuthenticationFailureHandler\u7c7b\uff0c\u7ee7\u627f",Object(s.b)("inlineCode",{parentName:"p"},"SimpleUrlAuthenticationFailureHandler"),"\uff0c\u5b83\u662f",Object(s.b)("inlineCode",{parentName:"p"},"AuthenticationFailureHandler"),"\u63a5\u53e3\u7684\u5b9e\u73b0\u7c7b"),Object(s.b)("ul",{parentName:"blockquote"},Object(s.b)("li",{parentName:"ul"},"\u7ee7\u627f\u5b83\u7684\u597d\u5904\uff1a\u767b\u5f55\u5931\u8d25\u4f1a\u81ea\u52a8\u653e\u56de\u5230\u767b\u5f55\u9875"))),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Component\npublic class MyAuthenticationFaliureHandler extends SimpleUrlAuthenticationFailureHandler {\n    //\u5728application\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u767b\u9646\u7684\u7c7b\u578b\u662fJSON\u6570\u636e\u54cd\u5e94\u8fd8\u662f\u505a\u9875\u9762\u54cd\u5e94\n    @Value("${spring.security.loginType}")T\n    private String loginType;\n\n    private static ObjectMapper objectMapper = new ObjectMapper();\n\n    @Override\n    public void onAuthenticationFailure(HttpServletRequest request,\n                                        HttpServletResponse response,\n                                        AuthenticationException exception)\n        throws IOException, ServletException {\n\n        if (loginType.equalsIgnoreCase("JSON")) {\n            response.setContentType("application/json;charset=UTF-8");\n            response.getWriter().write(\n                objectMapper.writeValueAsString(\n                    AjaxResponse.error(\n                        new CustomException(\n                            CustomExceptionType.USER_INPUT_ERROR,\n                            "\u7528\u6237\u540d\u6216\u5bc6\u7801\u5b58\u5728\u9519\u8bef\uff0c\u8bf7\u68c0\u67e5\u540e\u518d\u6b21\u767b\u5f55"))));\n        } else {\n            response.setContentType("text/html;charset=UTF-8");\n            super.onAuthenticationFailure(request, response, exception);\n        }\n    }\n}\n')),Object(s.b)("hr",null),Object(s.b)("h1",{id:"\u5c06\u81ea\u5b9a\u4e49\u7ed3\u679c\u5904\u7406\u914d\u7f6e\u8fdbsecurityconfig"},"\u5c06\u81ea\u5b9a\u4e49\u7ed3\u679c\u5904\u7406\u914d\u7f6e\u8fdbSecurityConfig"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Configuration\npublic class SecurityConfig extends WebSecurityConfigurerAdapter {\n\n    @Resource\n    private MyAuthenticationSuccessHandler myAuthenticationSuccessHandler;\n\n    @Resource\n    private MyAuthenticationFailureHandler myAuthenticationFailureHandler;\n\n    @Override\n    protected void configure(HttpSecurity http) throws Exception {\n        http.csrf().disable() //\u7981\u7528\u8de8\u7ad9csrf\u653b\u51fb\u9632\u5fa1\uff0c\u540e\u9762\u7684\u7ae0\u8282\u4f1a\u4e13\u95e8\u8bb2\u89e3\n            .formLogin()\n            .successHandler(myAuthenticationSuccessHandler)\n            .failureHandler(myAuthenticationFailureHandler)\n            //.defaultSuccessUrl("/index")//\u767b\u5f55\u8ba4\u8bc1\u6210\u529f\u540e\u9ed8\u8ba4\u8f6c\u8df3\u7684\u8def\u5f84\n            //.failureUrl("/login.html") //\u767b\u5f55\u8ba4\u8bc1\u662f\u88ab\u8df3\u8f6c\u9875\u9762\n}\n')),Object(s.b)("h1",{id:"json\u65b9\u5f0f\u7684\u767b\u5f55\u9875"},"JSON\u65b9\u5f0f\u7684\u767b\u5f55\u9875"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"\u4f7f\u7528Ajax\u8bf7\u6c42\u7684\u65b9\u5f0f\uff0c\u5728\u56de\u8c03\u4e2d\u5224\u65ad\u662f\u5426\u8df3\u8f6c"),Object(s.b)("ul",{parentName:"blockquote"},Object(s.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u5728\u6210\u529f\u54cd\u5e94\u4e2d\uff0c\u643a\u5e26\u8ba9\u524d\u7aef\u8df3\u8f6c\u7684\u8def\u7531\u5730\u5740")),Object(s.b)("pre",{parentName:"blockquote"},Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'response.setContentType("application/json;charset=UTF-8");\nresponse.getWriter().write(objectMapper.writeValueAsString(AjaxResponse.success("/index"))); // \u8df3\u8f6c\u5230/index\n')),Object(s.b)("ul",{parentName:"blockquote"},Object(s.b)("li",{parentName:"ul"},"\u524d\u7aef\u4ece\u54cd\u5e94\u4e2d\u53d6\u51fa",Object(s.b)("inlineCode",{parentName:"li"},"data"),"\u5b57\u6bb5\uff0c\u8fdb\u884c\u8df3\u8f6c"))),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>\u9996\u9875</title>\n    <script src="https://cdn.staticfile.org/jquery/1.12.3/jquery.min.js"><\/script>\n</head>\n<body>\n<h1>\u5b57\u6bcd\u54e5\u4e1a\u52a1\u7cfb\u7edf\u767b\u5f55</h1>\n<form action="/login" method="post">\n    <span>\u7528\u6237\u540d\u79f0</span><input type="text" name="username" id="username"/> <br>\n    <span>\u7528\u6237\u5bc6\u7801</span><input type="password" name="password" id="password" /> <br>\n    <input type="button" onclick="login()" value="\u767b\u9646">\n</form>\n\n<script>\n    function login() {\n        var username = $("#username").val();\n        var password = $("#password").val();\n        if (username === "" || password === "") {\n            alert(\'\u7528\u6237\u540d\u6216\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a\');\n            return;\n        }\n        $.ajax({\n            type: "POST",\n            url: "/login",\n            data: {\n                "username": username,\n                "password": password\n            },\n            success: function (json) {\n                if (json.isok) {\n                   // json.href = \'/index\';\n                    window.location.href = json.data //\u6839\u636edata\u5b57\u6bb5\u7684\u8def\u7531\u8fdb\u884c\u8df3\u8f6c\n                } else {\n                    alert(json.message)\n                }\n            },\n            error: function (e) {\n                console.log(e.responseText);\n            }\n        });\n    }\n<\/script>\n</body>\n</html>\n')))}l.isMDXComponent=!0},502:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),l=function(e){var n=r.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(t),d=a,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||s;return t?r.a.createElement(m,i(i({ref:n},u),{},{components:t})):r.a.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,c=new Array(s);c[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<s;u++)c[u]=t[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);