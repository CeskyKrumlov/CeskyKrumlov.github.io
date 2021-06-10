(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return m}));var r=n(2),a=n(6),b=(n(0),n(554)),o={id:"9.rememberMe",title:"RememberMe\u8bb0\u4f4f\u6211\u529f\u80fd",hide_title:!0},c={unversionedId:"security_Oauth2_JWT/9.rememberMe",id:"security_Oauth2_JWT/9.rememberMe",isDocsHomePage:!1,title:"RememberMe\u8bb0\u4f4f\u6211\u529f\u80fd",description:"RememberMe\u8bb0\u4f4f\u6211\u529f\u80fd",source:"@site/docs/security_Oauth2_JWT/9.\u8bb0\u4f4f\u6211.md",slug:"/security_Oauth2_JWT/9.rememberMe",permalink:"/docs/security_Oauth2_JWT/9.rememberMe",version:"current",sidebar:"someSidebar",previous:{title:"\u6743\u9650\u8868\u8fbe\u5f0f",permalink:"/docs/security_Oauth2_JWT/8.permExpression"},next:{title:"\u7528\u6237\u9000\u51fa",permalink:"/docs/security_Oauth2_JWT/10.logout"}},i=[{value:"RememberMe\u8bb0\u4f4f\u6211\u529f\u80fd",id:"rememberme\u8bb0\u4f4f\u6211\u529f\u80fd",children:[]},{value:"\u6700\u7b80\u5b9e\u73b0",id:"\u6700\u7b80\u5b9e\u73b0",children:[]},{value:"\u5b9e\u73b0\u539f\u7406",id:"\u5b9e\u73b0\u539f\u7406",children:[{value:"RememberMe Token\u7684\u7ec4\u6210",id:"rememberme-token\u7684\u7ec4\u6210",children:[]}]},{value:"\u4e2a\u6027\u5316\u914d\u7f6e",id:"\u4e2a\u6027\u5316\u914d\u7f6e",children:[]},{value:"Token\u6570\u636e\u5e93\u5b58\u50a8",id:"token\u6570\u636e\u5e93\u5b58\u50a8",children:[{value:"\u5efa\u8868",id:"\u5efa\u8868",children:[]},{value:"PersistentTokenRepository",id:"persistenttokenrepository",children:[]}]}],l={rightToc:i};function m(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"rememberme\u8bb0\u4f4f\u6211\u529f\u80fd"},"RememberMe\u8bb0\u4f4f\u6211\u529f\u80fd"),Object(b.b)("h1",{id:"\u6700\u7b80\u5b9e\u73b0"},"\u6700\u7b80\u5b9e\u73b0"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Spring Security\u914d\u7f6e\u7c7b",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u7d27\u8ddf",Object(b.b)("inlineCode",{parentName:"li"},"http"),"\u5bf9\u8c61\u5199"),Object(b.b)("li",{parentName:"ul"},"\u8ddf\u540e\u9762\u7684\u8bbe\u7f6e\u4e4b\u95f4\u7528",Object(b.b)("inlineCode",{parentName:"li"},"and()"),"\u9694\u5f00")))),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@Configuration\npublic class SecurityConfig extends WebSecurityConfigurerAdapter {\n    @Override\n    protected void configure(HttpSecurity http) throws Exception {\n        http.rememberMe();   //\u5b9e\u73b0\u8bb0\u4f4f\u6211\u81ea\u52a8\u767b\u5f55\u914d\u7f6e\uff0c\u6838\u5fc3\u7684\u4ee3\u7801\u53ea\u6709\u8fd9\u4e00\u884c\n    }\n}\n")),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"...\nhttp.rememberMe().and().csrf().disable()\n...\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u524d\u7aef\u767b\u5f55\u8868\u5355\u6dfb\u52a0\u4e00\u4e2aCheckBox",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"name"),"\u5c5e\u6027\u503c\u5fc5\u987b\u4e3a",Object(b.b)("inlineCode",{parentName:"li"},"remember-me"),"\uff08\u6709\u65b9\u6cd5\u5bf9\u4ed6\u8fdb\u884c\u66f4\u6539\uff09")))),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<form action="/login" method="post">\n    <span>\u7528\u6237\u540d\u79f0</span><input type="text" name="username" id="username"/> <br>\n    <span>\u7528\u6237\u5bc6\u7801</span><input type="password" name="password" id="password" /> <br>\n\x3c!--    <input type="button" onclick="login()" value="\u767b\u9646">--\x3e\n    <label><input type="checkbox" name="remember-me"/>\u8bb0\u4f4f\u6211</label>\n    <input type="submit" value="\u767b\u9646">\n</form>\n')),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"JQuery Ajax\u8bf7\u6c42\u6a21\u5f0f\u4e0b\uff0c\u9700\u8981\u7528id\u83b7\u53d6\u8fd9\u4e2aCheckBox\uff0c\u7136\u540e\u4f7f\u7528",Object(b.b)("inlineCode",{parentName:"p"},'.is(":checked")'),"\u83b7\u53d6\u5355\u9009\u6846\u7684\u503c")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u4f7f\u7528Ajax\u8bf7\u6c42\u65f6data\u57df\u643a\u5e26\u8fd9\u4e2a\u53c2\u6570\uff0c",Object(b.b)("strong",{parentName:"p"},"\u53c2\u6570\u540d\u5fc5\u987b\u4e3a",Object(b.b)("inlineCode",{parentName:"strong"},"remember-me"))))),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'function login() {\n    var username = $("#username").val();\n    var password = $("#password").val();\n    var rememberMe = $(\'#rememberMe\').is(":checked");\n\n    if (username === "" || password === "") {\n        alert(\'\u7528\u6237\u540d\u6216\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a\');\n        return;\n    }\n    $.ajax({\n        type: "POST",\n        url: "/login",\n        data: {\n            "username": username,\n            "password": password,\n            "remember-me": rememberMe\n        },\n        success: function (json) {\n            if (json.isok) {\n                // json.href = \'/index\';\n                window.location.href = json.data\n            } else {\n                alert(json.message)\n            }\n        },\n        error: function (e) {\n            console.log(e.responseText);\n        }\n    });\n}\n')),Object(b.b)("hr",null),Object(b.b)("h1",{id:"\u5b9e\u73b0\u539f\u7406"},"\u5b9e\u73b0\u539f\u7406"),Object(b.b)("blockquote",null,Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u5f53\u6211\u4eec\u767b\u9646\u7684\u65f6\u5019\uff0c\u9664\u4e86\u7528\u6237\u540d\u3001\u5bc6\u7801\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u52fe\u9009remember-me\u3002")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u5982\u679c\u6211\u4eec\u52fe\u9009\u4e86remember-me\uff0c\u5f53\u6211\u4eec\u767b\u5f55\u6210\u529f\u4e4b\u540e\u670d\u52a1\u7aef\u4f1a\u751f\u6210\u4e00\u4e2aCookie\u8fd4\u56de\u7ed9\u6d4f\u89c8\u5668\uff0c\u8fd9\u4e2aCookie\u7684\u540d\u5b57\u9ed8\u8ba4\u662fremember-me\uff1b\u503c\u662f\u4e00\u4e2atoken\u4ee4\u724c\u3002")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u5f53\u6211\u4eec\u5728\u6709\u6548\u671f\u5185\u518d\u6b21\u8bbf\u95ee\u5e94\u7528\u65f6\uff0c\u7ecf\u8fc7RememberMeAuthenticationFilter,\u8bfb\u53d6Cookie\u4e2d\u7684token\u8fdb\u884c\u9a8c\u8bc1\u3002\u9a8c\u6b63\u901a\u8fc7\u4e0d\u9700\u8981\u518d\u6b21\u767b\u5f55\u5c31\u53ef\u4ee5\u8fdb\u884c\u5e94\u7528\u8bbf\u95ee\u3002")))),Object(b.b)("h2",{id:"rememberme-token\u7684\u7ec4\u6210"},"RememberMe Token\u7684\u7ec4\u6210"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("inlineCode",{parentName:"p"},"RememberMeToken = username, expiryTime, signatureValue"),"\u7684Base64\u52a0\u5bc6"),Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},"\u7528\u6237\u540d"),Object(b.b)("li",{parentName:"ul"},"\u8fc7\u671f\u65f6\u95f4"),Object(b.b)("li",{parentName:"ul"},"\u6570\u5b57\u7b7e\u540d\uff1a\u75284\u4e2a\u4e1c\u897f\u901a\u8fc7MD5\u751f\u6210",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u7528\u6237\u540d"),Object(b.b)("li",{parentName:"ul"},"\u8fc7\u671f\u65f6\u95f4"),Object(b.b)("li",{parentName:"ul"},"\u5bc6\u7801"),Object(b.b)("li",{parentName:"ul"},"\u968f\u673a\u9884\u5b9a\u4e49key"))))),Object(b.b)("p",null,Object(b.b)("img",{alt:"image-20200727103543810",src:n(661).default})),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Spring Security\u8fc7\u6ee4\u5668\u94fe")),Object(b.b)("hr",null),Object(b.b)("h1",{id:"\u4e2a\u6027\u5316\u914d\u7f6e"},"\u4e2a\u6027\u5316\u914d\u7f6e"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'.rememberMe()\n    .rememberMeParameter("remember-me-new")\n    .rememberMeCookieName("remember-me-cookie")\n    .tokenValiditySeconds(2 * 24 * 60 * 60);  \n')),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"tokenValiditySeconds"),"\u7528\u4e8e\u8bbe\u7f6etoken\u7684",Object(b.b)("inlineCode",{parentName:"li"},"\u6709\u6548\u671f"),"\uff0c\u5373\u591a\u957f\u65f6\u95f4\u5185\u53ef\u4ee5\u514d\u9664\u91cd\u590d\u767b\u5f55\uff0c\u5355\u4f4d\u662f\u79d2\u3002\u4e0d\u4fee\u6539\u914d\u7f6e\u60c5\u51b5\u4e0b\u9ed8\u8ba4\u662f2\u5468"),Object(b.b)("li",{parentName:"ul"},"\u901a\u8fc7",Object(b.b)("inlineCode",{parentName:"li"},"rememberMeParameter"),"\u8bbe\u7f6efrom\u8868\u5355\u201c\u81ea\u52a8\u767b\u5f55\u201d\u52fe\u9009\u6846\u7684\u53c2\u6570\u540d\u79f0\u3002\u5982\u679c\u8fd9\u91cc\u6539\u4e86\uff0c",Object(b.b)("inlineCode",{parentName:"li"},"from\u8868\u5355"),"\u4e2dcheckbox\u7684name\u5c5e\u6027\u8981\u5bf9\u5e94\u7684\u66f4\u6539\u3002\u5982\u679c\u4e0d\u8bbe\u7f6e\u9ed8\u8ba4\u662fremember-me"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"rememberMeCookieName"),"\u8bbe\u7f6e\u4e86\u4fdd\u5b58\u5728\u6d4f\u89c8\u5668\u7aef\u7684",Object(b.b)("inlineCode",{parentName:"li"},"cookie"),"\u7684\u540d\u79f0\uff0c\u5982\u679c\u4e0d\u8bbe\u7f6e\u9ed8\u8ba4\u4e5f\u662fremember-me\u3002\u5982\u4e0b\u56fe\u4e2d\u67e5\u770b\u6d4f\u89c8\u5668\u7684cookie")),Object(b.b)("hr",null),Object(b.b)("h1",{id:"token\u6570\u636e\u5e93\u5b58\u50a8"},"Token\u6570\u636e\u5e93\u5b58\u50a8"),Object(b.b)("p",null,Object(b.b)("img",{alt:"image-20200727104823953",src:n(662).default})),Object(b.b)("h2",{id:"\u5efa\u8868"},"\u5efa\u8868"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"\u5efa\u4e00\u5f20RememberME Token\u7684\u8868"))),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE `persistent_logins` (\n  `username` varchar(64) NOT NULL,\n  `series` varchar(64) NOT NULL,\n  `token` varchar(64) NOT NULL,\n  `last_used` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n  PRIMARY KEY (`series`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n")),Object(b.b)("h2",{id:"persistenttokenrepository"},"PersistentTokenRepository"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"\u521d\u59cb\u5316\u4e00\u4e2aPersistentTokenRepository\u7c7b\u578b\u7684Spring bean\uff0c\u5e76\u5c06\u7cfb\u7edf\u4f7f\u7528\u7684DataSource\u6ce8\u5165\u5230\u8be5bean\u4e2d"))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u914d\u7f6e\u7c7b")),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@Autowired\nprivate DataSource dataSource;\n\n@Bean\npublic PersistentTokenRepository persistentTokenRepository(){\n    JdbcTokenRepositoryImpl tokenRepository = new JdbcTokenRepositoryImpl();\n    tokenRepository.setDataSource(dataSource);\n    return tokenRepository;\n}\n")),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),".rememberMe()\n    .tokenRepository(persistentTokenRepository())\n")))}m.isMDXComponent=!0},554:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),m=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=m(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,b=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=m(n),s=r,O=p["".concat(o,".").concat(s)]||p[s]||u[s]||b;return n?a.a.createElement(O,c(c({ref:t},l),{},{components:n})):a.a.createElement(O,c({ref:t},l))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=n.length,o=new Array(b);o[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<b;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},661:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/6-cf724ae0e8a606f9449714724606f850.png"},662:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/7-7c33a41966bb035a6345c161632db9c5.png"}}]);