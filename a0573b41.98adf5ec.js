(window.webpackJsonp=window.webpackJsonp||[]).push([[319],{376:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(6),i=(t(0),t(548)),c={id:"7.dynamicUrl",title:"\u52a8\u6001\u52a0\u8f7d\u8d44\u6e90\u9274\u6743\u89c4\u5219",hide_title:!0},s={unversionedId:"security_Oauth2_JWT/7.dynamicUrl",id:"security_Oauth2_JWT/7.dynamicUrl",isDocsHomePage:!1,title:"\u52a8\u6001\u52a0\u8f7d\u8d44\u6e90\u9274\u6743\u89c4\u5219",description:"\u52a8\u6001\u52a0\u8f7d\u8d44\u6e90\u9274\u6743\u89c4\u5219",source:"@site/docs/security_Oauth2_JWT/7.\u52a8\u6001\u52a0\u8f7d\u8d44\u6e90\u9274\u6743\u89c4\u5219.md",slug:"/security_Oauth2_JWT/7.dynamicUrl",permalink:"/docs/security_Oauth2_JWT/7.dynamicUrl",version:"current",sidebar:"someSidebar",previous:{title:"\u4ece\u6570\u636e\u5e93\u52a8\u6001\u52a0\u8f7d\u7528\u6237\u6743\u9650",permalink:"/docs/security_Oauth2_JWT/6.dynamicUserPerm"},next:{title:"\u6743\u9650\u8868\u8fbe\u5f0f",permalink:"/docs/security_Oauth2_JWT/8.permExpression"}},l=[{value:"\u52a8\u6001\u52a0\u8f7d\u8d44\u6e90\u9274\u6743\u89c4\u5219",id:"\u52a8\u6001\u52a0\u8f7d\u8d44\u6e90\u9274\u6743\u89c4\u5219",children:[]},{value:"MyRBACService",id:"myrbacservice",children:[]},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",children:[]}],o={rightToc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u52a8\u6001\u52a0\u8f7d\u8d44\u6e90\u9274\u6743\u89c4\u5219"},"\u52a8\u6001\u52a0\u8f7d\u8d44\u6e90\u9274\u6743\u89c4\u5219"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u67e5\u770b\u67d0\u7528\u6237\u6743\u9650\u7684SQL\u8bed\u53e5")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),"SELECT url\nFROM sys_menu m\nLEFT JOIN sys_role_menu rm ON m.id = rm.menu_id\nLEFT JOIN sys_role r ON r.id = rm.role_id\nLEFT JOIN sys_user_role ur ON r.id = ur.role_id\nLEFT JOIN sys_user u ON u.id = ur.user_id\nWHERE u.username = 'admin'\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u5148\u628a\u4e4b\u524d\u5199\u6b7b\u7684\u89c4\u5219\u6ce8\u91ca\u6389"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u9996\u9875\u53ea\u8981\u767b\u5f55\u4e86\u5c31\u5141\u8bb8\u8bbf\u95ee"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Override\nprotected void configure(HttpSecurity http) throws Exception {\n    http.csrf().disable() //\u7981\u7528\u8de8\u7ad9csrf\u653b\u51fb\u9632\u5fa1\uff0c\u540e\u9762\u7684\u7ae0\u8282\u4f1a\u4e13\u95e8\u8bb2\u89e3\n        .formLogin()\n        .loginPage("/login.html")//\u7528\u6237\u672a\u767b\u5f55\u65f6\uff0c\u8bbf\u95ee\u4efb\u4f55\u8d44\u6e90\u90fd\u8f6c\u8df3\u5230\u8be5\u8def\u5f84\uff0c\u5373\u767b\u5f55\u9875\u9762\n        .loginProcessingUrl("/login")//\u767b\u5f55\u8868\u5355form\u4e2daction\u7684\u5730\u5740\uff0c\u4e5f\u5c31\u662f\u5904\u7406\u8ba4\u8bc1\u8bf7\u6c42\u7684\u8def\u5f84\n        .usernameParameter("username")///\u767b\u5f55\u8868\u5355form\u4e2d\u7528\u6237\u540d\u8f93\u5165\u6846input\u7684name\u540d\uff0c\u4e0d\u4fee\u6539\u7684\u8bdd\u9ed8\u8ba4\u662fusername\n        .passwordParameter("password")//form\u4e2d\u5bc6\u7801\u8f93\u5165\u6846input\u7684name\u540d\uff0c\u4e0d\u4fee\u6539\u7684\u8bdd\u9ed8\u8ba4\u662fpassword\n        //                .defaultSuccessUrl("/index")//\u767b\u5f55\u8ba4\u8bc1\u6210\u529f\u540e\u9ed8\u8ba4\u8f6c\u8df3\u7684\u8def\u5f84\n        .successHandler(myAuthenticationSuccessHandler)\n        .failureHandler(myAuthenticationFaliureHandler)\n        .and()\n        .authorizeRequests()\n        .antMatchers("/login.html", "/login").permitAll()//\u4e0d\u9700\u8981\u901a\u8fc7\u767b\u5f55\u9a8c\u8bc1\u5c31\u53ef\u4ee5\u88ab\u8bbf\u95ee\u7684\u8d44\u6e90\u8def\u5f84\n        .antMatchers("/index").authenticated()// \u9996\u9875\u53ea\u8981\u767b\u5f55\u4e86\u5c31\u53ef\u4ee5\u8bbf\u95ee\n        /*   .antMatchers("/biz1", "/biz2") //\u9700\u8981\u5bf9\u5916\u66b4\u9732\u7684\u8d44\u6e90\u8def\u5f84\n                   .hasAnyAuthority("ROLE_user", "ROLE_admin")  //user\u89d2\u8272\u548cadmin\u89d2\u8272\u90fd\u53ef\u4ee5\u8bbf\u95ee\n   //                .antMatchers("/syslog", "/sysuser")\n   //                .hasAnyRole("admin")  //admin\u89d2\u8272\u53ef\u4ee5\u8bbf\u95ee\n                   .antMatchers("/syslog").hasAuthority("/syslog")\n                   .antMatchers("/sysuser").hasAuthority("/sysuser")\n                  .anyRequest().authenticated();*/\n        ;\n}\n')),Object(i.b)("h1",{id:"myrbacservice"},"MyRBACService"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Service("rbacService")\npublic class MyRBACService {\n\n    @Resource\n    MyRBACServiceMapper myRBACServiceMapper;\n\n    /**\n     * \u5224\u65ad\u67d0\u7528\u6237\u662f\u5426\u5177\u6709\u8be5request\u8d44\u6e90\u7684\u8bbf\u95ee\u6743\u9650\n     */\n    public boolean hasPermission(HttpServletRequest request, Authentication authentication) {\n        // \u83b7\u53d6\u9a8c\u8bc1\u4e3b\u4f53\uff0c\u5c31\u662fMyUserDetails\n        Object principal = authentication.getPrincipal();\n        if (principal instanceof UserDetails) {\n            UserDetails userDetails = ((UserDetails)principal);\n            List<GrantedAuthority> authorityList =\n                    AuthorityUtils.commaSeparatedStringToAuthorityList(request.getRequestURI());\n            return userDetails.getAuthorities().contains(authorityList.get(0));\n        }\n        return false;\n    }\n}\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"MyRBACServiceMapper\u2014\u2014\u901a\u8fc7\u7528\u6237\u540d\u67e5\u8be2\u7528\u6237\u6743\u9650"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public interface MyRBACServiceMapper {\n    @Select("SELECT url\\n" +\n            "FROM sys_menu m\\n" +\n            "LEFT JOIN sys_role_menu rm ON m.id = rm.menu_id\\n" +\n            "LEFT JOIN sys_role r ON r.id = rm.role_id\\n" +\n            "LEFT JOIN sys_user_role ur ON r.id = ur.role_id\\n" +\n            "LEFT JOIN sys_user u ON u.id = ur.user_id\\n" +\n            "WHERE u.username = #{username}")\n    List<String> findUrlsByUsername(@Param("username") String username);\n}\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u5728Config\u7c7b\u4e2d\uff0c\u4e66\u5199\u6743\u9650\u8868\u8fbe\u5f0f"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u7528",Object(i.b)("inlineCode",{parentName:"li"},"access()")),Object(i.b)("li",{parentName:"ul"},"\u53c2\u6570\u5fc5\u987b\u53eb",Object(i.b)("inlineCode",{parentName:"li"},"request"),"\u548c",Object(i.b)("inlineCode",{parentName:"li"},"authentication")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"access(request, authenticaiton)")))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Override\nprotected void configure(HttpSecurity http) throws Exception {\n    http.csrf().disable() //\u7981\u7528\u8de8\u7ad9csrf\u653b\u51fb\u9632\u5fa1\uff0c\u540e\u9762\u7684\u7ae0\u8282\u4f1a\u4e13\u95e8\u8bb2\u89e3\n        .formLogin()\n        .loginPage("/login.html")//\u7528\u6237\u672a\u767b\u5f55\u65f6\uff0c\u8bbf\u95ee\u4efb\u4f55\u8d44\u6e90\u90fd\u8f6c\u8df3\u5230\u8be5\u8def\u5f84\uff0c\u5373\u767b\u5f55\u9875\u9762\n        .loginProcessingUrl("/login")//\u767b\u5f55\u8868\u5355form\u4e2daction\u7684\u5730\u5740\uff0c\u4e5f\u5c31\u662f\u5904\u7406\u8ba4\u8bc1\u8bf7\u6c42\u7684\u8def\u5f84\n        .usernameParameter("username")///\u767b\u5f55\u8868\u5355form\u4e2d\u7528\u6237\u540d\u8f93\u5165\u6846input\u7684name\u540d\uff0c\u4e0d\u4fee\u6539\u7684\u8bdd\u9ed8\u8ba4\u662fusername\n        .passwordParameter("password")//form\u4e2d\u5bc6\u7801\u8f93\u5165\u6846input\u7684name\u540d\uff0c\u4e0d\u4fee\u6539\u7684\u8bdd\u9ed8\u8ba4\u662fpassword\n        //                .defaultSuccessUrl("/index")//\u767b\u5f55\u8ba4\u8bc1\u6210\u529f\u540e\u9ed8\u8ba4\u8f6c\u8df3\u7684\u8def\u5f84\n        .successHandler(myAuthenticationSuccessHandler)\n        .failureHandler(myAuthenticationFaliureHandler)\n        .and()\n        .authorizeRequests()\n        .antMatchers("/login.html", "/login").permitAll()//\u4e0d\u9700\u8981\u901a\u8fc7\u767b\u5f55\u9a8c\u8bc1\u5c31\u53ef\u4ee5\u88ab\u8bbf\u95ee\u7684\u8d44\u6e90\u8def\u5f84\n        .antMatchers("/index").authenticated()// \u9996\u9875\u53ea\u8981\u767b\u5f55\u4e86\u5c31\u53ef\u4ee5\u8bbf\u95ee\n        .anyRequest().access("@rbacService.hasPermission(request, authentication)")\n        /*   .antMatchers("/biz1", "/biz2") //\u9700\u8981\u5bf9\u5916\u66b4\u9732\u7684\u8d44\u6e90\u8def\u5f84\n                   .hasAnyAuthority("ROLE_user", "ROLE_admin")  //user\u89d2\u8272\u548cadmin\u89d2\u8272\u90fd\u53ef\u4ee5\u8bbf\u95ee\n   //                .antMatchers("/syslog", "/sysuser")\n   //                .hasAnyRole("admin")  //admin\u89d2\u8272\u53ef\u4ee5\u8bbf\u95ee\n                   .antMatchers("/syslog").hasAuthority("/syslog")\n                   .antMatchers("/sysuser").hasAuthority("/sysuser")\n                  .anyRequest().authenticated();*/\n\n        ;\n}\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u9664\u4e86\u767b\u5f55\u9875\u4e0e\u9996\u9875\uff0c\u6240\u6709\u5176\u4ed6\u7684\u8bbf\u95ee\u5fc5\u987b\u7ecf\u8fc7rbacService\u7684hasPermission\u65b9\u6cd5\uff0c\u52a8\u6001\u4ece\u6570\u636e\u5e93\u67e5\u8be2\u662f\u5426\u6709\u5bf9\u5e94\u8bbf\u95ee\u8def\u5f84\u7684\u8bbf\u95ee\u6743\u9650")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u5904\u7406Bug")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u767b\u5f55\u540e\u76f4\u63a5\u62a5403\uff0c\u901a\u8fc7\u63a7\u5236\u53f0\uff0c\u53d1\u73b0\u8bf7\u6c42\u5730\u5740\u662f",Object(i.b)("inlineCode",{parentName:"li"},"/"),"\uff0c\u6570\u636e\u5e93\u4e2d\u6ca1\u914d\u7f6e",Object(i.b)("inlineCode",{parentName:"li"},"/"),"\u8fd9\u4e2a\u6743\u9650\uff0c\u4e5f\u6ca1\u6709\u5728Spring Security\u4e2d\u914d\u7f6e",Object(i.b)("inlineCode",{parentName:"li"},"/"),"\u7684\u6743\u9650\uff0c\u6240\u4ee5\u628a",Object(i.b)("inlineCode",{parentName:"li"},"/"),"\u8fd9\u4e2a\u8def\u5f84\u52a0\u4e0a\uff0c\u5e76\u4e14\u8fd8\u8981\u7ed9",Object(i.b)("inlineCode",{parentName:"li"},"/"),"\u8fd9\u4e2a\u8def\u5f84\u8bbe\u7f6e\u4e00\u4e2aController"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'.antMatchers("/login.html", "/login").permitAll()//\u4e0d\u9700\u8981\u901a\u8fc7\u767b\u5f55\u9a8c\u8bc1\u5c31\u53ef\u4ee5\u88ab\u8bbf\u95ee\u7684\u8d44\u6e90\u8def\u5f84\n.antMatchers("/index", "/").authenticated()// \u9996\u9875\u53ea\u8981\u767b\u5f55\u4e86\u5c31\u53ef\u4ee5\u8bbf\u95ee\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@GetMapping({"/index", "/"})\npublic String index() {\n    return "index";\n}\n')),Object(i.b)("h1",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u7528",Object(i.b)("inlineCode",{parentName:"p"},"admin"),"\u767b\u5f55\uff0c\u53d1\u73b0\u53ef\u4ee5\u770b",Object(i.b)("strong",{parentName:"p"},"\u7cfb\u7edf\u65e5\u5fd7"),"\u548c",Object(i.b)("strong",{parentName:"p"},"\u7528\u6237\u7ba1\u7406"),"\uff0c\u4e0d\u80fd\u8bbf\u95ee\u4e1a\u52a11\u548c\u4e1a\u52a12")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u76f4\u63a5\u4fee\u6539\u6570\u636e\u5e93\uff0c\u7ed9admin\u89d2\u8272\u6dfb\u52a0\u4e1a\u52a11\u548c\u4e1a\u52a12\u7684\u6743\u9650"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),"INSERT INTO sys_role_menu VALUES (NULL, 1, 4)\nINSERT INTO sys_role_menu VALUES (NULL, 1, 5)\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u65e0\u5e8f\u91cd\u542f\u9879\u76ee\uff0c\u76f4\u63a5\u8bbf\u95ee\u4e1a\u52a11\u4e1a\u52a12\uff0c\u73b0\u5728\u80fd\u8bbf\u95ee\u4e86"))))}u.isMDXComponent=!0},548:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=a.a.createContext({}),u=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},b=function(e){var n=u(e.components);return a.a.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),b=u(t),m=r,d=b["".concat(c,".").concat(m)]||b[m]||p[m]||i;return t?a.a.createElement(d,s(s({ref:n},o),{},{components:t})):a.a.createElement(d,s({ref:n},o))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var o=2;o<i;o++)c[o]=t[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);