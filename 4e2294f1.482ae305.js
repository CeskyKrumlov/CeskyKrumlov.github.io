(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{208:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return b}));var a=t(2),r=t(6),i=(t(0),t(574)),o={id:"22.globalConfig",title:"\u5168\u5c40\u53c2\u6570\u914d\u7f6e",hide_title:!0},l={unversionedId:"springboot/22.globalConfig",id:"springboot/22.globalConfig",isDocsHomePage:!1,title:"\u5168\u5c40\u53c2\u6570\u914d\u7f6e",description:"\u5168\u5c40\u53c2\u6570\u914d\u7f6e",source:"@site/docs/springboot/22.\u5168\u5c40\u53c2\u6570\u914d\u7f6e.md",slug:"/springboot/22.globalConfig",permalink:"/docs/springboot/22.globalConfig",version:"current",sidebar:"someSidebar",previous:{title:"\u5168\u5c40\u63a7\u5236\u5c42\u62e6\u622a",permalink:"/docs/springboot/24.globalControllerAdvice"},next:{title:"\u81ea\u52a8\u88c5\u914d\u539f\u7406",permalink:"/docs/springboot/18.autoConfiguration"}},s=[{value:"\u5168\u5c40\u53c2\u6570\u914d\u7f6e",id:"\u5168\u5c40\u53c2\u6570\u914d\u7f6e",children:[{value:"\u6570\u636e\u5e93",id:"\u6570\u636e\u5e93",children:[]},{value:"SpringBoot",id:"springboot",children:[{value:"DbLoadSysConfig",id:"dbloadsysconfig",children:[]},{value:"\u8bfb\u53d6\u53c2\u6570\u914d\u7f6e",id:"\u8bfb\u53d6\u53c2\u6570\u914d\u7f6e",children:[]},{value:"\u5411\u524d\u7aef\u63d0\u4f9b\u67e5\u8be2\u5168\u5c40\u914d\u7f6e\u53c2\u6570\u7684\u63a5\u53e3",id:"\u5411\u524d\u7aef\u63d0\u4f9b\u67e5\u8be2\u5168\u5c40\u914d\u7f6e\u53c2\u6570\u7684\u63a5\u53e3",children:[]}]},{value:"\u524d\u7aefVue",id:"\u524d\u7aefvue",children:[{value:"API\u5b9a\u4e49",id:"api\u5b9a\u4e49",children:[]},{value:"\u4f7f\u7528Vuex\u5b58\u50a8\u5168\u5c40\u914d\u7f6e\u53c2\u6570",id:"\u4f7f\u7528vuex\u5b58\u50a8\u5168\u5c40\u914d\u7f6e\u53c2\u6570",children:[]},{value:"\u52a0\u8f7d\u65f6\u673a",id:"\u52a0\u8f7d\u65f6\u673a",children:[]},{value:"\u4f7f\u7528Vuex\u4e2d\u5b58\u50a8\u7684\u5168\u5c40\u914d\u7f6e\u53c2\u6570",id:"\u4f7f\u7528vuex\u4e2d\u5b58\u50a8\u7684\u5168\u5c40\u914d\u7f6e\u53c2\u6570",children:[]}]}]}],c={rightToc:s};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u5168\u5c40\u53c2\u6570\u914d\u7f6e"},"\u5168\u5c40\u53c2\u6570\u914d\u7f6e"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u5bf9\u4e8e\u9879\u76ee\u4e2d\u4f7f\u7528\u5230\u7684\u4e00\u4e9b\u5168\u5c40\u914d\u7f6e\u7684\u503c\uff0c\u53ef\u4ee5\u7528\u6570\u636e\u5e93\u8fdb\u884c\u5b58\u50a8\uff0c\u65b9\u4fbf\u4fee\u6539\u7ef4\u62a4")),Object(i.b)("h2",{id:"\u6570\u636e\u5e93"},"\u6570\u636e\u5e93"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql",metastring:'title="\u5168\u5c40\u914d\u7f6e\u53c2\u6570\u8868"',title:'"\u5168\u5c40\u914d\u7f6e\u53c2\u6570\u8868"'}),"CREATE TABLE `sys_config` (\n  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '\u4e3b\u952e',\n  `param_name` varchar(32) NOT NULL COMMENT '\u53c2\u6570\u540d\u79f0\uff08\u4e2d\u6587\uff09',\n  `param_key` varchar(64) NOT NULL COMMENT '\u53c2\u6570\u552f\u4e00\u6807\u8bc6\uff08\u82f1\u6587\uff09',\n  `param_value` varchar(64) NOT NULL COMMENT '\u53c2\u6570\u503c',\n  `param_desc` varchar(64) DEFAULT NULL COMMENT '\u53c2\u6570\u63cf\u8ff0\u5907\u6ce8',\n  `create_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '\u521b\u5efa\u65f6\u95f4',\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u4f8b\u5982\u8bbe\u7f6e\u7cfb\u7edf\u7ed9\u65b0\u7528\u6237\u8bbe\u7f6e\u7684\u9ed8\u8ba4\u5bc6\u7801")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"id"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u53c2\u6570\u7c7b\u578b"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u53c2\u6570\u503c"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u53c2\u6570\u63cf\u8ff0"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u521b\u5efa\u65f6\u95f4"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"user.init.password"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"12345678"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u7cfb\u7edf\u7528\u6237\u521d\u59cb\u5bc6\u7801"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2020-09-27 09:46:05")))),Object(i.b)("h2",{id:"springboot"},"SpringBoot"),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"\u6ce8\u610f")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u5148\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"p"},"BetterMybatisGenerator"),"\uff0c\u4e3a\u521a\u624d\u7684\u914d\u7f6e\u8868\uff0c\u751f\u6210\u76f8\u5e94\u7684Mapper\u7c7b\u548c\u5b9e\u4f53\u7c7b\uff0c\u4ee5\u53camybatis\u7684xml\u6587\u4ef6"))),Object(i.b)("h3",{id:"dbloadsysconfig"},"DbLoadSysConfig"),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"DbLoadSysConfig")," \u5b9e\u73b0\u4e86CommandLineRunner\u63a5\u53e3\uff0c\u8be5\u63a5\u53e3\u53ea\u6709\u4e00\u4e2a\u65b9\u6cd5run\uff0c\u8be5\u65b9\u6cd5\u4f1a\u5728\u7cfb\u7edf\u542f\u52a8\u7684\u65f6\u5019\u6267\u884c\u3002\u6240\u4ee5\u7279\u522b\u9002\u5408\u53bb\u505a\u7cfb\u7edf\u6570\u636e\u521d\u59cb\u5316\u5de5\u4f5c\u3002"),Object(i.b)("li",{parentName:"ul"},"\u63d0\u4f9b",Object(i.b)("inlineCode",{parentName:"li"},"getSysConfigList"),"\u83b7\u53d6\u6240\u6709\u7684\u5168\u5c40\u914d\u7f6e\u53c2\u6570\u5217\u8868"),Object(i.b)("li",{parentName:"ul"},"\u63d0\u4f9b",Object(i.b)("inlineCode",{parentName:"li"},"refresh"),"\u51fd\u6570\u5237\u65b0\u5185\u5b58\u4e2d\u7684\u5168\u5c40\u914d\u7f6e\u53c2\u6570\u5217\u8868\uff0c\u4e0e\u6570\u636e\u5e93\u540c\u6b65"),Object(i.b)("li",{parentName:"ul"},"\u63d0\u4f9b",Object(i.b)("inlineCode",{parentName:"li"},"getConfigItem"),"\u65b9\u6cd5\uff0c\u6839\u636e",Object(i.b)("inlineCode",{parentName:"li"},"paramKey"),"\u627e",Object(i.b)("inlineCode",{parentName:"li"},"ParamValue")))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="DbLoadConfig.java"',title:'"DbLoadConfig.java"'}),"@Component\npublic class DbLoadSysConfig implements CommandLineRunner {\n\n    @Resource\n    private SysConfigMapper sysConfigMapper;\n    //\u5168\u5c40\u53c2\u6570\u914d\u7f6e\u5217\u8868\n    private List<SysConfig> sysConfigList;\n\n    //\u6839\u636e\u53c2\u6570key\uff0c\u83b7\u53d6\u53c2\u6570\u503c\n    public String getConfigItem(String paramKey) {\n        //\u4f7f\u7528java8\u7684stream\u53calambda\u8868\u8fbe\u5f0f\u6839\u636eparamKey\u627eParamValue\n        Optional<SysConfig> temp = sysConfigList.stream()\n                .filter(str -> str.getParamKey().equals(paramKey))\n                .findFirst();\n\n        return temp.get().getParamValue();\n    }\n\n    //\u5e94\u7528\u542f\u52a8\u52a0\u8f7d\u53c2\u6570\u914d\u7f6e\n    @Override\n    public void run(String... args) throws Exception {\n        sysConfigList = sysConfigMapper.selectByExample(null);\n    }\n\n    //\u83b7\u53d6\u6240\u6709\u53c2\u6570\u914d\u7f6e\u9879\n    public List<SysConfig> getSysConfigList() {\n        return sysConfigList;\n    }\n\n    //\u5237\u65b0\u53c2\u6570\u914d\u7f6e\u9879\n    public void refresh() {\n        sysConfigList = sysConfigMapper.selectByExample(null);\n    }\n}\n")),Object(i.b)("h3",{id:"\u8bfb\u53d6\u53c2\u6570\u914d\u7f6e"},"\u8bfb\u53d6\u53c2\u6570\u914d\u7f6e"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'dbLoadSysConfig.getConfigItem("user.init.password")\n')),Object(i.b)("h3",{id:"\u5411\u524d\u7aef\u63d0\u4f9b\u67e5\u8be2\u5168\u5c40\u914d\u7f6e\u53c2\u6570\u7684\u63a5\u53e3"},"\u5411\u524d\u7aef\u63d0\u4f9b\u67e5\u8be2\u5168\u5c40\u914d\u7f6e\u53c2\u6570\u7684\u63a5\u53e3"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="SysConfigController.java"',title:'"SysConfigController.java"'}),'/**\n * \u7528\u4e8e\u524d\u7aef\u67e5\u8be2 \u540e\u7aef\u6570\u636e\u5e93\u4e2d \u5b58\u50a8\u7684 \u5168\u5c40\u914d\u7f6e\u53c2\u6570\n */\n@RestController\n@RequestMapping("/sysconfig")\npublic class SysConfigController {\n\n    @Resource\n    private DbLoadSysConfig dbLoadSysConfig;\n\n    /**\n     * \u67e5\u8be2\u6240\u6709\u7684 \u5168\u5c40\u914d\u7f6e\u53c2\u6570 \u9879\u76ee\n     */\n    @PostMapping("/all")\n    public List<SysConfig> all() {\n        return dbLoadSysConfig.getSysConfigList();\n    }\n\n    /**\n     * \u628a\u6570\u636e\u5e93\u4e2d\u5b58\u50a8\u7684\u914d\u7f6e\u53c2\u6570\u503c\uff0c\u5237\u65b0\u5230\u9879\u76ee\u7684\u5185\u5b58\u6570\u636e\u4e2d\n     * \u5373\uff0c\u8ba9\u9879\u76ee\u5185\u5b58\u4e2d\u5b9e\u9645\u7684\u53c2\u6570\u503c\uff0c\u7acb\u523b\u66f4\u65b0\u4e3a\u6570\u636e\u5e93\u4e2d\u5b58\u50a8\u7684\u503c\n     */\n    @PostMapping("/refresh")\n    public List<SysConfig> refresh() {\n        dbLoadSysConfig.refresh();\n        return dbLoadSysConfig.getSysConfigList();\n    }\n}\n')),Object(i.b)("h2",{id:"\u524d\u7aefvue"},"\u524d\u7aefVue"),Object(i.b)("h3",{id:"api\u5b9a\u4e49"},"API\u5b9a\u4e49"),Object(i.b)("p",null," \u5b9a\u4e49API\u51fd\u6570"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"//\u5168\u5c40\u914d\u7f6e\u53c2\u6570\u7ba1\u7406\nexport const getAllSysConfig = () => {\n    return jwtServerInstance.request({\n        url:'/sysconfig/all',\n        method:'post'\n    })\n}\n")),Object(i.b)("h3",{id:"\u4f7f\u7528vuex\u5b58\u50a8\u5168\u5c40\u914d\u7f6e\u53c2\u6570"},"\u4f7f\u7528Vuex\u5b58\u50a8\u5168\u5c40\u914d\u7f6e\u53c2\u6570"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="store/modules/system.js"',title:'"store/modules/system.js"'}),"import {getAllSysConfig} from '@/api/system'\n// \u4f7f\u7528vuex\u5b58\u50a8\u4ece\u540e\u7aef\u83b7\u53d6\u7684\u5168\u5c40\u914d\u7f6e\u53c2\u6570\uff0c\u5305\u62ec\u7528\u6237\u9ed8\u8ba4\u5bc6\u7801\n\nconst state = {\n    sysconfig: []   //\u5168\u5c40\u53c2\u6570\u914d\u7f6e\u5bf9\u8c61\n}\nconst actions = {\n    loadSysConfig({state}) {    //\u52a0\u8f7d\u5168\u5c40\u914d\u7f6e\u53c2\u6570(\u5f02\u6b65\u64cd\u4f5c\uff0c\u5728action\u91cc\u9762\u5b9a\u4e49)\n        //\u8fd4\u56de\u4e00\u4e2apromise\uff0c\u65b9\u4fbf\u8c03\u7528\u8be5\u65b9\u6cd5\u4e4b\u540e\u7684\u4e0b\u4e00\u6b65\u64cd\u4f5c\uff08\u53c2\u770b\u4e0b\u6587\u8c03\u7528\u65f6\u673a\u9009\u62e9\uff09\n        return new Promise((resolve, reject) => {\n            //\u6ca1\u52a0\u8f7d\u8fc7\u624d\u52a0\u8f7d\uff0c\u5df2\u7ecf\u52a0\u8f7d\u8fc7\u5c31\u4e0d\u52a0\u8f7d\u4e86\n            //\u4e5f\u5c31\u8bf4\u53ea\u6709\u767b\u5f55\uff0c\u6216\u8005\u6d4f\u89c8\u5668\u9875\u9762\u5237\u65b0\u65f6\u624d\u91cd\u65b0\u52a0\u8f7d\u5168\u5c40\u914d\u7f6e\n            if (state.sysconfig.length <= 0) {\n                getAllSysConfig().then(res => {\n                    state.sysconfig = res.data\n                })\n            }\n            resolve();   //\u8868\u793a\u56de\u8c03promis\u7684then\u65b9\u6cd5\u3002\n        })\n    }\n}\nconst mutations = {}\nconst getters = {\n    //\u6839\u636eparamKey\u83b7\u53d6paramValue\uff0c\u5de5\u5177\u65b9\u6cd5\n    getSysConfigItem: (state) => (paramKey) => {\n        return state.sysconfig\n            .find(item => item.paramKey === paramKey)\n            .paramValue\n    }\n}\n\nexport default {\n    state, actions, mutations, getters\n}\n")),Object(i.b)("h3",{id:"\u52a0\u8f7d\u65f6\u673a"},"\u52a0\u8f7d\u65f6\u673a"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u5728\u8def\u7531\u5b88\u536b\u4e2d\uff0cbeforeEach\u4e2d\u8fdb\u884c\u52a0\u8f7d"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"li"},"store.dispatch(actions\u65b9\u6cd5\u540d).then( _ => {})"),"\u8fdb\u884c\u8c03\u7528"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="router/index.js"',title:'"router/index.js"'}),"router.beforeEach((to, from, next) => {\n    if (to.name !== 'login') {\n        Nprogress.start()\n        refreshToken().then(res => {\n            //\u6ca1\u6709\u83b7\u5f97\u65b0\u7684token==null\uff0c\n            // \u8868\u793a\u65e7\u7684token\u5df2\u7ecf\u5931\u6548\uff0c\u9700\u8981\u91cd\u65b0\u767b\u5f55\n            if (res.data == null) {\n                next({name: 'login'}) //\u53bb\u767b\u5f55\u754c\u9762\n                setJwtToken('') //\u6e05\u7a7atoken\n            } else {//\u5426\u5219\u53bb\u4f60\u60f3\u53bb\u7684\u754c\u9762\uff0c\u5e76\u628a\u65b0\u7684token\u4fdd\u5b58\u8d77\u6765\n                //\u628a\u5168\u5c40\u914d\u7f6e\u52a0\u8f7d\u5b8c\u6210\u518d\u53bb\u4f60\u60f3\u53bb\u7684\u9875\u9762\n                store.dispatch('loadSysConfig').then(_ => {\n                    next()\n                })\n                setJwtToken(res.data)\n            }\n        })\n    } else {//\u6bcf\u6b21\u53bb\u5230\u767b\u5f55\u9875\u9762\u90fd\u5237\u65b0\u4e00\u4e0b\uff0c\u6e05\u9664vuex\u72b6\u6001\n        next()\n        setJwtToken('') //\u6e05\u7a7atoken\n    }\n})\n")),Object(i.b)("h3",{id:"\u4f7f\u7528vuex\u4e2d\u5b58\u50a8\u7684\u5168\u5c40\u914d\u7f6e\u53c2\u6570"},"\u4f7f\u7528Vuex\u4e2d\u5b58\u50a8\u7684\u5168\u5c40\u914d\u7f6e\u53c2\u6570"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"p"},'this.$store.getters.getSysConfigItem("user.init.password")'),"\u6765\u83b7\u53d6vuex\u4e2d\u5b58\u50a8\u7684\u5168\u5c40\u53c2\u6570\u914d\u7f6e"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"user.init.password"),"\u662f\u5177\u4f53\u7684\u5168\u5c40\u53c2\u6570\u914d\u7f6e\u503c\u540d\u79f0"))))}b.isMDXComponent=!0},574:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),b=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=b(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(t),m=a,d=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return t?r.a.createElement(d,l(l({ref:n},c),{},{components:t})):r.a.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);