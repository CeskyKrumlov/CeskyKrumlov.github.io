(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{323:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return o}));var i=t(2),r=t(6),a=(t(0),t(375)),l={id:"4.BiCycleLinkedList",title:"\u53cc\u5411\u5faa\u73af\u94fe\u8868",hide_title:!0},s={unversionedId:"sf/\u94fe\u8868/4.BiCycleLinkedList",id:"sf/\u94fe\u8868/4.BiCycleLinkedList",isDocsHomePage:!1,title:"\u53cc\u5411\u5faa\u73af\u94fe\u8868",description:"\u53cc\u5411\u5faa\u73af\u94fe\u8868",source:"@site/datastructure/sf/\u94fe\u8868/4.\u53cc\u5411\u5faa\u73af\u94fe\u8868.md",slug:"/sf/\u94fe\u8868/4.BiCycleLinkedList",permalink:"/datastructure/sf/\u94fe\u8868/4.BiCycleLinkedList",version:"current",sidebar:"docs2",previous:{title:"\u5355\u5411\u5faa\u73af\u94fe\u8868",permalink:"/datastructure/sf/\u94fe\u8868/3.singleCycleLinkedList"},next:{title:"237.\u5220\u9664\u94fe\u8868\u4e2d\u7684\u8282\u70b9",permalink:"/datastructure/sf/\u94fe\u8868/237.deleteNodeInALinkedList"}},d=[{value:"\u53cc\u5411\u5faa\u73af\u94fe\u8868",id:"\u53cc\u5411\u5faa\u73af\u94fe\u8868",children:[{value:"\u8282\u70b9toString\u65b9\u6cd5",id:"\u8282\u70b9tostring\u65b9\u6cd5",children:[]},{value:"\u53cc\u5411\u5faa\u73af\u94fe\u8868toString\u65b9\u6cd5",id:"\u53cc\u5411\u5faa\u73af\u94fe\u8868tostring\u65b9\u6cd5",children:[]},{value:"add(int index, E element)\u65b9\u6cd5",id:"addint-index-e-element\u65b9\u6cd5",children:[]},{value:"remove(int index) \u65b9\u6cd5",id:"removeint-index-\u65b9\u6cd5",children:[]}]}],c={rightToc:d};function o(e){var n=e.components,l=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},c,l,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"\u53cc\u5411\u5faa\u73af\u94fe\u8868"},"\u53cc\u5411\u5faa\u73af\u94fe\u8868"),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u5b9a\u4e49")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"\u5728\u53cc\u5411\u94fe\u8868\u7684\u57fa\u7840\u4e0a"),Object(a.b)("ul",{parentName:"div"},Object(a.b)("li",{parentName:"ul"},"first\u7684prev\u6307\u5411last"),Object(a.b)("li",{parentName:"ul"},"last\u7684next\u6307\u5411first")))),Object(a.b)("p",null,Object(a.b)("img",{alt:"image-20200917161552971",src:t(686).default})),Object(a.b)("h2",{id:"\u8282\u70b9tostring\u65b9\u6cd5"},"\u8282\u70b9toString\u65b9\u6cd5"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),'@Override\npublic String toString() {\n    StringBuilder stringBuilder = new StringBuilder();\n\n    if (prev == null) {\n        stringBuilder.append("[null]");\n    } else {\n        stringBuilder.append("[").append(prev.element).append("]");\n    }\n\n    stringBuilder.append("[").append(element).append("]");\n\n    if (next == null) {\n        stringBuilder.append("[null]");\n    } else {\n        stringBuilder.append("[").append(next.element).append("]");\n    }\n\n    return stringBuilder.toString();\n}\n')),Object(a.b)("h2",{id:"\u53cc\u5411\u5faa\u73af\u94fe\u8868tostring\u65b9\u6cd5"},"\u53cc\u5411\u5faa\u73af\u94fe\u8868toString\u65b9\u6cd5"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),'@Override\npublic String toString() {\n    StringBuilder result = new StringBuilder("BiLinkedList{" +\n            "size=" + size + " | ");\n\n    if (first == null) { // \u5982\u679c\u94fe\u8868\u4e3a\u7a7a\uff0c\u4e0d\u904d\u5386\u76f4\u63a5\u6253\u5370\u7a7a\n        result.append("null }");\n        return result.toString();\n    }\n\n    BiLinkedListNode<E> node = first;\n\n    for (int i = 0; i < size - 1; i++) {\n        result.append(node).append(" <-> ");\n        node = node.next;\n    }\n\n    result.append(node).append("}");\n\n    return result.toString();\n}\n')),Object(a.b)("h2",{id:"addint-index-e-element\u65b9\u6cd5"},"add(int index, E element)\u65b9\u6cd5"),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u8fb9\u754c\u60c5\u51b5")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("ul",{parentName:"div"},Object(a.b)("li",{parentName:"ul"},"\u5728\u672b\u5c3e\u6dfb\u52a0",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u5728\u672b\u5c3e\u65b0\u5efa\u8282\u70b9\uff0cprev\u4e3a\u4e4b\u524d\u7684last\uff0cnext\u4e3a",Object(a.b)("strong",{parentName:"li"},"first")),Object(a.b)("li",{parentName:"ul"},"first\u7684prev\u66f4\u65b0\u4e3a\u65b0\u7684last"))),Object(a.b)("li",{parentName:"ul"},"\u5728\u672b\u5c3e\u6dfb\u52a0\u4e14\u53ea\u6709\u4e00\u4e2a\u5143\u7d20",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"first\u5c31\u662flast"),Object(a.b)("li",{parentName:"ul"},"\u5faa\u73af\u94fe\u8868\uff0cfirst\u7684next\u662ffirst\uff0cfirst\u7684prev\u4e5f\u662ffirst"),Object(a.b)("li",{parentName:"ul"},"\u8ba9first\u7684prev\u6307\u5411\u65b0\u7684last"))),Object(a.b)("li",{parentName:"ul"},"\u4e0d\u5728\u672b\u5c3e\u63d2\u5165\uff0c\u4e14\u5728\u6700\u5f00\u5934\u63d2\u5165",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u8981\u63d2\u5165\u8282\u70b9\u7684\u524d\u9a71\u8282\u70b9\u5c31\u662flast\u8282\u70b9 || \u540e\u4e00\u4e2a\u8282\u70b9\u4e3afirst || index==0 \u4e09\u9009\u4e00\u5373\u53ef"),Object(a.b)("li",{parentName:"ul"},"first\u6307\u5411\u65b0\u63d2\u5165\u7684\u8282\u70b9")))))),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"//  \u5411index\u4f4d\u7f6e\u63d2\u5165\u4e00\u4e2a\u5143\u7d20\npublic void add(int index, E element) {\n    rangeCheckForAdd(index);\n\n    // \u5728\u6700\u540e\u9762\u63d2\u5165\n    if (index == size) {\n        // \u5728\u6700\u540e\u9762\u63d2\u5165\u65b0\u8282\u70b9\uff0c\u65b0\u8282\u70b9\u7684next\u4e3afirst\uff0cprev\u4e3a\u4e0a\u4e00\u4e2alast\n        // \u6700\u7ec8\u63d2\u8fdb\u53bb\u7684\u8282\u70b9\u53d8\u4e3a\u4e86\u65b0\u7684last\n        last = new BiLinkedListNode<>(element, last, first);\n\n        if (size == 0) { // \u94fe\u8868\u4e3a\u7a7a\n            first = last; // \u552f\u4e00\u4e00\u4e2a\u8282\u70b9\uff0c\u5934 \u5c3e\u90fd\u662f\u5b83\n            first.next = last;\n        } else {\n            // \u5148\u524dlast\u7684next\u6307\u5411\u65b0\u63d2\u5165\u8282\u70b9\uff0c\u4e5f\u5c31\u662f\u65b0\u7684last\u8282\u70b9\n            last.prev.next = last;\n        }\n\n        first.prev = last; // first\u7684prev\u66f4\u65b0\u4e3a\u65b0\u7684last\n    } else { // \u4e0d\u662f\u5728\u6700\u540e\u9762\u63d2\u5165\n        // \u627e\u5230index\u5bf9\u5e94\u7684\u8282\u70b9\n        BiLinkedListNode<E> node = node(index);\n        BiLinkedListNode<E> preNode = node.prev;  // \u524d\u4e00\u4e2a\u8282\u70b9\n        // \u521b\u5efa\u8981\u63d2\u5165\u7684\u8282\u70b9\n        BiLinkedListNode<E> insertNode = new BiLinkedListNode<>(element, preNode, node);\n      \n                 // \u5728\u6700\u5f00\u5934\u63d2\u5165 || \u540e\u4e00\u4e2a\u8282\u70b9\u4e3afirst || index==0 \u4e09\u9009\u4e00\u5373\u53ef\u524d\u4e00\u4e2a\u8282\u70b9\n        if (preNode == last) { \n            first = insertNode;\n        }\n\n        preNode.next = insertNode;\n        // \u540e\u4e00\u4e2a\u8282\u70b9\u7684prev\u6307\u5411\u8981\u63d2\u5165\u7684\u8282\u70b9\n        node.prev = insertNode;\n    }\n\n    size++;\n}\n")),Object(a.b)("h2",{id:"removeint-index-\u65b9\u6cd5"},"remove(int index) \u65b9\u6cd5"),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u8fb9\u754c\u60c5\u51b5")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("ul",{parentName:"div"},Object(a.b)("li",{parentName:"ul"},"\u5220\u9664\u7684\u662f\u5934\u8282\u70b9",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u539f\u5148first\u7684next\u53d8\u4e3a\u65b0\u7684first"),Object(a.b)("li",{parentName:"ul"},"\u65b0\u7684first\u7684prev\u4e3alast"),Object(a.b)("li",{parentName:"ul"},"last\u7684next\u53d8\u4e3a\u65b0first"))),Object(a.b)("li",{parentName:"ul"},"\u5220\u9664\u7684\u662f\u5c3e\u8282\u70b9",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u539flast\u7684prev\u53d8\u4e3a\u65b0last"),Object(a.b)("li",{parentName:"ul"},"\u65b0last\u7684next\u4e3afirst"),Object(a.b)("li",{parentName:"ul"},"first\u7684prev\u8bbe\u7f6e\u4e3a\u65b0\u7684last")))))),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"//  \u79fb\u9664index\u4f4d\u7f6e\u7684\u5143\u7d20\u5e76\u8fd4\u56de\npublic E remove(int index) {\n    BiLinkedListNode<E> node = node(index);\n    E removedElement = node.element;\n\n    if (size == 1) { // \u5220\u9664\u552f\u4e00\u8282\u70b9\n        first = null;\n        last = null;\n    } else if (node == first) { // \u5220\u9664\u7684\u662f\u5934\u7ed3\u70b9\n        first = node.next;\n    } else if (node == last) { // \u5220\u9664\u7684\u662f\u5c3e\u7ed3\u70b9\n        last = node.prev;\n    }\n\n    node.prev.next = node.next;\n    node.next.prev = node.prev;\n\n    size--;\n    return removedElement;\n}\n")))}o.isMDXComponent=!0},375:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),o=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=o(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=o(t),u=i,m=p["".concat(l,".").concat(u)]||p[u]||b[u]||a;return t?r.a.createElement(m,s(s({ref:n},c),{},{components:t})):r.a.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=u;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var c=2;c<a;c++)l[c]=t[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},686:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/7-ac0c5206bd78a672e7cf0b95ba676fa2.png"}}]);