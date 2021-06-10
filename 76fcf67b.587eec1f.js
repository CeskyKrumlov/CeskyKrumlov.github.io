(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{203:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(2),a=(t(0),t(362));const i={id:"9.stream",title:"Stream\u6d41\u5f0f\u7f16\u7a0b",hide_title:!0},u={unversionedId:"javase/9.stream",id:"javase/9.stream",isDocsHomePage:!1,title:"Stream\u6d41\u5f0f\u7f16\u7a0b",description:"Stream\u6d41\u5f0f\u8ba1\u7b97",source:"@site/docs/javase/9.Stream\u6d41\u5f0f\u8ba1\u7b97.md",slug:"/javase/9.stream",permalink:"/docs/javase/9.stream",version:"current",sidebar:"someSidebar",previous:{title:"\u51fd\u6570\u5f0f\u63a5\u53e3",permalink:"/docs/javase/9.functionalInterface"},next:{title:"\u524d\u8a00",permalink:"/docs/jvm/1.jvm"}},c=[{value:"Stream\u6d41\u5f0f\u8ba1\u7b97",id:"stream\u6d41\u5f0f\u8ba1\u7b97",children:[]},{value:"java.util.Stream",id:"javautilstream",children:[]}],s={rightToc:c};function l({components:e,...n}){return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"stream\u6d41\u5f0f\u8ba1\u7b97"},"Stream\u6d41\u5f0f\u8ba1\u7b97"),Object(a.b)("blockquote",null,Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"\u5b58\u50a8",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u96c6\u5408\u3001\u6570\u636e\u5e93"))),Object(a.b)("li",{parentName:"ul"},"\u8ba1\u7b97",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u6d41"))))),Object(a.b)("h1",{id:"javautilstream"},"java.util.Stream"),Object(a.b)("blockquote",null,Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"stream()"),"\u2014\u2014\u5c06\u4e00\u4e2a\u96c6\u5408\u8f6c\u6362\u4e3a\u6d41"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"filter(Predicate)\x02"),"\u2014\u2014\u8fc7\u6ee4"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"map(Function)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"sorted(Comparator)"),"\u2014\u2014\u6392\u5e8f"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"limit(long)"),"\u2014\u2014\u5206\u9875"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"User Pojo")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class User {\n    private int id;\n    private String name;\n    private int age;\n\n    public User(int id, String name, int age) {\n        this.id = id;\n        this.name = name;\n        this.age = age;\n    }\n\n    public User() {\n    }\n\n    @Override\n    public String toString() {\n        return "User{" +\n                "id=" + id +\n                ", name=\'" + name + \'\\\'\' +\n                ", age=" + age +\n                \'}\';\n    }\n\n    public int getId() {\n        return id;\n    }\n\n    public void setId(int id) {\n        this.id = id;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public int getAge() {\n        return age;\n    }\n\n    public void setAge(int age) {\n        this.age = age;\n    }\n}\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"\u9898\u76ee\uff1a")),Object(a.b)("p",{parentName:"blockquote"},"\u8981\u6c42\uff1a\u4e00\u5206\u949f\u5185\u5b8c\u6210\uff0c\u53ea\u7528\u4e00\u884c\u4ee3\u7801"),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"\u73b0\u67095\u4e2a\u7528\u6237\uff0c\u5bf9\u5176\u8fdb\u884c\u7b5b\u9009"),Object(a.b)("li",{parentName:"ul"},"ID\u5fc5\u987b\u662f\u5076\u6570"),Object(a.b)("li",{parentName:"ul"},"\u5e74\u9f84\u5fc5\u987b\u5927\u4e8e23"),Object(a.b)("li",{parentName:"ul"},"\u7528\u6237\u540d\u8f6c\u4e3a\u5927\u5199\u5b57\u6bcd"),Object(a.b)("li",{parentName:"ul"},"\u7528\u6237\u540d\u5b57\u6bcd\u5012\u7740\u6392\u5e8f"),Object(a.b)("li",{parentName:"ul"},"\u53ea\u80fd\u8f93\u51fa\u4e00\u4e2a\u7528\u6237"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void test() {\n    User user1 = new User(1, "a", 21);\n    User user2 = new User(2, "b", 22);\n    User user3 = new User(3, "c", 23);\n    User user4 = new User(4, "d", 24);\n    User user6 = new User(6, "f", 2\n                          \n    List<User> users = Arrays.asList(user1, user2, user3, user4, user5, user6);\n  \n    // your code\n    \n    // your code\n}\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void test() {\n    User user1 = new User(1, "a", 21);\n    User user2 = new User(2, "b", 22);\n    User user3 = new User(3, "c", 23);\n    User user4 = new User(4, "d", 24);\n    User user5 = new User(5, "e", 25);\n    User user6 = new User(6, "f", 26);\n  \n    List<User> users = Arrays.asList(user1, user2, user3, user4, user5, user6);\n  \n    // your code\n    users.stream()\n      .filter((user) -> {return user.getId() % 2 == 0;})\n      .filter((user) -> {return user.getAge() > 23;})\n      .map((user -> user.getName().toUpperCase()))\n      .sorted((o1, o2) -> {return o2.compareTo(o1);})\n      .limit(1)\n      .forEach(System.out::println);\n    // your code\n}\n')))}l.isMDXComponent=!0},362:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),o=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=o(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=o(t),m=r,d=b["".concat(u,".").concat(m)]||b[m]||p[m]||i;return t?a.a.createElement(d,c(c({ref:n},l),{},{components:t})):a.a.createElement(d,c({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,u=new Array(i);u[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,u[1]=c;for(var l=2;l<i;l++)u[l]=t[l];return a.a.createElement.apply(null,u)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);