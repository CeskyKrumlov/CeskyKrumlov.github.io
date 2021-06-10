(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{356:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(6),o=(t(0),t(502)),c={id:"16.forkjoin",title:"ForkJoin",hide_title:!0},i={unversionedId:"juc/16.forkjoin",id:"juc/16.forkjoin",isDocsHomePage:!1,title:"ForkJoin",description:"ForkJoin",source:"@site/docs/juc/16.ForkJoin.md",slug:"/juc/16.forkjoin",permalink:"/docs/juc/16.forkjoin",version:"current",sidebar:"someSidebar",previous:{title:"\u7ebf\u7a0b\u6c60",permalink:"/docs/juc/12.threadPool"},next:{title:"\u5f02\u6b65\u56de\u8c03",permalink:"/docs/juc/17.asyncCallBack"}},l=[{value:"ForkJoin",id:"forkjoin",children:[]},{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",children:[]},{value:"\u4f8b\uff1a\u6c42\u548c",id:"\u4f8b\uff1a\u6c42\u548c",children:[{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",children:[]}]}],b={rightToc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"forkjoin"},"ForkJoin"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"\u5206\u652f\u5408\u5e76\u2014\u2014\u5206\u6cbb\u6cd5")),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"JDK 1.7"),Object(o.b)("li",{parentName:"ul"},"\u5e76\u884c\u6267\u884c\u4efb\u52a1\uff0c\u5728\u5927\u6570\u636e\u65f6\u63d0\u9ad8\u6548\u7387"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"\u5de5\u4f5c\u7a83\u53d6")),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u4e24\u4e2a\u7ebf\u7a0b\uff0c\u5176\u4e2d\u4e00\u4e2a\u8dd1\u5b8c\u4e86\u81ea\u5df1\u7684\u4ee3\u7801\uff0c\u53e6\u4e00\u4e2a\u8dd1\u4e86\u4e00\u534a")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u8dd1\u5b8c\u7684\u8fd9\u4e2a\u7ebf\u7a0b\u53ef\u4ee5\u628a\u6ca1\u8dd1\u5b8c\u7684\u90a3\u4e2a\u7684\u4ee3\u7801\u5077\u8fc7\u6765\u5e2e\u4ed6\u8dd1\u4e86")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"\u901a\u8fc7\u7ef4\u62a4\u53cc\u7aef\u961f\u5217\u5b9e\u73b0"))))),Object(o.b)("h1",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),Object(o.b)("blockquote",null,Object(o.b)("ol",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ol"},"\u901a\u8fc7",Object(o.b)("inlineCode",{parentName:"li"},"ForkJoinPool"),"\u6267\u884c"),Object(o.b)("li",{parentName:"ol"},"\u8c03\u7528",Object(o.b)("inlineCode",{parentName:"li"},"void execute(ForkJoinTask<?> task)")),Object(o.b)("li",{parentName:"ol"},"\u5b9a\u4e49",Object(o.b)("inlineCode",{parentName:"li"},"ForkJoinTask"),"\u4efb\u52a1\uff0c\u5b83\u662f\u4e00\u4e2a\u7c7b",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5b50\u7c7b\uff1a",Object(o.b)("inlineCode",{parentName:"li"},"RecusiveAction"),"\u9012\u5f52\u4e8b\u4ef6\uff0c\u6ca1\u6709\u8fd4\u56de\u503c"),Object(o.b)("li",{parentName:"ul"},"\u5b50\u7c7b\uff1a",Object(o.b)("inlineCode",{parentName:"li"},"RecusiveTask"),"\u9012\u5f52\u4efb\u52a1\uff0c\u6709\u8fd4\u56de\u503c"))),Object(o.b)("li",{parentName:"ol"},"\u7ee7\u627f",Object(o.b)("inlineCode",{parentName:"li"},"RecusiveTask"),"\uff0c\u91cd\u5199",Object(o.b)("inlineCode",{parentName:"li"},"compute()"),"\u65b9\u6cd5"))),Object(o.b)("h1",{id:"\u4f8b\uff1a\u6c42\u548c"},"\u4f8b\uff1a\u6c42\u548c"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u4f4e\u7aef\u5199\u6cd5")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// \u6c42\u548c\u8ba1\u7b97\u4efb\u52a1\nint sum = 0;\nfor (int i = 0; i < 10_0000_0000; i++) {\n    sum += i;\n}\nSystem.out.println(sum);\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"ForkJoin")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public class Demo extends RecursiveTask<Long> {\n    private long start;\n    private long end;\n    // \u4e34\u754c\u503c\n    private long temp = 1_0000L;\n\n    public Demo(long start, long end) {\n        this.start = start;\n        this.end = end;\n    }\n\n    @Override\n    protected Long compute() {\n        if (end - start < temp) { //\u5982\u679c\u5dee\u503c\u5f88\u5c0f\uff0c\u76f4\u63a5\u7b97\n            long sum = 0L;\n            for (long i = start; i <= end; i++) {\n                sum += i;\n            }\n            return sum;\n        } else { // \u5426\u5219\u5206\u6cbb\n            long middle = (start + end) / 2;  // \u4e2d\u95f4\u503c\n            Demo recusiveTask1 = new Demo(start, middle);\n            Demo recusiveTask2 = new Demo(middle + 1, end);\n\n            recusiveTask1.fork(); //\u62c6\u5206\u4efb\u52a1\uff0c\u5c06\u4efb\u52a1\u538b\u5165\u7ebf\u7a0b\u961f\u5217\n            recusiveTask2.fork(); //\u62c6\u5206\u4efb\u52a1\uff0c\u5c06\u4efb\u52a1\u538b\u5165\u7ebf\u7a0b\u961f\u5217\n            // \u5408\u5e76\u5e76\u8fd4\u56de\n            return recusiveTask1.join() + recusiveTask2.join();\n        }\n    }\n}\n")),Object(o.b)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u4f4e\u7aef\u65b9\u6cd5")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public static void test1() {\n    long start = System.currentTimeMillis();\n  \n    long sum = 0L;\n    for (long i = 0L; i < 10_0000_0000; i++) {\n      sum += i;\n    }\n  \n    long end = System.currentTimeMillis();\n    System.out.println("sum = " + sum + " | \u65f6\u95f4\uff1a" + (end - start));\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"sum = 499999999500000000 | \u65f6\u95f4\uff1a302\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"ForkJoin")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public static void test2() throws ExecutionException, InterruptedException {\n    long start = System.currentTimeMillis();\n\n    ForkJoinTask<Long> task = new Demo(0L, 10_0000_0000L);\n    ForkJoinTask<Long> submit = new ForkJoinPool().submit(task);\n    long sum = submit.get();\n\n    long end = System.currentTimeMillis();\n    System.out.println("sum = " + sum + " | \u65f6\u95f4\uff1a" + (end - start));\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"sum = 500000000500000000 | \u65f6\u95f4\uff1a216\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Stream\u5e76\u884c\u6d41")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public static void test3() {\n    long start = System.currentTimeMillis();\n\n    long sum = LongStream.rangeClosed(0L, 10_0000_0000L)\n      .parallel()\n      .reduce(0, (a, b) -> Long.sum(a, b));\n\n    long end = System.currentTimeMillis();\n    System.out.println("sum = " + sum + " | \u65f6\u95f4\uff1a" + (end - start));\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"sum = 500000000500000000 | \u65f6\u95f4\uff1a214\n")))}u.isMDXComponent=!0},502:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return j}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),u=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=u(t),m=r,j=s["".concat(c,".").concat(m)]||s[m]||p[m]||o;return t?a.a.createElement(j,i(i({ref:n},b),{},{components:t})):a.a.createElement(j,i({ref:n},b))}));function j(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<o;b++)c[b]=t[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);