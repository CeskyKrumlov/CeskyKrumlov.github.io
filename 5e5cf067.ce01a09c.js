(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{237:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),i=(n(0),n(565)),c={id:"11.authentication",title:"\u8ba4\u8bc1\u548c\u6388\u6743",hide_title:!0},o={unversionedId:"springboot/11.authentication",id:"springboot/11.authentication",isDocsHomePage:!1,title:"\u8ba4\u8bc1\u548c\u6388\u6743",description:"\u8ba4\u8bc6SpringSecurity",source:"@site/docs/springboot/11.\u7528\u6237\u8ba4\u8bc1\u4e0e\u6388\u6743.md",slug:"/springboot/11.authentication",permalink:"/docs/springboot/11.authentication",version:"current",sidebar:"someSidebar",previous:{title:"SpringSecurity",permalink:"/docs/springboot/11.springsecurity"},next:{title:"\u6743\u9650\u63a7\u5236\u4e0e\u6ce8\u9500",permalink:"/docs/springboot/11.authority"}},p=[{value:"\u8ba4\u8bc6SpringSecurity",id:"\u8ba4\u8bc6springsecurity",children:[]},{value:"\u8ba4\u8bc1\u548c\u6388\u6743",id:"\u8ba4\u8bc1\u548c\u6388\u6743",children:[{value:"\u6388\u6743",id:"\u6388\u6743",children:[]},{value:"\u8ba4\u8bc1",id:"\u8ba4\u8bc1",children:[]}]}],b={rightToc:p};function l(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u8ba4\u8bc6springsecurity"},"\u8ba4\u8bc6SpringSecurity"),Object(i.b)("p",null,"Spring Security \u662f\u9488\u5bf9Spring\u9879\u76ee\u7684\u5b89\u5168\u6846\u67b6\uff0c\u4e5f\u662fSpring Boot\u5e95\u5c42\u5b89\u5168\u6a21\u5757\u9ed8\u8ba4\u7684\u6280\u672f\u9009\u578b\uff0c\u4ed6\u53ef\u4ee5\u5b9e\u73b0\u5f3a\u5927\u7684Web\u5b89\u5168\u63a7\u5236\uff0c\u5bf9\u4e8e\u5b89\u5168\u63a7\u5236\uff0c\u6211\u4eec\u4ec5\u9700\u8981\u5f15\u5165 spring-boot-starter-security \u6a21\u5757\uff0c\u8fdb\u884c\u5c11\u91cf\u7684\u914d\u7f6e\uff0c\u5373\u53ef\u5b9e\u73b0\u5f3a\u5927\u7684\u5b89\u5168\u7ba1\u7406\uff01"),Object(i.b)("p",null,"\u8bb0\u4f4f\u51e0\u4e2a\u7c7b\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"WebSecurityConfigurerAdapter"),"\uff1a\u81ea\u5b9a\u4e49Security\u7b56\u7565"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"AuthenticationManagerBuilder"),"\uff1a\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u7b56\u7565\n\u6e90\u7801\u7528\u5230",Object(i.b)("inlineCode",{parentName:"li"},"\u9002\u914d\u5668\u6a21\u5f0f"),"\u3001",Object(i.b)("inlineCode",{parentName:"li"},"\u5efa\u9020\u8005\u6a21\u5f0f")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@EnableWebSecurity"),"\uff1a\u5f00\u542fWebSecurity\u6a21\u5f0f")),Object(i.b)("p",null,"Spring Security\u7684\u4e24\u4e2a\u4e3b\u8981\u76ee\u6807\u662f \u201c\u8ba4\u8bc1\u201d \u548c \u201c\u6388\u6743\u201d\uff08\u8bbf\u95ee\u63a7\u5236\uff09\u3002"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u201c\u8ba4\u8bc1\u201d\uff08Authentication\uff09")),Object(i.b)("p",null,"\u8eab\u4efd\u9a8c\u8bc1\u662f\u5173\u4e8e\u9a8c\u8bc1\u60a8\u7684\u51ed\u636e\uff0c\u5982\u7528\u6237\u540d/\u7528\u6237ID\u548c\u5bc6\u7801\uff0c\u4ee5\u9a8c\u8bc1\u60a8\u7684\u8eab\u4efd\u3002"),Object(i.b)("p",null,"\u8eab\u4efd\u9a8c\u8bc1\u901a\u5e38\u901a\u8fc7\u7528\u6237\u540d\u548c\u5bc6\u7801\u5b8c\u6210\uff0c\u6709\u65f6\u4e0e\u8eab\u4efd\u9a8c\u8bc1\u56e0\u7d20\u7ed3\u5408\u4f7f\u7528\u3002"),Object(i.b)("p",null," ",Object(i.b)("strong",{parentName:"p"},"\u201c\u6388\u6743\u201d \uff08Authorization\uff09")),Object(i.b)("p",null,"\u6388\u6743\u53d1\u751f\u5728\u7cfb\u7edf\u6210\u529f\u9a8c\u8bc1\u60a8\u7684\u8eab\u4efd\u540e\uff0c\u6700\u7ec8\u4f1a\u6388\u4e88\u60a8\u8bbf\u95ee\u8d44\u6e90\uff08\u5982\u4fe1\u606f\uff0c\u6587\u4ef6\uff0c\u6570\u636e\u5e93\uff0c\u8d44\u91d1\uff0c\u4f4d\u7f6e\uff0c\u51e0\u4e4e\u4efb\u4f55\u5185\u5bb9\uff09\u7684\u5b8c\u5168\u6743\u9650\u3002"),Object(i.b)("p",null,"\u8fd9\u4e2a\u6982\u5ff5\u662f\u901a\u7528\u7684\uff0c\u800c\u4e0d\u662f\u53ea\u5728Spring Security \u4e2d\u5b58\u5728\u3002"),Object(i.b)("h1",{id:"\u8ba4\u8bc1\u548c\u6388\u6743"},"\u8ba4\u8bc1\u548c\u6388\u6743"),Object(i.b)("h2",{id:"\u6388\u6743"},"\u6388\u6743"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5f15\u5165SpringSecurity\u4f9d\u8d56"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n   <groupId>org.springframework.boot</groupId>\n   <artifactId>spring-boot-starter-security</artifactId>\n</dependency>\n")),Object(i.b)("p",{parentName:"li"},"\u53ef\u4ee5\u770b\u5230SpringSecurity\u4f9d\u8d56AOP"),Object(i.b)("img",{src:n(905).default,style:{zoom:"80%",boxShadow:"5px 7px 28px #333333"}}),Object(i.b)("br",null))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u7f16\u5199SpringSecurity\u914d\u7f6e\u7c7b",Object(i.b)("inlineCode",{parentName:"p"},"SecurityConfig"),"\uff0c\u7ee7\u627f",Object(i.b)("inlineCode",{parentName:"p"},"WebSecurityConfigurerAdapter")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6dfb\u52a0",Object(i.b)("inlineCode",{parentName:"li"},"@EnableWebSecurity"),"\u6ce8\u89e3"),Object(i.b)("li",{parentName:"ul"},"\u91cd\u5199",Object(i.b)("inlineCode",{parentName:"li"},"configure(HttpSecurity http)")),Object(i.b)("li",{parentName:"ul"},"\u6a21\u62df\u9700\u6c42\uff1a",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u9996\u9875\u6240\u6709\u4eba\u53ef\u4ee5\u8bbf\u95ee"),Object(i.b)("li",{parentName:"ul"},"\u529f\u80fd\u9875\u5177\u6709\u5bf9\u5e94\u6743\u9650\u7684\u4eba\u624d\u80fd\u8bbf\u95ee")))),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'//AOP \u5f00\u95ed\u539f\u5219\n@EnableWebSecurity\npublic class SecurityConfig extends WebSecurityConfigurerAdapter {\n    @Override\n    protected void configure(HttpSecurity http) throws Exception {\n        //\u8ba4\u8bc1\u8bf7\u6c42.\u6388\u6743\u8bf7\u6c42.\u5141\u8bb8\u6240\u6709\u4eba.\u6388\u6743\u8bf7\u6c42.\u5177\u6709\u8eab\u4efd\n        http.authorizeRequests()\n                .antMatchers("/").permitAll()\n                .antMatchers("/level1/**").hasRole("vip1")\n                .antMatchers("/level2/**").hasRole("vip2")\n                .antMatchers("/level3/**").hasRole("vip3");\n    }\n}\n')),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"\u518d\u6b21\u8bbf\u95ee\u7f51\u7ad9\uff0c\u4f1a\u53d1\u73b0\u53ef\u4ee5\u8bbf\u95ee\u9996\u9875\uff0c\u4f46\u529f\u80fd\u9875403 \u8bf7\u6c42\u62d2\u7edd\uff0c\u6743\u9650\u4e0d\u8db3")),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"\u6dfb\u52a0\u4ee3\u7801\uff0c\u8ba9\u6ca1\u6709\u6743\u9650\u7684\u4eba\u88ab\u8df3\u8f6c\u5230\u767b\u5f55\u9875\u9762")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@EnableWebSecurity\npublic class SecurityConfig extends WebSecurityConfigurerAdapter {\n    @Override\n    protected void configure(HttpSecurity http) throws Exception {\n        //\u8ba4\u8bc1\u8bf7\u6c42.\u6388\u6743\u8bf7\u6c42.\u5141\u8bb8\u6240\u6709\u4eba.\u6388\u6743\u8bf7\u6c42.\u5177\u6709\u8eab\u4efd\n        http.authorizeRequests()\n                .antMatchers("/").permitAll()\n                .antMatchers("/level1/**").hasRole("vip1")\n                .antMatchers("/level2/**").hasRole("vip2")\n                .antMatchers("/level3/**").hasRole("vip3");\n\n        //\u6ca1\u6743\u9650\u5c31\u8df3\u8f6c\u5230\u767b\u5f55\u9875\u9762\n        http.formLogin();\n    }\n}\n')),Object(i.b)("div",Object(r.a)({parentName:"li"},{className:"admonition admonition-tip alert alert--success"}),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u95ee\u9898")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u4e3a\u4ec0\u4e48formLogin\u65b9\u6cd5\u80fd\u8ba9\u6211\u4eec\u76f4\u63a5\u8df3\u5230login.html?"))),Object(i.b)("p",{parentName:"li"},"\u67e5\u770b\u6e90\u7801\uff0c\u5b83\u4f1a\u81ea\u52a8\u53bb",Object(i.b)("inlineCode",{parentName:"p"},"/login"),"\u8def\u7531"),Object(i.b)("img",{src:n(906).default,style:{zoom:"80%",boxShadow:"5px 7px 28px #333333"}}),Object(i.b)("br",null))),Object(i.b)("h2",{id:"\u8ba4\u8bc1"},"\u8ba4\u8bc1"),Object(i.b)("p",null,"\u91cd\u5199",Object(i.b)("inlineCode",{parentName:"p"},"configure(AuthenticationManagerBuilder auth)")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u6309\u7167",Object(i.b)("inlineCode",{parentName:"li"},".withUser().password().roles()"),"\u7684\u987a\u5e8f\u5199"),Object(i.b)("li",{parentName:"ul"},"\u591a\u4e2a\u7528\u6237\u4e4b\u95f4\u7528",Object(i.b)("inlineCode",{parentName:"li"},".and()"),"\u8fde\u63a5"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".roles()"),"\u652f\u6301\u53ef\u53d8\u957f\u5ea6\u53c2\u6570")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'//\u8ba4\u8bc1\n@Override\nprotected void configure(AuthenticationManagerBuilder auth) throws Exception {\n    auth.inMemoryAuthentication()\n        .withUser("Alice").password("123456").roles("vip2","vip3")\n        .and()\n        .withUser("root").password("root").roles("vip1","vip2","vip3");\n}\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u6d4b\u8bd5\uff0c\u62a5\u9519\uff0c\u8bf4\u5bc6\u7801\u672a\u52a0\u5bc6")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'There is no PasswordEncoder mapped for the id "null"\n')),Object(i.b)("p",null,"\u6dfb\u52a0\u5bc6\u7801\u52a0\u5bc6\uff0c\u6709\u5404\u79cd",Object(i.b)("inlineCode",{parentName:"p"},"XxxPasswordEncoding"),"\u53ef\u4f9b\u4f7f\u7528"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'//\u8ba4\u8bc1\n@Override\nprotected void configure(AuthenticationManagerBuilder auth) throws Exception {\n    auth.inMemoryAuthentication().passwordEncoder(new BCryptPasswordEncoder())\n        .withUser("Alice")\n        .password(new BCryptPasswordEncoder().encode("123456"))\n        .roles("vip2", "vip3")\n        .and()\n        .withUser("root")\n        .password(new BCryptPasswordEncoder().encode("root"))\n        .roles("vip1", "vip2", "vip3");\n}\n')),Object(i.b)("img",{src:n(907).default,style:{zoom:"80%",boxShadow:"5px 7px 28px #333333"}}),Object(i.b)("br",null))}l.isMDXComponent=!0},565:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,O=u["".concat(c,".").concat(d)]||u[d]||s[d]||i;return n?a.a.createElement(O,o(o({ref:t},b),{},{components:n})):a.a.createElement(O,o({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},905:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/19-111799a256fa0edc6a3a9af16f097b4b.png"},906:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/20-6f701595a8650a71477eda7d91a27cd2.png"},907:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/3-daadffb4d3ded093a5f13f0dc639478e.gif"}}]);