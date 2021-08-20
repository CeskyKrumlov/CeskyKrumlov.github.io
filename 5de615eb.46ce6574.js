(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{236:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var b=a(2),r=a(6),n=(a(0),a(566)),c={id:"2.helloRedis",title:"Redis\u5165\u95e8",hide_title:!0},p={unversionedId:"redis/2.helloRedis",id:"redis/2.helloRedis",isDocsHomePage:!1,title:"Redis\u5165\u95e8",description:"Redis\u5165\u95e8",source:"@site/docs/redis/2.redis\u5165\u95e8.md",slug:"/redis/2.helloRedis",permalink:"/docs/redis/2.helloRedis",version:"current",sidebar:"someSidebar",previous:{title:"NoSQL\u6982\u8ff0",permalink:"/docs/redis/1.nosql"},next:{title:"\u4e94\u5927\u6570\u636e\u7c7b\u578b",permalink:"/docs/redis/3.fiveDatastructure"}},i=[{value:"Redis\u5165\u95e8",id:"redis\u5165\u95e8",children:[]},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",children:[]},{value:"Linux\u5b89\u88c5Redis",id:"linux\u5b89\u88c5redis",children:[]},{value:"Redis\u57fa\u7840\u77e5\u8bc6",id:"redis\u57fa\u7840\u77e5\u8bc6",children:[{value:"Redis\u662f\u5355\u7ebf\u7a0b\u8fd8\u662f\u591a\u7ebf\u7a0b",id:"redis\u662f\u5355\u7ebf\u7a0b\u8fd8\u662f\u591a\u7ebf\u7a0b",children:[]}]}],l={rightToc:i};function s(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(b.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"redis\u5165\u95e8"},"Redis\u5165\u95e8"),Object(n.b)("h1",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Redis\u662f\u4ec0\u4e48"),Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Remote Dictionary Server\u2014\u2014\u8fdc\u7a0b\u5b57\u5178\u670d\u52a1")),Object(n.b)("ul",{parentName:"blockquote"},Object(n.b)("li",{parentName:"ul"},"\u5b98\u7f51\uff1a",Object(n.b)("a",Object(b.a)({parentName:"li"},{href:"https://redis.io"}),"https://redis.io")),Object(n.b)("li",{parentName:"ul"},"\u4e2d\u6587\u7f51\uff1a",Object(n.b)("a",Object(b.a)({parentName:"li"},{href:"http://www.redis.cn/"}),"http://www.redis.cn/")))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Redis \u662f\u4e00\u4e2a\u5f00\u6e90\uff08BSD\u8bb8\u53ef\uff09\u7684\uff0c\u5185\u5b58\u4e2d\u7684\u6570\u636e\u7ed3\u6784\u5b58\u50a8\u7cfb\u7edf\uff0c\u5b83\u53ef\u4ee5\u7528\u4f5c\u6570\u636e\u5e93\u3001\u7f13\u5b58\u548c\u6d88\u606f\u4e2d\u95f4\u4ef6\u3002 \u5b83\u652f\u6301\u591a\u79cd\u7c7b\u578b\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5982 ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"http://www.redis.cn/topics/data-types-intro.html#strings"}),"\u5b57\u7b26\u4e32\uff08strings\uff09"),"\uff0c ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"http://www.redis.cn/topics/data-types-intro.html#hashes"}),"\u6563\u5217\uff08hashes\uff09"),"\uff0c ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"http://www.redis.cn/topics/data-types-intro.html#lists"}),"\u5217\u8868\uff08lists\uff09"),"\uff0c ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"http://www.redis.cn/topics/data-types-intro.html#sets"}),"\u96c6\u5408\uff08sets\uff09"),"\uff0c ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"http://www.redis.cn/topics/data-types-intro.html#sorted-sets"}),"\u6709\u5e8f\u96c6\u5408\uff08sorted sets\uff09")," \u4e0e\u8303\u56f4\u67e5\u8be2\uff0c ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"http://www.redis.cn/topics/data-types-intro.html#bitmaps"}),"bitmaps"),"\uff0c ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"http://www.redis.cn/topics/data-types-intro.html#hyperloglogs"}),"hyperloglogs")," \u548c ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"http://www.redis.cn/commands/geoadd.html"}),"\u5730\u7406\u7a7a\u95f4\uff08geospatial\uff09")," \u7d22\u5f15\u534a\u5f84\u67e5\u8be2\u3002 Redis \u5185\u7f6e\u4e86 ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"http://www.redis.cn/topics/replication.html"}),"\u590d\u5236\uff08replication\uff09"),"\uff0c",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"http://www.redis.cn/commands/eval.html"}),"LUA\u811a\u672c\uff08Lua scripting\uff09"),"\uff0c ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"http://www.redis.cn/topics/lru-cache.html"}),"LRU\u9a71\u52a8\u4e8b\u4ef6\uff08LRU eviction\uff09"),"\uff0c",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"http://www.redis.cn/topics/transactions.html"}),"\u4e8b\u52a1\uff08transactions\uff09")," \u548c\u4e0d\u540c\u7ea7\u522b\u7684 ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"http://www.redis.cn/topics/persistence.html"}),"\u78c1\u76d8\u6301\u4e45\u5316\uff08persistence\uff09"),"\uff0c \u5e76\u901a\u8fc7 ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"http://www.redis.cn/topics/sentinel.html"}),"Redis\u54e8\u5175\uff08Sentinel\uff09"),"\u548c\u81ea\u52a8 ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"http://www.redis.cn/topics/cluster-tutorial.html"}),"\u5206\u533a\uff08Cluster\uff09"),"\u63d0\u4f9b\u9ad8\u53ef\u7528\u6027\uff08high availability\uff09\u3002")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Redis\uff08Remote Dictionary Server )\uff0c\u5373\u8fdc\u7a0b\u5b57\u5178\u670d\u52a1\uff0c\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u4f7f\u7528ANSI ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://baike.baidu.com/item/C%E8%AF%AD%E8%A8%80"}),"C\u8bed\u8a00"),"\u7f16\u5199\u3001\u652f\u6301\u7f51\u7edc\u3001\u53ef\u57fa\u4e8e\u5185\u5b58\u4ea6\u53ef\u6301\u4e45\u5316\u7684\u65e5\u5fd7\u578b\u3001Key-Value",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://baike.baidu.com/item/%E6%95%B0%E6%8D%AE%E5%BA%93/103728"}),"\u6570\u636e\u5e93"),"\uff0c\u5e76\u63d0\u4f9b\u591a\u79cd\u8bed\u8a00\u7684API\u3002")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"\u514d\u8d39\u5f00\u6e90\uff0c\u5f53\u4e0b\u6700\u70ed\u95e8\u7684NoSQL\u6280\u672f\u4e4b\u4e00\uff0c\u4e5f\u88ab\u4eba\u4eec\u79f0\u4e3a\u7ed3\u6784\u5316\u6570\u636e\u5e93"))),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Redis\u80fd\u5e72\u4ec0\u4e48")),Object(n.b)("p",null,"redis\u662f\u4e00\u4e2akey-value",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://baike.baidu.com/item/%E5%AD%98%E5%82%A8%E7%B3%BB%E7%BB%9F"}),"\u5b58\u50a8\u7cfb\u7edf"),"\u3002\u548cMemcached\u7c7b\u4f3c\uff0c\u5b83\u652f\u6301\u5b58\u50a8\u7684value\u7c7b\u578b\u76f8\u5bf9\u66f4\u591a\uff0c\u5305\u62ecstring(\u5b57\u7b26\u4e32)\u3001list(",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://baike.baidu.com/item/%E9%93%BE%E8%A1%A8"}),"\u94fe\u8868"),")\u3001set(\u96c6\u5408)\u3001zset(sorted set --\u6709\u5e8f\u96c6\u5408)\u548chash\uff08\u54c8\u5e0c\u7c7b\u578b\uff09\u3002\u8fd9\u4e9b",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://baike.baidu.com/item/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B"}),"\u6570\u636e\u7c7b\u578b"),"\u90fd\u652f\u6301push/pop\u3001add/remove\u53ca\u53d6\u4ea4\u96c6\u5e76\u96c6\u548c\u5dee\u96c6\u53ca\u66f4\u4e30\u5bcc\u7684\u64cd\u4f5c\uff0c\u800c\u4e14\u8fd9\u4e9b\u64cd\u4f5c\u90fd\u662f\u539f\u5b50\u6027\u7684\u3002\u5728\u6b64\u57fa\u7840\u4e0a\uff0credis\u652f\u6301\u5404\u79cd\u4e0d\u540c\u65b9\u5f0f\u7684\u6392\u5e8f\u3002\u4e0ememcached\u4e00\u6837\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u6548\u7387\uff0c\u6570\u636e\u90fd\u662f\u7f13\u5b58\u5728\u5185\u5b58\u4e2d\u3002\u533a\u522b\u7684\u662fredis\u4f1a\u5468\u671f\u6027\u7684\u628a\u66f4\u65b0\u7684\u6570\u636e\u5199\u5165\u78c1\u76d8\u6216\u8005\u628a\u4fee\u6539\u64cd\u4f5c\u5199\u5165\u8ffd\u52a0\u7684\u8bb0\u5f55\u6587\u4ef6\uff0c\u5e76\u4e14\u5728\u6b64\u57fa\u7840\u4e0a\u5b9e\u73b0\u4e86master-slave(\u4e3b\u4ece)\u540c\u6b65\u3002"),Object(n.b)("p",null,"\u6bcf\u79d2\u51998\u4e07\u6b21\uff0c\u8bfb11\u4e07\u6b21"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"\u5185\u5b58\u5b58\u50a8\u3001\u6301\u4e45\u5316\uff0c\u5185\u5b58\u4e2d\u662f\u65ad\u7535\u5373\u5931\uff0c\u6240\u4ee5",Object(n.b)("strong",{parentName:"li"},"\u6301\u4e45\u5316\u5f88\u91cd\u8981\uff08RDB\u3001AOF\uff09")),Object(n.b)("li",{parentName:"ol"},"\u6548\u7387\u9ad8\uff0c\u53ef\u7528\u4e8e\u9ad8\u6548\u7f13\u5b58"),Object(n.b)("li",{parentName:"ol"},"\u53d1\u5e03\u8ba2\u9605\u7cfb\u7edf"),Object(n.b)("li",{parentName:"ol"},"\u5730\u56fe\u4fe1\u606f\u5206\u6790"),Object(n.b)("li",{parentName:"ol"},"\u8ba1\u65f6\u5668\u3001\u6280\u672f\u53bb\uff08\u7f51\u7ad9\u6d4f\u89c8\u91cf\uff09")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Redis\u7684\u7279\u6027")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\u591a\u6837\u7684\u6570\u636e\u7c7b\u578b"),Object(n.b)("li",{parentName:"ul"},"\u6301\u4e45\u5316"),Object(n.b)("li",{parentName:"ul"},"\u96c6\u7fa4"),Object(n.b)("li",{parentName:"ul"},"\u4e8b\u52a1")),Object(n.b)("h1",{id:"linux\u5b89\u88c5redis"},"Linux\u5b89\u88c5Redis"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"\u5b98\u7f51\u4e0b\u8f7dRedis\u5b89\u88c5\u5305")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"\u4f7f\u7528filezila\u5c06\u5b89\u88c5\u5305\u4e0a\u4f20\u5230Linux\u7684home\u76ee\u5f55\u4e0b")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"\u5c06redis\u5b89\u88c5\u5305\u79fb\u52a8\u5230",Object(n.b)("inlineCode",{parentName:"p"},"/opt"),"\u8def\u5f84\u4e0b"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"mv redis-6.0.3.tar.gz /opt\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"\u89e3\u538bredis\u5b89\u88c5\u5305"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"tar -zxvf redis-6.0.3.tar.gz\n")),Object(n.b)("p",{parentName:"li"},Object(n.b)("img",{alt:"image-20200521213319799",src:a(899).default}))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"\u5b89\u88c5"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"centos"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"yum install gcc-c++\n")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(b.a)({parentName:"pre"},{}),"sudo make\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"ubuntu"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"sudo make\n")),Object(n.b)("p",{parentName:"li"},"\u62a5\u627e\u4e0d\u5230",Object(n.b)("inlineCode",{parentName:"p"},"cc"),"\u9519\u8bef\u5219\u5b89\u88c5gcc"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"sudo apt install gcc\n")),Object(n.b)("p",{parentName:"li"},"\u6b64\u65f6\u6267\u884c",Object(n.b)("inlineCode",{parentName:"p"},"make"),"\u547d\u4ee4\uff0c\u5982\u679c\u62a5\u9519\uff0c\u662f\u56e0\u4e3a\u4e0a\u6b21\u7f16\u8bd1\u6709\u6b8b\u7559\u6587\u4ef6\u3002"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"make distclean\n")),Object(n.b)("p",{parentName:"li"},"\u8fd0\u884c\u6d4b\u8bd5"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"sudo make test\n")),Object(n.b)("p",{parentName:"li"},"\u5b89\u88c5redis\u5230",Object(n.b)("inlineCode",{parentName:"p"},"/usr/local/bin"),"\u76ee\u5f55"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"sudo make install\n")),Object(n.b)("p",{parentName:"li"},"\u8fdb\u5165",Object(n.b)("inlineCode",{parentName:"p"},"/usr/local/bin"),"\u67e5\u770b"),Object(n.b)("p",{parentName:"li"},Object(n.b)("img",{alt:"image-20200521214809394",src:a(900).default})))))),Object(n.b)("ol",{start:6},Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"\u5c06redis\u914d\u7f6e\u6587\u4ef6\u590d\u5236\u5230\u5f53\u524d\u76ee\u5f55\u4e0b"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"mkdir myconfig\n")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"cp /opt/redis-6.0.3/redis.conf myconfig\n")),Object(n.b)("p",{parentName:"li"},"\u4e4b\u540e\u5c31\u662f\u7528\u8fd9\u4e2a\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u542f\u52a8")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"redis\u9ed8\u8ba4\u4e0d\u662f\u540e\u53f0\u542f\u52a8\u7684\uff0c\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"sudo nano redis.conf\n")),Object(n.b)("p",{parentName:"li"},"\u4fee\u6539",Object(n.b)("inlineCode",{parentName:"p"},"daemonize no"),"\u4e3a",Object(n.b)("inlineCode",{parentName:"p"},"daemonize yes"),"\uff0c\u5f00\u542f\u540e\u53f0\u542f\u52a8")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"\u542f\u52a8redis\u670d\u52a1")),Object(n.b)("p",{parentName:"li"},"\u4f7f\u7528",Object(n.b)("strong",{parentName:"p"},"\u6307\u5b9a\u7684\u914d\u7f6e\u6587\u4ef6"),"\u542f\u52a8redis"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"redis-server myconfig/redis.conf\n")),Object(n.b)("p",{parentName:"li"},Object(n.b)("img",{alt:"image-20200521220720217",src:a(901).default}))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"\u4f7f\u7528redis\u5ba2\u6237\u7aef"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"-h"),"\uff1a\u4e3b\u673a")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"-p"),"\uff1a\u7aef\u53e3"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"redis-cli -p 6379\n")),Object(n.b)("p",{parentName:"li"},"   ",Object(n.b)("strong",{parentName:"p"},"\u6d4b\u8bd5\u5b58\u53d6\u4e00\u4e2a\u952e\u503c\u5bf9")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"set key value\nget key\n")))),Object(n.b)("p",{parentName:"li"},Object(n.b)("img",{alt:"image-20200521221022797",src:a(902).default})),Object(n.b)("p",{parentName:"li"},"   ",Object(n.b)("strong",{parentName:"p"},"\u67e5\u770b\u6240\u6709\u7684\u952e")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"keys *\n")),Object(n.b)("p",{parentName:"li"},"   ",Object(n.b)("strong",{parentName:"p"},"\u67e5\u770bredis\u8fdb\u7a0b\u662f\u5426\u5f00\u542f")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"ps -ef | grep redis\n")),Object(n.b)("p",{parentName:"li"},"   ",Object(n.b)("img",{alt:"image-20200521222137669",src:a(903).default}))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"\u9000\u51faredis"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"shutdown\n")),Object(n.b)("p",{parentName:"li"},"   \u7136\u540e"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"exit\n")),Object(n.b)("p",{parentName:"li"},"   ",Object(n.b)("img",{alt:"image-20200521222306661",src:a(904).default})),Object(n.b)("p",{parentName:"li"},"   \u540c\u65f6\u5173\u95ed",Object(n.b)("inlineCode",{parentName:"p"},"redis-server"),"\u548c",Object(n.b)("inlineCode",{parentName:"p"},"redis-cli")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"ps -ef | grep redis\n")),Object(n.b)("p",{parentName:"li"},"   \u4f1a\u53d1\u73b0\u8fdb\u7a0b\u5df2\u7ecf\u6d88\u5931"),Object(n.b)("h1",Object(b.a)({parentName:"li"},{id:"redis-benchmar\u6027\u80fd\u6d4b\u8bd5\u5de5\u5177"}),"redis-benchmar\u6027\u80fd\u6d4b\u8bd5\u5de5\u5177"))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"-p"),":\u7aef\u53e3")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"-h"),":\u4e3b\u673a")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"-c"),":\u8fde\u63a5\u6570")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"-n"),":\u5e76\u53d1\u6570"),Object(n.b)("p",{parentName:"li"},"\u6d4b\u8bd550\u4e2a\u5e76\u53d1\u94fe\u63a5,\u6bcf\u4e00\u4e2a\u94fe\u63a510w\u4e2a\u8bf7\u6c42"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"redis-benchmark -p 6379 -c 50 -n 100000\n")),Object(n.b)("p",{parentName:"li"},Object(n.b)("img",{src:a(905).default})))),Object(n.b)("h1",{id:"redis\u57fa\u7840\u77e5\u8bc6"},"Redis\u57fa\u7840\u77e5\u8bc6"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"\u5207\u6362\u6570\u636e\u5e93")),Object(n.b)("p",null,"redis\u9ed8\u8ba4\u6709",Object(n.b)("inlineCode",{parentName:"p"},"16"),"\u4e2a\u6570\u636e\u5e93,\u53ef\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u770b\u5230"),Object(n.b)("p",null,"\u9ed8\u8ba4\u4f7f\u7528\u7b2c0\u4e2a\u6570\u636e\u5e93,\u53ef\u4f7f\u7528",Object(n.b)("inlineCode",{parentName:"p"},"select"),"\u8fdb\u884c\u5207\u6362"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"select \u6570\u636e\u5e93\u7d22\u5f15\u53f7\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"\u67e5\u770b\u6570\u636e\u5e93\u5927\u5c0f")),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"dbsize\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"\u67e5\u770b\u5f53\u524d\u6570\u636e\u5e93\u4e2d\u6240\u6709\u7684key")),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"keys *\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"\u6e05\u7a7a\u5f53\u524d\u6570\u636e\u5e93")),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"flushdb\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"\u6e05\u7a7a\u6240\u6709\u6570\u636e\u5e93")),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"flushall\n")),Object(n.b)("h2",{id:"redis\u662f\u5355\u7ebf\u7a0b\u8fd8\u662f\u591a\u7ebf\u7a0b"},"Redis\u662f\u5355\u7ebf\u7a0b\u8fd8\u662f\u591a\u7ebf\u7a0b"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"\u5355\u7ebf\u7a0b\u6307\u7684\u662f\u7f51\u7edc\u8bf7\u6c42\u6a21\u5757\u4f7f\u7528\u4e86\u4e00\u4e2a\u7ebf\u7a0b\uff08\u6240\u4ee5\u4e0d\u9700\u8003\u8651\u5e76\u53d1\u5b89\u5168\u6027\uff09\uff0c\u5373\u4e00\u4e2a\u7ebf\u7a0b\u5904\u7406\u6240\u6709\u7f51\u7edc\u8bf7\u6c42\uff0c\u5176\u4ed6\u6a21\u5757\u4ecd\u7528\u4e86\u591a\u4e2a\u7ebf\u7a0b\u3002"),Object(n.b)("p",{parentName:"blockquote"}," redis\u5b9e\u9645\u4e0a\u662f\u91c7\u7528\u4e86\u7ebf\u7a0b\u5c01\u95ed\u7684\u89c2\u5ff5\uff0c\u628a\u4efb\u52a1\u5c01\u95ed\u5728\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u81ea\u7136\u907f\u514d\u4e86\u7ebf\u7a0b\u5b89\u5168\u95ee\u9898\uff0c\u4e0d\u8fc7\u5bf9\u4e8e\u9700\u8981\u4f9d\u8d56\u591a\u4e2aredis\u64cd\u4f5c\u7684\u590d\u5408\u64cd\u4f5c\u6765\u8bf4\uff0c\u4f9d\u7136\u9700\u8981\u9501\uff0c\u800c\u4e14\u6709\u53ef\u80fd\u662f\u5206\u5e03\u5f0f\u9501\u3002"),Object(n.b)("ul",{parentName:"blockquote"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"\u7edd\u5927\u90e8\u5206\u8bf7\u6c42\u662f\u7eaf\u7cb9\u7684\u5185\u5b58\u64cd\u4f5c\uff08\u975e\u5e38\u5feb\u901f\uff09")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"\u91c7\u7528\u5355\u7ebf\u7a0b,\u907f\u514d\u4e86\u4e0d\u5fc5\u8981\u7684\u4e0a\u4e0b\u6587\u5207\u6362\u548c\u7ade\u4e89\u6761\u4ef6")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"\u975e\u963b\u585eIO - IO\u591a\u8def\u590d\u7528")))),Object(n.b)("p",null,"Redis\u57fa\u4e8eC\u5f00\u53d1,100000QPS"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Redis\u4e3a\u4ec0\u4e48\u5355\u7ebf\u7a0b\u8fd8\u8fd9\u4e48\u5feb?")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"\u8bef\u533a1:\u9ad8\u6027\u80fd\u7684\u670d\u52a1\u5668\u4e00\u5b9a\u662f\u591a\u7ebf\u7a0b\u7684"),Object(n.b)("li",{parentName:"ol"},"\u8bef\u533a2:\u591a\u7ebf\u7a0b\u4e00\u5b9a\u6bd4\u5355\u7ebf\u7a0b\u6548\u7387\u9ad8")),Object(n.b)("p",null,"redis\u5c06\u6240\u6709\u6570\u636e\u5b58\u653e\u5728\u5185\u5b58\u4e2d,\u6240\u4ee5\u4f7f\u7528\u5355\u7ebf\u7a0b\u64cd\u4f5c\u6548\u7387\u5f88\u9ad8,\u5bf9\u4e8e\u5185\u5b58\u7cfb\u7edf\u800c\u8a00\u5982\u679c\u6ca1\u6709\u4e0a\u4e0b\u6587\u5207\u6362\u6548\u7387\u5c31\u5f88\u9ad8,\u591a\u6b21\u90fd\u5199\u90fd\u5728\u540c\u4e00\u4e2aCPU\u4e0a"))}s.isMDXComponent=!0},566:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var b=a(0),r=a.n(b);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,b,r=function(e,t){if(null==e)return{};var a,b,r={},n=Object.keys(e);for(b=0;b<n.length;b++)a=n[b],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(b=0;b<n.length;b++)a=n[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},o=r.a.forwardRef((function(e,t){var a=e.components,b=e.mdxType,n=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=s(a),o=b,j=m["".concat(c,".").concat(o)]||m[o]||O[o]||n;return a?r.a.createElement(j,p(p({ref:t},l),{},{components:a})):r.a.createElement(j,p({ref:t},l))}));function j(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var n=a.length,c=new Array(n);c[0]=o;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:b,c[1]=p;for(var l=2;l<n;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"},899:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/4-e5812056da3173349f4db78a4d32966f.png"},900:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/5-76c089889e7faaaf49e87baacb45e27d.png"},901:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/6-3e6b4708c6df30f14648865a8aaf4f42.png"},902:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/7-9273dfe1656ce331d673d39fdb48eaeb.png"},903:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/8-d21e11d3bf314aade91063bac0846018.png"},904:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/9-1b66e929981f84bad510c2854c6013a3.png"},905:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/10-c61251d9e85d069c785025ece41fb0aa.png"}}]);