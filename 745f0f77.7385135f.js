(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{292:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return b})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),l=(t(0),t(567)),i={id:"15.threeSums",title:"15.\u4e09\u6570\u4e4b\u548c",hide_title:!0},b={unversionedId:"sf/\u53cc\u6307\u9488/15.threeSums",id:"sf/\u53cc\u6307\u9488/15.threeSums",isDocsHomePage:!1,title:"15.\u4e09\u6570\u4e4b\u548c",description:"15.\u4e09\u6570\u4e4b\u548c",source:"@site/datastructure/sf/\u53cc\u6307\u9488/15.\u4e09\u6570\u4e4b\u548c.md",slug:"/sf/\u53cc\u6307\u9488/15.threeSums",permalink:"/datastructure/sf/\u53cc\u6307\u9488/15.threeSums",version:"current",sidebar:"docs2",previous:{title:"283.\u96f6\u79fb\u52a8",permalink:"/datastructure/sf/\u53cc\u6307\u9488/283.moveZeros"},next:{title:"54.\u87ba\u65cb\u77e9\u9635",permalink:"/datastructure/sf/\u53cc\u6307\u9488/54.spiralMatrix"}},c=[{value:"15.\u4e09\u6570\u4e4b\u548c",id:"15\u4e09\u6570\u4e4b\u548c",children:[{value:"\u4e09\u6307\u9488\u6cd5",id:"\u4e09\u6307\u9488\u6cd5",children:[]}]}],u={rightToc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("br",null),Object(l.b)("h1",{id:"15\u4e09\u6570\u4e4b\u548c"},"15.\u4e09\u6570\u4e4b\u548c"),Object(l.b)("p",null,Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://leetcode-cn.com/problems/3sum/"}),"15. \u4e09\u6570\u4e4b\u548c")),Object(l.b)("p",null,"\u96be\u5ea6 ",Object(l.b)("inlineCode",{parentName:"p"},"\u4e2d\u7b49")),Object(l.b)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u5305\u542b ",Object(l.b)("inlineCode",{parentName:"p"},"n")," \u4e2a\u6574\u6570\u7684\u6570\u7ec4 ",Object(l.b)("inlineCode",{parentName:"p"},"nums"),"\uff0c\u5224\u65ad ",Object(l.b)("inlineCode",{parentName:"p"},"nums")," \u4e2d\u662f\u5426\u5b58\u5728\u4e09\u4e2a\u5143\u7d20 ",Object(l.b)("em",{parentName:"p"},"a\uff0cb\uff0cc \uff0c"),"\u4f7f\u5f97 ",Object(l.b)("em",{parentName:"p"},"a + b + c =")," 0 \uff1f\u8bf7\u4f60\u627e\u51fa\u6240\u6709\u548c\u4e3a ",Object(l.b)("inlineCode",{parentName:"p"},"0")," \u4e14\u4e0d\u91cd\u590d\u7684\u4e09\u5143\u7ec4\u3002"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a"),"\u7b54\u6848\u4e2d\u4e0d\u53ef\u4ee5\u5305\u542b\u91cd\u590d\u7684\u4e09\u5143\u7ec4\u3002"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1anums = [-1,0,1,2,-1,-4]\n\u8f93\u51fa\uff1a[[-1,-1,2],[-1,0,1]]\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1anums = []\n\u8f93\u51fa\uff1a[]\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1anums = [0]\n\u8f93\u51fa\uff1a[]\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"0 <= nums.length <= 3000")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"-105 <= nums[i] <= 105"))),Object(l.b)("h2",{id:"\u4e09\u6307\u9488\u6cd5"},"\u4e09\u6307\u9488\u6cd5"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u5148\u5c06\u6574\u4e2a\u6570\u7ec4\u6392\u5e8f O(nlogn)"),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"i")," \u904d\u5386\u6570\u7ec4\uff0c\u540c\u65f6\u8bb0\u5f55\u4e0a\u4e00\u4e2a ",Object(l.b)("inlineCode",{parentName:"li"},"i")," \u6307\u5411\u7684\u5143\u7d20\u503c\uff0c\u5982\u679c\u5f53\u524d\u4e0e\u4e0a\u4e00\u6b21\u503c\u4e00\u6837\u76f4\u63a5\u8df3\u8fc7"),Object(l.b)("li",{parentName:"ul"},"\u5b9a\u4e49\u4e24\u4e2a\u6307\u9488 ",Object(l.b)("inlineCode",{parentName:"li"},"l"),"\uff0c",Object(l.b)("inlineCode",{parentName:"li"},"r")," \u6765\u904d\u5386 ",Object(l.b)("inlineCode",{parentName:"li"},"i")," \u6307\u5411\u5143\u7d20\u53f3\u4fa7\u6240\u6709\u5143\u7d20\u7ec4\u6210\u7684\u5b50\u5e8f\u5217"),Object(l.b)("li",{parentName:"ul"},"\u56e0\u6b64 ",Object(l.b)("inlineCode",{parentName:"li"},"l")," \u521d\u59cb\u503c\u4e3a ",Object(l.b)("inlineCode",{parentName:"li"},"i + 1"),"\uff0c",Object(l.b)("inlineCode",{parentName:"li"},"r")," \u521d\u59cb\u503c\u4e3a ",Object(l.b)("inlineCode",{parentName:"li"},"nums.length - 1")),Object(l.b)("li",{parentName:"ul"},"\u8ba1\u7b97 ",Object(l.b)("inlineCode",{parentName:"li"},"nums[i] + nums[l] + nums[r]")," \u7684\u503c\uff0c\u4e0e ",Object(l.b)("inlineCode",{parentName:"li"},"0")," \u6bd4\u8f83",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5c0f\u4e8e ",Object(l.b)("inlineCode",{parentName:"li"},"0"),"\uff1a\u8bf4\u660e\u7ed3\u679c\u504f\u5c0f\uff0c\u90a3\u4e48 l++",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5982\u679c l \u4e0e\u5148\u524d\u7684 l \u76f8\u540c\uff0c\u8df3\u8fc7\uff0c\u7ee7\u7eed l++"))),Object(l.b)("li",{parentName:"ul"},"\u5927\u4e8e ",Object(l.b)("inlineCode",{parentName:"li"},"0"),"\uff1a\u8bf4\u660e\u7ed3\u679c\u504f\u5927\uff0c\u90a3\u4e48 r--",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5982\u679c r \u4e0e\u5148\u524d\u7684 r \u76f8\u540c\uff0c\u8df3\u8fc7\uff0c\u7ee7\u7eed r--"))),Object(l.b)("li",{parentName:"ul"},"\u7b49\u4e8e ",Object(l.b)("inlineCode",{parentName:"li"},"0")," ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6dfb\u52a0\u5f53\u524d ",Object(l.b)("inlineCode",{parentName:"li"},"i"),"\u3001",Object(l.b)("inlineCode",{parentName:"li"},"l"),"\u3001",Object(l.b)("inlineCode",{parentName:"li"},"r")," \u5bf9\u5e94\u5143\u7d20\u503c\u5230\u7ed3\u679c\u96c6"),Object(l.b)("li",{parentName:"ul"},"l++, r--"))),Object(l.b)("li",{parentName:"ul"},"\u5982\u679c ",Object(l.b)("inlineCode",{parentName:"li"},"l >= r")," \u5219 i++",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5c06 l \u91cd\u7f6e\u4e3a i + 1"),Object(l.b)("li",{parentName:"ul"},"r \u4e3a nums.length - 1"))))))),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public List<List<Integer>> threeSum(int[] nums) {\n    List<List<Integer>> result = new ArrayList<>();\n    if (nums.length <= 2) return result;\n    // \u6392\u5e8f\n    Arrays.sort(nums);\n    // \u4e09\u6307\u9488\n    int lastI = Integer.MIN_VALUE;\n\n    int rightBound = nums.length - 2;\n    for (int i = 0; i < rightBound; i++) {\n        if (nums[i] == lastI) continue;\n\n        int l = i + 1;\n        int r = nums.length - 1;\n        int lastL = Integer.MIN_VALUE;\n        int lastR = Integer.MIN_VALUE;\n\n        while (l < r) {\n            int sum = nums[i] + nums[r] + nums[l];\n            if (sum < 0) {\n                l++;\n            } else if (sum > 0) {\n                r--;\n            } else {\n                result.add(new ArrayList<>(Arrays.asList(nums[i], nums[l], nums[r])));\n                lastL = nums[l];\n                lastR = nums[r];\n\n                do {l++;} while (l < r && nums[l] == lastL);\n                do {r--;} while (l < r && nums[r] == lastR);\n            }\n        }\n\n        lastI = nums[i];\n    }\n\n    return result;\n}\n")))}p.isMDXComponent=!0},567:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return O}));var r=t(0),a=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},o=function(e){var n=p(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),o=p(t),s=r,O=o["".concat(i,".").concat(s)]||o[s]||m[s]||l;return t?a.a.createElement(O,b(b({ref:n},u),{},{components:t})):a.a.createElement(O,b({ref:n},u))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=s;var b={};for(var c in n)hasOwnProperty.call(n,c)&&(b[c]=n[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,i[1]=b;for(var u=2;u<l;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);