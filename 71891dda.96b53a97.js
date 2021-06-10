(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{261:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return o}));var a=n(2),r=n(6),b=(n(0),n(496)),l={id:"23.aqs",title:"AQS",hide_title:!0},c={unversionedId:"juc/23.aqs",id:"juc/23.aqs",isDocsHomePage:!1,title:"AQS",description:"AQS",source:"@site/docs/juc/23.aqs.md",slug:"/juc/23.aqs",permalink:"/docs/juc/23.aqs",version:"current",sidebar:"someSidebar",previous:{title:"\u5404\u79cd\u9501",permalink:"/docs/juc/22.multipleTypiesOfLocks"},next:{title:"JDBC",permalink:"/docs/javaweb/3.jdbc"}},i=[{value:"AQS",id:"aqs",children:[]},{value:"AQS\u539f\u7406\u5206\u6790",id:"aqs\u539f\u7406\u5206\u6790",children:[{value:"State\uff1a\u72b6\u6001",id:"state\uff1a\u72b6\u6001",children:[]}]},{value:"AQS\u5171\u4eab\u8d44\u6e90\u7684\u65b9\u5f0f\uff1a\u72ec\u5360\u5f0f\u548c\u5171\u4eab\u5f0f",id:"aqs\u5171\u4eab\u8d44\u6e90\u7684\u65b9\u5f0f\uff1a\u72ec\u5360\u5f0f\u548c\u5171\u4eab\u5f0f",children:[]},{value:"AQS\u5e95\u5c42\u4f7f\u7528\u4e86\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f",id:"aqs\u5e95\u5c42\u4f7f\u7528\u4e86\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f",children:[]}],p={rightToc:i};function o(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},p,l,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"aqs"},"AQS"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"AQS AbstractQueuedSynchronized\u7c7b\u5728java.util.concurren.locks\u5305\u4e0b")),Object(b.b)("p",null,"AQS\u662f\u4e00\u4e2a\u7528\u6765\u6784\u5efa\u9501\u548c\u540c\u6b65\u5668\u7684\u6846\u67b6\uff0c\u4f7f\u7528AQS\u80fd\u7b80\u5355\u4e14\u9ad8\u6548\u7684\u6784\u9020\u51fa\u5e94\u7528\u5e7f\u6cdb\u7684\u5927\u91cf\u7684\u540c\u6b65\u5668"),Object(b.b)("p",null,"\u4f8b\u5982ReentrantLock\u3001Semaphore\u3001ReentrantReadWriteLock\u3001SynchronizedQueue\u3001FutureTask\u7b49\u7686\u662f\u57fa\u4e8eAQS\u7684"),Object(b.b)("h1",{id:"aqs\u539f\u7406\u5206\u6790"},"AQS\u539f\u7406\u5206\u6790"),Object(b.b)("p",null,"AQS\u6838\u5fc3\u601d\u60f3\u662f"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u5982\u679c\u88ab\u8bf7\u6c42\u7684\u5171\u4eab\u8d44\u6e90\u7a7a\u95f2\uff0c\u5219\u5c06\u5f53\u524d\u8bf7\u6c42\u8d44\u6e90\u7684\u7ebf\u7a0b\u8bbe\u7f6e\u4e3a\u6709\u6548\u7684\u5de5\u4f5c\u7ebf\u7a0b\uff0c\u5e76\u5c06\u5171\u4eab\u8d44\u6e90\u8bbe\u7f6e\u4e3a\u9501\u5b9a\u72b6\u6001")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u5982\u679c\u88ab\u8bf7\u6c42\u7684\u5171\u4eab\u8d44\u6e90\u88ab\u5360\u7528\uff0c\u90a3\u4e48\u4e45\u9700\u8981\u4e00\u5957\u7ebf\u7a0b\u963b\u585e\u7b49\u5f85\u4ee5\u53ca\u88ab\u5524\u9192\u65f6\u9501\u5206\u914d\u7684\u673a\u5236\uff0c\u8fd9\u4e2a\u673a\u5236AQS\u662f\u7528CLH\u961f\u5217\u9501\u5b9e\u73b0\u7684\uff0c\u5373\u5c06\u6682\u65f6\u83b7\u53d6\u4e0d\u5230\u9501\u7684\u7ebf\u7a0b\u52a0\u5165\u961f\u5217\u4e2d"))),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"CLH (Craig\uff0cLandin\uff0cand Hagersten)\u961f\u5217\u662f\u4e00\u4e2a\u865a\u62df\u7684\u53cc\u5411\u961f\u5217\uff08\u865a\u62df\u53cc\u5411\u961f\u5217\u5373\u4e0d\u51fa\u5728\u961f\u5217\u5b9e\u4f8b\uff0c\u4ec5\u5b58\u5728\u8282\u70b9\u4e4b\u95f4\u7684\u5173\u8054\u5173\u7cfb\uff09")),Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},"AQS\u662f\u5c06\u6bcf\u6761\u8bf7\u6c42\u5171\u4eab\u8d44\u6e90\u7684\u7ebf\u7a0b\u5c01\u88c5\u6210\u4e00\u4e2aCLH\u9501\u961f\u5217\u7684\u4e00\u4e2a\u8282\u70b9\u6765\u5b9e\u73b0\u9501\u5206\u914d\u7684"))),Object(b.b)("p",null,Object(b.b)("img",{alt:"image-20200702130952411",src:n(854).default})),Object(b.b)("h2",{id:"state\uff1a\u72b6\u6001"},"State\uff1a\u72b6\u6001"),Object(b.b)("p",null,"AQS\u4f7f\u7528\u4e00\u4e2aint\u6210\u5458\u53d8\u91cf\u6765\u8868\u793a\u540c\u6b65\u72b6\u6001\uff0c\u901a\u8fc7\u5185\u7f6e\u7684FIFO\u961f\u5217\u6765\u5b8c\u6210\u83b7\u53d6\u8d44\u6e90\u7ebf\u7a0b\u7684\u6392\u961f\u5de5\u4f5c\u3002AQS\u4f7f\u7528CAS\u5bf9\u8be5\u540c\u6b65\u72b6\u6001\u8fdb\u884c\u539f\u5b50\u64cd\u4f5c\u5b9e\u73b0\u5bf9\u5176\u503c\u7684\u4fee\u6539"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"private volatile int state; //\u5171\u4eab\u53d8\u91cf\uff0c\u4f7f\u7528volatile\u4fee\u9970\u4fdd\u8bc1\u7ebf\u7a0b\u53ef\u89c1\u6027\n")),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"state"),"\u72b6\u6001\u7684\u8bbf\u95ee\u65b9\u5f0f\u6709\u662f\u90a3\u79cd\uff1a",Object(b.b)("inlineCode",{parentName:"p"},"getState()"),"\u3001",Object(b.b)("inlineCode",{parentName:"p"},"setState()"),"\u548c",Object(b.b)("inlineCode",{parentName:"p"},"compareAndSetState()"),"\uff0c\u5747\u662f\u539f\u5b50\u64cd\u4f5c\u3002"),Object(b.b)("p",null,"\u5176\u4e2d\uff0c",Object(b.b)("inlineCode",{parentName:"p"},"compareAndSetState()"),"\u8c03\u7528\u4e86Unsafe\u7684compareAndSwapInt()\u65b9\u6cd5"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// \u8fd4\u56de\u540c\u6b65\u72b6\u6001\u7684\u5f53\u524d\u503c\uff0c\u539f\u5b50\u8bfb\nprotected final int getState() {\n    return state;\n}\n\n// \u8bbe\u7f6e\u540c\u6b65\u72b6\u6001\u7684\u503c\uff0c\u539f\u5b50\u5199\nprotected final void setState(int newState) {\n    state = newState;\n}\n\n// \u81ea\u52a8\u5c06\u540c\u6b65\u72b6\u6001\u8bbe\u7f6e\u4e3a\u7ed9\u5b9a\u7684\u66f4\u65b0\u72b6\u6001\u503c\uff08\u5982\u679c\u5f53\u524d\u72b6\u6001\u503c\u8fbe\u5230\u9884\u671f\u503c\uff09\n// \u539f\u5b50\u8bfb\u5199\u64cd\u4f5c\uff0c \u57fa\u4e8eCAS\nprotected final boolean compareAndSetState(int expect, int update) {\n    return unsafe.compareAndSwapInt(this, stateOffset, expect, update);\n}\n")),Object(b.b)("h1",{id:"aqs\u5171\u4eab\u8d44\u6e90\u7684\u65b9\u5f0f\uff1a\u72ec\u5360\u5f0f\u548c\u5171\u4eab\u5f0f"},"AQS\u5171\u4eab\u8d44\u6e90\u7684\u65b9\u5f0f\uff1a\u72ec\u5360\u5f0f\u548c\u5171\u4eab\u5f0f"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"AQS\u5b9a\u4e49\u4e86\u4e24\u79cd\u8d44\u6e90\u5171\u4eab\u65b9\u5f0f\uff1a\u72ec\u5360\u5f0f\uff08Exclusive\uff09\u548c\u5171\u4eab\u5f0f(Share)")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Exclusive(\u72ec\u5360\u5f0f)"),"\uff1a\u53ea\u6709\u4e00\u4e2a\u7ebf\u7a0b\u80fd\u6267\u884c\uff0c\u5982ReentrantLock\uff0c\u53c8\u5206\u4e3a\u516c\u5e73\u9501\u548c\u975e\u516c\u5e73\u9501",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u516c\u5e73\u9501\uff1a\u6309\u7167\u7ebf\u7a0b\u5728\u961f\u5217\u4e2d\u7684\u6392\u961f\u987a\u5e8f\uff0c\u5148\u5230\u8005\u5148\u83b7\u5f97\u9501"),Object(b.b)("li",{parentName:"ul"},"\u975e\u516c\u5e73\u9501\uff1a\u5f53\u524d\u7ebf\u7a0b\u8981\u83b7\u53d6\u9501\u65f6\uff0c\u65e0\u89c6\u961f\u5217\u987a\u5e8f\u76f4\u63a5\u62a2\u9501\uff0c\u8c01\u62a2\u5230\u5c31\u662f\u8c01\u7684"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Share(\u5171\u4eab\u5f0f)"),"\uff1a\u591a\u4e2a\u7ebf\u7a0b\u53ef\u540c\u65f6\u6267\u884c\uff0c\u5982Semaphore\u548cCountDownLatch")),Object(b.b)("p",null,"ReentrantReadWriteLock\u53ef\u4ee5\u770b\u6210\u662f\u7ec4\u5408\u5f0f\uff0c\u56e0\u4e3aReentrantReadWriteLock\u4e5f\u5c31\u662f\u8bfb\u5199\u9501\uff0c\u5141\u8bb8\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u5bf9\u67d0\u4e00\u8d44\u6e90\u8fdb\u884c\u8bfb\u64cd\u4f5c"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"AQS\u53ea\u662f\u4e00\u4e2a\u6846\u67b6\uff0c\u4e4b\u5b9a\u4e49\u4e86\u4e00\u4e2a\u63a5\u53e3\uff0c\u5177\u4f53\u8d44\u6e90\u7684\u83b7\u53d6\u3001\u91ca\u653e\u90fd\u4ea4\u7531\u81ea\u5b9a\u4e49\u540c\u6b65\u5668\u5b9e\u73b0")),Object(b.b)("p",null,"\u4e0d\u540c\u7684\u81ea\u5b9a\u4e49\u540c\u6b65\u5668\u4e89\u7528\u5171\u4eab\u8d44\u6e90\u7684\u65b9\u5f0f\u4e5f\u4e0d\u540c\u3002\u81ea\u5b9a\u4e49\u540c\u6b65\u5668\u5728\u5b9e\u73b0\u65f6\u53ea\u9700\u8981\u5b9e\u73b0\u5171\u4eab\u8d44\u6e90state\u7684\u83b7\u53d6\u4e0e\u91ca\u653e\u65b9\u5f0f\u5373\u53ef\uff0c\u81f3\u4e8e\u5177\u4f53\u7ebf\u7a0b\u7b49\u5f85\u961f\u5217\u7684\u7ef4\u62a4\uff08\u5982\u83b7\u53d6\u8d44\u6e90\u5931\u8d25\u5165\u961f\u3001\u5524\u9192\u51fa\u961f\u7b49\uff09\uff0cAQS\u5df2\u7ecf\u5728\u9876\u5c42\u5b9e\u73b0\u597d\u4e86"),Object(b.b)("h1",{id:"aqs\u5e95\u5c42\u4f7f\u7528\u4e86\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f"},"AQS\u5e95\u5c42\u4f7f\u7528\u4e86\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f"),Object(b.b)("p",null,"\u540c\u6b65\u5668\u7684\u8bbe\u8ba1\u57fa\u4e8e\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f\uff0c\u5982\u679c\u9700\u8981\u81ea\u5b9a\u4e49\u540c\u6b65\u5668\u4e00\u822c\u7684\u65b9\u5f0f\u662f\u8fd9\u6837"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"\u4f7f\u7528\u8005\u7ee7\u627fAbstractQueuedSynchronizer\u5e76\u91cd\u5199\u6307\u5b9a\u65b9\u6cd5\uff0c\u8fd9\u4e9b\u65b9\u6cd5\u5f88\u7b80\u5355\uff0c\u65e0\u975e\u662f\u5bf9\u5171\u4eab\u8d44\u6e90state\u7684\u83b7\u53d6\u548c\u91ca\u653e"),Object(b.b)("li",{parentName:"ol"},"\u5c06AQS\u7ec4\u5408\u5728\u81ea\u5b9a\u4e49\u540c\u6b65\u7ec4\u4ef6\u7684\u5b9e\u73b0\u4e2d\uff0c\u5e76\u8c03\u7528\u5176\u6a21\u677f\u65b9\u6cd5\uff0c\u800c\u8fd9\u4e9b\u6a21\u677f\u65b9\u6cd5\u4f1a\u8c03\u7528\u4f7f\u7528\u8005\u91cd\u5199\u7684\u65b9\u6cd5")),Object(b.b)("p",null,"\u8fd9\u548c\u6211\u4eec\u4ee5\u5f80\u901a\u8fc7\u5b9e\u73b0\u63a5\u53e3\u7684\u65b9\u5f0f\u6709\u5f88\u5927\u7684\u533a\u522b\uff0c\u8fd9\u662f\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f\u5f88\u7ecf\u5178\u7684\u4e00\u4e2a\u5e94\u7528"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"AQS\u4f7f\u7528\u4e86\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f\uff0c\u81ea\u5b9a\u4e49\u540c\u6b65\u5668\u65f6\uff0c\u9700\u8981\u91cd\u5199\u4e0b\u9762\u51e0\u4e2aAQS\u63d0\u4f9b\u7684\u6a21\u677f\u65b9\u6cd5\uff1a")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u65b9\u6cd5\u540d"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u8d44\u6e90\u5171\u4eab\u65b9\u5f0f"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"isHeldExclusively"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u67e5\u8be2\u8be5\u662f\u5426\u6b63\u5728\u72ec\u5360\u8d44\u6e90\uff0c\u53ea\u6709\u7528\u5230condition\u624d\u9700\u8981\u53bb\u5b9e\u73b0\u8be5\u65b9\u6cd5")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"tryAcquire(int)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u72ec\u5360\u65b9\u5f0f"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5c1d\u8bd5\u83b7\u53d6\u8d44\u6e90\uff1a\u6210\u529f\u8fd4\u56detrue\u3001\u5931\u8d25\u8fd4\u56defalse")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"tryRelease(int)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u72ec\u5360\u65b9\u5f0f"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5c1d\u8bd5\u91ca\u653e\u8d44\u6e90\uff1a\u6210\u529f\u8fd4\u56detrue\u3001\u5931\u8d25\u8fd4\u56defalse")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"tryAcquireShared(int)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5171\u4eab\u65b9\u5f0f"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5c1d\u8bd5\u83b7\u53d6\u8d44\u6e90\uff1a\u8d1f\u6570\u8868\u793a\u5931\u8d25\uff1b0\u8868\u793a\u6210\u529f\uff1b\u6b63\u6570\u8868\u793a\u6210\u529f\u4e14\u6709\u5269\u4f59\u8d44\u6e90")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"tryReleaseShared(int)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5171\u4eab\u65b9\u5f0f"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5c1d\u8bd5\u91ca\u653e\u8d44\u6e90\uff1a\u5982\u679c\u91ca\u653e\u8d44\u6e90\u540e\u5141\u8bb8\u5524\u9192\u540e\u7eed\u7b49\u5f85\u7ebf\u7a0b\uff0c\u5219\u8fd4\u56detrue\uff0c\u5426\u5219\u8fd4\u56defalse")))),Object(b.b)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6bcf\u4e2a\u65b9\u6cd5\u90fd\u629b\u51fa",Object(b.b)("inlineCode",{parentName:"p"},"UnsupportedOperationException"),"\u3002\u8fd9\u4e9b\u65b9\u6cd5\u7684\u5b9e\u73b0\u5fc5\u987b\u662f\u5185\u90e8\u7ebf\u7a0b\u5b89\u5168\u7684\uff0c\u5e76\u4e14\u901a\u5e38\u5e94\u8be5\u7b80\u77ed\u800c\u4e0d\u662f\u963b\u585e\u3002"),Object(b.b)("p",null,"AQS\u7c7b\u4e2d\u7684\u5176\u4ed6\u65b9\u6cd5\u90fd\u662ffinal\uff0c\u6240\u4ee5\u65e0\u6cd5\u88ab\u5176\u4ed6\u7c7b\u4f7f\u7528\uff0c\u53ea\u6709\u8fd9\u51e0\u4e2a\u65b9\u6cd5\u53ef\u4ee5\u88ab\u5176\u4ed6\u7c7b\u4f7f\u7528"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"ReentrantLock")),Object(b.b)("p",null,"\u4ee5ReentrantLock\u4e3a\u4f8b\uff0cstate\u521d\u59cb\u5316\u4e3a0\uff0c\u8868\u793a\u672a\u9501\u5b9a\u72b6\u6001"),Object(b.b)("p",null,"A\u7ebf\u7a0b",Object(b.b)("inlineCode",{parentName:"p"},"lock()"),"\u65f6\uff0c\u4f1a\u8c03\u7528",Object(b.b)("inlineCode",{parentName:"p"},"tryAcquire()"),"\u72ec\u5360\u8be5\u9501\u5e76state+1"),Object(b.b)("p",null,"\u6b64\u540e\uff0c\u5176\u4ed6\u7ebf\u7a0b\u518d",Object(b.b)("inlineCode",{parentName:"p"},"tryAcquire()"),"\u65f6\u5c31\u4f1a\u5931\u8d25\uff0c\u76f4\u5230A\u7ebf\u7a0b",Object(b.b)("inlineCode",{parentName:"p"},"unlock()"),"\u5230state=0\uff08\u5373\u91ca\u653e\u9501\uff09\u4f4d\u7f6e\uff0c\u5176\u4ed6\u7ebf\u7a0b\u624d\u6709\u673a\u4f1a\u83b7\u53d6\u8be5\u9501"),Object(b.b)("p",null,"\u5f53\u7136\uff0c\u91ca\u653e\u9501\u4e4b\u524d\uff0cA\u7ebf\u7a0b\u81ea\u5df1\u662f\u53ef\u4ee5\u91cd\u590d\u83b7\u53d6\u6b64\u9501\u7684\uff08state\u4f1a\u7d2f\u52a0\uff09\uff0c\u8fd9\u5c31\u662f",Object(b.b)("strong",{parentName:"p"},"\u53ef\u91cd\u5165"),"\u7684\u6982\u5ff5"),Object(b.b)("p",null,"\u4f46\u8981\u6ce8\u610f\uff0c",Object(b.b)("strong",{parentName:"p"},"\u83b7\u53d6\u591a\u5c11\u6b21\u5c31\u8981\u91ca\u653e\u591a\u5c11\u6b21\uff0c\u8fd9\u6837\u624d\u80fd\u4fdd\u8bc1state\u80fd\u591f\u56de\u52300")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"CountDownLatch")),Object(b.b)("p",null,"\u4efb\u52a1\u5206\u4e3aN\u4e2a\u5b50\u7ebf\u7a0b\u53bb\u6267\u884c\uff0cstate\u4e5f\u521d\u59cb\u5316\u4e3aN\uff08\u6ce8\u610fN\u8981\u4e0e\u7ebf\u7a0b\u4e2a\u6570\u4e00\u81f4\uff09\u3002"),Object(b.b)("p",null,"\u8fd9N\u4e2a\u5b50\u7ebf\u7a0b\u65f6\u5e76\u884c\u6267\u884c\u7684\uff0c\u6bcf\u4e2a\u5b50\u7ebf\u7a0b\u6267\u884c\u5b8c\u540e",Object(b.b)("inlineCode",{parentName:"p"},"countDown()"),"\u4e00\u6b21\uff0cstate\u4f1aCAS\u51cf1"),Object(b.b)("p",null,"\u7b49\u5230\u6240\u6709\u5b50\u7ebf\u7a0b\u90fd\u6267\u884c\u5b8c\u540e(state = 0 )\uff0c\u4f1a",Object(b.b)("inlineCode",{parentName:"p"},"unpack()"),"\u4e3b\u8c03\u7528\u7ebf\u7a0b\uff0c\u7136\u540e\u4e3b\u8c03\u7528\u7ebf\u7a0b\u4f1a\u4ece",Object(b.b)("inlineCode",{parentName:"p"},"await()"),"\u51fd\u6570\u8fd4\u56de\uff0c\u7ee7\u7eed\u540e\u7eed\u52a8\u4f5c"),Object(b.b)("hr",null),Object(b.b)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0c\u81ea\u5b9a\u4e49\u540c\u6b65\u5668\u8981\u4e48\u662f\u72ec\u5360\u65b9\u5f0f\uff0c\u8981\u4e48\u662f\u5171\u4eab\u65b9\u5f0f"),Object(b.b)("p",null,"\u4ee5\u4e0b\u4e24\u7ec4\u65b9\u6cd5\uff1a"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("inlineCode",{parentName:"li"},"tryAcquire()"),"\u4e0e",Object(b.b)("inlineCode",{parentName:"li"},"tryRelease()")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("inlineCode",{parentName:"li"},"tryAcquireShared()"),"\u4e0e",Object(b.b)("inlineCode",{parentName:"li"},"tryReleaseShared()"))),Object(b.b)("p",null,"\u4e2d\u7684\u4e00\u7ec4\u5373\u53ef"),Object(b.b)("p",null,"\u4f46AQS\u4e5f\u652f\u6301\u81ea\u5b9a\u4e49\u540c\u6b65\u5668\u540c\u65f6\u5b9e\u73b0\u72ec\u5360\u548c\u5171\u4eab\u4e24\u79cd\u65b9\u5f0f\uff0c\u5982ReentrantReadWriteLock"))}o.isMDXComponent=!0},496:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=o(n),j=a,d=u["".concat(l,".").concat(j)]||u[j]||O[j]||b;return n?r.a.createElement(d,c(c({ref:t},p),{},{components:n})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,l=new Array(b);l[0]=j;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<b;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},854:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/12-01b2e945758394362bf70707a40455dd.png"}}]);