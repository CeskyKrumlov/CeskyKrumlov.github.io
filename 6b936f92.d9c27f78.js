(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{281:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(574)),c={id:"16.16.subSortLcci",title:"16.16 \u90e8\u5206\u6392\u5e8f",hide_title:!0},l={unversionedId:"sf/\u6392\u5e8f/16.16.subSortLcci",id:"sf/\u6392\u5e8f/16.16.subSortLcci",isDocsHomePage:!1,title:"16.16 \u90e8\u5206\u6392\u5e8f",description:"16.16 \u90e8\u5206\u6392\u5e8f",source:"@site/datastructure/sf/\u6392\u5e8f/16_16_sub_sort.md",slug:"/sf/\u6392\u5e8f/16.16.subSortLcci",permalink:"/datastructure/sf/\u6392\u5e8f/16.16.subSortLcci",version:"current",sidebar:"docs2",previous:{title:"75.\u989c\u8272\u5206\u7c7b",permalink:"/datastructure/sf/\u6392\u5e8f/75.sortColor"},next:{title:"7.\u6574\u6570\u53cd\u8f6c",permalink:"/datastructure/sf/\u6392\u5e8f/7.integerReverse"}},b=[{value:"16.16 \u90e8\u5206\u6392\u5e8f",id:"1616-\u90e8\u5206\u6392\u5e8f",children:[]},{value:"\u601d\u8def\u2014\u2014\u53cc\u6307\u9488",id:"\u601d\u8def\u53cc\u6307\u9488",children:[]},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",children:[]}],o={rightToc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("br",null),Object(i.b)("h1",{id:"1616-\u90e8\u5206\u6392\u5e8f"},"16.16 \u90e8\u5206\u6392\u5e8f"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://leetcode-cn.com/problems/sub-sort-lcci/"}),"\u9762\u8bd5\u9898 16.16. \u90e8\u5206\u6392\u5e8f")),Object(i.b)("p",null,"\u96be\u5ea6 ",Object(i.b)("inlineCode",{parentName:"p"},"\u4e2d\u7b49")," "),Object(i.b)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u6574\u6570\u6570\u7ec4\uff0c\u7f16\u5199\u4e00\u4e2a\u51fd\u6570\uff0c\u627e\u51fa\u7d22\u5f15",Object(i.b)("inlineCode",{parentName:"p"},"m"),"\u548c",Object(i.b)("inlineCode",{parentName:"p"},"n"),"\uff0c\u53ea\u8981\u5c06\u7d22\u5f15\u533a\u95f4",Object(i.b)("inlineCode",{parentName:"p"},"[m,n]"),"\u7684\u5143\u7d20\u6392\u597d\u5e8f\uff0c\u6574\u4e2a\u6570\u7ec4\u5c31\u662f\u6709\u5e8f\u7684\u3002\u6ce8\u610f\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"n-m"),"\u5c3d\u91cf",Object(i.b)("inlineCode",{parentName:"p"},"\u6700\u5c0f"),"\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u627e\u51fa\u7b26\u5408\u6761\u4ef6\u7684\u6700\u77ed\u5e8f\u5217\u3002\u51fd\u6570\u8fd4\u56de\u503c\u4e3a",Object(i.b)("inlineCode",{parentName:"p"},"[m,n]"),"\uff0c\u82e5\u4e0d\u5b58\u5728\u8fd9\u6837\u7684",Object(i.b)("inlineCode",{parentName:"p"},"m"),"\u548c",Object(i.b)("inlineCode",{parentName:"p"},"n"),"\uff08\u4f8b\u5982\u6574\u4e2a\u6570\u7ec4\u662f\u6709\u5e8f\u7684\uff09\uff0c\u8bf7\u8fd4\u56de",Object(i.b)("inlineCode",{parentName:"p"},"[-1,-1]"),"\u3002"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1a [1,2,4,7,10,11,7,12,6,7,16,18,19]\n\u8f93\u51fa\uff1a [3,9]\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"0 <= len(array) <= 1000000"))),Object(i.b)("p",null,"Given an array of integers, write a method to find indices m and n such that if you sorted elements m through n, the entire array would be sorted. Minimize n - m (that is, find the smallest such sequence)."),Object(i.b)("p",null,"Return ","[m,n]",". If there are no such m and n (e.g. the array is already sorted), return ","[-1, -1]","."),Object(i.b)("br",null),Object(i.b)("h1",{id:"\u601d\u8def\u53cc\u6307\u9488"},"\u601d\u8def\u2014\u2014\u53cc\u6307\u9488"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u672c\u8d28")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u5bfb\u627e\u5e8f\u5217\u4e2d\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"\u9006\u5e8f\u5bf9")),Object(i.b)("li",{parentName:"ul"},"\u800c\u4e14\uff0c\u662f\u627e\u95f4\u9694\u6700\u5927\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"\u9006\u5e8f\u5bf9")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u5b9a\u4f4d\u53f3\u4fa7 index"),"\uff1a\u627e\u5230 ",Object(i.b)("inlineCode",{parentName:"li"},"\u6700\u53f3\u4fa7")," \u7684\u9006\u5e8f\u5bf9\uff0c\u4ece\u5de6\u5411\u53f3\u626b\u63cf\uff0c\u5982\u679c\u5143\u7d20\u503c\u53d8\u5c0f\u4e86\u5c31\u662f\u9006\u5e8f\u5bf9",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4ece\u5de6\u5411\u53f3\u626b\u63cf\uff0c\u8bb0\u5f55 ",Object(i.b)("inlineCode",{parentName:"li"},"\u5143\u7d20\u6700\u5927\u503c")),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u53d1\u73b0\u5f53\u524d\u503c < \u6700\u5927\u503c\uff0c\u90a3\u4e48\u5c31\u662f\u9006\u5e8f\u5bf9\uff0c\u8bb0\u5f55\u5b83\u7684 index"),Object(i.b)("li",{parentName:"ul"},"\u5426\u5219\uff0c\u66f4\u65b0\u5f53\u524d\u6700\u5927\u503c\u5230\u66f4\u5927\u7684\u503c",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4e0d\u8981\u52a0\u4e0a ",Object(i.b)("inlineCode",{parentName:"li"},"=")," \uff0c\u56e0\u4e3a\u8fd9\u4f1a\u628a\u76f8\u540c\u7684\u503c\u7b97\u8fdb\u6700\u7ec8\u533a\u95f4\u5185\uff0c\u533a\u95f4\u5c31\u4e0d\u662f\u6700\u5c0f\u7684\u4e86"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u5b9a\u4f4d\u5de6\u4fa7 index\uff1a"),"\u627e ",Object(i.b)("inlineCode",{parentName:"li"},"\u6700\u5de6\u4fa7")," \u7684\u9006\u5e8f\u5bf9\uff0c\u4ece\u53f3\u5411\u5de6\u626b\u63cf\uff0c\u5982\u679c\u5143\u7d20\u503c\u53d8\u5927\u4e86\u5c31\u662f\u9006\u5e8f\u5bf9"),Object(i.b)("li",{parentName:"ul"},"\u8fd4\u56de int[] = {\u5de6index, \u53f3index}"))),Object(i.b)("br",null),Object(i.b)("h1",{id:"\u5b9e\u73b0"},"\u5b9e\u73b0"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// \u8fd4\u56de \u76ee\u6807\u533a\u95f4 \u5f00\u5934\u7d22\u5f15 \u7ed3\u5c3e\u7d22\u5f15 \u7ec4\u6210\u7684int\u6570\u7ec4\npublic static int[] subSort(int[] array) {\n    if (array.length == 0) return new int[]{-1, -1};\n\n    // \u4ece\u5de6\u5f80\u53f3\n    int max = array[0];\n    int rightIndex = -1;\n    for (int i = 1; i < array.length; i++) {\n        if (array[i] < max)\n            rightIndex = i;\n        else\n            max = array[i];\n    }\n\n    int min = array[array.length - 1];\n    int leftIndex = -1;\n    for (int i = array.length - 2; i >= 0; i--) {\n        if (array[i] > min)\n            leftIndex = i;\n        else\n            min = array[i];\n    }\n\n    return new int[]{leftIndex, rightIndex};\n}\n")),Object(i.b)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6 O(n)"))}p.isMDXComponent=!0},574:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,d=u["".concat(c,".").concat(s)]||u[s]||m[s]||i;return n?a.a.createElement(d,l(l({ref:t},o),{},{components:n})):a.a.createElement(d,l({ref:t},o))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=s;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var o=2;o<i;o++)c[o]=n[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);