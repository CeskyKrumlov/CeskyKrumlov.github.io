(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),i=(n(0),n(565)),o={id:"54.spiralMatrix",title:"54.\u87ba\u65cb\u77e9\u9635",hide_title:!0},c={unversionedId:"sf/\u53cc\u6307\u9488/54.spiralMatrix",id:"sf/\u53cc\u6307\u9488/54.spiralMatrix",isDocsHomePage:!1,title:"54.\u87ba\u65cb\u77e9\u9635",description:"54.\u87ba\u65cb\u77e9\u9635",source:"@site/datastructure/sf/\u53cc\u6307\u9488/54.\u87ba\u65cb\u77e9\u9635.md",slug:"/sf/\u53cc\u6307\u9488/54.spiralMatrix",permalink:"/datastructure/sf/\u53cc\u6307\u9488/54.spiralMatrix",version:"current",sidebar:"docs2",previous:{title:"15.\u4e09\u6570\u4e4b\u548c",permalink:"/datastructure/sf/\u53cc\u6307\u9488/15.threeSums"},next:{title:"11.\u76db\u6700\u591a\u6c34\u7684\u5bb9\u5668",permalink:"/datastructure/sf/\u53cc\u6307\u9488/11.containerWithMostWater"}},l=[{value:"54.\u87ba\u65cb\u77e9\u9635",id:"54\u87ba\u65cb\u77e9\u9635",children:[{value:"\u56db\u6307\u9488\u6cd5",id:"\u56db\u6307\u9488\u6cd5",children:[]}]}],p={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"54\u87ba\u65cb\u77e9\u9635"},"54.\u87ba\u65cb\u77e9\u9635"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://leetcode-cn.com/problems/spiral-matrix/"}),"54. \u87ba\u65cb\u77e9\u9635")),Object(i.b)("p",null,"\u96be\u5ea6 ",Object(i.b)("inlineCode",{parentName:"p"},"\u4e2d\u7b49")),Object(i.b)("p",null,"\u7ed9\u4f60\u4e00\u4e2a ",Object(i.b)("inlineCode",{parentName:"p"},"m")," \u884c ",Object(i.b)("inlineCode",{parentName:"p"},"n")," \u5217\u7684\u77e9\u9635 ",Object(i.b)("inlineCode",{parentName:"p"},"matrix")," \uff0c\u8bf7\u6309\u7167 ",Object(i.b)("strong",{parentName:"p"},"\u987a\u65f6\u9488\u87ba\u65cb\u987a\u5e8f")," \uff0c\u8fd4\u56de\u77e9\u9635\u4e2d\u7684\u6240\u6709\u5143\u7d20\u3002"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://assets.leetcode.com/uploads/2020/11/13/spiral1.jpg",alt:"img"}))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1amatrix = [[1,2,3],[4,5,6],[7,8,9]]\n\u8f93\u51fa\uff1a[1,2,3,6,9,8,7,4,5]\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://assets.leetcode.com/uploads/2020/11/13/spiral.jpg",alt:"img"}))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1amatrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]\n\u8f93\u51fa\uff1a[1,2,3,4,8,12,11,10,9,5,6,7]\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"m == matrix.length")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"n == matrix[i].length")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"1 <= m, n <= 10")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-100 <= matrix[i][j] <= 100"))),Object(i.b)("h2",{id:"\u56db\u6307\u9488\u6cd5"},"\u56db\u6307\u9488\u6cd5"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u5c06\u87ba\u65cb\u77e9\u9635\u770b\u6210\u662f\u4e00\u73af\u4e00\u73af\u5957\u5a03\u7684\u7ed3\u6784"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u5b9a\u4e49 4 \u4e2a\u6307\u9488\uff1atop\u3001bottom\u3001left\u3001right"),Object(i.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6bcf\u4e00\u4e2a\u73af\uff0c\u4f7f\u7528 4 \u4e2a\u6307\u9488\u6807\u8bb0\u5b83\u7684\u8303\u56f4"),Object(i.b)("li",{parentName:"ul"},"\u5229\u7528 4 \u4e2a\u6307\u9488\uff0c\u6309\u7167 \u4e0a \u53f3 \u4e0b \u5de6 \u7684\u987a\u5e8f\uff0c\u904d\u5386\u8fd9\u4e2a\u73af",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8fc7\u7a0b\u4e2d\u79fb\u52a8\u54cd\u5e94\u7684\u6307\u9488"))),Object(i.b)("li",{parentName:"ul"},"\u5f53 top > bottom || right < left \u65f6\uff0c\u8bf4\u660e\u904d\u5386\u5b8c\u4e86"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public class _54\u87ba\u65cb\u77e9\u9635 {\n    private List<Integer> res;\n\n    public List<Integer> spiralOrder(int[][] matrix) {\n        res = new ArrayList<>();\n\n        int top = 0;\n        int bottom = matrix.length - 1;\n        int left = 0;\n        int right = matrix[0].length - 1;\n\n        while (top <= bottom && right >= left) {\n            // \u4e0a\n            for (int i = left; i <= right; i++)\n                res.add(matrix[top][i]);\n            top++;\n            if (top > bottom) break;\n            // \u53f3\n            for (int i = top; i <= bottom; i++)\n                res.add(matrix[i][right]);\n            right--;\n            if (right < left) break;\n            // \u4e0b\n            for (int i = right; i >= left; i--)\n                res.add(matrix[bottom][i]);\n            bottom--;\n            if (top > bottom) break;\n            // \u5de6\n            for (int i = bottom; i >= top; i--)\n                res.add(matrix[i][left]);\n            left++;\n        }\n\n        return res;\n    }\n}\n")))}b.isMDXComponent=!0},565:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),s=r,O=u["".concat(o,".").concat(s)]||u[s]||m[s]||i;return n?a.a.createElement(O,c(c({ref:t},p),{},{components:n})):a.a.createElement(O,c({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);