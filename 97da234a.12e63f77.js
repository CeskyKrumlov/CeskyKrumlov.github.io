(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{319:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),c=(n(0),n(492)),i={id:"344.reverseString",title:"344.\u53cd\u8f6c\u5b57\u7b26\u4e32",hide_title:!0},o={unversionedId:"sf/\u53cc\u6307\u9488/344.reverseString",id:"sf/\u53cc\u6307\u9488/344.reverseString",isDocsHomePage:!1,title:"344.\u53cd\u8f6c\u5b57\u7b26\u4e32",description:"344. \u53cd\u8f6c\u5b57\u7b26\u4e32",source:"@site/datastructure/sf/\u53cc\u6307\u9488/344\u53cd\u8f6c\u5b57\u7b26\u4e32.md",slug:"/sf/\u53cc\u6307\u9488/344.reverseString",permalink:"/datastructure/sf/\u53cc\u6307\u9488/344.reverseString",version:"current",sidebar:"docs2",previous:{title:"1.\u4e24\u6570\u4e4b\u548c",permalink:"/datastructure/sf/\u54c8\u5e0c/1.twoSum"},next:{title:"27.\u79fb\u9664\u5143\u7d20",permalink:"/datastructure/sf/\u53cc\u6307\u9488/27.removeElement"}},l=[{value:"344. \u53cd\u8f6c\u5b57\u7b26\u4e32",id:"344-\u53cd\u8f6c\u5b57\u7b26\u4e32",children:[{value:"\u53cc\u6307\u9488\u89e3\u6cd5",id:"\u53cc\u6307\u9488\u89e3\u6cd5",children:[]}]}],p={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"344-\u53cd\u8f6c\u5b57\u7b26\u4e32"},"344. \u53cd\u8f6c\u5b57\u7b26\u4e32"),Object(c.b)("p",null,"\u96be\u5ea6 \u7b80\u5355"),Object(c.b)("p",null,"\u7f16\u5199\u4e00\u4e2a\u51fd\u6570\uff0c\u5176\u4f5c\u7528\u662f\u5c06\u8f93\u5165\u7684\u5b57\u7b26\u4e32\u53cd\u8f6c\u8fc7\u6765\u3002\u8f93\u5165\u5b57\u7b26\u4e32\u4ee5\u5b57\u7b26\u6570\u7ec4 ",Object(c.b)("inlineCode",{parentName:"p"},"char[]")," \u7684\u5f62\u5f0f\u7ed9\u51fa\u3002"),Object(c.b)("p",null,"\u4e0d\u8981\u7ed9\u53e6\u5916\u7684\u6570\u7ec4\u5206\u914d\u989d\u5916\u7684\u7a7a\u95f4\uff0c\u4f60\u5fc5\u987b",Object(c.b)("strong",{parentName:"p"},Object(c.b)("a",Object(r.a)({parentName:"strong"},{href:"https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95"}),"\u539f\u5730"),"\u4fee\u6539\u8f93\u5165\u6570\u7ec4"),"\u3001\u4f7f\u7528 O(1) \u7684\u989d\u5916\u7a7a\u95f4\u89e3\u51b3\u8fd9\u4e00\u95ee\u9898\u3002"),Object(c.b)("p",null,"\u4f60\u53ef\u4ee5\u5047\u8bbe\u6570\u7ec4\u4e2d\u7684\u6240\u6709\u5b57\u7b26\u90fd\u662f ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://baike.baidu.com/item/ASCII"}),"ASCII")," \u7801\u8868\u4e2d\u7684\u53ef\u6253\u5370\u5b57\u7b26\u3002"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'\u8f93\u5165\uff1a["h","e","l","l","o"]\n\u8f93\u51fa\uff1a["o","l","l","e","h"]\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'\u8f93\u5165\uff1a["H","a","n","n","a","h"]\n\u8f93\u51fa\uff1a["h","a","n","n","a","H"]\n')),Object(c.b)("h2",{id:"\u53cc\u6307\u9488\u89e3\u6cd5"},"\u53cc\u6307\u9488\u89e3\u6cd5"),Object(c.b)("blockquote",null,Object(c.b)("ol",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ol"},"\u5b9a\u4e49\u4e24\u4e2a\u6307\u9488\uff0c\u5de6\u6307\u9488\u6307\u5411\u5f00\u5934\uff0c\u53f3\u6307\u9488\u6307\u5411\u7ed3\u5c3e"),Object(c.b)("li",{parentName:"ol"},"\u4ea4\u6362\u5de6\u53f3\u6307\u9488\u5bf9\u5e94\u7684\u503c"),Object(c.b)("li",{parentName:"ol"},"\u5de6\u6307\u7740\u53f3\u79fb1\uff0c\u53f3\u6307\u9488\u5de6\u79fb1"),Object(c.b)("li",{parentName:"ol"},"\u53ea\u8981\u5de6\u6307\u9488\u5c0f\u4e8e\u53f3\u6307\u9488\uff0c\u5faa\u73af\u6b65\u9aa42~3"))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public class _344\u53cd\u8f6c\u5b57\u7b26\u4e32 {\n    public static void main(String[] args) {\n        char[] str1 = {'1', '2', '3', '4', '5'};\n        char[] str2 = {'1', '2', '3', '4', '5', '6'};\n\n        reverseString(str1);\n        reverseString(str2);\n    }\n\n    public static void reverseString(char[] s) {\n        int leftPointer = 0;\n        int rightPointer = s.length - 1;\n        char temp = ' ';\n\n        while (leftPointer < rightPointer) {\n            temp = s[leftPointer];\n            s[leftPointer] = s[rightPointer];\n            s[rightPointer] = temp;\n\n            leftPointer++;\n            rightPointer--;\n        }\n\n        System.out.println(s);\n    }\n}\n")),Object(c.b)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6",Object(c.b)("inlineCode",{parentName:"p"},"O(n)")))}b.isMDXComponent=!0},492:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),f=r,m=u["".concat(i,".").concat(f)]||u[f]||s[f]||c;return n?a.a.createElement(m,o(o({ref:t},p),{},{components:n})):a.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<c;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);