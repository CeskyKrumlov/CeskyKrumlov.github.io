(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{344:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return m}));var r=n(2),a=n(6),i=(n(0),n(570)),b={id:"209.MinimumSizeSubarraySum",title:"209.\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4",hide_title:!0},l={unversionedId:"sf/\u6ed1\u52a8\u7a97\u53e3/209.MinimumSizeSubarraySum",id:"sf/\u6ed1\u52a8\u7a97\u53e3/209.MinimumSizeSubarraySum",isDocsHomePage:!1,title:"209.\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4",description:"209. \u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4",source:"@site/datastructure/sf/\u6ed1\u52a8\u7a97\u53e3/209.\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4.md",slug:"/sf/\u6ed1\u52a8\u7a97\u53e3/209.MinimumSizeSubarraySum",permalink:"/datastructure/sf/\u6ed1\u52a8\u7a97\u53e3/209.MinimumSizeSubarraySum",version:"current",sidebar:"docs2",previous:{title:"35.\u641c\u7d22\u63d2\u5165\u4f4d\u7f6e",permalink:"/datastructure/sf/\u4e8c\u5206\u67e5\u627e/35.searchInsertPosition"},next:{title:"239.\u6ed1\u52a8\u7a97\u53e3\u6700\u5927\u503c",permalink:"/datastructure/sf/\u6808/239.slidingWindowMaximum"}},c=[{value:"209. \u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4",id:"209-\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4",children:[]},{value:"209. Minimum Size Subarray Sum",id:"209-minimum-size-subarray-sum",children:[{value:"\u66b4\u529b\u89e3\u6cd5",id:"\u66b4\u529b\u89e3\u6cd5",children:[]},{value:"\u6ed1\u52a8\u7a97\u53e3\u6cd5",id:"\u6ed1\u52a8\u7a97\u53e3\u6cd5",children:[]}]}],u={rightToc:c};function m(e){var t=e.components,b=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,b,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"209-\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4"},"209. \u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4"),Object(i.b)("p",null,"\u96be\u5ea6 ",Object(i.b)("inlineCode",{parentName:"p"},"\u4e2d\u7b49 ")),Object(i.b)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u542b\u6709 ",Object(i.b)("strong",{parentName:"p"},"n")," \u4e2a\u6b63\u6574\u6570\u7684\u6570\u7ec4\u548c\u4e00\u4e2a\u6b63\u6574\u6570 ",Object(i.b)("strong",{parentName:"p"},"s \uff0c"),"\u627e\u51fa\u8be5\u6570\u7ec4\u4e2d\u6ee1\u8db3\u5176\u548c ",Object(i.b)("strong",{parentName:"p"},"\u2265 s")," \u7684\u957f\u5ea6\u6700\u5c0f\u7684 ",Object(i.b)("strong",{parentName:"p"},"\u8fde\u7eed")," \u5b50\u6570\u7ec4\uff0c\u5e76\u8fd4\u56de\u5176\u957f\u5ea6",Object(i.b)("strong",{parentName:"p"},"\u3002"),"\u5982\u679c\u4e0d\u5b58\u5728\u7b26\u5408\u6761\u4ef6\u7684\u5b50\u6570\u7ec4\uff0c\u8fd4\u56de 0\u3002"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1as = 7, nums = [2,3,1,2,4,3]\n\u8f93\u51fa\uff1a2\n\u89e3\u91ca\uff1a\u5b50\u6570\u7ec4 [4,3] \u662f\u8be5\u6761\u4ef6\u4e0b\u7684\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4\u3002\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u8fdb\u9636\uff1a")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u5df2\u7ecf\u5b8c\u6210\u4e86 ",Object(i.b)("em",{parentName:"li"},"O"),"(",Object(i.b)("em",{parentName:"li"},"n"),") \u65f6\u95f4\u590d\u6742\u5ea6\u7684\u89e3\u6cd5, \u8bf7\u5c1d\u8bd5 ",Object(i.b)("em",{parentName:"li"},"O"),"(",Object(i.b)("em",{parentName:"li"},"n")," log ",Object(i.b)("em",{parentName:"li"},"n"),") \u65f6\u95f4\u590d\u6742\u5ea6\u7684\u89e3\u6cd5\u3002")),Object(i.b)("hr",null),Object(i.b)("h1",{id:"209-minimum-size-subarray-sum"},"209. Minimum Size Subarray Sum"),Object(i.b)("p",null,"Given an array of ",Object(i.b)("strong",{parentName:"p"},"n")," positive integers and a positive integer ",Object(i.b)("strong",{parentName:"p"},"s"),", find the minimal length of a ",Object(i.b)("strong",{parentName:"p"},"contiguous")," subarray of which the sum \u2265 ",Object(i.b)("strong",{parentName:"p"},"s"),". If there isn't one, return 0 instead."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example:")," "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"Input: s = 7, nums = [2,3,1,2,4,3]\nOutput: 2\nExplanation: the subarray [4,3] has the minimal length under the problem constraint.\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Follow up:")),Object(i.b)("p",null,"If you have figured out the ",Object(i.b)("em",{parentName:"p"},"O"),"(",Object(i.b)("em",{parentName:"p"},"n"),") solution, try coding another solution of which the time complexity is ",Object(i.b)("em",{parentName:"p"},"O"),"(",Object(i.b)("em",{parentName:"p"},"n")," log ",Object(i.b)("em",{parentName:"p"},"n"),"). "),Object(i.b)("h2",{id:"\u66b4\u529b\u89e3\u6cd5"},"\u66b4\u529b\u89e3\u6cd5"),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u7528\u53d8\u91cf",Object(i.b)("inlineCode",{parentName:"li"},"widht"),"\u8bb0\u5f55\u7a97\u53e3\u7684\u5bbd\u5ea6\uff0c\u6700\u5c0f\u4e3a",Object(i.b)("inlineCode",{parentName:"li"},"1")),Object(i.b)("li",{parentName:"ul"},"\u5229\u7528",Object(i.b)("inlineCode",{parentName:"li"},"width"),"\u8ba1\u7b97\u6784\u6210\u7a97\u53e3\u7684\u5de6\u53f3\u6307\u9488",Object(i.b)("inlineCode",{parentName:"li"},"left"),"\u548c",Object(i.b)("inlineCode",{parentName:"li"},"right")),Object(i.b)("li",{parentName:"ul"},"\u5229\u7528\u6ed1\u52a8\u7a97\u53e3\u6cd5\uff0c\u6c42\u7a97\u53e3\u5185\u5143\u7d20\u7684\u548c\uff0c\u4e00\u65e6\u8fbe\u5230\u76ee\u6807\u503c\uff0c\u7acb\u523b\u8fd4\u56de\u7a97\u53e3\u5bbd\u5ea6",Object(i.b)("inlineCode",{parentName:"li"},"width"),"\u5373\u53ef"),Object(i.b)("li",{parentName:"ul"},"\u4f9d\u6b21\u589e\u52a0\u7a97\u53e3\u5bbd\u5ea6",Object(i.b)("inlineCode",{parentName:"li"},"width")),Object(i.b)("li",{parentName:"ul"},"\u5bbd\u5ea6",Object(i.b)("inlineCode",{parentName:"li"},"width"),"\u5df2\u7ecf\u52a0\u7684\u6bd4\u6570\u7ec4\u957f\u5ea6\u8fd8\u5927\u4e86\uff0c\u8fd8\u6ca1\u5f97\u5230\u5b50\u6570\u7ec4\uff0c\u5219\u8fd4\u56de",Object(i.b)("inlineCode",{parentName:"li"},"0")))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public int minSubArrayLen(int s, int[] nums) {\n    if (nums == null || nums.length == 0) return 0;\n\n    int width = 1;\n\n    while (width <= nums.length) {\n        int sum = 0;\n        int left = 0;\n        int right = left + width - 1;\n\n        while (right < nums.length) {\n            if (left == 0) {\n                for (int i = left; i <= right; i++) \n                    sum += nums[i];\n            } else { // \u6ed1\u52a8\u7a97\u53e3\n                sum = sum - nums[left - 1] + nums[right];\n            }\n\n            if (sum >= s) return width;\n\n            left++;\n            right++;\n        }\n        \n        width++;\n    }        \n\n    return 0;\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"\u6267\u884c\u7ed3\u679c\uff1a\n\u901a\u8fc7\n\u663e\u793a\u8be6\u60c5\n\u6267\u884c\u7528\u65f6\uff1a122 ms, \u5728\u6240\u6709 Java \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e8618.89%\u7684\u7528\u6237\n\u5185\u5b58\u6d88\u8017\uff1a38.7 MB, \u5728\u6240\u6709 Java \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e8640.05%\u7684\u7528\u6237\n")),Object(i.b)("h2",{id:"\u6ed1\u52a8\u7a97\u53e3\u6cd5"},"\u6ed1\u52a8\u7a97\u53e3\u6cd5"),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5b9a\u4e49\u5de6\u53f3\u6307\u9488",Object(i.b)("inlineCode",{parentName:"p"},"left"),"\u548c",Object(i.b)("inlineCode",{parentName:"p"},"right"),"\u5f62\u6210\u7a97\u53e3\uff0c\u540c\u65f6\u6307\u5411\u6570\u7ec4\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u67e5\u770b\u5f53\u524d\u7a97\u53e3\u4e2d\u5143\u7d20\u7684\u548c\uff0c\u4e0e",Object(i.b)("inlineCode",{parentName:"p"},"s"),"\u8fdb\u884c\u6bd4\u8f83",Object(i.b)("inlineCode",{parentName:"p"},"\u548c"),"\u6bd4",Object(i.b)("inlineCode",{parentName:"p"},"s"),"\u5c0f\uff1a\u6269\u5927\u7a97\u53e3\uff0c\u4ee4",Object(i.b)("inlineCode",{parentName:"p"},"right++"),"\uff0c",Object(i.b)("strong",{parentName:"p"},"\u76f4\u5230",Object(i.b)("inlineCode",{parentName:"strong"},"\u548c \u2265 s"),"\u5927"),"\uff0c\u8bb0\u5f55\u6b64\u65f6\u7a97\u53e3\u7684\u957f\u5ea6")))),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20201206200800672",src:n(996).default})),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u56fa\u5b9a",Object(i.b)("inlineCode",{parentName:"li"},"right"),"\uff0c\u53f3\u79fb",Object(i.b)("inlineCode",{parentName:"li"},"left"),"\u4e00\u6b65\uff0c\u7a97\u53e3\u7f29\u5c0f\uff0c\u91cd\u590d\u4e0a\u4e00\u6b65"),Object(i.b)("li",{parentName:"ul"},"\u76f4\u5230",Object(i.b)("inlineCode",{parentName:"li"},"right"),"\u65e0\u6cd5\u518d\u79fb\u52a8\uff0c\u8fd4\u56de\u5f53\u65f6\u6700\u5c0f\u5b50\u957f\u5ea6"))),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20201206200903603",src:n(997).default})),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20201206201530832",src:n(998).default})),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u65f6\u95f4\u590d\u6742\u5ea6O(N)"',title:'"\u65f6\u95f4\u590d\u6742\u5ea6O(N)"'}),"public int minSubArrayLen(int s, int[] nums) {\n    if (nums == null || nums.length == 0) return 0;\n\n    int result = nums.length + 1; // \u5f04\u4e00\u4e2a\u7406\u8bba\u4e0a\u8fbe\u4e0d\u5230\u7684\u6700\u5927\u503c\uff0c\u7136\u540e\u9010\u6b65\u7f29\u5c0f\u5b83\n    int left = 0;\n    int right = 0;\n    int windowSum = 0; // \u7a97\u53e3\u4e2d\u5143\u7d20\u7684\u548c\n\n    while (right < nums.length) { // \u53ea\u8981right\u8fd8\u80fd\u5411\u53f3\u79fb\u52a8\n        windowSum += nums[right];\n\n        while (windowSum >= s) { // \u5982\u679c\u6b64\u65f6\u7a97\u53e3\u548c\uff0c\u8fbe\u5230\u4e86\u76ee\u6807\u503c\uff0c\u5f00\u59cb\u4ece\u5de6\u4fa7\u7f29\u5c0f\u7a97\u53e3\n            // \u8bb0\u5f55\u5f53\u524d\u6700\u5c0f\u7a97\u53e3\u5927\u5c0f\n            result = Math.min((right - left + 1), result);\n            // \u79fb\u9664\u5de6\u4fa7\u5143\u7d20\n            windowSum -= nums[left];\n            // left\u5411\u53f3\u79fb\u52a8\u7f29\u5c0f\u7a97\u53e3\n            left++;\n        }\n\n        right++; // \u7a97\u53e3\u548c\u6ca1\u8fbe\u5230\u76ee\u6807\u503c\uff0c\u53f3\u79fbright\n    }\n    // \u5982\u679c\u7b49\u4e8enums.length + 1\u8bf4\u660e\u6ca1\u627e\u5230\u6700\u5c0f\u5b50\u6570\u7ec4\uff0c\u5426\u5219\u5c31\u662f\u627e\u5230\u4e86\n    return result == nums.length + 1 ? 0 : result;        \n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"\u6267\u884c\u7ed3\u679c\uff1a\n\u901a\u8fc7\n\u663e\u793a\u8be6\u60c5\n\u6267\u884c\u7528\u65f6\uff1a2 ms, \u5728\u6240\u6709 Java \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e8685.30%\u7684\u7528\u6237\n\u5185\u5b58\u6d88\u8017\uff1a38.8 MB, \u5728\u6240\u6709 Java \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e8637.21%\u7684\u7528\u6237\n")))}m.isMDXComponent=!0},570:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),m=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,b=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=m(n),s=r,O=p["".concat(b,".").concat(s)]||p[s]||o[s]||i;return n?a.a.createElement(O,l(l({ref:t},u),{},{components:n})):a.a.createElement(O,l({ref:t},u))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,b=new Array(i);b[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,b[1]=l;for(var u=2;u<i;u++)b[u]=n[u];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},996:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/3-7d7ba6000e7363d2453f8db6c8df54a0.png"},997:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/4-ee30681c12354cc6f63f056a9b2b8178.png"},998:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/5-646f95b96143f720dd1db9c6ba6bc47a.png"}}]);