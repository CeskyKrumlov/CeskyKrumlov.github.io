(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{135:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(2),a=t(6),o=(t(0),t(502)),c={id:"14.asynTask",title:"\u5f02\u6b65\u4efb\u52a1",hide_title:!0},i={unversionedId:"springboot/14.asynTask",id:"springboot/14.asynTask",isDocsHomePage:!1,title:"\u5f02\u6b65\u4efb\u52a1",description:"\u5f02\u6b65\u4efb\u52a1",source:"@site/docs/springboot/14.\u5f02\u6b65\u4efb\u52a1.md",slug:"/springboot/14.asynTask",permalink:"/docs/springboot/14.asynTask",version:"current",sidebar:"someSidebar",previous:{title:"Swagger\u5206\u7ec4\u4e0e\u63a5\u53e3\u6ce8\u91ca",permalink:"/docs/springboot/13.swaggerGroupAndNote"},next:{title:"\u90ae\u4ef6\u4efb\u52a1",permalink:"/docs/springboot/15.mailTask"}},l=[{value:"\u5f02\u6b65\u4efb\u52a1",id:"\u5f02\u6b65\u4efb\u52a1",children:[]}],p={rightToc:l};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\u5f02\u6b65\u4efb\u52a1"},"\u5f02\u6b65\u4efb\u52a1"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5199\u4e00\u4e2a\u7ebf\u7a0b\u7761\u7720service")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Service\npublic class AsynService {\n    \n    public void hello(){\n        try {\n            Thread.sleep(3000);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n\n        System.out.println("\u6570\u636e\u6b63\u5728\u5904\u7406....");\n    }\n}\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5199\u4e00\u4e2a\u57fa\u672cController")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@RestController\npublic class AsynController {\n\n    @Autowired\n    AsynService asynService;\n\n    @GetMapping("/hello")\n    public String hello() {\n        asynService.hello();\n        return "ok";\n    }\n}\n')),Object(o.b)("p",null,"\u8bbf\u95ee",Object(o.b)("inlineCode",{parentName:"p"},"/hello"),"\u8def\u7531\uff0c\u4f1a\u53d1\u73b0\u9875\u9762\u767d\u4e86\u4e09\u79d2\u624d\u8fd4\u56de\u4e00\u4e2a",Object(o.b)("inlineCode",{parentName:"p"},"ok")),Object(o.b)("p",null,"\u6211\u4eec\u5e0c\u671b\u7f51\u7ad9\u76f4\u63a5\u8fd4\u56de\u4e00\u4e2a",Object(o.b)("inlineCode",{parentName:"p"},"ok"),"\uff0c\u7136\u540e\u80cc\u540e\u5fd9\u7740\u5904\u7406\u8bf7\u6c42"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"\u53ea\u9700\u8981\u5728\u65b9\u6cd5\u4e0a\u7528",Object(o.b)("inlineCode",{parentName:"strong"},"Async"),"\u6ce8\u89e3\u544a\u8bc9Spring\u8fd9\u662f\u4e00\u4e2a\u5f02\u6b65\u65b9\u6cd5"))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Service\npublic class AsynService {\n\n    @Async\n    public void hello(){\n        try {\n            Thread.sleep(3000);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n        System.out.println("\u6570\u636e\u6b63\u5728\u5904\u7406....");\n    }\n}\n')),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"\u5728SpringBoot\u542f\u52a8\u5165\u53e3\u7528",Object(o.b)("inlineCode",{parentName:"li"},"@EnableAsync"),"\u5f00\u542f\u5f02\u6b65\u529f\u80fd")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@EnableAsync\n@SpringBootApplication\npublic class Springboot08EmailApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(Springboot08EmailApplication.class, args);\n    }\n}\n")))}s.isMDXComponent=!0},502:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(t),m=r,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||o;return t?a.a.createElement(d,i(i({ref:n},p),{},{components:t})):a.a.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);