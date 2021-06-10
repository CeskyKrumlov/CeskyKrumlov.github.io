(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{315:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return c}));var r=t(2),a=t(6),i=(t(0),t(417)),s={id:"15.mailTask",title:"\u90ae\u4ef6\u4efb\u52a1",hide_title:!0},l={unversionedId:"springboot/15.mailTask",id:"springboot/15.mailTask",isDocsHomePage:!1,title:"\u90ae\u4ef6\u4efb\u52a1",description:"\u90ae\u4ef6\u4efb\u52a1",source:"@site/docs/springboot/15.\u90ae\u4ef6\u4efb\u52a1.md",slug:"/springboot/15.mailTask",permalink:"/docs/springboot/15.mailTask",version:"current",sidebar:"someSidebar",previous:{title:"\u5f02\u6b65\u4efb\u52a1",permalink:"/docs/springboot/14.asynTask"},next:{title:"\u5b9a\u65f6\u4efb\u52a1",permalink:"/docs/springboot/16.timeTask"}},o=[{value:"\u90ae\u4ef6\u4efb\u52a1",id:"\u90ae\u4ef6\u4efb\u52a1",children:[]}],p={rightToc:o};function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u90ae\u4ef6\u4efb\u52a1"},"\u90ae\u4ef6\u4efb\u52a1"),Object(i.b)("p",null,"\u5bfc\u5165\u4f9d\u8d56"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n   <groupId>org.springframework.boot</groupId>\n   <artifactId>spring-boot-starter-mail</artifactId>\n</dependency>\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"SpringBoot\u914d\u7f6e\u6587\u4ef6")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"# \u65b0\u6d6a\u90ae\u7bb1\nspring.mail.host=smtp.sina.com # \u90ae\u7bb1\u4e3b\u673a\uff0c\u6839\u636e\u4f7f\u7528\u7684\u90ae\u7bb1\u5382\u5546\u66f4\u6362\nspring.mail.username=soulmatexiaoyu@sina.com # \u81ea\u5df1\u7684\u90ae\u7bb1\u5730\u5740\nspring.mail.password= # \u767b\u9646\u90ae\u7bb1\u624b\u52a8\u5f00\u542fPOP3/SMTP\u540e\u83b7\u5f97\u7684\u9057\u4f20\u5bc6\u7801\nspring.mail.port=465\nspring.mail.protocol=smtps\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Controller")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Component\nclass AsyncTask {\n\n    private JavaMailSenderImpl mailSender;\n    private MailSender sender;\n    private MailProperties mailProperties;\n\n    public AsyncTask(MailSender sender, MailProperties mailProperties, JavaMailSenderImpl mailSender) {\n        this.sender = sender;\n        this.mailProperties = mailProperties;\n        this.mailSender = mailSender;\n    }\n\n    @Async\n    public void sendMail(String address, String title, String content) {\n        SimpleMailMessage mailMessage = new SimpleMailMessage();\n        mailMessage.setFrom(mailProperties.getUsername());\n        mailMessage.setSubject(title);\n        mailMessage.setTo(address);\n        mailMessage.setText(content);\n\n        sender.send(mailMessage);\n        System.out.println("\u5f02\u6b65\u53d1\u9001\u90ae\u4ef6\u51fd\u6570");\n    }\n\n    @Async\n    public void sendComplexMail(String address, String title, String content) throws MessagingException {\n        //\u90ae\u4ef6\u8bbe\u7f6e2\uff1a\u4e00\u4e2a\u590d\u6742\u7684\u90ae\u4ef6\n        MimeMessage mimeMessage = mailSender.createMimeMessage();\n        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);\n\n        helper.setSubject(title);\n        helper.setText(content);\n\n        //\u53d1\u9001\u9644\u4ef6\n        helper.addAttachment("1.jpg", new File(""));\n        helper.addAttachment("2.jpg", new File(""));\n\n        helper.setTo(address);\n        helper.setFrom(mailProperties.getUsername());\n\n        mailSender.send(mimeMessage);\n    }\n}\n\n// ---------------------------------------------------------------\n\n@Controller\n@RequestMapping("/mail")\npublic class MailController {\n    private MailSender sender;\n    private MailProperties mailProperties;\n    private AsyncTask asyncTask;\n\n    public MailController(MailSender sender, MailProperties mailProperties, AsyncTask asyncTask) {\n        this.sender = sender;\n        this.mailProperties = mailProperties;\n        this.asyncTask = asyncTask;\n    }\n\n    @GetMapping("/index")\n    public ModelAndView index() {\n        return new ModelAndView("mail/index");\n    }\n\n    public void sendMail(String address, String title, String content) {\n        SimpleMailMessage mailMessage = new SimpleMailMessage();\n        mailMessage.setFrom(mailProperties.getUsername());\n        mailMessage.setSubject(title);\n        mailMessage.setTo(address);\n        mailMessage.setText(content);\n\n        sender.send(mailMessage);\n    }\n\n    //\u540c\u6b65\u53d1\u9001\u90ae\u4ef6\n    @GetMapping("/send")\n    public ModelAndView send(String address, String title, String content) {\n        this.sendMail(address, title, content);\n        return new ModelAndView("/mail/index");\n    }\n\n    //\u5f02\u6b65\u53d1\u9001\u90ae\u4ef6\n    @ResponseBody\n    @PostMapping("/send/async")\n    public String sendAsync(String address, String title, String content) {\n        asyncTask.sendMail(address, title, content);\n        System.out.println("\u53d1\u9001\u90ae\u4ef6\u5b8c\u6bd5");\n        return "\u53d1\u9001\u6210\u529f";\n    }\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5728\u542f\u52a8\u7a0b\u5e8f\u4e0a\u52a0",Object(i.b)("inlineCode",{parentName:"li"},"@EnableAsync"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@EnableAsync\n@SpringBootApplication\npublic class Springboot08EmailApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(Springboot08EmailApplication.class, args);\n    }\n}\n")))}c.isMDXComponent=!0},417:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),c=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=c(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(t),u=r,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return t?a.a.createElement(g,l(l({ref:n},p),{},{components:t})):a.a.createElement(g,l({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=t[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);