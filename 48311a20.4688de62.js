(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{190:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),c=(n(0),n(520)),u={id:"232.implementQueueUsingStack",title:"232.\u7528\u6808\u5b9e\u73b0\u961f\u5217",hide_title:!0},o={unversionedId:"sf/\u961f\u5217/232.implementQueueUsingStack",id:"sf/\u961f\u5217/232.implementQueueUsingStack",isDocsHomePage:!1,title:"232.\u7528\u6808\u5b9e\u73b0\u961f\u5217",description:"232.\u7528\u6808\u5b9e\u73b0\u961f\u5217",source:"@site/datastructure/sf/\u961f\u5217/232\u7528\u6808\u5b9e\u73b0\u961f\u5217.md",slug:"/sf/\u961f\u5217/232.implementQueueUsingStack",permalink:"/datastructure/sf/\u961f\u5217/232.implementQueueUsingStack",version:"current",sidebar:"docs2",previous:{title:"155.\u6700\u5c0f\u6808",permalink:"/datastructure/sf/\u6808/155.minStack"},next:{title:"239.\u6ed1\u52a8\u7a97\u53e3\u6700\u5927\u503c",permalink:"/datastructure/sf/\u6808/239.slidingWindowMaximum"}},p=[{value:"232.\u7528\u6808\u5b9e\u73b0\u961f\u5217",id:"232\u7528\u6808\u5b9e\u73b0\u961f\u5217",children:[]},{value:"\u601d\u8def",id:"\u601d\u8def",children:[]}],i={rightToc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"232\u7528\u6808\u5b9e\u73b0\u961f\u5217"},"232.\u7528\u6808\u5b9e\u73b0\u961f\u5217"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u4f7f\u7528\u6808\u5b9e\u73b0\u961f\u5217\u7684\u4e0b\u5217\u64cd\u4f5c\uff1a"),Object(c.b)("p",{parentName:"blockquote"},"push(x) -- \u5c06\u4e00\u4e2a\u5143\u7d20\u653e\u5165\u961f\u5217\u7684\u5c3e\u90e8\u3002 ",Object(c.b)("br",null),"\npop() -- \u4ece\u961f\u5217\u9996\u90e8\u79fb\u9664\u5143\u7d20\u3002",Object(c.b)("br",null),"\npeek() -- \u8fd4\u56de\u961f\u5217\u9996\u90e8\u7684\u5143\u7d20\u3002",Object(c.b)("br",null),"\nempty() -- \u8fd4\u56de\u961f\u5217\u662f\u5426\u4e3a\u7a7a\u3002",Object(c.b)("br",null)),Object(c.b)("p",{parentName:"blockquote"},"\u793a\u4f8b:"),Object(c.b)("pre",{parentName:"blockquote"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"MyQueue queue = new MyQueue();\n\nqueue.push(1);\nqueue.push(2); \nqueue.peek();  // \u8fd4\u56de 1 \nqueue.pop();   // \u8fd4\u56de 1  \nqueue.empty(); // \u8fd4\u56de false\n")),Object(c.b)("p",{parentName:"blockquote"},"\u8bf4\u660e:"),Object(c.b)("p",{parentName:"blockquote"},"\u4f60\u53ea\u80fd\u4f7f\u7528\u6807\u51c6\u7684\u6808\u64cd\u4f5c -- \u4e5f\u5c31\u662f\u53ea\u6709 push to top, peek/pop from top, size, \u548c is empty \u64cd\u4f5c\u662f\u5408\u6cd5\u7684\u3002\n\u4f60\u6240\u4f7f\u7528\u7684\u8bed\u8a00\u4e5f\u8bb8\u4e0d\u652f\u6301\u6808\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 list \u6216\u8005 deque\uff08\u53cc\u7aef\u961f\u5217\uff09\u6765\u6a21\u62df\u4e00\u4e2a\u6808\uff0c\u53ea\u8981\u662f\u6807\u51c6\u7684\u6808\u64cd\u4f5c\u5373\u53ef\u3002\n\u5047\u8bbe\u6240\u6709\u64cd\u4f5c\u90fd\u662f\u6709\u6548\u7684 \uff08\u4f8b\u5982\uff0c\u4e00\u4e2a\u7a7a\u7684\u961f\u5217\u4e0d\u4f1a\u8c03\u7528 pop \u6216\u8005 peek \u64cd\u4f5c\uff09\u3002"),Object(c.b)("p",{parentName:"blockquote"},"\u6765\u6e90\uff1a\u529b\u6263\uff08LeetCode\uff09\n\u94fe\u63a5\uff1a",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://leetcode-cn.com/problems/implement-queue-using-stacks"}),"https://leetcode-cn.com/problems/implement-queue-using-stacks"))),Object(c.b)("h1",{id:"\u601d\u8def"},"\u601d\u8def"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u51c6\u5907\u4e24\u4e2a\u6808"),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"inStack")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"outStack")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u5728\u8fdb\u884c\u64cd\u4f5c\u524d\uff0c\u5224\u65adoutStack\u662f\u5426\u4e3a\u7a7a")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u5165\u961f\u65f6\uff0cpush\u5230inStack\u4e2d")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u51fa\u961f\u65f6\uff0c\u5982\u679coutStack\u4e3a\u7a7a\uff0c\u5c06inStack\u4e2d\u7684\u5185\u5bb9pop\u5230outStack\u4e2d\uff0c\u518d\u4eceoutStack\u4e2d\u5f39\u51fa\u6808\u9876\u5143\u7d20")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u51fa\u961f\u65f6\uff0c\u5982\u679coutStack\u4e0d\u4e3a\u7a7a\uff0c\u5219\u76f4\u63a5\u5f39\u51faoutStack\u4e2d\u7684\u5143\u7d20")))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"class MyQueue {\nprivate Stack<Integer> inStack;\n    private Stack<Integer> outStack;\n\n    /**\n     * Initialize your data structure here.\n     */\n    public MyQueue() {\n        inStack = new Stack<>();\n        outStack = new Stack<>();\n    }\n\n    /**\n     * Push element x to the back of queue.\n     */\n    public void push(int x) {\n        inStack.push(x);\n    }\n\n    /**\n     * Removes the element from in front of queue and returns that element.\n     */\n    public int pop() {\n        if (outStack.isEmpty()) {\n            while (!inStack.isEmpty()) {\n                outStack.push(inStack.pop());\n            }\n        }\n\n        return outStack.pop();\n    }\n\n    /**\n     * Get the front element.\n     */\n    public int peek() {\n        if (outStack.isEmpty()) {\n            while (!inStack.isEmpty()) {\n                outStack.push(inStack.pop());\n            }\n        }\n\n        return outStack.peek();\n    }\n\n    /**\n     * Returns whether the queue is empty.\n     */\n    public boolean empty() {\n        return inStack.isEmpty() && outStack.isEmpty();\n    }\n}\n\n/**\n * Your MyQueue object will be instantiated and called as such:\n * MyQueue obj = new MyQueue();\n * obj.push(x);\n * int param_2 = obj.pop();\n * int param_3 = obj.peek();\n * boolean param_4 = obj.empty();\n */\n")))}l.isMDXComponent=!0},520:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,u=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,f=b["".concat(u,".").concat(m)]||b[m]||s[m]||c;return n?a.a.createElement(f,o(o({ref:t},i),{},{components:n})):a.a.createElement(f,o({ref:t},i))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,u=new Array(c);u[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,u[1]=o;for(var i=2;i<c;i++)u[i]=n[i];return a.a.createElement.apply(null,u)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);