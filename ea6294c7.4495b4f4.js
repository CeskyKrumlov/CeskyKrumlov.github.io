(window.webpackJsonp=window.webpackJsonp||[]).push([[459],{515:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return o})),t.d(e,"metadata",(function(){return c})),t.d(e,"rightToc",(function(){return l})),t.d(e,"default",(function(){return s}));var i=t(2),a=t(6),r=(t(0),t(554)),o={id:"5.domJqeury",title:"JQury DOM\u64cd\u4f5c",hide_title:!0},c={unversionedId:"front/js/5.domJqeury",id:"front/js/5.domJqeury",isDocsHomePage:!1,title:"JQury DOM\u64cd\u4f5c",description:"JQury DOM\u64cd\u4f5c",source:"@site/docs/front/js/5.dom\u64cd\u4f5c.md",slug:"/front/js/5.domJqeury",permalink:"/docs/front/js/5.domJqeury",version:"current",sidebar:"someSidebar",previous:{title:"\u8868\u5355\u8fc7\u6ee4\u9009\u62e9\u5668",permalink:"/docs/front/js/5.formFilterSelector"},next:{title:"\u7b80\u4ecb",permalink:"/docs/front/vue/1.helloVue"}},l=[{value:"JQury DOM\u64cd\u4f5c",id:"jqury-dom\u64cd\u4f5c",children:[{value:"html\u3001text\u3001val",id:"html\u3001text\u3001val",children:[]},{value:"\u64cd\u4f5c\u5c5e\u6027prop",id:"\u64cd\u4f5c\u5c5e\u6027prop",children:[]},{value:"\u64cd\u4f5cclass\u3001css",id:"\u64cd\u4f5cclass\u3001css",children:[]},{value:"\u521b\u5efa\u4e0e\u8ffd\u52a0 create&amp;append",id:"\u521b\u5efa\u4e0e\u8ffd\u52a0-createappend",children:[]},{value:"\u5220\u9664Remove",id:"\u5220\u9664remove",children:[]}]}],p={rightToc:l};function s(n){var e=n.components,t=Object(a.a)(n,["components"]);return Object(r.b)("wrapper",Object(i.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"jqury-dom\u64cd\u4f5c"},"JQury DOM\u64cd\u4f5c"),Object(r.b)("h2",{id:"html\u3001text\u3001val"},"html\u3001text\u3001val"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset="UTF-8">\n    <title></title>\n    <script src="https://code.jquery.com/jquery-3.1.1.min.js"><\/script>\n    <script>\n        $(function () {\n            // \u83b7\u53d6myinput \u7684value\u503c\n            // var value = $("#myinput").val();\n            // var value = $("#myinput").val("\u674e\u56db");\n\n            // \u83b7\u53d6mydiv\u7684\u6807\u7b7e\u4f53\u5185\u5bb9\n            var html = $("#mydiv").html();\n            alert(html);\n\n            // \u83b7\u53d6mydiv\u6587\u672c\u5185\u5bb9\n            var text = $("#mydiv").text();\n            alert(text)\n        })\n    <\/script>\n</head>\n<body>\n<input id="myinput" type="text" name="username" value="\u5f20\u4e09"/><br/>\n<div id="mydiv"><p><a href="#">\u6807\u9898\u6807\u7b7e</a></p></div>\n</body>\n</html>\n')),Object(r.b)("h2",{id:"\u64cd\u4f5c\u5c5e\u6027prop"},"\u64cd\u4f5c\u5c5e\u6027prop"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">\n<html>\n<head>\n    <title>\u83b7\u53d6\u5c5e\u6027</title>\n    <meta http-equiv="content-type" content="text/html; charset=UTF-8">\n    <script src="https://code.jquery.com/jquery-3.1.1.min.js"><\/script>\n\n    <style type="text/css">\n        div, span {\n            width: 140px;\n            height: 140px;\n            margin: 20px;\n            background: #9999CC;\n            border: #000 1px solid;\n            float: left;\n            font-size: 17px;\n            font-family: Roman;\n        }\n\n        div.mini {\n            width: 30px;\n            height: 30px;\n            background: #CC66FF;\n            border: #000 1px solid;\n            font-size: 12px;\n            font-family: Roman;\n        }\n\n        div.visible {\n            display: none;\n        }\n    </style>\n\n    <script type="text/javascript">\n        $(function () {\n            //\u83b7\u53d6\u5317\u4eac\u8282\u70b9\u7684name\u5c5e\u6027\u503c\n            $("#bj").attr("name")\n\n            //\u8bbe\u7f6e\u5317\u4eac\u8282\u70b9\u7684name\u5c5e\u6027\u7684\u503c\u4e3adabeijing\n            $("#bj").attr("name","dabeijing")\n\n            //\u65b0\u589e\u5317\u4eac\u8282\u70b9\u7684discription\u5c5e\u6027 \u5c5e\u6027\u503c\u662fdidu\n            $("#bj").attr("discription","didu");\n\n            //\u5220\u9664\u5317\u4eac\u8282\u70b9\u7684name\u5c5e\u6027\u5e76\u68c0\u9a8cname\u5c5e\u6027\u662f\u5426\u5b58\u5728\n            $("#bj").removeAttr("name");\n\n            //\u83b7\u5f97hobby\u7684\u7684\u9009\u4e2d\u72b6\u6001\n            $("#hobby").prop("checked");\n\n        })\n    <\/script>\n</head>\n<body>\n<ul>\n    <li id="bj" name="beijing" xxx="yyy">\u5317\u4eac</li>\n    <li id="tj" name="tianjin">\u5929\u6d25</li>\n</ul>\n<input type="checkbox" id="hobby"/>\n</body>\n</html>\n')),Object(r.b)("h2",{id:"\u64cd\u4f5cclass\u3001css"},"\u64cd\u4f5cclass\u3001css"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">\n<html>\n<head>\n    <title>\u6837\u5f0f\u64cd\u4f5c</title>\n    <meta http-equiv="content-type" content="text/html; charset=UTF-8">\n    <script src="https://code.jquery.com/jquery-3.1.1.min.js"><\/script>\n    <style type="text/css">\n        .one {\n            width: 200px;\n            height: 140px;\n            margin: 20px;\n            background: red;\n            border: #000 1px solid;\n            float: left;\n            font-size: 17px;\n            font-family: Roman;\n        }\n\n        div, span {\n            width: 140px;\n            height: 140px;\n            margin: 20px;\n            background: #9999CC;\n            border: #000 1px solid;\n            float: left;\n            font-size: 17px;\n            font-family: Roman;\n        }\n\n        div .mini {\n            width: 40px;\n            height: 40px;\n            background: #CC66FF;\n            border: #000 1px solid;\n            font-size: 12px;\n            font-family: Roman;\n        }\n\n        div .mini01 {\n            width: 40px;\n            height: 40px;\n            background: #CC66FF;\n            border: #000 1px solid;\n            font-size: 12px;\n            font-family: Roman;\n        }\n\n        /*\u5f85\u7528\u7684\u6837\u5f0f*/\n        .second {\n            width: 300px;\n            height: 340px;\n            margin: 20px;\n            background: yellow;\n            border: pink 3px dotted;\n            float: left;\n            font-size: 22px;\n            font-family: Roman;\n        }\n\n    </style>\n    <script type="text/javascript">\n        $(function () {\n            //<input type="button" value="\u91c7\u7528\u5c5e\u6027\u589e\u52a0\u6837\u5f0f(\u6539\u53d8id=one\u7684\u6837\u5f0f)"  id="b1"/>\n            $("#b1").click(function () {\n                $("#one").prop("class", "second");\n            });\n\n            //<input type="button" value=" addClass"  id="b2"/>\n            $("#b2").click(function () {\n                $("#one").addClass("second");\n            });\n\n            //<input type="button" value="removeClass"  id="b3"/>\n            $("#b3").click(function () {\n                $("#one").removeClass("second");\n            });\n\n            //<input type="button" value=" \u5207\u6362\u6837\u5f0f"  id="b4"/>\n            $("#b4").click(function () {\n                $("#one").toggleClass("second");\n            });\n\n            //<input type="button" value=" \u901a\u8fc7css()\u83b7\u5f97id\u4e3aone\u80cc\u666f\u989c\u8272"  id="b5"/>\n            $("#b5").click(function () {\n                $("#one").css("backgroundColor");\n            });\n\n            //<input type="button" value=" \u901a\u8fc7css()\u8bbe\u7f6eid\u4e3aone\u80cc\u666f\u989c\u8272\u4e3a\u7eff\u8272"  id="b6"/>\n            $("#b6").click(function () {\n                $("#one").css("backgroundColor", "green");\n            });\n        })\n    <\/script>\n</head>\n<body>\n<input type="button" value="\u4fdd\u5b58" class="mini" name="ok" class="mini"/>\n<input type="button" value="\u91c7\u7528\u5c5e\u6027\u589e\u52a0\u6837\u5f0f(\u6539\u53d8id=one\u7684\u6837\u5f0f)" id="b1"/>\n<input type="button" value=" addClass" id="b2"/>\n<input type="button" value="removeClass" id="b3"/>\n<input type="button" value=" \u5207\u6362\u6837\u5f0f" id="b4"/>\n<input type="button" value=" \u901a\u8fc7css()\u83b7\u5f97id\u4e3aone\u80cc\u666f\u989c\u8272" id="b5"/>\n<input type="button" value=" \u901a\u8fc7css()\u8bbe\u7f6eid\u4e3aone\u80cc\u666f\u989c\u8272\u4e3a\u7eff\u8272" id="b6"/>\n\n<h1>\u6709\u4e00\u79cd\u5947\u8ff9\u53eb\u575a\u6301</h1>\n<h2>\u81ea\u4fe1\u6e90\u4e8e\u52aa\u529b</h2>\n\n<div id="one">\n    id\u4e3aone\n</div>\n\n<div id="two" class="mini">\n    id\u4e3atwo class\u662f mini\n    <div class="mini">class\u662f mini</div>\n</div>\n\n<div class="one">\n    class\u662f one\n    <div class="mini">class\u662f mini</div>\n    <div class="mini">class\u662f mini</div>\n</div>\n\n<div class="one">\n    class\u662f one\n    <div class="mini01">class\u662f mini01</div>\n    <div class="mini">class\u662f mini</div>\n</div>\n<span class="spanone">    \n    span\n</span>\n</body>\n</html>\n')),Object(r.b)("h2",{id:"\u521b\u5efa\u4e0e\u8ffd\u52a0-createappend"},"\u521b\u5efa\u4e0e\u8ffd\u52a0 create&append"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"$(selector).append(content)\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"content"),"\u2014\u2014\u5fc5\u9700\u3002\u89c4\u5b9a\u8981\u63d2\u5165\u7684\u5185\u5bb9\uff08\u53ef\u5305\u542b HTML \u6807\u7b7e\uff09\u3002")),Object(r.b)("h2",{id:"\u5220\u9664remove"},"\u5220\u9664Remove"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"jQuery remove() \u65b9\u6cd5\u5220\u9664\u88ab\u9009\u5143\u7d20\u53ca\u5176\u5b50\u5143\u7d20\u3002")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),'$("#div1").remove();\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"jQuery empty() \u65b9\u6cd5\u5220\u9664\u88ab\u9009\u5143\u7d20\u7684\u5b50\u5143\u7d20\u3002")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),'$("#div1").empty();\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u914d\u5408\u9009\u62e9\u5668\u4f7f\u7528",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'\u5220\u9664 class="italic" \u7684\u6240\u6709 ',Object(r.b)("inlineCode",{parentName:"li"},"<p>")," \u5143\u7d20\uff1a")))),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),'$("p").remove(".italic");\n')))}s.isMDXComponent=!0},554:function(n,e,t){"use strict";t.d(e,"a",(function(){return d})),t.d(e,"b",(function(){return m}));var i=t(0),a=t.n(i);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,i,a=function(n,e){if(null==n)return{};var t,i,a={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var p=a.a.createContext({}),s=function(n){var e=a.a.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},d=function(n){var e=s(n.components);return a.a.createElement(p.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.a.createElement(a.a.Fragment,{},e)}},b=a.a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,r=n.originalType,o=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),d=s(t),b=i,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||r;return t?a.a.createElement(m,c(c({ref:e},p),{},{components:t})):a.a.createElement(m,c({ref:e},p))}));function m(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=t.length,o=new Array(r);o[0]=b;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=n,c.mdxType="string"==typeof n?n:i,o[1]=c;for(var p=2;p<r;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);