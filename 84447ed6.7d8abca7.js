(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{326:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(567)),i={id:"226.reverseBinaryTree",title:"226.\u7ffb\u8f6c\u4e8c\u53c9\u6811",hide_title:!0},l={unversionedId:"sf/\u6811/226.reverseBinaryTree",id:"sf/\u6811/226.reverseBinaryTree",isDocsHomePage:!1,title:"226.\u7ffb\u8f6c\u4e8c\u53c9\u6811",description:"226.\u7ffb\u8f6c\u4e8c\u53c9\u6811",source:"@site/datastructure/sf/\u6811/226\u7ffb\u8f6c\u4e8c\u53c9\u6811.md",slug:"/sf/\u6811/226.reverseBinaryTree",permalink:"/datastructure/sf/\u6811/226.reverseBinaryTree",version:"current",sidebar:"docs2",previous:{title:"239.\u6ed1\u52a8\u7a97\u53e3\u6700\u5927\u503c",permalink:"/datastructure/sf/\u6808/239.slidingWindowMaximum"},next:{title:"654.\u6700\u5927\u4e8c\u53c9\u6811",permalink:"/datastructure/sf/\u6811/654.maximumBinaryTree"}},c=[{value:"226.\u7ffb\u8f6c\u4e8c\u53c9\u6811",id:"226\u7ffb\u8f6c\u4e8c\u53c9\u6811",children:[]},{value:"\u601d\u8def",id:"\u601d\u8def",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]}],b={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"226\u7ffb\u8f6c\u4e8c\u53c9\u6811"},"226.\u7ffb\u8f6c\u4e8c\u53c9\u6811"),Object(o.b)("p",null,"\u7ffb\u8f6c\u4e00\u68f5\u4e8c\u53c9\u6811\u3002"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),Object(o.b)("p",null,"\u8f93\u5165\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"     4\n   /   \\\n  2     7\n / \\   / \\\n1   3 6   9\n")),Object(o.b)("p",null,"\u8f93\u51fa\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"     4\n   /   \\\n  7     2\n / \\   / \\\n9   6 3   1\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u5907\u6ce8:"),"\n\u8fd9\u4e2a\u95ee\u9898\u662f\u53d7\u5230 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://twitter.com/mxcl"}),"Max Howell "),"\u7684 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://twitter.com/mxcl/status/608682016205344768"}),"\u539f\u95ee\u9898")," \u542f\u53d1\u7684 \uff1a"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u8c37\u6b4c\uff1a\u6211\u4eec90\uff05\u7684\u5de5\u7a0b\u5e08\u4f7f\u7528\u60a8\u7f16\u5199\u7684\u8f6f\u4ef6(Homebrew)\uff0c\u4f46\u662f\u60a8\u5374\u65e0\u6cd5\u5728\u9762\u8bd5\u65f6\u5728\u767d\u677f\u4e0a\u5199\u51fa\u7ffb\u8f6c\u4e8c\u53c9\u6811\u8fd9\u9053\u9898\uff0c\u8fd9\u592a\u7cdf\u7cd5\u4e86\u3002")),Object(o.b)("h1",{id:"\u601d\u8def"},"\u601d\u8def"),Object(o.b)("blockquote",null,Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"\u672c\u8d28\uff1a\u4ea4\u6362\u6240\u6709\u8282\u70b9\u7684\u5de6\u53f3\u5b50\u6811"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u4fdd\u8bc1\u904d\u5386\u5230\u6240\u6709\u8282\u70b9\uff1a\u56db\u79cd\u904d\u5386\u65b9\u5f0f\u7686\u53ef"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u524d\u5e8f\u904d\u5386"),Object(o.b)("li",{parentName:"ul"},"\u4e2d\u5e8f\u904d\u5386"),Object(o.b)("li",{parentName:"ul"},"\u540e\u5e8f\u904d\u5386"),Object(o.b)("li",{parentName:"ul"},"\u5c42\u5e8f\u904d\u5386"))))),Object(o.b)("h1",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u8282\u70b9\u7c7b"',title:'"\u8282\u70b9\u7c7b"'}),"public class TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n\n    TreeNode(int x) {\n        val = x;\n    }\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u524d\u5e8f\u904d\u5386\uff0c\u4ea4\u6362\u5de6\u53f3\u5b50\u6811"',title:'"\u524d\u5e8f\u904d\u5386\uff0c\u4ea4\u6362\u5de6\u53f3\u5b50\u6811"'}),"// \u524d\u5e8f\u904d\u5386\nprivate TreeNode invertTree(TreeNode root) {\n    if (root == null) return null;\n    // \u524d\u5e8f\u4ea4\u6362\n    TreeNode tempNode = new TreeNode(0);\n    tempNode = root.left;\n    root.left = root.right;\n    root.right = tempNode;\n\n    invertTree(root.left);\n    invertTree(root.right);\n\n    return root;\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u540e\u5e8f\u904d\u5386"',title:'"\u540e\u5e8f\u904d\u5386"'}),"// \u540e\u5e8f\u904d\u5386\nprivate TreeNode invertTree(TreeNode root) {\n    if (root == null) return null;\n\n    invertTree(root.left);\n    invertTree(root.right);\n\n    // \u540e\u5e8f\u4ea4\u6362\n    TreeNode tempNode = new TreeNode(0);\n    tempNode = root.left;\n    root.left = root.right;\n    root.right = tempNode;\n\n    return root;\n}\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u4e2d\u5e8f\u904d\u5386")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u6ce8\u610f\uff1a\u7531\u4e8e\u5728\u4e2d\u5e8f\u904d\u5386\u4e2d\uff0c\u4ea4\u6362\u4e86\u5de6\u53f3\u8282\u70b9\uff0c\u5bfc\u81f4\u6700\u540e\u9012\u5f52\u8bbf\u95ee\u53f3\u8282\u70b9\u65f6\uff0c\u5199\u4e3a\u5de6\u8282\u70b9\uff0c\u56e0\u4e3a\u5b9e\u9645\u4e0a\u53f3\u8282\u70b9\u5df2\u7ecf\u88ab\u7f6e\u6362\u5230\u4e86\u5de6\u8282\u70b9\u7684\u4f4d\u7f6e\u4e0a"))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u4e2d\u5e8f\u904d\u5386"',title:'"\u4e2d\u5e8f\u904d\u5386"'}),"// \u4e2d\u5e8f\u904d\u5386\nprivate TreeNode invertTree(TreeNode root) {\n    if (root == null) return null;\n\n    invertTree(root.left);\n    // \u4e2d\u5e8f\u4ea4\u6362\n    TreeNode tempNode = new TreeNode(0);\n    tempNode = root.left;\n    root.left = root.right;\n    root.right = tempNode;\n    invertTree(root.left); // \u6b64\u5904\u5b9e\u9645\u7684\u53f3\u8282\u70b9\uff0c\u5df2\u7ecf\u88ab\u4ea4\u6362\u5230\u4e86\u5de6\u8282\u70b9\u7684\u4f4d\u7f6e\u4e0a\n\n    return root;\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u5c42\u5e8f\u904d\u5386"',title:'"\u5c42\u5e8f\u904d\u5386"'}),"// \u5c42\u5e8f\u904d\u5386\nprivate TreeNode invertTree(TreeNode root) {\n    if (root == null) return null;\n    // \u5c42\u5e8f\u4ea4\u6362\n    // \u7ef4\u62a4\u4e00\u4e2a\u961f\u5217\n    Queue<TreeNode> queue = new LinkedList<>();\n    // \u6839\u8282\u70b9\u5165\u961f\n    queue.offer(root);\n\n    while (!queue.isEmpty()) {\n        // \u961f\u5934A\u51fa\u961f\uff0c\u8bbf\u95ee\n        TreeNode head = queue.poll();\n\n        TreeNode tempNode = head.left;\n        head.left = head.right;\n        head.right = tempNode;\n\n        // \u5de6\u53f3\u5165\u961f\n        if (head.left != null) queue.offer(head.left);\n        if (head.right != null) queue.offer(head.right);\n    }\n\n    return root;\n}\n")))}u.isMDXComponent=!0},567:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,s=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.a.createElement(s,l(l({ref:t},b),{},{components:n})):a.a.createElement(s,l({ref:t},b))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);