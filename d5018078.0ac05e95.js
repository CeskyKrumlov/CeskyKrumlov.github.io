(window.webpackJsonp=window.webpackJsonp||[]).push([[424],{480:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(567)),c={id:"252.meetingroom",title:"252.\u4f1a\u8bae\u5ba4",hide_title:!0},o={unversionedId:"sf/\u6392\u5e8f/252.meetingroom",id:"sf/\u6392\u5e8f/252.meetingroom",isDocsHomePage:!1,title:"252.\u4f1a\u8bae\u5ba4",description:"252.\u4f1a\u8bae\u5ba4",source:"@site/datastructure/sf/\u6392\u5e8f/252.\u4f1a\u8bae\u5ba4.md",slug:"/sf/\u6392\u5e8f/252.meetingroom",permalink:"/datastructure/sf/\u6392\u5e8f/252.meetingroom",version:"current",sidebar:"docs2",previous:{title:"7.\u6574\u6570\u53cd\u8f6c",permalink:"/datastructure/sf/\u6392\u5e8f/7.integerReverse"},next:{title:"253.\u4f1a\u8bae\u5ba42",permalink:"/datastructure/sf/\u6392\u5e8f/253.meetingroom2"}},l=[{value:"252.\u4f1a\u8bae\u5ba4",id:"252\u4f1a\u8bae\u5ba4",children:[{value:"\u6392\u5e8f",id:"\u6392\u5e8f",children:[]}]}],b={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("br",null),Object(i.b)("h1",{id:"252\u4f1a\u8bae\u5ba4"},"252.\u4f1a\u8bae\u5ba4"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://leetcode-cn.com/problems/meeting-rooms/"}),"252. \u4f1a\u8bae\u5ba4")),Object(i.b)("p",null,"\u96be\u5ea6\u7b80\u5355"),Object(i.b)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u4f1a\u8bae\u65f6\u95f4\u5b89\u6392\u7684\u6570\u7ec4 ",Object(i.b)("inlineCode",{parentName:"p"},"intervals")," \uff0c\u6bcf\u4e2a\u4f1a\u8bae\u65f6\u95f4\u90fd\u4f1a\u5305\u62ec\u5f00\u59cb\u548c\u7ed3\u675f\u7684\u65f6\u95f4 ",Object(i.b)("inlineCode",{parentName:"p"},"intervals[i] = [starti, endi]")," \uff0c\u8bf7\u4f60\u5224\u65ad\u4e00\u4e2a\u4eba\u662f\u5426\u80fd\u591f\u53c2\u52a0\u8fd9\u91cc\u9762\u7684\u5168\u90e8\u4f1a\u8bae\u3002"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1aintervals = [[0,30],[5,10],[15,20]]\n\u8f93\u51fa\uff1afalse\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1aintervals = [[7,10],[2,4]]\n\u8f93\u51fa\uff1atrue\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"0 <= intervals.length <= 104")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"intervals[i].length == 2")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"0 <= starti < endi <= 106"))),Object(i.b)("h2",{id:"\u6392\u5e8f"},"\u6392\u5e8f"),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u6839\u636e\u6240\u6709\u4f1a\u8bae\u5f00\u59cb\u65f6\u95f4\u8fdb\u884c\u6392\u5e8f")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u904d\u5386\u6240\u6709\u4f1a\u8bae\u7684\u5f00\u59cb\u7ed3\u675f\u65f6\u95f4\uff0c\u5224\u65ad\u5f53\u524d\u4f1a\u8bae\u5f00\u59cb\u65f6\u95f4\u4e0e\u524d\u4e00\u4e2a\u4f1a\u8bae\u7ed3\u675f\u65f6\u95f4\u7684\u5927\u5c0f\u5173\u7cfb\u5373\u53ef")))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public boolean canAttendMeetings(int[][] intervals) {\n    if (intervals.length < 2) return true; // \u4f1a\u8bae\u65f6\u95f4\u6570\u636e\u4e3a 0 \u4e2a \u6216 1\u4e2a\n    // \u6839\u636e\u5f00\u59cb\u65f6\u95f4\u6392\u5e8f\n    Arrays.sort(intervals, (arr1, arr2) -> arr1[0] - arr2[0]);\n    // \u904d\u5386\u4e8c\u7ef4\u6570\u7ec4\uff0c\u5f53\u524d\u5f00\u59cb\u65f6\u95f4 \u4e0e \u524d\u4e00\u4e2a\u7ed3\u675f\u65f6\u95f4\u6bd4\u8f83\n    for (int i = 1; i < intervals.length; i++)\n        if (intervals[i - 1][1] > intervals[i][0]) return false;\n\n    return true;\n}\n")))}p.isMDXComponent=!0},567:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,O=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return n?a.a.createElement(O,o(o({ref:t},b),{},{components:n})):a.a.createElement(O,o({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);