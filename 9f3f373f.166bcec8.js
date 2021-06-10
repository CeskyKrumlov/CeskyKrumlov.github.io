(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{245:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=(n(0),n(362));const b={id:"16.timeTask",title:"\u5b9a\u65f6\u4efb\u52a1",hide_title:!0},c={unversionedId:"springboot/16.timeTask",id:"springboot/16.timeTask",isDocsHomePage:!1,title:"\u5b9a\u65f6\u4efb\u52a1",description:"\u5b9a\u65f6\u4efb\u52a1",source:"@site/docs/springboot/16.\u5b9a\u65f6\u4efb\u52a1.md",slug:"/springboot/16.timeTask",permalink:"/docs/springboot/16.timeTask",version:"current",sidebar:"someSidebar",previous:{title:"\u90ae\u4ef6\u4efb\u52a1",permalink:"/docs/springboot/15.mailTask"},next:{title:"\u5bcc\u6587\u672c\u7f16\u8f91\u5668",permalink:"/docs/springboot/17.editor"}},l=[{value:"\u5b9a\u65f6\u4efb\u52a1",id:"\u5b9a\u65f6\u4efb\u52a1",children:[{value:"Cron\u8868\u8fbe\u5f0f",id:"cron\u8868\u8fbe\u5f0f",children:[]},{value:"\u5e38\u7528\u8868\u8fbe\u5f0f",id:"\u5e38\u7528\u8868\u8fbe\u5f0f",children:[]}]}],o={rightToc:l};function p({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"\u5b9a\u65f6\u4efb\u52a1"},"\u5b9a\u65f6\u4efb\u52a1"),Object(a.b)("p",null,"Spring\u63d0\u4f9b\u4e86\u5b9a\u65f6\u6267\u884c\u4efb\u52a1\u7684\u4e24\u4e2a",Object(a.b)("strong",{parentName:"p"},"\u63a5\u53e3")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"TaskExecutor")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"TaskScheduler"))),Object(a.b)("p",null,"\u4e24\u4e2a",Object(a.b)("strong",{parentName:"p"},"\u6ce8\u89e3")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@EnableScheduling"),"\n\u5f00\u542f\u5b9a\u65f6\u529f\u80fd"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@Scheduled"),"\n\u4ec0\u4e48\u65f6\u5019\u6267\u884c")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\u5728SpringBoot\u4e3b\u5165\u53e3\u6dfb\u52a0",Object(a.b)("inlineCode",{parentName:"li"},"@EnableScheduling"),"\u548c",Object(a.b)("inlineCode",{parentName:"li"},"@EnableAsyn"),"\u6ce8\u89e3")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@EnableAsync\n@EnableScheduling\n@SpringBootApplication\npublic class Springboot08EmailApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(Springboot08EmailApplication.class, args);\n    }\n}\n")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\u5728\u5e0c\u671b\u5728\u6307\u5b9a\u65f6\u95f4\u6267\u884c\u7684\u65b9\u6cd5\u4e0a\u52a0",Object(a.b)("inlineCode",{parentName:"li"},"@Scheduled"),"\u6ce8\u89e3\uff0c\u91cc\u9762\u586b\u4e0a",Object(a.b)("inlineCode",{parentName:"li"},"Cron"),"\u8868\u8fbe\u5f0f")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Service\npublic class ScheduledService {\n    //cron\u8868\u8fbe\u5f0f\n    //\u79d2 \u5206 \u65f6 \u65e5 \u6708 \u5468\u51e0\n    //0  *  *  * * MON-FRI\n    @Scheduled(cron = "0 * * * * 0-7")\n    public void hello(){\n        System.out.println("hello\uff0c\u5728\u6307\u5b9a\u65f6\u95f4\u6267\u884c");\n    }\n}\n')),Object(a.b)("h2",{id:"cron\u8868\u8fbe\u5f0f"},"Cron\u8868\u8fbe\u5f0f"),Object(a.b)("p",null,"\u5728\u8fd9\u4e2a\u7f51\u7ad9\u53ef\u4ee5\u751f\u6210Cron\u8868\u8fbe\u5f0f"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.bejson.com/othertools/cron/"}),"http://www.bejson.com/othertools/cron/")),Object(a.b)("h2",{id:"\u5e38\u7528\u8868\u8fbe\u5f0f"},"\u5e38\u7528\u8868\u8fbe\u5f0f"),Object(a.b)("p",null,"\u200b       \uff081\uff09",Object(a.b)("strong",{parentName:"p"},"0/2 ","*"," ","*"," ","*"," ","*"," ?"),"  \u8868\u793a\u6bcf2\u79d2 \u6267\u884c\u4efb\u52a1"),Object(a.b)("p",null,"\u3000\u3000\uff081\uff09",Object(a.b)("strong",{parentName:"p"},"0 0/2 ","*"," ","*"," ","*"," ?"),"  \u8868\u793a\u6bcf2\u5206\u949f \u6267\u884c\u4efb\u52a1"),Object(a.b)("p",null,"\u3000\u3000\uff081\uff09",Object(a.b)("strong",{parentName:"p"},"0 0 2 1 ","*"," ?"),"  \u8868\u793a\u5728\u6bcf\u6708\u76841\u65e5\u7684\u51cc\u66682\u70b9\u8c03\u6574\u4efb\u52a1"),Object(a.b)("p",null,"\u3000\u3000\uff082\uff09",Object(a.b)("strong",{parentName:"p"},"0 15 10 ? ","*"," MON-FRI"),"  \u8868\u793a\u5468\u4e00\u5230\u5468\u4e94\u6bcf\u5929\u4e0a\u534810:15\u6267\u884c\u4f5c\u4e1a"),Object(a.b)("p",null,"\u3000\u3000\uff083\uff09",Object(a.b)("strong",{parentName:"p"},"0 15 10 ? 6L 2002-2006"),"  \u8868\u793a2002-2006\u5e74\u7684\u6bcf\u4e2a\u6708\u7684\u6700\u540e\u4e00\u4e2a\u661f\u671f\u4e94\u4e0a\u534810:15\u6267\u884c\u4f5c"),Object(a.b)("p",null,"\u3000\u3000\uff084\uff09",Object(a.b)("strong",{parentName:"p"},"0 0 10,14,16 ","*"," ","*"," ?"),"  \u6bcf\u5929\u4e0a\u534810\u70b9\uff0c\u4e0b\u53482\u70b9\uff0c4\u70b9 "),Object(a.b)("p",null,"\u3000\u3000\uff085\uff09",Object(a.b)("strong",{parentName:"p"},"0 0/30 9-17 ","*"," ","*"," ?"),"  \u671d\u4e5d\u665a\u4e94\u5de5\u4f5c\u65f6\u95f4\u5185\u6bcf\u534a\u5c0f\u65f6 "),Object(a.b)("p",null,"\u3000\u3000\uff086\uff09",Object(a.b)("strong",{parentName:"p"},"0 0 12 ? ","*"," WED"),"   \u8868\u793a\u6bcf\u4e2a\u661f\u671f\u4e09\u4e2d\u534812\u70b9 "),Object(a.b)("p",null,"\u3000\u3000\uff087\uff09",Object(a.b)("strong",{parentName:"p"},"0 0 12 ","*"," ","*"," ?"),"  \u6bcf\u5929\u4e2d\u534812\u70b9\u89e6\u53d1 "),Object(a.b)("p",null,"\u3000\u3000\uff088\uff09",Object(a.b)("strong",{parentName:"p"},"0 15 10 ? ","*"," ","*"),"   \u6bcf\u5929\u4e0a\u534810:15\u89e6\u53d1 "),Object(a.b)("p",null,"\u3000\u3000\uff089\uff09",Object(a.b)("strong",{parentName:"p"},"0 15 10 ","*"," ","*"," ?"),"   \u6bcf\u5929\u4e0a\u534810:15\u89e6\u53d1 "),Object(a.b)("p",null,"\u3000\u3000\uff0810\uff09",Object(a.b)("strong",{parentName:"p"},"0 15 10 ","*"," ","*"," ?"),"   \u6bcf\u5929\u4e0a\u534810:15\u89e6\u53d1 "),Object(a.b)("p",null,"\u3000\u3000\uff0811\uff09",Object(a.b)("strong",{parentName:"p"},"0 15 10 ","*"," ","*"," ? 2005"),"   2005\u5e74\u7684\u6bcf\u5929\u4e0a\u534810:15\u89e6\u53d1 "),Object(a.b)("p",null,"\u3000\u3000\uff0812\uff09",Object(a.b)("strong",{parentName:"p"},"0 ","*"," 14 ","*"," ","*"," ?"),"   \u5728\u6bcf\u5929\u4e0b\u53482\u70b9\u5230\u4e0b\u53482:59\u671f\u95f4\u7684\u6bcf1\u5206\u949f\u89e6\u53d1 "),Object(a.b)("p",null,"\u3000\u3000\uff0813\uff09",Object(a.b)("strong",{parentName:"p"},"0 0/5 14 ","*"," ","*"," ?"),"   \u5728\u6bcf\u5929\u4e0b\u53482\u70b9\u5230\u4e0b\u53482:55\u671f\u95f4\u7684\u6bcf5\u5206\u949f\u89e6\u53d1 "),Object(a.b)("p",null,"\u3000\u3000\uff0814\uff09",Object(a.b)("strong",{parentName:"p"},"0 0/5 14,18 ","*"," ","*"," ?"),"   \u5728\u6bcf\u5929\u4e0b\u53482\u70b9\u52302:55\u671f\u95f4\u548c\u4e0b\u53486\u70b9\u52306:55\u671f\u95f4\u7684\u6bcf5\u5206\u949f\u89e6\u53d1 "),Object(a.b)("p",null,"\u3000\u3000\uff0815\uff09",Object(a.b)("strong",{parentName:"p"},"0 0-5 14 ","*"," ","*"," ?"),"   \u5728\u6bcf\u5929\u4e0b\u53482\u70b9\u5230\u4e0b\u53482:05\u671f\u95f4\u7684\u6bcf1\u5206\u949f\u89e6\u53d1 "),Object(a.b)("p",null,"\u3000\u3000\uff0816\uff09",Object(a.b)("strong",{parentName:"p"},"0 10,44 14 ? 3 WED"),"   \u6bcf\u5e74\u4e09\u6708\u7684\u661f\u671f\u4e09\u7684\u4e0b\u53482:10\u548c2:44\u89e6\u53d1 "),Object(a.b)("p",null,"\u3000\u3000\uff0817\uff09",Object(a.b)("strong",{parentName:"p"},"0 15 10 ? ","*"," MON-FRI"),"   \u5468\u4e00\u81f3\u5468\u4e94\u7684\u4e0a\u534810:15\u89e6\u53d1 "),Object(a.b)("p",null,"\u3000\u3000\uff0818\uff09",Object(a.b)("strong",{parentName:"p"},"0 15 10 15 ","*"," ?"),"   \u6bcf\u670815\u65e5\u4e0a\u534810:15\u89e6\u53d1 "),Object(a.b)("p",null,"\u3000\u3000\uff0819\uff09",Object(a.b)("strong",{parentName:"p"},"0 15 10 L ","*"," ?"),"   \u6bcf\u6708\u6700\u540e\u4e00\u65e5\u7684\u4e0a\u534810:15\u89e6\u53d1 "),Object(a.b)("p",null,"\u3000\u3000\uff0820\uff09",Object(a.b)("strong",{parentName:"p"},"0 15 10 ? ","*"," 6L"),"   \u6bcf\u6708\u7684\u6700\u540e\u4e00\u4e2a\u661f\u671f\u4e94\u4e0a\u534810:15\u89e6\u53d1 "),Object(a.b)("p",null,"\u3000\u3000\uff0821\uff09",Object(a.b)("strong",{parentName:"p"},"0 15 10 ? ","*"," 6L 2002-2005"),"  2002\u5e74\u81f32005\u5e74\u7684\u6bcf\u6708\u7684\u6700\u540e\u4e00\u4e2a\u661f\u671f\u4e94\u4e0a\u534810:15\u89e6\u53d1 "),Object(a.b)("p",null,"\u3000\u3000\uff0822\uff09",Object(a.b)("strong",{parentName:"p"},"0 15 10 ? ","*"," 6#3"),"  \u6bcf\u6708\u7684\u7b2c\u4e09\u4e2a\u661f\u671f\u4e94\u4e0a\u534810:15\u89e6\u53d1"))}p.isMDXComponent=!0},362:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),i=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=i(n),s=r,j=u["".concat(c,".").concat(s)]||u[s]||O[s]||b;return n?a.a.createElement(j,l(l({ref:t},p),{},{components:n})):a.a.createElement(j,l({ref:t},p))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=n.length,c=new Array(b);c[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<b;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);