(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{259:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),c=(n(0),n(375)),i={id:"2.ioc",title:"IoC\u63a7\u5236\u7ffb\u8f6c"},o={unversionedId:"spring/2.ioc",id:"spring/2.ioc",isDocsHomePage:!1,title:"IoC\u63a7\u5236\u7ffb\u8f6c",description:"2. IoC\u63a7\u5236\u53cd\u8f6c",source:"@site/docs/spring/2.IoC\u63a7\u5236\u53cd\u8f6c.md",slug:"/spring/2.ioc",permalink:"/docs/spring/2.ioc",version:"current",sidebar:"someSidebar",previous:{title:"Spring\u7b80\u4ecb",permalink:"/docs/spring/1.spring"},next:{title:"Hello Spring",permalink:"/docs/spring/3.helloSpring"}},b=[{value:"2. IoC\u63a7\u5236\u53cd\u8f6c",id:"2-ioc\u63a7\u5236\u53cd\u8f6c",children:[{value:"2.1 IoC\u7406\u8bba\u63a8\u5bfc",id:"21-ioc\u7406\u8bba\u63a8\u5bfc",children:[]},{value:"2.2 IoC\u7684\u672c\u8d28",id:"22-ioc\u7684\u672c\u8d28",children:[]}]}],p={rightToc:b};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"2-ioc\u63a7\u5236\u53cd\u8f6c"},"2. IoC\u63a7\u5236\u53cd\u8f6c"),Object(c.b)("h2",{id:"21-ioc\u7406\u8bba\u63a8\u5bfc"},"2.1 IoC\u7406\u8bba\u63a8\u5bfc"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u539f\u601d\u8def\uff1a"),Object(c.b)("ol",{parentName:"li"},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"UserDao\u63a5\u53e3"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public interface UserDao {\n    void getUser();\n}\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"UserDaoImpl\u5b9e\u73b0\u7c7b"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class UserDaoImpl implements UserDao {\n    public void getUser() {\n        System.out.println("\u9ed8\u8ba4\u83b7\u53d6\u7528\u6237\u7684\u6570\u636e");\n    }\n}\n'))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"UserService\u4e1a\u52a1\u63a5\u53e3"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public interface UserService {\n    void getUser();\n}\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"UserServiceImpl\u4e1a\u52a1\u5b9e\u73b0\u7c7b"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public class UserServiceImpl implements UserService {\n\n    //\u7ec4\u5408\n    private UserDao userDao = new UserDaoImpl();\n\n    public void getUser() {\n        userDao.getUser();\n    }\n}\n")))))),Object(c.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u5f53\u6765\u4e86\u65b0\u9700\u6c42\uff0c\u5199\u4e86\u65b0\u7684dao\u5c42impl\u7c7b\uff0c\u5728Service\u5c42\u7ec4\u5408\u90e8\u5206\uff0c\u5fc5\u987bnew\u65b0\u7684dao\u5c42impl\u7c7b"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u5fc5\u987b\u4fee\u6539\u539f\u6709\u4ee3\u7801\uff0c\u6ca1\u6709\u505a\u5230\u5bf9\u4fee\u6539\u5173\u95ed\uff0c\u5bf9\u6269\u5c55\u5f00\u653e\uff08\u5f00\u95ed\u539f\u5219\uff09")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5229\u7528\u63a5\u53e3\u591a\u6001\u6027\u89e3\u51b3\uff1a")),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"\u65b0UserDao\u5b9e\u73b0\u7c7b"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class UserDaoMysqlImpl implements  UserDao{\n\n    public void getUser() {\n        System.out.println("mysql\u83b7\u53d6\u7528\u6237\u6570\u636e");\n    }\n}\n'))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"\u4fee\u6539UserServiceImpl")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public class UserServiceImpl implements UserService {\n\n    //\u7ec4\u5408\n    //private UserDao userDao = new UserDaoXxxImpl();\n    private UserDao userDao;\n\n    public void getUser() {\n        userDao.getUser();\n    }\n\n    //\u5229\u7528\u591a\u6001\u6027\uff0cset\u6ce8\u5165\n    public void setUserDao(UserDao userDao) {\n        this.userDao = userDao;\n    }\n}\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"\u4f7f\u7528\u65f6"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"@Test\npublic void testTraditional(){\n    //\u7528\u6237\u5b9e\u9645\u8c03\u7528\u7684\u662f\u4e1a\u52a1\u5c42\uff0cdao\u5c42\u4e0d\u9700\u8981\u88ab\u7528\u6237\u63a5\u89e6\n    UserService userService = new UserServiceImpl();\n    ((UserServiceImpl) userService).setUserDao(new UserDaoImpl());\n    userService.getUser();\n\n    ((UserServiceImpl) userService).setUserDao(new UserDaoMysqlImpl());\n    userService.getUser();\n}\n")))),Object(c.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u5728\u4e4b\u524d\u7684\u4e1a\u52a1\u4e2d\uff0c\u7528\u6237\u7684\u9700\u6c42\u53ef\u80fd\u4f1a\u5f71\u54cd\u539f\u6765\u7684\u4ee3\u7801\u3002\u56e0\u4e3a\u6211\u4eec\u9700\u8981\u6839\u636e\u7528\u6237\u7684\u9700\u6c42\u4fee\u6539\u6e90\u4ee3\u7801\u3002\u4ee3\u7801\u91cf\u5341\u5206\u5927\uff0c\u4fee\u6539\u4e00\u6b21\u4ee3\u4ef7\u6602\u8d35"))),Object(c.b)("p",null,"\u4f7f\u7528\u4e00\u4e2aset\u63a5\u53e3\u65b9\u6cd5\u5b9e\u73b0\uff0c\u5df2\u7ecf\u53d1\u751f\u4e86\u9769\u547d\u6027\u7684\u53d8\u5316\u3002\u7b26\u5408\u4e86\u5f00\u95ed\u539f\u5219"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public void setUserDao(UserDao userDao) {\n    this.userDao = userDao;\n}\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u4e4b\u524d\uff1a\u7a0b\u5e8f\u662f\u4e3b\u52a8\u521b\u5efa\u5bf9\u8c61\uff0c\u63a7\u5236\u6743\u5728\u7a0b\u5e8f\u5458\u624b\u4e0a"),Object(c.b)("li",{parentName:"ul"},"\u4e4b\u540e\uff1a\u4f7f\u7528\u4e86set\u6ce8\u5165\u540e\uff0c\u7a0b\u5e8f\u4e0d\u518d\u5177\u6709\u4e3b\u52a8\u6027\uff0c\u800c\u662f\u88ab\u52a8\u63a5\u6536\u5bf9\u8c61")),Object(c.b)("p",null,"\u8fd9\u79cd\u601d\u60f3\uff0c\u4ece\u672c\u8d28\u4e0a\u89e3\u51b3\u4e86\u95ee\u9898\uff0c\u6211\u4eec\u7a0b\u5e8f\u5458\u4e0d\u7528\u518d\u53bb\u7ba1\u7406\u5bf9\u8c61\u7684\u521b\u5efa\u4e86\u3002\u7cfb\u7edf\u8026\u5408\u6027\u964d\u4f4e\uff0c\u53ef\u4ee5\u66f4\u52a0\u4e13\u6ce8\u4e8e\u4e1a\u52a1\u5b9e\u73b0\uff0c\u4e1a\u52a1\u53d7\u5ba2\u6237\u7684\u9700\u6c42\u63a7\u5236\uff0c\u4e0d\u53d7\u968f\u7a0b\u5e8f\u5458\u7684\u4ee3\u7801\u675f\u7f1a\u3002",Object(c.b)("strong",{parentName:"p"},"(IoC\u63a7\u5236\u53cd\u8f6c)")),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u83b7\u53d6\u4f9d\u8d56\u5bf9\u8c61\u7684\u65b9\u5f0f\u53cd\u8f6c\u4e86\uff0cSpring\u5e95\u5c42\u5927\u91cf\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\uff0c\u56e0\u6b64\u6ca1\u6709set\u65b9\u6cd5\u7684\u8bdd\u662f\u8dd1\u4e0d\u8d77\u6765\u7684\uff0cDI\u4f9d\u8d56\u6ce8\u5165\u662fIoC\u7684\u5b9e\u73b0\u65b9\u5f0f\u4e4b\u4e00"))),Object(c.b)("div",{style:{zoom:"50%"}},Object(c.b)("img",{src:"/docs/spring/img/2.png",alt:"image-20200321171430881"})),Object(c.b)("h2",{id:"22-ioc\u7684\u672c\u8d28"},"2.2 IoC\u7684\u672c\u8d28"),Object(c.b)("p",null,"IoC\u662fSpring\u6846\u67b6\u7684\u6838\u5fc3\u5185\u5bb9\u3002\u53ef\u4ee5\u4f7f\u7528\u591a\u79cd\u65b9\u5f0f\u5b9e\u73b0\uff0cxml\u3001\u6ce8\u89e3\u6216\u81ea\u52a8\u88c5\u914d"),Object(c.b)("p",null,"Spring\u5bb9\u5668\u5728\u521d\u59cb\u5316\u65f6\u5148\u8bfb\u53d6\u914d\u7f6e\u6587\u4ef6\uff0c\u6839\u636e\u914d\u7f6e\u6587\u4ef6\u6216\u5143\u6570\u636e\u521b\u5efa\u4e0e\u7ec4\u7ec7\u5bf9\u8c61\u5b58\u5165\u5bb9\u5668\u4e2d\uff0c\u7a0b\u5e8f\u4f7f\u7528\u65f6\u4eceIoC\u5bb9\u5668\u4e2d\u53d6\u51fa\u9700\u8981\u7684\u5bf9\u8c61"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u63a7\u5236\u53cd\u8f6c\u662f\u4e00\u79cd\u901a\u8fc7\u63cf\u8ff0(XML\u6216\u6ce8\u89e3)\u5e76\u901a\u8fc7\u7b2c\u4e09\u65b9\u53bb\u751f\u4ea7\u6216\u83b7\u53d6\u7279\u5b9a\u5bf9\u8c61\u7684\u65b9\u5f0f\u3002\u5728Spring\u4e2d\u5b9e\u73b0\u63a7\u5236\u53cd\u8f6c\u7684\u662fIoC\u5bb9\u5668\u3002\u5176\u5b9e\u73b0\u65b9\u6cd5\u662f\u4f9d\u8d56\u6ce8\u5165DI(Dependency Injection)")))}l.isMDXComponent=!0},375:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),s=l(n),O=a,j=s["".concat(i,".").concat(O)]||s[O]||m[O]||c;return n?r.a.createElement(j,o(o({ref:t},p),{},{components:n})):r.a.createElement(j,o({ref:t},p))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=O;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<c;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);