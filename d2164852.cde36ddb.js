(window.webpackJsonp=window.webpackJsonp||[]).push([[407],{463:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(6),r=(n(0),n(554)),i={id:"141.linkedListCycle",title:"141.\u73af\u5f62\u94fe\u8868",hide_title:!0},l={unversionedId:"sf/\u94fe\u8868/141.linkedListCycle",id:"sf/\u94fe\u8868/141.linkedListCycle",isDocsHomePage:!1,title:"141.\u73af\u5f62\u94fe\u8868",description:"141.\u73af\u5f62\u94fe\u8868",source:"@site/datastructure/sf/\u94fe\u8868/141\u73af\u5f62\u94fe\u8868.md",slug:"/sf/\u94fe\u8868/141.linkedListCycle",permalink:"/datastructure/sf/\u94fe\u8868/141.linkedListCycle",version:"current",sidebar:"docs2",previous:{title:"206.\u53cd\u8f6c\u94fe\u8868",permalink:"/datastructure/sf/\u94fe\u8868/206.reverseLinkedList"},next:{title:"\u7ea6\u745f\u592b\u95ee\u9898",permalink:"/datastructure/sf/\u94fe\u8868/josephusProblem"}},c=[{value:"141.\u73af\u5f62\u94fe\u8868",id:"141\u73af\u5f62\u94fe\u8868",children:[{value:"\u5feb\u6162\u6307\u9488\u6cd5",id:"\u5feb\u6162\u6307\u9488\u6cd5",children:[]},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",children:[]}]}],s={rightToc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"141\u73af\u5f62\u94fe\u8868"},"141.\u73af\u5f62\u94fe\u8868"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://leetcode-cn.com/problems/linked-list-cycle/"}),"https://leetcode-cn.com/problems/linked-list-cycle/"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u7ed9\u5b9a\u4e00\u4e2a\u94fe\u8868\uff0c\u5224\u65ad\u94fe\u8868\u4e2d\u662f\u5426\u6709\u73af\u3002"),Object(r.b)("p",{parentName:"blockquote"},"\u5982\u679c\u94fe\u8868\u4e2d\u6709\u67d0\u4e2a\u8282\u70b9\uff0c\u53ef\u4ee5\u901a\u8fc7\u8fde\u7eed\u8ddf\u8e2a next \u6307\u9488\u518d\u6b21\u5230\u8fbe\uff0c\u5219\u94fe\u8868\u4e2d\u5b58\u5728\u73af\u3002 \u4e3a\u4e86\u8868\u793a\u7ed9\u5b9a\u94fe\u8868\u4e2d\u7684\u73af\uff0c\u6211\u4eec\u4f7f\u7528\u6574\u6570 pos \u6765\u8868\u793a\u94fe\u8868\u5c3e\u8fde\u63a5\u5230\u94fe\u8868\u4e2d\u7684\u4f4d\u7f6e\uff08\u7d22\u5f15\u4ece 0 \u5f00\u59cb\uff09\u3002 \u5982\u679c pos \u662f -1\uff0c\u5219\u5728\u8be5\u94fe\u8868\u4e2d\u6ca1\u6709\u73af\u3002\u6ce8\u610f\uff1apos \u4e0d\u4f5c\u4e3a\u53c2\u6570\u8fdb\u884c\u4f20\u9012\uff0c\u4ec5\u4ec5\u662f\u4e3a\u4e86\u6807\u8bc6\u94fe\u8868\u7684\u5b9e\u9645\u60c5\u51b5\u3002"),Object(r.b)("p",{parentName:"blockquote"},"\u5982\u679c\u94fe\u8868\u4e2d\u5b58\u5728\u73af\uff0c\u5219\u8fd4\u56de true \u3002 \u5426\u5219\uff0c\u8fd4\u56de false \u3002"),Object(r.b)("p",{parentName:"blockquote"},"\u8fdb\u9636\uff1a"),Object(r.b)("p",{parentName:"blockquote"},"\u4f60\u80fd\u7528 O(1)\uff08\u5373\uff0c\u5e38\u91cf\uff09\u5185\u5b58\u89e3\u51b3\u6b64\u95ee\u9898\u5417\uff1f"),Object(r.b)("p",{parentName:"blockquote"},"\u793a\u4f8b 1\uff1a"),Object(r.b)("p",{parentName:"blockquote"},"\u8f93\u5165\uff1ahead = ","[3,2,0,-4]",", pos = 1\n\u8f93\u51fa\uff1atrue\n\u89e3\u91ca\uff1a\u94fe\u8868\u4e2d\u6709\u4e00\u4e2a\u73af\uff0c\u5176\u5c3e\u90e8\u8fde\u63a5\u5230\u7b2c\u4e8c\u4e2a\u8282\u70b9\u3002"),Object(r.b)("p",{parentName:"blockquote"},"\u793a\u4f8b 2\uff1a"),Object(r.b)("p",{parentName:"blockquote"},"\u8f93\u5165\uff1ahead = ","[1,2]",", pos = 0\n\u8f93\u51fa\uff1atrue\n\u89e3\u91ca\uff1a\u94fe\u8868\u4e2d\u6709\u4e00\u4e2a\u73af\uff0c\u5176\u5c3e\u90e8\u8fde\u63a5\u5230\u7b2c\u4e00\u4e2a\u8282\u70b9\u3002"),Object(r.b)("p",{parentName:"blockquote"},"\u793a\u4f8b 3\uff1a"),Object(r.b)("p",{parentName:"blockquote"},"\u8f93\u5165\uff1ahead = ","[1]",", pos = -1\n\u8f93\u51fa\uff1afalse\n\u89e3\u91ca\uff1a\u94fe\u8868\u4e2d\u6ca1\u6709\u73af\u3002"),Object(r.b)("p",{parentName:"blockquote"},"\u63d0\u793a\uff1a"),Object(r.b)("p",{parentName:"blockquote"},"\u94fe\u8868\u4e2d\u8282\u70b9\u7684\u6570\u76ee\u8303\u56f4\u662f ","[0, 104]","\n-105 <= Node.val <= 105\npos \u4e3a -1 \u6216\u8005\u94fe\u8868\u4e2d\u7684\u4e00\u4e2a \u6709\u6548\u7d22\u5f15 \u3002")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Given head, the head of a linked list, determine if the linked list has a cycle in it."),Object(r.b)("p",{parentName:"blockquote"},"There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter."),Object(r.b)("p",{parentName:"blockquote"},"Return true if there is a cycle in the linked list. Otherwise, return false."),Object(r.b)("p",{parentName:"blockquote"},"Follow up:"),Object(r.b)("p",{parentName:"blockquote"},"Can you solve it using O(1) (i.e. constant) memory?"),Object(r.b)("p",{parentName:"blockquote"},"Example 1:"),Object(r.b)("p",{parentName:"blockquote"},"Input: head = ","[3,2,0,-4]",", pos = 1\nOutput: true\nExplanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed)."),Object(r.b)("p",{parentName:"blockquote"},"Example 2:"),Object(r.b)("p",{parentName:"blockquote"},"Input: head = ","[1,2]",", pos = 0\nOutput: true\nExplanation: There is a cycle in the linked list, where the tail connects to the 0th node."),Object(r.b)("p",{parentName:"blockquote"},"Example 3:"),Object(r.b)("p",{parentName:"blockquote"},"Input: head = ","[1]",", pos = -1\nOutput: false\nExplanation: There is no cycle in the linked list."),Object(r.b)("p",{parentName:"blockquote"},"Constraints:"),Object(r.b)("p",{parentName:"blockquote"},"The number of the nodes in the list is in the range ","[0, 104]",".\n-105 <= Node.val <= 105\npos is -1 or a valid index in the linked-list.")),Object(r.b)("h2",{id:"\u5feb\u6162\u6307\u9488\u6cd5"},"\u5feb\u6162\u6307\u9488\u6cd5"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u601d\u8def")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"\u5feb\u6307\u9488\u4e00\u6b21\u8d70\u4e24\u6b21\uff0c\u6162\u6307\u9488\u4e00\u6b21\u8d70\u4e00\u6b21"),Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u6709\u73af\uff0c\u4f1a\u51fa\u73b0\u5feb\u6162\u6307\u9488\u76f8\u9047\uff0c\u4e14\u65e0\u6cd5\u5230\u8fbenull"),Object(r.b)("li",{parentName:"ul"},"\u6ca1\u6709\u73af\u7684\u8bdd\uff0c\u6162\u6307\u9488\u6c38\u8fdc\u8ffd\u4e0d\u4e0a\u5feb\u6307\u9488\uff0c\u5373\u65e0\u6cd5\u76f8\u9047\uff0c\u4e14\u5feb\u6307\u9488\u7387\u5148\u8fbe\u5230\u7a7a\u8282\u70b9null")),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"\u5f00\u59cb\u65f6\u4e0d\u80fd\u5c06\u5feb\u6162\u6307\u9488\u6307\u5411\u540c\u4e00\u4e2a\u8282\u70b9\uff0c\u56e0\u4e3a\u8fd9\u6837\u4f1a\u76f4\u63a5\u5224\u5b9a\u4e3a\u7b2c\u4e00\u4e2a\u8282\u70b9\u4e0a\u6709\u73af"),Object(r.b)("li",{parentName:"ul"},"while\u7684\u9000\u51fa\u6761\u4ef6\u5fc5\u987b\u52a0\u4e0a fastNode.next != null\uff0c\u5426\u5219\u5faa\u73af\u4f53\u4e2d\u7684fastNode.next.next\u53ef\u80fd\u89e6\u53d1\u7a7a\u6307\u9488\u5f02\u5e38")))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public static boolean hasCycle(ListNode head) {\n    if (head == null || head.next == null) return false;\n\n    ListNode slowNode = head;\n    ListNode fastNode = head.next;\n\n    while (fastNode != null && fastNode.next != null ) {\n        if (slowNode == fastNode) return true;\n\n        slowNode = slowNode.next;\n        fastNode = fastNode.next.next;\n    }\n\n    return false;\n}\n")),Object(r.b)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public static void main(String[] args) {\n    ListNode listNode0 = new ListNode(0);\n    ListNode listNode2 = new ListNode(2);\n    ListNode listNode3 = new ListNode(3);\n    ListNode listNode4 = new ListNode(4);\n\n    listNode3.next = listNode2;\n    listNode2.next = listNode0;\n    listNode0.next = listNode4;\n    listNode4.next = listNode2;\n\n    boolean b = hasCycle(listNode3);\n    System.out.println("b = " + b);\n}\n')))}b.isMDXComponent=!0},554:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||r;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);