(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{212:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return u}));var a=t(2),r=t(6),o=(t(0),t(366)),l={id:"12.threadPool",title:"\u7ebf\u7a0b\u6c60",hide_title:!0},c={unversionedId:"juc/12.threadPool",id:"juc/12.threadPool",isDocsHomePage:!1,title:"\u7ebf\u7a0b\u6c60",description:"\u7ebf\u7a0b\u6c60",source:"@site/docs/juc/12.\u7ebf\u7a0b\u6c60.md",slug:"/juc/12.threadPool",permalink:"/docs/juc/12.threadPool",version:"current",sidebar:"someSidebar",previous:{title:"\u963b\u585e\u961f\u5217",permalink:"/docs/juc/11.blockingQueue"},next:{title:"ForkJoin",permalink:"/docs/juc/16.forkjoin"}},i=[{value:"\u7ebf\u7a0b\u6c60",id:"\u7ebf\u7a0b\u6c60",children:[]},{value:"\u4e09\u5927\u65b9\u6cd5",id:"\u4e09\u5927\u65b9\u6cd5",children:[]},{value:"\u4e03\u5927\u53c2\u6570",id:"\u4e03\u5927\u53c2\u6570",children:[{value:"\u6838\u5fc3\u7ebf\u7a0b\u6c60",id:"\u6838\u5fc3\u7ebf\u7a0b\u6c60",children:[]},{value:"\u6700\u5927\u7ebf\u7a0b\u6c60\u5927\u5c0f",id:"\u6700\u5927\u7ebf\u7a0b\u6c60\u5927\u5c0f",children:[]},{value:"\u963b\u585e\u961f\u5217",id:"\u963b\u585e\u961f\u5217",children:[]},{value:"\u5b58\u6d3b\u65f6\u95f4",id:"\u5b58\u6d3b\u65f6\u95f4",children:[]},{value:"\u65f6\u95f4\u5355\u4f4d",id:"\u65f6\u95f4\u5355\u4f4d",children:[]},{value:"\u7ebf\u7a0b\u5de5\u5382",id:"\u7ebf\u7a0b\u5de5\u5382",children:[]},{value:"\u62d2\u7edd\u7b56\u7565",id:"\u62d2\u7edd\u7b56\u7565",children:[]}]},{value:"\u56db\u79cd\u62d2\u7edd\u7b56\u7565",id:"\u56db\u79cd\u62d2\u7edd\u7b56\u7565",children:[]},{value:"\u4f7f\u7528\u539f\u751fThreadPoolExecutor\u521b\u5efa\u7ebf\u7a0b\u6c60",id:"\u4f7f\u7528\u539f\u751fthreadpoolexecutor\u521b\u5efa\u7ebf\u7a0b\u6c60",children:[]},{value:"CPU\u5bc6\u96c6\u578b | IO\u5bc6\u96c6\u578b",id:"cpu\u5bc6\u96c6\u578b--io\u5bc6\u96c6\u578b",children:[{value:"\u6700\u5927\u7ebf\u7a0b\u6570\u5982\u4f55\u5b9a\u4e49",id:"\u6700\u5927\u7ebf\u7a0b\u6570\u5982\u4f55\u5b9a\u4e49",children:[]}]}],b={rightToc:i};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\u7ebf\u7a0b\u6c60"},"\u7ebf\u7a0b\u6c60"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"\u4e09\u79cd\u65b9\u6cd5\u3001\u4e03\u5927\u53c2\u6570\u3001\u56db\u79cd\u62d2\u7edd\u7b56\u7565"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"\u4f7f\u7528\u7ebf\u7a0b\u6c60\u7684\u4f18\u70b9")),Object(o.b)("ol",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ol"},"\u964d\u4f4e\u7cfb\u7edf\u7684\u8d44\u6e90\u5f00\u9500"),Object(o.b)("li",{parentName:"ol"},"\u63d0\u9ad8\u7cfb\u7edf\u54cd\u5e94\u901f\u5ea6"),Object(o.b)("li",{parentName:"ol"},"\u65b9\u4fbf\u7ebf\u7a0b\u7684\u7ba1\u7406")),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"\u7ebf\u7a0b\u590d\u7528\u3001\u6700\u5927\u5e76\u53d1\u6570\u3001\u7ba1\u7406\u7ebf\u7a0b"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"\u4f7f\u7528\u7ebf\u7a0b\u6c60\u540e\uff0c\u4e0d\u518d\u4f7f\u7528",Object(o.b)("inlineCode",{parentName:"strong"},"new Thread()"),"\u7684\u65b9\u5f0f\u521b\u5efa\u7ebf\u7a0b\uff0c\u800c\u662f\u4f7f\u7528\u7ebf\u7a0b\u6c60\u521b\u5efa\u7ebf\u7a0b"))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"\u963f\u91cc\u5df4\u5df4Java\u7f16\u7a0b\u89c4\u7ea6")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u7ebf\u7a0b\u6c60\u4e0d\u5141\u8bb8\u4f7f\u7528",Object(o.b)("inlineCode",{parentName:"p"},"Executors"),"\u521b\u5efa\uff0c\u800c\u662f\u901a\u8fc7",Object(o.b)("inlineCode",{parentName:"p"},"ThreadPoolExecutor"),"\u7684\u65b9\u5f0f\uff0c\u8fd9\u6837\u7684\u5904\u7406\u65b9\u5f0f\u8ba9\u5199\u7684\u540c\u5b66\u66f4\u52a0\u660e\u786e\u7ebf\u7a0b\u6c60\u7684\u8fd0\u884c\u89c4\u5219\uff0c\u89c4\u907f\u8d44\u6e90\u6d88\u8017\u7684\u98ce\u9669"),Object(o.b)("ol",{parentName:"div"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"FixedThreadPool"),"\u548c",Object(o.b)("inlineCode",{parentName:"p"},"SingleThreadPool")),Object(o.b)("p",{parentName:"li"},"\u5141\u8bb8\u7684\u8bf7\u6c42\u961f\u5217\u957f\u5ea6\u4e3a",Object(o.b)("inlineCode",{parentName:"p"},"Integer_MAX_VALUE"),"\uff0c\u53ef\u80fd\u4f1a\u5806\u79ef\u5927\u91cf\u7684\u8bf7\u6c42\uff0c\u4ece\u800c\u5bfc\u81f4OOM")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"CacheedThreadPool"),"\u548c",Object(o.b)("inlineCode",{parentName:"p"},"ScheduledThreadPool")),Object(o.b)("p",{parentName:"li"},"\u5141\u8bb8\u7684\u521b\u5efa\u6570\u91cf\u4e3a",Object(o.b)("inlineCode",{parentName:"p"},"integer_MAX_VALUE"),"\uff0c\u53ef\u80fd\u4f1a\u521b\u5efa\u5927\u91cf\u7684\u7ebf\u7a0b\uff0c\u4ece\u800c\u5bfc\u81f4OOM"))))),Object(o.b)("h1",{id:"\u4e09\u5927\u65b9\u6cd5"},"\u4e09\u5927\u65b9\u6cd5"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Executors\u7684\u4e09\u5927\u65b9\u6cd5")),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"newSingleThreadExecutor()"),"\u2014\u2014\u5355\u7ebf\u7a0b\u7ebf\u7a0b\u6c60")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"newFixedThreadPool(int)"),"\u2014\u2014\u56fa\u5b9a\u6570\u91cf\u7ebf\u7a0b\u7684\u7ebf\u7a0b\u6c60")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"newCachedThreadPool()"),"\u2014\u2014\u53ef\u4f38\u7f29\u7ebf\u7a0b\u6c60")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"\u521b\u5efa\u7ebf\u7a0b\uff1a")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u540c\u6b65")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"executorService.execute(Runnable runnable)\n")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5f02\u6b65")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"executorService.submit(Runnable runnable)\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"\u5173\u95ed\u7ebf\u7a0b\u6c60\uff1a")," ",Object(o.b)("inlineCode",{parentName:"p"},"executorService.shutDown()"))))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"SingleThreadExecutor")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void test1() {\n    ExecutorService threadPool = Executors.newSingleThreadExecutor();\n  \n    try {\n      for (int i = 0; i < 10; i++) {\n        threadPool.execute(() -> {\n          System.out.println(Thread.currentThread().getName() + " is running");\n        });\n      }\n    } catch (Exception e) {\n      e.printStackTrace();\n    } finally {\n      // \u5173\u95ed\u7ebf\u7a0b\u6c60\n      threadPool.shutdown();\n    }\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"pool-1-thread-1 is running\npool-1-thread-1 is running\npool-1-thread-1 is running\npool-1-thread-1 is running\npool-1-thread-1 is running\npool-1-thread-1 is running\npool-1-thread-1 is running\npool-1-thread-1 is running\npool-1-thread-1 is running\npool-1-thread-1 is running\n")),Object(o.b)("p",null,"\u53ef\u4ee5\u770b\u5230\u786e\u5b9e\u53ea\u6709\u4e00\u4e2a\u7ebf\u7a0b"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"FixedThreadPool")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void test2() {\n    ExecutorService threadPool = Executors.newFixedThreadPool(9);\n  \n    try {\n      for (int i = 0; i < 10; i++) {\n        threadPool.execute(() -> {\n          System.out.println(Thread.currentThread().getName() + " is running");\n        });\n      }\n    } catch (Exception e) {\n      e.printStackTrace();\n    } finally {\n      // \u5173\u95ed\u7ebf\u7a0b\u6c60\n      threadPool.shutdown();\n    }\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"pool-1-thread-1 is running\npool-1-thread-2 is running\npool-1-thread-3 is running\npool-1-thread-4 is running\npool-1-thread-5 is running\npool-1-thread-6 is running\npool-1-thread-7 is running\npool-1-thread-8 is running\npool-1-thread-2 is running\npool-1-thread-9 is running\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u521b\u5efa\u62e5\u67099\u4e2a\u7ebf\u7a0b\u7684\u7ebf\u7a0b\u6c60\uff0c\u5f0010\u4e2a\u7ebf\u7a0b\uff0c\u53d1\u73b0\u7ebf\u7a0b2\u88ab\u590d\u7528\u4e86")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"CachedThreadPool")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void test3() {\n    ExecutorService threadPool = Executors.newCachedThreadPool();\n  \n    try {\n      for (int i = 0; i < 10; i++) {\n        threadPool.execute(() -> {\n          System.out.println(Thread.currentThread().getName() + " is running");\n        });\n      }\n    } catch (Exception e) {\n      e.printStackTrace();\n    } finally {\n      // \u5173\u95ed\u7ebf\u7a0b\u6c60\n      threadPool.shutdown();\n    }\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"pool-1-thread-1 is running\npool-1-thread-2 is running\npool-1-thread-3 is running\npool-1-thread-4 is running\npool-1-thread-5 is running\npool-1-thread-5 is running\npool-1-thread-1 is running\npool-1-thread-3 is running\npool-1-thread-2 is running\npool-1-thread-4 is running\n")),Object(o.b)("p",null,"\u53ef\u4ee5\u770b\u5230\u53ef\u4f38\u7f29\u7684",Object(o.b)("inlineCode",{parentName:"p"},"CachedThreadPool"),"\u81ea\u52a8\u521b\u5efa\u4e865\u4e2a\u7ebf\u7a0b\uff0c\u7a0b\u5e8f\u7533\u8bf710\u4e2a\u7ebf\u7a0b\uff0c\u7ebf\u7a0b\u6c60\u4e2d\u76845\u4e2a\u7ebf\u7a0b\u90fd\u88ab\u590d\u7528\u4e86\u4e00\u6b21"),Object(o.b)("h1",{id:"\u4e03\u5927\u53c2\u6570"},"\u4e03\u5927\u53c2\u6570"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"Executors"),"\u5e95\u5c42\u8c03\u7528\u7684\u662f",Object(o.b)("inlineCode",{parentName:"p"},"ThreadPoolExecutor")),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ThreadPoolExecutor"),"\u6784\u9020\u65b9\u6cd5\u7684\u4e03\u5927\u53c2\u6570",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"int corePoolSize"),"\u2014\u2014\u6838\u5fc3\u7ebf\u7a0b\u6c60\u5927\u5c0f"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"int maximumPoolSize"),"\u2014\u2014\u6700\u5927\u7ebf\u7a0b\u6c60\u5927\u5c0f"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"long keepAliveTime"),"\u2014\u2014\u5b58\u6d3b\u65f6\u95f4\u3001\u8d85\u65f6\u6ca1\u4eba\u8c03\u7528\u5c31\u91ca\u653e"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"TimeUnit unit"),"\u2014\u2014\u65f6\u95f4\u5355\u4f4d"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"BlockingQueue<Runnable> workQueue"),"\u2014\u2014\u963b\u585e\u961f\u5217"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"ThreadFactory threadFactory"),"\u2014\u2014\u7ebf\u7a0b\u5de5\u5382\uff0c\u7528\u6765\u521b\u5efa\u7ebf\u7a0b"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"RejectedExecutionHandler handler)"),"\u2014\u2014\u62d2\u7edd\u7b56\u7565"))))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public static ExecutorService newSingleThreadExecutor() {\n    return new FinalizableDelegatedExecutorService\n      (new ThreadPoolExecutor(1, 1,\n                              0L, TimeUnit.MILLISECONDS,\n                              new LinkedBlockingQueue<Runnable>()));\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public static ExecutorService newFixedThreadPool(int nThreads) {\n    return new ThreadPoolExecutor(nThreads, nThreads,\n                                  0L, TimeUnit.MILLISECONDS,\n                                  new LinkedBlockingQueue<Runnable>());\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public static ExecutorService newCachedThreadPool() {\n    return new ThreadPoolExecutor(0, Integer.MAX_VALUE,\n                                  60L, TimeUnit.SECONDS,\n                                  new SynchronousQueue<Runnable>());\n}\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"ThreadPoolExecutor\u6784\u9020\u65b9\u6cd5")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"/**\n     * Creates a new {@code ThreadPoolExecutor} with the given initial\n     * parameters.\n     *\n     * @param corePoolSize the number of threads to keep in the pool, even\n     *        if they are idle, unless {@code allowCoreThreadTimeOut} is set\n     * @param maximumPoolSize the maximum number of threads to allow in the\n     *        pool\n     * @param keepAliveTime when the number of threads is greater than\n     *        the core, this is the maximum time that excess idle threads\n     *        will wait for new tasks before terminating.\n     * @param unit the time unit for the {@code keepAliveTime} argument\n     * @param workQueue the queue to use for holding tasks before they are\n     *        executed.  This queue will hold only the {@code Runnable}\n     *        tasks submitted by the {@code execute} method.\n     * @param threadFactory the factory to use when the executor\n     *        creates a new thread\n     * @param handler the handler to use when execution is blocked\n     *        because the thread bounds and queue capacities are reached\n     * @throws IllegalArgumentException if one of the following holds:<br>\n     *         {@code corePoolSize < 0}<br>\n     *         {@code keepAliveTime < 0}<br>\n     *         {@code maximumPoolSize <= 0}<br>\n     *         {@code maximumPoolSize < corePoolSize}\n     * @throws NullPointerException if {@code workQueue}\n     *         or {@code threadFactory} or {@code handler} is null\n     */\npublic ThreadPoolExecutor(int corePoolSize,\n                          int maximumPoolSize,\n                          long keepAliveTime,\n                          TimeUnit unit,\n                          BlockingQueue<Runnable> workQueue,\n                          ThreadFactory threadFactory,\n                          RejectedExecutionHandler handler) {\n    if (corePoolSize < 0 ||\n        maximumPoolSize <= 0 ||\n        maximumPoolSize < corePoolSize ||\n        keepAliveTime < 0)\n      throw new IllegalArgumentException();\n    if (workQueue == null || threadFactory == null || handler == null)\n      throw new NullPointerException();\n    this.acc = System.getSecurityManager() == null ?\n      null :\n    AccessController.getContext();\n    this.corePoolSize = corePoolSize;\n    this.maximumPoolSize = maximumPoolSize;\n    this.workQueue = workQueue;\n    this.keepAliveTime = unit.toNanos(keepAliveTime);\n    this.threadFactory = threadFactory;\n    this.handler = handler;\n}\n")),Object(o.b)("h2",{id:"\u6838\u5fc3\u7ebf\u7a0b\u6c60"},"\u6838\u5fc3\u7ebf\u7a0b\u6c60"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u53bb\u94f6\u884c\u53d6\u94b1\uff0c\u94f6\u884c\u67095\u4e2a\u67dc\u53f0\uff0c\u5176\u4e2d2\u4e2a\u6709\u5458\u5de5\u6b63\u5728\u529e\u7406\u4e1a\u52a1\uff0c\u5269\u4e0b3\u4e2a\u6ca1\u4eba\uff0c\u6682\u505c\u529e\u7406"),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"\u6709\u4eba\u7684\u90a3\u4e24\u4e2a\u5c31\u662f\u6838\u5fc3\u7ebf\u7a0b\u6c60\u91cc\u7684\u7ebf\u7a0b"))),Object(o.b)("h2",{id:"\u6700\u5927\u7ebf\u7a0b\u6c60\u5927\u5c0f"},"\u6700\u5927\u7ebf\u7a0b\u6c60\u5927\u5c0f"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u94f6\u884c\u7a97\u53e3\u7684\u603b\u6570\uff0c\u5f53\u6240\u6709\u6709\u5458\u5de5\u7684\u67dc\u53f0\u90fd\u5df2\u7ecf\u88ab\u4f7f\u7528\uff0c\u4e14\u94f6\u884c\u7684\u5019\u5ba2\u533a\u4e5f\u6ca1\u4e86\u5ea7\u4f4d\u7684\u65f6\u5019\uff0c\u5c31\u6253\u5f00\u975e\u6838\u5fc3\u7ebf\u7a0b")),Object(o.b)("h2",{id:"\u963b\u585e\u961f\u5217"},"\u963b\u585e\u961f\u5217"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u76f8\u5f53\u4e8e\u94f6\u884c\u7684\u5019\u5ba2\u533a\uff08\u90a3\u4e00\u6392\u6905\u5b50\uff09\uff0c\u5047\u8bbe\u67093\u628a\u6905\u5b50"),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"\u7528\u963b\u585e\u961f\u5217\u7684\u5f62\u5f0f\u6765\u8868\u793a\uff0c\u5373\u5927\u5c0f\u4e3a3\u7684\u963b\u585e\u961f\u5217"))),Object(o.b)("h2",{id:"\u5b58\u6d3b\u65f6\u95f4"},"\u5b58\u6d3b\u65f6\u95f4"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u94f6\u884c\u5f00\u653e\u4e86\u5168\u90e8\u7a97\u53e3\uff0c\u5ba2\u6237\u4e1a\u52a1\u90fd\u529e\u5b8c\u4e86\uff0c\u4eba\u90fd\u8d70\u4e86\uff0c\u6709\u51e0\u4e2a\u7a97\u53e3\u7a7a\u51fa\u6765\u4e86\uff0c",Object(o.b)("strong",{parentName:"p"},"\u7a7a\u4e86\u4e00\u6bb5\u65f6\u95f4\u540e\uff0c\u8fd8\u662f\u6ca1\u591a\u5c11\u4eba"),"\uff0c\u4e8e\u662f\u51e0\u4e2a\u5de5\u4f5c\u4eba\u5458\u6e9c\u4e86\uff0c\u628a\u7a97\u53e3\u5173\u4e86\uff0c\u53ea\u5269\u4e0b\u4e00\u5f00\u59cb\u7684\u90a32\u4e2a\u7a97\u53e3"),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"\u975e\u6838\u5fc3\u7ebf\u7a0b\uff0c\u8d85\u8fc7\u8fd9\u4e2a\u65f6\u95f4\u5982\u679c\u6ca1\u6709\u88ab\u4f7f\u7528\uff0c\u5c31\u91ca\u653e\uff0c\u4ee5\u8282\u7701\u7cfb\u7edf\u5f00\u9500"))),Object(o.b)("h2",{id:"\u65f6\u95f4\u5355\u4f4d"},"\u65f6\u95f4\u5355\u4f4d"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u5b58\u6d3b\u65f6\u95f4\u7684\u65f6\u95f4\u5355\u4f4d\uff0c\u53ef\u4ee5\u662f\u65f6\u3001\u5206\u3001\u79d2\u7b49")),Object(o.b)("h2",{id:"\u7ebf\u7a0b\u5de5\u5382"},"\u7ebf\u7a0b\u5de5\u5382"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u7528\u6765\u521b\u5efa\u7ebf\u7a0b\u7684\u5de5\u5382\uff0c\u4e00\u822c\u4e0d\u505a\u6539\u53d8"),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Executors.DefaultThreadFactory()")))),Object(o.b)("h2",{id:"\u62d2\u7edd\u7b56\u7565"},"\u62d2\u7edd\u7b56\u7565"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u53bb\u94f6\u884c\u53d6\u94b1\uff0c\u6240\u6709\u7a97\u53e3\u548c\u5019\u5ba2\u533a\u5168\u90fd\u6ee1\u4e86\uff0c\u94f6\u884c\u5982\u4f55\u62d2\u7edd\u65b0\u6765\u7684\u4eba\u529e\u7406\u4e1a\u52a1"),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"interface RejectedExecutionHandler"),"\u6709\u56db\u4e2a\u5b9e\u73b0\u7c7b\uff0c\u5177\u4f53\u770b\u56db\u79cd\u62d2\u7edd\u7b56\u7565"))),Object(o.b)("h1",{id:"\u56db\u79cd\u62d2\u7edd\u7b56\u7565"},"\u56db\u79cd\u62d2\u7edd\u7b56\u7565"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"Interface RejectedExecutionHandler"))),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"\u5b9e\u73b0\u7c7b"),"\uff1a"),Object(o.b)("ol",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"CallerRunsPolicy"),"\n\u54ea\u6765\u7684\u56de\u54ea\u91cc\uff0c\u56de\u5230\u8981\u6c42\u5f00\u542f\u8fd9\u4e2a\u7ebf\u7a0b\u7684\u7ebf\u7a0b\uff0c\u6bd4\u5982\u5728main\u65b9\u6cd5\u4e2d\u5f00\u7ebf\u7a0b\uff0c\u88ab\u62d2\u7edd\uff0c\u5c31\u4f1a\u8ba9main\u7ebf\u7a0b\u8dd1"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"AbortPolicy"),"\u2014\u2014 ThreadPoolExecutor\u9ed8\u8ba4\u62d2\u7edd\u7b56\u7565\n\u4e0d\u5904\u7406\u65b0\u8bf7\u6c42\uff0c\u629b\u51fa\u5f02\u5e38"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"DiscardPolicy"),"\n\u4e0d\u5904\u7406\u5fc3\u60c5\u6c42\uff0c\u4e5f\u4e0d\u4f1a\u629b\u51fa\u5f02\u5e38"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"DiscardOldestPolicy"),"\n\u5c1d\u8bd5\u4e22\u5f03\u6700\u65e9\u7684\u8bf7\u6c42\uff0c\u7136\u540e\u628a\u65b0\u8bf7\u6c42\u653e\u8fdb\u6765\u3002\u7ade\u4e89\u6210\u529f\u5c31\u6267\u884c\u65b0\u7684\uff0c\u7ade\u4e89\u5931\u8d25\u5c31\u4e0d\u54cd\u5e94\u3002\u4e0d\u629b\u51fa\u5f02\u5e38"))),Object(o.b)("h1",{id:"\u4f7f\u7528\u539f\u751fthreadpoolexecutor\u521b\u5efa\u7ebf\u7a0b\u6c60"},"\u4f7f\u7528\u539f\u751fThreadPoolExecutor\u521b\u5efa\u7ebf\u7a0b\u6c60"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u6309\u7167\u4e0a\u9762\u7684\u4e3e\u4f8b\u6765\u8bbe\u7f6e\u53c2\u6570"),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"\u6838\u5fc3\u7ebf\u7a0b\u6c60\u5927\u5c0f2"),Object(o.b)("li",{parentName:"ul"},"\u6700\u5927\u7ebf\u7a0b\u6c60\u5927\u5c0f5"),Object(o.b)("li",{parentName:"ul"},"\u963b\u585e\u961f\u5217\u5927\u5c0f\u4e3a3"),Object(o.b)("li",{parentName:"ul"},"\u62d2\u7edd\u7b56\u7565\u4e3aAbort"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u6d4b\u8bd5\uff1a\u5f005\u4e2a\u7ebf\u7a0b\uff0c\u6839\u636e\u5206\u6790\uff0c2\u4e2a\u7528\u6838\u5fc3\u7ebf\u7a0b\u6c60\u8dd1\uff0c3\u4e2a\u5728\u963b\u585e\u961f\u5217\u91cc\u7b49")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void test4() {\n    //\u4f7f\u7528\u539f\u751fThreadPoolExecutor\u521b\u5efa\u7ebf\u7a0b\u6c60\n    ThreadPoolExecutor threadPool = new ThreadPoolExecutor(2,\n            5,\n            3,\n            TimeUnit.SECONDS,\n            new LinkedBlockingQueue<>(3),\n            Executors.defaultThreadFactory(),\n            new ThreadPoolExecutor.AbortPolicy())\n    try {\n        for (int i = 1; i <= 5; i++) {\n            threadPool.execute(() -> {\n                System.out.println(Thread.currentThread().getName() + " -> running");\n            });\n        }\n    } catch (Exception e) {\n        e.printStackTrace();\n    } finally {\n        threadPool.shutdown();\n    }\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"pool-1-thread-2 -> running\npool-1-thread-1 -> running\npool-1-thread-2 -> running\npool-1-thread-2 -> running\npool-1-thread-1 -> running\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u770b\u5230\u786e\u5b9e\u53ea\u7528\u4e86\u4e24\u4e2a\u7ebf\u7a0b\uff0c\u7136\u540e\u590d\u7528\u4ed6\u4eec")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u6d4b\u8bd5\uff0c\u5f006\u4e2a\u7ebf\u7a0b\uff0c\u963b\u585e\u961f\u5217\u6ee1\u4e86\uff0c\u591a\u51fa\u6765\u4e00\u4e2a\u8bf7\u6c42\uff0c\u5219\u7ebf\u7a0b\u6c60\u989d\u5916\u5f00\u653e\u4e00\u4e2a\u975e\u6838\u5fc3\u7ebf\u7a0b\u4ee5\u4f9b\u4f7f\u7528")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Test\n  public void test4() {\n      //\u4f7f\u7528\u539f\u751fThreadPoolExecutor\u521b\u5efa\u7ebf\u7a0b\u6c60\n      ThreadPoolExecutor threadPool = new ThreadPoolExecutor(2,\n              5,\n              3,\n              TimeUnit.SECONDS,\n              new LinkedBlockingQueue<>(3),\n              Executors.defaultThreadFactory(),\n              new ThreadPoolExecutor.AbortPolicy())\n      try {\n          for (int i = 1; i <= 6; i++) {\n              threadPool.execute(() -> {\n                  System.out.println(Thread.currentThread().getName() + " -> running");\n              });\n          }\n      } catch (Exception e) {\n          e.printStackTrace();\n      } finally {\n          threadPool.shutdown();\n      }\n  }\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"pool-1-thread-1 -> running\npool-1-thread-2 -> running\npool-1-thread-1 -> running\npool-1-thread-3 -> running\npool-1-thread-3 -> running\npool-1-thread-2 -> running\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u770b\u5230\uff0c\u5b9e\u9645\u4f7f\u7528\u7684\u7ebf\u7a0b\u4e3a3\u4e2a\uff0c\u5176\u4e2d2\u4e2a\u6838\u5fc3\uff0c1\u4e2a\u975e\u6838\u5fc3\u662f\u65b0\u5f00\u51fa\u6765\u7684")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5f00 \u4e2a\u7ebf\u7a0b\uff0c\u6309\u7167\u5206\u6790\uff0c\u6700\u59275\u4e2a\u7ebf\u7a0b\uff0c\u963b\u585e\u961f\u5217\u91cc\u80fd\u653e3\u4e2a\uff0c\u6574\u4e2a\u7ebf\u7a0b\u6c60\u80fd\u5904\u7406\u7684\u7ebf\u7a0b\u8bf7\u6c42\u6570\u5c31\u662f5 + 3 = 8\uff0c\u8d85\u8fc78\u5219\u89e6\u53d1\u62d2\u7edd\u7b56\u7565"),Object(o.b)("li",{parentName:"ul"},"\u6839\u636e\u8bbe\u7f6e\u7684\u62d2\u7edd\u7b56\u7565",Object(o.b)("inlineCode",{parentName:"li"},"Abort"),"\uff0c",Object(o.b)("strong",{parentName:"li"},"\u7ebf\u7a0b\u6c60\u4f1a\u629b\u51fa\u5f02\u5e38")),Object(o.b)("li",{parentName:"ul"},"\u5f009\u4e2a\u7ebf\u7a0b"),Object(o.b)("li",{parentName:"ul"},"\u4e3a\u4e86\u9632\u6b62CPU\u8dd1\u7684\u592a\u5feb\u628a\u7528\u5b8c\u7684\u7ebf\u7a0b\u63d0\u524d\u8fd8\u56de\u7ebf\u7a0b\u6c60\u4e86\uff0c\u4e8e\u662f\u8ba9\u6bcf\u4e2a\u7ebf\u7a0b\u7761\u4e00\u4f1a")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void test4() {\n    //\u4f7f\u7528\u539f\u751fThreadPoolExecutor\u521b\u5efa\u7ebf\u7a0b\u6c60\n    ThreadPoolExecutor threadPool = new ThreadPoolExecutor(2,\n            5,\n            3,\n            TimeUnit.SECONDS,\n            new LinkedBlockingQueue<>(3),\n            Executors.defaultThreadFactory(),\n            new ThreadPoolExecutor.AbortPolicy(\n    try {\n        for (int i = 1; i <= 9; i++) {\n            threadPool.execute(() -> {\n                System.out.println(Thread.currentThread().getName() + " -> running");\n                try {\n                    TimeUnit.MILLISECONDS.sleep(300);\n                } catch (InterruptedException e) {\n                    e.printStackTrace();\n                }\n            });\n        }\n    } catch (Exception e) {\n        e.printStackTrace();\n    } finally {\n        threadPool.shutdown();\n    }\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"pool-1-thread-1 -> running\npool-1-thread-2 -> running\npool-1-thread-3 -> running\npool-1-thread-4 -> running\npool-1-thread-5 -> running\njava.util.concurrent.RejectedExecutionException: Task threadPool.Demo01$$Lambda$1/992136656@7960847b rejected from java.util.concurrent.ThreadPoolExecutor@6a6824be[Running, pool size = 5, active threads = 5, queued tasks = 3, completed tasks = 0]\n...\n")),Object(o.b)("h1",{id:"cpu\u5bc6\u96c6\u578b--io\u5bc6\u96c6\u578b"},"CPU\u5bc6\u96c6\u578b | IO\u5bc6\u96c6\u578b"),Object(o.b)("h2",{id:"\u6700\u5927\u7ebf\u7a0b\u6570\u5982\u4f55\u5b9a\u4e49"},"\u6700\u5927\u7ebf\u7a0b\u6570\u5982\u4f55\u5b9a\u4e49"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"CPU\u5bc6\u96c6\u578b")),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"CPU\u4e0a\u6709\u591a\u5c11\u7ebf\u7a0b\u5c31\u5b9a\u4e49\u51e0\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u786c\u4ef6\u7ebf\u7a0b\u6700\u5927\u6548\u7387\uff0c\u53ef\u4ee5\u901a\u8fc7\u4efb\u52a1\u7ba1\u7406\u5668\u67e5\u770b"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528\u4ee3\u7801\u83b7\u53d6CPU\u7ebf\u7a0b\u6570"))),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"Runtime.getRuntime().availableProcessors()\n"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"IO\u5bc6\u96c6\u578b")),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"\u7a0b\u5e8f\u6709\u591a\u4e2a\u5927\u578b\u4efb\u52a1\uff0c\u5341\u5206\u5360\u7528\u8d44\u6e90"),Object(o.b)("li",{parentName:"ul"},"\u5224\u65ad\u7a0b\u5e8f\u4e2d\u8017\u8d39IO\u8d44\u6e90\u591a\u7684\u7ebf\u7a0b\u6709\u591a\u5c11\u4e2a\uff0c\u7136\u540e\u5c06\u7ebf\u7a0b\u6c60\u6700\u5927\u7ebf\u7a0b\u6570\u8bbe\u7f6e\u7684\u5927\u4e8e\u8fd9\u4e2a\u6570\u4e00\u4e9b\u5373\u53ef\uff0c",Object(o.b)("strong",{parentName:"li"},"\u901a\u5e38\u4e3a2\u500d")))))}u.isMDXComponent=!0},366:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return j}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),u=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,j=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?r.a.createElement(j,c(c({ref:n},b),{},{components:t})):r.a.createElement(j,c({ref:n},b))}));function j(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var b=2;b<o;b++)l[b]=t[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);