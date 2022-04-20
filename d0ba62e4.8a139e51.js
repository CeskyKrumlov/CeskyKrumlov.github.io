(window.webpackJsonp=window.webpackJsonp||[]).push([[421],{477:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return u}));var a=t(2),i=t(6),r=(t(0),t(576)),c={id:"155.minStack",title:"155.\u6700\u5c0f\u6808",hide_title:!0},l={unversionedId:"sf/\u6808/155.minStack",id:"sf/\u6808/155.minStack",isDocsHomePage:!1,title:"155.\u6700\u5c0f\u6808",description:"155.minStack",source:"@site/datastructure/sf/\u6808/155\u6700\u5c0f\u6808.md",slug:"/sf/\u6808/155.minStack",permalink:"/datastructure/sf/\u6808/155.minStack",version:"current",sidebar:"docs2",previous:{title:"20.\u6709\u6548\u7684\u62ec\u53f7",permalink:"/datastructure/sf/\u6808/20.validParentheses"},next:{title:"739. \u6bcf\u65e5\u6e29\u5ea6",permalink:"/datastructure/sf/\u6808/739.dailyTemperatures"}},p=[{value:"155.minStack",id:"155minstack",children:[{value:"\u4f7f\u7528\u4e24\u4e2a\u6808",id:"\u4f7f\u7528\u4e24\u4e2a\u6808",children:[]},{value:"\u94fe\u8868\u6cd5",id:"\u94fe\u8868\u6cd5",children:[]}]}],o={rightToc:p};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"155minstack"},"155.minStack"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://leetcode-cn.com/problems/min-stack/"}),"155. \u6700\u5c0f\u6808")),Object(r.b)("p",null,"\u96be\u5ea6 \u7b80\u5355 "),Object(r.b)("p",null,"\u8bbe\u8ba1\u4e00\u4e2a\u652f\u6301 ",Object(r.b)("inlineCode",{parentName:"p"},"push")," \uff0c",Object(r.b)("inlineCode",{parentName:"p"},"pop")," \uff0c",Object(r.b)("inlineCode",{parentName:"p"},"top")," \u64cd\u4f5c\uff0c\u5e76\u80fd\u5728\u5e38\u6570\u65f6\u95f4\u5185\u68c0\u7d22\u5230\u6700\u5c0f\u5143\u7d20\u7684\u6808\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"push(x)")," \u2014\u2014 \u5c06\u5143\u7d20 x \u63a8\u5165\u6808\u4e2d\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pop()")," \u2014\u2014 \u5220\u9664\u6808\u9876\u7684\u5143\u7d20\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"top()")," \u2014\u2014 \u83b7\u53d6\u6808\u9876\u5143\u7d20\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"getMin()")," \u2014\u2014 \u68c0\u7d22\u6808\u4e2d\u7684\u6700\u5c0f\u5143\u7d20\u3002")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u793a\u4f8b:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'\u8f93\u5165\uff1a\n["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]\n\n\u8f93\u51fa\uff1a\n[null,null,null,null,-3,null,0,-2]\n\n\u89e3\u91ca\uff1a\nMinStack minStack = new MinStack();\nminStack.push(-2);\nminStack.push(0);\nminStack.push(-3);\nminStack.getMin();   --\x3e \u8fd4\u56de -3.\nminStack.pop();\nminStack.top();      --\x3e \u8fd4\u56de 0.\nminStack.getMin();   --\x3e \u8fd4\u56de -2.\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pop"),"\u3001",Object(r.b)("inlineCode",{parentName:"li"},"top")," \u548c ",Object(r.b)("inlineCode",{parentName:"li"},"getMin")," \u64cd\u4f5c\u603b\u662f\u5728 ",Object(r.b)("strong",{parentName:"li"},"\u975e\u7a7a\u6808")," \u4e0a\u8c03\u7528\u3002")),Object(r.b)("p",null,"Design a stack that supports push, pop, top, and retrieving the minimum element in constant time."),Object(r.b)("p",null,"Implement the MinStack class:"),Object(r.b)("p",null,"MinStack() initializes the stack object.\nvoid push(val) pushes the element val onto the stack.\nvoid pop() removes the element on the top of the stack.\nint top() gets the top element of the stack.\nint getMin() retrieves the minimum element in the stack."),Object(r.b)("h2",{id:"\u4f7f\u7528\u4e24\u4e2a\u6808"},"\u4f7f\u7528\u4e24\u4e2a\u6808"),Object(r.b)("blockquote",null,Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u4e00\u4e2a\u6b63\u5e38\u6808\uff0c\u53e6\u4e00\u4e2a\u8bb0\u5f55\u6bcf\u4e2a\u72b6\u6001\u4e0b\u6b63\u5e38\u6808\u4e2d\u7684\u6700\u5c0f\u503c",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u4ed6\u4eec\u4e4b\u95f4\u6570\u91cf\u3001\u72b6\u6001\u90fd\u4e00\u4e00\u5bf9\u5e94"))),Object(r.b)("li",{parentName:"ul"},"\u5728\u6dfb\u52a0\u5143\u7d20\u65f6"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public class _155\u6700\u5c0f\u6808 {\n    private Stack<Integer> stack;\n    private Stack<Integer> minStack;\n\n    /**\n     * initialize your data structure here.\n     */\n    public _155\u6700\u5c0f\u6808() {\n        this.stack = new Stack<>();\n        this.minStack = new Stack<>();\n    }\n\n    public void push(int val) {\n        stack.push(val);\n\n        if (minStack.isEmpty())\n            minStack.push(val);\n        else\n            minStack.push(Math.min(val, minStack.peek()));\n\n    }\n\n    public void pop() {\n        stack.pop();\n        minStack.pop();\n    }\n\n    public int top() {\n        return stack.peek();\n    }\n\n    public int getMin() {\n        return minStack.peek();\n    }\n}\n")),Object(r.b)("h2",{id:"\u94fe\u8868\u6cd5"},"\u94fe\u8868\u6cd5"),Object(r.b)("blockquote",null,Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u6784\u5efa\u4e00\u4e2a\u94fe\u8868\uff0c\u5176\u4e2d\u7684\u94fe\u8868\u8282\u70b9\uff0c\u5b58\u50a8\u4e24\u4e2a\u503c\uff0c",Object(r.b)("inlineCode",{parentName:"li"},"\u5f53\u524d\u65b0\u503c")," \u548c ",Object(r.b)("inlineCode",{parentName:"li"},"\u5f53\u524d\u6700\u5c0f\u503c")),Object(r.b)("li",{parentName:"ul"},"\u91c7\u7528 ",Object(r.b)("inlineCode",{parentName:"li"},"\u5934\u63d2\u6cd5")," \uff0c\u5c31\u53ef\u4ee5\u6a21\u62df\u6808"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public class _155\u6700\u5c0f\u6808 {\n    private MinStackListNode head;\n\n    /**\n     * initialize your data structure here.\n     */\n    public _155\u6700\u5c0f\u6808() {\n        head = new MinStackListNode(Integer.MAX_VALUE, Integer.MAX_VALUE, null);\n    }\n\n    public void push(int val) {\n        head = new MinStackListNode(val, Math.min(val, head.minVal), head);\n    }\n\n    public void pop() {\n        head = head.next;\n    }\n\n    public int top() {\n        return head.val;\n    }\n\n    public int getMin() {\n        return head.minVal;\n    }\n\n    private static class MinStackListNode {\n        public int val;\n        public int minVal;\n        public MinStackListNode next;\n\n        public MinStackListNode() {\n        }\n\n        public MinStackListNode(int val, int minVal, MinStackListNode next) {\n            this.val = val;\n            this.minVal = minVal;\n            this.next = next;\n        }\n    }\n}\n")))}u.isMDXComponent=!0},576:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=i.a.createContext({}),u=function(e){var n=i.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=u(e.components);return i.a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),b=u(t),m=a,d=b["".concat(c,".").concat(m)]||b[m]||s[m]||r;return t?i.a.createElement(d,l(l({ref:n},o),{},{components:t})):i.a.createElement(d,l({ref:n},o))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var o=2;o<r;o++)c[o]=t[o];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);