(window.webpackJsonp=window.webpackJsonp||[]).push([[415],{1144:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/11-7befd7007afc0801f47fea7846882264.png"},471:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return b})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return u}));var a=t(2),c=t(6),r=(t(0),t(564)),l={id:"6.singleton",title:"\u5355\u4f8b\u6a21\u5f0f",hide_title:!0},b={unversionedId:"designPattern/6.singleton",id:"designPattern/6.singleton",isDocsHomePage:!1,title:"\u5355\u4f8b\u6a21\u5f0f",description:"\u5355\u4f8b\u6a21\u5f0f Singleton",source:"@site/datastructure/designPattern/6.\u5355\u4f8b\u6a21\u5f0f.md",slug:"/designPattern/6.singleton",permalink:"/datastructure/designPattern/6.singleton",version:"current",sidebar:"docs2",previous:{title:"\u539f\u578b\u6a21\u5f0f",permalink:"/datastructure/designPattern/5.prototype"},next:{title:"\u9002\u914d\u5668\u6a21\u5f0f",permalink:"/datastructure/designPattern/7.adapterPattern"}},i=[{value:"\u5355\u4f8b\u6a21\u5f0f Singleton",id:"\u5355\u4f8b\u6a21\u5f0f-singleton",children:[]},{value:"\u6e90\u53d1\u95ee\u9898",id:"\u6e90\u53d1\u95ee\u9898",children:[]},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",children:[{value:"\u997f\u6c49\u5f0f",id:"\u997f\u6c49\u5f0f",children:[]},{value:"\u61d2\u6c49\u5f0f",id:"\u61d2\u6c49\u5f0f",children:[]},{value:"DCL \u61d2\u6c49\u5f0f",id:"dcl-\u61d2\u6c49\u5f0f",children:[]},{value:"\u9759\u6001\u5185\u90e8\u7c7b\u5b9e\u73b0",id:"\u9759\u6001\u5185\u90e8\u7c7b\u5b9e\u73b0",children:[]},{value:"\u53cd\u5c04\u521b\u5efa\u5b9e\u4f8b\u7834\u574f\u5355\u4f8b",id:"\u53cd\u5c04\u521b\u5efa\u5b9e\u4f8b\u7834\u574f\u5355\u4f8b",children:[]},{value:"\u591a\u6b21\u7528\u53cd\u5c04\u521b\u5efa\u591a\u4e2a\u5bf9\u8c61\u7834\u574f\u5355\u4f8b",id:"\u591a\u6b21\u7528\u53cd\u5c04\u521b\u5efa\u591a\u4e2a\u5bf9\u8c61\u7834\u574f\u5355\u4f8b",children:[]},{value:"\u901a\u8fc7\u679a\u4e3e\u4fdd\u8bc1\u5355\u4f8b",id:"\u901a\u8fc7\u679a\u4e3e\u4fdd\u8bc1\u5355\u4f8b",children:[]}]},{value:"UML\u7c7b\u56fe",id:"uml\u7c7b\u56fe",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u4f18\u7f3a\u70b9",id:"\u4f18\u7f3a\u70b9",children:[]}],o={rightToc:i};function u(e){var n=e.components,l=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,l,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"\u5355\u4f8b\u6a21\u5f0f-singleton"},"\u5355\u4f8b\u6a21\u5f0f Singleton"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://mp.weixin.qq.com/s/dW0L-PoBeTFHhD29HJO0BQ"}),"\u5355\u4f8b\u6a21\u5f0f")),Object(r.b)("p",null,"\u5b9a\u4e49\uff1a\u786e\u4fdd\u4e00\u4e2a\u7c7b\u53ea\u6709\u4e00\u4e2a\u5b9e\u4f8b\uff0c\u5e76\u63d0\u4f9b\u5168\u5c40\u8bbf\u95ee\u70b9\u3002"),Object(r.b)("h1",{id:"\u6e90\u53d1\u95ee\u9898"},"\u6e90\u53d1\u95ee\u9898"),Object(r.b)("p",null,"\u5f53\u5bf9\u8c61\u5360\u6709\u4e86\u5927\u91cf\u7684\u8ba1\u7b97\u673a\u8d44\u6e90\u65f6\uff0c\u5e0c\u671b\u7c7b\u7684\u5bf9\u8c61\u6709\u4e14\u53ea\u6709\u4e00\u4e2a\uff1b\u5f53\u4e00\u4e2a\u5bf9\u8c61\u4e0d\u638c\u63e1\u53e6\u4e00\u4e2a\u5bf9\u8c61\u7684\u5f15\u7528\uff0c\u7136\u800c\u5e0c\u671b\u5728\u5fc5\u8981\u65f6\u80fd\u591f\u5411\u5176\u53d1\u9001\u6d88\u606f"),Object(r.b)("h1",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),Object(r.b)("p",null,"\u5c06\u7c7b\u7684",Object(r.b)("strong",{parentName:"p"},"\u6784\u9020\u65b9\u6cd5\u5c01\u88c5\u8d77\u6765\uff0c\u8fd9\u6837\u5728\u7c7b\u7684\u5916\u90e8\u65e0\u6cd5\u5b9e\u4f8b\u5316\u8fd9\u4e2a\u5bf9\u8c61"),"\uff1b\u5728\u7c7b\u7684\u5185\u90e8\u7528\u9759\u6001\u5c5e\u6027\u65b9\u5f0f\u5b9a\u4e49\u8be5\u7c7b\u7684\u4e00\u4e2a\u58f0\u540d\uff1b\u63d0\u4f9b\u4e00\u4e2a\u9759\u6001\u65b9\u6cd5\u5b8c\u6210\u5355\u4ef6\u903b\u8f91\uff0c\u5373\u5f53\u9759\u6001\u7c7b\u58f0\u540d\u6ca1\u6709\u5f15\u7528\u5bf9\u8c61\u5b9e\u4f8b\u5316\u7c7b\u5bf9\u8c61\uff0c\u800c\u5728\u5f15\u7528\u4e00\u4e2a\u7c7b\u5bf9\u8c61\u65f6\uff0c\u8fd4\u56de\u8be5\u5bf9\u8c61\u7684\u5f15\u7528"),Object(r.b)("h2",{id:"\u997f\u6c49\u5f0f"},"\u997f\u6c49\u5f0f"),Object(r.b)("blockquote",null,Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u7acb\u5373\u521b\u5efa\u5f53\u524d\u7c7b\u7684\u5b9e\u4f8b\u5316\u5bf9\u8c61"),Object(r.b)("li",{parentName:"ul"},"\u5c06\u6784\u9020\u65b9\u6cd5\u79c1\u6709"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"class Hugry{\n    private Hugry(){}\n    \n    private static final Hugry HUGRY = new Hugry();\n\n    public static Hugry getInstance() {\n        return HUGRY;\n    }\n}\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u95ee\u9898\uff1a"),"\u4e0d\u7ba1\u5bf9\u8c61\u662f\u5426\u771f\u7684\u88ab\u4f7f\u7528\u4e86\uff0c\u76f4\u63a5\u521b\u5efa\uff0c\u6709\u53ef\u80fd\u6d6a\u8d39\u8d44\u6e90")),Object(r.b)("h2",{id:"\u61d2\u6c49\u5f0f"},"\u61d2\u6c49\u5f0f"),Object(r.b)("blockquote",null,Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u5c06\u6784\u9020\u65b9\u6cd5\u79c1\u6709"),Object(r.b)("li",{parentName:"ul"},"\u5728\u8c03\u7528",Object(r.b)("inlineCode",{parentName:"li"},"getInstance()"),"\u65b9\u6cd5\u5c1d\u8bd5\u83b7\u5f97\u5bf9\u8c61\u5b9e\u4f8b\u65f6\uff0c\u624d\u521b\u5efa\u5bf9\u8c61"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"class Lazy{\n    private Lazy(){}\n    \n    private static Lazy LAZY;\n    \n    public static Lazy getInstance(){\n        if (LAZY == null) {\n            LAZY = new Lazy();\n        }\n        return LAZY;\n    }\n}\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u95ee\u9898\uff1a"),"\u591a\u7ebf\u7a0b\u73af\u5883\u4e0b\uff0c\u53ef\u80fd\u521b\u5efa\u51fa\u591a\u4e2a\u5bf9\u8c61")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u6d4b\u8bd5"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'class Lazy{\n    private Lazy(){\n        System.out.println(Thread.currentThread().getName() + "\u521b\u5efa\u4e86\u4e00\u4e2a\u5bf9\u8c61");\n    }\n\n    private static Lazy LAZY;\n\n    public static Lazy getInstance(){\n        if (LAZY == null) {\n            LAZY = new Lazy();\n        }\n        return LAZY;\n    }\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class Demo {\n    public static void main(String[] args) {\n        for (int i = 0; i < 10; i++) {\n            new Thread(()->{\n                Lazy.getInstance();\n            },"Thread " + i).start();\n        }\n    }\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Thread 5\u521b\u5efa\u4e86\u4e00\u4e2a\u5bf9\u8c61\nThread 1\u521b\u5efa\u4e86\u4e00\u4e2a\u5bf9\u8c61\nThread 9\u521b\u5efa\u4e86\u4e00\u4e2a\u5bf9\u8c61\nThread 2\u521b\u5efa\u4e86\u4e00\u4e2a\u5bf9\u8c61\nThread 6\u521b\u5efa\u4e86\u4e00\u4e2a\u5bf9\u8c61\nThread 7\u521b\u5efa\u4e86\u4e00\u4e2a\u5bf9\u8c61\nThread 4\u521b\u5efa\u4e86\u4e00\u4e2a\u5bf9\u8c61\nThread 3\u521b\u5efa\u4e86\u4e00\u4e2a\u5bf9\u8c61\nThread 8\u521b\u5efa\u4e86\u4e00\u4e2a\u5bf9\u8c61\nThread 0\u521b\u5efa\u4e86\u4e00\u4e2a\u5bf9\u8c61\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u663e\u7136\u5df2\u7ecf\u4e0d\u662f\u5355\u4f8b\u4e86")),Object(r.b)("h2",{id:"dcl-\u61d2\u6c49\u5f0f"},"DCL \u61d2\u6c49\u5f0f"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u89e3\u51b3\u65b9\u6cd5\u2014\u2014",Object(r.b)("inlineCode",{parentName:"strong"},"Double Checked Locking")," DCL\u61d2\u6c49\u5f0f\u5355\u4f8b\uff1a")),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u6267\u884c",Object(r.b)("inlineCode",{parentName:"li"},"getInstance()"),"\u65b9\u6cd5\u65f6\uff0c\u5148\u5224\u65ad\u5bf9\u8c61\u662f\u5426\u5df2\u88ab\u521b\u5efa\uff0c\u6ca1\u521b\u5efa\uff0c\u5c31\u5148\u628a\u6574\u4e2a",Object(r.b)("strong",{parentName:"li"},"\u7c7b\u6a21\u677f\u9501\u8d77\u6765")),Object(r.b)("li",{parentName:"ul"},"\u5728\u9501\u91cc\u5728\u68c0\u6d4b\u4e00\u6b21\u5bf9\u8c61\u662f\u5426\u5df2\u88ab\u521b\u5efa\uff0c\u6b64\u65f6\u5982\u679c\u5bf9\u8c61\u672a\u88ab\u521b\u5efa\uff0c\u624d\u521b\u5efa\u5b9e\u4f8b\u5316\u5bf9\u8c61"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'class Lazy{\n    private Lazy(){\n        System.out.println(Thread.currentThread().getName() + "\u521b\u5efa\u4e86\u4e00\u4e2a\u5bf9\u8c61");\n    }\n\n    private static Lazy LAZY;\n\n    public static Lazy getInstance(){\n        if (LAZY == null) {\n            synchronized (Lazy.class) {\n                if (LAZY == null) {\n                    LAZY = new Lazy();\n                }\n            }\n        }\n        return LAZY;\n    }\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class Demo {\n    public static void main(String[] args) {\n        for (int i = 0; i < 10; i++) {\n            new Thread(()->{\n                Lazy.getInstance();\n            },"Thread " + i).start();\n        }\n    }\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Thread 6\u521b\u5efa\u4e86\u4e00\u4e2a\u5bf9\u8c61\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u95ee\u9898\uff1a")),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u5728\u4f7f\u7528",Object(r.b)("inlineCode",{parentName:"li"},"new Lazy()"),"\u6784\u9020\u65b9\u6cd5\u521b\u5efa\u5b9e\u4f8b\u5316\u5bf9\u8c61\u65f6\uff0c\u53ef\u80fd\u6709\u95ee\u9898"),Object(r.b)("li",{parentName:"ul"},"\u56e0\u4e3a",Object(r.b)("strong",{parentName:"li"},"\u6784\u9020\u65b9\u6cd5\u4e0d\u662f\u4e00\u4e2a\u539f\u5b50\u6027\u64cd\u4f5c"),"\uff0c\u5728\u6781\u7aef\u60c5\u51b5\u4e0b\u4f9d\u7136\u4f1a\u51fa\u73b0\u5e76\u53d1\u95ee\u9898",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"\u5206\u914d\u5185\u5b58\u7a7a\u95f4"),Object(r.b)("li",{parentName:"ol"},"\u6267\u884c\u6784\u9020\u65b9\u6cd5\uff0c\u521d\u59cb\u5316\u5bf9\u8c61"),Object(r.b)("li",{parentName:"ol"},"\u6808\u5f15\u7528\u6307\u5411\u5806\u5185\u5b58\u4e2d\u7684\u5bf9\u8c61"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u8fd9\u4e09\u4e2a\u6b65\u9aa4\u5982\u679c\u53d1\u751f\u6307\u4ee4\u91cd\u6392\uff0c\u5c31\u4f1a\u6709\u95ee\u9898\uff0c\u56e0\u6b64\u5fc5\u987b\u4f7f\u7528",Object(r.b)("inlineCode",{parentName:"strong"},"Volatile"),"\u6765\u7981\u6b62\u6307\u4ee4\u91cd\u6392")))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'class Lazy{\n    private Lazy(){\n        System.out.println(Thread.currentThread().getName() + "\u521b\u5efa\u4e86\u4e00\u4e2a\u5bf9\u8c61");\n    }\n\n    private static volatile Lazy LAZY;\n\n    public static Lazy getInstance(){\n        if (LAZY == null) {\n            synchronized (Lazy.class) {\n                if (LAZY == null) {\n                    LAZY = new Lazy();\n                }\n            }\n        }\n        return LAZY;\n    }\n}\n')),Object(r.b)("h2",{id:"\u9759\u6001\u5185\u90e8\u7c7b\u5b9e\u73b0"},"\u9759\u6001\u5185\u90e8\u7c7b\u5b9e\u73b0"),Object(r.b)("blockquote",null,Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u5b9a\u4e49\u4e00\u4e2a\u9759\u6001\u7684\u5185\u90e8\u7c7b"),Object(r.b)("li",{parentName:"ul"},"\u5728\u5185\u90e8\u7c7b\u4e2d\u521b\u5efa\u5916\u90e8\u7c7b\u7684\u5b9e\u4f8b"),Object(r.b)("li",{parentName:"ul"},"\u5728\u5916\u90e8\u7c7b\u521b\u5efa",Object(r.b)("inlineCode",{parentName:"li"},"getInstance()"),"\u65b9\u6cd5\uff0c\u8fd4\u56de\u5185\u90e8\u7c7b\u4e2d\u7684\u5916\u90e8\u7c7b\u5b9e\u4f8b"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"class Holder{\n    private Holder(){}\n\n    public static Holder getInstance(){\n        return InnerClass.HOLDER;\n    }\n    \n    public static class InnerClass{\n        private static final Holder HOLDER = new Holder();\n    }\n}\n")),Object(r.b)("h2",{id:"\u53cd\u5c04\u521b\u5efa\u5b9e\u4f8b\u7834\u574f\u5355\u4f8b"},"\u53cd\u5c04\u521b\u5efa\u5b9e\u4f8b\u7834\u574f\u5355\u4f8b"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u867d\u7136\u6784\u9020\u65b9\u6cd5\u88ab\u8bbe\u7f6e\u4e3a\u4e86\u79c1\u6709\uff0c\u4f46\u662f\u901a\u8fc7\u53cd\u5c04\u4f9d\u7136\u53ef\u4ee5\u5f3a\u884c\u8c03\u7528\u5b83\u6765\u521b\u9020\u5b9e\u4f8b\u5bf9\u8c61\uff0c\u4ece\u800c\u7834\u574f\u5355\u4f8b")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public static void main(String[] args) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException {\n    Lazy lazy1 = Lazy.getInstance();\n    Constructor<Lazy> constructor = Lazy.class.getDeclaredConstructor(null);\n    constructor.setAccessible(true); // \u65e0\u89c6\u79c1\u6709\n    Lazy lazy2 = constructor.newInstance();\n  \n    System.out.println(lazy1.hashCode());\n    System.out.println(lazy2.hashCode());\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"1580066828\n491044090\n")),Object(r.b)("p",null,"\u53ef\u4ee5\u770b\u5230\u521b\u5efa\u51fa\u4e86\u4e24\u4e2a\u4e0d\u540c\u7684\u5b9e\u4f8b\u5316\u5bf9\u8c61"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u89e3\u51b3\u65b9\u6cd5\uff1a\u5728\u6784\u9020\u65b9\u6cd5\u4e2d\u9501\u7c7b\u6a21\u677f\uff0c\u5982\u679c\u5728\u6267\u884c\u6784\u9020\u65b9\u6cd5\u65f6\u53d1\u73b0\u5df2\u7ecf\u6709\u5bf9\u8c61\u4e86\uff0c\u76f4\u63a5\u629b\u51fa\u4e00\u4e2a\u5f02\u5e38"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'class Lazy{\n    private Lazy(){\n        synchronized (Lazy.class) {\n            if (LAZY != null) {\n                throw new RuntimeException("\u4e0d\u5141\u8bb8\u901a\u8fc7\u53cd\u5c04\u8c03\u7528\u6784\u9020\u65b9\u6cd5\u521b\u5efa\u5bf9\u8c61");\n            }\n        }\n    }\n\n    private static volatile Lazy LAZY;\n\n    public static Lazy getInstance(){\n        if (LAZY == null) {\n            synchronized (Lazy.class) {\n                if (LAZY == null) {\n                    LAZY = new Lazy();\n                }\n            }\n        }\n        return LAZY;\n    }\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public class Demo {\n    public static void main(String[] args) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException {\n        Lazy lazy1 = Lazy.getInstance();\n        Constructor<Lazy> constructor = Lazy.class.getDeclaredConstructor(null);\n        constructor.setAccessible(true); // \u65e0\u89c6\u79c1\u6709\n        Lazy lazy2 = constructor.newInstance();\n\n        System.out.println(lazy1.hashCode());\n        System.out.println(lazy2.hashCode());\n    }\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'Exception in thread "main" java.lang.reflect.InvocationTargetException\n...\nCaused by: java.lang.RuntimeException: \u4e0d\u5141\u8bb8\u901a\u8fc7\u53cd\u5c04\u8c03\u7528\u6784\u9020\u65b9\u6cd5\u521b\u5efa\u5bf9\u8c61\n    at singleton.Lazy.<init>(Demo.java:32)\n    ... 5 more\n')),Object(r.b)("hr",null),Object(r.b)("h2",{id:"\u591a\u6b21\u7528\u53cd\u5c04\u521b\u5efa\u591a\u4e2a\u5bf9\u8c61\u7834\u574f\u5355\u4f8b"},"\u591a\u6b21\u7528\u53cd\u5c04\u521b\u5efa\u591a\u4e2a\u5bf9\u8c61\u7834\u574f\u5355\u4f8b"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u5982\u679c\u6ca1\u7528\u6784\u9020\u65b9\u6cd5\u521b\u5efa\u5b9e\u4f8b\uff0c\u800c\u662f\u76f4\u63a5\u7528\u53cd\u5c04\u521b\u5efa\u591a\u4e2a\u5b9e\u4f8b\uff0c\u8fd8\u662f\u4f1a\u7834\u574f\u5355\u4f8b"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public class Demo {\n    public static void main(String[] args) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException {\n        Constructor<Lazy> constructor = Lazy.class.getDeclaredConstructor(null);\n        constructor.setAccessible(true); // \u65e0\u89c6\u79c1\u6709\n        \n        Lazy lazy1 = constructor.newInstance();\n        Lazy lazy2 = constructor.newInstance();\n\n        System.out.println(lazy1.hashCode());\n        System.out.println(lazy2.hashCode());\n    }\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"1580066828\n491044090\n")),Object(r.b)("p",null,"\u53ef\u4ee5\u770b\u5230\u53c8\u521b\u5efa\u51fa\u591a\u4e2a\u5bf9\u8c61\u4e86"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u89e3\u51b3\u65b9\u6cd5\uff1a"),"\u5b9a\u4e49\u4e00\u4e2a\u540d\u5b57\u5947\u5947\u602a\u602a\u7684\u8c01\u4e5f\u4e0d\u77e5\u9053\u7684\u6807\u5fd7\u4f4d\uff0c\u901a\u8fc7\u6807\u5fd7\u4f4d\u6765\u6807\u8bb0\u6784\u9020\u65b9\u6cd5\u662f\u5426\u88ab\u6267\u884c\u8fc7")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'class Lazy{\n    private static boolean mySecretFlag = false;\n\n    private Lazy(){\n        synchronized (Lazy.class) {\n            if (!mySecretFlag) {\n                mySecretFlag = true;\n            } else {\n                throw new RuntimeException("\u4e0d\u5141\u8bb8\u901a\u8fc7\u53cd\u5c04\u8c03\u7528\u6784\u9020\u65b9\u6cd5\u521b\u5efa\u5bf9\u8c61");\n            }\n        }\n    }\n\n    private static volatile Lazy LAZY;\n\n    public static Lazy getInstance(){\n        if (LAZY == null) {\n            synchronized (Lazy.class) {\n                if (LAZY == null) {\n                    LAZY = new Lazy();\n                }\n            }\n        }\n        return LAZY;\n    }\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'Exception in thread "main" java.lang.reflect.InvocationTargetException\n...\nCaused by: java.lang.RuntimeException: \u4e0d\u5141\u8bb8\u901a\u8fc7\u53cd\u5c04\u8c03\u7528\u6784\u9020\u65b9\u6cd5\u521b\u5efa\u5bf9\u8c61\n    at singleton.Lazy.<init>(Demo.java:37)\n    ... 5 more\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u95ee\u9898\uff1a\u8fd9\u4e2a\u7528\u6765\u505a\u6807\u5fd7\u7684\u53d8\u91cf\u4e5f\u53ef\u4ee5\u901a\u8fc7\u53cd\u5c04\u83b7\u53d6\u5e76\u8fdb\u884c\u4fee\u6539"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public static void main(String[] args) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException {\n    Constructor<Lazy> constructor = Lazy.class.getDeclaredConstructor(null);\n    constructor.setAccessible(true); // \u65e0\u89c6\u79c1\u6709\n    Field mySecretFlag = Lazy.class.getDeclaredField("mySecretFlag");\n    mySecretFlag.setAccessible(true);\n  \n    Lazy lazy1 = constructor.newInstance();\n    mySecretFlag.set(lazy1, false);\n    Lazy lazy2 = constructor.newInstance();\n  \n    System.out.println(lazy1.hashCode());\n    System.out.println(lazy2.hashCode());\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"644117698\n1872034366\n")),Object(r.b)("p",null,"\u53ef\u4ee5\u770b\u5230\u53c8\u6210\u529f\u7834\u574f\u4e86\u5355\u4f8b"),Object(r.b)("hr",null),Object(r.b)("h2",{id:"\u901a\u8fc7\u679a\u4e3e\u4fdd\u8bc1\u5355\u4f8b"},"\u901a\u8fc7\u679a\u4e3e\u4fdd\u8bc1\u5355\u4f8b"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"JDK 1.5"),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u679a\u4e3e\u672c\u8eab\u4e5f\u662f\u4e00\u4e2a\u7c7b"),Object(r.b)("li",{parentName:"ul"},"\u679a\u4e3e\u81ea\u5e26\u5355\u4f8b\u6a21\u5f0f"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u5728\u4f7f\u7528\u53cd\u5c04\u8c03\u7528\u679a\u4e3e\u7c7b\u7684\u65e0\u53c2\u6784\u9020\u65b9\u6cd5\u65f6\uff0c\u4f1a\u62a5\u9519\u8bf4\u4e0d\u5b58\u5728\u65e0\u53c2\u6784\u9020\u65b9\u6cd5")),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u901a\u8fc7jad\u5de5\u5177\u67e5\u770b\u6e90\u7801\uff0c\u53d1\u73b0\u786e\u5b9e\u6ca1\u6709\u65e0\u53c2\u6784\u9020\u65b9\u6cd5")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u6709\u4e00\u4e2a\u6709\u53c2\u6784\u9020\u65b9\u6cd5\uff0c\u53c2\u6570\u7c7b\u578b\u4e3aString, int")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u4e8e\u662f\u5728\u53cd\u5c04\u8c03\u7528\u6784\u9020\u65b9\u6cd5\u65f6\uff0c\u8c03\u7528\u8fd9\u4e2a\u6709\u53c2\u6784\u9020\u65b9\u6cd5")))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"enum EnumSingle {\n    INSTANCE;\n\n    public static EnumSingle getInstance(){\n        return INSTANCE;\n    }\n\n    public static void main(String[] args) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException {\n        EnumSingle enumSingle1 = EnumSingle.getInstance();\n\n        Constructor<EnumSingle> declaredConstructor =\n                EnumSingle.class.getDeclaredConstructor(String.class, int.class);\n\n        EnumSingle enumSingle2 = declaredConstructor.newInstance();\n\n        System.out.println(enumSingle1.hashCode());\n        System.out.println(enumSingle2.hashCode());\n    }\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'Exception in thread "main" java.lang.IllegalArgumentException: Cannot reflectively create enum objects\n    at java.lang.reflect.Constructor.newInstance(Constructor.java:417)\n    at singleton.EnumSingle.main(Demo.java:89)\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u786e\u5b9e\u65e0\u6cd5\u901a\u8fc7\u53cd\u5c04\u521b\u5efa\u591a\u4e2a\u5bf9\u8c61\u4e86")),Object(r.b)("h1",{id:"uml\u7c7b\u56fe"},"UML\u7c7b\u56fe"),Object(r.b)("img",{src:t(1144).default,style:{zoom:"50%"}}),Object(r.b)("h1",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public class Singleton\n{\n    private volatile static Singleton uniqueInstance;\n    private static object singletonData = new Object();\n    private Singleton()\n    { }\n    public static Singleton GetInstance()\n    {\n        if (uniqueInstance == null)\n        {\n            lock (singletonData)\n            {\n                if (uniqueInstance == null)\n                {\n                    uniqueInstance = new Singleton();\n                }\n            }\n        }\n        return uniqueInstance;\n    }\n}\n")),Object(r.b)("h1",{id:"\u4f18\u7f3a\u70b9"},"\u4f18\u7f3a\u70b9"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u4f18\u70b9\n\u4fdd\u8bc1\u4e00\u4e2a\u7c7b\u6709\u4e14\u4ec5\u6709\u4e00\u4e2a\u5b9e\u4f8b\uff1b\u63d0\u4f9b\u5bf9\u67d0\u4e2a\u5bf9\u8c61\u7684\u5168\u5c40\u8bbf\u95ee\u70b9\uff08\u5728\u7a0b\u5e8f\u7684\u4efb\u610f\u5730\u65b9\uff0c\u901a\u8fc7\u7c7b\u7684\u9759\u6001\u65b9\u6cd5\u5f97\u5230\u5bf9\u8c61\u5f15\u7528\uff09"),Object(r.b)("li",{parentName:"ul"},"\u7f3a\u70b9\n\u53ea\u8003\u8651\u4e86\u5bf9\u8c61\u521b\u5efa\u7684\u7ba1\u7406\uff0c\u6ca1\u6709\u8003\u8651\u5bf9\u8c61\u9500\u6bc1\u7684\u7ba1\u7406\uff0c\u4e5f\u4e0d\u652f\u6301\u5bf9\u8c61\u5e8f\u5217\u5316")))}u.isMDXComponent=!0},564:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var a=t(0),c=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,c=function(e,n){if(null==e)return{};var t,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var o=c.a.createContext({}),u=function(e){var n=c.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},s=function(e){var n=u(e.components);return c.a.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},j=c.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=u(t),j=a,m=s["".concat(l,".").concat(j)]||s[j]||p[j]||r;return t?c.a.createElement(m,b(b({ref:n},o),{},{components:t})):c.a.createElement(m,b({ref:n},o))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=j;var b={};for(var i in n)hasOwnProperty.call(n,i)&&(b[i]=n[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var o=2;o<r;o++)l[o]=t[o];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,t)}j.displayName="MDXCreateElement"}}]);