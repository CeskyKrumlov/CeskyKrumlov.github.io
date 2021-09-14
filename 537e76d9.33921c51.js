(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{215:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),b=a(6),i=(a(0),a(570)),c={id:"14.circleDependence",title:"\u5faa\u73af\u4f9d\u8d56",hide_title:!0},r={unversionedId:"spring/14.circleDependence",id:"spring/14.circleDependence",isDocsHomePage:!1,title:"\u5faa\u73af\u4f9d\u8d56",description:"14. Spring \u5faa\u73af\u4f9d\u8d56",source:"@site/docs/spring/14.\u5faa\u73af\u4f9d\u8d56.md",slug:"/spring/14.circleDependence",permalink:"/docs/spring/14.circleDependence",version:"current",sidebar:"someSidebar",previous:{title:"\u58f0\u660e\u5f0f\u4e8b\u52a1",permalink:"/docs/spring/13.springTransaction"},next:{title:"Mybatis\u5feb\u901f\u5165\u95e8",permalink:"/docs/mybatis/1.mybatis"}},l=[{value:"14. Spring \u5faa\u73af\u4f9d\u8d56",id:"14-spring-\u5faa\u73af\u4f9d\u8d56",children:[]},{value:"\u6784\u9020\u5668\u6ce8\u5165\u4e0e Set \u6ce8\u5165\u5bf9\u5faa\u73af\u4f9d\u8d56\u7684\u5f71\u54cd",id:"\u6784\u9020\u5668\u6ce8\u5165\u4e0e-set-\u6ce8\u5165\u5bf9\u5faa\u73af\u4f9d\u8d56\u7684\u5f71\u54cd",children:[]},{value:"Spring \u5185\u90e8\u901a\u8fc7\u4e09\u7ea7\u7f13\u5b58\u89e3\u51b3\u5faa\u73af\u4f9d\u8d56\u95ee\u9898",id:"spring-\u5185\u90e8\u901a\u8fc7\u4e09\u7ea7\u7f13\u5b58\u89e3\u51b3\u5faa\u73af\u4f9d\u8d56\u95ee\u9898",children:[{value:"DefaultSingletonBeanRegistry",id:"defaultsingletonbeanregistry",children:[]},{value:"Bean \u5982\u4f55\u5728\u4e09\u7ea7\u7f13\u5b58\u4e2d\u79fb\u52a8",id:"bean-\u5982\u4f55\u5728\u4e09\u7ea7\u7f13\u5b58\u4e2d\u79fb\u52a8",children:[{value:"\u5b9e\u4f8b\u5316",id:"\u5b9e\u4f8b\u5316",children:[]},{value:"\u521d\u59cb\u5316\u5c5e\u6027\u586b\u5145",id:"\u521d\u59cb\u5316\u5c5e\u6027\u586b\u5145",children:[]},{value:"\u4e09\u4e2a Map \u548c\u56db\u5927\u65b9\u6cd5\u3001\u76f8\u5173\u5bf9\u8c61",id:"\u4e09\u4e2a-map-\u548c\u56db\u5927\u65b9\u6cd5\u3001\u76f8\u5173\u5bf9\u8c61",children:[]},{value:"A / B \u4e24\u4e2a\u5bf9\u8c61\u518d\u4e09\u7ea7\u7f13\u5b58\u4e2d\u7684\u8fc1\u79fb\u8bf4\u660e",id:"a--b-\u4e24\u4e2a\u5bf9\u8c61\u518d\u4e09\u7ea7\u7f13\u5b58\u4e2d\u7684\u8fc1\u79fb\u8bf4\u660e",children:[]}]}]}],o={rightToc:l};function p(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"14-spring-\u5faa\u73af\u4f9d\u8d56"},"14. Spring \u5faa\u73af\u4f9d\u8d56"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u4ec0\u4e48\u662f\u5faa\u73af\u4f9d\u8d56")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u591a\u4e2a Bean \u4e4b\u95f4\u76f8\u4e92\u4f9d\u8d56\uff0c\u5f62\u6210\u4e86\u4e00\u4e2a\u95ed\u73af"),Object(i.b)("li",{parentName:"ul"},"\u4f8b\u5982\uff1aA \u4f9d\u8d56 B\u3001 B \u4f9d\u8d56 C\u3001C \u4f9d\u8d56 A"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u4e00\u822c\u95ee Spring \u5bb9\u5668\u5185\u90e8\u5982\u4f55\u89e3\u51b3\u5faa\u73af\u4f9d\u8d56\u95ee\u9898\uff0c\u662f ",Object(i.b)("inlineCode",{parentName:"strong"},"\u9ed8\u8ba4\u5355\u4f8bBean\u4e2d"),"\uff0c\u5c5e\u6027\u4e92\u76f8\u5f15\u7528\u7684\u573a\u666f"))),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"@Component\npublic class A {\n    @Autowired\n    private B b;\n}\n")),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"@Component\npublic class B {\n    @Autowired\n    private C c;\n}\n")),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"@Component\npublic class C {\n    @Autowired\n    private A a;\n}\n"))),Object(i.b)("br",null),Object(i.b)("h1",{id:"\u6784\u9020\u5668\u6ce8\u5165\u4e0e-set-\u6ce8\u5165\u5bf9\u5faa\u73af\u4f9d\u8d56\u7684\u5f71\u54cd"},"\u6784\u9020\u5668\u6ce8\u5165\u4e0e Set \u6ce8\u5165\u5bf9\u5faa\u73af\u4f9d\u8d56\u7684\u5f71\u54cd"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u5728 Spring \u4e2a\u5b98\u65b9\u6587\u6863\uff0c\u4f9d\u8d56\u6ce8\u5165\u90e8\u5206\u6709\u5199\u5230"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u5982\u679c\u7528\u6784\u9020\u5668\u6ce8\u5165\uff0c\u53ef\u80fd\u4ea7\u751f\u65e0\u6cd5\u89e3\u51b3\u7684\u5faa\u73af\u4f9d\u8d56\u95ee\u9898\uff0c\u629b\u51fa ",Object(i.b)("inlineCode",{parentName:"strong"},"BeanCurrentlyInCreationException")))),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// \u4f1a\u51fa\u73b0\u8fd9\u79cd\u4ee3\u7801\npublic Main {\n    public static void main(String[] args) {\n        new A(new B(new A(new (B))))..... // \u5199\u4e0d\u5b8c\n    }\n}\n")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u7ed3\u8bba\uff1a\u53ea\u8981\u5faa\u73af\u4f9d\u8d56\u95ee\u9898\u4e2d\uff0cA \u4f7f\u7528\u7684\u6ce8\u5165\u65b9\u5f0f\u662f set \u6ce8\u5165\uff0c\u4e14\u4e3a\u5355\u4f8b ",Object(i.b)("inlineCode",{parentName:"strong"},"singleton"),"\uff0c\u5c31\u4e0d\u4f1a\u4ea7\u751f\u5faa\u73af\u4f9d\u8d56\u95ee\u9898")),Object(i.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7684\u5355\u4f8b singletion \u573a\u666f\u652f\u6301\u5faa\u73af\u4f9d\u8d56\uff0c\u4e0d\u4f1a\u62a5\u9519\uff1b\u539f\u578b prototype \u573a\u666f\u4e0d\u652f\u6301\u5faa\u73af\u4f9d\u8d56\uff0c\u4f1a\u62a5\u9519"))),Object(i.b)("br",null),Object(i.b)("h1",{id:"spring-\u5185\u90e8\u901a\u8fc7\u4e09\u7ea7\u7f13\u5b58\u89e3\u51b3\u5faa\u73af\u4f9d\u8d56\u95ee\u9898"},"Spring \u5185\u90e8\u901a\u8fc7\u4e09\u7ea7\u7f13\u5b58\u89e3\u51b3\u5faa\u73af\u4f9d\u8d56\u95ee\u9898"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u63d0\u793a")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u6240\u8c13\u7684\u4e09\u7ea7\u7f13\u5b58\uff0c\u5c31\u662f Spring \u5185\u90e8\u5b9a\u4e49\u7684\u4e09\u4e2a Map"))),Object(i.b)("h2",{id:"defaultsingletonbeanregistry"},"DefaultSingletonBeanRegistry"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u9ed8\u8ba4\u5355\u4f8b Bean \u7f13\u5b58\uff0c\u4e0b\u9762\u6709\u4e09\u4e2a\u6210\u5458 Map"),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"- Map<String, Object> `singletonObjects` = new ConcurrentHashMap<>(256); \n  - \u4fd7\u79f0\u4e00\u7ea7\u7f13\u5b58\uff1a\u4e5f\u53eb\u5355\u4f8b\u6c60\uff0c\u5b58\u653e\u5df2\u7ecf\u7ecf\u5386\u5b8c\u5b8c\u6574\u751f\u547d\u5468\u671f\u7684 Bean \u5bf9\u8c61\n- Map<String, Object> `earlySingletonObjects` = new HashMap(256);\n  - \u4fd7\u79f0\u4e8c\u7ea7\u7f13\u5b58\uff1a\u5b58\u653e\u65e9\u671f\u66b4\u9732\u51fa\u6765\u7684 Bean \u5bf9\u8c61\uff0cBean \u7684\u751f\u547d\u5468\u671f\u672a\u7ed3\u675f\uff08\u5c5e\u6027\u8fd8\u672a\u6ce8\u5165\u5b8c\uff09\n- Map<String, ObjectFactory<?>> `singletonFactories` = new HashMap<>(16);\n  - \u4fd7\u79f0\u4e09\u7ea7\u7f13\u5b58\uff1a\u5b58\u653e\u53ef\u4ee5\u751f\u6210 Bean \u7684\u5de5\u5382\n"))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u7ed3\u8bba")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u53ea\u6709\u5355\u4f8b\u7684 Bean \u4f1a\u901a\u8fc7\u4e09\u7ea7\u7f13\u5b58\u63d0\u524d\u66b4\u9732\u6765\u89e3\u51b3\u5faa\u73af\u4f9d\u8d56\u95ee\u9898\uff0c\u800c\u975e\u5355\u4f8b\u7684 Bean\uff0c\u6bcf\u6b21\u4ece\u5bb9\u5668\u4e2d\u83b7\u53d6\u7684\u90fd\u662f\u4e00\u4e2a\u65b0\u7684\u5bf9\u8c61\uff0c\u4f1a\u91cd\u65b0\u521b\u5efa\uff0c\u6240\u4ee5\u975e\u5355\u4f8b\u7684 Bean \u6ca1\u6709\u7f13\u5b58\uff0c\u4e0d\u4f1a\u5c06\u5176\u653e\u5230\u4e09\u7ea7\u7f13\u5b58\u4e2d"))),Object(i.b)("h2",{id:"bean-\u5982\u4f55\u5728\u4e09\u7ea7\u7f13\u5b58\u4e2d\u79fb\u52a8"},"Bean \u5982\u4f55\u5728\u4e09\u7ea7\u7f13\u5b58\u4e2d\u79fb\u52a8"),Object(i.b)("h3",{id:"\u5b9e\u4f8b\u5316"},"\u5b9e\u4f8b\u5316"),Object(i.b)("p",null,"\u5185\u5b58\u4e2d\u7533\u8bf7\u4e00\u5757\u5185\u5b58\u7a7a\u95f4"),Object(i.b)("h3",{id:"\u521d\u59cb\u5316\u5c5e\u6027\u586b\u5145"},"\u521d\u59cb\u5316\u5c5e\u6027\u586b\u5145"),Object(i.b)("p",null,"\u6ce8\u5165\u6210\u5458\u5c5e\u6027"),Object(i.b)("h3",{id:"\u4e09\u4e2a-map-\u548c\u56db\u5927\u65b9\u6cd5\u3001\u76f8\u5173\u5bf9\u8c61"},"\u4e09\u4e2a Map \u548c\u56db\u5927\u65b9\u6cd5\u3001\u76f8\u5173\u5bf9\u8c61"),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u4e00\u7ea7\u7f13\u5b58\uff1asingletonObjects"),Object(i.b)("li",{parentName:"ul"},"\u4e8c\u7ea7\u7f13\u5b58\uff1asingletonFactories"),Object(i.b)("li",{parentName:"ul"},"\u4e09\u7ea7\u7f13\u5b58\uff1aearlySingletonObjects"))),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"getSingleton()\uff1a\u83b7\u53d6\u5355\u4f8b Bean \u7684\u65b9\u6cd5\uff0c\u5982\u679c\u62ff\u4e0d\u5230\u624d\u53bb\u521b\u5efa"),Object(i.b)("li",{parentName:"ul"},"doCreateBean()\uff1a\u521b\u5efa Bean"),Object(i.b)("li",{parentName:"ul"},"populateBean()\uff1a\u586b\u5145 Bean \u7684\u5c5e\u6027\uff0c\u4f1a\u88ab doCreate() \u8c03\u7528"),Object(i.b)("li",{parentName:"ul"},"addSingletton()\uff1a\u5c06\u586b\u5145\u597d\u5c5e\u6027\u7684 Bean \u4ece\u4e09\u7ea7\u5230\u4e00\u7ea7\u9010\u7ea7\u6dfb\u52a0\u5230\u7f13\u5b58\u4e2d\u7684\u65b9\u6cd5"))),Object(i.b)("h3",{id:"a--b-\u4e24\u4e2a\u5bf9\u8c61\u518d\u4e09\u7ea7\u7f13\u5b58\u4e2d\u7684\u8fc1\u79fb\u8bf4\u660e"},"A / B \u4e24\u4e2a\u5bf9\u8c61\u518d\u4e09\u7ea7\u7f13\u5b58\u4e2d\u7684\u8fc1\u79fb\u8bf4\u660e"),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u4e00\u7ea7\u7f13\u5b58\uff1asingletonObjects \u5b58\u653e\u7684\u662f\u5df2\u7ecf\u521d\u59cb\u5316\u7684 Bean"),Object(i.b)("li",{parentName:"ul"},"\u4e8c\u7ea7\u7f13\u5b58\uff1aearlySingletonObjects \u5b58\u653e\u7684\u662f\u5b9e\u4f8b\u5316\uff0c\u4f46\u662f\u4e3a\u521d\u59cb\u5316\u7684 Bean"),Object(i.b)("li",{parentName:"ul"},"\u4e09\u7ea7\u7f13\u5b58\uff1asingletionFactories \u5b58\u653e\u7684\u662f FactoryBean\u3002\u5047\u8bbe A \u7c7b\u5b9e\u73b0\u4e86 FactoryBean \u90a3\u4e48\u4f9d\u8d56\u6ce8\u5165\u7684\u65f6\u5019\u4e0d\u662f A \u7c7b\uff0c\u800c\u662f A \u7c7b\u4ea7\u751f\u7684 Bean"))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u5b9e\u4f8b\u5316 A \u7684\u8fc7\u7a0b\u4e2d\u9700\u8981\u5b9e\u4f8b\u5316 B"),Object(i.b)("ol",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ol"},"A \u521b\u5efa\u8fc7\u7a0b\u4e2d\u9700\u8981 B\uff0c\u4e8e\u662f A \u628a\u81ea\u5df1\u653e\u5230\u4e09\u7ea7\u7f13\u5b58\u4e2d\uff0c\u8f6c\u800c\u53bb\u5b9e\u4f8b\u5316 B"),Object(i.b)("li",{parentName:"ol"},"B \u5b9e\u4f8b\u5316\u65f6\u53d1\u73b0\u9700\u8981 A\uff0c\u4e8e\u662f B \u5148\u67e5\u770b\u4e00\u7ea7\u7f13\u5b58\uff0c\u6ca1\u6709A\uff1b\u518d\u68c0\u67e5\u4e8c\u7ea7\u7f13\u5b58\uff0c\u6ca1\u6709 A\uff1b\u518d\u68c0\u67e5\u4e09\u7ea7\u7f13\u5b58\uff0c\u53d1\u73b0\u4e86 A\uff0c",Object(i.b)("strong",{parentName:"li"},"\u4e8e\u662f\u628a\u4e09\u7ea7\u7f13\u5b58\u4e2d\u7684 A \u62ff\u5230\u4e8c\u7ea7\u7f13\u5b58\u4e2d\uff0c\u5e76\u5220\u9664\u4e09\u5b63\u7f13\u5b58\u4e2d\u7684 A"),"\u7684"),Object(i.b)("li",{parentName:"ol"},"B \u987a\u5229\u521d\u59cb\u5316\u5b8c\u6bd5\uff0c\u5c06\u81ea\u5df1\u653e\u5230\u4e00\u7ea7\u7f13\u5b58\u4e2d \uff08\u6b64\u65f6 B \u4e2d\u7684 A \u4f9d\u7136\u662f\u521b\u5efa\u4e2d\u72b6\u6001\uff09\u3002\u63a5\u7740\uff0c\u56de\u6765\u7ee7\u7eed\u521b\u5efa A\uff0c\u6b64\u65f6 B \u5df2\u7ecf\u521b\u5efa\u7ed3\u675f\uff0cA \u4ece\u4e00\u7ea7\u7f13\u5b58\u4e2d\u627e\u5230 B\uff0c\u5b8c\u6210\u521b\u5efa\uff0c\u6700\u540e A \u628a\u81ea\u5df1\u4ece\u4e8c\u7ea7\u7f13\u5b58\u653e\u5230\u4e00\u7ea7\u7f13\u5b58\u4e2d"))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u5728 A / B \u7684\u6784\u9020\u65b9\u6cd5\u4e2d\u5199\u4e00\u53e5 sout\uff0c\u901a\u8fc7\u4f55\u65f6\u6253\u5370\u51fa\u4e24\u53e5 sout\uff0c\u6765\u8ffd\u8e2a Spring \u521d\u59cb\u5316\u5355\u4f8b Bean \u7684\u4ee3\u7801\u4f4d\u7f6e"),Object(i.b)("ol",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ol"},'context.getBean("a", A.class)'),Object(i.b)("li",{parentName:"ol"},"ClassPathXmlApplicationContext \u7c7b, refresh() \u65b9\u6cd5"),Object(i.b)("li",{parentName:"ol"},"AbstractApplicationContext \u7c7b finishBeanFactoryInitialization(beanFactory) \u65b9\u6cd5 \uff08\u521d\u59cb\u5316\u6240\u6709\u4f9d\u7136\u5b58\u5728\u7684\uff0c\u975e\u61d2\u52a0\u8f7d\u5355\u4f8b Bean\uff09"),Object(i.b)("li",{parentName:"ol"},"AbstractApplicationContext \u7c7b\uff0cpreInstantiateSingletons() \u65b9\u6cd5\uff08\u521d\u59cb\u5316\u6240\u6709\u4f9d\u7136\u5b58\u5728\u7684\uff0c\u975e\u61d2\u52a0\u8f7d\u5355\u4f8b Bean\uff09"),Object(i.b)("li",{parentName:"ol"},"AbstractionBeanFactory \u7c7b ",Object(i.b)("inlineCode",{parentName:"li"},"doGetBean()")),Object(i.b)("li",{parentName:"ol"},"doGetBean() \u8c03\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},"getSingleton(beanName)")),Object(i.b)("li",{parentName:"ol"},"getSingleton \u65b9\u6cd5\u8c03\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},"singletonObject.get(beanName)")," ",Object(i.b)("strong",{parentName:"li"},"\u4e00\u7ea7\u7f13\u5b58\u4e2d\u627e"),"\uff0c\u6b64\u65f6\u65e2\u6ca1\u6709\u5bb9\u5668\uff0c\u4e5f\u6ca1\u6709\u5bf9\u8c61\uff0c\u56e0\u6b64\u540e\u7eed\u8981\u8d70 ",Object(i.b)("inlineCode",{parentName:"li"},"doCreateBean"),"\u3001",Object(i.b)("inlineCode",{parentName:"li"},"populateBean"),"\u3001",Object(i.b)("inlineCode",{parentName:"li"},"addSingletton")," \u8fd9\u4e09\u4e2a\u65b9\u6cd5"),Object(i.b)("li",{parentName:"ol"},"doCreateBean \u4e2d\uff0caddSingletonFactory(String beanName, ObjectFactory<?> singletonFactory) \u65b9\u6cd5\u4e2d\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"singletonFactories.put(beanName, singletonFactory)")," ",Object(i.b)("strong",{parentName:"li"},"\u628a\u521b\u5efa\u597d\u7684 Bean \u653e\u5230\u4e09\u7ea7\u7f13\u5b58\uff0c\u5373 a \u5df2\u7ecf\u653e\u5165\u4e86\u4e09\u7ea7\u7f13\u5b58")),Object(i.b)("li",{parentName:"ol"},"\u8c03\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},"populateBean(beanName, mbd, instanceWrapper)"),"\uff0c\u5176\u4e2d\u5c5e\u6027 PropertyValues \u8bb0\u5f55\u5f53\u524d Bean \u9700\u8981\u586b\u5145\u7684\u5c5e\u6027\uff0c\u53d1\u73b0\u9700\u8981\u586b\u5145\u4e00\u4e2a B \u7c7b\u7684\u5bf9\u8c61\uff0c\u4f46\u662f B \u7684\u5bf9\u8c61\u8fd8\u4e0d\u5b58\u5728\uff0c\u89e6\u53d1 ",Object(i.b)("inlineCode",{parentName:"li"},"resolveValueIfNecessary(Object argName, Object value)")," \u65b9\u6cd5\uff0c\u89e6\u53d1 ",Object(i.b)("inlineCode",{parentName:"li"},"resolveReference")," \u65b9\u6cd5\u5904\u7406\u5f15\u7528"),Object(i.b)("li",{parentName:"ol"},"\u89e6\u53d1 ",Object(i.b)("inlineCode",{parentName:"li"},"doGetBean()")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"getSingleton(beanName)"),".... -> \u53bb\u4e00\u7ea7\u7f13\u5b58\u4e2d\u627e\u627e\u4e0d\u5230 b -> ",Object(i.b)("inlineCode",{parentName:"li"},"doCreateBean")," -> ... \u76f4\u5230 b \u88ab\u521b\u5efa\uff0c",Object(i.b)("strong",{parentName:"li"},"\u4e5f\u88ab\u653e\u5230\u4e09\u7ea7\u7f13\u5b58"))),Object(i.b)("div",Object(n.a)({parentName:"blockquote"},{className:"admonition admonition-info alert alert--info"}),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u6b64\u65f6\u72b6\u6001")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u6b64\u65f6 a / b \u4e24\u4e2a bean \u90fd\u5728\u4e09\u7ea7\u7f13\u5b58\u4e2d"))),Object(i.b)("ol",Object(n.a)({parentName:"blockquote"},{start:11}),Object(i.b)("li",{parentName:"ol"},"b \u8c03\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},"populateBean()")," \u65b9\u6cd5\u5c1d\u8bd5\u586b\u5145\u5c5e\u6027\uff0c\u53d1\u73b0\u9700\u8981\u4e00\u4e2a a\uff0c\u8c03\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},"getSingleton")," \u53bb\u627e a\uff0c",Object(i.b)("strong",{parentName:"li"},"\u641c\u7d22\u4e00\u7ea7\u7f13\u5b58"),"\u53d1\u73b0\u4e0d\u5b58\u5728 a\uff0c\u5e76\u4e14\u6b64\u65f6 ",Object(i.b)("strong",{parentName:"li"},"a \u6b63\u5904\u4e8e\u88ab\u521b\u5efa\u7684\u8fc7\u7a0b\u4e2d\uff08\u56e0\u4e3a\u5728\u4e09\u7ea7\u7f13\u5b58\u4e2d\uff09"),",\u6ee1\u8db3\u8fd9\u4e24\u4e2a\u6761\u4ef6\uff0c",Object(i.b)("strong",{parentName:"li"},"\u5c1d\u8bd5\u4ece\u4e8c\u7ea7\u7f13\u5b58 earlySingletonObjects \u83b7\u53d6 a"),"\uff0c",Object(i.b)("strong",{parentName:"li"},"\u5982\u679c\u83b7\u53d6\u7ed3\u679c\u4e3a null \u8bf4\u660e\u4e8c\u7ea7\u7f13\u5b58\u4e5f\u6ca1\u6709\uff0c\u5c31\u53bb \u4e09\u7ea7\u7f13\u5b58 singletonFactories \u4e2d\u627e\u5230 a\uff0c\u5e76\u4e14\u628a a \u79fb\u52a8\u5230\u4e8c\u7ea7\u7f13\u5b58"))),Object(i.b)("div",Object(n.a)({parentName:"blockquote"},{className:"admonition admonition-info alert alert--info"}),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u6b64\u65f6\u72b6\u6001")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"a \u5728\u4e8c\u7ea7\u7f13\u5b58\u4e2d\uff0c\u5b83\u521a\u521a\u4ece\u4e09\u7ea7\u7f13\u5b58\u4e2d\u88ab\u5220\u9664\uff0c\u6dfb\u52a0\u5230\u4e8c\u7ea7\u7f13\u5b58\u4e2d"),Object(i.b)("li",{parentName:"ul"},"b \u8fd8\u5728\u4e09\u7ea7\u7f13\u5b58\u4e2d")))),Object(i.b)("ol",Object(n.a)({parentName:"blockquote"},{start:12}),Object(i.b)("li",{parentName:"ol"},"\u628a a \u586b\u5145\u5230 b \u7684\u6210\u5458\u5c5e\u6027 a \u4e2d\uff0c\u518d\u6b21\u6765\u5230 ",Object(i.b)("inlineCode",{parentName:"li"},"getSingleton()")," \u65b9\u6cd5\uff0c\u5728",Object(i.b)("strong",{parentName:"li"},"\u4e00\u7ea7\u7f13\u5b58\u4e2d\u627e b"),"\uff0c\u6ca1\u627e\u5230\uff0c\u4e14 allowEarlyBean \u4e3a false\uff0c\u4e0d\u53bb\u4e09\u7ea7\u7f13\u5b58\u627e\uff0c\u7ee7\u7eed\u6267\u884c\u5230 ",Object(i.b)("inlineCode",{parentName:"li"},"addSingleton(beanName, singletonObject)")," \u65b9\u6cd5\uff0c",Object(i.b)("strong",{parentName:"li"},"\u628a b \u52a0\u5165\u5230\u4e00\u7ea7\u7f13\u5b58\uff0c\u540c\u65f6\u65e0\u8111\u79fb\u9664\u4e8c\u7ea7\u3001\u4e09\u7ea7\u7f13\u5b58\u4e2d\u53ef\u80fd\u5b58\u5728\u7684\u4efb\u4f55 b Bean"))),Object(i.b)("div",Object(n.a)({parentName:"blockquote"},{className:"admonition admonition-info alert alert--info"}),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u6b64\u65f6\u72b6\u6001")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"a \u5728\u4e8c\u7ea7\u7f13\u5b58\u4e2d"),Object(i.b)("li",{parentName:"ul"},"b \u5728\u4e00\u7ea7\u7f13\u5b58\u4e2d\uff0c\u5b83\u4ece\u4e09\u7ea7\u7f13\u5b58\u76f4\u63a5\u8e66\u8df6\u5230\u4e86\u4e00\u7ea7\u7f13\u5b58")))),Object(i.b)("ol",Object(n.a)({parentName:"blockquote"},{start:13}),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"\u6b64\u65f6 a \u8fd8\u6ca1\u6709\u521b\u5efa\u5b8c\u6210"),"\uff0c\u5728\u4e00\u7ea7\u7f13\u5b58\u4e2d\u641c\u7d20 a\uff0c\u6ca1\u6709\uff0c\u4e14 a \u6b63\u5728\u521b\u5efa\u8fc7\u7a0b\u4e2d\uff0c\u5219\u53bb\u4e8c\u7ea7\u7f13\u5b58\u627e a\uff0c\u627e\u5230\u4e86"),Object(i.b)("li",{parentName:"ol"},"a \u8c03\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},"populateBean()"),"\uff0c\u586b\u5145\u5c5e\u6027\uff0c\u53d1\u73b0\u9700\u8981\u4e00\u4e2a b\uff0c\u8c03\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},"getSingleton")," \u53bb\u627e b\uff0c\u5728",Object(i.b)("strong",{parentName:"li"},"\u4e00\u7ea7\u7f13\u5b58\u4e2d\u53d1\u73b0\u4e86 b"),"\uff0c\u628a b \u8bbe\u7f6e\u5230\u81ea\u5df1\u7684\u6210\u5458\u5c5e\u6027 b \u4e0a"),Object(i.b)("li",{parentName:"ol"},"a \u8c03\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},"addSingleton()")," \u65b9\u6cd5\uff0c\u628a\u81ea\u5df1 ",Object(i.b)("strong",{parentName:"li"},"\u8bbe\u7f6e\u5230\u4e00\u7ea7\u7f13\u5b58\uff0c\u540c\u65f6\u5220\u9664\u4e8c\u7ea7\u3001\u4e09\u7ea7\u7f13\u5b58\u4e2d\u4efb\u4f55 a Bean"))),Object(i.b)("div",Object(n.a)({parentName:"blockquote"},{className:"admonition admonition-info alert alert--info"}),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u6b64\u65f6\u72b6\u6001")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"a \u4ece\u4e8c\u7ea7\u7f13\u5b58\u8fdb\u5165\u4e00\u7ea7\u7f13\u5b58"),Object(i.b)("li",{parentName:"ul"},"a / b \u90fd\u8fdb\u5165\u4e00\u7ea7\u7f13\u5b58\uff0c\u5b8c\u4e8b")))),Object(i.b)("ol",Object(n.a)({parentName:"blockquote"},{start:16}),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"getBean()")," \u65b9\u6cd5\u6267\u884c\u5b8c\u6bd5\uff0c\u8fd4\u56de A \u7c7b\u7684\u5b9e\u4f8b\u5316\u5bf9\u8c61 a"),Object(i.b)("li",{parentName:"ol"},"\u6267\u884c B \u7c7b\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"getBean()"),"\uff0c\u6b64\u65f6\u53ef\u4ee5\u76f4\u63a5\u4ece\u4e00\u7ea7\u7f13\u5b58\u4e2d\u83b7\u53d6\u5230 b"))))}p.isMDXComponent=!0},570:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return s}));var n=a(0),b=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),p=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=p(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=p(a),j=n,s=m["".concat(c,".").concat(j)]||m[j]||O[j]||i;return a?b.a.createElement(s,r(r({ref:t},o),{},{components:a})):b.a.createElement(s,r({ref:t},o))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=j;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,c[1]=r;for(var o=2;o<i;o++)c[o]=a[o];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);