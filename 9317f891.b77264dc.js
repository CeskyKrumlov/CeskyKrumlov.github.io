(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{1007:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/2-03b57c29809925af2684345af66d91b6.png"},354:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return m})),t.d(n,"default",(function(){return u}));var a=t(2),i=t(6),b=(t(0),t(567)),r={id:"53.maximumSubarray",title:"53.\u6700\u5927\u8fde\u7eed\u5b50\u5e8f\u5217\u548c",hide_title:!0},l={unversionedId:"sf/\u5206\u6cbb/53.maximumSubarray",id:"sf/\u5206\u6cbb/53.maximumSubarray",isDocsHomePage:!1,title:"53.\u6700\u5927\u8fde\u7eed\u5b50\u5e8f\u5217\u548c",description:"53. \u6700\u5927\u5b50\u5e8f\u548c",source:"@site/datastructure/sf/\u5206\u6cbb/53.\u6700\u5927\u8fde\u7eed\u5b50\u5e8f\u5217\u548c.md",slug:"/sf/\u5206\u6cbb/53.maximumSubarray",permalink:"/datastructure/sf/\u5206\u6cbb/53.maximumSubarray",version:"current",sidebar:"docs2",previous:{title:"3.\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32",permalink:"/datastructure/sf/\u5b57\u7b26\u4e32/3.longestSubstringWithoutRepeatingCharacters"},next:{title:"50.Pow(x, n)",permalink:"/datastructure/sf/\u5206\u6cbb/50.powXY"}},m=[{value:"53. \u6700\u5927\u5b50\u5e8f\u548c",id:"53-\u6700\u5927\u5b50\u5e8f\u548c",children:[]},{value:"\u66b4\u529b\u6cd5",id:"\u66b4\u529b\u6cd5",children:[]},{value:"\u5206\u6cbb\u6cd5",id:"\u5206\u6cbb\u6cd5",children:[{value:"\u590d\u6742\u5ea6\u5206\u6790",id:"\u590d\u6742\u5ea6\u5206\u6790",children:[]}]},{value:"\u52a8\u6001\u89c4\u5212",id:"\u52a8\u6001\u89c4\u5212",children:[{value:"\u590d\u6742\u5ea6\u5206\u6790",id:"\u590d\u6742\u5ea6\u5206\u6790-1",children:[]}]}],c={rightToc:m};function u(e){var n=e.components,r=Object(i.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},c,r,{components:n,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"53-\u6700\u5927\u5b50\u5e8f\u548c"},"53. \u6700\u5927\u5b50\u5e8f\u548c"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u96be\u5ea6 \u7b80\u5355"),Object(b.b)("p",{parentName:"blockquote"},"\u7ed9\u5b9a\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 ",Object(b.b)("inlineCode",{parentName:"p"},"nums")," \uff0c\u627e\u5230\u4e00\u4e2a\u5177\u6709\u6700\u5927\u548c\u7684\u8fde\u7eed\u5b50\u6570\u7ec4\uff08\u5b50\u6570\u7ec4\u6700\u5c11\u5305\u542b\u4e00\u4e2a\u5143\u7d20\uff09\uff0c\u8fd4\u56de\u5176\u6700\u5927\u548c\u3002"),Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"\u793a\u4f8b:")),Object(b.b)("pre",{parentName:"blockquote"},Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"\u8f93\u5165: [-2,1,-3,4,-1,2,1,-5,4]\n\u8f93\u51fa: 6\n\u89e3\u91ca: \u8fde\u7eed\u5b50\u6570\u7ec4 [4,-1,2,1] \u7684\u548c\u6700\u5927\uff0c\u4e3a 6\u3002\n")),Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"\u8fdb\u9636:")),Object(b.b)("p",{parentName:"blockquote"},"\u5982\u679c\u4f60\u5df2\u7ecf\u5b9e\u73b0\u590d\u6742\u5ea6\u4e3a O(",Object(b.b)("em",{parentName:"p"},"n"),") \u7684\u89e3\u6cd5\uff0c\u5c1d\u8bd5\u4f7f\u7528\u66f4\u4e3a\u7cbe\u5999\u7684\u5206\u6cbb\u6cd5\u6c42\u89e3\u3002")),Object(b.b)("blockquote",null,Object(b.b)("h4",Object(a.a)({parentName:"blockquote"},{id:"53-maximum-subarray"}),"53. Maximum Subarray"),Object(b.b)("p",{parentName:"blockquote"},"\u96be\u5ea6 \u7b80\u5355"),Object(b.b)("p",{parentName:"blockquote"},"Given an integer array ",Object(b.b)("inlineCode",{parentName:"p"},"nums"),", find the contiguous subarray (containing at least one number) which has the largest sum and return ",Object(b.b)("em",{parentName:"p"},"its sum"),"."),Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"Follow up:")," If you have figured out the ",Object(b.b)("inlineCode",{parentName:"p"},"O(n)")," solution, try coding another solution using the ",Object(b.b)("strong",{parentName:"p"},"divide and conquer")," approach, which is more subtle."),Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"Example 1:")),Object(b.b)("pre",{parentName:"blockquote"},Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"Input: nums = [-2,1,-3,4,-1,2,1,-5,4]\nOutput: 6\nExplanation: [4,-1,2,1] has the largest sum = 6.\n")),Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"Example 2:")),Object(b.b)("pre",{parentName:"blockquote"},Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"Input: nums = [1]\nOutput: 1\n")),Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"Example 3:")),Object(b.b)("pre",{parentName:"blockquote"},Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"Input: nums = [0]\nOutput: 0\n")),Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"Example 4:")),Object(b.b)("pre",{parentName:"blockquote"},Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"Input: nums = [-1]\nOutput: -1\n")),Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"Example 5:")),Object(b.b)("pre",{parentName:"blockquote"},Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"Input: nums = [-2147483647]\nOutput: -2147483647\n")),Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"Constraints:")),Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"1 <= nums.length <= 2 * 104")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"-231 <= nums[i] <= 231 - 1")))),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u8fd9\u9053\u9898\u4e5f\u5c5e\u4e8e\u6700\u5927\u5207\u7247\u95ee\u9898\uff08\u6700\u5927\u533a\u6bb5\uff0cGreatest Slice\uff09"),Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},"\u6982\u5ff5\u533a\u5206",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5b50\u4e32\u3001\u5b50\u6570\u7ec4\u3001\u5b50\u533a\u95f4\u5fc5\u987b\u662f\u8fde\u7eed\u7684\uff0c\u5b50\u5e8f\u5217\u53ef\u4ee5\u4e0d\u8fde\u7eed"))))),Object(b.b)("br",null),Object(b.b)("h1",{id:"\u66b4\u529b\u6cd5"},"\u66b4\u529b\u6cd5"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u7a77\u4e3e\u6240\u6709\u53ef\u80fd\u7684\u8fde\u7eed\u5b50\u5e8f\u5217\uff0c\u5206\u522b\u8ba1\u7b97\u51fa\u5b83\u4eec\u7684\u548c\uff0c\u6700\u540e\u53d6\u5176\u4e2d\u7684\u6700\u5927\u503c")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u66b4\u529b\u6cd5"',title:'"\u66b4\u529b\u6cd5"'}),'public class _53\u6700\u5927\u8fde\u7eed\u5b50\u5e8f\u548c {\n    public static int maxSubArray(int[] nums) {\n        if (nums == null || nums.length == 0) return 0;\n\n        int sum = Integer.MIN_VALUE; // \u8fd9\n\n        for (int begin = 0; begin < nums.length; begin++) {\n            for (int end = begin; end < nums.length; end++) {\n                int currentSum = 0;\n                for (int i = begin; i <= end; i++) { // \u533a\u95f4\u6c42\u548c\n                    currentSum += nums[i];\n                }\n\n                if (currentSum > sum) sum = currentSum;\n            }\n        }\n\n        return sum;\n    }\n\n    public static void main(String[] args) {\n        int[] nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};\n        int sum = maxSubArray(nums);\n        System.out.println("sum = " + sum);\n    }\n}\n')),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="\u8fd0\u884c\u7ed3\u679c"',title:'"\u8fd0\u884c\u7ed3\u679c"'}),"sum = 6\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6",Object(b.b)("inlineCode",{parentName:"li"},"O(n3)"))),Object(b.b)("br",null),Object(b.b)("h1",{id:"\u5206\u6cbb\u6cd5"},"\u5206\u6cbb\u6cd5"),Object(b.b)("blockquote",null,Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},"\u5c06\u5e8f\u5217\u5747\u5300\u5730\u5206\u5272\u4e3a ",Object(b.b)("inlineCode",{parentName:"li"},"2 ")," \u4e2a\u5b50\u5e8f\u5217"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"[begin, end] = [begin, mid) + [mid, end]"),"\uff0c\u5176\u4e2d ",Object(b.b)("inlineCode",{parentName:"li"},"mid = (begin + end) / 2"),"\u5b9e\u73b0\u65f6\u7528\u4f4d\u8fd0\u7b97\u5b9e\u73b0"),Object(b.b)("li",{parentName:"ul"},"\u5047\u8bbe\u6709\u4e00\u4e2a\u89e3\u51b3\u8be5\u95ee\u9898\u7684\u6570\u5b66\u51fd\u6570 ",Object(b.b)("inlineCode",{parentName:"li"},"S[i, j]")," \uff0c\u5b83\u8fd4\u56de\u4ece ",Object(b.b)("inlineCode",{parentName:"li"},"i")," \u5f00\u59cb\u5230 ",Object(b.b)("inlineCode",{parentName:"li"},"j")," \u7ed3\u675f\u7684\u8fde\u7eed\u5b50\u5e8f\u5217\u7684 ",Object(b.b)("inlineCode",{parentName:"li"},"\u548c"),"\uff0c\u5219\u95ee\u9898\u7684\u89e3\u6709 ",Object(b.b)("inlineCode",{parentName:"li"},"3")," \u79cd\u53ef\u80fd",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u533a\u95f4 ",Object(b.b)("inlineCode",{parentName:"li"},"[i, j]"),"\u5728\u5207\u5272\u51fa\u6765\u7684 ",Object(b.b)("inlineCode",{parentName:"li"},"2")," \u4e2a\u5b50\u5e8f\u5217\u7684",Object(b.b)("inlineCode",{parentName:"li"},"\u5de6"),"\u5b50\u5e8f\u5217\u4e2d"),Object(b.b)("li",{parentName:"ul"},"\u533a\u95f4 ",Object(b.b)("inlineCode",{parentName:"li"},"[i, j]"),"\u5728\u5207\u5272\u51fa\u6765\u7684 ",Object(b.b)("inlineCode",{parentName:"li"},"2")," \u4e2a\u5b50\u5e8f\u5217\u7684",Object(b.b)("inlineCode",{parentName:"li"},"\u53f3"),"\u5b50\u5e8f\u5217\u4e2d"),Object(b.b)("li",{parentName:"ul"},"\u533a\u95f4 ",Object(b.b)("inlineCode",{parentName:"li"},"[i, j]"),"\u6a2a\u8de8\u4e86\u5207\u5272\u51fa\u6765\u7684 ",Object(b.b)("inlineCode",{parentName:"li"},"2")," \u4e2a\u5b50\u5e8f\u5217\uff0c\u88ab\u5207\u5206\u4e3a ",Object(b.b)("inlineCode",{parentName:"li"},"[i, mid)")," \u548c ",Object(b.b)("inlineCode",{parentName:"li"},"[mid, j]")))),Object(b.b)("li",{parentName:"ul"},"\u9012\u5f52\u5206\u5272\uff0c\u9012\u5f52\u9000\u51fa\u6761\u4ef6\uff1a",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5207\u5206\u5230\u53ea\u5269 ",Object(b.b)("inlineCode",{parentName:"li"},"2")," \u4e2a\uff0c\u8fd4\u56de\u8fd9\u4e24\u4e2a\u6570\u53ca\u8fd9\u4e24\u4e2a\u8f93\u7684\u548c\uff0c\u4e09\u8005\u7684\u6700\u5927\u503c"),Object(b.b)("li",{parentName:"ul"},"\u5207\u5206\u5230\u53ea\u5269 ",Object(b.b)("inlineCode",{parentName:"li"},"1")," \u4e2a\uff0c\u8fd4\u56de\u8fd9\u4e2a\u552f\u4e00\u7684\u6570"))))),Object(b.b)("img",{src:t(1007).default,style:{zoom:"45%",border:"0px black solid"}}),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u5bf9\u4e8e",Object(b.b)("inlineCode",{parentName:"p"},"\u60c5\u51b5 3 "),"\uff0c\u601d\u8003\u5176\u5177\u6709\u7684\u7279\u70b9"),Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"[i, mid)"),"\u662f\u90a3\u4e00\u90e8\u5206\uff1f\uff1a\u4ece ",Object(b.b)("inlineCode",{parentName:"li"},"mid")," \u51fa\u53d1\uff0c\u5411 ",Object(b.b)("inlineCode",{parentName:"li"},"\u5de6")," \u9010\u4e2a\u5143\u7d20\u6c42\u548c\uff0c\u76f4\u5230\u627e\u51fa\u5176\u6700\u5927\u548c \uff0c\u4e4b\u95f4\u7684\u5b50\u5e8f\u5217\u5c31\u662f ",Object(b.b)("inlineCode",{parentName:"li"},"[i, mid)")," "),Object(b.b)("li",{parentName:"ul"},"\u540c\u7406\uff0c \u4ece ",Object(b.b)("inlineCode",{parentName:"li"},"mid")," \u89e6\u53d1\uff0c\u5411 ",Object(b.b)("inlineCode",{parentName:"li"},"\u53f3")," \u9010\u4e2a\u5143\u7d20\u6c42\u548c\uff0c\u76f4\u5230\u627e\u51fa\u5176\u6700\u5927\u548c \uff0c\u4e4b\u95f4\u7684\u5b50\u5e8f\u5217\u5c31\u662f",Object(b.b)("inlineCode",{parentName:"li"},"[mid, j]")))),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class _53\u6700\u5927\u8fde\u7eed\u5b50\u5e8f\u548c {\n    public static int maxSubArray(int[] nums) {\n        if (nums == null || nums.length == 0) return 0;\n\n        return maxSubArray(nums, 0, nums.length - 1);\n    }\n\n    /**\n     * \u6c42\u89e3 begin \u5230 end \u4e4b\u95f4\uff0c\u6700\u5927\u8fde\u7eed\u5b50\u5e8f\u5217\u7684\u548c\n     *\n     * @param nums  \u7ed9\u5b9a\u5e8f\u5217\n     * @param begin \u8d77\u70b9\u6307\u9488\n     * @param end   \u7ec8\u70b9\u6307\u9488\n     * @return \u6700\u5927\u5b50\u5e8f\u5217\u548c\n     */\n    private static int maxSubArray(int[] nums, int begin, int end) {\n        if (end - begin == 1) // \u53ea\u5269\u4e24\u4e2a\n            return Math.max(nums[begin] + nums[end], Math.max(nums[end], nums[begin]));\n        if (end == begin) // \u53ea\u5269\u4e00\u4e2a\n            return nums[begin];\n\n        int mid = (begin + end) >> 1;\n        // \u5206\u5272\u6210 2 \u4e2a\n        int leftMax = maxSubArray(nums, begin, mid); // \u6c42\u5de6\u8fb9\u6700\u5927\u5b50\u5e8f\u5217\u548c\n        int rightMax = maxSubArray(nums, mid, end); // \u6c42\u53f3\u8fb9\u6700\u5927\u5b50\u5e8f\u5217\u548c\n        // \u5904\u7406\u60c5\u51b5 3\n        int leftMidMax = Integer.MIN_VALUE;\n        int rightMidMax = Integer.MIN_VALUE;\n        // \u4ecemid\u5f00\u59cb\uff0c\u5411\u5de6\u9010\u4e2a\u6c42\u548c\uff0c\u627e\u51fa\u6700\u5927\u548c\n        int currentSum = 0;\n        for (int i = mid - 1; i >= begin; i--) {\n            currentSum += nums[i];\n            leftMidMax = Math.max(leftMidMax, currentSum);\n        }\n        // \u4ecemid\u5f00\u59cb\uff0c\u5411\u53f3\u9010\u4e2a\u6c42\u548c\uff0c\u627e\u51fa\u6700\u5927\u548c\n        currentSum = 0;\n        for (int i = mid; i <= end; i++) {\n            currentSum += nums[i];\n            rightMidMax = Math.max(rightMidMax, currentSum);\n        }\n\n        int midMax = leftMidMax + rightMidMax;\n        return Math.max(midMax, Math.max(leftMax, rightMax));\n    }\n\n    public static void main(String[] args) {\n        int[] nums1 = {-2, 1, -3, 4, -1, 2, 1, -5, 4};\n        int[] nums2 = {-1};\n        int[] nums3 = {-2, 1};\n        int[] nums4 = {1, 2};\n        int[] nums5 = {1};\n\n        int sum1 = maxSubArray(nums1);\n        int sum2 = maxSubArray(nums2);\n        int sum3 = maxSubArray(nums3);\n        int sum4 = maxSubArray(nums4);\n        int sum5 = maxSubArray(nums5);\n\n        System.out.println("sum1 = " + sum1); // expect 6\n        System.out.println("sum2 = " + sum2); // expect -1\n        System.out.println("sum3 = " + sum3); // expect 1\n        System.out.println("sum4 = " + sum4); // expect 3\n        System.out.println("sum5 = " + sum5); // expect 1\n    }\n}\n')),Object(b.b)("div",{className:"admonition admonition-info alert alert--info"},Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u95ee\u9898")),Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"\u8fd9\u79cd\u5199\u6cd5\u6bd4\u8f83\u7b26\u5408\u6211\u4e2a\u4eba\u7684\u601d\u8def"),Object(b.b)("ul",{parentName:"div"},Object(b.b)("li",{parentName:"ul"},"\u6839\u636e\u9898\u89e3\uff0c\u5982\u679c\u4e25\u683c\u5c06\u6240\u6709\u533a\u95f4\u7684\u8868\u793a\u5f62\u5f0f\u89c4\u5b9a\u4e3a",Object(b.b)("strong",{parentName:"li"},"\u5de6\u95ed\u53f3\u5f00"),"\uff0c\u53ef\u4ee5\u8fdb\u4e00\u6b65\u7b80\u5316\u9012\u5f52\u9000\u51fa\u6761\u4ef6")))),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u5de6\u95ed\u53f3\u5f00\u533a\u95f4"',title:'"\u5de6\u95ed\u53f3\u5f00\u533a\u95f4"'}),"public static int maxSubArray(int[] nums) {\n    if (nums == null || nums.length == 0) return 0;\n\n    return maxSubArray(nums, 0, nums.length); // \u4fee\u6539\u4e3a\u5de6\u95ed\u53f3\u5f00\uff0c\u6240\u4ee5\u4e0d\u518d -1\n}\n\n/**\n * \u6c42\u89e3 begin \u5230 end \u4e4b\u95f4\uff0c\u6700\u5927\u8fde\u7eed\u5b50\u5e8f\u5217\u7684\u548c\n *\n * @param nums  \u7ed9\u5b9a\u5e8f\u5217\n * @param begin \u8d77\u70b9\u6307\u9488\n * @param end   \u7ec8\u70b9\u6307\u9488\n * @return \u6700\u5927\u5b50\u5e8f\u5217\u548c\n */\nprivate static int maxSubArray(int[] nums, int begin, int end) {\n    if (end - begin < 2) // \u4fee\u6539\u4e3a\u5de6\u95ed\u53f3\u5f00 \u8fdb\u5165\u6b64if \u5fc5\u5b9a\u5206\u5272\u5230\u53ea\u67091\u4e2a\u5143\u7d20\n        return nums[begin];  // \u6545\u76f4\u63a5\u8fd4\u56de\n\n    int mid = (begin + end) >> 1;\n    // \u5206\u5272\u6210 2 \u4e2a\n    int leftMax = maxSubArray(nums, begin, mid); // \u6c42\u5de6\u8fb9\u6700\u5927\u5b50\u5e8f\u5217\u548c\n    int rightMax = maxSubArray(nums, mid, end); // \u6c42\u53f3\u8fb9\u6700\u5927\u5b50\u5e8f\u5217\u548c\n    // \u5904\u7406\u60c5\u51b5 3\n    int leftMidMax = Integer.MIN_VALUE;\n    int rightMidMax = Integer.MIN_VALUE;\n    // \u4ecemid\u5f00\u59cb\uff0c\u5411\u5de6\u9010\u4e2a\u6c42\u548c\uff0c\u627e\u51fa\u6700\u5927\u548c\n    int currentSum = 0;\n    for (int i = mid - 1; i >= begin; i--) {\n        currentSum += nums[i];\n        leftMidMax = Math.max(leftMidMax, currentSum);\n    }\n    // \u4ecemid\u5f00\u59cb\uff0c\u5411\u53f3\u9010\u4e2a\u6c42\u548c\uff0c\u627e\u51fa\u6700\u5927\u548c\n    currentSum = 0;\n    for (int i = mid; i < end; i++) { // \u4fee\u6539\u4e3a\u4f5c\u5f0a\u53c8\u5f00\uff0c\u6240\u4ee5\u4e0d\u80fd\u518d\u52a0\u7b49\u53f7 =\n        currentSum += nums[i];\n        rightMidMax = Math.max(rightMidMax, currentSum);\n    }\n\n    int midMax = leftMidMax + rightMidMax;\n    return Math.max(midMax, Math.max(leftMax, rightMax));\n}\n")),Object(b.b)("br",null),Object(b.b)("h2",{id:"\u590d\u6742\u5ea6\u5206\u6790"},"\u590d\u6742\u5ea6\u5206\u6790"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u5206\u6cbb\u6570\u636e\u89c4\u6a21\u4e00\u5206\u4e3a\u4e8c"),Object(b.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u60c5\u51b53\uff0c\u4ecemid\u5f00\u59cb\u5411\u4e24\u4fa7\u6c42\u548c\u4e3a",Object(b.b)("inlineCode",{parentName:"li"},"O(n)")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"T(n) = T(n / 2) + T(n / 2) + O(n)")," "),Object(b.b)("li",{parentName:"ul"},"\u6839\u636e\u5206\u6cbb\u6cd5\u4e3b\u5b9a\u7406\uff0c\u6b64\u5904a = 2, b = 2, d = 1"),Object(b.b)("li",{parentName:"ul"},"\u5219",Object(b.b)("inlineCode",{parentName:"li"},"log_b (a) = 1"),"\uff0c\u53c8",Object(b.b)("inlineCode",{parentName:"li"},"d = 1"),"\uff0c\u5219\u6ee1\u8db3",Object(b.b)("inlineCode",{parentName:"li"},"d = log_b (a)"),"\u7684\u60c5\u51b5"),Object(b.b)("li",{parentName:"ul"},"\u6545\u6839\u636e\u4e3b\u5b9a\u7406\u7ed3\u8bba\uff1a",Object(b.b)("inlineCode",{parentName:"li"},"T(n) = O(n^d * logn) = O(nlogn)"))),Object(b.b)("br",null),Object(b.b)("h1",{id:"\u52a8\u6001\u89c4\u5212"},"\u52a8\u6001\u89c4\u5212"),Object(b.b)("p",null,"\u5bf9\u4e8e ",Object(b.b)("inlineCode",{parentName:"p"},"[-2, 1, -3, 4, -1, 2, 1, -5, 4]")," "),Object(b.b)("blockquote",null,Object(b.b)("ol",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ol"},Object(b.b)("strong",{parentName:"li"},"\u5b9a\u4e49\u72b6\u6001\uff08\u96be\u70b9\uff09"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u5047\u8bbe ",Object(b.b)("inlineCode",{parentName:"strong"},"dp(i)")," \u662f\u4ee5\u7b2c",Object(b.b)("inlineCode",{parentName:"strong"},"i")," \u4e2a\u5143\u7d20 ",Object(b.b)("inlineCode",{parentName:"strong"},"nums[i]"),"  ",Object(b.b)("em",{parentName:"strong"},"\u7ed3\u5c3e")," \u7684\u6700\u5927\u8fde\u7eed\u5b50\u5e8f\u5217\u548c"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u4ee5 ",Object(b.b)("inlineCode",{parentName:"li"},"nums[0] = -2")," \u7ed3\u5c3e\u7684\u6700\u5927",Object(b.b)("strong",{parentName:"li"},"\u8fde\u7eed"),"\u5b50\u5e8f\u5217\u662f ",Object(b.b)("inlineCode",{parentName:"li"},"[-2]"),"\uff0c\u6240\u4ee5 ",Object(b.b)("inlineCode",{parentName:"li"},"dp(0) = -2")),Object(b.b)("li",{parentName:"ul"},"\u4ee5 ",Object(b.b)("inlineCode",{parentName:"li"},"nums[1] = 1")," \u7ed3\u5c3e\u7684\u8fde\u7eed\u5b50\u5e8f\u5217\u662f ",Object(b.b)("inlineCode",{parentName:"li"},"[-2, 1]")," \u548c ",Object(b.b)("inlineCode",{parentName:"li"},"[1]"),"\uff0c\u6700\u5927\u8fde\u7eed\u5b50\u5e8f\u5217\u4e3a",Object(b.b)("inlineCode",{parentName:"li"},"[1]"),"\uff0c\u6240\u4ee5 ",Object(b.b)("inlineCode",{parentName:"li"},"dp(1) = 1")),Object(b.b)("li",{parentName:"ul"},"\u4ee5 ",Object(b.b)("inlineCode",{parentName:"li"},"nums[2] = -3")," \u7ed3\u5c3e\u7684\u6700\u5927",Object(b.b)("strong",{parentName:"li"},"\u8fde\u7eed"),"\u5b50\u5e8f\u5217\u662f ",Object(b.b)("inlineCode",{parentName:"li"},"[1, -3]"),"\uff0c\u6240\u4ee5 ",Object(b.b)("inlineCode",{parentName:"li"},"dp(2) = dp(1) + (-3) = -2")),Object(b.b)("li",{parentName:"ul"},"\u4ee5 ",Object(b.b)("inlineCode",{parentName:"li"},"nums[3] = 4")," \u7ed3\u5c3e\u7684\u6700\u5927",Object(b.b)("strong",{parentName:"li"},"\u8fde\u7eed"),"\u5b50\u5e8f\u5217\u662f ",Object(b.b)("inlineCode",{parentName:"li"},"[4]"),"\uff0c\u6240\u4ee5 ",Object(b.b)("inlineCode",{parentName:"li"},"dp(3) = 4")),Object(b.b)("li",{parentName:"ul"},"\u4ee5 ",Object(b.b)("inlineCode",{parentName:"li"},"nums[4] = -1")," \u7ed3\u5c3e\u7684\u6700\u5927",Object(b.b)("strong",{parentName:"li"},"\u8fde\u7eed"),"\u5b50\u5e8f\u5217\u662f ",Object(b.b)("inlineCode",{parentName:"li"},"[4, -1]"),"\uff0c\u6240\u4ee5 ",Object(b.b)("inlineCode",{parentName:"li"},"dp(4) = dp(3) + (-1) = 3")),Object(b.b)("li",{parentName:"ul"},"\u4ee5 ",Object(b.b)("inlineCode",{parentName:"li"},"nums[5] = 2")," \u7ed3\u5c3e\u7684\u6700\u5927",Object(b.b)("strong",{parentName:"li"},"\u8fde\u7eed"),"\u5b50\u5e8f\u5217\u662f ",Object(b.b)("inlineCode",{parentName:"li"},"[4, -1, 2]"),"\uff0c\u6240\u4ee5 ",Object(b.b)("inlineCode",{parentName:"li"},"dp(5) = dp(4) + 2 = 5")),Object(b.b)("li",{parentName:"ul"},"\u4ee5 ",Object(b.b)("inlineCode",{parentName:"li"},"nums[6] = 1")," \u7ed3\u5c3e\u7684\u6700\u5927",Object(b.b)("strong",{parentName:"li"},"\u8fde\u7eed"),"\u5b50\u5e8f\u5217\u662f ",Object(b.b)("inlineCode",{parentName:"li"},"[4, -1, 2, 1]"),"\uff0c\u6240\u4ee5 ",Object(b.b)("inlineCode",{parentName:"li"},"dp(6) = dp(5) + 1 = 6")),Object(b.b)("li",{parentName:"ul"},"\u4ee5 ",Object(b.b)("inlineCode",{parentName:"li"},"nums[7] = -5")," \u7ed3\u5c3e\u7684\u6700\u5927",Object(b.b)("strong",{parentName:"li"},"\u8fde\u7eed"),"\u5b50\u5e8f\u5217\u662f ",Object(b.b)("inlineCode",{parentName:"li"},"[4, -1, 2, 1, -5]"),"\uff0c\u6240\u4ee5 ",Object(b.b)("inlineCode",{parentName:"li"},"dp(7) = dp(6) + (-5) = 1")),Object(b.b)("li",{parentName:"ul"},"\u4ee5 ",Object(b.b)("inlineCode",{parentName:"li"},"nums[8] = 4")," \u7ed3\u5c3e\u7684\u6700\u5927",Object(b.b)("strong",{parentName:"li"},"\u8fde\u7eed"),"\u5b50\u5e8f\u5217\u662f ",Object(b.b)("inlineCode",{parentName:"li"},"[4, -1, 2, 1, -5, 4]"),"\uff0c\u6240\u4ee5 ",Object(b.b)("inlineCode",{parentName:"li"},"dp(8) = dp(7) + 4 = 5")))))),Object(b.b)("li",{parentName:"ol"},Object(b.b)("strong",{parentName:"li"},"\u521d\u59cb\u3001\u8fb9\u754c\u72b6\u6001"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"dp(0)")," \u7684\u503c\u5fc5\u7136\u662f ",Object(b.b)("inlineCode",{parentName:"li"},"nums[0]")))),Object(b.b)("li",{parentName:"ol"},Object(b.b)("strong",{parentName:"li"},"\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5728\u6c42 ",Object(b.b)("inlineCode",{parentName:"li"},"dp(i)")," \u7684\u65f6\u5019\uff0c\u5e94\u5f53\u53c2\u8003 ",Object(b.b)("inlineCode",{parentName:"li"},"dp(i - 1)")," \u7684\u503c\uff0c\u5373\u524d\u4e00\u4e2a\u7684\u503c",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5982\u679c\u524d\u4e00\u4e2a\u7684\u503c\u4e0d\u662f ",Object(b.b)("inlineCode",{parentName:"li"},"\u6b63\u6570")," \uff0c\u90a3\u5c31\u6ca1\u5fc5\u8981\u52a0\u4e0a\u5b83\uff0c\u56e0\u4e3a\u4f1a\u8ba9\u8fde\u7eed\u5b50\u5e8f\u5217\u548c\u53d8\u5c0f"),Object(b.b)("li",{parentName:"ul"},"\u5426\u5219\uff0c\u8bf4\u660e",Object(b.b)("inlineCode",{parentName:"li"},"dp(i - 1)")," \u662f\u4e2a\u6b63\u6570\uff0c\u90a3\u5c31\u628a\u5b83\u5e26\u4e0a\uff0c\u518d\u52a0\u4e0a\u5f53\u524d\u7ed3\u5c3e\u503c")))))),Object(b.b)("pre",{parentName:"blockquote"},Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"if (dp[i - 1] <= 0) \n    dp[i] = nums[i];\nelse \n    dp[i] = dp[i - 1] + nums[i];\n")),Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},"\u6240\u6c42\u89e3\u5373\u4e3a ",Object(b.b)("inlineCode",{parentName:"li"},"dp(0)")," \u5230 ",Object(b.b)("inlineCode",{parentName:"li"},"dp(8)")," \u4e2d\u7684 ",Object(b.b)("inlineCode",{parentName:"li"},"\u6700\u5927\u503c")))),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u52a8\u6001\u89c4\u5212\u6cd5"',title:'"\u52a8\u6001\u89c4\u5212\u6cd5"'}),"public static int maxSubArray(int[] nums) {\n    if (nums == null || nums.length == 0) return 0;\n\n    int[] dp = new int[nums.length];\n    // \u521d\u59cb\u72b6\u6001\uff0cdp[0] \u5fc5\u7136\u7b49\u4e8e nums[0]\n    dp[0] = nums[0];\n    int max = dp[0];\n\n    for (int i = 1; i < nums.length; i++) {\n        // \u72b6\u6001\u8f6c\u79fb\u8fd4\u7a0b\n        if (dp[i - 1] <= 0)\n            dp[i] = nums[i];\n        else\n            dp[i] = dp[i - 1] + nums[i];\n\n        // \u8f93\u51fadp\u6570\u7ec4\u4e2d\u7684\u6700\u5927\u503c\n        max = Math.max(max, dp[i]);\n    }\n\n    return max;\n}\n")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"\u4f18\u5316")),Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a\u5b9e\u9645\u4e0a\u6c42 ",Object(b.b)("inlineCode",{parentName:"li"},"dp[i]")," \uff0c\u53ea\u9700\u8981\u53c2\u8003 ",Object(b.b)("inlineCode",{parentName:"li"},"dp[i - 1]"),"\u5c31\u591f\u4e86\uff0c\u518d\u524d\u9762\u7684\u503c\u6839\u672c\u7528\u4e0d\u4e0a"),Object(b.b)("li",{parentName:"ul"},"\u6240\u4ee5\u5b9e\u9645\u4e0a\u6ca1\u5fc5\u8981\u5f04\u4e2a ",Object(b.b)("inlineCode",{parentName:"li"},"dp")," \u6570\u7ec4\uff0c\u53ea\u9700\u8981\u524d\u4e00\u4e2a\u503c\u5c31\u884c\u4e86"))),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u79fb\u9664dp\u6570\u7ec4"',title:'"\u79fb\u9664dp\u6570\u7ec4"'}),"public static int maxSubArray(int[] nums) {\n    if (nums == null || nums.length == 0) return 0;\n\n    int current = 0;\n    int last = nums[0];\n    int max = last;\n\n    for (int i = 1; i < nums.length; i++) {\n        // \u72b6\u6001\u8f6c\u79fb\u8fd4\u7a0b\n        if (last <= 0)\n            current = nums[i];\n        else\n            current = last + nums[i];\n        // \u8f93\u51fadp\u6570\u7ec4\u4e2d\u7684\u6700\u5927\u503c\n        max = Math.max(max, current);\n        last = current;\n    }\n\n    return max;\n}\n")),Object(b.b)("h2",{id:"\u590d\u6742\u5ea6\u5206\u6790-1"},"\u590d\u6742\u5ea6\u5206\u6790"),Object(b.b)("p",null,"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",Object(b.b)("inlineCode",{parentName:"p"},"O(1)")),Object(b.b)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",Object(b.b)("inlineCode",{parentName:"p"},"O(n)")))}u.isMDXComponent=!0},567:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var a=t(0),i=t.n(a);function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){b(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},b=Object.keys(e);for(a=0;a<b.length;a++)t=b[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)t=b[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),u=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},o={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},O=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,b=e.originalType,r=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),p=u(t),O=a,d=p["".concat(r,".").concat(O)]||p[O]||o[O]||b;return t?i.a.createElement(d,l(l({ref:n},c),{},{components:t})):i.a.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var b=t.length,r=new Array(b);r[0]=O;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<b;c++)r[c]=t[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"}}]);