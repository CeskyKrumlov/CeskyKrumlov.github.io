(window.webpackJsonp=window.webpackJsonp||[]).push([[411],{1145:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/4-9bfa99ea34d57cdce66eb69ac9bf3819.png"},1146:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/5-2e9075a8d33afd2f15229b31ec6bd53e.png"},467:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),b=(n(0),n(567)),i={id:"75.sortColor",title:"75.\u989c\u8272\u5206\u7c7b",hide_title:!0},l={unversionedId:"sf/\u6392\u5e8f/75.sortColor",id:"sf/\u6392\u5e8f/75.sortColor",isDocsHomePage:!1,title:"75.\u989c\u8272\u5206\u7c7b",description:"\u989c\u8272\u5206\u7c7b",source:"@site/datastructure/sf/\u6392\u5e8f/75.\u989c\u8272\u5206\u7c7b.md",slug:"/sf/\u6392\u5e8f/75.sortColor",permalink:"/datastructure/sf/\u6392\u5e8f/75.sortColor",version:"current",sidebar:"docs2",previous:{title:"88.\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4",permalink:"/datastructure/sf/\u53cc\u6307\u9488/88.mergeTwoOrderedList"},next:{title:"283.\u96f6\u79fb\u52a8",permalink:"/datastructure/sf/\u53cc\u6307\u9488/283.moveZeros"}},c=[{value:"\u989c\u8272\u5206\u7c7b",id:"\u989c\u8272\u5206\u7c7b",children:[{value:"\u53cc\uff08\u4e09\uff09\u6307\u9488\u6cd5",id:"\u53cc\uff08\u4e09\uff09\u6307\u9488\u6cd5",children:[]}]}],o={rightToc:c};function p(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,i,{components:t,mdxType:"MDXLayout"}),Object(b.b)("br",null),Object(b.b)("h1",{id:"\u989c\u8272\u5206\u7c7b"},"\u989c\u8272\u5206\u7c7b"),Object(b.b)("p",null," ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://leetcode-cn.com/problems/sort-colors/"}),"75. \u989c\u8272\u5206\u7c7b")),Object(b.b)("p",null,"\u96be\u5ea6 ",Object(b.b)("inlineCode",{parentName:"p"},"\u4e2d\u7b49")," "),Object(b.b)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u5305\u542b\u7ea2\u8272\u3001\u767d\u8272\u548c\u84dd\u8272\uff0c\u4e00\u5171 ",Object(b.b)("inlineCode",{parentName:"p"},"n")," \u4e2a\u5143\u7d20\u7684\u6570\u7ec4\uff0c",Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",Object(a.a)({parentName:"strong"},{href:"https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95"}),"\u539f\u5730")),"\u5bf9\u5b83\u4eec\u8fdb\u884c\u6392\u5e8f\uff0c\u4f7f\u5f97\u76f8\u540c\u989c\u8272\u7684\u5143\u7d20\u76f8\u90bb\uff0c\u5e76\u6309\u7167\u7ea2\u8272\u3001\u767d\u8272\u3001\u84dd\u8272\u987a\u5e8f\u6392\u5217\u3002"),Object(b.b)("p",null,"\u6b64\u9898\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u6574\u6570 ",Object(b.b)("inlineCode",{parentName:"p"},"0"),"\u3001 ",Object(b.b)("inlineCode",{parentName:"p"},"1")," \u548c ",Object(b.b)("inlineCode",{parentName:"p"},"2")," \u5206\u522b\u8868\u793a\u7ea2\u8272\u3001\u767d\u8272\u548c\u84dd\u8272\u3002"),Object(b.b)("p",null,"Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue."),Object(b.b)("p",null,"We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1anums = [2,0,2,1,1,0]\n\u8f93\u51fa\uff1a[0,0,1,1,2,2]\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1anums = [2,0,1]\n\u8f93\u51fa\uff1a[0,1,2]\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1anums = [0]\n\u8f93\u51fa\uff1a[0]\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u793a\u4f8b 4\uff1a")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"\u8f93\u5165\uff1anums = [1]\n\u8f93\u51fa\uff1a[1]\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"n == nums.length")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"1 <= n <= 300")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"nums[i]")," \u4e3a ",Object(b.b)("inlineCode",{parentName:"li"},"0"),"\u3001",Object(b.b)("inlineCode",{parentName:"li"},"1")," \u6216 ",Object(b.b)("inlineCode",{parentName:"li"},"2"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u8fdb\u9636\uff1a")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u4f60\u53ef\u4ee5\u4e0d\u4f7f\u7528\u4ee3\u7801\u5e93\u4e2d\u7684\u6392\u5e8f\u51fd\u6570\u6765\u89e3\u51b3\u8fd9\u9053\u9898\u5417\uff1f"),Object(b.b)("li",{parentName:"ul"},"\u4f60\u80fd\u60f3\u51fa\u4e00\u4e2a\u4ec5\u4f7f\u7528\u5e38\u6570\u7a7a\u95f4\u7684",Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"\u4e00\u8d9f")),"\u626b\u63cf\u7b97\u6cd5\u5417\uff1f")),Object(b.b)("div",{className:"admonition admonition-info alert alert--info"},Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u95ee\u9898")),Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"\u9898\u76ee\u7684\u7cbe\u9ad3\uff1a\u65f6\u95f4\u590d\u6742\u5ea6 O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6 O(1)"),Object(b.b)("ul",{parentName:"div"},Object(b.b)("li",{parentName:"ul"},"\u4e4b\u524d\u5b66\u8fc7\u7684\u6392\u5e8f\u7b97\u6cd5\uff1a",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\u592a\u9ad8\uff1a\u5192\u6ce1\u3001\u9009\u62e9\u3001\u63d2\u5165\u3001\u5f52\u5e76\u3001\u5e0c\u5c14\u3001\u5806"),Object(b.b)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\u592a\u9ad8\uff1a\u8ba1\u6570\u6392\u5e8f\u3001\u57fa\u6570\u6392\u5e8f\u3001\u6876\u6392\u5e8f"))),Object(b.b)("li",{parentName:"ul"},"\u76f4\u63a5\u7167\u642c\u662f\u4e0d\u884c\u7684")))),Object(b.b)("div",{className:"admonition admonition-info alert alert--info"},Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u89e3\u6cd5")),Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("ul",{parentName:"div"},Object(b.b)("li",{parentName:"ul"},"\u5408\u5e76\u5b50\u5e8f\u5217",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5f52\u5e76\u6392\u5e8f\u601d\u60f3"))),Object(b.b)("li",{parentName:"ul"},"\u53cc\u6307\u9488\u6cd5",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u4e00\u822c\u8981\u6c42 ",Object(b.b)("inlineCode",{parentName:"li"},"\u4e00\u8d9f")," \u5c31\u641e\u5b9a\u4ec0\u4e48\u7684\u95ee\u9898\uff0c\u5f88\u53ef\u80fd\u8981\u501f\u52a9\u53cc\u6307\u9488\uff0c\u751a\u81f3\u662f\u4e09\u6307\u9488")))))),Object(b.b)("h2",{id:"\u53cc\uff08\u4e09\uff09\u6307\u9488\u6cd5"},"\u53cc\uff08\u4e09\uff09\u6307\u9488\u6cd5"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u601d\u8def\u6f14\u8fdb"),Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u4ece\u5de6\u5f80\u53f3\u626b\u4e00\u904d"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u53d1\u73b0 ",Object(b.b)("inlineCode",{parentName:"li"},"0")," \u653e\u5230\u6700\u5de6\u8fb9"),Object(b.b)("li",{parentName:"ul"},"\u53d1\u73b0 ",Object(b.b)("inlineCode",{parentName:"li"},"2")," \u653e\u5230\u6700\u53f3\u8fb9"),Object(b.b)("li",{parentName:"ul"},"\u53d1\u73b0 ",Object(b.b)("inlineCode",{parentName:"li"},"1")," \u4e0d\u52a8"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u7528\u4e24\u4e2a\u6307\u9488\uff0c\u5206\u522b\u6307\u5411\u5934\u5c3e"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5de6\u4fa7\u53d1\u73b0 ",Object(b.b)("inlineCode",{parentName:"li"},"2")," \u5c31\u4ea4\u6362\u5de6\u53f3\u6307\u9488"),Object(b.b)("li",{parentName:"ul"},"\u53f3\u6307\u9488\u5de6\u79fb")))),Object(b.b)("img",{src:n(1145).default,style:{zoom:"40%",boxShadow:"0px 0px 0px #333333",borderRadius:"10px"}})," ",Object(b.b)("br",null),Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u8fd8\u8981\u5224\u65ad\u4e00\u6b21\u5de6\u6307\u9488\u7684\u65b0\u503c\uff0c\u56e0\u4e3a\u6362\u8fc7\u6765\u7684\u4e5f\u53ef\u80fd\u662f\u4e2a ",Object(b.b)("inlineCode",{parentName:"strong"},"2")),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u8fd8\u662f ",Object(b.b)("inlineCode",{parentName:"p"},"2"),"\uff1a\u90a3\u4e48\u518d\u548c\u53f3\u6307\u9488\u4ea4\u6362")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u4e0d\u662f ",Object(b.b)("inlineCode",{parentName:"p"},"2"),"\uff1a"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u662f ",Object(b.b)("inlineCode",{parentName:"li"},"1")," \uff1a\u4e0d\u4f5c\u5904\u7406\uff0c\u5de6\u6307\u9488\u53f3\u79fb\uff0c",Object(b.b)("strong",{parentName:"li"},"\u5047\u8bbe\u9047\u5230\u4e00\u4e2a ",Object(b.b)("inlineCode",{parentName:"strong"},"0")," \u90a3\u4e48\u8fd9\u4e2a ",Object(b.b)("inlineCode",{parentName:"strong"},"0")," \u5e94\u5f53\u653e\u5230\u521a\u624d\u7684 ",Object(b.b)("inlineCode",{parentName:"strong"},"1")," \u5de6\u8fb9\uff0c\u4f46\u662f\u5de6\u6307\u9488\u5df2\u7ecf\u79fb\u52a8\u8d70\u4e86\uff0c\u56e0\u6b64\u5f97\u51fa\u7ed3\u8bba ",Object(b.b)("inlineCode",{parentName:"strong"},"\u9700\u89813\u6307\u9488")))))))),Object(b.b)("img",{src:n(1146).default,style:{zoom:"40%",boxShadow:"0px 0px 0px #333333",borderRadius:"10px"}})," ",Object(b.b)("br",null)),Object(b.b)("blockquote",null,Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},"\u7ea2\u8272\u6307\u9488\u626b\u63cf\u6570\u7ec4",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u9047\u5230 ",Object(b.b)("inlineCode",{parentName:"li"},"1"),"\u2014\u2014 \u6307\u9488\u76f4\u63a5\u53f3\u79fb"),Object(b.b)("li",{parentName:"ul"},"\u9047\u5230 ",Object(b.b)("inlineCode",{parentName:"li"},"0")," \u2014\u2014 \u8ddf\u7eff\u8272\u6307\u9488\uff08\u63070\u6307\u9488\uff09\u4ea4\u6362\uff0c\u7eff\u8272\u6307\u9488++\uff0c\u7ea2\u8272\u6307\u9488++"),Object(b.b)("li",{parentName:"ul"},"\u9047\u5230 ",Object(b.b)("inlineCode",{parentName:"li"},"2")," \u2014\u2014 \u8ddf\u7d2b\u8272\u6307\u9488\uff08\u63072\u6307\u9488\uff09\u4ea4\u6362\uff0c\u7d2b\u8272\u6307\u9488--\uff0c",Object(b.b)("strong",{parentName:"li"},"\u7ea2\u8272\u6307\u9488\u4e0d\u52a8\uff0c\u518d\u6b21\u5bf9\u7ea2\u8272\u6307\u9488\u7684\u503c\u8fdb\u884c\u5224\u65ad\uff0c",Object(b.b)("inlineCode",{parentName:"strong"},"\u4fdd\u6301\u7ea2\u8272\u6307\u9488\u7684\u503c\u4e0d\u53d8\u5373\u53ef"),"\uff0c\u56e0\u4e3a\u6b63\u597d\u4f1a\u518d\u6b21\u8fdb\u5165\u5faa\u73af")))),Object(b.b)("li",{parentName:"ul"},"\u7ea2\u8272\u6307\u9488 > \u7d2b\u8272\u6307\u9488\uff0c\u7ed3\u675f"))),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class _75\u989c\u8272\u5206\u7c7b {\n    public void sortColors(int[] nums) {\n        int green = 0;\n        int purple = nums.length - 1;\n        int red = 0;\n\n        while (red <= purple) {\n            if (nums[red] == 0) // \u4e0e\u7eff\u8272\u4ea4\u6362\n                swap(nums, red++, green++);\n            else if (nums[red] == 1)\n                red++;\n            else  // \u4e0e\u7d2b\u8272\u4ea4\u6362\n                swap(nums, red, purple--);\n            // \u518d\u6b21\u5224\u65ad red \u5bf9\u5e94\u7684\u503c\n            // !! \u4e3b\u8981\u4e0d\u52a8 red \u7684\u503c\u5373\u53ef\u5b9e\u73b0\uff0c\u56e0\u4e3a\u4f1a\u518d\u6b21\u8fdb\u5165while\u5faa\u73af\n\n        }\n    }\n\n    private void swap(int[] nums, int i1, int i2) {\n        int temp = nums[i1];\n        nums[i1] = nums[i2];\n        nums[i2] = temp;\n    }\n\n    public static void main(String[] args) {\n        int[] array = {2, 1, 2, 1, 0, 0};\n        _75\u989c\u8272\u5206\u7c7b obj = new _75\u989c\u8272\u5206\u7c7b();\n        obj.sortColors(array);\n\n        for (int i : array) {\n            System.out.print(i + " ");\n        }\n    }\n}\n')))}p.isMDXComponent=!0},567:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),m=p(n),O=a,s=m["".concat(i,".").concat(O)]||m[O]||u[O]||b;return n?r.a.createElement(s,l(l({ref:t},o),{},{components:n})):r.a.createElement(s,l({ref:t},o))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,i=new Array(b);i[0]=O;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var o=2;o<b;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);