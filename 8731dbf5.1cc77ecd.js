(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{331:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(567)),c={id:"11.containerWithMostWater",title:"11.\u76db\u6700\u591a\u6c34\u7684\u5bb9\u5668",hide_title:!0},l={unversionedId:"sf/\u53cc\u6307\u9488/11.containerWithMostWater",id:"sf/\u53cc\u6307\u9488/11.containerWithMostWater",isDocsHomePage:!1,title:"11.\u76db\u6700\u591a\u6c34\u7684\u5bb9\u5668",description:"11.\u76db\u6700\u591a\u6c34\u7684\u5bb9\u5668",source:"@site/datastructure/sf/\u53cc\u6307\u9488/11.\u76db\u6700\u591a\u6c34\u7684\u5bb9\u5668.md",slug:"/sf/\u53cc\u6307\u9488/11.containerWithMostWater",permalink:"/datastructure/sf/\u53cc\u6307\u9488/11.containerWithMostWater",version:"current",sidebar:"docs2",previous:{title:"54.\u87ba\u65cb\u77e9\u9635",permalink:"/datastructure/sf/\u53cc\u6307\u9488/54.spiralMatrix"},next:{title:"88.\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4",permalink:"/datastructure/sf/\u53cc\u6307\u9488/88.mergeTwoOrderedList"}},b=[{value:"11.\u76db\u6700\u591a\u6c34\u7684\u5bb9\u5668",id:"11\u76db\u6700\u591a\u6c34\u7684\u5bb9\u5668",children:[{value:"\u53cc\u6307\u9488\u6cd5",id:"\u53cc\u6307\u9488\u6cd5",children:[]}]}],o={rightToc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("br",null),Object(i.b)("h1",{id:"11\u76db\u6700\u591a\u6c34\u7684\u5bb9\u5668"},"11.\u76db\u6700\u591a\u6c34\u7684\u5bb9\u5668"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://leetcode-cn.com/problems/container-with-most-water/"}),"11. \u76db\u6700\u591a\u6c34\u7684\u5bb9\u5668")),Object(i.b)("p",null,"\u96be\u5ea6 ",Object(i.b)("inlineCode",{parentName:"p"},"\u4e2d\u7b49")),Object(i.b)("p",null,"\u7ed9\u4f60 ",Object(i.b)("inlineCode",{parentName:"p"},"n")," \u4e2a\u975e\u8d1f\u6574\u6570 ",Object(i.b)("inlineCode",{parentName:"p"},"a1\uff0ca2\uff0c...\uff0ca``n"),"\uff0c\u6bcf\u4e2a\u6570\u4ee3\u8868\u5750\u6807\u4e2d\u7684\u4e00\u4e2a\u70b9 ",Object(i.b)("inlineCode",{parentName:"p"},"(i, ai)")," \u3002\u5728\u5750\u6807\u5185\u753b ",Object(i.b)("inlineCode",{parentName:"p"},"n")," \u6761\u5782\u76f4\u7ebf\uff0c\u5782\u76f4\u7ebf ",Object(i.b)("inlineCode",{parentName:"p"},"i")," \u7684\u4e24\u4e2a\u7aef\u70b9\u5206\u522b\u4e3a ",Object(i.b)("inlineCode",{parentName:"p"},"(i, ai)")," \u548c ",Object(i.b)("inlineCode",{parentName:"p"},"(i, 0)")," \u3002\u627e\u51fa\u5176\u4e2d\u7684\u4e24\u6761\u7ebf\uff0c\u4f7f\u5f97\u5b83\u4eec\u4e0e ",Object(i.b)("inlineCode",{parentName:"p"},"x")," \u8f74\u5171\u540c\u6784\u6210\u7684\u5bb9\u5668\u53ef\u4ee5\u5bb9\u7eb3\u6700\u591a\u7684\u6c34\u3002"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u8bf4\u660e\uff1a"),"\u4f60\u4e0d\u80fd\u503e\u659c\u5bb9\u5668\u3002"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/uploads/2018/07/25/question_11.jpg",alt:"img"}))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1a[1,8,6,2,5,4,8,3,7]\n\u8f93\u51fa\uff1a49 \n\u89e3\u91ca\uff1a\u56fe\u4e2d\u5782\u76f4\u7ebf\u4ee3\u8868\u8f93\u5165\u6570\u7ec4 [1,8,6,2,5,4,8,3,7]\u3002\u5728\u6b64\u60c5\u51b5\u4e0b\uff0c\u5bb9\u5668\u80fd\u591f\u5bb9\u7eb3\u6c34\uff08\u8868\u793a\u4e3a\u84dd\u8272\u90e8\u5206\uff09\u7684\u6700\u5927\u503c\u4e3a 49\u3002\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1aheight = [1,1]\n\u8f93\u51fa\uff1a1\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1aheight = [4,3,2,1,4]\n\u8f93\u51fa\uff1a16\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u793a\u4f8b 4\uff1a")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1aheight = [1,2,1]\n\u8f93\u51fa\uff1a2\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"n = height.length")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"2 <= n <= 3 * 104")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"0 <= height[i] <= 3 * 104"))),Object(i.b)("h2",{id:"\u53cc\u6307\u9488\u6cd5"},"\u53cc\u6307\u9488\u6cd5"),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u4e00\u5f00\u59cb\u5c31\u5b9a\u4e49\uff0c\u5934\u6307\u9488\u3001\u5c3e\u6307\u9488\uff0c\u8fd9\u6837\u5bbd\u5ea6\u6700\u5927"),Object(i.b)("li",{parentName:"ul"},"\u8ba1\u7b97\u5f53\u524d\u5bb9\u5668\u76db\u6c34\u91cf\uff0c\u7136\u540e\u8c03\u51fa\u5934\u5c3e\u6307\u9488\u4e2d\u9ad8\u5ea6\u8f83\u5c0f\u7684\u90a3\u4e2a\uff0c\u5411\u4e2d\u95f4\u903c\u8fd1",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"nums","[left]"," < nums","[right]","\uff1aleft++"),Object(i.b)("li",{parentName:"ul"},"nums","[left]"," > nums","[right]","\uff1aright++"),Object(i.b)("li",{parentName:"ul"},"\u7b49\u53f7\u7ed9\u8c01\u90fd\u884c"),Object(i.b)("li",{parentName:"ul"},"Left >= right \u65f6\u9000\u51fa"))))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public static int maxArea(int[] height) {\n    if (height.length == 2) return Math.min(height[0], height[1]);\n\n    int left = 0;\n    int right = height.length - 1;\n    int max = 0; // \u6700\u7ec8\u6700\u5927\u9762\u79ef\n    int min = 0; // \u4e24\u4e2a\u9ad8\u5ea6\u4e2d\u8f83\u5c0f\u7684\u90a3\u4e2a\n\n    while (left < right) {\n        min = Math.min(height[left], height[right]);\n        max = Math.max(max, min * (right - left));\n        if (height[left] < height[right]) left++;\n        else right--;\n    }\n\n    return max;\n}\n")))}p.isMDXComponent=!0},567:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=p(n),O=r,s=u["".concat(c,".").concat(O)]||u[O]||m[O]||i;return n?a.a.createElement(s,l(l({ref:t},o),{},{components:n})):a.a.createElement(s,l({ref:t},o))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=O;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var o=2;o<i;o++)c[o]=n[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);