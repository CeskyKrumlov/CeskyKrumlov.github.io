(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{296:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return o}));var a=n(2),r=n(6),c=(n(0),n(472)),b={id:"21.cas",title:"CAS",hide_title:!0},i={unversionedId:"juc/21.cas",id:"juc/21.cas",isDocsHomePage:!1,title:"CAS",description:"CAS",source:"@site/docs/juc/21.cas.md",slug:"/juc/21.cas",permalink:"/docs/juc/21.cas",version:"current",sidebar:"someSidebar",previous:{title:"\u5355\u4f8b\u6a21\u5f0f",permalink:"/docs/juc/20.singletonPattern"},next:{title:"\u5404\u79cd\u9501",permalink:"/docs/juc/22.multipleTypiesOfLocks"}},l=[{value:"CAS",id:"cas",children:[]},{value:"CAS\u7684\u7279\u6027\uff1a\u4e50\u89c2\u9501",id:"cas\u7684\u7279\u6027\uff1a\u4e50\u89c2\u9501",children:[]},{value:"CAS\u81ea\u65cb\u9501",id:"cas\u81ea\u65cb\u9501",children:[{value:"\u4f20\u7edfCAS\uff1a\u89c2\u5bdfCAS\u5728JUC\u539f\u5b50\u7c7b\u4e2d\u7684\u4f7f\u7528",id:"\u4f20\u7edfcas\uff1a\u89c2\u5bdfcas\u5728juc\u539f\u5b50\u7c7b\u4e2d\u7684\u4f7f\u7528",children:[]},{value:"Unsafe\u7c7b",id:"unsafe\u7c7b",children:[]}]},{value:"ABA\u95ee\u9898",id:"aba\u95ee\u9898",children:[{value:"CAS\uff1a\u91c7\u7528\u539f\u5b50\u5f15\u7528\u89e3\u51b3ABA\u95ee\u9898",id:"cas\uff1a\u91c7\u7528\u539f\u5b50\u5f15\u7528\u89e3\u51b3aba\u95ee\u9898",children:[]}]},{value:"CAS\u7684\u7f3a\u70b9",id:"cas\u7684\u7f3a\u70b9",children:[]}],p={rightToc:l};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"cas"},"CAS"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u4ec0\u4e48\u662fCAS"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"CAS: Compare and Swap\u2014\u2014\u6bd4\u8f83\u5e76\u4ea4\u6362")),Object(c.b)("p",null,"CAS(V, E, N) \u5305\u542b3\u4e2a\u53c2\u6570\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"V"),"\u8868\u793a\u8981\u66f4\u65b0\u7684\u53d8\u91cf\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"E"),"\u8868\u793a\u671f\u671b\u7684\u503c\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"N"),"\u8868\u793a\u8981\u66f4\u65b0\u4e3a\u7684\u65b0\u503c"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5f53\u4e14\u4ec5\u5f53",Object(c.b)("inlineCode",{parentName:"li"},"V"),"\u7684\u503c\u8fbe\u5230\u671f\u671b\u503c",Object(c.b)("inlineCode",{parentName:"li"},"E"),"\u65f6\uff0c\u624d\u66f4\u65b0",Object(c.b)("inlineCode",{parentName:"li"},"V"),"\u7684\u503c\u4e3a",Object(c.b)("inlineCode",{parentName:"li"},"N")),Object(c.b)("li",{parentName:"ul"},"\u5982\u679c",Object(c.b)("inlineCode",{parentName:"li"},"V"),"\u7684\u503c\u6ca1\u8fbe\u5230\u9884\u671f",Object(c.b)("inlineCode",{parentName:"li"},"E"),"\u503c\uff0c\u5c31\u4ec0\u4e48\u4e5f\u4e0d\u505a\uff0c\u4e00\u76f4\u76d1\u542c",Object(c.b)("inlineCode",{parentName:"li"},"V"),"\u7684\u503c\uff0c\u81ea\u65cb\u7b49\u5f85")),Object(c.b)("hr",null),Object(c.b)("h1",{id:"cas\u7684\u7279\u6027\uff1a\u4e50\u89c2\u9501"},"CAS\u7684\u7279\u6027\uff1a\u4e50\u89c2\u9501"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"CAS\u91c7\u7528\u4e86\u4e50\u89c2\u9501\u7684\u601d\u60f3\uff0c\u603b\u662f\u8ba4\u4e3a\u81ea\u5df1\u53ef\u4ee5\u6210\u529f\u5b8c\u6210\u4efb\u52a1")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5728\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u4f7f\u7528CAS\u64cd\u4f5c\u4e00\u4e2a\u53d8\u91cf\u65f6\uff0c\u53ea\u6709\u4e00\u4e2a\u4f1a\u80dc\u51fa\u5e76\u4e14\u6210\u529f\u66f4\u65b0\uff0c\u5176\u4f59\u5747\u4f1a\u5931\u8d25"),Object(c.b)("li",{parentName:"ul"},"\u5931\u8d25\u7684\u7ebf\u7a0b\u4e0d\u4f1a\u88ab\u6302\u8d77\uff0c\u4ec5\u88ab\u544a\u77e5\u5931\u8d25\uff0c\u5e76\u4e14\u5141\u8bb8\u518d\u6b21\u5c1d\u8bd5 \uff08\u4e00\u76f4\u76d1\u542c",Object(c.b)("inlineCode",{parentName:"li"},"V"),"\u503c\u7684\u66f4\u65b0\u60c5\u51b5\uff0c\u662f\u5426\u8fbe\u5230",Object(c.b)("inlineCode",{parentName:"li"},"E"),"\uff09"),Object(c.b)("li",{parentName:"ul"},"\u57fa\u4e8e\u8fd9\u6837\u7684\u539f\u7406\uff0cCAS\u64cd\u4f5c\u5373\u4f7f\u6ca1\u6709\u9501\uff0c\u4e5f\u53ef\u4ee5\u53d1\u73b0\u5176\u4ed6\u7ebf\u7a0b\u5bf9\u5f53\u524d\u7ebf\u7a0b\u7684\u5e72\u6270\uff0c\u5e76\u8fdb\u884c\u6070\u5f53\u5904\u7406")),Object(c.b)("h1",{id:"cas\u81ea\u65cb\u9501"},"CAS\u81ea\u65cb\u9501"),Object(c.b)("blockquote",null,Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"Unsafe\u7c7b\u4e2d\u7684",Object(c.b)("inlineCode",{parentName:"li"},"getAndSwapInt"),"\u65b9\u6cd5")),Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"this.compareAndSwapInt"),"\u5728\u8fbe\u5230\u671f\u671b\u503c\u65f6\u8fd4\u56de",Object(c.b)("inlineCode",{parentName:"p"},"true"),"\uff0c\u56e0\u6b64\u5f53\u671f\u671b\u503c\u672a\u8fbe\u5230\u65f6\uff0c\u4e00\u76f4\u5faa\u73af\uff0c",Object(c.b)("strong",{parentName:"p"},"\u81ea\u65cb\u7b49\u5f85"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public final int getAndAddInt(Object var1, long var2, int var4) {\n    int var5;\n    do { // \u65e0\u9650\u5faa\u73af\n      var5 = this.getIntVolatile(var1, var2);\n    } while(!this.compareAndSwapInt(var1, var2, var5, var5 + var4));\n  \n    return var5;\n}\n")),Object(c.b)("h2",{id:"\u4f20\u7edfcas\uff1a\u89c2\u5bdfcas\u5728juc\u539f\u5b50\u7c7b\u4e2d\u7684\u4f7f\u7528"},"\u4f20\u7edfCAS\uff1a\u89c2\u5bdfCAS\u5728JUC\u539f\u5b50\u7c7b\u4e2d\u7684\u4f7f\u7528"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"JUC\u539f\u5b50\u7c7bAtomicInteger\uff0c\u5b9e\u4f8b\u65b9\u6cd5",Object(c.b)("inlineCode",{parentName:"strong"},"compareAndSet(int expect,int update)"))),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u5e95\u5c42\u8c03\u7528Unsafe\u7c7b\u7684CAS\u65b9\u6cd5")),Object(c.b)("pre",{parentName:"blockquote"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public final boolean compareAndSet(int expect, int update) {\n    return unsafe.compareAndSwapInt(this, valueOffset, expect, update);\n}\n")),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"CAS\u662fCPU\u7684\u5e76\u53d1\u539f\u8bed\uff0c\u662fCPU\u7684\u6307\u4ee4")))),Object(c.b)("p",null,"\u5982\u679c\u671f\u671b\u7684\u503c\u8fbe\u5230\u4e86\uff0c\u5c31\u66f4\u65b0\u503c\u4e3a\u6307\u5b9a\u503c\uff1b\u5426\u5219\u4e0d\u66f4\u65b0\u503c"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"@Test\npublic void testCAS() {\n    AtomicInteger atomicInteger = new AtomicInteger(1);\n    atomicInteger.compareAndSet(1, 2020);\n  \n    System.out.println(atomicInteger);\n}  \n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"2020\n")),Object(c.b)("h2",{id:"unsafe\u7c7b"},"Unsafe\u7c7b"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"Unsafe\u7c7b")),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"Java\u65e0\u6cd5\u76f4\u63a5\u64cd\u4f5c\u8ba1\u7b97\u673a\u5185\u5b58"),Object(c.b)("li",{parentName:"ul"},"Java\u53ef\u4ee5\u8c03\u7528C++\u64cd\u4f5c\u5185\u5b58\uff0c\u901a\u8fc7native\u4fee\u9970\u7684\u65b9\u6cd5"),Object(c.b)("li",{parentName:"ul"},"Unsafe\u7c7b\u76f8\u5f53\u4e8eJava\u7684\u4e00\u4e2a\u540e\u9762\uff0c\u53ef\u4ee5\u901a\u8fc7\u5b83\u64cd\u4f5c\u5185\u5b58"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"AtomicInteger\u6e90\u7801\u4e2d\u7684\u9759\u6001\u4ee3\u7801\u5757")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'static {\n    try {\n      valueOffset = unsafe.objectFieldOffset\n        (AtomicInteger.class.getDeclaredField("value"));\n    } catch (Exception ex) { throw new Error(ex); }\n}\n')),Object(c.b)("p",null,"\u53ef\u4ee5\u770b\u5230\u83b7\u53d6\u4e86\u4e00\u4e2a",Object(c.b)("inlineCode",{parentName:"p"},"valueOffset"),"\uff0c\u8fd9\u662f\u901a\u8fc7unsafe\u8c03\u7528C++\u83b7\u5f97\u5185\u5b58\u5730\u5740\u7684\u504f\u79fb\u5730\u5740"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"AtomicInteger\u4e2d\u5b58\u50a8\u7684\u6574\u578b\u503c")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"private volatile int value;\n")),Object(c.b)("p",null,"\u53ef\u4ee5\u770b\u5230\u4f7f\u7528\u4e86",Object(c.b)("inlineCode",{parentName:"p"},"volatile"),"\u7981\u6b62\u6307\u4ee4\u91cd\u6392\uff0c\u786e\u4fdd\u53ef\u89c1\u6027"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"AtomicInteger\u4e2d\u7684\u52a0\u4e00\u65b9\u6cd5")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public final int getAndIncrement() {\n    return unsafe.getAndAddInt(this, valueOffset, 1);\n}\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Unsafe\u7c7b\u4e2d\u7684",Object(c.b)("inlineCode",{parentName:"li"},"getAndAddInt(Object var1, long var2, int var 4)"),"\u65b9\u6cd5")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public final int getAndAddInt(Object var1, long var2, int var4) {\n    int var5;\n    do {\n      var5 = this.getIntVolatile(var1, var2);\n    } while(!this.compareAndSwapInt(var1, var2, var5, var5 + var4));\n  \n    return var5;\n}\n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"var1"),"\u4e3a\u5bf9\u8c61\uff1b",Object(c.b)("inlineCode",{parentName:"p"},"var2"),"\u4e3a\u504f\u79fb\u5730\u5740\uff1b",Object(c.b)("inlineCode",{parentName:"p"},"var4"),"\u4e3a\u8981\u589e\u52a0\u7684\u503c\uff1b",Object(c.b)("inlineCode",{parentName:"p"},"var5"),"\u4e3a\u5f53\u524d\u5730\u5740\u4f4d\u7f6e\u4e0a\u7684int\u503c"),Object(c.b)("p",null,"\u5176\u4e2d\u53c8\u8c03\u7528\u4e86",Object(c.b)("inlineCode",{parentName:"p"},"this.compareAndSwapInt(var1, var2, var5, var5 + var4)"),"\uff0c\u610f\u601d\u4e3a\u4ece\u5bf9\u8c61",Object(c.b)("inlineCode",{parentName:"p"},"var1"),"\u504f\u79fb\u5730\u5740",Object(c.b)("inlineCode",{parentName:"p"},"var2"),"\u7684\u4f4d\u7f6e\u4e0a\u53d6\u51fa",Object(c.b)("inlineCode",{parentName:"p"},"var5"),"\uff0c\u7b2c\u4e09\u4e2a\u53c2\u6570",Object(c.b)("inlineCode",{parentName:"p"},"var5"),"\u8868\u793a\u671f\u5f85\u503c\u4e3a",Object(c.b)("inlineCode",{parentName:"p"},"var5"),"\uff0c\u5982\u679c\u671f\u5f85\u88ab\u6ee1\u8db3\uff0c\u5c31\u5c06\u503c\u66f4\u6539\u4e3a",Object(c.b)("inlineCode",{parentName:"p"},"var5 + var4")),Object(c.b)("p",null,"\u800c\u5728",Object(c.b)("inlineCode",{parentName:"p"},"getAndIncrement()"),"\u65b9\u6cd5\u4e2d\uff0cvar4\u53c2\u6570\u7684\u503c\u4e3a",Object(c.b)("inlineCode",{parentName:"p"},"1"),"\uff0c\u5373\u9047\u5230\u671f\u5f85\u503c\uff0c\u5c31\u52a01"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u5185\u5b58\u64cd\u4f5c\uff0c\u6548\u7387\u5f88\u9ad8")),Object(c.b)("hr",null),Object(c.b)("h1",{id:"aba\u95ee\u9898"},"ABA\u95ee\u9898"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u5bf9CAS\u7b97\u6cd5\u7684\u5b9e\u73b0\u6709\u4e00\u4e2a\u91cd\u8981\u7684\u524d\u63d0\uff1a\u9700\u8981\u53d6\u51fa\u5185\u5b58\u4e2d\u67d0\u65f6\u523b\u7684\u6570\u636e\uff0c\u7136\u540e\u5728\u4e0b\u4e00\u4e2a\u65f6\u523b\u8fdb\u884c\u6bd4\u8f83\u3001\u66ff\u6362\uff0c\u5728\u8fd9\u4e2a\u65f6\u95f4\u5dee\u5185\u53ef\u80fd\u6570\u636e\u5df2\u7ecf\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u5bfc\u81f4\u4ea7\u751f",Object(c.b)("inlineCode",{parentName:"strong"},"ABA\u95ee\u9898")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"ABA\u95ee\u9898"),"\u6307")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u7b2c1\u4e2a\u7ebf\u7a0b\u4ece\u5185\u5b58\u7684",Object(c.b)("inlineCode",{parentName:"strong"},"V"),"\u4f4d\u7f6e\u53d6\u51fa",Object(c.b)("inlineCode",{parentName:"strong"},"A"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u8fd9\u65f6\u7b2c2\u4e2a\u7ebf\u7a0b\u4e5f\u4ece\u5185\u5b58\u4e2d\u53d6\u51fa",Object(c.b)("inlineCode",{parentName:"strong"},"A"),"\uff0c\u5e76\u5c06",Object(c.b)("inlineCode",{parentName:"strong"},"V"),"\u4f4d\u7f6e\u7684\u6570\u636e\u9700\u6539\u4e3a",Object(c.b)("inlineCode",{parentName:"strong"},"B"),"\uff0c\u63a5\u7740\u53c8\u5c06",Object(c.b)("inlineCode",{parentName:"strong"},"V"),"\u4f4d\u7f6e\u7684\u6570\u636e\u6539\u4e3a",Object(c.b)("inlineCode",{parentName:"strong"},"A"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u8fd9\u65f6\u7b2c1\u4e2a\u7ebf\u7a0b\u5728\u8fdb\u884cCAS\u64cd\u4f5c\u65f6\u4f1a\u53d1\u73b0\u5185\u5b58\u4f4d\u7f6e",Object(c.b)("inlineCode",{parentName:"strong"},"V"),"\u4e2d\u7684\u503c\u4ecd\u4e3a",Object(c.b)("inlineCode",{parentName:"strong"},"A"),"\uff0c\u4e8e\u662f\u7b2c1\u4e2a\u7ebf\u7a0b\u7684\u64cd\u4f5c\u6210\u529f")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u5c3d\u7ba1\u4ece\u7b2c1\u4e2a\u7ebf\u7a0b\u7684\u89d2\u5ea6\u51fa\u53d1\uff0cCAS\u64cd\u4f5c\u662f\u6210\u529f\u7684\uff0c\u4f46\u5176\u5b9e\u5728\u64cd\u4f5c\u8fc7\u7a0b\u4e2d",Object(c.b)("inlineCode",{parentName:"strong"},"V"),"\u4f4d\u7f6e\u4e0a\u7684\u6570\u636e\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u53ea\u662f\u7b2c1\u4e2a\u7ebf\u7a0b\u6ca1\u6709\u611f\u77e5\u5230\u7f62\u4e86\uff0c\u8fd9\u5728\u9ad8\u5e76\u53d1\u60c5\u51b5\u4e0b\u53ef\u80fd\u9020\u6210\u6570\u636e\u4e0d\u4e00\u81f4\u95ee\u9898"))),Object(c.b)("h2",{id:"cas\uff1a\u91c7\u7528\u539f\u5b50\u5f15\u7528\u89e3\u51b3aba\u95ee\u9898"},"CAS\uff1a\u91c7\u7528\u539f\u5b50\u5f15\u7528\u89e3\u51b3ABA\u95ee\u9898"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u90e8\u5206\u4e50\u89c2\u9501\u662f\u901a\u8fc7",Object(c.b)("inlineCode",{parentName:"strong"},"\u7248\u672c\u53f7(Version)"),"\u6765\u89e3\u51b3ABA\u95ee\u9898\u7684\uff0c\u8fd8\u53ef\u4ee5\u5229\u7528",Object(c.b)("inlineCode",{parentName:"strong"},"\u65f6\u95f4\u6233(Stamp)"))),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u4e50\u89c2\u9501\u6bcf\u6b21\u5728\u6267\u884c\u6570\u636e\u7684\u4fee\u6539\u64cd\u4f5c\u65f6\u90fd\u4f1a\u5e26\u4e0a\u4e00\u4e2a\u7248\u672c\u53f7"),Object(c.b)("li",{parentName:"ul"},"\u5728\u9884\u671f\u7684\u7248\u672c\u53f7\u548c\u6570\u636e\u7684\u7248\u672c\u53f7\u4e00\u81f4\u65f6\uff0c\u5c31\u53ef\u4ee5\u6267\u884c\u4fee\u6539\u6570\u636e\u64cd\u4f5c\uff0c\u5e76\u5bf9\u7248\u672c\u53f7\u52a01\uff0c\u5426\u5219\u6267\u884c\u5931\u8d25"),Object(c.b)("li",{parentName:"ul"},"\u56e0\u4e3a\u6bcf\u6b21\u64cd\u4f5c\u540e\uff0c\u7248\u672c\u54c8\u90fd\u968f\u4e4b\u589e\u52a0\uff0c\u6240\u4ee5\u4e0d\u4f1a\u4ea7\u751fABA\u95ee\u9898\uff0c\u56e0\u4e3a\u7248\u672c\u53f7\u53ea\u4f1a\u589e\u52a0\uff0c\u4e0d\u4f1a\u51cf\u5c11"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"AtomicStampedReference\u7c7b\u7684\u6784\u9020\u65b9\u6cd5"))),Object(c.b)("p",null,"\u5e26",Object(c.b)("strong",{parentName:"p"},"\u521d\u59cb\u5f15\u7528"),"\u548c",Object(c.b)("strong",{parentName:"p"},"\u65f6\u95f4\u6233")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public AtomicStampedReference(V initialRef, int initialStamp) {\n    pair = Pair.of(initialRef, initialStamp);\n}\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u4f7f\u7528\u5e26\u7248\u672c\u53f7\u7684CAS")),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"\u6ce8\u610f")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u4f7f\u7528\u7684\u503c\u8981\u5728-128~127\u4e4b\u95f4\uff0c\u5426\u5219\u4f1a\u89e6\u53d1\u5305\u88c5\u7c7b\u91cd\u65b0\u53bb\u5806\u5185\u5b58new\u4e00\u4e2a\u503c\uff0c\u5bfc\u81f4\u524d\u540e\u4e24\u4e2a\u503c\u6307\u7684\u4e0d\u662f\u540c\u4e00\u4e2a\u5730\u5740\uff0c\u9884\u671f\u503c\u65e0\u6cd5\u88ab\u8fbe\u5230"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public static void main(String[] args) {\n    AtomicStampedReference<Integer> atomicInteger =\n      new AtomicStampedReference<>(50, 0);\n  \n    new Thread(() -> {\n      int stamp = atomicInteger.getStamp();  // \u83b7\u53d6\u5f53\u524d\u7684\u6233\n      System.out.println(Thread.currentThread().getName() + " -> Stamp:" + atomicInteger.getStamp() + " | Value:" + atomicInteger.getReference());\n  \n      try {\n        TimeUnit.SECONDS.sleep(2);\n      } catch (InterruptedException e) {\n        e.printStackTrace();\n      }\n  \n      atomicInteger.compareAndSet(50, //\u671f\u671b\u503c\n                                  1, // \u65b0\u503c\n                                  atomicInteger.getStamp(), // \u671f\u671b\u7684stamp\u503c\n                                  atomicInteger.getStamp() + 1); // \u65b0Stamp\u503c\n  \n      System.out.println(Thread.currentThread().getName() + " -> Stamp:" + atomicInteger.getStamp() + " | Value:" + atomicInteger.getReference());\n  \n      // \u6309\u7167ABA\u95ee\u9898\u7684\u539f\u7406\uff0c\u628a\u503c\u518d\u6539\u56de\u53bb\n      atomicInteger.compareAndSet(1, //\u671f\u671b\u503c\n                                  50, // \u65b0\u503c\n                                  atomicInteger.getStamp(), // \u671f\u671b\u7684stamp\u503c\n                                  atomicInteger.getStamp() + 1); // \u65b0Stamp\u503c\n  \n    }, "Thread A").start();\n  \n    new Thread(() -> {\n      int stamp = atomicInteger.getStamp();  // \u83b7\u53d6\u5f53\u524d\u7684\u6233\n      System.out.println(Thread.currentThread().getName() + " -> Stamp:" + atomicInteger.getStamp() + " | Value:" + atomicInteger.getReference());\n  \n      try {\n        TimeUnit.SECONDS.sleep(4);\n      } catch (InterruptedException e) {\n        e.printStackTrace();\n      }\n  \n      boolean result = atomicInteger.compareAndSet(50,\n                                                   60,\n                                                   stamp,  // \u51c6\u5907\u5237\u65b0\u503c\u5b8c\u6210\u5bf9\u503c\u7684\u4fee\u6539\uff0c\u5148\u770b\u770b\u65f6\u95f4\u6233\u6709\u6ca1\u6709\u88ab\u522b\u4eba\u52a8\u8fc7\n                                                   ++stamp);\n  \n      if (result) {\n        System.out.println("\u64cd\u4f5c\u6210\u529f");\n      } else {\n        System.out.println("\u64cd\u4f5c\u5931\u8d25\uff0c\u5728" + Thread.currentThread().getName() + "\u64cd\u4f5c\u671f\u95f4\uff0c\u539f\u503c\u5df2\u7ecf\u88ab\u522b\u4eba\u52a8\u4e86\u624b\u811a");\n      }\n  \n      System.out.println(Thread.currentThread().getName() + " -> Stamp:" + atomicInteger.getStamp() + " | Value:" + atomicInteger.getReference());\n    }, "Thread B").start();\n}\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"Thread A -> Stamp:0 | Value:50\nThread B -> Stamp:0 | Value:50\nThread A -> Stamp:1 | Value:1\n\u64cd\u4f5c\u5931\u8d25\uff0c\u5728Thread B\u64cd\u4f5c\u671f\u95f4\uff0c\u539f\u503c\u5df2\u7ecf\u88ab\u522b\u4eba\u52a8\u4e86\u624b\u811a\nThread B -> Stamp:2 | Value:50\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u90a3\u6211\u5c31\u8981\u7528\u8d85\u8fc7-127~128\u7684\u503c\u548b\u529e\u5462\uff1f")),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u5b9a\u4e49\u4e00\u4e2aInteger\u7c7b\u578b\u7684\u53d8\u91cf\uff0c\u4e0d\u8981\u76f4\u63a5\u5199\u503c\u89e6\u53d1\u81ea\u52a8\u88c5\u7bb1\u62c6\u7bb1"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class CasDemo {\n      static Integer i = 2000;  // \u5b9a\u4e49\u4e00\u4e2aInteger\u53d8\u91cf\n  \n      public static void main(String[] args) {\n          AtomicStampedReference<Integer> atomicInteger =\n                  new AtomicStampedReference<>(i, 0);\n  \n          new Thread(() -> {\n              int stamp = atomicInteger.getStamp();  // \u83b7\u53d6\u5f53\u524d\u7684\u6233\n              System.out.println(Thread.currentThread().getName() + " -> Stamp:" + atomicInteger.getStamp() + " | Value:" + atomicInteger.getReference());\n  \n              try {\n                  TimeUnit.SECONDS.sleep(2);\n              } catch (InterruptedException e) {\n                  e.printStackTrace();\n              }\n  \n              atomicInteger.compareAndSet(i, //\u671f\u671b\u503c\n                      1, // \u65b0\u503c\n                      atomicInteger.getStamp(), // \u671f\u671b\u7684stamp\u503c\n                      atomicInteger.getStamp() + 1); // \u65b0Stamp\u503c\n  \n              System.out.println(Thread.currentThread().getName() + " -> Stamp:" + atomicInteger.getStamp() + " | Value:" + atomicInteger.getReference());\n  \n              // \u6309\u7167ABA\u95ee\u9898\u7684\u539f\u7406\uff0c\u628a\u503c\u518d\u6539\u56de\u53bb\n              atomicInteger.compareAndSet(1, //\u671f\u671b\u503c\n                      i, // \u65b0\u503c\n                      atomicInteger.getStamp(), // \u671f\u671b\u7684stamp\u503c\n                      atomicInteger.getStamp() + 1); // \u65b0Stamp\u503c\n  \n          }, "Thread A").start();\n  \n          new Thread(() -> {\n              int stamp = atomicInteger.getStamp();  // \u83b7\u53d6\u5f53\u524d\u7684\u6233\n              System.out.println(Thread.currentThread().getName() + " -> Stamp:" + atomicInteger.getStamp() + " | Value:" + atomicInteger.getReference());\n  \n              try {\n                  TimeUnit.SECONDS.sleep(4);\n              } catch (InterruptedException e) {\n                  e.printStackTrace();\n              }\n  \n              boolean result = atomicInteger.compareAndSet(i,\n                      60,\n                      stamp,  // \u51c6\u5907\u5237\u65b0\u503c\u5b8c\u6210\u5bf9\u503c\u7684\u4fee\u6539\uff0c\u5148\u770b\u770b\u65f6\u95f4\u6233\u6709\u6ca1\u6709\u88ab\u522b\u4eba\u52a8\u8fc7\n                      ++stamp);\n  \n              if (result) {\n                  System.out.println("\u64cd\u4f5c\u6210\u529f");\n              } else {\n                  System.out.println("\u64cd\u4f5c\u5931\u8d25\uff0c\u5728" + Thread.currentThread().getName() + "\u64cd\u4f5c\u671f\u95f4\uff0c\u539f\u503c\u5df2\u7ecf\u88ab\u522b\u4eba\u52a8\u4e86\u624b\u811a");\n              }\n  \n              System.out.println(Thread.currentThread().getName() + " -> Stamp:" + atomicInteger.getStamp() + " | Value:" + atomicInteger.getReference());\n          }, "Thread B").start();\n      }\n}\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"Thread A -> Stamp:0 | Value:2000\nThread B -> Stamp:0 | Value:2000\nThread A -> Stamp:1 | Value:1\n\u64cd\u4f5c\u5931\u8d25\uff0c\u5728Thread B\u64cd\u4f5c\u671f\u95f4\uff0c\u539f\u503c\u5df2\u7ecf\u88ab\u522b\u4eba\u52a8\u4e86\u624b\u811a\nThread B -> Stamp:2 | Value:2000\n")),Object(c.b)("hr",null),Object(c.b)("h1",{id:"cas\u7684\u7f3a\u70b9"},"CAS\u7684\u7f3a\u70b9"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u81ea\u65cb\u5faa\u73af\u4f1a\u8017\u65f6"),Object(c.b)("li",{parentName:"ul"},"\u4e00\u6b21\u6027\u53ea\u80fd\u64cd\u4f5c\u4e00\u4e2a\u5171\u4eab\u53d8\u91cf"),Object(c.b)("li",{parentName:"ul"},"\u5b58\u5728ABA\u95ee\u9898\uff0c\u9700\u8981\u7279\u6b8a\u5904\u7406")))}o.isMDXComponent=!0},472:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=o(n),O=a,j=m["".concat(b,".").concat(O)]||m[O]||u[O]||c;return n?r.a.createElement(j,i(i({ref:t},p),{},{components:n})):r.a.createElement(j,i({ref:t},p))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,b=new Array(c);b[0]=O;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var p=2;p<c;p++)b[p]=n[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);