(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{270:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(6),s=(t(0),t(572)),o={id:"10.logout",title:"\u7528\u6237\u9000\u51fa",hide_title:!0},i={unversionedId:"security_Oauth2_JWT/10.logout",id:"security_Oauth2_JWT/10.logout",isDocsHomePage:!1,title:"\u7528\u6237\u9000\u51fa",description:"\u7528\u6237\u9000\u51fa",source:"@site/docs/security_Oauth2_JWT/10.\u9000\u51fa.md",slug:"/security_Oauth2_JWT/10.logout",permalink:"/docs/security_Oauth2_JWT/10.logout",version:"current",sidebar:"someSidebar",previous:{title:"RememberMe\u8bb0\u4f4f\u6211\u529f\u80fd",permalink:"/docs/security_Oauth2_JWT/9.rememberMe"},next:{title:"\u56fe\u7247\u9a8c\u8bc1\u7801",permalink:"/docs/security_Oauth2_JWT/11.imgCheckCode"}},c=[{value:"\u7528\u6237\u9000\u51fa",id:"\u7528\u6237\u9000\u51fa",children:[]},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",children:[]},{value:"Logout\u5b8c\u6210\u7684\u529f\u80fd",id:"logout\u5b8c\u6210\u7684\u529f\u80fd",children:[]},{value:"\u4e2a\u6027\u5316\u8bbe\u7f6e",id:"\u4e2a\u6027\u5316\u8bbe\u7f6e",children:[]},{value:"LogoutSuccessHandler",id:"logoutsuccesshandler",children:[]},{value:"\u9636\u6bb5\u4ee3\u7801\u603b\u7ed3",id:"\u9636\u6bb5\u4ee3\u7801\u603b\u7ed3",children:[{value:"Config",id:"config",children:[]},{value:"\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u54cd\u5e94\u5904\u7406",id:"\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u54cd\u5e94\u5904\u7406",children:[]},{value:"\u81ea\u5b9a\u4e49\u5f53\u524d\u7528\u6237\u5b9e\u4f53",id:"\u81ea\u5b9a\u4e49\u5f53\u524d\u7528\u6237\u5b9e\u4f53",children:[]},{value:"\u81ea\u5b9a\u4e49\u5f02\u5e38",id:"\u81ea\u5b9a\u4e49\u5f02\u5e38",children:[]},{value:"\u81ea\u5b9a\u4e49\u52a8\u6001\u67e5\u8be2\u6743\u9650",id:"\u81ea\u5b9a\u4e49\u52a8\u6001\u67e5\u8be2\u6743\u9650",children:[]},{value:"\u81ea\u5b9a\u4e49\u52a8\u6001\u8bbe\u7f6e\u7528\u6237\u89d2\u8272\u6743\u9650",id:"\u81ea\u5b9a\u4e49\u52a8\u6001\u8bbe\u7f6e\u7528\u6237\u89d2\u8272\u6743\u9650",children:[]},{value:"\u7edf\u4e00Ajax\u54cd\u5e94",id:"\u7edf\u4e00ajax\u54cd\u5e94",children:[]},{value:"Controller",id:"controller",children:[]},{value:"application.yaml",id:"applicationyaml",children:[]},{value:"\u6570\u636e\u5e93",id:"\u6570\u636e\u5e93",children:[{value:"\u6301\u4e45\u5316RememberMeToken",id:"\u6301\u4e45\u5316remembermetoken",children:[]},{value:"\u7528\u6237|\u89d2\u8272|\u6743\u9650",id:"\u7528\u6237\u89d2\u8272\u6743\u9650",children:[]}]},{value:"\u524d\u7aef",id:"\u524d\u7aef",children:[]}]}],l={rightToc:c};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"\u7528\u6237\u9000\u51fa"},"\u7528\u6237\u9000\u51fa"),Object(s.b)("h1",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@Override\nprotected void configure(final HttpSecurity http) throws Exception {\n    http.logout().and().remeberMe().....;\n}\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u524d\u7aef")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"\u5728\u5f00\u542fCSRF\u9632\u62a4\u7684\u60c5\u51b5\u4e0b\uff0c\u9700\u8981\u91c7\u7528POST\u65b9\u5f0f\u8bbf\u95ee\u8fd9\u4e2a\u8def\u5f84")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<a href="/logout">\u9000\u51fa\u767b\u5f55</a>\n')),Object(s.b)("hr",null),Object(s.b)("h1",{id:"logout\u5b8c\u6210\u7684\u529f\u80fd"},"Logout\u5b8c\u6210\u7684\u529f\u80fd"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u5f53\u524dsession\u5931\u6548\uff0c\u5373\uff1alogout\u7684\u6838\u5fc3\u9700\u6c42\uff0csession\u5931\u6548\u5c31\u662f\u8bbf\u95ee\u6743\u9650\u7684\u56de\u6536\u3002"),Object(s.b)("li",{parentName:"ul"},"\u5220\u9664\u5f53\u524d\u7528\u6237\u7684 remember-me\u201c\u8bb0\u4f4f\u6211\u201d\u529f\u80fd\u4fe1\u606f"),Object(s.b)("li",{parentName:"ul"},"clear\u6e05\u9664\u5f53\u524d\u7684 SecurityContext"),Object(s.b)("li",{parentName:"ul"},"\u91cd\u5b9a\u5411\u5230\u767b\u5f55\u9875\u9762\uff0c",Object(s.b)("inlineCode",{parentName:"li"},"loginPage"),"\u914d\u7f6e\u9879\u6307\u5b9a\u7684\u9875\u9762")),Object(s.b)("hr",null),Object(s.b)("h1",{id:"\u4e2a\u6027\u5316\u8bbe\u7f6e"},"\u4e2a\u6027\u5316\u8bbe\u7f6e"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),' http.logout()\n     .logoutUrl("/signout")\n     .logoutSuccessUrl("/aftersignout.html")\n     .deleteCookies("JSESSIONID")\n')),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u901a\u8fc7\u6307\u5b9alogoutUrl\u914d\u7f6e\u6539\u53d8\u9000\u51fa\u8bf7\u6c42\u7684\u9ed8\u8ba4\u8def\u5f84\uff0c\u5f53\u7136html\u9000\u51fa\u6309\u94ae\u7684\u8bf7\u6c42url\u4e5f\u8981\u4fee\u6539"),Object(s.b)("li",{parentName:"ul"},"\u901a\u8fc7\u6307\u5b9alogoutSuccessUrl\u914d\u7f6e\uff0c\u6765\u663e\u5f0f\u6307\u5b9a\u9000\u51fa\u4e4b\u540e\u7684\u8df3\u8f6c\u9875\u9762"),Object(s.b)("li",{parentName:"ul"},"\u8fd8\u53ef\u4ee5\u4f7f\u7528deleteCookies\u5220\u9664\u6307\u5b9a\u7684cookie\uff0c\u53c2\u6570\u4e3acookie\u7684\u540d\u79f0")),Object(s.b)("hr",null),Object(s.b)("h1",{id:"logoutsuccesshandler"},"LogoutSuccessHandler"),Object(s.b)("p",null,"\u5bf9\u4e8e\u9700\u8981\u5927\u91cf\u81ea\u5b9a\u4e49\u903b\u8f91\u7684\u573a\u666f"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Component\npublic class MyLogoutSuccessHandler implements LogoutSuccessHandler {\n    \n    @Override\n    public void onLogoutSuccess(HttpServletRequest request, \n                                HttpServletResponse response, \n                                Authentication authentication) \n                                throws IOException, ServletException {\n        //\u8fd9\u91cc\u4e66\u5199\u4f60\u81ea\u5df1\u7684\u9000\u51fa\u4e1a\u52a1\u903b\u8f91\n        \n        // \u91cd\u5b9a\u5411\u5230\u767b\u5f55\u9875\n        response.sendRedirect("/login.html");\n    }\n}\n')),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u5728\u914d\u7f6e\u4e2d\u4f7f\u5176\u751f\u6548")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Autowired\nprivate MyLogoutSuccessHandler myLogoutSuccessHandler;\n\n@Override\nprotected void configure(final HttpSecurity http) throws Exception {\n    http.logout()\n        .logoutUrl("/signout")\n        //.logoutSuccessUrl(``"/aftersignout.html"``)\n        .deleteCookies("JSESSIONID")\n        //\u81ea\u5b9a\u4e49logoutSuccessHandler\n        .logoutSuccessHandler(myLogoutSuccessHandler);   \n}\n')),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"logoutSuccessUrl\u4e0d\u8981\u4e0elogoutSuccessHandler\u4e00\u8d77\u4f7f\u7528\uff0c\u5426\u5219logoutSuccessHandler\u5c06\u5931\u6548\u3002")),Object(s.b)("hr",null),Object(s.b)("h1",{id:"\u9636\u6bb5\u4ee3\u7801\u603b\u7ed3"},"\u9636\u6bb5\u4ee3\u7801\u603b\u7ed3"),Object(s.b)("h2",{id:"config"},"Config"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Configuration\n@SuppressWarnings("all")\n@EnableGlobalMethodSecurity(prePostEnabled = true)\npublic class SecurityConfig extends WebSecurityConfigurerAdapter {\n\n    @Resource\n    private MyAuthenticationSuccessHandler myAuthenticationSuccessHandler;\n\n    @Resource\n    private MyAuthenticationFaliureHandler myAuthenticationFaliureHandler;\n\n    @Resource\n    private MyUserDetialService myUserDetialService;\n\n    @Resource\n    private DataSource dataSource;\n\n    @Override\n    protected void configure(HttpSecurity http) throws Exception {\n        http.logout()\n                .and()\n\n                .rememberMe()\n                .tokenRepository(persistentTokenRepository())\n                .and()\n\n                .csrf().disable() //\u7981\u7528\u8de8\u7ad9csrf\u653b\u51fb\u9632\u5fa1\uff0c\u540e\u9762\u7684\u7ae0\u8282\u4f1a\u4e13\u95e8\u8bb2\u89e3\n                .formLogin()\n                .loginPage("/login.html")//\u7528\u6237\u672a\u767b\u5f55\u65f6\uff0c\u8bbf\u95ee\u4efb\u4f55\u8d44\u6e90\u90fd\u8f6c\u8df3\u5230\u8be5\u8def\u5f84\uff0c\u5373\u767b\u5f55\u9875\u9762\n                .loginProcessingUrl("/login")//\u767b\u5f55\u8868\u5355form\u4e2daction\u7684\u5730\u5740\uff0c\u4e5f\u5c31\u662f\u5904\u7406\u8ba4\u8bc1\u8bf7\u6c42\u7684\u8def\u5f84\n                .usernameParameter("username")///\u767b\u5f55\u8868\u5355form\u4e2d\u7528\u6237\u540d\u8f93\u5165\u6846input\u7684name\u540d\uff0c\u4e0d\u4fee\u6539\u7684\u8bdd\u9ed8\u8ba4\u662fusername\n                .passwordParameter("password")//form\u4e2d\u5bc6\u7801\u8f93\u5165\u6846input\u7684name\u540d\uff0c\u4e0d\u4fee\u6539\u7684\u8bdd\u9ed8\u8ba4\u662fpassword\n//                .defaultSuccessUrl("/index")//\u767b\u5f55\u8ba4\u8bc1\u6210\u529f\u540e\u9ed8\u8ba4\u8f6c\u8df3\u7684\u8def\u5f84\n                .successHandler(myAuthenticationSuccessHandler)\n                .failureHandler(myAuthenticationFaliureHandler)\n                .and()\n\n                .authorizeRequests()\n                .antMatchers("/login.html", "/login").permitAll()//\u4e0d\u9700\u8981\u901a\u8fc7\u767b\u5f55\u9a8c\u8bc1\u5c31\u53ef\u4ee5\u88ab\u8bbf\u95ee\u7684\u8d44\u6e90\u8def\u5f84\n                .antMatchers("/index", "/").authenticated()// \u9996\u9875\u53ea\u8981\u767b\u5f55\u4e86\u5c31\u53ef\u4ee5\u8bbf\u95ee\n                .anyRequest().access("@rbacService.hasPermission(request, authentication)")\n                /*   .antMatchers("/biz1", "/biz2") //\u9700\u8981\u5bf9\u5916\u66b4\u9732\u7684\u8d44\u6e90\u8def\u5f84\n                   .hasAnyAuthority("ROLE_user", "ROLE_admin")  //user\u89d2\u8272\u548cadmin\u89d2\u8272\u90fd\u53ef\u4ee5\u8bbf\u95ee\n   //                .antMatchers("/syslog", "/sysuser")\n   //                .hasAnyRole("admin")  //admin\u89d2\u8272\u53ef\u4ee5\u8bbf\u95ee\n                   .antMatchers("/syslog").hasAuthority("/syslog")\n                   .antMatchers("/sysuser").hasAuthority("/sysuser")\n                  .anyRequest().authenticated();*/\n        ;\n    }\n\n    @Override\n    protected void configure(AuthenticationManagerBuilder auth) throws Exception {\n//        auth.inMemoryAuthentication()\n//                .withUser("user")\n//                .password(passwordEncoder().encode("123456"))\n//                .roles("user")\n//                .and()\n//                .withUser("admin")\n//                .password(passwordEncoder().encode("123456"))\n//                //.authorities("sys:log","sys:user")\n//                .roles("admin")\n//                .and()\n//                .passwordEncoder(passwordEncoder());//\u914d\u7f6eBCrypt\u52a0\u5bc6\n        auth.userDetailsService(myUserDetialService)\n                .passwordEncoder(passwordEncoder());\n    }\n\n    @Bean\n    public PasswordEncoder passwordEncoder() {\n        return new BCryptPasswordEncoder();\n    }\n\n    @Bean\n    public PersistentTokenRepository persistentTokenRepository() {\n        JdbcTokenRepositoryImpl tokenRepository = new JdbcTokenRepositoryImpl();\n        tokenRepository.setDataSource(dataSource);\n        return tokenRepository;\n    }\n\n    @Override\n    public void configure(WebSecurity web) throws Exception {\n        //\u5c06\u9879\u76ee\u4e2d\u9759\u6001\u8d44\u6e90\u8def\u5f84\u5f00\u653e\u51fa\u6765\n        web.ignoring().antMatchers("/css/**", "/fonts/**", "/img/**", "/js/**");\n    }\n}\n')),Object(s.b)("h2",{id:"\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u54cd\u5e94\u5904\u7406"},"\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u54cd\u5e94\u5904\u7406"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Component\npublic class MyAuthenticationFaliureHandler extends SimpleUrlAuthenticationFailureHandler {\n    //\u5728application\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u767b\u9646\u7684\u7c7b\u578b\u662fJSON\u6570\u636e\u54cd\u5e94\u8fd8\u662f\u505a\u9875\u9762\u54cd\u5e94\n    @Value("${spring.security.loginType}")\n    private String loginType;\n\n    private static ObjectMapper objectMapper = new ObjectMapper();\n\n    @Override\n    public void onAuthenticationFailure(HttpServletRequest request,\n                                        HttpServletResponse response,\n                                        AuthenticationException exception)\n            throws IOException, ServletException {\n\n        if (loginType.equalsIgnoreCase("JSON")) {\n            response.setContentType("application/json;charset=UTF-8");\n            response.getWriter().write(\n                    objectMapper.writeValueAsString(\n                            AjaxResponse.error(\n                                    new CustomException(\n                                            CustomExceptionType.USER_INPUT_ERROR,\n                                            "\u7528\u6237\u540d\u6216\u5bc6\u7801\u5b58\u5728\u9519\u8bef\uff0c\u8bf7\u68c0\u67e5\u540e\u518d\u6b21\u767b\u5f55"))));\n        } else {\n            response.setContentType("text/html;charset=UTF-8");\n            super.onAuthenticationFailure(request, response, exception);\n        }\n    }\n}\n')),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Component\npublic class MyAuthenticationSuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler {\n\n    //\u5728application\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u767b\u9646\u7684\u7c7b\u578b\u662fJSON\u6570\u636e\u54cd\u5e94\u8fd8\u662f\u505a\u9875\u9762\u54cd\u5e94\n    @Value("${spring.security.loginType}")\n    private String loginType;\n\n    private  static ObjectMapper objectMapper = new ObjectMapper();\n\n    @Override\n    public void onAuthenticationSuccess(HttpServletRequest request,\n                                        HttpServletResponse response,\n                                        Authentication authentication)\n            throws ServletException, IOException {\n\n        if (loginType.equalsIgnoreCase("JSON")) {\n            response.setContentType("application/json;charset=UTF-8");\n            response.getWriter().write(objectMapper.writeValueAsString(AjaxResponse.success("/index")));\n        } else {\n            // \u4f1a\u5e2e\u6211\u4eec\u8df3\u8f6c\u5230\u4e0a\u4e00\u6b21\u8bf7\u6c42\u7684\u9875\u9762\u4e0a\n            super.onAuthenticationSuccess(request, response, authentication);\n        }\n    }\n}\n')),Object(s.b)("h2",{id:"\u81ea\u5b9a\u4e49\u5f53\u524d\u7528\u6237\u5b9e\u4f53"},"\u81ea\u5b9a\u4e49\u5f53\u524d\u7528\u6237\u5b9e\u4f53"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public class MyUserDetails implements UserDetails {\n    String password;  //\u5bc6\u7801\n    String username;  //\u7528\u6237\u540d\n    boolean accountNonExpired;   //\u662f\u5426\u6ca1\u8fc7\u671f\n    boolean accountNonLocked;   //\u662f\u5426\u6ca1\u88ab\u9501\u5b9a\n    boolean credentialsNonExpired;  //\u662f\u5426\u6ca1\u8fc7\u671f\n    boolean enabled;  //\u8d26\u53f7\u662f\u5426\u53ef\u7528\n    Collection<? extends GrantedAuthority> authorities;  //\u7528\u6237\u7684\u6743\u9650\u96c6\u5408\n\n    @Override\n    public Collection<? extends GrantedAuthority> getAuthorities() {\n        return authorities;\n    }\n\n    @Override\n    public String getPassword() {\n        return this.password;\n    }\n\n    @Override\n    public String getUsername() {\n        return this.username;\n    }\n\n    @Override\n    public boolean isAccountNonExpired() {\n        return true;\n    }\n\n    @Override\n    public boolean isAccountNonLocked() {\n        return true;\n    }\n\n    @Override\n    public boolean isCredentialsNonExpired() {\n        return true;\n    }\n\n    @Override\n    public boolean isEnabled() {\n        return enabled;\n    }\n\n    public void setPassword(String password) {\n        this.password = password;\n    }\n\n    public void setUsername(String username) {\n        this.username = username;\n    }\n\n    public void setAccountNonExpired(boolean accountNonExpired) {\n        this.accountNonExpired = accountNonExpired;\n    }\n\n    public void setAccountNonLocked(boolean accountNonLocked) {\n        this.accountNonLocked = accountNonLocked;\n    }\n\n    public void setCredentialsNonExpired(boolean credentialsNonExpired) {\n        this.credentialsNonExpired = credentialsNonExpired;\n    }\n\n    public void setEnabled(boolean enabled) {\n        this.enabled = enabled;\n    }\n\n    public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {\n        this.authorities = authorities;\n    }\n}\n")),Object(s.b)("h2",{id:"\u81ea\u5b9a\u4e49\u5f02\u5e38"},"\u81ea\u5b9a\u4e49\u5f02\u5e38"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public enum CustomExceptionType {\n    USER_INPUT_ERROR(400, "\u7528\u6237\u8f93\u5165\u5f02\u5e38"),\n    SYSTEM_ERROR(500, "\u7cfb\u7edf\u670d\u52a1\u5f02\u5e38"),\n    OTHER_ERROR(999, "\u5176\u4ed6\u672a\u77e5\u5f02\u5e38");\n\n    CustomExceptionType(int code, String typeDesc) {\n        this.code = code;\n        this.typeDesc = typeDesc;\n    }\n\n    private String typeDesc;//\u5f02\u5e38\u7c7b\u578b\u4e2d\u6587\u63cf\u8ff0\n\n    private int code; //code\n\n    public String getTypeDesc() {\n        return typeDesc;\n    }\n\n    public int getCode() {\n        return code;\n    }\n}\n')),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public class CustomException extends RuntimeException {\n    //\u5f02\u5e38\u9519\u8bef\u7f16\u7801\n    private int code ;\n    //\u5f02\u5e38\u4fe1\u606f\n    private String message;\n\n    private CustomException(){}\n\n    public CustomException(CustomExceptionType exceptionTypeEnum, \n                           String message) {\n        this.code = exceptionTypeEnum.getCode();\n        this.message = message;\n    }\n\n    public int getCode() {\n        return code;\n    }\n\n    @Override\n    public String getMessage() {\n        return message;\n    }\n}\n")),Object(s.b)("h2",{id:"\u81ea\u5b9a\u4e49\u52a8\u6001\u67e5\u8be2\u6743\u9650"},"\u81ea\u5b9a\u4e49\u52a8\u6001\u67e5\u8be2\u6743\u9650"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Service("rbacService")\npublic class MyRBACService {\n\n    @Resource\n    MyRBACServiceMapper myRBACServiceMapper;\n\n    /**\n     * \u5224\u65ad\u67d0\u7528\u6237\u662f\u5426\u5177\u6709\u8be5request\u8d44\u6e90\u7684\u8bbf\u95ee\u6743\u9650\n     */\n    public boolean hasPermission(HttpServletRequest request, Authentication authentication) {\n        // \u83b7\u53d6\u9a8c\u8bc1\u4e3b\u4f53\uff0c\u5c31\u662fMyUserDetails\n        Object principal = authentication.getPrincipal();\n        if (principal instanceof UserDetails) {\n            UserDetails userDetails = ((UserDetails)principal);\n            List<GrantedAuthority> authorityList =\n                    AuthorityUtils.commaSeparatedStringToAuthorityList(request.getRequestURI());\n            return userDetails.getAuthorities().contains(authorityList.get(0));\n        }\n        return false;\n    }\n}\n')),Object(s.b)("h2",{id:"\u81ea\u5b9a\u4e49\u52a8\u6001\u8bbe\u7f6e\u7528\u6237\u89d2\u8272\u6743\u9650"},"\u81ea\u5b9a\u4e49\u52a8\u6001\u8bbe\u7f6e\u7528\u6237\u89d2\u8272\u6743\u9650"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Service\npublic class MyUserDetialService implements UserDetailsService {\n\n    @Resource\n    private MyUserDetailsServiceMapper userDetailsServiceMapper;\n\n    /***\n     * 1. \u52a0\u8f7d\u7528\u6237\u57fa\u672c\u4fe1\u606f\n     * 2. \u52a0\u8f7d\u7528\u6237\u89d2\u8272\u5217\u8868\n     * 3. \u901a\u8fc7\u7528\u6237\u89d2\u8272\u5217\u8868\u52a0\u8f7d\u7528\u6237\u7684\u8d44\u6e90\u6743\u9650\u5217\u8868\n     * @param username \u7528\u6237\u540d\n     * @return \u4ece\u6570\u636e\u5e93\u67e5\u51fa\u6765\u7684\u7528\u6237\u4fe1\u606f\n     * @throws UsernameNotFoundException\n     */\n    @Override\n    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {\n        //\u83b7\u5f97\u7528\u6237\u4fe1\u606f\n        MyUserDetails myUserDetails = userDetailsServiceMapper.findByUserName(username);\n\n        if (myUserDetails == null) {\n            throw new UsernameNotFoundException("\u7528\u6237\u4e0d\u5b58\u5728");\n        }\n        //\u83b7\u5f97\u7528\u6237\u89d2\u8272\u5217\u8868\n        List<String> roleCodes = userDetailsServiceMapper.findRoleByUserName(username);\n        //\u901a\u8fc7\u89d2\u8272\u5217\u8868\u83b7\u53d6\u6743\u9650\u5217\u8868\n        List<String> authority = userDetailsServiceMapper.findAuthorityByRoleCodes(roleCodes);\n        // \u89d2\u8272\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u6743\u9650\n        //\u4e3a\u89d2\u8272\u6807\u8bc6\u52a0\u4e0aROLE_\u524d\u7f00\uff08Spring Security\u89c4\u8303\uff09\n        roleCodes = roleCodes.stream()\n                .map(roleCode -> "ROLE_" + roleCode)\n                .collect(Collectors.toList());\n        //\u89d2\u8272\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u6743\u9650\uff0c\u6240\u4ee5\u5408\u5e76\n        authority.addAll(roleCodes);\n        //\u8f6c\u6210\u7528\u9017\u53f7\u5206\u9694\u7684\u5b57\u7b26\u4e32\uff0c\u4e3a\u7528\u6237\u8bbe\u7f6e\u6743\u9650\u6807\u8bc6\n        myUserDetails.setAuthorities(\n                AuthorityUtils.commaSeparatedStringToAuthorityList(\n                        String.join(",", authority)\n                )\n        );\n        return myUserDetails;\n    }\n}\n')),Object(s.b)("h2",{id:"\u7edf\u4e00ajax\u54cd\u5e94"},"\u7edf\u4e00Ajax\u54cd\u5e94"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'/**\n * \u63a5\u53e3\u6570\u636e\u8bf7\u6c42\u7edf\u4e00\u54cd\u5e94\u6570\u636e\u7ed3\u6784\n */\n@Data\npublic class AjaxResponse {\n\n  private  boolean isok;\n  private  int code;\n  private  String message;\n  private  Object data;\n\n  private AjaxResponse() {}\n\n  //\u8bf7\u6c42\u51fa\u73b0\u5f02\u5e38\u65f6\u7684\u54cd\u5e94\u6570\u636e\u5c01\u88c5\n  public static AjaxResponse error(CustomException e) {\n    AjaxResponse resultBean = new AjaxResponse();\n    resultBean.setIsok(false);\n    resultBean.setCode(e.getCode());\n    if(e.getCode() == CustomExceptionType.USER_INPUT_ERROR.getCode()){\n      resultBean.setMessage(e.getMessage());\n    }else if(e.getCode() == CustomExceptionType.SYSTEM_ERROR.getCode()){\n      resultBean.setMessage(e.getMessage() + ",\u8bf7\u5c06\u8be5\u5f02\u5e38\u4fe1\u606f\u53d1\u9001\u7ed9\u7ba1\u7406\u5458!");\n    }else{\n      resultBean.setMessage("\u7cfb\u7edf\u51fa\u73b0\u672a\u77e5\u5f02\u5e38\uff0c\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458!");\n    }\n    //TODO \u8fd9\u91cc\u6700\u597d\u5c06\u5f02\u5e38\u4fe1\u606f\u6301\u4e45\u5316\n    return resultBean;\n  }\n\n  //\u8bf7\u6c42\u51fa\u73b0\u5f02\u5e38\u65f6\u7684\u54cd\u5e94\u6570\u636e\u5c01\u88c5\n  public static AjaxResponse error(CustomExceptionType customExceptionType,\n                                   String errorMessage) {\n    AjaxResponse resultBean = new AjaxResponse();\n    resultBean.setIsok(false);\n    resultBean.setCode(customExceptionType.getCode());\n    resultBean.setMessage(errorMessage);\n    return resultBean;\n  }\n\n  //\u8bf7\u6c42\u5904\u7406\u6210\u529f\u65f6\u7684\u6570\u636e\u54cd\u5e94\n  public static AjaxResponse success() {\n    AjaxResponse resultBean = new AjaxResponse();\n    resultBean.setIsok(true);\n    resultBean.setCode(200);\n    resultBean.setMessage("success");\n    return resultBean;\n  }\n\n  //\u8bf7\u6c42\u5904\u7406\u6210\u529f\uff0c\u5e76\u54cd\u5e94\u7ed3\u679c\u6570\u636e\n  public  static AjaxResponse success(Object data) {\n    AjaxResponse resultBean = AjaxResponse.success();\n    resultBean.setData(data);\n    return resultBean;\n  }\n}\n')),Object(s.b)("h2",{id:"controller"},"Controller"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Controller\npublic class BizpageController {\n\n    @Resource\n    MethodELService methodELDemo;\n\n//    @PostMapping("/login")\n//    public String login(String username, String password) {\n//        return "index";\n//    }\n\n    @GetMapping({"/index", "/"})\n    public String index() {\n        return "index";\n    }\n\n    @GetMapping("/syslog")\n    public String syslog() {\n        return "syslog";\n    }\n\n    @GetMapping("/sysuser")\n    public String sysuser() {\n        return "sysuser";\n    }\n\n    @GetMapping("/biz1")\n    public String biz1() {\n//        List<PersonDemo> allPD = methodELDemo.findAll();\n        return "biz1";\n    }\n\n    @GetMapping("/biz2")\n    public String biz2() {\n        return "biz2";\n    }\n}\n')),Object(s.b)("h2",{id:"applicationyaml"},"application.yaml"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"spring:\n  freemarker:\n    cache: false # \u7f13\u5b58\u914d\u7f6e \u5f00\u53d1\u9636\u6bb5\u5e94\u8be5\u914d\u7f6e\u4e3afalse \u56e0\u4e3a\u7ecf\u5e38\u4f1a\u6539\n    suffix: .html # \u6a21\u7248\u540e\u7f00\u540d \u9ed8\u8ba4\u4e3aftl  / \u8fd8\u662f\u7528ftl\u5427\uff0chtml\u6ca1freemarker\u8bed\u6cd5\u63d0\u793a\n    charset: UTF-8 # \u6587\u4ef6\u7f16\u7801\n    template-loader-path: classpath:/templates/\n\n  datasource:\n    username: root\n    password: root\n    #?serverTimezone=UTC\u89e3\u51b3\u65f6\u533a\u7684\u62a5\u9519\n    url: jdbc:mysql://localhost:3306/oauth?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8\n    driver-class-name: com.mysql.jdbc.Driver\n    type: com.alibaba.druid.pool.DruidDataSource # \u914d\u7f6e\u4f7f\u7528Druid\u6570\u636e\u6e90\n\n    #Spring Boot \u9ed8\u8ba4\u662f\u4e0d\u6ce8\u5165\u8fd9\u4e9b\u5c5e\u6027\u503c\u7684\uff0c\u9700\u8981\u81ea\u5df1\u7ed1\u5b9a\n    #druid \u6570\u636e\u6e90\u4e13\u6709\u914d\u7f6e\n    initialSize: 5\n    minIdle: 5\n    maxActive: 20\n    maxWait: 60000\n    timeBetweenEvictionRunsMillis: 60000\n    minEvictableIdleTimeMillis: 300000\n    validationQuery: SELECT 1 FROM DUAL\n    testWhileIdle: true\n    testOnBorrow: false\n    testOnReturn: false\n    poolPreparedStatements: true\n\n    #\u914d\u7f6e\u76d1\u63a7\u7edf\u8ba1\u62e6\u622a\u7684filters\uff0cstat:\u76d1\u63a7\u7edf\u8ba1\u3001log4j\uff1a\u65e5\u5fd7\u8bb0\u5f55\u3001wall\uff1a\u9632\u5fa1sql\u6ce8\u5165\n    #\u5982\u679c\u5141\u8bb8\u65f6\u62a5\u9519  java.lang.ClassNotFoundException: org.apache.log4j.Priority\n    #\u5219\u5bfc\u5165 log4j \u4f9d\u8d56\u5373\u53ef\uff0cMaven \u5730\u5740\uff1attps://mvnrepository.com/artifact/log4j/log4j\n    filters: stat,wall,log4j\n    maxPoolPreparedStatementPerConnectionSize: 20\n    useGlobalDataSourceStat: true\n    connectionProperties: druid.stat.mergeSql=true;druid.stat.slowSqlMillis=500\n\n  security:\n    loginType: JSON\n# \u914d\u7f6eMybatis\n# \u4e5f\u53ef\u4ee5\u4e0d\u914d\u7f6e\uff0c\u4f7f\u7528\u5168\u9650\u5b9a\u7c7b\u540d\uff0c\u7136\u540e\u5728resources\u8def\u5f84\u4e0b\u5efa\u7acb\u548cmapper\u63a5\u53e3\u4e00\u6837\u7684\u5305\u8def\u5f84\nmybatis:\n  #  type-aliases-package: com.bsx.shiro.pojo # \u522b\u540d\n  mapper-locations: classpath:mapper/*.xml # \u626b\u63cfmapper.xml\u6587\u4ef6\u8def\u5f84\n\nserver:\n  port: 8081\n")),Object(s.b)("h2",{id:"\u6570\u636e\u5e93"},"\u6570\u636e\u5e93"),Object(s.b)("h3",{id:"\u6301\u4e45\u5316remembermetoken"},"\u6301\u4e45\u5316RememberMeToken"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE `persistent_logins` (\n  `username` varchar(64) NOT NULL,\n  `series` varchar(64) NOT NULL,\n  `token` varchar(64) NOT NULL,\n  `last_used` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n  PRIMARY KEY (`series`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n")),Object(s.b)("h3",{id:"\u7528\u6237\u89d2\u8272\u6743\u9650"},"\u7528\u6237|\u89d2\u8272|\u6743\u9650"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("strong",{parentName:"p"},"\u770b\u7b2c5\u8282\u2014\u2014RBAC"))),Object(s.b)("h2",{id:"\u524d\u7aef"},"\u524d\u7aef"),Object(s.b)("p",null,"\u8bb0\u5f97\u5728CSRF\u9632\u5fa1\u6a21\u5f0f\u4e0b\uff0c\u5fc5\u987b\u4f7f\u7528POST\u8bf7\u6c42\u65b9\u5f0f\u63d0\u4ea4\u767b\u5f55\u548c\u767b\u51fa\u5373\u53ef"))}u.isMDXComponent=!0},572:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||s;return t?a.a.createElement(m,i(i({ref:n},l),{},{components:t})):a.a.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=b;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);