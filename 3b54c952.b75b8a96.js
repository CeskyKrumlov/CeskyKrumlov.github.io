(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{174:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(2),i=t(6),r=(t(0),t(570)),b={id:"3.fastSort",title:"\u5feb\u901f\u6392\u5e8f",hide_title:!0},l={unversionedId:"sf/\u6392\u5e8f/3.fastSort",id:"sf/\u6392\u5e8f/3.fastSort",isDocsHomePage:!1,title:"\u5feb\u901f\u6392\u5e8f",description:"\u5feb\u901f\u6392\u5e8f",source:"@site/datastructure/sf/\u6392\u5e8f/\u5feb\u901f\u6392\u5e8f.md",slug:"/sf/\u6392\u5e8f/3.fastSort",permalink:"/datastructure/sf/\u6392\u5e8f/3.fastSort",version:"current",sidebar:"docs2",previous:{title:"\u5f52\u5e76\u6392\u5e8f",permalink:"/datastructure/sf/\u6392\u5e8f/2.mergeSort"},next:{title:"\u5e0c\u5c14\u6392\u5e8f",permalink:"/datastructure/sf/\u6392\u5e8f/4.shellSort"}},c=[{value:"\u5feb\u901f\u6392\u5e8f",id:"\u5feb\u901f\u6392\u5e8f",children:[{value:"\u6267\u884c\u6d41\u7a0b",id:"\u6267\u884c\u6d41\u7a0b",children:[]},{value:"\u8f74\u70b9\u6784\u9020",id:"\u8f74\u70b9\u6784\u9020",children:[]}]},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",children:[]},{value:"\u590d\u6742\u5ea6\u5206\u6790",id:"\u590d\u6742\u5ea6\u5206\u6790",children:[{value:"\u8f74\u70b9\u5de6\u53f3\u5143\u7d20\u5747\u5300",id:"\u8f74\u70b9\u5de6\u53f3\u5143\u7d20\u5747\u5300",children:[]},{value:"\u8f74\u70b9\u5de6\u53f3\u6781\u4e0d\u5747\u5300",id:"\u8f74\u70b9\u5de6\u53f3\u6781\u4e0d\u5747\u5300",children:[{value:"\u907f\u514d\u6700\u574f\u60c5\u51b5",id:"\u907f\u514d\u6700\u574f\u60c5\u51b5",children:[]}]},{value:"\u7a7a\u95f4\u590d\u6742\u5ea6",id:"\u7a7a\u95f4\u590d\u6742\u5ea6",children:[]}]}],o={rightToc:c};function p(e){var n=e.components,b=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,b,{components:n,mdxType:"MDXLayout"}),Object(r.b)("br",null),Object(r.b)("h1",{id:"\u5feb\u901f\u6392\u5e8f"},"\u5feb\u901f\u6392\u5e8f"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"1960 \u5e74\u7531\u67e5\u5c14\u65af\xb7\u5b89\u4e1c\u5c3c\xb7\u7406\u67e5\u5fb7\xb7\u970d\u5c14 Charles Antony Richard Hoare\uff0c\u6635\u79f0 \u4e1c\u5c3c\u970d\u5c14 Tony Hoare")),Object(r.b)("h2",{id:"\u6267\u884c\u6d41\u7a0b"},"\u6267\u884c\u6d41\u7a0b"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u6267\u884c\u6d41\u7a0b")),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u4ece\u5e8f\u5217\u4e2d\u9009\u62e9\u4e00\u4e2a ",Object(r.b)("inlineCode",{parentName:"li"},"\u8f74\u70b9\u5143\u7d20 (Pivot)"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5047\u8bbe\u6bcf\u6b21\u9009\u62e9 ",Object(r.b)("inlineCode",{parentName:"li"},"index = 0")," \u4f4d\u7f6e\u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"\u5143\u7d20")))),Object(r.b)("li",{parentName:"ul"},"\u5229\u7528 ",Object(r.b)("inlineCode",{parentName:"li"},"pivot")," \u5c06\u5e8f\u5217\u5206\u5272\u4e3a ",Object(r.b)("inlineCode",{parentName:"li"},"2")," \u4e2a\u5b50\u5e8f\u5217",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5c06 ",Object(r.b)("inlineCode",{parentName:"li"},"\u5c0f\u4e8e")," pivot \u7684\u653e\u5728\u5de6\u4fa7"),Object(r.b)("li",{parentName:"ul"},"\u5c06 ",Object(r.b)("inlineCode",{parentName:"li"},"\u5927\u4e8e")," pivot \u7684\u653e\u5728\u53f3\u4fa7"),Object(r.b)("li",{parentName:"ul"},"\u5c06 ",Object(r.b)("inlineCode",{parentName:"li"},"\u7b49\u4e8e")," pivot \u653e\u5728\u4efb\u610f\u4e00\u4fa7"))),Object(r.b)("li",{parentName:"ul"},"\u5bf9\u4e24\u4e2a\u5b50\u5e8f\u5217\u91cd\u590d\u8fdb\u884c\u4ee5\u4e0a\u64cd\u4f5c\uff0c",Object(r.b)("strong",{parentName:"li"},"\u76f4\u5230\u4e0d\u80fd\u518d\u5206\u5272\uff0c\u5373\u5b50\u5e8f\u5217\u4e2d\u53ea\u5269\u4e0b\u4e00\u4e2a\u5143\u7d20"))),Object(r.b)("br",null),Object(r.b)("img",{src:t(753).default,style:{zoom:"60%",boxShadow:"0px 0px 0px #333333",borderRadius:"19px"}})," ",Object(r.b)("br",null)),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u672c\u8d28")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u9010\u6e10\u5c06\u6bcf\u4e00\u4e2a\u5143\u7d20\u90fd\u8f6c\u6362\u6210\u8f74\u70b9\u5143\u7d20"))),Object(r.b)("h2",{id:"\u8f74\u70b9\u6784\u9020"},"\u8f74\u70b9\u6784\u9020"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u4e3a\u4ec0\u4e48\u6784\u9020")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u6839\u636e\u5feb\u901f\u6392\u5e8f\u7684\u672c\u8d28\uff0c\u5c31\u662f\u5c06\u6bcf\u4e00\u4e2a\u5143\u7d20\u90fd\u53d8\u6210\u8f74\u70b9\uff0c\u90a3\u4e48\u53ea\u8981\u89e3\u51b3\u5982\u4f55\u628a\u4e00\u4e2a\u5143\u7d20\u53d8\u6210\u8f74\u70b9\u5373\u53ef"))),Object(r.b)("blockquote",null,Object(r.b)("ol",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ol"},"\u5148\u5c06\u5e0c\u671b\u6210\u4e3a\u8f74\u70b9\u7684\u5143\u7d20 ",Object(r.b)("inlineCode",{parentName:"li"},"\u5907\u4efd")),Object(r.b)("li",{parentName:"ol"},"\u786e\u5b9a\u6700\u7ec8\u8f74\u70b9\u5bf9\u5e94\u7684 index"),Object(r.b)("li",{parentName:"ol"},"\u4ece\u5c3e\u5411\u5934\u626b\u63cf\uff0c\u5bf9\u6bd4\u6bcf\u4e00\u4e2a\u5143\u7d20\u4e0e\u8f74\u70b9\u5143\u7d20\u7684\u503c\u5927\u5c0f\uff0c\u4ee5 ",Object(r.b)("inlineCode",{parentName:"li"},"\u5c0f\u503c\u5728\u8f74\u70b9\u5de6\uff0c\u5927\u503c\u5728\u8f74\u70b9\u53f3")," \u7684\u539f\u5219",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"\u5c3e\u6307\u9488\u6307\u5411\u5143\u7d20 ",Object(r.b)("inlineCode",{parentName:"li"},"\u5927\u4e8e")," \u8f74\u70b9\u503c\uff0c\u5219\u76f4\u63a5\u5c3e\u6307\u9488\u5411\u5de6\u79fb\u52a8"),Object(r.b)("li",{parentName:"ol"},"\u5c3e\u6307\u9488\u6307\u5411\u5143\u7d20 ",Object(r.b)("inlineCode",{parentName:"li"},"\u5c0f\u4e8e")," \u8f74\u70b9\u503c\uff0c",Object(r.b)("strong",{parentName:"li"},"\u7528\u5c3e\u6307\u9488\u6307\u5411\u5143\u7d20\u8986\u76d6\u5934\u6307\u9488\u5143\u7d20\uff0c\u5934\u6307\u9488\u53f3\u79fb\uff0c",Object(r.b)("inlineCode",{parentName:"strong"},"\u8f6c\u6362\u4e3a\u4ece\u5934\u5411\u5c3e\u626b\u63cf")),"\uff0c\u6b64\u65f6\u5c3e\u6307\u9488\u6307\u5411\u7684\u5143\u7d20\u5c31\u662f ",Object(r.b)("strong",{parentName:"li"},"\u5783\u573e\u6570\u636e"),"\uff0c\u56e0\u4e3a\u5b83\u5df2\u7ecf\u88ab\u590d\u5236\u5230\u5934\u6307\u9488\u4e0a\u53bb\u4e86"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"\u7b49\u4e8e")," \u7684\u60c5\u51b5\u4e5f\u8fdb\u884c\u4ea4\u6362\uff0c",Object(r.b)("strong",{parentName:"li"},"\u8fd9\u53ef\u4ee5\u4fdd\u8bc1\u5b50\u5e8f\u5217\u7684\u5747\u5300\u5207\u5272")))),Object(r.b)("li",{parentName:"ol"},"\u4ece\u5934\u5411\u5c3e\u626b\u63cf",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"\u5934\u6307\u9488\u6307\u5411\u5143\u7d20 ",Object(r.b)("inlineCode",{parentName:"li"},"\u5c0f\u4e8e")," \u8f74\u70b9\u503c\uff0c\u5219\u76f4\u63a5\u5934\u6307\u9488\u5411\u53f3\u79fb\u52a8"),Object(r.b)("li",{parentName:"ol"},"\u5934\u6307\u9488\u6307\u5411\u5143\u7d20 ",Object(r.b)("inlineCode",{parentName:"li"},"\u5927\u4e8e")," \u8f74\u70b9\u503c\uff0c\u5c06\u5934\u6307\u9488\u6307\u5411\u5143\u7d20\u8986\u76d6\u5230\u5c3e\u6307\u9488\uff0c\u5c3e\u6307\u9488\u5de6\u79fb\uff0c\u8f6c\u6362\u4e3a\u4ece\u5c3e\u5411\u5934\u626b\u63cf"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"\u7b49\u4e8e")," \u7684\u60c5\u51b5\u4e5f\u8fdb\u884c\u4ea4\u6362"))),Object(r.b)("li",{parentName:"ol"},"\u5f53 \u5934\u5c3e\u6307\u9488 ",Object(r.b)("inlineCode",{parentName:"li"},"\u76f8\u7b49"),"\uff0c\u8bf4\u660e ",Object(r.b)("inlineCode",{parentName:"li"},"\u4e00\u4e2a")," \u8f74\u70b9\u6784\u9020\u5b8c\u6bd5\uff0c",Object(r.b)("strong",{parentName:"li"},"\u6b64\u65f6\u628a\u4e00\u5f00\u59cb\u5907\u4efd\u7684\u8f74\u70b9\u5143\u7d20\u503c\u62ff\u8fc7\u6765\uff0c\u8986\u76d6 \u5934(\u5c3e)\u6307\u9488\u6307\u5411\u7684\u5143\u7d20")),Object(r.b)("li",{parentName:"ol"},"\u8fd4\u56de\u5f53\u524d\u5934\uff08\u5c3e\uff09\u6307\u9488\u7684 index\uff0c\u7528\u4e8e\u540e\u7eed\u9012\u5f52\u8c03\u7528"),Object(r.b)("li",{parentName:"ol"},"\u5bf9\u5de6\u53f3\u5b50\u5e8f\u5217\u9012\u5f52\u8c03\u7528\uff0c\u5b50\u5e8f\u5217\u5143\u7d20\u53ea\u52691\u4e2a\u65f6\u9000\u51fa\u9012\u5f52"))),Object(r.b)("p",null,Object(r.b)("img",{alt:"image-20210330150951002",src:t(754).default})),Object(r.b)("br",null),Object(r.b)("h1",{id:"\u5b9e\u73b0"},"\u5b9e\u73b0"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'/**\n * \u5feb\u901f\u6392\u5e8f\n */\npublic class QuickSort<E extends Comparable<E>> extends Sort<E> {\n\n    public QuickSort(E[] array) {\n        this.array = array;\n    }\n\n    @Override\n    public void sort() {\n        quickSort(0, array.length);\n    }\n\n    // [begin, end) \u8303\u56f4\u5143\u7d20\u8fdb\u884c\u5feb\u901f\u6392\u5e8f\n    private void quickSort(int begin, int end) {\n        // \u9012\u5f52\u673a\uff0c\u53ea\u5269\u4e0b\u4e00\u4e2a\u5143\u7d20\u65f6\uff0c\u5c31\u4e0d\u80fd\u518d\u5207\u5272\u4e86\n        if (end - begin < 2) return;\n        // \u8f74\u70b9\u6784\u9020\n        int pivot = pivotConstruct(begin, end);\n        // \u5bf9\u5b50\u5e8f\u5217\u8fdb\u884c\u9012\u5f52\n        quickSort(begin, pivot);\n        quickSort(pivot + 1, end);\n    }\n\n    /**\n     * \u6839\u636e\u8303\u56f4\uff0c\u6784\u9020\u8f74\u70b9\uff0c\u786e\u5b9a\u8f74\u70b9\u6700\u7ec8\u7684\u4e0b\u6807\n     *\n     * @param begin \u5934\u6307\u9488\n     * @param end   \u5c3e\u6307\u9488\n     * @return \u8f74\u70b9 index\n     */\n    private int pivotConstruct(int begin, int end) {\n        // \u968f\u673a\u9009\u62e9\u8f74\u70b9,begin + \u968f\u673a\u6b65\u957f\n        swap(begin, begin + (int) (Math.random() * (end - begin)));\n        // \u5907\u4efd begin\n        E pivot = array[begin];\n        end--; // end \u6307\u5411\u6700\u540e\u4e00\u4e2a\u5143\u7d20\n        while (begin < end) { // \u53ea\u8981 \u5934\u6307\u9488 \u5c0f\u4e8e \u5c3e\u6307\u9488\n            while (begin < end) {\n                // \u4ece\u5c3e\u5411\u5934\u626b\u63cf\n                if (cmp(array[end], pivot) > 0) { // \u53f3\u4fa7\u5927\u4e8e\u8f74\u70b9\n                    // \u5c3e\u6307\u9488\u5de6\u79fb\n                    end--;\n                } else { // \u53f3\u4fa7\u5c0f\u4e8e\u7b49\u4e8e\n                    // \u503c\u8986\u76d6\u5934\u6307\u9488\u5143\u7d20 \u5934\u6307\u9488\u53f3\u79fb\n                    array[begin++] = array[end];\n                    break;\n                }\n            }\n\n            while (begin < end) {\n                // \u4ece\u5de6\u5f80\u53f3\u626b\u63cf\n                if (cmp(array[begin], pivot) < 0) {\n                    begin++;\n                } else {\n                    array[end--] = array[begin];\n                    break;\n                }\n            }\n        }\n        // begin == end\n        array[begin] = pivot; // \u8f74\u70b9\u5143\u7d20\u5f52\u4f4d\u8986\u76d6\n        return begin; // begin \u6216 end \u90fd\u662f\u5f53\u524d\u8f74\u70b9\u4e0b\u6807\n    }\n\n    public static void main(String[] args) {\n        Integer[] array = {5, 3, 1, 2, 4};\n\n        QuickSort<Integer> integerQuickSort = new QuickSort<>(array);\n        integerQuickSort.sort();\n\n        for (Integer integer : array) {\n            System.out.print(integer + " ");\n        }\n    }\n}\n')),Object(r.b)("br",null),Object(r.b)("h1",{id:"\u590d\u6742\u5ea6\u5206\u6790"},"\u590d\u6742\u5ea6\u5206\u6790"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5c5e\u4e8e\u4e0d\u7a33\u5b9a\u6392\u5e8f",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"6a \u3001 6b \u7684\u4f4d\u7f6e\u53d1\u751f\u4e86\u5012\u6362")))),Object(r.b)("h2",{id:"\u8f74\u70b9\u5de6\u53f3\u5143\u7d20\u5747\u5300"},"\u8f74\u70b9\u5de6\u53f3\u5143\u7d20\u5747\u5300"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u6784\u9020\u8f74\u70b9\uff0c\u7ebf\u6027\u904d\u5386 ",Object(r.b)("inlineCode",{parentName:"li"},"O(n)")),Object(r.b)("li",{parentName:"ul"},"\u5feb\u901f\u6392\u5e8f\uff1a\u5047\u8bbe\u4e3a ",Object(r.b)("inlineCode",{parentName:"li"},"T(n)"),"\u5219\uff0c",Object(r.b)("inlineCode",{parentName:"li"},"T(n) = 2 * T(n / 2) + O(n)"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u663e\u7136\u7ed3\u679c\u4e3a ",Object(r.b)("inlineCode",{parentName:"li"},"O(nlogn)")),Object(r.b)("li",{parentName:"ul"},"\u524d\u63d0\u662f\u5de6\u53f3\u5b50\u5e8f\u5217\u6bd4\u8f83\u5747\u5300\uff0c\u5426\u5219\u4e0d\u80fd\u8ba4\u5b9a\u4e3a ",Object(r.b)("inlineCode",{parentName:"li"},"T(n/2)"))))),Object(r.b)("h2",{id:"\u8f74\u70b9\u5de6\u53f3\u6781\u4e0d\u5747\u5300"},"\u8f74\u70b9\u5de6\u53f3\u6781\u4e0d\u5747\u5300"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u6700\u574f\u60c5\u51b5\uff1aT(n) = T(n - 1) + O(n) = ",Object(r.b)("inlineCode",{parentName:"li"},"O(n ^ 2)"))),Object(r.b)("h3",{id:"\u907f\u514d\u6700\u574f\u60c5\u51b5"},"\u907f\u514d\u6700\u574f\u60c5\u51b5"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u968f\u673a\u9009\u62e9\u8f74\u70b9\u5143\u7d20\u5373\u53ef")),Object(r.b)("li",{parentName:"ul"},"\u5c06 begin \u4e0e begin+\u968f\u673a\u6b65\u957f \u4f4d\u7f6e\u7684\u5143\u7d20\u8fdb\u884c\u4ea4\u6362\uff0c\u7136\u540e\u5f00\u59cb\u5feb\u901f\u6392\u5e8f")),Object(r.b)("h2",{id:"\u7a7a\u95f4\u590d\u6742\u5ea6"},"\u7a7a\u95f4\u590d\u6742\u5ea6"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u9012\u5f52\u8c03\u7528\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6 ",Object(r.b)("inlineCode",{parentName:"li"},"O(logn)"))))}p.isMDXComponent=!0},570:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return O}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=i.a.createContext({}),p=function(e){var n=i.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return i.a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,O=d["".concat(b,".").concat(u)]||d[u]||m[u]||r;return t?i.a.createElement(O,l(l({ref:n},o),{},{components:t})):i.a.createElement(O,l({ref:n},o))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,b=new Array(r);b[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,b[1]=l;for(var o=2;o<r;o++)b[o]=t[o];return i.a.createElement.apply(null,b)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},753:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/7-22ecfcc48ee0973fb98e7192eafefb8a.png"},754:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/8-52d36f5e6cea803a7d89250b9c123dcd.png"}}]);