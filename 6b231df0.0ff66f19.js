(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{261:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return u}));var i=t(2),r=t(6),a=(t(0),t(520)),c={id:"1.fibonaccisequence",title:"\u6590\u6ce2\u90a3\u5951\u6570\u5217",hide_title:!0},l={unversionedId:"sf/1.fibonaccisequence",id:"sf/1.fibonaccisequence",isDocsHomePage:!1,title:"\u6590\u6ce2\u90a3\u5951\u6570\u5217",description:"\u6590\u6ce2\u90a3\u5951\u6570\u5217",source:"@site/datastructure/sf/\u6590\u6ce2\u90a3\u5951\u6570\u5217.md",slug:"/sf/1.fibonaccisequence",permalink:"/datastructure/sf/1.fibonaccisequence",version:"current",sidebar:"docs2",previous:{title:"\u7b80\u4ecb",permalink:"/datastructure/"},next:{title:"\u52a8\u6001\u6570\u7ec4\u7b80\u5355\u5b9e\u73b0",permalink:"/datastructure/sf/\u6570\u7ec4/1.array"}},b=[{value:"\u6590\u6ce2\u90a3\u5951\u6570\u5217",id:"\u6590\u6ce2\u90a3\u5951\u6570\u5217",children:[{value:"\u6c42\u7b2cn\u4e2a\u6590\u6ce2\u90a3\u5951\u6570(Fubonacci Number)",id:"\u6c42\u7b2cn\u4e2a\u6590\u6ce2\u90a3\u5951\u6570fubonacci-number",children:[{value:"\u9012\u5f52\u6cd5",id:"\u9012\u5f52\u6cd5",children:[]},{value:"\u9010\u4e2a\u76f8\u52a0\u6cd5",id:"\u9010\u4e2a\u76f8\u52a0\u6cd5",children:[]}]}]},{value:"\u8ba1\u65f6\u5de5\u5177\u7c7b",id:"\u8ba1\u65f6\u5de5\u5177\u7c7b",children:[{value:"\u5bf9\u6bd4\u8017\u65f6",id:"\u5bf9\u6bd4\u8017\u65f6",children:[]}]},{value:"\u65f6\u95f4\u590d\u6742\u5ea6",id:"\u65f6\u95f4\u590d\u6742\u5ea6",children:[{value:"\u9012\u5f52\u6cd5",id:"\u9012\u5f52\u6cd5-1",children:[]},{value:"\u9010\u4e2a\u76f8\u52a0\u6cd5",id:"\u9010\u4e2a\u76f8\u52a0\u6cd5-1",children:[]}]}],o={rightToc:b};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"\u6590\u6ce2\u90a3\u5951\u6570\u5217"},"\u6590\u6ce2\u90a3\u5951\u6570\u5217"),Object(a.b)("h2",{id:"\u6c42\u7b2cn\u4e2a\u6590\u6ce2\u90a3\u5951\u6570fubonacci-number"},"\u6c42\u7b2cn\u4e2a\u6590\u6ce2\u90a3\u5951\u6570(Fubonacci Number)"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u67d0\u4e2a\u6570\u7b49\u4e8e\u524d\u4e24\u4e2a\u6570\u7684\u548c"),Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("inlineCode",{parentName:"p"},"n = n-1 + n-2")),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"0 1 1 2 3 5 8 13 ...")))),Object(a.b)("h3",{id:"\u9012\u5f52\u6cd5"},"\u9012\u5f52\u6cd5"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u5b9a\u4e49\u4e00\u4e2a\u6590\u6ce2\u90a3\u5951\u51fd\u6570\uff0c\u76f4\u63a5\u9012\u5f52\u8c03\u7528")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u9012\u5f52\u6cd5"',title:'"\u9012\u5f52\u6cd5"'}),"/**\n * \u9012\u5f52\n *\n * @param n \u7b2c\u51e0\u4e2a\u6590\u6ce2\u90a3\u5951\u6570\n * @return \u6590\u6ce2\u90a3\u5951\u503c\n */\npublic static int fib(int n) {\n    if (n <= 1) return n;\n    return fib(n - 1) + fib(n - 2);\n}\n\npublic static void main(String[] args) {\n    for (int i = 0; i < 10; i++) {\n        System.out.println(fib(i));\n    }\n}\n")),Object(a.b)("h3",{id:"\u9010\u4e2a\u76f8\u52a0\u6cd5"},"\u9010\u4e2a\u76f8\u52a0\u6cd5"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u7b2cn\u4e2a\u6570\uff0c\u9700\u8981\u524d\u9762\u7684\u6570\u4e00\u5171\u52a0n-1\u6b21\uff0c\u5b9a\u4e49\u7b2c\u4e00\u4e2a\u6570\u548c\u7b2c\u4e8c\u4e2a\u6570\uff0c\u76f4\u63a5\u6309\u89c4\u5f8b\u52a0"),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"\u5b9a\u4e49",Object(a.b)("inlineCode",{parentName:"li"},"first"),"\u548c",Object(a.b)("inlineCode",{parentName:"li"},"second")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"first"),"\u548c",Object(a.b)("inlineCode",{parentName:"li"},"second"),"\u76f8\u52a0\uff0c\u7ed3\u679c\u7b49\u4e8e",Object(a.b)("inlineCode",{parentName:"li"},"\u4e0b\u4e00\u4e2asecond")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"\u7b2c\u4e00\u4e2asecond"),"\u7b49\u4e8e",Object(a.b)("inlineCode",{parentName:"li"},"\u4e0b\u4e00\u6b21\u7684first")))),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"public static int fib2(int n) {\n    if (n <= 1) return n;\n\n    int first = 0;\n    int second = 1;\n\n    for (int i = 0; i < n - 1; i++) {\n        int nextSecond = first + second;\n\n        first = second;\n        second = nextSecond;\n    }\n\n    return second;\n}\n")),Object(a.b)("h1",{id:"\u8ba1\u65f6\u5de5\u5177\u7c7b"},"\u8ba1\u65f6\u5de5\u5177\u7c7b"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),'public class MyTimeUtil {\n\n    private static final SimpleDateFormat format = new SimpleDateFormat("HH:mm:ss.SSS");\n\n    public interface Task {\n        void execute();\n    }\n\n    public static void getTimeUsed(String title, Task task) {\n        if (task == null) return;\n\n        title = StringUtils.isEmpty(title) ? "" : ("[" + title + "]");\n\n        System.out.println(title);\n\n        System.out.println("\u5f00\u59cb\u65f6\u95f4" + format.format(new Date()));\n        long beginTime = System.currentTimeMillis();\n        task.execute();\n        long endTime = System.currentTimeMillis();\n        System.out.println("\u7ed3\u675f\u65f6\u95f4" + format.format(new Date()));\n        double timeUsed = (endTime - beginTime) / 1000.0;\n        System.out.println("\u8017\u65f6\uff1a" + timeUsed + \u201c\u79d2\u201d);\n    }\n}\n')),Object(a.b)("h2",{id:"\u5bf9\u6bd4\u8017\u65f6"},"\u5bf9\u6bd4\u8017\u65f6"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),'public static void main(String[] args) {\n    int n = 45;\n  \n    MyTimeUtil.getTimeUsed("\u9012\u5f52\u6cd5", () -> System.out.println(fib(n)));\n    System.out.println("-------------------");\n    MyTimeUtil.getTimeUsed("\u9010\u4e2a\u76f8\u52a0\u6cd5", () -> System.out.println(fib2(n)));\n}\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"[\u9012\u5f52\u6cd5]\n\u5f00\u59cb\u65f6\u95f418:48:15.189\n1134903170\n\u7ed3\u675f\u65f6\u95f418:48:19.260\n\u8017\u65f6\uff1a4.071\u79d2\n-------------------\n[\u9010\u4e2a\u76f8\u52a0\u6cd5]\n\u5f00\u59cb\u65f6\u95f418:48:19.263\n1134903170\n\u7ed3\u675f\u65f6\u95f418:48:19.263\n\u8017\u65f6\uff1a0.0\u79d2\n")),Object(a.b)("h1",{id:"\u65f6\u95f4\u590d\u6742\u5ea6"},"\u65f6\u95f4\u590d\u6742\u5ea6"),Object(a.b)("h2",{id:"\u9012\u5f52\u6cd5-1"},"\u9012\u5f52\u6cd5"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"O(2^n)")),Object(a.b)("p",null,"fib(5)  -> fib(4) fib(3)  -> fib(2) fib(3) + fib(2) fib(1) ..."),Object(a.b)("p",null,"\u5171\u8c03\u75282\u7684N\u6b21\u65b9\u6b21"),Object(a.b)("h2",{id:"\u9010\u4e2a\u76f8\u52a0\u6cd5-1"},"\u9010\u4e2a\u76f8\u52a0\u6cd5"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"O(n)")),Object(a.b)("p",null,"\u7ebf\u6027\u904d\u5386"))}u.isMDXComponent=!0},520:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),u=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=u(t),m=i,d=p["".concat(c,".").concat(m)]||p[m]||s[m]||a;return t?r.a.createElement(d,l(l({ref:n},o),{},{components:t})):r.a.createElement(d,l({ref:n},o))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,c=new Array(a);c[0]=m;var l={};for(var b in n)hasOwnProperty.call(n,b)&&(l[b]=n[b]);l.originalType=e,l.mdxType="string"==typeof e?e:i,c[1]=l;for(var o=2;o<a;o++)c[o]=t[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);