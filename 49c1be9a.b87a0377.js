(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{202:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return s}));var r=t(2),i=t(6),a=(t(0),t(565)),l={id:"3.singleCycleLinkedList",title:"\u5355\u5411\u5faa\u73af\u94fe\u8868",hide_title:!0},c={unversionedId:"sf/\u94fe\u8868/3.singleCycleLinkedList",id:"sf/\u94fe\u8868/3.singleCycleLinkedList",isDocsHomePage:!1,title:"\u5355\u5411\u5faa\u73af\u94fe\u8868",description:"\u5355\u5411\u5faa\u73af\u94fe\u8868",source:"@site/datastructure/sf/\u94fe\u8868/3.\u5355\u5411\u5faa\u73af\u94fe\u8868.md",slug:"/sf/\u94fe\u8868/3.singleCycleLinkedList",permalink:"/datastructure/sf/\u94fe\u8868/3.singleCycleLinkedList",version:"current",sidebar:"docs2",previous:{title:"\u53cc\u5411\u94fe\u8868\u5b9e\u73b0",permalink:"/datastructure/sf/\u94fe\u8868/2.biLinkedList"},next:{title:"\u53cc\u5411\u5faa\u73af\u94fe\u8868",permalink:"/datastructure/sf/\u94fe\u8868/4.BiCycleLinkedList"}},o=[{value:"\u5355\u5411\u5faa\u73af\u94fe\u8868",id:"\u5355\u5411\u5faa\u73af\u94fe\u8868",children:[{value:"\u8282\u70b9toString\u65b9\u6cd5",id:"\u8282\u70b9tostring\u65b9\u6cd5",children:[]},{value:"\u5355\u5411\u5faa\u73af\u94fe\u8868toString\u65b9\u6cd5",id:"\u5355\u5411\u5faa\u73af\u94fe\u8868tostring\u65b9\u6cd5",children:[]},{value:"add(int index, E element\u65b9\u6cd5)",id:"addint-index-e-element\u65b9\u6cd5",children:[]},{value:"remove(int index)\u65b9\u6cd5",id:"removeint-index\u65b9\u6cd5",children:[]}]}],d={rightToc:o};function s(e){var n=e.components,l=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,l,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"\u5355\u5411\u5faa\u73af\u94fe\u8868"},"\u5355\u5411\u5faa\u73af\u94fe\u8868"),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u5b9a\u4e49")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("ul",{parentName:"div"},Object(a.b)("li",{parentName:"ul"},"\u5355\u5411\u94fe\u8868"),Object(a.b)("li",{parentName:"ul"},"\u6700\u540e\u4e00\u4e2a\u8282\u70b9\u7684next\u6307\u5411\u5934\u8282\u70b9first")))),Object(a.b)("p",null,Object(a.b)("img",{alt:"image-20200917124546364",src:t(787).default})),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"\u4e0e\u5355\u9879\u94fe\u8868\u5bf9\u6bd4")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"\u9700\u8981\u4fee\u6539\uff1a"),Object(a.b)("ul",{parentName:"div"},Object(a.b)("li",{parentName:"ul"},"\u6dfb\u52a0\u65b9\u6cd5"),Object(a.b)("li",{parentName:"ul"},"\u5220\u9664\u65b9\u6cd5")))),Object(a.b)("h2",{id:"\u8282\u70b9tostring\u65b9\u6cd5"},"\u8282\u70b9toString\u65b9\u6cd5"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Override\npublic String toString() {\n    StringBuilder stringBuilder = new StringBuilder();\n\n    stringBuilder.append("[").append(element).append("]");\n\n    if (next == null) {\n        stringBuilder.append("[null]");\n    } else {\n        stringBuilder.append("[").append(next.element).append("]");\n    }\n\n    return stringBuilder.toString();\n}\n')),Object(a.b)("h2",{id:"\u5355\u5411\u5faa\u73af\u94fe\u8868tostring\u65b9\u6cd5"},"\u5355\u5411\u5faa\u73af\u94fe\u8868toString\u65b9\u6cd5"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Override\npublic String toString() {\n    StringBuilder stringBuilder = new StringBuilder();\n    stringBuilder.append("SingleCycleLinkedList{" + "size=")\n            .append(size)\n            .append(" | { ");\n\n    if (size == 0) {\n        stringBuilder.append("null}");\n        return stringBuilder.toString();\n    } else {\n        LinkedListNode<E> node = this.first;\n\n        for (int i = 0; i < size - 1; i++) {\n            stringBuilder.append(node).append(" -> ");\n            node = node.next;\n        }\n        stringBuilder.append(node).append(" }");\n    }\n\n    return stringBuilder.toString();\n}\n')),Object(a.b)("h2",{id:"addint-index-e-element\u65b9\u6cd5"},"add(int index, E element\u65b9\u6cd5)"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"\u5728\u5934\u90e8\u63d2\u5165\u7684\u60c5\u51b5")),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"\u8bb0\u5f55\u5f53\u524dfirst\u8282\u70b9\u7684element\u503c"),Object(a.b)("li",{parentName:"ul"},"\u7528\u8981\u63d2\u5165\u7684\u8282\u70b9\u7684element\u503c\uff0c\u66ff\u6362\u5f53\u524dfirst\u8282\u70b9\u7684element\u503c"),Object(a.b)("li",{parentName:"ul"},"\u5efa\u7acb\u65b0\u8282\u70b9\uff0c\u503c\u4e3a\u539f\u5148first\u7684\u503c\uff0cnext\u4e3a\u539f\u5148first\u7684next"),Object(a.b)("li",{parentName:"ul"},"first\u7684next\u6307\u5411\u65b0\u8282\u70b9")),Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"\u6574\u4e2a\u5355\u5411\u5faa\u73af\u94fe\u8868\u53ea\u6709\u4e00\u4e2a\u8282\u70b9")),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"\u8fd9\u4e2a\u8282\u70b9\u7684next\u6307\u5411\u81ea\u5df1"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"//  \u5411index\u4f4d\u7f6e\u63d2\u5165\u4e00\u4e2a\u5143\u7d20\npublic void add(int index, E element) {\n    rangeCheckForAdd(index);\n    LinkedListNode<E> insertNode;\n\n    if (index == 0) { // \u5728\u5934\u90e8\u63d2\u5165\n        if (size == 0) { // \u7a7a\u94fe\u8868\uff0c\u63d2\u8fdb\u53bb\u552f\u4e00\u8282\u70b9\uff0c\u81ea\u5df1\u6307\u5411\u81ea\u5df1\n            insertNode = new LinkedListNode<>(element, null);\n            insertNode.next = insertNode;\n            first = insertNode;\n        } else {\n            E firstElement = first.element; // \u8bb0\u5f55\u5f53\u524dfirst\u7684\u503c\n            first.element = element; // \u7528\u8981\u63d2\u5165\u7684\u8282\u70b9\u7684element\u503c\uff0c\u66ff\u6362\u5f53\u524dfirst\u7684element\u503c\n            // \u5efa\u7acb\u65b0\u8282\u70b9\uff0c\u503c\u4e3a\u539f\u5148first\u7684\u503c\uff0cnext\u4e3a\u539f\u5148first\u7684next\n            insertNode = new LinkedListNode<>(firstElement, first.next);\n            first.next = insertNode;\n        }\n    } else {\n        LinkedListNode<E> preNode = node(index - 1);\n        preNode.next = new LinkedListNode<>(element, preNode.next);\n    }\n\n    size++;\n}\n")),Object(a.b)("h2",{id:"removeint-index\u65b9\u6cd5"},"remove(int index)\u65b9\u6cd5"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u8fb9\u754c\u60c5\u51b5\uff0c\u5728\u5934\u90e8\u5220\u9664"),Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"\u91c7\u7528\u79fb\u5f62\u6362\u4f4d\u7684\u601d\u60f3\uff0c\u76f4\u63a5\u7528\u4e0b\u4e00\u4e2a\u7684\u503c\u628a\u8981\u5220\u9664\u7684\u8282\u70b9\u7684\u503c\u6362\u4e86")),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"\u628afirst\u7684next\u7684\u503c\u590d\u5236\u5230first\u6765"),Object(a.b)("li",{parentName:"ul"},"\u8ba9first\u7684next\u6307\u5411first.next\u7684next"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"//  \u79fb\u9664index\u4f4d\u7f6e\u7684\u5143\u7d20\u5e76\u8fd4\u56de\npublic E remove(int index) {\n    E removedElement = null;\n\n    if (index == 0) { // \u5934\u90e8\u5220\u9664\n        removedElement = first.element; // \u8bb0\u5f55\u88ab\u5220\u9664\u7684\u503c\n        first.element = first.next.element; // \u628afirst\u7684next\u7684\u503c\u590d\u5236\u5230first\u4e0a\n        first.next = first.next.next; // \u8ba9first\u7684next\u6307\u5411first\u7684next\u7684next\n    } else {\n        LinkedListNode<E> preNode = node(index - 1);\n        removedElement = preNode.next.element;\n        preNode.next = preNode.next.next;\n    }\n\n    size--;\n    return removedElement;\n}\n")))}s.isMDXComponent=!0},565:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=i.a.createContext({}),s=function(e){var n=i.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=s(e.components);return i.a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),b=s(t),u=r,m=b["".concat(l,".").concat(u)]||b[u]||p[u]||a;return t?i.a.createElement(m,c(c({ref:n},d),{},{components:t})):i.a.createElement(m,c({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=u;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var d=2;d<a;d++)l[d]=t[d];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},787:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/6-6383dc51f3bb60b7819d72073bc96adf.png"}}]);