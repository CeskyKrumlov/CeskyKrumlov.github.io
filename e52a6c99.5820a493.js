(window.webpackJsonp=window.webpackJsonp||[]).push([[467],{1189:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/files/\u5185\u5b58\u5c4f\u969c-e0896b8aba5731bf28788f522ee4ba45.pdf"},1190:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/8-ee35a88e1e48a4b3c43e20a1d9d4715f.png"},1191:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/9-0f912f56c69f6e2f2900fa480643a763.png"},1192:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/10-0ca7169139fe41dd05d9277cfac6ab28.png"},1193:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/11-6643c4b7bbe43cf34b9cbc76bed96590.png"},523:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(2),b=n(6),r=(n(0),n(572)),l={id:"19.volatile",title:"Volatile",hide_title:!0},c={unversionedId:"juc/19.volatile",id:"juc/19.volatile",isDocsHomePage:!1,title:"Volatile",description:"Volatile",source:"@site/docs/juc/19.Volatile.md",slug:"/juc/19.volatile",permalink:"/docs/juc/19.volatile",version:"current",sidebar:"someSidebar",previous:{title:"Java\u5185\u5b58\u6a21\u578bJMM",permalink:"/docs/juc/18.jmm"},next:{title:"\u5355\u4f8b\u6a21\u5f0f",permalink:"/docs/juc/20.singletonPattern"}},i=[{value:"Volatile",id:"volatile",children:[]},{value:"\u4fdd\u8bc1\u53ef\u89c1\u6027",id:"\u4fdd\u8bc1\u53ef\u89c1\u6027",children:[]},{value:"\u4e0d\u4fdd\u8bc1\u539f\u5b50\u6027",id:"\u4e0d\u4fdd\u8bc1\u539f\u5b50\u6027",children:[{value:"\u5982\u4f55\u4e0d\u4f7f\u7528Lock\u6216synchronized\u5b9e\u73b0\u539f\u5b50\u6027\uff1f",id:"\u5982\u4f55\u4e0d\u4f7f\u7528lock\u6216synchronized\u5b9e\u73b0\u539f\u5b50\u6027\uff1f",children:[]},{value:"\u4e3a\u4ec0\u4e48\u539f\u5b50\u7c7b\u80fd\u591f\u4fdd\u8bc1\u539f\u5b50\u6027\uff0c\u6548\u7387\u8fd8\u9ad8\uff1f",id:"\u4e3a\u4ec0\u4e48\u539f\u5b50\u7c7b\u80fd\u591f\u4fdd\u8bc1\u539f\u5b50\u6027\uff0c\u6548\u7387\u8fd8\u9ad8\uff1f",children:[]}]},{value:"\u7981\u6b62\u6307\u4ee4\u91cd\u6392",id:"\u7981\u6b62\u6307\u4ee4\u91cd\u6392",children:[{value:"\u4ec0\u4e48\u662f\u6307\u4ee4\u91cd\u6392",id:"\u4ec0\u4e48\u662f\u6307\u4ee4\u91cd\u6392",children:[]},{value:"Volatile\u7981\u6b62\u6307\u4ee4\u91cd\u6392",id:"volatile\u7981\u6b62\u6307\u4ee4\u91cd\u6392",children:[]}]},{value:"\u5185\u5b58\u5c4f\u969c",id:"\u5185\u5b58\u5c4f\u969c",children:[]}],o={rightToc:i};function u(e){var t=e.components,l=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,l,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"volatile"},"Volatile"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Volatiole\u662fJVM\u63d0\u4f9b\u7684\u8f7b\u91cf\u7ea7synchronized\u540c\u6b65\u673a\u5236"),Object(r.b)("ol",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ol"},"\u4fdd\u8bc1\u53ef\u89c1\u6027"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"\u4e0d\u4fdd\u8bc1\u539f\u5b50\u6027")),Object(r.b)("li",{parentName:"ol"},"\u7981\u6b62\u6307\u4ee4\u91cd\u6392"))),Object(r.b)("h1",{id:"\u4fdd\u8bc1\u53ef\u89c1\u6027"},"\u4fdd\u8bc1\u53ef\u89c1\u6027"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u4e0a\u4e00\u7ae0\u7684\u4ee3\u7801\u4e2d\uff0c\u7ed9num\u52a0\u4e0a",Object(r.b)("inlineCode",{parentName:"p"},"volatile"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public class Demo {\n    private volatile static int num = 0;\n\n    public static void main(String[] args) throws InterruptedException { // \u4e3b\u7ebf\u7a0b\n\n        new Thread(() -> {  // \u7ebf\u7a0b1\n            while (num == 0) {\n\n            }\n        }).start();\n\n        // \u77612\u79d2\uff0c\u8ba9\u4e0a\u9762\u81ea\u5b9a\u4e49\u7684\u7ebf\u7a0b\u5148\u8dd1\u8d77\u6765\n        TimeUnit.SECONDS.sleep(2);\n        // \u5728\u4e3b\u7ebf\u7a0b\u4fee\u6539num\u7684\u503c\n        num = 1;\n        // \u8f93\u51fanum\n        System.out.println(num);\n    }\n}\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u7a0b\u5e8f\u6b63\u5e38\u9000\u51fa\u4e86")),Object(r.b)("hr",null),Object(r.b)("h1",{id:"\u4e0d\u4fdd\u8bc1\u539f\u5b50\u6027"},"\u4e0d\u4fdd\u8bc1\u539f\u5b50\u6027"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u539f\u5b50\u6027\uff1a"),"\u4e0d\u53ef\u5206\u5272")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'class Demo2 {\n    private static int num = 0;\n\n    public static void add() {\n        num++;\n    }\n\n    public static void main(String[] args) {\n        for (int i = 0; i < 20; i++) {\n            new Thread(() -> {\n                for (int j = 0; j < 1000; j++) {\n                    add();\n                }\n            }).start();\n        }\n\n        while (Thread.activeCount() > 2) {\n            Thread.yield(); // \u53ea\u8981\u6709main \u548c gc\u4e4b\u5916\u7684\u7ebf\u7a0b\uff0c\u4e3b\u7ebf\u7a0b\u5c31\u793c\u8ba9\n        }\n\n        System.out.println(Thread.currentThread().getName() + " | " + num);\n    }\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"main | 19269\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u7ed9num\u52a0\u4e0a",Object(r.b)("inlineCode",{parentName:"p"},"volatile"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'class Demo2 {\n    private volatile static int num = 0;\n\n    public static void add() {\n        num++;\n    }\n\n    public static void main(String[] args) {\n        for (int i = 0; i < 20; i++) {\n            new Thread(() -> {\n                for (int j = 0; j < 1000; j++) {\n                    add();\n                }\n            }).start();\n        }\n\n        while (Thread.activeCount() > 2) {\n            Thread.yield(); // \u53ea\u8981\u6709main \u548c gc\u4e4b\u5916\u7684\u7ebf\u7a0b\uff0c\u4e3b\u7ebf\u7a0b\u5c31\u793c\u8ba9\n        }\n\n        System.out.println(Thread.currentThread().getName() + " | " + num);\n    }\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"main | 18573\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u4f9d\u7136\u4e0d\u7b49\u4e8e20000\uff0cvolatile\u4e0d\u4fdd\u8bc1\u539f\u5b50\u6027")),Object(r.b)("h2",{id:"\u5982\u4f55\u4e0d\u4f7f\u7528lock\u6216synchronized\u5b9e\u73b0\u539f\u5b50\u6027\uff1f"},"\u5982\u4f55\u4e0d\u4f7f\u7528Lock\u6216synchronized\u5b9e\u73b0\u539f\u5b50\u6027\uff1f"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("inlineCode",{parentName:"p"},"AtomicInteger"),"\u539f\u5b50\u7c7b\uff0c\u8fd8\u6709\u5176\u4ed6\u5404\u79cd\u539f\u5b50\u7c7b")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'class Demo2 {\n    private static AtomicInteger num = new AtomicInteger();\n\n    public static void add() {\n        num.getAndIncrement(); // AtomicInteger + 1\n    }\n\n    public static void main(String[] args) {\n        for (int i = 0; i < 20; i++) {\n            new Thread(() -> {\n                for (int j = 0; j < 1000; j++) {\n                    add();\n                }\n            }).start();\n        }\n\n        while (Thread.activeCount() > 2) {\n            Thread.yield(); // \u53ea\u8981\u6709main \u548c gc\u4e4b\u5916\u7684\u7ebf\u7a0b\uff0c\u4e3b\u7ebf\u7a0b\u5c31\u793c\u8ba9\n        }\n\n        System.out.println(Thread.currentThread().getName() + " | " + num);\n    }\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"main | 20000\n")),Object(r.b)("h2",{id:"\u4e3a\u4ec0\u4e48\u539f\u5b50\u7c7b\u80fd\u591f\u4fdd\u8bc1\u539f\u5b50\u6027\uff0c\u6548\u7387\u8fd8\u9ad8\uff1f"},"\u4e3a\u4ec0\u4e48\u539f\u5b50\u7c7b\u80fd\u591f\u4fdd\u8bc1\u539f\u5b50\u6027\uff0c\u6548\u7387\u8fd8\u9ad8\uff1f"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("inlineCode",{parentName:"p"},"CAS")),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u8fd9\u4e9b\u7c7b\u7684\u5e95\u5c42\u90fd\u662fnative\u65b9\u6cd5\uff0c\u76f4\u63a5\u548c\u64cd\u4f5c\u7cfb\u7edf\u6302\u94a9\uff0c\u6548\u7387\u6781\u9ad8\uff0c\u76f4\u63a5\u5728\u5185\u5b58\u4e2d\u4fee\u6539\u503c"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Unsafe"),"\u7c7b"))),Object(r.b)("hr",null),Object(r.b)("h1",{id:"\u7981\u6b62\u6307\u4ee4\u91cd\u6392"},"\u7981\u6b62\u6307\u4ee4\u91cd\u6392"),Object(r.b)("h2",{id:"\u4ec0\u4e48\u662f\u6307\u4ee4\u91cd\u6392"},"\u4ec0\u4e48\u662f\u6307\u4ee4\u91cd\u6392"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u8ba1\u7b97\u673a\u5e76\u4e0d\u662f\u6309\u7167\u7a0b\u5e8f\u5458\u5199\u7684\u7a0b\u5e8f\u7684\u987a\u5e8f\u6267\u884c\u7684")),Object(r.b)("ol",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ol"},"source code"),Object(r.b)("li",{parentName:"ol"},"\u7f16\u8bd1\u5668\u4f18\u5316\u91cd\u6392"),Object(r.b)("li",{parentName:"ol"},"\u6307\u4ee4\u5e76\u884c\u53ef\u80fd\u91cd\u6392"),Object(r.b)("li",{parentName:"ol"},"\u5185\u5b58\u7cfb\u7edf\u91cd\u6392"),Object(r.b)("li",{parentName:"ol"},"\u6267\u884c"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"int x = 1;  // 1\nint y = 2;  // 2\nx = x + 5;  // 3\ny = x * x;  // 4\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u7a0b\u5e8f\u5458\u671f\u671b\u7684\u6267\u884c\u987a\u5e8f\uff1a"),"1234"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u53ef\u80fd\u7684\u771f\u5b9e\u6267\u884c\u987a\u5e8f\uff1a"),"2134\u30011324"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u4e0d\u53ef\u80fd\u7684\u6267\u884c\u987a\u5e8f\uff1a"),"4123"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u5904\u7406\u5668\u5728\u8fdb\u884c\u6307\u4ee4\u91cd\u62cd\u65f6\uff0c\u4f1a\u8003\u8651\u6570\u636e\u4e4b\u95f4\u7684\u4f9d\u8d56\u6027"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u53ef\u80fd\u9020\u6210\u5f71\u54cd\u7684\u7ed3\u679c"),"\n\u5047\u8bbe",Object(r.b)("inlineCode",{parentName:"li"},"a"),"\u3001",Object(r.b)("inlineCode",{parentName:"li"},"b"),"\u3001",Object(r.b)("inlineCode",{parentName:"li"},"x"),"\u3001",Object(r.b)("inlineCode",{parentName:"li"},"y"),"\u9ed8\u8ba4\u503c\u90fd\u4e3a0")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u7ebf\u7a0bA"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u7ebf\u7a0bB"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"x = a"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"y = b")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"b = 1"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"a = 2")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u6b63\u5e38\u7ed3\u679c x =0 , y = 0 ;")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u53ef\u80fd\u88ab\u91cd\u6392\u4e3a\uff1a"))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u7ebf\u7a0bA"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u7ebf\u7a0bB"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"b = 1"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"a = 2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"x = a"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"y = b")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u7ed3\u679c\u4e3a\uff1a x = 2; y = 1")),Object(r.b)("h2",{id:"volatile\u7981\u6b62\u6307\u4ee4\u91cd\u6392"},"Volatile\u7981\u6b62\u6307\u4ee4\u91cd\u6392"),Object(r.b)("blockquote",null,Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u53ea\u8981\u52a0\u4e86Volatile\u5c31\u4f1a\u7981\u7528\u6307\u4ee4\u91cd\u6392")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Volatile\u901a\u8fc7\u5185\u5b58\u5c4f\u969c\u6765\u963b\u65ad\u5e38\u89c4\u7684\u6307\u4ee4\u91cd\u62cd\uff0c\u786e\u4fdd\u6570\u636e\u7684\u53ef\u89c1\u6027")))),Object(r.b)("h1",{id:"\u5185\u5b58\u5c4f\u969c"},"\u5185\u5b58\u5c4f\u969c"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"}," \u5173\u4e8e\u5185\u5b58\u5c4f\u969c\u7684\u8be6\u89e3 ->  ",Object(r.b)("a",{target:"_blank",href:n(1189).default}," \u5185\u5b58\u5c4f\u969c\u53ca\u5176\u5728JVM\u5185\u5b58\u7ba1\u7406\u4e2d\u7684\u5e94\u7528 ")),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u7f13\u5b58\u4e00\u81f4\u6027\u534f\u8bae MESI"),Object(r.b)("li",{parentName:"ul"},"\u6307\u4ee4\u91cd\u6392\u3001\u6307\u4ee4\u4e71\u5e8f"),Object(r.b)("li",{parentName:"ul"},"StoreBuffer\u4e0eInvalid Queue"),Object(r.b)("li",{parentName:"ul"},"\u7f13\u5b58\u7ea7\u5c4f\u969c"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u5185\u5b58\u5c4f\u969c"),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"LoadLoad Barriers")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"StoreStore Barriers")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"LoadStore Barriers")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"StoreLoad Barriers"),"(\u91cd\u8981\u3001\u4e5f\u6700\u91cd)"))),Object(r.b)("p",null,Object(r.b)("img",{alt:"image-20200701153806023",src:n(1190).default})),Object(r.b)("p",null,Object(r.b)("img",{alt:"image-20200701154025101",src:n(1191).default})),Object(r.b)("p",null,Object(r.b)("img",{alt:"image-20200701155059126",src:n(1192).default})),Object(r.b)("p",null,Object(r.b)("img",{alt:"image-20200701155137125",src:n(1193).default})),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u6700\u540e\uff0c\u4e0d\u540c\u54c1\u724c\u3001\u5382\u5546\uff0c\u4e0d\u540c\u67b6\u6784\u7684CPU\u5185\u5b58\u5c4f\u969c\u5b9e\u73b0\u673a\u7406\u4e0d\u540c\uff0cJMM\u4e3a\u6211\u4eec\u5c4f\u853d\u4e86\u8fd9\u4e9b\u8de8\u5e73\u53f0\u7684\u533a\u522b"))))}u.isMDXComponent=!0},572:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),b=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,b=function(e,t){if(null==e)return{};var n,a,b={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var o=b.a.createContext({}),u=function(e){var t=b.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},O=b.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=u(n),O=a,m=p["".concat(l,".").concat(O)]||p[O]||j[O]||r;return n?b.a.createElement(m,c(c({ref:t},o),{},{components:n})):b.a.createElement(m,c({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=O;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<r;o++)l[o]=n[o];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);