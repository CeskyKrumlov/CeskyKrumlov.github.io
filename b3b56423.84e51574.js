(window.webpackJsonp=window.webpackJsonp||[]).push([[368],{424:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return l})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return p}));var t=r(2),a=r(6),o=(r(0),r(574)),i={slug:"treeAndGraph",title:"LeetCode\u6811\u4e0e\u56fe",author:"Ban",author_title:"ChangAn University",author_url:"https://ceskykrumlov.gitee.io",author_image_url:"/img/avatar.jpg",tags:["\u7b97\u6cd5","\u6570\u636e\u7ed3\u6784"]},l={permalink:"/blog/treeAndGraph",source:"@site/blog/2020-03-14-\u6811\u4e0e\u56fe.md",description:"\u4e8c\u53c9\u6811",date:"2020-03-14T00:00:00.000Z",tags:[{label:"\u7b97\u6cd5",permalink:"/blog/tags/\u7b97\u6cd5"},{label:"\u6570\u636e\u7ed3\u6784",permalink:"/blog/tags/\u6570\u636e\u7ed3\u6784"}],title:"LeetCode\u6811\u4e0e\u56fe",readingTime:6,truncated:!0,prevItem:{title:"C++\u9ad8\u65af\u5217\u4e3b\u5143\u6d88\u53bb\u6cd5",permalink:"/blog/cppGuassion"},nextItem:{title:"\u79bb\u7ebfAPI\u5de5\u5177Zeal\u4e0eAPI\u6587\u6863\u79bb\u7ebf\u5b89\u88c5",permalink:"/blog/zeal"}},c=[{value:"\u4e8c\u53c9\u6811",id:"\u4e8c\u53c9\u6811",children:[{value:"\u4e8c\u53c9\u6811\u57fa\u7840",id:"\u4e8c\u53c9\u6811\u57fa\u7840",children:[]}]}],d={rightToc:c};function p(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},d,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\u4e8c\u53c9\u6811"},"\u4e8c\u53c9\u6811"),Object(o.b)("h2",{id:"\u4e8c\u53c9\u6811\u57fa\u7840"},"\u4e8c\u53c9\u6811\u57fa\u7840"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u4e8c\u53c9\u6811\u524d\u5e8f\u904d\u5386")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-c++"}),'#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <stack>\n#include <queue>\n\nusing namespace std;\n\nstruct TreeNode\n{\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n    TreeNode(int x) : val(x), left(NULL), right(NULL) {}\n};\n\n/*\n    \u524d\u5e8f\u904d\u5386\n*/\nvoid preorder_print(TreeNode *node, int layer)\n{\n    if (!node)\n    {\n        return;\n    }\n\n    for (int i = 0; i < layer; i++)\n    {\n        printf("-----");\n    }\n    printf("[%d]\\n", node->val);\n    preorder_print(node->left, layer + 1);\n    preorder_print(node->right, layer + 1);\n}\n\nint main()\n{\n\n    TreeNode a(1);\n    TreeNode b(2);\n    TreeNode c(5);\n    TreeNode d(3);\n    TreeNode e(4);\n    TreeNode f(6);\n\n    a.left = &b;\n    a.right = &c;\n    b.left = &d;\n    b.right = &e;\n    c.right = &f;\n\n    preorder_print(&a, 0);\n\n    return 0;\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'//java code\nclass TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n\n    TreeNode(int val) {\n        this.val = val;\n    }\n}\n\n\nclass Test {\n    public static void preorderPrint(TreeNode node, int layer) {\n        if (node == null) {\n            return;\n        }\n        for (int i = 0; i < layer; i++) {\n            System.out.print("-----");\n        }\n        System.out.format("[%d]\\n", node.val);\n        preorderPrint(node.left, ++layer);\n        preorderPrint(node.right, ++layer);\n    }\n\n    public static void main(String[] args) {\n        TreeNode a = new TreeNode(1);\n        TreeNode b = new TreeNode(2);\n        TreeNode c = new TreeNode(5);\n        TreeNode d = new TreeNode(3);\n        TreeNode e = new TreeNode(4);\n        TreeNode f = new TreeNode(6);\n\n        a.left = b;\n        a.right = c;\n        b.left = d;\n        b.right = e;\n        c.right = f;\n\n        preorderPrint(a, 0);\n    }\n}\n\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'//\u4f2a\u4ee3\u7801\n//\u4e2d\u5e8f\npreOrderPrint(node.left, ++layer);\nSystem.out.format("[%d]\\n", node.val);\npreOrderPrint(node.right, ++layer);\n\n//\u540e\u5e8f\npreOrderPrint(node.left, ++layer);\npreOrderPrint(node.right, ++layer);\nSystem.out.format("[%d]\\n", node.val);\n')))}p.isMDXComponent=!0},574:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return b}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=a.a.createContext({}),p=function(e){var n=a.a.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=p(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=p(r),s=t,b=u["".concat(i,".").concat(s)]||u[s]||f[s]||o;return r?a.a.createElement(b,l(l({ref:n},d),{},{components:r})):a.a.createElement(b,l({ref:n},d))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);