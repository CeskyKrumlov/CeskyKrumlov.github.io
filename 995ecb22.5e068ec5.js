(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{274:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),c=(n(0),n(417)),l={id:"4.jsr303",title:"JSR303\u6570\u636e\u6821\u9a8c",hide_title:!0},i={unversionedId:"springboot/4.jsr303",id:"springboot/4.jsr303",isDocsHomePage:!1,title:"JSR303\u6570\u636e\u6821\u9a8c",description:"JSR303\u6570\u636e\u6821\u9a8c",source:"@site/docs/springboot/4.JSR303\u6821\u9a8c.md",slug:"/springboot/4.jsr303",permalink:"/docs/springboot/4.jsr303",version:"current",sidebar:"someSidebar",previous:{title:"\u591a\u73af\u5883\u5207\u6362",permalink:"/docs/springboot/5.multiEnv"},next:{title:"Web\u9759\u6001\u8d44\u6e90\u5904\u7406",permalink:"/docs/springboot/6.static"}},b=[{value:"JSR303\u6570\u636e\u6821\u9a8c",id:"jsr303\u6570\u636e\u6821\u9a8c",children:[{value:"@Validated",id:"validated",children:[]},{value:"JSR303\u6821\u9a8c\u5168\u90e8\u6ce8\u89e3",id:"jsr303\u6821\u9a8c\u5168\u90e8\u6ce8\u89e3",children:[]}]}],o={rightToc:b};function u(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,l,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"jsr303\u6570\u636e\u6821\u9a8c"},"JSR303\u6570\u636e\u6821\u9a8c"),Object(c.b)("p",null,"\u524d\u7aef\u9a8c\u8bc1\u7528\u6237\u540d\u3001\u5bc6\u7801\u3001\u90ae\u7bb1\u683c\u5f0f"),Object(c.b)("h2",{id:"validated"},"@Validated"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Component\n@ConfigurationProperties(prefix = "person")\n@Validated\npublic class Person {\n    @Email()\n    private String name;\n    private Integer age;\n    private Boolean happy;\n    private Date birthday;\n    private Map<String, Object> maps;\n    private List<Object> list;\n    private Cat cat;\n    //...\n')),Object(c.b)("p",null,"\u6d4b\u8bd5\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@SpringBootTest\nclass Springboot02ConfigApplicationTests {\n    @Autowired\n    private Person person;\n\n    @Test\n    void contextLoads() {\n        System.out.println(person);\n    }\n}\n")),Object(c.b)("p",null,"\u5982\u6211\u4eec\u9884\u671f\u4f1a\u62a5\u9519\u2014\u2014\u62a5\u9519\u4fe1\u606f"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"Property: person.name\nValue: Alice8792a7a5-4ab4-48c1-a126-c3a736cb49de\nOrigin: class path resource [application.yaml]:5:9\nReason: \u4e0d\u662f\u4e00\u4e2a\u5408\u6cd5\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\n")),Object(c.b)("h2",{id:"jsr303\u6821\u9a8c\u5168\u90e8\u6ce8\u89e3"},"JSR303\u6821\u9a8c\u5168\u90e8\u6ce8\u89e3"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",{align:"center"},"\u6ce8\u89e3"),Object(c.b)("th",{align:"center"},"\u529f\u80fd"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",{align:"center"},"@Null"),Object(c.b)("td",{align:"center"},"\u5bf9\u8c61\u5fc5\u987b\u4e3anull")),Object(c.b)("tr",null,Object(c.b)("td",{align:"center"},"@NotNull"),Object(c.b)("td",{align:"center"},"\u5bf9\u8c61\u5fc5\u987b\u4e0d\u4e3anull\uff0c\u65e0\u6cd5\u68c0\u67e5\u957f\u5ea6\u4e3a0\u7684\u5b57\u7b26\u4e32")),Object(c.b)("tr",null,Object(c.b)("td",{align:"center"},"@NotBlank"),Object(c.b)("td",{align:"center"},"\u5b57\u7b26\u4e32\u5fc5\u987b\u4e0d\u4e3aNull\uff0c\u4e14\u53bb\u6389\u524d\u540e\u7a7a\u683c\u957f\u5ea6\u5fc5\u987b\u5927\u4e8e0")),Object(c.b)("tr",null,Object(c.b)("td",{align:"center"},"@AssertTrue"),Object(c.b)("td",{align:"center"},"\u5bf9\u8c61\u5fc5\u987b\u4e3atrue")),Object(c.b)("tr",null,Object(c.b)("td",{align:"center"},"@AssertFalse"),Object(c.b)("td",{align:"center"},"\u5bf9\u8c61\u5fc5\u987b\u4e3afalse")),Object(c.b)("tr",null,Object(c.b)("td",{align:"center"},"@Max(Value)"),Object(c.b)("td",{align:"center"},"\u5fc5\u987b\u4e3a\u6570\u5b57\uff0c\u4e14\u5c0f\u4e8e\u6216\u7b49\u4e8eValue")),Object(c.b)("tr",null,Object(c.b)("td",{align:"center"},"@Min(Value)"),Object(c.b)("td",{align:"center"},"\u5fc5\u987b\u4e3a\u6570\u5b57\uff0c\u4e14\u5927\u4e8e\u6216\u7b49\u4e8eValue")),Object(c.b)("tr",null,Object(c.b)("td",{align:"center"},"@DecimalMax(Value)"),Object(c.b)("td",{align:"center"},"\u5fc5\u987b\u4e3a\u6570\u5b57( BigDecimal )\uff0c\u4e14\u5c0f\u4e8e\u6216\u7b49\u4e8eValue\u3002\u5c0f\u6570\u5b58\u5728\u7cbe\u5ea6")),Object(c.b)("tr",null,Object(c.b)("td",{align:"center"},"@DecimalMin(Value)"),Object(c.b)("td",{align:"center"},"\u5fc5\u987b\u4e3a\u6570\u5b57( BigDecimal )\uff0c\u4e14\u5927\u4e8e\u6216\u7b49\u4e8eValue\u3002\u5c0f\u6570\u5b58\u5728\u7cbe\u5ea6")),Object(c.b)("tr",null,Object(c.b)("td",{align:"center"},"@Digits(integer,fraction)"),Object(c.b)("td",{align:"center"},"\u5fc5\u987b\u4e3a\u6570\u5b57( BigDecimal )\uff0cinteger\u6574\u6570\u7cbe\u5ea6\uff0cfraction\u5c0f\u6570\u7cbe\u5ea6")),Object(c.b)("tr",null,Object(c.b)("td",{align:"center"},"@Size(min,max)"),Object(c.b)("td",{align:"center"},"\u5bf9\u8c61(Array\u3001Collection\u3001Map\u3001String)\u957f\u5ea6\u5fc5\u987b\u5728\u7ed9\u5b9a\u8303\u56f4")),Object(c.b)("tr",null,Object(c.b)("td",{align:"center"},"@Email"),Object(c.b)("td",{align:"center"},"\u5b57\u7b26\u4e32\u5fc5\u987b\u662f\u5408\u6cd5\u90ae\u4ef6\u5730\u5740")),Object(c.b)("tr",null,Object(c.b)("td",{align:"center"},"@Past"),Object(c.b)("td",{align:"center"},"Date\u548cCalendar\u5bf9\u8c61\u5fc5\u987b\u5728\u5f53\u524d\u65f6\u95f4\u4e4b\u524d")),Object(c.b)("tr",null,Object(c.b)("td",{align:"center"},"@Future"),Object(c.b)("td",{align:"center"},"Date\u548cCalendar\u5bf9\u8c61\u5fc5\u987b\u5728\u5f53\u524d\u65f6\u95f4\u4e4b\u540e")),Object(c.b)("tr",null,Object(c.b)("td",{align:"center"},"@Pattern(regexp=\u201c\u6b63\u5219\u201d)"),Object(c.b)("td",{align:"center"},"String\u5bf9\u8c61\u5fc5\u987b\u7b26\u5408\u6b63\u5219\u8868\u8fbe\u5f0f")))),Object(c.b)("p",null,Object(c.b)("img",{alt:"image-20200425225612707",src:n(754).default})))}u.isMDXComponent=!0},417:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),u=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,O=p["".concat(l,".").concat(d)]||p[d]||s[d]||c;return n?a.a.createElement(O,i(i({ref:t},o),{},{components:n})):a.a.createElement(O,i({ref:t},o))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=d;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var o=2;o<c;o++)l[o]=n[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},754:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/5-0ad21562d6e6dd814cd7f73768f87d1e.png"}}]);