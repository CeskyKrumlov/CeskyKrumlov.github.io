(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{289:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var l=t(2),r=t(6),a=(t(0),t(350)),o={id:"1.coputedAttribute",title:"\u8ba1\u7b97\u5c5e\u6027",hide_title:!0},i={unversionedId:"front/vuecli/1.coputedAttribute",id:"front/vuecli/1.coputedAttribute",isDocsHomePage:!1,title:"\u8ba1\u7b97\u5c5e\u6027",description:"\u8ba1\u7b97\u5c5e\u6027",source:"@site/docs/front/vuecli/1.\u8ba1\u7b97\u5c5e\u6027_\u7ec4\u4ef6\u4f20\u53c2_\u76d1\u542c\u5668_\u63d2\u69fd.md",slug:"/front/vuecli/1.coputedAttribute",permalink:"/docs/front/vuecli/1.coputedAttribute",version:"current",sidebar:"someSidebar",previous:{title:"Vue CLI\u811a\u624b\u67b6\u9879\u76ee\u7684\u90e8\u7f72",permalink:"/docs/front/vue/15.deploy"},next:{title:"\u8def\u7531",permalink:"/docs/front/vuecli/2.vueRouter"}},c=[{value:"\u8ba1\u7b97\u5c5e\u6027",id:"\u8ba1\u7b97\u5c5e\u6027",children:[]},{value:"\u4fa6\u542c\u5668",id:"\u4fa6\u542c\u5668",children:[]},{value:"\u7236\u7ec4\u4ef6\u5411\u5b50\u7ec4\u4ef6\u4f20\u503c",id:"\u7236\u7ec4\u4ef6\u5411\u5b50\u7ec4\u4ef6\u4f20\u503c",children:[]},{value:"\u5b50\u7ec4\u4ef6\u5411\u7236\u7ec4\u4ef6\u4f20\u503c\u2014\u2014\u81ea\u5b9a\u4e49\u4e8b\u4ef6",id:"\u5b50\u7ec4\u4ef6\u5411\u7236\u7ec4\u4ef6\u4f20\u503c\u81ea\u5b9a\u4e49\u4e8b\u4ef6",children:[]},{value:"\u7ec4\u4ef6\u63d2\u69fd",id:"\u7ec4\u4ef6\u63d2\u69fd",children:[]}],p={rightToc:c};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(l.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"\u8ba1\u7b97\u5c5e\u6027"},"\u8ba1\u7b97\u5c5e\u6027"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u5728computed\u4e2d\u8ba1\u7b97\u4e00\u4e2a\u7ed3\u679c\uff0c\u5b83\u4f1a\u88ab\u7f13\u5b58\uff0c\u7528\u4e00\u4e2a\u53d8\u91cf\u8bb0\u5f55\uff0c\u63a5\u4e0b\u6765\u5c31\u53ef\u4ee5\u901a\u8fc7\u53d8\u91cf\u8c03\u7528\u8fd9\u4e2a\u7ed3\u679c\uff0c\u5b83\u662f\u88ab\u590d\u7528\u7684")),Object(a.b)("pre",null,Object(a.b)("code",Object(l.a)({parentName:"pre"},{className:"language-vue"}),'<template>\n<div id="app">\n   <h1>{ {reverseMsg} }</h1>\n</div>\n</template>\n\n<script>\n    export default {\n        name: \'App\',\n        data: function(){\n            msg: "hello world"\n        },\n        computed:{\n            reverseMsg:function(){\n                return this.msg.split(\'\').reverse().join("")\n            }\n        }\n    }\n<\/script>\n')),Object(a.b)("h1",{id:"\u4fa6\u542c\u5668"},"\u4fa6\u542c\u5668"),Object(a.b)("pre",null,Object(a.b)("code",Object(l.a)({parentName:"pre"},{className:"language-vue"}),'<template>\n<div id="app">\n   <h1 :style="styleObj">\u70b9\u51fb\u6b64\u5904</h1>\n   <button @click="addClick">\u70b9\u51fb</button>\n</div>\n</template>\n\n<script>\n    export default {\n        name: \'App\',\n        data: function(){\n            num: 0,\n            styleObj: {}\n        },\n        methods:{\n          addClick:function() {\n              this.num++;\n          }  \n        },\n        watch:{ // \u76d1\u542cnum\u7684\u503c\n           num: function(newValue, oldValue) {\n               console.log(\'newValue\', newValue);\n               console.log(\'oldValue\', oldValue);\n               if (newValue > 10) {\n                   cosole.log("\u5927\u4e8e10");\n                   this.styleObj = {\n                       "background-color": "red"\n                       // backgroundColor: "blue"\n                   }\n               }\n           }\n        }\n    }\n<\/script>\n')),Object(a.b)("h1",{id:"\u7236\u7ec4\u4ef6\u5411\u5b50\u7ec4\u4ef6\u4f20\u503c"},"\u7236\u7ec4\u4ef6\u5411\u5b50\u7ec4\u4ef6\u4f20\u503c"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u7236\u7ec4\u4ef6",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"import"),"\u5bfc\u5165\u5b50\u7ec4\u4ef6"),Object(a.b)("li",{parentName:"ul"},"\u8bbe\u7f6e",Object(a.b)("inlineCode",{parentName:"li"},"components"),"\u5c5e\u6027"),Object(a.b)("li",{parentName:"ul"},"\u4f7f\u7528\u5b50\u7ec4\u4ef6\u6807\u7b7e\uff0c\u8c03\u7528\u5b50\u7ec4\u4ef6\uff0c\u5728\u6807\u7b7e\u4e2d\u7528\u5c5e\u6027\u7684\u65b9\u5f0f\u4f20\u9012\u503c")))),Object(a.b)("pre",null,Object(a.b)("code",Object(l.a)({parentName:"pre"},{className:"language-vue"}),'<template>\n<div id="app">\n    <h1>{ {username} }\uff0c\u4f60\u597d</h1>\n     \x3c!-- \u4f7f\u7528\u5b50\u7ec4\u4ef6 \u4f20\u9012user\u503c--\x3e\n    <helloworld user="a"></helloworld>\n    <helloworld user="b"></helloworld>\n    <helloworld user="c" :brief="brief"></helloworld>\n</div>\n</template>\n\n<script>\n    import HelloWorld from "./components/HelloWorld"\n    export default {\n        name: \'App\',\n        data: function(){\n            username: "bb1"\n            brief: {\n                title: "\u6211\u662f\u6807\u9898",\n                content: "\u6211\u662f\u5185\u5bb9"\n            }\n        },\n        components:{ // \u8bbe\u7f6e\u5b50\u7ec4\u4ef6\n            HelloWorld\n        }\n    }\n<\/script>\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u5b50\u7ec4\u4ef6 ",Object(a.b)("inlineCode",{parentName:"li"},"HelloWorld"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"props"),"\u5c5e\u6027\u63a5\u6536\u7236\u7ec4\u4ef6\u4f20\u9012\u6765\u7684\u503c"),Object(a.b)("li",{parentName:"ul"},"\u4f7f\u7528\u5c5e\u6027\u503c")))),Object(a.b)("pre",null,Object(a.b)("code",Object(l.a)({parentName:"pre"},{className:"language-vue"}),'<template>\n<div class="hello">\n  <div>\u8fd9\u662fHello \u5b50\u7ec4\u4ef6\uff0c{ {user} } \u4f60\u597d</div>\n  <div>{ {brief.title} }</div>\n  <div>{ {brief.content} }</div>\n</div>\n</template>\n\n<script>\n    export default {\n       props:["user", "brief"]\n    }\n<\/script>\n')),Object(a.b)("h1",{id:"\u5b50\u7ec4\u4ef6\u5411\u7236\u7ec4\u4ef6\u4f20\u503c\u81ea\u5b9a\u4e49\u4e8b\u4ef6"},"\u5b50\u7ec4\u4ef6\u5411\u7236\u7ec4\u4ef6\u4f20\u503c\u2014\u2014\u81ea\u5b9a\u4e49\u4e8b\u4ef6"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u7236\u7ec4\u4ef6",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u7236\u5143\u7d20\u76d1\u542c\u4e8b\u4ef6",Object(a.b)("inlineCode",{parentName:"li"},"@\u5b50\u7ec4\u4ef6\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u540d"))))),Object(a.b)("pre",null,Object(a.b)("code",Object(l.a)({parentName:"pre"},{className:"language-vue"}),'<template>\n    <div id="app">\n        <h1>{ {username} } \u6b22\u8fce\u4f60</h1>\n        <helloworld @changeParent="editUsername"></helloworld>\n   </div>\n</template>\n\n<script>\n    import HelloWorld from "./components/HelloWorld"\n    export default {\n        name: \'App\',\n        data: function(){\n           username:"\u5927\u540d"\n        },\n        components:{ // \u8bbe\u7f6e\u5b50\u7ec4\u4ef6\n            HelloWorld\n        },\n        methods:{\n            editUsername:function(event){ // \u63a5\u6536\u4e8b\u4ef6\u5bf9\u8c61, \u5c31\u662f\u5b50\u7ec4\u4ef6\u4f20\u8fc7\u6765\u7684\u65b0\u503c\n                this.username = event;\n            }\n        }\n    }\n<\/script>\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u5b50\u7ec4\u4ef6",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u70b9\u51fb\u6309\u94ae\uff0c\u4f20\u9012\u4e00\u4e2a\u65b0\u540d\u5b57\u5230\u7236\u7ec4\u4ef6\uff0c\u7236\u7ec4\u4ef6\u8bbe\u7f6e\u65b0\u540d\u5b57\u5e76\u663e\u793a"),Object(a.b)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u4e8b\u4ef6",Object(a.b)("inlineCode",{parentName:"li"},'this.$emit("\u4e8b\u4ef6\u540d\u79f0"),"\u7ed9\u7236\u5143\u7d20\u7684\u503c\u5373\u4e8b\u4ef6\u5bf9\u8c61"'))))),Object(a.b)("pre",null,Object(a.b)("code",Object(l.a)({parentName:"pre"},{className:"language-vue"}),'<template>\n   <div>\n       <button @click="clickFn">\u70b9\u7ee7\u4fee\u6539\u7236\u7ec4\u4ef6\u5185\u5bb9</button>\n    </div>\n</template>\n\n<script>\nexport default {\n    methods:{\n        clickFn:function(){\n            // \u89e6\u53d1\u4e00\u4e2a\u81ea\u5b9a\u4e49\u4e8b\u4ef6\uff0c\u4e8b\u4ef6\u540d\u79f0\u968f\u4fbf\n            this.$emit("changeParent", "\u5c0f\u540d")\n        }\n    }\n}\n<\/script>\n')),Object(a.b)("h1",{id:"\u7ec4\u4ef6\u63d2\u69fd"},"\u7ec4\u4ef6\u63d2\u69fd"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u5047\u8bbe\u9875\u9762\u662f\u4e00\u4e2a\u5927\u7ec4\u4ef6\uff0c\u5927\u7ec4\u4ef6\u53c8\u5305\u542b\u4e24\u90e8\u5206"),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"\u5de6\u8fb9\u7684\u5185\u5bb9\u2014\u2014\u5de6\u7ec4\u4ef6"),Object(a.b)("li",{parentName:"ul"},"\u53f3\u8fb9\u7684\u5185\u5bb9\u2014\u2014\u53f3\u7ec4\u4ef6")),Object(a.b)("p",{parentName:"blockquote"},"\u5e0c\u671b\u5de6\u7ec4\u4ef6\u548c\u53f3\u7ec4\u4ef6\u7684\u5185\u5bb9\uff0c\u662f\u52a8\u6001\u63d2\u5165\u8fdb\u53bb\u7684")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u6839\u7ec4\u4ef6 App.vue",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u4f7f\u7528\u5b50\u7ec4\u4ef6\u6807\u7b7e\uff0c\u5176\u4e2d\u5199\u6a21\u677f\u6807\u7b7e",Object(a.b)("inlineCode",{parentName:"li"},"template")),Object(a.b)("li",{parentName:"ul"},"\u5728\u6a21\u677f",Object(a.b)("inlineCode",{parentName:"li"},"template"),"\u6807\u7b7e\u4e2d\u5199html\u4ee3\u7801"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"v-slot:\u540d\u5b57"),"\u8bbe\u7f6e\u63d2\u69fd\u540d\uff0c\u4e0d\u9700\u8981\u5f15\u53f7")))),Object(a.b)("pre",null,Object(a.b)("code",Object(l.a)({parentName:"pre"},{className:"language-vue"}),'<template>\n    <div id="app">\n     <layout> \x3c!-- \u5927\u7ec4\u4ef6 --\x3e\n        <template v-slot:left>\n            <div class="left" >\u5de6</div>\n        </template>\n\n        <template v-slot:right>\n            <div class="right">\u53f3</div>\n        </template>\n    </layout>\n   </div>\n</template>\n\n<script>\n  import layout form \'./components/layout\'\n  export default {\n      name: \'App\',\n      components: {\n          layout\n      }\n  }\n<\/script>\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u5927\u7ec4\u4ef6\u2014\u2014\u5e03\u5c40\u7ec4\u4ef6 layout.vue",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u91cc\u9762\u6709",Object(a.b)("strong",{parentName:"li"},"\u63d2\u69fd"),Object(a.b)("inlineCode",{parentName:"li"},"slot"),"\uff0c\u6839\u7ec4\u4ef6\u4e2d",Object(a.b)("inlineCode",{parentName:"li"},"layout"),"\u6807\u7b7e\u4e2d\u7684html\u4ee3\u7801\u4f1a\u88ab\u63d2\u5165\u5230\u63d2\u69fd\u4f4d\u7f6e"),Object(a.b)("li",{parentName:"ul"},"\u901a\u8fc7",Object(a.b)("inlineCode",{parentName:"li"},"name"),"\u5c5e\u6027\u4e0e\u7236\u7ec4\u4ef6",Object(a.b)("inlineCode",{parentName:"li"},"v-slot"),"\u5c5e\u6027\u5339\u914d")))),Object(a.b)("pre",null,Object(a.b)("code",Object(l.a)({parentName:"pre"},{className:"language-vue"}),"<template>\n    <div>\n        <div>\u8fd9\u662f\u5934\u90e8</div>\n        \n        <div>\n            <h1>\u8fd9\u662f\u5de6\u8fb9</h1>\n            <slot name=\u201cleft\u201d></slot>\n        </div>\n        \n       <div>\n            <h1>\u8fd9\u662f\u53f3\u8fb9</h1>\n            <slot name=\"right\"></slot>\n        </div>\n        \n        <div>\u8fd9\u662f\u5c3e\u90e8</div>\n    </layout>\n   </div>\n</template>\n\n<script>\n  import layout form './components/layout'\n  export default {\n      name: 'App',\n      components: {\n          layout\n      }\n  }\n<\/script>\n")))}u.isMDXComponent=!0},350:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return s}));var l=t(0),r=t.n(l);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),u=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=u(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=u(t),d=l,s=b["".concat(o,".").concat(d)]||b[d]||m[d]||a;return t?r.a.createElement(s,i(i({ref:n},p),{},{components:t})):r.a.createElement(s,i({ref:n},p))}));function s(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=t[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);