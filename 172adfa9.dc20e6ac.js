(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{106:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(2),o=t(6),a=(t(0),t(482)),i={id:"6.axiosInterceptor",title:"Axios\u8bf7\u6c42\u4e0e\u54cd\u5e94\u62e6\u622a",hide_title:!0},c={unversionedId:"front/vuecli/6.axiosInterceptor",id:"front/vuecli/6.axiosInterceptor",isDocsHomePage:!1,title:"Axios\u8bf7\u6c42\u4e0e\u54cd\u5e94\u62e6\u622a",description:"Axios\u8bf7\u6c42\u4e0e\u54cd\u5e94\u62e6\u622a",source:"@site/docs/front/vuecli/6.axios\u8bf7\u6c42\u54cd\u5e94\u62e6\u622a.md",slug:"/front/vuecli/6.axiosInterceptor",permalink:"/docs/front/vuecli/6.axiosInterceptor",version:"current",sidebar:"someSidebar",previous:{title:"Vue3.0\u9879\u76ee\u521b\u5efa",permalink:"/docs/front/vuecli/5.vue3Create"},next:{title:"Vue\u8de8\u57df",permalink:"/docs/front/vuecli/7.crossOrigin"}},s=[{value:"Axios\u8bf7\u6c42\u4e0e\u54cd\u5e94\u62e6\u622a",id:"axios\u8bf7\u6c42\u4e0e\u54cd\u5e94\u62e6\u622a",children:[{value:"\u5b89\u88c5axios",id:"\u5b89\u88c5axios",children:[]}]}],l={rightToc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"axios\u8bf7\u6c42\u4e0e\u54cd\u5e94\u62e6\u622a"},"Axios\u8bf7\u6c42\u4e0e\u54cd\u5e94\u62e6\u622a"),Object(a.b)("h2",{id:"\u5b89\u88c5axios"},"\u5b89\u88c5axios"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install axios --save\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"\u65b0\u5efaconfig\u6587\u4ef6\u5939\uff0c\u65b0\u5efaindex.js\uff0c\u7528\u4f5c\u5168\u5c40\u914d\u7f6e"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u7528\u6765\u8bbe\u7f6e\u9879\u76ee\u7684",Object(a.b)("inlineCode",{parentName:"li"},"baseUrl"))))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'export default {\n    title:"lcelm",\n    baseUrl:{\n        dev:"http://localhost:3000",//\u5f00\u53d1\u7684\u65f6\u5019\u540e\u53f0\u63a5\u53e3\u7684\u5730\u5740\n        pro:""//\u4e0a\u7ebf\u4ea7\u54c1\u53d1\u5e03\u4e4b\u540e\uff0c\u540e\u53f0\u63a5\u53e3\u7684\u5730\u5740\n    },\n    imgBaseUrl: \'\'\n}\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"\u65b0\u5efaapi\u6587\u4ef6\u5939\uff0c\u65b0\u5efaaxios.js"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'import axios form \'axios\'\n// \u5bfc\u5165config\u6587\u4ef6\u5939\nimport config from \'@/config\'\n\n// \u6839\u636e\u5f53\u524dNode\u73af\u5883\uff0c\u52a0\u8f7dconfig\u4e2d\u4e0d\u540c\u7684baseUrl\n// \u6839\u636e\u9879\u76ee\u7684\u542f\u52a8\u65b9\u5f0f server\u5c31\u662f\u5f00\u53d1\u73af\u5883\uff0cbuild\u5c31\u662f\u751f\u4ea7\u73af\u5883\nconst baseUrl = process.env.NODE_ENV === \'development\' ? config.baseUrl.dev : config.baseUrl.pro\n\n// \u5b9a\u4e49\u4e00\u4e2a\u7c7b\nclass HttpRequest {\n    // \u6784\u9020\u65b9\u6cd5 baseUrl\u914d\u7f6e\u5728config/index.js\u4e2d\n    constructor(baseUrl) {\n        this.baseUrl = baseUrl\n        // \u8bf7\u6c42\u961f\u5217\n        this.queue = {}\n    }\n    // \u4e00\u4e9b\u5b9a\u6b7b\u7684\u5168\u5c40\u914d\u7f6e\u5199\u5728\u8fd9\u91cc\uff0c\u4e0e\u5916\u90e8\u914d\u7f6e\u8fdb\u884c\u7ed3\u5408\n    getInsideConfig() {\n        const config = {\n            baseURL:this.baseUrl,\n            header:{ //\u8bf7\u6c42\u5934\n                // \n            }\n        }\n        return config;\n    }\n    // \u62e6\u622a\u8bbe\u7f6e\uff0c\u4f20\u5165\u5b9e\u4f8b(\u8bf7\u6c42\u6216\u54cd\u5e94\u5b9e\u4f8b)\u548curl\n    interceptors(instance, url) {\n        // \u62e6\u622a\u8bf7\u6c42\n        instance.interceptors.request.use((config) => {\n            // \u5904\u7406\u5404\u79cd\u8bf7\u6c42\u914d\u7f6e\n            console.log("\u62e6\u622a\u548c\u5904\u7406\u8bf7\u6c42");\n            // \u643a\u5e26\u6570\u636e\n            config.data = {msg: "message"}; // \u6570\u636eJSON\u5bf9\u8c61\n            \n            return config;\n        })\n        // \u62e6\u622a\u54cd\u5e94\n        instance.interceptors.response.use((response) => {\n            console.log("\u62e6\u622a\u548c\u5904\u7406\u54cd\u5e94");\n            \n            return response.data;\n        }, (error) => {\n            console.log(error);\n            return {error: "\u7f51\u7edc\u9519\u8bef"}\n        })\n    }\n    // \u8bf7\u6c42\n    request(options) { // \u4f20\u5165options\u914d\u7f6e\uff0c\u4e0e\u5168\u5c40\u6b7b\u914d\u7f6econfig\u7ed3\u5408\n        // \u5b9e\u73b0\u5b9e\u4f8b\n        const instance = axios.create(); // \u521b\u9020\u5b9e\u4f8b\u5bf9\u8c61\n        // \u8fd4\u56de\u7ed3\u5408\u540e\u7684\u914d\u7f6e\uff0c\u5c06\u4f20\u5165\u7684\u914d\u7f6e\u4f20\u8fdb\u5168\u5c40\u6b7b\u914d\u7f6e\uff0c\u5982\u679c\u914d\u7f6e\u91cd\u590d\uff0c\u90a3\u4e48\u4f20\u5165\u7684\u914d\u7f6e\u4f1a\u8986\u76d6\u4e4b\u524d\u5199\u7684\u6b7b\u914d\u7f6e\n        options = Object.assign(this.getInsideConfig(), options)\n        // \u62e6\u622a\u8bf7\u6c42\n        this.interceptors(instance, option.url)\n        return instance(options);\n    }\n}\n\n// \u8c03\u7528\u6784\u9020\u65b9\u6cd5\uff0c\u5b9e\u4f8b\u5316axios\u5bf9\u8c61\nconst axiosObj = new HttpRequest(baseUrl);\n\n// \u628a\u5b9e\u4f8b\u5316\u5bf9\u8c61\u5bfc\u51fa\nexport default axiosObj\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u65b0\u5efa/api/data.js\uff0c\u4e13\u95e8\u505aAjax\u8bf7\u6c42")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import axios from '@/api/axios' // \u5f97\u5230\u7684\u5c31\u662f\u4e4b\u524d\u5bfc\u51fa\u7684axiosObj\u5bf9\u8c61\n\n// \u5bfc\u51fa\u8bf7\u6c42\u540e\u7aef\u6570\u636e\u7684\u51fd\u6570\nexport const getBannerData = () => {\n    return axios.request({ // \u4f20\u5165\u4e00\u4e2a\u5bf9\u8c61\n        url: \"banner\",\n        method: 'get'\n    })    \n}\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u5728\u7ec4\u4ef6\u4e2d\u8c03\u7528")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-vue"}),"<script>\n// @ is an alias to /src\nimport HelloWorld from '@/components/HelloWorld.vue'\nimport {getBannerData} from '@/api/data'\n\nexport default {\n  name: 'Home',\n  components: {\n   HelloWorld\n  },\n  async mounted(){ // \u58f0\u660e\u5468\u671f \u5f02\u6b65\n   let result = await getBannerData();\n  }\n}\n<\/script>\n")))}p.isMDXComponent=!0},482:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),f=r,m=u["".concat(i,".").concat(f)]||u[f]||b[f]||a;return t?o.a.createElement(m,c(c({ref:n},l),{},{components:t})):o.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);