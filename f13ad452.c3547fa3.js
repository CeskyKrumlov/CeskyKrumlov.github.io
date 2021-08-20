(window.webpackJsonp=window.webpackJsonp||[]).push([[482],{538:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(2),a=t(6),i=(t(0),t(565)),l={id:"7.springbootRedis",title:"SpringBoot\u6574\u5408Redis",hide_title:!0},o={unversionedId:"redis/7.springbootRedis",id:"redis/7.springbootRedis",isDocsHomePage:!1,title:"SpringBoot\u6574\u5408Redis",description:"SpringBoot\u6574\u5408Redis",source:"@site/docs/redis/7.springboot\u6574\u5408.md",slug:"/redis/7.springbootRedis",permalink:"/docs/redis/7.springbootRedis",version:"current",sidebar:"someSidebar",previous:{title:"Jedis",permalink:"/docs/redis/6.jedis"},next:{title:"Redis\u914d\u7f6e",permalink:"/docs/redis/8.config"}},p=[{value:"SpringBoot\u6574\u5408Redis",id:"springboot\u6574\u5408redis",children:[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",children:[]}]},{value:"\u81ea\u5b9a\u4e49RedisTemplate",id:"\u81ea\u5b9a\u4e49redistemplate",children:[{value:"\u4e0d\u5e8f\u5217\u5316|\u9ed8\u8ba4JDK\u5e8f\u5217\u5316",id:"\u4e0d\u5e8f\u5217\u5316\u9ed8\u8ba4jdk\u5e8f\u5217\u5316",children:[]},{value:"\u81ea\u5b9a\u4e49RedisTemplate",id:"\u81ea\u5b9a\u4e49redistemplate-1",children:[]},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5-1",children:[]}]},{value:"Redis\u5de5\u5177\u7c7b",id:"redis\u5de5\u5177\u7c7b",children:[]}],c={rightToc:p};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"springboot\u6574\u5408redis"},"SpringBoot\u6574\u5408Redis"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"SpringData -> JDBC MongoDB Redis"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u6240\u6709\u7684\u6570\u636e\u64cd\u4f5c\u90fd\u88ab\u6574\u5408\u8fdb\u4e86Spring Data\u9879\u76ee\u4e2d"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-data-redis</artifactId>\n</dependency>\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u5728SpringBoot 2.x\u4e4b\u540e\uff0cJedis\u88ab\u66ff\u6362\u4e3a\u4e86letuce"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Jedis\uff1a\u76f4\u8fde\uff0c\u591a\u4e2a\u7ebf\u7a0b\u64cd\u4f5c\u4e0d\u5b89\u5168\uff0c\u9700\u8981\u4f7f\u7528Jedis\u8fde\u63a5\u6c60 BIO"),Object(i.b)("li",{parentName:"ul"},"Lettuce\uff1a\u91c7\u7528Netty\uff0c\u5b9e\u4f8b\u53ef\u4ee5\u5728\u591a\u4e2a\u7ebf\u7a0b\u4e2d\u5171\u4eab\uff0c\u4e0d\u5b58\u5728\u7ebf\u7a0b\u4e0d\u5b89\u5168\u7684\u60c5\u51b5\uff0c\u53ef\u4ee5\u51cf\u5c11\u7ebf\u7a0b\u6570\u91cf NIO")),Object(i.b)("p",null,"SpringBoot\u6240\u6709\u914d\u7f6e\u7c7b\uff0c\u90fd\u6709\u4e00\u4e2a\u81ea\u52a8\u914d\u7f6e\u7c7b\uff0c\u81ea\u52a8\u914d\u7f6e\u7c7b\u90fd\u4f1a\u7ed1\u5b9a\u4e00\u4e2aproperties\u914d\u7f6e\u6587\u4ef6"),Object(i.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u67e5\u770bredis\u81ea\u52a8\u914d\u7f6e\u7c7b\u6e90\u7801")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7684redisTemplate\u4f7f\u7528JDK\u5e8f\u5217\u5316\uff0c\u4e2d\u6587\u4f1a\u88ab\u8f6c\u4e49"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u81ea\u5b9a\u4e49redisTemplate\uff0c\u91c7\u7528\u6307\u5b9a\u7684\u5e8f\u5217\u5316\u7b56\u7565"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Configuration(proxyBeanMethods = false)\n@ConditionalOnClass(RedisOperations.class)\n@EnableConfigurationProperties(RedisProperties.class)\n@Import({ LettuceConnectionConfiguration.class, JedisConnectionConfiguration.class })\npublic class RedisAutoConfiguration {\n\n    @Bean\n    @ConditionalOnMissingBean(name = "redisTemplate")// \u53ef\u4ee5\u81ea\u5df1\u5b9a\u4e49redisTemplate\uff0c\u66ff\u6362\u9ed8\u8ba4\u7684\n    public RedisTemplate<Object, Object> redisTemplate(RedisConnectionFactory redisConnectionFactory)\n            throws UnknownHostException {\n        //\u9ed8\u8ba4RedisTemplate\u6ca1\u6709\u8fc7\u591a\u7684\u8bbe\u7f6e\uff0credis\u5bf9\u8c61\u9700\u8981\u5e8f\u5217\u5316\n        // \u4e24\u4e2a\u6cdb\u578b\u90fd\u662fObject\uff0c\u9700\u8981\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362\n        RedisTemplate<Object, Object> template = new RedisTemplate<>();\n        template.setConnectionFactory(redisConnectionFactory);\n        return template;\n    }\n\n    @Bean\n    @ConditionalOnMissingBean\n    // \u7531\u4e8eString\u662fredis\u4e2d\u6700\u5e38\u4f7f\u7528\u7684\u7c7b\u578b\uff0c\u6240\u4ee5\u5355\u72ec\u63d0\u51fa\u4e86\u4e00\u4e2a\u7c7b\u578b\n    public StringRedisTemplate stringRedisTemplate(RedisConnectionFactory redisConnectionFactory)\n            throws UnknownHostException {\n        StringRedisTemplate template = new StringRedisTemplate();\n        template.setConnectionFactory(redisConnectionFactory);\n        return template;\n    }\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u540c\u65f6\u53ef\u4ee5\u770b\u5230Redis\u7684\u914d\u7f6e\u7c7b\u5b9a\u4e49")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@ConfigurationProperties(prefix = "spring.redis")\npublic class RedisProperties {\n\n    /**\n     * Database index used by the connection factory.\n     */\n    private int database = 0;\n\n    /**\n     * Connection URL. Overrides host, port, and password. User is ignored. Example:\n     * redis://user:password@example.com:6379\n     */\n    private String url;\n\n    /**\n     * Redis server host.\n     */\n    private String host = "localhost";\n    ...\n')),Object(i.b)("p",null,"\u6839\u636e\u8fd9\u4e9b\u5185\u5bb9\u53ef\u4ee5\u914d\u7f6eapplication.yaml"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"spring:\n  redis:\n    host: 49.233.209.138\n    port: 6379\n")),Object(i.b)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u6ce8\u5165",Object(i.b)("inlineCode",{parentName:"li"},"RedisTemplate"),"\u5b9e\u4f8b"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"redisTemplate.opsForXxx().\u5177\u4f53\u64cd\u4f5c()")))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@SpringBootTest\nclass RedisApplicationTests {\n\n    @Autowired\n    private RedisTemplate redisTemplate;\n\n    @Test\n    void contextLoads() {\n        redisTemplate.opsForSet().pop("key1");\n    }\n}\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u4e8b\u52a1\u64cd\u4f5c\u7b49\u5e38\u7528\u64cd\u4f5c\uff0c\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7redisTemplate\u64cd\u4f5c")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@Test\nvoid contextLoads() {\n    redisTemplate.multi();\n}\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u83b7\u53d6\u8fde\u63a5\u5bf9\u8c61\uff0c\u8fdb\u884c\u6570\u636e\u5e93\u64cd\u4f5c")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@SpringBootTest\nclass RedisApplicationTests {\n\n    @Autowired\n    private RedisTemplate redisTemplate;\n\n    @Test\n    void contextLoads() {\n        RedisConnection connection = redisTemplate.getConnectionFactory().getConnection();\n        connection.flushDb();\n        connection.close();\n    }\n}\n")),Object(i.b)("h1",{id:"\u81ea\u5b9a\u4e49redistemplate"},"\u81ea\u5b9a\u4e49RedisTemplate"),Object(i.b)("h2",{id:"\u4e0d\u5e8f\u5217\u5316\u9ed8\u8ba4jdk\u5e8f\u5217\u5316"},"\u4e0d\u5e8f\u5217\u5316|\u9ed8\u8ba4JDK\u5e8f\u5217\u5316"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"POJO")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u5148\u4e0d\u5b9e\u73b0\u5e8f\u5217\u5316\u63a5\u53e3"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@Data\n@NoArgsConstructor\n@AllArgsConstructor\npublic class User {\n    private String name;\n    private int age;\n}\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u6d4b\u8bd5")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Test\nvoid test() throws JsonProcessingException {\n    User user = new User("bb", 3);\n    // SpringBoot\u81ea\u5e26Jackson\n    //        String userJson = new ObjectMapper().writeValueAsString(user);\n    redisTemplate.opsForValue().set("user", user);\n    System.out.println(redisTemplate.opsForValue().get("user"));\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"org.springframework.data.redis.serializer.SerializationException: Cannot serialize\n")),Object(i.b)("p",null,"\u9519\u8bef\uff1a\u65e0\u6cd5\u5b8c\u6210\u5e8f\u5217\u5316"),Object(i.b)("p",null,"\u5bf9\u8c61\u9700\u8981\u5e8f\u5217\u5316\u624d\u80fd\u5728\u7f51\u7edc\u4e0a\u4f20\u8f93"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u4fee\u6539POJO"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u5e8f\u5217\u5316\u63a5\u53e3"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@Data\n@NoArgsConstructor\n@AllArgsConstructor\npublic class User implements Serializable{\n    private String name;\n    private int age;\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Test\nvoid test() throws JsonProcessingException {\n    User user = new User("bb", 3);\n    // SpringBoot\u81ea\u5e26Jackson\n    //        String userJson = new ObjectMapper().writeValueAsString(user);\n    redisTemplate.opsForValue().set("user", user);\n    System.out.println(redisTemplate.opsForValue().get("user"));\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"User(name=bb, age=3)\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u5b9e\u9645\u5f00\u53d1\u4e2d\u4e00\u822c\u7528JSON\u5b57\u7b26\u4e32\u5e8f\u5217\u5316")),Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"POJO\u7c7b\u4e00\u822c\u90fd\u4f1a\u5b9e\u73b0\u5e8f\u5217\u5316\u63a5\u53e3"))),Object(i.b)("h2",{id:"\u81ea\u5b9a\u4e49redistemplate-1"},"\u81ea\u5b9a\u4e49RedisTemplate"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"template.setKeySerializer(interdace RedisSerializer)"),"\uff0c\u8981\u6c42\u4f20\u5165\u4e00\u4e2a\u63a5\u53e3\u7c7b\u578b\u7684redisSerialzer\u53c2\u6570\uff0c\u53ef\u4ee5\u770b\u5230\u8fd9\u4e2a\u63a5\u53e3\u6709\u51e0\u4e2a\u5b9e\u73b0\u7c7b"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"GenericJackson2JsonRedisSerializer"),Object(i.b)("li",{parentName:"ul"},"GenericToStringSerializer"),Object(i.b)("li",{parentName:"ul"},"Jackson2JsonRedisSerializer"),Object(i.b)("li",{parentName:"ul"},"JdlSerializationRedisSerializer"),Object(i.b)("li",{parentName:"ul"},"OxmSerializer"),Object(i.b)("li",{parentName:"ul"},"StringRedisSerializer")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Configuration\npublic class RedisConfig {\n\n    @Bean("myRedisTemplate")\n    public RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory redisConnectionFactory)\n            throws UnknownHostException {\n        RedisTemplate<String, Object> template = new RedisTemplate<>();\n        template.setConnectionFactory(redisConnectionFactory);\n\n        // JSON\u5e8f\u5217\u5316\n        Jackson2JsonRedisSerializer<Object> jackson2JsonRedisSerializer =\n                new Jackson2JsonRedisSerializer<Object>(Object.class);\n        // jackSon\n        ObjectMapper objectMapper = new ObjectMapper();\n        objectMapper.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);\n        objectMapper.enableDefaultTyping(ObjectMapper.DefaultTyping.NON_FINAL);\n        jackson2JsonRedisSerializer.setObjectMapper(objectMapper);\n\n        // Spring\u5e8f\u5217\u5316\n        StringRedisSerializer stringRedisSerializer = new StringRedisSerializer();\n\n        // key\u91c7\u7528String\u5e8f\u5217\u5316\u65b9\u5f0f\n        template.setKeySerializer(stringRedisSerializer);\n        // hash\u7684key\u4e5f\u91c7\u7528String\u5e8f\u5217\u5316\u65b9\u5f0f\n        template.setHashKeySerializer(stringRedisSerializer);\n        // value\u5e8f\u5217\u5316\u65b9\u5f0f\u91c7\u7528JackSon\n        template.setValueSerializer(jackson2JsonRedisSerializer);\n        // hash\u7684\u5e8f\u5217\u5316\u65b9\u5f0f\u91c7\u7528JackSon\n        template.setHashValueSerializer(jackson2JsonRedisSerializer);\n        template.afterPropertiesSet();\n\n        return template;\n    }\n}\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u56fa\u5b9a\u6a21\u677f\u3002\u53ef\u4ee5\u76f4\u63a5\u7528")),Object(i.b)("h2",{id:"\u6d4b\u8bd5-1"},"\u6d4b\u8bd5"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u5728\u6d4b\u8bd5\u7c7b\u4e2d\uff0c\u6ce8\u5165\u81ea\u5b9a\u4e49\u7684RedisTemplate")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@SpringBootTest\nclass RedisApplicationTests {\n\n    @Autowired\n    @Qualifier("myRedisTemplate")\n    private RedisTemplate<String, Object> redisTemplate;\n\n    @Test\n    void testDiyTemplate() {\n        User user = new User("bb", 3);\n        redisTemplate.opsForValue().set("user", user);\n        System.out.println(redisTemplate.opsForValue().get("user"));\n    }\n}\n')),Object(i.b)("p",null,"\u8fdc\u7a0b\u8fde\u63a5\u670d\u52a1\u5668redis\uff0c\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"p"},"keys *"),"\u67e5\u770b\u6240\u6709key"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'127.0.0.1:6379> keys *\n1) "user"\n')),Object(i.b)("p",null,"\u6b64\u65f6\u952e\u5df2\u7ecf\u4e0d\u662f\u8f6c\u4e49\u540e\u7684\u4e71\u7801\u4e86\uff0c\u53ef\u4ee5\u6b63\u5e38\u663e\u793a"),Object(i.b)("h1",{id:"redis\u5de5\u5177\u7c7b"},"Redis\u5de5\u5177\u7c7b"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Component\npublic final class RedisUtils {\n\n    @Autowired\n    @Qualifier("myRedisTemplate")\n    private RedisTemplate<String, Object> redisTemplate;\n\n    // =============================common============================\n    // /**\n    // * \u6307\u5b9a\u7f13\u5b58\u5931\u6548\u65f6\u95f4\n    // * @param key  \u952e\n    // * @param time \u65f6\u95f4(\u79d2)\n    // */\n    public boolean expire(String key, long time) {\n        try {\n            if (time > 0) {\n                redisTemplate.expire(key, time, TimeUnit.SECONDS);\n            }\n            return true;\n        } catch (Exception e) {\n            e.printStackTrace();\n            return false;\n        }\n    }\n\n    /**\n     * \u6839\u636ekey \u83b7\u53d6\u8fc7\u671f\u65f6\u95f4\n     *\n     * @param key \u952e \u4e0d\u80fd\u4e3anull\n     * @return \u65f6\u95f4(\u79d2) \u8fd4\u56de0\u4ee3\u8868\u4e3a\u6c38\u4e45\u6709\u6548\n     */\n    public long getExpire(String key) {\n        return redisTemplate.getExpire(key, TimeUnit.SECONDS);\n    }\n\n    /**\n     * \u5224\u65adkey\u662f\u5426\u5b58\u5728\n     *\n     * @param key \u952e\n     * @return true \u5b58\u5728 false\u4e0d\u5b58\u5728\n     */\n    public boolean hasKey(String key) {\n        try {\n            return redisTemplate.hasKey(key);\n        } catch (Exception e) {\n            e.printStackTrace();\n            return false;\n        }\n    }\n\n    /**\n     * \u5220\u9664\u7f13\u5b58\n     *\n     * @param key \u53ef\u4ee5\u4f20\u4e00\u4e2a\u503c \u6216\u591a\u4e2a\n     */\n    @SuppressWarnings("unchecked")\n    public void del(String... key) {\n        if (key != null && key.length > 0) {\n            if (key.length == 1) {\n                redisTemplate.delete(key[0]);\n            } else {\n                redisTemplate.delete(CollectionUtils.arrayToList(key));\n            }\n        }\n    }\n\n    // ============================String=============================\n\n    /**\n     * \u666e\u901a\u7f13\u5b58\u83b7\u53d6\n     *\n     * @param key \u952e\n     * @return \u503c\n     */\n    public Object get(String key) {\n        return key == null ? null : redisTemplate.opsForValue().get(key);\n    }\n\n    /**\n     * \u666e\u901a\u7f13\u5b58\u653e\u5165\n     *\n     * @param key   \u952e\n     * @param value \u503c\n     * @return true\u6210\u529f false\u5931\u8d25\n     */\n    public boolean set(String key, Object value) {\n        try {\n            redisTemplate.opsForValue().set(key, value);\n            return true;\n        } catch (Exception e) {\n            e.printStackTrace();\n            return false;\n        }\n    }\n\n    /**\n     * \u666e\u901a\u7f13\u5b58\u653e\u5165\u5e76\u8bbe\u7f6e\u65f6\u95f4\n     *\n     * @param key   \u952e\n     * @param value \u503c\n     * @param time  \u65f6\u95f4(\u79d2) time\u8981\u5927\u4e8e0 \u5982\u679ctime\u5c0f\u4e8e\u7b49\u4e8e0 \u5c06\u8bbe\u7f6e\u65e0\u9650\u671f\n     * @return true\u6210\u529f false \u5931\u8d25\n     */\n    public boolean set(String key, Object value, long time) {\n        try {\n            if (time > 0) {\n                redisTemplate.opsForValue().set(key, value, time, TimeUnit.SECONDS);\n            } else {\n                set(key, value);\n            }\n            return true;\n        } catch (Exception e) {\n            e.printStackTrace();\n            return false;\n        }\n    }\n\n    /**\n     * \u9012\u589e\n     *\n     * @param key   \u952e\n     * @param delta \u8981\u589e\u52a0\u51e0(\u5927\u4e8e0)\n     */\n    public long incr(String key, long delta) {\n        if (delta < 0) {\n            throw new RuntimeException("\u9012\u589e\u56e0\u5b50\u5fc5\u987b\u5927\u4e8e0");\n        }\n        return redisTemplate.opsForValue().increment(key, delta);\n    }\n\n    /**\n     * \u9012\u51cf\n     *\n     * @param key   \u952e\n     * @param delta \u8981\u51cf\u5c11\u51e0(\u5c0f\u4e8e0)\n     */\n    public long decr(String key, long delta) {\n        if (delta < 0) {\n            throw new RuntimeException("\u9012\u51cf\u56e0\u5b50\u5fc5\u987b\u5927\u4e8e0");\n        }\n        return redisTemplate.opsForValue().increment(key, -delta);\n    }\n\n    // ================================Map=================================\n\n    /**\n     * HashGet\n     *\n     * @param key  \u952e \u4e0d\u80fd\u4e3anull\n     * @param item \u9879 \u4e0d\u80fd\u4e3anull\n     */\n    public Object hget(String key, String item) {\n        return redisTemplate.opsForHash().get(key, item);\n    }\n\n    /**\n     * \u83b7\u53d6hashKey\u5bf9\u5e94\u7684\u6240\u6709\u952e\u503c\n     *\n     * @param key \u952e\n     * @return \u5bf9\u5e94\u7684\u591a\u4e2a\u952e\u503c\n     */\n    public Map<Object, Object> hmget(String key) {\n        return redisTemplate.opsForHash().entries(key);\n    }\n\n    /**\n     * HashSet\n     *\n     * @param key \u952e\n     * @param map \u5bf9\u5e94\u591a\u4e2a\u952e\u503c\n     */\n    public boolean hmset(String key, Map<String, Object> map) {\n        try {\n            redisTemplate.opsForHash().putAll(key, map);\n            return true;\n        } catch (Exception e) {\n            e.printStackTrace();\n            return false;\n        }\n    }\n\n    /**\n     * HashSet \u5e76\u8bbe\u7f6e\u65f6\u95f4\n     *\n     * @param key  \u952e\n     * @param map  \u5bf9\u5e94\u591a\u4e2a\u952e\u503c\n     * @param time \u65f6\u95f4(\u79d2)\n     * @return true\u6210\u529f false\u5931\u8d25\n     */\n    public boolean hmset(String key, Map<String, Object> map, long time) {\n        try {\n            redisTemplate.opsForHash().putAll(key, map);\n            if (time > 0) {\n                expire(key, time);\n            }\n            return true;\n        } catch (Exception e) {\n            e.printStackTrace();\n            return false;\n        }\n    }\n\n    /**\n     * \u5411\u4e00\u5f20hash\u8868\u4e2d\u653e\u5165\u6570\u636e,\u5982\u679c\u4e0d\u5b58\u5728\u5c06\u521b\u5efa\n     *\n     * @param key   \u952e\n     * @param item  \u9879\n     * @param value \u503c\n     * @return true \u6210\u529f false\u5931\u8d25\n     */\n    public boolean hset(String key, String item, Object value) {\n        try {\n            redisTemplate.opsForHash().put(key, item, value);\n            return true;\n        } catch (Exception e) {\n            e.printStackTrace();\n            return false;\n        }\n    }\n\n    /**\n     * \u5411\u4e00\u5f20hash\u8868\u4e2d\u653e\u5165\u6570\u636e,\u5982\u679c\u4e0d\u5b58\u5728\u5c06\u521b\u5efa\n     *\n     * @param key   \u952e\n     * @param item  \u9879\n     * @param value \u503c\n     * @param time  \u65f6\u95f4(\u79d2) \u6ce8\u610f:\u5982\u679c\u5df2\u5b58\u5728\u7684hash\u8868\u6709\u65f6\u95f4,\u8fd9\u91cc\u5c06\u4f1a\u66ff\u6362\u539f\u6709\u7684\u65f6\u95f4\n     * @return true \u6210\u529f false\u5931\u8d25\n     */\n    public boolean hset(String key, String item, Object value, long time) {\n        try {\n            redisTemplate.opsForHash().put(key, item, value);\n            if (time > 0) {\n                expire(key, time);\n            }\n            return true;\n        } catch (Exception e) {\n            e.printStackTrace();\n            return false;\n        }\n    }\n\n    /**\n     * \u5220\u9664hash\u8868\u4e2d\u7684\u503c\n     *\n     * @param key  \u952e \u4e0d\u80fd\u4e3anull\n     * @param item \u9879 \u53ef\u4ee5\u4f7f\u591a\u4e2a \u4e0d\u80fd\u4e3anull\n     */\n    public void hdel(String key, Object... item) {\n        redisTemplate.opsForHash().delete(key, item);\n    }\n\n    /**\n     * \u5224\u65adhash\u8868\u4e2d\u662f\u5426\u6709\u8be5\u9879\u7684\u503c\n     *\n     * @param key  \u952e \u4e0d\u80fd\u4e3anull\n     * @param item \u9879 \u4e0d\u80fd\u4e3anull\n     * @return true \u5b58\u5728 false\u4e0d\u5b58\u5728\n     */\n    public boolean hHasKey(String key, String item) {\n        return redisTemplate.opsForHash().hasKey(key, item);\n    }\n\n    /**\n     * hash\u9012\u589e \u5982\u679c\u4e0d\u5b58\u5728,\u5c31\u4f1a\u521b\u5efa\u4e00\u4e2a \u5e76\u628a\u65b0\u589e\u540e\u7684\u503c\u8fd4\u56de\n     *\n     * @param key  \u952e\n     * @param item \u9879\n     * @param by   \u8981\u589e\u52a0\u51e0(\u5927\u4e8e0)\n     */\n    public double hincr(String key, String item, double by) {\n        return redisTemplate.opsForHash().increment(key, item, by);\n    }\n\n    /**\n     * hash\u9012\u51cf\n     *\n     * @param key  \u952e\n     * @param item \u9879\n     * @param by   \u8981\u51cf\u5c11\u8bb0(\u5c0f\u4e8e0)\n     */\n    public double hdecr(String key, String item, double by) {\n        return redisTemplate.opsForHash().increment(key, item, -by);\n    }\n\n    // ============================set=============================\n\n    /**\n     * \u6839\u636ekey\u83b7\u53d6Set\u4e2d\u7684\u6240\u6709\u503c\n     *\n     * @param key \u952e\n     */\n    public Set<Object> sGet(String key) {\n        try {\n            return redisTemplate.opsForSet().members(key);\n        } catch (Exception e) {\n            e.printStackTrace();\n            return null;\n        }\n    }\n\n    /**\n     * \u6839\u636evalue\u4ece\u4e00\u4e2aset\u4e2d\u67e5\u8be2,\u662f\u5426\u5b58\u5728\n     *\n     * @param key   \u952e\n     * @param value \u503c\n     * @return true \u5b58\u5728 false\u4e0d\u5b58\u5728\n     */\n    public boolean sHasKey(String key, Object value) {\n        try {\n            return redisTemplate.opsForSet().isMember(key, value);\n        } catch (Exception e) {\n            e.printStackTrace();\n            return false;\n        }\n    }\n\n    /**\n     * \u5c06\u6570\u636e\u653e\u5165set\u7f13\u5b58\n     *\n     * @param key    \u952e\n     * @param values \u503c \u53ef\u4ee5\u662f\u591a\u4e2a\n     * @return \u6210\u529f\u4e2a\u6570\n     */\n    public long sSet(String key, Object... values) {\n        try {\n            return redisTemplate.opsForSet().add(key, values);\n        } catch (Exception e) {\n            e.printStackTrace();\n            return 0;\n        }\n    }\n\n    /**\n     * \u5c06set\u6570\u636e\u653e\u5165\u7f13\u5b58\n     *\n     * @param key    \u952e\n     * @param time   \u65f6\u95f4(\u79d2)\n     * @param values \u503c \u53ef\u4ee5\u662f\u591a\u4e2a\n     * @return \u6210\u529f\u4e2a\u6570\n     */\n    public long sSetAndTime(String key, long time, Object... values) {\n        try {\n            Long count = redisTemplate.opsForSet().add(key, values);\n            if (time > 0) {\n                expire(key, time);\n            }\n            return count;\n        } catch (Exception e) {\n            e.printStackTrace();\n            return 0;\n        }\n    }\n\n    /**\n     * \u83b7\u53d6set\u7f13\u5b58\u7684\u957f\u5ea6\n     *\n     * @param key \u952e\n     */\n    public long sGetSetSize(String key) {\n        try {\n            return redisTemplate.opsForSet().size(key);\n        } catch (Exception e) {\n            e.printStackTrace();\n            return 0;\n        }\n    }\n\n    /**\n     * \u79fb\u9664\u503c\u4e3avalue\u7684\n     *\n     * @param key    \u952e\n     * @param values \u503c \u53ef\u4ee5\u662f\u591a\u4e2a\n     * @return \u79fb\u9664\u7684\u4e2a\u6570\n     */\n    public long setRemove(String key, Object... values) {\n        try {\n            Long count = redisTemplate.opsForSet().remove(key, values);\n            return count;\n        } catch (Exception e) {\n            e.printStackTrace();\n            return 0;\n        }\n    }\n\n    // ===============================list=================================\n\n    /***\n     * \u83b7\u53d6list\u7f13\u5b58\u7684\u5185\u5bb9\n     * @param key   \u952e\n     * @param start \u5f00\u59cb\n     * @param end   \u7ed3\u675f 0 \u5230 -1\u4ee3\u8868\u6240\u6709\u503c\n     */\n    public List<Object> lGet(String key, long start, long end) {\n        try {\n            return redisTemplate.opsForList().range(key, start, end);\n        } catch (Exception e) {\n            e.printStackTrace();\n            return null;\n        }\n    }\n\n    /**\n     * \u83b7\u53d6list\u7f13\u5b58\u7684\u957f\u5ea6\n     *\n     * @param key \u952e\n     */\n    public long lGetListSize(String key) {\n        try {\n            return redisTemplate.opsForList().size(key);\n        } catch (Exception e) {\n            e.printStackTrace();\n            return 0;\n        }\n    }\n\n    /**\n     * \u901a\u8fc7\u7d22\u5f15 \u83b7\u53d6list\u4e2d\u7684\u503c\n     *\n     * @param key   \u952e\n     * @param index \u7d22\u5f15 index>=0\u65f6\uff0c 0 \u8868\u5934\uff0c1 \u7b2c\u4e8c\u4e2a\u5143\u7d20\uff0c\u4f9d\u6b21\u7c7b\u63a8\uff1bindex<0 \u65f6\uff0c-1\uff0c\u8868\u5c3e\uff0c-2\u5012\u6570\u7b2c\u4e8c\u4e2a\u5143\u7d20\uff0c\u4f9d\u6b21\u7c7b\u63a8\n     */\n    public Object lGetIndex(String key, long index) {\n        try {\n            return redisTemplate.opsForList().index(key, index);\n        } catch (Exception e) {\n            e.printStackTrace();\n            return null;\n        }\n    }\n\n    /**\n     * \u5c06list\u653e\u5165\u7f13\u5b58\n     *\n     * @param key   \u952e\n     * @param value \u503c\n     */\n    public boolean lSet(String key, Object value) {\n        try {\n            redisTemplate.opsForList().rightPush(key, value);\n            return true;\n        } catch (Exception e) {\n            e.printStackTrace();\n            return false;\n        }\n    }\n\n    /**\n     * \u5c06list\u653e\u5165\u7f13\u5b58\n     *\n     * @param key   \u952e\n     * @param value \u503c\n     * @param time  \u65f6\u95f4(\u79d2)\n     */\n    public boolean lSet(String key, Object value, long time) {\n        try {\n            redisTemplate.opsForList().rightPush(key, value);\n            if (time > 0) {\n                expire(key, time);\n            }\n            return true;\n        } catch (Exception e) {\n            e.printStackTrace();\n            return false;\n        }\n    }\n\n    /**\n     * \u5c06list\u653e\u5165\u7f13\u5b58\n     *\n     * @param key   \u952e\n     * @param value \u503c\n     * @return\n     */\n    public boolean lSet(String key, List<Object> value) {\n        try {\n            redisTemplate.opsForList().rightPushAll(key, value);\n            return true;\n        } catch (Exception e) {\n            e.printStackTrace();\n            return false;\n        }\n    }\n\n    /**\n     * \u5c06list\u653e\u5165\u7f13\u5b58\n     *\n     * @param key   \u952e\n     * @param value \u503c\n     * @param time  \u65f6\u95f4(\u79d2)\n     * @return\n     */\n    public boolean lSet(String key, List<Object> value, long time) {\n        try {\n            redisTemplate.opsForList().rightPushAll(key, value);\n            if (time > 0) {\n                expire(key, time);\n            }\n            return true;\n        } catch (Exception e) {\n            e.printStackTrace();\n            return false;\n        }\n    }\n\n    /**\n     * \u6839\u636e\u7d22\u5f15\u4fee\u6539list\u4e2d\u7684\u67d0\u6761\u6570\u636e\n     *\n     * @param key   \u952e\n     * @param index \u7d22\u5f15\n     * @param value \u503c\n     * @return\n     */\n    public boolean lUpdateIndex(String key, long index, Object value) {\n        try {\n            redisTemplate.opsForList().set(key, index, value);\n            return true;\n        } catch (Exception e) {\n            e.printStackTrace();\n            return false;\n        }\n    }\n\n    /**\n     * \u79fb\u9664N\u4e2a\u503c\u4e3avalue\n     *\n     * @param key   \u952e\n     * @param count \u79fb\u9664\u591a\u5c11\u4e2a\n     * @param value \u503c\n     * @return \u79fb\u9664\u7684\u4e2a\u6570\n     */\n    public long lRemove(String key, long count, Object value) {\n        try {\n            Long remove = redisTemplate.opsForList().remove(key, count, value);\n            return remove;\n        } catch (Exception e) {\n            e.printStackTrace();\n            return 0;\n        }\n    }\n}\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u4e4b\u540e\u53ef\u4ee5\u7528\u5de5\u5177\u7c7b\u8fdb\u884cRedis\u64cd\u4f5c\uff0c\u5b83\u5e95\u5c42\u8c03\u7528\u6211\u4eec\u81ea\u5b9a\u4e49\u7684RedisTemplate\u8fdb\u884credis\u64cd\u4f5c"))))}s.isMDXComponent=!0},565:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),s=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,d=u["".concat(l,".").concat(m)]||u[m]||b[m]||i;return t?a.a.createElement(d,o(o({ref:n},c),{},{components:t})):a.a.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);