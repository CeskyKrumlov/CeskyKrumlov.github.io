(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{226:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return b})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return d}));var r=t(2),i=t(6),a=(t(0),t(554)),l={id:"2.mergeSort",title:"\u5f52\u5e76\u6392\u5e8f",hide_title:!0},b={unversionedId:"sf/\u6392\u5e8f/2.mergeSort",id:"sf/\u6392\u5e8f/2.mergeSort",isDocsHomePage:!1,title:"\u5f52\u5e76\u6392\u5e8f",description:"\u5f52\u5e76\u6392\u5e8f",source:"@site/datastructure/sf/\u6392\u5e8f/\u5f52\u5e76\u6392\u5e8f.md",slug:"/sf/\u6392\u5e8f/2.mergeSort",permalink:"/datastructure/sf/\u6392\u5e8f/2.mergeSort",version:"current",sidebar:"docs2",previous:{title:"\u5806\u6392\u5e8f",permalink:"/datastructure/sf/\u6392\u5e8f/5.heapSort"},next:{title:"\u5feb\u901f\u6392\u5e8f",permalink:"/datastructure/sf/\u6392\u5e8f/3.fastSort"}},c=[{value:"\u5f52\u5e76\u6392\u5e8f",id:"\u5f52\u5e76\u6392\u5e8f",children:[{value:"innerSort(.., ..) \u65b9\u6cd5",id:"innersort--\u65b9\u6cd5",children:[]},{value:"merge(int begin, int middle, int end) \u65b9\u6cd5",id:"mergeint-begin-int-middle-int-end-\u65b9\u6cd5",children:[]}]},{value:"\u65f6\u95f4\u590d\u6742\u5ea6",id:"\u65f6\u95f4\u590d\u6742\u5ea6",children:[]}],o={rightToc:c};function d(e){var n=e.components,l=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},o,l,{components:n,mdxType:"MDXLayout"}),Object(a.b)("br",null),Object(a.b)("h1",{id:"\u5f52\u5e76\u6392\u5e8f"},"\u5f52\u5e76\u6392\u5e8f"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"1945 \u5e74\u7531\u51af\xb7\u8bfa\u4f9d\u66fc\u63d0\u51fa")),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"\u4e0d\u65ad\u7684\u5c06\u5f53\u524d\u5e8f\u5217\u5e73\u5747\u5206\u5272\u4e3a ",Object(a.b)("inlineCode",{parentName:"li"},"2")," \u4e2a\u5b50\u5e8f\u5217",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u5206\u5272\u5230\u4e0d\u80fd\u518d\u5206\u5272\u4f4d\u7f6e\uff0c\u5373\u53ea\u5269 ",Object(a.b)("inlineCode",{parentName:"li"},"1")," \u4e2a\u5143\u7d20"),Object(a.b)("li",{parentName:"ul"},"\u4e0d\u65ad\u7684\u5c06 ",Object(a.b)("inlineCode",{parentName:"li"},"2")," \u4e2a\u5b50\u5e8f\u5217\u5408\u5e76\u4e3a\u4e00\u4e2a ",Object(a.b)("inlineCode",{parentName:"li"},"\u6709\u5e8f\u5e8f\u5217")))),Object(a.b)("li",{parentName:"ul"},"\u76f4\u5230\u6700\u7ec8\u53ea\u5269\u4e0b\u4e00\u4e2a\u6709\u5e8f\u5e8f\u5217"))),Object(a.b)("h2",{id:"innersort--\u65b9\u6cd5"},"innerSort(.., ..) \u65b9\u6cd5"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("inlineCode",{parentName:"p"},"innerSort(int begin, int end)")," \u65b9\u6cd5"),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"\u5bf9 ",Object(a.b)("inlineCode",{parentName:"li"},"[begin, end)")," \u8303\u56f4\u5185\u7684\u5143\u7d20\u8fdb\u884c\u5f52\u5e76\u6392\u5e8f"),Object(a.b)("li",{parentName:"ul"},"\u5f52\u5e76\u6392\u5e8f\u662f\u6807\u51c6\u5206\u6cbb\u6cd5\uff0c\u9700\u8981\u8bbe\u8ba1\u9012\u5f52\uff0c\u8fd9\u662f\u8fd9\u6837\u4e00\u4e2a\u65b9\u6cd5\uff0c\u65b9\u4fbf\u9012\u5f52\u7684\u5b9e\u73b0"),Object(a.b)("li",{parentName:"ul"},"\u9012\u5f52\u673a\uff1a\u5f53 ",Object(a.b)("inlineCode",{parentName:"li"},"end - begin < 2")," \u8868\u793a\u5e8f\u5217\u5df2\u7ecf\u5207\u5230\u53ea\u5269\u4e0b ",Object(a.b)("inlineCode",{parentName:"li"},"1")," \u4e2a\u5143\u7d20\u4e86\uff0c",Object(a.b)("strong",{parentName:"li"},"\u505c\u6b62\u5207\u5272\uff0c\u5f00\u59cb\u5408\u5e76")))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u5206\u5272"',title:'"\u5206\u5272"'}),"// \u5bf9 [begin, end) \u8303\u56f4\u5185\u7684\u5143\u7d20\u8fdb\u884c\u5f52\u5e76\u6392\u5e8f\uff0c\u5de6\u95ed\u53f3\u5f00\nprivate void innerSort(int beginIndex, int endIndex) {\n    if (endIndex - beginIndex < 2) return; // \u9012\u5f52\u673a\n    // \u9012\u5f52\u4e8c\u5206\n    int middleIndex = (beginIndex + endIndex) >> 1; // \u9664\u4ee5 2\n    innerSort(0, middleIndex); // \u5de6\n    innerSort(middleIndex, endIndex); // \u53f3\n    // \u5408\u5e76\n    merge(beginIndex, middleIndex, endIndex);\n}\n")),Object(a.b)("h2",{id:"mergeint-begin-int-middle-int-end-\u65b9\u6cd5"},"merge(int begin, int middle, int end) \u65b9\u6cd5"),Object(a.b)("img",{src:t(857).default,style:{zoom:"40%",boxShadow:"0px 0px 0px #333333",borderRadius:"10px"}})," ",Object(a.b)("br",null),Object(a.b)("blockquote",null,Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"\u91c7\u7528\u53cc\u6307\u9488\u6cd5"),Object(a.b)("li",{parentName:"ul"},"\u6bcf\u6b21\u6bd4\u8f83\u4e24\u4e2a\u6307\u9488\u6307\u5411\u5143\u7d20\u7684\u5927\u5c0f",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u5c06 ",Object(a.b)("inlineCode",{parentName:"li"},"\u8f83\u5c0f"),"\uff08\u4ece\u5c0f\u5230\u5927\u6392\u5e8f\uff09\u5143\u7d20\u653e\u5230\u6570\u7ec4\u7684\u7b2c\u4e00\u4e2a\u4f4d\u7f6e"),Object(a.b)("li",{parentName:"ul"},"\u5c06 ",Object(a.b)("inlineCode",{parentName:"li"},"\u8f83\u5c0f\u5143\u7d20\u5bf9\u5e94\u7684 \u6307\u9488"),"  \u53f3\u79fb"),Object(a.b)("li",{parentName:"ul"},"\u76f4\u5230\u4e24\u4e2a\u6307\u9488\u90fd\u8d70\u5230\u5934"))))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u7ec6\u8282"),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u9700\u8981 merge \u7684 2 \u4e2a\u5b50\u5e8f\u5217\u5728\u540c\u4e00\u6570\u7ec4\u4e2d\uff0c\u5e76\u4e14\u5f7c\u6b64\u76f8\u90bb")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"\u5408\u5e76\u4e4b\u540e\u7684\u6709\u5e8f\u5e8f\u5217\uff0c\u4f9d\u7136\u5360\u636e\u539f\u5148\u672a\u5408\u5e76\u65f6\u7684\u5185\u5b58\u7a7a\u95f4")),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u4e3a\u4e86\u66f4\u597d\u7684\u5b8c\u6210\u5408\u5e76\uff0c\u9700\u8981\u5c06\u5176\u4e2d\u4e00\u7ec4\u5e8f\u5217\u5148",Object(a.b)("strong",{parentName:"li"},"\u5907\u4efd"),"\uff0c\u5c31\u79f0\u4e3a ",Object(a.b)("inlineCode",{parentName:"li"},"leftArray"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"middle - begin"),"\uff0c\u6570\u503c\u4e0a\u7b49\u4e8e ",Object(a.b)("inlineCode",{parentName:"li"},"array.lengt >> 1")))),Object(a.b)("li",{parentName:"ul"},"\u63a8\u8350\u5c06\u5de6\u8fb9\u7684\u5907\u4efd\uff0c\u5373 ",Object(a.b)("inlineCode",{parentName:"li"},"[begin, middle)"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u56e0\u4e3a\u6784\u5efa\u65b0\u7684\u5927\u7684\u6709\u5e8f\u5e8f\u5217\uff0c\u603b\u662f\u4ece\u5de6\u5f80\u53f3\u7684\uff0c\u6240\u4ee5\u5de6\u4fa7\u7684\u5143\u7d20\u4f1a\u5148\u88ab\u53d6\u4ee3"))),Object(a.b)("li",{parentName:"ul"},"\u5206\u522b\u7ed9\u5b9a\u5de6\u53f3\u5b50\u5e8f\u5217\u7684\u6307\u9488\u548c\u7ed3\u5c3e\u4f4d\u7f6e",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"li"),"\u2014\u2014\u5de6\u4fa7\u6307\u9488 \u521d\u59cb\u503c ",Object(a.b)("inlineCode",{parentName:"li"},"0")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"le"),"\u2014\u2014\u5de6\u4fa7\u7ed3\u5c3e\u4f4d\u7f6e\uff0c\u6570\u503c\u4e0a\u7b49\u4e8e\u5de6\u4fa7\u5b50\u5e8f\u5217\u7684\u957f\u5ea6\uff0c\u6839\u636e\u5de6\u95ed\u53f3\u5f00\u539f\u5219\uff0c\u7b49\u4e8e ",Object(a.b)("inlineCode",{parentName:"li"},"mid - begin")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ri"),"\u2014\u2014\u53f3\u4fa7\u6307\u9488\uff0c\u521d\u59cb\u503c\u7b49\u4e8e ",Object(a.b)("inlineCode",{parentName:"li"},"middle")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"re"),"\u2014\u2014\u53f3\u4fa7\u7ed3\u5c3e\u6307\u9488\uff0c\u521d\u59cb\u503c ",Object(a.b)("inlineCode",{parentName:"li"},"end")))),Object(a.b)("li",{parentName:"ul"},"\u7ed9\u51fa\u4e0b\u4e00\u4e2a\u5373\u5c06\u88ab\u8986\u76d6\u7684\u5143\u7d20\u5bf9\u5e94\u7684\u7d22\u5f15 ",Object(a.b)("inlineCode",{parentName:"li"},"ai")," \uff0c\u521d\u59cb\u503c\u4e3a ",Object(a.b)("inlineCode",{parentName:"li"},"begin")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"\u6b65\u9aa4")),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u6bd4\u8f83 ",Object(a.b)("inlineCode",{parentName:"li"},"li"),"\u3001",Object(a.b)("inlineCode",{parentName:"li"},"ri")," \u6307\u5411\u7684\u5143\u7d20\u7684\u503c",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"li < ri")," \u2014\u2014 ",Object(a.b)("inlineCode",{parentName:"li"},"li"),"\u53f3\u79fb\uff0c",Object(a.b)("inlineCode",{parentName:"li"},"ai"),"\u53f3\u79fb\uff0c",Object(a.b)("inlineCode",{parentName:"li"},"ri"),"\u4e0d\u52a8"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"li > ri")," \u2014\u2014 ",Object(a.b)("inlineCode",{parentName:"li"},"ri")," \u53f3\u79fb\uff0c",Object(a.b)("inlineCode",{parentName:"li"},"ai"),"\u53f3\u79fb\uff0c",Object(a.b)("inlineCode",{parentName:"li"},"li")," \u4e0d\u52a8"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"li")," \u6216 ",Object(a.b)("inlineCode",{parentName:"li"},"ri")," \u4efb\u610f\u4e00\u4e2a\u5148\u8fbe\u5230\u4e86 ",Object(a.b)("inlineCode",{parentName:"li"},"le")," \u6216 ",Object(a.b)("inlineCode",{parentName:"li"},"re"),"\uff0c\u5230\u5934\u4e86\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u628a ",Object(a.b)("inlineCode",{parentName:"li"},"\u5bf9\u9762\u5269\u4e0b\u7684")," \u5143\u7d20\u76f4\u63a5\u65e0\u8111\u62ff\u6765\u8986\u76d6\u4e86",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"\u5de6\u8fb9\u63d0\u524d\u7ed3\u675f\uff1a"),"\u90a3\u4e48\u76f4\u63a5\u5b8c\u4e8b\uff0c\u56e0\u4e3a\u53f3\u4fa7\u5269\u4e0b\u7684\u5143\u7d20\u672c\u6765\u5c31\u5728\u6700\u7ec8\u5e8f\u5217\u7684\u5185\u5b58\u4f4d\u7f6e\u4e2d"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"\u53f3\u8fb9\u63d0\u524d\u7ed3\u675f"),"\uff1a\u628a\u5de6\u8fb9\u5269\u4e0b\u7684\u5143\u7d20\u65e0\u8111\u642c\u8fd0"))))))),Object(a.b)("img",{src:t(858).default,style:{zoom:"60%",boxShadow:"0px 0px 0px #333333",borderRadius:"10px"}})," ",Object(a.b)("br",null),Object(a.b)("img",{src:t(859).default,style:{zoom:"100%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(a.b)("br",null),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public class MergeSort<E extends Comparable<E>> extends Sort<E> {\n    // \u5de6\u4fa7\u6570\u7ec4\u7684\u5907\u4efd\n    private E[] leftArray;\n\n    public MergeSort(E[] array) {\n        // \u63d0\u524d\u628a\u5907\u4efd\u5de6\u4fa7\u6570\u7ec4\u5728\u5806\u4e2d\u521b\u5efa\u51fa\u6765\n        this.leftArray = (E[]) new Comparable[array.length >> 1];\n        this.array = array;\n    }\n\n    @Override\n    public void sort() {\n        // \u5bf9\u6574\u4e2a\u5e8f\u5217\u8fdb\u884c\u5f52\u5e76\u6392\u5e8f\n        innerSort(0, array.length);\n    }\n\n    // \u5bf9 [begin, end) \u8303\u56f4\u5185\u7684\u5143\u7d20\u8fdb\u884c\u5f52\u5e76\u6392\u5e8f\uff0c\u5de6\u95ed\u53f3\u5f00\n    private void innerSort(int beginIndex, int endIndex) {\n        if (endIndex - beginIndex < 2) return; // \u9012\u5f52\u673a\n        // \u9012\u5f52\u4e8c\u5206\n        int middleIndex = (beginIndex + endIndex) >> 1; // \u9664\u4ee5 2\n        innerSort(0, middleIndex); // \u5de6\n        innerSort(middleIndex, endIndex); // \u53f3\n        // \u5408\u5e76\n        merge(beginIndex, middleIndex, endIndex);\n    }\n\n    // \u5408\u5e76 \u5c06 [begin,middle) \u548c [middle, end) \u5408\u5e76\n    private void merge(int begin, int middle, int end) {\n        int li = 0;\n        int le = middle - begin;\n        int ri = middle;\n        int re = end;\n        int ai = begin;\n        // \u628a\u5de6\u4fa7\u6570\u7ec4\u5907\u4efd\u5230\u4e34\u65f6\u6570\u7ec4\u4e2d\n        for (int i = li; i < le; i++) {\n            this.leftArray[i] = array[begin + i]; // \u6ce8\u610f\u4e0b\u6807\u5e94\u8be5\u662f begin+i\n        }\n\n        while (li < le) { // \u53ea\u8981\u5de6\u8fb9\u8fd8\u6ca1\u5408\u5e76\u5b8c \uff08\u5982\u679c\u5de6\u8fb9\u5408\u5e76\u5b8c\u4e86\uff0c\u53f3\u8fb9\u76f4\u63a5\u4e0d\u7528\u5904\u7406\uff09\n            // li ri \u6bd4\u5927\u5c0f\n            if (ri < re && cmp(array[ri], leftArray[li]) < 0)  // ri\u4e0d\u80fd\u8d8a\u754c && \u53f3\u6bd4\u5de6\u5c0f\n                array[ai++] = array[ri++];\n\n                // \u628a\u5de6\u5143\u7d20\u642c\u8fd0\u8d70\n                /*array[ai] = leftArray[li];\n                // li ai \u90fd\u52a01\n                li++;\n                ai++;*/\n            else  // \u53f3 >= \u5de6\n                array[ai++] = leftArray[li++];\n\n            // \u628a\u53f3\u8fb9\u5143\u7d20\u4f34\u594f\n                /*array[ai] = array[ri];\n                ri++;\n                ai++;*/\n        }\n    }\n\n    public static void main(String[] args) {\n        Integer[] array = {1, 3, 5, 7, 2, 4};\n        MergeSort<Integer> mergeSort = new MergeSort<>(array);\n        mergeSort.sort();\n        mergeSort.show();\n    }\n}\n")),Object(a.b)("br",null),Object(a.b)("h1",{id:"\u65f6\u95f4\u590d\u6742\u5ea6"},"\u65f6\u95f4\u590d\u6742\u5ea6"),Object(a.b)("p",null,"O(nlogn)"))}d.isMDXComponent=!0},554:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return O}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=i.a.createContext({}),d=function(e){var n=i.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},p=function(e){var n=d(e.components);return i.a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=d(t),u=r,O=p["".concat(l,".").concat(u)]||p[u]||m[u]||a;return t?i.a.createElement(O,b(b({ref:n},o),{},{components:t})):i.a.createElement(O,b({ref:n},o))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=u;var b={};for(var c in n)hasOwnProperty.call(n,c)&&(b[c]=n[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,l[1]=b;for(var o=2;o<a;o++)l[o]=t[o];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},857:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/1-85a727861d0b764606b35ca1b159e254.png"},858:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/2-19e9834459795fe1cc78af940aaba75a.png"},859:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/3-b7bda3d050c32bb9250667352a49f74b.png"}}]);