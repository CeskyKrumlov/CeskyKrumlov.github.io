(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{207:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return s})),r.d(n,"metadata",(function(){return o})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return u}));var t=r(2),a=r(6),i=(r(0),r(548)),s={id:"6.dynamicUserPerm",title:"\u4ece\u6570\u636e\u5e93\u52a8\u6001\u52a0\u8f7d\u7528\u6237\u6743\u9650",hide_title:!0},o={unversionedId:"security_Oauth2_JWT/6.dynamicUserPerm",id:"security_Oauth2_JWT/6.dynamicUserPerm",isDocsHomePage:!1,title:"\u4ece\u6570\u636e\u5e93\u52a8\u6001\u52a0\u8f7d\u7528\u6237\u6743\u9650",description:"\u4ece\u6570\u636e\u5e93\u52a8\u6001\u52a0\u8f7d\u7528\u6237\u6743\u9650",source:"@site/docs/security_Oauth2_JWT/6.\u52a8\u6001\u52a0\u8f7d\u7528\u6237\u6743\u9650.md",slug:"/security_Oauth2_JWT/6.dynamicUserPerm",permalink:"/docs/security_Oauth2_JWT/6.dynamicUserPerm",version:"current",sidebar:"someSidebar",previous:{title:"RBAC\u6743\u9650\u7ba1\u7406\u6a21\u578b",permalink:"/docs/security_Oauth2_JWT/5.rbac"},next:{title:"\u52a8\u6001\u52a0\u8f7d\u8d44\u6e90\u9274\u6743\u89c4\u5219",permalink:"/docs/security_Oauth2_JWT/7.dynamicUrl"}},c=[{value:"\u4ece\u6570\u636e\u5e93\u52a8\u6001\u52a0\u8f7d\u7528\u6237\u6743\u9650",id:"\u4ece\u6570\u636e\u5e93\u52a8\u6001\u52a0\u8f7d\u7528\u6237\u6743\u9650",children:[{value:"\u5b9e\u73b0\u4e24\u4e2a\u63a5\u53e3",id:"\u5b9e\u73b0\u4e24\u4e2a\u63a5\u53e3",children:[{value:"UserDetailsService",id:"userdetailsservice",children:[]},{value:"UserDetails",id:"userdetails",children:[]}]},{value:"Mybatis",id:"mybatis",children:[]},{value:"Service",id:"service",children:[]},{value:"\u5728Spring Security\u8fdb\u884c\u914d\u7f6e",id:"\u5728spring-security\u8fdb\u884c\u914d\u7f6e",children:[]}]}],l={rightToc:c};function u(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u4ece\u6570\u636e\u5e93\u52a8\u6001\u52a0\u8f7d\u7528\u6237\u6743\u9650"},"\u4ece\u6570\u636e\u5e93\u52a8\u6001\u52a0\u8f7d\u7528\u6237\u6743\u9650"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u67e5\u8be2\u7528\u6237\u540d\u3001\u5bc6\u7801\u3001\u7528\u6237\u72b6\u6001")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sql"}),"SELECT username, password, enabled\nFROM sys_user u\nWHERE u.username = 'admin'\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u67e5\u8be2\u76ee\u6807\u7528\u6237\u7684",Object(i.b)("strong",{parentName:"li"},"\u89d2\u8272"))),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sql"}),"SELECT r.role_code\nFROM sys_role r\nLEFT JOIN sys_user_role ur ON r.id = ur.role_id\nLEFT JOIN sys_user u ON u.id = ur.user_id\nWHERE u.username = 'admin'\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u67e5\u8be2\u76ee\u6807",Object(i.b)("strong",{parentName:"li"},"\u89d2\u8272"),"\u53ef\u8bbf\u95ee\u7684\u6240\u6709",Object(i.b)("strong",{parentName:"li"},"url\u5730\u5740\uff0c\u5373\u6743\u9650"))),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sql"}),"SELECT m.url\nFROM sys_menu m\nLEFT JOIN sys_role_menu rm ON m.id = rm.menu_id\nLEFT JOIN sys_role r ON r.id = rm.role_id\nWHERE r.role_code IN ('admin')\n")),Object(i.b)("h2",{id:"\u5b9e\u73b0\u4e24\u4e2a\u63a5\u53e3"},"\u5b9e\u73b0\u4e24\u4e2a\u63a5\u53e3"),Object(i.b)("h3",{id:"userdetailsservice"},"UserDetailsService"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"loadUserByUsername"),"\u65b9\u6cd5"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u901a\u8fc7\u7528\u6237\u540d\u52a0\u8f7d\u7528\u6237"),Object(i.b)("li",{parentName:"ul"},"\u8fd4\u56de\u503c\u7c7b\u578b\u4e3a",Object(i.b)("inlineCode",{parentName:"li"},"UserDetails")))),Object(i.b)("h3",{id:"userdetails"},"UserDetails"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u7528\u6237\u4fe1\u606f\uff1a\u5373\u7528\u6237\u540d\u3001\u5bc6\u7801\u3001\u7528\u6237\u6743\u9650")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"public interface UserDetails extends Serializable {\n    // \u7528\u6237\u6743\u9650\u96c6\u5408\n    Collection<? extends GrantedAuthority> getAuthorities();\n    // \u5bc6\u7801\n    String getPassword();\n    // \u7528\u6237\u540d\n    String getUsername();\n    // \u8d26\u53f7\u662f\u5426\u8fc7\u671f\n    boolean isAccountNonExpired();\n    // \u8d26\u53f7\u662f\u5426\u88ab\u9501\u5b9a\n    boolean isAccountNonLocked();\n    // \u5bc6\u7801\u662f\u5426\u8fc7\u671f\n    boolean isCredentialsNonExpired();\n    // \u8d26\u6237\u662f\u5426\u53ef\u7528\n    boolean isEnabled();\n}\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u5b9e\u73b0\u8fd9\u4e2a\u63a5\u53e3\uff0c\u4ece\u6570\u636e\u5e93\u8bfb\u53d6\u6570\u636e")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u81ea\u5df1\u5b9a\u4e49\u4e00\u4e9b\u6210\u5458\u53d8\u91cf"),Object(i.b)("li",{parentName:"ul"},"\u81ea\u5df1\u5b9a\u4e49setter\u65b9\u6cd5\uff0c\u7528\u6765\u4ece\u6570\u636e\u8bfb\u53d6\u5e76\u8bbe\u7f6e\u8fd9\u4e9b\u503c")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"public class MyUserDetails implements UserDetails {\n    String password;  //\u5bc6\u7801\n    String username;  //\u7528\u6237\u540d\n    boolean accountNonExpired;   //\u662f\u5426\u6ca1\u8fc7\u671f\n    boolean accountNonLocked;   //\u662f\u5426\u6ca1\u88ab\u9501\u5b9a\n    boolean credentialsNonExpired;  //\u662f\u5426\u6ca1\u8fc7\u671f\n    boolean enabled;  //\u8d26\u53f7\u662f\u5426\u53ef\u7528\n    Collection<? extends GrantedAuthority> authorities;  //\u7528\u6237\u7684\u6743\u9650\u96c6\u5408\n    \n    @Override\n    public Collection<? extends GrantedAuthority> getAuthorities() {\n        return authorities;\n    }\n\n    @Override\n    public String getPassword() {\n        return this.password;\n    }\n\n    @Override\n    public String getUsername() {\n        return this.username;\n    }\n\n    @Override\n    public boolean isAccountNonExpired() {\n        return true;\n    }\n\n    @Override\n    public boolean isAccountNonLocked() {\n        return true;\n    }\n\n    @Override\n    public boolean isCredentialsNonExpired() {\n        return true;\n    }\n\n    @Override\n    public boolean isEnabled() {\n        return enabled;\n    }\n\n    public void setPassword(String password) {\n        this.password = password;\n    }\n\n    public void setUsername(String username) {\n        this.username = username;\n    }\n\n    public void setAccountNonExpired(boolean accountNonExpired) {\n        this.accountNonExpired = accountNonExpired;\n    }\n\n    public void setAccountNonLocked(boolean accountNonLocked) {\n        this.accountNonLocked = accountNonLocked;\n    }\n\n    public void setCredentialsNonExpired(boolean credentialsNonExpired) {\n        this.credentialsNonExpired = credentialsNonExpired;\n    }\n\n    public void setEnabled(boolean enabled) {\n        this.enabled = enabled;\n    }\n\n    public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {\n        this.authorities = authorities;\n    }\n}\n")),Object(i.b)("h2",{id:"mybatis"},"Mybatis"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'public interface MyUserDetailsServiceMapper {\n\n    //\u6839\u636euserID\u67e5\u8be2\u7528\u6237\u4fe1\u606f\n    @Select("SELECT username,password,enabled\\n" +\n            "FROM sys_user u\\n" +\n            "WHERE u.username = #{userId}")\n    MyUserDetails findByUserName(@Param("userId") String userId);\n\n    //\u6839\u636euserID\u67e5\u8be2\u7528\u6237\u89d2\u8272\n    @Select("SELECT role_code\\n" +\n            "FROM sys_role r\\n" +\n            "LEFT JOIN sys_user_role ur ON r.id = ur.role_id\\n" +\n            "LEFT JOIN sys_user u ON u.id = ur.user_id\\n" +\n            "WHERE u.username = #{userId}")\n    List<String> findRoleByUserName(@Param("userId") String userId);\n\n    //\u6839\u636e\u7528\u6237\u89d2\u8272\u67e5\u8be2\u7528\u6237\u6743\u9650\n    @Select({\n      "<script>",\n         "SELECT url " ,\n         "FROM sys_menu m " ,\n         "LEFT JOIN sys_role_menu rm ON m.id = rm.menu_id " ,\n         "LEFT JOIN sys_role r ON r.id = rm.role_id ",\n         "WHERE r.role_code IN ",\n         "<foreach collection=\'roleCodes\' item=\'roleCode\' open=\'(\' separator=\',\' close=\')\'>",\n            "#{roleCode}",\n         "</foreach>",\n      "<\/script>"\n    })\n    List<String> findAuthorityByRoleCodes(@Param("roleCodes") List<String> roleCodes);\n}\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u542f\u52a8\u7c7b\u6dfb\u52a0MapperScan\u6ce8\u89e3\uff0c\u5f00\u542fMapper\u626b\u63cf")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'@MapperScan("com.bsx.securityoauth2")\npublic class Securityoauth2Application { ...}\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u4f7f\u7528\u6d4b\u8bd5\u7c7b\uff0c\u5f97\u5230\u5bc6\u7801\u7684\u52a0\u5bc6\u5bc6\u6587\uff0c\u5b58\u5230\u6570\u636e\u5e93\u4e2d")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'@SpringBootTest\nclass Securityoauth2ApplicationTests {\n\n    @Resource\n    PasswordEncoder passwordEncoder;\n\n    @Test\n    void contextLoads() {\n        System.out.println(passwordEncoder.encode("123456"));\n    }\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"$2a$10$7lUUrndidqCWodinan7V3.OvXjO795PpuAlb86vj8G5OSvUNWahSm\n")),Object(i.b)("h2",{id:"service"},"Service"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u5b9e\u73b0UserDetailservice\u63a5\u53e3")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u5bf9\u4e8eloadUserByUsername\u65b9\u6cd5\u9891\u7e41\u8bbf\u95ee\u6570\u636e\u5e93\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u7684\u60c5\u51b5\uff0c\u53ef\u4ee5\u91c7\u7528Spring Cache\u7f13\u5b58\u6765\u5904\u7406")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u63a5\u53e3\u5b9a\u4e49")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"public interface UserDetailsService {\n    UserDetails loadUserByUsername(String var1) throws UsernameNotFoundException;\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'@Service\npublic class MyUserDetialService implements UserDetailsService {\n\n    @Resource\n    private MyUserDetailsServiceMapper userDetailsServiceMapper;\n\n    /***\n     * 1. \u52a0\u8f7d\u7528\u6237\u57fa\u672c\u4fe1\u606f\n     * 2. \u52a0\u8f7d\u7528\u6237\u89d2\u8272\u5217\u8868\n     * 3. \u901a\u8fc7\u7528\u6237\u89d2\u8272\u5217\u8868\u52a0\u8f7d\u7528\u6237\u7684\u8d44\u6e90\u6743\u9650\u5217\u8868\n     * @param username \u7528\u6237\u540d\n     * @return \u4ece\u6570\u636e\u5e93\u67e5\u51fa\u6765\u7684\u7528\u6237\u4fe1\u606f\n     * @throws UsernameNotFoundException\n     */\n    @Override\n    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {\n        //\u83b7\u5f97\u7528\u6237\u4fe1\u606f\n        MyUserDetails myUserDetails = userDetailsServiceMapper.findByUserName(username);\n\n        if (myUserDetails == null) {\n            throw new UsernameNotFoundException("\u7528\u6237\u4e0d\u5b58\u5728");\n        }\n        //\u83b7\u5f97\u7528\u6237\u89d2\u8272\u5217\u8868\n        List<String> roleCodes = userDetailsServiceMapper.findRoleByUserName(username);\n        //\u901a\u8fc7\u89d2\u8272\u5217\u8868\u83b7\u53d6\u6743\u9650\u5217\u8868\n        List<String> authority = userDetailsServiceMapper.findAuthorityByRoleCodes(roleCodes);\n        // \u89d2\u8272\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u6743\u9650\n        //\u4e3a\u89d2\u8272\u6807\u8bc6\u52a0\u4e0aROLE_\u524d\u7f00\uff08Spring Security\u89c4\u8303\uff09\n        roleCodes = roleCodes.stream()\n                .map(roleCode -> "ROLE_" + roleCode)\n                .collect(Collectors.toList());\n        //\u89d2\u8272\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u6743\u9650\uff0c\u6240\u4ee5\u5408\u5e76\n        authority.addAll(roleCodes);\n        //\u8f6c\u6210\u7528\u9017\u53f7\u5206\u9694\u7684\u5b57\u7b26\u4e32\uff0c\u4e3a\u7528\u6237\u8bbe\u7f6e\u6743\u9650\u6807\u8bc6\n        myUserDetails.setAuthorities(\n                AuthorityUtils.commaSeparatedStringToAuthorityList(\n                        String.join(",", authority)\n                )\n        );\n        return myUserDetails;\n    }\n}\n')),Object(i.b)("h2",{id:"\u5728spring-security\u8fdb\u884c\u914d\u7f6e"},"\u5728Spring Security\u8fdb\u884c\u914d\u7f6e"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"SecurityConfig"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u6ce8\u5165MyUserDetailService")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'@Configuration\n@SuppressWarnings("all")\npublic class SecurityConfig extends WebSecurityConfigurerAdapter {\n\n    @Resource\n    private MyAuthenticationSuccessHandler myAuthenticationSuccessHandler;\n\n    @Resource\n    private MyAuthenticationFaliureHandler myAuthenticationFaliureHandler;\n\n    @Resource\n    private MyUserDetialService myUserDetialService;\n\n    @Override\n    protected void configure(HttpSecurity http) throws Exception {\n        http.csrf().disable() //\u7981\u7528\u8de8\u7ad9csrf\u653b\u51fb\u9632\u5fa1\uff0c\u540e\u9762\u7684\u7ae0\u8282\u4f1a\u4e13\u95e8\u8bb2\u89e3\n                .formLogin()\n                .loginPage("/login.html")//\u7528\u6237\u672a\u767b\u5f55\u65f6\uff0c\u8bbf\u95ee\u4efb\u4f55\u8d44\u6e90\u90fd\u8f6c\u8df3\u5230\u8be5\u8def\u5f84\uff0c\u5373\u767b\u5f55\u9875\u9762\n                .loginProcessingUrl("/login")//\u767b\u5f55\u8868\u5355form\u4e2daction\u7684\u5730\u5740\uff0c\u4e5f\u5c31\u662f\u5904\u7406\u8ba4\u8bc1\u8bf7\u6c42\u7684\u8def\u5f84\n                .usernameParameter("username")///\u767b\u5f55\u8868\u5355form\u4e2d\u7528\u6237\u540d\u8f93\u5165\u6846input\u7684name\u540d\uff0c\u4e0d\u4fee\u6539\u7684\u8bdd\u9ed8\u8ba4\u662fusername\n                .passwordParameter("password")//form\u4e2d\u5bc6\u7801\u8f93\u5165\u6846input\u7684name\u540d\uff0c\u4e0d\u4fee\u6539\u7684\u8bdd\u9ed8\u8ba4\u662fpassword\n//                .defaultSuccessUrl("/index")//\u767b\u5f55\u8ba4\u8bc1\u6210\u529f\u540e\u9ed8\u8ba4\u8f6c\u8df3\u7684\u8def\u5f84\n                .successHandler(myAuthenticationSuccessHandler)\n                .failureHandler(myAuthenticationFaliureHandler)\n                .and()\n                .authorizeRequests()\n                .antMatchers("/login.html", "/login").permitAll()//\u4e0d\u9700\u8981\u901a\u8fc7\u767b\u5f55\u9a8c\u8bc1\u5c31\u53ef\u4ee5\u88ab\u8bbf\u95ee\u7684\u8d44\u6e90\u8def\u5f84\n                .antMatchers("/biz1", "/biz2") //\u9700\u8981\u5bf9\u5916\u66b4\u9732\u7684\u8d44\u6e90\u8def\u5f84\n                .hasAnyAuthority("ROLE_user", "ROLE_admin")  //user\u89d2\u8272\u548cadmin\u89d2\u8272\u90fd\u53ef\u4ee5\u8bbf\u95ee\n//                .antMatchers("/syslog", "/sysuser")\n//                .hasAnyRole("admin")  //admin\u89d2\u8272\u53ef\u4ee5\u8bbf\u95ee\n                .antMatchers("/syslog").hasAuthority("/syslog")\n                .antMatchers("/sysuser").hasAuthority("/sysuser")\n                .anyRequest().authenticated();\n    }\n\n    @Override\n    protected void configure(AuthenticationManagerBuilder auth) throws Exception {\n//        auth.inMemoryAuthentication()\n//                .withUser("user")\n//                .password(passwordEncoder().encode("123456"))\n//                .roles("user")\n//                .and()\n//                .withUser("admin")\n//                .password(passwordEncoder().encode("123456"))\n//                //.authorities("sys:log","sys:user")\n//                .roles("admin")\n//                .and()\n//                .passwordEncoder(passwordEncoder());//\u914d\u7f6eBCrypt\u52a0\u5bc6\n        auth.userDetailsService(myUserDetialService)\n                .passwordEncoder(passwordEncoder());\n    }\n\n    @Bean\n    public PasswordEncoder passwordEncoder() {\n        return new BCryptPasswordEncoder();\n    }\n\n    @Override\n    public void configure(WebSecurity web) throws Exception {\n        //\u5c06\u9879\u76ee\u4e2d\u9759\u6001\u8d44\u6e90\u8def\u5f84\u5f00\u653e\u51fa\u6765\n        web.ignoring().antMatchers("/css/**", "/fonts/**", "/img/**", "/js/**");\n    }\n}\n')))}u.isMDXComponent=!0},548:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return m}));var t=r(0),a=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},d=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(r),p=t,m=d["".concat(s,".").concat(p)]||d[p]||b[p]||i;return r?a.a.createElement(m,o(o({ref:n},l),{},{components:r})):a.a.createElement(m,o({ref:n},l))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,s=new Array(i);s[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:t,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);