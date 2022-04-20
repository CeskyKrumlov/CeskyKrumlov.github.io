(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{221:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return d}));var r=t(2),a=t(6),l=(t(0),t(576)),i={id:"7.modelAndView",title:"ModelAndView",hide_title:!0},o={unversionedId:"springmvc/7.modelAndView",id:"springmvc/7.modelAndView",isDocsHomePage:!1,title:"ModelAndView",description:"ModelAndView",source:"@site/docs/springmvc/7.\u6570\u636e\u5904\u7406.md",slug:"/springmvc/7.modelAndView",permalink:"/docs/springmvc/7.modelAndView",version:"current",sidebar:"someSidebar",previous:{title:"\u7ed3\u679c\u8df3\u8f6c",permalink:"/docs/springmvc/6.resultResponse"},next:{title:"\u4e71\u7801\u95ee\u9898",permalink:"/docs/springmvc/8.luanma"}},c=[{value:"ModelAndView",id:"modelandview",children:[{value:"\u5904\u7406\u63d0\u4ea4\u6570\u636e",id:"\u5904\u7406\u63d0\u4ea4\u6570\u636e",children:[]},{value:"\u6570\u636e\u663e\u793a\u5230\u524d\u7aef",id:"\u6570\u636e\u663e\u793a\u5230\u524d\u7aef",children:[{value:"ModelAndView",id:"modelandview-1",children:[]},{value:"ModelMap",id:"modelmap",children:[]},{value:"Model",id:"model",children:[]}]}]}],p={rightToc:c};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"modelandview"},"ModelAndView"),Object(l.b)("h2",{id:"\u5904\u7406\u63d0\u4ea4\u6570\u636e"},"\u5904\u7406\u63d0\u4ea4\u6570\u636e"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"\u63d0\u4ea4\u7684\u57df\u540d\u79f0\u548c\u5904\u7406\u65b9\u6cd5\u7684\u53c2\u6570\u540d\u4e0d\u4e00\u81f4"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"http://localhost:8080/hello?username=bsx"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Controller\npublic class RESTFulController {\n\n    @RequestMapping("/hello")\n   public String hello(@RequestParam("username") String name){\n        System.out.println(name);\n        return "hello";\n    }\n}\n')),Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"\u63a8\u8350\u4efb\u4f55\u65f6\u5019\u90fd\u628a@RequestParam\u52a0\u4e0a"))))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"\u63d0\u4ea4\u7684\u662f\u4e00\u4e2a\u5bf9\u8c61\nhttp://localhost:8080/hello/user?name=bsx&id=1&age=18"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public class User {\n    private int id;\n    private String name;\n    private int age;\n}\n")),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Controller\npublic class RESTFulController {\n\n    @RequestMapping("/user")\n    public String hello(User user){\n        System.out.println(user);\n        return "hello";\n    }\n}\n\n')),Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"\u53c2\u6570\u540d\u548c\u5c5e\u6027\u540d\u5bf9\u5e94\u4e0d\u4e0a\u7684\u8bdd\u5c31\u4e0d\u5339\u914d\u4e0d\u4e0a\uff0c\u65e0\u6cd5\u5bf9\u5e94\u7684\u503c\u4f1a\u88ab\u8bbe\u5b9a\u4e3anull")))),Object(l.b)("h2",{id:"\u6570\u636e\u663e\u793a\u5230\u524d\u7aef"},"\u6570\u636e\u663e\u793a\u5230\u524d\u7aef"),Object(l.b)("h3",{id:"modelandview-1"},"ModelAndView"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@RequestMapping("/tset1")\npublic ModelAndView handleRequest(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws Exception {\n    //\u8fd4\u56de\u4e00\u4e2a\u6a21\u578b\u89c6\u56fe\u5bf9\u8c61\n    ModelAndView mv = new ModelAndView();\n    mv.addObject("msg","ControllerTest1");\n    mv.setViewName("test");\n    return mv;\n}\n')),Object(l.b)("h3",{id:"modelmap"},"ModelMap"),Object(l.b)("p",null,"\u7ee7\u627f\u4e86LinkedHashMap"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@RequestMapping("/test2")\npublic String hello(@RequestParam("username") String name, ModelMap model){\n   //\u5c01\u88c5\u8981\u663e\u793a\u5230\u89c6\u56fe\u4e2d\u7684\u6570\u636e\n   //\u76f8\u5f53\u4e8ereq.setAttribute("name",name);\n   model.addAttribute("name",name);\n   System.out.println(name);\n   return "hello";\n}\n')),Object(l.b)("h3",{id:"model"},"Model"),Object(l.b)("p",null,"\u7cbe\u7b80\u7248ModelMap,\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u7528Model\u5c31\u591f\u4e86"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@RequestMapping("/test3")\npublic String hello(@RequestParam("username") String name, Model model){\n   //\u5c01\u88c5\u8981\u663e\u793a\u5230\u89c6\u56fe\u4e2d\u7684\u6570\u636e\n   //\u76f8\u5f53\u4e8ereq.setAttribute("name",name);\n   model.addAttribute("msg",name);\n   System.out.println(name);\n   return "test";\n}\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Model"),":\u51e0\u4e2a\u7b80\u5355\u7684\u65b9\u6cd5\u7528\u4e8e\u5b58\u50a8\u6570\u636e\uff0c\u7b80\u5316\u4e86\u65b0\u624b\u5bf9Model\u5bf9\u8c61\u7684\u64cd\u4f5c\u548c\u7406\u89e3"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ModelMap"),"\uff1a\u7ee7\u627f\u4e86",Object(l.b)("inlineCode",{parentName:"li"},"LinkedHashMap"),"\uff0c\u5177\u6709",Object(l.b)("inlineCode",{parentName:"li"},"LinkedHashMap"),"\u7684\u65b9\u6cd5\u548c\u7279\u6027"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ModelAndView"),"\uff1a\u53ef\u4ee5\u5728\u5b58\u50a8\u6570\u636e\u7684\u540c\u65f6\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u8fd4\u56de\u7684\u903b\u8f91\u89c6\u56fe\u3002")))}d.isMDXComponent=!0},576:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return s}));var r=t(0),a=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),d=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,s=u["".concat(i,".").concat(m)]||u[m]||b[m]||l;return t?a.a.createElement(s,o(o({ref:n},p),{},{components:t})):a.a.createElement(s,o({ref:n},p))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);