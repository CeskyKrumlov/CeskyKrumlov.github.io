(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{362:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=i(n),O=a,m=p["".concat(b,".").concat(O)]||p[O]||j[O]||l;return n?r.a.createElement(m,u(u({ref:t},o),{},{components:n})):r.a.createElement(m,u({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=O;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,b[1]=u;for(var o=2;o<l;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return o}));var a=n(2),r=(n(0),n(362));const l={id:"11.blockingQueue",title:"\u963b\u585e\u961f\u5217",hide_title:!0},b={unversionedId:"juc/11.blockingQueue",id:"juc/11.blockingQueue",isDocsHomePage:!1,title:"\u963b\u585e\u961f\u5217",description:"\u963b\u585e\u961f\u5217",source:"@site/docs/juc/11.\u963b\u585e\u961f\u5217.md",slug:"/juc/11.blockingQueue",permalink:"/docs/juc/11.blockingQueue",version:"current",sidebar:"someSidebar",previous:{title:"\u8bfb\u5199\u9501",permalink:"/docs/juc/10.readWriteLock"},next:{title:"\u7ebf\u7a0b\u6c60",permalink:"/docs/juc/12.threadPool"}},u=[{value:"\u963b\u585e\u961f\u5217",id:"\u963b\u585e\u961f\u5217",children:[{value:"Interface BlockingDeque",id:"interface-blockingdeque",children:[]},{value:"\u56db\u7ec4API",id:"\u56db\u7ec4api",children:[{value:"1. \u629b\u51fa\u5f02\u5e38",id:"1-\u629b\u51fa\u5f02\u5e38",children:[]},{value:"2. \u4e0d\u4f1a\u629b\u51fa\u5f02\u5e38",id:"2-\u4e0d\u4f1a\u629b\u51fa\u5f02\u5e38",children:[]},{value:"3. \u963b\u585e\u7b49\u5f85",id:"3-\u963b\u585e\u7b49\u5f85",children:[]},{value:"4. \u8d85\u65f6\u7b49\u5f85",id:"4-\u8d85\u65f6\u7b49\u5f85",children:[]}]},{value:"Class SynchronousQueue",id:"class-synchronousqueue",children:[]}]}],c={rightToc:u};function o({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"\u963b\u585e\u961f\u5217"},"\u963b\u585e\u961f\u5217"),Object(r.b)("blockquote",null,Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u963b\u585e"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5199\u5165\uff1a\u5982\u679c\u961f\u5217\u6ee1\u4e86\uff0c\u5c31\u963b\u585e\uff0c\u7b49\u5f85\u961f\u5217\u4e2d\u7684\u4e1c\u897f\u88ab\u53d6\u8d70"),Object(r.b)("li",{parentName:"ul"},"\u8bfb\u53d6\uff1a\u5982\u679c\u961f\u5217\u4e3a\u7a7a\uff0c\u5c31\u963b\u585e\uff0c\u7b49\u5f85\u961f\u5217\u4e2d\u6709\u4e1c\u897f"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u961f\u5217"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5148\u8fdb\u5148\u51fa FIFO"))))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u4ec0\u4e48\u573a\u666f\u9700\u8981\u4f7f\u7528\u963b\u585e\u961f\u5217\uff1f")),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u591a\u7ebf\u7a0b\u5e76\u53d1"),Object(r.b)("li",{parentName:"ul"},"\u7ebf\u7a0b\u6c60"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u5b66\u4f1a\u4f7f\u7528\u961f\u5217\u6dfb\u52a0\u5143\u7d20\u548c\u5220\u9664\u5143\u7d20"))),Object(r.b)("h2",{id:"interface-blockingdeque"},"Interface BlockingDeque"),Object(r.b)("blockquote",null,Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u7ee7\u627f\u81ea",Object(r.b)("inlineCode",{parentName:"li"},"Queue"),"\u63a5\u53e3"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Queue"),"\u63a5\u53e3\u7ee7\u627f\u81ea",Object(r.b)("inlineCode",{parentName:"li"},"Collection"),"\u63a5\u53e3\uff0c\u4e0e",Object(r.b)("inlineCode",{parentName:"li"},"List"),"\u548c",Object(r.b)("inlineCode",{parentName:"li"},"Set"),"\u63a5\u53e3\u540c\u7ea7"),Object(r.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u7c7b\uff1a",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"ArrayBlockingQueue"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"DelayQueue")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"LinkedBlockingDeque")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"LinkedBlockingQueue"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"LinkedTransferQueue")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PriorityBlockingQueue")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"SynchronousQueue")),"\u2014\u2014\u540c\u6b65\u961f\u5217"))))),Object(r.b)("h2",{id:"\u56db\u7ec4api"},"\u56db\u7ec4API"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u65b9\u5f0f"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u629b\u51fa\u5f02\u5e38"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u6709\u8fd4\u56de\u503c\uff08\u4e0d\u62a5\u9519\uff09"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u963b\u585e\u7b49\u5f85"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u8d85\u65f6\u7b49\u5f85"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u6dfb\u52a0"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"add()"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"offer()"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"put()"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"offer(obj, \u8d85\u65f6\u65f6\u95f4, \u65f6\u95f4\u5355\u4f4d)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u79fb\u9664"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"remove()"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"poll()"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"take()"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"poll(\u8d85\u65f6\u65f6\u95f4, \u65f6\u95f4\u5355\u4f4d)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5224\u65ad\u961f\u5217\u9996"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"element()"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"peek()"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")))),Object(r.b)("h3",{id:"1-\u629b\u51fa\u5f02\u5e38"},"1. \u629b\u51fa\u5f02\u5e38"),Object(r.b)("blockquote",null,Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u5b9a\u4e49\u4e00\u4e2a",Object(r.b)("inlineCode",{parentName:"li"},"ArrayBlockingQueue"),"\uff0c\u521d\u59cb\u5bb9\u91cf\u4e3a",Object(r.b)("inlineCode",{parentName:"li"},"3")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u5b58"),Object(r.b)("inlineCode",{parentName:"li"},"4"),"\u4e2a\u5143\u7d20\uff0c\u5219\u4f1a\u629b\u51fa",Object(r.b)("inlineCode",{parentName:"li"},"Queue full"),"\u7684\u5f02\u5e38"),Object(r.b)("li",{parentName:"ul"},"\u6dfb\u52a0",Object(r.b)("inlineCode",{parentName:"li"},"add()")),Object(r.b)("li",{parentName:"ul"},"\u79fb\u9664",Object(r.b)("inlineCode",{parentName:"li"},"remove()")),Object(r.b)("li",{parentName:"ul"},"\u961f\u9996",Object(r.b)("inlineCode",{parentName:"li"},"element()")))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void test1() {\n    // \u5b9a\u4e49\u961f\u5217\u5927\u5c0f\n    ArrayBlockingQueue arrayBlockingQueue = new ArrayBlockingQueue<>(3);\n    boolean result1 = arrayBlockingQueue.add("A");\n    boolean result2 = arrayBlockingQueue.add("B");\n    boolean result3 = arrayBlockingQueue.add("C");\n    boolean result4 = arrayBlockingQueue.add("D");\n    // \u629b\u51fa\u5f02\u5e38\n    System.out.println(result1);\n    System.out.println(result2);\n    System.out.println(result3);\n    System.out.println(result4);\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"java.lang.IllegalStateException: Queue full\n")),Object(r.b)("blockquote",null,Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u518d\u6d4b\u8bd5",Object(r.b)("strong",{parentName:"li"},"\u53d6"),"\u5143\u7d20"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"remove()"),"\uff0c\u6ca1\u6709\u53c2\u6570\uff0c\u76f4\u63a5\u5f39\u51fa\u961f\u5217\u5c3e\u7684\u5143\u7d20\uff0c\u5e76\u8fd4\u56de"),Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u79fb\u9664",Object(r.b)("inlineCode",{parentName:"li"},"4"),"\u4e2a\u5143\u7d20\uff0c\u5c31\u4f1a\u629b\u51fa\u5f02\u5e38"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void test1() {\n    // \u5b9a\u4e49\u961f\u5217\u5927\u5c0f\n    ArrayBlockingQueue arrayBlockingQueue = new ArrayBlockingQueue<>(3);\n    boolean result1 = arrayBlockingQueue.add("A");\n    boolean result2 = arrayBlockingQueue.add("B");\n    boolean result3 = arrayBlockingQueue.add("C");\n    // \u629b\u51fa\u5f02\u5e38\n    System.out.println(result1);\n    System.out.println(result2);\n    System.out.println(result3);\n    System.out.println("===========");\n    // \u79fb\u9664\u5143\u7d20\n    Object remove1 = arrayBlockingQueue.remove();\n    Object remove2 = arrayBlockingQueue.remove();\n    Object remove3 = arrayBlockingQueue.remove();\n    Object remove4 = arrayBlockingQueue.remove();\n  \n    System.out.println(remove1);\n    System.out.println(remove2);\n    System.out.println(remove3);\n    System.out.println(remove4);\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"java.util.NoSuchElementException\n")),Object(r.b)("h3",{id:"2-\u4e0d\u4f1a\u629b\u51fa\u5f02\u5e38"},"2. \u4e0d\u4f1a\u629b\u51fa\u5f02\u5e38"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u4e0d\u4f1a\u629b\u51fa\u5f02\u5e38\uff0c\u800c\u662f\u53cd\u6620\u5728\u8fd4\u56de\u503c\u4e0a"),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u6dfb\u52a0",Object(r.b)("inlineCode",{parentName:"li"},"offer()")),Object(r.b)("li",{parentName:"ul"},"\u79fb\u9664",Object(r.b)("inlineCode",{parentName:"li"},"poll()")),Object(r.b)("li",{parentName:"ul"},"\u961f\u9996",Object(r.b)("inlineCode",{parentName:"li"},"peek()")))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'/***\n * \u4e0d\u4f1a\u629b\u51fa\u5f02\u5e38\n */\n@Test\npublic void test2() {\n    ArrayBlockingQueue<Object> arrayBlockingQueue = new ArrayBlockingQueue<>(3);\n    boolean result1 = arrayBlockingQueue.offer("A");\n    boolean result2 = arrayBlockingQueue.offer("B");\n    boolean result3 = arrayBlockingQueue.offer("C");\n    boolean result4 = arrayBlockingQueue.offer("D");\n  \n    System.out.println(result1);\n    System.out.println(result2);\n    System.out.println(result3);\n    System.out.println(result4);\n  \n    System.out.println("=============");\n  \n    Object poll1 = arrayBlockingQueue.poll();\n    Object poll2 = arrayBlockingQueue.poll();\n    Object poll3 = arrayBlockingQueue.poll();\n    Object poll4 = arrayBlockingQueue.poll();\n  \n    System.out.println(poll1);\n    System.out.println(poll2);\n    System.out.println(poll3);\n    System.out.println(poll4);\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"true\ntrue\ntrue\nfalse\n=============\nA\nB\nC\nnull\n")),Object(r.b)("h3",{id:"3-\u963b\u585e\u7b49\u5f85"},"3. \u963b\u585e\u7b49\u5f85"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u961f\u5217\u6ee1\u4e86\u3001\u6216\u8005\u4e3a\u7a7a\uff0c\u5bf9\u5e94\u7684\u8bfb\u5199\u64cd\u4f5c\u5c31\u963b\u585e\uff0c\u5f00\u59cb\u7b49\u5f85")),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u4e00\u76f4\u963b\u585e\u7b49\u5f85"),Object(r.b)("li",{parentName:"ul"},"\u963b\u585e\u7b49\u5f85\u4e00\u7aef\u65f6\u95f4"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"put()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"take()")))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void test3() throws InterruptedException {\n    ArrayBlockingQueue<Object> arrayBlockingQueue = new ArrayBlockingQueue<>(3);\n    arrayBlockingQueue.put("A");\n    arrayBlockingQueue.put("B");\n    arrayBlockingQueue.put("C");\n  \n    Object take1 = arrayBlockingQueue.take();\n    Object take2 = arrayBlockingQueue.take();\n    Object take3 = arrayBlockingQueue.take();\n    Object take4 = arrayBlockingQueue.take();\n}\n')),Object(r.b)("p",null,"\u7a0b\u5e8f\u4e0d\u4f1a\u62a5\u9519\uff0c\u4e5f\u4e0d\u4f1a\u6267\u884c\u5b8c\u6bd5\uff0c\u800c\u662f\u8fdb\u5165\u963b\u585e\u7b49\u5f85\u7684\u72b6\u6001"),Object(r.b)("h3",{id:"4-\u8d85\u65f6\u7b49\u5f85"},"4. \u8d85\u65f6\u7b49\u5f85"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u7b49\u5f85\u8d85\u8fc7\u6307\u5b9a\u65f6\u95f4\uff0c\u5219\u8fd4\u56defalse\u6216null"),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"offer(obj, \u65f6\u95f4, \u65f6\u95f4\u5355\u4f4d)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"poll(\u65f6\u95f4\uff0c\u65f6\u95f4\u5355\u4f4d)")))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void test4() throws InterruptedException {\n    ArrayBlockingQueue<Object> arrayBlockingQueue = new ArrayBlockingQueue<>(3);\n  \n    arrayBlockingQueue.offer("A");\n    arrayBlockingQueue.offer("B");\n    arrayBlockingQueue.offer("C");\n    arrayBlockingQueue.offer("D",2,TimeUnit.SECONDS);\n  \n    System.out.println(arrayBlockingQueue.poll());\n    System.out.println(arrayBlockingQueue.poll());\n    System.out.println(arrayBlockingQueue.poll());\n    System.out.println(arrayBlockingQueue.poll(2,TimeUnit.SECONDS));\n}\n')),Object(r.b)("h2",{id:"class-synchronousqueue"},"Class SynchronousQueue"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u540c\u6b65\u961f\u5217"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5bb9\u91cf\u4e3a1\uff0c\u6dfb\u52a0\u4e00\u4e2a\u5143\u7d20\uff0c\u5fc5\u987b\u7b49\u5f85\u53d6\u51fa\u6765\u4e4b\u540e\uff0c\u624d\u80fd\u518d\u5f80\u91cc\u9762\u653e"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"put()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"take()"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public static void main(String[] args) {\n  BlockingQueue<String> blockingQueue = new SynchronousQueue<>();\n\n  new Thread(() -> {\n    try {\n      System.out.println(Thread.currentThread().getName() + " put 1");\n      blockingQueue.put("1");\n      System.out.println(Thread.currentThread().getName() + " put 2");\n      blockingQueue.put("2");\n      System.out.println(Thread.currentThread().getName() + " put 3");\n      blockingQueue.put("3");\n    } catch (InterruptedException e) {\n      e.printStackTrace();\n    }\n  }, "T1").start();\n\n  new Thread(() -> {\n    try {\n      TimeUnit.SECONDS.sleep(3);\n      System.out.println(Thread.currentThread().getName() + " | " + blockingQueue.take());\n      TimeUnit.SECONDS.sleep(3);\n      System.out.println(Thread.currentThread().getName() + " | " + blockingQueue.take());\n      TimeUnit.SECONDS.sleep(3);\n      System.out.println(Thread.currentThread().getName() + " | " + blockingQueue.take());\n    } catch (InterruptedException e) {\n      e.printStackTrace();\n    }\n  }, "T2").start();\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"T1 put 1\nT2 | 1\nT1 put 2\nT2 | 2\nT1 put 3\nT2 | 3\n")))}o.isMDXComponent=!0}}]);