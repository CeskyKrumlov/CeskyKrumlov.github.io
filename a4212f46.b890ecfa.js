(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{241:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return c})),t.d(e,"metadata",(function(){return o})),t.d(e,"rightToc",(function(){return l})),t.d(e,"default",(function(){return p}));var a=t(2),r=t(6),i=(t(0),t(347)),c={id:"5.threadCommunicate",title:"\u7ebf\u7a0b\u901a\u4fe1",hide_title:!0},o={unversionedId:"juc/5.threadCommunicate",id:"juc/5.threadCommunicate",isDocsHomePage:!1,title:"\u7ebf\u7a0b\u901a\u4fe1",description:"\u7ebf\u7a0b\u901a\u4fe1",source:"@site/docs/juc/5.\u7ebf\u7a0b\u901a\u4fe1.md",slug:"/juc/5.threadCommunicate",permalink:"/docs/juc/5.threadCommunicate",version:"current",sidebar:"someSidebar",previous:{title:"\u7ebf\u7a0b\u540c\u6b65",permalink:"/docs/juc/4.synchronized"},next:{title:"\u516b\u9501\u73b0\u8c61",permalink:"/docs/juc/6.eightLocks"}},l=[{value:"\u7ebf\u7a0b\u901a\u4fe1",id:"\u7ebf\u7a0b\u901a\u4fe1",children:[{value:"\u751f\u4ea7\u8005\u6d88\u8d39\u8005\u6a21\u5f0f",id:"\u751f\u4ea7\u8005\u6d88\u8d39\u8005\u6a21\u5f0f",children:[]},{value:"synchronized\u7248",id:"synchronized\u7248",children:[{value:"\u89e3\u51b3\u65b9\u5f0f1\u2014\u2014\u7ba1\u7a0b\u6cd5",id:"\u89e3\u51b3\u65b9\u5f0f1\u7ba1\u7a0b\u6cd5",children:[]},{value:"\u89e3\u51b3\u65b9\u5f0f2\u2014\u2014\u4fe1\u53f7\u706f\u6cd5",id:"\u89e3\u51b3\u65b9\u5f0f2\u4fe1\u53f7\u706f\u6cd5",children:[]}]},{value:"Lock\u7248 (JUC)\u2014\u2014\u7cbe\u51c6\u5524\u9192\u7ebf\u7a0b",id:"lock\u7248-juc\u7cbe\u51c6\u5524\u9192\u7ebf\u7a0b",children:[]}]},{value:"\u7ebf\u7a0b\u6c60",id:"\u7ebf\u7a0b\u6c60",children:[{value:"\u4f7f\u7528\u7ebf\u7a0b\u6c60",id:"\u4f7f\u7528\u7ebf\u7a0b\u6c60",children:[]}]}],b={rightToc:l};function p(n){var e=n.components,c=Object(r.a)(n,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,c,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u7ebf\u7a0b\u901a\u4fe1"},"\u7ebf\u7a0b\u901a\u4fe1"),Object(i.b)("h2",{id:"\u751f\u4ea7\u8005\u6d88\u8d39\u8005\u6a21\u5f0f"},"\u751f\u4ea7\u8005\u6d88\u8d39\u8005\u6a21\u5f0f"),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20200626135714353",src:t(611).default})),Object(i.b)("h2",{id:"synchronized\u7248"},"synchronized\u7248"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u751f\u4ea7\u8005\u6d88\u8d39\u8005\u6a21\u5f0f\u5e76\u4e0d\u662f\u4e00\u79cd\u8bbe\u8ba1\u6a21\u5f0f")),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u5047\u8bbe\u4ed3\u5e93\u4e2d",Object(i.b)("strong",{parentName:"li"},"\u53ea\u80fd\u5b58\u653e\u4e00\u4ef6\u4ea7\u54c1"),"\uff0c\u751f\u4ea7\u8005\u5c06\u751f\u4ea7\u51fa\u6765\u7684\u4ea7\u54c1\u653e\u5165\u4ed3\u5e93\uff0c\u6d88\u8d39\u8005\u5c06\u4ed3\u5e93\u4e2d\u4ea7\u54c1\u4e70\u8d70"),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u4ed3\u5e93\u4e2d",Object(i.b)("strong",{parentName:"li"},"\u6ca1\u6709\u4ea7\u54c1"),"\uff0c\u5219\u751f\u4ea7\u8005\u5c06\u4ea7\u54c1\u653e\u5165\u4ed3\u5e93\uff0c\u5426\u5219\u505c\u6b62\u751f\u4ea7\u5e76\u7b49\u5f85\uff0c\u76f4\u5230\u4ed3\u5e93\u4e2d\u7684\u4ea7\u54c1\u88ab\u6d88\u8d39\u8005\u4e70\u8d70\u4e3a\u6b62"),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u4ed3\u5e93\u4e2d",Object(i.b)("strong",{parentName:"li"},"\u6709\u4ea7\u54c1"),"\uff0c\u5219\u6d88\u8d39\u8005\u53ef\u4ee5\u5c06\u4ea7\u54c1\u4e70\u8d70\uff0c\u5426\u5219\u505c\u6b62\u6d88\u8d39\u5e76\u7b49\u5f85\uff0c\u76f4\u5230\u4ed3\u5e93\u4e2d\u518d\u6b21\u653e\u5165\u4ea7\u54c1\u4e3a\u6b62"))),Object(i.b)("p",null,"$$\nProducer(\u751f\u4ea7\u8005) \u2192 \u6570\u636e\u7f13\u51b2\u533a \u2192 Consumer(\u6d88\u8d39\u8005)\n$$"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u8fd9\u662f\u4e00\u4e2a\u7ebf\u7a0b\u540c\u6b65\u95ee\u9898\uff0c\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u5171\u4eab\u540c\u4e00\u4e2a\u8d44\u6e90\uff0c\u5e76\u4e14\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u4e4b\u95f4\u76f8\u4e92\u4f9d\u8d56\uff0c\u4e92\u4e3a\u6761\u4ef6")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u751f\u4ea7\u8005\uff0c\u6ca1\u6709\u751f\u4ea7\u4ea7\u54c1\u4e4b\u524d\uff0c\u8981\u901a\u77e5\u6d88\u8d39\u8005\u7b49\u5f85\u3002\u800c\u751f\u4ea7\u4e86\u4ea7\u54c1\u4e4b\u540e\uff0c\u53c8\u9700\u8981\u9a6c\u4e0a\u901a\u77e5\u6d88\u8d39\u8005\u6d88\u8d39"),Object(i.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6d88\u8d39\u8005\uff0c\u5728\u6d88\u8d39\u4e4b\u540e\uff0c\u8981\u901a\u77e5\u751f\u4ea7\u8005\u5df2\u7ecf\u7ed3\u675f\u6d88\u8d39\uff0c\u9700\u8981\u751f\u4ea7\u65b0\u7684\u4ea7\u54c1\u4ee5\u4f9b\u6d88\u8d39"),Object(i.b)("li",{parentName:"ul"},"\u5728\u751f\u4ea7\u8005\u6d88\u8d39\u8005\u95ee\u9898\u4e2d\uff0c\u4ec5\u6709",Object(i.b)("inlineCode",{parentName:"li"},"synchronized"),"\u662f\u4e0d\u591f\u7684\u7684",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"synchronized"),"\u53ef\u7ec4\u7ec7\u5e76\u53d1\u66f4\u65b0\u540c\u4e00\u4e2a\u8d44\u6e90\uff0c\u5b9e\u73b0\u4e86\u540c\u6b65"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"synchronized"),"\u4e0d\u80fd\u7528\u6765\u5b9e\u73b0\u4e0d\u540c\u7ebf\u7a0b\u4e4b\u95f4\u7684\u6d88\u606f\u4f20\u9012\uff08\u901a\u4fe1\uff09")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Java\u63d0\u4f9b\u4e86\u51e0\u4e2a\u65b9\u6cd5\u6765\u89e3\u51b3\u7ebf\u7a0b\u4e4b\u95f4\u7684\u901a\u4fe1\u95ee\u9898"))),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u65b9\u6cd5\u540d"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u4f5c\u7528"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"wait()"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u8868\u793a\u7ebf\u7a0b\u4f1a\u4e00\u76f4\u7b49\u5f85\uff0c\u76f4\u5230\u5176\u4ed6\u7ebf\u7a0b\u901a\u77e5\uff0c\u4e0esleep\u4e0d\u540c\uff0c",Object(i.b)("strong",{parentName:"td"},"\u4f1a\u91ca\u653e\u9501"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"wait(long timeout)"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u6307\u5b9a\u7b49\u5f85\u7684\u6beb\u79d2\u6570")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"notify()"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5524\u9192\u4e00\u4e2a\u5904\u4e8e\u7b49\u5f85\u72b6\u6001\u7684\u7ebf\u7a0b")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"notifyAll()"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5524\u9192\u540c\u4e00\u4e2a\u5bf9\u8c61\u4e0a\u6240\u6709\u8c03\u7528wait()\u65b9\u6cd5\u7684\u7ebf\u7a0b\uff0c\u4f18\u5148\u7ea7\u9ad8\u7684\u7ebf\u7a0b\u4f18\u5148\u8c03\u5ea6")))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"\u5747\u662fObject\u7c7b\u7684\u65b9\u6cd5\uff0c\u90fd\u53ea\u80fd\u5728\u540c\u6b65\u65b9\u6cd5\u6216\u8005\u540c\u6b65\u4ee3\u7801\u5757\u4e2d\u4f7f\u7528\uff0c\u5426\u5219\u4f1a\u629b\u51fa\u5f02\u5e38IllegalMonitorStateException"),Object(i.b)("li",{parentName:"ul"},"wait()\u8bed\u53e5\u603b\u662f\u5199\u5728\u5faa\u73af\u4e2d\uff0c\u9632\u6b62\u5728\u5f88\u591a\u4e2a\u4e00\u8d77\u8bbf\u95ee\u65f6\uff0c\u51fa\u73b0\u865a\u5047\u5524\u9192\u73b0\u8c61")))),Object(i.b)("h3",{id:"\u89e3\u51b3\u65b9\u5f0f1\u7ba1\u7a0b\u6cd5"},"\u89e3\u51b3\u65b9\u5f0f1\u2014\u2014\u7ba1\u7a0b\u6cd5"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u5e76\u53d1\u534f\u4f5c\u6a21\u578b\u201d\u751f\u4ea7\u8005/\u6d88\u8d39\u8005\u6a21\u5f0f\u201c \u2014\u2014 ",Object(i.b)("inlineCode",{parentName:"p"},"\u7ba1\u7a0b\u6cd5")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u751f\u4ea7\u8005"),"\uff1a\u8d1f\u8d23\u751f\u4ea7\u6570\u636e\u7684\u6a21\u5757\uff08\u53ef\u80fd\u662f\u65b9\u6cd5\u3001\u5bf9\u8c61\u3001\u7ebf\u7a0b\u3001\u8fdb\u7a0b\uff09"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u6d88\u8d39\u8005\uff1a"),"\u8d1f\u8d23\u5904\u7406\u6570\u636e\u7684\u6a21\u5757\uff08\u53ef\u80fd\u662f\u65b9\u6cd5\u3001\u5bf9\u8c61\u3001\u7ebf\u7a0b\u3001\u8fdb\u7a0b\uff09"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u7f13\u51b2\u533a"),'\uff1a\u6d88\u8d39\u8005\u4e0d\u80fd\u76f4\u63a5\u4f7f\u7528\u751f\u4ea7\u8005\u7684\u6570\u636e\uff0c\u4ed6\u4eec\u4e4b\u95f4\u6709\u4e2a"\u7f13\u51b2\u533a"')),Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u751f\u4ea7\u8005\u5c06\u751f\u4ea7\u597d\u7684\u6570\u636e\u653e\u5165\u7f13\u51b2\u533a\uff0c\u6d88\u8d39\u8005\u4ece\u7f13\u51b2\u533a\u62ff\u8d70\u6570\u636e"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'// \u6d4b\u8bd5\u751f\u4ea7\u8005\u6d88\u8d39\u8005\u6a21\u578b -> \u5229\u7528\u7f13\u51b2\u533a\u89e3\u51b3\n// \u7ba1\u7a0b\u6cd5\n// \u751f\u4ea7\u8005 \u6d88\u8d39\u8005 \u4ea7\u54c1 \u7f13\u51b2\u533a\npublic class Demo01 {\n    public static void main(String[] args) {\n        SynContainer container = new SynContainer();\n\n        new Producer(container).start();\n        new Consumer(container).start();\n    }\n}\n\n//\u751f\u4ea7\u8005\nclass Producer extends Thread {\n    SynContainer container;\n\n    public Producer(SynContainer container) {\n        this.container = container;\n    }\n\n    @Override\n    public void run() {\n        for (int id = 0; id < 100; id++) {\n            container.push(new Chicken(id));\n            System.out.println("\u751f\u4ea7\u4e86\u7b2c" + id + "\u53ea\u9e21");\n        }\n    }\n}\n\n//\u6d88\u8d39\u8005\nclass Consumer extends Thread {\n    SynContainer container;\n\n    public Consumer(SynContainer container) {\n        this.container = container;\n    }\n\n    @Override\n    public void run() {\n        for (int i = 0; i < 100; i++) {\n            container.pop();\n            System.out.println("\u6d88\u8d39\u4e86\u7b2c" + i + "\u53ea\u9e21");\n        }\n    }\n}\n\n//\u4ea7\u54c1\nclass Chicken {\n    int id;\n\n    public Chicken() {\n    }\n\n    public Chicken(int id) {\n        this.id = id;\n    }\n}\n\n//\u7f13\u51b2\u533a\nclass SynContainer {\n    //\u5bb9\u5668\u5bb9\u91cf\n    Chicken[] chickens = new Chicken[10];\n    int count = 0;\n\n    //\u751f\u4ea7\u8005\u653e\u5165\u4ea7\u54c1\n    public synchronized void push(Chicken chicken) {\n        //\u5982\u679c\u5bb9\u5668\u6ee1\u4e86\uff0c\u7b49\u5f85\u6d88\u8d39\u8005\u6d88\u8d39\n        while (count >= chickens.length) {\n            //\u901a\u77e5\u6d88\u8d39\u8005\u6d88\u8d39\n            try {\n                this.wait();\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n        }\n        //\u5982\u679c\u4e3a\u7a7a\uff0c\u653e\u5165\u751f\u4ea7\u597d\u7684\u4ea7\u54c1\n        chickens[count] = chicken;\n        count++;\n\n        //\u53ef\u4ee5\u901a\u77e5\u6d88\u8d39\u8005\u6d88\u8d39\u4e86\n        this.notifyAll();\n    }\n\n    //\u6d88\u8d39\u8005\u6d88\u8d39\u4ea7\u54c1\n    public synchronized Chicken pop() {\n        //\u5224\u65ad\u80fd\u5426\u6d88\u8d39\n        while (count <= 0) {\n            //\u7b49\u5f85\u751f\u4ea7\uff0c\u6d88\u8d39\u8005\u7b49\u5f85\n            try {\n                this.wait();\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n        }\n        //\u5982\u679c\u53ef\u4ee5\u6d88\u8d39\uff0c\u5c31\u6d88\u8d39\n        count--;\n        Chicken chicken = chickens[count];\n        //\u901a\u77e5\u751f\u4ea7\u8005\n        this.notifyAll();\n        return chicken;\n    }\n}\n')),Object(i.b)("h3",{id:"\u89e3\u51b3\u65b9\u5f0f2\u4fe1\u53f7\u706f\u6cd5"},"\u89e3\u51b3\u65b9\u5f0f2\u2014\u2014\u4fe1\u53f7\u706f\u6cd5"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u5e76\u53d1\u534f\u4f5c\u6a21\u578b\u201c\u751f\u4ea7\u8005/\u6d88\u8d39\u8005\u6a21\u5f0f\u201d\u2014\u2014",Object(i.b)("inlineCode",{parentName:"p"},"\u4fe1\u53f7\u706f\u6cd5")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u901a\u8fc7\u6807\u5fd7\u4f4d\u89e3\u51b3"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'//\u751f\u4ea7\u7740\u6d88\u8d39\u8005\u6a21\u5f0f\u2014\u2014\u6d4b\u8bd5\u4fe1\u53f7\u706f\u6cd5\uff0c\u901a\u8fc7\u6807\u5fd7\u4f4d\u89e3\u51b3\npublic class Demo02 {\n    public static void main(String[] args) {\n        ChickenFactory factory = new ChickenFactory();\n\n        new Producer(factory).start();\n        new Concumer(factory).start();\n    }\n}\n\n//\u751f\u4ea7\u8005\nclass Producer extends Thread {\n    ChickenFactory factory;\n\n    public Producer(ChickenFactory factory) {\n        this.factory = factory;\n    }\n\n    @Override\n    public void run() {\n        for (int i = 0; i < 20; i++) {\n            this.factory.product(new Chicken(i + ""));\n        }\n    }\n}\n\n//\u6d88\u8d39\u8005\nclass Concumer extends Thread {\n    ChickenFactory factory;\n\n    public Concumer(ChickenFactory factory) {\n        this.factory = factory;\n    }\n\n    @Override\n    public void run() {\n        for (int i = 0; i < 20; i++) {\n            this.factory.buy();\n        }\n    }\n}\n\n//\u4ea7\u54c1\nclass Chicken {\n    String name;\n\n    public Chicken() {\n    }\n\n    public Chicken(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public String toString() {\n        return "Chicken{" +\n                "name=" + name +\n                \'}\';\n    }\n}\n\n//\u4ea7\u54c1\u5de5\u5382\nclass ChickenFactory {\n    Chicken chicken;\n    boolean flag = true; // \u771f \u8fdb\u884c\u751f\u4ea7\uff0c\u6d88\u8d39\u8005\u7b49\u5f85  | \u5047 \u8fdb\u884c\u6d88\u8d39\uff0c\u751f\u4ea7\u8005\u7b49\u5f85\n\n    //\u751f\u4ea7\n    public synchronized void product(Chicken chicken) {\n        while (!flag) {\n            //\u751f\u4ea7\u8005\u7b49\u5f85\n            try {\n                this.wait();\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n        }\n        System.out.println("\u751f\u4ea7\u4e86\u9e21 -> " + chicken);\n        this.chicken = chicken;\n        this.flag = !this.flag;\n        //\u901a\u77e5\u6d88\u8d39\u8005\u6d88\u8d39\n        this.notifyAll();\n    }\n\n    //\u6d88\u8d39\n    public synchronized void buy() {\n        while (flag) {\n            //\u6d88\u8d39\u8005\u7b49\u5f85\n            try {\n                this.wait();\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n        }\n        System.out.println("\u6d88\u8d39\u4e86\u9e21 -> " + chicken);\n        //\u901a\u77e5\u751f\u4ea7\u65b0\u7684\u9e21\n        this.flag = !this.flag;\n        this.notifyAll();\n    }\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\u751f\u4ea7\u4e86\u9e21 -> Chicken{name=0}\n\u6d88\u8d39\u4e86\u9e21 -> Chicken{name=0}\n\u751f\u4ea7\u4e86\u9e21 -> Chicken{name=1}\n\u6d88\u8d39\u4e86\u9e21 -> Chicken{name=1}\n\u751f\u4ea7\u4e86\u9e21 -> Chicken{name=2}\n\u6d88\u8d39\u4e86\u9e21 -> Chicken{name=2}\n\u751f\u4ea7\u4e86\u9e21 -> Chicken{name=3}\n\u6d88\u8d39\u4e86\u9e21 -> Chicken{name=3}\n\u751f\u4ea7\u4e86\u9e21 -> Chicken{name=4}\n\u6d88\u8d39\u4e86\u9e21 -> Chicken{name=4}\n\u751f\u4ea7\u4e86\u9e21 -> Chicken{name=5}\n\u6d88\u8d39\u4e86\u9e21 -> Chicken{name=5}\n\u751f\u4ea7\u4e86\u9e21 -> Chicken{name=6}\n\u6d88\u8d39\u4e86\u9e21 -> Chicken{name=6}\n\u751f\u4ea7\u4e86\u9e21 -> Chicken{name=7}\n\u6d88\u8d39\u4e86\u9e21 -> Chicken{name=7}\n\u751f\u4ea7\u4e86\u9e21 -> Chicken{name=8}\n\u6d88\u8d39\u4e86\u9e21 -> Chicken{name=8}\n\u751f\u4ea7\u4e86\u9e21 -> Chicken{name=9}\n\u6d88\u8d39\u4e86\u9e21 -> Chicken{name=9}\n\u751f\u4ea7\u4e86\u9e21 -> Chicken{name=10}\n\u6d88\u8d39\u4e86\u9e21 -> Chicken{name=10}\n\u751f\u4ea7\u4e86\u9e21 -> Chicken{name=11}\n\u6d88\u8d39\u4e86\u9e21 -> Chicken{name=11}\n\u751f\u4ea7\u4e86\u9e21 -> Chicken{name=12}\n\u6d88\u8d39\u4e86\u9e21 -> Chicken{name=12}\n\u751f\u4ea7\u4e86\u9e21 -> Chicken{name=13}\n\u6d88\u8d39\u4e86\u9e21 -> Chicken{name=13}\n\u751f\u4ea7\u4e86\u9e21 -> Chicken{name=14}\n\u6d88\u8d39\u4e86\u9e21 -> Chicken{name=14}\n\u751f\u4ea7\u4e86\u9e21 -> Chicken{name=15}\n\u6d88\u8d39\u4e86\u9e21 -> Chicken{name=15}\n\u751f\u4ea7\u4e86\u9e21 -> Chicken{name=16}\n\u6d88\u8d39\u4e86\u9e21 -> Chicken{name=16}\n\u751f\u4ea7\u4e86\u9e21 -> Chicken{name=17}\n\u6d88\u8d39\u4e86\u9e21 -> Chicken{name=17}\n\u751f\u4ea7\u4e86\u9e21 -> Chicken{name=18}\n\u6d88\u8d39\u4e86\u9e21 -> Chicken{name=18}\n\u751f\u4ea7\u4e86\u9e21 -> Chicken{name=19}\n\u6d88\u8d39\u4e86\u9e21 -> Chicken{name=19}\n")),Object(i.b)("h2",{id:"lock\u7248-juc\u7cbe\u51c6\u5524\u9192\u7ebf\u7a0b"},"Lock\u7248 (JUC)\u2014\u2014\u7cbe\u51c6\u5524\u9192\u7ebf\u7a0b"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u901a\u8fc7Lock\u627e\u5230Condition"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u672c\u8d28\u4e0a\u548csynchronized\u3001wait()\u3001notify()\u6ca1\u533a\u522b"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u8fd9\u79cd\u5199\u6cd5\u7684\u4f18\u52bf\u662f\uff0c\u53ef\u4ee5\u7cbe\u51c6\u5524\u9192\u7ebf\u7a0b")))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class LockVersion {\n    public static void main(String[] args) {\n        SynContainer synContainer = new SynContainer();\n\n        Producer2 producer1 = new Producer2(synContainer);\n        Producer2 producer2 = new Producer2(synContainer);\n        Consumer2 consumer1 = new Consumer2(synContainer);\n        Consumer2 consumer2 = new Consumer2(synContainer);\n\n        producer1.setName("producer1");\n        producer2.setName("producer2");\n        consumer1.setName("consumer1");\n        consumer2.setName("consumer2");\n\n        producer1.start();\n        producer2.start();\n        consumer1.start();\n        consumer2.start();\n    }\n}\n\n\n//\u751f\u4ea7\u8005\nclass Producer2 extends Thread {\n    SynContainer container;\n\n    public Producer2(SynContainer container) {\n        this.container = container;\n    }\n\n    @Override\n    public void run() {\n        for (int id = 0; id < 100; id++) {\n            try {\n                container.push(new Chicken2(id));\n                System.out.println(Thread.currentThread().getName() + "\u751f\u4ea7\u4e86\u7b2c" + id + "\u53ea\u9e21");\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n        }\n    }\n}\n\n//\u6d88\u8d39\u8005\nclass Consumer2 extends Thread {\n    SynContainer container;\n\n    public Consumer2(SynContainer container) {\n        this.container = container;\n    }\n\n    @Override\n    public void run() {\n        for (int i = 0; i < 100; i++) {\n            try {\n                container.pop();\n                System.out.println(Thread.currentThread().getName() + "\u6d88\u8d39\u4e86\u7b2c" + i + "\u53ea\u9e21");\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n        }\n    }\n}\n\n//\u4ea7\u54c1\nclass Chicken2 {\n    int id;\n\n    public Chicken2() {\n    }\n\n    public Chicken2(int id) {\n        this.id = id;\n    }\n}\n\n//\u7f13\u51b2\u533a\nclass SynContainer {\n    //\u5bb9\u5668\u5bb9\u91cf\n    Chicken2[] chickens = new Chicken2[10];\n    int count = 0;\n    //\u7528Lock\u9501\u800c\u4e0d\u662fsynchronized\n    Lock lock = new ReentrantLock();\n    Condition condition = lock.newCondition(); //\u901a\u8fc7condition\u63a5\u53e3\u8c03\u7528await()\u548csingalAll()\n\n    //\u751f\u4ea7\u8005\u653e\u5165\u4ea7\u54c1\n    public void push(Chicken2 chicken) throws InterruptedException {\n        lock.lock();\n        try {\n            //\u5982\u679c\u5bb9\u5668\u6ee1\u4e86\uff0c\u7b49\u5f85\u6d88\u8d39\u8005\u6d88\u8d39\n            while (count >= chickens.length) {\n                //\u901a\u77e5\u6d88\u8d39\u8005\u6d88\u8d39\n                condition.await();\n            }\n            //\u5982\u679c\u4e3a\u7a7a\uff0c\u653e\u5165\u751f\u4ea7\u597d\u7684\u4ea7\u54c1\n            chickens[count] = chicken;\n            count++;\n            //\u53ef\u4ee5\u901a\u77e5\u6d88\u8d39\u8005\u6d88\u8d39\u4e86\n            condition.signalAll();\n        } catch (Exception e) {\n            e.printStackTrace();\n        } finally {\n            lock.unlock();\n        }\n    }\n\n    //\u6d88\u8d39\u8005\u6d88\u8d39\u4ea7\u54c1\n    public void pop() throws InterruptedException {\n        lock.lock();\n        try {\n            //\u5224\u65ad\u80fd\u5426\u6d88\u8d39\n            while (count <= 0) {\n                //\u7b49\u5f85\u751f\u4ea7\uff0c\u6d88\u8d39\u8005\u7b49\u5f85\n                condition.await();\n            }\n            //\u5982\u679c\u53ef\u4ee5\u6d88\u8d39\uff0c\u5c31\u6d88\u8d39\n            count--;\n            //\u901a\u77e5\u751f\u4ea7\u8005\n            condition.signalAll();\n        } catch (Exception e) {\n            e.printStackTrace();\n        } finally {\n            lock.unlock();\n        }\n    }\n}\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u7cbe\u51c6\u5524\u9192\u7ebf\u7a0b")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u6bcf\u4e00\u4e2a",Object(i.b)("inlineCode",{parentName:"li"},"condition"),"\u90fd\u662f\u4e00\u4e2a\u76d1\u89c6\u5668"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u8bbe\u7f6e\u591a\u4e2acondition\u76d1\u89c6\u5668\u5bf9\u8c61\uff0c\u4ece\u800c\u7cbe\u51c6\u5524\u9192\u7ebf\u7a0b"),Object(i.b)("li",{parentName:"ul"},"\u4e1a\u52a1\u3001\u5224\u65ad\u3001\u6267\u884c\u3001\u901a\u77e5"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class Demo04LockAccurate {\n    public static void main(String[] args) {\n        Data data = new Data();\n        //\u5047\u8bbe\u6709\u4e09\u4e2a\u7ebf\u7a0b\uff0c\u64cd\u4f5c\u540c\u4e00\u4e2a\u8d44\u6e90\u7c7b\uff0c\u5e0c\u671b\u4ed6\u4eec\u987a\u5e8f\u6267\u884c  A->B B->C C->A\n        new Thread(() -> {\n            for (int i = 0; i < 10; i++) {\n                data.printA();\n            }\n        }, "A").start();\n\n        new Thread(() -> {\n            for (int i = 0; i < 10; i++) {\n                data.printB();\n            }\n        }, "B").start();\n\n        new Thread(() -> {\n            for (int i = 0; i < 10; i++) {\n                data.printC();\n            }\n        }, "C").start();\n    }\n}\n\nclass Data { //\u8d44\u6e90\u7c7b\n    private Lock lock = new ReentrantLock();\n    private int state = 1;\n    private Condition conditionA = lock.newCondition();\n    private Condition conditionB = lock.newCondition();\n    private Condition conditionC = lock.newCondition();\n\n    public void printA() {\n        lock.lock();\n        try { // \u4e1a\u52a1\u3001\u5224\u65ad\u3001\u6267\u884c\u3001\u901a\u77e5\n            while (state != 1) {\n                // \u4e0d\u662f1\u5c31\u7b49\u5f85\n                conditionA.await();\n            }\n            //\u8d70\u5230\u8fd9\u91cc\uff0c\u8bf4\u660e\u662f1\uff0c1\u5c31\u662f\u8dd1A\u81ea\u5df1\u7684\u4ee3\u7801\n            System.out.println(Thread.currentThread().getName() + " is running");\n            //\u6267\u884c\u5b8c\u4e86\uff0c\u5524\u9192\uff0c\u5524\u9192\u6307\u5b9a\u7684\u7ebf\u7a0b\n            state = 2;\n            conditionB.signal();\n        } catch (Exception e) {\n            e.printStackTrace();\n        } finally {\n            lock.unlock();\n        }\n    }\n\n    public void printB() {\n        lock.lock();\n        try {\n            while (state != 2) {\n                conditionB.await();\n            }\n            System.out.println(Thread.currentThread().getName() + " is running");\n            state = 3;\n            conditionC.signal();\n        } catch (Exception e) {\n            e.printStackTrace();\n        } finally {\n            lock.unlock();\n        }\n    }\n\n    public void printC() {\n        lock.lock();\n        try {\n            while (state != 3) {\n                conditionC.await();\n            }\n            System.out.println(Thread.currentThread().getName() + " is running");\n            state = 1;\n            conditionA.signal();\n        } catch (Exception e) {\n            e.printStackTrace();\n        } finally {\n            lock.unlock();\n        }\n    }\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"A is running\nB is running\nC is running\nA is running\nB is running\nC is running\nA is running\nB is running\nC is running\nA is running\nB is running\nC is running\n")),Object(i.b)("h1",{id:"\u7ebf\u7a0b\u6c60"},"\u7ebf\u7a0b\u6c60"),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u80cc\u666f\uff1a\u7ecf\u5e38\u521b\u5efa\u548c\u9500\u6bc1\u3001\u4f7f\u7528\u91cf\u7279\u522b\u5927\u7684\u8d44\u6e90\uff0c\u6bd4\u5982\u5e76\u53d1\u60c5\u51b5\u4e0b\u7684\u7ebf\u7a0b\uff0c\u5bf9\u6027\u80fd\u5f71\u54cd\u5f88\u5927")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u601d\u8def\uff1a\u63d0\u524d\u521b\u5efa\u597d\u591a\u4e2a\u7ebf\u7a0b\uff0c\u653e\u5165\u7ebf\u7a0b\u6c60\u4e2d\uff0c\u4f7f\u7528\u65f6\u76f4\u63a5\u83b7\u53d6\uff0c\u4f7f\u7528\u5b8c\u653e\u56de\u6c60\u4e2d\u3002\n\u53ef\u4ee5\u907f\u514d\u9891\u7e41\u521b\u5efa\u9500\u6bc1\u3001\u5b9e\u73b0\u91cd\u590d\u5229\u7528")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u597d\u5904"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u63d0\u9ad8\u54cd\u5e94\u901f\u5ea6\uff0c\u51cf\u5c11\u4e86\u521b\u5efa\u65b0\u7ebf\u7a0b\u7684\u65f6\u95f4"),Object(i.b)("li",{parentName:"ul"},"\u964d\u4f4e\u8d44\u6e90\u6d88\u8017\uff0c\u91cd\u590d\u5229\u7528\u7ebf\u7a0b\u6c60\u4e2d\u7684\u7ebf\u7a0b\uff0c\u4e0d\u9700\u8981\u6bcf\u6b21\u90fd\u521b\u5efa"),Object(i.b)("li",{parentName:"ul"},"\u4fbf\u4e8e\u7ebf\u7a0b\u7ba1\u7406",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"corePoolSize"),":\u6838\u5fc3\u6c60\u5927\u5c0f"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"maximumPoolSize"),":\u6700\u5927\u7ebf\u7a0b\u6570"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"keepAliveTime"),":\u7ebf\u7a0b\u6ca1\u6709\u4efb\u52a1\u65f6\u6700\u591a\u4fdd\u6301\u591a\u8d85\u65f6\u95f4\u7136\u540e\u7ec8\u6b62"))))))),Object(i.b)("h2",{id:"\u4f7f\u7528\u7ebf\u7a0b\u6c60"},"\u4f7f\u7528\u7ebf\u7a0b\u6c60"),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"JDK 5.0\u8d77\u63d0\u4f9b\u4e86\u7ebf\u7a0b\u6c60\u76f8\u5173API:",Object(i.b)("inlineCode",{parentName:"li"},"ExecutorService"),"\u548c",Object(i.b)("inlineCode",{parentName:"li"},"Executors")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ExecutorService"),"\uff1a\u771f\u6b63\u7684\u7ebf\u7a0b\u6c60\u63a5\u53e3\uff0c\u5e38\u89c1\u5b50\u7c7b",Object(i.b)("inlineCode",{parentName:"li"},"ThreadPoolExecutor"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"void execute(Runnable command)"),":\u6267\u884c\u4efb\u52a1/\u547d\u4ee4\uff0c\u6ca1\u6709\u8fd4\u56de\u503c\uff0c\u4e00\u822c\u7528\u6765\u6267\u884cRunnable"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<T> Future<T> submit(Callable<T> tast)"),":\u6267\u884c\u4efb\u52a1\uff0c\u6709\u8fd4\u56de\u503c\uff0c\u4e00\u822c\u7528\u6765\u6267\u884cCallable"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Void shutdown()"),":\u5173\u95ed\u8fde\u63a5\u6c60"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Executors"),":\u5de5\u5177\u7c7b\u3001\u7ebf\u7a0b\u6c60\u7684\u5de5\u5382\u7c7b\uff0c\u7528\u4e8e\u521b\u5efa\u5e76\u8fd4\u56de\u4e0d\u540c\u7c7b\u578b\u7684\u7ebf\u7a0b\u6c60"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class Demo01ThreadPool {\n    public static void main(String[] args) {\n        //1.\u521b\u5efa\u670d\u52a1\uff0c\u521b\u5efa\u7ebf\u7a0b\u6c60\n        // \u53c2\u6570\u4e3a\u7ebf\u7a0b\u6c60\u5927\u5c0f\n        ExecutorService executorService = Executors.newFixedThreadPool(10);\n\n        //\u63a5\u53d7\u4e00\u4e2a\u5b9e\u73b0Runnable\u63a5\u53e3\u7684\u5bf9\u8c61,\u8fdb\u884c\u6267\u884c\n        executorService.execute(new MyThread());\n        executorService.execute(new MyThread());\n        executorService.execute(new MyThread());\n        executorService.execute(new MyThread());\n\n        //2.\u5173\u95ed\u8fde\u63a5\n        executorService.shutdown();\n    }\n}\n\nclass MyThread implements Runnable {\n    @Override\n    public void run() {\n        for (int i = 0; i < 20; i++) {\n            System.out.println(Thread.currentThread().getName() + "  |  " + i);\n        }\n    }\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"pool-1-thread-2  |  0\npool-1-thread-2  |  1\npool-1-thread-2  |  2\npool-1-thread-2  |  3\npool-1-thread-2  |  4\npool-1-thread-2  |  5\npool-1-thread-2  |  6\npool-1-thread-2  |  7\npool-1-thread-2  |  8\npool-1-thread-2  |  9\npool-1-thread-2  |  10\npool-1-thread-2  |  11\npool-1-thread-2  |  12\npool-1-thread-2  |  13\npool-1-thread-2  |  14\npool-1-thread-2  |  15\npool-1-thread-2  |  16\npool-1-thread-2  |  17\npool-1-thread-2  |  18\npool-1-thread-2  |  19\npool-1-thread-4  |  0\npool-1-thread-3  |  0\npool-1-thread-3  |  1\npool-1-thread-3  |  2\npool-1-thread-1  |  0\npool-1-thread-1  |  1\npool-1-thread-1  |  2\npool-1-thread-1  |  3\npool-1-thread-1  |  4\npool-1-thread-1  |  5\npool-1-thread-1  |  6\npool-1-thread-1  |  7\npool-1-thread-3  |  3\npool-1-thread-4  |  1\npool-1-thread-3  |  4\npool-1-thread-1  |  8\npool-1-thread-3  |  5\npool-1-thread-3  |  6\npool-1-thread-3  |  7\npool-1-thread-3  |  8\npool-1-thread-3  |  9\npool-1-thread-4  |  2\npool-1-thread-3  |  10\npool-1-thread-1  |  9\npool-1-thread-3  |  11\npool-1-thread-3  |  12\npool-1-thread-3  |  13\npool-1-thread-3  |  14\npool-1-thread-4  |  3\npool-1-thread-3  |  15\npool-1-thread-3  |  16\npool-1-thread-3  |  17\npool-1-thread-3  |  18\npool-1-thread-1  |  10\npool-1-thread-3  |  19\npool-1-thread-4  |  4\npool-1-thread-1  |  11\npool-1-thread-4  |  5\npool-1-thread-1  |  12\npool-1-thread-4  |  6\npool-1-thread-1  |  13\npool-1-thread-4  |  7\npool-1-thread-1  |  14\npool-1-thread-4  |  8\npool-1-thread-1  |  15\npool-1-thread-4  |  9\npool-1-thread-1  |  16\npool-1-thread-4  |  10\npool-1-thread-4  |  11\npool-1-thread-4  |  12\npool-1-thread-4  |  13\npool-1-thread-4  |  14\npool-1-thread-4  |  15\npool-1-thread-4  |  16\npool-1-thread-4  |  17\npool-1-thread-4  |  18\npool-1-thread-1  |  17\npool-1-thread-1  |  18\npool-1-thread-1  |  19\npool-1-thread-4  |  19\n")))}p.isMDXComponent=!0},347:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var b=r.a.createContext({}),p=function(n){var e=r.a.useContext(b),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},u=function(n){var e=p(n.components);return r.a.createElement(b.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.a.createElement(r.a.Fragment,{},e)}},h=r.a.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,c=n.parentName,b=l(n,["components","mdxType","originalType","parentName"]),u=p(t),h=a,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return t?r.a.createElement(m,o(o({ref:e},b),{},{components:t})):r.a.createElement(m,o({ref:e},b))}));function m(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,c=new Array(i);c[0]=h;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=n,o.mdxType="string"==typeof n?n:a,c[1]=o;for(var b=2;b<i;b++)c[b]=t[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},611:function(n,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/4-52845bc38d1363cb7e252b3d7e9aee78.png"}}]);