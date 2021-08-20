(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{204:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return o}));var a=t(2),l=t(6),r=(t(0),t(567)),i={id:"5.vmodel",title:"v-model",hide_title:!0},c={unversionedId:"front/vue/5.vmodel",id:"front/vue/5.vmodel",isDocsHomePage:!1,title:"v-model",description:"5.1 v-for",source:"@site/docs/front/vue/5.v-for\u4e0ev-model.md",slug:"/front/vue/5.vmodel",permalink:"/docs/front/vue/5.vmodel",version:"current",sidebar:"someSidebar",previous:{title:"v-for",permalink:"/docs/front/vue/5.vfor"},next:{title:"\u4e8b\u4ef6\u4fee\u9970\u7b26",permalink:"/docs/front/vue/6.issueMate"}},b=[{value:"5.1 v-for",id:"51-v-for",children:[{value:"5.1.1 v-for\u904d\u5386\u5bf9\u8c61",id:"511-v-for\u904d\u5386\u5bf9\u8c61",children:[]},{value:"5.1.2 v-for\u904d\u5386\u5bf9\u8c61\u4e2d\u7684\u5c5e\u6027",id:"512-v-for\u904d\u5386\u5bf9\u8c61\u4e2d\u7684\u5c5e\u6027",children:[]},{value:"5.1.3 v-for\u904d\u5386\u5bf9\u8c61\u6570\u7ec4",id:"513-v-for\u904d\u5386\u5bf9\u8c61\u6570\u7ec4",children:[]},{value:"5.1.4 v-for\u904d\u5386\u6570\u7ec4",id:"514-v-for\u904d\u5386\u6570\u7ec4",children:[]},{value:"5.1.5 \u7ef4\u62a4\u72b6\u6001",id:"515-\u7ef4\u62a4\u72b6\u6001",children:[]}]},{value:"5.2 v-model *",id:"52-v-model-",children:[{value:"5.2.1 \u53cc\u5411\u7ed1\u5b9a",id:"521-\u53cc\u5411\u7ed1\u5b9a",children:[]},{value:"5.2.2 MVVM\u67b6\u6784",id:"522-mvvm\u67b6\u6784",children:[]}]},{value:"5.3 \u8bb0\u4e8b\u672c\u6848\u4f8b",id:"53-\u8bb0\u4e8b\u672c\u6848\u4f8b",children:[]}],p={rightToc:b};function o(e){var n=e.components,i=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,i,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"51-v-for"},"5.1 v-for"),Object(r.b)("h2",{id:"511-v-for\u904d\u5386\u5bf9\u8c61"},"5.1.1 v-for\u904d\u5386\u5bf9\u8c61"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("inlineCode",{parentName:"p"},"v-for"),"\uff1a\u7528\u6765\u5bf9\u5bf9\u8c61\u8fdb\u884c\u904d\u5386")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8">\n        <title>v-for</title>\n        <style type="text/css">\n\n        </style>\n    </head>\n    <body>\n        <div id="app">\n            <span v-for="u in user">\n                <span v-text="u"></span>\n            </span>\n        </div>\n        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n        <script>\n            const vue = new Vue({\n                el: "#app",\n                data: {\n                    user: {\n                        name: "Alice",\n                        age: 23\n                    }\n                }\n            })\n        <\/script>\n    </body>\n</html>\n')),Object(r.b)("h2",{id:"512-v-for\u904d\u5386\u5bf9\u8c61\u4e2d\u7684\u5c5e\u6027"},"5.1.2 v-for\u904d\u5386\u5bf9\u8c61\u4e2d\u7684\u5c5e\u6027"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8">\n        <title>v-for</title>\n        <style type="text/css">\n\n        </style>\n    </head>\n    <body>\n        <div id="app">\n            <span v-for="(value, key, index) in user">\n                \u7d22\u5f15\uff1a{ {index} } | Key: { {key} } | Value: { {value} } <br>\n            </span>\n        </div>\n        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n        <script>\n            const vue = new Vue({\n                el: "#app",\n                data: {\n                    user: {\n                        name: "Alice",\n                        age: 23\n                    }\n                }\n            })\n        <\/script>\n    </body>\n</html>\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"\u7d22\u5f15\uff1a0 | Key: name | Value: Alice\n\u7d22\u5f15\uff1a1 | Key: age | Value: 23\n")),Object(r.b)("h2",{id:"513-v-for\u904d\u5386\u5bf9\u8c61\u6570\u7ec4"},"5.1.3 v-for\u904d\u5386\u5bf9\u8c61\u6570\u7ec4"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n   <head>\n       <meta charset="utf-8">\n       <title>v-for</title>\n       <style type="text/css">\n\n       </style>\n   </head>\n   <body>\n       <div id="app">\n           <span v-for="(value, key, index) in users">\n               \u7d22\u5f15\uff1a{ {index} } | Key: { {key} } | Value: { {value} } <br>\n           </span>\n       </div>\n       <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n       <script>\n           const vue = new Vue({\n               el: "#app",\n               data: {\n                   users: [{name: "Alice",age: 23}, {name:"bob",age:16}]\n               }\n           })\n       <\/script>\n   </body>\n</html>\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'\u7d22\u5f15\uff1a | Key: 0 | Value: { "name": "Alice", "age": 23 }\n\u7d22\u5f15\uff1a | Key: 1 | Value: { "name": "bob", "age": 16 }\n')),Object(r.b)("hr",null),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8">\n        <title>v-for</title>\n        <style type="text/css">\n\n        </style>\n    </head>\n    <body>\n        <div id="app">\n            <span v-for="u in users">\n                { {u.name} } : { {u.age} } <br>\n            </span>\n        </div>\n        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n        <script>\n            const vue = new Vue({\n                el: "#app",\n                data: {\n                    users: [{name: "Alice",age: 23}, {name:"bob",age:16}]\n                }\n            })\n        <\/script>\n    </body>\n</html>\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Alice : 23\nbob : 16\n")),Object(r.b)("h2",{id:"514-v-for\u904d\u5386\u6570\u7ec4"},"5.1.4 v-for\u904d\u5386\u6570\u7ec4"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8">\n        <title>v-for</title>\n        <style type="text/css">\n\n        </style>\n    </head>\n    <body>\n        <div id="app">\n            <ul>\n                <li v-for="a in arr">{ {a} }</li>\n            </ul>\n        </div>\n        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n        <script>\n            const vue = new Vue({\n                el: "#app",\n                data: {\n                    arr: [\n                        "\u5317\u4eac",\n                        "\u4e0a\u6d77",\n                        "\u897f\u5b89"\n                    ]\n                }\n            })\n        <\/script>\n    </body>\n</html>\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"\u5317\u4eac\n\u4e0a\u6d77\n\u897f\u5b89\n")),Object(r.b)("h2",{id:"515-\u7ef4\u62a4\u72b6\u6001"},"5.1.5 \u7ef4\u62a4\u72b6\u6001"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u5f53 Vue \u6b63\u5728\u66f4\u65b0\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"v-for")," \u6e32\u67d3\u7684\u5143\u7d20\u5217\u8868\u65f6\uff0c\u5b83\u9ed8\u8ba4\u4f7f\u7528\u201c\u5c31\u5730\u66f4\u65b0\u201d\u7684\u7b56\u7565\u3002\u5982\u679c\u6570\u636e\u9879\u7684\u987a\u5e8f\u88ab\u6539\u53d8\uff0cVue \u5c06\u4e0d\u4f1a\u79fb\u52a8 DOM \u5143\u7d20\u6765\u5339\u914d\u6570\u636e\u9879\u7684\u987a\u5e8f\uff0c\u800c\u662f\u5c31\u5730\u66f4\u65b0\u6bcf\u4e2a\u5143\u7d20\uff0c\u5e76\u4e14\u786e\u4fdd\u5b83\u4eec\u5728\u6bcf\u4e2a\u7d22\u5f15\u4f4d\u7f6e\u6b63\u786e\u6e32\u67d3\u3002\u8fd9\u4e2a\u7c7b\u4f3c Vue 1.x \u7684 ",Object(r.b)("inlineCode",{parentName:"p"},'track-by="$index"'),"\u3002"),Object(r.b)("p",{parentName:"blockquote"},"\u8fd9\u4e2a\u9ed8\u8ba4\u7684\u6a21\u5f0f\u662f\u9ad8\u6548\u7684\uff0c\u4f46\u662f",Object(r.b)("strong",{parentName:"p"},"\u53ea\u9002\u7528\u4e8e\u4e0d\u4f9d\u8d56\u5b50\u7ec4\u4ef6\u72b6\u6001\u6216\u4e34\u65f6 DOM \u72b6\u6001 (\u4f8b\u5982\uff1a\u8868\u5355\u8f93\u5165\u503c) \u7684\u5217\u8868\u6e32\u67d3\u8f93\u51fa"),"\u3002"),Object(r.b)("p",{parentName:"blockquote"},"\u4e3a\u4e86\u7ed9 Vue \u4e00\u4e2a\u63d0\u793a\uff0c\u4ee5\u4fbf\u5b83\u80fd\u8ddf\u8e2a\u6bcf\u4e2a\u8282\u70b9\u7684\u8eab\u4efd\uff0c\u4ece\u800c\u91cd\u7528\u548c\u91cd\u65b0\u6392\u5e8f\u73b0\u6709\u5143\u7d20\uff0c\u4f60\u9700\u8981\u4e3a\u6bcf\u9879\u63d0\u4f9b\u4e00\u4e2a\u552f\u4e00 ",Object(r.b)("inlineCode",{parentName:"p"},"key")," attribute\uff1a")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<div v-for="item in items" v-bind:key="item.id">\n  \x3c!-- \u5185\u5bb9 --\x3e\n</div>\n')),Object(r.b)("p",null,"\u5efa\u8bae\u5c3d\u53ef\u80fd\u5728\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"v-for")," \u65f6\u63d0\u4f9b ",Object(r.b)("inlineCode",{parentName:"p"},"key")," attribute\uff0c\u9664\u975e\u904d\u5386\u8f93\u51fa\u7684 DOM \u5185\u5bb9\u975e\u5e38\u7b80\u5355\uff0c\u6216\u8005\u662f\u523b\u610f\u4f9d\u8d56\u9ed8\u8ba4\u884c\u4e3a\u4ee5\u83b7\u53d6\u6027\u80fd\u4e0a\u7684\u63d0\u5347\u3002"),Object(r.b)("p",null,"\u56e0\u4e3a\u5b83\u662f Vue \u8bc6\u522b\u8282\u70b9\u7684\u4e00\u4e2a\u901a\u7528\u673a\u5236\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"key")," \u5e76\u4e0d\u4ec5\u4e0e ",Object(r.b)("inlineCode",{parentName:"p"},"v-for")," \u7279\u522b\u5173\u8054\u3002\u540e\u9762\u6211\u4eec\u5c06\u5728\u6307\u5357\u4e2d\u770b\u5230\uff0c\u5b83\u8fd8\u5177\u6709\u5176\u5b83\u7528\u9014\u3002"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u4e0d\u8981\u4f7f\u7528\u5bf9\u8c61\u6216\u6570\u7ec4\u4e4b\u7c7b\u7684\u975e\u57fa\u672c\u7c7b\u578b\u503c\u4f5c\u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"v-for")," \u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"key"),"\u3002\u8bf7\u7528\u5b57\u7b26\u4e32\u6216\u6570\u503c\u7c7b\u578b\u7684\u503c\u3002")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8">\n        <title>v-for</title>\n        <style type="text/css">\n\n        </style>\n    </head>\n    <body>\n        <div id="app">\n            <span v-for="u in users" v-bind:key="u.id">\n                { {u.name} } : { {u.age} } <br>\n            </span>\n        </div>\n        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n        <script>\n            const vue = new Vue({\n                el: "#app",\n                data: {\n                    users: [{id:1,name: "Alice",age: 23}, {id:2,name:"bob",age:16}]\n                }\n            })\n        <\/script>\n    </body>\n</html>\n')),Object(r.b)("h1",{id:"52-v-model-"},"5.2 v-model *"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u4f53\u73b0\u4e86Vue",Object(r.b)("inlineCode",{parentName:"p"},"\u53cc\u5411\u7ed1\u5b9a"),"\u7279\u6027"),Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("inlineCode",{parentName:"p"},"v-model"),"\uff1a\u7528\u6765\u7ed1\u5b9a",Object(r.b)("inlineCode",{parentName:"p"},"\u6807\u7b7e\u5143\u7d20\u503c"),"\u548cVue\u5b9e\u4f8b\u5bf9\u8c61\u4e2d\u7684",Object(r.b)("inlineCode",{parentName:"p"},"data\u6570\u636e"),"\uff0c\u4f7f\u4e8c\u8005\u4fdd\u6301\u4e00\u81f4\uff0c\u4ece\u800c\u5b9e\u73b0",Object(r.b)("inlineCode",{parentName:"p"},"\u53cc\u5411\u7ed1\u5b9a"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u6848\u4f8b\uff1a\u5728\u9875\u9762\u4e0a\u653e\u7f6e\u4e00\u4e2a\u8f93\u5165\u6846\uff0c\u5b9e\u65f6\u5c06\u8f93\u5165\u6846\u5185\u5bb9\u5728\u9875\u9762\u4e0a\u8fdb\u884c\u5c55\u793a"),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JQuery"),": \u9700\u8981\u5728\u8f93\u5165\u6846\u4e0a\u7ed1\u5b9a\u4e8b\u4ef6\uff0c\u5728\u89e6\u53d1\u51fd\u6570\u4e2d\u4fee\u6539\u9875\u9762\u6807\u7b7e\u503c"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Vue"),"\uff1a\u4f7f\u7528",Object(r.b)("inlineCode",{parentName:"li"},"v-model"),"\uff0c\u7ed1\u5b9a\u8f93\u5165\u6846\u548c",Object(r.b)("inlineCode",{parentName:"li"},"data"),"\u4e2d\u7684\u6570\u636e\uff0c",Object(r.b)("inlineCode",{parentName:"li"},"\u53cc\u5411\u7ed1\u5b9a"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u9875\u9762\u6570\u636e\u6539\u53d8  ->  data\u6570\u636e\u8ddf\u7740\u6539\u53d8  ->  data\u6570\u636e\u6539\u53d8\u53cd\u6620\u5728\u9875\u9762\u6807\u7b7e\u4e0a"))))),Object(r.b)("h2",{id:"521-\u53cc\u5411\u7ed1\u5b9a"},"5.2.1 \u53cc\u5411\u7ed1\u5b9a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8">\n        <title>v-for</title>\n        <style type="text/css">\n\n        </style>\n    </head>\n    <body>\n        <div id="app">\n\n            <input type="text" v-model="message" /> <br>\n            <span v-text="message"></span>\n\n        </div>\n        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n        <script>\n            const vue = new Vue({\n                el: "#app",\n                data: {\n                    message: ""\n                }\n            })\n        <\/script>\n    </body>\n</html>\n')),Object(r.b)("p",null,Object(r.b)("img",{src:t(792).default})),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u76f4\u63a5\u4fee\u6539",Object(r.b)("inlineCode",{parentName:"p"},"data"),"\u4e2d\u7684\u503c\uff0c\u89c2\u5bdf\u8f93\u5165\u6846\u662f\u5426\u968f\u4e4b\u6539\u53d8\uff0c\u4ee5\u6b64\u9a8c\u8bc1",Object(r.b)("inlineCode",{parentName:"p"},"\u53cc\u5411\u7ed1\u5b9a"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8">\n        <title>v-for</title>\n        <style type="text/css">\n\n        </style>\n    </head>\n    <body>\n        <div id="app">\n\n            <input type="text" v-model="message" /> <br>\n            <span v-text="message"></span>\n\n            <input type="button" value="\u6539\u53d8data\u4e2d\u7684\u503c" @click="changeValue" /> <br>\n\n        </div>\n        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n        <script>\n            const vue = new Vue({\n                el: "#app",\n                data: {\n                    message: ""\n                },\n                methods: {\n                    changeValue() {\n                        this.message = "\u6211\u53d8\u4e86!";\n                    }\n                }\n            })\n        <\/script>\n    </body>\n</html>\n')),Object(r.b)("p",null,Object(r.b)("img",{src:t(793).default})),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("inlineCode",{parentName:"p"},"v-model"),"\u53ef\u4ee5\u5b9e\u73b0",Object(r.b)("inlineCode",{parentName:"p"},"\u53cc\u5411\u7ed1\u5b9a")),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u8868\u5355\u4e2d\u7684\u6570\u636e\u53d8\u5316\u5bfc\u81f4Vue\u5b9e\u4f8b",Object(r.b)("inlineCode",{parentName:"li"},"data"),"\u6570\u636e\u53d8\u5316"),Object(r.b)("li",{parentName:"ul"},"Vue\u5b9e\u4f8b",Object(r.b)("inlineCode",{parentName:"li"},"data"),"\u6570\u636e\u53d8\u5316\uff0c\u4f1a\u53cd\u5e94\u5728\u8868\u5355\u5185\u5bb9\u53d8\u5316"))),Object(r.b)("h2",{id:"522-mvvm\u67b6\u6784"},"5.2.2 MVVM\u67b6\u6784"),Object(r.b)("blockquote",null,Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Model"),"  \u6570\u636e\uff0cVue\u5b9e\u4f8b\u4e2d\u7684",Object(r.b)("inlineCode",{parentName:"li"},"data")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"VM"),"  ViewModel  \u76d1\u542c\u5668 ",Object(r.b)("inlineCode",{parentName:"li"},"View\u53d8\u5316 -> Model  |  Model\u53d8\u5316 -> View")," ",Object(r.b)("strong",{parentName:"li"},"\u53cc\u5411\u7ed1\u5b9a")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"View"),"  \u9875\u9762\uff0c\u9875\u9762\u5c55\u793a\u7684\u6570\u636e"))),Object(r.b)("h1",{id:"53-\u8bb0\u4e8b\u672c\u6848\u4f8b"},"5.3 \u8bb0\u4e8b\u672c\u6848\u4f8b"),Object(r.b)("blockquote",null,Object(r.b)("ol",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ol"},"\u5b8c\u6210\u8bb0\u4e8b\u672c\u7684\u67e5\u8be2\u6240\u6709\u529f\u80fd",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"\u5c06\u6240\u6709\u6570\u636e\u7ed1\u5b9aVue\u5b9e\u4f8b"),Object(r.b)("li",{parentName:"ol"},"\u904d\u5386Vue\u5b9e\u4f8b\u4e2d\u7684\u6570\u636e\u5230\u9875\u9762"))),Object(r.b)("li",{parentName:"ol"},"\u6dfb\u52a0\u3001\u5220\u9664\u3001\u5220\u9664\u6240\u6709\u3001\u603b\u6570\u91cf",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"\u6dfb\u52a0\uff1a",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u7ed9\u6dfb\u52a0\u6309\u94ae\u7ed1\u5b9a\u4e8b\u4ef6"),Object(r.b)("li",{parentName:"ul"},"\u5c06\u6587\u672c\u6846\u503c\u6dfb\u52a0\u5230\u5217\u8868\u4e2d \u7528",Object(r.b)("inlineCode",{parentName:"li"},"v-model"),"\uff0c\u5217\u8868\u7684",Object(r.b)("inlineCode",{parentName:"li"},"push"),"\u65b9\u6cd5"))),Object(r.b)("li",{parentName:"ol"},"\u5220\u9664\uff1a",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".splice(index, 1);"),"  \u7b2c\u4e00\u4e2a\u53c2\u6570\uff1a\u5220\u9664\u8d77\u59cb\u4e0b\u6807\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5220\u9664\u51e0\u4e2a\u5143\u7d20"))),Object(r.b)("li",{parentName:"ol"},"\u5220\u9664\u6240\u6709 ",Object(r.b)("inlineCode",{parentName:"li"},"\u6570\u7ec4\u5bf9\u8c61 = []")),Object(r.b)("li",{parentName:"ol"},"\u603b\u6570\u91cf\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"\u6570\u7ec4\u5bf9\u8c61.length")),Object(r.b)("li",{parentName:"ol"},"\u5f53\u5217\u8868\u4e2d\u6709\u4e1c\u897f\u65f6\uff0c\u624d\u663e\u793a",Object(r.b)("inlineCode",{parentName:"li"},"\u5220\u9664\u6240\u6709"),"\u6309\u94ae  ",Object(r.b)("inlineCode",{parentName:"li"},'v-show="content.length > 0"')))))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8">\n        <title>v-for</title>\n        <style type="text/css">\n\n        </style>\n    </head>\n    <body>\n        <div id="app">\n\n            <input type="text" v-model="inputValue" /> <input type="button" value="\u6dfb\u52a0\u5230\u8bb0\u4e8b\u672c" @click="add">\n            <br>\n            <ul>\n                <li v-for="c,index in content">index:{ {index+1} } -> { {c} } | <a href="javascipt:;" @click="deleteRow(index)">\u5220\u9664</a></li>\n            </ul>\n            <br>\n            <span>\n                \u603b\u6570\u91cf\uff1a{ {content.length} }\n            </span>\n            <input type="button" value="\u5220\u9664\u6240\u6709" @click="deletAll" v-show="content.length > 0" />\n        </div>\n        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n        <script>\n            const vue = new Vue({\n                el: "#app",\n                data: {\n                    content: ["\u7b2c\u4e00\u6b21", "\u7b2c\u4e8c\u6b21"],\n                    inputValue: ""\n                },\n                methods: {\n                    add() { //\u6dfb\u52a0\u5230\u8bb0\u4e8b\u672c\n                        this.content.push(this.inputValue);\n                        this.inputValue = "";\n                    },\n                    deleteRow(index) { //\u5220\u9664\u4e00\u884c\n                        //\u6839\u636e\u7d22\u5f15\u5220\u9664\u6570\u7ec4\u4e2d\u7684\u67d0\u4e2a\u5143\u7d20\n                        this.content.splice(index, 1); // \u53c2\u65701\uff1a\u5220\u9664\u5f00\u59cb\u4e0b\u6807\uff0c \u53c2\u65702\uff1a\u5220\u9664\u51e0\u4e2a\u5143\u7d20\n                    },\n                    deletAll() { //\u5220\u9664\u6240\u6709\n                        this.content = [];\n                    }\n                }\n            })\n        <\/script>\n    </body>\n</html>\n')),Object(r.b)("p",null,Object(r.b)("img",{src:t(794).default})))}o.isMDXComponent=!0},567:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var a=t(0),l=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=l.a.createContext({}),o=function(e){var n=l.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=o(e.components);return l.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},d=l.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),s=o(t),d=a,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||r;return t?l.a.createElement(m,c(c({ref:n},p),{},{components:t})):l.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var c={};for(var b in n)hasOwnProperty.call(n,b)&&(c[b]=n[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<r;p++)i[p]=t[p];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},792:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/2-6cf3723973ccff70d593aff44892513b.gif"},793:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/3-e650a545413f40210203ba53f7aed185.gif"},794:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/4-e446d694f633b79af7cea34d9a34a832.gif"}}]);