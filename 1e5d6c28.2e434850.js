(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{126:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(2),a=t(6),i=(t(0),t(561)),o={id:"12.shiroAuthority",title:"Shiro\u5b9e\u73b0\u8bf7\u6c42\u6388\u6743",hide_title:!0},u={unversionedId:"springboot/12.shiroAuthority",id:"springboot/12.shiroAuthority",isDocsHomePage:!1,title:"Shiro\u5b9e\u73b0\u8bf7\u6c42\u6388\u6743",description:"Shiro\u5b9e\u73b0\u8bf7\u6c42\u6388\u6743",source:"@site/docs/springboot/12.Shiro\u8bf7\u6c42\u6388\u6743.md",slug:"/springboot/12.shiroAuthority",permalink:"/docs/springboot/12.shiroAuthority",version:"current",sidebar:"someSidebar",previous:{title:"Shrio\u6574\u5408Mybatis",permalink:"/docs/springboot/12.shiroMybatis"},next:{title:"Shiro\u6574\u5408\u6a21\u677f\u5f15\u64ce",permalink:"/docs/springboot/12.shiroTemplateEngine"}},c=[{value:"Shiro\u5b9e\u73b0\u8bf7\u6c42\u6388\u6743",id:"shiro\u5b9e\u73b0\u8bf7\u6c42\u6388\u6743",children:[{value:"\u4fee\u6539ShiroConfig\u914d\u7f6e\u7c7b",id:"\u4fee\u6539shiroconfig\u914d\u7f6e\u7c7b",children:[]},{value:"\u65b0\u5efa\u672a\u6388\u6743\u8def\u7531",id:"\u65b0\u5efa\u672a\u6388\u6743\u8def\u7531",children:[]},{value:"\u6388\u4e88\u7528\u6237\u6743\u9650",id:"\u6388\u4e88\u7528\u6237\u6743\u9650",children:[{value:"\u6dfb\u52a0\u6570\u636e\u5e93\u6743\u9650\u4fe1\u606f",id:"\u6dfb\u52a0\u6570\u636e\u5e93\u6743\u9650\u4fe1\u606f",children:[]},{value:"\u6388\u4e88\u7528\u6237\u6743\u9650",id:"\u6388\u4e88\u7528\u6237\u6743\u9650-1",children:[]}]}]}],l={rightToc:c};function s(e){var n=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,o,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"shiro\u5b9e\u73b0\u8bf7\u6c42\u6388\u6743"},"Shiro\u5b9e\u73b0\u8bf7\u6c42\u6388\u6743"),Object(i.b)("h2",{id:"\u4fee\u6539shiroconfig\u914d\u7f6e\u7c7b"},"\u4fee\u6539ShiroConfig\u914d\u7f6e\u7c7b"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u4fee\u6539Shiro\u914d\u7f6e\u7c7b\uff0c\u5728",Object(i.b)("inlineCode",{parentName:"li"},"ShiroFilterFactoryBean"),"\u4e2d\u6dfb\u52a0\u6743\u9650"),Object(i.b)("li",{parentName:"ul"},"\u4f8b\u5982\uff1a\u5fc5\u987b\u662fuser\u7528\u6237\u4e14\u62e5\u6709add\u6743\u9650\uff0c\u624d\u80fd\u8bbf\u95ee/user/add\u8def\u7531")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'filterChainDefinitionMap.put("/user/add","perms[user:add]");\n')),Object(i.b)("p",null,"\u5177\u6709user:update\u6743\u9650\u7684\u7528\u6237\u624d\u80fd\u8bbf\u95ee/user/update\u8def\u7531"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'//\u5177\u6709user:update\u6743\u9650\u7684\u7528\u6237\u624d\u80fd\u8bbf\u95ee/user/update\u8def\u7531\nfilterChainDefinitionMap.put("/user/update", "perms[user:update]");\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Configuration\npublic class ShiroConfig {\n    //\u6ce8\u5165\u81ea\u5b9a\u4e49realm\uff0c\u65b9\u6cd5\u540d\u5373Bean\u540d\n    @Bean\n    public UserRealm userRealm() {\n        return new UserRealm();\n    }\n\n    //DefaultWebSecurityManager\n    @Bean\n    public DefaultSecurityManager defaultSecurityManager(@Qualifier("userRealm") UserRealm userRealm) {\n        DefaultWebSecurityManager defaultSecurityManager = new DefaultWebSecurityManager();\n        //\u5173\u8054Realm\n        defaultSecurityManager.setRealm(userRealm);\n        return defaultSecurityManager;\n    }\n\n    //    \u53ef\u4ee5\u6dfb\u52a0\u7684\u8fc7\u6ee4\u5668\uff1a\n    //      - anon\uff1a\u65e0\u9700\u8ba4\u771f\uff0c\u76f4\u63a5\u53ef\u4ee5\u8bbf\u95ee\n    //      - authc\uff1a\u5fc5\u987b\u8ba4\u8bc1\u624d\u80fd\u8bbf\u95ee\n    //      - user\uff1a\u5fc5\u987b\u7528\u6237"\u8bb0\u4f4f\u6211"\u529f\u80fd\u624d\u80fd\u7528\n    //      - perms\uff1a\u62e5\u6709\u5bf9\u67d0\u4e2a\u8d44\u6e90\u7684\u6743\u9650\uff0c\u624d\u80fd\u8bbf\u95ee\n    //      - role\uff1a\u62e5\u6709\u67d0\u4e2a\u89d2\u8272\u6743\u9650\u624d\u53ef\u4ee5\u8bbf\u95ee\n    //shiroFilterFactoryBean\n    @Bean\n    public ShiroFilterFactoryBean getShiroFilterFactoryBean(DefaultSecurityManager defaultSecurityManager) {\n        ShiroFilterFactoryBean shiroFilterFactoryBean = new ShiroFilterFactoryBean();\n        shiroFilterFactoryBean.setSecurityManager(defaultSecurityManager);\n\n        Map<String, String> filterChainDefinitionMap = new LinkedHashMap<>();\n        //\u8ba9/user/add\u8def\u7531\u80fd\u88ab\u6240\u6709\u4eba\u8bbf\u95ee\n        filterChainDefinitionMap.put("/user/add", "anon");\n        //\u6388\u6743 \u62e5\u6709user\u8eab\u4efd\uff0cadd\u6743\u9650\u7684\u4eba\u624d\u80fd\u8bbf\u95ee/user/add\n        filterChainDefinitionMap.put("/user/add","perms[user:add]");\n        //\u8ba4\u8bc1\u8fc7\u540e\u624d\u5141\u8bb8\u8bbf\u95ee/user/update\n        filterChainDefinitionMap.put("/user/update", "authc");\n        //\u5177\u6709user:update\u6743\u9650\u7684\u7528\u6237\u624d\u80fd\u8bbf\u95ee/user/update\u8def\u7531\n        filterChainDefinitionMap.put("/user/update", "perms[user:update]");\n        shiroFilterFactoryBean.setFilterChainDefinitionMap(filterChainDefinitionMap);\n        //\u8bbe\u7f6e\u767b\u5f55\u8def\u7531\n        shiroFilterFactoryBean.setLoginUrl("/user/toLogin");\n\n        return shiroFilterFactoryBean;\n    }\n}\n')),Object(i.b)("h2",{id:"\u65b0\u5efa\u672a\u6388\u6743\u8def\u7531"},"\u65b0\u5efa\u672a\u6388\u6743\u8def\u7531"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@RequestMapping("/unauthorized")\n@ResponseBody\npublic String unauthorized(){\n    return "\u672a\u7ecf\u6388\u6743\uff0c\u65e0\u6cd5\u8bbf\u95ee\u6b64\u9875\u9762";\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5728ShiroConfig\u7684",Object(i.b)("inlineCode",{parentName:"li"},"ShiroFilterFactoryBean"),"\u4e2d\uff0c\u8bbe\u7f6e\u672a\u6388\u6743\u9875\u9762")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'//\u8bbe\u7f6e\u672a\u6388\u6743\u9875\u9762\nshiroFilterFactoryBean.setUnauthorizedUrl("/unauthorized");\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'//    \u53ef\u4ee5\u6dfb\u52a0\u7684\u8fc7\u6ee4\u5668\uff1a\n//      - anon\uff1a\u65e0\u9700\u8ba4\u771f\uff0c\u76f4\u63a5\u53ef\u4ee5\u8bbf\u95ee\n//      - authc\uff1a\u5fc5\u987b\u8ba4\u8bc1\u624d\u80fd\u8bbf\u95ee\n//      - user\uff1a\u5fc5\u987b\u7528\u6237"\u8bb0\u4f4f\u6211"\u529f\u80fd\u624d\u80fd\u7528\n//      - perms\uff1a\u62e5\u6709\u5bf9\u67d0\u4e2a\u8d44\u6e90\u7684\u6743\u9650\uff0c\u624d\u80fd\u8bbf\u95ee\n//      - role\uff1a\u62e5\u6709\u67d0\u4e2a\u89d2\u8272\u6743\u9650\u624d\u53ef\u4ee5\u8bbf\u95ee\n//shiroFilterFactoryBean\n@Bean\npublic ShiroFilterFactoryBean getShiroFilterFactoryBean(DefaultSecurityManager defaultSecurityManager) {\n    ShiroFilterFactoryBean shiroFilterFactoryBean = new ShiroFilterFactoryBean();\n    shiroFilterFactoryBean.setSecurityManager(defaultSecurityManager);\n\n    Map<String, String> filterChainDefinitionMap = new LinkedHashMap<>();\n    //\u8ba9/user/add\u8def\u7531\u80fd\u88ab\u6240\u6709\u4eba\u8bbf\u95ee\n    filterChainDefinitionMap.put("/user/add", "anon");\n    //\u6388\u6743 \u62e5\u6709user\u8eab\u4efd\uff0cadd\u6743\u9650\u7684\u4eba\u624d\u80fd\u8bbf\u95ee/user/add\n    filterChainDefinitionMap.put("/user/add","perms[user:add]");\n    //\u8ba4\u8bc1\u8fc7\u540e\u624d\u5141\u8bb8\u8bbf\u95ee/user/update\n    filterChainDefinitionMap.put("/user/update", "authc");\n    shiroFilterFactoryBean.setFilterChainDefinitionMap(filterChainDefinitionMap);\n    //\u8bbe\u7f6e\u767b\u5f55\u8def\u7531\n    shiroFilterFactoryBean.setLoginUrl("/user/toLogin");\n    //\u8bbe\u7f6e\u672a\u6388\u6743\u9875\u9762\n    shiroFilterFactoryBean.setUnauthorizedUrl("/unauthorized");\n\n    return shiroFilterFactoryBean;\n}\n')),Object(i.b)("img",{src:t(674).default,style:{zoom:"60%",boxShadow:"5px 7px 28px #333333"}}),Object(i.b)("br",null),Object(i.b)("h2",{id:"\u6388\u4e88\u7528\u6237\u6743\u9650"},"\u6388\u4e88\u7528\u6237\u6743\u9650"),Object(i.b)("h3",{id:"\u6dfb\u52a0\u6570\u636e\u5e93\u6743\u9650\u4fe1\u606f"},"\u6dfb\u52a0\u6570\u636e\u5e93\u6743\u9650\u4fe1\u606f"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5728\u6570\u636e\u5e93\u5c42\u9762\u6dfb\u52a0",Object(i.b)("strong",{parentName:"li"},"\u6743\u9650\u4fe1\u606f"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),"ALTER TABLE USER ADD perms VARCHAR(100)\n")),Object(i.b)("img",{src:t(675).default,style:{zoom:"60%",boxShadow:"5px 7px 28px #333333"}}),Object(i.b)("br",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"pojo\u6dfb\u52a0",Object(i.b)("inlineCode",{parentName:"li"},"perms"),"\u5c5e\u6027")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@Data\n@AllArgsConstructor\n@NoArgsConstructor\npublic class User {\n    private int id;\n    private String name;\n    private String password;\n    private String perms;\n}\n")),Object(i.b)("h3",{id:"\u6388\u4e88\u7528\u6237\u6743\u9650-1"},"\u6388\u4e88\u7528\u6237\u6743\u9650"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5728\u81ea\u5b9a\u4e49",Object(i.b)("inlineCode",{parentName:"p"},"UserRealm"),"\u7684",Object(i.b)("inlineCode",{parentName:"p"},"AuthorizationInfo"),"\u65b9\u6cd5\u4e2d\uff0c\u521b\u5efa",Object(i.b)("inlineCode",{parentName:"p"},"SimpleAuthorizationInfo"),"\u5bf9\u8c61")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u83b7\u53d6\u5f53\u524d\u7528\u6237"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5728",Object(i.b)("inlineCode",{parentName:"p"},"AuthenticationInfo"),"\u65b9\u6cd5\u8fd4\u56de",Object(i.b)("inlineCode",{parentName:"p"},"SimpleAuthenticationInfo"),"\u5bf9\u8c61\u65f6\uff0c\u8bbe\u7f6e\u7b2c\u4e00\u4e2a\u53c2\u6570",Object(i.b)("inlineCode",{parentName:"p"},"principal"),"\uff0c\u5c06\u4ece\u6570\u636e\u5e93\u67e5\u8be2\u5230\u7684\u7528\u6237\u53d1\u51fa\u53bb"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'return new SimpleAuthenticationInfo(user, user.getPassword(), "");\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5728",Object(i.b)("inlineCode",{parentName:"p"},"AuthorizationInfo"),"\u65b9\u6cd5\u4e2d"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"li"},"SecurityUtils.getSubject();"),"\u5c31\u53ef\u4ee5\u83b7\u5f97\u5f53\u524d\u7528\u6237"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"subject.getPrincipal();"),"\uff0c\u5c31\u53ef\u4ee5\u83b7\u53d6\u4e0a\u9762\u8fd4\u56de\u65f6\u8bbe\u7f6e\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570",Object(i.b)("inlineCode",{parentName:"li"},"principal"),"\uff0c\u5373",Object(i.b)("inlineCode",{parentName:"li"},"currentUser"))),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// \u83b7\u53d6\u5f53\u524d\u7528\u6237\nSubject subject = SecurityUtils.getSubject();\nUser currentUser = (User) subject.getPrincipal();\n"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u67e5\u8be2\u6570\u636e\u5e93\uff0c\u5c06\u6570\u636e\u5e93\u4e2d\u7684\u6743\u9650\u4fe1\u606f\u6dfb\u52a0\u5230\u5f53\u524d\u7528\u6237\u4e0a"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"authorizationInfo.addStringPermission(currentUser.getPerms());\n")))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class UserRealm extends AuthorizingRealm {\n\n    @Autowired\n    UserServiceImpl userServiceImpl;\n\n    @Override\n    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {\n        System.out.println("\u6267\u884c\u4e86<<\u6388\u6743>>\u65b9\u6cd5");\n        // \u83b7\u53d6\u5f53\u524d\u7528\u6237\n        Subject subject = SecurityUtils.getSubject();\n        User currentUser = (User) subject.getPrincipal();\n        //\u7ed9\u5f53\u524d\u7528\u6237\u6388\u4e88\u6743\u9650\n        //\u4ece\u6570\u636e\u5e93\u8bfb\u7528\u6237\u6743\u9650\uff0c\u8bbe\u7f6e\u4e0a\u53bb\n        SimpleAuthorizationInfo authorizationInfo = new SimpleAuthorizationInfo();\n        authorizationInfo.addStringPermission(currentUser.getPerms());\n\n        return authorizationInfo;\n    }\n\n    @Override\n    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {\n        System.out.println("\u6267\u884c\u4e86<<\u8ba4\u8bc1>>\u65b9\u6cd5");\n        //\u67e5\u8be2\u6570\u636e\u5e93\u83b7\u5f97\u7528\u6237\u6570\u636e\n        //\u4f2a\u9020\u7528\u6237\u540d\u5bc6\u7801\n        // String username = "root";\n        // String password = "123456";\n        //\u901a\u8fc7Mybatis\u67e5\u8be2\u6570\u636e\u5e93\n\n        //        if (!token.getUsername().equals(username)) {\n        //            return null; //Shiro\u81ea\u52a8\u629b\u51fa UnknownAccountException\n        //        }\n        UsernamePasswordToken token = (UsernamePasswordToken) authenticationToken;\n        User user = userServiceImpl.queryUserByName(token.getUsername());\n\n        if (user == null) {\n            return null; //Shiro\u81ea\u52a8\u629b\u51fa UnknownAccountException\n        }\n        //\u5bc6\u7801\u8ba4\u8bc1,shiro\u4f1a\u81ea\u52a8\u505a\n        return new SimpleAuthenticationInfo(user, user.getPassword(), "");\n    }\n}\n')))}s.isMDXComponent=!0},561:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return t?a.a.createElement(m,u(u({ref:n},l),{},{components:t})):a.a.createElement(m,u({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},674:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/7-7f451301903a975d4855a07ef5166f90.gif"},675:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/24-15f839aa095f52a99e547dbf039bb437.png"}}]);