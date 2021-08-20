(window.webpackJsonp=window.webpackJsonp||[]).push([[368],{424:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return o}));var n=a(2),r=a(6),i=(a(0),a(566)),l={slug:"linuxTar",title:"tar\u6307\u4ee4\u7684\u7528\u6cd5",author:"Ban",author_title:"ChangAn University",author_url:"https://ceskykrumlov.gitee.io",author_image_url:"/img/avatar.jpg",tags:["java"]},b={permalink:"/blog/linuxTar",source:"@site/blog/2020-09-03-tar.md",description:"- -s \u8fd8\u539f\u6587\u4ef6\u7684\u987a\u5e8f\u548c\u5907\u4efd\u6587\u4ef6\u5185\u7684\u5b58\u653e\u987a\u5e8f\u76f8\u540c\u3002",date:"2020-09-03T00:00:00.000Z",tags:[{label:"java",permalink:"/blog/tags/java"}],title:"tar\u6307\u4ee4\u7684\u7528\u6cd5",readingTime:.985,truncated:!0,prevItem:{title:"Latex\u516c\u5f0f\u5728\u7ebf\u89e3\u6790",permalink:"/blog/latexMathOnline"},nextItem:{title:"Java\u4fee\u9970\u7b26",permalink:"/blog/javaPublicPrivateProtectedDefault"}},c=[{value:"tar",id:"tar",children:[{value:"\u538b\u7f29",id:"\u538b\u7f29",children:[]},{value:"\u89e3\u538b",id:"\u89e3\u538b",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}]}],p={rightToc:c};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-s")," \u8fd8\u539f\u6587\u4ef6\u7684\u987a\u5e8f\u548c\u5907\u4efd\u6587\u4ef6\u5185\u7684\u5b58\u653e\u987a\u5e8f\u76f8\u540c\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-t")," \u5217\u51fa\u5907\u4efd(\u538b\u7f29)\u6587\u4ef6\u7684\u5185\u5bb9\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-v"),"\u663e\u793a\u6307\u4ee4\u6267\u884c\u8fc7\u7a0b\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-f"),"\u6307\u5b9a\u538b\u7f29\u6587\u4ef6"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-x")," \u4ece\u5907\u4efd(\u538b\u7f29)\u6587\u4ef6\u4e2d\u8fd8\u539f\u6587\u4ef6\u3002")),Object(i.b)("h1",{id:"tar"},"tar"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"-c"),": \u5efa\u7acb\u538b\u7f29\u6863\u6848\n",Object(i.b)("inlineCode",{parentName:"p"},"-x"),"\uff1a\u89e3\u538b\n",Object(i.b)("inlineCode",{parentName:"p"},"-t"),"\uff1a\u67e5\u770b\u5185\u5bb9\n",Object(i.b)("inlineCode",{parentName:"p"},"-r"),"\uff1a\u5411\u538b\u7f29\u5f52\u6863\u6587\u4ef6\u672b\u5c3e\u8ffd\u52a0\u6587\u4ef6\n",Object(i.b)("inlineCode",{parentName:"p"},"-u"),"\uff1a\u66f4\u65b0\u539f\u538b\u7f29\u5305\u4e2d\u7684\u6587\u4ef6"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u8fd9\u4e94\u4e2a\u662f\u72ec\u7acb\u7684\u547d\u4ee4\uff0c\u538b\u7f29\u89e3\u538b\u90fd\u8981\u7528\u5230\u5176\u4e2d\u4e00\u4e2a\uff0c\u53ef\u4ee5\u548c\u522b\u7684\u547d\u4ee4\u8fde\u7528\u4f46\u53ea\u80fd\u7528\u5176\u4e2d\u4e00\u4e2a\u3002\u4e0b\u9762\u7684\u53c2\u6570\u662f\u6839\u636e\u9700\u8981\u5728\u538b\u7f29\u6216\u89e3\u538b\u6863\u6848\u65f6\u53ef\u9009\u7684\u3002"))),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"-z"),"\uff1a\u6709gzip\u5c5e\u6027\u7684\n",Object(i.b)("inlineCode",{parentName:"p"},"-j"),"\uff1a\u6709bz2\u5c5e\u6027\u7684\n",Object(i.b)("inlineCode",{parentName:"p"},"-Z"),"\uff1a\u6709compress\u5c5e\u6027\u7684\n",Object(i.b)("inlineCode",{parentName:"p"},"-v"),"\uff1a\u663e\u793a\u6240\u6709\u8fc7\u7a0b\n",Object(i.b)("inlineCode",{parentName:"p"},"-O"),"\uff1a\u5c06\u6587\u4ef6\u89e3\u5f00\u5230\u6807\u51c6\u8f93\u51fa"),Object(i.b)("hr",null),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u4e0b\u9762\u7684\u53c2\u6570-f\u662f\u5fc5\u987b\u7684"))),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"-f"),": \u4f7f\u7528\u6863\u6848\u540d\u5b57\uff0c\u5207\u8bb0\uff0c\u8fd9\u4e2a\u53c2\u6570\u662f\u6700\u540e\u4e00\u4e2a\u53c2\u6570\uff0c\u540e\u9762\u53ea\u80fd\u63a5\u6863\u6848\u540d\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"tar -cf all.tar *.jpg \n")),Object(i.b)("p",null,"\u8fd9\u6761\u547d\u4ee4\u662f\u5c06\u6240\u6709.jpg\u7684\u6587\u4ef6\u6253\u6210\u4e00\u4e2a\u540d\u4e3aall.tar\u7684\u5305\u3002-c\u662f\u8868\u793a\u4ea7\u751f\u65b0\u7684\u5305\uff0c-f\u6307\u5b9a\u5305\u7684\u6587\u4ef6\u540d\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"tar -rf all.tar *.gif \n")),Object(i.b)("p",null,"\u8fd9\u6761\u547d\u4ee4\u662f\u5c06\u6240\u6709.gif\u7684\u6587\u4ef6\u589e\u52a0\u5230all.tar\u7684\u5305\u91cc\u9762\u53bb\u3002-r\u662f\u8868\u793a\u589e\u52a0\u6587\u4ef6\u7684\u610f\u601d\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"tar -uf all.tar logo.gif \n")),Object(i.b)("p",null,"\u8fd9\u6761\u547d\u4ee4\u662f\u66f4\u65b0\u539f\u6765tar\u5305all.tar\u4e2dlogo.gif\u6587\u4ef6\uff0c-u\u662f\u8868\u793a\u66f4\u65b0\u6587\u4ef6\u7684\u610f\u601d\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"tar -tf all.tar \n")),Object(i.b)("p",null,"\u8fd9\u6761\u547d\u4ee4\u662f\u5217\u51faall.tar\u5305\u4e2d\u6240\u6709\u6587\u4ef6\uff0c-t\u662f\u5217\u51fa\u6587\u4ef6\u7684\u610f\u601d"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"tar -xf all.tar \n")),Object(i.b)("p",null,"\u8fd9\u6761\u547d\u4ee4\u662f\u89e3\u51faall.tar\u5305\u4e2d\u6240\u6709\u6587\u4ef6\uff0c-x\u662f\u89e3\u5f00\u7684\u610f\u601d"),Object(i.b)("h2",{id:"\u538b\u7f29"},"\u538b\u7f29"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tar \u2013cvf jpg.tar *.jpg")," \u5c06\u76ee\u5f55\u91cc\u6240\u6709jpg\u6587\u4ef6\u6253\u5305\u6210tar.jpg"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tar \u2013czf jpg.tar.gz *.jpg"),"  \u5c06\u76ee\u5f55\u91cc\u6240\u6709jpg\u6587\u4ef6\u6253\u5305\u6210jpg.tar\u540e\uff0c\u5e76\u4e14\u5c06\u5176\u7528gzip\u538b\u7f29\uff0c\u751f\u6210\u4e00\u4e2agzip\u538b\u7f29\u8fc7\u7684\u5305\uff0c\u547d\u540d\u4e3ajpg.tar.gz"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tar \u2013cjf jpg.tar.bz2 *.jpg")," \u5c06\u76ee\u5f55\u91cc\u6240\u6709jpg\u6587\u4ef6\u6253\u5305\u6210jpg.tar\u540e\uff0c\u5e76\u4e14\u5c06\u5176\u7528bzip2\u538b\u7f29\uff0c\u751f\u6210\u4e00\u4e2abzip2\u538b\u7f29\u8fc7\u7684\u5305\uff0c\u547d\u540d\u4e3ajpg.tar.bz2"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tar \u2013cZf jpg.tar.Z *.jpg")," \u5c06\u76ee\u5f55\u91cc\u6240\u6709jpg\u6587\u4ef6\u6253\u5305\u6210jpg.tar\u540e\uff0c\u5e76\u4e14\u5c06\u5176\u7528compress\u538b\u7f29\uff0c\u751f\u6210\u4e00\u4e2aumcompress\u538b\u7f29\u8fc7\u7684\u5305\uff0c\u547d\u540d\u4e3ajpg.tar.Z"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"rar a jpg.rar *.jpg")," rar\u683c\u5f0f\u7684\u538b\u7f29\uff0c\u9700\u8981\u5148\u4e0b\u8f7drar for linux"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"zip jpg.zip *.jpg"),"  zip\u683c\u5f0f\u7684\u538b\u7f29\uff0c\u9700\u8981\u5148\u4e0b\u8f7dzip for linux ")),Object(i.b)("h2",{id:"\u89e3\u538b"},"\u89e3\u538b"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tar \u2013xvf file.tar")," \u89e3\u538b tar\u5305"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tar -xzvf file.tar.gz")," \u89e3\u538btar.gz"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tar -xjvf file.tar.bz2"),"  \u89e3\u538b tar.bz2"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tar \u2013xZvf file.tar.Z"),"  \u89e3\u538btar.Z"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"unrar e file.rar")," \u89e3\u538brar"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"unzip file.zip")," \u89e3\u538bzip")),Object(i.b)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ol",{parentName:"div"},Object(i.b)("li",{parentName:"ol"},"*.tar \u7528 tar \u2013xvf \u89e3\u538b"),Object(i.b)("li",{parentName:"ol"},"*.gz \u7528 gzip -d\u6216\u8005gunzip \u89e3\u538b"),Object(i.b)("li",{parentName:"ol"},"*",".tar.gz\u548c*.tgz \u7528 tar \u2013xzf \u89e3\u538b"),Object(i.b)("li",{parentName:"ol"},"*.bz2 \u7528 bzip2 -d\u6216\u8005\u7528bunzip2 \u89e3\u538b"),Object(i.b)("li",{parentName:"ol"},"*.tar.bz2\u7528tar \u2013xjf \u89e3\u538b"),Object(i.b)("li",{parentName:"ol"},"*.Z \u7528 uncompress \u89e3\u538b"),Object(i.b)("li",{parentName:"ol"},"*.tar.Z \u7528tar \u2013xZf \u89e3\u538b"),Object(i.b)("li",{parentName:"ol"},"*.rar \u7528 unrar e\u89e3\u538b"),Object(i.b)("li",{parentName:"ol"},"*.zip \u7528 unzip \u89e3\u538b")))))}o.isMDXComponent=!0},566:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},j=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),j=o(a),O=n,u=j["".concat(l,".").concat(O)]||j[O]||m[O]||i;return a?r.a.createElement(u,b(b({ref:t},p),{},{components:a})):r.a.createElement(u,b({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=O;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var p=2;p<i;p++)l[p]=a[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);