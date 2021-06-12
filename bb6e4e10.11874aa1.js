(window.webpackJsonp=window.webpackJsonp||[]).push([[376],{432:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return p}));var r=t(2),i=t(6),a=(t(0),t(561)),s={id:"47.permutations2",title:"47.\u5168\u6392\u52172",hide_title:!0},c={unversionedId:"sf/dfs/47.permutations2",id:"sf/dfs/47.permutations2",isDocsHomePage:!1,title:"47.\u5168\u6392\u52172",description:"47.\u5168\u6392\u52172",source:"@site/datastructure/sf/dfs/47.\u5168\u6392\u52172.md",slug:"/sf/dfs/47.permutations2",permalink:"/datastructure/sf/dfs/47.permutations2",version:"current",sidebar:"docs2",previous:{title:"46.\u5168\u6392\u5217",permalink:"/datastructure/sf/dfs/46.permutations"},next:{title:"22.\u62ec\u53f7\u751f\u6210",permalink:"/datastructure/sf/dfs/22.generateParentheses"}},u=[{value:"47.\u5168\u6392\u52172",id:"47\u5168\u6392\u52172",children:[{value:"DFS",id:"dfs",children:[]}]}],o={rightToc:u};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("br",null),Object(a.b)("h1",{id:"47\u5168\u6392\u52172"},"47.\u5168\u6392\u52172"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://leetcode-cn.com/problems/permutations-ii/"}),"47. \u5168\u6392\u5217 II")),Object(a.b)("p",null,"\u96be\u5ea6 ",Object(a.b)("inlineCode",{parentName:"p"},"\u4e2d\u7b49")),Object(a.b)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u53ef\u5305\u542b\u91cd\u590d\u6570\u5b57\u7684\u5e8f\u5217 ",Object(a.b)("inlineCode",{parentName:"p"},"nums")," \uff0c",Object(a.b)("strong",{parentName:"p"},"\u6309\u4efb\u610f\u987a\u5e8f")," \u8fd4\u56de\u6240\u6709\u4e0d\u91cd\u590d\u7684\u5168\u6392\u5217\u3002"),Object(a.b)("p",null,"Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1anums = [1,1,2]\n\u8f93\u51fa\uff1a\n[[1,1,2],\n [1,2,1],\n [2,1,1]]\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1anums = [1,2,3]\n\u8f93\u51fa\uff1a[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"1 <= nums.length <= 8")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"-10 <= nums[i] <= 10"))),Object(a.b)("h2",{id:"dfs"},"DFS"),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u4e0e 46 \u9898\u7684\u533a\u522b")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"\u6309\u7167 46 \u9898\u7684\u89e3\u6cd5\uff0c\u7b54\u6848\u5b9e\u9645\u4e0a\u6b63\u786e\u7684\uff0c\u53ea\u4e0d\u8fc7\u7b54\u6848\u4e2d\u5305\u542b\u91cd\u590d\u7ed3\u679c"),Object(a.b)("ul",{parentName:"div"},Object(a.b)("li",{parentName:"ul"},"\u8981\u8fdb\u884c ",Object(a.b)("inlineCode",{parentName:"li"},"\u53bb\u91cd")," \u5904\u7406")))),Object(a.b)("blockquote",null,Object(a.b)("h2",Object(r.a)({parentName:"blockquote"},{id:"\u5982\u4f55\u53bb\u91cd"}),"\u5982\u4f55\u53bb\u91cd"),Object(a.b)("h3",Object(r.a)({parentName:"blockquote"},{id:"\u4f7f\u7528-contains-\u65b9\u6cd5\u7b5b\u9009"}),"\u4f7f\u7528 contains \u65b9\u6cd5\u7b5b\u9009"),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"\u5728\u5411\u6700\u7ec8\u7ed3\u679c\u96c6\u4e2d\u6dfb\u52a0\u7ed3\u679c\u65f6\uff0c\u5148\u5224\u65ad\u7ed3\u679c\u662f\u4e0d\u662f\u5df2\u7ecf\u5b58\u5728\u8fc7\u4e86"),Object(a.b)("li",{parentName:"ul"},"\u975e\u5e38\u597d\u5b9e\u73b0\uff0c\u4f46\u662f\u975e\u5e38\u8017\u65f6")),Object(a.b)("h3",Object(r.a)({parentName:"blockquote"},{id:"\u57fa\u4e8e\u6570\u7ec4\u6bd4\u8f83"}),"\u57fa\u4e8e\u6570\u7ec4\u6bd4\u8f83"),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"\u5199\u4e00\u4e2a\u65b9\u6cd5\uff0c\u6bd4\u8f83\u5373\u5c06\u8981\u88ab\u6bd4\u8f83\u7684\u90a3\u4e2a\u503c\uff0c\u662f\u4e0d\u662f\u4e4b\u524d\u5df2\u7ecf\u51fa\u73b0\u8fc7"),Object(a.b)("li",{parentName:"ul"},"\u5728 [depth, current) \u4e4b\u95f4\u6709\u6ca1\u6709\u4e0e current \u91cd\u590d\u7684\u5143\u7d20\uff0c\u5c31\u662f\u7528 i \u904d\u5386\u8fd9\u4e2a\u533a\u95f4\uff0c\u6bd4\u8f83 nums","[i]"," \u4e0e nums","[current]"," \u7684\u503c"),Object(a.b)("li",{parentName:"ul"},"\u7cbe\u9ad3\u662f\uff0c\u5728 DFS \u7684\u6bcf\u4e00\u5c42\uff0c\u4fdd\u8bc1\u67d0\u5143\u7d20\u53ea\u51fa\u73b0\u8fc7\u4e00\u6b21\uff0c\u9664\u4e86\u6df1\u5ea6\u4f4d\u7f6e\u4ee5\u5916\u7684\u4f4d\u7f6e\uff0c\u5143\u7d20\u987a\u5e8f\u6839\u672c\u4e0d\u91cd\u8981\uff0c\u53ef\u4ee5\u5168\u90e8\u5254\u9664\uff0c\u56e0\u4e3a\u5b83\u4eec\u6700\u7ec8\u6392\u5217\u7ec4\u5408\u7684\u7ed3\u679c\u662f\u4e00\u81f4\u7684"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class _47\u5168\u6392\u52172 {\n    public List<List<Integer>> permuteUnique(int[] nums) {\n        List<List<Integer>> resultList = new ArrayList<>();\n\n        if (nums.length == 1) {\n            resultList.add(Collections.singletonList(nums[0]));\n            return resultList;\n        }\n\n        dfs(0, nums, resultList);\n\n        return resultList;\n    }\n\n    private void dfs(int depth, int[] nums, List<List<Integer>> resultList) {\n        if (depth == nums.length) {\n            // \u627e\u5230\u4e86\u4e00\u4e2a\u89e3\uff0c\u6dfb\u52a0\u5230\u7ed3\u679c\u96c6\n            List<Integer> singleResList = new ArrayList<>();\n            for (int n : nums)\n                singleResList.add(n);\n\n            resultList.add(singleResList);\n            return;\n        }\n\n        // \u679a\u4e3e\u5f53\u524d\u5c42\u6240\u6709\u7684\u9009\u62e9\n        // \u4ece\u5f53\u524d\u5c42 \u5bf9\u5e94\u6570\u503c\u7684\u4e0b\u6807\u5f00\u59cb\u904d\u5386 \uff0c \u56e0\u4e3a\u4e4b\u524d\u7684\u4f4d\u7f6e\u5df2\u7ecf\u9009\u5b9a\u4e86\n        for (int i = depth; i < nums.length; i++) {\n            if (isRepeat(nums, depth, i)) continue;\n            swap(nums, depth, i);\n            dfs(depth + 1, nums, resultList);\n            swap(nums, depth, i); // \u56de\u6eaf \u6062\u590d\u73b0\u573a\n        }\n    }\n\n    /**\n     * \u5224\u65ad\u5373\u5c06\u8981\u4ea4\u6362\u7684\u503c\u4e4b\u524d\u662f\u4e0d\u662f\u5df2\u7ecf\u51fa\u73b0\u8fc7\uff0c\u662f\u4e0d\u662f\u91cd\u590d\u7684\n     *\n     * @param nums    \u6570\u7ec4\n     * @param depth   \u5f53\u524d\u6df1\u5ea6\n     * @param current \u5f53\u524d\u5143\u7d20\u4e0b\u8868\n     * @return \u5373\u5c06\u8981\u4ea4\u6362\u7684\u5f53\u524d\u5143\u7d20\u662f\u4e0d\u662f\u5df2\u7ecf\u51fa\u73b0\u8fc7\n     */\n    private boolean isRepeat(int[] nums, int depth, int current) {\n        for (int i = depth; i < current; i++)\n            if (nums[current] == nums[i]) return true;\n\n        return false;\n    }\n\n    private void swap(int[] nums, int index1, int index2) {\n        int temp = nums[index1];\n        nums[index1] = nums[index2];\n        nums[index2] = temp;\n    }\n\n    public static void main(String[] args) {\n        int[] nums = {1, 1, 3};\n        _47\u5168\u6392\u52172 obj = new _47\u5168\u6392\u52172();\n        List<List<Integer>> permute = obj.permuteUnique(nums);\n        for (List<Integer> integers : permute) {\n            for (Integer integer : integers)\n                System.out.print(integer + ", ");\n            System.out.print("\\n");\n        }\n    }\n}\n')))}p.isMDXComponent=!0},561:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=i.a.createContext({}),p=function(e){var n=i.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=p(e.components);return i.a.createElement(o.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),l=p(t),m=r,d=l["".concat(s,".").concat(m)]||l[m]||b[m]||a;return t?i.a.createElement(d,c(c({ref:n},o),{},{components:t})):i.a.createElement(d,c({ref:n},o))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=m;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var o=2;o<a;o++)s[o]=t[o];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);