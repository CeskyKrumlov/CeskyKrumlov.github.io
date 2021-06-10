(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{251:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return u}));var a=t(2),r=t(6),i=(t(0),t(338)),l={id:"15.springsecurityJwt",title:"Spring Security\u96c6\u6210JWT",hide_title:!0},c={unversionedId:"security_Oauth2_JWT/15.springsecurityJwt",id:"security_Oauth2_JWT/15.springsecurityJwt",isDocsHomePage:!1,title:"Spring Security\u96c6\u6210JWT",description:"Spring Security\u96c6\u6210JWT",source:"@site/docs/security_Oauth2_JWT/15.\u6574\u5408JWT.md",permalink:"/docs/security_Oauth2_JWT/15.springsecurityJwt",sidebar:"someSidebar",previous:{title:"JWT\u6982\u8ff0",permalink:"/docs/security_Oauth2_JWT/14.jwt"},next:{title:"\u89e3\u51b3\u8de8\u57df\u95ee\u9898",permalink:"/docs/security_Oauth2_JWT/16.crossOrigin"}},o=[{value:"Spring Security\u96c6\u6210JWT",id:"spring-security\u96c6\u6210jwt",children:[]},{value:"\u5b9e\u73b0\u539f\u7406",id:"\u5b9e\u73b0\u539f\u7406",children:[{value:"\u8ba4\u8bc1\u6d41\u7a0b",id:"\u8ba4\u8bc1\u6d41\u7a0b",children:[]},{value:"\u63a5\u53e3\u9274\u6743\u6d41\u7a0b",id:"\u63a5\u53e3\u9274\u6743\u6d41\u7a0b",children:[]}]},{value:"\u8ba4\u8bc1\u6d41\u7a0b\u5b9e\u73b0",id:"\u8ba4\u8bc1\u6d41\u7a0b\u5b9e\u73b0",children:[{value:"\u73af\u5883\u642d\u5efa",id:"\u73af\u5883\u642d\u5efa",children:[]},{value:"\u7f16\u5199JWT\u5de5\u5177\u7c7b",id:"\u7f16\u5199jwt\u5de5\u5177\u7c7b",children:[]},{value:"Controller",id:"controller",children:[]},{value:"Service",id:"service",children:[]},{value:"\u914d\u7f6e\u7c7b",id:"\u914d\u7f6e\u7c7b",children:[{value:"\u4e3aAuthenticationManager\u6ce8\u518cBean",id:"\u4e3aauthenticationmanager\u6ce8\u518cbean",children:[]},{value:"\u5f00\u653eJWT\u7684\u4e24\u4e2aController\u8def\u5f84\u8bbf\u95ee\u6743\u9650",id:"\u5f00\u653ejwt\u7684\u4e24\u4e2acontroller\u8def\u5f84\u8bbf\u95ee\u6743\u9650",children:[]}]},{value:"\u4f7f\u7528POSTMAN\u6d4b\u8bd5",id:"\u4f7f\u7528postman\u6d4b\u8bd5",children:[]}]},{value:"\u9274\u6743\u6d41\u7a0b\u5b9e\u73b0",id:"\u9274\u6743\u6d41\u7a0b\u5b9e\u73b0",children:[{value:"JwtAuthenticationTokenFilter",id:"jwtauthenticationtokenfilter",children:[]},{value:"\u4f7f\u7528POSTMAN\u6d4b\u8bd5",id:"\u4f7f\u7528postman\u6d4b\u8bd5-1",children:[]}]}],s={rightToc:o};function u(e){var n=e.components,l=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,l,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"spring-security\u96c6\u6210jwt"},"Spring Security\u96c6\u6210JWT"),Object(i.b)("h1",{id:"\u5b9e\u73b0\u539f\u7406"},"\u5b9e\u73b0\u539f\u7406"),Object(i.b)("hr",null),Object(i.b)("h2",{id:"\u8ba4\u8bc1\u6d41\u7a0b"},"\u8ba4\u8bc1\u6d41\u7a0b"),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20200727164559486",src:t(611).default})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5f53\u5ba2\u6237\u7aef\u53d1\u9001\u201c/authentication\u201d\u8bf7\u6c42\u7684\u65f6\u5019\uff0c\u5b9e\u9645\u4e0a\u662f\u8bf7\u6c42JwtAuthenticationController\u3002\u8be5Controller\u7684\u529f\u80fd\u662f\uff1a\u4e00\u662f\u7528\u6237\u767b\u5f55\u529f\u80fd\u7684\u5b9e\u73b0\uff0c\u4e8c\u662f\u5982\u679c\u767b\u5f55\u6210\u529f\uff0c\u751f\u6210JWT\u4ee4\u724c\u3002\u5728\u4f7f\u7528JWT\u7684\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e2a\u7c7b\u9700\u8981\u6211\u4eec\u81ea\u5df1\u6765\u5b9e\u73b0"),Object(i.b)("li",{parentName:"ul"},"\u5177\u4f53\u5230\u7528\u6237\u767b\u5f55\uff0c\u5c31\u9700\u8981\u7ed3\u5408Spring Security\u5b9e\u73b0\u3002\u901a\u8fc7\u5411Spring Security\u63d0\u4f9b\u7684AuthenticationManager\u7684authenticate()\u65b9\u6cd5\u4f20\u9012\u7528\u6237\u540d\u5bc6\u7801\uff0c\u7531spring Security\u5e2e\u6211\u4eec\u5b9e\u73b0\u7528\u6237\u767b\u5f55\u8ba4\u8bc1\u529f\u80fd\u3002"),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u767b\u9646\u6210\u529f\uff0c\u6211\u4eec\u5c31\u8981\u4e3a\u8be5\u7528\u6237\u751f\u6210JWT\u4ee4\u724c\u4e86\u3002\u901a\u5e38\u6b64\u65f6\u6211\u4eec\u9700\u8981\u4f7f\u7528UserDetailsService\u7684loadUserByUsername\u65b9\u6cd5\u52a0\u8f7d\u7528\u6237\u4fe1\u606f\uff0c\u7136\u540e\u6839\u636e\u4fe1\u606f\u751f\u6210JWT\u4ee4\u724c\uff0cJWT\u4ee4\u724c\u751f\u6210\u4e4b\u540e\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u3002\uff08spring security\u7684UserDetailsService\u7684\u529f\u80fd\u4ee5\u53ca\u5b9e\u73b0\uff0c\u7b14\u8005\u4e4b\u524d\u7684\u6587\u7ae0\u5df2\u7ecf\u8bb2\u8fc7\uff09"),Object(i.b)("li",{parentName:"ul"},"\u53e6\u5916\uff0c\u6211\u4eec\u9700\u8981\u5199\u4e00\u4e2a\u5de5\u5177\u7c7bJwtTokenUtil\uff0c\u8be5\u5de5\u5177\u7c7b\u7684\u4e3b\u8981\u529f\u80fd\u5c31\u662f\u6839\u636e\u7528\u6237\u4fe1\u606f\u751f\u6210JWT\uff0c\u89e3\u7b7eJWT\u83b7\u53d6\u7528\u6237\u4fe1\u606f\uff0c\u6821\u9a8c\u4ee4\u724c\u662f\u5426\u8fc7\u671f\uff0c\u5237\u65b0\u4ee4\u724c\u7b49")),Object(i.b)("h2",{id:"\u63a5\u53e3\u9274\u6743\u6d41\u7a0b"},"\u63a5\u53e3\u9274\u6743\u6d41\u7a0b"),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20200727165823173",src:t(612).default})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5f53\u5ba2\u6237\u7aef\u8bf7\u6c42\u201c/hello\u201d\u8d44\u6e90\u7684\u65f6\u5019\uff0c\u4ed6",Object(i.b)("strong",{parentName:"li"},"\u5e94\u8be5\u5728HTTP\u8bf7\u6c42\u7684Header\u5e26\u4e0aJWT\u5b57\u7b26\u4e32"),"\u3002Header\u7684\u540d\u79f0\u524d\u540e\u7aef\u670d\u52a1\u81ea\u5df1\u5b9a\u4e49\uff0c\u4f46\u662f\u8981\u7edf\u4e00"),Object(i.b)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u9700\u8981\u81ea\u5b9a\u4e49JwtRequestFilter\uff0c\u62e6\u622aHTTP\u8bf7\u6c42\uff0c\u5e76\u5224\u65ad\u8bf7\u6c42Header\u4e2d\u662f\u5426\u6709JWT\u4ee4\u724c\u3002\u5982\u679c\u6ca1\u6709\uff0c\u5c31\u6267\u884c\u540e\u7eed\u7684\u8fc7\u6ee4\u5668\u3002\u56e0\u4e3aSpring Security\u662f\u6709\u5b8c\u6210\u7684\u9274\u6743\u4f53\u7cfb\u7684\uff0c\u4f60\u6ca1\u8d4b\u6743\u8be5\u8bf7\u6c42\u5c31\u662f\u975e\u6cd5\u7684\uff0c\u540e\u7eed\u7684\u8fc7\u6ee4\u5668\u94fe\u4f1a\u5c06\u8be5\u8bf7\u6c42\u62e6\u622a\uff0c\u6700\u7ec8\u8fd4\u56de\u65e0\u6743\u9650\u8bbf\u95ee\u7684\u7ed3\u679c"),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u5728HTTP\u4e2d\u89e3\u6790\u5230JWT\u4ee4\u724c\uff0c\u5c31\u8c03\u7528JwtTokenUtil\u5bf9\u4ee4\u724c\u7684\u6709\u6548\u671f\u53ca\u5408\u6cd5\u6027\u8fdb\u884c\u5224\u5b9a\u3002\u5982\u679c\u662f\u4f2a\u9020\u7684\u6216\u8005\u8fc7\u671f\u7684\uff0c\u540c\u6837\u8fd4\u56de\u65e0\u6743\u9650\u8bbf\u95ee\u7684\u7ed3\u679c"),Object(i.b)("li",{parentName:"ul"},"\u5982\u679cJWT\u4ee4\u724c\u5728\u6709\u6548\u671f\u5185\u5e76\u4e14\u6821\u9a8c\u901a\u8fc7\uff0c\u6211\u4eec\u4ecd\u7136\u8981\u901a\u8fc7UserDetailsService\u52a0\u8f7d\u8be5\u7528\u6237\u7684\u6743\u9650\u4fe1\u606f\uff0c\u5e76\u5c06\u8fd9\u4e9b\u4fe1\u606f\u4ea4\u7ed9Spring Security\u3002\u53ea\u6709\u8fd9\u6837\uff0c\u8be5\u8bf7\u6c42\u624d\u80fd\u987a\u5229\u901a\u8fc7Spring Security\u4e00\u7cfb\u5217\u8fc7\u6ee4\u5668\u7684\u5173\u5361\uff0c\u987a\u5229\u5230\u8fbeHelloWorldcontroller\u5e76\u8bbf\u95ee\u201c/hello\u201d\u63a5\u53e3")),Object(i.b)("hr",null),Object(i.b)("h1",{id:"\u8ba4\u8bc1\u6d41\u7a0b\u5b9e\u73b0"},"\u8ba4\u8bc1\u6d41\u7a0b\u5b9e\u73b0"),Object(i.b)("h2",{id:"\u73af\u5883\u642d\u5efa"},"\u73af\u5883\u642d\u5efa"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"HelloController"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@RestController\npublic class HelloController {\n\n    @RequestMapping("/hello")\n    public String hello() {\n        return "world";\n    }\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u5728\u914d\u7f6e\u7c7b\u7981\u7528formLogin"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'//                .formLogin()\n//                .loginPage("/login.html")//\u7528\u6237\u672a\u767b\u5f55\u65f6\uff0c\u8bbf\u95ee\u4efb\u4f55\u8d44\u6e90\u90fd\u8f6c\u8df3\u5230\u8be5\u8def\u5f84\uff0c\u5373\u767b\u5f55\u9875\u9762\n//                .loginProcessingUrl("/login")//\u767b\u5f55\u8868\u5355form\u4e2daction\u7684\u5730\u5740\uff0c\u4e5f\u5c31\u662f\u5904\u7406\u8ba4\u8bc1\u8bf7\u6c42\u7684\u8def\u5f84\n//                .usernameParameter("username")///\u767b\u5f55\u8868\u5355form\u4e2d\u7528\u6237\u540d\u8f93\u5165\u6846input\u7684name\u540d\uff0c\u4e0d\u4fee\u6539\u7684\u8bdd\u9ed8\u8ba4\u662fusername\n//                .passwordParameter("password")//form\u4e2d\u5bc6\u7801\u8f93\u5165\u6846input\u7684name\u540d\uff0c\u4e0d\u4fee\u6539\u7684\u8bdd\u9ed8\u8ba4\u662fpassword\n////                .defaultSuccessUrl("/index")//\u767b\u5f55\u8ba4\u8bc1\u6210\u529f\u540e\u9ed8\u8ba4\u8f6c\u8df3\u7684\u8def\u5f84\n//                .successHandler(myAuthenticationSuccessHandler)\n//                .failureHandler(myAuthenticationFaliureHandler)\n//                .and()\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u786e\u4fddCSRF\u5173\u95ed"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),".csrf().disable()\n")),Object(i.b)("h2",{id:"\u7f16\u5199jwt\u5de5\u5177\u7c7b"},"\u7f16\u5199JWT\u5de5\u5177\u7c7b"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5f15\u5165jjwt")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"<dependency>\n    <groupId>io.jsonwebtoken</groupId>\n    <artifactId>jjwt</artifactId>\n    <version>0.9.0</version>\n</dependency>\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"application.yaml")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"jwt: \n  header: JWTHeaderName\n  secret: aabbccdd  \n  expiration: 3600000  \n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5176\u4e2dheader\u662f\u643a\u5e26JWT\u4ee4\u724c\u7684HTTP\u7684Header\u7684\u540d\u79f0\u3002\u867d\u7136\u6211\u8fd9\u91cc\u53eb\u505aJWTHeaderName\uff0c\u4f46\u662f\u5728\u5b9e\u9645\u751f\u4ea7\u4e2d\u53ef\u8bfb\u6027\u8d8a\u5dee\u8d8a\u5b89\u5168"),Object(i.b)("li",{parentName:"ul"},"secret\u662f\u7528\u6765\u4e3aJWT\u57fa\u7840\u4fe1\u606f\u52a0\u5bc6\u548c\u89e3\u5bc6\u7684\u5bc6\u94a5\u3002\u867d\u7136\u6211\u5728\u8fd9\u91cc\u5728\u914d\u7f6e\u6587\u4ef6\u5199\u6b7b\u4e86\uff0c\u4f46\u662f\u5728\u5b9e\u9645\u751f\u4ea7\u4e2d\u901a\u5e38\u4e0d\u76f4\u63a5\u5199\u5728\u914d\u7f6e\u6587\u4ef6\u91cc\u9762\u3002\u800c\u662f\u901a\u8fc7\u5e94\u7528\u7684\u542f\u52a8\u53c2\u6570\u4f20\u9012\uff0c\u5e76\u4e14\u9700\u8981\u5b9a\u671f\u4fee\u6539"),Object(i.b)("li",{parentName:"ul"},"expiration\u662fJWT\u4ee4\u724c\u7684\u6709\u6548\u65f6\u95f4")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u65b0\u5efa/auth/jwt/JwtTokenUtil")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'@ConfigurationProperties(prefix = "jwt")'),"\u7528\u6765\u4eceapplication.yaml\u7684",Object(i.b)("inlineCode",{parentName:"li"},"jwt: xxx"),"\u4e2d\u53d6\u5c5e\u6027")),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"jwt:\n  header: JWTHeaderName #http or https\u5bf9\u5e94\u7684JWT\u8bf7\u6c42\u5934\u7684\u540d\u5b57\n  secret: aabbccdd\n  expiration: 3600000\n")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u56e0\u4e3a\u5728Bean\u5b9e\u4f8b\u5316\u9636\u6bb5\u901a\u8fc7set\u6ce8\u5165\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u503c\uff0c\u6240\u4ee5\u9700\u8981getter setter\u65b9\u6cd5\uff0c\u6b64\u5904\u4f7f\u7528Lombok\u6ce8\u89e3\u5b8c\u6210"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Data\n@ConfigurationProperties(prefix = "jwt")\n@Component\npublic class JwtTokenUtil {\n\n    /***\n     * \u4ece\u914d\u7f6e\u6587\u4ef6jwt\u914d\u7f6e\u6bb5\u53d6\u51fa\u540d\u79f0\u4e00\u81f4\u7684\u914d\u7f6e\n     */\n    private String secret;\n    private Long expiration;\n    private String header;\n\n    /**\n     * \u751f\u6210token\u4ee4\u724c\n     * \u524d\u7aef\u53d1\u6765\u4e86\u7528\u6237\u540d\u5bc6\u7801\uff0c\u540e\u7aef\u8fdb\u884c\u9a8c\u8bc1\uff0c\u9a8c\u8bc1\u5b8c\u751f\u6210\u4e00\u4e2a\n     * userDetails\uff0c\u91cc\u9762\u5305\u542b\u7528\u6237\u540d\u5bc6\u7801\u3001\u6743\u9650\u7b49\n     * \u5f04\u4e86\u4e2aMap\uff0c\u91cc\u9762\u653e\u4e0a\u7528\u6237\u540d\u548c\u521b\u5efa\u65f6\u95f4\n     * @param userDetails \u7528\u6237\n     * @return \u4ee4token\u724c\n     */\n    public String generateToken(UserDetails userDetails) {\n        Map<String, Object> claims = new HashMap<>(2);\n        claims.put("sub", userDetails.getUsername());\n        claims.put("created", new Date());\n        // \u53c8\u53bb\u627e\u4e00\u4e2a\u79c1\u6709\u91cd\u8f7d\u65b9\u6cd5\n        return generateToken(claims);\n    }\n\n    /**\n     * \u4ece\u4ee4\u724c\u4e2d\u83b7\u53d6\u7528\u6237\u540d\n     * \u524d\u7aef\u6240\u6709\u7684\u540e\u7eed\u8bf7\u6c42\u90fd\u643a\u5e26token\uff0c\u540e\u7aef\u952e\u67e5token\u5bf9\u5e94\u7684\u7528\u6237\u4fe1\u606f\n     * \u4ece\u800c\u5b8c\u6210\u7528\u6237\u8bc6\u522b\n     * claims.getSubject\u5c31\u80fd\u83b7\u5f97token\u4e2d\u7684\u7528\u6237\u540d\n     * @param token \u4ee4\u724c\n     * @return \u7528\u6237\u540d\n     */\n    public String getUsernameFromToken(String token) {\n        String username;\n        try {\n            Claims claims = getClaimsFromToken(token);\n            username = claims.getSubject();\n        } catch (Exception e) {\n            username = null;\n        }\n        return username;\n    }\n\n    /**\n     * \u5224\u65ad\u4ee4\u724c\u662f\u5426\u8fc7\u671f\n     *\n     * @param token \u4ee4\u724c\n     * @return \u662f\u5426\u8fc7\u671f\n     */\n    public Boolean isTokenExpired(String token) {\n        try {\n            Claims claims = getClaimsFromToken(token);\n            Date expiration = claims.getExpiration();\n            return expiration.before(new Date());\n        } catch (Exception e) {\n            return false;\n        }\n    }\n\n    /**\n     * \u5237\u65b0\u4ee4\u724c\n     * \u4ece\u65e7token\u7684Claims\u4e2d\u53d6\u51fa\u6240\u6709\u4fe1\u606f\n     * \u5c06\u5176\u4e2d\u7684created\u8bbe\u7f6e\u4e3a\u65b0\u65e5\u671f\n     * \u6839\u636e\u65b0\u7684\u4fe1\u606fClaims\u751f\u6210\u65b0token\n     * @param token \u539f\u4ee4\u724c\n     * @return \u65b0\u4ee4\u724c\n     */\n    public String refreshToken(String token) {\n        String refreshedToken;\n        try {\n            Claims claims = getClaimsFromToken(token);\n            claims.put("created", new Date());\n            refreshedToken = generateToken(claims);\n        } catch (Exception e) {\n            refreshedToken = null;\n        }\n        return refreshedToken;\n    }\n\n    /**\n     * \u9a8c\u8bc1\u4ee4\u724c\n     * token\u7528\u6237\u540d\u548c\u6570\u636e\u5e93\u7528\u6237\u540d\u4e00\u81f4\n     * \u4e14\n     * token\u6ca1\u8fc7\u671f\uff0c\u5219\u6709\u6548\n     * @param token       \u4ee4\u724c\n     * @param userDetails \u7528\u6237\n     * @return \u662f\u5426\u6709\u6548\n     */\n    public Boolean validateToken(String token, UserDetails userDetails) {\n\n        String username = getUsernameFromToken(token);\n        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));\n    }\n\n    /**\n     * \u4ececlaims\u751f\u6210\u4ee4\u724c,\u5982\u679c\u770b\u4e0d\u61c2\u5c31\u770b\u8c01\u8c03\u7528\u5b83\n     * \u7528\u5f53\u524d\u65f6\u95f4\u52a0\u4e0a\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u8fc7\u671f\u65f6\u95f4\uff0c\u751f\u6210\u8fc7\u671f\u65e5\u671f\n     * setClaims\u628a\u5305\u542b\u521b\u5efa\u65f6\u95f4\u548c\u7528\u6237\u540d\u7684Map\u6254\u8fdb\u53bb\n     * setExpiration\u4f20\u5165\u8fc7\u671f\u65e5\u671f\n     * signWith\u6307\u5b9a\u6570\u5b57\u7b7e\u540d\u52a0\u5bc6\u7b97\u6cd5\uff0c\u5e76\u4f20\u5165\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6e\u7684secret\u8fdb\u884c\u7b7e\u540d\n     * compact\u6253\u5305\n     * @param claims \u6570\u636e\u58f0\u660e\n     * @return \u4ee4\u724c\n     */\n    private String generateToken(Map<String, Object> claims) {\n        Date expirationDate = new Date(System.currentTimeMillis() + expiration);\n        return Jwts.builder().setClaims(claims)\n                .setExpiration(expirationDate)\n                .signWith(SignatureAlgorithm.HS512, secret)\n                .compact();\n    }\n\n    /**\n     * \u4ece\u4ee4\u724c\u4e2d\u83b7\u53d6\u6570\u636e\u58f0\u660e,\u5982\u679c\u770b\u4e0d\u61c2\u5c31\u770b\u8c01\u8c03\u7528\u5b83\n     * \u4f20\u5165token\u5b57\u7b26\u4e32\uff0c\u83b7\u5f97token\u7684\u4f53\n     * \u8bbe\u7f6e\u89e3\u7b7e\u7528\u7684secret\u5185\u5bb9\n     * \u89e3\u6790\u6210claims\n     * @param token \u4ee4\u724c\n     * @return \u6570\u636e\u58f0\u660e\n     */\n    private Claims getClaimsFromToken(String token) {\n        Claims claims;\n        try {\n            claims = Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();\n        } catch (Exception e) {\n            claims = null;\n        }\n        return claims;\n    }\n}\n')),Object(i.b)("h2",{id:"controller"},"Controller"),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},'"/authentication"\u63a5\u53e3\u7528\u4e8e\u767b\u5f55\u9a8c\u8bc1\uff0c\u5e76\u4e14\u751f\u6210JWT\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef'),Object(i.b)("li",{parentName:"ul"},'"/refreshtoken"\u63a5\u53e3\u7528\u4e8e\u5237\u65b0JWT\uff0c\u66f4\u65b0JWT\u4ee4\u724c\u7684\u6709\u6548\u671f'))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@RestController\npublic class JwtAuthController {\n\n    @Resource\n    JwtAuthServiceImpl jwtAuthService;\n\n    /***\n     * JWT\u9a8c\u8bc1\u767b\u5f55\n     * @param map\n     * @return\n     */\n    @PostMapping("/authentication")\n    public AjaxResponse login(@RequestBody Map<String, String> map) {\n        String username = map.get("username");\n        String password = map.get("password");\n\n        if (StringUtils.isEmpty(username) || StringUtils.isEmpty(password)) {\n            return AjaxResponse.error(\n                    new CustomException(CustomExceptionType.USER_INPUT_ERROR, "\u7528\u6237\u540d\u6216\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a")\n            );\n        }\n\n        try {\n            // jwtAuthService.login(username, password); \u76f4\u63a5\u8fd4\u56deJWT\u5b57\u7b26\u4e32\u4e86\n            // JWT\u5b57\u7b26\u4e32\u4f5c\u4e3adata\u76f4\u63a5\u54cd\u5e94\u524d\u7aef\n            return AjaxResponse.success(jwtAuthService.login(username, password));\n        } catch (CustomException e) {\n            return AjaxResponse.error(e);\n        }\n    }\n\n    /***\n     * \u5237\u65b0\u4ee4\u724c\n     * @param token \u653e\u7f6e\u5728\u8bf7\u6c42\u5934\u4e2d\uff0c\u5934\u7684\u540d\u5b57\u4eceapplication.yaml\u7684jwt:header\u5b57\u6bb5\u53d6\n     * @return\n     */\n    @PostMapping("/refreshtoken")\n    public AjaxResponse refresh(@RequestHeader("${jwt.header}") String token) {\n        return AjaxResponse.success(jwtAuthService.refreshToken(token));\n    }\n}\n')),Object(i.b)("h2",{id:"service"},"Service"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Service\npublic class JwtAuthServiceImpl {\n\n    @Resource\n    AuthenticationManager authenticationManager;\n\n    @Resource\n    UserDetailsService userDetailsService;\n\n    @Resource\n    JwtTokenUtil jwtTokenUtil;\n\n    /***\n     * \u767b\u5f55\u8ba4\u8bc1\u6362\u53d6JWT\u4ee4\u724c\n     * \u4f7f\u7528\u7528\u6237\u540d\u5bc6\u7801\u8fdb\u884c\u767b\u5f55\u9a8c\u8bc1\n     * @return \u5b57\u7b26\u4e32\u7c7b\u578b\u7684JWT token\n     */\n    public String login(String username, String password) throws CustomException {\n        try {\n            // \u6839\u636e\u7528\u6237\u540d\u5bc6\u7801\u751f\u6210UsernamePasswordAuthenticaitonToken\n            UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken\n                    = new UsernamePasswordAuthenticationToken(username, password);\n            // \u6ce8\u5165\u4e00\u4e2aAuthenticationManager\uff0c\u5bf9\u5176\u8fdb\u884c\u8ba4\u8bc1\n            // \u8ba4\u8bc1\u6210\u529f\uff0c\u8fd4\u56de\u4e00\u4e2a\u8ba4\u8bc1\u4e3b\u9898\n            Authentication authenticate = authenticationManager.authenticate(usernamePasswordAuthenticationToken);\n            // \u5c06\u8ba4\u8bc1\u4e3b\u9898\u8bbe\u7f6e\u5230\u4e0a\u4e0b\u6587\n            SecurityContextHolder.getContext().setAuthentication(authenticate);\n        } catch (AuthenticationException e) {\n            throw new CustomException(CustomExceptionType.USER_INPUT_ERROR, "\u7528\u6237\u540d\u5bc6\u7801\u9519\u8bef");\n        }\n\n        UserDetails userDetails = userDetailsService.loadUserByUsername(username);\n        return jwtTokenUtil.generateToken(userDetails);\n    }\n\n    /***\n     * \u5237\u65b0token\uff0c \u5982\u679ctoken\u6ca1\u8fc7\u671f\uff0c\u65e7\u5237\u4e00\u4e2a\u65b0token\u76f4\u63a5\u8fd4\u56de\n     * @param oldToken \u65e7token\n     * @return\n     */\n    public String refreshToken(String oldToken) {\n        if (!jwtTokenUtil.isTokenExpired(oldToken)) {\n            return jwtTokenUtil.refreshToken(oldToken);\n        }\n        // \u8fc7\u671f\u5c31\u8fd4\u56denull\n        return null;\n    }\n}\n')),Object(i.b)("h2",{id:"\u914d\u7f6e\u7c7b"},"\u914d\u7f6e\u7c7b"),Object(i.b)("h3",{id:"\u4e3aauthenticationmanager\u6ce8\u518cbean"},"\u4e3aAuthenticationManager\u6ce8\u518cBean"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"@Bean(name = BeanIds.AUTHENTICATION_MANAGER)\n@Override\npublic AuthenticationManager authenticationManagerBean() throws Exception {\n    return super.authenticationManagerBean();\n}\n")),Object(i.b)("h3",{id:"\u5f00\u653ejwt\u7684\u4e24\u4e2acontroller\u8def\u5f84\u8bbf\u95ee\u6743\u9650"},"\u5f00\u653eJWT\u7684\u4e24\u4e2aController\u8def\u5f84\u8bbf\u95ee\u6743\u9650"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'.antMatchers("/login.html", "/login", "/authentication", "/refreshtoken").permitAll()//\u4e0d\u9700\u8981\u901a\u8fc7\u767b\u5f55\u9a8c\u8bc1\u5c31\u53ef\u4ee5\u88ab\u8bbf\u95ee\u7684\u8d44\u6e90\u8def\u5f84\n')),Object(i.b)("h2",{id:"\u4f7f\u7528postman\u6d4b\u8bd5"},"\u4f7f\u7528POSTMAN\u6d4b\u8bd5"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"POST\u65b9\u5f0f\u8bf7\u6c42",Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"http://127.0.0.1:8081/authentication"}),"http://127.0.0.1:8081/authentication"))),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u9009\u62e9Body"),Object(i.b)("li",{parentName:"ul"},"\u9009\u62e9raw"),Object(i.b)("li",{parentName:"ul"},"\u6570\u636e\u683c\u5f0f\u9009\u62e9JSON")),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "username": "admin",\n    "password": "123456"\n}\n'))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u8fd4\u56de\u54cd\u5e94\u4fe1\u606f"))),Object(i.b)("p",null,'\u5176\u4e2d"data"\u5c31\u662f\u751f\u6210\u7684Jwt Token'),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "isok": true,\n    "code": 200,\n    "message": "success",\n    "data": "eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE1OTYwODIyMzAsInN1YiI6ImFkbWluIiwiY3JlYXRlZCI6MTU5NjA3ODYzMDI5Nn0.tlEJ5KYLm6VuQjuKWQQ2xrG2TY0sf7Cdhm_N_6_cUiYFTRxeQW0mg6W8JTMBwj0zaqrmiy2x9jeM0wGBR1dXaQ"\n}\n')),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20200730111125836",src:t(613).default})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u53ef\u4ee5\u628aJwt Token\u590d\u5236\u4e0b\u6765\uff0c\u53bb\u5728\u7ebfBASE64\u89e3\u5bc6\u7f51\u7ad9\u89e3\u5bc6\u4e00\u4e0b"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{"alg":"HS512"}{"exp":1596082230,"sub":"admin","created":1596078630296}-\x94By)\x82\xe6\xe9[\x90\x8e\xe2\x96A\n\xb1\xacm\x93cK\x1f\xec\'a\x98\xde\x9cR&\x05M\x1c^Am&\x83\xa5\xbc%3\x01\xc2=3j\xaa\xe6\x8b-\xb1\xf67\x8c\xd3\x01\x81GWWi\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u53ef\u4ee5\u770b\u5230\u89e3\u5bc6\u51fa\u7684\u52a0\u5bc6\u7b97\u6cd5\uff0c\u8f7d\u8377\u4fe1\u606f\uff0c\u6570\u5b57\u7b7e\u540d\u90e8\u5206\u65e0\u6cd5\u89e3\u5bc6"))),Object(i.b)("hr",null),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u6d4b\u8bd5\u5237\u65b0Token\uff0c\u8981\u6c42\u4f20\u5165\u65e7\u7684Token\uff0c\u65e7Token\u662f\u653e\u5728\u8bf7\u6c42\u5934\u91cc\u7684\uff0c\u5934\u7684\u540d\u5b57\u88ab\u6211\u4eec\u5b9a\u4e49\u5728\u4e86application.yaml\u4e2d"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u54cd\u5e94"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "isok": true,\n    "code": 200,\n    "message": "success",\n    "data": "eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE1OTYwODI5MjUsInN1YiI6ImFkbWluIiwiY3JlYXRlZCI6MTU5NjA3OTMyNTIwOH0.DlrVwZ4rUYDl6VcSRpxBEOck5d7ylT7IGgLM58p5fLCicmLRRa9Hyq43Ulcrfp2slHhjUeU-dfmbXk1N5KelXg"\n}\n')),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20200730112244549",src:t(614).default})),Object(i.b)("h1",{id:"\u9274\u6743\u6d41\u7a0b\u5b9e\u73b0"},"\u9274\u6743\u6d41\u7a0b\u5b9e\u73b0"),Object(i.b)("hr",null),Object(i.b)("h2",{id:"jwtauthenticationtokenfilter"},"JwtAuthenticationTokenFilter"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Jwt\u9274\u6743\u8fc7\u6ee4\u5668")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"/***\n * 1.\u4ece\u8bf7\u6c42\u5934\u4e2d\u83b7\u53d6Jwt Token\n * 2.\u4eceToken\u4e2d\u83b7\u53d6\u7528\u6237\u540d\n * 3.\u7531\u7528\u6237\u540d\u67e5\u8be2\u6570\u636e\u5e93\u83b7\u5f97\u7528\u6237\u4fe1\u606f\n * 4.\u9a8c\u8bc1token\u662f\u5426\u8fc7\u671f\n * 5.\u6839\u636e\u7528\u6237\u5b9e\u4f53\u548c\u7528\u6237\u6743\u9650\uff0c\u751f\u6210UsernamePasswordAuthenticationToken\n * 6.\u901a\u8fc7SpringSecurity\u8ba4\u8bc6\u7684Token\u5c06\u7528\u6237\u653e\u7f6e\u5230\u4e0a\u4e0b\u6587\n * 7.\u7ee7\u7eed\u6267\u884c\u8fc7\u6ee4\u5668\u94fe\n */\n@Component\npublic class JwtAuthenticationTokenFilter extends OncePerRequestFilter {\n\n    @Resource\n    JwtTokenUtil jwtTokenUtil;\n\n    @Resource\n    UserDetailsService userDetailsService;\n\n    @Override\n    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {\n        // Jwt Header\u7684\u540d\u5b57\u5b9a\u4e49\u5728application.yaml\u4e2d\uff0c\u5e76\u4e14\u5df2\u7ecf\u518d\u521d\u59cb\u5316\u9636\u6bb5\u6ce8\u5165\u5230\u4e86JwtTokenUtil\u4e2d\n        String jwtToken = request.getHeader(jwtTokenUtil.getHeader());\n\n        if (!StringUtils.isEmpty(jwtToken)) {\n            // \u4eceJwt Token\u4e2d\u63d0\u53d6\u7528\u6237\u540d\uff0c\u80fd\u62ff\u5230\u8fd9\u4e2a\u7528\u6237\u540d\uff0c\u8bf4\u660eJwt\u89e3\u7b7e\u6210\u529f\uff0c\u81f3\u5c11Jwt\u662f\u6709\u6548\u7684\n            String usernameFromToken = jwtTokenUtil.getUsernameFromToken(jwtToken);\n            // \u63a5\u4e0b\u6765\u5224\u65ad\u4e0a\u9762\u8fd9\u4e2aJwt\u643a\u5e26\u7684\u7528\u6237\u540d\u662f\u4e0d\u662f\u7a7a\u7684\uff0c\u8fd9\u4e2aJwt\u867d\u7136\u6709\u6548\uff0c\u4f46\u91cc\u9762\u7684\u4e1c\u897f\u4e0d\u4e00\u5b9a\u6709\u6548\n            // \u53ea\u6709\u7528\u6237\u540d\u4e0d\u4e3a\u7a7a\uff0c\u5e76\u4e14\uff0c\u8fd9\u4e2aToken\u4e2d\u7684\u7528\u6237\u8fd8\u6ca1\u6709\u88ab\u540e\u7aef\u8ba4\u8bc1\u8fc7\uff0c\u4e5f\u5c31\u662f\u4e0d\u5b58\u5728\u4e0e\u5b89\u5168\u4e0a\u4e0b\u6587\u4e2d\n            if (usernameFromToken != null && SecurityContextHolder.getContext().getAuthentication() == null) {\n                // \u624d\u5bf9\u7528\u6237\u8fdb\u884c\u8ba4\u8bc1\uff0c\u901a\u8fc7UserDetailService\u6765\u505a\n                UserDetails userDetails = userDetailsService.loadUserByUsername(usernameFromToken);\n                // \u5224\u65ad\u6570\u636e\u5e93\u7528\u6237\u540d\u4e0etoken\u7528\u6237\u540d\u662f\u5426\u4e00\u81f4\uff0cjwt\u662f\u5426\u8fc7\u671f\n                if (jwtTokenUtil.validateToken(jwtToken, userDetails)) {\n                    // \u8ba4\u8bc1\u6210\u529f\uff0c\u6784\u5efaUsernamePasswordAuthenticationToken\n                    // \u8fd9\u6837\u540e\u7eed\u7684UsernamePasswordAuthenticationFilter\u5c31\u4f1a\u653e\u884c\n                    UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken\n                            = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());\n                    // Jwt Token -> Spring Security Token -> \u4ea4\u7ed9Spring Security\u7ba1\u7406\n                    // \u6267\u884c\u5b8c\u8fd9\u53e5\uff0cUsernamePasswordAuthenticationFilter\u4f1a\u653e\u884c\u8bf7\u6c42\n                    SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);\n                }\n            }\n        }\n\n        // \u7ee7\u7eed\u6267\u884c\u8fc7\u6ee4\u5668\u94fe\n        filterChain.doFilter(request, response);\n    }\n}\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u5728\u914d\u7f6e\u7c7b\u4e2d\uff0c\u914d\u7f6e\u6211\u4eec\u5199\u7684\u8fd9\u4e2a\u8fc7\u6ee4\u5668")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u56e0\u4e3a\u6211\u4eec\u4f7f\u7528\u4e86JWT\uff0c\u8868\u660e\u4e86\u6211\u4eec\u7684\u5e94\u7528\u662f\u4e00\u4e2a\u524d\u540e\u7aef\u5206\u79bb\u7684\u5e94\u7528\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u5f00\u542fSTATELESS\u7981\u6b62\u4f7f\u7528session\u3002\u5f53\u7136\u8fd9\u5e76\u4e0d\u7edd\u5bf9\uff0c\u524d\u540e\u7aef\u5206\u79bb\u7684\u5e94\u7528\u901a\u8fc7\u4e00\u4e9b\u529e\u6cd5\u4e5f\u662f\u53ef\u4ee5\u4f7f\u7528session\u7684\uff0c\u8fd9\u4e0d\u662f\u672c\u6587\u7684\u6838\u5fc3\u5185\u5bb9\u4e0d\u505a\u8d58\u8ff0\u3002"),Object(i.b)("li",{parentName:"ul"},"\u5c06\u6211\u4eec\u7684\u81ea\u5b9a\u4e49jwtAuthenticationTokenFilter\uff0c\u52a0\u8f7d\u5230UsernamePasswordAuthenticationFilter\u7684\u524d\u9762\u3002"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"@Resource\nprivate JwtAuthenticationTokenFilter jwtAuthenticationTokenFilter;\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),".and()\n.sessionManagement()\n.sessionCreationPolicy(SessionCreationPolicy.STATELESS)\n.and()\n.addFilterBefore(jwtAuthenticationTokenFilter, UsernamePasswordAuthenticationFilter.class)\n")),Object(i.b)("h2",{id:"\u4f7f\u7528postman\u6d4b\u8bd5-1"},"\u4f7f\u7528POSTMAN\u6d4b\u8bd5"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u8bbf\u95ee",Object(i.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:8081/authentication")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u62ff\u5230\u540e\u7aef\u751f\u6210\u7684token")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE1OTYwOTUxODgsInN1YiI6ImFkbWluIiwiY3JlYXRlZCI6MTU5NjA5MTU4ODA1N30.L88FpUUqHV2UIkPpW0Afc7_nwt61aNFYAg-MBRDk5_vEjhE1aRMufsYcozTKuDALiL8q1sTjnsNm3sJRVXY8DQ\n"))))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u4e4b\u540e\u8bbf\u95ee\u4efb\u4f55\u7cfb\u7edf\u8d44\u6e90\uff0c\u90fd\u5fc5\u987b\u643a\u5e26\u8fd9\u4e2atoken"))),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u5728\u8bf7\u6c42\u5934\u4e2d\u8bbe\u7f6e",Object(i.b)("inlineCode",{parentName:"li"},"JWTHeaderName"),"\uff0c\u5177\u4f53\u53eb\u4ec0\u4e48\u5b9a\u4e49\u5728application.yaml\u4e2d\uff0c\u503c\u4e3a\u4e0a\u9762\u8bbf\u95ee\u540e\u7aef\u83b7\u53d6\u5230\u7684Token"),Object(i.b)("li",{parentName:"ul"},"\u5728\u6570\u636e\u5e93",Object(i.b)("inlineCode",{parentName:"li"},"sys_menu"),"\u8868\u4e3ahello\u6dfb\u52a0\u4e00\u6761\u8bb0\u5f55")),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"INSERT INTO sys_menu VALUES (NULL, 1, 1, 1, 'hello', '/hello', NULL, NULL, 5, 2, 0)\n")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u5728",Object(i.b)("inlineCode",{parentName:"li"},"sys_role_menu"),"\u8868\uff0c\u4e3aadmin\u89d2\u8272\u6dfb\u52a0",Object(i.b)("inlineCode",{parentName:"li"},"/hello"),"\u6743\u9650")),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"INSERT INTO sys_role_menu VALUES (NULL, 1, 6)\n")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u5411",Object(i.b)("inlineCode",{parentName:"li"},"/hello"),"\u53d1\u9001\u8bf7\u6c42"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u60c5\u51b51\uff1a\u5728JWTHeaderName\u4e2d\u5199\u4e2a\u7a7a\uff0c\u540e\u7aef\u54cd\u5e94\u62d2\u7edd\u8bbf\u95ee"))),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20200730145131115",src:t(615).default})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u60c5\u51b52\uff1a\u643a\u5e26\u6b63\u786e\u7684Token\uff0c\u540e\u7aef\u54cd\u5e94\u5408\u6cd5\u8d44\u6e90"))),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20200730150231101",src:t(616).default})))}u.isMDXComponent=!0},338:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return j}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=u(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=u(t),m=a,j=b["".concat(l,".").concat(m)]||b[m]||p[m]||i;return t?r.a.createElement(j,c(c({ref:n},s),{},{components:t})):r.a.createElement(j,c({ref:n},s))}));function j(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<i;s++)l[s]=t[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},611:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/11-bebc74429b257403c4da3bbf0ecf55ec.png"},612:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/12-0821585dcb638218a0f1a1175fbcaeac.png"},613:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/13-494916dc838207de3ded29717d764548.png"},614:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/14-aae39ca8d840a888315da34ff5c45e26.png"},615:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/15-c25c50efdd04daa0ed7121ecf6c369ec.png"},616:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/16-7ee5e4fdbab84c55a2672acfd5120498.png"}}]);