(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{214:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),i=(t(0),t(570)),l={id:"3.roundRobin",title:"\u8f6e\u8be2\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5",hide_title:!0},o={unversionedId:"springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/ribbon/3.roundRobin",id:"springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/ribbon/3.roundRobin",isDocsHomePage:!1,title:"\u8f6e\u8be2\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5",description:"\u8f6e\u8be2\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5",source:"@site/docs/springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/ribbon/3.roundRobin.md",slug:"/springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/ribbon/3.roundRobin",permalink:"/docs/springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/ribbon/3.roundRobin",version:"current",sidebar:"someSidebar",previous:{title:"Ribbon \u8d1f\u8f7d\u5747\u8861",permalink:"/docs/springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/ribbon/2.ribbonLB"},next:{title:"OpenFeign \u6982\u8ff0",permalink:"/docs/springcloud/\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528/openFeign/1.openFeign"}},c=[{value:"\u8f6e\u8be2\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5",id:"\u8f6e\u8be2\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5",children:[]},{value:"RoundRobinRule \u6e90\u7801\u5206\u6790",id:"roundrobinrule-\u6e90\u7801\u5206\u6790",children:[]},{value:"\u624b\u5199\u8f6e\u8be2\u7b97\u6cd5",id:"\u624b\u5199\u8f6e\u8be2\u7b97\u6cd5",children:[{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",children:[]}]},{value:"\u4e00\u81f4\u6027\u54c8\u5e0c\u7b97\u6cd5",id:"\u4e00\u81f4\u6027\u54c8\u5e0c\u7b97\u6cd5",children:[]}],b={rightToc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u8f6e\u8be2\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5"},"\u8f6e\u8be2\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u63d0\u793a")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u6062\u590d\u9ed8\u8ba4\u8f6e\u8be2\u8d1f\u8f7d\u5747\u8861\u7b56\u7565 ",Object(i.b)("inlineCode",{parentName:"p"},"RoundRobinRule")),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"\u5728\u4e3b\u542f\u52a8\u7c7b\u4f4d\u7f6e\uff0c\u4e0d\u5199 ",Object(i.b)("inlineCode",{parentName:"li"},"@RibbonClient")," \u6ce8\u89e3\u5373\u53ef")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u8f6e\u8be2\u539f\u7406")),Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"rest \u63a5\u53e3\u7b2c\u51e0\u6b21\u8c03\u7528 % \u670d\u52a1\u5668\u96c6\u7fa4\u8282\u70b9\u603b\u6570 = \u5b9e\u9645\u8c03\u7528\u670d\u52a1\u5668\u4f4d\u7f6e\u4e0b\u6807")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u6bcf\u6b21\u6ce8\u518c\u4e2d\u5fc3\u670d\u52a1\u5668\u91cd\u542f\u540e\uff0cREST \u63a5\u53e3\u8ba1\u6570\u4ece ",Object(i.b)("inlineCode",{parentName:"li"},"1")," \u5f00\u59cb"),Object(i.b)("li",{parentName:"ul"},"\u6709\u5faa\u73af\u961f\u5217\u5185\u5473\u513f"))),Object(i.b)("br",null),Object(i.b)("h1",{id:"roundrobinrule-\u6e90\u7801\u5206\u6790"},"RoundRobinRule \u6e90\u7801\u5206\u6790"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'/**\n * The most well known and basic load balancing strategy, i.e. Round Robin Rule.\n *\n * @author stonse\n * @author Nikos Michalakis <nikos@netflix.com>\n *\n */\npublic class RoundRobinRule extends AbstractLoadBalancerRule {\n\n    private AtomicInteger nextServerCyclicCounter; // \u539f\u5b50\u6574\u578b\n    private static final boolean AVAILABLE_ONLY_SERVERS = true;\n    private static final boolean ALL_SERVERS = false;\n\n    private static Logger log = LoggerFactory.getLogger(RoundRobinRule.class);\n\n    public RoundRobinRule() {\n        nextServerCyclicCounter = new AtomicInteger(0); // \u521d\u59cb\u5316\u4e3a0\n    }\n\n    public RoundRobinRule(ILoadBalancer lb) {\n        this();\n        setLoadBalancer(lb);\n    }\n\n    public Server choose(ILoadBalancer lb, Object key) {\n        if (lb == null) {\n            log.warn("no load balancer"); // \u6ca1\u8d1f\u8f7d\u5747\u8861\u5668\uff0c\u76f4\u63a5\u62a5\u9519\n            return null;\n        }\n\n        Server server = null; // \u76ee\u6807\u670d\u52a1\u5668\n        int count = 0; // \u5c1d\u8bd5\u5bfb\u627e\u6b21\u6570\n        while (server == null && count++ < 10) {\n            List<Server> reachableServers = lb.getReachableServers(); // \u6240\u6709\u53ef\u7528\u3001\u6d3b\u7684\u670d\u52a1\u5668\n            List<Server> allServers = lb.getAllServers(); // \u6240\u6709\u670d\u52a1\u5668\n            int upCount = reachableServers.size();\n            int serverCount = allServers.size();\n\n            if ((upCount == 0) || (serverCount == 0)) { // \u6839\u672c\u6ca1\u670d\u52a1\u5668\uff0c\u62a5\u9519\n                log.warn("No up servers available from load balancer: " + lb);\n                return null;\n            }\n            // \u5b9a\u4e49\u5728\u4e0b\u9762\u7684\u65b9\u6cd5\n            int nextServerIndex = incrementAndGetModulo(serverCount); // \u52a0\u4ee5 \u7136\u540e \u53d6\u6a21 \u62ff\u4f59\u6570\n            server = allServers.get(nextServerIndex); // \u7528\u4f59\u6570\u505a\u4e0b\u6807\uff0c\u62ff\u5177\u4f53\u670d\u52a1\u5668\n\n            if (server == null) { // \u670d\u52a1\u5668\u4e3a\u7a7a\uff0c\u7ebf\u7a0b\u793c\u8ba9\n                /* Transient. */\n                Thread.yield();\n                continue;\n            }\n\n            if (server.isAlive() && (server.isReadyToServe())) {\n                return (server); // \u6ca1\u6bdb\u75c5\uff0c\u5c31\u7528\u8fd9\u4e2a\u670d\u52a1\u5668\n            }\n\n            // Next.\n            server = null; // \u8d70\u5230\u8fd9\u91cc\uff0c\u91cd\u8bd5\u4e00\u6b21\n        }\n\n        if (count >= 10) { // \u91cd\u8bd5\u4e8610\u6b21\n            log.warn("No available alive servers after 10 tries from load balancer: "\n                    + lb); // \u62a5\u9519\uff0c\u8d1f\u8f7d\u5747\u8861\u5668\u6363\u9f13\u4e8610\u6b21\u4e86\u90fd\u6ca1\u627e\u5230\u53ef\u7528\u670d\u52a1\u5668\n        }\n        return server;\n    }\n\n    /**\n     * Inspired by the implementation of {@link AtomicInteger#incrementAndGet()}.\n     *\n     * @param modulo The modulo to bound the value of the counter.\n     * @return The next value.\n     */\n    private int incrementAndGetModulo(int modulo) {\n        for (;;) {\n            int current = nextServerCyclicCounter.get(); // \u4e00\u5f00\u59cb\u662f0\n            int next = (current + 1) % modulo; // \u52a01\u53d6\u6a21\u53d6\u4f59\n            if (nextServerCyclicCounter.compareAndSet(current, next)) // CAS\u81ea\u65cb\u9501\n                return next; // \u786e\u4fdd\u81ea\u5df1\u662f\u5e76\u53d1\u83b7\u80dc\u8005\u624d\u66f4\u65b0\n        }\n    }\n\n    @Override\n    public Server choose(Object key) {\n        return choose(getLoadBalancer(), key);\n    }\n\n    @Override\n    public void initWithNiwsConfig(IClientConfig clientConfig) {\n    }\n}\n')),Object(i.b)("br",null),Object(i.b)("h1",{id:"\u624b\u5199\u8f6e\u8be2\u7b97\u6cd5"},"\u624b\u5199\u8f6e\u8be2\u7b97\u6cd5"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u4fee\u6539 ",Object(i.b)("inlineCode",{parentName:"strong"},"provider-payment8001")," \u548c ",Object(i.b)("inlineCode",{parentName:"strong"},"provider-payment8002")," \u7684 ",Object(i.b)("inlineCode",{parentName:"strong"},"Controller"),"\uff0c\u6dfb\u52a0\u4ee5\u4e0b\u65b9\u6cd5")),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@GetMapping("/payment/lb")\npublic String getPaymentLB() {\n    return serverPort;\n}\n'))),Object(i.b)("blockquote",null,Object(i.b)("ol",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ol"},"\u5728 ",Object(i.b)("inlineCode",{parentName:"li"},"cloud-consumer-order80")," \u5fae\u670d\u52a1\u4e2d\uff0c\u627e\u5230",Object(i.b)("inlineCode",{parentName:"li"},"com.bsx.springcloud.config.ApplicaitionContextConfig")," \u914d\u7f6e\u7c7b\uff0c\u5176\u4e2d\u6ce8\u518c\u4e86\u4e00\u4e2a Spring Bean\uff0c\u662f ",Object(i.b)("inlineCode",{parentName:"li"},"RestTemplate"),"\uff0c",Object(i.b)("strong",{parentName:"li"},"\u79fb\u9664\u5176 ",Object(i.b)("inlineCode",{parentName:"strong"},"@LoandBalanced")," \u6ce8\u89e3\uff0c\u5373\u5173\u95ed\u5176 ",Object(i.b)("inlineCode",{parentName:"strong"},"Ribbon")," \u81ea\u5e26\u7684\u8d1f\u8f7d\u5747\u8861\u5668")),Object(i.b)("li",{parentName:"ol"},"\u65b0\u5efa\u5305 ",Object(i.b)("inlineCode",{parentName:"li"},"com.bsx.springcloud.lb"),"\uff0c\u65b0\u5efa\u63a5\u53e3 ",Object(i.b)("inlineCode",{parentName:"li"},"MyLoadBalancer")),Object(i.b)("li",{parentName:"ol"},"\u5b9e\u73b0\u7c7b ",Object(i.b)("inlineCode",{parentName:"li"},"MyLoadBalancerImpl"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@Component")," \u786e\u4fdd Spring \u5bb9\u5668\u53ef\u4ee5\u626b\u63cf\u5230\u8fd9\u4e2a\u7c7b"),Object(i.b)("li",{parentName:"ul"},"\u6ce8\u5165\u670d\u52a1\u53d1\u73b0 ",Object(i.b)("inlineCode",{parentName:"li"},"discoveryClient"),"\uff0c\u7528\u6765\u626b\u6ce8\u518c\u4e2d\u5fc3\u4e0a\u7684\u53ef\u7528\u5fae\u670d\u52a1\u8282\u70b9\u5217\u8868"),Object(i.b)("li",{parentName:"ul"},"\u5b9a\u4e49\u539f\u5b50\u6574\u578b\u53d8\u91cf\uff0c\u521d\u59cb\u5316\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"0")),Object(i.b)("li",{parentName:"ul"},"\u5b9a\u4e49\u65b9\u6cd5 ",Object(i.b)("inlineCode",{parentName:"li"},"final int getAndIncrement()"),"\uff0c\u5b9e\u73b0\u539f\u5b50\u81ea\u589e"),Object(i.b)("li",{parentName:"ul"},"\u901a\u8fc7\u53d6\u6a21\u8ba1\u7b97\u4e0b\u6807"),Object(i.b)("li",{parentName:"ul"},"\u4ece\u5217\u8868\u4e2d\u6839\u636e\u4e0b\u6807\u53d6\u51fa\u76ee\u6807\u5fae\u670d\u52a1\u8282\u70b9\u5b9e\u4f8b"))),Object(i.b)("li",{parentName:"ol"},"\u6765\u5230 ",Object(i.b)("inlineCode",{parentName:"li"},"Order80")," \u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"Controller"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6ce8\u5165 ",Object(i.b)("inlineCode",{parentName:"li"},"MyLoadBalancer"),"\u3001",Object(i.b)("inlineCode",{parentName:"li"},"discoveryClient")),Object(i.b)("li",{parentName:"ul"},"\u6dfb\u52a0 ",Object(i.b)("inlineCode",{parentName:"li"},"String getPaymentLB()")," \u65b9\u6cd5",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GetMapping"),"\uff0c\u8def\u7531\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"/consumer/payment/lb")),Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},"discoveryClient")," \u83b7\u53d6\u6ce8\u518c\u4e2d\u5fc3\u5fae\u670d\u52a1\u5b9e\u4f8b\u5217\u8868"),Object(i.b)("li",{parentName:"ul"},"\u8c03\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},"myLoadBalancer.instance")," \u65b9\u6cd5\uff0c\u4f20\u5165\u5fae\u670d\u52a1\u5b9e\u4f8b\u5217\u8868\uff0c\u8be5\u65b9\u6cd5\u6839\u636e\u6211\u4eec\u81ea\u5b9a\u4e49\u7684\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u8fd4\u56de\u4e00\u4e2a\u76ee\u6807\u5fae\u670d\u52a1\u5b9e\u4f8b"),Object(i.b)("li",{parentName:"ul"},"\u83b7\u53d6\u76ee\u6807\u5fae\u670d\u52a1\u5b9e\u4f8b\u540e\uff0c\u4f7f\u7528 RestTemplate \u8fdc\u7a0b\u8c03\u7528\u5b83"))))))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u63a5\u53e3"',title:'"\u63a5\u53e3"'}),"/**\n * \u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\u5668\u63a5\u53e3\n * - \u83b7\u53d6 \u6ce8\u518c\u4e2d\u5fc3 \u6240\u6709\u6d3b\u7740\u7684\u5fae\u670d\u52a1\u8282\u70b9\n */\npublic interface MyLoadBalancer {\n\n    /**\n     * \u7ed9\u6211\u4e00\u4e2a \u5fae\u670d\u52a1\u5b9e\u4f8b \u7684\u5217\u8868\uff0c\u6211\u6839\u636e\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\uff0c\u9009\u4e00\u4e2a\u5177\u4f53\u7684\u5fae\u670d\u52a1\u5b9e\u4f8b\uff0c\u8bbf\u95ee\u5b83\n     *\n     * @param serviceInstances \u6ce8\u518c\u4e2d\u5fc3\u4e0a\u6240\u6709\u53ef\u7528\u5fae\u670d\u52a1\u5b9e\u4f8b\u7684\u5217\u8868\n     * @return \u6700\u540e\u9009\u62e9\u7684\u8981\u8bbf\u95ee\u7684\u90a3\u4e2a\u5b9e\u4f8b\n     */\n    ServiceInstance instance(List<ServiceInstance> serviceInstances);\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:'title="\u5b9e\u73b0\u7c7b"',title:'"\u5b9e\u73b0\u7c7b"'}),'@Component\npublic class MyLoadBalancerImpl implements MyLoadBalancer {\n    private AtomicInteger atomicInteger = new AtomicInteger(0);\n\n    @Override\n    public ServiceInstance instance(List<ServiceInstance> serviceInstances) {\n        int index = getAndIncrement() % serviceInstances.size(); // \u83b7\u53d6\u4e0b\u6807\n        return serviceInstances.get(index);\n    }\n\n    // \u539f\u5b50\u52a01\n    private final int getAndIncrement() {\n        int current;\n        int next;\n        do {\n            current = this.atomicInteger.get(); // \u83b7\u53d6\u539f\u5b50\u6574\u578b\u7684\u503c\n            // \u5982\u679ccurrent\u8d85\u51fa\u6700\u5927\u503c\uff0c\u5c31\u53d8\u4e3a0\uff0c\u5426\u5219+1\n            next = current >= Integer.MAX_VALUE ? 0 : current + 1;\n        } while (!atomicInteger.compareAndSet(current, next));\n        System.out.println("****** next: " + next + "******");\n        return next;\n    }\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"OrderController")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:'title="OrderController"',title:'"OrderController"'}),'@RestController\n@Slf4j\npublic class OrderController {\n    //    private static final String PAYMENT_URL = "http://localhost:8081";\n    // \u57fa\u4e8e Eureka Server Application \u670d\u52a1\u540d\u79f0\n    private static final String PAYMENT_URL = "http://CLOUD-PAYMENT-SERVICE";\n\n    @Resource\n    private RestTemplate restTemplate;\n    // \u6ce8\u5165\u81ea\u5b9a\u4e49\u7684\u8d1f\u8f7d\u5747\u8861\u5668\n    @Resource\n    private MyLoadBalancer myLoadBalancer; // aka impl: MyLoadBalancerImpl\n    // discoveryClient \u7528\u6765\u626b Eureka Server \u4e0a\u7684\u5b9e\u4f8b\u5217\u8868\n    @Resource\n    private DiscoveryClient discoveryClient;\n\n    /**\n     * \u8c03\u7528 \u652f\u4ed8\u6a21\u5757 \u7684 create \u65b9\u6cd5\n     *\n     * @param payment\n     * @return \u8c03\u7528\u7ed3\u679c\n     */\n    @GetMapping("/consumer/payment/create")\n    public CommonResult<Integer> create(Payment payment) {\n        return restTemplate.postForObject(PAYMENT_URL + "/payment/create",\n                payment,\n                CommonResult.class);\n    }\n\n    @GetMapping("/consumer/payment/get/{id}")\n    public CommonResult<Payment> getPayment(@PathVariable("id") Long id) {\n        return restTemplate.getForObject(PAYMENT_URL + "/payment/get/" + id,\n                CommonResult.class);\n    }\n\n    @GetMapping("/consumer/payment/getForEntity/{id}")\n    public CommonResult<Payment> getPayment2(@PathVariable("id") Long id) {\n        ResponseEntity<CommonResult> entity = restTemplate.getForEntity(PAYMENT_URL + "/payment/get/" + id, CommonResult.class);\n        if (entity.getStatusCode().is2xxSuccessful()) // \u5982\u679c\u662f 200 \u7cfb\u5217\u54cd\u5e94\u7801\n            return entity.getBody(); // \u8fd4\u56de\u8bf7\u6c42\u4f53\n        else\n            return new CommonResult<>(444, "\u83b7\u53d6\u5931\u8d25");\n    }\n\n    /** \u4f7f\u7528\u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\n     */\n    @GetMapping("/consumer/payment/lb")\n    public String getPaymentLB() {\n        List<ServiceInstance> instances = discoveryClient.getInstances("CLOUD-PAYMENT-SERVICE");\n        if (instances == null || instances.size() <= 0) return null;\n        // \u6709\u6548\u670d\u52a1\u5217\u8868\n        // \u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\uff0c\u4ece\u5217\u8868\u91cc\u83b7\u53d6\u4e00\u4e2a\u76ee\u6807\u5fae\u670d\u52a1\u5b9e\u4f8b\n        ServiceInstance targetInstance = myLoadBalancer.instance(instances);\n        URI uri = targetInstance.getUri();\n\n        System.out.println("****************** uri = " + uri);\n        return restTemplate.getForObject(uri + "/payment/lb", String.class);\n    }\n}\n\n')),Object(i.b)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u5404\u5fae\u670d\u52a1\u91cd\u542f\uff0c\u8bbf\u95ee ",Object(i.b)("inlineCode",{parentName:"strong"},"localhost:80/consumer/payment/lb"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:'title="\u63a7\u5236\u53f0"',title:'"\u63a7\u5236\u53f0"'}),"****** next: 1******\n****************** uri = http://192.168.0.101:8082\n****** next: 2******\n****************** uri = http://192.168.0.101:8082\n****** next: 3******\n****************** uri = http://192.168.0.101:8081\n****** next: 4******\n****************** uri = http://192.168.0.101:8082\n****** next: 5******\n****************** uri = http://192.168.0.101:8081\n****** next: 6******\n****************** uri = http://192.168.0.101:8082\n****** next: 7******\n****************** uri = http://192.168.0.101:8081\n****** next: 8******\n****************** uri = http://192.168.0.101:8082\n")),Object(i.b)("br",null),Object(i.b)("h1",{id:"\u4e00\u81f4\u6027\u54c8\u5e0c\u7b97\u6cd5"},"\u4e00\u81f4\u6027\u54c8\u5e0c\u7b97\u6cd5"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://zhuanlan.zhihu.com/p/24440059"}),"\u4e00\u81f4\u6027\u54c8\u5e0c\u7b97\u6cd5")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u94fe\u8868\u5316\uff1a \u94fe\u8868\u4e0a\u6709\u771f\u8282\u70b9\u5bf9\u5e94\u4e00\u4e2a\u7269\u7406\u670d\u52a1\u5668\uff0c\u4e5f\u6709\u5047\u8282\u70b9\u662f\u7a7a\u7684\uff0c\u6dfb\u52a0-\u79fb\u9664\u4e00\u4e2a\u670d\u52a1\u5668\uff0c\u53ea\u9700\u8981\u987a\u7740\u94fe\u8868\u627e\u5230\u5b83\u7684\u4e0b\u4e00\u4e2a\u771f\u5b9e\u5b58\u5728\u7684\u670d\u52a1\u5668\uff0c\u8fdb\u884c\u91cd\u65b0\u5206\u914d"),Object(i.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u94fe\u8868\u7684\u6700\u540e\u4e00\u4e2a\u8282\u70b9\uff0c\u4e3a\u4e86\u8ba9\u5b83\u5177\u6709 ",Object(i.b)("inlineCode",{parentName:"li"},"\u4e0b\u4e00\u4e2a")," \u670d\u52a1\u5668\uff0c\u5c06\u94fe\u8868\u8bbe\u7f6e\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"\u73af\u5f62\u94fe\u8868"),"\uff0c\u4e5f\u5c31\u662f\u8fde\u7eed\u7684\u94fe\u8868\uff0c\u56e0\u6b64 ",Object(i.b)("inlineCode",{parentName:"li"},"consistent hashing")," \u662f\u4e00\u4e2a\u53cc\u5173\u547d\u540d\uff0c\u4f53\u73b0\u4e86 ",Object(i.b)("inlineCode",{parentName:"li"},"\u4e00\u81f4")," \u548c ",Object(i.b)("inlineCode",{parentName:"li"},"\u8fde\u7eed"),"\uff0c\u4e5f\u8bb8\u7ffb\u8bd1\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"\u8fde\u7eed\u95ed\u73af\u54c8\u5e0c")," \u66f4\u51c6\u786e"),Object(i.b)("li",{parentName:"ul"},"\u666e\u901a\u7684\u54c8\u5e0c\u65f6\u95f4\u590d\u6742\u5ea6 O(1)\uff1b\u4e00\u81f4\u6027\u54c8\u5e0c\u5f15\u5165\u4e86\u94fe\u8868\u65f6\u95f4\u590d\u6742\u5ea6 O(n)\uff0c\u9700\u8981\u5728\u94fe\u8868\u4e0a\u641c\u7d22\u771f\u5b9e\u5b58\u5728\u7684\u4e0b\u4e00\u53f0\u670d\u52a1\u5668"),Object(i.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u4e00\u79cd\u54c8\u5e0c\u7b97\u6cd5\u6765\u8bf4 ",Object(i.b)("inlineCode",{parentName:"li"},"O(n)")," \u7684\u65f6\u95f4\u590d\u6742\u5ea6\u592a\u62c9\u80ef\u4e86\uff0c\u57fa\u4e8e\u94fe\u8868\u8fd9\u79cd\u7ed3\u6784\uff0c\u53ef\u4ee5\u8003\u8651\u4f7f\u7528\u8df3\u8868\uff0c\u5c06\u65f6\u95f4\u590d\u6742\u5ea6\u4f18\u5316\u5230 ",Object(i.b)("inlineCode",{parentName:"li"},"O(logn)"))))}p.isMDXComponent=!0},570:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),p=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,d=u["".concat(l,".").concat(m)]||u[m]||s[m]||i;return t?a.a.createElement(d,o(o({ref:n},b),{},{components:t})):a.a.createElement(d,o({ref:n},b))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var b=2;b<i;b++)l[b]=t[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);