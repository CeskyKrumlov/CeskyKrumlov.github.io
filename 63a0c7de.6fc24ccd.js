(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{226:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(2),i=t(6),a=(t(0),t(482)),c={id:"11.springsecurity",title:"SpringSecurity",hide_title:!0},l={unversionedId:"springboot/11.springsecurity",id:"springboot/11.springsecurity",isDocsHomePage:!1,title:"SpringSecurity",description:"SpringSecurity",source:"@site/docs/springboot/11.SpringSecurity.md",slug:"/springboot/11.springsecurity",permalink:"/docs/springboot/11.springsecurity",version:"current",sidebar:"someSidebar",previous:{title:"\u65e5\u5fd7\u6846\u67b6",permalink:"/docs/springboot/20.log4j2"},next:{title:"\u8ba4\u8bc1\u548c\u6388\u6743",permalink:"/docs/springboot/11.authentication"}},p=[{value:"SpringSecurity",id:"springsecurity",children:[{value:"\u73af\u5883\u642d\u5efa",id:"\u73af\u5883\u642d\u5efa",children:[]}]}],o={rightToc:p};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"springsecurity"},"SpringSecurity"),Object(a.b)("p",null,"\u5bf9\u4e8e\u7528\u6237\u6743\u9650\u7ba1\u7406\uff0c\u5982\u679c\u901a\u8fc7\u62e6\u622a\u5668\u3001\u8fc7\u6ee4\u5668\u6765\u5f00\u53d1\uff0c\u4ee3\u7801\u91cf\u5de8\u5927\uff0c\u4e0d\u6613\u5f00\u53d1\u548c\u7ef4\u62a4\uff0c\u4e5f\u96be\u4ee5\u4fdd\u8bc1\u5b89\u5168\u6027"),Object(a.b)("p",null,"\u5728 Web \u5f00\u53d1\u4e2d\uff0c\u5b89\u5168\u4e00\u76f4\u662f\u975e\u5e38\u91cd\u8981\u7684\u4e00\u4e2a\u65b9\u9762\u3002\u5b89\u5168\u867d\u7136\u5c5e\u4e8e\u5e94\u7528\u7684\u975e\u529f\u80fd\u6027\u9700\u6c42\uff0c\u4f46\u662f\u5e94\u8be5\u5728\u5e94\u7528\u5f00\u53d1\u7684\u521d\u671f\u5c31\u8003\u8651\u8fdb\u6765\u3002\u5982\u679c\u5728\u5e94\u7528\u5f00\u53d1\u7684\u540e\u671f\u624d\u8003\u8651\u5b89\u5168\u7684\u95ee\u9898\uff0c\u5c31\u53ef\u80fd\u9677\u5165\u4e00\u4e2a\u4e24\u96be\u7684\u5883\u5730\uff1a\u4e00\u65b9\u9762\uff0c\u5e94\u7528\u5b58\u5728\u4e25\u91cd\u7684\u5b89\u5168\u6f0f\u6d1e\uff0c\u65e0\u6cd5\u6ee1\u8db3\u7528\u6237\u7684\u8981\u6c42\uff0c\u5e76\u53ef\u80fd\u9020\u6210\u7528\u6237\u7684\u9690\u79c1\u6570\u636e\u88ab\u653b\u51fb\u8005\u7a83\u53d6\uff1b\u53e6\u4e00\u65b9\u9762\uff0c\u5e94\u7528\u7684\u57fa\u672c\u67b6\u6784\u5df2\u7ecf\u786e\u5b9a\uff0c\u8981\u4fee\u590d\u5b89\u5168\u6f0f\u6d1e\uff0c\u53ef\u80fd\u9700\u8981\u5bf9\u7cfb\u7edf\u7684\u67b6\u6784\u505a\u51fa\u6bd4\u8f83\u91cd\u5927\u7684\u8c03\u6574\uff0c\u56e0\u800c\u9700\u8981\u66f4\u591a\u7684\u5f00\u53d1\u65f6\u95f4\uff0c\u5f71\u54cd\u5e94\u7528\u7684\u53d1\u5e03\u8fdb\u7a0b\u3002\u56e0\u6b64\uff0c\u4ece\u5e94\u7528\u5f00\u53d1\u7684\u7b2c\u4e00\u5929\u5c31\u5e94\u8be5\u628a\u5b89\u5168\u76f8\u5173\u7684\u56e0\u7d20\u8003\u8651\u8fdb\u6765\uff0c\u5e76\u5728\u6574\u4e2a\u5e94\u7528\u7684\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u3002"),Object(a.b)("p",null,"\u8457\u540d\u7684\u5b89\u5168\u6846\u67b6\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Shiro"),Object(a.b)("li",{parentName:"ul"},"SpringSecurity")),Object(a.b)("p",null,"Spring Security\u662f\u4e00\u4e2a\u6846\u67b6\uff0c\u4fa7\u91cd\u4e8e\u4e3aJava\u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u8eab\u4efd\u9a8c\u8bc1\u548c\u6388\u6743\u3002\u4e0e\u6240\u6709Spring\u9879\u76ee\u4e00\u6837\uff0cSpring\u5b89\u5168\u6027\u7684\u771f\u6b63\u5f3a\u5927\u4e4b\u5904\u5728\u4e8e\u5b83\u53ef\u4ee5\u8f7b\u677e\u5730\u6269\u5c55\u4ee5\u6ee1\u8db3\u5b9a\u5236\u9700\u6c42"),Object(a.b)("p",null,"\u4ece\u5b98\u7f51\u7684\u4ecb\u7ecd\u4e2d\u53ef\u4ee5\u77e5\u9053\u8fd9\u662f\u4e00\u4e2a\u6743\u9650\u6846\u67b6\u3002\u60f3\u6211\u4eec\u4e4b\u524d\u505a\u9879\u76ee\u662f\u6ca1\u6709\u4f7f\u7528\u6846\u67b6\u662f\u600e\u4e48\u63a7\u5236\u6743\u9650\u7684\uff1f\u5bf9\u4e8e\u6743\u9650 \u4e00\u822c\u4f1a\u7ec6\u5206\u4e3a\u529f\u80fd\u6743\u9650\uff0c\u8bbf\u95ee\u6743\u9650\uff0c\u548c\u83dc\u5355\u6743\u9650\u3002\u4ee3\u7801\u4f1a\u5199\u7684\u975e\u5e38\u7684\u7e41\u7410\uff0c\u5197\u4f59\u3002"),Object(a.b)("p",null,"\u600e\u4e48\u89e3\u51b3\u4e4b\u524d\u5199\u6743\u9650\u4ee3\u7801\u7e41\u7410\uff0c\u5197\u4f59\u7684\u95ee\u9898\uff0c\u4e00\u4e9b\u4e3b\u6d41\u6846\u67b6\u5c31\u5e94\u8fd0\u800c\u751f\u800cSpring Scecurity\u5c31\u662f\u5176\u4e2d\u7684\u4e00\u79cd\u3002"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u4e3b\u8981\u5b8c\u6210\u7684\u529f\u80fd\uff1a")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"\u7528\u6237\u8ba4\u8bc1\u2014\u2014Authentication")),Object(a.b)("p",{parentName:"li"},"\u7528\u6237\u8ba4\u8bc1\u6307\u7684\u662f\u9a8c\u8bc1\u67d0\u4e2a\u7528\u6237\u662f\u5426\u4e3a\u7cfb\u7edf\u4e2d\u7684\u5408\u6cd5\u4e3b\u4f53\uff0c\u4e5f\u5c31\u662f\u8bf4\u7528\u6237\u80fd\u5426\u8bbf\u95ee\u8be5\u7cfb\u7edf\u3002\u7528\u6237\u8ba4\u8bc1\u4e00\u822c\u8981\u6c42\u7528\u6237\u63d0\u4f9b\u7528\u6237\u540d\u548c\u5bc6\u7801\u3002\u7cfb\u7edf\u901a\u8fc7\u6821\u9a8c\u7528\u6237\u540d\u548c\u5bc6\u7801\u6765\u5b8c\u6210\u8ba4\u8bc1\u8fc7\u7a0b"),Object(a.b)("p",{parentName:"li"},"Spring Security \u6846\u67b6\u652f\u6301\u4e3b\u6d41\u7684\u8ba4\u8bc1\u65b9\u5f0f\uff0c\u5305\u62ec HTTP \u57fa\u672c\u8ba4\u8bc1\u3001HTTP \u8868\u5355\u9a8c\u8bc1\u3001HTTP \u6458\u8981\u8ba4\u8bc1\u3001OpenID \u548c LDAP \u7b49")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"\u7528\u6237\u6388\u6743\u2014\u2014Authorization")),Object(a.b)("p",{parentName:"li"},"\u7528\u6237\u6388\u6743\u6307\u7684\u662f\u9a8c\u8bc1\u67d0\u4e2a\u7528\u6237\u662f\u5426\u6709\u6743\u9650\u6267\u884c\u67d0\u4e2a\u64cd\u4f5c\u3002\u5728\u4e00\u4e2a\u7cfb\u7edf\u4e2d\uff0c\u4e0d\u540c\u7528\u6237\u6240\u5177\u6709\u7684\u6743\u9650\u662f\u4e0d\u540c\u7684\u3002\u6bd4\u5982\u5bf9\u4e00\u4e2a\u6587\u4ef6\u6765\u8bf4\uff0c\u6709\u7684\u7528\u6237\u53ea\u80fd\u8fdb\u884c\u8bfb\u53d6\uff0c\u800c\u6709\u7684\u7528\u6237\u53ef\u4ee5\u8fdb\u884c\u4fee\u6539\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u7cfb\u7edf\u4f1a\u4e3a\u4e0d\u540c\u7684\u7528\u6237\u5206\u914d\u4e0d\u540c\u7684\u89d2\u8272\uff0c\u800c\u6bcf\u4e2a\u89d2\u8272\u5219\u5bf9\u5e94\u4e00\u7cfb\u5217\u7684\u6743\u9650\u3002"),Object(a.b)("p",{parentName:"li"},"Spring Security \u63d0\u4f9b\u4e86\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236\u548c\u8bbf\u95ee\u63a7\u5236\u5217\u8868\uff08Access Control List\uff0cACL\uff09\uff0c\u53ef\u4ee5\u5bf9\u5e94\u7528\u4e2d\u7684\u9886\u57df\u5bf9\u8c61\u8fdb\u884c\u7ec6\u7c92\u5ea6\u7684\u63a7\u5236"))),Object(a.b)("h2",{id:"\u73af\u5883\u642d\u5efa"},"\u73af\u5883\u642d\u5efa"),Object(a.b)("p",null,"springboot-05-springsecurity\uff0c\u6dfb\u52a0web\u652f\u6301\uff0c\u6dfb\u52a0\u6a21\u677f\u5f15\u64ce\u4f9d\u8d56"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-thymeleaf</artifactId>\n    <version>2.2.6.RELEASE</version>\n</dependency>\n")),Object(a.b)("p",null,"SpringSecurity\u7d20\u6750\uff1a",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://pan.baidu.com/s/1D9N9V-lAmKVR0mwhHuOW2w"}),"https://pan.baidu.com/s/1D9N9V-lAmKVR0mwhHuOW2w")," \uff0c\u63d0\u53d6\u7801 rhl8"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u5173\u95ed\u6a21\u677f\u5f15\u64ce\u7f13\u5b58\u65b9\u4fbf\u8c03\u8bd5")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"spring:\n  thymeleaf:\n    cache: false\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Controller")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Controller\npublic class RouteController {\n\n    @GetMapping({"/", "/index"})\n    public String index() {\n        return "index";\n    }\n\n    @GetMapping("/toLogin")\n    public String toLogin() {\n        return "views/login";\n    }\n\n    @GetMapping("/level1/{id}")\n    public String level1(@PathVariable("id") int id) {\n        return "views/level1/" + id;\n    }\n\n    @GetMapping("/level2/{id}")\n    public String level2(@PathVariable("id") int id) {\n        return "views/level2/" + id;\n    }\n\n    @GetMapping("/level3/{id}")\n    public String level3(@PathVariable("id") int id) {\n        return "views/level3/" + id;\n    }\n}\n')))}u.isMDXComponent=!0},482:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=i.a.createContext({}),u=function(e){var n=i.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=u(e.components);return i.a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},g=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),b=u(t),g=r,d=b["".concat(c,".").concat(g)]||b[g]||s[g]||a;return t?i.a.createElement(d,l(l({ref:n},o),{},{components:t})):i.a.createElement(d,l({ref:n},o))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var o=2;o<a;o++)c[o]=t[o];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);