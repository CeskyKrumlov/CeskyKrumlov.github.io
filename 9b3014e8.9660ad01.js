(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{335:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),b=(n(0),n(511)),r={id:"4.sentinelFallback",title:"Sentinel \u670d\u52a1\u964d\u7ea7",hide_title:!0},l={unversionedId:"springcloudalibaba/\u6d41\u91cf\u536b\u5175/4.sentinelFallback",id:"springcloudalibaba/\u6d41\u91cf\u536b\u5175/4.sentinelFallback",isDocsHomePage:!1,title:"Sentinel \u670d\u52a1\u964d\u7ea7",description:"Sentinel \u670d\u52a1\u964d\u7ea7",source:"@site/docs/springcloudalibaba/\u6d41\u91cf\u536b\u5175/4.\u670d\u52a1\u964d\u7ea7.md",slug:"/springcloudalibaba/\u6d41\u91cf\u536b\u5175/4.sentinelFallback",permalink:"/docs/springcloudalibaba/\u6d41\u91cf\u536b\u5175/4.sentinelFallback",version:"current",sidebar:"someSidebar",previous:{title:"Sentinel \u6d41\u91cf\u63a7\u5236",permalink:"/docs/springcloudalibaba/\u6d41\u91cf\u536b\u5175/3.sentinelFlowControl"},next:{title:"Sentinel \u70ed\u70b9\u9650\u6d41",permalink:"/docs/springcloudalibaba/\u6d41\u91cf\u536b\u5175/5.sentinelHotKey"}},c=[{value:"Sentinel \u670d\u52a1\u964d\u7ea7",id:"sentinel-\u670d\u52a1\u964d\u7ea7",children:[{value:"\u6162\u8c03\u7528\u6bd4\u4f8b\uff08\u5e73\u5747\u54cd\u5e94\u65f6\u95f4-\u79d2\u7ea7\uff09",id:"\u6162\u8c03\u7528\u6bd4\u4f8b\uff08\u5e73\u5747\u54cd\u5e94\u65f6\u95f4-\u79d2\u7ea7\uff09",children:[]},{value:"\u5f02\u5e38\u6bd4\u4f8b\uff08\u79d2\u7ea7\uff09",id:"\u5f02\u5e38\u6bd4\u4f8b\uff08\u79d2\u7ea7\uff09",children:[]},{value:"\u5f02\u5e38\u6570\uff08\u5206\u949f\u7ea7\uff09",id:"\u5f02\u5e38\u6570\uff08\u5206\u949f\u7ea7\uff09",children:[]}]}],o={rightToc:c};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"sentinel-\u670d\u52a1\u964d\u7ea7"},"Sentinel \u670d\u52a1\u964d\u7ea7"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",Object(a.a)({parentName:"strong"},{href:"https://github.com/alibaba/Sentinel/wiki/%E7%86%94%E6%96%AD%E9%99%8D%E7%BA%A7"}),"\u7194\u65ad\u964d\u7ea7\u6587\u6863"))),Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"Sentinel \u63d0\u4f9b\u4ee5\u4e0b\u51e0\u79cd\u7194\u65ad\u7b56\u7565\uff1a")),Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u6162\u8c03\u7528\u6bd4\u4f8b (",Object(b.b)("inlineCode",{parentName:"strong"},"SLOW_REQUEST_RATIO"),")\uff1a"),"\u9009\u62e9\u4ee5\u6162\u8c03\u7528\u6bd4\u4f8b\u4f5c\u4e3a\u9608\u503c\uff0c\u9700\u8981\u8bbe\u7f6e\u5141\u8bb8\u7684\u6162\u8c03\u7528 RT\uff08\u5373\u6700\u5927\u7684\u54cd\u5e94\u65f6\u95f4\uff09\uff0c\u8bf7\u6c42\u7684\u54cd\u5e94\u65f6\u95f4\u5927\u4e8e\u8be5\u503c\u5219\u7edf\u8ba1\u4e3a\u6162\u8c03\u7528\u3002\u5f53\u5355\u4f4d\u7edf\u8ba1\u65f6\u957f\uff08",Object(b.b)("inlineCode",{parentName:"li"},"statIntervalMs"),"\uff09\u5185\u8bf7\u6c42\u6570\u76ee\u5927\u4e8e\u8bbe\u7f6e\u7684\u6700\u5c0f\u8bf7\u6c42\u6570\u76ee\uff0c\u5e76\u4e14\u6162\u8c03\u7528\u7684\u6bd4\u4f8b\u5927\u4e8e\u9608\u503c\uff0c\u5219\u63a5\u4e0b\u6765\u7684\u7194\u65ad\u65f6\u957f\u5185\u8bf7\u6c42\u4f1a\u81ea\u52a8\u88ab\u7194\u65ad\u3002\u7ecf\u8fc7\u7194\u65ad\u65f6\u957f\u540e\u7194\u65ad\u5668\u4f1a\u8fdb\u5165\u63a2\u6d4b\u6062\u590d\u72b6\u6001\uff08HALF-OPEN \u72b6\u6001\uff09\uff0c\u82e5\u63a5\u4e0b\u6765\u7684\u4e00\u4e2a\u8bf7\u6c42\u54cd\u5e94\u65f6\u95f4\u5c0f\u4e8e\u8bbe\u7f6e\u7684\u6162\u8c03\u7528 RT \u5219\u7ed3\u675f\u7194\u65ad\uff0c\u82e5\u5927\u4e8e\u8bbe\u7f6e\u7684\u6162\u8c03\u7528 RT \u5219\u4f1a\u518d\u6b21\u88ab\u7194\u65ad\u3002"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u5f02\u5e38\u6bd4\u4f8b (",Object(b.b)("inlineCode",{parentName:"strong"},"ERROR_RATIO"),")\uff1a"),"\u5f53\u5355\u4f4d\u7edf\u8ba1\u65f6\u957f\uff08",Object(b.b)("inlineCode",{parentName:"li"},"statIntervalMs"),"\uff09\u5185\u8bf7\u6c42\u6570\u76ee\u5927\u4e8e\u8bbe\u7f6e\u7684\u6700\u5c0f\u8bf7\u6c42\u6570\u76ee\uff0c\u5e76\u4e14\u5f02\u5e38\u7684\u6bd4\u4f8b\u5927\u4e8e\u9608\u503c\uff0c\u5219\u63a5\u4e0b\u6765\u7684\u7194\u65ad\u65f6\u957f\u5185\u8bf7\u6c42\u4f1a\u81ea\u52a8\u88ab\u7194\u65ad\u3002\u7ecf\u8fc7\u7194\u65ad\u65f6\u957f\u540e\u7194\u65ad\u5668\u4f1a\u8fdb\u5165\u63a2\u6d4b\u6062\u590d\u72b6\u6001\uff08HALF-OPEN \u72b6\u6001\uff09\uff0c\u82e5\u63a5\u4e0b\u6765\u7684\u4e00\u4e2a\u8bf7\u6c42\u6210\u529f\u5b8c\u6210\uff08\u6ca1\u6709\u9519\u8bef\uff09\u5219\u7ed3\u675f\u7194\u65ad\uff0c\u5426\u5219\u4f1a\u518d\u6b21\u88ab\u7194\u65ad\u3002\u5f02\u5e38\u6bd4\u7387\u7684\u9608\u503c\u8303\u56f4\u662f ",Object(b.b)("inlineCode",{parentName:"li"},"[0.0, 1.0]"),"\uff0c\u4ee3\u8868 0% - 100%\u3002"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u5f02\u5e38\u6570 (",Object(b.b)("inlineCode",{parentName:"strong"},"ERROR_COUNT"),")\uff1a"),"\u5f53\u5355\u4f4d\u7edf\u8ba1\u65f6\u957f\u5185\u7684\u5f02\u5e38\u6570\u76ee\u8d85\u8fc7\u9608\u503c\u4e4b\u540e\u4f1a\u81ea\u52a8\u8fdb\u884c\u7194\u65ad\u3002\u7ecf\u8fc7\u7194\u65ad\u65f6\u957f\u540e\u7194\u65ad\u5668\u4f1a\u8fdb\u5165\u63a2\u6d4b\u6062\u590d\u72b6\u6001\uff08HALF-OPEN \u72b6\u6001\uff09\uff0c\u82e5\u63a5\u4e0b\u6765\u7684\u4e00\u4e2a\u8bf7\u6c42\u6210\u529f\u5b8c\u6210\uff08\u6ca1\u6709\u9519\u8bef\uff09\u5219\u7ed3\u675f\u7194\u65ad\uff0c\u5426\u5219\u4f1a\u518d\u6b21\u88ab\u7194\u65ad\u3002"))),Object(b.b)("div",{className:"admonition admonition-info alert alert--info"},Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u8bf4\u660e")),Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("ul",{parentName:"div"},Object(b.b)("li",{parentName:"ul"},"Sentinel \u7194\u65ad\u964d\u7ea7\u4f1a\u5728\u8c03\u7528\u94fe\u8def\u4e2d\u67d0\u4e2a\u8d44\u6e90\u51fa\u73b0\u4e0d\u7a33\u5b9a\u72b6\u6001\u65f6\uff0c\u5bf9\u8be5\u8d44\u6e90\u7684\u8c03\u7528\u8fdb\u884c\u9650\u5236\uff0c\u8ba9\u8bf7\u6c42\u5feb\u901f\u5931\u8d25\uff0c\u907f\u514d\u5f71\u54cd\u5176\u4ed6\u8d44\u6e90\u5f15\u53d1\u7ea7\u8054\u9519\u8bef"),Object(b.b)("li",{parentName:"ul"},"\u8d44\u6e90\u88ab\u964d\u7ea7\u540e\uff0c\u5728\u63a5\u4e0b\u6765\u7684\u964d\u7ea7\u65f6\u95f4\u7a97\u53e3\u5185\uff0c\u5bf9\u8be5\u8d44\u6e90\u7684\u8c03\u7528\u90fd\u4f1a ",Object(b.b)("inlineCode",{parentName:"li"},"\u81ea\u52a8\u7194\u65ad"),"\uff0c\u9ed8\u8ba4\u884c\u4e3a\u4e3a\u629b\u51fa ",Object(b.b)("inlineCode",{parentName:"li"},"DegradeExceptopn"))))),Object(b.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(b.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"\u6ce8\u610f")),Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("ul",{parentName:"div"},Object(b.b)("li",{parentName:"ul"},"Sentinel \u65ad\u8def\u5668\u6ca1\u6709 ",Object(b.b)("inlineCode",{parentName:"li"},"\u534a\u5f00\u72b6\u6001")),Object(b.b)("li",{parentName:"ul"},"Sentinel 1.8 \u5f00\u59cb\uff0c\u6dfb\u52a0\u4e86 ",Object(b.b)("inlineCode",{parentName:"li"},"\u6062\u590d\u72b6\u6001"),"\uff0c\u5373 ",Object(b.b)("inlineCode",{parentName:"li"},"Half-Open \u534a\u5f00\u72b6\u6001"))))),Object(b.b)("h2",{id:"\u6162\u8c03\u7528\u6bd4\u4f8b\uff08\u5e73\u5747\u54cd\u5e94\u65f6\u95f4-\u79d2\u7ea7\uff09"},"\u6162\u8c03\u7528\u6bd4\u4f8b\uff08\u5e73\u5747\u54cd\u5e94\u65f6\u95f4-\u79d2\u7ea7\uff09"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u5f53\u8d44\u6e90\u7684\u54cd\u5e94\u65f6\u95f4\u8d85\u8fc7\u6700\u5927 ",Object(b.b)("inlineCode",{parentName:"li"},"RT"),"\uff08\u4ee5ms\u4e3a\u5355\u4f4d\uff0c\u6700\u5927 RT \u5373\u6700\u5927\u54cd\u5e94\u65f6\u95f4\uff09\u4e4b\u540e\uff0c\u8d44\u6e90\u8fdb\u5165 ",Object(b.b)("inlineCode",{parentName:"li"},"\u51c6\u964d\u7ea7\u72b6\u6001")),Object(b.b)("li",{parentName:"ul"},"\u5982\u679c\u63a5\u4e0b\u6765 ",Object(b.b)("inlineCode",{parentName:"li"},"1s")," \u5185\u6301\u7eed\u8fdb\u5165 ",Object(b.b)("inlineCode",{parentName:"li"},"5")," \u4e2a\u8bf7\u6c42\uff08",Object(b.b)("em",{parentName:"li"},"\u6700\u5c0f\u8bf7\u6c42\u6570"),"\uff09\uff0c\u5b83\u4eec\u7684RT\u90fd\u6301\u7eed\u8d85\u8fc7\u8fd9\u4e2a\u9608\u503c\uff0c\u90a3\u4e48\u5728\u63a5\u4e0b\u6765\u7684 ",Object(b.b)("em",{parentName:"li"},"\u7194\u65ad\u65f6\u957f")," \u4e4b\u5185\uff0c\u5c31\u4f1a\u5bf9\u8fd9\u4e2a\u65b9\u6cd5\u8fdb\u884c\u670d\u52a1\u964d\u7ea7"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u5176\u4e2d\u7684\u201c\u6bd4\u4f8b\u9608\u503c\u201d\u8bbe\u7f6e\u53d1\u73b0\u65e0\u6548\uff0c\u4e0b\u6b21\u7f16\u8f91\u4f1a\u91cd\u7f6e\u6210 ",Object(b.b)("inlineCode",{parentName:"strong"},"1"))),Object(b.b)("li",{parentName:"ul"},"RT \u6700\u5927\u4e3a ",Object(b.b)("inlineCode",{parentName:"li"},"4900")," \uff0c\u66f4\u5927\u7684\u503c\u9700\u8981\u901a\u8fc7 ",Object(b.b)("inlineCode",{parentName:"li"},"-Dcsp.sentinel.statistic.max.rt=XXXX")," \u8fdb\u884c\u8bbe\u7f6e")),Object(b.b)("br",null),Object(b.b)("img",{src:n(947).default,style:{zoom:"40%",boxShadow:"5px 7px 28px #333333",borderRadius:"19px"}})," ",Object(b.b)("br",null),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u5728 Controller \u6dfb\u52a0 ",Object(b.b)("inlineCode",{parentName:"li"},"/testD")," \u4e1a\u52a1\u63a5\u53e3")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="FlowLimitController"',title:'"FlowLimitController"'}),'@GetMapping("/testD")\npublic String testD() {\n    try {\n        TimeUnit.SECONDS.sleep(1);\n    } catch (InterruptedException e) {\n        e.printStackTrace();\n    }\n    log.info("testD \u6d4b\u8bd5 RT");\n    return "----testD";\n}\n')),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"\u4f7f\u7528 JMeter \u5e76\u53d1\u6d4b\u8bd5")),Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u5faa\u73af\u6bcf ",Object(b.b)("inlineCode",{parentName:"li"},"1")," \u79d2\u4f7f\u7528 ",Object(b.b)("inlineCode",{parentName:"li"},"10")," \u4e2a\u7ebf\u7a0b\u8bbf\u95ee")),Object(b.b)("br",null),Object(b.b)("img",{src:n(948).default,style:{zoom:"100%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(b.b)("br",null),Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},"Http \u8bbf\u95ee\u8bbe\u7f6e")),Object(b.b)("br",null),Object(b.b)("img",{src:n(949).default,style:{zoom:"100%",boxShadow:"5px 7px 28px #333333",borderRadius:"10px"}})," ",Object(b.b)("br",null),Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},"\u5f00\u59cb\u6267\u884c\u540e\uff0c\u53d1\u73b0 ",Object(b.b)("inlineCode",{parentName:"li"},"/testD")," \u88ab\u7194\u65ad\u4e86",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u4e4b\u540e ",Object(b.b)("inlineCode",{parentName:"li"},"10")," \u79d2\u540e\uff0c\u5b83\u5c1d\u8bd5\u8fdb\u884c\u6062\u590d"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u82e5\u63a5\u4e0b\u6765\u7684\u4e00\u4e2a\u8bf7\u6c42\u54cd\u5e94\u65f6\u95f4\u5c0f\u4e8e\u8bbe\u7f6e\u7684\u6162\u8c03\u7528 RT \u5219\u7ed3\u675f\u7194\u65ad\uff0c\u82e5\u5927\u4e8e\u8bbe\u7f6e\u7684\u6162\u8c03\u7528 RT \u5219\u4f1a\u518d\u6b21\u88ab\u7194\u65ad")))))),Object(b.b)("h2",{id:"\u5f02\u5e38\u6bd4\u4f8b\uff08\u79d2\u7ea7\uff09"},"\u5f02\u5e38\u6bd4\u4f8b\uff08\u79d2\u7ea7\uff09"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("em",{parentName:"li"},"QPS >= \u6700\u5c0f\u8bf7\u6c42\u6570")," ",Object(b.b)("inlineCode",{parentName:"li"},"\u4e14")," ",Object(b.b)("em",{parentName:"li"},"\u5f02\u5e38\u6bd4\u4f8b")," \u8d85\u8fc7\u9608\u503c\u65f6\uff0c\u89e6\u53d1\u964d\u7ea7"),Object(b.b)("li",{parentName:"ul"},"\u65f6\u95f4\u7a97\u53e3\u7ed3\u675f\u540e\uff0c\u5173\u95ed\u964d\u7ea7"),Object(b.b)("li",{parentName:"ul"},"\u6b64\u5904\u8bbe\u7f6e\u4e3a ",Object(b.b)("inlineCode",{parentName:"li"},"QPS \u5927\u4e8e\u7b49\u4e8e 5"),"\uff0c\u4e14 ",Object(b.b)("inlineCode",{parentName:"li"},"\u5f02\u5e38\u8d85\u8fc7\u56db\u5206\u4e4b\u4e00"),"\uff0c\u89e6\u53d1\u7194\u65ad"),Object(b.b)("li",{parentName:"ul"},"\u7194\u65ad\u65f6\u95f4\u5230\u8fbe\u540e\uff1a",Object(b.b)("strong",{parentName:"li"},"\u82e5\u63a5\u4e0b\u6765\u7684\u4e00\u4e2a\u8bf7\u6c42\u6210\u529f\u5b8c\u6210\uff08\u6ca1\u6709\u9519\u8bef\uff09\u5219\u7ed3\u675f\u7194\u65ad\uff0c\u5426\u5219\u4f1a\u518d\u6b21\u88ab\u7194\u65ad"))),Object(b.b)("br",null),Object(b.b)("img",{src:n(950).default,style:{zoom:"40%",boxShadow:"5px 7px 28px #333333",borderRadius:"19px"}})," ",Object(b.b)("br",null),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u8fd8\u9700\u8981\u5199\u4e00\u4e2a\u80fd\u591f\u89e6\u53d1\u5f02\u5e38\u7684\u4e1a\u52a1")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'title="FlowLimitController"',title:'"FlowLimitController"'}),'int i = 0;\n@GetMapping("/testD")\npublic String message1() {\n    i++;\n    // \u5f02\u5e38\u6bd4\u4f8b\u4e3a0.333\n    if (i % 3 == 0) {\n        throw new RuntimeException("\u6a21\u62df\u5f02\u5e38");\n    }\n\n    return "message1";\n}\n')),Object(b.b)("div",{className:"admonition admonition-info alert alert--info"},Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u63d0\u793a")),Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("ul",{parentName:"div"},Object(b.b)("li",{parentName:"ul"},"\u5728\u89e6\u53d1\u7194\u65ad\u964d\u7ea7\u4e4b\u524d\uff1a\u8bbf\u95ee ",Object(b.b)("inlineCode",{parentName:"li"},"/testD")," \u51fa\u53d1\u4e86\u5f02\u5e38\uff0c\u4f1a\u770b\u5230 500 \u62a5\u9519\uff0c\u8bf4\u660e\u8bf7\u6c42\u6b63\u5e38\u54cd\u5e94\u4e86\uff0c\u53ea\u662f\u670d\u52a1\u5668\u6267\u884c\u5f02\u5e38"),Object(b.b)("li",{parentName:"ul"},"\u5982\u679c\u9519\u7684\u591f\u591a\uff0c\u90a3\u4e48\u4f1a\u89e6\u53d1\u964d\u7ea7\uff0c\u54cd\u5e94\u7684\u662f\u964d\u7ea7\u62a5\u9519\u5b57\u7b26\u4e32")))),Object(b.b)("h2",{id:"\u5f02\u5e38\u6570\uff08\u5206\u949f\u7ea7\uff09"},"\u5f02\u5e38\u6570\uff08\u5206\u949f\u7ea7\uff09"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("em",{parentName:"li"},"QPS >= \u6700\u5c0f\u8bf7\u6c42\u6570")," ",Object(b.b)("inlineCode",{parentName:"li"},"\u4e14")," ",Object(b.b)("em",{parentName:"li"},"\u6bcf\u5206\u949f\u5f02\u5e38\u6570\u8d85\u8fc7\u9608\u503c\u65f6"),"\uff0c\u89e6\u53d1\u964d\u7ea7"),Object(b.b)("li",{parentName:"ul"},"\u5f53\u8d44\u6e90\u8fd1 ",Object(b.b)("inlineCode",{parentName:"li"},"1")," \u5206\u949f\u7684\u5f02\u5e38\u6570\u76ee\u8d85\u8fc7\u9608\u503c\uff08\u5f02\u5e38\u6570\uff09\u4e4b\u540e\u4f1a\u8fdb\u884c\u670d\u52a1\u964d\u7ea7\u3002")),Object(b.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(b.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"\u6ce8\u610f")),Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"\u6ce8\u610f\u7531\u4e8e\u7edf\u8ba1\u65f6\u95f4\u7a97\u53e3\u662f\u5206\u949f\u7ea7\u522b\u7684\uff0c\u82e5\u7194\u65ad\u65f6\u957f\u5c0f\u4e8e 60s\uff0c\u5219\u7ed3\u675f\u7194\u65ad\u72b6\u6001\u540e\u4ecd\u53ef\u80fd\u518d\u6b21\u8fdb\u5165\u7194\u65ad\u72b6\u6001\u3002"))),Object(b.b)("img",{src:n(951).default,style:{zoom:"40%",boxShadow:"5px 7px 28px #333333",borderRadius:"19px"}})," ",Object(b.b)("br",null))}p.isMDXComponent=!0},511:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=i.a.createContext({}),p=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},O=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,r=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),m=p(n),O=a,d=m["".concat(r,".").concat(O)]||m[O]||s[O]||b;return n?i.a.createElement(d,l(l({ref:t},o),{},{components:n})):i.a.createElement(d,l({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,r=new Array(b);r[0]=O;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var o=2;o<b;o++)r[o]=n[o];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},947:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/13-46ba6e5dad325b1479aba9e224e60269.png"},948:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/14-d967f70e8e2ae79f9752be76105a8389.png"},949:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/15-92629773844f61175ab14b398afbb5a1.png"},950:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/16-1768fea15836e513d5b047340a5bb194.png"},951:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/17-6837e34140e5763c4838997cbc757663.png"}}]);