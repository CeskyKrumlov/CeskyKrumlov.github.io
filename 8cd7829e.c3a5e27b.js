(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{340:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return o}));var r=n(2),a=n(6),c=(n(0),n(556)),b={id:"7.integerReverse",title:"7.\u6574\u6570\u53cd\u8f6c",hide_title:!0},l={unversionedId:"sf/\u6392\u5e8f/7.integerReverse",id:"sf/\u6392\u5e8f/7.integerReverse",isDocsHomePage:!1,title:"7.\u6574\u6570\u53cd\u8f6c",description:"7.\u6574\u6570\u53cd\u8f6c",source:"@site/datastructure/sf/\u6392\u5e8f/7.\u6574\u6570\u53cd\u8f6c.md",slug:"/sf/\u6392\u5e8f/7.integerReverse",permalink:"/datastructure/sf/\u6392\u5e8f/7.integerReverse",version:"current",sidebar:"docs2",previous:{title:"16.16 \u90e8\u5206\u6392\u5e8f",permalink:"/datastructure/sf/\u6392\u5e8f/16.16.subSortLcci"},next:{title:"252.\u4f1a\u8bae\u5ba4",permalink:"/datastructure/sf/\u6392\u5e8f/252.meetingroom"}},i=[{value:"7.\u6574\u6570\u53cd\u8f6c",id:"7\u6574\u6570\u53cd\u8f6c",children:[{value:"\u9010\u4f4d\u53cd\u8f6c",id:"\u9010\u4f4d\u53cd\u8f6c",children:[]}]}],p={rightToc:i};function o(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("br",null),Object(c.b)("h1",{id:"7\u6574\u6570\u53cd\u8f6c"},"7.\u6574\u6570\u53cd\u8f6c"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://leetcode-cn.com/problems/reverse-integer/"}),"7. \u6574\u6570\u53cd\u8f6c")),Object(c.b)("p",null,"\u96be\u5ea6 ",Object(c.b)("inlineCode",{parentName:"p"},"\u7b80\u5355")),Object(c.b)("p",null,"\u7ed9\u4f60\u4e00\u4e2a 32 \u4f4d\u7684\u6709\u7b26\u53f7\u6574\u6570 ",Object(c.b)("inlineCode",{parentName:"p"},"x")," \uff0c\u8fd4\u56de\u5c06 ",Object(c.b)("inlineCode",{parentName:"p"},"x")," \u4e2d\u7684\u6570\u5b57\u90e8\u5206\u53cd\u8f6c\u540e\u7684\u7ed3\u679c\u3002"),Object(c.b)("p",null,"\u5982\u679c\u53cd\u8f6c\u540e\u6574\u6570\u8d85\u8fc7 32 \u4f4d\u7684\u6709\u7b26\u53f7\u6574\u6570\u7684\u8303\u56f4 ",Object(c.b)("inlineCode",{parentName:"p"},"[\u2212231, 231 \u2212 1]")," \uff0c\u5c31\u8fd4\u56de 0\u3002"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u5047\u8bbe\u73af\u5883\u4e0d\u5141\u8bb8\u5b58\u50a8 64 \u4f4d\u6574\u6570\uff08\u6709\u7b26\u53f7\u6216\u65e0\u7b26\u53f7\uff09\u3002")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1ax = 123\n\u8f93\u51fa\uff1a321\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1ax = -123\n\u8f93\u51fa\uff1a-321\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1ax = 120\n\u8f93\u51fa\uff1a21\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u793a\u4f8b 4\uff1a")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1ax = 0\n\u8f93\u51fa\uff1a0\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"-231 <= x <= 231 - 1"))),Object(c.b)("h2",{id:"\u9010\u4f4d\u53cd\u8f6c"},"\u9010\u4f4d\u53cd\u8f6c"),Object(c.b)("blockquote",null,Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u53cd\u590d\u8bb0\u5f55\u6570\u5b57\u7684 ",Object(c.b)("inlineCode",{parentName:"li"},"\u4e2a")," \u4f4d",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5c06\u6570\u5b57 ",Object(c.b)("inlineCode",{parentName:"li"},"%")," 10\uff0c\u83b7\u5f97\u5f53\u524d ",Object(c.b)("inlineCode",{parentName:"li"},"\u4e2a\u4f4d\u6570"),"\uff0c\u4e00\u5f00\u59cb\u76f4\u63a5\u8d4b\u503c\u7ed9 res"),Object(c.b)("li",{parentName:"ul"},"\u5c06\u6570\u5b57 ",Object(c.b)("inlineCode",{parentName:"li"},"/")," 10"))),Object(c.b)("li",{parentName:"ul"},"\u91cd\u590d\uff0c\u83b7\u5f97\u7b2c\u4e8c\u4e2a ",Object(c.b)("inlineCode",{parentName:"li"},"\u4e2a\u4f4d"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"res")," = ",Object(c.b)("inlineCode",{parentName:"li"},"(res * 10)")," + ",Object(c.b)("inlineCode",{parentName:"li"},"\u4e2a\u4f4d")))),Object(c.b)("li",{parentName:"ul"},"\u5224\u65ad\u53cd\u8f6c\u7ed3\u679c\u662f\u5426\u6ea2\u51fa",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u6bcf\u53cd\u8f6c\u4e00\u4f4d\u90fd\u8fdb\u884c\u5224\u65ad"),Object(c.b)("li",{parentName:"ul"},"\u65b9\u6cd51\uff1a\u4f7f\u7528\u6bd4\u5f53\u524d res \u6570\u636e\u7c7b\u578b\u66f4\u5927\u7684\u6570\u636e\u7c7b\u578b\uff0c\u5c31\u53ef\u4ee5\u628a\u63e1 res \u662f\u5426\u6ea2\u51fa"),Object(c.b)("li",{parentName:"ul"},"\u65b9\u6cd52\uff1a\u5c06 res - \u4e2a\u4f4d\uff0c\u7136\u540e\u518d res / 10\uff0c\u4e5f\u5c31\u662f\u8fdb\u884c\u4e00\u6b21\u9006\u8fd0\u7b97\uff0c\u5982\u679c\u9006\u8fd0\u7b97\u7684\u7ed3\u679c\u4e0e\u4e4b\u524d\u7684 res \u76f8\u540c\uff0c\u8bf4\u660e\u6ca1\u6709\u6ea2\u51fa"))))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public int reverse(int x) {\n    int res = 0;\n    int lastRes = 0;\n\n    while (x != 0) {\n        lastRes = res;\n        res = (res * 10) + x % 10;\n        // \u9006\u8fd0\u7b97\u68c0\u67e5\u662f\u5426\u6ea2\u51fa\n        if (((res - x % 10) / 10) != lastRes) return 0;\n        x /= 10;\n    }\n\n    return res;\n}\n")))}o.isMDXComponent=!0},556:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),o=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=o(n),O=r,j=u["".concat(b,".").concat(O)]||u[O]||s[O]||c;return n?a.a.createElement(j,l(l({ref:t},p),{},{components:n})):a.a.createElement(j,l({ref:t},p))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,b=new Array(c);b[0]=O;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,b[1]=l;for(var p=2;p<c;p++)b[p]=n[p];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);