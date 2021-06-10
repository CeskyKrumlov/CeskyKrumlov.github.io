(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{417:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return b}));var r=t(2),a=t(6),s=(t(0),t(556)),i={id:"6.jedis",title:"Jedis",hide_title:!0},c={unversionedId:"redis/6.jedis",id:"redis/6.jedis",isDocsHomePage:!1,title:"Jedis",description:"Jedis",source:"@site/docs/redis/6.jedis.md",slug:"/redis/6.jedis",permalink:"/docs/redis/6.jedis",version:"current",sidebar:"someSidebar",previous:{title:"Redis\u4e8b\u52a1",permalink:"/docs/redis/5.transaction"},next:{title:"SpringBoot\u6574\u5408Redis",permalink:"/docs/redis/7.springbootRedis"}},o=[{value:"Jedis",id:"jedis",children:[{value:"\u5bfc\u5165\u4f9d\u8d56",id:"\u5bfc\u5165\u4f9d\u8d56",children:[]},{value:"\u7f16\u7801\u6d4b\u8bd5",id:"\u7f16\u7801\u6d4b\u8bd5",children:[{value:"\u8fde\u63a5\u6570\u636e\u5e93",id:"\u8fde\u63a5\u6570\u636e\u5e93",children:[]},{value:"\u64cd\u4f5c\u547d\u4ee4",id:"\u64cd\u4f5c\u547d\u4ee4",children:[]},{value:"\u65ad\u5f00\u8fde\u63a5",id:"\u65ad\u5f00\u8fde\u63a5",children:[]}]}]}],l={rightToc:o};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"jedis"},"Jedis"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"\u4f7f\u7528Java\u64cd\u4f5cRedis")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Jedis\u662fRedis\u5b98\u65b9\u63a8\u8350\u7684Java\u8fde\u63a5\u5f00\u53d1\u5de5\u5177\uff0c\u4f7f\u7528Java\u64cd\u4f5cRedis\u7684\u4e2d\u95f4\u4ef6")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("strong",{parentName:"p"},"\u65b0\u5efa\u4e00\u4e2aMaven\u9879\u76ee"))),Object(s.b)("h2",{id:"\u5bfc\u5165\u4f9d\u8d56"},"\u5bfc\u5165\u4f9d\u8d56"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"jedis")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>redis.clients</groupId>\n    <artifactId>jedis</artifactId>\n    <version>3.2.0</version>\n</dependency>\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"fastjson")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>com.alibaba</groupId>\n    <artifactId>fastjson</artifactId>\n    <version>1.2.62</version>\n</dependency>\n")),Object(s.b)("h2",{id:"\u7f16\u7801\u6d4b\u8bd5"},"\u7f16\u7801\u6d4b\u8bd5"),Object(s.b)("h3",{id:"\u8fde\u63a5\u6570\u636e\u5e93"},"\u8fde\u63a5\u6570\u636e\u5e93"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("strong",{parentName:"p"},"\u524d\u7f6e\u6b65\u9aa4\uff1a"),"\u4fee\u6539Redis\u914d\u7f6e\u6587\u4ef6"),Object(s.b)("ol",{parentName:"blockquote"},Object(s.b)("li",{parentName:"ol"},"\u6253\u5f00",Object(s.b)("inlineCode",{parentName:"li"},"/usr/local/bin/myconfig"),"\u4e0b\u7684redis\u914d\u7f6e\u6587\u4ef6",Object(s.b)("inlineCode",{parentName:"li"},"redis.conf"))),Object(s.b)("pre",{parentName:"blockquote"},Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"nano redis.conf\n")),Object(s.b)("ol",Object(r.a)({parentName:"blockquote"},{start:2}),Object(s.b)("li",{parentName:"ol"},"\u5c06\u672c\u5730\u56de\u73af\u5730\u5740127.0.0.1\u7528",Object(s.b)("inlineCode",{parentName:"li"},"#"),"\u6ce8\u91ca\u6389"),Object(s.b)("li",{parentName:"ol"},"\u5c06",Object(s.b)("inlineCode",{parentName:"li"},"protected-mode yes"),"\uff0c\u66f4\u6539\u4e3a",Object(s.b)("inlineCode",{parentName:"li"},"protected-mode no")),Object(s.b)("li",{parentName:"ol"},"\u4fdd\u5b58\u9000\u51fa\uff0c\u91cd\u542fredis")),Object(s.b)("pre",{parentName:"blockquote"},Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"redis-cli -p 6379\n")),Object(s.b)("pre",{parentName:"blockquote"},Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"shutdown\n")),Object(s.b)("pre",{parentName:"blockquote"},Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"exit\n")),Object(s.b)("pre",{parentName:"blockquote"},Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"redis-server redis.conf\n")),Object(s.b)("ol",Object(r.a)({parentName:"blockquote"},{start:5}),Object(s.b)("li",{parentName:"ol"},"\u6211\u7684linux\u670d\u52a1\u5668\u914d\u7f6e\u4e86ssh\u975e\u5bf9\u79f0\u5bc6\u94a5\u52a0\u5bc6\u65b9\u5f0f\u767b\u5f55\uff0c\u5e76\u4e14\u5173\u95ed\u4e86\u5bc6\u7801\u767b\u5f55\u529f\u80fd"))),Object(s.b)("blockquote",null,Object(s.b)("ol",{parentName:"blockquote"},Object(s.b)("li",{parentName:"ol"},Object(s.b)("inlineCode",{parentName:"li"},"Jedis jedis = new Jedis(host, port)")),Object(s.b)("li",{parentName:"ol"},"jedis\u6240\u6709\u65b9\u6cd5\u5c31\u662f\u6240\u6709redis\u547d\u4ee4"))),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class JedisTest {\n    public static void main(String[] args) {\n        Jedis jedis = new Jedis("49.233.209.138", 6379);\n        // jedis\u5305\u542bRedis\u6240\u6709\u57fa\u672c\u6307\u4ee4\n        System.out.println(jedis.ping());\n    }\n}\n')),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"PONG\n")),Object(s.b)("h3",{id:"\u64cd\u4f5c\u547d\u4ee4"},"\u64cd\u4f5c\u547d\u4ee4"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public static void main(String[] args) {\n    Jedis jedis = new Jedis("49.233.209.138", 6379);\n    // jedis\u5305\u542bRedis\u6240\u6709\u57fa\u672c\u6307\u4ee4\n    System.out.println("\u6e05\u7a7a\u6570\u636e\uff1a" + jedis.flushDB());\n\n    System.out.println("\u5224\u65ad\u67d0\u4e2a\u952e\u662f\u5426\u5b58\u5728" +\n                       jedis.exists("username"));\n\n    System.out.println("\u65b0\u589e<\'username\',\'bb\'>\u7684\u952e\u503c\u5bf9" +\n                       jedis.set("username", "bb"));\n\n    System.out.println("\u65b0\u589e<\'password\',\'password\'>\u7684\u952e\u503c\u5bf9" +\n                       jedis.set("password", "password"));\n\n    System.out.println("\u7cfb\u7edf\u4e2d\u6240\u6709\u7684\u952e\u5982\u4e0b\uff1a");\n    Set<String> keys = jedis.keys("*");\n    System.out.println(keys);\n\n    System.out.println("\u5220\u9664\u952epassword:" + jedis.del("password"));\n\n    System.out.println("\u5224\u65ad\u952epassword\u662f\u5426\u5b58\u5728\uff1a" +\n                       jedis.exists("password"));\n\n    System.out.println("\u67e5\u770b\u952eusername\u6240\u5b58\u50a8\u7684\u503c\u7684\u7c7b\u578b" +\n                       jedis.type("username"));\n\n    System.out.println("\u968f\u673a\u8fd4\u56deKey\u7a7a\u95f4\u7684\u4e00\u4e2a" + jedis.randomKey());\n\n    System.out.println("\u91cd\u547d\u540dkey" +\n                       jedis.rename("username", "name"));\n\n    System.out.println("\u53d6\u51fa\u6539\u540e\u7684name" + jedis.get("name"));\n    System.out.println("\u5207\u6362\u5e93\uff1a" + jedis.select(0));\n    System.out.println("\u5220\u9664\u5f53\u524d\u9009\u62e9\u6570\u636e\u5e93\u4e2d\u7684\u6240\u6709key" + jedis.flushDB());\n    System.out.println("\u8fd4\u56de\u5f53\u524d\u6570\u636e\u5e93\u4e2dkey\u7684\u6570\u76ee" + jedis.dbSize());\n    System.out.println("\u5220\u9664\u6240\u6709\u6570\u636e\u5e93\u4e2d\u7684key" + jedis.flushAll());\n}\n')),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"\u6e05\u7a7a\u6570\u636e\uff1aOK\n\u5224\u65ad\u67d0\u4e2a\u952e\u662f\u5426\u5b58\u5728false\n\u65b0\u589e<'username','bb'>\u7684\u952e\u503c\u5bf9OK\n\u65b0\u589e<'password','password'>\u7684\u952e\u503c\u5bf9OK\n\u7cfb\u7edf\u4e2d\u6240\u6709\u7684\u952e\u5982\u4e0b\uff1a\n[password, username]\n\u5220\u9664\u952epassword:1\n\u5224\u65ad\u952epassword\u662f\u5426\u5b58\u5728\uff1afalse\n\u67e5\u770b\u952eusername\u6240\u5b58\u50a8\u7684\u503c\u7684\u7c7b\u578bstring\n\u968f\u673a\u8fd4\u56deKey\u7a7a\u95f4\u7684\u4e00\u4e2ausername\n\u91cd\u547d\u540dkeyOK\n\u53d6\u51fa\u6539\u540e\u7684namebb\n\u5207\u6362\u5e93\uff1aOK\n\u5220\u9664\u5f53\u524d\u9009\u62e9\u6570\u636e\u5e93\u4e2d\u7684\u6240\u6709keyOK\n\u8fd4\u56de\u5f53\u524d\u6570\u636e\u5e93\u4e2dkey\u7684\u6570\u76ee0\n\u5220\u9664\u6240\u6709\u6570\u636e\u5e93\u4e2d\u7684keyOK\n")),Object(s.b)("h4",{id:"\u4e8b\u52a1"},"\u4e8b\u52a1"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public void testTransaction() {\n    Jedis jedis = new Jedis("49.233.209.138", 6379);\n    Transaction multi = jedis.multi(); // \u5f00\u542f\u4e8b\u52a1\n\n    try {\n        JSONObject jsonObject = new JSONObject();\n        jsonObject.put("hello", "world");\n        jsonObject.put("name", "bsx");\n        String jsonStr = jsonObject.toJSONString();\n\n        multi.set("user1", jsonStr);\n        multi.set("user2", jsonStr);\n\n        multi.exec();\n    } catch (Exception e) {\n        multi.discard(); // \u5931\u8d25\u5219\u653e\u5f03\u4e8b\u52a1\n        e.printStackTrace();\n    } finally {\n        System.out.println(jedis.get("user1"));\n        System.out.println(jedis.get("user2"));\n        jedis.close();\n    }\n}\n')),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),'{"name":"bsx","hello":"world"}\n{"name":"bsx","hello":"world"}\n')),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("strong",{parentName:"p"},"\u4eba\u4e3a\u5236\u9020\u4e00\u4e2a\u5f02\u5e38"))),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public void testTransaction() {\n    Jedis jedis = new Jedis("49.233.209.138", 6379);\n    jedis.flushDB();\n    Transaction multi = jedis.multi(); // \u5f00\u542f\u4e8b\u52a1\n\n    try {\n        JSONObject jsonObject = new JSONObject();\n        jsonObject.put("hello", "world");\n        jsonObject.put("name", "bsx");\n        String jsonStr = jsonObject.toJSONString();\n\n        multi.set("user1", jsonStr);\n        multi.set("user2", jsonStr);\n\n        int i = 1 / 0;\n\n        multi.exec();\n    } catch (Exception e) {\n        multi.discard(); // \u5931\u8d25\u5219\u653e\u5f03\u4e8b\u52a1\n        e.printStackTrace();\n    } finally {\n        System.out.println(jedis.get("user1"));\n        System.out.println(jedis.get("user2"));\n        jedis.close();\n    }\n}\n')),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"java.lang.ArithmeticException: / by zero\n    at com.bsx.JedisTest.testTransaction(JedisTest.java:66)\n...\n\nnull\nnull\n")),Object(s.b)("h3",{id:"\u65ad\u5f00\u8fde\u63a5"},"\u65ad\u5f00\u8fde\u63a5"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"jedis.close();\n")))}b.isMDXComponent=!0},556:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return j}));var r=t(0),a=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),b=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=b(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=b(t),u=r,j=d["".concat(i,".").concat(u)]||d[u]||p[u]||s;return t?a.a.createElement(j,c(c({ref:n},l),{},{components:t})):a.a.createElement(j,c({ref:n},l))}));function j(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=u;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<s;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);