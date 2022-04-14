(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{354:function(e,t,b){"use strict";b.r(t),b.d(t,"frontMatter",(function(){return l})),b.d(t,"metadata",(function(){return o})),b.d(t,"rightToc",(function(){return r})),b.d(t,"default",(function(){return i}));var n=b(2),a=b(6),c=(b(0),b(574)),l={id:"3.fiveDatastructure",title:"\u4e94\u5927\u6570\u636e\u7c7b\u578b",hide_title:!0},o={unversionedId:"redis/3.fiveDatastructure",id:"redis/3.fiveDatastructure",isDocsHomePage:!1,title:"\u4e94\u5927\u6570\u636e\u7c7b\u578b",description:"\u4e94\u5927\u6570\u636e\u7c7b\u578b",source:"@site/docs/redis/3.\u4e94\u5927\u6570\u636e\u7c7b\u578b.md",slug:"/redis/3.fiveDatastructure",permalink:"/docs/redis/3.fiveDatastructure",version:"current",sidebar:"someSidebar",previous:{title:"Redis\u5165\u95e8",permalink:"/docs/redis/2.helloRedis"},next:{title:"\u4e09\u79cd\u7279\u6b8a\u6570\u636e\u7c7b\u578b",permalink:"/docs/redis/4.threeSpecificDataStructure"}},r=[{value:"\u4e94\u5927\u6570\u636e\u7c7b\u578b",id:"\u4e94\u5927\u6570\u636e\u7c7b\u578b",children:[{value:"Redis-Key",id:"redis-key",children:[]},{value:"String(\u5b57\u7b26\u4e32)",id:"string\u5b57\u7b26\u4e32",children:[]},{value:"List",id:"list",children:[]},{value:"Set",id:"set",children:[]},{value:"Hash",id:"hash",children:[]},{value:"Zset(\u6709\u5e8f\u96c6\u5408)",id:"zset\u6709\u5e8f\u96c6\u5408",children:[]}]}],p={rightToc:r};function i(e){var t=e.components,b=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,b,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"\u4e94\u5927\u6570\u636e\u7c7b\u578b"},"\u4e94\u5927\u6570\u636e\u7c7b\u578b"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Redis \u662f\u4e00\u4e2a\u5f00\u6e90\uff08BSD\u8bb8\u53ef\uff09\u7684\uff0c\u5185\u5b58\u4e2d\u7684\u6570\u636e\u7ed3\u6784\u5b58\u50a8\u7cfb\u7edf\uff0c\u5b83\u53ef\u4ee5\u7528\u4f5c\u6570\u636e\u5e93\u3001\u7f13\u5b58\u548c\u6d88\u606f\u4e2d\u95f4\u4ef6\u3002 \u5b83\u652f\u6301\u591a\u79cd\u7c7b\u578b\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5982 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.redis.cn/topics/data-types-intro.html#strings"}),"\u5b57\u7b26\u4e32\uff08strings\uff09"),"\uff0c ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.redis.cn/topics/data-types-intro.html#hashes"}),"\u6563\u5217\uff08hashes\uff09"),"\uff0c ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.redis.cn/topics/data-types-intro.html#lists"}),"\u5217\u8868\uff08lists\uff09"),"\uff0c ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.redis.cn/topics/data-types-intro.html#sets"}),"\u96c6\u5408\uff08sets\uff09"),"\uff0c ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.redis.cn/topics/data-types-intro.html#sorted-sets"}),"\u6709\u5e8f\u96c6\u5408\uff08sorted sets\uff09")," \u4e0e\u8303\u56f4\u67e5\u8be2\uff0c ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.redis.cn/topics/data-types-intro.html#bitmaps"}),"bitmaps"),"\uff0c ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.redis.cn/topics/data-types-intro.html#hyperloglogs"}),"hyperloglogs")," \u548c ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.redis.cn/commands/geoadd.html"}),"\u5730\u7406\u7a7a\u95f4\uff08geospatial\uff09")," \u7d22\u5f15\u534a\u5f84\u67e5\u8be2\u3002 Redis \u5185\u7f6e\u4e86 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.redis.cn/topics/replication.html"}),"\u590d\u5236\uff08replication\uff09"),"\uff0c",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.redis.cn/commands/eval.html"}),"LUA\u811a\u672c\uff08Lua scripting\uff09"),"\uff0c ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.redis.cn/topics/lru-cache.html"}),"LRU\u9a71\u52a8\u4e8b\u4ef6\uff08LRU eviction\uff09"),"\uff0c",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.redis.cn/topics/transactions.html"}),"\u4e8b\u52a1\uff08transactions\uff09")," \u548c\u4e0d\u540c\u7ea7\u522b\u7684 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.redis.cn/topics/persistence.html"}),"\u78c1\u76d8\u6301\u4e45\u5316\uff08persistence\uff09"),"\uff0c \u5e76\u901a\u8fc7 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.redis.cn/topics/sentinel.html"}),"Redis\u54e8\u5175\uff08Sentinel\uff09"),"\u548c\u81ea\u52a8 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.redis.cn/topics/cluster-tutorial.html"}),"\u5206\u533a\uff08Cluster\uff09"),"\u63d0\u4f9b\u9ad8\u53ef\u7528\u6027\uff08high availability\uff09"),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"Redis-Key")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"String")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"List")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"Set")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"Hash")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"Zset")))),Object(c.b)("h2",{id:"redis-key"},"Redis-Key"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"exists \u952e"),":\u5224\u65adkey\u662f\u5426\u5b58\u5728")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"move \u952e \u6570\u636e\u5e93\u7d22\u5f15"),"  \u5c06\u6307\u5b9a\u952e\u79fb\u52a8\u5230\u6307\u5b9a\u6570\u636e\u5e93")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"expire \u952e \u79d2"),"  \u6307\u5b9a\u67d0\u4e2a\u952e\u7684\u8fc7\u671f\u65f6\u95f4")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"ttl \u952e"),"  \u67e5\u770b\u952e\u7684\u5269\u4f59\u8fc7\u671f\u65f6\u95f4")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"type \u952e"),"   \u67e5\u770b\u952e\u7684\u7c7b\u578b")),Object(c.b)("h2",{id:"string\u5b57\u7b26\u4e32"},"String(\u5b57\u7b26\u4e32)"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"append \u952e \u8ffd\u52a0\u5185\u5bb9"),"\u5b57\u7b26\u4e32\u8ffd\u52a0")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"strlen \u952e"),"\u83b7\u53d6\u5b57\u7b26\u4e32\u957f\u5ea6")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"incr \u952e"),"\u81ea\u589e1")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"decr \u952e"),"\u81ea\u51cf1")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"incrby \u952e \u6b65\u957f"),"\u81ea\u589e\u6b65\u957f")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"decrby \u952e \u6b65\u957f"),"\u81ea\u5efa\u6b65\u957f")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"getrange \u952e \u5f00\u59cb \u7ed3\u675f"),"\u83b7\u53d6\u6307\u5b9a\u533a\u95f4\u7684\u5b57\u7b26\u4e32 ",Object(c.b)("strong",{parentName:"p"},"\u5de6\u95ed\u53f3\u95ed")),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u67e5\u770b\u5b8c\u6574\u5b57\u7b26\u4e32: ",Object(c.b)("inlineCode",{parentName:"li"},"getrange \u952e 0 -1")))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"setrange \u952e \u8d77\u59cb\u4e0b\u6807 \u65b0\u5b57\u7b26\u4e32"),"\u7c7b\u4f3c\u4e0ereplace")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"setex")," \u5373 set expire\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4"),Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"setex \u952e \u8fc7\u671f\u65f6\u95f4 \u5b57\u7b26\u4e32"))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"setnx")," \u5373 set if not exist,\u5982\u679c\u4e0d\u5b58\u5728\u5219\u8bbe\u7f6e,\u5982\u679c\u5b58\u5728\u4e0d\u4f1a\u4fee\u6539\u4e3a\u65b0\u503c"),Object(c.b)("p",{parentName:"blockquote"},"\u5e38\u7528\u4e8e\u5206\u5e03\u5f0f\u9501"),Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"setnx \u952e \u5b57\u7b26\u4e32"))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"mset"),"\u6279\u91cf\u8bbe\u7f6e"),Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"mget"),"\u6279\u91cf\u83b7\u53d6"),Object(c.b)("pre",{parentName:"blockquote"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"mset k1 v1 k2 v2 k3 v3 ...\n")),Object(c.b)("pre",{parentName:"blockquote"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"mget k1 k2 k3\n"))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"msetnx"),"\u6279\u91cf\u5982\u679c\u4e0d\u5b58\u5728\u8bbe\u7f6e,\u5176\u4e2d\u4efb\u4f55\u4e00\u4e2a\u952e\u8bbe\u7f6e\u5931\u8d25\u5219\u5168\u90e8\u5931\u8d25,",Object(c.b)("strong",{parentName:"p"},"\u539f\u5b50\u6027"))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u8bbe\u7f6e\u4ee5JSON\u5b57\u7b26\u4e32\u8868\u793a\u7684\u5bf9\u8c61"),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u5c06",Object(c.b)("inlineCode",{parentName:"li"},"key"),"\u8bbe\u7f6e\u4e3a",Object(c.b)("inlineCode",{parentName:"li"},"user:{id}:{field}"))),Object(c.b)("pre",{parentName:"blockquote"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'127.0.0.1:6379> mset user:1:name bsx user:1:age 2\nOK\n127.0.0.1:6379> mget user:1:name user:1:age\n1) "bsx"\n2) "2"\n'))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"getset"),"\u5148\u83b7\u53d6,\u518d\u8bbe\u7f6e. \u5148\u8fd4\u56de\u5f53\u524d\u503c,\u518d\u8bbe\u7f6e\u65b0\u503c")),Object(c.b)("h2",{id:"list"},"List"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u5728redis\u4e2d,\u53ef\u4ee5\u7528list\u5b9e\u73b0\u6808\u3001\u961f\u5217\u3002\u6240\u6709\u7684list\u547d\u4ee4\u90fd\u662f\u4ee5",Object(c.b)("inlineCode",{parentName:"p"},"l"),"\u5f00\u5934\u7684")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"lpush \u5217\u8868\u540d \u503c")," \u5728list\u4e2d\u63d2\u5165\u6570\u636e,\u5de6\u63d2\u5165")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"rpush \u5217\u8868\u540d \u503c")," \u53f3\u63d2\u5165")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"lrange \u5217\u8868\u540d \u5f00\u59cb \u7ed3\u675f")," ")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"lpop \u5217\u8868")," \u4ece\u5de6\u4fa7\u5f39\u51fa")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"rpop \u5217\u8868")," \u4ece\u53f3\u4fa7\u5f39\u51fa")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"lindex \u5217\u8868 \u4e0b\u6807")," \u83b7\u53d6\u6307\u5b9a\u5217\u8868\u6307\u5b9a\u4e0b\u6807\u7684\u5143\u7d20")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"llen \u5217\u8868")," \u5217\u8868\u957f\u5ea6")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"lrem \u5217\u8868 \u79fb\u9664\u51e0\u4e2a \u952e"),"   \u79fb\u9664\u6307\u5b9a\u4e2a\u6570\u4e2a\u76ee\u6807\u952e")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"ltrim \u5217\u8868 \u5f00\u59cb \u7ed3\u675f"),"  \u622a\u65ad\u76ee\u6807\u5217\u8868,\u8303\u56f4\u5185\u7684\u503c,\u4ece\u5217\u8868\u5de6\u4fa7\u8d77\u4fdd\u7559\u5143\u7d20,\u8303\u56f4\u5916\u7684\u53f3\u4fa7\u5143\u7d20\u4e22\u5f03")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"rpoplpush \u6e90\u5217\u8868 \u76ee\u6807\u5217\u8868")," \u4ece\u6e90\u5217\u8868\u7684\u6700\u53f3\u4fa7\u5f39\u51fa\u4e00\u4e2a\u5143\u7d20,\u5de6\u4fa7\u6dfb\u52a0\u5230\u76ee\u6807\u5217\u8868")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"lset \u5217\u8868 \u6307\u5b9a\u4e0b\u6807 \u503c"),"  \u6539\u53d8\u6307\u5b9a\u4e0b\u6807\u7684\u503c")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"linsert \u5217\u540d before|after \u67d0\u4e2a\u5df2\u5b58\u5728\u7684\u5b57\u7b26\u4e32 \u8981\u63d2\u5165\u7684\u5b57\u7b26\u4e32"))),Object(c.b)("h2",{id:"set"},"Set"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"sadd set\u540d \u503c")," \u5411set\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u503c")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"smembers set\u540d")," \u67e5\u770bset\u4e2d\u7684\u503c")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"sismember set\u540d \u6210\u5458"),"  \u67e5\u770bset\u4e2d\u662f\u5426\u6709\u67d0\u4e2a\u5143\u7d20")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"scard set\u540d")," \u67e5\u770bset\u4e2d\u5143\u7d20\u4e2a\u6570")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"srem set\u540d \u5143\u7d20"),"  \u79fb\u9664\u76ee\u6807\u5143\u7d20")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"srandmember set\u540d n")," \u968f\u673a\u8fd4\u56deset\u4e2d\u7684\u4e00\u4e2an\u4e2a\u5143\u7d20")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"spop set\u540d")," \u968f\u673a\u5f39\u51fa\u4e00\u4e2a\u5143\u7d20")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"smove \u6e90set \u76ee\u6807set \u67d0\u4e2a\u6210\u5458\u503c")," \u4ece\u6e90set\u79fb\u52a8\u6307\u5b9a\u6210\u5458\u503c\u5230\u76ee\u6807set")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"sinter set1 set2 set3...")," \u8fd4\u56de\u6307\u5b9aset\u96c6\u5408\u4e4b\u95f4\u7684",Object(c.b)("strong",{parentName:"p"},"\u4ea4\u96c6"))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"sdiff set1 set2 set3...")," \u8fd4\u56de\u6307\u5b9aset\u96c6\u5408\u4e4b\u95f4\u7684",Object(c.b)("strong",{parentName:"p"},"\u5dee\u96c6"))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"sunion set1 set2 set3...")," \u8fd4\u56de\u6307\u5b9aset\u96c6\u5408\u7684",Object(c.b)("strong",{parentName:"p"},"\u5e76\u96c6"))),Object(c.b)("h2",{id:"hash"},"Hash"),Object(c.b)("p",null,"Map\u96c6\u5408"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"hset \u54c8\u5e0cset\u540d \u952e \u503c"),"  \u5411hash set\u4e2d\u6dfb\u52a0\u5143\u7d20")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"hget \u54c8\u5e0cset\u540d \u952e")," \u83b7\u53d6\u76f4\u6307\u5b9ahase set\u6307\u5b9a\u952e\u7684\u503c")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"hmset \u54c8\u5e0cset\u540d \u952e \u503c \u952e \u503c ")," \u6279\u91cf\u63d2\u5165")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"hmget \u54c8\u5e0cset\u540d \u952e1 \u952e2 \u952e3")," \u6279\u91cf\u67e5\u8be2")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"hgetall \u54c8\u5e0cset\u540d")," \u83b7\u53d6\u54c8\u5e0cset\u6240\u6709\u5143\u7d20")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"hdel \u54c8\u5e0cset\u540d \u952e")," \u5220\u9664\u6307\u5b9a\u952e")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"hlen \u54c8\u5e0cset\u540d")," \u83b7\u53d6hash set\u7684\u957f\u5ea6")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"hexists \u54c8\u5e0cset\u540d \u952e")," \u8fd4\u56de\u76ee\u6807hash set\u96c6\u5408\u4e2d\u662f\u5426\u5305\u542b\u67d0\u952e")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"hkeys \u54c8\u5e0cset\u540d"),"  \u8fd4\u56de\u6307\u5b9a\u6240\u6709hash set\u7684\u952e")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"hvals \u54c8\u5e0cset\u540d")," \u8fd4\u56de\u6307\u5b9ahash set\u7684\u503c")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"hincrby \u54c8\u5e0cset\u540d \u952e \u589e\u52a0\u51e0")," \u6307\u5b9a\u952e\u81ea\u589e")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"hsetnnx \u54c8\u5e0cset\u540d \u952e \u503c")," \u4e0d\u5b58\u5728\u5219\u63d2\u5165\u503c\uff0c\u952e\u5b58\u5728\u5219\u4e0d\u63d2\u5165")),Object(c.b)("h2",{id:"zset\u6709\u5e8f\u96c6\u5408"},"Zset(\u6709\u5e8f\u96c6\u5408)"),Object(c.b)("p",null,"\u5728set\u7684\u57fa\u7840\u4e0a,\u589e\u52a0\u4e86\u4e00\u4e2a\u503c,score,\u6392\u5e8f\u503c\u3002 ",Object(c.b)("inlineCode",{parentName:"p"},"zset k1 score1 v1")," "),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"zadd set\u540d \u6392\u5e8f\u503c1 \u503c1 \u6392\u5e8f\u503c2 \u503c2...")," \u6dfb\u52a0\u5143\u7d20")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"zrange set\u540d \u8d77\u59cb \u7ed3\u675f")," ")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"ZRANGEBYSCORE set\u540d \u8d77\u59cb \u7ed3\u675f"),"  \u5728\u6307\u5b9ascore\u8303\u56f4\u5185\u5347\u5e8f\u6392\u5e8f"),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"ZRANGEBYSCORE zset1 -inf +inf")," \u5728zset1\u96c6\u5408\u4e2d\u6309\u6392\u5e8f\u503c\u4ece\u6b63\u65e0\u7a77\u5230\u8d1f\u65e0\u7a77\u6392\u5e8f"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"ZRANGEBYSCORE zset1 -inf +inf withscores")," \u5e26\u4e0a\u6392\u5e8f\u503c\u4e00\u8d77\u663e\u793a"))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"zrevrange set\u540d \u8d77\u59cb \u7ed3\u675f"),"  \u964d\u5e8f\u6392\u5e8f")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"zset set\u540d \u6210\u5458")," \u79fb\u9664\u6307\u5b9a\u6210\u5458\u503c")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"}," zcard set\u547d\u540d")," \u83b7\u53d6\u6307\u5b9aset\u7684\u957f\u5ea6")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"zcount set\u540d \u8d77\u59cb \u7ed3\u675f")," \u83b7\u53d6\u6307\u5b9a\u533a\u95f4\u7684\u5143\u7d20\u4e2a\u6570")))}i.isMDXComponent=!0},574:function(e,t,b){"use strict";b.d(t,"a",(function(){return u})),b.d(t,"b",(function(){return j}));var n=b(0),a=b.n(n);function c(e,t,b){return t in e?Object.defineProperty(e,t,{value:b,enumerable:!0,configurable:!0,writable:!0}):e[t]=b,e}function l(e,t){var b=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),b.push.apply(b,n)}return b}function o(e){for(var t=1;t<arguments.length;t++){var b=null!=arguments[t]?arguments[t]:{};t%2?l(Object(b),!0).forEach((function(t){c(e,t,b[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(b)):l(Object(b)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(b,t))}))}return e}function r(e,t){if(null==e)return{};var b,n,a=function(e,t){if(null==e)return{};var b,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)b=c[n],t.indexOf(b)>=0||(a[b]=e[b]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)b=c[n],t.indexOf(b)>=0||Object.prototype.propertyIsEnumerable.call(e,b)&&(a[b]=e[b])}return a}var p=a.a.createContext({}),i=function(e){var t=a.a.useContext(p),b=t;return e&&(b="function"==typeof e?e(t):o(o({},t),e)),b},u=function(e){var t=i(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var b=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=i(b),s=n,j=u["".concat(l,".").concat(s)]||u[s]||O[s]||c;return b?a.a.createElement(j,o(o({ref:t},p),{},{components:b})):a.a.createElement(j,o({ref:t},p))}));function j(e,t){var b=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=b.length,l=new Array(c);l[0]=s;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<c;p++)l[p]=b[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,b)}s.displayName="MDXCreateElement"}}]);