(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{244:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),o=(t(0),t(375)),i={slug:"leetcodeLinked",title:"LeetCode\u94fe\u8868",author:"Ban",author_title:"ChangAn University",author_url:"https://ceskykrumlov.gitee.io",author_image_url:"/img/avatar.jpg",tags:["\u7b97\u6cd5","\u6570\u636e\u7ed3\u6784"]},c={permalink:"/blog/leetcodeLinked",source:"@site/blog/2020-03-06-\u94fe\u8868.md",description:"\u94fe\u8868",date:"2020-03-06T00:00:00.000Z",tags:[{label:"\u7b97\u6cd5",permalink:"/blog/tags/\u7b97\u6cd5"},{label:"\u6570\u636e\u7ed3\u6784",permalink:"/blog/tags/\u6570\u636e\u7ed3\u6784"}],title:"LeetCode\u94fe\u8868",readingTime:14.22,truncated:!0,prevItem:{title:"LeetCode\u6808\u3001\u961f\u5217\u4e0e\u5806",permalink:"/blog/leetCodeQueue"},nextItem:{title:"Ubuntu1804_CUDA10.0_Cudnn7.6.3\u6df1\u5ea6\u5b66\u4e60\u73af\u5883\u642d\u5efa",permalink:"/blog/deeplearningEnv"}},l=[{value:"\u94fe\u8868",id:"\u94fe\u8868",children:[{value:"\u94fe\u8868\u57fa\u7840",id:"\u94fe\u8868\u57fa\u7840",children:[]}]}],u={rightToc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\u94fe\u8868"},"\u94fe\u8868"),Object(o.b)("h2",{id:"\u94fe\u8868\u57fa\u7840"},"\u94fe\u8868\u57fa\u7840"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c++"}),'/*\n        \u94fe\u8868\u57fa\u7840\n\n*/\n\nstruct ListNode\n{\n    int value;\n    ListNode *next;\n};\n\nint main()\n{\n    ListNode a;\n    ListNode b;\n    ListNode c;\n    ListNode d;\n    ListNode e;\n\n    a.value = 10;\n    b.value = 20;\n    c.value = 30;\n    d.value = 40;\n    e.value = 50;\n\n    a.next = &b;\n    b.next = &c;\n    c.next = &d;\n    d.next = &e;\n    e.next = NULL;\n\n    ListNode *head = &a;\n\n    while (head)\n    {\n        printf("%d", head->value);\n        head = head->next;\n    }\n\n    system("pause");\n    return 0;\n}\n')))}p.isMDXComponent=!0},375:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=p(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),b=r,f=d["".concat(i,".").concat(b)]||d[b]||s[b]||o;return t?a.a.createElement(f,c(c({ref:n},u),{},{components:t})):a.a.createElement(f,c({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);