(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(556)),i={id:"01.09.StringRotationLCCI",title:"01.09 \u5b57\u7b26\u4e32\u8f6e\u8f6c",hide_title:!0},c={unversionedId:"sf/\u5b57\u7b26\u4e32/01.09.StringRotationLCCI",id:"sf/\u5b57\u7b26\u4e32/01.09.StringRotationLCCI",isDocsHomePage:!1,title:"01.09 \u5b57\u7b26\u4e32\u8f6e\u8f6c",description:"\u9762\u8bd5\u9898 01.09 \u5b57\u7b26\u4e32\u8f6e\u8f6c",source:"@site/datastructure/sf/\u5b57\u7b26\u4e32/01.09.md",slug:"/sf/\u5b57\u7b26\u4e32/01.09.StringRotationLCCI",permalink:"/datastructure/sf/\u5b57\u7b26\u4e32/01.09.StringRotationLCCI",version:"current",sidebar:"docs2",previous:{title:"344.\u53cd\u8f6c\u5b57\u7b26\u4e32",permalink:"/datastructure/sf/\u53cc\u6307\u9488/344.reverseString"},next:{title:"572.\u53e6\u4e00\u68f5\u6811\u7684\u5b50\u6811",permalink:"/datastructure/sf/\u5b57\u7b26\u4e32/572.subtreeOfAnotherTree"}},l=[{value:"\u9762\u8bd5\u9898 01.09 \u5b57\u7b26\u4e32\u8f6e\u8f6c",id:"\u9762\u8bd5\u9898-0109-\u5b57\u7b26\u4e32\u8f6e\u8f6c",children:[{value:"\u601d\u8def",id:"\u601d\u8def",children:[]}]}],b={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("br",null),Object(o.b)("h1",{id:"\u9762\u8bd5\u9898-0109-\u5b57\u7b26\u4e32\u8f6e\u8f6c"},"\u9762\u8bd5\u9898 01.09 \u5b57\u7b26\u4e32\u8f6e\u8f6c"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://leetcode-cn.com/problems/string-rotation-lcci/"}),"\u9762\u8bd5\u9898 01.09. String Rotation LCCI")),Object(o.b)("p",null,"\u96be\u5ea6 \u7b80\u5355"),Object(o.b)("p",null,"\u5b57\u7b26\u4e32\u8f6e\u8f6c\u3002\u7ed9\u5b9a\u4e24\u4e2a\u5b57\u7b26\u4e32",Object(o.b)("inlineCode",{parentName:"p"},"s1"),"\u548c",Object(o.b)("inlineCode",{parentName:"p"},"s2"),"\uff0c\u8bf7\u7f16\u5199\u4ee3\u7801\u68c0\u67e5",Object(o.b)("inlineCode",{parentName:"p"},"s2"),"\u662f\u5426\u4e3a",Object(o.b)("inlineCode",{parentName:"p"},"s1"),"\u65cb\u8f6c\u800c\u6210\uff08\u6bd4\u5982\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"waterbottle"),"\u662f",Object(o.b)("inlineCode",{parentName:"p"},"erbottlewat"),"\u65cb\u8f6c\u540e\u7684\u5b57\u7b26\u4e32\uff09\u3002"),Object(o.b)("p",null,"Given two strings, ",Object(o.b)("inlineCode",{parentName:"p"},"s1")," and ",Object(o.b)("inlineCode",{parentName:"p"},"s2"),", write code to check if ",Object(o.b)("inlineCode",{parentName:"p"},"s2")," is a rotation of ",Object(o.b)("inlineCode",{parentName:"p"},"s1"),' (e.g.,"waterbottle" is a rotation of"erbottlewat"). Can you use only one call to the method that checks if one word is a substring of another?'),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example 1:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'Input: s1 = "waterbottle", s2 = "erbottlewat"\nOutput: True\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example 2:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'Input: s1 = "aa", s2 = "aba"\nOutput: False\n')),Object(o.b)("h2",{id:"\u601d\u8def"},"\u601d\u8def"),Object(o.b)("blockquote",null,Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"\u5224\u65ad ",Object(o.b)("inlineCode",{parentName:"li"},"str1")," \u4e0e ",Object(o.b)("inlineCode",{parentName:"li"},"str2")," \u957f\u5ea6\u662f\u5426\u76f8\u7b49"),Object(o.b)("li",{parentName:"ul"},"\u628a\u539f\u5b57\u7b26\u4e32\u76f4\u63a5\u9996\u5c3e\u62fc\u63a5 ",Object(o.b)("inlineCode",{parentName:"li"},"str1 + str1")),Object(o.b)("li",{parentName:"ul"},"\u5224\u65ad ",Object(o.b)("inlineCode",{parentName:"li"},"str2")," \u662f\u5426\u4e3a ",Object(o.b)("inlineCode",{parentName:"li"},"str1")," \u7684\u5b50\u4e32"))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class _01_09\u5b57\u7b26\u4e32\u8f6e\u8f6c {\n    public boolean isFlipedString(String s1, String s2) {\n        if (s1 == null || s2 == null) return false;\n        if (s1.length() != s2.length()) return false;\n        return (s1 + s1).contains(s2);\n    }\n\n    public static void main(String[] args) {\n        String s1 = "waterbottle", s2 = "erbottlewat";\n        boolean b = new _01_09\u5b57\u7b26\u4e32\u8f6e\u8f6c().isFlipedString(s1, s2);\n        System.out.println("b = " + b);\n    }\n}\n')))}p.isMDXComponent=!0},556:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),O=r,d=s["".concat(i,".").concat(O)]||s[O]||u[O]||o;return n?a.a.createElement(d,c(c({ref:t},b),{},{components:n})):a.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=O;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);