(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),c=(n(0),n(331)),b={id:"18.jmm",title:"Java\u5185\u5b58\u6a21\u578bJMM",hide_title:!0},l={unversionedId:"juc/18.jmm",id:"juc/18.jmm",isDocsHomePage:!1,title:"Java\u5185\u5b58\u6a21\u578bJMM",description:"JMM\u2014\u2014Java Memory Model",source:"@site/docs/juc/18.JMM.md",permalink:"/docs/juc/18.jmm",sidebar:"someSidebar",previous:{title:"\u5f02\u6b65\u56de\u8c03",permalink:"/docs/juc/17.asyncCallBack"},next:{title:"Volatile",permalink:"/docs/juc/19.volatile"}},o=[{value:"JMM\u2014\u2014Java Memory Model",id:"jmmjava-memory-model",children:[{value:"JMM\u7ea6\u5b9a",id:"jmm\u7ea6\u5b9a",children:[{value:"\u7ebf\u7a0b\u89e3\u9501\u524d",id:"\u7ebf\u7a0b\u89e3\u9501\u524d",children:[]},{value:"\u7ebf\u7a0b\u52a0\u9501\u524d",id:"\u7ebf\u7a0b\u52a0\u9501\u524d",children:[]},{value:"\u52a0\u9501\u3001\u89e3\u9501\u4e00\u81f4\u6027",id:"\u52a0\u9501\u3001\u89e3\u9501\u4e00\u81f4\u6027",children:[]}]}]},{value:"8\u4e2a\u65b9\u6cd5",id:"8\u4e2a\u65b9\u6cd5",children:[]},{value:"\u4f8b",id:"\u4f8b",children:[]}],i={rightToc:o};function u(e){var t=e.components,b=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,b,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"jmmjava-memory-model"},"JMM\u2014\u2014Java Memory Model"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u8bf7\u8c08\u8c08\u5bf9",Object(c.b)("inlineCode",{parentName:"p"},"Volatile"),"\u7684\u7406\u89e3")),Object(c.b)("p",null,"Volatiole\u662fJVM\u63d0\u4f9b\u7684\u8f7b\u91cf\u7ea7synchronized\u540c\u6b65\u673a\u5236"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u4fdd\u8bc1\u53ef\u89c1\u6027"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("strong",{parentName:"li"},"\u4e0d\u4fdd\u8bc1\u539f\u5b50\u6027")),Object(c.b)("li",{parentName:"ol"},"\u7981\u6b62\u6307\u4ee4\u91cd\u6392")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"JMM"),"\u2014\u2014Java Memory Model | Java\u5185\u5b58\u6a21\u578b"),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u4e0d\u5b58\u5728\uff0c\u662f\u4e00\u79cd\u6982\u5ff5\uff0c\u7ea6\u5b9a"))),Object(c.b)("h2",{id:"jmm\u7ea6\u5b9a"},"JMM\u7ea6\u5b9a"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"MESI\u7f13\u5b58\u4e00\u81f4\u6027\u534f\u8bae"))),Object(c.b)("img",{src:n(433).default,style:{zoom:"25%"}}),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u4ee5\u4e0b\u63d0\u5230\u7684\u5185\u5b58\u7686\u662f\u903b\u8f91\u6982\u5ff5\uff0c\u4e0d\u5b58\u5728\u5bf9\u5e94\u7684\u771f\u5b9e\u7269\u7406\u7ed3\u6784\uff0c\u4e0eJVM\u7684\u8fd0\u884c\u65f6\u5185\u5b58\u4e5f\u6ca1\u5173\u7cfb"),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u4e00\u4e2a\u7ebf\u7a0b\u60f3\u8981\u64cd\u4f5c\u4e3b\u5185\u5b58\u4e2d\u7684\u6570\u636e\u65f6\uff0c\u5e76\u4e0d\u4f1a\u76f4\u63a5\u64cd\u4f5c\u4e3b\u5185\u5b58"),Object(c.b)("li",{parentName:"ul"},"\u5c06\u4e3b\u5185\u5b58\u4e2d\u7684\u6570\u636e\u590d\u5236\u4e00\u4efd\u5230\u81ea\u5df1\u7684\u7ebf\u7a0b\u672c\u5730\u5185\u5b58\u4e2d"),Object(c.b)("li",{parentName:"ul"},"\u5bf9\u7ebf\u7a0b\u672c\u5730\u5185\u5b58\u4e2d\u7684\u6570\u636e\u8fdb\u884c\u64cd\u4f5c"))),Object(c.b)("h3",{id:"\u7ebf\u7a0b\u89e3\u9501\u524d"},"\u7ebf\u7a0b\u89e3\u9501\u524d"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u5f53\u7ebf\u7a0b\u89e3\u9501\u524d\uff0c\u5fc5\u987b\u5c06\u672c\u5730\u5185\u5b58\u4e2d\u5df2\u7ecf\u4fee\u6539\u7684\u6570\u636e\uff0c\u5237\u56de\u4e3b\u5185\u5b58")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"\u7ebf\u7a0b\u52a0\u9501\u524d"},"\u7ebf\u7a0b\u52a0\u9501\u524d"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u5f53\u7ebf\u52a0\u9501\u524d\uff0c\u5fc5\u987b\u8bfb\u53d6\u4e3b\u5185\u5b58\u4e2d\u7684\u6700\u65b0\u503c\u5230\u7ebf\u7a0b\u7684\u672c\u5730\u5185\u5b58\u4e2d")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"\u52a0\u9501\u3001\u89e3\u9501\u4e00\u81f4\u6027"},"\u52a0\u9501\u3001\u89e3\u9501\u4e00\u81f4\u6027"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u52a0\u9501\u548c\u89e3\u9501\uff0c\u64cd\u4f5c\u7684\u662f\u540c\u4e00\u628a\u9501")),Object(c.b)("h1",{id:"8\u4e2a\u65b9\u6cd5"},"8\u4e2a\u65b9\u6cd5"),Object(c.b)("blockquote",null,Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u9ad8\u901f\u7f13\u5b58\uff1a\u5373\u7ebf\u7a0b\u672c\u5730\u5185\u5b58"))),Object(c.b)("p",null,Object(c.b)("img",{alt:"image-20200629182926768",src:n(434).default})),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u8bfb\uff1aread -> load \u987a\u5e8f\u6267\u884c")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u5199\uff1astore -> write \u987a\u5e8f\u6267\u884c")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"JMM \u53ea\u8981\u6c42\u4e0a\u8ff0\u4e24\u4e2a\u64cd\u4f5c\u5fc5\u987b\u6309\u987a\u8baf\u6267\u884c\uff0c\u800c\u6ca1\u6709\u4fdd\u8bc1\u5fc5\u987b\u662f\u8fde\u7eed\u6267\u884c")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"read\u548cload\u4e4b\u95f4 \uff0c \u4ee5\u53castore\u548cwrite\u4e4b\u95f4\uff0c\u53ef\u4ee5\u63d2\u5165\u5176\u4ed6\u65b9\u6cd5"))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u82e5\u4e24\u4e2a\u7ebf\u7a0b\u540c\u65f6\u64cd\u4f5c\u4e3b\u5185\u5b58\u4e2d\u7684\u67d0\u4e2a\u8d44\u6e90flag\uff0c\u5f53\u7ebf\u7a0bB\u4fee\u6539\u5176\u503c\u4e3afalse\uff0c\u5e76\u5c06\u4e3b\u5185\u5b58\u4e2d\u7684flag\u5237\u65b0\u4e3afalse\u65f6\uff0c\u7ebf\u7a0bA\u672c\u5730\u5185\u5b58\u4e2d\u7684flag\u4ecd\u4e3atrue\uff0c\u5b83\u4e00\u76f4\u5728flag\u4e3atrue\u7684\u60c5\u51b5\u4e0b\uff0c\u6267\u884c\u81ea\u5df1\u7684\u903b\u8f91")),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u7ebf\u7a0bB\u6240\u505a\u7684\u4fee\u6539\uff0c\u7ebf\u7a0bA\u4e0d\u80fd\u53ca\u65f6\u53ef\u89c1")))),Object(c.b)("p",null,Object(c.b)("img",{alt:"image-20200629184331614",src:n(435).default})),Object(c.b)("h1",{id:"\u4f8b"},"\u4f8b"),Object(c.b)("blockquote",null,Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u4e24\u4e2a\u7ebf\u7a0b\uff0c\u5b9a\u4e49\u4e00\u4e2aint num = 0"),Object(c.b)("li",{parentName:"ul"},"\u7b2c\u4e00\u4e2a\u7ebf\u7a0b\uff1a\u5982\u679cnum == 0\u5c31\u8dd1\u5faa\u73af"),Object(c.b)("li",{parentName:"ul"},"\u7b2c\u4e8c\u4e2a\u7ebf\u7a0b\uff1a\u77611\u79d2\uff0c\u8ba9\u7b2c\u4e00\u4e2a\u7ebf\u7a0b\u5148\u8dd1\u8d77\u6765\uff0c\u7136\u540e\u4fee\u6539num\u4e3a1\uff0c\u7136\u540e\u628anum\u7684\u503c\u6253\u5370\u51fa\u6765"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public class Demo {\n    private static int num = 0;\n\n    public static void main(String[] args) throws InterruptedException { // \u4e3b\u7ebf\u7a0b\n\n        new Thread(() -> {  // \u7ebf\u7a0b1\n            while (num == 0) {\n\n            }\n        }).start();\n\n        // \u77612\u79d2\uff0c\u8ba9\u4e0a\u9762\u81ea\u5b9a\u4e49\u7684\u7ebf\u7a0b\u5148\u8dd1\u8d77\u6765\n        TimeUnit.SECONDS.sleep(2);\n        // \u5728\u4e3b\u7ebf\u7a0b\u4fee\u6539num\u7684\u503c\n        num = 1;\n        // \u8f93\u51fanum\n        System.out.println(num);\n    }\n}\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u5206\u6790\uff1a")),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u6309\u9053\u7406\u6765\u8bf4\uff0c\u7b2c\u4e8c\u4e2a\u7ebf\u7a0b\u4fee\u6539\u4e86num\u7684\u503c\uff0c\u5e76\u628anum\u7684\u503c\u6253\u5370\u51fa\u6765\u4e86\uff0c\u7b49\u4e8e1"),Object(c.b)("li",{parentName:"ul"},"\u6b64\u65f6num\u4e0d\u518d\u7b49\u4e8e0\u4e86\uff0c\u7b2c\u4e00\u4e2a\u7ebf\u7a0b\u7684\u5faa\u73af\u5e94\u5f53\u8df3\u51fa\uff0c\u7136\u540e\u8fd0\u884c\u4f1a\u53d1\u73b01\u88ab\u6253\u5370\u51fa\u6765\u4e86\uff0c\u800c\u7ebf\u7a0b1\u8fd8\u5728\u6267\u884c\u81ea\u5df1\u7684\u5faa\u73af\uff0c",Object(c.b)("strong",{parentName:"li"},"\u8fd9\u5c31\u662f\u7ebf\u7a0b2\u5bf9num\u7684\u64cd\u4f5c\uff0c\u7ebf\u7a0b1\u662f\u4e0d\u53ef\u89c1\u7684\uff0c\u7ebf\u7a0b1\u4e0d\u77e5\u9053\u4e3b\u5185\u5b58\u7684\u503c\u5df2\u7ecf\u88ab\u4fee\u6539")))),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u8981\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u9700\u8981\u4f7f\u7528",Object(c.b)("inlineCode",{parentName:"p"},"Volatile")))))}u.isMDXComponent=!0},331:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=u(n),j=a,O=m["".concat(b,".").concat(j)]||m[j]||p[j]||c;return n?r.a.createElement(O,l(l({ref:t},i),{},{components:n})):r.a.createElement(O,l({ref:t},i))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,b=new Array(c);b[0]=j;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,b[1]=l;for(var i=2;i<c;i++)b[i]=n[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},433:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/5-e24adb88b45731662d0a9aa177370c3a.png"},434:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/6-2c929be5c0fc7010b5a84ec2a516c866.png"},435:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/7-28aa4a38c4b4b929a9a69f7c93788668.png"}}]);