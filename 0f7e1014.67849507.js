(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{561:function(e,t,b){"use strict";b.d(t,"a",(function(){return m})),b.d(t,"b",(function(){return j}));var a=b(0),r=b.n(a);function n(e,t,b){return t in e?Object.defineProperty(e,t,{value:b,enumerable:!0,configurable:!0,writable:!0}):e[t]=b,e}function l(e,t){var b=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),b.push.apply(b,a)}return b}function c(e){for(var t=1;t<arguments.length;t++){var b=null!=arguments[t]?arguments[t]:{};t%2?l(Object(b),!0).forEach((function(t){n(e,t,b[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(b)):l(Object(b)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(b,t))}))}return e}function i(e,t){if(null==e)return{};var b,a,r=function(e,t){if(null==e)return{};var b,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)b=n[a],t.indexOf(b)>=0||(r[b]=e[b]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)b=n[a],t.indexOf(b)>=0||Object.prototype.propertyIsEnumerable.call(e,b)&&(r[b]=e[b])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),b=t;return e&&(b="function"==typeof e?e(t):c(c({},t),e)),b},m=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var b=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=u(b),O=a,j=m["".concat(l,".").concat(O)]||m[O]||p[O]||n;return b?r.a.createElement(j,c(c({ref:t},o),{},{components:b})):r.a.createElement(j,c({ref:t},o))}));function j(e,t){var b=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=b.length,l=new Array(n);l[0]=O;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<n;o++)l[o]=b[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,b)}O.displayName="MDXCreateElement"},93:function(e,t,b){"use strict";b.r(t),b.d(t,"frontMatter",(function(){return l})),b.d(t,"metadata",(function(){return c})),b.d(t,"rightToc",(function(){return i})),b.d(t,"default",(function(){return u}));var a=b(2),r=b(6),n=(b(0),b(561)),l={id:"1.rabbitmqInstall",title:"RabbitMQ \u5b89\u88c5",hide_title:!0},c={unversionedId:"\u6d88\u606f\u4e2d\u95f4\u4ef6/rabbitmq/1.rabbitmqInstall",id:"\u6d88\u606f\u4e2d\u95f4\u4ef6/rabbitmq/1.rabbitmqInstall",isDocsHomePage:!1,title:"RabbitMQ \u5b89\u88c5",description:"RabbitMQ \u5b89\u88c5",source:"@site/docs/\u6d88\u606f\u4e2d\u95f4\u4ef6/rabbitmq/rabbitmqInstall.md",slug:"/\u6d88\u606f\u4e2d\u95f4\u4ef6/rabbitmq/1.rabbitmqInstall",permalink:"/docs/\u6d88\u606f\u4e2d\u95f4\u4ef6/rabbitmq/1.rabbitmqInstall",version:"current",sidebar:"someSidebar",previous:{title:"RabbitMQ \u5f15\u8a00",permalink:"/docs/\u6d88\u606f\u4e2d\u95f4\u4ef6/rabbitmq/1.rabbitmq"},next:{title:"HelloWorld \u6a21\u578b",permalink:"/docs/\u6d88\u606f\u4e2d\u95f4\u4ef6/rabbitmq/2.helloworld"}},i=[{value:"RabbitMQ \u5b89\u88c5",id:"rabbitmq-\u5b89\u88c5",children:[]},{value:"MacOS \u5b89\u88c5",id:"macos-\u5b89\u88c5",children:[{value:"\u5b89\u88c5 homebrew",id:"\u5b89\u88c5-homebrew",children:[]},{value:"\u4e0b\u8f7d RabbitMQ",id:"\u4e0b\u8f7d-rabbitmq",children:[]},{value:"\u5b89\u88c5 RabbitMQ \u53ef\u89c6\u5316\u76d1\u63a7\u63d2\u4ef6",id:"\u5b89\u88c5-rabbitmq-\u53ef\u89c6\u5316\u76d1\u63a7\u63d2\u4ef6",children:[]},{value:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf",id:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf",children:[]},{value:"\u540e\u53f0\u542f\u52a8 RabbitMQ",id:"\u540e\u53f0\u542f\u52a8-rabbitmq",children:[]}]},{value:"Docker \u5b89\u88c5",id:"docker-\u5b89\u88c5",children:[]},{value:"\u53ef\u89c6\u5316\u76d1\u63a7\u754c\u9762",id:"\u53ef\u89c6\u5316\u76d1\u63a7\u754c\u9762",children:[]}],o={rightToc:i};function u(e){var t=e.components,b=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},o,b,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"rabbitmq-\u5b89\u88c5"},"RabbitMQ \u5b89\u88c5"),Object(n.b)("h1",{id:"macos-\u5b89\u88c5"},"MacOS \u5b89\u88c5"),Object(n.b)("h2",{id:"\u5b89\u88c5-homebrew"},"\u5b89\u88c5 homebrew"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("inlineCode",{parentName:"p"},"homebrew")," \u2014\u2014 Mac \u4e0a\u597d\u7528\u7684\u5305\u7ba1\u7406\u5de5\u5177"),Object(n.b)("ul",{parentName:"blockquote"},Object(n.b)("li",{parentName:"ul"},"\u600e\u4e48\u5b89\u88c5\uff1a\u5199\u5728 ",Object(n.b)("inlineCode",{parentName:"li"},"\u7b80\u4ecb"),"\u2014\u2014",Object(n.b)("inlineCode",{parentName:"li"},"\u5b9e\u7528\u5de5\u5177\u8f6f\u4ef6")," \u91cc"))),Object(n.b)("h2",{id:"\u4e0b\u8f7d-rabbitmq"},"\u4e0b\u8f7d RabbitMQ"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\u5148\u66f4\u65b0 homebrew\u8d44\u6e90")),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"brew update\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\u5b89\u88c5 RabbitMQ")),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"brew install rabbitmq\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5b89\u88c5\u76ee\u5f55\u4e3a ",Object(n.b)("inlineCode",{parentName:"li"},"/usr/local/Cellar/rabitmq"))),Object(n.b)("h2",{id:"\u5b89\u88c5-rabbitmq-\u53ef\u89c6\u5316\u76d1\u63a7\u63d2\u4ef6"},"\u5b89\u88c5 RabbitMQ \u53ef\u89c6\u5316\u76d1\u63a7\u63d2\u4ef6"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\u8fdb\u5165 RabbitMQ \u5b89\u88c5\u76ee\u5f55")),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd /usr/local/Cellar/rabbitmq/\u7248\u672c\u53f7\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\u542f\u7528 RabbitMQ Management \u63d2\u4ef6")),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo sbin/rabbitmq-plugins enable rabbitmq_management\n")),Object(n.b)("h2",{id:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf"},"\u914d\u7f6e\u73af\u5883\u53d8\u91cf"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo nano /etc/profile\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\u5728 ",Object(n.b)("inlineCode",{parentName:"li"},"/etc/profile")," \u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9")),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"export RABBIT_HOME=/usr/local/Cellar/rabbitmq/3.7.4\nexport PATH=$PATH:$RABBIT_HOME/sbin\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\u4f7f\u73af\u5883\u53d8\u91cf\u751f\u6548")),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"source /etc/profile\n")),Object(n.b)("h2",{id:"\u540e\u53f0\u542f\u52a8-rabbitmq"},"\u540e\u53f0\u542f\u52a8 RabbitMQ"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\u540e\u53f0\u542f\u52a8")),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"rabbitmq-server -detached\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\u67e5\u770b\u72b6\u6001")),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"rabbitmqctl status\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\u5173\u95ed RabbitMQ")),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"rabbitmqctl stop\n")),Object(n.b)("br",null),Object(n.b)("h1",{id:"docker-\u5b89\u88c5"},"Docker \u5b89\u88c5"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"\u5fc5\u987b\u5b89\u88c5 ",Object(n.b)("inlineCode",{parentName:"p"},"rabbitmq:management")," \u7248\u672c\u624d\u6709\u7ba1\u7406\u754c\u9762")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\u67e5\u8be2\u955c\u50cf")),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker search rabbitmq:management\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\u83b7\u53d6\u955c\u50cf")),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker pull rabbitmq:management\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\u8fd0\u884c\u955c\u50cf")),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker run -d -p 5672:5672 -p 15672:15672 --name rabbitmq rabbitmq:management\n")),Object(n.b)("br",null),Object(n.b)("h1",{id:"\u53ef\u89c6\u5316\u76d1\u63a7\u754c\u9762"},"\u53ef\u89c6\u5316\u76d1\u63a7\u754c\u9762"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"RabbitMQ \u53ef\u89c6\u5316\u76d1\u63a7\u754c\u9762\u7684\u4f7f\u7528"),Object(n.b)("ul",{parentName:"blockquote"},Object(n.b)("li",{parentName:"ul"},"\u8bbf\u95ee ",Object(n.b)("inlineCode",{parentName:"li"},"http://localhost:15672")),Object(n.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u8d26\u53f7\u5bc6\u7801\u4e3a ",Object(n.b)("inlineCode",{parentName:"li"},"guest")))))}u.isMDXComponent=!0}}]);