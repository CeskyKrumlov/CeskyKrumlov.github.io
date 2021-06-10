(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{106:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(2),i=t(6),a=(t(0),t(511)),o={id:"linkedListUtils",title:"\u94fe\u8868\u5de5\u5177\u7c7b",hide_title:!0},c={unversionedId:"sf/\u94fe\u8868/linkedListUtils",id:"sf/\u94fe\u8868/linkedListUtils",isDocsHomePage:!1,title:"\u94fe\u8868\u5de5\u5177\u7c7b",description:"\u94fe\u8868\u5de5\u5177\u7c7b",source:"@site/datastructure/sf/\u94fe\u8868/\u5de5\u5177\u7c7b.md",slug:"/sf/\u94fe\u8868/linkedListUtils",permalink:"/datastructure/sf/\u94fe\u8868/linkedListUtils",version:"current",sidebar:"docs2",previous:{title:"\u94fe\u8868\u7684\u7b80\u5355\u5b9e\u73b0",permalink:"/datastructure/sf/\u94fe\u8868/1.linkedList"},next:{title:"\u865a\u62df\u5934\u8282\u70b9",permalink:"/datastructure/sf/\u94fe\u8868/vitrulHeadNode"}},l=[{value:"\u94fe\u8868\u5de5\u5177\u7c7b",id:"\u94fe\u8868\u5de5\u5177\u7c7b",children:[{value:"\u8282\u70b9",id:"\u8282\u70b9",children:[]},{value:"\u6253\u5370\u94fe\u8868",id:"\u6253\u5370\u94fe\u8868",children:[]}]}],u={rightToc:l};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"\u94fe\u8868\u5de5\u5177\u7c7b"},"\u94fe\u8868\u5de5\u5177\u7c7b"),Object(a.b)("h2",{id:"\u8282\u70b9"},"\u8282\u70b9"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"class ListNode {\n    int val;\n    ListNode next;\n\n    ListNode(int x) {\n        val = x;\n    }\n}\n")),Object(a.b)("h2",{id:"\u6253\u5370\u94fe\u8868"},"\u6253\u5370\u94fe\u8868"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class LinkedListUtils {\n    /**\n     * \u6253\u5370\u51fd\u6570\n     *\n     * @param node \u5934\u7ed3\u70b9\n     */\n    public static void print(ListNode node) {\n        StringBuilder stringBuilder = new StringBuilder();\n\n        while (node != null) {\n            stringBuilder.append(node.val).append(" -> ");\n            node = node.next;\n        }\n        stringBuilder.append("null");\n\n        System.out.println(stringBuilder.toString());\n    }\n}\n')))}s.isMDXComponent=!0},511:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),s=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=s(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},f=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=r,b=d["".concat(o,".").concat(f)]||d[f]||p[f]||a;return t?i.a.createElement(b,c(c({ref:n},u),{},{components:t})):i.a.createElement(b,c({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=t[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);