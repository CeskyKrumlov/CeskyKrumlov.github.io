(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{490:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return s}));var a=t(0),l=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=l.a.createContext({}),u=function(e){var n=l.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},p=function(e){var n=u(e.components);return l.a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},m=l.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,s=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return t?l.a.createElement(s,b(b({ref:n},i),{},{components:t})):l.a.createElement(s,b({ref:n},i))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=m;var b={};for(var o in n)hasOwnProperty.call(n,o)&&(b[o]=n[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var i=2;i<r;i++)c[i]=t[i];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},75:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return b})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return u}));var a=t(2),l=t(6),r=(t(0),t(490)),c={id:"2.threadRealize",title:"\u5b9e\u73b0\u591a\u7ebf\u7a0b\u7684\u4e09\u79cd\u65b9\u5f0f",hide_title:!0},b={unversionedId:"juc/2.threadRealize",id:"juc/2.threadRealize",isDocsHomePage:!1,title:"\u5b9e\u73b0\u591a\u7ebf\u7a0b\u7684\u4e09\u79cd\u65b9\u5f0f",description:"\u7ebf\u7a0b\u521b\u5efa",source:"@site/docs/juc/2.\u591a\u7ebf\u7a0b\u5b9e\u73b0.md",slug:"/juc/2.threadRealize",permalink:"/docs/juc/2.threadRealize",version:"current",sidebar:"someSidebar",previous:{title:"\u591a\u7ebf\u7a0b\u6982\u8ff0",permalink:"/docs/juc/1.thread"},next:{title:"\u7ebf\u7a0b\u72b6\u6001",permalink:"/docs/juc/3.threadState"}},o=[{value:"\u7ebf\u7a0b\u521b\u5efa",id:"\u7ebf\u7a0b\u521b\u5efa",children:[]},{value:"\u7ee7\u627fThread\u7c7b",id:"\u7ee7\u627fthread\u7c7b",children:[]},{value:"\u5b9e\u73b0Runnable\u63a5\u53e3",id:"\u5b9e\u73b0runnable\u63a5\u53e3",children:[{value:"\u521d\u8bc6\u5e76\u53d1\u95ee\u9898",id:"\u521d\u8bc6\u5e76\u53d1\u95ee\u9898",children:[]},{value:"\u4f7f\u7528Lambda\u8868\u8fbe\u5f0f\u4e66\u5199",id:"\u4f7f\u7528lambda\u8868\u8fbe\u5f0f\u4e66\u5199",children:[]}]},{value:"\u5b9e\u73b0Callable\u63a5\u53e3",id:"\u5b9e\u73b0callable\u63a5\u53e3",children:[]},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",children:[]}],i={rightToc:o};function u(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"\u7ebf\u7a0b\u521b\u5efa"},"\u7ebf\u7a0b\u521b\u5efa"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Thread\u3001Runnable\u3001Callable")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u521b\u5efa\u7ebf\u7a0b\u7684\u4e09\u79cd\u65b9\u5f0f\uff1a")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Thread"),"\u7c7b\uff1a\u7ee7\u627fThread\u7c7b"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Runnable"),"\u63a5\u53e3\uff1a\u5b9e\u73b0Runnable\u63a5\u53e3"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Callable"),"\u63a5\u53e3\uff1a\u5b9e\u73b0Callable\u63a5\u53e3")),Object(r.b)("h1",{id:"\u7ee7\u627fthread\u7c7b"},"\u7ee7\u627fThread\u7c7b"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u81ea\u8eab\u5b9e\u73b0\u4e86",Object(r.b)("inlineCode",{parentName:"p"},"Runnable"),"\u63a5\u53e3")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u6b65\u9aa4\uff1a"),Object(r.b)("ol",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ol"},"\u81ea\u5b9a\u4e49\u7ebf\u7a0b\u7c7b\u7ee7\u627f",Object(r.b)("inlineCode",{parentName:"li"},"Thread"),"\u7c7b"),Object(r.b)("li",{parentName:"ol"},"\u91cd\u5199",Object(r.b)("inlineCode",{parentName:"li"},"run()"),"\u65b9\u6cd5\uff0c\u7f16\u5199\u7ebf\u7a0b\u6267\u884c\u4f53"),Object(r.b)("li",{parentName:"ol"},"\u521b\u5efa\u7ebf\u7a0b\u5bf9\u8c61\uff0c\u8c03\u7528",Object(r.b)("inlineCode",{parentName:"li"},"start()"),"\u65b9\u6cd5\u542f\u52a8\u7ebf\u7a0b"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class Demo01Thread extends Thread {\n\n    @Override\n    public void run() {\n        super.run();\n        for (int i = 0; i < 20; i++) {\n            System.out.println("run\u7ebf\u7a0b\u4f53 -> " + i);\n        }\n    }\n\n    public static void main(String[] args) {\n        //\u4e3b\u7ebf\u7a0b\n        //\u521b\u5efa\u4e00\u4e2a\u7ebf\u7a0b\u5bf9\u8c61\n        Demo01Thread thread = new Demo01Thread();\n\n        //\u8c03\u7528start()\u65b9\u6cd5\uff0c\u5f00\u542f\u7ebf\u7a0b\n        thread.start();\n\n        for (int i = 0; i < 20; i++) {\n            System.out.println("\u4e3b\u7ebf\u7a0b ->" + i);\n        }\n    }\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"\u4e3b\u7ebf\u7a0b ->0\nrun\u7ebf\u7a0b\u4f53 -> 0\n\u4e3b\u7ebf\u7a0b ->1\nrun\u7ebf\u7a0b\u4f53 -> 1\n\u4e3b\u7ebf\u7a0b ->2\nrun\u7ebf\u7a0b\u4f53 -> 2\n\u4e3b\u7ebf\u7a0b ->3\nrun\u7ebf\u7a0b\u4f53 -> 3\n\u4e3b\u7ebf\u7a0b ->4\nrun\u7ebf\u7a0b\u4f53 -> 4\n\u4e3b\u7ebf\u7a0b ->5\nrun\u7ebf\u7a0b\u4f53 -> 5\n\u4e3b\u7ebf\u7a0b ->6\nrun\u7ebf\u7a0b\u4f53 -> 6\n\u4e3b\u7ebf\u7a0b ->7\nrun\u7ebf\u7a0b\u4f53 -> 7\n\u4e3b\u7ebf\u7a0b ->8\n\u4e3b\u7ebf\u7a0b ->9\nrun\u7ebf\u7a0b\u4f53 -> 8\n\u4e3b\u7ebf\u7a0b ->10\n\u4e3b\u7ebf\u7a0b ->11\n\u4e3b\u7ebf\u7a0b ->12\n\u4e3b\u7ebf\u7a0b ->13\n\u4e3b\u7ebf\u7a0b ->14\n\u4e3b\u7ebf\u7a0b ->15\n\u4e3b\u7ebf\u7a0b ->16\n\u4e3b\u7ebf\u7a0b ->17\n\u4e3b\u7ebf\u7a0b ->18\n\u4e3b\u7ebf\u7a0b ->19\nrun\u7ebf\u7a0b\u4f53 -> 9\nrun\u7ebf\u7a0b\u4f53 -> 10\nrun\u7ebf\u7a0b\u4f53 -> 11\nrun\u7ebf\u7a0b\u4f53 -> 12\nrun\u7ebf\u7a0b\u4f53 -> 13\nrun\u7ebf\u7a0b\u4f53 -> 14\nrun\u7ebf\u7a0b\u4f53 -> 15\nrun\u7ebf\u7a0b\u4f53 -> 16\nrun\u7ebf\u7a0b\u4f53 -> 17\nrun\u7ebf\u7a0b\u4f53 -> 18\nrun\u7ebf\u7a0b\u4f53 -> 19\n")),Object(r.b)("p",null,"\u53ef\u4ee5\u770b\u5230\u7ebf\u7a0b\u4ea4\u66ff\u8fd0\u884c"),Object(r.b)("h1",{id:"\u5b9e\u73b0runnable\u63a5\u53e3"},"\u5b9e\u73b0Runnable\u63a5\u53e3"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u6b65\u9aa4")),Object(r.b)("ol",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ol"},"\u5b9a\u4e49\u81ea\u5df1\u7684\u7c7b\uff0c\u5b9e\u73b0",Object(r.b)("inlineCode",{parentName:"li"},"Runnable"),"\u63a5\u53e3"),Object(r.b)("li",{parentName:"ol"},"\u5b9e\u73b0",Object(r.b)("inlineCode",{parentName:"li"},"run()"),"\u65b9\u6cd5\uff0c\u7f16\u5199\u7ebf\u7a0b\u6267\u884c\u4f53"),Object(r.b)("li",{parentName:"ol"},"\u521b\u5efa\u7ebf\u7a0b\u5bf9\u8c61\uff0c\u4f20\u5165",Object(r.b)("inlineCode",{parentName:"li"},"Runnable"),"\u5b9e\u73b0\u7c7b\u5bf9\u8c61\uff0c",Object(r.b)("inlineCode",{parentName:"li"},"new Thread(Xxx)")),Object(r.b)("li",{parentName:"ol"},"\u8c03\u7528",Object(r.b)("inlineCode",{parentName:"li"},"start()"),"\u65b9\u6cd5\u542f\u52a8\u7ebf\u7a0b"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class Demo02Runnable implements Runnable{\n    @Override\n    public void run() {\n        for (int i = 0; i < 10; i++) {\n            System.out.println("run\u65b9\u6cd5 -> " + i);\n        }\n    }\n\n    public static void main(String[] args) {\n        Demo02Runnable myRunnable = new Demo02Runnable();\n        //\u7a7f\u4ef6\u7ebf\u7a0b\u5bf9\u8c61\uff0c\u901a\u8fc7\u7ebf\u7a0b\u5bf9\u8c61\u6765\u5f00\u542f\u6211\u4eec\u7684\u7ebf\u7a0b\uff0c\u4ee3\u7406\n        // Thread\u6784\u9020\u65b9\u6cd5\u53ef\u4ee5\u63a5\u53d7\u4e00\u4e2a\u5b9e\u73b0Runnable\u63a5\u53e3\u7684\u7c7b\n        new Thread(myRunnable).start();\n\n        for (int i = 0; i < 10; i++) {\n            System.out.println("\u4e3b\u8fdb\u7a0b -> " + i);\n        }\n    }\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"\u4e3b\u8fdb\u7a0b -> 0\nrun\u65b9\u6cd5 -> 0\n\u4e3b\u8fdb\u7a0b -> 1\nrun\u65b9\u6cd5 -> 1\n\u4e3b\u8fdb\u7a0b -> 2\nrun\u65b9\u6cd5 -> 2\nrun\u65b9\u6cd5 -> 3\n\u4e3b\u8fdb\u7a0b -> 3\nrun\u65b9\u6cd5 -> 4\n\u4e3b\u8fdb\u7a0b -> 4\nrun\u65b9\u6cd5 -> 5\n\u4e3b\u8fdb\u7a0b -> 5\nrun\u65b9\u6cd5 -> 6\n\u4e3b\u8fdb\u7a0b -> 6\nrun\u65b9\u6cd5 -> 7\n\u4e3b\u8fdb\u7a0b -> 7\n\u4e3b\u8fdb\u7a0b -> 8\nrun\u65b9\u6cd5 -> 8\n\u4e3b\u8fdb\u7a0b -> 9\nrun\u65b9\u6cd5 -> 9\n")),Object(r.b)("h2",{id:"\u521d\u8bc6\u5e76\u53d1\u95ee\u9898"},"\u521d\u8bc6\u5e76\u53d1\u95ee\u9898"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class Demo03Multi implements Runnable {\n    private int ticketNum = 10;\n\n    @Override\n    public void run() {\n        while (true) {\n            if (ticketNum <= 0) {\n                System.out.println("\u5356\u5b8c\u4e86");\n                break;\n            }\n\n            System.out.println(Thread.currentThread().getName() +\n                    "\u62ff\u5230\u4e86\u7b2c" +\n                    ticketNum-- +\n                    "\u5f20\u7968");\n        }\n\n        try {\n            //\u6a21\u62df\u5ef6\u65f6\n            Thread.sleep(200);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n    }\n\n    public static void main(String[] args) {\n        Demo03Multi demo03 = new Demo03Multi();\n\n        new Thread(demo03, "thread1").start();\n        new Thread(demo03, "thread2").start();\n        new Thread(demo03, "thread3").start();\n    }\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"thread1\u62ff\u5230\u4e86\u7b2c9\u5f20\u7968\nthread3\u62ff\u5230\u4e86\u7b2c9\u5f20\u7968\nthread2\u62ff\u5230\u4e86\u7b2c10\u5f20\u7968\nthread3\u62ff\u5230\u4e86\u7b2c7\u5f20\u7968\nthread1\u62ff\u5230\u4e86\u7b2c8\u5f20\u7968\nthread3\u62ff\u5230\u4e86\u7b2c5\u5f20\u7968\nthread2\u62ff\u5230\u4e86\u7b2c6\u5f20\u7968\nthread3\u62ff\u5230\u4e86\u7b2c3\u5f20\u7968\nthread1\u62ff\u5230\u4e86\u7b2c4\u5f20\u7968\n\u5356\u5b8c\u4e86\nthread3\u62ff\u5230\u4e86\u7b2c1\u5f20\u7968\n\u5356\u5b8c\u4e86\nthread2\u62ff\u5230\u4e86\u7b2c2\u5f20\u7968\n\u5356\u5b8c\u4e86\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u770b\u5230\u7ebf\u7a0b1\u548c\u7ebf\u7a0b3\u90fd\u62ff\u5230\u7b2c9\u5f20\u7968\uff0c",Object(r.b)("strong",{parentName:"p"},"\u8fd9\u8bf4\u660e\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u64cd\u4f5c\u4e00\u4e2a\u8d44\u6e90\u65f6\u53ef\u80fd\u51fa\u73b0\u9519\u8bef"),"\uff0c\u79f0\u4e3a",Object(r.b)("inlineCode",{parentName:"p"},"\u7ebf\u7a0b\u4e0d\u5b89\u5168"))),Object(r.b)("h2",{id:"\u4f7f\u7528lambda\u8868\u8fbe\u5f0f\u4e66\u5199"},"\u4f7f\u7528Lambda\u8868\u8fbe\u5f0f\u4e66\u5199"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class Demo05MultiWithLambda {\n    private static int ticketNum = 10;\n\n    public static void main(String[] args) {\n\n        new Thread(() -> {\n            while (true) {\n                if (ticketNum <= 0) {\n                    System.out.println("\u5356\u5b8c\u4e86");\n                    break;\n                }\n\n                System.out.println(Thread.currentThread().getName() +\n                        "\u62ff\u5230\u4e86\u7b2c" +\n                        ticketNum-- +\n                        "\u5f20\u7968");\n            }\n\n            try {\n                //\u6a21\u62df\u5ef6\u65f6\n                Thread.sleep(200);\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n        },"t1").start();\n    }\n}\n')),Object(r.b)("h1",{id:"\u5b9e\u73b0callable\u63a5\u53e3"},"\u5b9e\u73b0Callable\u63a5\u53e3"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u6b65\u9aa4\uff1a")),Object(r.b)("ol",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ol"},"\u5b9e\u73b0",Object(r.b)("inlineCode",{parentName:"li"},"Callable"),"\u63a5\u53e3\uff0c\u9700\u8981\u8fd4\u56de\u503c\u7c7b\u578b"),Object(r.b)("li",{parentName:"ol"},"\u91cd\u5199",Object(r.b)("inlineCode",{parentName:"li"},"call()"),"\u65b9\u6cd5\uff0c\u9700\u8981\u629b\u51fa\u5f02\u5e38"),Object(r.b)("li",{parentName:"ol"},"\u521b\u5efa\u76ee\u6807\u5bf9\u8c61"),Object(r.b)("li",{parentName:"ol"},"\u521b\u5efa\u6267\u884c\u670d\u52a1\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"ExecutorService ser = Executors.newFixedThreadPool(1);")),Object(r.b)("li",{parentName:"ol"},"\u63d0\u4ea4\u6267\u884c\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"Future<Boolean> result1 = ser.submit(t1)")),Object(r.b)("li",{parentName:"ol"},"\u83b7\u53d6\u7ed3\u679c\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"boolean r1 = result1.get()")),Object(r.b)("li",{parentName:"ol"},"\u5173\u95ed\u670d\u52a1\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"ser.shutdownNow()")))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class Demo04Callable implements Callable {\n    @Override\n    public Boolean call() throws Exception {\n        for (int i = 0; i < 10; i++) {\n            System.out.println(Thread.currentThread().getName() + " | callable call() -> " + i);\n        }\n        return true;\n    }\n\n    public static void main(String[] args) throws ExecutionException, InterruptedException {\n        Demo04Callable t1 = new Demo04Callable();\n        Demo04Callable t2 = new Demo04Callable();\n        Demo04Callable t3 = new Demo04Callable();\n\n        //\u521b\u5efa\u6267\u884c\u670d\u52a1\n        ExecutorService service = Executors.newFixedThreadPool(3);\n        //\u63d0\u4ea4\u6267\u884c\n        Future<Boolean> result1 = service.submit(t1);\n        Future<Boolean> result2 = service.submit(t2);\n        Future<Boolean> result3 = service.submit(t3);\n        //\u83b7\u53d6\u7ed3\u679c\n        Boolean resultBool1 = result1.get();\n        Boolean resultBool2 = result2.get();\n        Boolean resultBool3 = result3.get();\n        //\u5173\u95ed\u670d\u52a1\n        service.shutdown();\n    }\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"pool-1-thread-1 | callable call() -> 0\npool-1-thread-1 | callable call() -> 1\npool-1-thread-1 | callable call() -> 2\npool-1-thread-1 | callable call() -> 3\npool-1-thread-1 | callable call() -> 4\npool-1-thread-1 | callable call() -> 5\npool-1-thread-2 | callable call() -> 0\npool-1-thread-2 | callable call() -> 1\npool-1-thread-2 | callable call() -> 2\npool-1-thread-2 | callable call() -> 3\npool-1-thread-2 | callable call() -> 4\npool-1-thread-2 | callable call() -> 5\npool-1-thread-2 | callable call() -> 6\npool-1-thread-2 | callable call() -> 7\npool-1-thread-3 | callable call() -> 0\npool-1-thread-2 | callable call() -> 8\npool-1-thread-1 | callable call() -> 6\npool-1-thread-1 | callable call() -> 7\npool-1-thread-1 | callable call() -> 8\npool-1-thread-1 | callable call() -> 9\npool-1-thread-2 | callable call() -> 9\npool-1-thread-3 | callable call() -> 1\npool-1-thread-3 | callable call() -> 2\npool-1-thread-3 | callable call() -> 3\npool-1-thread-3 | callable call() -> 4\npool-1-thread-3 | callable call() -> 5\npool-1-thread-3 | callable call() -> 6\npool-1-thread-3 | callable call() -> 7\npool-1-thread-3 | callable call() -> 8\npool-1-thread-3 | callable call() -> 9\n")),Object(r.b)("h1",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u7ee7\u627fThread\u7c7b")),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u5b50\u7c7b\u7ee7\u627fThread\u7c7b\u5177\u5907\u591a\u7ebf\u7a0b\u80fd\u529b"),Object(r.b)("li",{parentName:"ul"},"\u542f\u52a8\u7ebf\u7a0b\uff1a\u5b50\u7c7b\u5bf9\u8c61.start()")),Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u4e0d\u5efa\u8bae\u4f7f\u7528\uff1a\u907f\u514dOOP\u5355\u7ee7\u627f\u5c40\u9650\u6027"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u5b9e\u73b0Runnable\u63a5\u53e3")),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u63a5\u53e3Runnable\u5177\u6709\u591a\u7ebf\u7a0b\u80fd\u529b"),Object(r.b)("li",{parentName:"ul"},"\u542f\u52a8\u7ebf\u7a0b\uff1a\u4f20\u5165\u76ee\u6807\u5bf9\u8c61 -> ",Object(r.b)("inlineCode",{parentName:"li"},"new Thread(\u76ee\u6807\u5bf9\u8c61).start()"))),Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u63a8\u8350\u4f7f\u7528\uff1a\u907f\u514d\u5355\u7ee7\u627f\u5c40\u9650\u6027\uff0c\u7075\u6d3b\u65b9\u4fbf\uff0c\u65b9\u4fbf\u540c\u4e00\u4e2a\u5bf9\u8c61\u88ab\u591a\u4e2a\u7ebf\u7a0b\u4f7f\u7528"))))}u.isMDXComponent=!0}}]);