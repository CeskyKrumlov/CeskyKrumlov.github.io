(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{353:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return h}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),b=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=b(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(t),m=r,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||c;return t?a.a.createElement(h,o(o({ref:n},p),{},{components:t})):a.a.createElement(h,o({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<c;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},68:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return b}));var r=t(2),a=t(6),c=(t(0),t(353)),i={id:"10.readWriteLock",title:"\u8bfb\u5199\u9501",hide_title:!0},o={unversionedId:"juc/10.readWriteLock",id:"juc/10.readWriteLock",isDocsHomePage:!1,title:"\u8bfb\u5199\u9501",description:"\u8bfb\u5199\u9501",source:"@site/docs/juc/10.\u8bfb\u5199\u9501.md",slug:"/juc/10.readWriteLock",permalink:"/docs/juc/10.readWriteLock",version:"current",sidebar:"someSidebar",previous:{title:"\u5e38\u7528\u8f85\u52a9\u7c7b",permalink:"/docs/juc/9.helpClass"},next:{title:"\u963b\u585e\u961f\u5217",permalink:"/docs/juc/11.blockingQueue"}},l=[{value:"\u8bfb\u5199\u9501",id:"\u8bfb\u5199\u9501",children:[]}],p={rightToc:l};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"\u8bfb\u5199\u9501"},"\u8bfb\u5199\u9501"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"ReadWriteLock\u63a5\u53e3")),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u552f\u4e00\u5b9e\u73b0\u7c7b\uff1aReentrantReadWriteLock"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"readLock()"),"\u3001",Object(c.b)("inlineCode",{parentName:"li"},"writeLock()")),Object(c.b)("li",{parentName:"ul"},"\u7ef4\u62a4\u4e86",Object(c.b)("strong",{parentName:"li"},"\u4e00\u5bf9Lock"),"\uff0c\u4e00\u4e2a\u7528\u4e8e\u8bfb\u3001\u53e6\u4e00\u4e2a\u7528\u4e8e\u5199"),Object(c.b)("li",{parentName:"ul"},"\u8bfb\u53d6\u65f6\uff0c\u5141\u8bb8\u591a\u4e2a\u7ebf\u7a0b\u8bfb \uff08",Object(c.b)("strong",{parentName:"li"},"\u5171\u4eab\u9501"),"\uff09"),Object(c.b)("li",{parentName:"ul"},"\u5199\u5165\u65f6\uff0c\u53ea\u5141\u8bb8\u4e00\u4e2a\u7ebf\u7a0b\u5199 \uff08",Object(c.b)("strong",{parentName:"li"},"\u72ec\u5360\u9501"),"\uff09\uff08",Object(c.b)("strong",{parentName:"li"},"\u4e92\u65a5\u9501"),"\uff09"))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u4f8b \u81ea\u5b9a\u4e49\u7f13\u5b58"))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'/***\n * \u81ea\u5b9a\u4e49\u7f13\u5b58\n */\nclass MyCache {\n    private volatile Map<String, Object> map = new HashMap<>();\n\n    // \u5b58\uff0c\u5199\u5165\uff0c\u53ea\u5141\u8bb8\u4e00\u4e2a\u7ebf\u7a0b\n    public void put(String key, Object value) {\n        System.out.println(Thread.currentThread().getName() + "\u5199\u5165 -> " + key);\n        map.put(key, value);\n        System.out.println(Thread.currentThread().getName() + "\u5199\u5165\u5b8c\u6bd5-> ");\n    }\n\n    // \u53d6\uff0c\u8bfb\u53d6\uff0c\u5141\u8bb8\u591a\u4e2a\u7ebf\u7a0b\n    public Object get(String key) {\n        System.out.println(Thread.currentThread().getName() + "\u8bfb\u53d6 -> " + key);\n        Object o = map.get(key);\n        System.out.println(Thread.currentThread().getName() + "\u8bfb\u53d6\u5b8c\u6bd5-> ");\n        return o;\n    }\n}\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public static void main(String[] args) {\n    MyCache myCache = new MyCache();\n  \n    //\u5199\u5165\u64cd\u4f5c\n    for (int i = 0; i < 5; i++) {\n      final int tempI = i;\n      new Thread(() -> {\n        myCache.put(tempI + "", tempI);\n      }, "Thread" + i).start();\n    }\n    //\u8bfb\u53d6\u64cd\u4f5c\n    for (int i = 0; i < 5; i++) {\n      final int tempI = i;\n      new Thread(() -> {\n        myCache.get(tempI + "");\n      }, "Thread").start();\n    }\n}\n')),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u8fd0\u884c\u7ed3\u679c")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"Thread0\u5199\u5165 -> 0\nThread3\u5199\u5165 -> 3\nThread2\u5199\u5165 -> 2\nThread1\u5199\u5165 -> 1\nThread1\u5199\u5165\u5b8c\u6bd5-> \nThread2\u5199\u5165\u5b8c\u6bd5-> \nThread3\u5199\u5165\u5b8c\u6bd5-> \nThread0\u5199\u5165\u5b8c\u6bd5-> \nThread4\u5199\u5165 -> 4\nThread4\u5199\u5165\u5b8c\u6bd5-> \nThread\u8bfb\u53d6 -> 0\nThread\u8bfb\u53d6\u5b8c\u6bd5-> \nThread\u8bfb\u53d6 -> 1\nThread\u8bfb\u53d6\u5b8c\u6bd5-> \nThread\u8bfb\u53d6 -> 2\nThread\u8bfb\u53d6\u5b8c\u6bd5-> \nThread\u8bfb\u53d6 -> 3\nThread\u8bfb\u53d6 -> 4\nThread\u8bfb\u53d6\u5b8c\u6bd5-> \nThread\u8bfb\u53d6\u5b8c\u6bd5-> \n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u8fd9\u884c\u7ed3\u679c\u6709\u95ee\u9898\uff0c\u5728\u8fdb\u884c\u4e00\u6b21\u5199\u5165\u65f6\uff0c\u53e6\u4e00\u6b21\u5199\u5165\u53c8\u8fdb\u6765\u4e86")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u7ed9\u81ea\u5b9a\u4e49\u7f13\u5b58\u52a0\u8bfb\u5199\u9501"))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'/***\n * \u5e26\u9501\u81ea\u5b9a\u4e49\u7f13\u5b58\n */\nclass MyCache2 {\n    private volatile Map<String, Object> map = new HashMap<>();\n    private ReentrantReadWriteLock reentrantReadWriteLock = new ReentrantReadWriteLock();\n\n    // \u5b58\uff0c\u5199\u5165\uff0c\u53ea\u5141\u8bb8\u4e00\u4e2a\u7ebf\u7a0b\n    public void put(String key, Object value) {\n        //\u52a0\u5199\u9501\n        reentrantReadWriteLock.writeLock().lock();\n        try {\n            System.out.println(Thread.currentThread().getName() + "\u5199\u5165 -> " + key);\n            map.put(key, value);\n            System.out.println(Thread.currentThread().getName() + "\u5199\u5165\u5b8c\u6bd5-> ");\n        } catch (Exception e) {\n            e.printStackTrace();\n        } finally {\n            // \u91ca\u653e\u5199\u9501\n            reentrantReadWriteLock.writeLock().unlock();\n        }\n    }\n\n    // \u53d6\uff0c\u8bfb\u53d6\uff0c\u5141\u8bb8\u591a\u4e2a\u7ebf\u7a0b\n    public Object get(String key) {\n        Object o = null;\n        reentrantReadWriteLock.readLock().lock();\n        try {\n            System.out.println(Thread.currentThread().getName() + "\u8bfb\u53d6 -> " + key);\n            o = map.get(key);\n            System.out.println(Thread.currentThread().getName() + "\u8bfb\u53d6\u5b8c\u6bd5-> ");\n        } catch (Exception e) {\n            e.printStackTrace();\n        } finally {\n            reentrantReadWriteLock.readLock().unlock();\n        }\n        return o;\n    }\n}\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public static void main(String[] args) {\n    MyCache2 myCache = new MyCache2();\n\n    //\u5199\u5165\u64cd\u4f5c\n    for (int i = 0; i < 5; i++) {\n      final int tempI = i;\n      new Thread(() -> {\n        myCache.put(tempI + "", tempI);\n      }, "Thread" + i).start();\n    }\n    //\u8bfb\u53d6\u64cd\u4f5c\n    for (int i = 0; i < 5; i++) {\n      final int tempI = i;\n      new Thread(() -> {\n        myCache.get(tempI + "");\n      }, "Thread").start();\n    }\n}\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"Thread0\u5199\u5165 -> 0\nThread0\u5199\u5165\u5b8c\u6bd5-> \nThread1\u5199\u5165 -> 1\nThread1\u5199\u5165\u5b8c\u6bd5-> \nThread2\u5199\u5165 -> 2\nThread2\u5199\u5165\u5b8c\u6bd5-> \nThread3\u5199\u5165 -> 3\nThread3\u5199\u5165\u5b8c\u6bd5-> \nThread4\u5199\u5165 -> 4\nThread4\u5199\u5165\u5b8c\u6bd5-> \nThread\u8bfb\u53d6 -> 0\nThread\u8bfb\u53d6\u5b8c\u6bd5-> \nThread\u8bfb\u53d6 -> 1\nThread\u8bfb\u53d6 -> 3\nThread\u8bfb\u53d6 -> 2\nThread\u8bfb\u53d6\u5b8c\u6bd5-> \nThread\u8bfb\u53d6 -> 4\nThread\u8bfb\u53d6\u5b8c\u6bd5-> \nThread\u8bfb\u53d6\u5b8c\u6bd5-> \nThread\u8bfb\u53d6\u5b8c\u6bd5-> \n")),Object(c.b)("blockquote",null,Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u53ef\u4ee5\u770b\u5230\uff0c\u5728\u5199\u5165\u65f6\uff0c\u7ebf\u7a0b\u4e25\u683c\u6392\u961f\u5199\u5165\uff1b\u5728\u8bfb\u53d6\u65f6\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u8bfb")),Object(c.b)("li",{parentName:"ul"},"\u8bfb\u3001\u5199\u4e92\u65a5"))))}b.isMDXComponent=!0}}]);