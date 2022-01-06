(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{200:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n(2),i=n(6),b=(n(0),n(572)),r={id:"2.sessionCookieToken",title:"Session|Cookie|Token",hide_title:!0},l={unversionedId:"javaweb/2.sessionCookieToken",id:"javaweb/2.sessionCookieToken",isDocsHomePage:!1,title:"Session|Cookie|Token",description:"session",source:"@site/docs/javaweb/session_cookie_token.md",slug:"/javaweb/2.sessionCookieToken",permalink:"/docs/javaweb/2.sessionCookieToken",version:"current",sidebar:"someSidebar",previous:{title:"HTTP\u534f\u8bae",permalink:"/docs/javaweb/1.http"},next:{title:"TCP \u8fde\u63a5",permalink:"/docs/javaweb/4.tcp"}},o=[{value:"session",id:"session",children:[]},{value:"cookie",id:"cookie",children:[{value:"\u4f1a\u8bddcookie",id:"\u4f1a\u8bddcookie",children:[]},{value:"\u6301\u4e45\u5316cookie",id:"\u6301\u4e45\u5316cookie",children:[]}]},{value:"session\u548ccookie\u5bf9\u6bd4",id:"session\u548ccookie\u5bf9\u6bd4",children:[]},{value:"token",id:"token",children:[{value:"token\u5982\u679c\u88ab\u4f2a\u9020\u5462",id:"token\u5982\u679c\u88ab\u4f2a\u9020\u5462",children:[{value:"\u52a0\u76d0",id:"\u52a0\u76d0",children:[]},{value:"\u52a0\u5bc6",id:"\u52a0\u5bc6",children:[]}]},{value:"\u57fa\u4e8etoken\u7684\u767b\u5f55\u9a8c\u8bc1\u6d41\u7a0b",id:"\u57fa\u4e8etoken\u7684\u767b\u5f55\u9a8c\u8bc1\u6d41\u7a0b",children:[]}]},{value:"GateWay + JWT + RBAC + Filter",id:"gateway--jwt--rbac--filter",children:[{value:"\u6743\u9650\u6a21\u7ec4",id:"\u6743\u9650\u6a21\u7ec4",children:[]},{value:"GateWay \u7f51\u5173",id:"gateway-\u7f51\u5173",children:[]}]},{value:"\u5e42\u7b49\u6027",id:"\u5e42\u7b49\u6027",children:[{value:"\u5e42\u7b49\u6027\u95ee\u9898\u89e3\u51b3\u65b9\u6848",id:"\u5e42\u7b49\u6027\u95ee\u9898\u89e3\u51b3\u65b9\u6848",children:[{value:"\u57fa\u4e8e Token \u7684\u9632\u6b62\u9875\u9762\u91cd\u590d\u63d0\u4ea4",id:"\u57fa\u4e8e-token-\u7684\u9632\u6b62\u9875\u9762\u91cd\u590d\u63d0\u4ea4",children:[]}]},{value:"\u5bf9\u5916\u63d0\u4f9b\u7684 API \u5982\u4f55\u4fdd\u8bc1\u5e42\u7b49\u6027",id:"\u5bf9\u5916\u63d0\u4f9b\u7684-api-\u5982\u4f55\u4fdd\u8bc1\u5e42\u7b49\u6027",children:[]}]}],c={rightToc:o};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"session"},"session"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u4f1a\u8bdd\u6807\u8bc6")),Object(b.b)("p",null,"\u670d\u52a1\u5668\u4e3a\u4e00\u6b21\u6d4f\u89c8\u5668\u8bbf\u95ee\u7684\u6240\u6709\u8bf7\u6c42\u751f\u6210\u4e00\u4e2a\u7edf\u4e00\u7684session\uff0c\u6807\u8bc6\u8fd9\u4e9b\u8bf7\u6c42\u6765\u81ea\u540c\u4e00\u4e2a\u7528\u6237\uff0c",Object(b.b)("strong",{parentName:"p"},"\u5b58\u50a8\u5728\u5185\u5b58\u4e2d")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"session\u7684ID -> session ID"),"\u88ab\u53d1\u9001\u7ed9\u5ba2\u6237\u7aef\uff0c\u5e76\u4fdd\u5b58\u5728\u4f1a\u8bdd\u7ea7cookie\u4e2d"),Object(b.b)("p",null,"session\u662f\u670d\u52a1\u5668\u7aef\u751f\u6210\u5e76\u7ef4\u62a4\u7684\uff0c\u5927\u91cf\u7684\u8bbf\u95ee\u751f\u6210\u5927\u91cf\u7684session\u5bf9\u670d\u52a1\u5668\u6765\u8bf4\u662f\u4e00\u7b14\u4e0d\u53ef\u5ffd\u89c6\u7684\u5f00\u9500"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"session\u5728\u4ee5\u4e0b\u60c5\u51b5\u4e0b\u88ab\u5220\u9664"))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u7a0b\u5e8f\u8c03\u7528HttpSession.invalidate()"),Object(b.b)("li",{parentName:"ul"},"\u8d85\u65f6"),Object(b.b)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u7a0b\u5e8f\u7ec8\u6b62")),Object(b.b)("h1",{id:"cookie"},"cookie"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u7531\u670d\u52a1\u5668\u751f\u6210\uff0c\u53d1\u9001\u7ed9\u5ba2\u6237\u7aef\uff0c",Object(b.b)("strong",{parentName:"p"},"\u5728\u5ba2\u6237\u7684\u7269\u7406\u786c\u76d8\u4e0a\uff0c\u4ee5\u6587\u4ef6\u7684\u5f62\u5f0f\u5b58\u50a8\uff08\u6301\u4e45\u5316cookie\uff09"),"\uff0c\u662f\u4e00\u79cd\u952e\u503c\u5bf9\u6570\u636e"),Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},"\u597d\u50cf\u670d\u52a1\u5668\u7ed9\u6bcf\u4e2a\u8bbf\u95ee\u8fc7\u5b83\u7684\u5ba2\u6237\u8111\u95e8\u4e0a\u90fd\u8d34\u4e0a\u4e00\u5f20\u5e26\u540d\u5b57\u7684\u7eb8\uff0c\u8fd9\u5f20\u7eb8\u5c31\u4fdd\u5b58\u5728\u5ba2\u6237\u8111\u95e8\u4e0a\uff0c\u4e0b\u6b21\u5ba2\u6237\u6765\u8bbf\u95ee\uff0c\u670d\u52a1\u5668\u770b\u5b83\u8111\u95e8\u4e0a\u7684\u7eb8\u5c31\u8ba4\u8bc6\u4e86"))),Object(b.b)("h2",{id:"\u4f1a\u8bddcookie"},"\u4f1a\u8bddcookie"),Object(b.b)("p",null,"\u5b58\u653e\u5728\u5ba2\u6237\u7aef\u6d4f\u89c8\u5668\u5185\u5b58\u4e2d\uff0c\u5b83\u7684\u751f\u547d\u5468\u671f\u548c\u6d4f\u89c8\u5668\u662f\u4e00\u81f4\u7684\uff0c\u5f53\u6d4f\u89c8\u5668\u5173\u95ed\uff0c\u4f1a\u8bddcookie\u4e5f\u5c31\u6d88\u5931\u4e86"),Object(b.b)("h2",{id:"\u6301\u4e45\u5316cookie"},"\u6301\u4e45\u5316cookie"),Object(b.b)("p",null,"\u5b58\u50a8\u5728\u5ba2\u6237\u7aef\u786c\u76d8\u4e2d\uff0c\u6301\u4e45\u5316\u7684cookie\u7684\u751f\u547d\u5468\u671f\u662f\u6211\u4eec\u5728\u8bbe\u7f6ecookie\u65f6\u8bbe\u7f6e\u7684\u4fdd\u5b58\u65f6\u95f4\uff0csession\u4fe1\u606f\u65f6\u901a\u8fc7session ID\u83b7\u53d6\u7684\uff0c",Object(b.b)("strong",{parentName:"p"},"\u800csession ID\u5b58\u50a8\u5728\u4f1a\u8bddcookie\u4e2d\uff0c\u5f53\u6d4f\u89c8\u5668\u5173\u95ed\uff0c\u5219\u4f1a\u8bddcookie\u6d88\u5931\uff0c\u6240\u4ee5session ID\u4e5f\u5c31\u6d88\u5931\u4e86")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u6b64\u65f6\u670d\u52a1\u5668\u7aef\u7684session\u5e76\u6ca1\u6709\u6d88\u5931\uff0csession\u5728\u4ee5\u4e0b\u60c5\u51b5\u4e0b\u88ab\u5220\u9664")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u7a0b\u5e8f\u8c03\u7528HttpSession.invalidate()"),Object(b.b)("li",{parentName:"ul"},"\u8d85\u65f6"),Object(b.b)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u7a0b\u5e8f\u7ec8\u6b62")),Object(b.b)("h1",{id:"session\u548ccookie\u5bf9\u6bd4"},"session\u548ccookie\u5bf9\u6bd4"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"session\u5b58\u50a8\u5728\u670d\u52a1\u5668\u7aef\u3001cookie\u5b58\u50a8\u5728\u5ba2\u6237\u7aef\uff0c\u56e0\u6b64session\u6bd4cookie\u5b89\u5168")),Object(b.b)("h1",{id:"token"},"token"),Object(b.b)("p",null,"\u67d0\u7528\u6237\u8f93\u5165\u4e86\u6b63\u786e\u7684\u8d26\u53f7\u5bc6\u7801\uff0c\u6210\u529f\u767b\u5f55\u4e86\u7cfb\u7edf\uff0c\u670d\u52a1\u5668\u7ed9\u4ed6\u751f\u6210\u4e00\u4e2a",Object(b.b)("strong",{parentName:"p"},"\u4ee4\u724ctoken"),"\uff0c\u5176\u4e2d\u5305\u542b\u4e86\u7528\u6237\u7684user id\uff0c\u4e4b\u540e\u7528\u6237\u6240\u6709\u7684\u8bf7\u6c42\u4e2d\uff0c\u90fd\u8981\u5728\u8bf7\u6c42\u5934\u4e2d\u643a\u5e26\u8fd9\u4e2a",Object(b.b)("strong",{parentName:"p"},"token"),"\uff0c\u670d\u52a1\u7aef\u6309\u7167\u52a0\u5bc6\u89c4\u5219\u8fdb\u884c\u76f8\u5e94\u7684\u89e3\u5bc6\uff0c\u5bf9token\u8fdb\u884c\u9a8c\u8bc1\uff0c\u53ef\u4ee5\u8bc6\u522b\u8bf7\u6c42\u6765\u81ea\u54ea\u4e2a\u7528\u6237\uff0c\u662f\u4e0d\u662f\u5408\u6cd5\u7684\u7528\u6237"),Object(b.b)("div",{className:"admonition admonition-info alert alert--info"},Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"\u5173\u4e8eJava Web Token\u8be6\u89e3\uff0c\u653e\u5728\u9879\u76ee\u7684\u7b14\u8bb0\u4e2d"))),Object(b.b)("h2",{id:"token\u5982\u679c\u88ab\u4f2a\u9020\u5462"},"token\u5982\u679c\u88ab\u4f2a\u9020\u5462"),Object(b.b)("h3",{id:"\u52a0\u76d0"},"\u52a0\u76d0"),Object(b.b)("p",null,"\u5bf9\u751f\u6210\u7684token\u52a0\u4e0a\u4e00\u6bb5\u53ea\u6709\u670d\u52a1\u7aef\u81ea\u5df1\u77e5\u9053\u7684\u4fe1\u606f\uff0c\u79f0\u4e3a",Object(b.b)("strong",{parentName:"p"},"\u76d0"),"\uff0c\u6dfb\u52a0\u8fd9\u6bb5\u4fe1\u606f\u7684\u8fc7\u7a0b\u79f0\u4e3a",Object(b.b)("strong",{parentName:"p"},"\u52a0\u76d0")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u4e0d\u5efa\u8bae\u4f7f\u7528\u56fa\u5b9a\u5b57\u7b26\u4e32\u4f5c\u4e3a\u76d0\uff0c\u56e0\u4e3a\u6709\u53ef\u80fd\u88ab\u53cd\u63a8\u51fa\u6765\uff0c\u592a\u6709\u89c4\u5f8b\u6027\u4e86"),Object(b.b)("li",{parentName:"ul"},"\u6700\u597d\u4e3a\u6bcf\u4e2a\u7528\u6237\u751f\u6210\u72ec\u7acb\u7684\u76d0\uff0c\u518d\u6dfb\u52a0\uff0c\u5e76\u4e14\u628a\u76d0\u5b58\u50a8\u8d77\u6765")),Object(b.b)("h3",{id:"\u52a0\u5bc6"},"\u52a0\u5bc6"),Object(b.b)("p",null,"\u5c06\u52a0\u8fc7\u76d0\u7684token\u901a\u8fc7\u6458\u8981\u52a0\u5bc6\u7b97\u6cd5\uff08\u57fa\u4e8eHash\u6563\u5217\u52a0\u5bc6\uff09\u8fdb\u884c\u52a0\u5bc6\u3002MD5\u3001SHA256\u7b49"),Object(b.b)("h2",{id:"\u57fa\u4e8etoken\u7684\u767b\u5f55\u9a8c\u8bc1\u6d41\u7a0b"},"\u57fa\u4e8etoken\u7684\u767b\u5f55\u9a8c\u8bc1\u6d41\u7a0b"),Object(b.b)("p",null,"\u5728\u6ca1\u6709token\u7684\u60c5\u51b5\u4e0b\uff0c\u670d\u52a1\u5668\u5224\u65ad\u7528\u6237\u662f\u5426\u767b\u5f55\uff0c \u5b8c\u5168\u4f9d\u8d56\u4e8esessionId, \u4e00\u65e6\u5176\u88ab\u622a\u83b7\uff0c \u9ed1\u5ba2\u5c31\u80fd\u591f\u6a21\u62df\u51fa\u7528\u6237\u7684\u8bf7\u6c42\u3002\u4e8e\u662f\u6211\u4eec\u9700\u8981\u5f15\u5165token\u7684\u6982\u5ff5\uff1a \u7528\u6237\u767b\u5f55\u6210\u529f\u540e\uff0c \u670d\u52a1\u5668\u4e0d\u4f46\u4e3a\u5176\u5206\u914d\u4e86sessionId, \u8fd8\u5206\u914d\u4e86token\uff0c token\u662f\u7ef4\u6301\u767b\u5f55\u72b6\u6001\u7684\u5173\u952e\u79d8\u5bc6\u6570\u636e\u3002\u5728\u670d\u52a1\u5668\u5411\u5ba2\u6237\u7aef\u53d1\u9001\u7684token\u6570\u636e\uff0c\u4e5f\u9700\u8981\u52a0\u5bc6\u3002\u4e8e\u662f\u4e00\u6b21\u767b\u5f55\u7684\u7ec6\u8282\u518d\u6b21\u6269\u5c55\u3002"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u5411\u670d\u52a1\u5668\u7b2c\u4e00\u6b21\u53d1\u8d77\u767b\u5f55\u8bf7\u6c42\uff08\u4e0d\u4f20\u8f93\u7528\u6237\u540d\u548c\u5bc6\u7801\uff09\u3002"),Object(b.b)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u5229\u7528RSA\u7b97\u6cd5\u4ea7\u751f\u4e00\u5bf9\u516c\u94a5\u548c\u79c1\u94a5\u3002\u5e76\u4fdd\u7559\u79c1\u94a5\uff0c \u5c06\u516c\u94a5\u53d1\u9001\u7ed9\u5ba2\u6237\u7aef\u3002"),Object(b.b)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u6536\u5230\u516c\u94a5\u540e\uff0c \u52a0\u5bc6\u7528\u6237\u5bc6\u7801\uff0c\u5411\u670d\u52a1\u5668\u53d1\u9001\u7528\u6237\u540d\u548c\u52a0\u5bc6\u540e\u7684\u7528\u6237\u5bc6\u7801\uff1b \u540c\u65f6\u53e6\u5916\u4ea7\u751f\u4e00\u5bf9\u516c\u94a5\u548c\u79c1\u94a5\uff0c\u81ea\u5df1\u4fdd\u7559\u79c1\u94a5, \u5411\u670d\u52a1\u5668\u53d1\u9001\u516c\u94a5\uff1b \u4e8e\u662f\u7b2c\u4e8c\u6b21\u767b\u5f55\u8bf7\u6c42\u4f20\u8f93\u4e86\u7528\u6237\u540d\u548c\u52a0\u5bc6\u540e\u7684\u5bc6\u7801\u4ee5\u53ca\u5ba2\u6237\u7aef\u751f\u6210\u7684\u516c\u94a5\u3002"),Object(b.b)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u5229\u7528\u4fdd\u7559\u7684\u79c1\u94a5\u5bf9\u5bc6\u6587\u8fdb\u884c\u89e3\u5bc6\uff0c\u5f97\u5230\u771f\u6b63\u7684\u5bc6\u7801\u3002 \u7ecf\u8fc7\u5224\u65ad\uff0c \u786e\u5b9a\u7528\u6237\u53ef\u4ee5\u767b\u5f55\u540e\uff0c\u751f\u6210sessionId\u548ctoken\uff0c \u540c\u65f6\u5229\u7528\u5ba2\u6237\u7aef\u53d1\u9001\u7684\u516c\u94a5\uff0c\u5bf9token\u8fdb\u884c\u52a0\u5bc6\u3002\u6700\u540e\u5c06sessionId\u548c\u52a0\u5bc6\u540e\u7684token\u8fd4\u8fd8\u7ed9\u5ba2\u6237\u7aef\u3002"),Object(b.b)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u5229\u7528\u81ea\u5df1\u751f\u6210\u7684\u79c1\u94a5\u5bf9token\u5bc6\u6587\u89e3\u5bc6\uff0c \u5f97\u5230\u771f\u6b63\u7684token\u3002")),Object(b.b)("br",null),Object(b.b)("h1",{id:"gateway--jwt--rbac--filter"},"GateWay + JWT + RBAC + Filter"),Object(b.b)("h2",{id:"\u6743\u9650\u6a21\u7ec4"},"\u6743\u9650\u6a21\u7ec4"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u5b9e\u73b0 ",Object(b.b)("inlineCode",{parentName:"p"},"UserDetailsService")," \u63a5\u53e3 \u91cd\u5199 ",Object(b.b)("strong",{parentName:"p"},"UserDetails loadUserByUsername(String username)")," \u65b9\u6cd5"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5728\u8fd9\u4e2a\u65b9\u6cd5\u4e2d\uff0c\u901a\u8fc7 ",Object(b.b)("inlineCode",{parentName:"li"},"myUserDetailsServiceMapper")," \u6839\u636e ",Object(b.b)("inlineCode",{parentName:"li"},"username")," \u67e5\u8be2 ",Object(b.b)("inlineCode",{parentName:"li"},"\u89d2\u8272")," \u548c ",Object(b.b)("inlineCode",{parentName:"li"},"\u6743\u9650"),"\uff0c\u5c06\u89d2\u8272\u4f5c\u4e3a\u4e00\u79cd\u7279\u6b8a\u7684\u6743\u9650\u6dfb\u52a0\u5230 ",Object(b.b)("inlineCode",{parentName:"li"},"\u6743\u9650\u96c6\u5408"),"\uff0c\u524d\u9762\u62fc\u63a5\u4e0a ",Object(b.b)("inlineCode",{parentName:"li"},"ROLE_")," \u5373\u53ef"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u81ea\u5b9a\u4e49 ",Object(b.b)("inlineCode",{parentName:"p"},"MyRBACService")," \u7c7b\uff0c\u6307\u5b9a\u4e00\u4e2a\u65b9\u6cd5 ",Object(b.b)("inlineCode",{parentName:"p"},"hasPermission"),"\uff0c\u6839\u636e userDetails \u5bfc\u5165\u6743\u9650\uff0c",Object(b.b)("strong",{parentName:"p"},"\u6743\u9650\u4e0e uri \u8fdb\u884c\u6b63\u5219\u5339\u914d"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u7ee7\u627f ",Object(b.b)("inlineCode",{parentName:"p"},"WebSecurityConfigurerAdapter")," \uff0c\u914d\u7f6e\u7c7b"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'http.authorizeRequests().anyRequest()\n                .access("@rbacService.hasPermission(request,authentication)");\n'))))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u81ea\u5b9a\u4e49\u8fc7\u6ee4\u5668 ",Object(b.b)("inlineCode",{parentName:"p"},"MyAuthenticationTokenFilter")," \uff0c\u7ee7\u627f ",Object(b.b)("inlineCode",{parentName:"p"},"OncePerRequestFilter")," \u6bcf\u4e2a\u8bf7\u6c42\u53ea\u4f1a\u8fc7\u6ee4\u4e00\u6b21\uff0c\u68c0\u67e5 ",Object(b.b)("inlineCode",{parentName:"p"},"userId")," \u8bf7\u6c42\u5934\uff0c\u91cc\u9762\u662f ",Object(b.b)("inlineCode",{parentName:"p"},"username")," \uff0c\u4ece\u7f51\u5173\u90a3\u6765\u7684"))),Object(b.b)("br",null),Object(b.b)("h2",{id:"gateway-\u7f51\u5173"},"GateWay \u7f51\u5173"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u8d1f\u8d23 ",Object(b.b)("inlineCode",{parentName:"li"},"\u7528\u6237\u540d-\u5bc6\u7801")," \u767b\u5f55\uff0c\u767b\u5f55\u6210\u529f ",Object(b.b)("inlineCode",{parentName:"li"},"username")," \u5199\u5165 \u8bf7\u6c42\u5934 ",Object(b.b)("inlineCode",{parentName:"li"},"userId")," \u8fdb\u884c\u8f6c\u53d1",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u68c0\u67e5\u662f\u5426\u8bbf\u95ee\u7684\u662f ",Object(b.b)("inlineCode",{parentName:"li"},"\u4e0d\u9700\u8981\u6743\u9650\u7684 uri")),Object(b.b)("li",{parentName:"ul"},"\u5426\u5219\uff0c\u5206\u53d1\u3001\u68c0\u67e5 token\uff0c\u4e0d\u5408\u6cd5\u7684 token \u8981\u6c42\u91cd\u65b0\u767b\u5f55"))),Object(b.b)("li",{parentName:"ul"},"\u914d\u7f6e\u8f6c\u53d1")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"BlogRoutePredicateFactory\n        extends AbstractRoutePredicateFactory<BlogRoutePredicateFactory.Config>\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u7ee7\u627f ",Object(b.b)("inlineCode",{parentName:"p"},"AbstractRoutePredicateFactory"),"\uff0c\u91cd\u5199"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u547d\u540d\uff1aXxxx+RoutePredicateFactory"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Override\npublic Predicate<ServerWebExchange> apply(Config config) {\n    return exchange -> {\n        String requestURI = exchange.getRequest().getURI().getPath();\n        if (config.getFlag().equals("blog")\n            && (requestURI.startsWith("/blog")\n                //                    || requestURI.startsWith("/blogContent")\n                //                    || requestURI.startsWith("/sysorg")\n                //                    || requestURI.startsWith("/sysrole")\n                //                    || requestURI.startsWith("/sysmenu")\n                //                    || requestURI.startsWith("/sysdict")\n                || requestURI.startsWith("/blogContent"))) {\n\n            return true;  //\u8868\u793a\u5339\u914d\u6210\u529f\n        }\n        return false;   //\u8868\u793a\u5339\u914d\u5931\u8d25\n    };\n}\n'))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"application.yaml \u8fdb\u884c\u8f6c\u53d1\u914d\u7f6e"))),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"    gateway:\n      discovery:\n        locator:\n          enabled: true # \u5f00\u542f\u4ece\u6ce8\u518c\u4e2d\u5fc3\u52a8\u6001\u521b\u5efa\u8def\u7531\u7684\u529f\u80fd\uff0c\u5229\u7528\u5fae\u670d\u52a1\u540d\u79f0\u8fdb\u884c\u8def\u7531\n      routes:\n        - id: rbac # \u8def\u7531\u7684id,\u6ca1\u6709\u89c4\u5b9a\u89c4\u5219\u4f46\u8981\u6c42\u552f\u4e00,\u5efa\u8bae\u914d\u5408\u670d\u52a1\u540d\n          #\u5339\u914d\u540e\u63d0\u4f9b\u670d\u52a1\u7684\u8def\u7531\u5730\u5740\n#          uri: http://localhost:8081\n          uri: lb://aservice-rbac\n          predicates:\n            - name: RbacAuth # RbacAuthRoutePredicateFactory, \u9ed8\u8ba4\u53d6 `RoutePredicateFactory \u4ee5\u5916\u7684\u90e8\u5206`\n              args:\n                flag: rbac # \u5728\u81ea\u5b9a\u4e49 Predicate Factory \u91cc\u5b9a\u4e49\u7684\u53c2\u6570\n        - id: blog # \u8def\u7531\u7684id,\u6ca1\u6709\u89c4\u5b9a\u89c4\u5219\u4f46\u8981\u6c42\u552f\u4e00,\u5efa\u8bae\u914d\u5408\u670d\u52a1\u540d\n          uri: lb://aservice-blog\n          predicates:\n            - name: Blog\n              args:\n                flag: blog # \u5728\u81ea\u5b9a\u4e49 Predicate Factory \u91cc\u5b9a\u4e49\u7684\u53c2\u6570\n")),Object(b.b)("br",null),Object(b.b)("h1",{id:"\u5e42\u7b49\u6027"},"\u5e42\u7b49\u6027"),Object(b.b)("h2",{id:"\u5e42\u7b49\u6027\u95ee\u9898\u89e3\u51b3\u65b9\u6848"},"\u5e42\u7b49\u6027\u95ee\u9898\u89e3\u51b3\u65b9\u6848"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u5bf9\u4e1a\u52a1\u63a5\u53e3\u7684\u591a\u6b21\u8c03\u7528\u4ea7\u751f\u7684\u6548\u679c\u4e0e\u4e1a\u52a1\u8bbe\u8ba1\u662f\u4e00\u81f4\u7684\uff0c\u4e0d\u4f1a\u56e0\u4e3a\u591a\u6b21\u91cd\u590d\u8bf7\u6c42\uff08\u91cd\u590d\u70b9\u51fb\uff09\u800c\u4ea7\u751f\u6570\u636e\u504f\u5dee"),Object(b.b)("ol",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ol"},"\u67e5\u8be2\u64cd\u4f5c",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u67e5\u8be2\u4e00\u6b21\u4e0e\u67e5\u8be2\u591a\u6b21\uff0c\u5728\u6570\u636e\u4e0d\u53d8\u7684\u524d\u63d0\u4e0b\uff0c\u67e5\u8be2\u7ed3\u679c\u4e00\u81f4\uff0c",Object(b.b)("inlineCode",{parentName:"li"},"SELECT")," \u5177\u6709 ",Object(b.b)("inlineCode",{parentName:"li"},"\u5929\u7136\u5e42\u7b49\u6027")))),Object(b.b)("li",{parentName:"ol"},"\u5220\u9664\u64cd\u4f5c",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5220\u9664\u4e5f\u662f ",Object(b.b)("inlineCode",{parentName:"li"},"\u5929\u7136\u5e42\u7b49"),"\uff0c\u56e0\u4e3a\u5220\u9664\u4e00\u6b21\u5c31\u88ab\u5220\u6389\u4e86\uff0c\u518d\u5220\u9664\u591a\u6b21\u4e5f\u65e0\u6240\u8c13\uff0c\u53cd\u6b63\u90fd\u6ca1\u4e86"))),Object(b.b)("li",{parentName:"ol"},"\u4fee\u6539\u3001\u65b0\u589e\u8981\u8003\u8651\u5e42\u7b49\u6027\u95ee\u9898\uff1a",Object(b.b)("ol",{parentName:"li"},Object(b.b)("li",{parentName:"ol"},Object(b.b)("inlineCode",{parentName:"li"},"\u552f\u4e00\u7d22\u5f15"),"\uff1a\u9632\u6b62\u65b0\u589e\u810f\u6570\u636e\uff0c\u5047\u8bbe\u6bcf\u4eba\u53ea\u5141\u8bb8\u4e70\u4e00\u5f20\u663e\u5361\uff0c\u4e3a\u4e86\u9632\u6b62\u91cd\u590d\u70b9\u51fb\u4e70\u5230\u591a\u4e2a\uff0c\u53ef\u4ee5\u7ed9 ",Object(b.b)("inlineCode",{parentName:"li"},"\u6570\u636e\u5e93\u663e\u5361\u8868")," ",Object(b.b)("em",{parentName:"li"},"\u6240\u5c5e\u7528\u6237ID")," \u4e00\u5217\u52a0 ",Object(b.b)("inlineCode",{parentName:"li"},"\u552f\u4e00\u7d22\u5f15"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"\u552f\u4e00\u7d22\u5f15")," || ",Object(b.b)("inlineCode",{parentName:"li"},"\u552f\u4e00\u7ec4\u5408\u7d22\u5f15")," \u6765\u9632\u6b62\u65b0\u589e\u6570\u636e\u5b58\u5728\u810f\u6570\u636e"))),Object(b.b)("li",{parentName:"ol"},Object(b.b)("inlineCode",{parentName:"li"},"Token \u673a\u5236"),"\uff1a\u9632\u6b62\u9875\u9762\u91cd\u590d\u63d0\u4ea4"),Object(b.b)("li",{parentName:"ol"},Object(b.b)("inlineCode",{parentName:"li"},"traceId"),"\uff1a\u7528 \u8bbe\u5907\u53f7+\u5927\u81f4\u65f6\u95f4+\u7528\u6237\u6807\u8bc6+\u64cd\u4f5c\u7f16\u53f7\u751f\u6210\uff0c\u786e\u5b9a\u552f\u4e00\u7684\u4e00\u6b21\u64cd\u4f5c\uff0c\u8bb0\u5f55\u5728 redis \u4e2d\uff0c\u91cd\u590d\u8bf7\u6c42\u65f6\uff0c\u53d1\u73b0\u76f8\u540c\u7684 traceId\uff0c\u5219\u62d2\u63a5\u5904\u7406"))))),Object(b.b)("h3",{id:"\u57fa\u4e8e-token-\u7684\u9632\u6b62\u9875\u9762\u91cd\u590d\u63d0\u4ea4"},"\u57fa\u4e8e Token \u7684\u9632\u6b62\u9875\u9762\u91cd\u590d\u63d0\u4ea4"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"\u4e1a\u52a1\u8981\u6c42\uff1a\u9875\u9762\u6570\u636e\u53ea\u80fd\u88ab\u70b9\u51fb\u63d0\u4ea4\u4e00\u6b21")),Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"\u53d1\u751f\u539f\u56e0"),"\uff1a\u7531\u4e8e\u91cd\u590d\u70b9\u51fb\u6216\u7f51\u7edc\u91cd\u53d1\u7b49\u539f\u56e0\uff0c\u53d1\u751f\u6570\u636e\u88ab\u91cd\u590d\u63d0\u4ea4"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"\u89e3\u51b3\u65b9\u6848"),"\uff1a",Object(b.b)("strong",{parentName:"li"},"\u96c6\u7fa4\u91c7\u7528 token + redis\uff08\u5355\u7ebf\u7a0b\u6392\u961f\uff09\uff1b\u5355 JVM \u73af\u5883\uff1b token + redis \u6216 token + jvm\u9501")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"\u5904\u7406\u6d41\u7a0b"),"\uff1a",Object(b.b)("ol",{parentName:"li"},Object(b.b)("li",{parentName:"ol"},"\u6570\u636e\u63d0\u4ea4\u524d\u5411\u670d\u52a1\u7533\u8bf7 token\uff0ctoken \u5b58\u653e\u5230 redis \u6216 jvm \u5185\u5b58\uff0c\u8bbe\u7f6e token \u6709\u6548\u65f6\u95f4"),Object(b.b)("li",{parentName:"ol"},"\u63d0\u4ea4\u540e\u540e\u53f0\u6821\u9a8c token\uff0c\u540c\u65f6\u5220\u9664 token\uff0c\u751f\u6210\u65b0 token \u8fd4\u56de"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"token")," \u7684\u7279\u70b9\uff1a\u9700\u8981\u5220\u9664\u3001\u4e00\u6b21\u6709\u6548\u6027\u3001\u53ef\u4ee5\u9650\u6d41",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"[\u6ce8]"),"\uff1a Redis \u8981\u7528\u5220\u9664\u64cd\u4f5c\u6765\u5224\u65ad token\uff0c\u5982\u679c\u5220\u9664\u6210\u529f\u5219\u4ee3\u8868 token \u6821\u9a8c\u901a\u8fc7"))))),Object(b.b)("h2",{id:"\u5bf9\u5916\u63d0\u4f9b\u7684-api-\u5982\u4f55\u4fdd\u8bc1\u5e42\u7b49\u6027"},"\u5bf9\u5916\u63d0\u4f9b\u7684 API \u5982\u4f55\u4fdd\u8bc1\u5e42\u7b49\u6027"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u4f8b\uff1a\u94f6\u8054\u4ed8\u6b3e\u63a5\u53e3\uff0c\u9700\u8981\u7528\u6237\u643a\u5e26 ",Object(b.b)("inlineCode",{parentName:"li"},"source")," \u6765\u6e90\u3001",Object(b.b)("inlineCode",{parentName:"li"},"seq \u5e8f\u5217\u53f7")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"source + seq")," \u5728\u6570\u636e\u5e93\u505a\u552f\u4e00\u7d22\u5f15\uff0c\u9632\u6b62\u591a\u6b21\u4ed8\u6b3e\uff08\u5e76\u53d1\u73af\u5883\u4e0b\uff0c\u53ea\u80fd\u5904\u7406\u4e00\u4e2a\u8bf7\u6c42\uff09"),Object(b.b)("li",{parentName:"ul"},"\u4ed8\u6b3e\u524d\uff0c\u5148\u6267\u884c\u67e5\u8be2\u64cd\u4f5c ",Object(b.b)("inlineCode",{parentName:"li"},"source+seq"),"\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u624d\u6267\u884c\uff0c\u5b58\u5728\u8bf4\u660e\u5904\u7406\u8fc7\u4e86\uff0c\u62d2\u7edd\u8bf7\u6c42")),Object(b.b)("h1",{id:""}))}s.isMDXComponent=!0},572:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),i=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),s=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},j=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,r=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),j=a,O=p["".concat(r,".").concat(j)]||p[j]||u[j]||b;return n?i.a.createElement(O,l(l({ref:t},c),{},{components:n})):i.a.createElement(O,l({ref:t},c))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,r=new Array(b);r[0]=j;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<b;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);