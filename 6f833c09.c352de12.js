(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{247:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return o}));var a=n(2),r=n(6),i=(n(0),n(472)),l={id:"3.threadState",title:"\u7ebf\u7a0b\u72b6\u6001",hide_title:!0},b={unversionedId:"juc/3.threadState",id:"juc/3.threadState",isDocsHomePage:!1,title:"\u7ebf\u7a0b\u72b6\u6001",description:"\u7ebf\u7a0b\u72b6\u6001",source:"@site/docs/juc/3.\u7ebf\u7a0b\u72b6\u6001.md",slug:"/juc/3.threadState",permalink:"/docs/juc/3.threadState",version:"current",sidebar:"someSidebar",previous:{title:"\u5b9e\u73b0\u591a\u7ebf\u7a0b\u7684\u4e09\u79cd\u65b9\u5f0f",permalink:"/docs/juc/2.threadRealize"},next:{title:"\u7ebf\u7a0b\u540c\u6b65",permalink:"/docs/juc/4.synchronized"}},c=[{value:"\u7ebf\u7a0b\u72b6\u6001",id:"\u7ebf\u7a0b\u72b6\u6001",children:[]},{value:"\u7ebf\u7a0b\u65b9\u6cd5",id:"\u7ebf\u7a0b\u65b9\u6cd5",children:[{value:"\u7ebf\u7a0b\u505c\u6b62",id:"\u7ebf\u7a0b\u505c\u6b62",children:[]},{value:"\u7ebf\u7a0b\u4f11\u7720-sleep",id:"\u7ebf\u7a0b\u4f11\u7720-sleep",children:[]},{value:"\u7ebf\u7a0b\u793c\u8ba9-yield",id:"\u7ebf\u7a0b\u793c\u8ba9-yield",children:[]},{value:"\u7ebf\u7a0b\u5f3a\u5236\u6267\u884c-join",id:"\u7ebf\u7a0b\u5f3a\u5236\u6267\u884c-join",children:[]},{value:"\u9501\u63a7\u5236",id:"\u9501\u63a7\u5236",children:[]}]},{value:"\u89c2\u5bdf\u7ebf\u7a0b\u72b6\u6001",id:"\u89c2\u5bdf\u7ebf\u7a0b\u72b6\u6001",children:[]},{value:"\u7ebf\u7a0b\u4f18\u5148\u7ea7",id:"\u7ebf\u7a0b\u4f18\u5148\u7ea7",children:[]},{value:"\u4e0a\u4e0b\u6587\u5207\u6362",id:"\u4e0a\u4e0b\u6587\u5207\u6362",children:[]},{value:"\u5b88\u62a4\u7ebf\u7a0b \u2014\u2014 Daemon Thread",id:"\u5b88\u62a4\u7ebf\u7a0b--daemon-thread",children:[]}],p={rightToc:c};function o(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u7ebf\u7a0b\u72b6\u6001"},"\u7ebf\u7a0b\u72b6\u6001"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u7ebf\u7a0b\u4e94\u5927\u72b6\u6001"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u521b\u5efa\u72b6\u6001"),Object(i.b)("li",{parentName:"ul"},"\u5c31\u7eea\u72b6\u6001"),Object(i.b)("li",{parentName:"ul"},"\u963b\u585e\u72b6\u6001"),Object(i.b)("li",{parentName:"ul"},"\u8fd0\u884c\u72b6\u6001"),Object(i.b)("li",{parentName:"ul"},"\u6b7b\u4ea1\u72b6\u6001"))),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20200613193340571",src:n(805).default})),Object(i.b)("h1",{id:"\u7ebf\u7a0b\u65b9\u6cd5"},"\u7ebf\u7a0b\u65b9\u6cd5"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u65b9\u6cd5"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"setPriority(int newPriority)"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u66f4\u6539\u7ebf\u7a0b\u7684\u4f18\u5148\u7ea7")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"static void sleep(long millis)"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5728\u5236\u5b9a\u7684\u6beb\u79d2\u6570\u5185\u8ba9\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684\u7ebf\u7a0b\u4f11\u7720")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"void join()"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u7b49\u5f85\u8be5\u7ebf\u7a0b\u7ec8\u6b62")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"static void yield()"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u6682\u505c\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684\u7ebf\u7a0b\u5bf9\u8c61\u5e76\u6267\u884c\u5176\u4ed6\u7ebf\u7a0b")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"void interrupt()"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u4e2d\u65ad\u7ebf\u7a0b\uff0c\u522b\u7528\u8fd9\u4e2a\u65b9\u5f0f")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean isAlive()"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u6d4b\u8bd5\u7ebf\u7a0b\u662f\u5426\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001")))),Object(i.b)("h2",{id:"\u7ebf\u7a0b\u505c\u6b62"},"\u7ebf\u7a0b\u505c\u6b62"),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u4e0d\u63a8\u8350\u4f7f\u7528JDK\u63d0\u4f9b\u7684",Object(i.b)("inlineCode",{parentName:"li"},"stop()"),"\u3001",Object(i.b)("inlineCode",{parentName:"li"},"destroy()"),"\u65b9\u6cd5"),Object(i.b)("li",{parentName:"ul"},"\u63a8\u8350\u7ebf\u7a0b\u81ea\u5df1\u505c\u6b62\u4e0b\u6765"),Object(i.b)("li",{parentName:"ul"},"\u5efa\u8bae\u4f7f\u7528\u4e00\u4e2a\u6807\u5fd7\u4f5c\u4e3a\u7ec8\u6b62\u53d8\u91cf\uff0c\u5f53flag = false\uff0c\u5219\u7ec8\u6b62\u7ebf\u7a0b\u8fd0\u884c")),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class TestStop implements Runnable {\n  //1.\u7ebf\u7a0b\u4e2d\u5b9a\u4e49\u7ebf\u7a0b\u4f53\u4f7f\u7528\u6807\u8bc6\n  private boolean flag = true;\n  \n  @Override\n  public void run() {\n        //2.\u7ebf\u7a0b\u4f53\u4f7f\u7528\u8be5\u6807\u8bc6\n    while (flag) {\n      System.out.println("running Thread");\n    }\n  }\n  //3.\u5bf9\u5916\u63d0\u4f9b\u65b9\u6cd5\u6539\u53d8\u6807\u8bc6\n    public void stop() {\n    this.flag = false;\n  }\n}\n'))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class Demo06TestStop implements Runnable {\n    private boolean flag = true;\n\n    @Override\n    public void run() {\n        while (flag) {\n            System.out.println("\u7ebf\u7a0b\u8fd0\u884c\u4e2d...");\n        }\n    }\n\n    public void stop() {\n        this.flag = false;\n    }\n\n    public static void main(String[] args) {\n        Demo06TestStop t = new Demo06TestStop();\n        Thread t1 = new Thread(t);\n\n        t1.start();\n\n        for (int i = 0; i < 10000; i++) {\n            if (i == 9000) {\n                t.stop();\n            }\n        }\n    }\n}\n')),Object(i.b)("h2",{id:"\u7ebf\u7a0b\u4f11\u7720-sleep"},"\u7ebf\u7a0b\u4f11\u7720-sleep"),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sleep(\u65f6\u95f4)"),"\u6307\u5b9a\u5f53\u524d\u7ebf\u7a0b\u963b\u585e\u7684\u6beb\u79d2\u6570"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sleep"),"\u5b58\u5728\u5f02\u5e38",Object(i.b)("inlineCode",{parentName:"li"},"InterruptedException")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sleep"),"\u65f6\u95f4\u8fbe\u5230\u540e\u7ebf\u7a0b\u8fdb\u5165\u5c31\u7eea\u72b6\u6001"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sleep"),"\u53ef\u4ee5\u6a21\u62df\u7f51\u7edc\u5ef6\u65f6\uff0c\u5012\u8ba1\u65f6\u7b49"),Object(i.b)("li",{parentName:"ul"},"\u6bcf\u4e00\u4e2a\u5bf9\u8c61\u90fd\u6709\u4e00\u4e2a\u9501\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"sleep"),"\u4e0d\u4f1a\u91ca\u653e\u9501")),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"Thread.sleep(200);\n"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u6a21\u62df\u5012\u8ba1\u65f6")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public class Demo07TestSleep {\n    public static void tTen() throws InterruptedException {\n        int seconds = 10;\n\n        while (true) {\n            Thread.sleep(1000);\n            System.out.println(seconds--);\n            if (seconds <= 0) {\n                break;\n            }\n        }\n    }\n\n    public static void main(String[] args) throws InterruptedException {\n        tTen();\n    }\n}\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u6253\u5370\u7cfb\u7edf\u65f6\u95f4")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public static void main(String[] args) throws InterruptedException {\n  Date startTime = new Date(System.currentTimeMillis());\n\n  while (true) {\n    Thread.sleep(1000);\n    System.out.println(new SimpleDateFormat("yyyy-MM-dd HH:ss:mm")\n                       .format(startTime));\n    startTime = new Date(System.currentTimeMillis()); //\u66f4\u65b0\u65f6\u95f4\n  }\n}\n')),Object(i.b)("h2",{id:"\u7ebf\u7a0b\u793c\u8ba9-yield"},"\u7ebf\u7a0b\u793c\u8ba9-yield"),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u793c\u8ba9\u7ebf\u7a0b\uff0c\u8ba9\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684\u7ebf\u7a0b\u6682\u505c\uff0c\u4f46\u4e0d\u963b\u585e"),Object(i.b)("li",{parentName:"ul"},"\u5c06\u7ebf\u7a0b\u4ece\u8fd0\u884c\u72b6\u6001\u8f6c\u4e3a\u5c31\u7eea\u72b6\u6001"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u8ba9CPU\u91cd\u65b0\u8c03\u5ea6\uff0c\u793c\u8ba9\u4e0d\u4e00\u5b9a\u6210\u529f\uff0c\u5177\u4f53\u7ed3\u679c\u53d6\u51b3\u4e8eCPU")))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class Demo08Yield implements Runnable{\n    public static void main(String[] args) {\n        Demo08Yield o1 = new Demo08Yield();\n        Demo08Yield o2 = new Demo08Yield();\n\n        new Thread(o1,"thread1").start();\n        new Thread(o2,"thread2").start();\n    }\n\n    @Override\n    public void run() {\n        System.out.println(Thread.currentThread().getName() + "\u7ebf\u7a0b\u5f00\u59cb\u6267\u884c...");\n        Thread.yield();\n        System.out.println(Thread.currentThread().getName() + "\u7ebf\u7a0b\u505c\u6b62\u6267\u884c");\n    }\n}\n')),Object(i.b)("p",null,"\u793c\u8ba9\u6210\u529f\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"thread2\u7ebf\u7a0b\u5f00\u59cb\u6267\u884c...\nthread1\u7ebf\u7a0b\u5f00\u59cb\u6267\u884c...\nthread2\u7ebf\u7a0b\u505c\u6b62\u6267\u884c\nthread1\u7ebf\u7a0b\u505c\u6b62\u6267\u884c\n")),Object(i.b)("h2",{id:"\u7ebf\u7a0b\u5f3a\u5236\u6267\u884c-join"},"\u7ebf\u7a0b\u5f3a\u5236\u6267\u884c-join"),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"Join\u5408\u5e76\u7ebf\u7a0b\uff0c",Object(i.b)("strong",{parentName:"li"},"\u5f85\u6b64\u7ebf\u7a0b\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u518d\u6267\u884c\u5176\u4ed6\u7ebf\u7a0b\uff0c\u5176\u4ed6\u7ebf\u7a0b\u963b\u585e")),Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u60f3\u8c61\u4e3a\u63d2\u961f"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class Demo09Join implements Runnable {\n    @Override\n    public void run() {\n        for (int i = 0; i < 300; i++) {\n            System.out.println("\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86..." + i);\n        }\n    }\n\n    public static void main(String[] args) throws InterruptedException {\n        Demo09Join o1 = new Demo09Join();\n\n        Thread thread1 = new Thread(o1);\n        thread1.start();\n\n        //\u4e3b\u7ebf\u7a0b\n        for (int i = 0; i < 1000; i++) {\n            if (i == 200) {\n                //\u5f53\u4e3b\u7ebf\u7a0b\u8fd0\u884c\u5230200\u6b21\u65f6\uff0c\u5f3a\u5236\u5207\u5165\u6211\u4eec\u81ea\u5df1\u7684\u7ebf\u7a0b\n                thread1.join();\n            }\n            System.out.println("\u4e3b\u7ebf\u7a0b...." + i);\n        }\n    }\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\u4e3b\u7ebf\u7a0b....195\n\u4e3b\u7ebf\u7a0b....196\n\u4e3b\u7ebf\u7a0b....197\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...226\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...227\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...228\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...229\n\u4e3b\u7ebf\u7a0b....198\n\u4e3b\u7ebf\u7a0b....199\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...230\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...231\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...232\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...233\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...234\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...235\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...236\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...237\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...238\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...239\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...240\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...241\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...242\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...243\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...244\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...245\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...246\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...247\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...248\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...249\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...250\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...251\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...252\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...253\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...254\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...255\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...256\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...257\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...258\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...259\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...260\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...261\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...262\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...263\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...264\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...265\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...266\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...267\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...268\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...269\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...270\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...271\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...272\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...273\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...274\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...275\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...276\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...277\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...278\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...279\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...280\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...281\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...282\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...283\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...284\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...285\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...286\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...287\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...288\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...289\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...290\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...291\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...292\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...293\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...294\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...295\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...296\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...297\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...298\n\u7ebf\u7a0b\u4e2d\u7684vip\u6765\u4e86...299\n\u4e3b\u7ebf\u7a0b....200\n\u4e3b\u7ebf\u7a0b....201\n\u4e3b\u7ebf\u7a0b....202\n")),Object(i.b)("h2",{id:"\u9501\u63a7\u5236"},"\u9501\u63a7\u5236"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u65b9\u6cd5"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u662f\u5426\u91ca\u653e\u9501"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u5206\u6790"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"sleep()")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5426"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u8fdb\u5165\u963b\u585e\u72b6\u6001")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"wait()")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u662f"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5728\u5176\u4ed6\u7ebf\u7a0b\u8c03\u7528\u5bf9\u8c61\u7684notify\u6216notifyAll\u65b9\u6cd5\u524d\uff0c\u5bfc\u81f4\u5f53\u524d\u7ebf\u7a0b\u7b49\u5f85\u3002\u7ebf\u7a0b\u4f1a\u91ca\u653e\u6389\u5b83\u6240\u5360\u6709\u7684\u201c\u9501\u6807\u5fd7\u201d\uff0c\u4ece\u800c\u4f7f\u522b\u7684\u7ebf\u7a0b\u6709\u673a\u4f1a\u62a2\u5360\u8be5\u9501\u3002",Object(i.b)("br",null),"\u5f53\u524d\u7ebf\u7a0b\u5fc5\u987b\u62e5\u6709\u5f53\u524d\u5bf9\u8c61\u9501\u3002\u5982\u679c\u5f53\u524d\u7ebf\u7a0b\u4e0d\u662f\u6b64\u9501\u7684\u62e5\u6709\u8005\uff0c\u4f1a\u629b\u51faIllegalMonitorStateException\u5f02\u5e38\u3002",Object(i.b)("br",null),"\u5524\u9192\u5f53\u524d\u5bf9\u8c61\u9501\u7684\u7b49\u5f85\u7ebf\u7a0b\u4f7f\u7528notify\u6216notifyAll\u65b9\u6cd5\uff0c\u4e5f\u5fc5\u987b\u62e5\u6709\u76f8\u540c\u7684\u5bf9\u8c61\u9501\uff0c\u5426\u5219\u4e5f\u4f1a\u629b\u51faIllegalMonitorStateException\u5f02\u5e38\u3002",Object(i.b)("br",null),"waite()\u548cnotify()\u5fc5\u987b\u5728synchronized\u51fd\u6570\u6216synchronized\u3000block\u4e2d\u8fdb\u884c\u8c03\u7528\u3002\u5982\u679c\u5728non-synchronized\u51fd\u6570\u6216non-synchronized\u3000block\u4e2d\u8fdb\u884c\u8c03\u7528\uff0c\u867d\u7136\u80fd\u7f16\u8bd1\u901a\u8fc7\uff0c\u4f46\u5728\u8fd0\u884c\u65f6\u4f1a\u53d1\u751fIllegalMonitorStateException\u7684\u5f02\u5e38\u3002")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"join()")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u662f"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u7b49\u5f85\u8c03\u7528join\u65b9\u6cd5\u7684\u7ebf\u7a0b\u7ed3\u675f\uff0c\u518d\u7ee7\u7eed\u6267\u884c\u3002\u56e0\u4e3a\u5e95\u5c42\u8c03\u7528\u4e86",Object(i.b)("inlineCode",{parentName:"td"},"wait()"),"\uff0c\u6240\u4ee5\u4f1a\u91ca\u653e\u9501")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"yield()")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5426"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"yield()"),"\u53ea\u662f\u4f7f\u5f53\u524d\u7ebf\u7a0b\u91cd\u65b0\u56de\u5230\u53ef\u6267\u884c\u72b6\u6001\uff0c\u4e0d\u4f1a\u91ca\u653e\u9501\uff0c\u53ea\u662f\u901a\u77e5\u8c03\u5ea6\u5668\u81ea\u5df1\u53ef\u4ee5\u8ba9\u51facpu\u65f6\u95f4\u7247\uff0c\u4f46\u53ea\u662f\u5efa\u8bae\uff0c\u8c03\u5ea6\u5668\u4e5f\u4e0d\u4e00\u5b9a\u91c7\u7eb3")))),Object(i.b)("h1",{id:"\u89c2\u5bdf\u7ebf\u7a0b\u72b6\u6001"},"\u89c2\u5bdf\u7ebf\u7a0b\u72b6\u6001"),Object(i.b)("blockquote",null,Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"Thread.State\n")),Object(i.b)("p",{parentName:"blockquote"},"\u7ebf\u7a0b\u72b6\u6001\u53ef\u4ee5\u5904\u4e8e\u4e0b\u5217\u72b6\u6001\u4e4b\u4e00\uff1a"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"NEW"),"\n\u5c1a\u672a\u542f\u52a8\u7684\u7ebf\u7a0b\u5904\u4e8e\u6b64\u72b6\u6001"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RUNNABLE"),"\n\u5728Java\u865a\u62df\u673a\u4e2d\u6267\u884c\u7684\u7ebf\u7a0b\u5904\u4e8e\u6b64\u72b6\u6001"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"BLOCKED"),"\n\u88ab\u963b\u585e\u7b49\u5f85\u76d1\u89c6\u5668\u9501\u5b9a\u7684\u7ebf\u7a0b\u5904\u4e8e\u6b64\u72b6\u6001"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"WAITING"),"\n\u6b63\u5728\u7b49\u5f85\u53e6\u4e00\u4e2a\u7ebf\u7a0b\u6267\u884c\u7279\u5b9a\u52a8\u4f5c\u7684\u7ebf\u7a0b\u5904\u4e8e\u6b64\u72b6\u6001"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TIMED_WAITING"),"\n\u6b63\u5728\u7b49\u5f85\u53e6\u4e00\u4e2a\u7ebf\u7a0b\u6267\u884c\u52a8\u4f5c\u8fbe\u5230\u6307\u5b9a\u7b49\u5f85\u65f6\u95f4\u7684\u7ebf\u7a0b\u5904\u4e8e\u6b64\u72b6\u6001"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TERMINATED"),"\n\u5df2\u9000\u51fa\u7684\u7ebf\u7a0b\u5904\u4e8e\u6b64\u72b6\u6001")),Object(i.b)("p",{parentName:"blockquote"},"\u4e00\u4e2a\u7ebf\u7a0b\u53ef\u4ee5\u5728\u7ed9\u5b9a\u65f6\u95f4\u70b9\u5904\u4e8e\u4e00\u4e2a\u72b6\u6001\u3002\u8fd9\u4e9b\u72b6\u6001\u662f\u4e0d\u53cd\u5e94\u4efb\u4f55\u64cd\u4f5c\u7cfb\u7edf\u72b6\u6001\u7684\u865a\u62df\u673a\u72b6\u6001")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class Demo10State {\n    public static void main(String[] args) throws InterruptedException {\n        Thread.State state = null;\n\n        Thread thread1 = new Thread(() -> {\n            for (int i = 0; i < 5; i++) {\n                try {\n                    Thread.sleep(1000);\n                } catch (InterruptedException e) {\n                    e.printStackTrace();\n                }\n            }\n            System.out.println("/////");\n        }, "thread1");\n\n        //\u89c2\u5bdf\u72b6\u6001\n        state = thread1.getState();\n        System.out.println(state);\n\n        //\u89c2\u5bdf\u542f\u52a8\u540e\n        thread1.start();\n        state=thread1.getState();\n        System.out.println(state);\n\n        while (state != Thread.State.TERMINATED){\n            //\u53ea\u8981\u7ebf\u7a0b\u4e0d\u7ec8\u6b62\u5c31\u4e00\u76f4\u8f93\u51fa\u7ebf\u7a0b\u72b6\u6001\n            state = thread1.getState();\n            System.out.println(state);\n            Thread.sleep(200);\n        }\n    }\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"NEW\nRUNNABLE\nRUNNABLE\nTIMED_WAITING\nTIMED_WAITING\nTIMED_WAITING\nTIMED_WAITING\nTIMED_WAITING\nTIMED_WAITING\nTIMED_WAITING\nTIMED_WAITING\nTIMED_WAITING\nTIMED_WAITING\nTIMED_WAITING\nTIMED_WAITING\nTIMED_WAITING\nTIMED_WAITING\nTIMED_WAITING\nTIMED_WAITING\nTIMED_WAITING\nTIMED_WAITING\nTIMED_WAITING\nTIMED_WAITING\nTIMED_WAITING\nTIMED_WAITING\nTIMED_WAITING\nTIMED_WAITING\n/////\nTERMINATED\n")),Object(i.b)("h1",{id:"\u7ebf\u7a0b\u4f18\u5148\u7ea7"},"\u7ebf\u7a0b\u4f18\u5148\u7ea7"),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"Java\u63d0\u4f9b\u4e00\u4e2a\u7ebf\u7a0b\u8c03\u5ea6\u5668\u6765\u76d1\u63a7\u7a0b\u5e8f\u4e2d\u542f\u52a8\u540e\u8fdb\u5165\u5c31\u7eea\u72b6\u6001\u7684\u6240\u6709\u7ebf\u7a0b\uff0c\u7ebf\u7a0b\u8c03\u5ea6\u5668\u6309\u7167\u4f18\u5148\u7ea7\u51b3\u5b9a\u5e94\u8be5\u8c03\u5ea6\u54ea\u4e2a\u7ebf\u7a0b\u6765\u6267\u884c"),Object(i.b)("li",{parentName:"ul"},"\u7ebf\u7a0b\u7684\u4f18\u5148\u7ea7\u7528\u6570\u5b57\u8868\u793a\uff0c\u8303\u56f4 ",Object(i.b)("inlineCode",{parentName:"li"},"1~10"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Thread.MIN_PRIORITY = 1;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Thread.MAX_PRIORITY = 10;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Thread.NORM_PRIORITY = 5;")))),Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528\u4ee5\u4e0b\u65b9\u5f0f\u6539\u53d8\u6216\u83b7\u53d6\u4f18\u5148\u7ea7",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u83b7\u53d6\u4f18\u5148\u7ea7\uff1a",Object(i.b)("inlineCode",{parentName:"li"},"getPriority()")),Object(i.b)("li",{parentName:"ul"},"\u66f4\u6539\u4f18\u5148\u7ea7\uff1a",Object(i.b)("inlineCode",{parentName:"li"},"setPriority(int priorityNum)")))))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class Demo11Priority implements Runnable {\n    @Override\n    public void run() {\n        System.out.println(Thread.currentThread().getName() + " --\x3e " +\n                Thread.currentThread().getPriority());\n    }\n\n    public static void main(String[] args) {\n        System.out.println(Thread.currentThread().getName() + " --\x3e " +\n                Thread.currentThread().getPriority());\n\n        Demo11Priority myClass = new Demo11Priority();\n\n        Thread t1 = new Thread(myClass,"Thread1");\n        Thread t2 = new Thread(myClass,"Thread2");\n        Thread t3 = new Thread(myClass,"Thread3");\n        Thread t4 = new Thread(myClass,"Thread4");\n        Thread t5 = new Thread(myClass,"Thread5");\n\n        //\u5148\u8bbe\u7f6e\u4f18\u5148\u7ea7\uff0c\u518d\u542f\u52a8\n        t1.setPriority(Thread.MAX_PRIORITY);\n        t1.start();\n\n        t2.setPriority(9);\n        t2.start();\n\n        t3.setPriority(8);\n        t3.start();\n\n        t4.setPriority(6);\n        t4.start();\n\n        t5.setPriority(7);\n        t5.start();\n    }\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"main --\x3e 5\nThread1 --\x3e 10\nThread2 --\x3e 9\nThread3 --\x3e 8\nThread4 --\x3e 6\nThread5 --\x3e 7\n")),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u4f18\u5148\u7ea7\u4f4e\u53ea\u662f\u610f\u5473\u7740\u83b7\u5f97\u8c03\u5ea6\u7684\u6982\u7387\u4f4e\uff0c\u5e76\u4e0d\u662f\u4f18\u5148\u7ea7\u4f4e\u5c31\u4e0d\u4f1a\u88ab\u4f18\u5148\u8c03\u7528\uff0c\u5177\u4f53\u90fd\u662f\u7531CPU\u8c03\u5ea6\u51b3\u5b9a\u7684"))),Object(i.b)("h1",{id:"\u4e0a\u4e0b\u6587\u5207\u6362"},"\u4e0a\u4e0b\u6587\u5207\u6362"),Object(i.b)("p",null,"\u591a\u7ebf\u7a0b\u7f16\u7a0b\u4e2d\u4e00\u822c\u7ebf\u7a0b\u7684\u4e2a\u6570\u90fd\u5927\u4e8eCPU\u6838\u5fc3\u7684\u4e2a\u6570\uff0c\u800c\u4e00\u4e2aCPU\u6838\u5fc3\u5728\u4efb\u4e00\u65f6\u523b\u53ea\u80fd\u88ab\u4e00\u4e2a\u7ebf\u7a0b\u4f7f\u7528\uff0c\u4e3a\u4e86\u8ba9\u8fd9\u4e9b\u7ebf\u7a0b\u80fd\u5f97\u5230\u6709\u6548\u6267\u884c\uff0cCPU\u91c7\u53d6\u7684\u7b56\u7565\u5e08\u4e3a\u6bcf\u4e2a\u7ebf\u7a0b\u5206\u914d\u65f6\u95f4\u7247\u5e76\u8f6e\u8f6c\u7684\u5f62\u5f0f"),Object(i.b)("p",null,"\u5f53\u4e00\u4e2a\u7ebf\u7a0b\u7684\u65f6\u95f4\u7247\u7528\u5b8c\u7684\u65f6\u5019\u4f1a\u91cd\u65b0\u5904\u4e8e\u5c31\u7eea\u72b6\u6001\uff0c\u8ba9\u7ed9\u5176\u4ed6\u7ebf\u7a0b\u4f7f\u7528\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u5c31\u5c5e\u4e8e\u4e00\u6b21\u4e0a\u4e0b\u6587\u5207\u6362"),Object(i.b)("p",null,"\u5f53\u524d\u4efb\u52a1\u5728\u6267\u884c\u5b8cCPU\u65f6\u95f4\u7247\u5207\u6362\u5230\u53e6\u4e00\u4e2a\u4efb\u52a1\u4e4b\u524d\uff0c\u4f1a\u5148\u4fdd\u5b58\u81ea\u5df1\u7684\u72b6\u6001\uff0c\u4ee5\u4fbf\u4e0b\u4e00\u6b21\u518d\u5207\u6362\u56de\u8fd9\u4e2a\u4efb\u52a1\u65f6\uff0c\u53ef\u4ee5\u52a0\u8f7d\u8fd9\u4e2a\u4efb\u52a1\u7684\u72b6\u6001\u3002",Object(i.b)("strong",{parentName:"p"},"\u4efb\u52a1\u4ece\u4fdd\u5b58\u5230\u518d\u52a0\u8f7d\u7684\u8fc7\u7a0b\u5c31\u662f\u4e00\u6b21\u4e0a\u4e0b\u6587\u5207\u6362")),Object(i.b)("p",null,"\u4e0a\u4e0b\u6587\u5207\u6362\u901a\u5e38\u662f\u8ba1\u7b97\u5bc6\u96c6\u578b\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b83\u9700\u8981\u76f8\u5f53\u53ef\u89c2\u7684\u5904\u7406\u5668\u65f6\u95f4\uff0c\u5728\u6bcf\u79d2\u51e0\u5341\u4e0a\u767e\u6b21\u7684\u5207\u6362\u4e2d\uff0c\u6bcf\u6b21\u5207\u6362\u90fd\u9700\u8981\u7eb3\u79d2\u7ea7\u7684\u65f6\u95f4\u3002\u6240\u4ee5\u4e0a\u4e0b\u6587\u5207\u6362\u5bf9\u7cfb\u7edf\u6765\u8bf4\u610f\u5473\u7740\u6d88\u8017\u5927\u91cf\u7684CPU\u65f6\u95f4\uff0c\u4e8b\u5b9e\u4e0a\uff0c\u53ef\u80fd\u662f\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u65f6\u95f4\u6d88\u8017\u6700\u5927\u7684\u64cd\u4f5c"),Object(i.b)("p",null,"Linux\u76f8\u6bd4\u5176\u4ed6\u64cd\u4f5c\u7cfb\u7edf\u6709\u5f88\u591a\u4f18\u70b9\uff0c\u5176\u4e2d\u4e00\u9879\u5c31\u662f\uff0c\u5176\u4e0a\u4e0b\u6587\u5207\u6362\u548c\u6a21\u5f0f\u5207\u6362\u7684\u65f6\u95f4\u6d88\u8017\u975e\u5e38\u5c11"),Object(i.b)("h1",{id:"\u5b88\u62a4\u7ebf\u7a0b--daemon-thread"},"\u5b88\u62a4\u7ebf\u7a0b \u2014\u2014 Daemon Thread"),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u7ebf\u7a0b\u5206\u4e3a",Object(i.b)("inlineCode",{parentName:"li"},"\u7528\u6237\u7ebf\u7a0b"),"\u548c",Object(i.b)("inlineCode",{parentName:"li"},"\u5b88\u62a4\u7ebf\u7a0b")),Object(i.b)("li",{parentName:"ul"},"\u865a\u62df\u673a\u4e0d\u8bb8\u786e\u4fdd\u7528\u6237\u7ebf\u7a0b\u6267\u884c\u5b8c\u6bd5"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u865a\u62df\u673a\u4e0d\u7528\u7b49\u5f85\u5b88\u62a4\u7ebf\u7a0b\u6267\u884c\u5b8c\u6bd5")),Object(i.b)("li",{parentName:"ul"},"\u5982\uff0c\u540e\u53f0\u8bb0\u5f55\u64cd\u4f5c\u65e5\u5fd7\u3001\u76d1\u63a7\u5185\u5b58\u3001\u5783\u573e\u56de\u6536\u7b49\u5f85..")),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"setDaemon(Boolean enable)  //true for daemon , false for normal\n"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class Demo12Daemon {\n    public static void main(String[] args) {\n        God god = new God();\n        Me me = new Me();\n\n        //\u8bb2\u4e0a\u5e1d\u8bbe\u7f6e\u4e3a\u5b88\u62a4\u7ebf\u7a0b\n        Thread godThread = new Thread(god, "god Thread");\n        godThread.setDaemon(true);\n        godThread.start();\n\n        //\u542f\u52a8\u6211\u81ea\u5df1\n        new Thread(me, "me Thread").start();\n    }\n}\n\nclass Me implements Runnable {\n    @Override\n    public void run() {\n        for (int i = 0; i < 36500; i++) {\n            System.out.println("\u6211\u5f00\u5fc3\u7684\u6d3b\u7740\u7684\u7b2c" + i + "\u5929");\n        }\n        System.out.println("=========\u5b89\u8be6\u7684\u8d70\u4e86======");\n    }\n}\n\nclass God implements Runnable {\n    @Override\n    public void run() {\n        while (true) {\n            System.out.println("\u4e0a\u5e1d\u4fdd\u4f51\u7740\u6211...");\n        }\n    }\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\u6211\u5f00\u5fc3\u7684\u6d3b\u7740\u7684\u7b2c36498\u5929\n\u6211\u5f00\u5fc3\u7684\u6d3b\u7740\u7684\u7b2c36499\u5929\n\u4e0a\u5e1d\u4fdd\u4f51\u7740\u6211...\n=========\u5b89\u8be6\u7684\u8d70\u4e86======\n\u4e0a\u5e1d\u4fdd\u4f51\u7740\u6211...\n\u4e0a\u5e1d\u4fdd\u4f51\u7740\u6211...\n\u4e0a\u5e1d\u4fdd\u4f51\u7740\u6211...\n\u4e0a\u5e1d\u4fdd\u4f51\u7740\u6211...\n")))}o.isMDXComponent=!0},472:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},d=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=o(n),m=a,j=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.a.createElement(j,b(b({ref:t},p),{},{components:n})):r.a.createElement(j,b({ref:t},p))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var p=2;p<i;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},805:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/2-b9d3a34d97f4af7f2b3c692cf8347d21.png"}}]);