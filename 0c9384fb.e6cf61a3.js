(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{574:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),o=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=o(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),u=o(n),m=r,d=u["".concat(l,".").concat(m)]||u[m]||s[m]||i;return n?a.a.createElement(d,c(c({ref:t},b),{},{components:n})):a.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return o}));var r=n(2),a=n(6),i=(n(0),n(574)),l={id:"22.generateParentheses",title:"22.\u62ec\u53f7\u751f\u6210",hide_title:!0},c={unversionedId:"sf/dfs/22.generateParentheses",id:"sf/dfs/22.generateParentheses",isDocsHomePage:!1,title:"22.\u62ec\u53f7\u751f\u6210",description:"22.\u62ec\u53f7\u751f\u6210",source:"@site/datastructure/sf/dfs/22.\u62ec\u53f7\u751f\u6210.md",slug:"/sf/dfs/22.generateParentheses",permalink:"/datastructure/sf/dfs/22.generateParentheses",version:"current",sidebar:"docs2",previous:{title:"47.\u5168\u6392\u52172",permalink:"/datastructure/sf/dfs/47.permutations2"},next:{title:"UML",permalink:"/datastructure/designPattern/uml"}},p=[{value:"22.\u62ec\u53f7\u751f\u6210",id:"22\u62ec\u53f7\u751f\u6210",children:[{value:"DFS",id:"dfs",children:[]}]}],b={rightToc:p};function o(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("br",null),Object(i.b)("h1",{id:"22\u62ec\u53f7\u751f\u6210"},"22.\u62ec\u53f7\u751f\u6210"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://leetcode-cn.com/problems/generate-parentheses/"}),"22. \u62ec\u53f7\u751f\u6210")),Object(i.b)("p",null,"\u96be\u5ea6 ",Object(i.b)("inlineCode",{parentName:"p"},"\u4e2d\u7b49")),Object(i.b)("p",null,"\u6570\u5b57 ",Object(i.b)("inlineCode",{parentName:"p"},"n")," \u4ee3\u8868\u751f\u6210\u62ec\u53f7\u7684\u5bf9\u6570\uff0c\u8bf7\u4f60\u8bbe\u8ba1\u4e00\u4e2a\u51fd\u6570\uff0c\u7528\u4e8e\u80fd\u591f\u751f\u6210\u6240\u6709\u53ef\u80fd\u7684\u5e76\u4e14 ",Object(i.b)("strong",{parentName:"p"},"\u6709\u6548\u7684")," \u62ec\u53f7\u7ec4\u5408\u3002"),Object(i.b)("p",null,"Given ",Object(i.b)("inlineCode",{parentName:"p"},"n")," pairs of parentheses, write a function to ",Object(i.b)("em",{parentName:"p"},"generate all combinations of well-formed parentheses"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'\u8f93\u5165\uff1an = 3\n\u8f93\u51fa\uff1a["((()))","(()())","(())()","()(())","()()()"]\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'\u8f93\u5165\uff1an = 1\n\u8f93\u51fa\uff1a["()"]\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"1 <= n <= 8"))),Object(i.b)("h2",{id:"dfs"},"DFS"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u7ed3\u679c\u957f\u5ea6 = 2n")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5f00\u5934\u4e00\u5b9a\u662f ",Object(i.b)("inlineCode",{parentName:"p"},"("),"\uff0c\u7ed3\u5c3e\u4e00\u5b9a\u662f ",Object(i.b)("inlineCode",{parentName:"p"},")")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"n == 1 \u65f6\uff0c\u76f4\u63a5\u8fd4\u56de ",Object(i.b)("inlineCode",{parentName:"li"},"()")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u8bb0\u5f55\u5269\u4f59\u53ef\u7528\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"(")," \u548c ",Object(i.b)("inlineCode",{parentName:"p"},")")," \u6570\u76ee\uff1aleftNum\uff0crightNum"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5f53 leftNum > 0 && leftNum == rightNum \u65f6\uff0c\u53ea\u80fd\u653e ",Object(i.b)("inlineCode",{parentName:"li"},"(")),Object(i.b)("li",{parentName:"ul"},"\u5f53 leftNum > 0 \u65f6\uff0c\u5c31\u80fd\u653e ",Object(i.b)("inlineCode",{parentName:"li"},"(")),Object(i.b)("li",{parentName:"ul"},"rightNum > 0 \u5f53 rightNum != leftNum \u65f6\uff0c\u624d\u80fd\u653e ",Object(i.b)("inlineCode",{parentName:"li"},")")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u603b\u662f\u4e00\u4e0a\u6765\u5148\u653e\u4e00\u4e2a ",Object(i.b)("inlineCode",{parentName:"p"},"("),"\uff0c\u7136\u540e\u4f7f\u7528\u56de\u6eaf\u6cd5"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public class _22\u62ec\u53f7\u751f\u6210 {\n    List<String> resultList;\n    char[] selectedArray;\n    int totalLen; // \u7ed3\u679c\u5b57\u7b26\u4e32\u7684\u603b\u957f\u5ea6\n\n    public List<String> generateParenthesis(int n) {\n        resultList = new ArrayList<>();\n        // n \u2265 2\n        totalLen = n << 1; // 2n\n        selectedArray = new char[totalLen]; // \u957f\u5ea6\u4e3a 2n \u7684\u5b57\u7b26\u6570\u7ec4\n\n        dfs(0, n, n);\n\n        return resultList;\n    }\n\n    private void dfs(int depth, int leftNum, int rightNum) {\n        if (depth == totalLen) {\n            resultList.add(new String(selectedArray));\n            return;\n        }\n\n        if (leftNum > 0) {\n            selectedArray[depth] = '(';\n            dfs(depth + 1, leftNum - 1, rightNum);\n        }\n        if (rightNum > leftNum) {\n            selectedArray[depth] = ')';\n            dfs(depth + 1, leftNum, rightNum - 1);\n        }\n    }\n\n    public static void main(String[] args) {\n        _22\u62ec\u53f7\u751f\u6210 o = new _22\u62ec\u53f7\u751f\u6210();\n        List<String> list = o.generateParenthesis(3);\n        for (String s : list) {\n            System.out.println(s);\n        }\n    }\n}\n")))}o.isMDXComponent=!0}}]);