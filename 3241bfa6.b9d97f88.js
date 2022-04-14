(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),b=(n(0),n(574)),c={id:"1.insertionSort",title:"\u63d2\u5165\u6392\u5e8f",hide_title:!0},i={unversionedId:"sf/\u6392\u5e8f/1.insertionSort",id:"sf/\u6392\u5e8f/1.insertionSort",isDocsHomePage:!1,title:"\u63d2\u5165\u6392\u5e8f",description:"\u5341\u5927\u6392\u5e8f\u7b97\u6cd5",source:"@site/datastructure/sf/\u6392\u5e8f/\u63d2\u5165\u6392\u5e8f.md",slug:"/sf/\u6392\u5e8f/1.insertionSort",permalink:"/datastructure/sf/\u6392\u5e8f/1.insertionSort",version:"current",sidebar:"docs2",previous:{title:"\u53cc\u6307\u9488\u7b97\u6cd5",permalink:"/datastructure/sf/\u53cc\u6307\u9488/1.duoPoint"},next:{title:"\u5806\u6392\u5e8f",permalink:"/datastructure/sf/\u6392\u5e8f/5.heapSort"}},l=[{value:"\u5341\u5927\u6392\u5e8f\u7b97\u6cd5",id:"\u5341\u5927\u6392\u5e8f\u7b97\u6cd5",children:[]},{value:"\u5e38\u89c1\u9012\u63a8\u5f0f\u590d\u6742\u5ea6",id:"\u5e38\u89c1\u9012\u63a8\u5f0f\u590d\u6742\u5ea6",children:[]},{value:"\u63d2\u5165\u6392\u5e8f",id:"\u63d2\u5165\u6392\u5e8f",children:[]},{value:"Sort \u62bd\u8c61\u7c7b",id:"sort-\u62bd\u8c61\u7c7b",children:[{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",children:[]}]},{value:"\u9006\u5e8f\u5bf9\u2014\u2014 Inversion",id:"\u9006\u5e8f\u5bf9-inversion",children:[]},{value:"\u4f18\u5316",id:"\u4f18\u5316",children:[]},{value:"\u4f18\u5316\u2014\u2014\u4f7f\u7528\u4e8c\u5206\u641c\u7d22",id:"\u4f18\u5316\u4f7f\u7528\u4e8c\u5206\u641c\u7d22",children:[]},{value:"\u6392\u5e8f\u7684\u5927\u6982\u7387\u5957\u8def",id:"\u6392\u5e8f\u7684\u5927\u6982\u7387\u5957\u8def",children:[]},{value:"\u9009\u62e9\u6392\u5e8f",id:"\u9009\u62e9\u6392\u5e8f",children:[]}],o={rightToc:l};function p(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},o,c,{components:t,mdxType:"MDXLayout"}),Object(b.b)("br",null),Object(b.b)("h1",{id:"\u5341\u5927\u6392\u5e8f\u7b97\u6cd5"},"\u5341\u5927\u6392\u5e8f\u7b97\u6cd5"),Object(b.b)("br",null),Object(b.b)("img",{src:n(746).default,style:{zoom:"100%",boxShadow:"5px 7px 28px #333333",borderRadius:"19px"}})," ",Object(b.b)("br",null),Object(b.b)("h1",{id:"\u5e38\u89c1\u9012\u63a8\u5f0f\u590d\u6742\u5ea6"},"\u5e38\u89c1\u9012\u63a8\u5f0f\u590d\u6742\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u9012\u63a8\u5f0f"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u590d\u6742\u5ea6"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"T(n) = T(n/2) + O(1)"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"O(logn)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"T(n) = T(n-1) + O(1)"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"O(n)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"T(n) = T(n/2) + O(n)"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"O(n)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"T(n) = 2 * T(n/2) + O(1)"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"O(n)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"T(n) = 2 * T(n/2) + O(n)"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"O(nlogn)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"T(n) = T(n-1) + O(n)"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"O(n^2)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"T(n) = 2 * T(n-1) + O(1)"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"O(2^n)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"T(n) = 2 * T(n-1) + O(n)"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"O(2^n)")))),Object(b.b)("h1",{id:"\u63d2\u5165\u6392\u5e8f"},"\u63d2\u5165\u6392\u5e8f"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"\u6267\u884c\u6d41\u7a0b")),Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},"\u5c06\u6574\u4e2a\u5f85\u6392\u5e8f\u7684\u5e8f\u5217\u5206\u4e3a\u4e24\u4e2a\u90e8\u5206",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5934\u90e8\uff1a\u5df2\u7ecf\u6392\u597d\u5e8f\u7684\u5b50\u5e8f\u5217"),Object(b.b)("li",{parentName:"ul"},"\u5c3e\u90e8\uff1a\u987a\u5e8f\u4e71\u7740\u7684\u5b50\u5e8f\u5217"))),Object(b.b)("li",{parentName:"ul"},"\u4ece\u5934\u626b\u63cf\u6bcf\u4e00\u4e2a\u5143\u7d20",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u6bcf\u5f53\u626b\u63cf\u5230\u4e00\u4e2a\u5143\u7d20\uff0c",Object(b.b)("strong",{parentName:"li"},"\u5c31\u5c06\u5b83\u63d2\u5165\u5230\u5934\u90e8\u5408\u9002\u7684\u4f4d\u7f6e\uff0c\u4f7f\u5f97\u5934\u90e8\u6570\u636e\u4f9d\u7136\u6709\u5e8f")))))),Object(b.b)("br",null),Object(b.b)("h1",{id:"sort-\u62bd\u8c61\u7c7b"},"Sort \u62bd\u8c61\u7c7b"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u5b9a\u4e49\u4e00\u4e2a\u6392\u5e8f\u7684\u62bd\u8c61\u7c7b\uff0c\u91cc\u9762\u5b9a\u4e49\u4e00\u4e9b\u6392\u5e8f\u7684\u901a\u7528\u90e8\u5206"),Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"E[] array")," \u81ea\u8eab\u638c\u63e1\u7684\u6570\u7ec4\uff0c\u5bf9\u5b83\u8fdb\u884c\u6392\u5e8f"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"int cmp(int index1, int index2)")," \u6bd4\u8f83\u65b9\u6cd5\uff0c\u4f20\u5165\u4e24\u4e2a\u5143\u7d20\u7684\u4e0b\u6807\uff0c\u8fdb\u884c\u6bd4\u8f83\uff0c\u5c0f\u4e8e\u8fd4\u56de\u8d1f\u6570\uff0c\u7b49\u4e8e\u8fd4\u56de0\uff0c\u5927\u4e8e\u8fd4\u56de1"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"int cmp(E element1, E element2)")," \u6bd4\u8f83\u65b9\u6cd5\uff0c\u4f20\u5165\u4e24\u4e2a\u5143\u7d20\uff0c\u8fdb\u884c\u6bd4\u8f83"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"void swap(int index1, int index2)")," \u4ea4\u6362\u4e24\u4e2a\u4e0b\u6807\u5bf9\u5e94\u7684\u5143\u7d20"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"abstract sort()")," \u6392\u5e8f\u65b9\u6cd5\uff0c\u62bd\u8c61\uff0c\u5ef6\u8fdf\u5230\u5b50\u7c7b\u5b9e\u73b0\uff0c\u53d6\u51b3\u4e8e\u4e0d\u540c\u7684\u6392\u5e8f\u65b9\u6cd5"))),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u6392\u5e8f\u62bd\u8c61\u7c7b"',title:'"\u6392\u5e8f\u62bd\u8c61\u7c7b"'}),'public abstract class Sort<E extends Comparable<E>> {\n    E[] array;\n\n    public Sort() {\n    }\n\n    public Sort(E[] array) {\n        this.array = array;\n    }\n\n    public abstract void sort();\n\n    int cmp(int index1, int index2) {\n        return this.array[index1].compareTo(this.array[index2]);\n    }\n\n    int cmp(E element1, E element2) {\n        return element1.compareTo(element2);\n    }\n\n    void swap(int index1, int index2) {\n        E temp = this.array[index1];\n        this.array[index1] = this.array[index2];\n        this.array[index2] = temp;\n    }\n\n    public void show() {\n        for (E e : this.array) {\n            System.out.print(e + " ");\n        }\n    }\n}\n')),Object(b.b)("br",null),Object(b.b)("h2",{id:"\u5b9e\u73b0"},"\u5b9e\u73b0"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u63d2\u5165\u6392\u5e8f"',title:'"\u63d2\u5165\u6392\u5e8f"'}),"public class InsertionSort<E extends Comparable<E>> extends Sort<E> {\n    public InsertionSort(E[] array) {\n        this.array = array;\n    }\n\n    @Override\n    public void sort() {\n        for (int begin = 1; begin < this.array.length; begin++) { // \u4ece\u5c3e\u90e8\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u5f00\u59cb\uff0c\u63d2\u5165\u6392\u5e8f\n            int current = begin;\n            while (current > 0 && cmp(current, current - 1) < 0) { // \u5c3e\u90e8\u7b2c\u4e00\u4e2a\u548c\u5934\u90e8\u6700\u540e\u4e00\u4e2a\u6bd4\uff0c\u5982\u679c\u5c3e\u90e8\u7b2c\u4e00\u4e2a\u6bd4\u5934\u90e8\u6700\u540e\u4e00\u4e2a\u5c0f\uff0c\u5c31\u4ea4\u6362\n                swap(current, current - 1);\n                // \u4e00\u65e6\u53d1\u751f\u4ea4\u6362\uff0c current\u8981\u5de6\u79fb1\u4f4d\n                current--; // \u9012\u51cf\u8003\u8651\u4e0b\u6807\u8d8a\u754c\uff0c\u53cd\u6620\u5728 while\u8bed\u53e5\u7684\u524d\u534a\u90e8\u5206\n            }\n        }\n    }\n\n    public static void main(String[] args) {\n        Integer[] array = {1, 3, 5, 2, 4};\n        InsertionSort<Integer> integerInsertionSort = new InsertionSort<>(array);\n        integerInsertionSort.sort();\n        integerInsertionSort.show();\n    }\n}\n")),Object(b.b)("br",null),Object(b.b)("h1",{id:"\u9006\u5e8f\u5bf9-inversion"},"\u9006\u5e8f\u5bf9\u2014\u2014 Inversion"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u4f8b\u5b50\uff1a",Object(b.b)("inlineCode",{parentName:"p"},"{2,3,8,6,1}")," \u9006\u5e8f\u5bf9\uff1a<2,1> , <3,1>, <8,6>, <8,1>, <6,1>"),Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},"\u63d2\u5165\u6392\u5e8f\u7684\u65f6\u95f4\u590d\u6742\u5ea6\uff0c\u4e0e\u9006\u5e8f\u5bf9\u7684\u6570\u76ee\u6210\u6b63\u6bd4",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u9006\u5e8f\u5bf9\u8d8a\u591a\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u8d8a\u5927"),Object(b.b)("li",{parentName:"ul"},"\u9006\u5e8f\u5bf9\u8fbe\u5230\u6700\u5927\uff0c\u6700\u574f\u65f6\u95f4\u590d\u6742\u5ea6 O(n^2)"),Object(b.b)("li",{parentName:"ul"},"\u7406\u60f3\u65f6\u95f4\u590d\u6742\u5ea6 O(n)"))),Object(b.b)("li",{parentName:"ul"},"\u9006\u5e8f\u5bf9\u5f88\u5c11\u65f6\uff0c\u6027\u80fd\u975e\u5e38\u597d\uff0c\u7406\u60f3\u60c5\u51b5\u4e0b\u751a\u81f3\u53ef\u4ee5\u540a\u6253\u5feb\u901f\u6392\u5e8f"),Object(b.b)("li",{parentName:"ul"},"\u6570\u91cf\u4e0d\u662f\u5f88\u5927\u662f\u6548\u7387\u4e5f\u4e0d\u9519"))),Object(b.b)("br",null),Object(b.b)("h1",{id:"\u4f18\u5316"},"\u4f18\u5316"),Object(b.b)("div",{className:"admonition admonition-info alert alert--info"},Object(b.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u601d\u8def")),Object(b.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"\u5c06 ",Object(b.b)("strong",{parentName:"p"},"\u4ea4\u6362")," \u6539\u53d8\u4e3a ",Object(b.b)("strong",{parentName:"p"},"\u632a\u52a8")))),Object(b.b)("blockquote",null,Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},"\u73b0\u5c06\u5f85\u63d2\u5165\u7684\u5143\u7d20\u5907\u4efd"),Object(b.b)("li",{parentName:"ul"},"\u5934\u90e8\u6709\u5e8f\u5e8f\u5217\u4e2d\uff0c\u6bd4\u5f85\u63d2\u5165\u5143\u7d20\u5927\u7684\uff0c\u90fd\u671d\u5c3e\u90e8\u79fb\u52a8 1 \u4f4d"),Object(b.b)("li",{parentName:"ul"},"\u5c06\u5f85\u63d2\u5165\u5143\u7d20\u653e\u5165\u6700\u7ec8\u5408\u9002\u7684\u4f4d\u7f6e"))),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u57fa\u4e8e\u632a\u52a8\u7684\u63d2\u5165\u6392\u5e8f"',title:'"\u57fa\u4e8e\u632a\u52a8\u7684\u63d2\u5165\u6392\u5e8f"'}),"@Override // \u4f18\u5316\u63d2\u5165\u6392\u5e8f\npublic void sort() {\n    for (int begin = 1; begin < array.length; begin++) {\n        // \u5907\u4efd\n        int current = begin;\n        E temp = array[current];\n        // \u76f4\u63a5\u7528\u5143\u7d20\u8fdb\u884c\u6bd4\u8f83\n        while (current > 0 && cmp(temp, array[current - 1]) < 0) {\n            array[current] = array[current - 1]; // \u632a\u52a8\n            current--;\n        }\n        array[current] = temp;\n    }\n}\n")),Object(b.b)("br",null),Object(b.b)("h1",{id:"\u4f18\u5316\u4f7f\u7528\u4e8c\u5206\u641c\u7d22"},"\u4f18\u5316\u2014\u2014\u4f7f\u7528\u4e8c\u5206\u641c\u7d22"),Object(b.b)("br",null),Object(b.b)("h1",{id:"\u6392\u5e8f\u7684\u5927\u6982\u7387\u5957\u8def"},"\u6392\u5e8f\u7684\u5927\u6982\u7387\u5957\u8def"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u53cc\u6307\u9488\u53cc\u5411\u626b\u63cf"),Object(b.b)("li",{parentName:"ul"},"\u4e09\u6307\u9488\uff0c\u590d\u5236\u6570\u7ec4\u626b\u63cf")),Object(b.b)("br",null),Object(b.b)("h1",{id:"\u9009\u62e9\u6392\u5e8f"},"\u9009\u62e9\u6392\u5e8f"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u6bcf\u4e00\u8f6e\uff0c\u9009\u51fa\u5269\u4f59\u5143\u7d20\u4e2d\u7684 ",Object(b.b)("inlineCode",{parentName:"li"},"\u6700\u5927\u503c")," \u4e0e\u5f53\u524d\u672b\u5c3e\u5143\u7d20\u8fdb\u884c\u4ea4\u6362")),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public void sort() {\n    for (int end = arr.length - 1; end > 0; end--) {\n        int maxIndex = 0;\n        for (int begin = 1; begin <= end; begin++)\n            maxIndex = arr[maxIndex] >= arr[begin] ? maxIndex : begin;\n\n        swap(maxIndex, end);\n    }\n}\n")))}p.isMDXComponent=!0},574:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},O=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),O=p(n),m=r,d=O["".concat(c,".").concat(m)]||O[m]||u[m]||b;return n?a.a.createElement(d,i(i({ref:t},o),{},{components:n})):a.a.createElement(d,i({ref:t},o))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=n.length,c=new Array(b);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var o=2;o<b;o++)c[o]=n[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},746:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/6-1d079cf62f5cffc755c27b0bb3feb894.png"}}]);