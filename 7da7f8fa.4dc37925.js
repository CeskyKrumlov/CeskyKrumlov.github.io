(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{318:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(570)),c={id:"1.stack",title:"\u6808\u7684\u5b9e\u73b0",hide_title:!0},o={unversionedId:"sf/\u6808/1.stack",id:"sf/\u6808/1.stack",isDocsHomePage:!1,title:"\u6808\u7684\u5b9e\u73b0",description:"\u6808\u7684\u5b9e\u73b0",source:"@site/datastructure/sf/\u6808/\u6808.md",slug:"/sf/\u6808/1.stack",permalink:"/datastructure/sf/\u6808/1.stack",version:"current",sidebar:"docs2",previous:{title:"\u53cc\u5411\u5faa\u73af\u94fe\u8868",permalink:"/datastructure/sf/\u94fe\u8868/4.BiCycleLinkedList"},next:{title:"\u5806",permalink:"/datastructure/sf/\u5806/1.heap"}},p=[{value:"\u6808\u7684\u5b9e\u73b0",id:"\u6808\u7684\u5b9e\u73b0",children:[{value:"API\u63a5\u53e3",id:"api\u63a5\u53e3",children:[]},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",children:[]}]},{value:"java.util.Stack",id:"javautilstack",children:[]}],l={rightToc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u6808\u7684\u5b9e\u73b0"},"\u6808\u7684\u5b9e\u73b0"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"\u6808"),"\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u7ebf\u6027\u8868\uff0c\u7279\u70b9\u662f\u53ea\u80fd\u5728",Object(i.b)("inlineCode",{parentName:"strong"},"\u4e00\u7aef"),"\u8fdb\u884c\u64cd\u4f5c")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u5411\u6808\u4e2d",Object(i.b)("inlineCode",{parentName:"li"},"\u6dfb\u52a0"),"\u5143\u7d20\u7684\u64cd\u4f5c\uff0c\u4e00\u822c\u53eb\u505a",Object(i.b)("inlineCode",{parentName:"li"},"push"),"\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"\u5165\u6808")),Object(i.b)("li",{parentName:"ul"},"\u4ece\u6808\u4e2d",Object(i.b)("inlineCode",{parentName:"li"},"\u79fb\u9664"),"\u64cd\u4f5c\uff0c\u4e00\u822c\u53eb\u505a",Object(i.b)("inlineCode",{parentName:"li"},"pop"),"\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"\u51fa\u6808"),"\uff0c\u53ea\u80fd\u79fb\u9664",Object(i.b)("inlineCode",{parentName:"li"},"\u6808\u9876\u5143\u7d20"),"\uff0c\u4e5f\u53eb\u505a\u5f39\u51fa\u6808\u9876\u5143\u7d20"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u540e\u8fdb\u5148\u51fa\uff08\u5148\u8fdb\u540e\u51fa\uff09\uff1aLast in First Out, ",Object(i.b)("inlineCode",{parentName:"strong"},"LIFO"))))),Object(i.b)("h2",{id:"api\u63a5\u53e3"},"API\u63a5\u53e3"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"int size()"),"\u2014\u2014\u8fd4\u56de\u5143\u7d20\u7684\u6570\u91cf"),Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"boolean isEmpty()"),"\u2014\u2014\u6808\u662f\u5426\u4e3a\u7a7a"),Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"void push(E element)"),"\u2014\u2014\u5165\u6808"),Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"E pop()"),"\u2014\u2014\u51fa\u6808"),Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"E top()"),"\u2014\u2014\u8fd4\u56de\u6808\u9876\u5143\u7d20 (aka ",Object(i.b)("inlineCode",{parentName:"p"},"peek()"),")")),Object(i.b)("h2",{id:"\u5b9e\u73b0"},"\u5b9e\u73b0"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u53ef\u4ee5\u5728\u5185\u90e8\u7ec4\u5408\u4e00\u4e2a",Object(i.b)("inlineCode",{parentName:"p"},"ArrayList"),"\u6216\u8005",Object(i.b)("inlineCode",{parentName:"p"},"LinkedArrayList"),"\u6765\u5b9e\u73b0"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="MyStack.java"',title:'"MyStack.java"'}),"/**\n * \u5b9e\u73b0\u4e00\u4e2a\u6808\n * - \u4f7f\u7528ArrayList \u6216\u8005 \u53cc\u5411\u94fe\u8868\u5b9e\u73b0\uff0c \u64cd\u4f5c\u5c3e\u90e8\u7684\u5143\u7d20\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u4e3aO(1)\n */\npublic class MyStack<E> {\n    private List<E> list = new ArrayList<>();\n\n    public int size() {\n        return list.size();\n    }\n\n    public boolean isEmpty() {\n        return list.isEmpty();\n    }\n\n    public void push(E element) {\n        list.add(element);\n    }\n\n    public E pop() {\n        return list.remove(list.size() - 1);\n    }\n\n    public E top() {\n        return list.get(list.size() - 1);\n    }\n}\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u6d4b\u8bd5")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u6d4b\u8bd5"',title:'"\u6d4b\u8bd5"'}),'public static void main(String[] args) {\n    MyStack<Integer> stack = new MyStack<>();\n\n    stack.push(1);\n    stack.push(2);\n    stack.push(3);\n    stack.push(4);\n\n    while (!stack.isEmpty()) {\n        System.out.println("stack.pop() = " + stack.pop());\n    }\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="\u8fd0\u884c\u7ed3\u679c"',title:'"\u8fd0\u884c\u7ed3\u679c"'}),"stack.pop() = 4\nstack.pop() = 3\nstack.pop() = 2\nstack.pop() = 1\n")),Object(i.b)("h1",{id:"javautilstack"},"java.util.Stack"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u7ee7\u627f\u81ea",Object(i.b)("inlineCode",{parentName:"p"},"Vector"),"\uff0c\u7c7b\u4f3cArrayList\uff0c\u4f46",Object(i.b)("inlineCode",{parentName:"p"},"Vector"),"\u662f\u7ebf\u7a0b\u5b89\u5168\u7684")))}b.isMDXComponent=!0},570:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(n),m=a,d=s["".concat(c,".").concat(m)]||s[m]||u[m]||i;return n?r.a.createElement(d,o(o({ref:t},l),{},{components:n})):r.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);