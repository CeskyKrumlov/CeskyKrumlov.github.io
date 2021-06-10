(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{214:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),i=(n(0),n(389)),l={id:"9.stream",title:"Stream\u6d41\u5f0f\u7f16\u7a0b",hide_title:!0},c={unversionedId:"javase/9.stream",id:"javase/9.stream",isDocsHomePage:!1,title:"Stream\u6d41\u5f0f\u7f16\u7a0b",description:"Stream\u6d41\u5f0f\u8ba1\u7b97",source:"@site/docs/javase/9.Stream\u6d41\u5f0f\u8ba1\u7b97.md",slug:"/javase/9.stream",permalink:"/docs/javase/9.stream",version:"current",sidebar:"someSidebar",previous:{title:"\u51fd\u6570\u5f0f\u63a5\u53e3",permalink:"/docs/javase/9.functionalInterface"},next:{title:"Optional\u7c7b",permalink:"/docs/javase/9.optionalClass"}},o=[{value:"Stream\u6d41\u5f0f\u8ba1\u7b97",id:"stream\u6d41\u5f0f\u8ba1\u7b97",children:[]},{value:"java.util.Stream",id:"javautilstream",children:[{value:"\u4f8b1",id:"\u4f8b1",children:[]},{value:"\u4f8b2",id:"\u4f8b2",children:[]}]}],b={rightToc:o};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"stream\u6d41\u5f0f\u8ba1\u7b97"},"Stream\u6d41\u5f0f\u8ba1\u7b97"),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u5b58\u50a8",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u96c6\u5408\u3001\u6570\u636e\u5e93"))),Object(i.b)("li",{parentName:"ul"},"\u8ba1\u7b97",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6d41"))))),Object(i.b)("h1",{id:"javautilstream"},"java.util.Stream"),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"stream()"),"\u2014\u2014\u5c06\u4e00\u4e2a\u96c6\u5408\u8f6c\u6362\u4e3a\u6d41"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"filter(Predicate)\x02"),"\u2014\u2014\u8fc7\u6ee4"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"map(Function)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sorted(Comparator)"),"\u2014\u2014\u6392\u5e8f"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"limit(long)"),"\u2014\u2014\u5206\u9875"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"User Pojo")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class User {\n    private int id;\n    private String name;\n    private int age;\n\n    public User(int id, String name, int age) {\n        this.id = id;\n        this.name = name;\n        this.age = age;\n    }\n\n    public User() {\n    }\n\n    @Override\n    public String toString() {\n        return "User{" +\n                "id=" + id +\n                ", name=\'" + name + \'\\\'\' +\n                ", age=" + age +\n                \'}\';\n    }\n\n    public int getId() {\n        return id;\n    }\n\n    public void setId(int id) {\n        this.id = id;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public int getAge() {\n        return age;\n    }\n\n    public void setAge(int age) {\n        this.age = age;\n    }\n}\n')),Object(i.b)("h2",{id:"\u4f8b1"},"\u4f8b1"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u9898\u76ee\uff1a")),Object(i.b)("p",{parentName:"blockquote"},"\u8981\u6c42\uff1a\u4e00\u5206\u949f\u5185\u5b8c\u6210\uff0c\u53ea\u7528\u4e00\u884c\u4ee3\u7801"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u73b0\u67095\u4e2a\u7528\u6237\uff0c\u5bf9\u5176\u8fdb\u884c\u7b5b\u9009"),Object(i.b)("li",{parentName:"ul"},"ID\u5fc5\u987b\u662f\u5076\u6570"),Object(i.b)("li",{parentName:"ul"},"\u5e74\u9f84\u5fc5\u987b\u5927\u4e8e23"),Object(i.b)("li",{parentName:"ul"},"\u7528\u6237\u540d\u8f6c\u4e3a\u5927\u5199\u5b57\u6bcd"),Object(i.b)("li",{parentName:"ul"},"\u7528\u6237\u540d\u5b57\u6bcd\u5012\u7740\u6392\u5e8f"),Object(i.b)("li",{parentName:"ul"},"\u53ea\u80fd\u8f93\u51fa\u4e00\u4e2a\u7528\u6237"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void test() {\n    User user1 = new User(1, "a", 21);\n    User user2 = new User(2, "b", 22);\n    User user3 = new User(3, "c", 23);\n    User user4 = new User(4, "d", 24);\n    User user6 = new User(6, "f", 2\n                          \n    List<User> users = Arrays.asList(user1, user2, user3, user4, user5, user6);\n  \n    // your code\n    \n    // your code\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void test() {\n    User user1 = new User(1, "a", 21);\n    User user2 = new User(2, "b", 22);\n    User user3 = new User(3, "c", 23);\n    User user4 = new User(4, "d", 24);\n    User user5 = new User(5, "e", 25);\n    User user6 = new User(6, "f", 26);\n  \n    List<User> users = Arrays.asList(user1, user2, user3, user4, user5, user6);\n  \n    // your code\n    users.stream()\n      .filter((user) -> {return user.getId() % 2 == 0;})\n      .filter((user) -> {return user.getAge() > 23;})\n      .map((user -> user.getName().toUpperCase()))\n      .sorted((o1, o2) -> {return o2.compareTo(o1);})\n      .limit(1)\n      .forEach(System.out::println);\n    // your code\n}\n')),Object(i.b)("h2",{id:"\u4f8b2"},"\u4f8b2"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u4e3a\u4e86\u6784\u5efa\u6811\u5f62\u7ed3\u6784\uff0c\u5c06",Object(i.b)("inlineCode",{parentName:"p"},"\u5b9e\u4f53\u7c7b"),"\u7684",Object(i.b)("strong",{parentName:"p"},"\u96c6\u5408"),"\u4f53\u53d8\u4e3a",Object(i.b)("inlineCode",{parentName:"p"},"\u5b9e\u4f53\u8282\u70b9\u7c7b"),"\u7684",Object(i.b)("strong",{parentName:"p"},"\u96c6\u5408")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u5c06",Object(i.b)("inlineCode",{parentName:"li"},"\u5b9e\u4f53\u7c7b\u96c6\u5408"),"\u8fdb\u884c\u6d41\u5f0f\u64cd\u4f5c"),Object(i.b)("li",{parentName:"ul"},"\u91c7\u7528",Object(i.b)("inlineCode",{parentName:"li"},"map"),"\u64cd\u4f5c\uff0c\u6765\u5b8c\u6210",Object(i.b)("inlineCode",{parentName:"li"},"\u5b9e\u4f53\u7c7b\u5bf9\u8c61"),"\u5230",Object(i.b)("inlineCode",{parentName:"li"},"\u5b9e\u4f53\u8282\u70b9\u7c7b"),"\u5bf9\u8c61\u7684\u6620\u5c04"),Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"li"},"BeanUtils.copyProperties(source, target)"),"\uff0c\u628asource\u4e2d\u7684\u5c5e\u6027\uff0c\u590d\u5236\u5230target\u7684\u5c5e\u6027\u4e0a"),Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"li"},"collect"),"\u65b9\u6cd5\uff0c\u4f20\u5165\u53c2\u6570\u4e3a",Object(i.b)("inlineCode",{parentName:"li"},"Collector.toList()"),"\uff0c\u628a\u6620\u5c04\u7684\u7ed3\u679c\u6363\u9f13\u4e3a\u4e00\u4e2a",Object(i.b)("inlineCode",{parentName:"li"},"\u96c6\u5408"),"\u8fd4\u56de"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"List<SysOrgNode> sysOrgNodes = sysOrgs.stream().map(item -> {\n    SysOrgNode bean = new SysOrgNode();\n    BeanUtils.copyProperties(item, bean);\n    return bean;\n}).collect(Collectors.toList());\n")))}s.isMDXComponent=!0},389:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,O=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?a.a.createElement(O,c(c({ref:t},b),{},{components:n})):a.a.createElement(O,c({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);