(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{300:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(2),i=n(6),a=(n(0),n(389)),c={id:"13.flyWeight",title:"\u4eab\u5143\u6a21\u5f0f",hide_title:!0},l={unversionedId:"designPattern/13.flyWeight",id:"designPattern/13.flyWeight",isDocsHomePage:!1,title:"\u4eab\u5143\u6a21\u5f0f",description:"\u4eab\u5143\u6a21\u5f0f\u2014\u2014 FlyWeight",source:"@site/datastructure/designPattern/13.\u4eab\u5143\u6a21\u5f0f.md",slug:"/designPattern/13.flyWeight",permalink:"/datastructure/designPattern/13.flyWeight",version:"current",sidebar:"docs2",previous:{title:"\u5916\u89c2\u6a21\u5f0f",permalink:"/datastructure/designPattern/12.facade"},next:{title:"\u547d\u4ee4\u6a21\u5f0f",permalink:"/datastructure/designPattern/14.command"}},o=[{value:"\u4eab\u5143\u6a21\u5f0f\u2014\u2014 FlyWeight",id:"\u4eab\u5143\u6a21\u5f0f-flyweight",children:[]},{value:"\u6e90\u53d1\u95ee\u9898",id:"\u6e90\u53d1\u95ee\u9898",children:[]},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",children:[]},{value:"UML\u7c7b\u56fe",id:"uml\u7c7b\u56fe",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u4f18\u7f3a\u70b9",id:"\u4f18\u7f3a\u70b9",children:[]}],u={rightToc:o};function p(e){var t=e.components,c=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"\u4eab\u5143\u6a21\u5f0f-flyweight"},"\u4eab\u5143\u6a21\u5f0f\u2014\u2014 FlyWeight"),Object(a.b)("h1",{id:"\u6e90\u53d1\u95ee\u9898"},"\u6e90\u53d1\u95ee\u9898"),Object(a.b)("p",null,"\u4e00\u4e2a\u7cfb\u7edf\u51fa\u73b0\u5927\u91cf\u7ec6\u7c92\u5ea6\u5bf9\u8c61\uff0c\u8fd9\u4e9b\u7ec6\u7c92\u5ea6\u5bf9\u8c61\u4f1a\u9020\u6210\u7cfb\u7edf\u5185\u5b58\u5f00\u9500\u7684\u6d6a\u8d39\u548c\u5bf9\u8c61\u7ef4\u62a4\u7684\u56f0\u96be"),Object(a.b)("h1",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),Object(a.b)("p",null,"\u5927\u91cf\u7ec6\u7c92\u5ea6\u5bf9\u8c61\u7684\u72b6\u6001\u90fd\u542b\u6709\u53ef\u53d8\u7684\u5916\u90e8\u72b6\u6001\uff0c\u5982\u679c\u5220\u9664\u8fd9\u4e9b\u5916\u90e8\u72b6\u6001\uff0c\u7cfb\u7edf\u4e2d\u7684\u5bf9\u8c61\u6570\u91cf\u5c31\u4f1a\u53d8\u5f97\u5f88\u5c11\u3002\u7528\u76f8\u5bf9\u8f83\u5c11\u7684\u5171\u4eab\u5bf9\u8c61\u548c\u5916\u90e8\u72b6\u6001\u5bf9\u8c61\u7684\u7ec4\u5408\u6765\u53d6\u4ee3\u5927\u91cf\u7684\u7ec6\u7c92\u5ea6\u5bf9\u8c61\u5c31\u662f\u4eab\u5143\u6a21\u5f0f\u7684\u57fa\u672c\u601d\u60f3\uff0c\u8fd9\u91cc\u7684\u5171\u4eab\u5bf9\u8c61\u5c31\u662f\u4eab\u5143\u3002\u4f8b\u598226\u4e2a\u5b57\u6bcd\u53ef\u4ee5\u770b\u6210\u5185\u90e8\u72b6\u6001\uff0c\u800c\u5b57\u6bcd\u6240\u5728\u7684\u884c\u5217\u3001\u5b57\u4f53\u5927\u5c0f\u3001\u989c\u8272\u53ef\u4ee5\u770b\u6210\u5916\u90e8\u72b6\u6001\u3002"),Object(a.b)("p",null,"\u4eab\u5143\u6a21\u5f0f\u80fd\u505a\u5230\u5171\u4eab\u7684\u5173\u952e\u662f\u533a\u5206\u5185\u90e8\u72b6\u6001\u548c\u5916\u90e8\u72b6\u6001"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u5185\u90e8\u72b6\u6001\u5b58\u50a8\u5728\u4eab\u5143\u5185\uff0c\u4e0d\u4f1a\u968f\u73af\u5883\u7684\u6539\u53d8\u800c\u6539\u53d8"),Object(a.b)("li",{parentName:"ul"},"\u5916\u90e8\u72b6\u6001\u662f\u968f\u73af\u5883\u7684\u6539\u53d8\u800c\u6539\u53d8\u7684\uff0c\u5916\u90e8\u72b6\u6001\u4e0d\u80fd\u5f71\u54cd\u5185\u90e8\u72b6\u6001\uff0c\u5b83\u4eec\u662f\u76f8\u4e92\u72ec\u7acb\u7684\u3002")),Object(a.b)("h1",{id:"uml\u7c7b\u56fe"},"UML\u7c7b\u56fe"),Object(a.b)("p",null,Object(a.b)("img",{alt:"image-20200421212326493",src:n(734).default})),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"FlyweightFactory"),"\u4eab\u5143\u5de5\u5382\u53ef\u4ee5\u770b\u4f5c\u662f\u4e00\u4e2a",Object(a.b)("strong",{parentName:"p"},"\u6c60\u5b50"),"\uff0c\u5185\u90e8\u5171\u4eab\u5bf9\u8c61\u548c\u5916\u90e8\u5bf9\u8c61\u90fd\u662f\u7531\u62bd\u8c61\u7c7b",Object(a.b)("inlineCode",{parentName:"p"},"Flyweight"),"\u6d3e\u751f\u7684\uff0c\u6c60\u5b50\u91cc\u653e\u4e86\u4e00\u5806",Object(a.b)("inlineCode",{parentName:"p"},"Flyweight"),"\uff0c\u5ba2\u6237\u7aef\u53ef\u4ee5\u81ea\u7531\u7684\u5bf9\u5b83\u4eec\u8fdb\u884c\u7ec4\u5408"),Object(a.b)("p",null,"\u4eab\u5143\u6a21\u5f0f\u76f8\u6bd4\u88c5\u9970\u6a21\u5f0f\uff0c\u53ef\u4ee5\u5904\u7406\u66f4\u5927\u89c4\u6a21\u7684\u5bf9\u8c61\u6fc0\u589e\u73b0\u8c61"),Object(a.b)("h1",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(a.b)("h1",{id:"\u4f18\u7f3a\u70b9"},"\u4f18\u7f3a\u70b9"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u4f18\u70b9\n\u53ef\u5927\u5927\u964d\u4f4e\u5185\u5b58\u4e2d\u5bf9\u8c61\u7684\u6570\u91cf\uff0c\u6216\u8005\u5728\u4e0d\u964d\u4f4e\u5bf9\u8c61\u6570\u91cf\u7684\u524d\u63d0\u4e0b\u964d\u4f4e\u5185\u5b58\u7684\u5360\u7528\n\u5916\u90e8\u72b6\u6001\u53ef\u4ee5\u5b58\u50a8\u4e5f\u53ef\u4ee5\u8ba1\u7b97\uff0c\u5982\u679c\u91c7\u7528\u8ba1\u7b97\u7684\u65b9\u5f0f\uff0c\u5bf9\u5185\u5b58\u7684\u8282\u7ea6\u6548\u679c\u66f4\u597d"),Object(a.b)("li",{parentName:"ul"},"\u7f3a\u70b9\n\u6a21\u5f0f\u5141\u8bb8\u5ba2\u6237\u7aef\u76f4\u63a5\u5bf9\u5177\u4f53\u7c7b\u8fdb\u884c\u7f16\u7a0b\uff0c\u8fd9\u4e0e\u5f00\u95ed\u539f\u5219\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u76f8\u6096")))}p.isMDXComponent=!0},389:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),b=p(n),s=r,f=b["".concat(c,".").concat(s)]||b[s]||d[s]||a;return n?i.a.createElement(f,l(l({ref:t},u),{},{components:n})):i.a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var u=2;u<a;u++)c[u]=n[u];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},734:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/18-e5cdab137903f348cadb9ea41d285791.png"}}]);