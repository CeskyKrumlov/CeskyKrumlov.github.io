(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{372:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),c=(n(0),n(565)),b={id:"9.functionalInterface",title:"\u51fd\u6570\u5f0f\u63a5\u53e3",hide_title:!0},l={unversionedId:"javase/9.functionalInterface",id:"javase/9.functionalInterface",isDocsHomePage:!1,title:"\u51fd\u6570\u5f0f\u63a5\u53e3",description:"\u56db\u5927\u51fd\u6570\u5f0f\u63a5\u53e3",source:"@site/docs/javase/9.\u51fd\u6570\u5f0f\u63a5\u53e3.md",slug:"/javase/9.functionalInterface",permalink:"/docs/javase/9.functionalInterface",version:"current",sidebar:"someSidebar",previous:{title:"\u65b9\u6cd5\u5f15\u7528",permalink:"/docs/javase/9.methodReference"},next:{title:"Stream\u6d41\u5f0f\u7f16\u7a0b",permalink:"/docs/javase/9.stream"}},i=[{value:"\u56db\u5927\u51fd\u6570\u5f0f\u63a5\u53e3",id:"\u56db\u5927\u51fd\u6570\u5f0f\u63a5\u53e3",children:[]},{value:"Function\u2014\u2014\u51fd\u6570\u578b\u63a5\u53e3",id:"function\u51fd\u6570\u578b\u63a5\u53e3",children:[]},{value:"Predicate\u2014\u2014\u65ad\u5b9a\u578b\u63a5\u53e3",id:"predicate\u65ad\u5b9a\u578b\u63a5\u53e3",children:[]},{value:"Consumer\u2014\u2014\u6d88\u8d39\u578b\u63a5\u53e3",id:"consumer\u6d88\u8d39\u578b\u63a5\u53e3",children:[]},{value:"Supplier\u2014\u2014\u4f9b\u7ed9\u578b\u63a5\u53e3",id:"supplier\u4f9b\u7ed9\u578b\u63a5\u53e3",children:[]}],o={rightToc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"\u56db\u5927\u51fd\u6570\u5f0f\u63a5\u53e3"},"\u56db\u5927\u51fd\u6570\u5f0f\u63a5\u53e3"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u4e00\u4e9b\u6bd4\u8f83\u65b0\u7684\u7f16\u7a0b\u7279\u6027\uff1aLambda\u8868\u8fbe\u5f0f\u3001\u94fe\u5f0f\u7f16\u7a0b\u3001\u51fd\u6570\u5f0f\u63a5\u53e3\u3001Stream\u6d41\u5f0f\u8ba1\u7b97")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u51fd\u6570\u5f0f\u63a5\u53e3\uff1a\u53ea\u6709\u4e00\u4e2a\u65b9\u6cd5\u7684\u63a5\u53e3"))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u7b80\u5316\u7f16\u7a0b\u6a21\u578b\uff0c\u5728\u65b0\u7248\u672c\u7684\u6846\u67b6\u5e95\u5c42\u5927\u91cf\u5e94\u7528")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u4f8b\u5982",Object(c.b)("inlineCode",{parentName:"p"},"foreach(Consumer)"),"\uff0c\u53c2\u6570\u5c31\u662f\u4e00\u4e2a\u6d88\u8d39\u8005\u7c7b\u7684\u51fd\u6570\u662f\u63a5\u53e3")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u56db\u5927\u51fd\u6570\u5f0f\u63a5\u53e3\uff1a")),Object(c.b)("ol",Object(a.a)({parentName:"blockquote"},{start:3}),Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"Function"),"\u2014\u2014\u51fd\u6570\u578b\u63a5\u53e3"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"Predicate"),"\u2014\u2014\u65ad\u5b9a\u578b\u63a5\u53e3"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"Consumer"),"\u2014\u2014\u6d88\u8d39\u578b\u63a5\u53e3"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"Supplier"),"\u2014\u2014\u4f9b\u7ed9\u578b\u63a5\u53e3"))),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u51fd\u6570\u5f0f\u63a5\u53e3"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u53c2\u6570\u7c7b\u578b"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u8fd4\u56de\u7c7b\u578b"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u7528\u9014"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Consumer"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"T"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5bf9\u7c7b\u578b\u4e3aT\u7684\u5bf9\u8c61\u5e94\u7528\u64cd\u4f5c void accept(T t)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Supplier"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u65e0"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"T"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u8fd4\u56de\u7c7b\u578b\u4e3aT\u7684\u5bf9\u8c61 T get()")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Function<T, R>"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"T"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"R"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5bf9\u7c7b\u578b\u4e3aT\u7684\u5bf9\u8c61\u5e94\u7528\u64cd\u4f5c\uff0c\u8fd4\u56de\u7c7b\u578b\u4e3aR\u7684\u5bf9\u8c61 R apply(T t)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Predicate"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"T"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Boolean"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5224\u65ad\u7c7b\u578b\u4e3aT\u7684\u5bf9\u8c61\u662f\u5426\u6ee1\u8db3\u7ea6\u675f\uff0c\u8fd4\u56deBoolean\u7ed3\u679c Boolean test(T t)")))),Object(c.b)("h1",{id:"function\u51fd\u6570\u578b\u63a5\u53e3"},"Function\u2014\u2014\u51fd\u6570\u578b\u63a5\u53e3"),Object(c.b)("blockquote",null,Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u6e90\u7801")),Object(c.b)("pre",{parentName:"blockquote"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"@FunctionalInterface\npublic interface Function<T, R> {\n\n    /**\n     * Applies this function to the given argument.\n     *\n     * @param t the function argument\n     * @return the function result\n     */\n    R apply(T t);\n    ...\n")),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u5373\uff0c\u4f20\u5165\u4e00\u4e2a\u53c2\u6570T\uff0c\u8fd4\u56de\u4e00\u4e2aR"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"apply(T t)")))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"new Function()"),"\u5373\u662f\u533f\u540d\u5185\u90e8\u7c7b\u7684\u5199\u6cd5")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testFunction() {\n    Function function = new Function<String, String>() {\n      @Override\n      public String apply(String str) {\n        return str;\n      }\n    };\n  \n    Object apply = function.apply("AAA");\n    System.out.println(apply);\n}  \n')),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"Lambda\u8868\u8fbe\u5f0f\u5199\u6cd5"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testLambda() {\n    Function function = (str) -> {\n      return str + "\u56de\u6765\u4e86";\n    };\n  \n    System.out.println(function.apply("A"));\n}  \n')),Object(c.b)("h1",{id:"predicate\u65ad\u5b9a\u578b\u63a5\u53e3"},"Predicate\u2014\u2014\u65ad\u5b9a\u578b\u63a5\u53e3"),Object(c.b)("blockquote",null,Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u53ea\u6709\u4e00\u4e2a\u8f93\u5165\u53c2\u6570"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"test()"),"\u65b9\u6cd5"),Object(c.b)("li",{parentName:"ul"},"\u8fd4\u56de\u4e00\u4e2aBoolean"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testPredicate() {\n    Predicate<String> predicate = new Predicate<String>() {\n      @Override\n      public boolean test(String str) {\n        return str.isEmpty();\n      }\n    };\n  \n    System.out.println(predicate.test(""));\n}\n')),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Lambda\u8868\u8fbe\u5f0f\u5b9e\u73b0")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testPredicateLambda() {\n    Predicate<String> predicate = (str) -> {\n      return str.isEmpty();\n    };\n  \n    System.out.println(predicate.test(""));\n}\n')),Object(c.b)("h1",{id:"consumer\u6d88\u8d39\u578b\u63a5\u53e3"},"Consumer\u2014\u2014\u6d88\u8d39\u578b\u63a5\u53e3"),Object(c.b)("blockquote",null,Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u4e00\u4e2a\u8f93\u5165\u53c2\u6570"),Object(c.b)("li",{parentName:"ul"},"\u6ca1\u6709\u8fd4\u56de\u503c"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"accept()")))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void consumer() {\n    Consumer<String> consumer = new Consumer<String>() {\n      @Override\n      public void accept(String s) {\n        System.out.println(s);\n      }\n    };\n  \n    consumer.accept("\u6253\u5370\u6211");\n}\n')),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Lambda\u8868\u8fbe\u5f0f")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void consumerLambda() {\n    Consumer<String> consumer = (str)->{\n      System.out.println(str);\n    };\n  \n    consumer.accept("\u6253\u5370\u6211\uff01");\n}\n')),Object(c.b)("h1",{id:"supplier\u4f9b\u7ed9\u578b\u63a5\u53e3"},"Supplier\u2014\u2014\u4f9b\u7ed9\u578b\u63a5\u53e3"),Object(c.b)("blockquote",null,Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u6ca1\u6709\u8f93\u5165\u53c2\u6570"),Object(c.b)("li",{parentName:"ul"},"\u53ea\u6709\u8fd4\u56de\u53c2\u6570"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"get()")))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testSupplier() {\n    Supplier<String> supplier = new Supplier<String>() {\n      @Override\n      public String get() {\n        return "\u8fd4\u56de\u6211";\n      }\n    };\n  \n    System.out.println(supplier.get());\n}\n')),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Lambda\u8868\u8fbe\u5f0f")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testSupplierLambda() {\n    Supplier supplier = () -> {\n      return "\u6253\u5370\u6211 lambda";\n    };\n  \n    System.out.println(supplier.get());\n}  \n')))}p.isMDXComponent=!0},565:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(n),O=a,m=u["".concat(b,".").concat(O)]||u[O]||j[O]||c;return n?r.a.createElement(m,l(l({ref:t},o),{},{components:n})):r.a.createElement(m,l({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,b=new Array(c);b[0]=O;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,b[1]=l;for(var o=2;o<c;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);