(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{276:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return o}));var r=n(2),a=n(6),i=(n(0),n(565)),l={id:"654.maximumBinaryTree",title:"654.\u6700\u5927\u4e8c\u53c9\u6811",hide_title:!0},b={unversionedId:"sf/\u6811/654.maximumBinaryTree",id:"sf/\u6811/654.maximumBinaryTree",isDocsHomePage:!1,title:"654.\u6700\u5927\u4e8c\u53c9\u6811",description:"654.\u6700\u5927\u4e8c\u53c9\u6811",source:"@site/datastructure/sf/\u6811/654\u6700\u5927\u4e8c\u53c9\u6811.md",slug:"/sf/\u6811/654.maximumBinaryTree",permalink:"/datastructure/sf/\u6811/654.maximumBinaryTree",version:"current",sidebar:"docs2",previous:{title:"226.\u7ffb\u8f6c\u4e8c\u53c9\u6811",permalink:"/datastructure/sf/\u6811/226.reverseBinaryTree"},next:{title:"572.\u53e6\u4e00\u68f5\u6811\u7684\u5b50\u6811",permalink:"/datastructure/sf/\u5b57\u7b26\u4e32/572.subtreeOfAnotherTree"}},c=[{value:"654.\u6700\u5927\u4e8c\u53c9\u6811",id:"654\u6700\u5927\u4e8c\u53c9\u6811",children:[{value:"\u9012\u5f52\u6cd5",id:"\u9012\u5f52\u6cd5",children:[]}]},{value:"\u53d8\u79cd\u9898\uff1a\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4",id:"\u53d8\u79cd\u9898\uff1a\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4",children:[]}],u={rightToc:c};function o(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("br",null),Object(i.b)("h1",{id:"654\u6700\u5927\u4e8c\u53c9\u6811"},"654.\u6700\u5927\u4e8c\u53c9\u6811"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://leetcode-cn.com/problems/maximum-binary-tree/"}),"654. \u6700\u5927\u4e8c\u53c9\u6811")),Object(i.b)("p",null,"\u96be\u5ea6\u4e2d\u7b49264\u6536\u85cf\u5206\u4eab\u5207\u6362\u4e3a\u82f1\u6587\u63a5\u6536\u52a8\u6001\u53cd\u9988"),Object(i.b)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u4e0d\u542b\u91cd\u590d\u5143\u7d20\u7684\u6574\u6570\u6570\u7ec4 ",Object(i.b)("inlineCode",{parentName:"p"},"nums")," \u3002\u4e00\u4e2a\u4ee5\u6b64\u6570\u7ec4\u76f4\u63a5\u9012\u5f52\u6784\u5efa\u7684 ",Object(i.b)("strong",{parentName:"p"},"\u6700\u5927\u4e8c\u53c9\u6811")," \u5b9a\u4e49\u5982\u4e0b\uff1a"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u4e8c\u53c9\u6811\u7684\u6839\u662f\u6570\u7ec4 ",Object(i.b)("inlineCode",{parentName:"li"},"nums")," \u4e2d\u7684\u6700\u5927\u5143\u7d20\u3002"),Object(i.b)("li",{parentName:"ol"},"\u5de6\u5b50\u6811\u662f\u901a\u8fc7\u6570\u7ec4\u4e2d ",Object(i.b)("strong",{parentName:"li"},"\u6700\u5927\u503c\u5de6\u8fb9\u90e8\u5206")," \u9012\u5f52\u6784\u9020\u51fa\u7684\u6700\u5927\u4e8c\u53c9\u6811\u3002"),Object(i.b)("li",{parentName:"ol"},"\u53f3\u5b50\u6811\u662f\u901a\u8fc7\u6570\u7ec4\u4e2d ",Object(i.b)("strong",{parentName:"li"},"\u6700\u5927\u503c\u53f3\u8fb9\u90e8\u5206")," \u9012\u5f52\u6784\u9020\u51fa\u7684\u6700\u5927\u4e8c\u53c9\u6811\u3002")),Object(i.b)("p",null,"\u8fd4\u56de\u6709\u7ed9\u5b9a\u6570\u7ec4 ",Object(i.b)("inlineCode",{parentName:"p"},"nums")," \u6784\u5efa\u7684 ",Object(i.b)("strong",{parentName:"p"},"\u6700\u5927\u4e8c\u53c9\u6811")," \u3002"),Object(i.b)("p",null,"You are given an integer array nums with no duplicates. A maximum binary tree can be built recursively from nums using the following algorithm:"),Object(i.b)("p",null,"Create a root node whose value is the maximum value in nums."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Recursively build the left subtree on the subarray prefix to the left of the maximum value."),Object(i.b)("li",{parentName:"ul"},"Recursively build the right subtree on the subarray suffix to the right of the maximum value."),Object(i.b)("li",{parentName:"ul"},"Return the maximum binary tree built from nums.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://assets.leetcode.com/uploads/2020/12/24/tree1.jpg",alt:"img"}))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1anums = [3,2,1,6,0,5]\n\u8f93\u51fa\uff1a[6,3,5,null,2,0,null,null,1]\n\u89e3\u91ca\uff1a\u9012\u5f52\u8c03\u7528\u5982\u4e0b\u6240\u793a\uff1a\n- [3,2,1,6,0,5] \u4e2d\u7684\u6700\u5927\u503c\u662f 6 \uff0c\u5de6\u8fb9\u90e8\u5206\u662f [3,2,1] \uff0c\u53f3\u8fb9\u90e8\u5206\u662f [0,5] \u3002\n    - [3,2,1] \u4e2d\u7684\u6700\u5927\u503c\u662f 3 \uff0c\u5de6\u8fb9\u90e8\u5206\u662f [] \uff0c\u53f3\u8fb9\u90e8\u5206\u662f [2,1] \u3002\n        - \u7a7a\u6570\u7ec4\uff0c\u65e0\u5b50\u8282\u70b9\u3002\n        - [2,1] \u4e2d\u7684\u6700\u5927\u503c\u662f 2 \uff0c\u5de6\u8fb9\u90e8\u5206\u662f [] \uff0c\u53f3\u8fb9\u90e8\u5206\u662f [1] \u3002\n            - \u7a7a\u6570\u7ec4\uff0c\u65e0\u5b50\u8282\u70b9\u3002\n            - \u53ea\u6709\u4e00\u4e2a\u5143\u7d20\uff0c\u6240\u4ee5\u5b50\u8282\u70b9\u662f\u4e00\u4e2a\u503c\u4e3a 1 \u7684\u8282\u70b9\u3002\n    - [0,5] \u4e2d\u7684\u6700\u5927\u503c\u662f 5 \uff0c\u5de6\u8fb9\u90e8\u5206\u662f [0] \uff0c\u53f3\u8fb9\u90e8\u5206\u662f [] \u3002\n        - \u53ea\u6709\u4e00\u4e2a\u5143\u7d20\uff0c\u6240\u4ee5\u5b50\u8282\u70b9\u662f\u4e00\u4e2a\u503c\u4e3a 0 \u7684\u8282\u70b9\u3002\n        - \u7a7a\u6570\u7ec4\uff0c\u65e0\u5b50\u8282\u70b9\u3002\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://assets.leetcode.com/uploads/2020/12/24/tree2.jpg",alt:"img"}))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1anums = [3,2,1]\n\u8f93\u51fa\uff1a[3,null,2,null,1]\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"1 <= nums.length <= 1000")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"0 <= nums[i] <= 1000")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"nums")," \u4e2d\u7684\u6240\u6709\u6574\u6570 ",Object(i.b)("strong",{parentName:"li"},"\u4e92\u4e0d\u76f8\u540c"))),Object(i.b)("h2",{id:"\u9012\u5f52\u6cd5"},"\u9012\u5f52\u6cd5"),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u904d\u5386\u6570\u7ec4\u627e\u5230\u6700\u5927\u503c\uff0c\u7528\u6700\u5927\u503c\u521b\u5efa\u6839\u8282\u70b9"),Object(i.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u6700\u5927\u503c\u7684\u5de6\u53f3\u5b50\u8282\u70b9\uff0c\u9012\u5f52"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public TreeNode constructMaximumBinaryTree(int[] nums) {\n    if (nums.length == 1) return new TreeNode(nums[0]);\n\n    return construct(nums, 0, nums.length);\n}\n\nprivate TreeNode construct(int[] nums, int leftIndex, int rightIndex) {\n    if (leftIndex == rightIndex) return null;\n\n    int maxIndex = leftIndex;\n    for (int i = leftIndex + 1; i < rightIndex; i++)\n        if (nums[i] > nums[maxIndex]) maxIndex = i;\n\n    TreeNode currentRoot = new TreeNode(nums[maxIndex]);\n    currentRoot.left = construct(nums, leftIndex, maxIndex);\n    currentRoot.right = construct(nums, maxIndex + 1, rightIndex);\n\n    return currentRoot;\n}\n\npublic static void main(String[] args) {\n    int[] nums = {3, 2, 1, 6, 0, 5};\n    TreeNode treeNode = new _654\u6700\u5927\u4e8c\u53c9\u6811().constructMaximumBinaryTree(nums);\n\n    Queue<TreeNode> queue = new LinkedList<>();\n    queue.offer(treeNode);\n\n    while (!queue.isEmpty()) {\n        TreeNode head = queue.poll();\n        System.out.println(head.val);\n\n        if (head.left != null)\n            queue.offer(head.left);\n        if (head.right != null)\n            queue.offer(head.right);\n    }\n}\n")),Object(i.b)("br",null),Object(i.b)("h1",{id:"\u53d8\u79cd\u9898\uff1a\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4"},"\u53d8\u79cd\u9898\uff1a\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u5b58\u653e\u7684\u662f\u6bcf\u4e2a\u8282\u70b9\u7684\u7236\u8282\u70b9\u7684\u7d22\u5f15\u503c")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u6ca1\u6709\u7236\u8282\u70b9\u7684\u8bdd\uff0c\u7d22\u5f15\u503c\u5b58 ",Object(i.b)("inlineCode",{parentName:"li"},"-1")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u91cd\u8981\u6280\u5de7\uff0c\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"strong"},"\u6808"))))),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20210406144926985",src:n(940).default})),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u601d\u8003\uff1a"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u7236\u8282\u70b9\u7684\u7279\u70b9\uff1a\u5143\u7d20\u503c\u6bd4\u5f53\u524d\u81ea\u8eab\u5927"),Object(i.b)("li",{parentName:"ul"},"\u5047\u8bbe\u4ece",Object(i.b)("strong",{parentName:"li"},"\u7b2c\u4e00\u4e2a\u5143\u7d20")," ",Object(i.b)("inlineCode",{parentName:"li"},"3")," \u5f00\u59cb\u626b\u63cf\uff0c\u90a3\u4e48\u4e00\u5b9a\u662f\u5411\u53f3\u626b\u63cf\uff0c\u4f1a\u53d1\u73b0\u4e24\u4e2a",Object(i.b)("strong",{parentName:"li"},"\u6bd4")," ",Object(i.b)("inlineCode",{parentName:"li"},"3")," ",Object(i.b)("strong",{parentName:"li"},"\u5927"),"\u7684\u5143\u7d20 ",Object(i.b)("inlineCode",{parentName:"li"},"6"),"\u3001",Object(i.b)("inlineCode",{parentName:"li"},"5"),"\uff0c\u6b64\u65f6\u5206\u6790\u53ef\u77e5\u5728\u6570\u7ec4\u4e2d\u79bb ",Object(i.b)("inlineCode",{parentName:"li"},"3")," \u8f83\u8fd1\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"6")," \u662f\u5176\u7236\u8282\u70b9"),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u662f\u7b2c\u4e00\u4e2a\u5143\u7d20\uff0c\u90a3\u4e48 ",Object(i.b)("strong",{parentName:"li"},"\u4e24\u8fb9\u90fd\u8981\u626b\u63cf"),"\uff0c\u56e0\u4e3a\u4e0d\u786e\u5b9a\u5f53\u524d\u8282\u70b9\u662f\u5176\u7236\u8282\u70b9\u7684\u5de6\u5b50\u6811\u8fd8\u662f\u53f3\u5b50\u6811",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u5728\u5de6\u53f3\u4e24\u8fb9\u90fd\u627e\u5230\u4e86 ",Object(i.b)("inlineCode",{parentName:"li"},"\u6bd4\u81ea\u5df1\u5927")," \u7684\u503c\uff0c\u90a3\u4e48\u53d6\u5176\u4e2d ",Object(i.b)("inlineCode",{parentName:"li"},"\u8f83\u5c0f")," \u7684\u90a3\u4e2a"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u7ed3\u8bba\uff1a\u627e\u6bcf\u4e00\u4e2a\u5143\u7d20\uff0c\u5de6\u8fb9\u7b2c\u4e00\u4e2a \u548c \u53f3\u8fb9\u7b2c\u4e00\u4e2a \u6bd4\u81ea\u5df1\u5927\u7684\u5143\u7d20\u503c\uff0c\u518d\u9009\u51fa\u5176\u4e2d\u5143\u7d20\u503c\u8f83\u5c0f\u7684\u90a3\u4e2a\uff0c\u5c31\u662f\u81ea\u5df1\u7684\u7236\u8282\u70b9\u5143\u7d20\u503c")))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u6280\u5de7")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"\u6808"),"\uff0c\u53ea\u9700\u8981\u626b\u63cf\u4e00\u6b21\u6570\u7ec4\uff0c\u5c31\u53ef\u4ee5\u5f97\u5230\u76ee\u6807\u7ed3\u679c"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"\u5229\u7528\u6808\u6c42\u5de6\u3001\u53f3\u7b2c\u4e00\u4e2a\u6bd4\u81ea\u5df1\u5927\u7684\u6570")))),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20210406151405270",src:n(941).default})),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u89c4\u5b9a\u4ece\u6808\u5e95 \u2192 \u6808\u9876 \u5143\u7d20\u503c\u5355\u8c03\u9012\u51cf"),Object(i.b)("li",{parentName:"ul"},"\u5728\u5373\u5c06 push \u5143\u7d20\u65f6\uff0c\u6bd4\u8f83\u6808\u9876\u4e0e\u5f53\u524d\u5143\u7d20\u503c",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u5f53\u524d\u5143\u7d20\u503c ",Object(i.b)("inlineCode",{parentName:"li"},"\u5c0f\u4e8e")," \u6808\u9876\u5143\u7d20\uff1a\u76f4\u63a5\u5165\u6808\uff0c",Object(i.b)("strong",{parentName:"li"},"\u6b64\u65f6\u539f\u5148\u6808\u9876\u5143\u7d20\u503c\u5c31\u662f\u5f53\u524d\u5143\u7d20\u503c\u5de6\u4fa7\u7b2c\u4e00\u4e2a\u6bd4\u5b83\u5927\u7684\u503c")),Object(i.b)("li",{parentName:"ul"},"while \u5982\u679c\u5f53\u524d\u5143\u7d20\u503c ",Object(i.b)("inlineCode",{parentName:"li"},"\u5927\u4e8e")," \u6808\u9876\u5143\u7d20:",Object(i.b)("strong",{parentName:"li"},"\u5f39\u51fa\u6808\u9876\u5143\u7d20\uff0c\u6b64\u65f6 \u5f39\u51fa\u7684\u6808\u9876\u5143\u7d20 \u7684\u53f3\u4fa7\u7b2c\u4e00\u4e2a\u6bd4\u81ea\u5df1\u5927\u7684\u5143\u7d20\uff0c\u5c31\u662f\u8bd5\u56fe\u5982\u6808\u7684\u5f53\u524d\u5143\u7d20\u503c")))))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public int[] parentIndexes(int[] nums) {\n    if (nums == null || nums.length == 0) return null;\n\n    int[] res = new int[nums.length];\n    int[] leftFirstBigger = new int[nums.length];\n    int[] rightFirstBigger = new int[nums.length];\n\n    Stack<Integer> stack = new Stack<>();\n\n    for (int i = 0; i < nums.length; i++) {\n        leftFirstBigger[i] = -1; // \u521d\u59cb\u5316\n        rightFirstBigger[i] = -1;\n\n        while (!stack.isEmpty() && nums[i] > nums[stack.peek()])\n            rightFirstBigger[stack.pop()] = i;\n\n        if (!stack.isEmpty()) leftFirstBigger[i] = stack.peek();\n        stack.push(i);\n    }\n\n    for (int i = 0; i < leftFirstBigger.length; i++) {\n        // \u6ce8\u610f\u6bd4\u7684\u662f\u4e8c\u8005\u6570\u503c\u4e2d\u8f83\u5c0f\u7684\uff0c\u4e0d\u662f\u7d22\u5f15\u8f83\u5c0f\u7684\n        if (leftFirstBigger[i] == -1 && rightFirstBigger[i] == -1)\n            res[i] = -1;\n        else if (leftFirstBigger[i] == -1)\n            res[i] = rightFirstBigger[i];\n        else if (rightFirstBigger[i] == -1)\n            res[i] = leftFirstBigger[i];\n        else\n            res[i] = nums[leftFirstBigger[i]] < nums[rightFirstBigger[i]] ? leftFirstBigger[i] : rightFirstBigger[i];\n    }\n\n    return res;\n}\n")))}o.isMDXComponent=!0},565:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),o=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},m=function(e){var t=o(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=o(n),p=r,O=m["".concat(l,".").concat(p)]||m[p]||s[p]||i;return n?a.a.createElement(O,b(b({ref:t},u),{},{components:n})):a.a.createElement(O,b({ref:t},u))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,l[1]=b;for(var u=2;u<i;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},940:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/57-1c156aa8fc70bb5704b8ee2b63c0a9f6.png"},941:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/58-c16812cf0bb3e23c11c8b63dd7fd0d3e.png"}}]);