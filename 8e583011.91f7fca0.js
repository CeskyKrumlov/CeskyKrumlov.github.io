(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{343:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return o}));var r=n(2),a=n(6),i=(n(0),n(566)),l={id:"3.BiQueue",title:"\u53cc\u7aef\u961f\u5217",hide_title:!0},b={unversionedId:"sf/\u961f\u5217/3.BiQueue",id:"sf/\u961f\u5217/3.BiQueue",isDocsHomePage:!1,title:"\u53cc\u7aef\u961f\u5217",description:"\u53cc\u7aef\u961f\u5217Deque",source:"@site/datastructure/sf/\u961f\u5217/\u53cc\u7aef\u961f\u5217.md",slug:"/sf/\u961f\u5217/3.BiQueue",permalink:"/datastructure/sf/\u961f\u5217/3.BiQueue",version:"current",sidebar:"docs2",previous:{title:"\u961f\u5217\u7684\u5b9e\u73b0",permalink:"/datastructure/sf/\u961f\u5217/1.queue"},next:{title:"\u5faa\u73af\u961f\u5217",permalink:"/datastructure/sf/\u961f\u5217/4.cycleQueue"}},c=[{value:"\u53cc\u7aef\u961f\u5217Deque",id:"\u53cc\u7aef\u961f\u5217deque",children:[]},{value:"API",id:"api",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]}],u={rightToc:c};function o(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u53cc\u7aef\u961f\u5217deque"},"\u53cc\u7aef\u961f\u5217Deque"),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u53cc\u7aef\u961f\u5217\u662f\u80fd\u5728",Object(i.b)("inlineCode",{parentName:"strong"},"\u5934\u5c3e"),"\u4e24\u7aef\uff0c",Object(i.b)("inlineCode",{parentName:"strong"},"\u6dfb\u52a0"),"\u3001",Object(i.b)("inlineCode",{parentName:"strong"},"\u5220\u9664"),"\u7684\u961f\u5217")),Object(i.b)("li",{parentName:"ul"},"Double ended queue\u2014\u2014 \u7b80\u79f0Deque"))),Object(i.b)("h1",{id:"api"},"API"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u65b9\u6cd5"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u529f\u80fd"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"int size()")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u5143\u7d20\u7684\u6570\u91cf")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"boolean isEmpty()")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u662f\u5426\u4e3a\u7a7a")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"void enQueueRear(E element)")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u4ece\u961f\u5c3e\u5165\u961f")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"E deQueueFront()")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u4ece\u961f\u5934\u51fa\u961f")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"void enQueueFront(E element)")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u4ece\u961f\u5934\u5165\u961f")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"E dequeueRear()")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u4ece\u961f\u5c3e\u51fa\u961f")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"E front()")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u83b7\u53d6\u961f\u5217\u7684\u5934\u5143\u7d20")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"E rear()")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u83b7\u53d6\u961f\u5217\u7684\u5c3e\u5143\u7d20")))),Object(i.b)("h1",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"/**\n * \u53cc\u7aef\u961f\u5217\n */\npublic class MyDeque<E> {\n    private List<E> list = new LinkedList<>();\n\n    public int size() {\n        return list.size();\n    }\n\n    public void enQueueRear(E element) {\n        list.add(element);\n    }\n\n    public E deQueueFront() {\n        return list.remove(0);\n    }\n\n    public void enQueueFront(E element) {\n        list.add(0, element);\n    }\n\n    public E dequeueRear() {\n        return list.remove(list.size() - 1);\n    }\n\n    public E front() { // aka JDK peekFirst()\n        return list.get(0);\n    }\n\n    public E rear() { // aka JDK peekLast()\n        return list.get(list.size() - 1);\n    }\n\n    public void clear() {\n        list.clear();\n    }\n  \n    public boolean isEmpty() {\n        return list.isEmpty();\n    }\n}\n")))}o.isMDXComponent=!0},566:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),o=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=o(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=o(n),O=r,m=p["".concat(l,".").concat(O)]||p[O]||d[O]||i;return n?a.a.createElement(m,b(b({ref:t},u),{},{components:n})):a.a.createElement(m,b({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=O;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,l[1]=b;for(var u=2;u<i;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);