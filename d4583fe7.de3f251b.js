(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{317:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(375)),c={id:"7.collectionThread",title:"\u96c6\u5408\u7684\u7ebf\u7a0b\u5b89\u5168\u6027",hide_title:!0},l={unversionedId:"juc/7.collectionThread",id:"juc/7.collectionThread",isDocsHomePage:!1,title:"\u96c6\u5408\u7684\u7ebf\u7a0b\u5b89\u5168\u6027",description:"\u96c6\u5408\u7684\u7ebf\u7a0b\u5b89\u5168\u6027",source:"@site/docs/juc/7.\u96c6\u5408\u7ebf\u7a0b\u5b89\u5168\u6027.md",slug:"/juc/7.collectionThread",permalink:"/docs/juc/7.collectionThread",version:"current",sidebar:"someSidebar",previous:{title:"\u516b\u9501\u73b0\u8c61",permalink:"/docs/juc/6.eightLocks"},next:{title:"Callable",permalink:"/docs/juc/8.callable"}},o=[{value:"\u96c6\u5408\u7684\u7ebf\u7a0b\u5b89\u5168\u6027",id:"\u96c6\u5408\u7684\u7ebf\u7a0b\u5b89\u5168\u6027",children:[{value:"List\u2014\u2014CopyOnWriteArrayList",id:"listcopyonwritearraylist",children:[{value:"\u4e3a\u4ec0\u4e48\u7528CopyOnWriteArrayList\uff0c\u800c\u4e0d\u7528Vectoc\uff1f",id:"\u4e3a\u4ec0\u4e48\u7528copyonwritearraylist\uff0c\u800c\u4e0d\u7528vectoc\uff1f",children:[]}]},{value:"Set\u2014\u2014CopyOnWriteSet",id:"setcopyonwriteset",children:[]},{value:"Map\u2014\u2014ConcurrentHashMap",id:"mapconcurrenthashmap",children:[]}]}],b={rightToc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u96c6\u5408\u7684\u7ebf\u7a0b\u5b89\u5168\u6027"},"\u96c6\u5408\u7684\u7ebf\u7a0b\u5b89\u5168\u6027"),Object(i.b)("h2",{id:"listcopyonwritearraylist"},"List\u2014\u2014CopyOnWriteArrayList"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u9ed8\u8ba4\u7ebf\u7a0b\u4e0d\u5b89\u5168"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class Demo01List {\n    public static void main(String[] args) {\n        List<String> list = Arrays.asList("1", "2", "3");\n        list.forEach(System.out::println);\n    }\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"1\n2\n3\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u5199\u4e00\u4e2a\u591a\u7ebf\u7a0b\u7684\u4f8b\u5b50")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class Demo01List {\n    public static void main(String[] args) {\n        List<String> list = new ArrayList<>();\n\n        for (int i = 1; i < 200; i++) {\n            new Thread(() -> {\n                list.add(UUID.randomUUID().toString().substring(0, 5));\n                System.out.println(Thread.currentThread().getName() + "  | " + list);\n            }, "Thread" + i).start();\n        }\n    }\n}\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u4f1a\u51fa\u73b0\u62a5\u9519"),Object(i.b)("inlineCode",{parentName:"p"},"ConcurrentModificationException"),"\u2014\u2014",Object(i.b)("strong",{parentName:"p"},"\u5e76\u53d1\u4fee\u6539\u5f02\u5e38")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'Exception in thread "Thread190" Exception in thread "Thread184" java.util.ConcurrentModificationException\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u89e3\u51b3\u65b9\u6848")),Object(i.b)("ol",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"p"},"Vector"),"\uff0c\u9ed8\u8ba4\u7ebf\u7a0b\u5b89\u5168\uff0c\u57fa\u4e8esynchronized\u5b9e\u73b0\uff0c\u4f46\u662f\u8fd9\u4e1c\u897f\u6548\u7387\u4e0d\u884c\uff0c\u6ca1\u4eba\u7528"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Vector"),"\u51fa\u73b0\u5728JDK1.0"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ArrayList"),"\u51fa\u73b0\u5728JDK1.2"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"p"},"Collections"),"\u5de5\u5177\u7c7b\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"Collections.synchronizedXXX"),"\u96c6\u5408")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"\u4f7f\u7528JUC\u7684",Object(i.b)("inlineCode",{parentName:"p"},"CopyOnWriteArrayList"),"\uff0c\u57fa\u4e8eLock\u9501\u5b9e\u73b0\uff081.8\uff09\u3001JDK11\u91cc\u53c8\u5f04\u6210synchronized\u5b9e\u73b0\u4e86"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5e95\u5c42\u4f7f\u7528\u4e86",Object(i.b)("inlineCode",{parentName:"li"},"transient"),"\u548c",Object(i.b)("inlineCode",{parentName:"li"},"volatile")),Object(i.b)("li",{parentName:"ul"},"\u5199\u5165\u65f6\u590d\u5236\u3001COW(Copy On Write)\uff0c\u4e00\u79cd\u6548\u7387\u4f18\u5316\u7b56\u7565 \uff08\u5f15\u51fa\u65b0\u77e5\u8bc6\u70b9\uff0c\u8bfb\u5199\u5206\u79bb\uff0cMycat\u7b49\uff09",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8bfb\u53d6\uff0c\u662f\u56fa\u5b9a\u7684"),Object(i.b)("li",{parentName:"ul"},"\u5199\u5165\uff0c\u53ef\u80fd\u53d1\u751f\u540e\u5199\u7684\u628a\u524d\u9762\u7684\u4e1c\u897f",Object(i.b)("strong",{parentName:"li"},"\u8986\u76d6"),"\u4e86\uff0c\u89e3\u51b3\u65b9\u6cd5\uff1a",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u590d\u5236\u4e00\u4efd\uff0c\u8ba9\u8c03\u7528\u8005\u5199\uff0c\u5199\u597d\u4e86\u518d\u653e\u56de\u53bb"))))),Object(i.b)("li",{parentName:"ul"},"\u5173\u952e\u6e90\u7801")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public boolean add(E e) {\n    final ReentrantLock lock = this.lock;\n    lock.lock();\n    try {\n      Object[] elements = getArray();\n      int len = elements.length;\n      Object[] newElements = Arrays.copyOf(elements, len + 1);  // \u5148\u590d\u5236\n      newElements[len] = e;  // \u5728\u590d\u5236\u7684\u4e0a\u9762\u5199\n      setArray(newElements); // \u5199\u5b8c\u518d\u6254\u56de\u53bb\n      return true;\n    } finally {\n      lock.unlock();\n    }\n}\n"))))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u4f7f\u7528Collections\u5de5\u5177\u7c7b\uff0c\u5b9e\u73b0\u7ebf\u7a0b\u5b89\u5168"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void Test2() {\n   List<String> list = Collections.synchronizedList(new ArrayList<>());\n\n   for (int i = 1; i < 200; i++) {\n     new Thread(() -> {\n       list.add(UUID.randomUUID().toString().substring(0, 5));\n       System.out.println(Thread.currentThread().getName() + "  | " + list);\n     }, "Thread" + i).start();\n   }\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u4f7f\u7528CopyOnWriteArrayList"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void Test3() {\n    List<String> list = new CopyOnWriteArrayList<>();\n  \n    for (int i = 1; i < 200; i++) {\n      new Thread(() -> {\n        list.add(UUID.randomUUID().toString().substring(0, 5));\n        System.out.println(Thread.currentThread().getName() + "  | " + list);\n      }, "Thread" + i).start();\n    }\n}\n')),Object(i.b)("h3",{id:"\u4e3a\u4ec0\u4e48\u7528copyonwritearraylist\uff0c\u800c\u4e0d\u7528vectoc\uff1f"},"\u4e3a\u4ec0\u4e48\u7528CopyOnWriteArrayList\uff0c\u800c\u4e0d\u7528Vectoc\uff1f"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Vector\u57fa\u4e8esynchronized\uff1bCopyOnWriteArrayList\u57fa\u4e8eLock\u9501")),Object(i.b)("h2",{id:"setcopyonwriteset"},"Set\u2014\u2014CopyOnWriteSet"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"HashSet"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void Test1() {\n    Set<String> set = new HashSet<>();\n \n    for (int i = 0; i < 100; i++) {\n      new Thread(() -> {\n        set.add(UUID.randomUUID().toString().substring(0, 5));\n        System.out.println(Thread.currentThread().getName() + set);\n      }, "Thread" + i).start();\n    }\n}\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u62a5\u9519")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Collections.synchronizedSet")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void Test2() {\n    Set<String> set = Collections.synchronizedSet(new HashSet<>());\n\n    for (int i = 0; i < 200; i++) {\n      new Thread(() -> {\n        set.add(UUID.randomUUID().toString().substring(0, 5));\n        System.out.println(Thread.currentThread().getName() + set);\n      }, "Thread" + i).start();\n    }\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"CopyOnWriteSet")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void Test3() {\n    Set<String> set = new CopyOnWriteArraySet<>();\n\n    for (int i = 0; i < 200; i++) {\n      new Thread(() -> {\n        set.add(UUID.randomUUID().toString().substring(0, 5));\n        System.out.println(Thread.currentThread().getName() + set);\n      }, "Thread" + i).start();\n    }\n}\n')),Object(i.b)("h2",{id:"mapconcurrenthashmap"},"Map\u2014\u2014ConcurrentHashMap"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"HashMap")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void test1() {\n    Map<String, String> map = new HashMap();\n\n    for (int i = 0; i < 150; i++) {\n      new Thread(() -> {\n        map.put(Thread.currentThread().getName(),\n                UUID.randomUUID().toString().substring(0, 5));\n        System.out.println(map);\n      }, "Thread" + i).start();\n    }\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Collections.synchronizedMap")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void test2() {\n    Map<String, String> map = Collections.synchronizedMap(new HashMap<>());\n\n    for (int i = 0; i < 150; i++) {\n      new Thread(() -> {\n        map.put(Thread.currentThread().getName(), UUID.randomUUID().toString().substring(0, 5));\n        System.out.println(map);\n      }, "Thread" + i).start();\n    }\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ConcurrentHashMap")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void test3() {\n    Map<String, String> map = new ConcurrentHashMap<>();\n\n    for (int i = 0; i < 150; i++) {\n      new Thread(() -> {\n        map.put(Thread.currentThread().getName(), UUID.randomUUID().toString().substring(0, 5));\n        System.out.println(map);\n      }, "Thread" + i).start();\n    }\n}\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u5b9e\u73b0\u539f\u7406\u2014\u2014\u5206\u6bb5\u9501")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.jianshu.com/p/d10256f0ebea"}),"ConcurrentHashMap\u539f\u7406\u89e3\u6790")))))}p.isMDXComponent=!0},375:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,d=s["".concat(c,".").concat(m)]||s[m]||u[m]||i;return n?a.a.createElement(d,l(l({ref:t},b),{},{components:n})):a.a.createElement(d,l({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var b=2;b<i;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);