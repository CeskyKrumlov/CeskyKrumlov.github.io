(window.webpackJsonp=window.webpackJsonp||[]).push([[370],{426:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(574)),i={id:"572.subtreeOfAnotherTree",title:"572.\u53e6\u4e00\u68f5\u6811\u7684\u5b50\u6811",hide_title:!0},c={unversionedId:"sf/\u5b57\u7b26\u4e32/572.subtreeOfAnotherTree",id:"sf/\u5b57\u7b26\u4e32/572.subtreeOfAnotherTree",isDocsHomePage:!1,title:"572.\u53e6\u4e00\u68f5\u6811\u7684\u5b50\u6811",description:"572.\u53e6\u4e00\u68f5\u6811\u7684\u5b50\u6811",source:"@site/datastructure/sf/\u5b57\u7b26\u4e32/572\u53e6\u4e00\u4e2a\u6811\u7684\u5b50\u6811.md",slug:"/sf/\u5b57\u7b26\u4e32/572.subtreeOfAnotherTree",permalink:"/datastructure/sf/\u5b57\u7b26\u4e32/572.subtreeOfAnotherTree",version:"current",sidebar:"docs2",previous:{title:"654.\u6700\u5927\u4e8c\u53c9\u6811",permalink:"/datastructure/sf/\u6811/654.maximumBinaryTree"},next:{title:"236.\u4e8c\u53c9\u6811\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148",permalink:"/datastructure/sf/\u6811/236.lowestCommonAncestorofaBinaryTree"}},l=[{value:"572.\u53e6\u4e00\u68f5\u6811\u7684\u5b50\u6811",id:"572\u53e6\u4e00\u68f5\u6811\u7684\u5b50\u6811",children:[{value:"\u5e8f\u5217\u5316",id:"\u5e8f\u5217\u5316",children:[]}]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("br",null),Object(o.b)("h1",{id:"572\u53e6\u4e00\u68f5\u6811\u7684\u5b50\u6811"},"572.\u53e6\u4e00\u68f5\u6811\u7684\u5b50\u6811"),Object(o.b)("p",null,"\u7ed9\u5b9a\u4e24\u4e2a\u975e\u7a7a\u4e8c\u53c9\u6811 s \u548c t\uff0c\u68c0\u9a8c s \u4e2d\u662f\u5426\u5305\u542b\u548c t \u5177\u6709\u76f8\u540c\u7ed3\u6784\u548c\u8282\u70b9\u503c\u7684\u5b50\u6811\u3002s \u7684\u4e00\u4e2a\u5b50\u6811\u5305\u62ec s \u7684\u4e00\u4e2a\u8282\u70b9\u548c\u8fd9\u4e2a\u8282\u70b9\u7684\u6240\u6709\u5b50\u5b59\u3002s \u4e5f\u53ef\u4ee5\u770b\u505a\u5b83\u81ea\u8eab\u7684\u4e00\u68f5\u5b50\u6811\u3002"),Object(o.b)("p",null,"Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself."),Object(o.b)("p",null,"\u793a\u4f8b 1:\n\u7ed9\u5b9a\u7684\u6811 s:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"     3\n    / \\\n   4   5\n  / \\\n 1   2\n")),Object(o.b)("p",null,"\u7ed9\u5b9a\u7684\u6811 t\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"   4 \n  / \\\n 1   2\n")),Object(o.b)("p",null,"\u8fd4\u56de true\uff0c\u56e0\u4e3a t \u4e0e s \u7684\u4e00\u4e2a\u5b50\u6811\u62e5\u6709\u76f8\u540c\u7684\u7ed3\u6784\u548c\u8282\u70b9\u503c\u3002"),Object(o.b)("p",null,"\u793a\u4f8b 2:\n\u7ed9\u5b9a\u7684\u6811 s\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"     3\n    / \\\n   4   5\n  / \\\n 1   2\n    /\n   0\n")),Object(o.b)("p",null,"\u7ed9\u5b9a\u7684\u6811 t\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"   4\n  / \\\n 1   2\n")),Object(o.b)("p",null,"\u8fd4\u56de false\u3002"),Object(o.b)("h2",{id:"\u5e8f\u5217\u5316"},"\u5e8f\u5217\u5316"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u5c06\u6811\u901a\u8fc7\u9664\u4e86\u5c42\u5e8f\u904d\u5386\u4ee5\u5916\u7684\u904d\u5386\u65b9\u6cd5\uff0c\u5e8f\u5217\u5316\u4e3a\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u5176\u4e2d ",Object(o.b)("inlineCode",{parentName:"p"},"null")," \u8282\u70b9\u4e5f\u8981\u88ab\u5e8f\u5217\u5316\u6253\u5370\uff0c\u5e76\u4e14\u8282\u70b9\u4e4b\u95f4\u9700\u8981\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"!")," \u7b26\u53f7\u8fdb\u884c\u5206\u5272\uff08\u5f53\u7136\u7528\u5176\u4ed6\u7b26\u53f7\u4e5f\u884c\uff09"),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"\u5927\u6811\u5e8f\u5217\u5316\u540e \u4e0e \u5c0f\u6811\u5e8f\u5217\u5316 \u7ed3\u679c\u8fdb\u884c contains \u64cd\u4f5c\uff0c\u8fd4\u56de contains \u65b9\u6cd5\u7684\u7ed3\u679c\u5373\u53ef"))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class _572\u53e6\u4e00\u9897\u6811\u7684\u5b50\u6811 {\n    private static final String seperatorChar = "!";\n    private static final String nullChar = "#";\n    public StringBuilder sb = new StringBuilder();\n\n    public boolean isSubtree(TreeNode s, TreeNode t) {\n        // \u540e\u5e8f\u904d\u5386 \u5e8f\u5217\u5316\n        String treeStrS = getTreeStr(s);\n        String treeStrT = getTreeStr(t);\n\n        System.out.println("treeStrS = " + treeStrS);\n        System.out.println("treeStrT = " + treeStrT);\n\n        return treeStrS.contains(treeStrT);\n    }\n\n    private void visit(TreeNode node) {\n        // \u540e\u5e8f\u904d\u5386\n        if (node.left != null) visit(node.left);\n        else sb.append(nullChar).append(seperatorChar);\n\n        if (node.right != null) visit(node.right);\n        else sb.append(nullChar).append(seperatorChar);\n\n        sb.append(node.val).append(seperatorChar);\n    }\n\n    private String getTreeStr(TreeNode node) {\n        visit(node);\n        String treeStr = sb.toString();\n        sb.delete(0,sb.length()); // \u6e05\u7a7a sb\n        return treeStr;\n    }\n\n    public static void main(String[] args) {\n        TreeNode n1 = new TreeNode(1);\n        TreeNode n2 = new TreeNode(2);\n        TreeNode n3 = new TreeNode(3);\n\n        n1.left = n2;\n        n1.right = n3;\n\n        _572\u53e6\u4e00\u9897\u6811\u7684\u5b50\u6811 obj = new _572\u53e6\u4e00\u9897\u6811\u7684\u5b50\u6811();\n        boolean isSubtree = obj.isSubtree(n2, n1);\n        System.out.println("isSubtree = " + isSubtree);\n    }\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:'title="\u8fd0\u884c\u7ed3\u679c"',title:'"\u8fd0\u884c\u7ed3\u679c"'}),"treeStrS = #!#!2!\ntreeStrT = #!#!2!#!#!3!1!\nisSubtree = false\n")))}u.isMDXComponent=!0},574:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,f=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);