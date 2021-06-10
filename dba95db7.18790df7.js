(window.webpackJsonp=window.webpackJsonp||[]).push([[373],{429:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),i=(n(0),n(496)),c={id:"2.springsecurityLogin",title:"HttpBasic\u4e0eFormLogin\u767b\u5f55\u8ba4\u8bc1\u65b9\u5f0f",hide_title:!0},o={unversionedId:"security_Oauth2_JWT/2.springsecurityLogin",id:"security_Oauth2_JWT/2.springsecurityLogin",isDocsHomePage:!1,title:"HttpBasic\u4e0eFormLogin\u767b\u5f55\u8ba4\u8bc1\u65b9\u5f0f",description:"HttpBasic\u4e0eFormLogin\u767b\u5f55\u8ba4\u8bc1\u65b9\u5f0f",source:"@site/docs/security_Oauth2_JWT/2.httpbasic_formlogin.md",slug:"/security_Oauth2_JWT/2.springsecurityLogin",permalink:"/docs/security_Oauth2_JWT/2.springsecurityLogin",version:"current",sidebar:"someSidebar",previous:{title:"\u73af\u5883\u642d\u5efa\u4e0e\u9700\u6c42",permalink:"/docs/security_Oauth2_JWT/1.basicEnv"},next:{title:"\u81ea\u5b9a\u4e49\u767b\u5f55\u9a8c\u8bc1\u7ed3\u679c\u5904\u7406",permalink:"/docs/security_Oauth2_JWT/3.customLogin"}},l=[{value:"HttpBasic\u4e0eFormLogin\u767b\u5f55\u8ba4\u8bc1\u65b9\u5f0f",id:"httpbasic\u4e0eformlogin\u767b\u5f55\u8ba4\u8bc1\u65b9\u5f0f",children:[]},{value:"HttpBasic",id:"httpbasic",children:[]},{value:"FormLogin",id:"formlogin",children:[{value:"\u9759\u6001\u8d44\u6e90\u5904\u7406",id:"\u9759\u6001\u8d44\u6e90\u5904\u7406",children:[]},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",children:[]}]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"httpbasic\u4e0eformlogin\u767b\u5f55\u8ba4\u8bc1\u65b9\u5f0f"},"HttpBasic\u4e0eFormLogin\u767b\u5f55\u8ba4\u8bc1\u65b9\u5f0f"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u65b0\u5efa/config/SecurityConfig\u7c7b")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u91cd\u5199",Object(i.b)("inlineCode",{parentName:"strong"},"protected void configure(HttpSecurity http)"))),Object(i.b)("hr",null),Object(i.b)("h1",{id:"httpbasic"},"HttpBasic"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@Configuration\npublic class SecurityConfig extends WebSecurityConfigurerAdapter {\n    @Override\n    protected void configure(HttpSecurity http) throws Exception {\n        http.httpBasic()  // \u5f00\u542fhttpbasic\u6a21\u5f0f\n                .and() // \u5f00\u59cb\u914d\u7f6e\n                .authorizeRequests() // \u9488\u5bf9\u6240\u6709\u8bf7\u6c42\n                .anyRequest()\n                .authenticated(); // \u8981\u6c42\u5fc5\u987b\u5148\u767b\u5f55\n    }\n}\n")),Object(i.b)("p",null,"\u8fd0\u884c\u542f\u52a8\uff0c\u63a7\u5236\u53f0\u4f1a\u770b\u5230\u4e00\u4e32SpringSecurity\u751f\u6210\u7684\u9ed8\u8ba4\u5bc6\u7801"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"Using generated security password: dafeb2e4-630a-4f38-b3c2-6ec89ba71bce\n")),Object(i.b)("p",null,"\u9ed8\u8ba4\u7528\u6237\u540d",Object(i.b)("inlineCode",{parentName:"p"},"user")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u5728application.yaml\u4e2d\u81ea\u5df1\u914d\u7f6e\u7528\u6237\u540d\u5bc6\u7801")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"spring:\n    security:\n      user:\n        name: admin\n        password: admin\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u539f\u7406")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u9996\u5148\uff0cHttpBasic\u6a21\u5f0f\u8981\u6c42\u4f20\u8f93\u7684\u7528\u6237\u540d\u5bc6\u7801\u4f7f\u7528Base64\u6a21\u5f0f\u8fdb\u884c\u52a0\u5bc6\u3002\u5982\u679c\u7528\u6237\u540d\u662f ",Object(i.b)("inlineCode",{parentName:"li"},'"admin"')," \uff0c\u5bc6\u7801\u662f\u201c admin\u201d\uff0c\u5219\u5c06\u5b57\u7b26\u4e32",Object(i.b)("inlineCode",{parentName:"li"},'"admin:admin"'),"\u4f7f\u7528Base64\u7f16\u7801\u7b97\u6cd5\u52a0\u5bc6\u3002\u52a0\u5bc6\u7ed3\u679c\u53ef\u80fd\u662f\uff1aYWtaW46YWRtaW4=\u3002"),Object(i.b)("li",{parentName:"ul"},"\u7136\u540e\uff0c\u5728Http\u8bf7\u6c42\u4e2d\u4f7f\u7528Authorization\u4f5c\u4e3a\u4e00\u4e2aHeader\uff0c\u201cBasic YWtaW46YWRtaW4=\u201c\u4f5c\u4e3aHeader\u7684\u503c\uff0c\u53d1\u9001\u7ed9\u670d\u52a1\u7aef\u3002\uff08\u6ce8\u610f\u8fd9\u91cc\u4f7f\u7528Basic+\u7a7a\u683c+\u52a0\u5bc6\u4e32\uff09"),Object(i.b)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u5728\u6536\u5230\u8fd9\u6837\u7684\u8bf7\u6c42\u65f6\uff0c\u5230\u8fbeBasicAuthenticationFilter\u8fc7\u6ee4\u5668\uff0c\u5c06\u63d0\u53d6\u201c Authorization\u201d\u7684Header\u503c\uff0c\u5e76\u4f7f\u7528\u7528\u4e8e\u9a8c\u8bc1\u7528\u6237\u8eab\u4efd\u7684\u76f8\u540c\u7b97\u6cd5Base64\u8fdb\u884c\u89e3\u7801\u3002"),Object(i.b)("li",{parentName:"ul"},"\u89e3\u7801\u7ed3\u679c\u4e0e\u767b\u5f55\u9a8c\u8bc1\u7684\u7528\u6237\u540d\u5bc6\u7801\u5339\u914d\uff0c\u5339\u914d\u6210\u529f\u5219\u53ef\u4ee5\u7ee7\u7eed\u8fc7\u6ee4\u5668\u540e\u7eed\u7684\u8bbf\u95ee\u3002")),Object(i.b)("p",null,"\u6240\u4ee5\uff0cHttpBasic\u6a21\u5f0f\u771f\u7684\u662f\u975e\u5e38\u7b80\u5355\u53c8\u7b80\u964b\u7684\u9a8c\u8bc1\u6a21\u5f0f\uff0cBase64\u7684\u52a0\u5bc6\u7b97\u6cd5\u662f\u53ef\u9006\u7684"),Object(i.b)("hr",null),Object(i.b)("h1",{id:"formlogin"},"FormLogin"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u4e09\u8981\u7d20")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u767b\u5f55\u8ba4\u8bc1\u903b\u8f91\uff08\u9759\u6001\uff09"),Object(i.b)("li",{parentName:"ul"},"\u8d44\u6e90\u8bbf\u95ee\u63a7\u5236\uff08\u52a8\u6001\uff09"),Object(i.b)("li",{parentName:"ul"},"\u7528\u6237\u89d2\u8272\u6743\u9650\uff08\u52a8\u6001\uff09"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u8bbe\u7f6eformLogin\u6a21\u5f0f"),Object(i.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u767b\u5f55\u9875\uff0c\u8d26\u53f7\u5bc6\u7801\u8f93\u5165\u6846\u5c5e\u6027\u540d\uff0c\u767b\u5f55\u540e\u8df3\u8f6c\u8def\u5f84"),Object(i.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u5404\u4e2a\u8d44\u6e90\u8def\u5f84\u7684\u8bbf\u95ee\u6743\u9650\u4fe1\u606f")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Configuration\npublic class SecurityConfig extends WebSecurityConfigurerAdapter {\n    @Override\n    protected void configure(HttpSecurity http) throws Exception {\n        http.csrf().disable() //\u7981\u7528\u8de8\u7ad9csrf\u653b\u51fb\u9632\u5fa1\uff0c\u540e\u9762\u7684\u7ae0\u8282\u4f1a\u4e13\u95e8\u8bb2\u89e3\n            .formLogin()\n            .loginPage("/login.html")//\u7528\u6237\u672a\u767b\u5f55\u65f6\uff0c\u8bbf\u95ee\u4efb\u4f55\u8d44\u6e90\u90fd\u8f6c\u8df3\u5230\u8be5\u8def\u5f84\uff0c\u5373\u767b\u5f55\u9875\u9762\n            .loginProcessingUrl("/login")//\u767b\u5f55\u8868\u5355form\u4e2daction\u7684\u5730\u5740\uff0c\u4e5f\u5c31\u662f\u5904\u7406\u8ba4\u8bc1\u8bf7\u6c42\u7684\u8def\u5f84\n            .usernameParameter("username")///\u767b\u5f55\u8868\u5355form\u4e2d\u7528\u6237\u540d\u8f93\u5165\u6846input\u7684name\u540d\uff0c\u4e0d\u4fee\u6539\u7684\u8bdd\u9ed8\u8ba4\u662fusername\n            .passwordParameter("password")//form\u4e2d\u5bc6\u7801\u8f93\u5165\u6846input\u7684name\u540d\uff0c\u4e0d\u4fee\u6539\u7684\u8bdd\u9ed8\u8ba4\u662fpassword\n            .defaultSuccessUrl("/index")//\u767b\u5f55\u8ba4\u8bc1\u6210\u529f\u540e\u9ed8\u8ba4\u8f6c\u8df3\u7684\u8def\u5f84\n            .and()\n            .authorizeRequests()\n            .antMatchers("/login.html", "/login").permitAll()//\u4e0d\u9700\u8981\u901a\u8fc7\u767b\u5f55\u9a8c\u8bc1\u5c31\u53ef\u4ee5\u88ab\u8bbf\u95ee\u7684\u8d44\u6e90\u8def\u5f84\n            .antMatchers("/biz1", "/biz2") //\u9700\u8981\u5bf9\u5916\u66b4\u9732\u7684\u8d44\u6e90\u8def\u5f84\n            .hasAnyAuthority("ROLE_user", "ROLE_admin")  //user\u89d2\u8272\u548cadmin\u89d2\u8272\u90fd\u53ef\u4ee5\u8bbf\u95ee\n            .antMatchers("/syslog", "/sysuser")\n            .hasAnyRole("admin")  //admin\u89d2\u8272\u53ef\u4ee5\u8bbf\u95ee\n            //.antMatchers("/syslog").hasAuthority("sys:log")\n            //.antMatchers("/sysuser").hasAuthority("sys:user")\n            .anyRequest().authenticated();\n    }\n}\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u4e3a\u7528\u6237\u8bbe\u7f6e\u6743\u9650\u3001\u89d2\u8272"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u91cd\u5199",Object(i.b)("inlineCode",{parentName:"li"},"protected void configure(AuthenticaitonManagerBuilder auth)")))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Override\nprotected void configure(AuthenticationManagerBuilder auth) throws Exception {\n    auth.inMemoryAuthentication()\n        .withUser("user")\n        .password(passwordEncoder().encode("123456"))\n        .roles("user")\n        .and()\n        .withUser("admin")\n        .password(passwordEncoder().encode("123456"))\n        //.authorities("sys:log","sys:user")\n        .roles("admin")\n        .and()\n        .passwordEncoder(passwordEncoder());//\u914d\u7f6eBCrypt\u52a0\u5bc6\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@Bean\npublic PasswordEncoder passwordEncoder() {\n    return new BCryptPasswordEncoder();\n}\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"inMemoryAuthentication"),"\u6307\u7684\u662f\u5728\u5185\u5b58\u91cc\u9762\u5b58\u50a8\u7528\u6237\u7684\u8eab\u4efd\u8ba4\u8bc1\u548c\u6388\u6743\u4fe1\u606f\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'withUser("user")'),"\u7528\u6237\u540d\u662fuser"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'password(passwordEncoder().encode("123456"))'),"\u5bc6\u7801\u662f\u52a0\u5bc6\u4e4b\u540e\u7684123456"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'authorities("sys:log","sys:user")'),'\u6307\u7684\u662fadmin\u7528\u6237\u62e5\u6709\u8d44\u6e90ID\u5bf9\u5e94\u7684\u8d44\u6e90\u8bbf\u95ee\u7684\u7684\u6743\u9650\uff1a"/syslog"\u548c"/sysuser"'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"roles()"),"\u65b9\u6cd5\u7528\u4e8e\u6307\u5b9a\u7528\u6237\u7684\u89d2\u8272\uff0c\u4e00\u4e2a\u7528\u6237\u53ef\u4ee5\u6709\u591a\u4e2a\u89d2\u8272")),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},'antMatchers("/sysuser").hasAuthority("sys:user")\u914d\u5408.authorities("sys:log","sys:user")')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},'.antMatchers("/syslog", "/sysuser").hasAnyRole("admin")\u914d\u5408.roles("admin")')))),Object(i.b)("h2",{id:"\u9759\u6001\u8d44\u6e90\u5904\u7406"},"\u9759\u6001\u8d44\u6e90\u5904\u7406"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u5bf9\u4e8e\u9759\u6001\u8d44\u6e90\uff0c\u4e0d\u9700\u8981\u8bbe\u7f6e\u6743\u9650"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u91cd\u5199",Object(i.b)("inlineCode",{parentName:"li"},"configure(WebSecuriy web)"),"\u65b9\u6cd5"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Override\npublic void configure(WebSecurity web) {\n    //\u5c06\u9879\u76ee\u4e2d\u9759\u6001\u8d44\u6e90\u8def\u5f84\u5f00\u653e\u51fa\u6765\n    web.ignoring().antMatchers( "/css/**", "/fonts/**", "/img/**", "/js/**");\n}\n')),Object(i.b)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u4fee\u6539login.html\u4e2d\u7684\u8868\u5355\u63d0\u4ea4\u5730\u5740")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<form action="/login" method="post">\n    <span>\u7528\u6237\u540d\uff1a<input type="text" name="username"/></span>\n   <span>\u5bc6\u7801\uff1a<input type="password" name="password"/></span>\n    <input type="submit" value="\u767b\u5f55">\n</form>\n')))}u.isMDXComponent=!0},496:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,d=b["".concat(c,".").concat(m)]||b[m]||p[m]||i;return n?a.a.createElement(d,o(o({ref:t},s),{},{components:n})):a.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);