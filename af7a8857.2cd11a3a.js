(window.webpackJsonp=window.webpackJsonp||[]).push([[345],{401:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return i}));var r=n(2),a=n(6),l=(n(0),n(548)),c={id:"8.callable",title:"Callable",hide_title:!0},u={unversionedId:"juc/8.callable",id:"juc/8.callable",isDocsHomePage:!1,title:"Callable",description:"Callable",source:"@site/docs/juc/8.Callable.md",slug:"/juc/8.callable",permalink:"/docs/juc/8.callable",version:"current",sidebar:"someSidebar",previous:{title:"\u96c6\u5408\u7684\u7ebf\u7a0b\u5b89\u5168\u6027",permalink:"/docs/juc/7.collectionThread"},next:{title:"\u5e38\u7528\u8f85\u52a9\u7c7b",permalink:"/docs/juc/9.helpClass"}},o=[{value:"Callable",id:"callable",children:[{value:"\u7f13\u5b58",id:"\u7f13\u5b58",children:[]}]}],b={rightToc:o};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"callable"},"Callable"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"\u591a\u7ebf\u7a0b\u7684\u7b2c\u4e09\u79cd\u521b\u5efa\u65b9\u5f0f")),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u6709\u8fd4\u56de\u503c"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u629b\u51fa\u5f02\u5e38"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u6cdb\u578b"),Object(l.b)("li",{parentName:"ul"},"\u65b9\u6cd5\u4e0d\u540c run() / call()"))),Object(l.b)("blockquote",null,Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"Thread\u80fd\u63a5\u6536Runnable"),Object(l.b)("li",{parentName:"ul"},"Callable\u65e0\u6cd5\u76f4\u63a5\u542f\u52a8\uff0c\u4e3a\u4e86\u6574\u5230Thread\u4e0a\uff0c\u9700\u8981\u627eRunnable"),Object(l.b)("li",{parentName:"ul"},"Runnable\u6709\u4e00\u4e9b\u9ed8\u8ba4\u7684\u5b9e\u73b0\u7c7b\uff1a",Object(l.b)("inlineCode",{parentName:"li"},"FutureTask")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"FutureTask"),"\u53ef\u4ee5\u63a5\u6536",Object(l.b)("inlineCode",{parentName:"li"},"Callable"),"\u53c2\u6570\uff1a",Object(l.b)("inlineCode",{parentName:"li"},"FutureTask(Callable<V> callable)")))),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class Demo04Callable2 {\n    public static void main(String[] args) throws ExecutionException, InterruptedException {\n        FutureTask futureTask = new FutureTask(new myCallable());\n\n        new Thread(futureTask).start();\n        Integer result = (Integer) futureTask.get();\n        System.out.println(result);\n    }\n}\n\nclass myCallable implements Callable<Integer>{\n    @Override\n    public Integer call() throws Exception {\n        System.out.println("call method");\n        return 123;\n    }\n}\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"call method\n123\n")),Object(l.b)("h2",{id:"\u7f13\u5b58"},"\u7f13\u5b58"),Object(l.b)("blockquote",null,Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"\u5f00\u4e24\u4e2a\u7ebf\u7a0b\uff0c\u4f7f\u7528\u540c\u4e00\u4e2aFutureTask\uff0c\u53ea\u4f1a\u6267\u884c\u4e00\u6b21call\u65b9\u6cd5"),Object(l.b)("li",{parentName:"ul"},"\u56e0\u4e3a\u5b83\u6709\u7f13\u5b58"),Object(l.b)("li",{parentName:"ul"},"\u7ed3\u679c\u53ef\u80fd\u9700\u8981\u7b49\u5f85\uff0c\u4f1a\u963b\u585e"))),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class Demo04Callable2 {\n    public static void main(String[] args) throws ExecutionException, InterruptedException {\n        FutureTask futureTask = new FutureTask(new myCallable());\n\n        new Thread(futureTask,"A").start();\n        new Thread(futureTask,"B").start();\n        Integer result = (Integer) futureTask.get();\n        System.out.println(result);\n    }\n}\n\nclass myCallable implements Callable<Integer>{\n    @Override\n    public Integer call() throws Exception {\n        System.out.println("call method");\n        return 123;\n    }\n}\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"call method\n123\n")))}i.isMDXComponent=!0},548:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),i=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=i(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=i(n),m=r,d=p["".concat(c,".").concat(m)]||p[m]||s[m]||l;return n?a.a.createElement(d,u(u({ref:t},b),{},{components:n})):a.a.createElement(d,u({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,c[1]=u;for(var b=2;b<l;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);