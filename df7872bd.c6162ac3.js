(window.webpackJsonp=window.webpackJsonp||[]).push([[446],{502:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(2),o=n(6),r=(n(0),n(566)),i={id:"237.deleteNodeInALinkedList",title:"237.\u5220\u9664\u94fe\u8868\u4e2d\u7684\u8282\u70b9",hide_title:!0},c={unversionedId:"sf/\u94fe\u8868/237.deleteNodeInALinkedList",id:"sf/\u94fe\u8868/237.deleteNodeInALinkedList",isDocsHomePage:!1,title:"237.\u5220\u9664\u94fe\u8868\u4e2d\u7684\u8282\u70b9",description:"237.\u5220\u9664\u94fe\u8868\u4e2d\u7684\u8282\u70b9",source:"@site/datastructure/sf/\u94fe\u8868/237\u5220\u9664\u94fe\u8868\u4e2d\u7684\u8282\u70b9.md",slug:"/sf/\u94fe\u8868/237.deleteNodeInALinkedList",permalink:"/datastructure/sf/\u94fe\u8868/237.deleteNodeInALinkedList",version:"current",sidebar:"docs2",previous:{title:"\u9898\u76ee\u5217\u8868",permalink:"/datastructure/sf/1.leetCodeQuestionList"},next:{title:"206.\u53cd\u8f6c\u94fe\u8868",permalink:"/datastructure/sf/\u94fe\u8868/206.reverseLinkedList"}},l=[{value:"237.\u5220\u9664\u94fe\u8868\u4e2d\u7684\u8282\u70b9",id:"237\u5220\u9664\u94fe\u8868\u4e2d\u7684\u8282\u70b9",children:[{value:"\u601d\u8def",id:"\u601d\u8def",children:[]}]}],b={rightToc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"237\u5220\u9664\u94fe\u8868\u4e2d\u7684\u8282\u70b9"},"237.\u5220\u9664\u94fe\u8868\u4e2d\u7684\u8282\u70b9"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://leetcode-cn.com/problems/delete-node-in-a-linked-list/"}),"https://leetcode-cn.com/problems/delete-node-in-a-linked-list/"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u8bf7\u7f16\u5199\u4e00\u4e2a\u51fd\u6570\uff0c\u4f7f\u5176\u53ef\u4ee5\u5220\u9664\u67d0\u4e2a\u94fe\u8868\u4e2d\u7ed9\u5b9a\u7684\uff08\u975e\u672b\u5c3e\uff09\u8282\u70b9\u3002\u4f20\u5165\u51fd\u6570\u7684\u552f\u4e00\u53c2\u6570\u4e3a \u8981\u88ab\u5220\u9664\u7684\u8282\u70b9 \u3002"),Object(r.b)("p",{parentName:"blockquote"},"\u73b0\u6709\u4e00\u4e2a\u94fe\u8868 -- head = ","[4,5,1,9]"),Object(r.b)("p",{parentName:"blockquote"},"\u793a\u4f8b 1\uff1a"),Object(r.b)("p",{parentName:"blockquote"},"\u8f93\u5165\uff1ahead = ","[4,5,1,9]",", node = 5\n\u8f93\u51fa\uff1a","[4,1,9]","\n\u89e3\u91ca\uff1a\u7ed9\u5b9a\u4f60\u94fe\u8868\u4e2d\u503c\u4e3a 5 \u7684\u7b2c\u4e8c\u4e2a\u8282\u70b9\uff0c\u90a3\u4e48\u5728\u8c03\u7528\u4e86\u4f60\u7684\u51fd\u6570\u4e4b\u540e\uff0c\u8be5\u94fe\u8868\u5e94\u53d8\u4e3a 4 -> 1 -> 9.\n\u793a\u4f8b 2\uff1a"),Object(r.b)("p",{parentName:"blockquote"},"\u8f93\u5165\uff1ahead = ","[4,5,1,9]",", node = 1\n\u8f93\u51fa\uff1a","[4,5,9]","\n\u89e3\u91ca\uff1a\u7ed9\u5b9a\u4f60\u94fe\u8868\u4e2d\u503c\u4e3a 1 \u7684\u7b2c\u4e09\u4e2a\u8282\u70b9\uff0c\u90a3\u4e48\u5728\u8c03\u7528\u4e86\u4f60\u7684\u51fd\u6570\u4e4b\u540e\uff0c\u8be5\u94fe\u8868\u5e94\u53d8\u4e3a 4 -> 5 -> 9."),Object(r.b)("p",{parentName:"blockquote"},"\u63d0\u793a\uff1a"),Object(r.b)("p",{parentName:"blockquote"},"\u94fe\u8868\u81f3\u5c11\u5305\u542b\u4e24\u4e2a\u8282\u70b9\u3002\n\u94fe\u8868\u4e2d\u6240\u6709\u8282\u70b9\u7684\u503c\u90fd\u662f\u552f\u4e00\u7684\u3002\n\u7ed9\u5b9a\u7684\u8282\u70b9\u4e3a\u975e\u672b\u5c3e\u8282\u70b9\u5e76\u4e14\u4e00\u5b9a\u662f\u94fe\u8868\u4e2d\u7684\u4e00\u4e2a\u6709\u6548\u8282\u70b9\u3002\n\u4e0d\u8981\u4ece\u4f60\u7684\u51fd\u6570\u4e2d\u8fd4\u56de\u4efb\u4f55\u7ed3\u679c\u3002")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly."),Object(r.b)("p",{parentName:"blockquote"},"It is guaranteed that the node to be deleted is not a tail node in the list."),Object(r.b)("p",{parentName:"blockquote"},"Example 1:"),Object(r.b)("p",{parentName:"blockquote"},"Input: head = ","[4,5,1,9]",", node = 5\nOutput: ","[4,1,9]","\nExplanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.\nExample 2:"),Object(r.b)("p",{parentName:"blockquote"},"Input: head = ","[4,5,1,9]",", node = 1\nOutput: ","[4,5,9]","\nExplanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.\nExample 3:"),Object(r.b)("p",{parentName:"blockquote"},"Input: head = ","[1,2,3,4]",", node = 3\nOutput: ","[1,2,4]","\nExample 4:"),Object(r.b)("p",{parentName:"blockquote"},"Input: head = ","[0,1]",", node = 0\nOutput: ","[1]","\nExample 5:"),Object(r.b)("p",{parentName:"blockquote"},"Input: head = ","[-3,5,-99]",", node = -3\nOutput: ","[5,-99]"),Object(r.b)("p",{parentName:"blockquote"},"Constraints:"),Object(r.b)("p",{parentName:"blockquote"},"The number of the nodes in the given list is in the range ","[2, 1000]",".\n-1000 <= Node.val <= 1000\nThe value of each node in the list is unique.\nThe node to be deleted is in the list and is not a tail node")),Object(r.b)("h2",{id:"\u601d\u8def"},"\u601d\u8def"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u601d\u8def")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",{parentName:"ol"},"\u627e\u5230",Object(r.b)("strong",{parentName:"li"},"\u8981\u5220\u9664\u7684\u8282\u70b9"),"\u7684",Object(r.b)("strong",{parentName:"li"},"\u4e0b\u4e00\u4e2a\u8282\u70b9")),Object(r.b)("li",{parentName:"ol"},"\u5c06",Object(r.b)("strong",{parentName:"li"},"\u4e0b\u4e00\u4e2a\u8282\u70b9"),"\u7684\u503c\uff0c\u8d4b\u5230",Object(r.b)("strong",{parentName:"li"},"\u8981\u5220\u9664\u7684\u8282\u70b9")),Object(r.b)("li",{parentName:"ol"},"\u5c06",Object(r.b)("strong",{parentName:"li"},"\u8981\u5220\u9664\u7684\u8282\u70b9\u7684next\u57df\uff0c\u6307\u5411\u4e0b\u4e00\u4e2a\u8282\u70b9\u7684next\u57df\uff0c\u4e5f\u5c31\u662f\u8981\u5220\u9664\u8282\u70b9\u7684next.next"))))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'/**\n * https://leetcode-cn.com/problems/delete-node-in-a-linked-list/\n */\n@SuppressWarnings("all")\npublic class _237\u5220\u9664\u94fe\u8868\u4e2d\u7684\u8282\u70b9 {\n    public void deleteNode(ListNode node) {\n        node.val = node.next.val;\n        node.next = node.next.next;\n    }\n}\n\nclass ListNode {\n    int val;\n    ListNode next;\n\n    ListNode(int x) {\n        val = x;\n    }\n}\n')))}d.isMDXComponent=!0},566:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),d=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=d(n),s=a,m=p["".concat(i,".").concat(s)]||p[s]||u[s]||r;return n?o.a.createElement(m,c(c({ref:t},b),{},{components:n})):o.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<r;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);