(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{350:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),p=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,d=u["".concat(i,".").concat(m)]||u[m]||s[m]||c;return t?a.a.createElement(d,o(o({ref:n},b),{},{components:t})):a.a.createElement(d,o({ref:n},b))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<c;b++)i[b]=t[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},64:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),c=(t(0),t(350)),i={id:"4.synchronized",title:"\u7ebf\u7a0b\u540c\u6b65",hide_title:!0},o={unversionedId:"juc/4.synchronized",id:"juc/4.synchronized",isDocsHomePage:!1,title:"\u7ebf\u7a0b\u540c\u6b65",description:"\u7ebf\u7a0b\u540c\u6b65",source:"@site/docs/juc/4.\u7ebf\u7a0b\u540c\u6b65.md",slug:"/juc/4.synchronized",permalink:"/docs/juc/4.synchronized",version:"current",sidebar:"someSidebar",previous:{title:"\u7ebf\u7a0b\u72b6\u6001",permalink:"/docs/juc/3.threadState"},next:{title:"\u7ebf\u7a0b\u901a\u4fe1",permalink:"/docs/juc/5.threadCommunicate"}},l=[{value:"\u7ebf\u7a0b\u540c\u6b65",id:"\u7ebf\u7a0b\u540c\u6b65",children:[{value:"\u9501",id:"\u9501",children:[]},{value:"\u7ebf\u7a0b\u4e0d\u5b89\u5168\u6848\u4f8b",id:"\u7ebf\u7a0b\u4e0d\u5b89\u5168\u6848\u4f8b",children:[{value:"1. \u4e70\u7968",id:"1-\u4e70\u7968",children:[]},{value:"2. \u4e0d\u5b89\u5168\u53d6\u94b1",id:"2-\u4e0d\u5b89\u5168\u53d6\u94b1",children:[]},{value:"3. \u4e0d\u5b89\u5168\u96c6\u5408",id:"3-\u4e0d\u5b89\u5168\u96c6\u5408",children:[]}]},{value:"\u540c\u6b65\u65b9\u6cd5\u4e0e\u540c\u6b65\u5757",id:"\u540c\u6b65\u65b9\u6cd5\u4e0e\u540c\u6b65\u5757",children:[{value:"\u540c\u6b65\u65b9\u6cd5\u7684\u5f0a\u7aef",id:"\u540c\u6b65\u65b9\u6cd5\u7684\u5f0a\u7aef",children:[]},{value:"\u540c\u6b65\u5757",id:"\u540c\u6b65\u5757",children:[]},{value:"\u5c06\u4e70\u7968\u6848\u4f8b\u4fee\u6539\u4e3a\u7ebf\u7a0b\u5b89\u5168\u7684",id:"\u5c06\u4e70\u7968\u6848\u4f8b\u4fee\u6539\u4e3a\u7ebf\u7a0b\u5b89\u5168\u7684",children:[]},{value:"\u5c06\u53d6\u94b1\u6848\u4f8b\u4fee\u6539\u4e3a\u7ebf\u7a0b\u5b89\u5168\u7684",id:"\u5c06\u53d6\u94b1\u6848\u4f8b\u4fee\u6539\u4e3a\u7ebf\u7a0b\u5b89\u5168\u7684",children:[]},{value:"\u5c06\u7ebf\u7a0b\u4e0d\u5b89\u5168\u96c6\u5408\u6539\u4e3a\u7ebf\u7a0b\u5b89\u5168\u96c6\u5408",id:"\u5c06\u7ebf\u7a0b\u4e0d\u5b89\u5168\u96c6\u5408\u6539\u4e3a\u7ebf\u7a0b\u5b89\u5168\u96c6\u5408",children:[]}]},{value:"\u6b7b\u9501",id:"\u6b7b\u9501",children:[]},{value:"Lock\u9501",id:"lock\u9501",children:[]},{value:"synchronized\u4e0eLock\u5bf9\u6bd4",id:"synchronized\u4e0elock\u5bf9\u6bd4",children:[]}]}],b={rightToc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"\u7ebf\u7a0b\u540c\u6b65"},"\u7ebf\u7a0b\u540c\u6b65"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u591a\u4e2a\u7ebf\u7a0b\u64cd\u4f5c\u540c\u4e00\u4e2a\u8d44\u6e90\uff0c",Object(c.b)("strong",{parentName:"p"},"\u5e76\u53d1\u95ee\u9898")),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u5904\u7406\u591a\u7ebf\u7a0b\u95ee\u9898\u65f6\uff0c\u591a\u4e2a\u7ebf\u7a0b\u8bbf\u95ee\u540c\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5e76\u4e14\u67d0\u4e9b\u7ebf\u7a0b\u8fd8\u60f3\u4fee\u6539\u8fd9\u4e2a\u5bf9\u8c61\u3002\u8fd9\u65f6\u5019\u5c31\u9700\u8981\u7ebf\u7a0b\u540c\u6b65"),Object(c.b)("li",{parentName:"ul"},"\u7ebf\u7a0b\u540c\u6b65\u662f\u4e00\u79cd",Object(c.b)("strong",{parentName:"li"},"\u7b49\u5f85\u673a\u5236"),"\uff0c\u591a\u4e2a\u9700\u8981\u540c\u65f6\u8bbf\u95ee\u6b64\u5bf9\u8c61\u7684\u7ebf\u7a0b\u8fdb\u5165",Object(c.b)("strong",{parentName:"li"},"\u7ebf\u7a0b\u7b49\u5f85\u6c60"),"\u5f62\u6210\u961f\u5217\uff0c\u7b49\u5f85\u524d\u9762\u7ebf\u7a0b\u4f7f\u7528\u5b8c\u6bd5\uff0c\u4e0b\u4e00\u4e2a\u7ebf\u7a0b\u518d\u4f7f\u7528"),Object(c.b)("li",{parentName:"ul"},"\u5f62\u6210\u6761\u4ef6\uff1a",Object(c.b)("strong",{parentName:"li"},"\u961f\u5217")," + ",Object(c.b)("strong",{parentName:"li"},"\u9501")))),Object(c.b)("h2",{id:"\u9501"},"\u9501"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u7ebf\u7a0b\u540c\u6b65:")),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u7531\u4e8e\u540c\u4e00\u4e2a\u8fdb\u7a0b\u7684\u591a\u4e2a\u7ebf\u7a0b\u5171\u4eab\u540c\u4e00\u5757\u5b58\u50a8\u7a7a\u95f4\uff0c\u5728\u5e26\u6765\u65b9\u4fbf\u7684\u540c\u65f6\uff0c\u4e5f\u5e26\u6765\u4e86\u8bbf\u95ee\u51b2\u7a81\u95ee\u9898\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u6570\u636e\u5728\u65b9\u6cd5\u4e2d\u88ab\u8bbf\u95ee\u65f6\u7684\u6b63\u786e\u6027\uff0c\u5728\u8bbf\u95ee\u65f6\u52a0\u5165",Object(c.b)("strong",{parentName:"li"},"\u9501\u673a\u5236"),Object(c.b)("inlineCode",{parentName:"li"},"synchronized"),"\uff0c\u5f53\u4e00\u4e2a\u7ebf\u7a0b\u83b7\u5f97\u5bf9\u8c61\u7684\u6392\u5b83\u9501\uff0c\u72ec\u5360\u8d44\u6e90\uff0c\u5176\u4ed6\u8d44\u6e90\u5fc5\u987b\u7b49\u5f85\uff0c\u4f7f\u7528\u540e\u91ca\u653e\u9501\u5373\u53ef\uff0c\u5b58\u5728\u4ee5\u4e0b\u95ee\u9898\uff1a",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u4e00\u4e2a\u7ebf\u7a0b\u6301\u6709\u9501\u4f1a\u5bfc\u81f4\u5176\u4ed6\u6240\u6709\u9700\u8981\u6b64\u9501\u7684\u7ebf\u7a0b\u6302\u8d77"),Object(c.b)("li",{parentName:"ul"},"\u5728\u591a\u7ebf\u7a0b\u7ade\u4e89\u4e0b\uff0c",Object(c.b)("strong",{parentName:"li"},"\u52a0\u9501\u3001\u91ca\u653e\u9501"),"\u4f1a\u5bfc\u81f4\u6bd4\u8f83\u591a\u7684",Object(c.b)("strong",{parentName:"li"},"\u4e0a\u4e0b\u6587\u5207\u6362"),"\u548c",Object(c.b)("strong",{parentName:"li"},"\u8c03\u5ea6\u5ef6\u65f6"),"\uff0c\u5f15\u8d77\u6027\u80fd\u95ee\u9898"),Object(c.b)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u4e2a\u4f18\u5148\u7ea7\u9ad8\u7684\u7ebf\u7a0b\u7b49\u5f85\u4e00\u4e2a\u4f18\u5148\u7ea7\u4f4e\u7684\u7ebf\u7a0b\u91ca\u653e\u9501\uff0c\u4f1a\u5bfc\u81f4\u4f18\u5148\u7ea7\u5012\u7f6e\uff0c\u5f15\u8d77\u6027\u80fd\u95ee\u9898"))))),Object(c.b)("h2",{id:"\u7ebf\u7a0b\u4e0d\u5b89\u5168\u6848\u4f8b"},"\u7ebf\u7a0b\u4e0d\u5b89\u5168\u6848\u4f8b"),Object(c.b)("h3",{id:"1-\u4e70\u7968"},"1. \u4e70\u7968"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class UnsafeBuyTicket {\n    public static void main(String[] args) {\n        BuyTicket station = new BuyTicket();\n\n        //\u4e09\u4e2a\u7ebf\u7a0b\u64cd\u4f5c\u540c\u4e00\u4e2a\u5bf9\u8c61\n        new Thread(station,"person1").start();\n        new Thread(station,"person2").start();\n        new Thread(station,"person3").start();\n    }\n}\n\nclass BuyTicket implements Runnable {\n    private int ticketNumber = 10;\n    private Boolean flag = true;\n\n    @Override\n    public void run() {\n        //\u4e70\u7968\n        while (flag) {\n            try {\n                buy();\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n        }\n    }\n\n    private void buy() throws InterruptedException {\n        //\u5224\u65ad\u662f\u5426\u6709\u7968\n        if (ticketNumber <= 0) {\n            System.out.println("\u5356\u5149\u4e86");\n            flag = false;\n            return;\n        }\n        //\u4e70\u7968\n        //\u6a21\u62df\u529e\u624b\u7eed\u7684\u5ef6\u65f6\n        Thread.sleep(200);\n        System.out.println(\n                Thread.currentThread().getName() +\n                        "\u4e70\u5230\u4e86\u7b2c" + ticketNumber-- + "\u5f20\u7968");\n    }\n}\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"person3\u4e70\u5230\u4e86\u7b2c10\u5f20\u7968\nperson2\u4e70\u5230\u4e86\u7b2c8\u5f20\u7968\nperson1\u4e70\u5230\u4e86\u7b2c9\u5f20\u7968\nperson3\u4e70\u5230\u4e86\u7b2c6\u5f20\u7968\nperson1\u4e70\u5230\u4e86\u7b2c7\u5f20\u7968\nperson2\u4e70\u5230\u4e86\u7b2c5\u5f20\u7968\nperson2\u4e70\u5230\u4e86\u7b2c3\u5f20\u7968\nperson1\u4e70\u5230\u4e86\u7b2c3\u5f20\u7968\nperson3\u4e70\u5230\u4e86\u7b2c4\u5f20\u7968\nperson2\u4e70\u5230\u4e86\u7b2c1\u5f20\u7968\nperson1\u4e70\u5230\u4e86\u7b2c2\u5f20\u7968\n\u5356\u5149\u4e86\nperson3\u4e70\u5230\u4e86\u7b2c2\u5f20\u7968\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u89c2\u5bdf\u5230\u95ee\u9898\uff0c\u7b2c\u4e09\u5f20\u548c\u7b2c\u4e8c\u5f20\u90fd\u88ab\u4e24\u4e2a\u4eba\u4e70\u8d70\u4e86")),Object(c.b)("h3",{id:"2-\u4e0d\u5b89\u5168\u53d6\u94b1"},"2. \u4e0d\u5b89\u5168\u53d6\u94b1"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'// \u4e24\u4e2a\u4eba\u53bb\u94f6\u884c\u53d6\u94b1\npublic class UnsafeBank {\n    public static void main(String[] args) {\n        Account account = new Account(100,"\u7ed3\u5a5a\u57fa\u91d1");\n\n        GettingMoney me = new GettingMoney(account,50,"\u6211");\n        GettingMoney girlFrient = new GettingMoney(account,100,"\u6211\u5973\u670b\u53cb");\n\n        me.start();\n        girlFrient.start();\n    }\n}\n\nclass Account {\n    int money; //\u4f59\u989d\n    String name; //\u5361\u660e\n\n    public Account() {\n    }\n\n    public Account(int money, String name) {\n        this.money = money;\n        this.name = name;\n    }\n}\n\n//\u6a21\u62df\u53d6\u6b3e\nclass GettingMoney extends Thread {\n    Account account; //\u8d26\u6237\n    //\u53d6\u4e86\u591a\u5c11\u94b1\n    int getMoney;\n    //\u73b0\u5728\u624b\u91cc\u7684\u5b58\u6b3e\n    int currentMoney;\n\n    public GettingMoney() {\n    }\n\n    public GettingMoney(Account account, int getMoney, String threadName) {\n        super(threadName);\n        this.account = account;\n        this.getMoney = getMoney;\n    }\n\n    @Override\n    public void run() {\n        //\u5224\u65ad\u6709\u6ca1\u6709\u94b1\n        if (account.money - getMoney < 0) {\n            System.out.println(Thread.currentThread().getName() + "\u53bb\u53d6\u94b1\uff0c\u4f59\u989d\u4e0d\u8db3\uff0c\u94b1\u4e0d\u591f");\n            return;\n        }\n        //\u6a21\u62df\u529e\u7406\u5ef6\u65f6\n        try {\n            Thread.sleep(200);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n\n        //\u5361\u5185\u4f59\u989d = \u65e7\u5361\u5185\u4f59\u989d-\u8981\u53d6\u5f97\u94b1\n        account.money -= getMoney;\n        //\u5f53\u524d\u4f59\u989d = \u65e7\u5f53\u524d\u4f59\u989d+\u53d6\u5230\u7684\u94b1\n        currentMoney += getMoney;\n\n        System.out.println(account.name + "\u4f59\u989d\u4e3a\uff1a" + account.money);\n        System.out.println(this.getName() + "\u624b\u4e2d\u7684\u94b1\u4e3a\uff1a" + currentMoney);\n    }\n}\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"\u7ed3\u5a5a\u57fa\u91d1\u4f59\u989d\u4e3a\uff1a0\n\u7ed3\u5a5a\u57fa\u91d1\u4f59\u989d\u4e3a\uff1a0\n\u6211\u624b\u4e2d\u7684\u94b1\u4e3a\uff1a50\n\u6211\u5973\u670b\u53cb\u624b\u4e2d\u7684\u94b1\u4e3a\uff1a100\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u8bbe\u5b9a\u94f6\u884c\u91cc\u4e00\u5171\u53ea\u6709100\u5757\u94b1\uff0c\u4f46\u662f\u6211\u548c\u6211\u5973\u670b\u53cb\u4e00\u4eba\u53d6\u4e8650\uff0c\u4e00\u4eba\u53d6\u4e86100\uff0c\u7ed9\u53d6\u51fa\u6765\u4e86\uff0c\u663e\u7136\u4e0d\u5bf9")),Object(c.b)("h3",{id:"3-\u4e0d\u5b89\u5168\u96c6\u5408"},"3. \u4e0d\u5b89\u5168\u96c6\u5408"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public class UnsafeCollection {\n    public static void main(String[] args) throws InterruptedException {\n        List<String> list = new ArrayList<>();\n\n        for (int i = 0; i < 10000; i++) {\n            new Thread(()->{\n                list.add(Thread.currentThread().getName());\n            }).start();\n        }\n\n        Thread.sleep(10000);\n        System.out.println(list.size());\n    }\n}\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"9888\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u4e00\u4e9b\u7ebf\u7a0b\u53ef\u80fd\u88ab\u8986\u76d6")),Object(c.b)("h2",{id:"\u540c\u6b65\u65b9\u6cd5\u4e0e\u540c\u6b65\u5757"},"\u540c\u6b65\u65b9\u6cd5\u4e0e\u540c\u6b65\u5757"),Object(c.b)("blockquote",null,Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u7531\u4e8e\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7private\u5173\u952e\u5b57\u6765\u4fdd\u8bc1\u6570\u636e\u5bf9\u8c61\u53ea\u80fd\u88ab\u65b9\u6cd5\u8bbf\u95ee\uff0c\u6240\u4ee5\u6211\u4eec\u53ea\u9700\u9488\u5bf9\u65b9\u6cd5\u63d0\u51fa\u4e00\u5957\u673a\u5236\uff0c\u8fd9\u5957\u673a\u5236\u5c31\u662f",Object(c.b)("inlineCode",{parentName:"li"},"synchronized"),"\u5173\u952e\u5b57\uff0c\u5b83\u5305\u62ec\u4e24\u79cd\u7528\u6cd5\uff1a",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"synchronized\u65b9\u6cd5")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"synchronized\u5757"))))),Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u540c\u6b65\u65b9\u6cd5\uff1a")),Object(c.b)("pre",{parentName:"blockquote"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public synchronized void method(int args){}\n"))),Object(c.b)("blockquote",null,Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},'synchronized\u65b9\u6cd5\u63a7\u5236\u5bf9"\u5bf9\u8c61"\u7684\u8bbf\u95ee\uff0c\u6bcf\u4e2a\u5bf9\u8c61\u5bf9\u5e94\u4e00\u628a\u9501\uff0c\u6bcf\u4e2asynchronized\u65b9\u6cd5\u90fd\u5fc5\u987b\u83b7\u5f97\u8c03\u7528\u8be5\u65b9\u6cd5\u7684\u5bf9\u8c61\u7684\u9501\u624d\u80fd\u6267\u884c\uff0c\u5426\u5219\u7ebf\u7a0b\u4f1a\u963b\u585e'),Object(c.b)("li",{parentName:"ul"},"\u65b9\u6cd5\u4e00\u65e6\u6267\u884c\uff0c\u65e7\u72ec\u5360\u8be5\u9501\uff0c\u77e5\u9053\u8be5\u65b9\u6cd5\u8fd4\u56de\u624d\u91ca\u653e\u9501\uff0c\u540e\u9762\u88ab\u963b\u585e\u7684\u7ebf\u7a0b\u624d\u80fd\u83b7\u5f97\u8fd9\u4e2a\u9501\uff0c\u7ee7\u7eed\u6267\u884c")),Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u7f3a\u9677\uff1a\u82e5\u5c06\u4e00\u4e2a\u5927\u7684\u65b9\u6cd5\u58f0\u660e\u4e3asynchronized\u4f1a\u5f71\u54cd\u6548\u7387"))),Object(c.b)("h3",{id:"\u540c\u6b65\u65b9\u6cd5\u7684\u5f0a\u7aef"},"\u540c\u6b65\u65b9\u6cd5\u7684\u5f0a\u7aef"),Object(c.b)("blockquote",null,Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u65b9\u6cd5\u91cc\u9700\u8981\u4fee\u6539\u7684\u5185\u5bb9\u624d\u9700\u8981\u9501\uff0c\u9501\u592a\u591a\uff0c\u6d6a\u8d39\u8d44\u6e90"))),Object(c.b)("h3",{id:"\u540c\u6b65\u5757"},"\u540c\u6b65\u5757"),Object(c.b)("blockquote",null,Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u540c\u6b65\u5757"),Object(c.b)("inlineCode",{parentName:"li"},"synchronized(Object){}")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Object"),"\u79f0\u4e3a\u540c\u6b65\u76d1\u89c6\u5668",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Object\u53ef\u4ee5\u4f7f\u4efb\u4f55\u5bf9\u8c61\uff0c\u4f46\u662f\u63a8\u8350\u4f7f\u7528\u5171\u4eab\u8d44\u6e90\u4f5c\u4e3a\u540c\u6b65\u76d1\u89c6\u5668"),Object(c.b)("li",{parentName:"ul"},"\u540c\u6b65\u65b9\u6cd5\u4e2d\u65e0\u9700\u6307\u5b9a\u540c\u6b65\u76d1\u89c6\u5668\uff0c\u56e0\u4e3a\u540c\u6b65\u65b9\u6cd5\u7684\u540c\u6b65\u76d1\u89c6\u5668\u5c31\u662fthis,\u5c31\u662f\u5bf9\u8c61\u672c\u8eab\uff0c\u6216\u8005\u662fclass"))),Object(c.b)("li",{parentName:"ul"},"\u540c\u6b65\u76d1\u89c6\u5668\u7684\u6267\u884c\u8fc7\u7a0b",Object(c.b)("ol",{parentName:"li"},Object(c.b)("li",{parentName:"ol"},"\u7b2c\u4e00\u4e2a\u7ebf\u7a0b\u8bbf\u95ee\uff0c\u9501\u5b9a\u540c\u6b65\u76d1\u89c6\u5668\uff0c\u6267\u884c\u5176\u4e2d\u4ee3\u7801"),Object(c.b)("li",{parentName:"ol"},"\u7b2c\u4e8c\u4e2a\u7ebf\u7a0b\u8bbf\u95ee\uff0c\u53d1\u73b0\u540c\u6b65\u76d1\u89c6\u5668\u88ab\u9501\u5b9a\uff0c\u65e0\u6cd5\u8bbf\u95ee"),Object(c.b)("li",{parentName:"ol"},"\u7b2c\u4e00\u4e2a\u7ebf\u7a0b\u8bbf\u95ee\u5b8c\u6bd5\uff0c\u89e3\u9501\u540c\u6b65\u76d1\u89c6\u5668"),Object(c.b)("li",{parentName:"ol"},"\u7b2c\u4e8c\u4e2a\u7ebf\u7a0b\u8bbf\u95ee\uff0c\u53d1\u73b0\u540c\u6b65\u76d1\u89c6\u5668\u6ca1\u6709\u9501\uff0c\u7136\u540e\u9501\u5b9a\u5e76\u8bbf\u95ee"))))),Object(c.b)("h3",{id:"\u5c06\u4e70\u7968\u6848\u4f8b\u4fee\u6539\u4e3a\u7ebf\u7a0b\u5b89\u5168\u7684"},"\u5c06\u4e70\u7968\u6848\u4f8b\u4fee\u6539\u4e3a\u7ebf\u7a0b\u5b89\u5168\u7684"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u5728",Object(c.b)("inlineCode",{parentName:"p"},"buy()"),"\u65b9\u6cd5\u4e0a\u52a0",Object(c.b)("inlineCode",{parentName:"p"},"synchronized"))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class UnsafeBuyTicket {\n    public static void main(String[] args) {\n        BuyTicket station = new BuyTicket();\n\n        //\u4e09\u4e2a\u7ebf\u7a0b\u64cd\u4f5c\u540c\u4e00\u4e2a\u5bf9\u8c61\n        new Thread(station,"person1").start();\n        new Thread(station,"person2").start();\n        new Thread(station,"person3").start();\n    }\n}\n\nclass BuyTicket implements Runnable {\n    private int ticketNumber = 10;\n    private Boolean flag = true;\n\n    @Override\n    public void run() {\n        //\u4e70\u7968\n        while (flag) {\n            try {\n                buy();\n                //\u6a21\u62df\u529e\u624b\u7eed\u7684\u5ef6\u65f6\n                try {\n                    Thread.sleep(200);\n                } catch (InterruptedException e) {\n                    e.printStackTrace();\n                }\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n        }\n\n    }\n\n    private synchronized void buy() throws InterruptedException {\n        //\u5224\u65ad\u662f\u5426\u6709\u7968\n        if (ticketNumber <= 0) {\n            System.out.println("\u5356\u5149\u4e86");\n            flag = false;\n            return;\n        }\n        //\u4e70\u7968\n\n        System.out.println(\n                Thread.currentThread().getName() +\n                        "\u4e70\u5230\u4e86\u7b2c" + ticketNumber-- + "\u5f20\u7968");\n    }\n}\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"person1\u4e70\u5230\u4e86\u7b2c10\u5f20\u7968\nperson3\u4e70\u5230\u4e86\u7b2c9\u5f20\u7968\nperson2\u4e70\u5230\u4e86\u7b2c8\u5f20\u7968\nperson1\u4e70\u5230\u4e86\u7b2c7\u5f20\u7968\nperson3\u4e70\u5230\u4e86\u7b2c6\u5f20\u7968\nperson2\u4e70\u5230\u4e86\u7b2c5\u5f20\u7968\nperson1\u4e70\u5230\u4e86\u7b2c4\u5f20\u7968\nperson2\u4e70\u5230\u4e86\u7b2c3\u5f20\u7968\nperson3\u4e70\u5230\u4e86\u7b2c2\u5f20\u7968\nperson1\u4e70\u5230\u4e86\u7b2c1\u5f20\u7968\n\u5356\u5149\u4e86\n\u5356\u5149\u4e86\n")),Object(c.b)("h3",{id:"\u5c06\u53d6\u94b1\u6848\u4f8b\u4fee\u6539\u4e3a\u7ebf\u7a0b\u5b89\u5168\u7684"},"\u5c06\u53d6\u94b1\u6848\u4f8b\u4fee\u6539\u4e3a\u7ebf\u7a0b\u5b89\u5168\u7684"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u7528\u540c\u6b65\u5757\uff0c\u9501",Object(c.b)("inlineCode",{parentName:"p"},"account"),"\u3002 synchronized\u5199\u5728\u65b9\u6cd5",Object(c.b)("inlineCode",{parentName:"p"},"run()"),"\u65b9\u6cd5\u4e0a\u7684\u8bdd\uff0c\u9501\u7684\u662fthis\uff0c\u5c31\u662fGettingMoney\u7684\u5bf9\u8c61\u3002\u6240\u4ee5\u6ca1\u6709\u7528")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class UnsafeBank {\n    public static void main(String[] args) {\n        Account account = new Account(1000, "\u7ed3\u5a5a\u57fa\u91d1");\n\n        GettingMoney me = new GettingMoney(account, 50, "\u6211");\n        GettingMoney girlFrient = new GettingMoney(account, 100, "\u6211\u5973\u670b\u53cb");\n\n        me.start();\n        girlFrient.start();\n    }\n}\n\nclass Account {\n    int money; //\u4f59\u989d\n    String name; //\u5361\u660e\n\n    public Account() {\n    }\n\n    public Account(int money, String name) {\n        this.money = money;\n        this.name = name;\n    }\n}\n\n//\u6a21\u62df\u53d6\u6b3e\nclass GettingMoney extends Thread {\n    Account account; //\u8d26\u6237\n    //\u53d6\u4e86\u591a\u5c11\u94b1\n    int getMoney;\n    //\u73b0\u5728\u624b\u91cc\u7684\u5b58\u6b3e\n    int currentMoney;\n\n    public GettingMoney() {\n    }\n\n    public GettingMoney(Account account, int getMoney, String threadName) {\n        super(threadName);\n        this.account = account;\n        this.getMoney = getMoney;\n    }\n\n    @Override\n    public void run() {\n        //\u6a21\u62df\u529e\u7406\u5ef6\u65f6\n        try {\n            Thread.sleep(200);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n\n        synchronized (account) {\n            //\u5224\u65ad\u6709\u6ca1\u6709\u94b1\n            if (account.money - getMoney < 0) {\n                System.out.println(Thread.currentThread().getName() + "\u53bb\u53d6\u94b1\uff0c\u4f59\u989d\u4e0d\u8db3\uff0c\u94b1\u4e0d\u591f");\n                return;\n            }\n\n\n            //\u5361\u5185\u4f59\u989d = \u65e7\u5361\u5185\u4f59\u989d-\u8981\u53d6\u5f97\u94b1\n            account.money -= getMoney;\n            //\u5f53\u524d\u4f59\u989d = \u65e7\u5f53\u524d\u4f59\u989d+\u53d6\u5230\u7684\u94b1\n            currentMoney += getMoney;\n\n            System.out.println(account.name + "\u4f59\u989d\u4e3a\uff1a" + account.money);\n            System.out.println(this.getName() + "\u624b\u4e2d\u7684\u94b1\u4e3a\uff1a" + currentMoney);\n        }\n    }\n}\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"\u7ed3\u5a5a\u57fa\u91d1\u4f59\u989d\u4e3a\uff1a950\n\u6211\u624b\u4e2d\u7684\u94b1\u4e3a\uff1a50\n\u7ed3\u5a5a\u57fa\u91d1\u4f59\u989d\u4e3a\uff1a850\n\u6211\u5973\u670b\u53cb\u624b\u4e2d\u7684\u94b1\u4e3a\uff1a100\n")),Object(c.b)("h3",{id:"\u5c06\u7ebf\u7a0b\u4e0d\u5b89\u5168\u96c6\u5408\u6539\u4e3a\u7ebf\u7a0b\u5b89\u5168\u96c6\u5408"},"\u5c06\u7ebf\u7a0b\u4e0d\u5b89\u5168\u96c6\u5408\u6539\u4e3a\u7ebf\u7a0b\u5b89\u5168\u96c6\u5408"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public class UnsafeCollection {\n    public static void main(String[] args) throws InterruptedException {\n        List<String> list = new ArrayList<>();\n\n        for (int i = 0; i < 10000; i++) {\n            new Thread(() -> {\n                synchronized (list) {\n                    list.add(Thread.currentThread().getName());\n                }\n            }).start();\n        }\n\n        Thread.sleep(10000);\n        System.out.println(list.size());\n    }\n}\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"10000\n")),Object(c.b)("h2",{id:"\u6b7b\u9501"},"\u6b7b\u9501"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u591a\u4e2a\u7ebf\u7a0b\u5404\u81ea\u5360\u6709\u4e00\u4e9b\u5171\u4eab\u8d44\u6e90\uff0c\u5e76\u4e14\u4e92\u76f8\u7b49\u5f85\u5176\u4ed6\u7ebf\u7a0b\u5360\u6709\u7684\u8d44\u6e90\u91ca\u653e\u624d\u80fd\u8fd0\u884c\uff0c\u800c\u5bfc\u81f4\u4e24\u4e2a\u6216\u591a\u4e2a\u7ebf\u7a0b\u90fd\u5728\u7b49\u5f85\u5bf9\u65b9\u91ca\u653e\u8d44\u6e90\uff0c\u5168\u90e8\u505c\u6b62\u6267\u884c\u7684\u60c5\u5f62\u3002",Object(c.b)("strong",{parentName:"p"},"\u67d0\u4e00\u4e2a\u540c\u6b65\u5757\u540c\u65f6\u62e5\u6709\u300c\u4e24\u4e2a\u4ee5\u4e0a\u5bf9\u8c61\u7684\u9501\u300d\u65f6\uff0c\u5c31\u53ef\u80fd\u53d1\u751f",Object(c.b)("inlineCode",{parentName:"strong"},"\u6b7b\u9501"),"\u95ee\u9898"))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'// \u6b7b\u9501\npublic class Demo01DeathLock {\n    public static void main(String[] args) {\n        Makeup girl1 = new Makeup(0,"\u5c0f\u7ea2");\n        Makeup girl2 = new Makeup(1,"\u5c0f\u7f8e");\n\n        new Thread(girl1,"\u5c0f\u7ea2").start();\n        new Thread(girl2,"\u5c0f\u7f8e").start();\n    }\n}\n\n//\u53e3\u7ea2\nclass Lipstick {}\n\n//\u955c\u5b50\nclass Mirror {}\n\nclass Makeup extends Thread {\n    // static\u8868\u793a\u5168\u5c40\u552f\u4e00\u7684\u5bf9\u8c61\n    static Lipstick lipstick = new Lipstick();\n    static Mirror mirror = new Mirror();\n\n    //\u5b9a\u4e49\u9009\u62e9\n    int choice;\n    //\u5b9a\u4e49\u4f7f\u7528\u5316\u5986\u54c1\u7684\u4eba\n    String girlName;\n\n    public Makeup(int choice, String girlName) {\n        this.choice = choice;\n        this.girlName = girlName;\n    }\n\n    @Override\n    public void run() {\n        // \u5316\u5986\n        try {\n            makeUp();\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n    }\n\n    //\u4e92\u76f8\u6301\u6709\u5bf9\u65b9\u7684\u9501\uff0c\u5c31\u662f\u9700\u8981\u62ff\u5230\u5bf9\u65b9\u7684\u8d44\u6e90\n    private void makeUp() throws InterruptedException {\n        if (choice == 0) {\n            synchronized (lipstick) { //\u83b7\u5f97\u53e3\u7ea2\u7684\u9501\n                System.out.println(this.girlName + "\u83b7\u5f97\u4e86\u53e3\u7ea2\u7684\u9501");\n                Thread.sleep(1000);\n\n                synchronized (mirror) { // \u4e00\u79d2\u79cd\u540e\uff0c\u60f3\u83b7\u5f97\u955c\u5b50\u7684\u9501\n                    System.out.println(this.girlName + "\u83b7\u5f97\u4e86\u955c\u5b50\u7684\u9501");\n                }\n            }\n        } else {\n            synchronized (mirror) { //\u83b7\u5f97\u955c\u5b50\u7684\u9501\n                System.out.println(this.girlName + "\u83b7\u5f97\u4e86\u955c\u5b50\u7684\u9501");\n                Thread.sleep(2000);\n\n                synchronized (lipstick) { // \u4e24\u79d2\u79cd\u540e\uff0c\u60f3\u83b7\u5f97\u53e3\u7ea2\u7684\u9501\n                    System.out.println(this.girlName + "\u83b7\u5f97\u4e86\u53e3\u7ea2\u7684\u9501");\n                }\n            }\n        }\n    }\n}\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"\u5c0f\u7ea2\u83b7\u5f97\u4e86\u53e3\u7ea2\u7684\u9501\n\u5c0f\u7f8e\u83b7\u5f97\u4e86\u955c\u5b50\u7684\u9501\n")),Object(c.b)("p",null,"\u4e92\u76f8\u6301\u6709\u5bf9\u65b9\u9501\uff0c\u7a0b\u5e8f\u5361\u4f4f\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u6b7b\u9501\u7684\u907f\u514d\u65b9\u6cd5\uff1a")),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u4ea7\u751f\u6b7b\u9501\u7684\u56db\u4e2a\u5fc5\u8981\u6761\u4ef6\uff1a",Object(c.b)("ol",{parentName:"li"},Object(c.b)("li",{parentName:"ol"},Object(c.b)("strong",{parentName:"li"},"\u4e92\u65a5\u6761\u4ef6"),"\uff1a \u4e00\u4e2a\u8d44\u6e90\u6bcf\u6b21\u53ea\u80fd\u88ab\u4e00\u4e2a\u7ebf\u7a0b\u4f7f\u7528"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("strong",{parentName:"li"},"\u8bf7\u6c42\u4fdd\u6301\u6761\u4ef6\uff1a"),"\u4e00\u4e2a\u7ebf\u7a0b\u56e0\u8bf7\u6c42\u8d44\u6e90\u800c\u963b\u585e\u65f6\uff0c\u5bf9\u5df2\u83b7\u5f97\u7684\u8d44\u6e90\u4fdd\u6301\u4e0d\u653e"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("strong",{parentName:"li"},"\u4e0d\u5265\u593a\u6761\u4ef6"),"\uff1a\u7ebf\u7a0b\u5df2\u83b7\u5f97\u7684\u8d44\u6e90\uff0c\u5728\u672a\u7528\u5b8c\u4e4b\u524d\uff0c\u4e0d\u80fd\u5f3a\u884c\u5265\u593a"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("strong",{parentName:"li"},"\u5faa\u73af\u7b49\u5f85\u6761\u4ef6\uff1a"),"\u82e5\u5e72\u7ebf\u7a0b\u4e4b\u95f4\u5f62\u6210\u4e00\u79cd\u5934\u5c3e\u76f8\u63a5\u7684\u5faa\u73af\u7b49\u5f85\u8d44\u6e90\u5173\u7cfb"))))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u4e0a\u9762\u5217\u51fa\u4e86\u6b7b\u9501\u7684\u56db\u4e2a\u5fc5\u8981\u6761\u4ef6\uff0c\u53ea\u9700\u8981\u60f3\u529e\u6cd5\u7834\u9664\u5176\u4e2d\u4efb\u610f\u4e00\u4e2a\u6216\u591a\u4e2a\u6761\u4ef6\uff0c\u5c31\u80fd\u907f\u514d\u6b7b\u9501\u7684\u53d1\u751f"))),Object(c.b)("h2",{id:"lock\u9501"},"Lock\u9501"),Object(c.b)("blockquote",null,Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u4eceJDK 5\u5f00\u59cb\uff0cJava\u63d0\u4f9b\u4e86\u66f4\u5f3a\u5927\u7684\u7ebf\u7a0b\u540c\u6b65\u673a\u5236\u2014\u2014\u901a\u8fc7\u663e\u793a\u5b9a\u4e49\u540c\u6b65\u9501\u5bf9\u8c61\u6765\u5b9e\u73b0\u540c\u6b65\u3002\u540c\u6b65\u9501\u4f7f\u7528",Object(c.b)("inlineCode",{parentName:"li"},"Lock"),"\u5bf9\u8c61\u5145\u5f53"),Object(c.b)("li",{parentName:"ul"},"java.util.concurrent.locks.Lock\u63a5\u53e3\u662f\u63a7\u5236\u591a\u4e2a\u7ebf\u7a0b\u5bf9\u5171\u4eab\u8d44\u6e90\u8fdb\u884c\u8bbf\u95ee\u7684\u5de5\u5177\u3002\u9501\u63d0\u4f9b\u4e86\u5bf9\u5171\u4eab\u8d44\u6e90\u7684\u72ec\u5360\u8bbf\u95ee\uff0c\u6bcf\u6b21\u53ea\u80fd\u6709\u4e00\u4e2a\u7ebf\u7a0b\u5bf9Lock\u5bf9\u8c61\u52a0\u9501\uff0c\u7ebf\u7a0b\u5f00\u59cb\u8bbf\u95ee\u5171\u4eab\u8d44\u6e90\u4e4b\u524d\u5148\u83b7\u5f97",Object(c.b)("inlineCode",{parentName:"li"},"Lock"),"\u5bf9\u8c61"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"ReentrantLock"),"\u7c7b\u5b9e\u73b0\u4e86",Object(c.b)("inlineCode",{parentName:"li"},"Lock"),"\u63a5\u53e3\uff0c\u5b83\u62e5\u6709\u4e0esynchronized\u76f8\u540c\u7684\u5e76\u53d1\u884c\u548c\u5185\u5b58\u8bed\u4e49\uff0c\u5728\u5b9e\u73b0\u7ebf\u7a0b\u5b89\u5168\u7684\u63a7\u5236\u4e2d\uff0c\u6bd4\u8f83\u5e38\u7528\u7684\u662f",Object(c.b)("inlineCode",{parentName:"li"},"ReentrantLock"),"\uff0c\u53ef\u4ee5\u663e\u5f0f\u52a0\u9501\u3001\u91ca\u653e\u9501"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"ReentrantLock"),"\u2014\u2014\u53ef\u91cd\u5165\u9501"))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class Demo02Lock {\n    public static void main(String[] args) {\n        TestLock lock = new TestLock();\n\n        new Thread(lock, "t1").start();\n        new Thread(lock, "t2").start();\n        new Thread(lock, "t3").start();\n    }\n}\n\nclass TestLock implements Runnable {\n    private int ticketNum = 10;\n\n    //\u5b9a\u4e49lock\u9501\n    private final ReentrantLock lock = new ReentrantLock();\n\n    @Override\n    public void run() {\n        while (true) {\n            try {\n                Thread.sleep(500);\n                if (ticketNum > 0) {\n                    try {\n                        lock.lock(); // \u52a0\u9501\n                        System.out.println(Thread.currentThread().getName() + " -> " + ticketNum);\n                        if (ticketNum > 0){\n                            ticketNum--;\n                        }else{\n                            break;\n                        }\n                    } finally {\n                        lock.unlock(); // \u91ca\u653e\u9501\n                    }\n                } else {\n                    break;\n                }\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n        }\n    }\n}\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"t1 -> 10\nt3 -> 9\nt2 -> 8\nt1 -> 7\nt3 -> 6\nt2 -> 5\nt1 -> 4\nt3 -> 3\nt2 -> 2\nt1 -> 1\nt3 -> 0\n")),Object(c.b)("h2",{id:"synchronized\u4e0elock\u5bf9\u6bd4"},"synchronized\u4e0eLock\u5bf9\u6bd4"),Object(c.b)("blockquote",null,Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"Lock\u662f\u663e\u5f0f\u9501\uff08\u624b\u52a8\u5f00\u542f\u548c\u5173\u95ed\u9501\uff0c\u522b\u5fd8\u8bb0\u5173\u95ed\u9501\uff09\uff0csynchronized\u662f\u9690\u5f0f\u9501\uff0c\u51fa\u4e86\u4f5c\u7528\u57df\u81ea\u52a8\u91ca\u653e"),Object(c.b)("li",{parentName:"ul"},"Lock\u53ea\u6709\u4ee3\u7801\u5757\u9501\uff0csynchronized\u6709\u4ee3\u7801\u5757\u9501\u548c\u65b9\u6cd5\u9501"),Object(c.b)("li",{parentName:"ul"},"\u4f7f\u7528Lock\u9501\uff0cJVM\u5c06\u82b1\u8d39\u8f83\u5c11\u7684\u65f6\u95f4\u6765\u8c03\u5ea6\u7ebf\u7a0b\uff0c\u6027\u80fd\u4e2a\u66f4\u597d\uff0c\u5e76\u4e14\u5177\u6709\u66f4\u597d\u7684\u6269\u5c55\u6027\uff08\u63d0\u4f9b\u66f4\u591a\u7684\u5b50\u7c7b\uff09"),Object(c.b)("li",{parentName:"ul"},"synchronized\u662fjava\u5185\u7f6e\u5173\u952e\u5b57\uff0cLock\u662f\u4e00\u4e2aJava\u7c7b"),Object(c.b)("li",{parentName:"ul"},"synchronized\u662f\u53ef\u91cd\u5165\u9501\uff0c\u4e0d\u53ef\u4ee5\u4e2d\u65ad\uff0c\u975e\u516c\u5e73\nLock\uff0c\u53ef\u91cd\u5165\u9501\uff0c\u975e\u516c\u5e73\uff08\u53ef\u4ee5\u81ea\u5df1\u8bbe\u7f6e\uff09"),Object(c.b)("li",{parentName:"ul"},"synchronized\u9002\u5408\u5c11\u91cf\u7684\u4ee3\u7801\u540c\u6b65\u95ee\u9898\uff0cLock\u9002\u5408\u5927\u91cf\u7684\u540c\u6b65\u4ee3\u7801"),Object(c.b)("li",{parentName:"ul"},"\u4f18\u5148\u4f7f\u7528\u987a\u5e8f",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Lock > \u540c\u6b65\u4ee3\u7801\u5757\uff08\u5df2\u7ecf\u8fdb\u5165\u4e86\u65b9\u6cd5\u4f53\uff0c\u5206\u914d\u4e86\u76f8\u5e94\u8d44\u6e90\uff09 > \u540c\u6b65\u65b9\u6cd5\uff08\u5728\u65b9\u6cd5\u4f53\u4e4b\u5916\uff09"))))))}p.isMDXComponent=!0}}]);