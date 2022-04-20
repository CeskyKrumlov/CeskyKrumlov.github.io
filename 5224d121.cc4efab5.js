(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{214:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),b=(n(0),n(576)),c={id:"99.recoverBinarySearchTree",title:"99.\u6062\u590d\u4e8c\u53c9\u641c\u7d22\u6811",hide_title:!0},l={unversionedId:"sf/\u6811/99.recoverBinarySearchTree",id:"sf/\u6811/99.recoverBinarySearchTree",isDocsHomePage:!1,title:"99.\u6062\u590d\u4e8c\u53c9\u641c\u7d22\u6811",description:"99.\u6062\u590d\u4e8c\u53c9\u641c\u7d22\u6811",source:"@site/datastructure/sf/\u6811/99.\u6062\u590d\u4e8c\u53c9\u641c\u7d22\u6811.md",slug:"/sf/\u6811/99.recoverBinarySearchTree",permalink:"/datastructure/sf/\u6811/99.recoverBinarySearchTree",version:"current",sidebar:"docs2",previous:{title:"236.\u4e8c\u53c9\u6811\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148",permalink:"/datastructure/sf/\u6811/236.lowestCommonAncestorofaBinaryTree"},next:{title:"333.\u6700\u5927BST\u5b50\u6811",permalink:"/datastructure/sf/\u6811/333.largestBSTSubtree"}},i=[{value:"99.\u6062\u590d\u4e8c\u53c9\u641c\u7d22\u6811",id:"99\u6062\u590d\u4e8c\u53c9\u641c\u7d22\u6811",children:[{value:"\u4e2d\u5e8f\u904d\u5386\u6cd5|\u7a7a\u95f4\u590d\u6742\u5ea6O(n)",id:"\u4e2d\u5e8f\u904d\u5386\u6cd5\u7a7a\u95f4\u590d\u6742\u5ea6on",children:[]},{value:"Morris\u4e2d\u5e8f\u904d\u5386|\u7a7a\u95f4\u590d\u6742\u5ea6O(1)",id:"morris\u4e2d\u5e8f\u904d\u5386\u7a7a\u95f4\u590d\u6742\u5ea6o1",children:[]}]}],o={rightToc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("br",null),Object(b.b)("h1",{id:"99\u6062\u590d\u4e8c\u53c9\u641c\u7d22\u6811"},"99.\u6062\u590d\u4e8c\u53c9\u641c\u7d22\u6811"),Object(b.b)("p",null,Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://leetcode-cn.com/problems/recover-binary-search-tree/"}),"99. \u6062\u590d\u4e8c\u53c9\u641c\u7d22\u6811")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u96be\u5ea6 ",Object(b.b)("inlineCode",{parentName:"strong"},"\u56f0\u96be"))),Object(b.b)("p",null,"\u7ed9\u4f60\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6839\u8282\u70b9 ",Object(b.b)("inlineCode",{parentName:"p"},"root")," \uff0c\u8be5\u6811\u4e2d\u7684\u4e24\u4e2a\u8282\u70b9\u88ab\u9519\u8bef\u5730\u4ea4\u6362\u3002\u8bf7\u5728\u4e0d\u6539\u53d8\u5176\u7ed3\u6784\u7684\u60c5\u51b5\u4e0b\uff0c\u6062\u590d\u8fd9\u68f5\u6811\u3002"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u8fdb\u9636\uff1a"),"\u4f7f\u7528 O(",Object(b.b)("em",{parentName:"p"},"n"),") \u7a7a\u95f4\u590d\u6742\u5ea6\u7684\u89e3\u6cd5\u5f88\u5bb9\u6613\u5b9e\u73b0\u3002\u4f60\u80fd\u60f3\u51fa\u4e00\u4e2a\u53ea\u4f7f\u7528\u5e38\u6570\u7a7a\u95f4\u7684\u89e3\u51b3\u65b9\u6848\u5417\uff1f"),Object(b.b)("h1",{id:""}),Object(b.b)("p",null,"You are given the root of a binary search tree (BST), where exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure."),Object(b.b)("p",null,"Follow up: A solution using O(n) space is pretty straight forward. Could you devise a constant space solution?"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),Object(b.b)("p",null,Object(b.b)("img",Object(a.a)({parentName:"p"},{src:"https://assets.leetcode.com/uploads/2020/10/28/recover1.jpg",alt:"img"}))),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1aroot = [1,3,null,null,2]\n\u8f93\u51fa\uff1a[3,1,null,null,2]\n\u89e3\u91ca\uff1a3 \u4e0d\u80fd\u662f 1 \u5de6\u5b69\u5b50\uff0c\u56e0\u4e3a 3 > 1 \u3002\u4ea4\u6362 1 \u548c 3 \u4f7f\u4e8c\u53c9\u641c\u7d22\u6811\u6709\u6548\u3002\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),Object(b.b)("p",null,Object(b.b)("img",Object(a.a)({parentName:"p"},{src:"https://assets.leetcode.com/uploads/2020/10/28/recover2.jpg",alt:"img"}))),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1aroot = [3,1,4,null,null,2]\n\u8f93\u51fa\uff1a[2,1,4,null,null,3]\n\u89e3\u91ca\uff1a2 \u4e0d\u80fd\u5728 3 \u7684\u53f3\u5b50\u6811\u4e2d\uff0c\u56e0\u4e3a 2 < 3 \u3002\u4ea4\u6362 2 \u548c 3 \u4f7f\u4e8c\u53c9\u641c\u7d22\u6811\u6709\u6548\u3002\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u6811\u4e0a\u8282\u70b9\u7684\u6570\u76ee\u5728\u8303\u56f4 ",Object(b.b)("inlineCode",{parentName:"li"},"[2, 1000]")," \u5185"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"-231 <= Node.val <= 231 - 1"))),Object(b.b)("h2",{id:"\u4e2d\u5e8f\u904d\u5386\u6cd5\u7a7a\u95f4\u590d\u6742\u5ea6on"},"\u4e2d\u5e8f\u904d\u5386\u6cd5|\u7a7a\u95f4\u590d\u6742\u5ea6O(n)"),Object(b.b)("div",{className:"admonition admonition-info alert alert--info"},Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u91cd\u8981\u7ed3\u8bba")),Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"\u5bf9\u4e8e\u4e8c\u53c9\u641c\u7d22\u6811\uff0c\u5176\u4e2d\u5e8f\u904d\u5386\u7ed3\u679c\u662f\u4e00\u4e2a\u5355\u8c03\uff08\u9012\u589e\u3001\u9012\u51cf\uff09\u5e8f\u5217"))),Object(b.b)("blockquote",null,Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},"\u627e\u4e2d\u5e8f\u904d\u5386 ",Object(b.b)("inlineCode",{parentName:"li"},"\u9006\u5e8f\u5bf9"),"\uff0c\u4e24\u4e2a\u5012\u9519\u7684\u8282\u70b9\uff0c\u53ef\u80fd\u5f15\u53d1 1 \u4e2a \u6216 2 \u4e2a\u9006\u5e8f\u5bf9",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u9519\u8bef\u4ea4\u6362\u4e24\u4e2a\u6328\u5728\u4e00\u8d77\u3001\u8fde\u7eed\u7684\u5143\u7d20\uff08\u6570\u503c\u4e0a\u7d27\u6328\uff09\uff1a\u4f1a\u4ea7\u751f ",Object(b.b)("inlineCode",{parentName:"li"},"1")," \u4e2a\u9006\u5e8f\u5bf9"),Object(b.b)("li",{parentName:"ul"},"\u9519\u8bef\u4ea4\u6362\u4e24\u4e2a\u6ca1\u6709\u6328\u5728\u4e00\u8d77\uff0c\u5f7c\u6b64\u4e4b\u95f4\u6709\u8ddd\u79bb\uff08\u6570\u503c\u4e0a\uff0c\u4e24\u6570\u4e4b\u95f4\u8fd8\u6709\u5176\u4ed6\u5143\u7d20\uff09\uff1a\u4f1a\u4ea7\u751f ",Object(b.b)("inlineCode",{parentName:"li"},"2")," \u4e2a\u9006\u5e8f\u5bf9"))),Object(b.b)("li",{parentName:"ul"},"\u627e\u5230\u9006\u5e8f\u5bf9\u8fdb\u884c\u4ea4\u6362",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u53ea\u67091\u4e2a\u9006\u5e8f\u5bf9\uff1a\u4ed6\u4eec\u4fe9\u4ea4\u6362"),Object(b.b)("li",{parentName:"ul"},"2\u4e2a\u9006\u5e8f\u5bf9\uff1a\u7b2c\u4e00\u4e2a\u9006\u5e8f\u5bf9\u7684\u5de6 \u548c \u7b2c\u4e8c\u4e2a\u9006\u5e8f\u5bf9\u7684\u53f3 \u4ea4\u6362"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u5408\u5e76\u4e24\u79cd\u60c5\u51b5\uff1a\u4e0d\u8bba\u4e00\u4e2a\u8fd8\u662f\u4e24\u4e2a\u9006\u5e8f\u5bf9\uff0c\u90fd\u662f\u627e\u9006\u5e8f\u5bf9\u7684 ",Object(b.b)("inlineCode",{parentName:"strong"},"\u5934")," \u548c ",Object(b.b)("inlineCode",{parentName:"strong"},"\u5c3e")))))),Object(b.b)("table",{parentName:"blockquote"},Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u6b63\u786e"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"11"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"17"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"18"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"22"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"28"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"37"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"42"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"44"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"62"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u4ea4\u6362\u76f8\u90bb\u7684 ",Object(b.b)("inlineCode",{parentName:"td"},"22"),"\u3001",Object(b.b)("inlineCode",{parentName:"td"},"28")," ",Object(b.b)("br",null),"\u4ea7\u751f\u4e00\u4e2a\u9006\u5e8f\u5bf9"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"11"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"17"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"18"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"28")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"22")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"37"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"42"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"44"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"62")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u4ea4\u6362\u4e0d\u76f8\u90bb\u7684 ",Object(b.b)("inlineCode",{parentName:"td"},"18"),"\u3001",Object(b.b)("inlineCode",{parentName:"td"},"44")," ",Object(b.b)("br",null),"\u4ea7\u751f\u4e24\u4e2a\u9006\u5e8f\u5bf9"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"11"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"17"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("em",{parentName:"td"},Object(b.b)("inlineCode",{parentName:"em"},"44"))),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("em",{parentName:"td"},"22")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"28"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"37"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("em",{parentName:"td"},"42")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("em",{parentName:"td"},Object(b.b)("inlineCode",{parentName:"em"},"18"))),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"62"))))),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u5b9e\u73b0\uff1a"),Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},"\u4e2d\u5e8f\u904d\u5386\u4e8c\u53c9\u641c\u7d22\u6811\uff0c\u6bcf\u4e2a\u8282\u70b9\u90fd\u4e0e\u4e0a\u4e00\u4e2a\u8282\u70b9\u7684\u503c\u8fdb\u884c\u6bd4\u8f83"),Object(b.b)("li",{parentName:"ul"},"\u5982\u679c\u627e\u5230\u9006\u5e8f\u5bf9\uff0c\u5c06\u9006\u5e8f\u5bf9\u7684 ",Object(b.b)("inlineCode",{parentName:"li"},"\u5934")," \u8bb0\u5f55\u4e3a\u9519\u8bef\u8282\u70b91\uff0c",Object(b.b)("inlineCode",{parentName:"li"},"\u5c3e")," \u8bb0\u5f55\u4e3a\u9519\u8bef\u8282\u70b92",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5982\u679c\u53ea\u51fa\u73b0\u4e00\u6b21\u9006\u5e8f\u5bf9\uff1a\u76f4\u63a5\u5f97\u5230\u4e86\u6b63\u786e\u5934\u5c3e"),Object(b.b)("li",{parentName:"ul"},"\u5982\u679c\u51fa\u73b0\u4e24\u6b21\u9006\u5e8f\u5bf9\uff1a\u5934\u5c31\u662f\u7b2c\u4e00\u6b21\u9006\u5e8f\u5bf9\u4e2d\u7684\u5934\uff0c\u5373\u9519\u8bef\u8282\u70b91\uff1b\u5c3e\u8981\u66f4\u65b0\u4e3a\u7b2c\u4e8c\u4e2a\u9006\u5e8f\u5bf9\u7684\u5c3e"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u7efc\u4e0a\uff1a\u53ea\u6709\u9519\u8bef\u8282\u70b91\u4e3a null \u65f6\u624d\u8bb0\u5f55\u9519\u8bef\u8282\u70b91\uff0c\u800c\u9519\u8bef\u8282\u70b92\u603b\u662f\u66f4\u65b0")))))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(n)"),Object(b.b)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(\u6811\u9ad8) = O(h) \uff0c\u6700\u574f\u60c5\u51b5\u4e0b\uff0c\u6811\u9000\u5316\u4e3a\u94fe\u8868\uff0c\u5219\u7a7a\u95f4\u590d\u6742\u5ea6\u4e3a O(n)\uff0c\u6700\u597d\u4e3a O(logn)")),Object(b.b)("h2",{id:"morris\u4e2d\u5e8f\u904d\u5386\u7a7a\u95f4\u590d\u6742\u5ea6o1"},"Morris\u4e2d\u5e8f\u904d\u5386|\u7a7a\u95f4\u590d\u6742\u5ea6O(1)"))}p.isMDXComponent=!0},576:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},O=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),O=p(n),m=a,u=O["".concat(c,".").concat(m)]||O[m]||j[m]||b;return n?r.a.createElement(u,l(l({ref:t},o),{},{components:n})):r.a.createElement(u,l({ref:t},o))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,c=new Array(b);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var o=2;o<b;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);