(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{246:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return c}));var r=t(2),a=t(6),o=(t(0),t(375)),i={slug:"treeAndGraph",title:"LeetCode\u6811\u4e0e\u56fe",author:"Ban",author_title:"ChangAn University",author_url:"https://ceskykrumlov.gitee.io",author_image_url:"/img/avatar.jpg",tags:["\u7b97\u6cd5","\u6570\u636e\u7ed3\u6784"]},l={permalink:"/blog/treeAndGraph",source:"@site/blog/2020-03-14-\u6811\u4e0e\u56fe.md",description:"\u4e8c\u53c9\u6811",date:"2020-03-14T00:00:00.000Z",tags:[{label:"\u7b97\u6cd5",permalink:"/blog/tags/\u7b97\u6cd5"},{label:"\u6570\u636e\u7ed3\u6784",permalink:"/blog/tags/\u6570\u636e\u7ed3\u6784"}],title:"LeetCode\u6811\u4e0e\u56fe",readingTime:6,truncated:!0,prevItem:{title:"\u79bb\u7ebfAPI\u5de5\u5177Zeal\u4e0eAPI\u6587\u6863\u79bb\u7ebf\u5b89\u88c5",permalink:"/blog/zeal"},nextItem:{title:"LeetCode\u6808\u3001\u961f\u5217\u4e0e\u5806",permalink:"/blog/leetCodeQueue"}},d=[{value:"\u4e8c\u53c9\u6811",id:"\u4e8c\u53c9\u6811",children:[{value:"\u4e8c\u53c9\u6811\u57fa\u7840",id:"\u4e8c\u53c9\u6811\u57fa\u7840",children:[]},{value:"113 Path Sum II(Medium)",id:"113-path-sum-iimedium",children:[]},{value:"236 Lowest Common Ancestor of a Binary Tree(Medium)",id:"236-lowest-common-ancestor-of-a-binary-treemedium",children:[]},{value:"114 Flatten Binary Tree to Linked List(Medium)",id:"114-flatten-binary-tree-to-linked-listmedium",children:[]}]}],s={rightToc:d};function c(e){var n=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,i,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\u4e8c\u53c9\u6811"},"\u4e8c\u53c9\u6811"),Object(o.b)("h2",{id:"\u4e8c\u53c9\u6811\u57fa\u7840"},"\u4e8c\u53c9\u6811\u57fa\u7840"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u4e8c\u53c9\u6811\u524d\u5e8f\u904d\u5386")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c++"}),'#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <stack>\n#include <queue>\n\nusing namespace std;\n\nstruct TreeNode\n{\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n    TreeNode(int x) : val(x), left(NULL), right(NULL) {}\n};\n\n/*\n    \u524d\u5e8f\u904d\u5386\n*/\nvoid preorder_print(TreeNode *node, int layer)\n{\n    if (!node)\n    {\n        return;\n    }\n\n    for (int i = 0; i < layer; i++)\n    {\n        printf("-----");\n    }\n    printf("[%d]\\n", node->val);\n    preorder_print(node->left, layer + 1);\n    preorder_print(node->right, layer + 1);\n}\n\nint main()\n{\n\n    TreeNode a(1);\n    TreeNode b(2);\n    TreeNode c(5);\n    TreeNode d(3);\n    TreeNode e(4);\n    TreeNode f(6);\n\n    a.left = &b;\n    a.right = &c;\n    b.left = &d;\n    b.right = &e;\n    c.right = &f;\n\n    preorder_print(&a, 0);\n\n    return 0;\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'//java code\nclass TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n\n    TreeNode(int val) {\n        this.val = val;\n    }\n}\n\n\nclass Test {\n    public static void preorderPrint(TreeNode node, int layer) {\n        if (node == null) {\n            return;\n        }\n        for (int i = 0; i < layer; i++) {\n            System.out.print("-----");\n        }\n        System.out.format("[%d]\\n", node.val);\n        preorderPrint(node.left, ++layer);\n        preorderPrint(node.right, ++layer);\n    }\n\n    public static void main(String[] args) {\n        TreeNode a = new TreeNode(1);\n        TreeNode b = new TreeNode(2);\n        TreeNode c = new TreeNode(5);\n        TreeNode d = new TreeNode(3);\n        TreeNode e = new TreeNode(4);\n        TreeNode f = new TreeNode(6);\n\n        a.left = b;\n        a.right = c;\n        b.left = d;\n        b.right = e;\n        c.right = f;\n\n        preorderPrint(a, 0);\n    }\n}\n\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'//\u4f2a\u4ee3\u7801\n//\u4e2d\u5e8f\npreOrderPrint(node.left, ++layer);\nSystem.out.format("[%d]\\n", node.val);\npreOrderPrint(node.right, ++layer);\n\n//\u540e\u5e8f\npreOrderPrint(node.left, ++layer);\npreOrderPrint(node.right, ++layer);\nSystem.out.format("[%d]\\n", node.val);\n')),Object(o.b)("h2",{id:"113-path-sum-iimedium"},"113 Path Sum II(Medium)"),Object(o.b)("p",null,"Given a binary tree and sum, find all root-to-leaf paths where each path's sum equals the given sum"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note"),": A leaf is a node with no child"),Object(o.b)("p",null,Object(o.b)("img",{alt:"image-20200308184444128",src:t(619).default})),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c++"}),'struct TreeNode\n{\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n    TreeNode(int x) : val(x), left(NULL), right(NULL) {}\n};\n\nclass Solution\n{\nprivate:\n    void preorder(TreeNode *node, int &path_value, int sum, vector<int> &path,\n                  vector<vector<int>> &result)\n    {\n        if (!node)\n        {\n            return;\n        }\n\n        path_value += node->val;\n        //1\n        path.push_back(node->val);\n\n        //\u5230\u8fbe\u53f6\u8282\u70b9\n        if ((!node->left) && (!node->right) && (path_value == sum))\n        {\n            result.push_back(path);\n        }\n\n        preorder(node->left, path_value, sum, path, result);\n        preorder(node->right, path_value, sum, path, result);\n\n        path_value -= node->val;\n        //3.\u904d\u5386\u4f8b\u5b8c\u6bd5\uff0c\u5c06\u8be5\u8282\u70b9\u4ece\u8def\u5f84\u4e2d\u5f39\u51fa\n        path.pop_back();\n    }\n\npublic:\n    vector<vector<int>> pathSum(TreeNode *root, int sum)\n    {\n        vector<vector<int>> result;\n        vector<int> path;\n        int path_value = 0;\n        preorder(root, path_value, sum, path, result);\n        return result;\n    }\n};\n\nint main()\n{\n\n    TreeNode a(5);\n    TreeNode b(4);\n    TreeNode c(8);\n    TreeNode d(11);\n    TreeNode e(13);\n    TreeNode f(4);\n    TreeNode g(7);\n    TreeNode h(2);\n    TreeNode i(5);\n    TreeNode j(1);\n\n    a.left = &b;\n    a.right = &c;\n    b.left = &d;\n    d.left = &g;\n    d.right = &h;\n    c.left = &e;\n    c.right = &f;\n    f.left = &i;\n    f.right = &j;\n\n    Solution solve;\n\n    vector<vector<int>> result = solve.pathSum(&a, 22);\n\n    for (int i = 0; i < result.size(); i++)\n    {\n        for (int j = 0; j < result[i].size(); j++)\n        {\n            printf("[%d]", result[i][j]);\n        }\n        printf("\\n");\n    }\n\n    system("pause");\n    return 0;\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'class TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n\n    TreeNode(int val) {\n        this.val = val;\n    }\n}\n\n\nclass Solution {\n    private List<Integer> path = new ArrayList<>();\n    private List<List<Integer>> result = new ArrayList<>();\n    private int pathValue = 0;\n\n    public List<List<Integer>> pathSum(TreeNode root, int sum) {\n\n        if (root == null) {\n            return result;\n        }\n\n        pathValue += root.val;\n        path.add(root.val);\n\n        if (root.left == null && root.right == null && pathValue == sum) {\n            result.add(new ArrayList<>(path));\n        }\n\n        pathSum(root.left, sum);\n        pathSum(root.right, sum);\n\n        pathValue -= root.val;\n        path.remove(path.size() - 1);\n\n        return result;\n    }\n}\n\nclass Test {\n    public static void main(String[] args) {\n        TreeNode a = new TreeNode(5);\n        TreeNode b = new TreeNode(4);\n        TreeNode c = new TreeNode(8);\n        TreeNode d = new TreeNode(11);\n        TreeNode e = new TreeNode(13);\n        TreeNode f = new TreeNode(4);\n        TreeNode g = new TreeNode(7);\n        TreeNode h = new TreeNode(2);\n        TreeNode i = new TreeNode(5);\n        TreeNode j = new TreeNode(1);\n\n        a.left = b;\n        a.right = c;\n        b.left = d;\n        d.left = g;\n        d.right = h;\n        c.left = e;\n        c.right = f;\n        f.left = i;\n        f.right = j;\n\n        Solution solve = new Solution();\n        List<List<Integer>> result = solve.pathSum(a, 22);\n\n        for (int k = 0; k < result.size(); k++) {\n            for (int l = 0; l < result.get(k).size(); l++) {\n                System.out.format("[%d]", result.get(k).get(l));\n            }\n            System.out.println("\\n");\n        }\n    }\n}\n')),Object(o.b)("h2",{id:"236-lowest-common-ancestor-of-a-binary-treemedium"},"236 Lowest Common Ancestor of a Binary Tree(Medium)"),Object(o.b)("p",null,"Given a binary tree, find the lowest common ancestor(LCA) of two given nodes in the tree."),Object(o.b)("p",null,"According to the definition of LCA on Wikipedia :\u201cThe lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow ",Object(o.b)("strong",{parentName:"p"},"a node to be a descendant of itself)"),".\u201d"),Object(o.b)("p",null,Object(o.b)("img",{alt:"image-20200309115247449",src:t(620).default})),Object(o.b)("p",null,Object(o.b)("img",{alt:"image-20200309115708466",src:t(621).default})),Object(o.b)("p",null,Object(o.b)("img",{alt:"image-20200309120030990",src:t(622).default})),Object(o.b)("p",null,Object(o.b)("img",{alt:"image-20200309120225818",src:t(623).default})),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c++"}),'#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <stack>\n#include <queue>\n\nusing namespace std;\n\nstruct TreeNode\n{\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n    TreeNode(int x) : val(x), left(NULL), right(NULL) {}\n};\n\nclass Solution\n{\nprivate:\n    void preorder(TreeNode *node,           //\u6b63\u5728\u904d\u5386\u7684\u8282\u70b9\n                  TreeNode *search,         //\u5f85\u641c\u7d22\u7684\u8282\u70b9\n                  vector<TreeNode *> &path, //\u904d\u5386\u65f6\u7684\u8282\u70b9\u8def\u5f84\u6808\n                  vector<TreeNode *> &result,\n                  int &finish //\u8bb0\u5f55\u662f\u5426\u627e\u5230search\u8282\u70b9\uff0c\u672a\u627e\u52300\uff0c\u627e\u52301\n    )\n    {\n        if (!node || finish == 1)\n        {\n            return;\n        }\n\n        path.push_back(node); //\u5148\u5e8f\u904d\u5386\u65f6\uff0c\u5c06\u8282\u70b9\u538b\u5165path\u6808\n        if (node == search)\n        {\n            finish = 1;\n            //2 \u5c06\u5f53\u524d\u7684path\u5b58\u50a8\u5230result\u4e2d\n            result = path;\n        }\n\n        preorder(node->left, search, path, result, finish);\n        preorder(node->right, search, path, result, finish);\n\n        //3 \u7ed3\u675f\u904d\u5386node\u65f6\uff0c\u5c06node\u8282\u70b9\u5f39\u51fapath\u6808\n        path.pop_back();\n    }\n\npublic:\n    TreeNode *lowestCommonAncestor(TreeNode *root, TreeNode *p, TreeNode *q)\n    {\n        vector<TreeNode *> path; //\u58f0\u540d\u904d\u5386\u7528\u7684\u4e34\u65f6\u6808\n        vector<TreeNode *> node_p_path;\n        vector<TreeNode *> node_q_path;\n\n        int finish = 0;\n\n        //1\n        preorder(root, p, path, node_p_path, finish);\n\n        path.clear();\n        finish = 0; //\u6e05\u7a7apath,finish,\u8ba1\u7b97q\u8282\u70b9\u8def\u5f84\n\n        preorder(root, q, path, node_q_path, finish);\n        int path_len = 0; //\u8f83\u77ed\u8def\u5f84\u7684\u957f\u5ea6\n        if (/*2*/ node_p_path.size() < node_q_path.size())\n        {\n            path_len = node_p_path.size();\n        }\n        else\n        {\n            path_len = node_q_path.size();\n        }\n\n        TreeNode *result = 0; // \u540c\u65f6\u904d\u5386\u6839\u5230pq\u4e24\u4e2a\u8282\u70b9\u7684\u8def\u5f84\u4e0a\u7684\u8282\u70b9\n        for (int i = 0; i < path_len; i++)\n        {\n            if (/*3*/ node_p_path[i] == node_q_path[i])\n            {\n                result = node_p_path[i];\n            }\n        }\n        return result;\n    }\n};\n\nint main()\n{\n    TreeNode a(3);\n    TreeNode b(5);\n    TreeNode c(1);\n    TreeNode d(6);\n    TreeNode e(2);\n    TreeNode f(0);\n    TreeNode x(8);\n    TreeNode y(7);\n    TreeNode z(4);\n\n    a.left = &b;\n    a.right = &c;\n    b.left = &d;\n    b.right = &e;\n    c.left = &f;\n    c.right = &x;\n    e.left = &y;\n    e.right = &z;\n    Solution solve;\n\n    TreeNode *result = solve.lowestCommonAncestor(&a, &b, &f);\n    printf("LCA -> %d\\n", result->val);\n\n    result = solve.lowestCommonAncestor(&a, &d, &z);\n    printf("LCA -> %d\\n", result->val);\n\n    result = solve.lowestCommonAncestor(&a, &b, &y);\n    printf("LCA -> %d\\n", result->val);\n\n    return 0;\n}\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Java",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u4ece\u6839\u8282\u70b9\u5f00\u59cb\u904d\u5386\u6811\u3002"),Object(o.b)("li",{parentName:"ul"},"\u5728\u627e\u5230 p \u548c q \u4e4b\u524d\uff0c\u5c06\u7236\u6307\u9488\u5b58\u50a8\u5728\u5b57\u5178\u4e2d\u3002"),Object(o.b)("li",{parentName:"ul"},"\u4e00\u65e6\u6211\u4eec\u627e\u5230\u4e86 p \u548c q\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528\u7236\u4eb2\u5b57\u5178\u83b7\u5f97 p \u7684\u6240\u6709\u7956\u5148\uff0c\u5e76\u6dfb\u52a0\u5230\u4e00\u4e2a\u79f0\u4e3a\u7956\u5148\u7684\u96c6\u5408\u4e2d\u3002"),Object(o.b)("li",{parentName:"ul"},"\u540c\u6837\uff0c\u6211\u4eec\u904d\u5386\u8282\u70b9 q \u7684\u7956\u5148\u3002\u5982\u679c\u7956\u5148\u5b58\u5728\u4e8e\u4e3a p \u8bbe\u7f6e\u7684\u7956\u5148\u4e2d\uff0c\u8fd9\u610f\u5473\u7740\u8fd9\u662f p \u548c q \u4e4b\u95f4\u7684\u7b2c\u4e00\u4e2a\u5171\u540c\u7956\u5148\uff08\u540c\u65f6\u5411\u4e0a\u904d\u5386\uff09\uff0c\u56e0\u6b64\u8fd9\u662f LCA \u8282\u70b9\u3002")))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"class Solution {\n\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n\n        // Stack for tree traversal\n        Deque<TreeNode> stack = new ArrayDeque<>();\n\n        // HashMap for parent pointers\n        Map<TreeNode, TreeNode> parent = new HashMap<>();\n\n        parent.put(root, null);\n        stack.push(root);\n\n        // Iterate until we find both the nodes p and q\n        while (!parent.containsKey(p) || !parent.containsKey(q)) {\n\n            TreeNode node = stack.pop();\n\n            // While traversing the tree, keep saving the parent pointers.\n            if (node.left != null) {\n                parent.put(node.left, node);\n                stack.push(node.left);\n            }\n            if (node.right != null) {\n                parent.put(node.right, node);\n                stack.push(node.right);\n            }\n        }\n\n        // Ancestors set() for node p.\n        Set<TreeNode> ancestors = new HashSet<>();\n\n        // Process all ancestors for node p using parent pointers.\n        while (p != null) {\n            ancestors.add(p);\n            p = parent.get(p);\n        }\n\n        // The first ancestor of q which appears in\n        // p's ancestor set() is their lowest common ancestor.\n        while (!ancestors.contains(q))\n            q = parent.get(q);\n        return q;\n    }\n\n}\n")),Object(o.b)("h2",{id:"114-flatten-binary-tree-to-linked-listmedium"},"114 Flatten Binary Tree to Linked List(Medium)"),Object(o.b)("p",null,"Given a binary tree, flatten it to a linked list in-place"),Object(o.b)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u53c9\u6811\uff0c\u539f\u5730\u5c06\u5b83\u5c55\u5f00\u4e3a\u94fe\u8868"),Object(o.b)("p",null,Object(o.b)("img",{alt:"image-20200309124631770",src:t(624).default})),Object(o.b)("p",null,"78\u5206\u949f"))}c.isMDXComponent=!0},375:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),c=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=c(t),f=r,b=p["".concat(i,".").concat(f)]||p[f]||u[f]||o;return t?a.a.createElement(b,l(l({ref:n},s),{},{components:t})):a.a.createElement(b,l({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},619:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/1-5bf07451469c8cb7c928bdb81616adcc.png"},620:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/2-ccc153d3bc8c4712412ad4d9cb3a2c8e.png"},621:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/3-6e0ff24feb8609842c8d172557bbf7dd.png"},622:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/4-3702777627fcfdd3b8558f0420941086.png"},623:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/5-13f58873ef5e0872214f2dac13034cd1.png"},624:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/6-b2f4a31f2aa03afa1608f50d9431df8c.png"}}]);