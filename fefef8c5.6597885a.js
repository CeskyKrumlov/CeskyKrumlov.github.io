(window.webpackJsonp=window.webpackJsonp||[]).push([[487],{543:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),c=(n(0),n(548)),i={id:"242.validAnagram",title:"242.\u6709\u6548\u7684\u5b57\u6bcd\u5f02\u4f4d\u8bcd",hide_title:!0},o={unversionedId:"sf/\u5b57\u7b26\u4e32/242.validAnagram",id:"sf/\u5b57\u7b26\u4e32/242.validAnagram",isDocsHomePage:!1,title:"242.\u6709\u6548\u7684\u5b57\u6bcd\u5f02\u4f4d\u8bcd",description:"242.\u6709\u6548\u7684\u5b57\u6bcd\u5f02\u4f4d\u8bcd",source:"@site/datastructure/sf/\u5b57\u7b26\u4e32/242\u6709\u6548\u7684\u5b57\u6bcd\u5f02\u4f4d\u8bcd.md",slug:"/sf/\u5b57\u7b26\u4e32/242.validAnagram",permalink:"/datastructure/sf/\u5b57\u7b26\u4e32/242.validAnagram",version:"current",sidebar:"docs2",previous:{title:"572.\u53e6\u4e00\u68f5\u6811\u7684\u5b50\u6811",permalink:"/datastructure/sf/\u5b57\u7b26\u4e32/572.subtreeOfAnotherTree"},next:{title:"151.\u7ffb\u8f6c\u5b57\u7b26\u4e32\u91cc\u7684\u5355\u8bcd",permalink:"/datastructure/sf/\u5b57\u7b26\u4e32/151.reverseWordsInAString"}},l=[{value:"242.\u6709\u6548\u7684\u5b57\u6bcd\u5f02\u4f4d\u8bcd",id:"242\u6709\u6548\u7684\u5b57\u6bcd\u5f02\u4f4d\u8bcd",children:[{value:"\u672c\u8d28",id:"\u672c\u8d28",children:[]},{value:"\u54c8\u5e0c\u8868\u6cd5",id:"\u54c8\u5e0c\u8868\u6cd5",children:[]},{value:"\u4f18\u5316\u2014\u2014\u6570\u7ec4\u6cd5",id:"\u4f18\u5316\u6570\u7ec4\u6cd5",children:[{value:"\u6784\u5efa\u4e24\u4e2a\u6570\u7ec4\u7136\u540e\u6bd4\u8f83",id:"\u6784\u5efa\u4e24\u4e2a\u6570\u7ec4\u7136\u540e\u6bd4\u8f83",children:[]},{value:"\u53ea\u6784\u5efa\u4e00\u4e2a\u6570\u7ec4",id:"\u53ea\u6784\u5efa\u4e00\u4e2a\u6570\u7ec4",children:[]}]}]}],u={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("br",null),Object(c.b)("h1",{id:"242\u6709\u6548\u7684\u5b57\u6bcd\u5f02\u4f4d\u8bcd"},"242.\u6709\u6548\u7684\u5b57\u6bcd\u5f02\u4f4d\u8bcd"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://leetcode-cn.com/problems/valid-anagram/"}),"242. \u6709\u6548\u7684\u5b57\u6bcd\u5f02\u4f4d\u8bcd")),Object(c.b)("p",null,"\u7ed9\u5b9a\u4e24\u4e2a\u5b57\u7b26\u4e32 s \u548c t \uff0c\u7f16\u5199\u4e00\u4e2a\u51fd\u6570\u6765\u5224\u65ad t \u662f\u5426\u662f s \u7684\u5b57\u6bcd\u5f02\u4f4d\u8bcd\u3002"),Object(c.b)("p",null,"Given two strings s and t, return true if t is an anagram of s, and false otherwise."),Object(c.b)("p",null,"\u793a\u4f8b 1:"),Object(c.b)("p",null,'\u8f93\u5165: s = "anagram", t = "nagaram"\n\u8f93\u51fa: true\n\u793a\u4f8b 2:'),Object(c.b)("p",null,'\u8f93\u5165: s = "rat", t = "car"\n\u8f93\u51fa: false\n\u8bf4\u660e:\n\u4f60\u53ef\u4ee5\u5047\u8bbe\u5b57\u7b26\u4e32\u53ea\u5305\u542b\u5c0f\u5199\u5b57\u6bcd\u3002'),Object(c.b)("p",null,"\u8fdb\u9636:\n\u5982\u679c\u8f93\u5165\u5b57\u7b26\u4e32\u5305\u542b unicode \u5b57\u7b26\u600e\u4e48\u529e\uff1f\u4f60\u80fd\u5426\u8c03\u6574\u4f60\u7684\u89e3\u6cd5\u6765\u5e94\u5bf9\u8fd9\u79cd\u60c5\u51b5\uff1f"),Object(c.b)("h2",{id:"\u672c\u8d28"},"\u672c\u8d28"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u4e24\u4e2a\u5b57\u7b26\u4e32\u4e2d\uff0c\u6bcf\u4e2a\u5b57\u6bcd\u51fa\u73b0\u7684\u6b21\u6570\u662f\u5b8c\u5168\u4e00\u81f4\u7684"),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u56e0\u6b64\uff0c\u957f\u5ea6\u4e0d\u4e00\u81f4\u4e00\u5b9a\u4e0d\u662f\u5f02\u4f4d\u8bcd"))),Object(c.b)("h2",{id:"\u54c8\u5e0c\u8868\u6cd5"},"\u54c8\u5e0c\u8868\u6cd5"),Object(c.b)("blockquote",null,Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u5b57\u6bcd\u4f5c\u4e3a ",Object(c.b)("inlineCode",{parentName:"li"},"key"),"\uff0c\u51fa\u73b0\u6b21\u6570\u4f5c\u4e3a ",Object(c.b)("inlineCode",{parentName:"li"},"value")),Object(c.b)("li",{parentName:"ul"},"\u9488\u5bf9\u4e24\u4e2a\u8bcd\uff0c\u6784\u5efa\u4e24\u4e2a HashMap \u8fdb\u884c\u6bd4\u8f83"))),Object(c.b)("h2",{id:"\u4f18\u5316\u6570\u7ec4\u6cd5"},"\u4f18\u5316\u2014\u2014\u6570\u7ec4\u6cd5"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u9898\u76ee\u8bf4\u4e86 key \u53ea\u4f1a\u662f 26 \u4e2a\u5c0f\u5199\u5b57\u6bcd\uff0c\u90a3\u4e48\u53ef\u4ee5\u6784\u5efa\u4e00\u4e2a\u957f\u5ea6 26 \u7684\u6574\u5f62\u6570\u7ec4\uff0cindex = 0 \u4f4d\u7f6e\u5c31\u8868\u793a ",Object(c.b)("inlineCode",{parentName:"strong"},"a")," \u51fa\u73b0\u7684\u6b21\u6570\uff0c\u4ee5\u6b64\u7c7b\u63a8")),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u7d22\u5f15\u4f4d\u7f6e = \u5f53\u524d\u5b57\u7b26 - 97 \uff08a \u7684 ASCII \u7801\uff09"),Object(c.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u5199\u4e3a ",Object(c.b)("inlineCode",{parentName:"li"},"char - 'a'")))),Object(c.b)("h3",{id:"\u6784\u5efa\u4e24\u4e2a\u6570\u7ec4\u7136\u540e\u6bd4\u8f83"},"\u6784\u5efa\u4e24\u4e2a\u6570\u7ec4\u7136\u540e\u6bd4\u8f83"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public boolean isAnagram(String s, String t) {\n    if (s.length() != t.length()) return false;\n\n    // \u957f\u5ea6\u4e00\u81f4\n    int[] countsS = getCountsArray(s);\n    int[] countsT = getCountsArray(t);\n\n    for (int i = 0; i < countsS.length; i++)\n        if (countsS[i] != countsT[i]) return false;\n\n    return true;\n}\n\nprivate int[] getCountsArray(String s) {\n    int[] counts = new int[26];\n    for (int i = 0; i < s.length(); i++)\n        counts[s.charAt(i) - 'a']++;\n\n    return counts;\n}\n")),Object(c.b)("h3",{id:"\u53ea\u6784\u5efa\u4e00\u4e2a\u6570\u7ec4"},"\u53ea\u6784\u5efa\u4e00\u4e2a\u6570\u7ec4"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u5bf9\u7b2c\u4e00\u4e2a\u5b57\u7b26\u4e32\u6784\u5efa\u6570\u7ec4\uff0c\u5728\u904d\u5386\u7b2c\u4e8c\u5b57\u7b26\u4e32\u65f6\uff0c\u5728\u5b57\u7b26\u5bf9\u5e94\u4f4d\u7f6e\u4e0a ",Object(c.b)("inlineCode",{parentName:"p"},"-1")),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u51cf\u5b8c\u4ee5\u540e\u5982\u679c\u6570\u7ec4\u6709\u4f4d\u7f6e\u4e0a\u7684\u503c < 0\uff0c\u8bf4\u660e\u7b2c\u4e8c\u4e2a\u8bcd\u4e2d\u67d0\u5b57\u6bcd\u6bd4\u7b2c\u4e00\u4e2a\u8bcd\u591a\uff0c\u5c31\u4e0d\u662f\u5f02\u4f4d\u8bcd\uff0c"))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public boolean isAnagram(String s, String t) {\n    char[] charS = s.toCharArray();\n    char[] charT = t.toCharArray();\n\n    if (charS.length != charT.length) return false;\n    // \u957f\u5ea6\u4e00\u81f4\n    int[] counts = new int[26];\n    for (char c : charS) counts[c - 'a']++;\n\n    for (char c : charT)\n        if (--counts[c - 'a'] < 0)\n            return false;\n\n    return true;\n}\n")))}b.isMDXComponent=!0},548:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=b(n),d=r,f=s["".concat(i,".").concat(d)]||s[d]||p[d]||c;return n?a.a.createElement(f,o(o({ref:t},u),{},{components:n})):a.a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<c;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);