(window.webpackJsonp=window.webpackJsonp||[]).push([[359],{415:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),c=n(6),r=(n(0),n(565)),i={id:"146.LRUcache",title:"146.LRU \u7f13\u5b58",hide_title:!0},l={unversionedId:"sf/\u94fe\u8868/146.LRUcache",id:"sf/\u94fe\u8868/146.LRUcache",isDocsHomePage:!1,title:"146.LRU \u7f13\u5b58",description:"146.LRU \u7f13\u5b58",source:"@site/datastructure/sf/\u94fe\u8868/146.LRU\u7f13\u5b58.md",slug:"/sf/\u94fe\u8868/146.LRUcache",permalink:"/datastructure/sf/\u94fe\u8868/146.LRUcache",version:"current",sidebar:"docs2",previous:{title:"234.\u56de\u6587\u94fe\u8868",permalink:"/datastructure/sf/\u94fe\u8868/234.palindromeLinkedList"},next:{title:"20.\u6709\u6548\u7684\u62ec\u53f7",permalink:"/datastructure/sf/\u6808/20.validParentheses"}},b=[{value:"146.LRU \u7f13\u5b58",id:"146lru-\u7f13\u5b58",children:[{value:"\u54c8\u5e0c\u8868 + \u53cc\u5411\u94fe\u8868",id:"\u54c8\u5e0c\u8868--\u53cc\u5411\u94fe\u8868",children:[{value:"\u6dd8\u6c70\u7b97\u6cd5",id:"\u6dd8\u6c70\u7b97\u6cd5",children:[]}]},{value:"LRU Cache \u8bbe\u8ba1",id:"lru-cache-\u8bbe\u8ba1",children:[{value:"LRUCache \u7c7b",id:"lrucache-\u7c7b",children:[]},{value:"HashMap",id:"hashmap",children:[]},{value:"Node",id:"node",children:[]},{value:"\u6dd8\u6c70\u7b97\u6cd5",id:"\u6dd8\u6c70\u7b97\u6cd5-1",children:[]}]}]}],o={rightToc:b};function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("br",null),Object(r.b)("h1",{id:"146lru-\u7f13\u5b58"},"146.LRU \u7f13\u5b58"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://leetcode-cn.com/problems/lru-cache/"}),"146. LRU \u7f13\u5b58\u673a\u5236")),Object(r.b)("p",null,"\u96be\u5ea6\u4e2d\u7b491344\u6536\u85cf\u5206\u4eab\u5207\u6362\u4e3a\u82f1\u6587\u63a5\u6536\u52a8\u6001\u53cd\u9988"),Object(r.b)("p",null,"\u8fd0\u7528\u4f60\u6240\u638c\u63e1\u7684\u6570\u636e\u7ed3\u6784\uff0c\u8bbe\u8ba1\u548c\u5b9e\u73b0\u4e00\u4e2a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://baike.baidu.com/item/LRU"}),"LRU (\u6700\u8fd1\u6700\u5c11\u4f7f\u7528) \u7f13\u5b58\u673a\u5236")," \u3002"),Object(r.b)("p",null,"\u5b9e\u73b0 ",Object(r.b)("inlineCode",{parentName:"p"},"LRUCache")," \u7c7b\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"LRUCache(int capacity)")," \u4ee5\u6b63\u6574\u6570\u4f5c\u4e3a\u5bb9\u91cf ",Object(r.b)("inlineCode",{parentName:"li"},"capacity")," \u521d\u59cb\u5316 LRU \u7f13\u5b58"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"int get(int key)")," \u5982\u679c\u5173\u952e\u5b57 ",Object(r.b)("inlineCode",{parentName:"li"},"key")," \u5b58\u5728\u4e8e\u7f13\u5b58\u4e2d\uff0c\u5219\u8fd4\u56de\u5173\u952e\u5b57\u7684\u503c\uff0c\u5426\u5219\u8fd4\u56de ",Object(r.b)("inlineCode",{parentName:"li"},"-1")," \u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"void put(int key, int value)")," \u5982\u679c\u5173\u952e\u5b57\u5df2\u7ecf\u5b58\u5728\uff0c\u5219\u53d8\u66f4\u5176\u6570\u636e\u503c\uff1b\u5982\u679c\u5173\u952e\u5b57\u4e0d\u5b58\u5728\uff0c\u5219\u63d2\u5165\u8be5\u7ec4\u300c\u5173\u952e\u5b57-\u503c\u300d\u3002\u5f53\u7f13\u5b58\u5bb9\u91cf\u8fbe\u5230\u4e0a\u9650\u65f6\uff0c\u5b83\u5e94\u8be5\u5728\u5199\u5165\u65b0\u6570\u636e\u4e4b\u524d\u5220\u9664\u6700\u4e45\u672a\u4f7f\u7528\u7684\u6570\u636e\u503c\uff0c\u4ece\u800c\u4e3a\u65b0\u7684\u6570\u636e\u503c\u7559\u51fa\u7a7a\u95f4\u3002")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u8fdb\u9636"),"\uff1a\u4f60\u662f\u5426\u53ef\u4ee5\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"O(1)")," \u65f6\u95f4\u590d\u6742\u5ea6\u5185\u5b8c\u6210\u8fd9\u4e24\u79cd\u64cd\u4f5c\uff1f"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'\u8f93\u5165\n["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]\n[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]\n\u8f93\u51fa\n[null, null, null, 1, null, -1, null, -1, 3, 4]\n\n\u89e3\u91ca\nLRUCache lRUCache = new LRUCache(2);\nlRUCache.put(1, 1); // \u7f13\u5b58\u662f {1=1}\nlRUCache.put(2, 2); // \u7f13\u5b58\u662f {1=1, 2=2}\nlRUCache.get(1);    // \u8fd4\u56de 1\nlRUCache.put(3, 3); // \u8be5\u64cd\u4f5c\u4f1a\u4f7f\u5f97\u5173\u952e\u5b57 2 \u4f5c\u5e9f\uff0c\u7f13\u5b58\u662f {1=1, 3=3}\nlRUCache.get(2);    // \u8fd4\u56de -1 (\u672a\u627e\u5230)\nlRUCache.put(4, 4); // \u8be5\u64cd\u4f5c\u4f1a\u4f7f\u5f97\u5173\u952e\u5b57 1 \u4f5c\u5e9f\uff0c\u7f13\u5b58\u662f {4=4, 3=3}\nlRUCache.get(1);    // \u8fd4\u56de -1 (\u672a\u627e\u5230)\nlRUCache.get(3);    // \u8fd4\u56de 3\nlRUCache.get(4);    // \u8fd4\u56de 4\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"1 <= capacity <= 3000")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"0 <= key <= 3000")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"0 <= value <= 104")),Object(r.b)("li",{parentName:"ul"},"\u6700\u591a\u8c03\u7528 ",Object(r.b)("inlineCode",{parentName:"li"},"3 * 104")," \u6b21 ",Object(r.b)("inlineCode",{parentName:"li"},"get")," \u548c ",Object(r.b)("inlineCode",{parentName:"li"},"put"))),Object(r.b)("h2",{id:"\u54c8\u5e0c\u8868--\u53cc\u5411\u94fe\u8868"},"\u54c8\u5e0c\u8868 + \u53cc\u5411\u94fe\u8868"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u63d0\u793a")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"LRU \u7f13\u5b58\u7684\u5e38\u89c1\u5b9e\u73b0\u65b9\u5f0f\u662f ",Object(r.b)("inlineCode",{parentName:"p"},"\u54c8\u5e0c\u8868")," + ",Object(r.b)("inlineCode",{parentName:"p"},"\u53cc\u5411\u94fe\u8868")))),Object(r.b)("h3",{id:"\u6dd8\u6c70\u7b97\u6cd5"},"\u6dd8\u6c70\u7b97\u6cd5"),Object(r.b)("h4",{id:"list"},"List"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u7528 List \u5b58\u50a8\u6700\u8fd1\u7ecf\u5e38\u8bbf\u95ee\u7684 key "),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u5c06\u521a\u88ab\u8bbf\u95ee\u7684 key \u63d2\u5230 List \u7684\u4e00\u7aef",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u63d2\u5230\u6700\u524d\u9762\u3001\u6700\u540e\u9762\u90fd\u53ef\u4ee5\uff0c\u6b64\u5904\u5c31\u63d2\u5165\u5230\u6700\u524d\u9762"))),Object(r.b)("li",{parentName:"ul"},"\u5728\u901a\u8fc7 get \u65b9\u6cd5\u8bbf\u95ee\u6570\u636e\u65f6\uff0c\u5c31\u8981\u5237\u65b0 List \u4ee5\u8bb0\u5f55\u8bbf\u95ee\u8bb0\u5f55",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u9700\u8981\u904d\u5386 List \u627e\u5230 Key"),Object(r.b)("li",{parentName:"ul"},"\u9700\u8981\u628a\u76ee\u6807 Key \u5bf9\u5e94\u6570\u636e\u632a\u52a8\u5230 List \u7684\u4e00\u7aef"),Object(r.b)("li",{parentName:"ul"},"\u4ee5\u4e0a\u64cd\u4f5c\u5728\u6570\u7ec4\u4e2d\u90fd\u662f O(n)"))))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u56e0\u6b64\u4f7f\u7528\u53cc\u5411\u94fe\u8868"))),Object(r.b)("h2",{id:"lru-cache-\u8bbe\u8ba1"},"LRU Cache \u8bbe\u8ba1"),Object(r.b)("h3",{id:"lrucache-\u7c7b"},"LRUCache \u7c7b"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u5305\u542b"),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"Map\uff1a\u4e00\u4e2a HashMap"),Object(r.b)("li",{parentName:"ul"},"first\uff1a\u6307\u5411\u53cc\u5411\u94fe\u8868\u5934\u8282\u70b9\uff0c",Object(r.b)("strong",{parentName:"li"},"\u8bbe\u7f6e\u4e00\u4e2a\u865a\u62df\u5934\u8282\u70b9")),Object(r.b)("li",{parentName:"ul"},"Last\uff1a\u6307\u5411\u53cc\u5411\u94fe\u8868\u5c3e\u8282\u70b9\uff0c",Object(r.b)("strong",{parentName:"li"},"\u8bbe\u7f6e\u4e00\u4e2a\u865a\u62df\u5c3e\u7ed3\u70b9")),Object(r.b)("li",{parentName:"ul"},"capacity\uff1a\u5bb9\u91cf"))),Object(r.b)("h3",{id:"hashmap"},"HashMap"),Object(r.b)("blockquote",null,Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"key\uff1a\u5b58\u653e\u539f\u59cb\u7684 key"),Object(r.b)("li",{parentName:"ul"},"value\uff1a",Object(r.b)("strong",{parentName:"li"},"\u4e0d\u76f4\u63a5\u5b58\u50a8 value\uff0c\u800c\u662f\u5b58\u5305\u542b\u4e86 value \u7684\u94fe\u8868\u8282\u70b9")))),Object(r.b)("h3",{id:"node"},"Node"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u94fe\u8868\u8282\u70b9"),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"Key\uff1a\u952e"),Object(r.b)("li",{parentName:"ul"},"Value\uff1a\u503c"),Object(r.b)("li",{parentName:"ul"},"Prev\uff1a\u6307\u5411\u53cc\u5411\u94fe\u8868\u4e0a\u7684\u524d\u4e00\u4e2a\u8282\u70b9"),Object(r.b)("li",{parentName:"ul"},"Next\uff1a\u6307\u5411\u53cc\u5411\u94fe\u8868\u4e0a\u7684\u540e\u4e00\u4e2a\u8282\u70b9"))),Object(r.b)("h3",{id:"\u6dd8\u6c70\u7b97\u6cd5-1"},"\u6dd8\u6c70\u7b97\u6cd5"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5c06\u6700\u8fd1\u521a\u88ab get \u65b9\u6cd5\u8bbf\u95ee\u8fc7\u7684 key - value \u5bf9\u5e94\u7684\u8282\u70b9\uff0c\u91c7\u7528 ",Object(r.b)("inlineCode",{parentName:"li"},"\u5934\u63d2\u6cd5"),"\uff0c\u67e5\u5230\u865a\u62df\u5934\u7ed3\u70b9\u7684\u540e\u9762\uff0c\u5373\u6240\u6709\u6709\u6548\u8282\u70b9\u7684\u6700\u524d\u9762"),Object(r.b)("li",{parentName:"ul"},"Put \u65f6\uff0c\u5982\u679c key \u5df2\u7ecf\u5b58\u5728\uff0c\u90a3\u4e48\u66f4\u65b0\u5bf9\u5e94\u7684 value\uff0c\u5e76\u5c06\u8fd9\u4e2a\u8282\u70b9\u63d2\u5165\u5230\u6700\u524d\u9762"),Object(r.b)("li",{parentName:"ul"},"put \u662f\uff0c\u5982\u679c key \u4e0d\u5b58\u5728\uff0c\u5220\u9664\u53cc\u5411\u94fe\u8868\u4e2d\u7684\u5c3e\u7ed3\u70b9\uff0c\u521b\u5efa\u65b0\u8282\u70b9\uff0c\u63d2\u5165\u5230\u6700\u524d\u9762")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class _146LRU\u7f13\u5b58 {\n    private Map<Integer, Node> map;\n    private int capacity;\n    private Node firstNode;\n    private Node lastNode;\n\n    public _146LRU\u7f13\u5b58(int capacity) {\n        this.map = new HashMap<>(capacity);\n        this.capacity = capacity;\n        this.firstNode = new Node(); // \u865a\u62df\u5934\u8282\u70b9\n        this.lastNode = new Node(); // \u865a\u62df\u5934\u8282\u70b9\n\n        // \u865a\u62df\u5934\u7ed3\u70b9\u7684\u4e0b\u4e00\u4e2a\u662f\u865a\u62df\u5c3e\u7ed3\u70b9\n        this.firstNode.next = this.lastNode;\n        // \u865a\u62df\u5c3e\u7ed3\u70b9\u7684\u524d\u4e00\u4e2a\u662f\u865a\u62df\u5934\u7ed3\u70b9\n        this.lastNode.prev = this.firstNode;\n    }\n\n    public int get(int key) {\n        Node node = map.get(key);\n        if (node == null) return -1;\n        // \u6210\u529f\u8bbf\u95ee\u4e86\uff0c\u90a3\u4e48\u66f4\u65b0\u53cc\u5411\u94fe\u8868\uff0c\u5934\u63d2\u6cd5\u63d2\u5230\u6700\u524d\u9762\n        // \u5c06\u8282\u70b9\u4ece\u5f53\u524d\u4f4d\u7f6e\u5220\u9664\n        removeNode(node);\n        // \u5c06\u8282\u70b9\u5934\u63d2\u5230\u865a\u62df\u5934\u8282\u70b9\u540e\u9762\n        addAfterFirstNode(node);\n\n        return node.value;\n    }\n\n    public void put(int key, int value) {\n        Node node = map.get(key);\n        if (node != null) {\n            node.value = value; // key \u4e2d\u5df2\u6709\u503c\uff0c\u5c31\u53ea\u662f\u66f4\u65b0\u503c\n            // \u94fe\u8868\u66f4\u65b0\n            removeNode(node);\n            addAfterFirstNode(node);\n        } else { // \u6dfb\u52a0\u65b0\u7684\u952e\u503c\u5bf9\uff0c\u5360\u7528\u6570\u636e\u7ed3\u6784\u7a7a\u95f4\n            if (map.size() == capacity) { // \u5df2\u6ee1\n                // \u6dd8\u6c70\u6700\u5c11\u4f7f\u7528\u7684 \u952e\u503c\u5bf9\n                // \u79fb\u9664\u6700\u957f\u65f6\u95f4\u672a\u88ab\u8bbf\u95ee\u7684\u5143\u7d20\n                // \u5b83\u662f\u865a\u62df\u5c3e\u7ed3\u70b9\u7684\u524d\u4e00\u4e2a\u8282\u70b9\n                map.remove(lastNode.prev.key);\n                // \u8fd8\u8981\u4ece\u53cc\u5411\u94fe\u8868\u4e2d\u5220\u9664\u8fd9\u4e2a\u8282\u70b9\n                removeNode(lastNode.prev);\n            }\n            // \u6784\u5efa\u65b0\u8282\u70b9\n            Node newNode = new Node(key, value);\n            // \u5b58\u50a8\u65b0\u952e\u503c\u5bf9\n            map.put(key, newNode);\n            // \u5934\u63d2\u5230\u53cc\u5411\u94fe\u8868\u5934\u90e8\n            addAfterFirstNode(newNode);\n        }\n    }\n\n    private void removeNode(Node node) {\n        node.prev.next = node.next;\n        node.next.prev = node.prev;\n    }\n\n    private void addAfterFirstNode(Node node) {\n        node.next = this.firstNode.next;\n        node.prev = this.firstNode;\n        this.firstNode.next.prev = node;\n        this.firstNode.next = node;\n    }\n\n    private static class Node {\n        public int key;\n        public int value;\n        public Node prev;\n        public Node next;\n\n        public Node() {\n        }\n\n        public Node(int key, int value) {\n            this.key = key;\n            this.value = value;\n        }\n    }\n\n    public static void main(String[] args) {\n        _146LRU\u7f13\u5b58 cache = new _146LRU\u7f13\u5b58(2);\n        cache.put(1, 1);\n        cache.put(2, 2);\n        System.out.println("cache.get(1) = " + cache.get(1));\n        cache.put(3, 3);\n        System.out.println("cache.get(2) = " + cache.get(2));\n        cache.put(4, 4);\n        System.out.println("cache.get(-1) = " + cache.get(-1));\n        System.out.println("cache.get(3) = " + cache.get(3));\n        System.out.println("cache.get(4) = " + cache.get(4));\n    }\n}\n')))}p.isMDXComponent=!0},565:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=c.a.createContext({}),p=function(e){var t=c.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},s=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,m=u["".concat(i,".").concat(s)]||u[s]||d[s]||r;return n?c.a.createElement(m,l(l({ref:t},o),{},{components:n})):c.a.createElement(m,l({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=s;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var o=2;o<r;o++)i[o]=n[o];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);