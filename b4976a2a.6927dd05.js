(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{351:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return o}));var r=n(2),a=n(6),c=(n(0),n(472)),l={id:"88.mergeTwoOrderedList",title:"88.\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4",hide_title:!0},u={unversionedId:"sf/\u53cc\u6307\u9488/88.mergeTwoOrderedList",id:"sf/\u53cc\u6307\u9488/88.mergeTwoOrderedList",isDocsHomePage:!1,title:"88.\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4",description:"88.\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4",source:"@site/datastructure/sf/\u53cc\u6307\u9488/88.\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4.md",slug:"/sf/\u53cc\u6307\u9488/88.mergeTwoOrderedList",permalink:"/datastructure/sf/\u53cc\u6307\u9488/88.mergeTwoOrderedList",version:"current",sidebar:"docs2",previous:{title:"27.\u79fb\u9664\u5143\u7d20",permalink:"/datastructure/sf/\u53cc\u6307\u9488/27.removeElement"},next:{title:"704.\u4e8c\u5206\u67e5\u627e",permalink:"/datastructure/sf/\u4e8c\u5206\u67e5\u627e/704.binarySearchLeetcode"}},b=[{value:"88.\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4",id:"88\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4",children:[]}],m={rightToc:b};function o(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"88\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4"},"88.\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://leetcode-cn.com/problems/merge-sorted-array/"}),"https://leetcode-cn.com/problems/merge-sorted-array/")),Object(c.b)("p",null,"\u96be\u5ea6 \u7b80\u5355"),Object(c.b)("p",null,"\u7ed9\u4f60\u4e24\u4e2a\u6709\u5e8f\u6574\u6570\u6570\u7ec4 ",Object(c.b)("em",{parentName:"p"},"nums1")," \u548c ",Object(c.b)("em",{parentName:"p"},"nums2"),"\uff0c\u8bf7\u4f60\u5c06 ",Object(c.b)("em",{parentName:"p"},"nums2")," \u5408\u5e76\u5230 ",Object(c.b)("em",{parentName:"p"},"nums1")," \u4e2d",Object(c.b)("em",{parentName:"p"},"\uff0c"),"\u4f7f ",Object(c.b)("em",{parentName:"p"},"nums1")," \u6210\u4e3a\u4e00\u4e2a\u6709\u5e8f\u6570\u7ec4\u3002"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u8bf4\u660e\uff1a")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u521d\u59cb\u5316 ",Object(c.b)("em",{parentName:"li"},"nums1")," \u548c ",Object(c.b)("em",{parentName:"li"},"nums2")," \u7684\u5143\u7d20\u6570\u91cf\u5206\u522b\u4e3a ",Object(c.b)("em",{parentName:"li"},"m")," \u548c ",Object(c.b)("em",{parentName:"li"},"n")," \u3002"),Object(c.b)("li",{parentName:"ul"},"\u4f60\u53ef\u4ee5\u5047\u8bbe ",Object(c.b)("em",{parentName:"li"},"nums1")," \u6709\u8db3\u591f\u7684\u7a7a\u95f4\uff08\u7a7a\u95f4\u5927\u5c0f\u5927\u4e8e\u6216\u7b49\u4e8e ",Object(c.b)("em",{parentName:"li"},"m + n"),"\uff09\u6765\u4fdd\u5b58 ",Object(c.b)("em",{parentName:"li"},"nums2")," \u4e2d\u7684\u5143\u7d20\u3002")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1a\nnums1 = [1,2,3,0,0,0], m = 3\nnums2 = [2,5,6],       n = 3\n\n\u8f93\u51fa\uff1a[1,2,2,3,5,6]\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"-10^9 <= nums1[i], nums2[i] <= 10^9")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"nums1.length == m + n")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"nums2.length == n"))),Object(c.b)("hr",null),Object(c.b)("p",null,"Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array."),Object(c.b)("p",null,"The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2."),Object(c.b)("p",null,"Example 1:"),Object(c.b)("p",null,"Input: nums1 = ","[1,2,3,0,0,0]",", m = 3, nums2 = ","[2,5,6]",", n = 3\nOutput: ","[1,2,2,3,5,6]","\nExample 2:"),Object(c.b)("p",null,"Input: nums1 = ","[1]",", m = 1, nums2 = [], n = 0\nOutput: ","[1]"),Object(c.b)("p",null,"Constraints:"),Object(c.b)("p",null,"0 <= n, m <= 200",Object(c.b)("br",null),"\n1 <= n + m <= 200",Object(c.b)("br",null),"\nnums1.length == m + n",Object(c.b)("br",null),"\nnums2.length == n",Object(c.b)("br",null),"\n-109 <= nums1","[i]",", nums2","[i]"," <= 109",Object(c.b)("br",null)),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"20:19")))}o.isMDXComponent=!0},472:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),o=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},i=function(e){var t=o(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,m=b(e,["components","mdxType","originalType","parentName"]),i=o(n),s=r,O=i["".concat(l,".").concat(s)]||i[s]||p[s]||c;return n?a.a.createElement(O,u(u({ref:t},m),{},{components:n})):a.a.createElement(O,u({ref:t},m))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=s;var u={};for(var b in t)hasOwnProperty.call(t,b)&&(u[b]=t[b]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var m=2;m<c;m++)l[m]=n[m];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);