(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{231:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(6),i=(t(0),t(570)),o={id:"12.shiro",title:"Shrio",hide_title:!0},c={unversionedId:"springboot/12.shiro",id:"springboot/12.shiro",isDocsHomePage:!1,title:"Shrio",description:"Shrio",source:"@site/docs/springboot/12.shiro.md",slug:"/springboot/12.shiro",permalink:"/docs/springboot/12.shiro",version:"current",sidebar:"someSidebar",previous:{title:"\u8bb0\u4f4f\u6211\u4e0e\u767b\u5f55\u9875\u5b9a\u5236",permalink:"/docs/springboot/11.rememberMe"},next:{title:"SpirngBoot\u6574\u5408Shiro",permalink:"/docs/springboot/12.springbootShiro"}},s=[{value:"Shrio",id:"shrio",children:[{value:"\u529f\u80fd",id:"\u529f\u80fd",children:[]},{value:"Shiro\u5916\u90e8\u6846\u67b6",id:"shiro\u5916\u90e8\u6846\u67b6",children:[]},{value:"Shiro\u5185\u90e8\u67b6\u6784",id:"shiro\u5185\u90e8\u67b6\u6784",children:[]},{value:"\u73af\u5883\u642d\u5efa",id:"\u73af\u5883\u642d\u5efa",children:[]}]}],l={rightToc:s};function u(e){var n=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,o,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"shrio"},"Shrio"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Apche Shiro\u662f\u4e00\u4e2aJava\u5b89\u5168\uff08\u6743\u9650\uff09\u6846\u67b6"),Object(i.b)("li",{parentName:"ul"},"Shrio\u53ef\u4ee5\u975e\u5e38\u5bb9\u6613\u7684\u5f00\u53d1\u51fa\u8db3\u591f\u597d\u7684\u5e94\u7528\uff0c\u4e0d\u4ec5\u53ef\u4ee5\u7528\u5728JavaSE\u73af\u5883\uff0c\u4e5f\u53ef\u4ee5\u7528\u5728JavaEE\u73af\u5883"),Object(i.b)("li",{parentName:"ul"},"Shrio\u53ef\u4ee5\u5b8c\u6210\uff0c\u8ba4\u8bc1\u3001\u6388\u6743\u3001\u52a0\u5bc6\u3001\u4f1a\u8bdd\u7ba1\u7406\u3001web\u96c6\u6210\u4ee5\u53ca\u7f13\u5b58\u7b49"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://shiro.apache.org"}),"http://shiro.apache.org"))),Object(i.b)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Authentication\uff1a"),"\u8eab\u4efd\u8ba4\u8bc1\u3001\u767b\u5f55\uff0c\u9a8c\u8bc1\u7528\u6237\u662f\u4e0d\u662f\u62e5\u6709\u76f8\u5e94\u8eab\u4efd"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Authorization\uff1a"),"\u6388\u6743\uff0c\u5373\u6743\u9650\u9a8c\u8bc1\uff0c\u9a8c\u8bc1\u67d0\u4e2a\u5df2\u8ba4\u8bc1\u7684\u7528\u6237\u662f\u5426\u62e5\u6709\u67d0\u4e2a\u6743\u9650\uff0c\u5373\u5224\u65ad\u7528\u6237\u80fd\u5426\u8fdb\u884c\u67d0\u9879\u64cd\u4f5c"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Session Manager\uff1a"),"\u4f1a\u8bdd\u7ba1\u7406\uff0c\u5373\u7528\u6237\u767b\u9646\u540e\u4e3a\u7b2c\u4e00\u6b21\u4f1a\u8bdd\uff0c\u5728\u6ca1\u6709\u9000\u51fa\u4e4b\u524d\uff0c\u5b83\u6240\u6709\u7684\u4fe1\u606f\u90fd\u5728\u4f1a\u8bdd\u4e2d\u3002\u4f1a\u8bdd\u53ef\u4ee5\u5b58\u5728\u4e0eJaveSE\u6216JavaEE\u73af\u5883"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Cryptography\uff1a"),"\u52a0\u5bc6\uff0c\u4fdd\u62a4\u6570\u636e\u7684\u5b89\u5168\u6027\uff0c\u5982\u5bc6\u7801\u52a0\u5bc6\u5b58\u50a8\u5230\u6570\u636e\u5e93\u4e2d\uff0c\u800c\u4e0d\u662f\u660e\u6587\u5b58\u50a8"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Caching\uff1a"),"\u7f13\u5b58\uff0c\u6bd4\u5982\u7528\u6237\u767b\u9646\u540e\uff0c\u5176\u7528\u6237\u4fe1\u606f\uff0c\u62e5\u6709\u7684\u89d2\u8272\u3001\u6743\u9650\u4e0d\u5fc5\u6bcf\u6b21\u90fd\u53bb\u67e5\uff0c\u53ef\u4ee5\u63d0\u9ad8\u6548\u7387"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Concurrency\uff1a"),"Shiro\u652f\u6301\u591a\u7ebf\u7a0b\u5e94\u7528\u7684\u5e76\u53d1\u9a8c\u8bc1\uff0c\u5373\uff0c\u5982\u5728\u4e00\u4e2a\u7ebf\u7a0b\u4e2d\u5f00\u542f\u53e6\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u80fd\u591f\u628a\u6743\u9650\u81ea\u52a8\u7684\u4f20\u64ad\u8fc7\u53bb"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Testing\uff1a"),"\u63d0\u4f9b\u6d4b\u8bd5\u652f\u6301"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Run As\uff1a"),"\u5141\u8bb8\u4e00\u4e2a\u7528\u6237\u5047\u88c5\u4e3a\u53e6\u4e00\u4e2a\u7528\u6237\uff08\u5982\u679c\u4ed6\u4eec\u5141\u8bb8\uff09\u7684\u8eab\u4efd\u8fdb\u884c\u8bbf\u95ee"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Remember Me\uff1a"),"\u8bb0\u4f4f\u6211\u529f\u80fd")),Object(i.b)("h2",{id:"shiro\u5916\u90e8\u6846\u67b6"},"Shiro\u5916\u90e8\u6846\u67b6"),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20200430172715056",src:t(884).default})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Subject\uff1aThe current ",Object(i.b)("inlineCode",{parentName:"strong"},"user")),"\n\u5e94\u7528\u4ee3\u7801\u76f4\u63a5\u4ea4\u4e92\u7684\u5bf9\u8c61\u662fSubject\uff0c\u4e5f\u5c31\u662fShrio\u7684\u5bf9\u5916API\u6838\u5fc3\u5c31\u662fSubject",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Subject\u4ee3\u8868\u4e86\u5f53\u524d\u7528\u6237\uff0c\u8fd9\u4e2a\u7528\u6237\u4e0d\u4e00\u5b9a\u662f\u4e00\u4e2a\u5177\u4f53\u7684\u4eba\uff0c\u4e0e\u5f53\u524d\u5e94\u7528\u4ea4\u4e92\u7684\u4efb\u4f55\u4e1c\u897f\u90fd\u662fSubject\uff0c\u5982\u7f51\u7edc\u722c\u866b\uff0c\u673a\u5668\u4eba\u7b49\u3002"),Object(i.b)("li",{parentName:"ul"},"\u4e0eSubject\u7684\u6240\u6709\u4ea4\u4e92\u8fd9\u90fd\u4f1a\u59d4\u6258\u7ed9SecurityManager"),Object(i.b)("li",{parentName:"ul"},"Subject\u5176\u5b9e\u662f\u4e00\u4e2a\u95e8\u9762\uff0cSecurityManager\u624d\u662f\u5b9e\u9645\u7684\u6267\u884c\u8005"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"SecurityManager\uff1aManages all Subjects"),"\n\u5b89\u5168\u7ba1\u7406\u5668",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5373\u6240\u6709\u4e0e\u5b89\u5168\u6709\u5173\u7684\u64cd\u4f5c\u90fd\u4f1a\u4e0eSecurityManager\u4ea4\u4e92\uff0c\u5e76\u4e14\u5b83\u7ba1\u7406\u8005\u6240\u6709\u7684Subject"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u770b\u51fa\u5b83\u662fShrio\u7684\u6838\u5fc3\uff0c\u5b83\u8d1f\u8d23\u4e0eShiro\u7684\u5176\u4ed6\u7ec4\u4ef6\u8fdb\u884c\u4ea4\u4e92"),Object(i.b)("li",{parentName:"ul"},"\u4ed6\u76f8\u5f53\u4e8eSpringMVC\u4e2d\u7684DispatcherServlet"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Realm\uff1aAccess the security data"),"\nShiro\u4eceRealm\u83b7\u53d6\u5b89\u5168\u6570\u636e(\u5982\u7528\u6237\uff0c\u89d2\u8272\uff0c\u6743\u9650)",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4e5f\u5c31\u662f\u8bf4SecurityManager\u8981\u9a8c\u8bc1\u7528\u6237\u8eab\u4efd\uff0c\u90a3\u4e48\u5b83\u9700\u8981\u4eceRealm\u83b7\u53d6\u76f8\u5e94\u7684\u7528\u6237\u8fdb\u884c\u6bd4\u8f83\uff0c\u6765\u786e\u5b9a\u7528\u6237\u7684\u8eab\u4efd\u662f\u5426\u5408\u6cd5"),Object(i.b)("li",{parentName:"ul"},"SecurityManager\u4e5f\u9700\u8981\u4eceRealm\u5f97\u5230\u7528\u6237\u76f8\u5e94\u7684\u89d2\u8272\u3001\u6743\u9650\u3001\u8fdb\u884c\u9a8c\u8bc1\u7528\u6237\u7684\u64cd\u4f5c\u662f\u5426\u80fd\u591f\u8fdb\u884c\uff0c\u53ef\u4ee5\u628aRealm\u770b\u4f5cDataSource")))),Object(i.b)("h2",{id:"shiro\u5185\u90e8\u67b6\u6784"},"Shiro\u5185\u90e8\u67b6\u6784"),Object(i.b)("p",null,Object(i.b)("img",{alt:"image-20200430173804485",src:t(885).default})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Subject\uff1a"),"\u4efb\u4f55\u53ef\u4ee5\u4e0e\u5e94\u7528\u4ea4\u4e92\u7684'\u7528\u6237'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Security Manager\uff1a"),"\u76f8\u5f53\u4e8eSpringMVC\u4e2d\u7684DispatcherServlet\uff0c\u662fShiro\u7684\u5fc3\u810f\uff0c\u6240\u6709\u5177\u4f53\u7684\u4ea4\u4e92\u90fd\u901a\u8fc7SecurityManager\u8fdb\u884c\u63a7\u5236\uff0c\u5b83\u7ba1\u7406\u8005\u6240\u6709\u7684Subject\uff0c\u4e14\u8d1f\u8d23\u8ba4\u8bc1\uff0c\u6388\u6743\uff0c\u4f1a\u8bdd\uff0c\u53ca\u7f13\u5b58\u7ba1\u7406"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Authenticator\uff1a"),"\u8d1f\u8d23Subject\u8ba4\u8bc1\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u5b9e\u73b0\u3002\u53ef\u4ee5\u4f7f\u7528\u8ba4\u8bc1\u7b56\u7565(Authentication Strategy)\uff0c\u5373\u4ec0\u4e48\u60c5\u51b5\u4e0b\u7b97\u7528\u6237\u8ba4\u8bc1\u901a\u8fc7\u4e86"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Authorizer\uff1a"),"\u6388\u6743\u5668\uff0c\u5373\u8bbf\u95ee\u63a7\u5236\u5668\uff0c\u7528\u6765\u51b3\u5b9a\u4e3b\u4f53\u662f\u5426\u6709\u6743\u8fdb\u884c\u76f8\u5e94\u7684\u64cd\u4f5c\uff0c\u5373\u63a7\u5236\u7740\u7528\u6237\u80fd\u8bbf\u95ee\u5e94\u7528\u4e2d\u7684\u54ea\u4e9b\u529f\u80fd"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Realm\uff1a"),"\u53ef\u4ee5\u6709\u4e00\u4e2a\u6216\u8005\u591a\u4e2arealm\uff0c\u53ef\u4ee5\u8ba4\u4e3a\u662f\u5b89\u5168\u5b9e\u4f53\u6570\u636e\u6e90\uff0c\u5373\u7528\u4e8e\u83b7\u53d6\u5b89\u5168\u5b9e\u4f53\uff0c\u53ef\u4ee5\u7528JDBC\u5b9e\u73b0\uff0c\u4e5f\u53ef\u4ee5\u662f\u5185\u5b58\u5b9e\u73b0\uff0c\u7531\u7528\u6237\u63d0\u4f9b\uff0c\u56e0\u6b64\u4e00\u822c\u9700\u8981\u81ea\u5df1\u5b9e\u73b0realm"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"SessionManager\uff1a"),"\u7ba1\u7406Session\u751f\u547d\u5468\u671f\u7684\u7ec4\u4ef6\uff0c\u800cShrio\u5e76\u4e0d\u4ec5\u4ec5\u53ef\u4ee5\u7528\u5728web\u73af\u5883\uff0c\u4e5f\u53ef\u4ee5\u7528\u5728\u666e\u901a\u7684JavaSE\u73af\u5883\u4e2d"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"CacheManager\uff1a"),"\u7f13\u5b58\u63a7\u5236\u5668\uff0c\u6765\u7ba1\u7406\u7528\u6237\uff0c\u89d2\u8272\uff0c\u6743\u9650\u7b49\u7f13\u5b58\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u6570\u636e\u57fa\u672c\u4e0a\u5f88\u5c11\u6539\u53d8\uff0c\u653e\u5230\u7f13\u5b58\u4e2d\u53ef\u4ee5\u63d0\u9ad8\u8bbf\u95ee\u6027\u80fd"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Cryptography\uff1a"),"\u5bc6\u7801\u6a21\u5757\uff0cShiro\u63d0\u9ad8\u4e86\u4e00\u4e9b\u5e38\u89c1\u7684\u52a0\u5bc6\u7ec4\u4ef6\u7528\u4e8e\u5bc6\u7801\u52a0\u5bc6\u548c\u89e3\u5bc6")),Object(i.b)("h2",{id:"\u73af\u5883\u642d\u5efa"},"\u73af\u5883\u642d\u5efa"),Object(i.b)("p",null,"\u65b0\u5efaspringboot-06-shiro"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>org.apache.shiro</groupId>\n    <artifactId>shiro-spring</artifactId>\n    <version>1.4.0</version>\n</dependency>\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"/resources/shiro.ini (\u5728\u63d2\u4ef6\u9875\u9762\u76f4\u63a5\u641c\u7d22\u4e0b\u8f7d\u4e00\u4e2aidea ini\u6587\u4ef6\u63d2\u4ef6)")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ini"}),"#\n# Licensed to the Apache Software Foundation (ASF) under one\n# or more contributor license agreements.  See the NOTICE file\n# distributed with this work for additional information\n# regarding copyright ownership.  The ASF licenses this file\n# to you under the Apache License, Version 2.0 (the\n# \"License\"); you may not use this file except in compliance\n# with the License.  You may obtain a copy of the License at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing,\n# software distributed under the License is distributed on an\n# \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n# KIND, either express or implied.  See the License for the\n# specific language governing permissions and limitations\n# under the License.\n#\n# =============================================================================\n# Quickstart INI Realm configuration\n#\n# For those that might not understand the references in this file, the\n# definitions are all based on the classic Mel Brooks' film \"Spaceballs\". ;)\n# =============================================================================\n\n# -----------------------------------------------------------------------------\n# Users and their assigned roles\n#\n# Each line conforms to the format defined in the\n# org.apache.shiro.realm.text.TextConfigurationRealm#setUserDefinitions JavaDoc\n# -----------------------------------------------------------------------------\n[users]\n# user 'root' with password 'secret' and the 'admin' role\nroot = secret, admin\n# user 'guest' with the password 'guest' and the 'guest' role\nguest = guest, guest\n# user 'presidentskroob' with password '12345' (\"That's the same combination on\n# my luggage!!!\" ;)), and role 'president'\npresidentskroob = 12345, president\n# user 'darkhelmet' with password 'ludicrousspeed' and roles 'darklord' and 'schwartz'\ndarkhelmet = ludicrousspeed, darklord, schwartz\n# user 'lonestarr' with password 'vespa' and roles 'goodguy' and 'schwartz'\nlonestarr = vespa, goodguy, schwartz\n\n# -----------------------------------------------------------------------------\n# Roles with assigned permissions\n# \n# Each line conforms to the format defined in the\n# org.apache.shiro.realm.text.TextConfigurationRealm#setRoleDefinitions JavaDoc\n# -----------------------------------------------------------------------------\n[roles]\n# 'admin' role has all permissions, indicated by the wildcard '*'\nadmin = *\n# The 'schwartz' role can do anything (*) with any lightsaber:\nschwartz = lightsaber:*\n# The 'goodguy' role is allowed to 'drive' (action) the winnebago (type) with\n# license plate 'eagle5' (instance specific id)\ngoodguy = winnebago:drive:eagle5\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"QuickStart.java")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\nimport org.apache.shiro.SecurityUtils;\nimport org.apache.shiro.authc.*;\nimport org.apache.shiro.config.IniSecurityManagerFactory;\nimport org.apache.shiro.mgt.SecurityManager;\nimport org.apache.shiro.session.Session;\nimport org.apache.shiro.subject.Subject;\nimport org.apache.shiro.util.Factory;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\n/**\n * Simple Quickstart application showing how to use Shiro\'s API.\n *\n * @since 0.9 RC2\n */\npublic class Quickstart {\n\n    private static final transient Logger log = LoggerFactory.getLogger(Quickstart.class);\n\n    public static void main(String[] args) {\n\n        // The easiest way to create a Shiro SecurityManager with configured\n        // realms, users, roles and permissions is to use the simple INI config.\n        // We\'ll do that by using a factory that can ingest a .ini file and\n        // return a SecurityManager instance:\n\n        // Use the shiro.ini file at the root of the classpath\n        // (file: and url: prefixes load from files and urls respectively):\n        // \u8bfb\u53d6shiro.ini\uff0c\u83b7\u53d6realm\uff0cusers\uff0croles\uff0cpermissions\n        // \u5de5\u5382\u751f\u4ea7SecurityManager\u5b9e\u4f8b\n        Factory<SecurityManager> factory = new IniSecurityManagerFactory("classpath:shiro.ini");\n        SecurityManager securityManager = factory.getInstance();\n\n        // for this simple example quickstart, make the SecurityManager\n        // accessible as a JVM singleton.  Most applications wouldn\'t do this\n        // and instead rely on their container configuration or web.xml for\n        // webapps.  That is outside the scope of this simple quickstart, so\n        // we\'ll just do the bare minimum so you can continue to get a feel\n        // for things.\n        SecurityUtils.setSecurityManager(securityManager);\n\n        // Now that a simple Shiro environment is set up, let\'s see what you can do:\n\n        // get the currently executing user:\n        Subject currentUser = SecurityUtils.getSubject();\n\n        // Do some stuff with a Session (no need for a web or EJB container!!!)\n        // \u7528\u5f53\u524d\u7528\u6237\u83b7\u53d6Shiro session\n        Session session = currentUser.getSession();\n        session.setAttribute("someKey", "aValue");\n        String value = (String) session.getAttribute("someKey");\n        if (value.equals("aValue")) {\n            log.info("Retrieved the correct value! [" + value + "]");\n        }\n\n        // let\'s login the current user so we can check against roles and permissions:\n        // \u5224\u65ad\u7528\u6237\u662f\u5426\u88ab\u8ba4\u8bc1\n        if (!currentUser.isAuthenticated()) {\n            UsernamePasswordToken token = new UsernamePasswordToken("lonestarr", "vespa");\n            token.setRememberMe(true);\n            try {\n                currentUser.login(token);\n            } catch (UnknownAccountException uae) {\n                log.info("There is no user with username of " + token.getPrincipal());\n            } catch (IncorrectCredentialsException ice) {\n                log.info("Password for account " + token.getPrincipal() + " was incorrect!");\n            } catch (LockedAccountException lae) {\n                log.info("The account for username " + token.getPrincipal() + " is locked.  " +\n                        "Please contact your administrator to unlock it.");\n            }\n            // ... catch more exceptions here (maybe custom ones specific to your application?\n            catch (AuthenticationException ae) {\n                //unexpected condition?  error?\n            }\n        }\n\n        //say who they are:\n        //print their identifying principal (in this case, a username):\n        log.info("User [" + currentUser.getPrincipal() + "] logged in successfully.");\n\n        //test a role:\n        if (currentUser.hasRole("schwartz")) {\n            log.info("May the Schwartz be with you!");\n        } else {\n            log.info("Hello, mere mortal.");\n        }\n\n        //test a typed permission (not instance-level)\n        if (currentUser.isPermitted("lightsaber:wield")) {\n            log.info("You may use a lightsaber ring.  Use it wisely.");\n        } else {\n            log.info("Sorry, lightsaber rings are for schwartz masters only.");\n        }\n\n        //a (very powerful) Instance Level permission:\n        if (currentUser.isPermitted("winnebago:drive:eagle5")) {\n            log.info("You are permitted to \'drive\' the winnebago with license plate (id) \'eagle5\'.  " +\n                    "Here are the keys - have fun!");\n        } else {\n            log.info("Sorry, you aren\'t allowed to drive the \'eagle5\' winnebago!");\n        }\n\n        //all done - log out!\n        currentUser.logout();\n\n        System.exit(0);\n    }\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"IniSecurityManagerFactory"),"\u8bfb\u53d6",Object(i.b)("inlineCode",{parentName:"p"},"shiro.ini"),"\uff0c\u83b7\u53d6realm\uff0cusers\uff0croles\uff0cpermissions")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"IniSecurityManagerFactory"),"\u4ea7\u751f",Object(i.b)("inlineCode",{parentName:"p"},"securityManager"),"\u5b9e\u4f8b")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"\u901a\u8fc7",Object(i.b)("inlineCode",{parentName:"strong"},"SecurityUtils"),"\uff0c\u83b7\u53d6",Object(i.b)("inlineCode",{parentName:"strong"},"\u5f53\u524d\u7528\u6237"),"->",Object(i.b)("inlineCode",{parentName:"strong"},"Subject"))))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"Subject currentUser = SecurityUtils.getSubject();\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u901a\u8fc7\u5f53\u524d\u7528\u6237\u83b7\u53d6Shiro Session"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u50cfHttpSession\u4e00\u6837\u5b58\u503c\u53d6\u503c")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"Session session = currentUser.getSession();\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5224\u65ad\u5f53\u524d\u7528\u6237\u662f\u5426\u88ab\u8ba4\u8bc1"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6ca1\u8ba4\u8bc1 -> \u6839\u636e\u8d26\u53f7\u5bc6\u7801\u751f\u6210Token"),Object(i.b)("li",{parentName:"ul"},"\u8bbe\u7f6e",Object(i.b)("inlineCode",{parentName:"li"},"\u8bb0\u4f4f\u6211")),Object(i.b)("li",{parentName:"ul"},"\u6267\u884c\u8ba9\u5f53\u524d\u7528\u6237\u767b\u5f55\uff0c\u4f20\u5165\u751f\u6210\u7684token",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5f02\u5e38\uff1aUnknownAccountException\n\u7528\u6237\u4e0d\u5b58\u5728"),Object(i.b)("li",{parentName:"ul"},"\u5f02\u5e38\uff1aIncorrectCredentialsException\n\u5bc6\u7801\u4e0d\u6b63\u786e"),Object(i.b)("li",{parentName:"ul"},"\u5f02\u5e38\uff1aLockedAccountException\n\u8d26\u6237\u88ab\u9501\u5b9a")))),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'if (!currentUser.isAuthenticated()) {\n    UsernamePasswordToken token = new UsernamePasswordToken("lonestarr", "vespa");\n    token.setRememberMe(true);\n    try {\n        currentUser.login(token);\n    } catch (UnknownAccountException uae) {\n        log.info("There is no user with username of " + token.getPrincipal());\n    } catch (IncorrectCredentialsException ice) {\n        log.info("Password for account " + token.getPrincipal() + " was incorrect!");\n    } catch (LockedAccountException lae) {\n        log.info("The account for username " + token.getPrincipal() + " is locked.  " +\n                 "Please contact your administrator to unlock it.");\n    }\n    // ... catch more exceptions here (maybe custom ones specific to your application?\n    catch (AuthenticationException ae) {\n        //unexpected condition?  error?\n    }\n}\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5224\u65ad\u7528\u6237\u662f\u5426\u5177\u6709\u8eab\u4efd"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'currentUser.hasRole("schwartz")\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5224\u65ad\u662f\u5426\u6709\u6743\u9650"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'if (currentUser.isPermitted("winnebago:drive:eagle5"))\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u9000\u51fa\u767b\u5f55"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"currentUser.logout();\n")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u6d4b\u8bd5\u4e00\u4e0b\uff0c\u53ef\u4ee5\u8dd1\u901a")))}u.isMDXComponent=!0},570:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return h}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(t),m=r,h=b["".concat(o,".").concat(m)]||b[m]||p[m]||i;return t?a.a.createElement(h,c(c({ref:n},l),{},{components:t})):a.a.createElement(h,c({ref:n},l))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},884:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/21-6f9d58cda1c275c5917c79d4f1dc849a.png"},885:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/22-894c9bb7059a23d76661d1887c3cd289.png"}}]);