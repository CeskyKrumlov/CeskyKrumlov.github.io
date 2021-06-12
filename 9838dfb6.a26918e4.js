(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{1023:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/14-a309b383868b08c15a2a77985bc08ce9.png"},364:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return b}));var r=t(2),a=t(6),i=(t(0),t(564)),o={id:"5.heapSort",title:"\u5806\u6392\u5e8f",hide_title:!0},c={unversionedId:"sf/\u6392\u5e8f/5.heapSort",id:"sf/\u6392\u5e8f/5.heapSort",isDocsHomePage:!1,title:"\u5806\u6392\u5e8f",description:"\u5806\u6392\u5e8f",source:"@site/datastructure/sf/\u6392\u5e8f/\u5806\u6392\u5e8f.md",slug:"/sf/\u6392\u5e8f/5.heapSort",permalink:"/datastructure/sf/\u6392\u5e8f/5.heapSort",version:"current",sidebar:"docs2",previous:{title:"\u63d2\u5165\u6392\u5e8f",permalink:"/datastructure/sf/\u6392\u5e8f/1.insertionSort"},next:{title:"\u5f52\u5e76\u6392\u5e8f",permalink:"/datastructure/sf/\u6392\u5e8f/2.mergeSort"}},l=[{value:"\u5806\u6392\u5e8f",id:"\u5806\u6392\u5e8f",children:[]}],p={rightToc:l};function b(e){var n=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,o,{components:n,mdxType:"MDXLayout"}),Object(i.b)("br",null),Object(i.b)("h1",{id:"\u5806\u6392\u5e8f"},"\u5806\u6392\u5e8f"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5bf9\u6392\u5e8f\u53ef\u4ee5\u8ba4\u4e3a\u662f\u5bf9\u9009\u62e9\u6392\u5e8f\u7684\u4f18\u5316")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u6267\u884c\u6d41\u7a0b")),Object(i.b)("ol",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ol"},"\u5bf9\u5e8f\u5217\u8fdb\u884c\u539f\u5730\u5efa\u5806 \uff08Heapify\uff09"),Object(i.b)("li",{parentName:"ol"},"\u91cd\u590d\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff0c\u76f4\u5230\u5806\u7684\u5143\u7d20\u6570\u91cf ",Object(i.b)("inlineCode",{parentName:"li"},"size")," \u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"1"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"\u4ea4\u6362\u5806\u9876\u5143\u7d20\u548c\u5c3e\u5143\u7d20 \uff08\u5373\u4ea4\u6362\u5f53\u524d\u5806\u4e2d\u7684\u6700\u5927\u503c\u548c\u6700\u5c0f\u503c\uff09"),Object(i.b)("li",{parentName:"ol"},"\u5806\u7684\u5143\u7d20\u6570\u91cf ",Object(i.b)("inlineCode",{parentName:"li"},"-1"),"\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"size -= 1")),Object(i.b)("li",{parentName:"ol"},"\u5bf9 ",Object(i.b)("inlineCode",{parentName:"li"},"0")," \u4f4d\u7f6e\u8fdb\u884c ",Object(i.b)("inlineCode",{parentName:"li"},"1")," \u6b21 siftDown \u64cd\u4f5c\uff0c\u8ba9\u5b83\u6392\u5217\u5230\u5806\u4e2d\u7684\u5408\u9002\u4f4d\u7f6e"))))),Object(i.b)("img",{src:t(1023).default,style:{zoom:"80%",boxShadow:"0px 0px 0px #333333",borderRadius:"19px"}})," ",Object(i.b)("br",null),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u590d\u6742\u5ea6\u5206\u6790"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u751f\u6210 n \u6b21\u5806\uff0cO(n)"),Object(i.b)("li",{parentName:"ul"},"\u5bf9\u6bcf\u4e00\u4e2a\u5806",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4ea4\u6362\u5143\u7d20 O(1)"),Object(i.b)("li",{parentName:"ul"},"size - 1 \uff0c O(1)"),Object(i.b)("li",{parentName:"ul"},"siftDown\uff0c\u9700\u8981\u8fdb\u884c\u4e8c\u5206\u641c\u7d22\uff0cO(logn)"))),Object(i.b)("li",{parentName:"ul"},"\u6700\u7ec8 ",Object(i.b)("inlineCode",{parentName:"li"},"O(nlogn)")," "))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'/**\n * \u5bf9\u6392\u5e8f\n */\npublic class HeapSort<E extends Comparable<E>> extends Sort<E> {\n    private int heapSize;\n\n    public HeapSort(E[] array) {\n        this.array = array;\n    }\n\n    @Override\n    public void sort() {\n        // \u539f\u5730\u5efa\u5806\n        heapSize = array.length;\n        for (int i = (heapSize >> 1) - 1; i >= 0; i--) {\n            siftDown(i);\n        }\n\n        while (heapSize > 1) {\n            swap(0, heapSize - 1); // \u4ea4\u6362\u5934\u5c3e\n            heapSize--;\n            // \u5bf9 0 \u4f4d\u7f6e\u8fdb\u884c siftDown()\n            siftDown(0); // \u6392\u5217\uff0c\u4f4d\u7f6e\u5806\u7684\u6027\u8d28\n        }\n    }\n\n    private void siftDown(int index) {\n        E element = this.array[index];\n\n        int half = heapSize >> 1;\n        while (index < half) { // index \u5fc5\u987b\u662f\u975e\u53f6\u5b50\u8282\u70b9\n            // \u9ed8\u8ba4\u662f\u5de6\u8fb9\u6839\u7236\u8282\u70b9\u6bd4\n            int childIndex = (index << 1) + 1;\n            E child = this.array[childIndex];\n\n            int rightIndex = childIndex + 1;\n            // \u53f3\u5b50\u8282\u70b9\u6bd4\u5de6\u5b50\u8282\u70b9\u5927\n            if (rightIndex < heapSize && cmp(this.array[rightIndex], child) > 0)\n                child = this.array[childIndex = rightIndex];\n\n            // \u5927\u4e8e\u7b49\u4e8e\u5b50\u8282\u70b9\n            if (cmp(element, child) >= 0) break;\n\n            this.array[index] = child;\n            index = childIndex;\n        }\n\n        this.array[index] = element;\n    }\n\n    public static void main(String[] args) {\n        Integer[] array = {4, 5, 2, 3, 1};\n        HeapSort<Integer> integerHeapSort = new HeapSort<>(array);\n        integerHeapSort.sort();\n        for (Integer integer : array) {\n            System.out.println(integer + " ");\n        }\n    }\n}\n')))}b.isMDXComponent=!0},564:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),b=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=b(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(t),d=r,m=u["".concat(o,".").concat(d)]||u[d]||s[d]||i;return t?a.a.createElement(m,c(c({ref:n},p),{},{components:t})):a.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);