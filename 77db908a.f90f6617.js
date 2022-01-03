(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{302:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),c=(n(0),n(571)),i={id:"7.bucketSort",title:"\u6876\u6392\u5e8f",hide_title:!0},o={unversionedId:"sf/\u6392\u5e8f/7.bucketSort",id:"sf/\u6392\u5e8f/7.bucketSort",isDocsHomePage:!1,title:"\u6876\u6392\u5e8f",description:"\u6876\u6392\u5e8f",source:"@site/datastructure/sf/\u6392\u5e8f/\u6876\u6392\u5e8f.md",slug:"/sf/\u6392\u5e8f/7.bucketSort",permalink:"/datastructure/sf/\u6392\u5e8f/7.bucketSort",version:"current",sidebar:"docs2",previous:{title:"\u8ba1\u6570\u6392\u5e8f",permalink:"/datastructure/sf/\u6392\u5e8f/6.countingSort"},next:{title:"\u4e8c\u5206\u67e5\u627e\u6cd5",permalink:"/datastructure/sf/\u4e8c\u5206\u67e5\u627e/1.binarySearchAlgorithm"}},l=[{value:"\u6876\u6392\u5e8f",id:"\u6876\u6392\u5e8f",children:[]},{value:"\u4f2a\u4ee3\u7801",id:"\u4f2a\u4ee3\u7801",children:[]},{value:"\u590d\u6742\u5ea6",id:"\u590d\u6742\u5ea6",children:[]}],u={rightToc:l};function b(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(c.b)("br",null),Object(c.b)("h1",{id:"\u6876\u6392\u5e8f"},"\u6876\u6392\u5e8f"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u6d41\u7a0b"),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u5b9a\u6570\u91cf\u7684\u6876\uff0c\u4f8b\u5982 \u6570\u7ec4\u3001\u94fe\u8868"),Object(c.b)("li",{parentName:"ul"},"\u6309\u7167\u4e00\u5b9a\u7684\u89c4\u5219\uff08\u4e0d\u540c\u7c7b\u578b\u7684\u6570\u636e\uff0c\u89c4\u5219\u4e0d\u540c\uff09\uff0c\u5c06\u5e8f\u5217\u4e2d\u7684\u5143\u7d20\u5747\u5300\u5206\u914d\u5230\u5bf9\u5e94\u7684\u6876"),Object(c.b)("li",{parentName:"ul"},"\u5206\u522b\u5bf9\u6bcf\u4e2a\u6876\u8fdb\u884c\u5355\u72ec\u6392\u5e8f"),Object(c.b)("li",{parentName:"ul"},"\u5c06\u6240\u6709\u975e\u7a7a\u6876\u7684\u5143\u7d20\u5408\u5e76\u6210\u6709\u5e8f\u5e8f\u5217"))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u5143\u7d20\u5728\u6876\u4e2d\u7684\u7d22\u5f15"),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u4ee5 float \u4e3a\u4f8b\uff1a \u7d22\u5f15 = \u5143\u7d20 * \u5143\u7d20\u6570\u76ee")),Object(c.b)("br",null),Object(c.b)("img",{src:n(971).default,style:{zoom:"60%",boxShadow:"0px 0px 0px #333333",borderRadius:"19px"}})," ",Object(c.b)("br",null)),Object(c.b)("br",null),Object(c.b)("h1",{id:"\u4f2a\u4ee3\u7801"},"\u4f2a\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u6876\u6570\u7ec4"',title:'"\u6876\u6570\u7ec4"'}),"double[] array = {0.34, 0.47, 0.29, 0.84, 0.45, 0.38, 0.35, 0.76};\n// \u6876\u6570\u7ec4\nList<Double>[] buckets = new List[array.length];\nfor (int i = 0; i < array.length; i++) {\n    int bucketIndex = (int) (array[i] * array.length);\n    List<Double> bucket = buckets[bucketIndex];\n    if (bucket == null) {\n        bucket = new LinkedList<>();\n        beckets[bucketIndex] = bucket;\n    }\n    bucket.add(array[i]);\n}\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u5bf9\u6bcf\u4e2a\u6876\u8fdb\u884c\u6392\u5e8f"',title:'"\u5bf9\u6bcf\u4e2a\u6876\u8fdb\u884c\u6392\u5e8f"'}),"int index = 0;\nfor (int i = 0; i < bucket.length; i++) {\n    if (buckets[i] == null) continue;\n    buckets[i].sort(null); // original Java API\n    for (Double b : buckets[i]) {\n        array[index++] = d;\n    }\n}\n")),Object(c.b)("br",null),Object(c.b)("h1",{id:"\u590d\u6742\u5ea6"},"\u590d\u6742\u5ea6"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6 O(n + m) \uff0c m \u662f\u6876\u7684\u6570\u76ee"),Object(c.b)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a \u8ba4\u4e3a\u6bcf\u4e2a\u6876\u91cc\u90fd\u5b58\u653e\u7740 n/m \u4e2a\u5143\u7d20\uff0c\u5355\u4e2a\u6876\u4e2d\u6392\u5e8f\u7b97\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a nlogn\uff0c\u5219\u5355\u4e2a\u6876\u7684\u6392\u5e8f\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a n/m ",Object(c.b)("em",{parentName:"li"}," log(n/m)\uff0c\u6700\u7ec8 `O(n + n"),"logn - n*logm )",Object(c.b)("inlineCode",{parentName:"li"},"\uff0c\u7b80\u8bb0\u4e3a "),"O(n + k)`")))}b.isMDXComponent=!0},571:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||s[d]||c;return n?a.a.createElement(f,o(o({ref:t},u),{},{components:n})):a.a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<c;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},971:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/17-21c37b4357dd1e277230d740f9796026.png"}}]);