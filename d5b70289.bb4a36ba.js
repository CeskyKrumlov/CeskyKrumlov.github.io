(window.webpackJsonp=window.webpackJsonp||[]).push([[430],{486:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),c=(t(0),t(572)),i={id:"9.helpClass",title:"\u5e38\u7528\u8f85\u52a9\u7c7b",hide_title:!0},o={unversionedId:"juc/9.helpClass",id:"juc/9.helpClass",isDocsHomePage:!1,title:"\u5e38\u7528\u8f85\u52a9\u7c7b",description:"\u5e38\u7528\u8f85\u52a9\u7c7b",source:"@site/docs/juc/9.\u5e38\u7528\u8f85\u52a9\u7c7b.md",slug:"/juc/9.helpClass",permalink:"/docs/juc/9.helpClass",version:"current",sidebar:"someSidebar",previous:{title:"Callable",permalink:"/docs/juc/8.callable"},next:{title:"\u8bfb\u5199\u9501",permalink:"/docs/juc/10.readWriteLock"}},l=[{value:"\u5e38\u7528\u8f85\u52a9\u7c7b",id:"\u5e38\u7528\u8f85\u52a9\u7c7b",children:[{value:"CountDownLatch \uff08\u8ba1\u51cf\u95ed\u9501\uff09",id:"countdownlatch-\uff08\u8ba1\u51cf\u95ed\u9501\uff09",children:[]},{value:"CyclicBarrier\uff08\u5faa\u73af\u5c4f\u969c\uff09",id:"cyclicbarrier\uff08\u5faa\u73af\u5c4f\u969c\uff09",children:[]},{value:"Semaphore\uff08\u4fe1\u53f7\u91cf\uff09",id:"semaphore\uff08\u4fe1\u53f7\u91cf\uff09",children:[]}]}],b={rightToc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"\u5e38\u7528\u8f85\u52a9\u7c7b"},"\u5e38\u7528\u8f85\u52a9\u7c7b"),Object(c.b)("blockquote",null,Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"CountDownLatch")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"CyclicBarrier")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Semaphore")))),Object(c.b)("h2",{id:"countdownlatch-\uff08\u8ba1\u51cf\u95ed\u9501\uff09"},"CountDownLatch \uff08\u8ba1\u51cf\u95ed\u9501\uff09"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u51cf\u6cd5\u8ba1\u6570\u5668\u8f85\u52a9\u7c7b"),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u6784\u9020\u65b9\u6cd5\u8981\u6c42\u4f20\u5165\u4e00\u4e2aint\u7c7b\u578b\u7684\u521d\u59cb\u503c"),Object(c.b)("li",{parentName:"ul"},"\u6267\u884c",Object(c.b)("inlineCode",{parentName:"li"},"countDown()"),"\u65b9\u6cd5\uff0c\u5c31\u51cf1"),Object(c.b)("li",{parentName:"ul"},"\u7528",Object(c.b)("inlineCode",{parentName:"li"},"await()"),"\u65b9\u6cd5\uff0c\u7b49\u5f85\u8ba1\u6570\u5668\u5f52\u96f6"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u5f53\u8ba1\u6570\u5668\u5f52\u96f6\uff0c\u518d\u6267\u884c\u4e4b\u540e\u7684\u8bed\u53e5"),"\uff0c\u6267\u884c\u67d0\u64cd\u4f5c\uff0c\u7528\u4e8e\u7b49\u5f85\u6240\u6709\u7ebf\u7a0b\u6267\u884c\u5b8c\u6bd5\u540e"))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'// \u51cf\u6cd5\u8ba1\u6570\u5668\npublic class Demo01CountDownLatch {\n    public static void main(String[] args) throws InterruptedException {\n        // \u603b\u6570\u662f16\uff0c\u5012\u8ba1\u65f6\n        CountDownLatch countDownLatch = new CountDownLatch(16);\n\n        for (int i = 0; i < 16; i++) {\n            new Thread(() -> {\n                System.out.println(Thread.currentThread().getName() + "\u5f00\u59cb\u8dd1\u4e86");\n                // countDown()\u65b9\u6cd5\u6267\u884c-1\n                countDownLatch.countDown();\n            }, "Thread " + i).start();\n        }\n        //\u7b49\u5f85\u8ba1\u6570\u5668\u5f52\u96f6\n        countDownLatch.await();\n\n        System.out.println("\u7ebf\u7a0b\u5168\u8dd1\u4e86\uff0c\u6e9c\u4e86\u6e9c\u4e86");\n    }\n}\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"Thread 0\u5f00\u59cb\u8dd1\u4e86\nThread 2\u5f00\u59cb\u8dd1\u4e86\nThread 3\u5f00\u59cb\u8dd1\u4e86\nThread 1\u5f00\u59cb\u8dd1\u4e86\nThread 4\u5f00\u59cb\u8dd1\u4e86\nThread 5\u5f00\u59cb\u8dd1\u4e86\nThread 6\u5f00\u59cb\u8dd1\u4e86\nThread 7\u5f00\u59cb\u8dd1\u4e86\nThread 8\u5f00\u59cb\u8dd1\u4e86\nThread 9\u5f00\u59cb\u8dd1\u4e86\nThread 10\u5f00\u59cb\u8dd1\u4e86\nThread 11\u5f00\u59cb\u8dd1\u4e86\nThread 12\u5f00\u59cb\u8dd1\u4e86\nThread 13\u5f00\u59cb\u8dd1\u4e86\nThread 14\u5f00\u59cb\u8dd1\u4e86\nThread 15\u5f00\u59cb\u8dd1\u4e86\n\u7ebf\u7a0b\u5168\u8dd1\u4e86\uff0c\u6e9c\u4e86\u6e9c\u4e86\n")),Object(c.b)("h2",{id:"cyclicbarrier\uff08\u5faa\u73af\u5c4f\u969c\uff09"},"CyclicBarrier\uff08\u5faa\u73af\u5c4f\u969c\uff09"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u52a0\u6cd5\u8ba1\u6570\u5668"),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u6784\u9020\u65b9\u6cd5\u63a5\u6536",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"int\u7c7b\u578b\u7684\u6570"),Object(c.b)("li",{parentName:"ul"},"\u4e00\u4e2aRunnable\u63a5\u53e3\u7684\u5b9e\u73b0\u7c7b"))))),Object(c.b)("p",null,"CyclicBarrier\u548cCountDownLatch\u975e\u5e38\u7c7b\u4f3c\uff0c\u5b83\u4e5f\u53ef\u4ee5\u5b9e\u73b0\u591a\u4e2a\u7ebf\u7a0b\u4e4b\u95f4\u7684\u8ba1\u6570\u7b49\u5f85\uff0c\u4f46\u5b83\u7684\u529f\u80fd\u6bd4CountDownLatch\u66f4\u52a0\u590d\u6742\u548c\u5f3a\u5927\u3002\u4e3b\u8981\u5e94\u7528\u573a\u666f\u548cCountDownLatch\u7c7b\u4f3c"),Object(c.b)("p",null,"CyclicBarrier\u7684\u5b57\u9762\u610f\u601d\u662f\u53ef\u5faa\u73af\uff08Cyclic\uff09\u7684\u5c4f\u969c\uff08Barrier\uff09\u3002\u4ed6\u8981\u5b8c\u6210\u7684\u4e8b\u662f\uff0c\u8ba9\u4e00\u7ec4\u7ebf\u7a0b\u8fbe\u5230\u4e00\u4e2a",Object(c.b)("strong",{parentName:"p"},"\u5c4f\u969c\uff08\u4e5f\u53eb\u540c\u6b65\u70b9\uff09"),"\u65f6\u88ab\u963b\u585e\uff0c\u76f4\u5230\u6700\u540e\u4e00\u4e2a\u7ebf\u7a0b\u5230\u8fbe\u5c4f\u969c\u65f6\uff0c\u5c4f\u969c\u624d\u4f1a\u5f00\u95e8\uff0c\u6240\u6709\u88ab\u5c4f\u969c\u62e6\u622a\u7684\u7ebf\u7a0b\u624d\u4f1a\u7ee7\u7eed\u5e72\u6d3b"),Object(c.b)("p",null,"CyclicBarrier\u7684\u9ed8\u8ba4\u6784\u9020\u65b9\u6cd5\u4e3a",Object(c.b)("inlineCode",{parentName:"p"},"CyclicBarrier(int parties)"),"\uff0c\u5176\u53c2\u6570\u8868\u793a\u5c4f\u853d\u62e6\u622a\u7684\u7ebf\u7a0b\u6570\uff0c\u6bcf\u4e2a\u7ebf\u7a0b\u8c03\u7528",Object(c.b)("inlineCode",{parentName:"p"},"await()"),"\u65b9\u6cd5\u544a\u8bc9",Object(c.b)("inlineCode",{parentName:"p"},"CyclicBarrier"),"\u81ea\u5df1\u5df2\u7ecf\u5230\u8fbe\u4e86\u5c4f\u969c\uff0c\u7136\u540e\u5f53\u524d\u7ebf\u7a0b\u88ab\u963b\u585e"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u4f8b\uff1a\u96c6\u9f50\u4e03\u9f99\u73e0"))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class Demo02CyclicBarrier {\n    public static void main(String[] args) {\n        CyclicBarrier cyclicBarrier = new CyclicBarrier(7, () -> {\n            System.out.println("\u96c6\u9f50\u4e867\u9897\u9f99\u73e0\uff0c\u53ec\u5524\u795e\u9f99");\n        });\n\n        for (int i = 1; i <= 7; i++) {\n            final int tempI = i;\n            new Thread(() -> {\n                System.out.println("\u6536\u96c6\u4e86\u7b2c" + tempI + "\u53f7\u9f99\u73e0");\n\n                try {\n                    cyclicBarrier.await();\n                } catch (InterruptedException e) {\n                    e.printStackTrace();\n                } catch (BrokenBarrierException e) {\n                    e.printStackTrace();\n                }\n            }, "Thread" + i).start();\n        }\n    }\n}\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"\u6536\u96c6\u4e86\u7b2c1\u53f7\u9f99\u73e0\n\u6536\u96c6\u4e86\u7b2c2\u53f7\u9f99\u73e0\n\u6536\u96c6\u4e86\u7b2c3\u53f7\u9f99\u73e0\n\u6536\u96c6\u4e86\u7b2c4\u53f7\u9f99\u73e0\n\u6536\u96c6\u4e86\u7b2c5\u53f7\u9f99\u73e0\n\u6536\u96c6\u4e86\u7b2c6\u53f7\u9f99\u73e0\n\u6536\u96c6\u4e86\u7b2c7\u53f7\u9f99\u73e0\n\u96c6\u9f50\u4e867\u9897\u9f99\u73e0\uff0c\u53ec\u5524\u795e\u9f99\n")),Object(c.b)("h2",{id:"semaphore\uff08\u4fe1\u53f7\u91cf\uff09"},"Semaphore\uff08\u4fe1\u53f7\u91cf\uff09"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u4fe1\u53f7\u91cf")),Object(c.b)("p",{parentName:"blockquote"},"synchronized\u548cReentrantLock\u90fd\u662f\u4e00\u6b21\u53ea\u5141\u8bb8\u4e00\u4e2a\u7ebf\u7a0b\u8bbf\u95ee\u67d0\u4e2a\u8d44\u6e90\uff0cSemaphore(\u4fe1\u53f7\u91cf)\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u8bbf\u95ee\u67d0\u4e2a\u8d44\u6e90"),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u6784\u9020\u65b9\u6cd5\u8981\u6c42\u4f20\u5165\u4e00\u4e2aint\u7c7b\u578b\u7684\u53c2\u6570\uff0c\u9ed8\u8ba4\u7ebf\u7a0b\u6570\u91cf\uff08\u53ef\u7528\u8d44\u6e90\u6570\u76ee\uff09"),Object(c.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u7528\u6765\u505a\u9650\u6d41\u3001\u63a7\u5236\u6700\u5927\u7ebf\u7a0b\u6570"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"acquire()"),"\u2014\u2014\u62ff\u5230\u4e00\u4e2a\u8d44\u6e90"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"release()"),"\u2014\u2014\u91ca\u653e"))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u4f8b\uff1a6\u8f86\u8f66\uff0c3\u4e2a\u8f66\u4f4d"))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class Demo03Semaphore {\n    public static void main(String[] args) {\n        // \u5047\u8bbe\u4e3a\u505c\u8f66\u4f4d\n        Semaphore semaphore = new Semaphore(3);\n\n        for (int i = 0; i < 6; i++) {\n            new Thread(() -> {\n                // acquire \u5f97\u5230\n                try {\n                    semaphore.acquire();\n                    System.out.println(Thread.currentThread().getName() + "\u62a2\u5230\u4e86\u8f66\u4f4d");\n                    //\u5360\u7528\u4e24\u79d2\n                    TimeUnit.SECONDS.sleep(2);\n                    System.out.println(Thread.currentThread().getName() + "\u79bb\u5f00\u4e86\u8f66\u4f4d");\n                } catch (InterruptedException e) {\n                    e.printStackTrace();\n                } finally {\n                    semaphore.release();\n                }\n                // release \u91ca\u653e\n            }, "Thread" + i).start();\n        }\n    }\n}\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"Thread0\u62a2\u5230\u4e86\u8f66\u4f4d\nThread2\u62a2\u5230\u4e86\u8f66\u4f4d\nThread1\u62a2\u5230\u4e86\u8f66\u4f4d\n--------------- \u7b49\u5f85\u4e24\u79d2\nThread2\u79bb\u5f00\u4e86\u8f66\u4f4d\nThread0\u79bb\u5f00\u4e86\u8f66\u4f4d\nThread1\u79bb\u5f00\u4e86\u8f66\u4f4d\nThread4\u62a2\u5230\u4e86\u8f66\u4f4d\nThread3\u62a2\u5230\u4e86\u8f66\u4f4d\nThread5\u62a2\u5230\u4e86\u8f66\u4f4d\n--------------- \u7b49\u5f85\u4e24\u79d2\nThread4\u79bb\u5f00\u4e86\u8f66\u4f4d\nThread3\u79bb\u5f00\u4e86\u8f66\u4f4d\nThread5\u79bb\u5f00\u4e86\u8f66\u4f4d\n")))}p.isMDXComponent=!0},572:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return s}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),p=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,s=u["".concat(i,".").concat(d)]||u[d]||m[d]||c;return t?a.a.createElement(s,o(o({ref:n},b),{},{components:t})):a.a.createElement(s,o({ref:n},b))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<c;b++)i[b]=t[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);