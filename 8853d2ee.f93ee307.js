(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{230:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return d})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return o}));var i=t(2),a=t(6),r=(t(0),t(375)),l={id:"2.biLinkedList",title:"\u53cc\u5411\u94fe\u8868\u5b9e\u73b0",hide_title:!0},d={unversionedId:"sf/\u94fe\u8868/2.biLinkedList",id:"sf/\u94fe\u8868/2.biLinkedList",isDocsHomePage:!1,title:"\u53cc\u5411\u94fe\u8868\u5b9e\u73b0",description:"\u53cc\u5411\u94fe\u8868",source:"@site/datastructure/sf/\u94fe\u8868/2.\u53cc\u5411\u94fe\u8868.md",slug:"/sf/\u94fe\u8868/2.biLinkedList",permalink:"/datastructure/sf/\u94fe\u8868/2.biLinkedList",version:"current",sidebar:"docs2",previous:{title:"\u865a\u62df\u5934\u8282\u70b9",permalink:"/datastructure/sf/\u94fe\u8868/vitrulHeadNode"},next:{title:"\u5355\u5411\u5faa\u73af\u94fe\u8868",permalink:"/datastructure/sf/\u94fe\u8868/3.singleCycleLinkedList"}},b=[{value:"\u53cc\u5411\u94fe\u8868",id:"\u53cc\u5411\u94fe\u8868",children:[{value:"\u53cc\u5411\u94fe\u8868\u8282\u70b9",id:"\u53cc\u5411\u94fe\u8868\u8282\u70b9",children:[]},{value:"\u53cc\u5411\u94fe\u8868\u6210\u5458\u53d8\u91cf",id:"\u53cc\u5411\u94fe\u8868\u6210\u5458\u53d8\u91cf",children:[]},{value:"node(int index)\u65b9\u6cd5",id:"nodeint-index\u65b9\u6cd5",children:[]},{value:"toString\u65b9\u6cd5",id:"tostring\u65b9\u6cd5",children:[]},{value:"get(int index)\u65b9\u6cd5",id:"getint-index\u65b9\u6cd5",children:[]},{value:"set(int index, E element)\u65b9\u6cd5",id:"setint-index-e-element\u65b9\u6cd5",children:[]},{value:"clear\u65b9\u6cd5",id:"clear\u65b9\u6cd5",children:[]},{value:"add(int index, E element)\u65b9\u6cd5",id:"addint-index-e-element\u65b9\u6cd5",children:[]},{value:"remove(int index)\u65b9\u6cd5",id:"removeint-index\u65b9\u6cd5",children:[]}]}],c={rightToc:b};function o(e){var n=e.components,l=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,l,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"\u53cc\u5411\u94fe\u8868"},"\u53cc\u5411\u94fe\u8868"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u7279\u5f81")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"\u53cc\u5411\u94fe\u8868\u7684\u6210\u5458\u53d8\u91cf\u5305\u62ec",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"size"),"\uff1a\u8282\u70b9\u6570\u76ee"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"first"),"\uff1a\u6307\u5411\u5934\u7ed3\u70b9"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"last"),"\uff1a\u6307\u5411\u5c3e\u7ed3\u70b9"))),Object(r.b)("li",{parentName:"ul"},"\u53cc\u5411\u94fe\u8868\u7684\u8282\u70b9\u6210\u5458\u5c5e\u6027\u5305\u62ec\uff1a",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"element"),"\uff1a\u8282\u70b9\u503c"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"prev"),"\uff1a\u6307\u5411\u524d\u4e00\u4e2a\u8282\u70b9"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"next"),"\uff1a\u6307\u5411\u4e0b\u4e00\u4e2a\u8282\u70b9")))))),Object(r.b)("p",null,Object(r.b)("img",{alt:"image-20200917093233962",src:t(605).default})),Object(r.b)("h2",{id:"\u53cc\u5411\u94fe\u8868\u8282\u70b9"},"\u53cc\u5411\u94fe\u8868\u8282\u70b9"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),'private static class BiLinkedListNode<E> {\n    E element;\n    BiLinkedListNode<E> next;\n    BiLinkedListNode<E> prev;\n\n    public BiLinkedListNode() {\n    }\n\n    public BiLinkedListNode(E element, BiLinkedListNode<E> prev, BiLinkedListNode<E> next) {\n        this.element = element;\n        this.prev = prev;\n        this.next = next;\n    }\n\n    @Override\n    public String toString() {\n        StringBuilder stringBuilder = new StringBuilder();\n\n        if (prev == null) {\n            stringBuilder.append("[null]");\n        } else {\n            stringBuilder.append("[").append(prev.element).append("]");\n        }\n\n        stringBuilder.append("[").append(element).append("]");\n\n        if (next == null) {\n            stringBuilder.append("[null]");\n        } else {\n            stringBuilder.append("[").append(next.element).append("]");\n        }\n\n        return stringBuilder.toString();\n    }\n}\n')),Object(r.b)("h2",{id:"\u53cc\u5411\u94fe\u8868\u6210\u5458\u53d8\u91cf"},"\u53cc\u5411\u94fe\u8868\u6210\u5458\u53d8\u91cf"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"public class BiLinkedList<E> {\n    private static final int ELEMENT_NOT_FOUND = -1;\n\n    private int size = 0;\n    private BiLinkedListNode<E> first;\n    private BiLinkedListNode<E> last;\n  \n    //...\n  \n}\n")),Object(r.b)("h2",{id:"nodeint-index\u65b9\u6cd5"},"node(int index)\u65b9\u6cd5"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u7ed9\u5b9aindex\uff0c\u8fd4\u56de\u5bf9\u5e94\u7684\u8282\u70b9\u5bf9\u8c61")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u4e0e\u5355\u5411\u94fe\u8868\u7684\u533a\u522b")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"\u5728\u5355\u5411\u94fe\u8868\u4e2d\uff0c\u53ea\u80fd\u4ece\u4e00\u4e2a\u65b9\u5411\u904d\u5386\u67e5\u627e\u4e00\u4e2a\u8282\u70b9"),Object(r.b)("li",{parentName:"ul"},"\u5728\u53cc\u5411\u94fe\u8868\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7\u5224\u65ad\uff0c\u51b3\u5b9a\u4ece\u5934\u8fd8\u662f\u4ece\u5c3e\u5f00\u59cb\u904d\u5386\u67e5\u627e\u8282\u70b9\uff0c\u8fd9\u6837\u53ef\u4ee5\u51cf\u5c11\u904d\u5386\u7684\u603b\u8282\u70b9\u6570",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"index\u5c0f\u4e8esize\u7684\u4e00\u534a\uff0c\u4ece\u5934\u8282\u70b9\u5f00\u59cb\u904d\u5386"),Object(r.b)("li",{parentName:"ul"},"index\u5927\u4e8esize\u7684\u4e00\u534a\uff0c\u4ece\u5c3e\u8282\u70b9\u5f00\u59cb\u904d\u5386")))))),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"private BiLinkedListNode<E> node(int index) {\n    rangeCheck(index);\n    BiLinkedListNode<E> node;\n\n    if (index < (size >> 1)) { // \u6b63\u5411\u904d\u5386\n        node = first;\n        for (int i = 0; i < index; i++) {\n            node = node.next;\n        }\n    } else { // \u53cd\u5411\u904d\u5386\n        node = last;\n        for (int i = size - 1; i > index; i--) {\n            node = node.prev;\n        }\n    }\n\n    return node;\n}\n")),Object(r.b)("h2",{id:"tostring\u65b9\u6cd5"},"toString\u65b9\u6cd5"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),'@Override\npublic String toString() {\n    StringBuilder result = new StringBuilder("BiLinkedList{" +\n            "size=" + size + " | ");\n\n    if (first == null) { // \u5982\u679c\u94fe\u8868\u4e3a\u7a7a\uff0c\u4e0d\u904d\u5386\u76f4\u63a5\u6253\u5370\u7a7a\n        result.append("null }");\n        return result.toString();\n    }\n\n    BiLinkedListNode<E> node = first;\n\n    while (node.next != null) {\n        result.append(node).append(" <-> ");\n        node = node.next;\n    }\n    result.append(node).append("}");\n    \n    return result.toString();\n}\n')),Object(r.b)("h2",{id:"getint-index\u65b9\u6cd5"},"get(int index)\u65b9\u6cd5"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u4e0d\u9700\u8981\u4fee\u6539")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"//  \u8fd4\u56deindex\u4f4d\u7f6e\u5bf9\u5e94\u7684\u5143\u7d20\npublic E get(int index) {\n    return node(index).element;\n}\n")),Object(r.b)("h2",{id:"setint-index-e-element\u65b9\u6cd5"},"set(int index, E element)\u65b9\u6cd5"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u4e0d\u9700\u8981\u4fee\u6539")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"//  \u8bbe\u7f6eIndex\u4f4d\u7f6e\u7684\u5143\u7d20\npublic E set(int index, E element) {\n    BiLinkedListNode<E> node = node(index);\n    E old = node.element;\n    node.element = element;\n    return old;\n}\n")),Object(r.b)("h2",{id:"clear\u65b9\u6cd5"},"clear\u65b9\u6cd5"),Object(r.b)("p",null,"\u9700\u8981\u5c06\u5c3e\u7ed3\u70b9\u5f15\u7528\u7f6e\u7a7a\uff0c\u94fe\u8868\u624d\u80fd\u88ab\u5783\u573e\u56de\u6536\u5668\u56de\u6536"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"//  \u6e05\u9664\u6240\u6709\u5143\u7d20\npublic void clear() {\n    size = 0;\n    first = null;\n    last = null;\n}\n")),Object(r.b)("h2",{id:"addint-index-e-element\u65b9\u6cd5"},"add(int index, E element)\u65b9\u6cd5"),Object(r.b)("blockquote",null,Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u627e\u5230index\u5bf9\u5e94\u8282\u70b9"),Object(r.b)("li",{parentName:"ul"},"\u83b7\u53d6index\u8282\u70b9\u7684\u524d\u4e00\u4e2a\u548c\u540e\u4e00\u4e2a"),Object(r.b)("li",{parentName:"ul"},"\u521b\u5efa\u8981\u63d2\u5165\u7684\u8282\u70b9\uff0c\u8bbe\u7f6e\u524d\u4e00\u4e2a\u8282\u70b9\u4e3aindex\u7684\u524d\u4e00\u4e2a\u8282\u70b9\uff0c\u540e\u4e00\u4e2a\u8282\u70b9\u4e3aindex"),Object(r.b)("li",{parentName:"ul"},"\u5c06\u524d\u4e00\u4e2a\u8282\u70b9\u7684next\u8bbe\u7f6e\u4e3a\u8981\u63d2\u5165\u7684\u8282\u70b9"),Object(r.b)("li",{parentName:"ul"},"\u5c06\u4e0b\u4e00\u4e2a\u8282\u70b9\u7684prev\u8bbe\u7f6e\u4e3a\u8981\u63d2\u5165\u7684\u8282\u70b9"))),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"//  \u5411index\u4f4d\u7f6e\u63d2\u5165\u4e00\u4e2a\u5143\u7d20\npublic void add(int index, E element) {\n    rangeCheckForAdd(index);\n    // \u627e\u5230index\u5bf9\u5e94\u7684\u8282\u70b9\n    BiLinkedListNode<E> node = node(index);\n    BiLinkedListNode<E> preNode = node.prev;  // \u524d\u4e00\u4e2a\u8282\u70b9\n    // \u521b\u5efa\u8981\u63d2\u5165\u7684\u8282\u70b9\n    BiLinkedListNode<E> insertNode = new BiLinkedListNode<>(element, preNode, node);\n    // \u524d\u4e00\u4e2a\u8282\u70b9\u7684next\u6307\u5411\u8981\u63d2\u5165\u7684\u8282\u70b9\n    preNode.next = insertNode;\n    // \u540e\u4e00\u4e2a\u8282\u70b9\u7684prev\u6307\u5411\u8981\u63d2\u5165\u7684\u8282\u70b9\n    node.prev = insertNode;\n\n    size++;\n}\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u5904\u7406\u8fb9\u754c\u60c5\u51b5")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"\u5728\u5f00\u5934\u63d2\u5165",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5219\u4e0d\u5b58\u5728\u524d\u9a71\u8282\u70b9\uff0c\u5fc5\u987b\u8fdb\u884c\u5224\u65ad\uff0c\u5426\u5219\u4f1a\u4ea7\u751f\u7a7a\u6307\u9488"),Object(r.b)("li",{parentName:"ul"},"\u63d2\u8fdb\u53bb\u7684\u8282\u70b9\u5c31\u662f\u5934\u8282\u70b9\uff0c\u56e0\u6b64\u8981\u5c06\u94fe\u8868\u7684",Object(r.b)("inlineCode",{parentName:"li"},"first"),"\u6307\u5411\u63d2\u5165\u7684\u8282\u70b9"))),Object(r.b)("li",{parentName:"ul"},"\u5728\u5c3e\u5df4\u63d2\u5165",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u76f8\u5f53\u4e8eindex\u7684\u503c\u7b49\u4e8esize\u503c\u7684\u60c5\u51b5"),Object(r.b)("li",{parentName:"ul"},"\u63d2\u5165\u8282\u70b9\u7684next\u4e3anull"),Object(r.b)("li",{parentName:"ul"},"\u63d2\u5165\u8282\u70b9\u7684prev\u4e3a\u5148\u524d\u53cc\u5411\u94fe\u8868\u7684last"),Object(r.b)("li",{parentName:"ul"},"\u65b0\u63d2\u5165\u7684\u8282\u70b9\u53d8\u6210\u4e86\u65b0\u7684last"),Object(r.b)("li",{parentName:"ul"},"\u5148\u524dlast\u7684next\u6307\u5411\u65b0\u63d2\u5165\u7684\u8282\u70b9"))),Object(r.b)("li",{parentName:"ul"},"\u5728\u5c3e\u5df4\u63d2\u5165\uff0c\u4e14\u5f53\u524d\u94fe\u8868\u4e3a\u7a7a",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"size\u4e3a0\uff0c\u63d2\u5165\u4e86\u4e00\u4e2a\u8282\u70b9\uff0c\u90a3\u4e48\u8fd9\u4e2a\u8282\u70b9\u662f\u552f\u4e00\u7684\u8282\u70b9\uff0cfirst\u3001last\u90fd\u662f\u5b83")))))),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"//  \u5411index\u4f4d\u7f6e\u63d2\u5165\u4e00\u4e2a\u5143\u7d20\npublic void add(int index, E element) {\n    rangeCheckForAdd(index);\n\n    // \u5728\u6700\u540e\u9762\u63d2\u5165\n    if (index == size) {\n        // \u5728\u6700\u540e\u9762\u63d2\u5165\u65b0\u8282\u70b9\uff0c\u65b0\u8282\u70b9\u7684next\u4e3a\u7a7a\uff0cprev\u4e3a\u4e0a\u4e00\u4e2alast\n        // \u6700\u7ec8\u63d2\u8fdb\u53bb\u7684\u8282\u70b9\u53d8\u4e3a\u4e86\u65b0\u7684last\n        last = new BiLinkedListNode<>(element, last, null);\n\n        if (size == 0) { // \u94fe\u8868\u4e3a\u7a7a\n            first = last; // \u552f\u4e00\u4e00\u4e2a\u8282\u70b9\uff0c\u5934 \u5c3e\u90fd\u662f\u5b83\n        } else {\n            // \u5148\u524dlast\u7684next\u6307\u5411\u65b0\u63d2\u5165\u8282\u70b9\uff0c\u4e5f\u5c31\u662f\u65b0\u7684last\u8282\u70b9\n            last.prev.next = last;\n        }\n    } else { // \u4e0d\u662f\u5728\u6700\u540e\u9762\u63d2\u5165\n        // \u627e\u5230index\u5bf9\u5e94\u7684\u8282\u70b9\n        BiLinkedListNode<E> node = node(index);\n        BiLinkedListNode<E> preNode = node.prev;  // \u524d\u4e00\u4e2a\u8282\u70b9\n        // \u521b\u5efa\u8981\u63d2\u5165\u7684\u8282\u70b9\n        BiLinkedListNode<E> insertNode = new BiLinkedListNode<>(element, preNode, node);\n\n        if (preNode == null) { // \u5728\u6700\u5f00\u5934\u63d2\u5165\n            first = insertNode;\n        } else {\n            // \u524d\u4e00\u4e2a\u8282\u70b9\u7684next\u6307\u5411\u8981\u63d2\u5165\u7684\u8282\u70b9\n            preNode.next = insertNode;\n        }\n        // \u540e\u4e00\u4e2a\u8282\u70b9\u7684prev\u6307\u5411\u8981\u63d2\u5165\u7684\u8282\u70b9\n        node.prev = insertNode;\n    }\n\n    size++;\n}\n")),Object(r.b)("h2",{id:"removeint-index\u65b9\u6cd5"},"remove(int index)\u65b9\u6cd5"),Object(r.b)("blockquote",null,Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u627e\u5230index\u5bf9\u5e94\u7684\u8282\u70b9node"),Object(r.b)("li",{parentName:"ul"},"node.prev\u7684next\u6307\u5411node.next"),Object(r.b)("li",{parentName:"ul"},"node.next\u7684prev\u6307\u5411node.prev"),Object(r.b)("li",{parentName:"ul"},"size--"))),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"//  \u79fb\u9664index\u4f4d\u7f6e\u7684\u5143\u7d20\u5e76\u8fd4\u56de\npublic E remove(int index) {\n    BiLinkedListNode<E> node = node(index);\n    E removedElement = node.element;\n\n    node.prev.next = node.next;\n    node.next.prev = node.prev;\n\n    size--;\n    return removedElement;\n}\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u8fb9\u754c\u60c5\u51b5")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"\u5220\u9664\u7684\u5143\u7d20\u662f\u7b2c\u4e00\u4e2a\u5143\u7d20",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"first\u6307\u5411node\u7684next"),Object(r.b)("li",{parentName:"ul"},"node\u7684next\u8282\u70b9\u7684prev\u6307\u5411null"))),Object(r.b)("li",{parentName:"ul"},"\u5220\u9664\u7684\u5143\u7d20\u662f\u6700\u540e\u4e00\u4e2a",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"last\u6307\u5411node\u7684prev"),Object(r.b)("li",{parentName:"ul"},"node\u7684prev\u8282\u70b9\u7684next\u6307\u5411null"))),Object(r.b)("li",{parentName:"ul"},"\u94fe\u8868\u53ea\u6709\u4e00\u4e2a\u5143\u7d20",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"first\u8bbe\u7f6e\u4e3anull\uff0c last\u8bbe\u7f6e\u4e3anull")))))),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"//  \u79fb\u9664index\u4f4d\u7f6e\u7684\u5143\u7d20\u5e76\u8fd4\u56de\npublic E remove(int index) {\n    BiLinkedListNode<E> node = node(index);\n    E removedElement = node.element;\n\n    if (size == 1) { // \u5220\u9664\u552f\u4e00\u8282\u70b9\n        first = null;\n        last = null;\n    } else if (node == first) { // \u5220\u9664\u7684\u662f\u5934\u7ed3\u70b9\n        first = node.next;\n        node.next.prev = null;\n    } else if (node == last) { // \u5220\u9664\u7684\u662f\u5c3e\u7ed3\u70b9\n        last = node.prev;\n        node.prev.next = null;\n    } else {\n        node.prev.next = node.next;\n        node.next.prev = node.prev;\n    }\n\n    size--;\n    return removedElement;\n}\n")))}o.isMDXComponent=!0},375:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),o=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},p=function(e){var n=o(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=o(t),u=i,m=p["".concat(l,".").concat(u)]||p[u]||s[u]||r;return t?a.a.createElement(m,d(d({ref:n},c),{},{components:t})):a.a.createElement(m,d({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=u;var d={};for(var b in n)hasOwnProperty.call(n,b)&&(d[b]=n[b]);d.originalType=e,d.mdxType="string"==typeof e?e:i,l[1]=d;for(var c=2;c<r;c++)l[c]=t[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},605:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/5-a3dd151dd1250a9b3f768fce3d50bf26.png"}}]);