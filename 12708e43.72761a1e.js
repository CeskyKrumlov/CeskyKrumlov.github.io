(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{104:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var i=t(2),a=t(6),r=(t(0),t(576)),b={id:"239.slidingWindowMaximum",title:"239.\u6ed1\u52a8\u7a97\u53e3\u6700\u5927\u503c",hide_title:!0},l={unversionedId:"sf/\u6808/239.slidingWindowMaximum",id:"sf/\u6808/239.slidingWindowMaximum",isDocsHomePage:!1,title:"239.\u6ed1\u52a8\u7a97\u53e3\u6700\u5927\u503c",description:"239.\u6ed1\u52a8\u7a97\u53e3\u6700\u5927\u503c",source:"@site/datastructure/sf/\u6808/239\u6ed1\u52a8\u7a97\u53e3\u6700\u5927\u503c.md",slug:"/sf/\u6808/239.slidingWindowMaximum",permalink:"/datastructure/sf/\u6808/239.slidingWindowMaximum",version:"current",sidebar:"docs2",previous:{title:"232.\u7528\u6808\u5b9e\u73b0\u961f\u5217",permalink:"/datastructure/sf/\u961f\u5217/232.implementQueueUsingStack"},next:{title:"226.\u7ffb\u8f6c\u4e8c\u53c9\u6811",permalink:"/datastructure/sf/\u6811/226.reverseBinaryTree"}},c=[{value:"239.\u6ed1\u52a8\u7a97\u53e3\u6700\u5927\u503c",id:"239\u6ed1\u52a8\u7a97\u53e3\u6700\u5927\u503c",children:[{value:"\u961f\u5217",id:"\u961f\u5217",children:[]},{value:"\u7b80\u5355\u7c97\u66b4\u597d\u7528\u6cd5",id:"\u7b80\u5355\u7c97\u66b4\u597d\u7528\u6cd5",children:[]},{value:"\u52a8\u6001\u89c4\u5212",id:"\u52a8\u6001\u89c4\u5212",children:[]}]}],o={rightToc:c};function p(e){var n=e.components,b=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},o,b,{components:n,mdxType:"MDXLayout"}),Object(r.b)("br",null),Object(r.b)("h1",{id:"239\u6ed1\u52a8\u7a97\u53e3\u6700\u5927\u503c"},"239.\u6ed1\u52a8\u7a97\u53e3\u6700\u5927\u503c"),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://leetcode-cn.com/problems/sliding-window-maximum/"}),"239. \u6ed1\u52a8\u7a97\u53e3\u6700\u5927\u503c")),Object(r.b)("p",null,"\u96be\u5ea6 ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"\u56f0\u96be"))),Object(r.b)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 ",Object(r.b)("inlineCode",{parentName:"p"},"nums"),"\uff0c\u6709\u4e00\u4e2a\u5927\u5c0f\u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"k")," \u7684\u6ed1\u52a8\u7a97\u53e3\u4ece\u6570\u7ec4\u7684\u6700\u5de6\u4fa7\u79fb\u52a8\u5230\u6570\u7ec4\u7684\u6700\u53f3\u4fa7\u3002\u4f60\u53ea\u53ef\u4ee5\u770b\u5230\u5728\u6ed1\u52a8\u7a97\u53e3\u5185\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"k")," \u4e2a\u6570\u5b57\u3002\u6ed1\u52a8\u7a97\u53e3\u6bcf\u6b21\u53ea\u5411\u53f3\u79fb\u52a8\u4e00\u4f4d\u3002"),Object(r.b)("p",null,"\u8fd4\u56de\u6ed1\u52a8\u7a97\u53e3\u4e2d\u7684\u6700\u5927\u503c\u3002"),Object(r.b)("p",null," You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position."),Object(r.b)("p",null,"Return the max sliding window."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1anums = [1,3,-1,-3,5,3,6,7], k = 3\n\u8f93\u51fa\uff1a[3,3,5,5,6,7]\n\u89e3\u91ca\uff1a\n\u6ed1\u52a8\u7a97\u53e3\u7684\u4f4d\u7f6e                \u6700\u5927\u503c\n---------------               -----\n[1  3  -1] -3  5  3  6  7       3\n 1 [3  -1  -3] 5  3  6  7       3\n 1  3 [-1  -3  5] 3  6  7       5\n 1  3  -1 [-3  5  3] 6  7       5\n 1  3  -1  -3 [5  3  6] 7       6\n 1  3  -1  -3  5 [3  6  7]      7\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1anums = [1], k = 1\n\u8f93\u51fa\uff1a[1]\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1anums = [1,-1], k = 1\n\u8f93\u51fa\uff1a[1,-1]\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u793a\u4f8b 4\uff1a")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1anums = [9,11], k = 2\n\u8f93\u51fa\uff1a[11]\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u793a\u4f8b 5\uff1a")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1anums = [4,-2], k = 2\n\u8f93\u51fa\uff1a[4]\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"1 <= nums.length <= 105")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-104 <= nums[i] <= 104")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"1 <= k <= nums.length"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a")," \u8981\u6c42 ",Object(r.b)("inlineCode",{parentName:"p"},"O(n)")),Object(r.b)("h2",{id:"\u961f\u5217"},"\u961f\u5217"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u63d0\u793a")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u4f7f\u7528\u53cc\u7aef\u961f\u5217"))),Object(r.b)("blockquote",null,Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u5148\u786e\u5b9a\u8fd4\u56de int[] \u7684\u957f\u5ea6\uff0c\u89c2\u5bdf\u4e00\u4e0b\u4e3a ",Object(r.b)("inlineCode",{parentName:"li"},"n - k + 1")))),Object(r.b)("p",null,Object(r.b)("img",{alt:"image-20210405154815648",src:t(685).default})),Object(r.b)("blockquote",null,Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u5b9a\u4e49\u4e24\u4e2a\u6307\u9488 ",Object(r.b)("inlineCode",{parentName:"li"},"w"),"\u3001",Object(r.b)("inlineCode",{parentName:"li"},"i"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"i"),"\uff1a\u7528\u6765\u626b\u63cf\u6570\u7ec4\uff0c",Object(r.b)("strong",{parentName:"li"},"\u5b9a\u4e49 i \u6307\u5411\u7684\u662f ",Object(r.b)("em",{parentName:"strong"},"\u6ed1\u52a8\u7a97\u53e3\u7684\u6700\u540e\u4e00\u4e2a\u5143\u7d20")),"\uff0c\u56e0\u6b64\u4e00\u5f00\u59cb ",Object(r.b)("inlineCode",{parentName:"li"},"w")," \u6307\u5411\u7684\u5185\u5b58\u533a\u57df\u662f\u975e\u6cd5\u7684"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"w"),"\uff1a\u6307\u5411\u6ed1\u52a8\u7a97\u53e3\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"w")," \u3001 ",Object(r.b)("inlineCode",{parentName:"li"},"i")," \u603b\u662f\u4e00\u8d77\u79fb\u52a8\uff0c\u5b83\u4eec\u4e4b\u95f4\u7684\u5dee\u503c\u662f\u56fa\u5b9a\u7684\uff0c\u4e3a ",Object(r.b)("inlineCode",{parentName:"li"},"k - 1")))),Object(r.b)("li",{parentName:"ul"},"\u5b9a\u4e49\u4e00\u4e2a ",Object(r.b)("inlineCode",{parentName:"li"},"\u53cc\u7aef\u961f\u5217"),"\uff0c\u7528\u6765\u5b58\u50a8\u6570\u7ec4\u4e2d\u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"\u7d22\u5f15\u503c"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u961f\u5217\u4e2d\u7684\u7d22\u5f15\uff0c\u5bf9\u5e94\u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"\u5143\u7d20\u503c")," \uff0c",Object(r.b)("inlineCode",{parentName:"li"},"\u4ece\u5934\u5230\u5c3e"),"\u662f\u9010\u6e10 ",Object(r.b)("inlineCode",{parentName:"li"},"\u53d8\u5c0f")," \u7684"))),Object(r.b)("li",{parentName:"ul"},"\u64cd\u4f5c\uff1a",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5f53\u961f\u5217\u4e3a\u7a7a\uff0c\u5373\u6dfb\u52a0\u7b2c\u4e00\u4e2a\u5143\u7d20\uff0c\u7531 ",Object(r.b)("inlineCode",{parentName:"li"},"i")," \u6307\u5411\uff0c\u76f4\u63a5 ",Object(r.b)("inlineCode",{parentName:"li"},"\u5c3e\u90e8\u5165\u961f")),Object(r.b)("li",{parentName:"ul"},"\u5f53\u961f\u5217\u4e0d\u4e3a\u7a7a\uff0c",Object(r.b)("inlineCode",{parentName:"li"},"i")," \u6307\u5411\u7684\u5143\u7d20\u8981\u4e0e ",Object(r.b)("inlineCode",{parentName:"li"},"\u961f\u5217\u5c3e\u90e8\u5143\u7d20")," \u503c\u8fdb\u884c\u6bd4\u8f83",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"while ",Object(r.b)("inlineCode",{parentName:"li"},"\u5c3e\u90e8\u5143\u7d20\u503c")," <= ",Object(r.b)("inlineCode",{parentName:"li"},"i \u5143\u7d20\u503c")," \uff1a \u5c06 ",Object(r.b)("inlineCode",{parentName:"li"},"\u539f\u5c3e\u90e8\u5143\u7d20\u503c")," \u79fb\u9664\uff0c\u518d\u8ba9 ",Object(r.b)("inlineCode",{parentName:"li"},"i")," \u6307\u5411\u7684\u5143\u7d20\u503c\u5bf9\u5e94\u7d22\u5f15 ",Object(r.b)("inlineCode",{parentName:"li"},"\u5c3e\u90e8\u5165\u961f "),"\uff08\u7ef4\u6301 \u4ece\u5934\u5230\u5c3e \u9010\u6e10\u51cf\u5c0f\uff09"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"\u5c3e\u90e8\u5143\u7d20\u503c")," > ",Object(r.b)("inlineCode",{parentName:"li"},"i \u5143\u7d20\u503c"),"\uff1a ",Object(r.b)("inlineCode",{parentName:"li"},"i")," \u76f4\u63a5\u5c3e\u90e8\u5165\u961f"))),Object(r.b)("li",{parentName:"ul"},"\u76f4\u5230 ",Object(r.b)("inlineCode",{parentName:"li"},"w")," \u5f00\u59cb\u6307\u5411\u5408\u6cd5\u5185\u5b58\u5730\u5740\uff0c\u8868\u660e\u51fa\u73b0 ",Object(r.b)("inlineCode",{parentName:"li"},"\u7b2c\u4e00\u4e2a\u6ed1\u52a8\u7a97\u53e3"),"\uff0c\u90a3\u4e48\u5e94\u5f53 ",Object(r.b)("strong",{parentName:"li"},"\u5f00\u59cb\u66f4\u65b0\u6700\u7ec8\u8f93\u51fa\u6570\u7ec4\u7684\u503c"),"\uff0c\u6b64\u65f6\u6ed1\u52a8\u7a97\u53e3\u7684\u6700\u5927\u503c\uff0c\u5c31\u662f ",Object(r.b)("strong",{parentName:"li"},"\u53cc\u7aef\u961f\u5217\u7684\u5934\u5143\u7d20"),"\u3002\uff08\u4f46\u8981",Object(r.b)("strong",{parentName:"li"},"\u68c0\u67e5\u961f\u5217\u5934\u7684\u7d22\u5f15"),"\u662f\u5426\u4ecd\u7136\u5305\u542b\u5728\u5f53\u524d\u6ed1\u52a8\u7a97\u53e3\u7684\u8303\u56f4\u4e2d\uff09",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u5df2\u7ecf\u4e0d\u5728\u5f53\u524d\u6ed1\u52a8\u7a97\u53e3\u8303\u56f4\u5185\uff0c\u8981",Object(r.b)("strong",{parentName:"li"},"\u79fb\u9664\u961f\u5217\u5934\u5143\u7d20")))))))),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),'public class _239\u6ed1\u52a8\u7a97\u53e3\u6700\u5927\u503c {\n    public static int[] maxSlidingWindow(int[] nums, int k) {\n        if (nums == null || nums.length == 0 || k < 1) return new int[0];\n        if (k == 1) return nums;\n        // \u7ed3\u679c\u6570\u7ec4\n        int[] maxArray = new int[nums.length - k + 1];\n        // \u53cc\u7aef\u961f\u5217\n        Deque<Integer> deque = new LinkedList<>();\n\n        for (int i = 0, w = i - k + 1; i < nums.length; i++, w++) {\n            while (!deque.isEmpty() && nums[deque.getLast()] <= nums[i])\n                deque.pollLast(); // \u4e0d\u65ad\u7684\u4ece\u5c3e\u90e8\u5220\u9664\u8f83\u5c0f\u503c\n            // \u76f4\u5230 \u5c3e\u90e8\u5143\u7d20\u503c > i \u5143\u7d20\u503c \u3002 \u5c3e\u90e8\u5165\u961f\n            deque.offerLast(i);\n\n            if (w >= 0) { // w \u5f00\u59cb\u5408\u6cd5\uff0c\u51fa\u73b0\u6ed1\u52a8\u7a97\u53e3\n                // \u68c0\u67e5\u961f\u5217\u5934\u662f\u5426\u5728\u6ed1\u52a8\u7a97\u53e3\u5185\n                if (deque.peekFirst() < w || deque.peekFirst() > i)\n                    deque.pollFirst(); // \u4e0d\u5728\u4e86\uff0c\u5c31\u79fb\u9664\u5b83\n                // \u66f4\u65b0\u7ed3\u679c\u6570\u7ec4\uff0c\u5f53\u524d\u6ed1\u52a8\u7a97\u53e3\u7684\u6700\u5927\u503c\u5c31\u662f\u961f\u5217\u5934\n                maxArray[w] = nums[deque.peekFirst()];\n            }\n        }\n\n        return maxArray;\n    }\n\n    public static void main(String[] args) {\n        int[] nums = {1, 3, -1, -3, 5, 3, 6, 7};\n        int[] res = maxSlidingWindow(nums, 3);\n\n        for (int m : res) {\n            System.out.println(m + " ");\n        }\n    }\n}\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u4e3a\u4ec0\u4e48\u8fd9\u6837\u505a")),Object(r.b)("ol",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ol"},"\u6574\u4f53\u7684\u76ee\u7684\u662f\u4ec0\u4e48",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u961f\u5934\u7684\u5143\u7d20\u662f\u5f53\u524d\u6ed1\u52a8\u7a97\u53e3\u4e2d\u7684\u6700\u5927\u503c"),Object(r.b)("li",{parentName:"ul"},"\u8ba9\u8f83\u5927\u7684\u5143\u7d20\u5c3d\u91cf\u5411\u961f\u5934\u9760"))),Object(r.b)("li",{parentName:"ol"},"\u961f\u5934\u7684\u4f5c\u7528\u662f\u4ec0\u4e48"),Object(r.b)("li",{parentName:"ol"},"\u4e3a\u4ec0\u4e48\u5f53 nums","[\u961f\u5c3e]"," \u2264 nums","[i]"," \u65f6\uff0c\u8981\u5c06\u961f\u5217\u4e2d\u7684\u5143\u7d20\u5220\u9664"))),Object(r.b)("h2",{id:"\u7b80\u5355\u7c97\u66b4\u597d\u7528\u6cd5"},"\u7b80\u5355\u7c97\u66b4\u597d\u7528\u6cd5"),Object(r.b)("blockquote",null,Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u4e24\u4e2a\u6307\u9488 ",Object(r.b)("inlineCode",{parentName:"li"},"li")," \u548c ",Object(r.b)("inlineCode",{parentName:"li"},"ri"),"\uff0c",Object(r.b)("inlineCode",{parentName:"li"},"li")," \u76f4\u63a5\u6307\u5411 index = 0 \u7684\u4f4d\u7f6e\uff0cri = li + k - 1"),Object(r.b)("li",{parentName:"ul"},"\u4e00\u4e0a\u6765\u5c31\u626b\u63cf \u524dk\u4e2a \u5143\u7d20\uff0c\u627e\u51fa\u5176\u4e2d\u7684\u6700\u5927\u503c\uff0c\u8bb0\u5f55\u5176 ",Object(r.b)("inlineCode",{parentName:"li"},"\u7d22\u5f15")),Object(r.b)("li",{parentName:"ul"},"\u79fb\u52a8\u7a97\u53e3\uff0c",Object(r.b)("strong",{parentName:"li"},"\u53ea\u6bd4\u8f83\u65b0\u52a0\u5165\u7684\u90a3\u4e2a\u5143\u7d20\u503c"),"\uff0c\u4e0e ",Object(r.b)("inlineCode",{parentName:"li"},"\u5148\u524d\u6700\u5927\u503c")," \u6bd4\u8f83\uff0c\u51b3\u5b9a\u662f\u5426\u66f4\u65b0\u6700\u5927\u503c"),Object(r.b)("li",{parentName:"ul"},"\u7ee7\u7eed\u79fb\u52a8\uff0c",Object(r.b)("strong",{parentName:"li"},"\u5224\u65ad\u5148\u524d\u6700\u5927\u503c\u662f\u5426\u8fd8\u5728\u7a97\u53e3\u4e2d"),"\uff0c\u5982\u679c\u5df2\u7ecf\u4e0d\u5728\u7a97\u53e3\u4e2d\u4e86\uff0c\u90a3\u4e48\u91cd\u65b0\u626b\u63cf\u6574\u4e2a\u5f53\u524d\u7a97\u53e3\uff0c\u8bb0\u5f55 ",Object(r.b)("inlineCode",{parentName:"li"},"\u6700\u5927\u503c")),Object(r.b)("li",{parentName:"ul"},"\u65e0\u8111\u91cd\u590d"),Object(r.b)("li",{parentName:"ul"},"\u5bf9\u4e71\u5e8f\u5e8f\u5217\u6027\u80fd\u8fd8\u884c\uff0c\u5bf9\u9012\u51cf\u5e8f\u5217\u800c\u8a00\uff0c\u6548\u7387\u5f88\u5dee\uff0c\u6839\u66b4\u529b\u6cd5\u5dee\u4e0d\u591a"))),Object(r.b)("h2",{id:"\u52a8\u6001\u89c4\u5212"},"\u52a8\u6001\u89c4\u5212"))}p.isMDXComponent=!0},576:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return j}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=a.a.createContext({}),p=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return a.a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},O=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),m=p(t),O=i,j=m["".concat(b,".").concat(O)]||m[O]||u[O]||r;return t?a.a.createElement(j,l(l({ref:n},o),{},{components:t})):a.a.createElement(j,l({ref:n},o))}));function j(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,b=new Array(r);b[0]=O;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,b[1]=l;for(var o=2;o<r;o++)b[o]=t[o];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"},685:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/1-d49efd65e11b30f573716f92725cce01.png"}}]);