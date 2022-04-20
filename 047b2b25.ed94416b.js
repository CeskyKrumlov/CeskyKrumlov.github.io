(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{576:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(576)),i={id:"3.native",title:"Native",hide_title:!0},c={unversionedId:"jvm/3.native",id:"jvm/3.native",isDocsHomePage:!1,title:"Native",description:"Native\u5173\u952e\u5b57",source:"@site/docs/jvm/3.Native.md",slug:"/jvm/3.native",permalink:"/docs/jvm/3.native",version:"current",sidebar:"someSidebar",previous:{title:"\u7c7b\u52a0\u8f7d\u5668",permalink:"/docs/jvm/2.classloader"},next:{title:"\u7a0b\u5e8f\u8ba1\u6570\u5668|\u65b9\u6cd5\u533a",permalink:"/docs/jvm/4.methodArea"}},l=[{value:"Native\u5173\u952e\u5b57",id:"native\u5173\u952e\u5b57",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"native\u5173\u952e\u5b57"},"Native\u5173\u952e\u5b57"),Object(o.b)("p",null,"\u65b0\u5efa\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u8fdb\u5165start()\u65b9\u6cd5\u7684\u6e90\u7801"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class Demo01 {\n    public static void main(String[] args) {\n        new Thread(()->{\n            \n        },"my thread name").start();\n    }\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public synchronized void start() {\n  /**\n         * This method is not invoked for the main method thread or "system"\n         * group threads created/set up by the VM. Any new functionality added\n         * to this method in the future may have to also be added to the VM.\n         *\n         * A zero status value corresponds to state "NEW".\n         */\n  if (threadStatus != 0)\n    throw new IllegalThreadStateException();\n\n  /* Notify the group that this thread is about to be started\n         * so that it can be added to the group\'s list of threads\n         * and the group\'s unstarted count can be decremented. */\n  group.add(this);\n\n  boolean started = false;\n  try {\n    start0();\n    started = true;\n  } finally {\n    try {\n      if (!started) {\n        group.threadStartFailed(this);\n      }\n    } catch (Throwable ignore) {\n      /* do nothing. If start0 threw a Throwable then\n                  it will be passed up the call stack */\n    }\n  }\n}\n\nprivate native void start0(); // \u4e00\u4e2a\u7528native\u4fee\u9970\u7684\u65b9\u6cd5\uff0c\u50cf\u4e2a\u63a5\u53e3\u65b9\u6cd5\u4e00\u6837\uff0c\u5f88\u8be1\u5f02\n')),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"\u6ce8\u610f")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u51e1\u662f\u5e26\u4e86native\u5173\u952e\u5b57\u7684\uff0c\u8868\u793aJava\u7684\u4f5c\u7528\u8303\u56f4\u65e0\u6cd5\u5230\u8fbe\uff0c\u53bb\u8c03\u7528\u5e95\u5c42C\u8bed\u8a00\u7684\u5e93"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"JNI Java Native Interface Java\u672c\u5730\u65b9\u6cd5\u63a5\u53e3"))),Object(o.b)("p",null,"\u51e1\u662f\u5e26\u4e86",Object(o.b)("inlineCode",{parentName:"p"},"native"),"\u5173\u952e\u5b57\u7684\u65b9\u6cd5\uff0c\u90fd\u4f1a\u8fdb\u5165",Object(o.b)("strong",{parentName:"p"},"\u672c\u5730\u65b9\u6cd5\u6808")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Native Method Stack \u672c\u5730\u65b9\u6cd5\u6808"))),Object(o.b)("p",null,"\u672c\u5730\u63a5\u53e3\u7684\u4f5c\u7528\u662f\u878d\u5408\u4e0d\u540c\u7684\u7f16\u7a0b\u8bed\u8a00\u4e3aJava\u6240\u7528\uff0c\u5b83\u7684\u521d\u8877\u662f\u878d\u5408C/C++\u7a0b\u5e8f\uff0cJava\u5728\u8bde\u751f\u7684\u65f6\u5019\u8fd8\u662fC/C++\u6a2a\u884c\u7684\u65f6\u4ee3\uff0c\u60f3\u8981\u7acb\u8db3\uff0c\u5fc5\u987b\u6709\u8c03\u7528C/C++\u7a0b\u5e8f\u7684\u80fd\u529b\uff0c\u4e8e\u662f\u5c31\u5728\u5185\u5b58\u4e2d\u4e13\u95e8\u5f00\u8f9f\u4e86\u4e00\u5757\u533a\u57df\u5904\u7406\u6807\u8bb0\u4e3a",Object(o.b)("inlineCode",{parentName:"p"},"native"),"\u7684\u4ee3\u7801\u3002"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u4ed6\u7684\u5177\u4f53\u505a\u6cd5\u662f\uff0c\u5728Native Method Stack\u4e2d\u767b\u8bb0native\u65b9\u6cd5\uff0c\u5728\u6267\u884c\u5f15\u64ceExecution Engine\u6267\u884c\u7684\u65f6\u5019\u52a0\u8f7dNative Libraries")),Object(o.b)("p",null,"\u76ee\u524d\u8be5\u65b9\u6cd5\u4f7f\u7528\u7684\u8d8a\u6765\u8d8a\u5c11\u4e86\uff0c\u9664\u975e\u662f\u4e0e\u786c\u4ef6\u6709\u5173\u7684\u5e94\u7528\uff0c\u6bd4\u5982\u901a\u8fc7Java\u7a0b\u5e8f\u9a71\u52a8\u6253\u5370\u673a\u6216\u8005Java\u7cfb\u7edf\u7ba1\u7406\u751f\u4ea7\u8bbe\u5907\uff0c\u5728\u4f01\u4e1a\u7ea7\u5e94\u7528\u4e2d\u5df2\u7ecf\u6bd4\u8f83\u5c11\u89c1"))}p.isMDXComponent=!0}}]);