(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{203:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),l=(n(0),n(566)),i={id:"234.palindromeLinkedList",title:"234.\u56de\u6587\u94fe\u8868",hide_title:!0},o={unversionedId:"sf/\u94fe\u8868/234.palindromeLinkedList",id:"sf/\u94fe\u8868/234.palindromeLinkedList",isDocsHomePage:!1,title:"234.\u56de\u6587\u94fe\u8868",description:"234.\u56de\u6587\u94fe\u8868",source:"@site/datastructure/sf/\u94fe\u8868/234.\u56de\u6587\u94fe\u8868.md",slug:"/sf/\u94fe\u8868/234.palindromeLinkedList",permalink:"/datastructure/sf/\u94fe\u8868/234.palindromeLinkedList",version:"current",sidebar:"docs2",previous:{title:"86.\u5206\u9694\u94fe\u8868",permalink:"/datastructure/sf/\u94fe\u8868/86.partitionList"},next:{title:"146.LRU \u7f13\u5b58",permalink:"/datastructure/sf/\u94fe\u8868/146.LRUcache"}},b=[{value:"234.\u56de\u6587\u94fe\u8868",id:"234\u56de\u6587\u94fe\u8868",children:[]},{value:"\u961f\u5217 + \u6808",id:"\u961f\u5217--\u6808",children:[]},{value:"\u5feb\u6162\u6307\u9488\u6cd5",id:"\u5feb\u6162\u6307\u9488\u6cd5",children:[]}],c={rightToc:b};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(l.b)("br",null),Object(l.b)("h1",{id:"234\u56de\u6587\u94fe\u8868"},"234.\u56de\u6587\u94fe\u8868"),Object(l.b)("p",null,Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://leetcode-cn.com/problems/palindrome-linked-list/"}),"234. \u56de\u6587\u94fe\u8868")),Object(l.b)("p",null,"\u96be\u5ea6 \u7b80\u5355 "),Object(l.b)("p",null,"\u8bf7\u5224\u65ad\u4e00\u4e2a\u94fe\u8868\u662f\u5426\u4e3a\u56de\u6587\u94fe\u8868\u3002"),Object(l.b)("p",null,"Given the ",Object(l.b)("inlineCode",{parentName:"p"},"head")," of a singly linked list, return ",Object(l.b)("inlineCode",{parentName:"p"},"true")," if it is a palindrome."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u793a\u4f8b 1:")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"\u8f93\u5165: 1->2\n\u8f93\u51fa: false\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u793a\u4f8b 2:")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"\u8f93\u5165: 1->2->2->1\n\u8f93\u51fa: true\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u8fdb\u9636\uff1a")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u4f60\u80fd\u5426\u7528 O(n) \u65f6\u95f4\u590d\u6742\u5ea6\u548c",Object(l.b)("inlineCode",{parentName:"li"}," O(1) \u7a7a\u95f4\u590d\u6742\u5ea6")," \u89e3\u51b3\u6b64\u9898\uff1f"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"\u5982\u679c\u8981\u6c42\u4e0d\u80fd\u7834\u574f\u539f\u94fe\u8868\u7684\u7ed3\u6784"))),Object(l.b)("br",null),Object(l.b)("h1",{id:"\u961f\u5217--\u6808"},"\u961f\u5217 + \u6808"),Object(l.b)("blockquote",null,Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\u4e0d\u591f\u4f4e"),Object(l.b)("li",{parentName:"ul"},"\u904d\u5386\u94fe\u8868\uff0c\u6bcf\u4e2a\u8282\u70b9\u90fd\u52a0\u5165\u4e00\u4e2a ",Object(l.b)("inlineCode",{parentName:"li"},"\u961f\u5217")," \u548c\u4e00\u4e2a ",Object(l.b)("inlineCode",{parentName:"li"},"\u6808")," \uff08\u7528\u53cc\u7aef\u961f\u5217\u5b9e\u73b0\uff09"),Object(l.b)("li",{parentName:"ul"},"\u5168\u90e8\u6dfb\u52a0\u5b8c\u6bd5\u540e\uff0c\u961f\u5217\u51fa\u961f\uff0c\u6808\u51fa\u6808\uff0c\u540c\u6b65\u6bd4\u8f83\uff0c\u5168\u90e8\u76f8\u7b49\u5219\u4e3a\u56de\u6587\u94fe\u8868"))),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public static boolean isPalindrome(ListNode head) {\n    if (head.next == null) return true;\n    if (head.next.next == null) return head.val == head.next.val;\n\n    Queue<ListNode> queue = new LinkedList<>();\n    Deque<ListNode> deque = new LinkedBlockingDeque<>();\n\n    while (head != null) {\n        queue.add(head);\n        deque.add(head);\n        head = head.next;\n    }\n\n    while (queue.size() != 0) {\n        ListNode l1 = queue.remove();\n        ListNode l2 = deque.removeLast();\n\n        if (l1.val != l2.val) return false;\n    }\n\n    return true;\n}\n")),Object(l.b)("h1",{id:"\u5feb\u6162\u6307\u9488\u6cd5"},"\u5feb\u6162\u6307\u9488\u6cd5"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"\u627e\u4e2d\u592e\u8282\u70b9")),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"\u4e2d\u592e\u8282\u70b9\uff1a\u5982\u679c\u67d0\u8282\u70b9\u7684 next \u8282\u70b9\uff0c\u662f\u56de\u6587\u94fe\u8868\u53f3\u4fa7\u90e8\u5206\u7684\u8d77\u59cb\u8282\u70b9\uff0c\u5219\u79f0\u5176\u4e3a ",Object(l.b)("inlineCode",{parentName:"strong"},"\u4e2d\u592e\u8282\u70b9"))),Object(l.b)("li",{parentName:"ul"},"\u901a\u8fc7\u5728 LeetCode \u7f51\u9875\u8f93\u5165\u7a7a\u6d4b\u8bd5\u7528\u4f8b\uff0c\u53d1\u73b0\u73b0\u5728\u8fd9\u9053\u9898\u81f3\u5c11\u5b58\u5728\u4e00\u4e2a\u8282\u70b9\uff0c\u6240\u4ee5\u4e0d\u7528\u5224\u65ad\u7a7a"),Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u94fe\u8868\u53ea\u6709\u4e00\u4e2a\u8282\u70b9\uff0c\u8fd4\u56de true"),Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u94fe\u8868\u53ea\u6709\u4e24\u4e2a\u8282\u70b9\uff0c\u90a3\u4e48\u4ed6\u4eec\u503c\u5fc5\u987b\u76f8\u7b49"),Object(l.b)("li",{parentName:"ul"},"\u94fe\u8868\u67093\u4e2a\u53ca\u4ee5\u4e0a\u8282\u70b9\uff0c\u5229\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"\u5feb\u6162\u6307\u9488\u6cd5"),"\uff0c\u627e\u5230 ",Object(l.b)("inlineCode",{parentName:"li"},"\u4e2d\u592e\u8282\u70b9"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5feb\u6162\u6307\u9488\u90fd\u6307\u5411\u5934\u8282\u70b9"),Object(l.b)("li",{parentName:"ul"},"\u6162\u6307\u9488\u4e00\u6b21\u8d70\u4e00\u6b65\uff0c\u5feb\u6307\u9488\u4e00\u6b21\u8d70\u4e24\u6b65",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5f53 ",Object(l.b)("inlineCode",{parentName:"li"},"\u5feb\u6307\u9488.next.next = null")," \u65f6\uff0c\u94fe\u8868\u4e00\u5b9a\u6709\u5076\u6570\u4e2a\u5143\u7d20\uff0c\u6b64\u65f6 ",Object(l.b)("inlineCode",{parentName:"li"},"\u6162\u6307\u9488")," \u5c31\u6307\u7740 ",Object(l.b)("inlineCode",{parentName:"li"},"\u4e2d\u592e\u8282\u70b9")),Object(l.b)("li",{parentName:"ul"},"\u5f53 ",Object(l.b)("inlineCode",{parentName:"li"},"\u5feb\u6307\u9488.next = null"),"  \u662f\uff0c\u94fe\u8868\u4e00\u5b9a\u6709\u5947\u6570\u4e2a\u5143\u7d20\uff0c\u6b64\u65f6 ",Object(l.b)("inlineCode",{parentName:"li"},"\u6162\u6307\u9488")," \u6307\u7740 ",Object(l.b)("inlineCode",{parentName:"li"},"\u4e2d\u592e\u8282\u70b9")))))),Object(l.b)("li",{parentName:"ul"},"\u5c06\u53f3\u4fa7 ",Object(l.b)("inlineCode",{parentName:"li"},"(\u4e2d\u592e\u8282\u70b9, null)")," \u4e4b\u95f4\u7684\u7684\u90e8\u5206\u94fe\u8868\u8fdb\u884c\u7ffb\u8f6c"),Object(l.b)("li",{parentName:"ul"},"\u4e24\u4fa7\u4e00\u8d77\u904d\u5386\uff0c\u6bd4\u8f83 ",Object(l.b)("inlineCode",{parentName:"li"},"\u503c")," \u662f\u5426\u76f8\u7b49\uff0c\u76f4\u5230\u53f3\u94fe\u8868\u8fbe\u5230 null \u65f6\uff0c\u4e4b\u524d\u5bf9\u6bd4\u7ed3\u679c\u5168\u90e8\u76f8\u7b49\uff0c\u5219\u8fd4\u56de ture"),Object(l.b)("li",{parentName:"ul"},"\u5426\u5219 false"))),Object(l.b)("img",{src:n(789).default,style:{zoom:"30%",boxShadow:"0px 0px 0px #333333",borderRadius:"19px"}}),Object(l.b)("hr",null),Object(l.b)("img",{src:n(790).default,style:{zoom:"30%",boxShadow:"0px 0px 0px #333333",borderRadius:"19px"}}),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public static boolean isPalindrome1(ListNode head) {\n    if (head.next == null) return true;\n    if (head.next.next == null) return head.val == head.next.val;\n    // \u83b7\u5f97\u4e2d\u5fc3\u8282\u70b9\n    ListNode middleNode = getMiddleNode(head);\n    // \u53cd\u8f6c\u53f3\u4fa7\u94fe\u8868\n    ListNode rightHead = reverse(middleNode);\n\n    while (rightHead != null) {\n        if (head.val != rightHead.val) return false;\n\n        head = head.next;\n        rightHead = rightHead.next;\n    }\n\n    return true;\n}\n\nprivate static ListNode getMiddleNode(ListNode head) {\n    ListNode slow = head;\n    ListNode fast = head;\n\n    while (true) {\n        if (fast.next != null) {\n            if (fast.next.next != null) {\n                fast = fast.next.next;\n                slow = slow.next;\n            } else {\n                return slow;\n            }\n        } else {\n            return slow;\n        }\n    }\n}\n\nprivate static ListNode reverse(ListNode middle) {\n    ListNode pre = null;\n    ListNode next = middle.next;\n    ListNode originalNext;\n\n    while (next != null) {\n        originalNext = next.next;\n        next.next = pre;\n        pre = next;\n        next = originalNext;\n    }\n\n    return pre;\n}\n")))}u.isMDXComponent=!0},566:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),d=u(n),s=r,m=d["".concat(i,".").concat(s)]||d[s]||p[s]||l;return n?a.a.createElement(m,o(o({ref:t},c),{},{components:n})):a.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},789:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/12-b3463d05f49487e52a7158535953f215.png"},790:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/11-99743e436a3f1d14536d66d34358dfb8.png"}}]);