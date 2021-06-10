(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{367:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return m}));var r=t(2),a=t(6),i=(t(0),t(482)),l={id:"8.luanma",title:"\u4e71\u7801\u95ee\u9898",hide_title:!0},c={unversionedId:"springmvc/8.luanma",id:"springmvc/8.luanma",isDocsHomePage:!1,title:"\u4e71\u7801\u95ee\u9898",description:"\u4e71\u7801\u95ee\u9898",source:"@site/docs/springmvc/8.\u4e71\u7801\u95ee\u9898.md",slug:"/springmvc/8.luanma",permalink:"/docs/springmvc/8.luanma",version:"current",sidebar:"someSidebar",previous:{title:"ModelAndView",permalink:"/docs/springmvc/7.modelAndView"},next:{title:"\u524d\u540e\u7aef\u5206\u79bb\u2014\u2014JSON",permalink:"/docs/springmvc/9.json"}},o=[{value:"\u4e71\u7801\u95ee\u9898",id:"\u4e71\u7801\u95ee\u9898",children:[]},{value:"\u8fc7\u6ee4\u5668\u89e3\u51b3",id:"\u8fc7\u6ee4\u5668\u89e3\u51b3",children:[{value:"\u81ea\u5b9a\u4e49\u8fc7\u6ee4\u5668",id:"\u81ea\u5b9a\u4e49\u8fc7\u6ee4\u5668",children:[]},{value:"SpringMVC\u8fc7\u6ee4\u5668",id:"springmvc\u8fc7\u6ee4\u5668",children:[]}]}],p={rightToc:o};function m(e){var n=e.components,l=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,l,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u4e71\u7801\u95ee\u9898"},"\u4e71\u7801\u95ee\u9898"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"form.jsp"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<%@ page contentType="text/html;charset=UTF-8" language="java" %>\n<html>\n<head>\n    <title>Title</title>\n</head>\n<body>\n        <form action="/e/t1" method="post">\n            <input type="text" name="name">\n            <input type="submit">\n        </form>\n</body>\n</html>\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Controller"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Controller\npublic class EncodingController {\n\n    @PostMapping("/e/t1")\n    public String test1(String name, Model model) {\n        model.addAttribute("msg", name);\n        return "test";\n    }\n}\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u8f93\u5165\u4e2d\u6587\uff0c\u51fa\u73b0\u4e71\u7801\n",Object(i.b)("img",{src:t(945).default})))),Object(i.b)("h1",{id:"\u8fc7\u6ee4\u5668\u89e3\u51b3"},"\u8fc7\u6ee4\u5668\u89e3\u51b3"),Object(i.b)("h2",{id:"\u81ea\u5b9a\u4e49\u8fc7\u6ee4\u5668"},"\u81ea\u5b9a\u4e49\u8fc7\u6ee4\u5668"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5b9a\u4e49\u4e00\u4e2a\u8fc7\u6ee4\u5668"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class EncodingFilter implements Filter {\n    public void init(FilterConfig filterConfig) throws ServletException {\n\n    }\n\n    public void doFilter(ServletRequest request, ServletResponse response,\n                         FilterChain filterChain) throws IOException, ServletException {\n        request.setCharacterEncoding("utf-8");\n        response.setCharacterEncoding("utf-8");\n        filterChain.doFilter(request, response);\n    }\n\n    public void destroy() {\n\n    }\n}\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"web.xml\n\u5728web.xml\u4e2d\u914d\u7f6e\u8fd9\u4e2a\u8fc7\u6ee4\u5668\nfilter\u5fc5\u987b\u653e\u5728\u6700\u524d\u9762"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<filter>\n    <filter-name>encoding</filter-name>\n    <filter-class>com.bsx.filter.EncodingFilter</filter-class>\n</filter>\n<filter-mapping>\n    <filter-name>encoding</filter-name>\n    <url-pattern>/*</url-pattern>\n</filter-mapping>\n")))),Object(i.b)("h2",{id:"springmvc\u8fc7\u6ee4\u5668"},"SpringMVC\u8fc7\u6ee4\u5668"),Object(i.b)("p",null,"\u76f4\u63a5\u914d\u7f6eweb.xml\uff0c\u7528\u8fc7\u6ee4\u5668",Object(i.b)("inlineCode",{parentName:"p"},"org.springframework.web.filter.CharacterEncodingFilte")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"web.xml"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<filter>\n    <filter-name>encoding</filter-name>\n    <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>\n    <init-param>\n        <param-name>encoding</param-name>\n        <param-value>utf-8</param-value>\n    </init-param>\n</filter>\n<filter-mapping>\n    <filter-name>encoding</filter-name>\n    <url-pattern>/*</url-pattern>\n</filter-mapping>\n")))))}m.isMDXComponent=!0},482:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),m=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=m(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=m(t),s=r,d=u["".concat(l,".").concat(s)]||u[s]||b[s]||i;return t?a.a.createElement(d,c(c({ref:n},p),{},{components:t})):a.a.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=s;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<i;p++)l[p]=t[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},945:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/7-9e98e6c1c73444ed04dd39b566f693d6.png"}}]);