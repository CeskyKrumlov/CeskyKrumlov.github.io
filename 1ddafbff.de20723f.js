(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n(2),i=n(6),a=(n(0),n(502)),l={id:"6.resultResponse",title:"\u7ed3\u679c\u8df3\u8f6c",hide_title:!0},c={unversionedId:"springmvc/6.resultResponse",id:"springmvc/6.resultResponse",isDocsHomePage:!1,title:"\u7ed3\u679c\u8df3\u8f6c",description:"1. \u7ed3\u679c\u8df3\u8f6c\u65b9\u5f0f",source:"@site/docs/springmvc/6.\u7ed3\u679c\u8df3\u8f6c.md",slug:"/springmvc/6.resultResponse",permalink:"/docs/springmvc/6.resultResponse",version:"current",sidebar:"someSidebar",previous:{title:"RESTFul",permalink:"/docs/springmvc/5.restful"},next:{title:"ModelAndView",permalink:"/docs/springmvc/7.modelAndView"}},o=[{value:"\u7ed3\u679c\u8df3\u8f6c\u65b9\u5f0f",id:"\u7ed3\u679c\u8df3\u8f6c\u65b9\u5f0f",children:[{value:"ModelAndView",id:"modelandview",children:[]},{value:"\u539f\u751fServlet",id:"\u539f\u751fservlet",children:[]},{value:"SpringMVC",id:"springmvc",children:[{value:"\u65e0\u89c6\u56fe\u89e3\u6790\u5668",id:"\u65e0\u89c6\u56fe\u89e3\u6790\u5668",children:[]},{value:"\u6709\u89c6\u56fe\u89e3\u6790\u5668",id:"\u6709\u89c6\u56fe\u89e3\u6790\u5668",children:[]}]}]}],p={rightToc:o};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\u7ed3\u679c\u8df3\u8f6c\u65b9\u5f0f"),Object(a.b)("li",{parentName:"ol"},"\u91cd\u5b9a\u5411"),Object(a.b)("li",{parentName:"ol"},"\u8f6c\u53d1")),Object(a.b)("h1",{id:"\u7ed3\u679c\u8df3\u8f6c\u65b9\u5f0f"},"\u7ed3\u679c\u8df3\u8f6c\u65b9\u5f0f"),Object(a.b)("h2",{id:"modelandview"},"ModelAndView"),Object(a.b)("p",null,"\u8bbe\u7f6eModelAndView\u5bf9\u8c61\uff0c\u6839\u636eview\u7684\u540d\u79f0\uff0c\u548c\u89c6\u56fe\u89e3\u6790\u5668\u8df3\u8f6c\u5230\u6307\u5b9a\u9875\u9762"),Object(a.b)("p",null,"\u9875\u9762\uff1a{\u89c6\u56fe\u89e3\u6790\u5668\u524d\u7f00} + viewName + {\u89c6\u56fe\u89e3\u6790\u5668\u540e\u7f00}"),Object(a.b)("h2",{id:"\u539f\u751fservlet"},"\u539f\u751fServlet"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u9875\u9762\u54cd\u5e94"),Object(a.b)("li",{parentName:"ul"},"\u91cd\u5b9a\u5411"),Object(a.b)("li",{parentName:"ul"},"\u8f6c\u53d1")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Controller\npublic class RESTFulController {\n\n    @RequestMapping(path = "/result/t1")\n    public void test1(HttpServletRequest request, HttpServletResponse response) throws IOException {\n        response.getWriter().print("Print through Servlet API");\n    }\n\n    @RequestMapping(path = "/result/t2")\n    public void test2(HttpServletRequest request, HttpServletResponse response) throws IOException {\n        response.sendRedirect("/index.jsp");\n    }\n\n    @RequestMapping(path = "/result/t3")\n    public void test3(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {\n        request.setAttribute("msg","t3");\n        request.getRequestDispatcher("WEB-INF/jsp/test.jsp").forward(request,response);\n    }\n}\n')),Object(a.b)("h2",{id:"springmvc"},"SpringMVC"),Object(a.b)("h3",{id:"\u65e0\u89c6\u56fe\u89e3\u6790\u5668"},"\u65e0\u89c6\u56fe\u89e3\u6790\u5668"),Object(a.b)("p",null,"\u901a\u8fc7SpringMVC\u5b9e\u73b0\u8f6c\u53d1\u548c\u91cd\u5b9a\u5411\uff0c",Object(a.b)("strong",{parentName:"p"},"\u65e0\u9700\u89c6\u56fe\u89e3\u6790\u5668")),Object(a.b)("p",null,"\u9700\u8981\u5c06\u89c6\u56fe\u89e3\u6790\u5668\u6ce8\u91ca\u6389"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Controller\npublic class RESTFulController {\n\n    @RequestMapping(path = "/result/t1")\n    public String test1() {\n        //\u5728\u524d\u9762\u52a0\u4e00\u4e2a`/`\u5b9e\u73b0\u8f6c\u53d1\n        return "/index.jsp";\n    }\n\n    @RequestMapping(path = "/result/t2")\n    public String test2() {\n        //\u52a0\u4e0aforward:\u8868\u793a\u8f6c\u53d1\n        return "forward:/index.jsp";\n    }\n\n    @RequestMapping(path = "/result/t3")\n    public String test3() {\n        //\u91cd\u5b9a\u5411\n        return "redirect:/index.jsp";\n    }\n}\n')),Object(a.b)("h3",{id:"\u6709\u89c6\u56fe\u89e3\u6790\u5668"},"\u6709\u89c6\u56fe\u89e3\u6790\u5668"),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"\u91cd\u5b9a\u5411\u4e0d\u4f1a\u8d70\u89c6\u56fe\u89e3\u6790\u5668"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Controller\npublic class RESTFulController {\n\n    @RequestMapping(path = "/result/t1")\n    public String test1() {\n        //\u8f6c\u53d1\n        return "test";\n    }\n\n\n    @RequestMapping(path = "/result/t2")\n    public String test2() {\n        //\u91cd\u5b9a\u5411\n        //\u91cd\u5b9a\u5411\u4e0d\u4f1a\u8d70\u89c6\u56fe\u89e3\u6790\u5668\u62fc\u63a5\n        return "redirect:/index.jsp";\n    }\n}\n')))}s.isMDXComponent=!0},502:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||a;return n?i.a.createElement(m,c(c({ref:t},p),{},{components:n})):i.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<a;p++)l[p]=n[p];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);