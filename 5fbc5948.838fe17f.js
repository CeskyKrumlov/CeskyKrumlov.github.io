(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{243:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),i=(n(0),n(571)),c={id:"6.countingSort",title:"\u8ba1\u6570\u6392\u5e8f",hide_title:!0},o={unversionedId:"sf/\u6392\u5e8f/6.countingSort",id:"sf/\u6392\u5e8f/6.countingSort",isDocsHomePage:!1,title:"\u8ba1\u6570\u6392\u5e8f",description:"\u8ba1\u6570\u6392\u5e8f",source:"@site/datastructure/sf/\u6392\u5e8f/\u8ba1\u6570\u6392\u5e8f.md",slug:"/sf/\u6392\u5e8f/6.countingSort",permalink:"/datastructure/sf/\u6392\u5e8f/6.countingSort",version:"current",sidebar:"docs2",previous:{title:"\u5e0c\u5c14\u6392\u5e8f",permalink:"/datastructure/sf/\u6392\u5e8f/4.shellSort"},next:{title:"\u6876\u6392\u5e8f",permalink:"/datastructure/sf/\u6392\u5e8f/7.bucketSort"}},b=[{value:"\u8ba1\u6570\u6392\u5e8f",id:"\u8ba1\u6570\u6392\u5e8f",children:[]},{value:"\u6700\u7b80\u5b9e\u73b0",id:"\u6700\u7b80\u5b9e\u73b0",children:[]},{value:"\u6539\u8fdb",id:"\u6539\u8fdb",children:[]}],l={rightToc:b};function u(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("br",null),Object(i.b)("h1",{id:"\u8ba1\u6570\u6392\u5e8f"},"\u8ba1\u6570\u6392\u5e8f"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u5192\u6ce1\u3001\u9009\u62e9\u3001\u63d2\u5165\u3001\u5f52\u5e76\u3001\u5feb\u901f\u3001\u5e0c\u5c14\u3001\u5806\u6392\u5e8f\u90fd\u662f\u57fa\u4e8e ",Object(i.b)("em",{parentName:"p"},"\u6bd4\u8f83")," \u7684\u6392\u5e8f"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"\u5e73\u5747\u65f6\u95f4\u590d\u6742\u5ea6\u6700\u4f4e\u4e3a O(nlogn)")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u8ba1\u6570\u6392\u5e8f\u3001\u6876\u6392\u5e8f\u3001\u57fa\u6570\u6392\u5e8f\uff0c\u90fd\u4e0d\u662f\u57fa\u4e8e\u6bd4\u8f83\u7684\u6392\u5e8f")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u5178\u578b\u7684\u7a7a\u95f4\u6362\u65f6\u95f4\uff0c\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\uff0c\u5e73\u5747\u65f6\u95f4\u590d\u6742\u5ea6\u53ef\u4ee5\u6bd4 O(nlogn) \u66f4\u4f4e"))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u8ba1\u6570\u6392\u5e8f")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"1954 \u5e74\u7531 Harold H. Seward \u63d0\u51fa\uff0c\u9002\u5408\u5bf9\u4e00\u5b9a\u8303\u56f4\u5185\u7684\u6b63\u6570\u8fdb\u884c\u6392\u5e8f"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u6838\u5fc3\u601d\u60f3\uff1a\u7edf\u8ba1\u6bcf\u4e2a\u6574\u6570\u5728\u5e8f\u5217\u4e2d\u51fa\u73b0\u7684\u6b21\u6570\uff0c\u8fdb\u800c\u63a8\u5bfc\u51fa\u6bcf\u4e2a\u6574\u6570\u5728 ",Object(i.b)("inlineCode",{parentName:"strong"},"\u6709\u5e8f\u5e8f\u5217")," \u4e2d\u7684\u7d22\u5f15")))),Object(i.b)("br",null),Object(i.b)("h1",{id:"\u6700\u7b80\u5b9e\u73b0"},"\u6700\u7b80\u5b9e\u73b0"),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u7528\u4e00\u4e2a\u6570\u7ec4\u5b58\u50a8\u5143\u7d20\u51fa\u73b0\u7684\u6b21\u6570\uff0c\u6570\u7ec4\u957f\u5ea6\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"\u5143\u7d20\u6700\u5927\u503c + 1"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6570\u5b57 ",Object(i.b)("inlineCode",{parentName:"li"},"1")," \u51fa\u73b0\u7684\u6b21\u6570\u5c31\u8bb0\u5f55\u5728 \u6570\u7ec4 ",Object(i.b)("inlineCode",{parentName:"li"},"array[1]")," \u4f4d\u7f6e"),Object(i.b)("li",{parentName:"ul"},"\u6570\u5b57 ",Object(i.b)("inlineCode",{parentName:"li"},"20")," \u51fa\u73b0\u7684\u6b21\u6570\u5c31\u8bb0\u5f55\u5728 \u6570\u7ec4 ",Object(i.b)("inlineCode",{parentName:"li"},"array[20]")," \u4f4d\u7f6e"))),Object(i.b)("li",{parentName:"ul"},"\u4ece\u5de6\u5411\u53f3\u626b\u63cf\u6570\u7ec4\uff0c\u53ea\u8981\u5143\u7d20\u6709\u503c\u5c31\u8f93\u51fa\u5bf9\u5e94\u4e0b\u6807\uff0c\u503c\u4e3a\u51e0\u5c31\u8f93\u51fa\u51e0\u6b21 "))),Object(i.b)("br",null),Object(i.b)("img",{src:n(918).default,style:{zoom:"60%",boxShadow:"0px 0px 0px #333333",borderRadius:"19px"}})," ",Object(i.b)("br",null),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'/**\n * \u8ba1\u6570\u6392\u5e8f \u6700\u7b80\u5b9e\u73b0\n */\npublic class CountingSort1 extends Sort<Integer> {\n    public CountingSort1(Integer[] array) {\n        this.array = array;\n    }\n\n    @Override\n    public void sort() {\n        // \u627e\u51fa\u5143\u7d20\u6700\u5927\u503c\n        int max = array[0];\n        for (int i = 1; i < array.length; i++)\n            if (array[i] > max) max = array[i];\n\n        // \u5f00\u8f9f\u5185\u5b58\u7a7a\u95f4\uff0c\u5b58\u50a8\u6bcf\u4e2a\u6574\u6570\u51fa\u73b0\u7684\u6b21\u6570\n        int[] countArray = new int[max + 1];\n        for (int i = 0; i < array.length; i++)\n            countArray[array[i]]++;\n\n        int current = 0; // \u8bb0\u5f55\u5f53\u524d\u64cd\u4f5c\u4f4d\u7f6e\u7684\u6307\u9488\n        // \u904d\u5386\u8868\u683c\u8f93\u51fa\n        for (int i = 0; i < countArray.length; i++)\n            while (countArray[i]-- > 0)\n                // \u76f4\u63a5\u8986\u76d6 \u539f\u6570\u7ec4array]\n                array[current++] = i;\n               /* current++;\n                countArray[i]--;*/\n    }\n\n    public static void main(String[] args) {\n        Integer[] array = {4, 5, 3, 2, 1, 1};\n        new CountingSort1(array).sort();\n        for (Integer integer : array) {\n            System.out.println(integer + " ");\n        }\n    }\n}\n')),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"\u95ee\u9898")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"\u65e0\u6cd5\u5bf9\u8d1f\u6570\u8fdb\u884c\u6392\u5e8f"),Object(i.b)("li",{parentName:"ul"},"\u6781\u5176\u6d6a\u8d39\u5185\u5b58\u7a7a\u95f4"),Object(i.b)("li",{parentName:"ul"},"\u4e0d\u7a33\u5b9a\u6392\u5e8f")))),Object(i.b)("br",null),Object(i.b)("h1",{id:"\u6539\u8fdb"},"\u6539\u8fdb"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u4ece\u7d22\u5f15 ",Object(i.b)("inlineCode",{parentName:"li"},"0")," \u5f00\u59cb\uff0c\u4f9d\u6b21\u5b58\u653e\u5143\u7d20\u51fa\u73b0\u7684\u6b21\u6570"),Object(i.b)("li",{parentName:"ul"},"\u6bcf\u4e2a\u6b21\u6570\u7d2f\u52a0\u4e0a\u524d\u9762\u6240\u6709\u6b21\u6570\uff0c\u5f97\u5230\u7684\u5c31\u662f\u5143\u7d20\u5728\u6709\u5e8f\u5e8f\u5217\u4e2d\u7684\u4f4d\u7f6e\u4fe1\u606f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4ece\u53f3\u5411\u5de6\u904d\u5386\uff0c\u5f53\u524d\u5143\u7d20\u7684\u7d22\u5f15 = \u5f53\u524d\u5143\u7d20\u503c\uff08\u7d2f\u8ba1\u6b21\u6570\uff09 - \u5f53\u524d\u6b21\u6570")))),Object(i.b)("br",null),Object(i.b)("img",{src:n(919).default,style:{zoom:"60%",boxShadow:"0px 0px 0px #333333",borderRadius:"19px"}})," ",Object(i.b)("br",null))}u.isMDXComponent=!0},571:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=u(n),s=r,d=p["".concat(c,".").concat(s)]||p[s]||m[s]||i;return n?a.a.createElement(d,o(o({ref:t},l),{},{components:n})):a.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=s;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},918:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/15-83f31aa4aacf92bd793395176c97c9fd.png"},919:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/16-c230898ff08d81e1c8e7a7481c995beb.png"}}]);