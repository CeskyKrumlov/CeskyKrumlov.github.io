(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return i}));var r=n(2),a=n(6),b=(n(0),n(353)),l={id:"9.duration",title:"Redis\u6301\u4e45\u5316",hide_title:!0},c={unversionedId:"redis/9.duration",id:"redis/9.duration",isDocsHomePage:!1,title:"Redis\u6301\u4e45\u5316",description:"Redis\u6301\u4e45\u5316",source:"@site/docs/redis/9.\u6301\u4e45\u5316.md",slug:"/redis/9.duration",permalink:"/docs/redis/9.duration",version:"current",sidebar:"someSidebar",previous:{title:"Redis\u914d\u7f6e",permalink:"/docs/redis/8.config"},next:{title:"Redis\u53d1\u5e03\u8ba2\u9605",permalink:"/docs/redis/10.pubSub"}},o=[{value:"Redis\u6301\u4e45\u5316",id:"redis\u6301\u4e45\u5316",children:[{value:"RDB\uff08Redis DataBase\uff09",id:"rdb\uff08redis-database\uff09",children:[{value:"\u4f18\u7f3a\u70b9",id:"\u4f18\u7f3a\u70b9",children:[]}]},{value:"AOF \uff08Append Only File\uff09",id:"aof-\uff08append-only-file\uff09",children:[{value:"\u4f18\u7f3a\u70b9",id:"\u4f18\u7f3a\u70b9-1",children:[]}]}]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],p={rightToc:o};function i(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},p,l,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"redis\u6301\u4e45\u5316"},"Redis\u6301\u4e45\u5316"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"Redis\u662f\u5185\u5b58\u6570\u636e\u5e93\uff0c\u5982\u679c\u4e0d\u80fd\u5c06\u5185\u5b58\u4e2d\u7684\u6570\u636e\u5e93\u72b6\u6001\u4fdd\u5b58\u5230\u78c1\u76d8\uff0c\u90a3\u4e48\u4e00\u65e6\u670d\u52a1\u5668\u8fdb\u7a0b\u9000\u51fa\uff0c\u670d\u52a1\u5668\u4e2d\u7684\u6570\u636e\u4e5f\u5c31\u6d88\u5931\uff0c\u6240\u4ee5Redis\u63d0\u4f9b\u4e86\u6301\u4e45\u5316\u529f\u80fd"))),Object(b.b)("h2",{id:"rdb\uff08redis-database\uff09"},"RDB\uff08Redis DataBase\uff09"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"SNAPSHOTTING\u5feb\u7167\u914d\u7f6e"))),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"\u4ec0\u4e48\u662fRDB"))),Object(b.b)("p",null,Object(b.b)("img",{alt:"image-20200714150547995",src:n(462).default})),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u5728\u6307\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u5185\u5c06\u5185\u5b58\u4e2d\u7684\u6570\u636e\u96c6\u5feb\u7167\u5199\u5165\u78c1\u76d8\uff0c\u4e5f\u5c31\u662f\u884c\u8bdd\u8bb2\u7684Snapshot\u5feb\u7167\uff0c\u5b83\u6062\u590d\u65f6\u662f\u5c06\u5feb \u7167\u6587\u4ef6\u76f4\u63a5\u8bfb\u5230\u5185\u5b58\u91cc")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Redis\u4f1a\u5355\u72ec\u521b\u5efa\uff08fork\uff09\u4e00\u4e2a",Object(b.b)("strong",{parentName:"li"},"\u5b50\u8fdb\u7a0b"),"\u6765\u8fdb\u884c\u6301\u4e45\u5316\uff0c"),Object(b.b)("li",{parentName:"ul"},"\u4f1a\u5148\u5c06\u6570\u636e\u5199\u5165\u5230\u4e00\u4e2a\u4e34\u65f6\u6587\u4ef6\u4e2d\uff0c\u5f85\u6301\u4e45\u5316\u8fc7\u7a0b\u90fd\u7ed3\u675f\u4e86\uff0c\u518d\u7528\u8fd9\u4e2a\u4e34\u65f6\u6587\u4ef6\u66ff\u6362\u4e0a\u6b21\u6301\u4e45\u5316\u597d\u7684\u6587\u4ef6\u3002"),Object(b.b)("li",{parentName:"ul"},"\u6574\u4e2a\u8fc7\u7a0b\u4e2d\uff0c",Object(b.b)("strong",{parentName:"li"},"\u4e3b\u8fdb\u7a0b\u4e0d\u8fdb\u884c\u4efb\u4f55IO\u64cd\u4f5c"),"\u3002 \u8fd9\u5c31\u786e\u4fdd\u4e86\u6781\u9ad8\u7684\u6027\u80fd\u3002"),Object(b.b)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981\u8fdb\u884c\u5927\u89c4\u6a21\u6570\u636e\u7684\u6062\u590d\uff0c\u4e14\u5bf9\u4e8e\u6570\u636e\u6062\u590d\u7684\u5b8c\u6574\u6027\u4e0d\u662f\u975e\u5e38\u654f\u611f\uff0c\u90a3 RDB\u65b9\u5f0f\u8981\u6bd4AOF\u65b9\u5f0f\u66f4\u52a0\u7684\u9ad8\u6548\u3002"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"RDB\u7684\u7f3a\u70b9\u662f\u540e\u4e00\u6b21\u6301\u4e45\u5316\u540e\u7684\u6570\u636e\u53ef\u80fd\u4e22\u5931(\u5982\u679c\u610f\u5916\u5b95\u673a)")," ")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"Fork"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Fork\u7684\u4f5c\u7528")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u590d\u5236\u4e00\u4e2a\u4e0e\u5f53\u524d\u8fdb\u7a0b\u4e00\u6837\u7684\u8fdb\u7a0b\u3002")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u65b0\u8fdb\u7a0b\u7684\u6240\u6709\u6570\u636e\uff08\u53d8\u91cf\uff0c\u73af\u5883\u53d8\u91cf\uff0c\u7a0b\u5e8f\u8ba1\u6570\u5668\u7b49\uff09 \u6570\u503c\u90fd\u548c\u539f\u8fdb\u7a0b\u4e00\u81f4")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u4f46\u662f\u662f\u4e00\u4e2a\u5168\u65b0\u7684\u8fdb\u7a0b\uff0c\u5e76\u4f5c\u4e3a\u539f\u8fdb\u7a0b\u7684\u5b50\u8fdb\u7a0b\u3002")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"RDB\u4fdd\u5b58\u7684\u662f",Object(b.b)("inlineCode",{parentName:"p"},"dump.rdb"),"\u6587\u4ef6"))),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"root@VM-0-17-ubuntu:/usr/local/bin# pwd\n/usr/local/bin\nroot@VM-0-17-ubuntu:/usr/local/bin# ll\ntotal 38400\ndrwxr-xr-x  3 root root    4096 Jul 14 11:26 ./\ndrwxr-xr-x 11 root root    4096 Jul 13 20:27 ../\n-rwxr-xr-x  1 root root     393 Mar 11 16:52 cloud-init*\n-rwxr-xr-x  1 root root    1781 Mar 11 16:52 cloud-init-per*\n-rw-r--r--  1 root root      92 Jul 14 11:26 dump.rdb ## \u2190###\n-rwxr-xr-x  1 root root     396 Mar 11 16:52 jsonschema*\ndrwxr-xr-x  2 root root    4096 Jul 14 13:46 myconfig/\n-rwxr-xr-x  1 root root 5452024 Jul 13 21:19 redis-benchmark*\n-rwxr-xr-x  1 root root 9485688 Jul 13 21:19 redis-check-aof*\n-rwxr-xr-x  1 root root 9485688 Jul 13 21:19 redis-check-rdb*\n-rwxr-xr-x  1 root root 5375272 Jul 13 21:19 redis-cli*\nlrwxrwxrwx  1 root root      12 Jul 13 21:19 redis-sentinel -> redis-server*\n-rwxr-xr-x  1 root root 9485688 Jul 13 21:19 redis-server*\n")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"SnapShot\u5feb\u7167\u914d\u7f6e")),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# 900\u79d2\uff0815\u5206\u949f\uff09\u5185\u81f3\u5c111\u4e2akey\u503c\u6539\u53d8\uff08\u5219\u8fdb\u884c\u6570\u636e\u5e93\u4fdd\u5b58--\u6301\u4e45\u5316\uff09 \nsave 900 1\n\n# 300\u79d2\uff085\u5206\u949f\uff09\u5185\u81f3\u5c1110\u4e2akey\u503c\u6539\u53d8\uff08\u5219\u8fdb\u884c\u6570\u636e\u5e93\u4fdd\u5b58--\u6301\u4e45\u5316\uff09 \nsave 300 10\n\n# 60\u79d2\uff081\u5206\u949f\uff09\u5185\u81f3\u5c1110000\u4e2akey\u503c\u6539\u53d8\uff08\u5219\u8fdb\u884c\u6570\u636e\u5e93\u4fdd\u5b58--\u6301\u4e45\u5316\uff09 \nsave 60 10000\n\nstop-writes-on-bgsave-error yes \xa0# \u6301\u4e45\u5316\u51fa\u73b0\u9519\u8bef\u540e\uff0c\u662f\u5426\u4f9d\u7136\u8fdb\u884c\u7ee7\u7eed\u8fdb\u884c\u5de5\u4f5c\n\nrdbcompression yes \xa0 # \u4f7f\u7528\u538b\u7f29rdb\u6587\u4ef6 yes\uff1a\u538b\u7f29\uff0c\u4f46\u662f\u9700\u8981\u4e00\u4e9bcpu\u7684\u6d88\u8017\u3002no\uff1a\u4e0d\u538b \u7f29\uff0c\u9700\u8981\u66f4\u591a\u7684\u78c1\u76d8\u7a7a\u95f4\n\nrdbchecksum yes \xa0 \xa0 \xa0# \u662f\u5426\u6821\u9a8crdb\u6587\u4ef6\uff0c\u66f4\u6709\u5229\u4e8e\u6587\u4ef6\u7684\u5bb9\u9519\u6027\uff0c\u4f46\u662f\u5728\u4fdd\u5b58rdb\u6587\u4ef6\u7684\u65f6 \u5019\uff0c\u4f1a\u6709\u5927\u698210%\u7684\u6027\u80fd\u635f\u8017\n\ndbfilename dump.rdb \xa0# dbfilenamerdb\u6587\u4ef6\u540d\u79f0\n\ndir ./ \xa0 \xa0# dir \u6570\u636e\u76ee\u5f55\uff0c\u6570\u636e\u5e93\u7684\u5199\u5165\u4f1a\u5728\u8fd9\u4e2a\u76ee\u5f55\u3002rdb\u3001aof\u6587\u4ef6\u4e5f\u4f1a\u5199\u5728\u8fd9\u4e2a\u76ee\u5f55\n")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u5982\u4f55\u89e6\u53d1RDB\u5feb\u7167")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u914d\u7f6e\u6587\u4ef6\u4e2d\u9ed8\u8ba4\u7684\u5feb\u7167\u914d\u7f6e\uff0c\u5efa\u8bae\u591a\u7528\u4e00\u53f0\u4e3b\u673a\u4f5c\u4e3a\u5907\u4efd\uff0c\u590d\u5236\u4e00\u4efddump.rdb"),Object(b.b)("li",{parentName:"ul"},"\u547d\u4ee4",Object(b.b)("inlineCode",{parentName:"li"},"save"),"\u6216\u8005",Object(b.b)("inlineCode",{parentName:"li"},"bgsave"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"save"),"\uff1a\u53ea\u7ba1\u4fdd\u5b58\uff0c\u5176\u4ed6\u4e0d\u7ba1\uff0c\u5168\u90e8",Object(b.b)("strong",{parentName:"li"},"\u963b\u585e")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"bgsave"),"\uff1a\u540e\u53f0\u5f02\u6b65\u8fdb\u884c\u5feb\u7167\u64cd\u4f5c\uff0c\u5feb\u7167\u540c\u65f6\u8fd8\u53ef\u4ee5\u54cd\u5e94\u7528\u6237\u8bf7\u6c42\uff0c\u53ef\u4ee5\u901a\u8fc7",Object(b.b)("inlineCode",{parentName:"li"},"lastsave"),"\u547d\u4ee4\u83b7\u53d6\u6700\u540e\u4e00\u6b21\u6210\u529f\u6267\u884c\u5feb\u7167\u7684\u65f6\u95f4"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"flushall"),"\u4e5f\u4f1a\u89e6\u53d1\u751f\u6210dump.rdb\u6587\u4ef6\uff0c\u4f46\u662f\u91cc\u9762\u662f\u7a7a\u7684"),Object(b.b)("li",{parentName:"ul"},"\u9000\u51fa\u65f6\u4e5f\u4f1a\u751f\u6210dump.db\u6587\u4ef6")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"\u5982\u4f55\u6062\u590d"))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u5c06dump.rdb\u79fb\u52a8\u5230redis\u5b89\u88c5\u76ee\u5f55\u5e76\u542f\u52a8\u670d\u52a1\u5373\u53ef"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"config get dir"),"\u83b7\u53d6\u76ee\u5f55")),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"127.0.0.1:6379> config get dir\ndir\n/usr/local/bin\n")),Object(b.b)("h3",{id:"\u4f18\u7f3a\u70b9"},"\u4f18\u7f3a\u70b9"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"\u4f18\u70b9"))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u9002\u5408\u5927\u89c4\u6a21\u6570\u636e\u6062\u590d"),Object(b.b)("li",{parentName:"ul"},"\u5bf9\u6570\u636e\u5b8c\u6574\u6027\u548c\u4e00\u81f4\u6027\u8981\u6c42\u4e0d\u9ad8")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"\u7f3a\u70b9"))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u9694\u4e00\u6bb5\u65f6\u95f4\u8fdb\u884c\u4e00\u6b21\u5907\u4efd\uff0c\u5982\u679credis\u610f\u5916\u5b95\u673a\uff0c\u5c31\u4f1a\u4e22\u5931\u6700\u540e\u4e00\u6b21\u5feb\u7167\u540e\u7684\u65b0\u6570\u636e"),Object(b.b)("li",{parentName:"ul"},"Fork\u65f6\uff0c\u5185\u5b58\u4e2d\u7684\u6570\u636e\u88ab\u590d\u5236\u4e86\u4e00\u4efd\uff0c\u8017\u8d39\u8d44\u6e90")),Object(b.b)("h2",{id:"aof-\uff08append-only-file\uff09"},"AOF \uff08Append Only File\uff09"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"APPEND ONLY\u914d\u7f6e"))),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"\u5c06\u6240\u6709\u6267\u884c\u8fc7\u7684\u547d\u4ee4\u90fd\u8bb0\u5f55\u4e0b\u6765\uff0c\u6062\u590d\u7684\u65f6\u5019\u5c31\u628a\u8fd9\u6587\u4ef6\u7684\u5185\u5bb9\u5168\u90e8\u91cd\u65b0\u6267\u884c\u4e00\u6b21"))),Object(b.b)("p",null,Object(b.b)("img",{alt:"image-20200714152551085",src:n(463).default})),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u4ee5\u65e5\u5fd7\u7684\u5f62\u5f0f\u6765",Object(b.b)("strong",{parentName:"p"},"\u8bb0\u5f55"),"\u6bcf\u4e2a",Object(b.b)("strong",{parentName:"p"},"\u5199\u64cd\u4f5c"),"\uff0c\u5c06Redis\u6267\u884c\u8fc7\u7684\u6240\u6709\u6307\u4ee4\u8bb0\u5f55\u4e0b\u6765\uff08",Object(b.b)("strong",{parentName:"p"},"\u8bfb\u64cd\u4f5c\u4e0d\u8bb0\u5f55"),"\uff09\uff0c")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"\u53ea\u8bb8\u8ffd\u52a0"),"\u6587\u4ef6 \u4f46",Object(b.b)("strong",{parentName:"p"},"\u4e0d\u53ef\u4ee5\u6539\u5199"),"\u6587\u4ef6\uff0c")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"redis\u542f\u52a8\u4e4b\u521d\u4f1a\u8bfb\u53d6\u8be5\u6587\u4ef6\u91cd\u65b0\u6784\u5efa\u6570\u636e\uff0c")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u6362\u8a00\u4e4b\uff0credis\u91cd\u542f\u7684\u8bdd\u5c31\u6839\u636e\u65e5\u5fd7\u6587\u4ef6\u7684\u5185\u5bb9\u5c06\u5199\u6307\u4ee4\u4ece\u524d\u5230\u540e\u6267\u884c\u4e00\u6b21\u4ee5\u5b8c\u6210\u6570\u636e\u7684\u6062\u590d\u5de5\u4f5c"))),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Append Only File \u914d\u7f6e")),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"appendonly no \xa0 # \u9ed8\u8ba4\u5173\u95ed\uff0c\u9700\u8981\u624b\u52a8\u6253\u5f00\n# \u662f\u5426\u4ee5append only\u6a21\u5f0f\u4f5c\u4e3a\u6301\u4e45\u5316\u65b9\u5f0f\uff0c\u9ed8\u8ba4\u4f7f\u7528\u7684\u662frdb\u65b9\u5f0f\u6301\u4e45\u5316\uff0c\u8fd9\u79cd \u65b9\u5f0f\u5728\u8bb8\u591a\u5e94\u7528\u4e2d\u5df2\u7ecf\u8db3\u591f\u7528\u4e86\n\nappendfilename \"appendonly.aof\" \xa0 \n# appendfilename AOF \u6587\u4ef6\u540d\u79f0\n\nappendfsync everysec \xa0\n# appendfsync aof\u6301\u4e45\u5316\u7b56\u7565\u7684\u914d\u7f6e \xa0 \xa0\n# no\u8868\u793a\u4e0d\u6267\u884cfsync\uff0c\u7531\u64cd\u4f5c\u7cfb\u7edf\u4fdd\u8bc1\u6570\u636e\u540c\u6b65\u5230\u78c1\u76d8\uff0c\u901f\u5ea6\u5feb\u3002 \xa0 \xa0\n# always\u8868\u793a\u6bcf\u6b21\u5199\u5165\u90fd\u6267\u884cfsync\uff0c\u4ee5\u4fdd\u8bc1\u6570\u636e\u540c\u6b65\u5230\u78c1\u76d8\u3002 \xa0 \xa0\n# everysec\u8868\u793a\u6bcf\u79d2\u6267\u884c\u4e00\u6b21fsync\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u4e22\u5931\u8fd91s\u6570\u636e\n\nno-appendfsync-on-rewrite no\n# if you have latency problems turn this to \u2018yes'. Otherwise leave it as 'no' that is the safest pick from the point of view of durability\n\nauto-aof-rewrite-percentage 100\nauto-aof-rewrite-min-size 64mb\n")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"AOF\u7684\u542f\u52a8|\u4fee\u590d|\u6062\u590d")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u6b63\u5e38\u6062\u590d"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u542f\u52a8\uff1a\u8bbe\u7f6eyes\uff0c\u4fee\u6539\u9ed8\u8ba4appendonly no\u4e3ayes"),Object(b.b)("li",{parentName:"ul"},"\u5c06\u6709\u6570\u636e\u7684aof\u6587\u4ef6\u590d\u5236\u4e00\u4efd\u4fdd\u5b58\u5230config get dir\u6307\u5411\u7684\u76ee\u5f55"),Object(b.b)("li",{parentName:"ul"},"\u6062\u590d\uff1a\u91cd\u542fredis\u7136\u540e\u91cd\u65b0\u52a0\u8f7d"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u5f02\u5e38\u6062\u590d"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u542f\u52a8\uff1a\u8bbe\u7f6eYes"),Object(b.b)("li",{parentName:"ul"},"\u6545\u610f\u7834\u574fappendonly.aof\u6587\u4ef6"),Object(b.b)("li",{parentName:"ul"},"\u4fee\u590d\uff1a",Object(b.b)("inlineCode",{parentName:"li"},"redis-check-aof --fix appendonly.aof")),Object(b.b)("li",{parentName:"ul"},"\u6062\u590d\uff1a\u91cd\u542fredis\u7136\u540e\u91cd\u65b0\u52a0\u8f7d")))),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"Rewrite"))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"AOF \u91c7\u7528\u6587\u4ef6\u8ffd\u52a0\u65b9\u5f0f\uff0c\u6587\u4ef6\u4f1a\u8d8a\u6765\u8d8a\u5927")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u56e0\u6b64\uff0c\u65b0\u589e\u4e86\u91cd\u5199\u673a\u5236\uff0c\u5f53AOF\u6587\u4ef6\u7684\u5927\u5c0f\u8d85\u8fc7\u6240\u8bbe\u5b9a\u7684\u9608\u503c\u65f6\uff0cRedis \u5c31\u4f1a\u542f\u52a8AOF\u6587\u4ef6\u7684\u5185\u5bb9\u538b\u7f29\uff0c\u53ea\u4fdd\u7559\u53ef\u4ee5\u6062\u590d\u6570\u636e\u7684\u5c0f\u6307\u4ee4\u96c6\uff0c")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u53ef\u4ee5 \u4f7f\u7528\u547d\u4ee4 bgrewriteaof \uff01"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u91cd\u5199\u539f\u7406\uff1a")),Object(b.b)("p",null,"AOF \u6587\u4ef6\u6301\u7eed\u589e\u957f\u800c\u8fc7\u5927\u65f6\uff0c\u4f1afork\u51fa\u4e00\u6761\u65b0\u8fdb\u7a0b\u6765\u5c06\u6587\u4ef6\u91cd\u5199\uff08\u4e5f\u662f\u5148\u5199\u4e34\u65f6\u6587\u4ef6\u540e\u518d rename\uff09\uff0c\u904d\u5386\u65b0\u8fdb\u7a0b\u7684\u5185\u5b58\u4e2d\u6570\u636e\uff0c\u6bcf\u6761\u8bb0\u5f55\u6709\u4e00\u6761\u7684Set\u8bed\u53e5\u3002\u91cd\u5199aof\u6587\u4ef6\u7684\u64cd\u4f5c\uff0c\u5e76\u6ca1\u6709\u8bfb\u53d6\u65e7\u7684aof\u6587\u4ef6\uff0c\u8fd9\u70b9\u548c\u5feb\u7167\u6709\u70b9\u7c7b\u4f3c\uff01"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u89e6\u53d1\u673a\u5236")),Object(b.b)("p",null,"Redis\u4f1a\u8bb0\u5f55\u4e0a\u6b21\u91cd\u5199\u65f6\u7684AOF\u5927\u5c0f\uff0c\u9ed8\u8ba4\u914d\u7f6e\u662f\u5f53AOF\u6587\u4ef6\u5927\u5c0f\u662f\u4e0a\u6b21rewrite\u540e\u5927\u5c0f\u7684\u5df2\u88ab\u4e14\u6587\u4ef6\u5927 \u4e8e64M\u7684\u89e6\u53d1\u3002"),Object(b.b)("h3",{id:"\u4f18\u7f3a\u70b9-1"},"\u4f18\u7f3a\u70b9"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"\u4f18\u70b9"))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u6240\u6709\u4fee\u6539\u90fd\u88ab\u540c\u6b65\uff1a",Object(b.b)("inlineCode",{parentName:"li"},"appendfsync always"),"\u540c\u6b65\u6301\u4e45\u5316\uff0c\u6bcf\u6b21\u53d1\u751f\u6570\u636e\u6539\u53d8\u4f1a\u88ab\u7acb\u5373\u8bb0\u5f55\u5230\u78c1\u76d8\uff0c\u6027\u80fd\u8f83\u5dee\u4f46\u6570\u636e\u5b8c\u6574\u6027\u6bd4\u8f83\u597d"),Object(b.b)("li",{parentName:"ul"},"\u6bcf\u79d2\u540c\u6b65\uff1a",Object(b.b)("inlineCode",{parentName:"li"},"appendfsync everysec"),"\u5f02\u6b65\u64cd\u4f5c\uff0c\u6bcf\u79d2\u8bb0\u5f55\uff0c\u5982\u679c\u4e00\u79d2\u5185\u5b95\u673a\uff0c\u5219\u8fd9\u4e00\u79d2\u5185\u7684\u6570\u636e\u4e22\u5931"),Object(b.b)("li",{parentName:"ul"},"\u4e0d\u540c\u6b65\uff1a",Object(b.b)("inlineCode",{parentName:"li"},"appendfsync no"),"\u4ece\u4e0d\u540c\u6b65")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"\u7f3a\u70b9"))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u76f8\u540c\u6570\u636e\u96c6\u7684\u6570\u636e\u800c\u8a00\uff0caof\u6587\u4ef6\u8981\u8fdc\u5927\u4e8erdb\u6587\u4ef6\uff0c\u6062\u590d\u901f\u5ea6\u6162\u4e0erdb"),Object(b.b)("li",{parentName:"ul"},"aof\u8fd0\u884c\u6548\u7387\u8981\u6162\u4e8erdb\uff0c\u6bcf\u79d2\u540c\u6b65\u7c97\u7565\u6548\u7387\u8f83\u597d\uff0c\u4e0d\u540c\u6b65\u6548\u7387\u548crdb\u76f8\u540c")),Object(b.b)("h1",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"RDB\u6301\u4e45\u5316\u65b9\u5f0f\u80fd\u591f\u5728\u6307\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u5185\u5bf9\u6570\u636e\u8fdb\u884c\u5feb\u7167\u5b58\u50a8")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"AOF\u6301\u4e45\u5316\u65b9\u5f0f\u8bb0\u5f55\u6bcf\u6b21\u5bf9\u670d\u52a1\u5668\u7684\u5199\u64cd\u4f5c\uff0c\u5f53\u670d\u52a1\u5668\u91cd\u542f\u7684\u65f6\u5019\u4f1a\u91cd\u65b0\u6267\u884c\u8fd9\u4e9b\u547d\u4ee4\u6765\u6062\u590d\u539f\u59cb\u6570\u636e\uff0cAOF\u547d\u4ee4\u4ee5Redis\u534f\u8bae\u8ffd\u52a0\u4fdd\u5b58\u6bcf\u6b21\u7684\u64cd\u4f5c\u5230\u6587\u4ef6\u672b\u5c3e\uff0cRedis\u8fd8\u80fd\u5bf9AOF\u6587\u4ef6\u8fdb\u884c\u540e\u53f0\u91cd\u5199\uff0c\u662f\u7684AOF\u6587\u4ef6\u7684\u4f53\u79ef\u4e0d\u81f3\u4e8e\u8fc7\u5927")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"\u53ea\u505a\u7f13\u5b58\uff0c\u5982\u679c\u53ea\u5e0c\u671b\u6570\u636e\u5728\u670d\u52a1\u5668\u8fd0\u884c\u671f\u95f4\u5b58\u5728\uff0c\u53ef\u4ee5\u4e0d\u91c7\u7528\u4efb\u4f55\u6301\u4e45\u5316")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"\u540c\u65f6\u5f00\u542f\u4e24\u79cd\u6301\u4e45\u5316\u7b56\u7565"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"redis\u91cd\u542f\u65f6\u4f18\u5148\u4f7f\u7528aof\u6587\u4ef6\u6062\u590d\u539f\u59cb\u6570\u636e\uff0c\u56e0\u4e3a\u901a\u5e38\u60c5\u51b5\u4e0baof\u6587\u4ef6\u4fdd\u5b58\u7684\u6570\u636e\u8981\u6bd4rdb\u6587\u4ef6\u4fdd\u5b58\u7684\u5b8c\u6574"),Object(b.b)("li",{parentName:"ul"},"RDB\u6570\u636e\u4e0d\u5b9e\u65f6\uff0c\u540c\u65f6\u4f7f\u7528\u4e24\u79cd\u6301\u4e45\u5316\u670d\u52a1\u5668\u91cd\u542f\u65f6\u4e5f\u53ea\u4f1a\u627eAOF\u6587\u4ef6\uff0c\u4f46\u4f5c\u8005\u4e0d\u5efa\u8bae\u53ea\u4f7f\u7528AOF\uff0c\u56e0\u4e3aRDB\u66f4\u9002\u5408\u7528\u4e8e\u5907\u4efd\u6570\u636e\u5e93\uff0c\u5feb\u901f\u91cd\u542f\uff0cAOF\u53d8\u5316\u592a\u9891\u7e41\u4e0d\u5bb9\u6613\u5907\u4efd"))),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"\u6027\u80fd\u5efa\u8bae"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u56e0\u4e3aRDB\u6587\u4ef6\u53ea\u4f5c\u4e3a\u540e\u80cc\u7528\u9014\uff0c\u5efa\u8bae\u5728\u96c6\u7fa4\u4ece\u673a\u4e0a\u6301\u4e45\u5316RDB\u6587\u4ef6\uff0c\u800c\u4e14\u53ea\u898115\u5206\u949f\u5907\u4efd\u4e00\u6b21\u5c31\u8db3\u591f\uff0c\u53ea\u4fdd\u7559",Object(b.b)("inlineCode",{parentName:"p"},"save 900 1"),"\u8fd9\u6761\u89c4\u5219")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u5982\u679c\u5f00\u542f\u4e86AOF\uff0c\u597d\u5904\u662f\u5728\u6700\u5dee\u7684\u60c5\u51b5\u4e0b\u4e5f\u53ea\u4f1a\u4e22\u5931\u4e0d\u8d85\u8fc7\u4e24\u79d2\u7684\u6570\u636e\uff0c\u542f\u52a8\u811a\u672c\u8f83\u7b80\u5355\u53ea\u52a0\u8f7d\u81ea\u5df1\u7684aof\u6587\u4ef6\u5c31\u53ef\u4ee5\u4e86"),Object(b.b)("p",{parentName:"li"},"\u4ee3\u4ef7\uff1a"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5e26\u6765\u4e86\u6301\u7eed\u7684IO"),Object(b.b)("li",{parentName:"ul"},"AOF\u91cd\u5199\u7684\u6700\u540e\u5c06\u91cd\u5199\u8fc7\u7a0b\u4e2d\u4ea7\u751f\u7684\u65b0\u6570\u636e\u5199\u9053\u65b0\u6587\u4ef6\u9020\u6210\u7684\u963b\u585e\u51e0\u4e4e\u4e0d\u53ef\u907f\u514d")),Object(b.b)("p",{parentName:"li"},"\u53ea\u8981\u786c\u76d8\u5141\u8bb8\uff0c\u5e94\u8be5\u5c3d\u91cf\u51cf\u5c11AOF\u91cd\u5199\u7684\u9891\u7387\uff0cAOF\u91cd\u5199\u7684\u57fa\u7840\u5927\u5c0f\u9ed8\u8ba4\u503c64MB\u592a\u5c0f\u4e86\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u52305G\u4ee5\u4e0a\uff0c\u9ed8\u8ba4\u8d85\u8fc7\u539f\u5927\u5c0f100%\u5927\u5c0f\u91cd\u5199\u53ef\u4ee5\u6539\u5230\u9002\u5f53\u7684\u6570\u503c")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"\u5982\u679c\u4e0d\u5f00\u542fAOF\uff0c\u4ec5\u9760\u4e3b\u4ece\u590d\u5236\u5b9e\u73b0\u9ad8\u53ef\u7528\u6027\u4e5f\u53ef\u4ee5\uff0c\u80fd\u7701\u6389\u4e00\u5927\u7b14IO\u5f00\u9500\uff0c\u4e5f\u51cf\u5c11\u4e86\u91cd\u5199\u65f6\u5e26\u6765\u7684\u7cfb\u7edf\u6ce2\u52a8\uff0c\u4ee3\u4ef7\u662f\u5982\u679c\u4e3b\u673a\u548c\u4ece\u673a\u540c\u65f6\u5b95\u673a\uff0c\u4f1a\u4e22\u5931\u5341\u51e0\u5206\u949f\u7684\u6570\u636e\uff0c\u542f\u52a8\u811a\u672c\u4e5f\u8981\u6bd4\u8f83\u4e24\u4e2a\u4e3b\u4ece\u673a\u4e2d\u7684RDB\u6587\u4ef6\uff0c\u8f7d\u5165\u8f83\u65b0\u7684RDB\u6587\u4ef6"))))))}i.isMDXComponent=!0},353:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),i=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},j=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,b=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=i(n),j=r,m=u["".concat(l,".").concat(j)]||u[j]||O[j]||b;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=n.length,l=new Array(b);l[0]=j;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<b;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},462:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/11-b5684ec46006fdf51663fb9d8ce6bacf.png"},463:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/12-b1e8f162e5989614eb73c9c5b56cde05.png"}}]);